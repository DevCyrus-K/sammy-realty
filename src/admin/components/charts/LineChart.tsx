import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Skeleton } from "../ui/Skeleton";
import { chartColors, getBaseOptions } from "./apex-config";
import { ChartShell } from "./ChartShell";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => <Skeleton className="h-72 w-full" />,
});

export function LineChart({
  title = "Line Chart",
  series,
  categories,
  height = 300,
}: {
  title?: string;
  series: { name: string; data: number[]; color?: string }[];
  categories: string[];
  height?: number;
}) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const base = getBaseOptions(isDark);
  const palette = Object.values(chartColors);
  const options = {
    ...base,
    chart: { ...base.chart, type: "line" as const },
    colors: series.map((item, index) => item.color || palette[index % palette.length]),
    stroke: { curve: "smooth" as const, width: 2.5 },
    markers: { size: 4, hover: { size: 6 } },
    xaxis: { categories },
  };

  return (
    <ChartShell title={title} height={height}>
      <ReactApexChart options={options} series={series} type="line" height={height} />
    </ChartShell>
  );
}
