import { useMemo, useState } from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Inbox } from "lucide-react";
import { CheckboxCell } from "@/components/admin/data-table/CheckboxCell";
import { DataTablePagination } from "@/components/admin/data-table/DataTablePagination";
import { DataTableToolbar } from "@/components/admin/data-table/DataTableToolbar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type FilterOption = {
  column: string;
  label: string;
  options: { label: string; value: string }[];
};

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder,
  filterOptions,
  loading = false,
  onDeleteSelected,
}: {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey?: string;
  searchPlaceholder?: string;
  filterOptions?: FilterOption[];
  loading?: boolean;
  onDeleteSelected?: () => void;
}) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const tableColumns = useMemo<ColumnDef<TData, unknown>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <CheckboxCell
            checked={
              table.getIsAllPageRowsSelected()
                ? true
                : table.getIsSomePageRowsSelected()
                  ? "indeterminate"
                  : false
            }
            onChange={(checked) => table.toggleAllPageRowsSelected(Boolean(checked))}
            ariaLabel="Select all rows"
          />
        ),
        cell: ({ row }) => (
          <CheckboxCell
            checked={row.getIsSelected()}
            onChange={(checked) => row.toggleSelected(Boolean(checked))}
            ariaLabel="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      ...(columns as ColumnDef<TData, unknown>[]),
    ],
    [columns]
  );

  const table = useReactTable({
    data,
    columns: tableColumns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="overflow-hidden border border-border bg-card">
      <DataTableToolbar
        table={table}
        searchKey={searchKey}
        searchPlaceholder={searchPlaceholder}
        filterOptions={filterOptions}
        onDeleteSelected={onDeleteSelected}
      />
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {loading ? (
            Array.from({ length: 6 }).map((_, rowIndex) => (
              <TableRow key={rowIndex}>
                {tableColumns.map((column, columnIndex) => (
                  <TableCell key={`${column.id || columnIndex}-${rowIndex}`}>
                    <Skeleton className="h-6 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={tableColumns.length} className="h-40 text-center">
                <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                  <Inbox className="size-8" />
                  <span>No results found</span>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePagination table={table} />
    </div>
  );
}
