import * as React from "react";
import { cn } from "@/lib/utils";

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "min-h-10 w-full rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] px-3 py-2 text-sm text-inherit outline-none transition focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-accent)]/20",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
);

Select.displayName = "Select";
