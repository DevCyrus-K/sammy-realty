import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[var(--brand-primary)] text-white hover:opacity-90",
  secondary: "bg-[var(--brand-accent)] text-white hover:opacity-90",
  outline:
    "border border-[var(--brand-border)] bg-transparent text-[var(--brand-primary)] hover:bg-[var(--brand-surface)]",
  ghost: "text-[var(--brand-muted)] hover:bg-[var(--brand-surface)]",
  danger: "bg-[var(--brand-danger)] text-white hover:opacity-90",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-[var(--brand-radius)] px-4 py-2 text-sm font-medium transition-all duration-150 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]",
        variants[variant],
        className
      )}
      {...props}
    />
  )
);

Button.displayName = "Button";
