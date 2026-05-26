export type PropertyStatus = "active" | "sold" | "pending" | "draft" | "hidden";
export type ListingStatus = "pending" | "approved" | "rejected";
export type MessageStatus = "unread" | "read" | "archived";
export type CustomerStatus = "active" | "pending" | "hidden";
export type TestimonialStatus = "published" | "hidden" | "pending";

export type Property = {
  id: string;
  title: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: "Sale" | "Rent" | "Commercial" | "Land";
  status: PropertyStatus;
  listedDate: string;
  owner: string;
  phone: string;
  image?: string;
};

export type ListingRequest = {
  id: string;
  requester: string;
  email: string;
  phone: string;
  address: string;
  type: string;
  submittedDate: string;
  status: ListingStatus;
  description: string;
};

export type Message = {
  id: string;
  sender: string;
  email: string;
  subject: string;
  preview: string;
  body: string;
  timestamp: string;
  status: MessageStatus;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  lastContact: string;
  tags: string[];
  status: CustomerStatus;
  source: "Buyer" | "Seller" | "Investor" | "Tenant";
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
  order: number;
};

export type Testimonial = {
  id: string;
  reviewer: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
  date: string;
  status: TestimonialStatus;
};

export type ActivityItem = {
  id: string;
  type: "listing" | "message" | "review";
  description: string;
  timestamp: string;
};

const areas = [
  "Ajah, Lagos",
  "Lekki Phase 1, Lagos",
  "Sangotedo, Lagos",
  "Chevron Drive, Lagos",
  "Ikate, Lagos",
  "Victoria Island, Lagos",
];

const propertyTitles = [
  "Greenview Terrace Duplex",
  "Lekki Waterside Apartment",
  "Sangotedo Family Bungalow",
  "Chevron Smart Studio",
  "Ikate Shortlet Suite",
  "Victoria Island Office Floor",
  "Ajah Prime Land",
  "Ocean Pearl Maisonette",
];

export const properties: Property[] = Array.from({ length: 24 }, (_, index) => {
  const type = (["Sale", "Rent", "Commercial", "Land"] as const)[index % 4];
  return {
    id: `property-${index + 1}`,
    title: propertyTitles[index % propertyTitles.length],
    address: `${areas[index % areas.length]}, County ${Math.floor(index / 6) + 1}`,
    price: type === "Rent" ? 1800000 + index * 70000 : 24000000 + index * 1250000,
    beds: type === "Land" || type === "Commercial" ? 0 : (index % 5) + 1,
    baths: type === "Land" ? 0 : (index % 4) + 1,
    sqft: type === "Land" ? 5400 + index * 300 : 850 + index * 120,
    type,
    status: (["active", "pending", "sold", "draft", "hidden"] as PropertyStatus[])[index % 5],
    listedDate: `2026-05-${String((index % 24) + 1).padStart(2, "0")}`,
    owner: ["Sammy Realty", "Tunde Martins", "Amina Yusuf", "Chika Okafor"][index % 4],
    phone: "+2348148414913",
    image: `/img/product-3/${(index % 5) + 1}.jpg`,
  };
});

export const listingRequests: ListingRequest[] = Array.from({ length: 12 }, (_, index) => ({
  id: `request-${index + 1}`,
  requester: ["Ada Eze", "Tunde Martins", "Ifeoma Obi", "Chika Okafor"][index % 4],
  email: `lead${index + 1}@example.com`,
  phone: "+2348148414913",
  address: `${areas[index % areas.length]}, near main road`,
  type: ["Duplex", "Apartment", "Land", "Commercial"][index % 4],
  submittedDate: `2026-05-${String((index % 20) + 5).padStart(2, "0")}`,
  status: (["pending", "approved", "rejected"] as ListingStatus[])[index % 3],
  description: "Owner-submitted listing with photos, simple location text, and direct contact details ready for review.",
}));

export const messages: Message[] = Array.from({ length: 15 }, (_, index) => ({
  id: `message-${index + 1}`,
  sender: ["Ada Eze", "Tunde Martins", "Ifeoma Obi", "Chika Okafor", "Musa Bello"][index % 5],
  email: `buyer${index + 1}@example.com`,
  subject: ["Inspection request", "Is this still available?", "Land title question", "Shortlet enquiry"][index % 4],
  preview: "I want to inspect this property and speak with the seller as soon as possible.",
  body: "Hello Sammy Realty, I saw the listing and want to confirm availability, inspection time, and seller contact. Please send the fastest next step.",
  timestamp: new Date(2026, 4, 25, 9, index * 7).toISOString(),
  status: (["unread", "read", "archived"] as MessageStatus[])[index % 3],
}));

