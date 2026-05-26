import prisma from "@/lib/prisma";
import {
  cleanString,
  clampNumber,
  makeListingSlug,
  normalizePropertyInput,
  normalizePropertyStatus,
  normalizePropertyType,
  toListingResource,
} from "@/lib/listing-format";

const listingInclude = {
  photos: {
    orderBy: { order: "asc" },
  },
};

export function buildListingWhere(query = {}) {
  const where = {};
  const featured = cleanString(query.featured);
  const status = cleanString(query.status);
  const type = cleanString(query.type || query.propertyType || query.filter);

  if (featured === "true") {
    where.featured = true;
  }

  if (status && status !== "all") {
    where.status = normalizePropertyStatus(status);
  }

  if (type && type !== "all") {
    if (type.toLowerCase() === "sale") where.propertyType = "Sale";
    if (type.toLowerCase() === "rent") where.propertyType = "Rent";
    if (type.toLowerCase() === "land") where.propertyType = "Land";
    if (type.toLowerCase() === "commercial") where.propertyType = "Commercial";
  }

  return where;
}

export async function getListings(query = {}) {
  const take = clampNumber(query.limit, 1, 200, 24);
  const skip = clampNumber(query.offset, 0, 100000, 0);
  const where = buildListingWhere(query);

  const [records, total] = await Promise.all([
    prisma.property.findMany({
      where,
      take,
      skip,
      include: listingInclude,
      orderBy: { createdAt: "desc" },
    }),
    prisma.property.count({ where }),
  ]);

  return {
    data: records.map(toListingResource),
    pagination: {
      total,
      limit: take,
      offset: skip,
    },
  };
}

export async function getListingById(id) {
  const numericId = clampNumber(id, 1, 100000000, 0);
  if (!numericId) return null;

  const record = await prisma.property.findUnique({
    where: { id: numericId },
    include: listingInclude,
  });

  return record ? toListingResource(record) : null;
}

export async function getListingBySlug(slug) {
  const target = cleanString(slug);
  if (!target) return null;

  const records = await prisma.property.findMany({
    include: listingInclude,
    orderBy: { createdAt: "desc" },
    take: 500,
  });

  const record = records.find((item) => {
    const listing = toListingResource(item);
    return listing.slug === target || listing.id === target;
  });

  return record ? toListingResource(record) : null;
}

export async function createListing(body = {}) {
  const input = normalizePropertyInput(body);

  validateListingInput(input);

  const record = await prisma.property.create({
    data: {
      image: input.image,
      title: input.title,
      slug: input.slug,
      status: input.status,
      location: input.location,
      description: input.description,
      locationId: input.locationId,
      bedrooms: input.bedrooms,
      bathrooms: input.bathrooms,
      amenities: input.amenities,
      areaSqm: input.areaSqm,
      price: input.price,
      agentId: input.agentId,
      agentImage: input.agentImage,
      propertyType: input.propertyType,
      featured: input.featured,
      owner: input.owner,
      phone: input.phone,
    },
    include: listingInclude,
  });

  if (!record.slug || record.slug === makeListingSlug(record.title)) {
    const updated = await prisma.property.update({
      where: { id: record.id },
      data: { slug: makeListingSlug(record.title, record.id) },
      include: listingInclude,
    });
    return toListingResource(updated);
  }

  return toListingResource(record);
}

export async function updateListing(id, body = {}) {
  const numericId = clampNumber(id, 1, 100000000, 0);
  if (!numericId) {
    const error = new Error("Property id is required");
    error.statusCode = 400;
    throw error;
  }

  const input = normalizePropertyInput({
    ...body,
    slug: cleanString(body.slug) || makeListingSlug(body.title, numericId),
  });

  validateListingInput(input);

  const record = await prisma.property.update({
    where: { id: numericId },
    data: {
      image: input.image,
      title: input.title,
      slug: input.slug,
      status: input.status,
      location: input.location,
      description: input.description,
      locationId: input.locationId,
      bedrooms: input.bedrooms,
      bathrooms: input.bathrooms,
      amenities: input.amenities,
      areaSqm: input.areaSqm,
      price: input.price,
      agentId: input.agentId,
      agentImage: input.agentImage,
      propertyType: normalizePropertyType(input.propertyType),
      featured: input.featured,
      owner: input.owner,
      phone: input.phone,
    },
    include: listingInclude,
  });

  return toListingResource(record);
}

export async function deleteListing(id) {
  const numericId = clampNumber(id, 1, 100000000, 0);
  if (!numericId) {
    const error = new Error("Property id is required");
    error.statusCode = 400;
    throw error;
  }

  const result = await prisma.property.deleteMany({
    where: { id: numericId },
  });

  if (!result.count) {
    const error = new Error("Property not found");
    error.statusCode = 404;
    throw error;
  }

  return true;
}

function validateListingInput(input) {
  if (!input.title || !input.location || !input.price) {
    const error = new Error("Title, location, and price are required");
    error.statusCode = 400;
    throw error;
  }

  if (!input.phone) {
    const error = new Error("Seller phone is required");
    error.statusCode = 400;
    throw error;
  }
}
