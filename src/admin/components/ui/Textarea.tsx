import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, rows = 4, ...props }, ref) => (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        "w-full rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] px-3 py-2 text-sm text-inherit outline-none transition focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-accent)]/20",
        className
      )}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";
