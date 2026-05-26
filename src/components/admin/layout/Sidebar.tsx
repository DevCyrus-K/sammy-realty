import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeft, ChevronRight, LogOut, Settings, UserCircle } from "lucide-react";
import { adminNavGroups } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Sidebar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  const router = useRouter();

  return (
    <aside
      className={cn(
        "sticky top-0 hidden h-screen flex-col border-r border-border bg-card md:flex",
        collapsed ? "w-14" : "w-64"
      )}
    >
      <div className="flex h-14 items-center justify-between border-b border-border px-3">
        <Link href="/admin/dashboard" className="flex min-w-0 items-center gap-2 text-primary">
          <span className="grid size-8 shrink-0 place-items-center bg-primary text-sm font-bold text-primary-foreground">
            SR
          </span>
          {!collapsed ? <span className="truncate font-semibold">Sammy Realty</span> : null}
        </Link>
        <Button variant="ghost" size="icon-sm" onClick={onToggle} aria-label="Toggle sidebar">
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-4">
        {adminNavGroups.map((group) => (
          <div key={group.label} className="mb-4">
            {!collapsed ? (
              <p className="mb-1 px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {group.label}
              </p>
            ) : null}
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = router.pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    title={collapsed ? item.title : undefined}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground",
                      active && "border-l-2 border-primary bg-primary/10 font-medium text-primary",
                      collapsed && "justify-center px-2"
                    )}
                  >
                    <Icon className="size-4 shrink-0" />
                    {!collapsed ? <span>{item.title}</span> : null}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-border p-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={cn("h-auto w-full justify-start gap-2 p-2", collapsed && "justify-center")}>
              <UserCircle className="size-5 text-primary" />
              {!collapsed ? (
                <span className="min-w-0 text-left">
                  <span className="block truncate text-sm font-semibold">Sammy Admin</span>
                  <span className="block truncate text-xs text-muted-foreground">Lead manager</span>
                </span>
              ) : null}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <UserCircle /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
