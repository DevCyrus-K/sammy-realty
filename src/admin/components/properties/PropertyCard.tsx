import { motion } from "framer-motion";
import { Bath, BedDouble, Home, Maximize, Pencil, Trash2 } from "lucide-react";
import { Property } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";
import { Button } from "../ui/Button";
import { Dropdown } from "../ui/Dropdown";
import { StatusBadge } from "../shared/StatusBadge";

export function PropertyCard({
  property,
  onClick,
  onEdit,
  onDelete,
}: {
  property: Property;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-video bg-gradient-to-br from-[var(--brand-surface)] to-[var(--brand-border)]">
        <button type="button" onClick={onClick} className="flex h-full w-full items-center justify-center text-[var(--brand-muted)]" aria-label={`View ${property.title}`}>
          {property.image ? <img src={property.image} alt={property.title} className="h-full w-full object-cover" /> : <Home size={40} />}
        </button>
        <div className="absolute left-3 top-3">
          <StatusBadge status={property.status} />
        </div>
        <div className="absolute right-3 top-3">
          <Dropdown
            items={[
              { label: "Edit", icon: <Pencil size={14} />, onClick: onEdit || (() => undefined) },
              { label: "Delete", icon: <Trash2 size={14} />, danger: true, separatorBefore: true, onClick: onDelete || (() => undefined) },
            ]}
          />
        </div>
      </div>
      <div className="p-4">
        <p className="text-xl font-bold text-[var(--brand-primary)]">{formatPrice(property.price)}</p>
        <h3 className="mt-1 truncate text-sm font-semibold">{property.title}</h3>
        <p className="mt-1 truncate text-sm text-[var(--brand-muted)]">{property.address}</p>
        <div className="mt-3 flex items-center gap-4 text-sm text-[var(--brand-muted)]">
          <span className="inline-flex items-center gap-1">
            <BedDouble size={15} />
            {property.beds}
          </span>
          <span className="inline-flex items-center gap-1">
            <Bath size={15} />
            {property.baths}
          </span>
          <span className="inline-flex items-center gap-1">
            <Maximize size={15} />
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>
      </div>
      <div className="flex gap-2 px-4 pb-4">
        <Button variant="outline" className="min-h-9 flex-1 px-3" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="ghost" className="min-h-9 flex-1 px-3" onClick={onClick}>
          View Details
        </Button>
      </div>
    </motion.article>
  );
}
