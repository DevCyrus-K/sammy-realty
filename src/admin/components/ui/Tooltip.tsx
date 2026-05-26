import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export function Tooltip({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Popover className="group relative inline-flex">
      <PopoverButton as="span" className="inline-flex cursor-default">
        {children}
      </PopoverButton>
      <PopoverPanel
        static
        className="pointer-events-none absolute left-full top-1/2 z-50 ml-2 hidden -translate-y-1/2 whitespace-nowrap rounded-[var(--brand-radius)] bg-[var(--brand-primary)] px-2 py-1 text-xs text-white shadow group-hover:block"
      >
        {label}
      </PopoverPanel>
    </Popover>
  );
}
