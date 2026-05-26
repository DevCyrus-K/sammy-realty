import { faqs } from "@/lib/mock-data";

/**
 * FAQ API Endpoint
 * Returns FAQs from mock data (can be extended to use database)
 * 
 * GET /api/faqs - Get all FAQs
 * Query params:
 *   - limit: number of results (default: 10)
 *   - offset: skip results (default: 0)
 *   - search: search in question/answer
 */
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { limit = 10, offset = 0, search = "" } = req.query;
    const limitNum = parseInt(limit);
    const offsetNum = parseInt(offset);

    // Filter FAQs by search query if provided
    let filtered = faqs;
    if (search) {
      const searchLower = String(search).toLowerCase();
      filtered = faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchLower) ||
          faq.answer.toLowerCase().includes(searchLower)
      );
    }

    // Apply pagination
    const paginated = filtered.slice(offsetNum, offsetNum + limitNum);

    return res.status(200).json({
      success: true,
      data: paginated,
      pagination: {
        total: filtered.length,
        limit: limitNum,
        offset: offsetNum,
      },
    });
  } catch (error) {
    console.error("FAQs fetch error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
