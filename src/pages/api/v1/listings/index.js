import {
  createListing,
  deleteListing,
  getListingById,
  getListingBySlug,
  getListings,
  updateListing,
} from "@/lib/listing-db";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      return handleGet(req, res);
    }

    if (req.method === "POST") {
      const listing = await createListing(req.body || {});
      return res.status(201).json({
        success: true,
        data: listing,
        message: "Property added successfully",
      });
    }

    if (req.method === "PUT" || req.method === "PATCH") {
      const listing = await updateListing(req.query.id || req.body?.id, req.body || {});
      return res.status(200).json({
        success: true,
        data: listing,
        message: "Property updated successfully",
      });
    }

    if (req.method === "DELETE") {
      await deleteListing(req.query.id || req.body?.id);
      return res.status(200).json({
        success: true,
        message: "Property deleted successfully",
      });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    const statusCode = error.statusCode || (error.code === "P2025" ? 404 : 500);
    const message =
      error.code === "P2025"
        ? "Property not found"
        : statusCode === 500
        ? "Unable to complete this listing request"
        : error.message || "Listing request failed";

    console.error("Listings API error:", error);
    return res.status(statusCode).json({ success: false, error: message });
  }
}

async function handleGet(req, res) {
  const { id, slug } = req.query;

  if (slug) {
    const listing = await getListingBySlug(slug);
    if (!listing) {
      return res.status(404).json({ success: false, error: "Property not found" });
    }
    return res.status(200).json({ success: true, data: listing });
  }

  if (id) {
    const listing = await getListingById(id);
    if (!listing) {
      return res.status(404).json({ success: false, error: "Property not found" });
    }
    return res.status(200).json({ success: true, data: listing });
  }

  const result = await getListings(req.query);
  return res.status(200).json({
    success: true,
    data: result.data,
    pagination: result.pagination,
  });
}
