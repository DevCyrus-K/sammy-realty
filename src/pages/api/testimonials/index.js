import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { limit = 10, offset = 0, status = "published" } = req.query;

      const testimonials = await prisma.testimonial.findMany({
        take: parseInt(limit),
        skip: parseInt(offset),
        where: status ? { status } : {},
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
  } else if (req.method === "POST") {
    try {
      const { name, email, rating, content, status = "pending" } = req.body;

      // Validation
      if (!name || !email || !content) {
        return res.status(400).json({ error: "Name, email, and content are required" });
      }

      const testimonial = await prisma.testimonial.create({
        data: {
          name,
          email,
          rating: rating || 5,
          content,
          status,
          type: "Client", // Default type
        },
      });

      return res.status(201).json({
        success: true,
        message: "Testimonial submitted successfully",
        data: testimonial,
      });
    } catch (error) {
      console.error("Testimonial creation error:", error);
      return res.status(500).json({ error: "Failed to create testimonial" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
