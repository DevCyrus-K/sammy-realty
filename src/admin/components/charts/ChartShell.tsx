import { Skeleton } from "../ui/Skeleton";

export function ChartShell({
  title,
  height = 300,
  loading,
  children,
}: {
  title: string;
  height?: number;
  loading?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-[var(--brand-primary)]">{title}</h3>
        <select
          aria-label={`${title} date range`}
          className="min-h-8 rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-surface)] px-2 text-xs text-[var(--brand-muted)] outline-none"
        >
          <option>Last 30 days</option>
          <option>This quarter</option>
          <option>This year</option>
        </select>
      </div>
      {loading ? <Skeleton className="w-full" style={{ height }} /> : children}
    </div>
  );
}
