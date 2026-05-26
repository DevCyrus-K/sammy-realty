import { Table } from "@tanstack/react-table";
import { ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Select } from "../ui/Select";

export function DataTablePagination<TData>({ table }: { table: Table<TData> }) {
  return (
    <div className="mt-4 flex flex-col gap-3 border-t border-[var(--brand-border)] pt-4 md:flex-row md:items-center md:justify-between">
      <div className="text-sm text-[var(--brand-muted)]">
        {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-[var(--brand-muted)]">Rows</span>
        <Select
          className="w-20"
          value={String(table.getState().pagination.pageSize)}
          onChange={(event) => table.setPageSize(Number(event.target.value))}
          aria-label="Rows per page"
        >
          {[10, 25, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </Select>
        <span className="px-2 text-sm text-[var(--brand-muted)]">
          Page {table.getState().pagination.pageIndex + 1} of {Math.max(table.getPageCount(), 1)}
        </span>
        <Button variant="outline" className="size-9 px-0" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} aria-label="First page">
          <ChevronsLeft size={16} />
        </Button>
        <Button variant="outline" className="size-9 px-0" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} aria-label="Previous page">
          <ChevronLeft size={16} />
        </Button>
        <Button variant="outline" className="size-9 px-0" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} aria-label="Next page">
          <ChevronRight size={16} />
        </Button>
        <Button variant="outline" className="size-9 px-0" onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} aria-label="Last page">
          <ChevronsRight size={16} />
        </Button>
      </div>
    </div>
  );
}
