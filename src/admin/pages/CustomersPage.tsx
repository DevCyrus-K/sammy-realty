import { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Download, Eye, MessageSquare, Pencil, Plus, Trash2, Users } from "lucide-react";
import { customers, Customer } from "@/lib/mock-data";
import { formatDate, formatPhone } from "@/lib/utils";
import { AdminLayout } from "../components/layout/AdminLayout";
import { DataTable } from "../components/data-table/DataTable";
import { DataTableColumnHeader } from "../components/data-table/DataTableColumnHeader";
import { StatusBadge } from "../components/shared/StatusBadge";
import { Avatar } from "../components/ui/Avatar";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { ConfirmModal } from "../components/ui/ConfirmModal";
import { Drawer } from "../components/ui/Drawer";
import { Dropdown } from "../components/ui/Dropdown";
import { Input } from "../components/ui/Input";
import { Modal } from "../components/ui/Modal";
import { PageHeader } from "../components/ui/PageHeader";

const tags = ["Buyer", "Seller", "Investor"] as const;

const customerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Phone is required"),
});

type CustomerForm = z.infer<typeof customerSchema>;

export default function CustomersPage() {
  const [tagFilter, setTagFilter] = useState<string>("all");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Customer | null>(null);

  const form = useForm<CustomerForm>({
    resolver: zodResolver(customerSchema),
    mode: "onChange",
    values: {
      name: editingCustomer?.name || "",
      email: editingCustomer?.email || "",
      phone: editingCustomer?.phone || "",
    },
  });

  const filteredCustomers = useMemo(
    () => (tagFilter === "all" ? customers : customers.filter((customer) => customer.tags.includes(tagFilter))),
    [tagFilter]
  );

  const columns = useMemo<ColumnDef<Customer>[]>(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Customer" />,
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <Avatar name={row.original.name} />
            <div>
              <p className="font-medium">{row.original.name}</p>
              <p className="text-xs text-[var(--brand-muted)]">{row.original.source}</p>
            </div>
          </div>
        ),
      },
      { accessorKey: "email", header: ({ column }) => <DataTableColumnHeader column={column} title="Email" /> },
      {
        accessorKey: "phone",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Phone" />,
        cell: ({ row }) => formatPhone(row.original.phone),
      },
      {
        accessorKey: "lastContact",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Last Contact" />,
        cell: ({ row }) => formatDate(row.original.lastContact),
      },
      {
        accessorKey: "tags",
        header: "Tags",
        cell: ({ row }) => (
          <div className="flex flex-wrap gap-1">
            {row.original.tags.map((tag) => (
              <span key={tag} className={tagClass(tag)}>
                {tag}
              </span>
            ))}
          </div>
        ),
      },
      {
        accessorKey: "status",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
        filterFn: (row, id, value) => row.getValue(id) === value,
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <Dropdown
            items={[
              { label: "View", icon: <Eye size={14} />, onClick: () => setSelectedCustomer(row.original) },
              { label: "Edit", icon: <Pencil size={14} />, onClick: () => setEditingCustomer(row.original) },
              { label: "Send Message", icon: <MessageSquare size={14} />, onClick: () => toast.success("Message sent") },
              { label: "Delete", icon: <Trash2 size={14} />, danger: true, separatorBefore: true, onClick: () => setDeleteTarget(row.original) },
            ]}
          />
        ),
      },
    ],
    []
  );

  const saveCustomer = form.handleSubmit(() => {
    toast.success("Changes saved successfully");
    setEditingCustomer(null);
  });

  const addCustomer = () => {
    setEditingCustomer({
      id: "customer-new",
      name: "",
      email: "",
      phone: "",
      lastContact: new Date().toISOString(),
      tags: ["Buyer"],
      status: "active",
      source: "Buyer",
    });
  };

  const confirmDelete = () => {
    toast.success("Item deleted");
    setDeleteTarget(null);
  };

  return (
    <AdminLayout title="Customers">
      <PageHeader
        title="Customers"
        description={`${customers.length} total customers`}
        actions={<Button onClick={addCustomer}><Plus size={16} />Add Customer</Button>}
      />

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <SummaryCard label="Total" value={customers.length} icon={<Users size={18} />} />
        <SummaryCard label="Active" value={customers.filter((customer) => customer.status === "active").length} icon={<Users size={18} />} />
        <SummaryCard label="New This Month" value={8} icon={<Users size={18} />} />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Button variant={tagFilter === "all" ? "primary" : "outline"} onClick={() => setTagFilter("all")}>
          All
        </Button>
        {tags.map((tag) => (
          <Button key={tag} variant={tagFilter === tag ? "primary" : "outline"} onClick={() => setTagFilter(tag)}>
            {tag}
          </Button>
        ))}
        <Button variant="outline" className="ml-auto">
          <Download size={16} />
          Export
        </Button>
      </div>

      <DataTable
        data={filteredCustomers}
        columns={columns}
        searchColumn="name"
        searchPlaceholder="Search customers"
        filters={[
          {
            columnId: "status",
            label: "All statuses",
            options: ["active", "pending", "hidden"].map((value) => ({ label: value, value })),
          },
        ]}
        onBulkStatusChange={() => toast.success("Changes saved successfully")}
        onBulkDelete={() => toast.success("Item deleted")}
        onRowClick={(customer) => setSelectedCustomer(customer)}
      />

      <CustomerDrawer customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} />

      <Modal
        open={Boolean(editingCustomer)}
        onClose={() => setEditingCustomer(null)}
        title="Edit customer"
        footer={
          <>
            <Button variant="outline" onClick={() => setEditingCustomer(null)}>
              Cancel
            </Button>
            <Button onClick={saveCustomer} disabled={!form.formState.isValid}>
              Save
            </Button>
          </>
        }
      >
        <form className="space-y-3" onSubmit={saveCustomer}>
          <Field label="Full Name" error={form.formState.errors.name?.message}>
            <Input {...form.register("name")} />
          </Field>
          <Field label="Email" error={form.formState.errors.email?.message}>
            <Input type="email" {...form.register("email")} />
          </Field>
          <Field label="Phone" error={form.formState.errors.phone?.message}>
            <Input {...form.register("phone")} />
          </Field>
        </form>
      </Modal>

      <ConfirmModal
        open={Boolean(deleteTarget)}
        title="Delete customer?"
        description="This removes the customer from the admin list."
        confirmLabel="Delete"
        onCancel={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
      />
    </AdminLayout>
  );
}

