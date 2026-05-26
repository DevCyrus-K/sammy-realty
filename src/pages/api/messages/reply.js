import { escapeHtml, sendEmail } from "@/lib/email";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { to, senderName, subject, message } = req.body || {};

  if (!to || !message) {
    return res.status(400).json({ error: "Recipient and message are required" });
  }

  try {
    const safeName = escapeHtml(senderName || "there");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const replySubject = subject ? `Re: ${subject}` : "Sammy Realty reply";

    const emailDelivery = await sendEmail({
      to,
      replyTo: process.env.RESEND_REPLY_TO || process.env.ADMIN_NOTIFICATION_EMAIL,
      subject: replySubject,
      html: `
        <p>Hi ${safeName},</p>
        <p>${safeMessage}</p>
        <p>Sammy Realty</p>
      `,
      text: `Hi ${senderName || "there"},\n\n${message}\n\nSammy Realty`,
      tags: [{ name: "category", value: "admin_message_reply" }],
    });

    return res.status(200).json({
      success: true,
      emailDelivery,
      message: "Message sent",
    });
  } catch (error) {
    console.error("Message reply delivery error:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
