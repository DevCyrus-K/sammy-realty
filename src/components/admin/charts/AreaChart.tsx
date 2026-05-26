import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function AreaChart({ data, xKey, yKey }: { data: unknown[]; xKey: string; yKey: string }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsAreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
        <XAxis dataKey={xKey} tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip />
        <Area dataKey={yKey} stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.16} />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
}
