const RESEND_EMAIL_ENDPOINT = "https://api.resend.com/emails";

export async function sendEmail({ to, subject, html, text, replyTo, tags }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || "Sammy Realty <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn("RESEND_API_KEY is not configured; email was not sent.");
    return { ok: false, skipped: true, reason: "missing_api_key" };
  }

  const recipients = Array.isArray(to) ? to.filter(Boolean) : [to].filter(Boolean);
  if (!recipients.length || !subject || (!html && !text)) {
    return { ok: false, skipped: true, reason: "missing_email_fields" };
  }

  const payload = {
    from,
    to: recipients,
    subject,
    ...(html ? { html } : {}),
    ...(text ? { text } : {}),
    ...(replyTo ? { reply_to: [replyTo] } : {}),
    ...(tags ? { tags } : {}),
  };

  const response = await fetch(RESEND_EMAIL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "sammy-realty-admin/1.0",
    },
    body: JSON.stringify(payload),
  });

  const data = await safeJson(response);
  if (!response.ok) {
    throw new Error(data?.message || data?.error || "Resend email delivery failed");
  }

  return { ok: true, data };
}

export function getAdminEmail() {
  return process.env.ADMIN_NOTIFICATION_EMAIL || process.env.RESEND_REPLY_TO || "info@sammyrealty.com";
}

export function getSiteUrl(req) {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");

  const proto = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host || "localhost:3000";
  return `${proto}://${host}`;
}

export function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function safeJson(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}
