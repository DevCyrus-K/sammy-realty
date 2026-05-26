import { cn } from "@/lib/utils";

export type StatusVariant =
  | "active"
  | "approved"
  | "published"
  | "pending"
  | "sold"
  | "draft"
  | "hidden"
  | "rejected"
  | "read"
  | "unread"
  | "archived";

const statusClasses: Record<StatusVariant, string> = {
  active: "border-green-200 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400",
  approved: "border-green-200 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400",
  published: "border-green-200 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400",
  pending: "border-amber-200 bg-amber-50 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400",
  sold: "border-blue-200 bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
  draft: "border-gray-200 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  hidden: "border-gray-200 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  read: "border-gray-200 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  archived: "border-gray-200 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  unread: "border-amber-200 bg-amber-50 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400",
  rejected: "border-red-200 bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400",
};

export function Badge({
  variant = "draft",
  children,
  className,
}: {
  variant?: StatusVariant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize",
        statusClasses[variant] || statusClasses.draft,
        className
      )}
    >
      {children}
    </span>
  );
}
