import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function LineChart({ data, xKey, yKey }: { data: unknown[]; xKey: string; yKey: string }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
        <XAxis dataKey={xKey} tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip />
        <Line dataKey={yKey} stroke="hsl(var(--primary))" strokeWidth={3} dot={false} />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}
