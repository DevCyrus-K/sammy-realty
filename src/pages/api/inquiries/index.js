import prisma from "@/lib/prisma";

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
        propertyId: propertyId ? parseInt(propertyId) : null,
        name,
        email,
        phone: phone || null,
        message,
      },
    });

    // TODO: Send confirmation email to user and notification to admin

    return res.status(201).json({
      success: true,
      data: inquiry,
      message: "Your inquiry has been submitted successfully",
    });
  } catch (error) {
    console.error("Inquiry creation error:", error);
    return res.status(500).json({ error: "Failed to submit inquiry" });
  }
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
