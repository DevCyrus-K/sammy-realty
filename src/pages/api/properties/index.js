import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { featured, limit = 10, offset = 0 } = req.query;

    // Build query filter
    const where = {};
    if (featured === "true") {
      where.featured = true;
    }

    // Fetch properties from database
    const properties = await prisma.property.findMany({
      where,
      take: parseInt(limit),
      skip: parseInt(offset),
      orderBy: {
        createdAt: "desc",
      },
    });

    // Get total count
    const total = await prisma.property.count({ where });

    return res.status(200).json({
      success: true,
      data: properties,
      pagination: {
        total,
        limit: parseInt(limit),
        offset: parseInt(offset),
      },
    });
  } catch (error) {
    console.error("Properties fetch error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
