import { useState } from "react";
import { MessageCircle, Phone, Pencil } from "lucide-react";
import { Property } from "@/lib/mock-data";
import { formatDate, formatPhone, formatPrice } from "@/lib/utils";
import { Button } from "../ui/Button";
import { Drawer } from "../ui/Drawer";
import { Select } from "../ui/Select";
import { StatusBadge } from "../shared/StatusBadge";

const tabs = ["Details", "Description", "Contact"] as const;

export function PropertyDrawer({
  property,
  onClose,
}: {
  property: Property | null;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Details");

  return (
    <Drawer
      open={Boolean(property)}
      onClose={onClose}
      title={property?.address || "Property"}
      widthClass="max-w-[520px]"
      footer={
        property ? (
          <>
            <Button variant="outline">
              <Pencil size={16} />
              Edit
            </Button>
            <Select className="w-40" defaultValue={property.status} aria-label="Change status">
              {["active", "pending", "sold", "draft", "hidden"].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </Select>
          </>
        ) : null
      }
    >
      {property ? (
        <div className="space-y-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-[var(--brand-muted)]">{property.title}</p>
              <p className="text-2xl font-bold text-[var(--brand-primary)]">{formatPrice(property.price)}</p>
            </div>
            <StatusBadge status={property.status} />
          </div>

          <div className="aspect-video overflow-hidden rounded-[var(--brand-radius)] bg-[var(--brand-surface)]">
            {property.image ? <img src={property.image} alt={property.title} className="h-full w-full object-cover" /> : null}
          </div>

          <div className="flex gap-1 border-b border-[var(--brand-border)]">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 text-sm font-medium ${
                  activeTab === tab ? "border-b-2 border-[var(--brand-primary)] text-[var(--brand-primary)]" : "text-[var(--brand-muted)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "Details" ? (
            <dl className="grid grid-cols-2 gap-3 text-sm">
              <Info label="Price" value={formatPrice(property.price)} />
              <Info label="Type" value={property.type} />
              <Info label="Beds" value={property.beds} />
              <Info label="Baths" value={property.baths} />
              <Info label="Sqft" value={property.sqft.toLocaleString()} />
              <Info label="Listed" value={formatDate(property.listedDate)} />
            </dl>
          ) : null}

          {activeTab === "Description" ? (
            <div className="rounded-[var(--brand-radius)] border border-[var(--brand-border)] p-4 text-sm leading-6 text-[var(--brand-muted)]">
              A conversion-ready listing in {property.address}. Keep the page focused on price, location, and the fastest possible seller contact.
            </div>
          ) : null}

          {activeTab === "Contact" ? (
            <div className="space-y-4">
              <div className="rounded-[var(--brand-radius)] border border-[var(--brand-border)] p-4">
                <p className="text-sm text-[var(--brand-muted)]">Seller</p>
                <p className="font-semibold">{property.owner}</p>
                <p className="text-sm">{formatPhone(property.phone)}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a href={`tel:${property.phone}`}>
                  <Button className="w-full">
                    <Phone size={16} />
                    Call
                  </Button>
                </a>
                <a href={`https://wa.me/${property.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
                  <Button variant="secondary" className="w-full">
                    <MessageCircle size={16} />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </Drawer>
  );
}

function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-[var(--brand-radius)] border border-[var(--brand-border)] p-3">
      <dt className="text-[var(--brand-muted)]">{label}</dt>
      <dd className="mt-1 font-medium">{value}</dd>
    </div>
  );
}
