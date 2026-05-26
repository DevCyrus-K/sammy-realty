import prisma from "@/lib/prisma";
import { escapeHtml, getSiteUrl, sendEmail } from "@/lib/email";
import crypto from "crypto";

export default async function handler(req, res) {
  // Set JSON content type
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (!user) {
      // For security, don't reveal if email exists
      return res.status(200).json({
        message: "If an account with this email exists, a reset link will be sent",
      });
    }

    // Generate reset token
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Store reset token
    await prisma.passwordReset.create({
      data: {
        email,
        token,
        expiresAt,
      },
    });

    const resetLink = `${getSiteUrl(req)}/admin/reset-password?token=${token}`;
    const emailDelivery = await sendEmail({
      to: email,
      subject: "Reset your Sammy Realty admin password",
      html: `
        <h2>Reset your admin password</h2>
        <p>Use this secure link to reset your Sammy Realty admin password. The link expires in 24 hours.</p>
        <p><a href="${escapeHtml(resetLink)}">Reset password</a></p>
      `,
      text: `Reset your Sammy Realty admin password: ${resetLink}`,
      tags: [{ name: "category", value: "password_reset" }],
    }).catch((error) => {
      console.error("Password reset email delivery error:", error);
      return { ok: false, error: error.message };
    });

    return res.status(200).json({
      message: "If an account with this email exists, a reset link will be sent",
      emailDelivery,
      // Remove this in production - only for testing
      token: process.env.NODE_ENV === "development" ? token : undefined,
    });
  } catch (error) {
    console.error("Password reset error:", error);
    return res.status(500).json({
      error: "Internal server error",
      message: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
}
