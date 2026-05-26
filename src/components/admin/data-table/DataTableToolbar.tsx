import type { Table } from "@tanstack/react-table";
import { Search, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterOption = {
  column: string;
  label: string;
  options: { label: string; value: string }[];
};

export function DataTableToolbar<TData>({
  table,
  searchKey,
  searchPlaceholder = "Search...",
  filterOptions = [],
  onDeleteSelected,
}: {
  table: Table<TData>;
  searchKey?: string;
  searchPlaceholder?: string;
  filterOptions?: FilterOption[];
  onDeleteSelected?: () => void;
}) {
  const selectedRows = table.getFilteredSelectedRowModel().rows.length;

  return (
    <div className="flex flex-col gap-3 border-b border-border p-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
        {searchKey ? (
          <div className="relative min-w-0 flex-1 sm:max-w-sm">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
              onChange={(event) => table.getColumn(searchKey)?.setFilterValue(event.target.value)}
              placeholder={searchPlaceholder}
              className="pl-8"
            />
          </div>
        ) : null}

        {filterOptions.map((filter) => (
          <Select
            key={filter.column}
            value={(table.getColumn(filter.column)?.getFilterValue() as string) ?? "all"}
            onValueChange={(value) =>
              table.getColumn(filter.column)?.setFilterValue(value === "all" ? undefined : value)
            }
          >
            <SelectTrigger className="w-full sm:w-44">
              <SelectValue placeholder={filter.label} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{filter.label}</SelectItem>
              {filter.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
      </div>

      <div className="flex items-center gap-2">
        {table.getState().columnFilters.length ? (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()}>
            <X className="mr-1 size-4" /> Reset
          </Button>
        ) : null}
        <Button variant="destructive" disabled={!selectedRows} onClick={onDeleteSelected}>
          <Trash2 className="mr-1 size-4" />
          Delete Selected
        </Button>
      </div>
    </div>
  );
}
