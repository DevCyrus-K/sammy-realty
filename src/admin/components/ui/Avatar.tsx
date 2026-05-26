import { User } from "lucide-react";
import { cn } from "@/lib/utils";

export function Avatar({
  name,
  src,
  className,
}: {
  name?: string;
  src?: string;
  className?: string;
}) {
  const initials = name
    ?.split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] text-sm font-semibold text-[var(--brand-primary)]",
        className
      )}
      aria-label={name || "User avatar"}
    >
      {src ? <img src={src} alt={name || "User"} className="h-full w-full object-cover" /> : initials || <User size={16} />}
    </span>
  );
}
