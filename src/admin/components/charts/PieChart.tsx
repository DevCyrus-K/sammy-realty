import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Skeleton } from "../ui/Skeleton";
import { chartColors, getBaseOptions } from "./apex-config";
import { ChartShell } from "./ChartShell";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => <Skeleton className="h-72 w-full" />,
});

export function PieChart({
  title = "Breakdown",
  labels,
  values,
  donut = true,
  colors = [chartColors.primary, chartColors.accent, chartColors.success, chartColors.warning, chartColors.blue],
  height = 300,
}: {
  title?: string;
  labels: string[];
  values: number[];
  donut?: boolean;
  colors?: string[];
  height?: number;
}) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const base = getBaseOptions(isDark);
  const options = {
    ...base,
    chart: { ...base.chart, type: donut ? ("donut" as const) : ("pie" as const) },
    colors,
    labels,
    legend: { ...base.legend, position: "bottom" as const },
    plotOptions: { pie: { donut: { size: "68%" } } },
  };

  return (
    <ChartShell title={title} height={height}>
      <ReactApexChart options={options} series={values} type={donut ? "donut" : "pie"} height={height} />
    </ChartShell>
  );
}
