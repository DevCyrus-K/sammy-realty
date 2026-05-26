import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "min-h-10 w-full rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] px-3 py-2 text-sm text-inherit outline-none transition focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-accent)]/20 disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";
