import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { limit = 10, offset = 0 } = req.query;

    const testimonials = await prisma.testimonial.findMany({
      take: parseInt(limit),
      skip: parseInt(offset),
      orderBy: {
        createdAt: "desc",
      },
    });

    const total = await prisma.testimonial.count();

    return res.status(200).json({
      success: true,
      data: testimonials,
      pagination: {
        total,
        limit: parseInt(limit),
        offset: parseInt(offset),
      },
    });
  } catch (error) {
    console.error("Testimonials fetch error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
