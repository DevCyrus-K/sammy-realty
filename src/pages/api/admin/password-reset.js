import prisma from "@/lib/prisma";
import crypto from "crypto";

export default async function handler(req, res) {
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

    // TODO: Send email with reset link
    // const resetLink = `${process.env.NEXT_PUBLIC_SITE_URL}/admin/reset-password?token=${token}`;

    return res.status(200).json({
      message: "If an account with this email exists, a reset link will be sent",
      // Remove this in production - only for testing
      token: process.env.NODE_ENV === "development" ? token : undefined,
    });
  } catch (error) {
    console.error("Password reset error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
