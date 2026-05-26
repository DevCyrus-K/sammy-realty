import slugify from "slugify";

export const DEFAULT_PROPERTY_IMAGE = "/img/product-3/1.jpg";
export const DEFAULT_SELLER_NAME = "Sammy Realty";
export const DEFAULT_SELLER_PHONE =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+2348148414913";

export const propertyTypeOptions = ["Sale", "Rent", "Commercial", "Land"];
export const propertyStatusOptions = ["active", "pending", "sold", "draft", "hidden"];

export function cleanString(value) {
  return String(value ?? "").trim();
}

export function clampNumber(value, min, max, fallback) {
  const number = Number(String(value ?? "").replace(/,/g, ""));
  if (!Number.isFinite(number)) return fallback;
  return Math.min(Math.max(number, min), max);
}

export function normalizePropertyType(value) {
  const candidate = cleanString(value) || "Sale";
  return propertyTypeOptions.includes(candidate) ? candidate : "Sale";
}

export function normalizePropertyStatus(value) {
  const candidate = cleanString(value).toLowerCase() || "active";
  return propertyStatusOptions.includes(candidate) ? candidate : "active";
}

export function makeListingSlug(value, id) {
  const base = slugify(cleanString(value) || `property-${id || Date.now()}`, {
    lower: true,
    strict: true,
  });
  return id ? `${base}-${id}` : base;
}

export function getPropertyImageSrc(image) {
  const value = cleanString(image);
  if (!value) return DEFAULT_PROPERTY_IMAGE;
  if (/^(https?:|data:|blob:)/i.test(value) || value.startsWith("/")) {
    return value;
  }
  return `/img/product-3/${value}`;
}

export function normalizeSellerPhone(value) {
  const phone = cleanString(value) || DEFAULT_SELLER_PHONE;
  if (phone.startsWith("+")) return phone;
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("234")) return `+${digits}`;
  if (digits.startsWith("0")) return `+234${digits.slice(1)}`;
  return phone;
}