export const customers: Customer[] = Array.from({ length: 20 }, (_, index) => ({
  id: `customer-${index + 1}`,
  name: ["Ada Eze", "Tunde Martins", "Ifeoma Obi", "Chika Okafor", "Musa Bello"][index % 5],
  email: `customer${index + 1}@example.com`,
  phone: "+2348148414913",
  lastContact: `2026-05-${String((index % 24) + 1).padStart(2, "0")}`,
  tags: [["Buyer"], ["Seller"], ["Investor"], ["Tenant"], ["Buyer", "Investor"]][index % 5],
  status: (["active", "pending", "hidden"] as CustomerStatus[])[index % 3],
  source: (["Buyer", "Seller", "Investor", "Tenant"] as const)[index % 4],
}));

export const faqs: Faq[] = Array.from({ length: 10 }, (_, index) => ({
  id: `faq-${index + 1}`,
  question: [
    "How fast can I inspect a property?",
    "Can I contact the seller directly?",
    "Do you list land for sale?",
    "What documents should I request?",
    "Can landlords submit listings?",
  ][index % 5],
  answer:
    "Use the call or WhatsApp action on a listing. Sammy Realty keeps the flow simple so serious buyers and renters can move quickly.",
  order: index + 1,
}));

export const testimonials: Testimonial[] = Array.from({ length: 9 }, (_, index) => ({
  id: `testimonial-${index + 1}`,
  reviewer: ["John Doe", "Amina Yusuf", "Tunde Martins", "Chika Okafor", "Ada Eze"][index % 5],
  rating: ((index % 5) + 1) as 1 | 2 | 3 | 4 | 5,
  review:
    "The listings were easy to compare, and the WhatsApp contact made it fast to move from viewing to inspection.",
  date: `2026-05-${String((index % 24) + 1).padStart(2, "0")}`,
  status: (["published", "hidden", "pending"] as TestimonialStatus[])[index % 3],
}));

export const activityFeed: ActivityItem[] = Array.from({ length: 10 }, (_, index) => ({
  id: `activity-${index + 1}`,
  type: (["listing", "message", "review"] as ActivityItem["type"][])[index % 3],
  description: [
    "New Ajah duplex submitted for review",
    "Buyer requested a same-day inspection",
    "Five-star testimonial awaiting approval",
  ][index % 3],
  timestamp: new Date(2026, 4, 25, 8 + index, 15).toISOString(),
}));

export const chartData = {
  listingsByMonth: [
    { month: "Jan", count: 18 },
    { month: "Feb", count: 24 },
    { month: "Mar", count: 31 },
    { month: "Apr", count: 29 },
    { month: "May", count: 42 },
    { month: "Jun", count: 48 },
  ],
  listingsByType: [
    { type: "Sale", count: 72 },
    { type: "Rent", count: 46 },
    { type: "Commercial", count: 24 },
  ],
  statusBreakdown: [
    { status: "Active", count: 78 },
    { status: "Pending", count: 24 },
    { status: "Sold", count: 18 },
    { status: "Draft", count: 22 },
  ],
  dailyVisitors: Array.from({ length: 30 }, (_, index) => ({
    date: `May ${index + 1}`,
    visitors: 280 + ((index * 47) % 220),
  })),
  topPages: [
    { page: "/properties/for-sale", views: 2840, bounceRate: "28%" },
    { page: "/properties/for-rent", views: 2140, bounceRate: "31%" },
    { page: "/lands/for-sale", views: 1780, bounceRate: "34%" },
    { page: "/map/all", views: 1320, bounceRate: "37%" },
    { page: "/add-listing", views: 940, bounceRate: "24%" },
    { page: "/contact", views: 780, bounceRate: "22%" },
    { page: "/service/property-sales", views: 620, bounceRate: "35%" },
    { page: "/testimonials", views: 410, bounceRate: "42%" },
  ],
  acquisitionSource: [
    { source: "Organic", count: 38 },
    { source: "WhatsApp", count: 29 },
    { source: "Referral", count: 18 },
    { source: "Instagram", count: 10 },
    { source: "Direct", count: 5 },
  ],
  customerGrowth: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ].map((month, index) => ({ month, count: 80 + index * 14 })),
  emailWeekly: Array.from({ length: 8 }, (_, index) => ({
    week: `W${index + 1}`,
    sent: 420 + index * 45,
    delivered: 400 + index * 42,
    opened: 180 + index * 25,
    bounced: 18 + (index % 4) * 5,
  })),
};

export const dashboardKpis = [
  { title: "Active Listings", value: "142", delta: "8%", trend: "up" },
  { title: "New Leads", value: "38", delta: "23%", trend: "up" },
  { title: "Unread Messages", value: "7", delta: "reply now", trend: "steady" },
  { title: "Page Views", value: "9,240", delta: "12%", trend: "up" },
];
