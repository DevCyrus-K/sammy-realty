import { Circle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const dotColor: Record<string, string> = {
  listing: "text-primary",
  message: "text-accent",
  review: "text-[var(--brand-success)]",
};

export function ActivityFeed({
  items,
}: {
  items: { type: string; description: string; time: string }[];
}) {
  return (
    <ScrollArea className="h-[320px]">
      <div className="pr-4">
        {items.map((item, index) => (
          <div key={`${item.description}-${item.time}`}>
            <div className="flex gap-3 py-3">
              <Circle className={cn("mt-1 size-3 fill-current", dotColor[item.type] || "text-primary")} />
              <div className="min-w-0 flex-1">
                <p className="m-0 text-sm font-medium text-foreground">{item.description}</p>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
            </div>
            {index < items.length - 1 ? <Separator /> : null}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
