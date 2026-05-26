import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function BarChart({ data, xKey, yKey }: { data: unknown[]; xKey: string; yKey: string }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
        <XAxis dataKey={xKey} tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip />
        <Bar dataKey={yKey} fill="hsl(var(--primary))" radius={[0, 0, 0, 0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
