import prisma from "@/lib/prisma";
import { escapeHtml, getAdminEmail, sendEmail } from "@/lib/email";

export default async function handler(req, res) {
  if (req.method === "POST") {
    return handleCreateInquiry(req, res);
  } else if (req.method === "GET") {
    return handleGetInquiries(req, res);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}

async function handleCreateInquiry(req, res) {
  const { propertyId, name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  try {
    const inquiry = await prisma.inquiry.create({
      data: {
        propertyId: propertyId ? parseInt(propertyId, 10) : null,
        name: String(name).trim(),
        email: String(email).trim(),
        phone: phone ? String(phone).trim() : null,
        message: String(message).trim(),
      },
      include: {
        property: {
          select: {
            title: true,
            location: true,
          },
        },
      },
    });

    const emailDelivery = await sendInquiryEmails(inquiry).catch((error) => {
      console.error("Inquiry email delivery error:", error);
      return { ok: false, error: error.message };
    });

    return res.status(201).json({
      success: true,
      data: inquiry,
      emailDelivery,
      message: "Your inquiry has been submitted successfully",
    });
  } catch (error) {
    console.error("Inquiry creation error:", error);
    return res.status(500).json({ error: "Failed to submit inquiry" });
  }
}

async function sendInquiryEmails(inquiry) {
  const propertyLabel = inquiry.property
    ? `${inquiry.property.title} - ${inquiry.property.location}`
    : "General inquiry";
  const adminEmail = getAdminEmail();
  const safeName = escapeHtml(inquiry.name);
  const safeEmail = escapeHtml(inquiry.email);
  const safePhone = escapeHtml(inquiry.phone || "Not provided");
  const safeMessage = escapeHtml(inquiry.message).replace(/\n/g, "<br />");
  const safeProperty = escapeHtml(propertyLabel);

  const adminNotification = sendEmail({
    to: adminEmail,
    replyTo: inquiry.email,
    subject: `New property inquiry from ${inquiry.name}`,
    html: `
      <h2>New Sammy Realty inquiry</h2>
      <p><strong>Property:</strong> ${safeProperty}</p>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Message:</strong><br />${safeMessage}</p>
    `,
    text: `New inquiry\nProperty: ${propertyLabel}\nName: ${inquiry.name}\nEmail: ${inquiry.email}\nPhone: ${inquiry.phone || "Not provided"}\nMessage: ${inquiry.message}`,
    tags: [{ name: "category", value: "property_inquiry" }],
  });

  const customerConfirmation = sendEmail({
    to: inquiry.email,
    subject: "Sammy Realty received your property inquiry",
    html: `
      <h2>We received your inquiry</h2>
      <p>Hi ${safeName}, Sammy Realty has received your message about <strong>${safeProperty}</strong>.</p>
      <p>We will follow up quickly. For immediate help, call or WhatsApp +2348148414913.</p>
    `,
    text: `Hi ${inquiry.name}, Sammy Realty received your inquiry about ${propertyLabel}. For immediate help, call or WhatsApp +2348148414913.`,
    tags: [{ name: "category", value: "inquiry_confirmation" }],
  });

  const results = await Promise.allSettled([adminNotification, customerConfirmation]);
  return {
    ok: results.every((result) => result.status === "fulfilled"),
    admin: results[0].status === "fulfilled" ? results[0].value : { ok: false, error: results[0].reason?.message },
    customer: results[1].status === "fulfilled" ? results[1].value : { ok: false, error: results[1].reason?.message },
  };
}

async function handleGetInquiries(req, res) {
  try {
    const { propertyId, limit = 10, offset = 0 } = req.query;

    const where = {};
    if (propertyId) {
      where.propertyId = parseInt(propertyId);
    }

    const inquiries = await prisma.inquiry.findMany({
      where,
      include: {
        property: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      take: parseInt(limit),
      skip: parseInt(offset),
      orderBy: {
        createdAt: "desc",
      },
    });

    const total = await prisma.inquiry.count({ where });

    return res.status(200).json({
      success: true,
      data: inquiries,
      pagination: {
        total,
        limit: parseInt(limit),
        offset: parseInt(offset),
      },
    });
  } catch (error) {
    console.error("Inquiries fetch error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
