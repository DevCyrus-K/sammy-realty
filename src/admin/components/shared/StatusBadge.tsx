import { cn } from "@/lib/utils";

const toneMap: Record<string, { className: string; dot: string }> = {
  active: {
    className: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400",
    dot: "bg-emerald-500",
  },
  approved: {
    className: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400",
    dot: "bg-emerald-500",
  },
  published: {
    className: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400",
    dot: "bg-emerald-500",
  },
  pending: {
    className: "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-400",
    dot: "bg-amber-500",
  },
  sold: {
    className: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    dot: "bg-blue-500",
  },
  draft: {
    className: "border-gray-200 bg-gray-100 text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",
    dot: "bg-gray-400",
  },
  hidden: {
    className: "border-gray-200 bg-gray-100 text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",
    dot: "bg-gray-400",
  },
  read: {
    className: "border-gray-200 bg-gray-100 text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",
    dot: "bg-gray-400",
  },
  archived: {
    className: "border-gray-200 bg-gray-100 text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",
    dot: "bg-gray-400",
  },
  rejected: {
    className: "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400",
    dot: "bg-red-500",
  },
  unread: {
    className: "border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]",
    dot: "bg-[var(--brand-primary)]",
  },
};

function formatStatus(status: string) {
  return status.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  const key = String(status).toLowerCase();
  const tone = toneMap[key] || toneMap.draft;

  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium", tone.className, className)}>
      <span className={cn("size-1.5 rounded-full", tone.dot)} />
      {formatStatus(key)}
    </span>
  );
}
