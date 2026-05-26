import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { Grid2X2, List, Plus } from "lucide-react";
import { properties, Property } from "@/lib/mock-data";
import { AdminLayout } from "../components/layout/AdminLayout";
import { DataTable } from "../components/data-table/DataTable";
import { getPropertyColumns } from "../components/properties/PropertyColumns";
import { PropertyCard } from "../components/properties/PropertyCard";
import { PropertyDrawer } from "../components/properties/PropertyDrawer";
import { Button } from "../components/ui/Button";
import { ConfirmModal } from "../components/ui/ConfirmModal";
import { Input } from "../components/ui/Input";
import { PageHeader } from "../components/ui/PageHeader";
import { Select } from "../components/ui/Select";

export default function PropertiesPage() {
  const [view, setView] = useState<"grid" | "table">("grid");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Property | null>(null);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const columns = useMemo(
    () =>
      getPropertyColumns({
        onView: setSelectedProperty,
        onEdit: (property) => toast.success(`${property.title} opened for editing`),
        onDelete: setDeleteTarget,
      }),
    []
  );

  const confirmDelete = () => {
    toast.success("Item deleted");
    setDeleteTarget(null);
  };

  const filteredProperties = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return properties.filter((property) => {
      const matchesQuery = normalized
        ? [property.title, property.address, property.type, property.owner].some((value) => String(value).toLowerCase().includes(normalized))
        : true;
      const matchesStatus = statusFilter === "all" || property.status === statusFilter;
      const matchesType = typeFilter === "all" || property.type === typeFilter;
      return matchesQuery && matchesStatus && matchesType;
    });
  }, [query, statusFilter, typeFilter]);

  return (
    <AdminLayout title="Properties">
      <PageHeader
        title="Properties"
        description="Manage all property listings"
        actions={<Button onClick={() => toast.success("Changes saved successfully")}><Plus size={16} />Add Property</Button>}
      />

      <div className="mb-4 flex flex-col flex-wrap items-stretch justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] p-1">
          <Button variant={view === "grid" ? "primary" : "ghost"} className="min-h-9" onClick={() => setView("grid")}>
            <Grid2X2 size={16} />
            Grid
          </Button>
          <Button variant={view === "table" ? "primary" : "ghost"} className="min-h-9" onClick={() => setView("table")}>
            <List size={16} />
            Table
          </Button>
        </div>
        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          <Input className="bg-[var(--brand-surface)] sm:w-64" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search properties" />
          <Select className="w-full bg-[var(--brand-surface)] sm:w-48" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="Filter by status">
            {["all", "active", "pending", "sold", "draft", "hidden"].map((status) => <option key={status} value={status}>{status}</option>)}
          </Select>
          <Select className="w-full bg-[var(--brand-surface)] sm:w-48" value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)} aria-label="Filter by type">
            {["all", "Sale", "Rent", "Commercial", "Land"].map((type) => <option key={type} value={type}>{type}</option>)}
          </Select>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {view === "grid" ? (
          <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onClick={() => setSelectedProperty(property)}
                onEdit={() => toast.success("Changes saved successfully")}
                onDelete={() => setDeleteTarget(property)}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div key="table" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <DataTable
              data={filteredProperties}
              columns={columns}
              searchColumn="address"
              searchPlaceholder="Search address or property"
              filters={[
                { columnId: "status", label: "All statuses", options: ["active", "pending", "sold", "draft", "hidden"].map((value) => ({ label: value, value })) },
                { columnId: "type", label: "All types", options: ["Sale", "Rent", "Commercial", "Land"].map((value) => ({ label: value, value })) },
              ]}
              onBulkStatusChange={() => toast.success("Changes saved successfully")}
              onBulkDelete={() => toast.success("Item deleted")}
              onRowClick={(property) => setSelectedProperty(property)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <PropertyDrawer property={selectedProperty} onClose={() => setSelectedProperty(null)} />
      <ConfirmModal
        open={Boolean(deleteTarget)}
        title="Delete property?"
        description="This removes the listing from the admin view."
        confirmLabel="Delete"
        onCancel={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
      />
    </AdminLayout>
  );
}