function CustomerDrawer({ customer, onClose }: { customer: Customer | null; onClose: () => void }) {
  return (
    <Drawer
      open={Boolean(customer)}
      onClose={onClose}
      title={customer?.name || "Customer"}
      footer={
        customer ? (
          <Button className="w-full" onClick={() => toast.success("Message sent")}>
            <MessageSquare size={16} />
            Send Message
          </Button>
        ) : null
      }
    >
      {customer ? (
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <Avatar name={customer.name} className="size-20 text-xl" />
            <div>
              <h2 className="text-xl font-semibold text-[var(--brand-primary)]">{customer.name}</h2>
              <div className="mt-2 flex flex-wrap gap-1">
                {customer.tags.map((tag) => (
                  <span key={tag} className={tagClass(tag)}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-2">
                <StatusBadge status={customer.status} />
              </div>
            </div>
          </div>

          <section className="rounded-[var(--brand-radius)] border border-[var(--brand-border)] p-4">
            <h3 className="mb-3 font-semibold text-[var(--brand-primary)]">Contact Info</h3>
            <dl className="grid gap-3 text-sm">
              <div>
                <dt className="text-[var(--brand-muted)]">Email</dt>
                <dd>{customer.email}</dd>
              </div>
              <div>
                <dt className="text-[var(--brand-muted)]">Phone</dt>
                <dd>{formatPhone(customer.phone)}</dd>
              </div>
              <div>
                <dt className="text-[var(--brand-muted)]">Last contact</dt>
                <dd>{formatDate(customer.lastContact)}</dd>
              </div>
            </dl>
          </section>

          <section>
            <h3 className="mb-3 font-semibold text-[var(--brand-primary)]">Recent Interactions</h3>
            <div className="space-y-3">
              {["Requested inspection", "Received WhatsApp follow-up", "Viewed two listings"].map((item) => (
                <div key={item} className="border-l-2 border-[var(--brand-primary)] pl-3 text-sm">
                  <p>{item}</p>
                  <p className="text-xs text-[var(--brand-muted)]">This week</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : null}
    </Drawer>
  );
}

function tagClass(tag: string) {
  const classes: Record<string, string> = {
    Buyer: "rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs text-blue-700",
    Seller: "rounded-full border border-violet-200 bg-violet-50 px-2 py-0.5 text-xs text-violet-700",
    Investor: "rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs text-amber-700",
    Tenant: "rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-2 py-0.5 text-xs text-[var(--brand-muted)]",
  };

  return classes[tag] || classes.Tenant;
}

function SummaryCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <Card className="flex items-center gap-3 p-4">
      <span className="flex size-10 items-center justify-center rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">{icon}</span>
      <span>
        <strong className="block text-xl text-[var(--brand-primary)]">{value}</strong>
        <span className="text-sm text-[var(--brand-muted)]">{label}</span>
      </span>
    </Card>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium">
      <span className="mb-1 block text-[var(--brand-primary)]">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-[var(--brand-danger)]">{error}</span> : null}
    </label>
  );
}
