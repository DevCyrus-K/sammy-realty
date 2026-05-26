import { Table } from "@tanstack/react-table";
import { Search, Trash2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";

export type DataTableFilter = {
  columnId: string;
  label: string;
  options: { label: string; value: string }[];
};

export function DataTableToolbar<TData>({
  table,
  searchPlaceholder = "Search",
  searchColumn,
  filters = [],
  onBulkDelete,
}: {
  table: Table<TData>;
  searchPlaceholder?: string;
  searchColumn?: string;
  filters?: DataTableFilter[];
  onBulkDelete?: () => void;
}) {
  const selectedCount = table.getFilteredSelectedRowModel().rows.length;
  const searchTarget = searchColumn ? table.getColumn(searchColumn) : undefined;

  return (
    <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-col gap-2 sm:flex-row">
        {searchTarget ? (
          <label className="relative min-w-[220px] flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--brand-muted)]" size={16} />
            <Input
              value={(searchTarget.getFilterValue() as string) ?? ""}
              onChange={(event) => searchTarget.setFilterValue(event.target.value)}
              placeholder={searchPlaceholder}
              className="pl-9"
            />
          </label>
        ) : null}
        {filters.map((filter) => {
          const column = table.getColumn(filter.columnId);
          if (!column) return null;
          return (
            <Select
              key={filter.columnId}
              aria-label={filter.label}
              className="sm:w-48"
              value={(column.getFilterValue() as string) ?? "all"}
              onChange={(event) => column.setFilterValue(event.target.value === "all" ? undefined : event.target.value)}
            >
              <option value="all">{filter.label}</option>
              {filter.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          );
        })}
      </div>
      {selectedCount > 0 && onBulkDelete ? (
        <Button variant="danger" onClick={onBulkDelete}>
          <Trash2 size={16} />
          Delete {selectedCount}
        </Button>
      ) : null}
    </div>
  );
}
