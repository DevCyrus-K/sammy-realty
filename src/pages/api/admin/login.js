import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  // Handle CORS and method validation
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // For demo purposes, allow demo account
    if (email === "demo@sammy-realty.com" && password === "demo123") {
      return res.status(200).json({
        success: true,
        user: {
          id: 1,
          email: "demo@sammy-realty.com",
        },
      });
    }

    // Try to find user in database
    try {
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          password: true,
        },
      });

      if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      // Simple password comparison
      const isPasswordValid = user.password === password ||
                            user.password === Buffer.from(password).toString('base64');

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      return res.status(200).json({
        success: true,
        user: {
          id: user.id,
          email: user.email,
        },
      });
    } catch (dbError) {
      // If database fails, fall back to demo credentials
      console.error("Database error:", dbError);
      if (email === "demo@sammy-realty.com" && password === "demo123") {
        return res.status(200).json({
          success: true,
          user: {
            id: 1,
            email: "demo@sammy-realty.com",
          },
        });
      }
      return res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      error: "Internal server error",
      message: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
}
