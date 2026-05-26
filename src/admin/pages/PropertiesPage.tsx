import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { Grid2X2, List, Plus, Upload } from "lucide-react";
import type { Property } from "@/lib/mock-data";
import { AdminLayout } from "../components/layout/AdminLayout";
import { DataTable } from "../components/data-table/DataTable";
import { getPropertyColumns } from "../components/properties/PropertyColumns";
import { PropertyCard } from "../components/properties/PropertyCard";
import { PropertyDrawer } from "../components/properties/PropertyDrawer";
import { Button } from "../components/ui/Button";
import { ConfirmModal } from "../components/ui/ConfirmModal";
import { Input } from "../components/ui/Input";
import { Modal } from "../components/ui/Modal";
import { PageHeader } from "../components/ui/PageHeader";
import { Select } from "../components/ui/Select";
import { Textarea } from "../components/ui/Textarea";

type PropertyForm = {
  title: string;
  address: string;
  price: string;
  beds: string;
  baths: string;
  sqft: string;
  type: Property["type"];
  status: Property["status"];
  owner: string;
  phone: string;
  image: string;
  description: string;
  featured: boolean;
};

const defaultPropertyForm: PropertyForm = {
  title: "",
  address: "",
  price: "",
  beds: "0",
  baths: "0",
  sqft: "",
  type: "Sale",
  status: "active",
  owner: "Sammy Realty",
  phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+2348148414913",
  image: "/img/product-3/1.jpg",
  description: "",
  featured: false,
};

const propertyTypes: Property["type"][] = ["Sale", "Rent", "Commercial", "Land"];
const propertyStatuses: Property["status"][] = ["active", "pending", "sold", "draft", "hidden"];

