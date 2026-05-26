import { ActivityItem } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { Card, CardHeader, CardTitle } from "../ui/Card";

const tones: Record<ActivityItem["type"], string> = {
  listing: "bg-[var(--brand-primary)]",
  message: "bg-[var(--brand-accent)]",
  review: "bg-[var(--brand-warning)]",
};

export function ActivityFeed({ items }: { items: ActivityItem[] }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <div className="max-h-[340px] overflow-y-auto pr-2">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3 border-b border-[var(--brand-border)] py-3 last:border-0">
            <span className={`mt-1 size-2.5 shrink-0 rounded-full ${tones[item.type]}`} />
            <div className="min-w-0 flex-1">
              <p className="text-sm text-inherit">{item.description}</p>
              <p className="mt-1 text-xs text-[var(--brand-muted)]">{formatDate(item.timestamp)}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
