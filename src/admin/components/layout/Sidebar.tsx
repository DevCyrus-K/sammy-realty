import Link from "next/link";
import { useRouter } from "next/router";
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart2,
  Building2,
  ChevronLeft,
  LogOut,
  Settings,
  User,
  X,
} from "lucide-react";
import { clearAdminAuthenticated } from "../../lib/auth";
import { adminNavGroups, type AdminNavItem } from "../../lib/navigation";
import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";
import { Tooltip } from "../ui/Tooltip";
import styles from "../../styles/admin.module.css";

function isActivePath(asPath: string, pathname: string, item: AdminNavItem) {
  const hrefPath = item.href.split("?")[0];

  if (hrefPath === "/admin") {
    return asPath === "/admin" || asPath === "/admin/dashboard" || pathname === "/admin/dashboard";
  }

  if (item.href.includes("?")) {
    return asPath === item.href;
  }

  if (hrefPath === "/admin/reports/listings") {
    return pathname === "/admin/reports" || asPath === hrefPath;
  }

  return asPath === hrefPath || (hrefPath !== "/admin/dashboard" && asPath.startsWith(`${hrefPath}/`));
}

function SidebarNavItem({
  item,
  collapsed,
  active,
  onNavigate,
}: {
  item: AdminNavItem;
  collapsed: boolean;
  active: boolean;
  onNavigate?: () => void;
}) {
  const Icon = item.icon;
  const content = (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={`group relative mx-2 flex min-h-11 items-center gap-3 overflow-hidden rounded-[var(--brand-radius)] px-3 py-2.5 text-sm transition-all duration-150 ${
        collapsed ? "justify-center px-0" : ""
      } ${
        active
          ? "bg-[var(--brand-primary)] text-white shadow-sm"
          : "text-[var(--brand-muted)] hover:bg-[var(--brand-surface)] hover:text-[var(--brand-primary)]"
      }`}
    >
      {active ? (
        <motion.span
          layoutId="active-nav"
          className="absolute inset-0 rounded-[var(--brand-radius)] bg-[var(--brand-primary)]"
          transition={{ type: "spring", stiffness: 420, damping: 32 }}
        />
      ) : null}
      <Icon className="relative z-10 size-[18px] shrink-0" />
      <AnimatePresence initial={false}>
        {!collapsed ? (
          <motion.span
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.15 }}
            className="relative z-10 min-w-0 flex-1 truncate"
          >
            {item.title}
          </motion.span>
        ) : null}
      </AnimatePresence>
      {!collapsed && item.badge ? (
        <span className="relative z-10 rounded-full bg-[var(--brand-accent)] px-1.5 py-0.5 text-center text-[10px] font-bold text-white min-w-[18px]">
          {item.badge}
        </span>
      ) : null}
    </Link>
  );

  return collapsed ? (
    <Tooltip label={item.title}>{content}</Tooltip>
  ) : (
    content
  );
}

