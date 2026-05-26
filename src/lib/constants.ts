import {
  BarChart3,
  Building2,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Settings,
  Star,
  Users,
} from "lucide-react";

export const adminNavGroups = [
  {
    label: "Main",
    items: [{ title: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard }],
  },
  {
    label: "Inventory",
    items: [
      { title: "Properties", href: "/admin/properties", icon: Building2 },
      { title: "Listing Requests", href: "/admin/listing-requests", icon: FileText },
    ],
  },
  {
    label: "Communication",
    items: [
      { title: "Messages", href: "/admin/messages", icon: MessageSquare },
      { title: "Customers", href: "/admin/customers", icon: Users },
    ],
  },
  {
    label: "Content",
    items: [
      { title: "FAQ", href: "/admin/faq", icon: HelpCircle },
      { title: "Testimonials", href: "/admin/testimonials", icon: Star },
    ],
  },
  {
    label: "Reports",
    items: [{ title: "Reports", href: "/admin/reports", icon: BarChart3 }],
  },
  {
    label: "Settings",
    items: [{ title: "Settings", href: "/admin/settings", icon: Settings }],
  },
];

export const statusOptions = [
  "active",
  "sold",
  "pending",
  "draft",
  "rejected",
  "published",
  "hidden",
  "approved",
  "unread",
  "archived",
] as const;

export const propertyTypeOptions = ["Sale", "Rent", "Commercial", "Land"] as const;

export const tagOptions = ["Buyer", "Seller", "Investor", "Tenant"] as const;

export const notificationItems = [
  "New listing request from Amina Noor",
  "3 unread buyer messages",
  "Karen Family Villa moved to active",
  "New testimonial awaiting approval",
  "Monthly listing report is ready",
];
