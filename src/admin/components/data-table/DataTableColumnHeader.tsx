import { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import { Button } from "../ui/Button";

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
}: {
  column: Column<TData, TValue>;
  title: string;
}) {
  const sorted = column.getIsSorted();
  const Icon = sorted === "asc" ? ArrowUp : sorted === "desc" ? ArrowDown : ChevronsUpDown;

  if (!column.getCanSort()) {
    return <span>{title}</span>;
  }

  return (
    <Button
      variant="ghost"
      className="-ml-2 h-8 px-2 text-xs font-medium uppercase tracking-wide text-[var(--brand-muted)] hover:text-[var(--brand-primary)]"
      onClick={() => column.toggleSorting(sorted === "asc")}
    >
      {title}
      <Icon size={14} />
    </Button>
  );
}
