import type { ApexOptions } from "apexcharts";

export const getBaseOptions = (isDark: boolean): ApexOptions => ({
  chart: {
    background: "transparent",
    toolbar: { show: false },
    zoom: { enabled: false },
    fontFamily: "var(--brand-font, inherit)",
    foreColor: isDark ? "#94A3B8" : "#64748B",
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 700,
      animateGradually: { enabled: true, delay: 100 },
    } as unknown as ApexOptions["chart"]["animations"],
  },
  grid: {
    borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
    strokeDashArray: 4,
    padding: { top: 0, right: 0, bottom: 0, left: 10 },
  },
  tooltip: {
    theme: isDark ? "dark" : "light",
    style: { fontFamily: "var(--brand-font, inherit)", fontSize: "13px" },
  },
  legend: {
    fontFamily: "var(--brand-font, inherit)",
    fontSize: "13px",
    itemMargin: { horizontal: 12 },
  },
  dataLabels: { enabled: false },
});

export const chartColors = {
  primary: "var(--brand-primary)",
  accent: "var(--brand-accent)",
  success: "var(--brand-success)",
  warning: "var(--brand-warning)",
  danger: "var(--brand-danger)",
  muted: "var(--brand-muted)",
  blue: "rgb(49, 103, 168)",
  teal: "rgb(13, 148, 136)",
};
