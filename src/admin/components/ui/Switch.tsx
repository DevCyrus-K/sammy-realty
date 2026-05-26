import { Switch as HeadlessSwitch } from "@headlessui/react";
import { cn } from "@/lib/utils";

export function Switch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}) {
  return (
    <HeadlessSwitch
      checked={checked}
      onChange={onChange}
      aria-label={label || "Toggle setting"}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full border border-[var(--brand-border)] transition",
        checked ? "bg-[var(--brand-primary)]" : "bg-[var(--brand-surface)]"
      )}
    >
      <span
        className={cn(
          "inline-block size-4 transform rounded-full bg-white shadow transition",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </HeadlessSwitch>
  );
}
