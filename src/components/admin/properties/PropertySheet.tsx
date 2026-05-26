import { Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { StatusBadge } from "@/components/admin/shared/StatusBadge";
import type { Property } from "@/lib/mock-data";
import { formatPhone } from "@/lib/utils";

export function PropertySheet({
  property,
  open,
  onOpenChange,
}: {
  property?: Property | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!property) {
    return null;
  }

  const whatsappNumber = property.phone.replace(/\D/g, "");

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{property.title}</SheetTitle>
        </SheetHeader>
        <div className="space-y-4 px-4">
          {property.thumbnail ? (
            <img src={property.thumbnail} alt={property.title} className="h-44 w-full object-cover" />
          ) : null}
          <div className="flex items-center justify-between gap-3">
            <strong className="text-xl text-primary">{property.price}</strong>
            <StatusBadge status={property.status} />
          </div>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-muted-foreground">Address</dt>
              <dd className="m-0 font-medium">{property.address}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Seller</dt>
              <dd className="m-0 font-medium">{property.owner}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Phone</dt>
              <dd className="m-0 font-medium">{formatPhone(property.phone)}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Type</dt>
              <dd className="m-0 font-medium">{property.type}</dd>
            </div>
          </dl>
        </div>
        <SheetFooter>
          <Button asChild>
            <a href={`tel:${property.phone}`}>
              <Phone className="mr-1 size-4" /> Call Seller
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`https://wa.me/${whatsappNumber}`}>
              <Send className="mr-1 size-4" /> WhatsApp
            </a>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
