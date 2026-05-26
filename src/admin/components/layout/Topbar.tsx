import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";
import {
  BarChart2,
  Bell,
  Building2,
  ChevronRight,
  CheckCircle2,
  Home,
  LogOut,
  Menu as MenuIcon,
  Moon,
  MessageCircle,
  Search,
  Settings,
  Star,
  Sun,
  User,
  X,
  AlertCircle,
  FileText,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { clearAdminAuthenticated } from "../../lib/auth";
import { notificationItems } from "../../lib/navigation";
import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

const labelOverrides: Record<string, string> = {
  admin: "Admin",
  dashboard: "Dashboard",
  properties: "Properties",
  "listing-requests": "Listing Requests",
  messages: "Messages",
  customers: "Customers",
  faq: "FAQ",
  testimonials: "Testimonials",
  reports: "Reports",
  listings: "Listing Report",
  visitors: "Visitor Report",
  email: "Email Report",
  settings: "Settings",
};

function titleize(segment: string) {
  return labelOverrides[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function Topbar({ onMenu }: { onMenu: () => void }) {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const isDark = resolvedTheme === "dark";
  const unreadCount = notificationItems.filter((item) => item.unread).length;

  const handleLogout = () => {
    clearAdminAuthenticated();
    router.replace("/admin/login");
  };

  useEffect(() => {
    if (searchOpen) {
      requestAnimationFrame(() => searchRef.current?.focus());
    }
  }, [searchOpen]);

  const breadcrumbs = useMemo(() => {
    const cleanPath = router.asPath.split("?")[0];
    const segments = cleanPath.split("/").filter(Boolean).slice(1);
    const normalized = segments.length ? segments : ["dashboard"];

    return normalized.map((segment, index) => ({
      label: titleize(segment),
      href: normalized[0] === "dashboard" && index === 0 ? "/admin" : `/admin/${normalized.slice(0, index + 1).join("/")}`,
      current: index === normalized.length - 1,
    }));
  }, [router.asPath]);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b border-[var(--brand-border)] bg-[var(--brand-card)]/80 px-4 backdrop-blur-md lg:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <Button variant="ghost" className="size-9 px-0 md:hidden" onClick={onMenu} aria-label="Open navigation">
          <MenuIcon size={19} />
        </Button>
        <nav className="hidden min-w-0 items-center gap-1 text-sm md:flex" aria-label="Breadcrumb">
          <Link href="/admin" className="inline-flex items-center text-[var(--brand-muted)] hover:text-[var(--brand-primary)]">
            <Home size={16} />
          </Link>
          {breadcrumbs.map((crumb) => (
            <span key={`${crumb.href}-${crumb.label}`} className="inline-flex min-w-0 items-center gap-1">
              <ChevronRight size={16} className="text-[var(--brand-muted)]" />
              <Link
                href={crumb.href}
                className={`truncate capitalize ${
                  crumb.current ? "font-medium text-[var(--brand-primary)]" : "text-[var(--brand-muted)] hover:text-[var(--brand-primary)]"
                }`}
              >
                {crumb.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>

      <Link href="/admin" className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold text-[var(--brand-primary)] md:hidden">
        Sammy Admin
      </Link>

      <div className="relative flex items-center gap-2">
        <AnimatePresence>
          {searchOpen ? (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              className="absolute right-0 top-1/2 z-20 flex w-[min(72vw,520px)] -translate-y-1/2 items-center gap-2 rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] p-1 shadow-lg md:hidden"
            >
              <Search size={16} className="ml-2 text-[var(--brand-muted)]" />
              <Input
                ref={searchRef}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search listings, messages, customers..."
                className="min-h-9 border-0 bg-transparent focus:ring-0"
              />
              <Button variant="ghost" className="size-8 px-0" onClick={() => setSearchOpen(false)} aria-label="Close search">
                <X size={16} />
              </Button>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <label className="relative hidden md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--brand-muted)]" />
          <Input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Search admin..."
            className="w-64 bg-[var(--brand-surface)] pl-9"
            aria-label="Search admin"
          />
        </label>

        <Button variant="ghost" className="size-9 px-0 md:hidden" onClick={() => setSearchOpen(true)} aria-label="Open search">
          <Search size={18} />
        </Button>
        <Button
          variant="ghost"
          className="hidden size-9 px-0 md:inline-flex"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </Button>

        <Popover className="relative">
          <PopoverButton as={Button} variant="ghost" className="relative size-9 px-0" aria-label="Notifications">
            <Bell size={18} />
            {unreadCount ? (
              <span className="absolute -right-0.5 -top-0.5 min-w-5 rounded-full bg-[var(--brand-danger)] px-1 text-[10px] font-bold leading-5 text-white">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            ) : null}
          </PopoverButton>
          <PopoverPanel
            anchor="bottom end"
            className="z-[100] mt-1 overflow-hidden rounded-lg border border-[var(--brand-border)] bg-[var(--brand-card)] shadow-lg"
            style={{ width: "min(90vw, 22rem)" }}
          >
            {/* Compact Header */}
            <div className="flex items-center justify-between gap-2 border-b border-[var(--brand-border)] bg-[var(--brand-surface)] px-3 py-2.5">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-primary)]">Notifications</h3>
              {unreadCount > 0 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-[var(--brand-danger)]/10 px-1.5 py-0.5 text-[10px] font-medium text-[var(--brand-danger)]">
                  <span className="size-1 rounded-full bg-[var(--brand-danger)]" />
                  {unreadCount}
                </span>
              )}
            </div>

            {/* Compact Notifications List */}
            <div className="max-h-72 overflow-y-auto">
              {notificationItems.length > 0 ? (
                <div className="flex flex-col divide-y divide-[var(--brand-border)]">
                  {notificationItems.slice(0, 5).map((item) => {
                    const getIcon = (type: string) => {
                      switch (type) {
                        case "message":
                          return MessageCircle;
                        case "listing":
                          return Building2;
                        case "review":
                          return Star;
                        case "report":
                          return FileText;
                        default:
                          return AlertCircle;
                      }
                    };

                    const getColor = (type: string) => {
                      switch (type) {
                        case "message":
                          return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
                        case "listing":
                          return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
                        case "review":
                          return "bg-amber-500/10 text-amber-600 dark:text-amber-400";
                        case "report":
                          return "bg-purple-500/10 text-purple-600 dark:text-purple-400";
                        default:
                          return "bg-slate-500/10 text-slate-600 dark:text-slate-400";
                      }
                    };

                    const Icon = getIcon(item.type);

                    return (
                      <div
                        key={item.id}
                        className={`group flex gap-2.5 px-3 py-2.5 transition-colors duration-150 ${
                          item.unread
                            ? "bg-[var(--brand-surface)] hover:bg-[var(--brand-surface)]/80"
                            : "hover:bg-[var(--brand-surface)]/40"
                        }`}
                      >
                        {/* Icon */}
                        <div className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md ${getColor(item.type)}`}>
                          <Icon size={16} />
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-1">
                          <p className={`text-xs ${item.unread ? "font-semibold text-[var(--brand-primary)]" : "text-[var(--brand-text)]"}`}>
                            {item.description}
                          </p>
                          <p className="text-[10px] text-[var(--brand-muted)] mt-0.5">{item.timestamp}</p>
                        </div>

                        {/* Unread dot */}
                        {item.unread && (
                          <div className="mt-1.5 flex size-1.5 shrink-0 rounded-full bg-[var(--brand-danger)]" />
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-1.5 py-8 px-3">
                  <Bell size={24} className="text-[var(--brand-muted)] opacity-40" />
                  <p className="text-xs text-[var(--brand-muted)]">No new notifications</p>
                </div>
              )}
            </div>

            {/* Compact Footer */}
            {notificationItems.length > 0 && (
              <div className="flex gap-1.5 border-t border-[var(--brand-border)] px-3 py-2">
                {unreadCount > 0 && (
                  <button
                    type="button"
                    className="flex-1 rounded-md bg-[var(--brand-surface)] px-2 py-1.5 text-[10px] font-medium text-[var(--brand-accent)] transition-colors hover:bg-[var(--brand-surface)]/80"
                    onClick={() => toast.success("All marked as read")}
                  >
                    Mark read
                  </button>
                )}
                <Link
                  href="/admin"
                  className="flex-1 rounded-md bg-[var(--brand-primary)] px-2 py-1.5 text-center text-[10px] font-medium text-white transition-colors hover:bg-[var(--brand-primary)]/90"
                >
                  View all
                </Link>
              </div>
            )}
          </PopoverPanel>
        </Popover>

        <Menu as="div" className="relative">
          <MenuButton className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]" aria-label="User menu">
            <Avatar name="Admin User" className="size-8 bg-[var(--brand-primary)] text-white" />
          </MenuButton>
          <MenuItems
            anchor="bottom end"
            className="z-50 mt-2 min-w-56 rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] py-1 shadow-xl focus:outline-none"
          >
            <div className="border-b border-[var(--brand-border)] px-3 py-2">
              <p className="text-sm font-semibold text-[var(--brand-primary)]">Admin User</p>
              <p className="text-xs text-[var(--brand-muted)]">demo@sammy-realty.com</p>
            </div>
            {[
              { label: "My Account", href: "/admin/settings?tab=account", icon: User },
              { label: "Settings", href: "/admin/settings?tab=app-settings", icon: Settings },
              { label: "Reports", href: "/admin/reports", icon: BarChart2 },
              { label: "Log out", icon: LogOut, danger: true, onClick: handleLogout },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <MenuItem key={item.label}>
                  {({ focus }) => (
                    item.href ? (
                      <Link
                        href={item.href}
                        className={`flex items-center gap-2 px-3 py-2 text-sm ${
                          focus ? "bg-[var(--brand-surface)]" : ""
                        } ${item.danger ? "text-[var(--brand-danger)]" : ""}`}
                      >
                        <Icon size={14} />
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={item.onClick}
                        className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm ${
                          focus ? "bg-[var(--brand-surface)]" : ""
                        } ${item.danger ? "text-[var(--brand-danger)]" : ""}`}
                      >
                        <Icon size={14} />
                        {item.label}
                      </button>
                    )
                  )}
                </MenuItem>
              );
            })}
          </MenuItems>
        </Menu>
      </div>
    </header>
  );
}
