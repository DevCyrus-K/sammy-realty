import { Download, Mail, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button asChild>
        <Link href="/admin/listing-requests">
          <Plus className="mr-1 size-4" /> Add Listing
        </Link>
      </Button>
      <Button asChild variant="outline">
        <Link href="/admin/messages">
          <Mail className="mr-1 size-4" /> View Messages
        </Link>
      </Button>
      <Button variant="ghost">
        <Download className="mr-1 size-4" /> Export Report
      </Button>
    </div>
  );
}
