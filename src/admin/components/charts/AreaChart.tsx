import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Skeleton } from "../ui/Skeleton";
import { chartColors, getBaseOptions } from "./apex-config";
import { ChartShell } from "./ChartShell";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => <Skeleton className="h-72 w-full" />,
});

export function AreaChart({
  title = "Area Chart",
  data,
  categories,
  name = "Growth",
  colors = [chartColors.primary],
  height = 300,
}: {
  title?: string;
  data: number[];
  categories: string[];
  name?: string;
  colors?: string[];
  height?: number;
}) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const base = getBaseOptions(isDark);
  const options = {
    ...base,
    chart: { ...base.chart, type: "area" as const },
    fill: {
      type: "gradient",
      gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0.02, stops: [0, 90, 100] },
    },
    stroke: { curve: "smooth" as const, width: 2.5 },
    colors,
    xaxis: { categories },
  };

  return (
    <ChartShell title={title} height={height}>
      <ReactApexChart options={options} series={[{ name, data }]} type="area" height={height} />
    </ChartShell>
  );
}
