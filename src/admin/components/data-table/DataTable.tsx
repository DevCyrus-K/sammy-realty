import { useEffect, useMemo, useRef, useState } from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type RowSelectionState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { AnimatePresence, motion } from "framer-motion";
import { Inbox, Search, Trash2, X } from "lucide-react";
import { Button } from "../ui/Button";
import { Select } from "../ui/Select";
import { Skeleton } from "../ui/Skeleton";

type FilterOption = {
  key?: string;
  columnId?: string;
  label: string;
  options: ({ label: string; value: string } | string)[];
};

function Checkbox({
  checked,
  indeterminate,
  onChange,
  ariaLabel,
}: {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (checked: boolean) => void;
  ariaLabel: string;
}) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);

  return (
    <input
      ref={ref}
      aria-label={ariaLabel}
      type="checkbox"
      checked={checked}
      onClick={(event) => event.stopPropagation()}
      onChange={(event) => onChange(event.target.checked)}
      className="size-4 cursor-pointer rounded border-[var(--brand-border)] accent-[var(--brand-primary)]"
    />
  );
}

export function DataTable<TData>({
  columns,
  data,
  searchKey,
  searchColumn,
  searchPlaceholder = "Search...",
  filterOptions,
  filters,
  isLoading,
  loading,
  onBulkDelete,
  onDeleteSelected,
  onBulkStatusChange,
  onRowClick,
}: {
  columns: ColumnDef<TData>[];
  data: TData[];
  searchKey?: string;
  searchColumn?: string;
  searchPlaceholder?: string;
  filterOptions?: FilterOption[];
  filters?: FilterOption[];
  isLoading?: boolean;
  loading?: boolean;
  onBulkDelete?: () => void;
  onDeleteSelected?: () => void;
  onBulkStatusChange?: () => void;
  onRowClick?: (row: TData) => void;
}) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [searchDraft, setSearchDraft] = useState("");
  const tableFilters = filterOptions || filters || [];
  const loadingState = Boolean(isLoading || loading);
  const selectedBulkDelete = onBulkDelete || onDeleteSelected;

  useEffect(() => {
    const timer = window.setTimeout(() => setGlobalFilter(searchDraft), 220);
    return () => window.clearTimeout(timer);
  }, [searchDraft]);

  useEffect(() => {
    setRowSelection({});
  }, [data]);

  const tableColumns = useMemo<ColumnDef<TData>[]>(
    () => [
      {
        id: "select",
        enableSorting: false,
        enableHiding: false,
        header: ({ table }) => (
          <div className="w-10 px-3">
            <Checkbox
              ariaLabel="Select all rows"
              checked={table.getIsAllPageRowsSelected()}
              indeterminate={table.getIsSomePageRowsSelected()}
              onChange={(checked) => table.toggleAllPageRowsSelected(checked)}
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className="w-10 px-3">
            <Checkbox
              ariaLabel="Select row"
              checked={row.getIsSelected()}
              onChange={(checked) => row.toggleSelected(checked)}
            />
          </div>
        ),
      },
      ...columns,
    ],
    [columns]
  );

  const searchTarget = searchKey || searchColumn;
  const table = useReactTable({
    data,
    columns: tableColumns,
    state: { sorting, rowSelection, columnFilters, globalFilter },
    enableRowSelection: true,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, _columnId, value) => {
      const query = String(value || "").trim().toLowerCase();
      if (!query) return true;

      if (searchTarget) {
        const targetValue = row.getValue(searchTarget);
        if (String(targetValue || "").toLowerCase().includes(query)) return true;
      }

      return Object.values(row.original as Record<string, unknown>).some((fieldValue) =>
        String(fieldValue || "").toLowerCase().includes(query)
      );
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const selectedCount = table.getFilteredSelectedRowModel().rows.length;
  const filteredCount = table.getFilteredRowModel().rows.length;
  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const firstResult = filteredCount ? pageIndex * pageSize + 1 : 0;
  const lastResult = Math.min((pageIndex + 1) * pageSize, filteredCount);
  const hasFilters = Boolean(searchDraft || table.getState().columnFilters.length);

  const clearFilters = () => {
    setSearchDraft("");
    setGlobalFilter("");
    table.resetColumnFilters();
  };

  const runBulkStatusChange = () => {
    onBulkStatusChange?.();
    setRowSelection({});
  };

  const runBulkDelete = () => {
    selectedBulkDelete?.();
    setRowSelection({});
  };

  return (
    <div className="overflow-hidden rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--brand-border)] px-4 py-3">
        <div className="flex flex-1 flex-wrap items-center gap-2">
          <label className="relative w-full sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--brand-muted)]" />
            <input
              value={searchDraft}
              onChange={(event) => setSearchDraft(event.target.value)}
              placeholder={searchPlaceholder}
              className="min-h-11 w-full rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-surface)] px-9 py-2 text-base outline-none transition focus:ring-2 focus:ring-[var(--brand-accent)]/30"
            />
            {searchDraft ? (
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--brand-muted)] hover:text-[var(--brand-primary)]"
                onClick={() => setSearchDraft("")}
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            ) : null}
          </label>

          {tableFilters.map((filter) => {
            const columnId = filter.key || filter.columnId || "";
            const column = table.getColumn(columnId);
            if (!column) return null;
            const value = (column.getFilterValue() as string) || "all";
            const active = value !== "all";

            return (
              <select
                key={columnId}
                aria-label={filter.label}
                value={value}
                onChange={(event) => column.setFilterValue(event.target.value === "all" ? undefined : event.target.value)}
                className={`min-h-11 rounded-full border px-3 py-1.5 text-sm outline-none transition ${
                  active
                    ? "border-transparent bg-[var(--brand-primary)] text-white"
                    : "border-[var(--brand-border)] bg-[var(--brand-card)] text-[var(--brand-muted)] hover:bg-[var(--brand-surface)]"
                }`}
              >
                <option value="all">{filter.label}</option>
                {filter.options.map((option) => {
                  const normalized = typeof option === "string" ? { label: option, value: option } : option;
                  return (
                    <option key={normalized.value} value={normalized.value}>
                      {normalized.label}
                    </option>
                  );
                })}
              </select>
            );
          })}

          {hasFilters ? (
            <button type="button" className="text-xs font-semibold text-[var(--brand-primary)]" onClick={clearFilters}>
              Clear filters
            </button>
          ) : null}
        </div>

        {selectedCount && (onBulkStatusChange || selectedBulkDelete) ? (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-[var(--brand-muted)]">{selectedCount} selected</span>
            {onBulkStatusChange ? (
              <Button variant="outline" onClick={runBulkStatusChange}>
                Change Status
              </Button>
            ) : null}
            {selectedBulkDelete ? (
              <Button variant="danger" onClick={runBulkDelete}>
                <Trash2 size={16} />
                Delete
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-[var(--brand-border)] bg-[var(--brand-surface)]">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-[var(--brand-muted)]"
                  >
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {loadingState ? (
              Array.from({ length: 6 }).map((_, rowIndex) => (
                <tr key={rowIndex} className="border-b border-[var(--brand-border)] last:border-0">
                  {tableColumns.map((column, columnIndex) => (
                    <td key={`${column.id || columnIndex}-${rowIndex}`} className="px-4 py-3 align-middle">
                      <Skeleton className="h-4 w-[80%]" />
                    </td>
                  ))}
                </tr>
              ))
            ) : table.getRowModel().rows.length ? (
              <AnimatePresence initial={false}>
                {table.getRowModel().rows.map((row, index) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ delay: index * 0.03, duration: 0.18 }}
                    onClick={() => onRowClick?.(row.original)}
                    className={`border-b border-[var(--brand-border)] transition-colors duration-100 last:border-0 hover:bg-[var(--brand-surface)] ${
                      row.getIsSelected() ? "bg-[var(--brand-primary)]/5" : ""
                    } ${onRowClick ? "cursor-pointer" : ""}`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-4 py-3 align-middle">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </AnimatePresence>
            ) : (
              <tr>
                <td colSpan={tableColumns.length} className="py-16 text-center">
                  <div className="flex flex-col items-center justify-center gap-2 text-[var(--brand-muted)]">
                    <Inbox size={48} />
                    <p className="font-medium text-inherit">No results found</p>
                    <p className="text-sm">Try adjusting your search or filters</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--brand-border)] px-4 py-3">
        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--brand-muted)]">
          <span>
            Showing {firstResult}-{lastResult} of {filteredCount} results
          </span>
          <label className="flex items-center gap-2">
            Rows per page
            <Select
              className="min-h-8 w-20 py-1 text-sm"
              value={String(pageSize)}
              onChange={(event) => table.setPageSize(Number(event.target.value))}
              aria-label="Rows per page"
            >
              {[10, 25, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" className="size-8 px-0" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} aria-label="First page">
            <span className="text-xs">|&lt;</span>
          </Button>
          <Button variant="outline" className="size-8 px-0" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} aria-label="Previous page">
            <span className="text-xs">&lt;</span>
          </Button>
          <span className="mx-2 text-sm text-[var(--brand-muted)]">
            Page {pageIndex + 1} of {Math.max(table.getPageCount(), 1)}
          </span>
          <Button variant="outline" className="size-8 px-0" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} aria-label="Next page">
            <span className="text-xs">&gt;</span>
          </Button>
          <Button
            variant="outline"
            className="size-8 px-0"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            aria-label="Last page"
          >
            <span className="text-xs">&gt;|</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