function SidebarContent({
  collapsed,
  onToggle,
  onNavigate,
  showToggle = true,
  panelWidth = 256,
}: {
  collapsed: boolean;
  onToggle: () => void;
  onNavigate?: () => void;
  showToggle?: boolean;
  panelWidth?: number;
}) {
  const router = useRouter();
  const width = collapsed ? 72 : panelWidth;

  const handleLogout = () => {
    clearAdminAuthenticated();
    onNavigate?.();
    router.replace("/admin/login");
  };

  const accountItems = [
    { label: "My Account", icon: User, href: "/admin/settings?tab=account" },
    { label: "Settings", icon: Settings, href: "/admin/settings?tab=app-settings" },
    { label: "Reports", icon: BarChart2, href: "/admin/reports" },
    { label: "Log out", icon: LogOut, danger: true, onClick: handleLogout },
  ];

  return (
    <motion.aside
      animate={{ width }}
      transition={{ type: "spring", stiffness: 360, damping: 34 }}
      className="sticky top-0 flex h-screen flex-col overflow-hidden border-r border-[var(--brand-border)] bg-[var(--brand-card)]"
    >
      <Link
        href="/admin"
        onClick={onNavigate}
        className="flex h-16 items-center gap-3 border-b border-[var(--brand-border)] px-4"
      >
        <span className="flex size-9 shrink-0 items-center justify-center bg-[var(--brand-primary)] text-white">
          <Building2 size={18} />
        </span>
        <AnimatePresence initial={false}>
          {!collapsed ? (
            <motion.span
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              className="min-w-0"
            >
              <span className="block truncate font-semibold text-[var(--brand-primary)]">Sammy Realty</span>
              <span className="block text-xs text-[var(--brand-muted)]">Admin Console</span>
            </motion.span>
          ) : null}
        </AnimatePresence>
      </Link>

      <nav className="flex-1 overflow-y-auto py-4">
        {adminNavGroups.map((group) => (
          <div key={group.label} className="mb-4">
            {!collapsed ? (
              <p className="mb-1 mt-4 px-3 text-[10px] font-bold uppercase tracking-widest text-[var(--brand-muted)] first:mt-0">
                {group.label}
              </p>
            ) : (
              <div className="mx-auto my-3 h-px w-8 bg-[var(--brand-border)]" />
            )}
            <div className="space-y-1">
              {group.items.map((item) => (
                <SidebarNavItem
                  key={item.href}
                  item={item}
                  collapsed={collapsed}
                  active={isActivePath(router.asPath, router.pathname, item)}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-[var(--brand-border)] p-3">
        {showToggle ? (
          <Button
            variant="ghost"
            className="mb-3 w-full justify-center"
            onClick={onToggle}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <motion.span animate={{ rotate: collapsed ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronLeft size={16} />
            </motion.span>
            {!collapsed ? "Collapse" : null}
          </Button>
        ) : null}

        <Menu as="div" className="relative">
          <MenuButton className={`flex min-h-11 w-full items-center gap-3 rounded-[var(--brand-radius)] p-2 text-left hover:bg-[var(--brand-surface)] ${collapsed ? "justify-center" : ""}`}>
            <Avatar name="Admin User" className="bg-[var(--brand-primary)] text-white" />
            {!collapsed ? (
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-[var(--brand-primary)]">Admin User</span>
                <span className="block truncate text-xs text-[var(--brand-muted)]">Lead manager</span>
              </span>
            ) : null}
          </MenuButton>
          <MenuItems
            anchor="top end"
            className="z-50 mb-2 min-w-44 rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] py-1 shadow-lg focus:outline-none"
          >
            {accountItems.map((item) => {
              const Icon = item.icon;
              return (
                <MenuItem key={item.label}>
                  {({ focus }) => (
                    item.href ? (
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        className={`flex items-center gap-2 px-3 py-2 text-sm ${
                          focus ? "bg-[var(--brand-surface)]" : ""
                        } ${item.danger ? "text-[var(--brand-danger)]" : "text-inherit"}`}
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
                        } ${item.danger ? "text-[var(--brand-danger)]" : "text-inherit"}`}
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
    </motion.aside>
  );
}

export function Sidebar({
  collapsed,
  onToggle,
  mobileOpen,
  onMobileClose,
}: {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}) {
  return (
    <>
      <div className="hidden md:block lg:hidden">
        <SidebarContent collapsed onToggle={() => undefined} showToggle={false} />
      </div>
      <div className="hidden lg:block">
        <SidebarContent collapsed={collapsed} onToggle={onToggle} />
      </div>
      <AnimatePresence>
        {mobileOpen ? (
          <Dialog static open={mobileOpen} onClose={onMobileClose} className={`${styles.adminSurface} relative z-50 md:hidden`}>
            <motion.div
              className="fixed inset-0 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onMobileClose}
            />
            <motion.div
              className="fixed inset-y-0 left-0 z-50 w-72 bg-[var(--brand-card)] shadow-2xl"
              initial={{ x: -288 }}
              animate={{ x: 0 }}
              exit={{ x: -288 }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
            >
              <DialogPanel className="h-full">
                <Button
                  variant="ghost"
                  className="absolute right-3 top-3 z-10 size-9 px-0"
                  onClick={onMobileClose}
                  aria-label="Close navigation"
                >
                  <X size={18} />
                </Button>
                <SidebarContent collapsed={false} onToggle={onMobileClose} onNavigate={onMobileClose} showToggle={false} panelWidth={288} />
              </DialogPanel>
            </motion.div>
          </Dialog>
        ) : null}
      </AnimatePresence>
    </>
  );
}
