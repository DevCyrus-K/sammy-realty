import { useMemo } from "react";
import { useRouter } from "next/router";
import { Bell, Menu, Moon, Sun, UserCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { notificationItems } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const breadcrumb = useMemo(() => {
    const segments = router.pathname.split("/").filter(Boolean);
    return segments.map((segment) => segment.replace(/-/g, " ")).join(" / ");
  }, [router.pathname]);

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-border bg-card px-4 md:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <Button variant="ghost" size="icon-sm" className="md:hidden" onClick={onMenuClick} aria-label="Open menu">
          <Menu />
        </Button>
        <p className="m-0 truncate text-sm font-medium capitalize text-muted-foreground">{breadcrumb || "admin"}</p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Toggle dark mode"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="hidden dark:block" />
          <Moon className="dark:hidden" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" className="relative" aria-label="Notifications">
              <Bell />
              <span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center bg-accent text-[10px] font-bold text-accent-foreground">
                5
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notificationItems.map((item) => (
              <DropdownMenuItem key={item} className="whitespace-normal">
                {item}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center font-medium text-primary">Mark all read</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon-sm" aria-label="User account">
          <UserCircle />
        </Button>
      </div>
    </header>
  );
}
