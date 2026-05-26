import { useEffect, useRef } from "react";

export function CheckboxCell({
  checked,
  onChange,
  ariaLabel,
}: {
  checked: boolean | "indeterminate";
  onChange: (checked: boolean) => void;
  ariaLabel: string;
}) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = checked === "indeterminate";
    }
  }, [checked]);

  return (
    <input
      ref={ref}
      type="checkbox"
      className="size-4 accent-[var(--brand-primary)]"
      checked={checked === true}
      onChange={(event) => onChange(event.target.checked)}
      aria-label={ariaLabel}
    />
  );
}
