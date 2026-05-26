import {
  BarChart2,
  Building2,
  ClipboardList,
  HelpCircle,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Settings,
  Star,
  TrendingUp,
  UserCheck,
  UserCog,
  Users,
  type LucideIcon,
} from "lucide-react";

export type AdminNavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
};

export type AdminNavGroup = {
  label: string;
  items: AdminNavItem[];
};

export const adminNavGroups: AdminNavGroup[] = [
  {
    label: "MAIN",
    items: [{ title: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard }],
  },
  {
    label: "INVENTORY",
    items: [
      { title: "Properties", href: "/admin/properties", icon: Building2 },
      { title: "Listing Requests", href: "/admin/listing-requests", icon: ClipboardList },
    ],
  },
  {
    label: "COMMUNICATION",
    items: [
      { title: "Messages", href: "/admin/messages", icon: MessageSquare, badge: 7 },
      { title: "Customers", href: "/admin/customers", icon: Users },
    ],
  },
  {
    label: "CONTENT",
    items: [
      { title: "FAQ", href: "/admin/faq", icon: HelpCircle },
      { title: "Testimonials", href: "/admin/testimonials", icon: Star },
    ],
  },
  {
    label: "REPORTS",
    items: [
      { title: "Listing Report", href: "/admin/reports/listings", icon: BarChart2 },
      { title: "Visitor Report", href: "/admin/reports/visitors", icon: TrendingUp },
      { title: "Customer Report", href: "/admin/reports/customers", icon: UserCheck },
      { title: "Email Report", href: "/admin/reports/email", icon: Mail },
    ],
  },
  {
    label: "SETTINGS",
    items: [
      { title: "Account", href: "/admin/settings?tab=account", icon: UserCog },
      { title: "App Settings", href: "/admin/settings?tab=app-settings", icon: Settings },
    ],
  },
];

export const notificationItems = [
  {
    id: "note-1",
    type: "message",
    description: "3 unread buyer messages need a fast reply",
    timestamp: "5m ago",
    unread: true,
  },
  {
    id: "note-2",
    type: "listing",
    description: "New listing request from Amina Noor",
    timestamp: "18m ago",
    unread: true,
  },
  {
    id: "note-3",
    type: "review",
    description: "New testimonial awaiting approval",
    timestamp: "1h ago",
    unread: false,
  },
  {
    id: "note-4",
    type: "report",
    description: "Monthly listing report is ready",
    timestamp: "3h ago",
    unread: false,
  },
  {
    id: "note-5",
    type: "listing",
    description: "Karen Family Villa moved to active",
    timestamp: "Yesterday",
    unread: false,
  },
];
