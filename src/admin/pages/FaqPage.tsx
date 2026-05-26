import { useMemo, useState } from "react";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GripVertical, Pencil, Plus, Trash2 } from "lucide-react";
import { faqs as faqData, Faq } from "@/lib/mock-data";
import { AdminLayout } from "../components/layout/AdminLayout";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { ConfirmModal } from "../components/ui/ConfirmModal";
import { Input } from "../components/ui/Input";
import { Modal } from "../components/ui/Modal";
import { PageHeader } from "../components/ui/PageHeader";
import { Textarea } from "../components/ui/Textarea";

const faqSchema = z.object({
  question: z.string().min(10, "Question must be at least 10 characters"),
  answer: z.string().min(20, "Answer must be at least 20 characters"),
});

type FaqForm = z.infer<typeof faqSchema>;

export default function FaqPage() {
  const [items, setItems] = useState<Faq[]>(faqData);
  const [addOpen, setAddOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Faq | null>(null);
  const [draft, setDraft] = useState<FaqForm>({ question: "", answer: "" });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const form = useForm<FaqForm>({
    resolver: zodResolver(faqSchema),
    mode: "onChange",
    defaultValues: { question: "", answer: "" },
  });

  const orderedItems = useMemo(() => [...items].sort((a, b) => a.order - b.order), [items]);

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setItems((current) => {
      const oldIndex = current.findIndex((item) => item.id === active.id);
      const newIndex = current.findIndex((item) => item.id === over.id);
      return arrayMove(current, oldIndex, newIndex).map((item, index) => ({ ...item, order: index + 1 }));
    });
    toast.success("Changes saved successfully");
  };

  const openEdit = (item: Faq) => {
    setEditingId(item.id);
    setDraft({ question: item.question, answer: item.answer });
  };

  const saveEdit = () => {
    const parsed = faqSchema.safeParse(draft);
    if (!parsed.success || !editingId) {
      toast.error("Something went wrong - please try again");
      return;
    }
    setItems((current) => current.map((item) => (item.id === editingId ? { ...item, ...parsed.data } : item)));
    setEditingId(null);
    toast.success("Changes saved successfully");
  };

  const addFaq = form.handleSubmit((values) => {
    setItems((current) => [
      ...current,
      {
        id: `faq-new-${Date.now()}`,
        question: values.question,
        answer: values.answer,
        order: current.length + 1,
      },
    ]);
    form.reset();
    setAddOpen(false);
    toast.success("Changes saved successfully");
  });

  const closeAddModal = () => {
    form.reset();
    setAddOpen(false);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    setItems((current) => current.filter((item) => item.id !== deleteTarget.id).map((item, index) => ({ ...item, order: index + 1 })));
    setDeleteTarget(null);
    toast.success("Item deleted");
  };

  return (
    <AdminLayout title="FAQ">
      <PageHeader
        title="FAQ"
        description={`${items.length} questions`}
        actions={
          <Button onClick={() => setAddOpen(true)}>
            <Plus size={16} />
            Add Question
          </Button>
        }
      />

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={orderedItems.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-3">
            {orderedItems.map((item) => (
              <SortableFaqItem
                key={item.id}
                item={item}
                editing={editingId === item.id}
                draft={draft}
                onDraftChange={setDraft}
                onEdit={() => openEdit(item)}
                onCancel={() => setEditingId(null)}
                onSave={saveEdit}
                onDelete={() => setDeleteTarget(item)}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <Modal
        open={addOpen}
        onClose={closeAddModal}
        title="Add FAQ"
        footer={
          <>
            <Button variant="outline" onClick={closeAddModal}>
              Cancel
            </Button>
            <Button onClick={addFaq} disabled={!form.formState.isValid}>
              Save FAQ
            </Button>
          </>
        }
      >
        <form className="space-y-3" onSubmit={addFaq}>
          <Field label="Question" error={form.formState.errors.question?.message}>
            <Input {...form.register("question")} />
          </Field>
          <Field label="Answer" error={form.formState.errors.answer?.message}>
            <Textarea {...form.register("answer")} />
          </Field>
        </form>
      </Modal>

      <ConfirmModal
        open={Boolean(deleteTarget)}
        title="Delete FAQ?"
        description="This removes the question from the admin list."
        confirmLabel="Delete"
        onCancel={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
      />
    </AdminLayout>
  );
}

function SortableFaqItem({
  item,
  editing,
  draft,
  onDraftChange,
  onEdit,
  onCancel,
  onSave,
  onDelete,
}: {
  item: Faq;
  editing: boolean;
  draft: FaqForm;
  onDraftChange: (draft: FaqForm) => void;
  onEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
  onDelete: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Card className="flex gap-3">
        <button type="button" className="mt-1 cursor-grab text-[var(--brand-muted)] active:cursor-grabbing" aria-label="Drag FAQ" {...attributes} {...listeners}>
          <GripVertical size={18} />
        </button>
        <div className="min-w-0 flex-1">
          {editing ? (
            <div className="space-y-3">
              <Input value={draft.question} onChange={(event) => onDraftChange({ ...draft, question: event.target.value })} />
              <Textarea value={draft.answer} onChange={(event) => onDraftChange({ ...draft, answer: event.target.value })} />
              <div className="flex gap-2">
                <Button onClick={onSave}>Save</Button>
                <Button variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <>
              <p className="font-medium text-[var(--brand-primary)]">{item.question}</p>
              <p className="mt-1 line-clamp-2 text-sm text-[var(--brand-muted)]">{item.answer}</p>
            </>
          )}
        </div>
        {!editing ? (
          <div className="flex gap-2">
            <Button variant="outline" className="size-9 px-0" aria-label="Edit FAQ" onClick={onEdit}>
              <Pencil size={16} />
            </Button>
            <Button variant="danger" className="size-9 px-0" aria-label="Delete FAQ" onClick={onDelete}>
              <Trash2 size={16} />
            </Button>
          </div>
        ) : null}
      </Card>
    </div>
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
