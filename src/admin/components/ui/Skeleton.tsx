import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-[var(--brand-radius)] bg-[var(--brand-border)]/60", className)} {...props} />;
}
