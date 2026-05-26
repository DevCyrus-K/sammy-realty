import type { ColumnDef } from "@tanstack/react-table";
import { Eye, MoreHorizontal, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "@/components/admin/data-table/DataTableColumnHeader";
import { StatusBadge } from "@/components/admin/shared/StatusBadge";
import type { Property } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export const propertyColumns: ColumnDef<Property>[] = [
  {
    accessorKey: "thumbnail",
    header: "",
    cell: ({ row }) => {
      const property = row.original;

      return property.thumbnail ? (
        <img src={property.thumbnail} alt={property.title} className="size-12 object-cover" />
      ) : (
        <div className="size-12 bg-muted" />
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "address",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Address" />,
    cell: ({ row }) => (
      <div>
        <p className="m-0 font-medium text-foreground">{row.original.title}</p>
        <span className="text-muted-foreground">{row.original.address}</span>
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Price" />,
    cell: ({ row }) => <span className="font-semibold text-primary">{row.original.price}</span>,
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
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
    filterFn: (row, id, value) => row.getValue(id) === value,
  },
  {
    accessorKey: "type",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Type" />,
    filterFn: (row, id, value) => row.getValue(id) === value,
  },
  {
    accessorKey: "listedDate",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Listed" />,
    cell: ({ row }) => formatDate(row.original.listedDate),
  },
  {
    id: "actions",
    cell: () => (
      <div className="flex items-center justify-end gap-1">
        <Button variant="ghost" size="icon-sm" aria-label="View property">
          <Eye />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Edit property">
          <Pencil />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="More actions">
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Publish</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
];
