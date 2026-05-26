import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Skeleton } from "../ui/Skeleton";
import { chartColors, getBaseOptions } from "./apex-config";
import { ChartShell } from "./ChartShell";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => <Skeleton className="h-72 w-full" />,
});

export function BarChart({
  title = "Bar Chart",
  data,
  categories,
  horizontal = false,
  name = "Listings",
  height = 300,
}: {
  title?: string;
  data: number[];
  categories: string[];
  horizontal?: boolean;
  name?: string;
  height?: number;
}) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const base = getBaseOptions(isDark);
  const options = {
    ...base,
    chart: { ...base.chart, type: "bar" as const },
    colors: [chartColors.primary, chartColors.accent],
    plotOptions: {
      bar: {
        borderRadius: 6,
        horizontal,
        columnWidth: "55%",
      },
    },
    xaxis: { categories },
  };

  return (
    <ChartShell title={title} height={height}>
      <ReactApexChart options={options} series={[{ name, data }]} type="bar" height={height} />
    </ChartShell>
  );
}