export function getWhatsappHref(phone, message = "") {
  const digits = normalizeSellerPhone(phone).replace(/\D/g, "");
  const text = cleanString(message);
  return `https://wa.me/${digits}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

export function getCallHref(phone) {
  return `tel:${normalizeSellerPhone(phone)}`;
}

export function splitList(value) {
  if (Array.isArray(value)) {
    return value.map(cleanString).filter(Boolean);
  }
  return cleanString(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function parseArea(value) {
  const match = cleanString(value).match(/(\d[\d,]*)\s*(sqm|sqft|sq ft)?/i);
  return match ? Number(match[1].replace(/,/g, "")) : 0;
}

export function derivePriceRange(price) {
  const amount = Number(price || 0);
  if (amount <= 0) return [];
  if (amount < 5_000_000) return ["Under NGN 5m"];
  if (amount < 20_000_000) return ["NGN 5m - 20m"];
  if (amount < 50_000_000) return ["NGN 20m - 50m"];
  return ["NGN 50m+"];
}

export function normalizePropertyInput(body = {}) {
  const title = cleanString(body.title);
  const location = cleanString(body.address || body.location);
  const areaSqm = clampNumber(body.areaSqm ?? body.sqft ?? body.area, 0, 1000000, 0);
  const amenities = cleanString(body.amenities);
  const propertyType = normalizePropertyType(body.type || body.propertyType);

  return {
    image: getPropertyImageSrc(body.image),
    title,
    slug: cleanString(body.slug) || makeListingSlug(title),
    status: normalizePropertyStatus(body.status),
    location,
    description: cleanString(body.description) || null,
    locationId: clampNumber(body.locationId, 1, 1000000, 1),
    bedrooms: clampNumber(body.beds ?? body.bedrooms, 0, 100, 0),
    bathrooms: clampNumber(body.baths ?? body.bathrooms, 0, 100, 0),
    amenities: amenities || null,
    areaSqm: areaSqm || null,
    price: clampNumber(body.price, 0, 999999999999, 0),
    agentId: clampNumber(body.agentId, 1, 1000000, 1),
    agentImage: cleanString(body.agentImage) || null,
    propertyType,
    featured: Boolean(body.featured),
    owner: cleanString(body.owner) || DEFAULT_SELLER_NAME,
    phone: normalizeSellerPhone(body.phone),
  };
}

export function toListingResource(record = {}) {
  const photos = Array.isArray(record.photos)
    ? record.photos
        .slice()
        .sort((a, b) => Number(a.order || 0) - Number(b.order || 0))
        .map((photo) => ({
          id: Number(photo.id),
          url: getPropertyImageSrc(photo.url),
          order: Number(photo.order || 0),
        }))
    : [];
  const image = getPropertyImageSrc(record.image || photos[0]?.url);
  const areaSqm = Number(record.areaSqm ?? parseArea(record.amenities) ?? 0);
  const type = normalizePropertyType(record.propertyType || record.type);
  const status = normalizePropertyStatus(record.status);
  const owner = cleanString(record.owner) || DEFAULT_SELLER_NAME;
  const phone = normalizeSellerPhone(record.phone);
  const id = record.id ? String(record.id) : "";
  const slug = cleanString(record.slug) || makeListingSlug(record.title, id);

  return {
    id,
    slug,
    title: cleanString(record.title) || "Untitled property",
    address: cleanString(record.address || record.location) || "Location pending",
    location: cleanString(record.address || record.location) || "Location pending",
    price: Number(record.price || 0),
    beds: Number(record.beds ?? record.bedrooms ?? 0),
    baths: Number(record.baths ?? record.bathrooms ?? 0),
    sqft: areaSqm,
    areaSqm,
    type,
    propertyType: type,
    status,
    listedDate: cleanString(record.listedDate || record.createdAt) || new Date().toISOString(),
    createdAt: cleanString(record.createdAt) || new Date().toISOString(),
    owner,
    phone,
    image,
    featured: Boolean(record.featured),
    description: cleanString(record.description),
    amenities: splitList(record.amenities),
    photos,
  };
}

export function toStorefrontProduct(record = {}) {
  const listing = record.propertyDetails && record.locantion ? record : toListingResource(record);
  const type = normalizePropertyType(listing.propertyType || listing.type);
  const isRent = type === "Rent";
  const isLand = type === "Land";
  const description =
    typeof listing.description === "object" && listing.description
      ? cleanString(listing.description.fullDescription || listing.description.shortDescription)
      : cleanString(listing.description);
  const amenities = splitList(listing.amenities);
  const photos = Array.isArray(listing.photos) ? listing.photos : [];
  const carousel = photos.length
    ? photos.map((photo) => ({ img: photo.url, url: photo.url }))
    : [{ img: listing.image, url: listing.image }];

  return {
    ...listing,
    productImg: listing.image,
    image: listing.image,
    carousel,
    rent: isRent,
    featured: Boolean(listing.featured),
    new: false,
    photo: photos.length ? photos.map((photo) => photo.url) : [listing.image],
    video: [],
    priceRange: derivePriceRange(listing.price),
    category: [isRent ? "renting" : "buying", isLand ? "land" : "property"],
    propertyTypes: [isLand ? "Land" : type],
    locantion: listing.location || listing.address,
    district: listing.location || listing.address,
    fullDescription: description,
    description: {
      title: "Description",
      fullDescription: description,
      shortDescription: description,
    },
    propertyDetails: {
      propertyId: listing.id ? `SR-${listing.id}` : "SR",
      area: Number(listing.areaSqm || listing.sqft || 0),
      propertyStatus: isRent ? "For Rent" : "For Sale",
      rooms: Number(listing.beds || 0),
      bedrooms: Number(listing.beds || 0),
      baths: Number(listing.baths || 0),
      createdYear: listing.createdAt ? new Date(listing.createdAt).getFullYear() : new Date().getFullYear(),
    },
    factsAndFeatures: {},
    amenities1: amenities.slice(0, 4),
    amenities2: amenities.slice(4, 8),
    amenities3: amenities.slice(8, 12),
    AmenitiesList: amenities,
    gallery: {
      img1: carousel[0]?.url || listing.image,
      img2: carousel[1]?.url || carousel[0]?.url || listing.image,
      img3: carousel[2]?.url || carousel[0]?.url || listing.image,
    },
    agent: {
      fullName: listing.owner,
      phone: listing.phone,
      type: "Property Seller",
    },
  };
}
