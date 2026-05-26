import type { ColumnDef } from "@tanstack/react-table";
import { Copy, Eye, Pencil, Trash2 } from "lucide-react";
import type { Property } from "@/lib/mock-data";
import { formatDate, formatPrice } from "@/lib/utils";
import { Button } from "../ui/Button";
import { Dropdown } from "../ui/Dropdown";
import { DataTableColumnHeader } from "../data-table/DataTableColumnHeader";
import { StatusBadge } from "../shared/StatusBadge";

export function getPropertyColumns(actions: {
  onView: (property: Property) => void;
  onEdit: (property: Property) => void;
  onDelete: (property: Property) => void;
}): ColumnDef<Property>[] {
  return [
    {
      id: "rowNumber",
      header: "#",
      enableSorting: false,
      cell: ({ row }) => <span className="text-[var(--brand-muted)]">{row.index + 1}</span>,
    },
    {
      accessorKey: "address",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Address" />,
      cell: ({ row }) => (
        <div>
          <p className="font-medium">{row.original.address}</p>
          <p className="text-xs text-[var(--brand-muted)]">{row.original.title} - {row.original.type}</p>
        </div>
      ),
    },
    {
      accessorKey: "price",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Price" />,
      cell: ({ row }) => <span className="font-semibold text-[var(--brand-primary)]">{formatPrice(row.original.price)}</span>,
    },
    {
      accessorKey: "beds",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Beds" />,
    },
    {
      accessorKey: "baths",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Baths" />,
    },
    {
      accessorKey: "type",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Type" />,
      filterFn: (row, id, value) => row.getValue(id) === value,
    },
    {
      accessorKey: "status",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
      cell: ({ row }) => <StatusBadge status={row.original.status} />,
    },
    {
      accessorKey: "listedDate",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
      cell: ({ row }) => formatDate(row.original.listedDate),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex items-center justify-end gap-1" onClick={(event) => event.stopPropagation()}>
          <Button variant="ghost" className="size-9 px-0" aria-label="View property" onClick={() => actions.onView(row.original)}>
            <Eye size={15} />
          </Button>
          <Button variant="ghost" className="size-9 px-0" aria-label="Edit property" onClick={() => actions.onEdit(row.original)}>
            <Pencil size={15} />
          </Button>
          <Button variant="ghost" className="size-9 px-0 text-[var(--brand-danger)]" aria-label="Delete property" onClick={() => actions.onDelete(row.original)}>
            <Trash2 size={15} />
          </Button>
          <Dropdown
            items={[
              { label: "Duplicate", icon: <Copy size={14} />, onClick: () => actions.onEdit(row.original) },
              { label: "View", icon: <Eye size={14} />, onClick: () => actions.onView(row.original) },
              { label: "Delete", icon: <Trash2 size={14} />, danger: true, separatorBefore: true, onClick: () => actions.onDelete(row.original) },
            ]}
          />
        </div>
      ),
    },
  ];
}
