import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export type DropdownItem = {
  label: string;
  icon?: React.ReactNode;
  danger?: boolean;
  onClick: () => void;
  separatorBefore?: boolean;
};

export function Dropdown({
  label,
  items,
  align = "right",
}: {
  label?: React.ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        className={cn(
          "inline-flex min-h-9 items-center justify-center gap-2 rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] text-sm text-[var(--brand-primary)] hover:bg-[var(--brand-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]",
          label ? "px-3 py-1.5" : "size-8 px-0"
        )}
        aria-label={label ? undefined : "Open row actions"}
      >
        {label || <EllipsisVertical size={16} />}
      </MenuButton>
      <MenuItems
        anchor={align === "right" ? "bottom end" : "bottom start"}
        className="z-50 mt-1 min-w-44 rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] p-1 shadow-lg focus:outline-none"
      >
        {items.map((item) => (
          <div key={item.label}>
            {item.separatorBefore ? <div className="my-1 h-px bg-[var(--brand-border)]" /> : null}
            <MenuItem>
              {({ focus }) => (
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center gap-2 rounded-[var(--brand-radius)] px-3 py-2 text-left text-sm",
                    focus && "bg-[var(--brand-surface)]",
                    item.danger ? "text-[var(--brand-danger)]" : "text-inherit"
                  )}
                  onClick={item.onClick}
                >
                  {item.icon}
                  {item.label}
                </button>
              )}
            </MenuItem>
          </div>
        ))}
      </MenuItems>
    </Menu>
  );
}
