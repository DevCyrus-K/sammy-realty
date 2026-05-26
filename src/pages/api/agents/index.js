import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { limit = 10, offset = 0 } = req.query;

    const agents = await prisma.agent.findMany({
      take: parseInt(limit),
      skip: parseInt(offset),
      orderBy: {
        createdAt: "desc",
      },
    });

    const total = await prisma.agent.count();

    return res.status(200).json({
      success: true,
      data: agents,
      pagination: {
        total,
        limit: parseInt(limit),
        offset: parseInt(offset),
      },
    });
  } catch (error) {
    console.error("Agents fetch error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
