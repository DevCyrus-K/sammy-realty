import { isValidElement, cloneElement } from "react";
import { motion } from "framer-motion";
import { Minus, TrendingDown, TrendingUp } from "lucide-react";
import { Card } from "../ui/Card";

function IconRender({ icon, className }: { icon: React.ReactNode; className?: string }) {
  if (isValidElement<{ className?: string; size?: number }>(icon)) {
    return cloneElement(icon, { className, size: 20 });
  }

  return <span className={className}>{icon}</span>;
}

export function KpiCard({
  label,
  value,
  delta,
  icon,
  index = 0,
  trend = "up",
}: {
  label: string;
  value: string;
  delta: string;
  icon: React.ReactNode;
  index?: number;
  trend?: "up" | "down" | "steady" | string;
}) {
  const trendDown = trend === "down";
  const TrendIcon = trendDown ? TrendingDown : trend === "steady" ? Minus : TrendingUp;

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08, duration: 0.3 }}>
      <Card className="relative min-h-36 overflow-hidden">
        <div className="flex items-start justify-between gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
            <IconRender icon={icon} />
          </span>
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
              trendDown
                ? "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                : "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
            }`}
          >
            <TrendIcon size={12} />
            {delta}
          </span>
        </div>
        <strong className="mt-3 block text-3xl font-bold text-[var(--brand-primary)]">{value}</strong>
        <p className="mt-1 text-sm text-[var(--brand-muted)]">{label}</p>
        <div className="pointer-events-none absolute -bottom-3 -right-3 text-[var(--brand-primary)] opacity-5">
          <IconRender icon={icon} className="size-16" />
        </div>
      </Card>
    </motion.div>
  );
}
