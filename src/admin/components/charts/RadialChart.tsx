import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Skeleton } from "../ui/Skeleton";
import { chartColors, getBaseOptions } from "./apex-config";
import { ChartShell } from "./ChartShell";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => <Skeleton className="h-72 w-full" />,
});

export function RadialChart({
  title = "Progress",
  value,
  label,
  height = 300,
}: {
  title?: string;
  value: number;
  label: string;
  height?: number;
}) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const base = getBaseOptions(isDark);
  const options = {
    ...base,
    chart: { ...base.chart, type: "radialBar" as const },
    colors: [chartColors.accent],
    labels: [label],
    plotOptions: {
      radialBar: {
        hollow: { size: "58%" },
        dataLabels: {
          value: {
            formatter: (val: number) => `${Math.round(val)}%`,
          },
        },
      },
    },
  };

  return (
    <ChartShell title={title} height={height}>
      <ReactApexChart options={options} series={[value]} type="radialBar" height={height} />
    </ChartShell>
  );
}