export default function PropertiesPage() {
  const [view, setView] = useState<"grid" | "table">("grid");
  const [propertyRows, setPropertyRows] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Property | null>(null);
  const [propertyForm, setPropertyForm] = useState<PropertyForm>(defaultPropertyForm);
  const [propertyModalOpen, setPropertyModalOpen] = useState(false);
  const [loadingProperties, setLoadingProperties] = useState(false);
  const [savingProperty, setSavingProperty] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [queryDraft, setQueryDraft] = useState("");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setQuery(queryDraft), 220);
    return () => window.clearTimeout(timer);
  }, [queryDraft]);

  useEffect(() => {
    let active = true;

    async function loadProperties() {
      setLoadingProperties(true);
      try {
        const response = await fetch("/api/v1/listings?limit=100");
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload.error || "Failed to fetch properties");
        }

        const apiProperties = Array.isArray(payload.data) ? payload.data.map(normalizeApiProperty) : [];
        if (active) {
          setPropertyRows(apiProperties);
        }
      } catch (error) {
        console.error("Property fetch failed:", error);
        toast.error("Could not load Supabase listings. Please check the API connection.");
        if (active) {
          setPropertyRows([]);
        }
      } finally {
        if (active) {
          setLoadingProperties(false);
        }
      }
    }

    loadProperties();

    return () => {
      active = false;
    };
  }, []);

  const openAddProperty = () => {
    setEditingProperty(null);
    setPropertyForm(defaultPropertyForm);
    setPropertyModalOpen(true);
  };

  const openEditProperty = (property: Property) => {
    setSelectedProperty(null);
    setEditingProperty(property);
    setPropertyForm(propertyToForm(property));
    setPropertyModalOpen(true);
  };

  const columns = useMemo(
    () =>
      getPropertyColumns({
        onView: setSelectedProperty,
        onEdit: openEditProperty,
        onDelete: setDeleteTarget,
      }),
    []
  );

  const confirmDelete = async () => {
    if (!deleteTarget) return;

    setSavingProperty(true);
    try {
      await deletePropertyFromApi(deleteTarget);
      setPropertyRows((current) => current.filter((property) => property.id !== deleteTarget.id));
      if (selectedProperty?.id === deleteTarget.id) {
        setSelectedProperty(null);
      }
      toast.success("Property deleted");
      setDeleteTarget(null);
    } catch (error) {
      console.error("Property delete API failed:", error);
      toast.error("Could not delete this property from Supabase");
    } finally {
      setSavingProperty(false);
    }
  };

  const saveProperty = async () => {
    const validationError = validatePropertyForm(propertyForm);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setSavingProperty(true);

    if (editingProperty) {
      try {
        const response = await fetch(`/api/v1/listings?id=${editingProperty.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(propertyForm),
        });
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload.error || "Failed to update property");
        }

        const updatedProperty = normalizeApiProperty(payload.data);
        setPropertyRows((current) =>
          current.map((property) => (property.id === editingProperty.id ? updatedProperty : property))
        );
        setSelectedProperty((current) => (current?.id === editingProperty.id ? updatedProperty : current));
        setPropertyModalOpen(false);
        toast.success("Property updated");
      } catch (error) {
        console.error("Property update failed:", error);
        toast.error("Could not update this property in Supabase");
      } finally {
        setSavingProperty(false);
      }
      return;
    }

    try {
      const response = await fetch("/api/v1/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(propertyForm),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Failed to add property");
      }

      const savedProperty = normalizeApiProperty(payload.data);

      setPropertyRows((current) => [savedProperty, ...current]);
      setPropertyModalOpen(false);
      toast.success("Property added");
    } catch (error) {
      console.error("Property creation failed:", error);
      toast.error("Could not save this property to Supabase");
    } finally {
      setSavingProperty(false);
    }
  };

  const updatePropertyStatus = async (property: Property, status: Property["status"]) => {
    const nextForm = { ...propertyToForm(property), status };
    setSavingProperty(true);
    try {
      const response = await fetch(`/api/v1/listings?id=${property.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextForm),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Failed to update property status");
      }

      const updatedProperty = normalizeApiProperty(payload.data);
      setPropertyRows((current) =>
        current.map((row) => (row.id === property.id ? updatedProperty : row))
      );
      setSelectedProperty((current) => (current?.id === property.id ? updatedProperty : current));
      toast.success("Status updated");
    } catch (error) {
      console.error("Property status update failed:", error);
      toast.error("Could not update this property status");
    } finally {
      setSavingProperty(false);
    }
  };

  const uploadMainImage = async (file: File | undefined) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please choose an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be 5MB or smaller");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("propertyId", editingProperty?.id || "draft");

    setUploadingImage(true);
    try {
      const response = await fetch("/api/properties/upload", {
        method: "POST",
        body: formData,
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Upload failed");
      }

      updatePropertyForm("image", payload.url);
      toast.success("Image uploaded");
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Could not upload this image. You can still paste an image URL.");
    } finally {
      setUploadingImage(false);
      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
    }
  };

  const filteredProperties = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return propertyRows.filter((property) => {
      const matchesQuery = normalized
        ? [property.title, property.address, property.type, property.owner].some((value) => String(value).toLowerCase().includes(normalized))
        : true;
      const matchesStatus = statusFilter === "all" || property.status === statusFilter;
      const matchesType = typeFilter === "all" || property.type === typeFilter;
      return matchesQuery && matchesStatus && matchesType;
    });
  }, [propertyRows, query, statusFilter, typeFilter]);

  return (
    <AdminLayout title="Properties">
      <PageHeader
        title="Properties"
        description="Manage all property listings"
        actions={<Button onClick={openAddProperty} disabled={savingProperty}><Plus size={16} />Add Property</Button>}
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
          <Input className="bg-[var(--brand-surface)] sm:w-64" value={queryDraft} onChange={(event) => setQueryDraft(event.target.value)} placeholder="Search properties" />
          <Select className="w-full bg-[var(--brand-surface)] sm:w-48" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="Filter by status">
            {["all", ...propertyStatuses].map((status) => <option key={status} value={status}>{status}</option>)}
          </Select>
          <Select className="w-full bg-[var(--brand-surface)] sm:w-48" value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)} aria-label="Filter by type">
            {["all", ...propertyTypes].map((type) => <option key={type} value={type}>{type}</option>)}
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
                onEdit={() => openEditProperty(property)}
                onDelete={() => setDeleteTarget(property)}
              />
            ))}
            {!loadingProperties && !filteredProperties.length ? (
              <div className="col-span-full rounded-[var(--brand-radius)] border border-dashed border-[var(--brand-border)] p-8 text-center text-sm text-[var(--brand-muted)]">
                No Supabase listings match this view.
              </div>
            ) : null}
          </motion.div>
        ) : (
          <motion.div key="table" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <DataTable
              data={filteredProperties}
              columns={columns}
              searchColumn="address"
              searchPlaceholder="Search address or property"
              loading={loadingProperties}
              filters={[
                { columnId: "status", label: "All statuses", options: propertyStatuses.map((value) => ({ label: value, value })) },
                { columnId: "type", label: "All types", options: propertyTypes.map((value) => ({ label: value, value })) },
              ]}
              onRowClick={(property) => setSelectedProperty(property)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <PropertyDrawer
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onEdit={openEditProperty}
        onStatusChange={updatePropertyStatus}
      />
      <Modal
        open={propertyModalOpen}
        onClose={() => setPropertyModalOpen(false)}
        title={editingProperty ? "Edit property" : "Add property"}
        className="md:max-w-2xl"
        footer={
          <>
            <Button variant="outline" onClick={() => setPropertyModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveProperty} disabled={savingProperty}>
              {savingProperty ? "Saving..." : editingProperty ? "Save" : "Add Property"}
            </Button>
          </>
        }
      >
        <form className="space-y-4" onSubmit={(event) => { event.preventDefault(); saveProperty(); }}>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <Field label="Property Title">
              <Input value={propertyForm.title} onChange={(event) => updatePropertyForm("title", event.target.value)} placeholder="Greenview Terrace Duplex" />
            </Field>
            <Field label="Location">
              <Input value={propertyForm.address} onChange={(event) => updatePropertyForm("address", event.target.value)} placeholder="County, Sub-county, Area" />
            </Field>
            <Field label="Price (NGN)">
              <Input value={propertyForm.price} onChange={(event) => updatePropertyForm("price", event.target.value)} inputMode="numeric" placeholder="24000000" />
            </Field>
            <Field label="Seller Phone">
              <Input value={propertyForm.phone} onChange={(event) => updatePropertyForm("phone", event.target.value)} placeholder="+2348148414913" />
            </Field>
            <Field label="Type">
              <Select value={propertyForm.type} onChange={(event) => updatePropertyForm("type", event.target.value as Property["type"])}>
                {propertyTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </Select>
            </Field>
            <Field label="Status">
              <Select value={propertyForm.status} onChange={(event) => updatePropertyForm("status", event.target.value as Property["status"])}>
                {propertyStatuses.map((status) => <option key={status} value={status}>{status}</option>)}
              </Select>
            </Field>
            <Field label="Beds">
              <Input value={propertyForm.beds} onChange={(event) => updatePropertyForm("beds", event.target.value)} inputMode="numeric" />
            </Field>
            <Field label="Baths">
              <Input value={propertyForm.baths} onChange={(event) => updatePropertyForm("baths", event.target.value)} inputMode="numeric" />
            </Field>
            <Field label="Area (sqm)">
              <Input value={propertyForm.sqft} onChange={(event) => updatePropertyForm("sqft", event.target.value)} inputMode="numeric" placeholder="5400" />
            </Field>
            <Field label="Main Image URL">
              <div className="flex gap-2">
                <Input value={propertyForm.image} onChange={(event) => updatePropertyForm("image", event.target.value)} placeholder="Supabase image URL" />
                <Button
                  variant="outline"
                  className="shrink-0 px-3"
                  onClick={() => imageInputRef.current?.click()}
                  disabled={uploadingImage}
                  aria-label="Upload property image"
                >
                  <Upload size={16} />
                  {uploadingImage ? "Uploading" : "Upload"}
                </Button>
                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(event) => uploadMainImage(event.currentTarget.files?.[0])}
                />
              </div>
            </Field>
          </div>
          <label className="flex items-center justify-between gap-3 rounded-[var(--brand-radius)] border border-[var(--brand-border)] p-3 text-sm font-medium">
            <span>
              <span className="block text-[var(--brand-primary)]">Featured on homepage</span>
              <span className="block text-xs text-[var(--brand-muted)]">Use this for high-converting listings.</span>
            </span>
            <input
              type="checkbox"
              checked={propertyForm.featured}
              onChange={(event) => updatePropertyForm("featured", event.target.checked)}
              className="size-5 accent-[var(--brand-primary)]"
            />
          </label>
          <Field label="Seller Name">
            <Input value={propertyForm.owner} onChange={(event) => updatePropertyForm("owner", event.target.value)} placeholder="Sammy Realty" />
          </Field>
          <Field label="Description">
            <Textarea value={propertyForm.description} onChange={(event) => updatePropertyForm("description", event.target.value)} placeholder="Short details that help a buyer trust the listing and contact the seller." />
          </Field>
        </form>
      </Modal>
      <ConfirmModal
        open={Boolean(deleteTarget)}
        title="Delete property?"
        description="This removes the listing from Supabase and the frontend."
        confirmLabel="Delete"
        onCancel={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
      />
    </AdminLayout>
  );

  function updatePropertyForm<Key extends keyof PropertyForm>(key: Key, value: PropertyForm[Key]) {
    setPropertyForm((current) => ({ ...current, [key]: value }));
  }
}

function normalizeApiProperty(record: any): Property {
  const type = normalizeType(record.type || record.propertyType);
  const status = normalizeStatus(record.status);

  return {
    id: String(record.id || `property-${Date.now()}`),
    slug: String(record.slug || ""),
    title: String(record.title || "Untitled property"),
    address: String(record.address || record.location || "Location pending"),
    price: Number(record.price || 0),
    beds: Number(record.beds ?? record.bedrooms ?? 0),
    baths: Number(record.baths ?? record.bathrooms ?? 0),
    sqft: Number(record.sqft ?? record.areaSqm ?? parseArea(record.amenities) ?? 0),
    type,
    status,
    listedDate: String(record.listedDate || record.createdAt || new Date().toISOString()),
    owner: String(record.owner || "Sammy Realty"),
    phone: String(record.phone || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+2348148414913"),
    image: String(record.image || "/img/product-3/1.jpg"),
    description: String(record.description || ""),
    featured: Boolean(record.featured),
    photos: Array.isArray(record.photos) ? record.photos : [],
  };
}

function normalizeType(value: unknown): Property["type"] {
  const candidate = String(value || "Sale");
  return propertyTypes.includes(candidate as Property["type"]) ? (candidate as Property["type"]) : "Sale";
}

function normalizeStatus(value: unknown): Property["status"] {
  const candidate = String(value || "active").toLowerCase();
  return propertyStatuses.includes(candidate as Property["status"]) ? (candidate as Property["status"]) : "active";
}

function parseArea(value: unknown) {
  const match = String(value || "").match(/(\d[\d,]*)\s*(sqm|sqft|sq ft)?/i);
  return match ? Number(match[1].replace(/,/g, "")) : 0;
}

function propertyToForm(property: Property): PropertyForm {
  return {
    title: property.title,
    address: property.address,
    price: String(property.price || ""),
    beds: String(property.beds ?? 0),
    baths: String(property.baths ?? 0),
    sqft: String(property.sqft || ""),
    type: property.type,
    status: property.status,
    owner: property.owner,
    phone: property.phone,
    image: property.image || "/img/product-3/1.jpg",
    description: property.description || "",
    featured: Boolean(property.featured),
  };
}

function validatePropertyForm(form: PropertyForm) {
  if (!form.title.trim()) return "Property title is required";
  if (!form.address.trim()) return "Location is required";
  if (!Number(form.price)) return "Price is required";
  if (!form.phone.trim()) return "Seller phone is required";
  return "";
}

async function deletePropertyFromApi(property: Property) {
  const id = Number(property.id);
  if (!Number.isInteger(id)) return;

  const response = await fetch(`/api/v1/listings?id=${id}`, {
    method: "DELETE",
  });

  if (!response.ok && response.status !== 404) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || "Failed to delete property");
  }
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium">
      <span className="mb-1 block text-[var(--brand-primary)]">{label}</span>
      {children}
    </label>
  );
}
