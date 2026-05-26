import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({ error: "Token and new password are required" });
  }

  try {
    // Find valid reset token
    const resetToken = await prisma.passwordReset.findFirst({
      where: { token },
    });

    if (!resetToken) {
      return res.status(401).json({ error: "Invalid or expired reset token" });
    }

    // Check if token expired
    if (new Date() > resetToken.expiresAt) {
      return res.status(401).json({ error: "Reset token has expired" });
    }

    // Update user password
    await prisma.user.update({
      where: { email: resetToken.email },
      data: {
        password: newPassword, // TODO: Hash password with bcrypt before storing
      },
    });

    // Delete used reset token
    await prisma.passwordReset.deleteMany({
      where: { token },
    });

    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error("Password reset confirmation error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
