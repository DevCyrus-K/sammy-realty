import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { Archive, ArrowLeft, MessageSquare, PenSquare, Send, Trash2 } from "lucide-react";
import { messages, Message } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { AdminLayout } from "../components/layout/AdminLayout";
import { Avatar } from "../components/ui/Avatar";
import { Button } from "../components/ui/Button";
import { ConfirmModal } from "../components/ui/ConfirmModal";
import { PageHeader } from "../components/ui/PageHeader";
import { Textarea } from "../components/ui/Textarea";

const filters = ["all", "unread", "archived"] as const;

export default function MessagesPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const [activeId, setActiveId] = useState(messages[0]?.id);
  const [reply, setReply] = useState("");
  const [sendingReply, setSendingReply] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [mobileView, setMobileView] = useState<"list" | "detail">("list");

  const filteredMessages = useMemo(
    () => (filter === "all" ? messages : messages.filter((message) => message.status === filter)),
    [filter]
  );
  const selected = messages.find((message) => message.id === activeId) || filteredMessages[0] || messages[0];

  const sendReply = async () => {
    if (!reply.trim()) {
      toast.error("Something went wrong - please try again");
      return;
    }

    if (!selected) return;

    setSendingReply(true);
    try {
      const response = await fetch("/api/messages/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: selected.email,
          senderName: selected.sender,
          subject: selected.subject,
          message: reply,
        }),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Failed to send message");
      }

      if (payload.emailDelivery?.skipped) {
        toast.error("Add RESEND_API_KEY to deliver this email");
      } else {
        toast.success("Message sent");
      }
      setReply("");
    } catch (error) {
      console.error("Reply send failed:", error);
      toast.error("Message delivery failed");
    } finally {
      setSendingReply(false);
    }
  };

  const openThread = (id: string) => {
    setActiveId(id);
    setMobileView("detail");
  };

  return (
    <AdminLayout title="Messages">
      <PageHeader title="Messages" description={`${messages.filter((message) => message.status === "unread").length} unread messages`} />

      <div className="grid min-h-[640px] grid-cols-1 overflow-hidden rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] md:grid-cols-[320px_1fr]">
        <aside className={`${mobileView === "detail" ? "hidden md:block" : "block"} border-b border-[var(--brand-border)] md:border-b-0 md:border-r`}>
          <div className="flex items-center justify-between border-b border-[var(--brand-border)] p-4">
            <h2 className="font-semibold text-[var(--brand-primary)]">Inbox</h2>
            <Button variant="ghost" className="size-9 px-0" aria-label="Compose message" onClick={() => toast.success("Changes saved successfully")}>
              <PenSquare size={17} />
            </Button>
          </div>
          <div className="flex gap-1 border-b border-[var(--brand-border)] p-2">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`flex-1 rounded-[var(--brand-radius)] px-3 py-2 text-xs font-semibold capitalize transition ${
                  filter === item ? "bg-[var(--brand-primary)] text-white" : "text-[var(--brand-muted)] hover:bg-[var(--brand-surface)]"
                }`}
              >
                {item}
                <span className="ml-1 rounded-full bg-[var(--brand-card)] px-1.5 text-[10px] text-[var(--brand-muted)]">
                  {item === "all" ? messages.length : messages.filter((message) => message.status === item).length}
                </span>
              </button>
            ))}
          </div>
          <div className="max-h-[586px] overflow-y-auto">
            {filteredMessages.map((message) => (
              <MessageThreadButton key={message.id} message={message} active={selected?.id === message.id} onClick={() => openThread(message.id)} />
            ))}
          </div>
        </aside>

        <section className={`${mobileView === "list" ? "hidden md:flex" : "flex"} min-h-[520px] flex-col`}>
          {selected ? (
            <>
              <header className="flex items-start justify-between gap-3 border-b border-[var(--brand-border)] p-4">
                <div className="flex min-w-0 gap-3">
                  <Button variant="ghost" className="size-9 px-0 md:hidden" aria-label="Back to messages" onClick={() => setMobileView("list")}>
                    <ArrowLeft size={17} />
                  </Button>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-[var(--brand-primary)]">{selected.sender}</p>
                    <p className="truncate text-sm text-[var(--brand-muted)]">{selected.subject}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="size-9 px-0" aria-label="Archive conversation" onClick={() => toast.success("Changes saved successfully")}>
                    <Archive size={16} />
                  </Button>
                  <Button variant="danger" className="size-9 px-0" aria-label="Delete conversation" onClick={() => setDeleteOpen(true)}>
                    <Trash2 size={16} />
                  </Button>
                </div>
              </header>

              <div className="flex-1 overflow-y-auto p-5">
                <h2 className="mb-4 text-lg font-semibold text-[var(--brand-primary)]">{selected.subject}</h2>
                <div className="max-w-2xl rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-4">
                  <p className="text-xs text-[var(--brand-muted)]">{formatDate(selected.timestamp)}</p>
                  <p className="mt-2 text-sm leading-6">{selected.body}</p>
                </div>
              </div>

              <footer className="sticky bottom-0 border-t border-[var(--brand-border)] bg-[var(--brand-card)] p-4">
                <Textarea value={reply} onChange={(event) => setReply(event.target.value)} placeholder="Write a fast, helpful reply..." />
                <div className="mt-3 flex justify-end">
                  <Button onClick={sendReply} disabled={sendingReply}>
                    <Send size={16} />
                    {sendingReply ? "Sending..." : "Send"}
                  </Button>
                </div>
              </footer>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 text-[var(--brand-muted)]">
              <MessageSquare size={48} />
              <p>Select a message</p>
            </div>
          )}
        </section>
      </div>

      <ConfirmModal
        open={deleteOpen}
        title="Delete conversation?"
        description="This removes the message from the inbox."
        confirmLabel="Delete"
        onCancel={() => setDeleteOpen(false)}
        onConfirm={() => {
          toast.success("Item deleted");
          setDeleteOpen(false);
        }}
      />
    </AdminLayout>
  );
}

function MessageThreadButton({ message, active, onClick }: { message: Message; active: boolean; onClick: () => void }) {
  const unread = message.status === "unread";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full gap-3 border-b border-[var(--brand-border)] p-3 text-left transition hover:bg-[var(--brand-surface)] ${
        active ? "bg-[var(--brand-primary)]/10" : ""
      } ${unread ? "border-l-2 border-l-[var(--brand-primary)]" : ""}`}
    >
      <Avatar name={message.sender} />
      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-2">
          <span className={`truncate text-sm ${unread ? "font-semibold text-[var(--brand-primary)]" : "font-medium"}`}>{message.sender}</span>
          <span className="whitespace-nowrap text-[10px] text-[var(--brand-muted)]">{formatDate(message.timestamp)}</span>
        </span>
        <span className="block truncate text-xs font-medium">{message.subject}</span>
        <span className="block truncate text-xs text-[var(--brand-muted)]">{message.preview}</span>
      </span>
      {unread ? <span className="mt-2 size-2 rounded-full bg-[var(--brand-accent)]" /> : null}
    </button>
  );
}
