import Link from "next/link";
import { Download, MessageSquare, PlusCircle } from "lucide-react";
import { Button } from "../ui/Button";

export function QuickActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/admin/properties"
        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[var(--brand-radius)] bg-[var(--brand-primary)] px-4 py-2 text-sm font-medium text-white transition-all duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
      >
          <PlusCircle size={16} />
          Add Listing
      </Link>
      <Link
        href="/admin/messages"
        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-transparent px-4 py-2 text-sm font-medium text-[var(--brand-primary)] transition-all duration-150 hover:bg-[var(--brand-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
      >
          <MessageSquare size={16} />
          View Messages
      </Link>
      <Button variant="ghost">
        <Download size={16} />
        Export Report
      </Button>
    </div>
  );
}
