import { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import toast from "react-hot-toast";
import { CheckCircle, Eye, FileText, ThumbsDown, ThumbsUp, Trash2, XCircle } from "lucide-react";
import { listingRequests, ListingRequest } from "@/lib/mock-data";
import { formatDate, formatPhone } from "@/lib/utils";
import { AdminLayout } from "../components/layout/AdminLayout";
import { DataTable } from "../components/data-table/DataTable";
import { DataTableColumnHeader } from "../components/data-table/DataTableColumnHeader";
import { StatusBadge } from "../components/shared/StatusBadge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { ConfirmModal } from "../components/ui/ConfirmModal";
import { Drawer } from "../components/ui/Drawer";
import { Dropdown } from "../components/ui/Dropdown";
import { PageHeader } from "../components/ui/PageHeader";
import { Textarea } from "../components/ui/Textarea";

export default function ListingRequestsPage() {
  const [selectedRequest, setSelectedRequest] = useState<ListingRequest | null>(null);
  const [rejectTarget, setRejectTarget] = useState<ListingRequest | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<ListingRequest | null>(null);
  const [reason, setReason] = useState("");

  const approveRequest = (request: ListingRequest) => {
    toast.success("Listing approved and published");
    setSelectedRequest(null);
    setRejectTarget(null);
  };

  const confirmReject = () => {
    if (!reason.trim()) {
      toast.error("Something went wrong - please try again");
      return;
    }
    toast.error("Listing rejected");
    setReason("");
    setRejectTarget(null);
    setSelectedRequest(null);
  };

  const confirmDelete = () => {
    toast.success("Item deleted");
    setDeleteTarget(null);
    setSelectedRequest(null);
  };

  const columns = useMemo<ColumnDef<ListingRequest>[]>(
    () => [
      {
        accessorKey: "requester",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Requester" />,
        cell: ({ row }) => (
          <div>
            <p className="font-medium">{row.original.requester}</p>
            <p className="text-xs text-[var(--brand-muted)]">{row.original.phone}</p>
          </div>
        ),
      },
      {
        accessorKey: "email",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
      },
      {
        accessorKey: "address",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Address" />,
      },
      {
        accessorKey: "type",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Type" />,
      },
      {
        accessorKey: "submittedDate",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Submitted" />,
        cell: ({ row }) => formatDate(row.original.submittedDate),
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
              { label: "View Details", icon: <Eye size={14} />, onClick: () => setSelectedRequest(row.original) },
              { label: "Approve", icon: <ThumbsUp size={14} />, onClick: () => approveRequest(row.original) },
              { label: "Reject", icon: <ThumbsDown size={14} />, danger: true, onClick: () => setRejectTarget(row.original) },
              { label: "Delete", icon: <Trash2 size={14} />, danger: true, separatorBefore: true, onClick: () => setDeleteTarget(row.original) },
            ]}
          />
        ),
      },
    ],
    []
  );

  return (
    <AdminLayout title="Listing Requests">
      <PageHeader
        title="Listing Requests"
        description="Review and manage incoming property submissions"
      />

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <MiniStat icon={<FileText size={18} />} label="Pending Review" value={listingRequests.filter((item) => item.status === "pending").length} />
        <MiniStat icon={<CheckCircle size={18} />} label="Approved This Week" value={listingRequests.filter((item) => item.status === "approved").length} />
        <MiniStat icon={<XCircle size={18} />} label="Rejected This Week" value={listingRequests.filter((item) => item.status === "rejected").length} />
      </div>

      <DataTable
        data={listingRequests}
        columns={columns}
        searchColumn="address"
        searchPlaceholder="Search requester, email, or address"
        filters={[
          {
            columnId: "status",
            label: "All statuses",
            options: ["pending", "approved", "rejected"].map((value) => ({ label: value, value })),
          },
          {
            columnId: "type",
            label: "All types",
            options: ["Duplex", "Apartment", "Land", "Commercial"].map((value) => ({ label: value, value })),
          },
        ]}
        onBulkStatusChange={() => toast.success("Changes saved successfully")}
        onBulkDelete={() => toast.success("Item deleted")}
        onRowClick={(request) => setSelectedRequest(request)}
      />

      <Drawer
        open={Boolean(selectedRequest)}
        onClose={() => setSelectedRequest(null)}
        title={selectedRequest?.address || "Listing request"}
        widthClass="max-w-[560px]"
        footer={
          selectedRequest ? (
            <>
              <Button onClick={() => approveRequest(selectedRequest)}>
                <ThumbsUp size={16} />
                Approve
              </Button>
              <Button variant="danger" onClick={() => setRejectTarget(selectedRequest)}>
                <ThumbsDown size={16} />
                Reject
              </Button>
            </>
          ) : null
        }
      >
        {selectedRequest ? (
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-[var(--brand-muted)]">Property address</p>
                <h2 className="text-lg font-semibold text-[var(--brand-primary)]">{selectedRequest.address}</h2>
              </div>
              <StatusBadge status={selectedRequest.status} />
            </div>

            <section className="rounded-[var(--brand-radius)] border border-[var(--brand-border)] p-4">
              <h3 className="mb-3 font-semibold text-[var(--brand-primary)]">Requester Info</h3>
              <dl className="grid gap-3 text-sm">
                <div>
                  <dt className="text-[var(--brand-muted)]">Name</dt>
                  <dd>{selectedRequest.requester}</dd>
                </div>
                <div>
                  <dt className="text-[var(--brand-muted)]">Email</dt>
                  <dd>{selectedRequest.email}</dd>
                </div>
                <div>
                  <dt className="text-[var(--brand-muted)]">Phone</dt>
                  <dd>{formatPhone(selectedRequest.phone)}</dd>
                </div>
              </dl>
            </section>

            <section className="rounded-[var(--brand-radius)] border border-[var(--brand-border)] p-4">
              <h3 className="mb-3 font-semibold text-[var(--brand-primary)]">Property Details</h3>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-[var(--brand-muted)]">Type</dt>
                  <dd>{selectedRequest.type}</dd>
                </div>
                <div>
                  <dt className="text-[var(--brand-muted)]">Submitted</dt>
                  <dd>{formatDate(selectedRequest.submittedDate)}</dd>
                </div>
              </dl>
            </section>

            <section>
              <h3 className="mb-2 font-semibold text-[var(--brand-primary)]">Description</h3>
              <p className="text-sm text-[var(--brand-muted)]">{selectedRequest.description}</p>
            </section>

            <section>
              <h3 className="mb-3 font-semibold text-[var(--brand-primary)]">Submitted Files</h3>
              <div className="space-y-2">
                {["property-photos.zip", "title-document.pdf", "owner-id.jpg"].map((file) => (
                  <div key={file} className="flex items-center gap-2 border border-[var(--brand-border)] p-3 text-sm">
                    <FileText size={16} className="text-[var(--brand-accent)]" />
                    <span className="flex-1">{file}</span>
                    <span className="text-xs text-[var(--brand-muted)]">2.4 MB</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : null}
      </Drawer>

      <ConfirmModal
        open={Boolean(rejectTarget)}
        title="Reject listing?"
        description="Add a short reason so the requester knows what to fix."
        confirmLabel="Reject"
        onCancel={() => setRejectTarget(null)}
        onConfirm={confirmReject}
      >
        <Textarea value={reason} onChange={(event) => setReason(event.target.value)} placeholder="Reason for rejection" />
      </ConfirmModal>

      <ConfirmModal
        open={Boolean(deleteTarget)}
        title="Delete this request?"
        description="This removes the request from the review queue."
        confirmLabel="Delete"
        onCancel={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
      />
    </AdminLayout>
  );
}

function MiniStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <Card className="flex h-20 items-center gap-3 p-4">
      <span className="flex size-10 items-center justify-center rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">{icon}</span>
      <span>
        <strong className="block text-xl text-[var(--brand-primary)]">{value}</strong>
        <span className="text-sm text-[var(--brand-muted)]">{label}</span>
      </span>
    </Card>
  );
}
