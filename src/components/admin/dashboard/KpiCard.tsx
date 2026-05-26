import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function KpiCard({
  title,
  value,
  delta,
  icon: Icon,
  iconColor = "text-primary",
}: {
  title: string;
  value: string;
  delta: string;
  icon: LucideIcon;
  iconColor?: string;
}) {
  return (
    <Card>
      <CardContent className="flex items-start justify-between gap-3">
        <div>
          <p className="m-0 text-sm text-muted-foreground">{title}</p>
          <strong className="mt-2 block text-2xl font-semibold text-foreground">{value}</strong>
          <span className="mt-1 block text-xs text-muted-foreground">{delta}</span>
        </div>
        <span className={cn("grid size-10 shrink-0 place-items-center bg-primary/10", iconColor)}>
          <Icon className="size-5" />
        </span>
      </CardContent>
    </Card>
  );
}
