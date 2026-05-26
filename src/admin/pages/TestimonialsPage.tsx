import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { testimonials as testimonialData, Testimonial } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { AdminLayout } from "../components/layout/AdminLayout";
import { StarRating } from "../components/shared/StarRating";
import { StatusBadge } from "../components/shared/StatusBadge";
import { Avatar } from "../components/ui/Avatar";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { ConfirmModal } from "../components/ui/ConfirmModal";
import { Dropdown } from "../components/ui/Dropdown";
import { Input } from "../components/ui/Input";
import { Modal } from "../components/ui/Modal";
import { PageHeader } from "../components/ui/PageHeader";
import { Select } from "../components/ui/Select";
import { Switch } from "../components/ui/Switch";
import { Textarea } from "../components/ui/Textarea";

const testimonialSchema = z.object({
  reviewer: z.string().min(2, "Reviewer name is required"),
  rating: z.number().min(1, "Choose a rating").max(5, "Choose a rating"),
  review: z.string().min(12, "Review must be at least 12 characters"),
});

type TestimonialForm = z.infer<typeof testimonialSchema>;

export default function TestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>(testimonialData);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Testimonial | null>(null);
  const [filter, setFilter] = useState<"all" | "published" | "hidden">("all");

  const form = useForm<TestimonialForm>({
    resolver: zodResolver(testimonialSchema),
    mode: "onChange",
    values: {
      reviewer: editing?.reviewer || "",
      rating: editing?.rating || 5,
      review: editing?.review || "",
    },
  });

  const saveTestimonial = form.handleSubmit((values) => {
    if (editing) {
      setItems((current) => {
        const nextItem = { ...editing, reviewer: values.reviewer, rating: values.rating as Testimonial["rating"], review: values.review };
        return editing.id === "testimonial-new"
          ? [{ ...nextItem, id: `testimonial-${Date.now()}`, date: new Date().toISOString(), status: "published" }, ...current]
          : current.map((item) => (item.id === editing.id ? nextItem : item));
      });
    }
    setEditing(null);
    toast.success("Changes saved successfully");
  });

  const confirmDelete = () => {
    if (!deleteTarget) return;
    setItems((current) => current.filter((item) => item.id !== deleteTarget.id));
    setDeleteTarget(null);
    toast.success("Item deleted");
  };

  const togglePublished = (testimonial: Testimonial, checked: boolean) => {
    setItems((current) =>
      current.map((item) => (item.id === testimonial.id ? { ...item, status: checked ? "published" : "hidden" } : item))
    );
    toast.success("Changes saved successfully");
  };

  const openAdd = () => {
    setEditing({
      id: "testimonial-new",
      reviewer: "",
      rating: 5,
      review: "",
      date: new Date().toISOString(),
      status: "published",
    });
  };

  const filteredItems = filter === "all" ? items : items.filter((item) => item.status === filter);

  return (
    <AdminLayout title="Testimonials">
      <PageHeader
        title="Testimonials"
        description={`${items.length} reviews`}
        actions={<Button onClick={openAdd}><Plus size={16} />Add Testimonial</Button>}
      />

      <div className="mb-4 flex flex-wrap gap-2">
        {(["all", "published", "hidden"] as const).map((item) => (
          <Button key={item} variant={filter === item ? "primary" : "outline"} onClick={() => setFilter(item)} className="capitalize">
            {item}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((testimonial) => (
          <motion.div key={testimonial.id} whileHover={{ y: -2 }}>
          <Card className="flex min-h-64 flex-col transition-shadow hover:shadow-md">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex min-w-0 gap-3">
                <Avatar name={testimonial.reviewer} />
                <div className="min-w-0">
                  <p className="truncate font-semibold text-[var(--brand-primary)]">{testimonial.reviewer}</p>
                  <p className="text-xs text-[var(--brand-muted)]">{formatDate(testimonial.date)}</p>
                </div>
              </div>
              <StatusBadge status={testimonial.status} />
            </div>
            <StarRating rating={testimonial.rating} />
            <p className="mt-4 line-clamp-3 flex-1 text-sm text-[var(--brand-muted)]">{testimonial.review}</p>
            <div className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--brand-border)] pt-4">
              <div className="flex items-center gap-2">
                <Switch checked={testimonial.status === "published"} onChange={(checked) => togglePublished(testimonial, checked)} label="Published toggle" />
                <span className="text-sm text-[var(--brand-muted)]">Published</span>
              </div>
              <Dropdown
                items={[
                  { label: "Edit", icon: <Pencil size={14} />, onClick: () => setEditing(testimonial) },
                  { label: "Delete", icon: <Trash2 size={14} />, danger: true, onClick: () => setDeleteTarget(testimonial) },
                ]}
              />
            </div>
          </Card>
          </motion.div>
        ))}
      </div>

      <Modal
        open={Boolean(editing)}
        onClose={() => setEditing(null)}
        title={editing?.id === "testimonial-new" ? "Add testimonial" : "Edit testimonial"}
        footer={
          <>
            <Button variant="outline" onClick={() => setEditing(null)}>
              Cancel
            </Button>
            <Button onClick={saveTestimonial} disabled={!form.formState.isValid}>
              Save
            </Button>
          </>
        }
      >
        <form className="space-y-3" onSubmit={saveTestimonial}>
          <Field label="Reviewer name" error={form.formState.errors.reviewer?.message}>
            <Input {...form.register("reviewer")} />
          </Field>
          <Field label="Rating" error={form.formState.errors.rating?.message}>
            <Select {...form.register("rating", { valueAsNumber: true })}>
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Review" error={form.formState.errors.review?.message}>
            <Textarea {...form.register("review")} />
          </Field>
        </form>
      </Modal>

      <ConfirmModal
        open={Boolean(deleteTarget)}
        title="Delete testimonial?"
        description="This removes the review from the admin grid."
        confirmLabel="Delete"
        onCancel={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
      />
    </AdminLayout>
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
