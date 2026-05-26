import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Status =
  | "active"
  | "sold"
  | "pending"
  | "draft"
  | "rejected"
  | "published"
  | "hidden"
  | "approved"
  | "unread"
  | "archived"
  | string;

const statusClasses: Record<string, string> = {
  active: "border-[var(--brand-success)] text-[var(--brand-success)] bg-[color:var(--brand-success)]/10",
  approved: "border-[var(--brand-success)] text-[var(--brand-success)] bg-[color:var(--brand-success)]/10",
  published: "border-[var(--brand-success)] text-[var(--brand-success)] bg-[color:var(--brand-success)]/10",
  pending: "border-[var(--brand-warning)] text-[var(--brand-warning)] bg-[color:var(--brand-warning)]/10",
  sold: "border-blue-600 text-blue-700 bg-blue-50",
  draft: "border-muted-foreground text-muted-foreground bg-muted",
  hidden: "border-muted-foreground text-muted-foreground bg-muted",
  rejected: "border-destructive text-destructive bg-destructive/10",
  unread: "border-[var(--brand-primary)] text-[var(--brand-primary)] bg-[color:var(--brand-primary)]/10",
  archived: "border-muted-foreground text-muted-foreground bg-muted",
};

export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  const key = String(status).toLowerCase();
  const label = key.replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <Badge
      variant="outline"
      className={cn("h-6 rounded-[var(--brand-radius)] px-2.5 font-semibold", statusClasses[key], className)}
    >
      {label}
    </Badge>
  );
}
