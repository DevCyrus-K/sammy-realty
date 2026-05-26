import { useState, type ReactNode } from "react";
import { Sidebar } from "@/components/admin/layout/Sidebar";
import { Topbar } from "@/components/admin/layout/Topbar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { adminNavGroups } from "@/lib/constants";
import Link from "next/link";

export function AdminLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} />
        <div className="min-w-0 flex-1">
          <Topbar onMenuClick={() => setMobileOpen(true)} />
          <main className="mx-auto w-full max-w-[1440px] p-4 md:p-6">{children}</main>
        </div>
      </div>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <SheetHeader className="border-b border-border">
            <SheetTitle className="text-primary">Sammy Realty</SheetTitle>
          </SheetHeader>
          <nav className="p-3">
            {adminNavGroups.map((group) => (
              <div key={group.label} className="mb-4">
                <p className="mb-1 px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {group.label}
                </p>
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-muted"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Icon className="size-4" />
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
