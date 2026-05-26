import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";
import {
  Bell,
  Building2,
  ChevronRight,
  Home,
  LogOut,
  Menu as MenuIcon,
  Moon,
  Search,
  Settings,
  Sun,
  User,
  X,
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
              <span className="absolute -right-0.5 -top-0.5 min-w-4 rounded-full bg-[var(--brand-danger)] px-1 text-[10px] font-bold leading-4 text-white">
                {unreadCount}
              </span>
            ) : null}
          </PopoverButton>
          <PopoverPanel
            anchor="bottom end"
            className="z-50 mt-2 w-80 rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] shadow-xl"
            style={{ width: "min(90vw, 20rem)" }}
          >
            <div className="flex items-center justify-between border-b border-[var(--brand-border)] px-4 py-3">
              <p className="font-semibold text-[var(--brand-primary)]">Notifications</p>
              <button
                type="button"
                className="text-xs font-semibold text-[var(--brand-accent)]"
                onClick={() => toast.success("Changes saved successfully")}
              >
                Mark all read
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {notificationItems.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className={`flex gap-3 border-b border-[var(--brand-border)] px-4 py-3 last:border-0 ${
                    item.unread ? "bg-[var(--brand-surface)] font-medium" : ""
                  }`}
                >
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                    <Building2 size={15} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm">{item.description}</span>
                    <span className="text-xs text-[var(--brand-muted)]">{item.timestamp}</span>
                  </span>
                </div>
              ))}
            </div>
            <Link href="/admin" className="block border-t border-[var(--brand-border)] px-4 py-3 text-center text-sm font-medium text-[var(--brand-primary)]">
              View all notifications
            </Link>
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
              { label: "Profile", href: "/admin/settings?tab=account", icon: User },
              { label: "Settings", href: "/admin/settings?tab=app-settings", icon: Settings },
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
