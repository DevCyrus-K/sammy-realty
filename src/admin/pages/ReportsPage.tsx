import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import type { ColumnDef } from "@tanstack/react-table";
import { BarChart3, Mail, MousePointerClick, Send } from "lucide-react";
import { chartData } from "@/lib/mock-data";
import { AdminLayout } from "../components/layout/AdminLayout";
import { AreaChart } from "../components/charts/AreaChart";
import { BarChart } from "../components/charts/BarChart";
import { chartColors } from "../components/charts/apex-config";
import { LineChart } from "../components/charts/LineChart";
import { PieChart } from "../components/charts/PieChart";
import { KpiCard } from "../components/dashboard/KpiCard";
import { DataTable } from "../components/data-table/DataTable";
import { DataTableColumnHeader } from "../components/data-table/DataTableColumnHeader";
import { Button } from "../components/ui/Button";
import { PageHeader } from "../components/ui/PageHeader";

const tabs = ["listings", "visitors", "customers", "email"] as const;

export default function ReportsPage() {
  const router = useRouter();
  const routeType = typeof router.query.type === "string" ? router.query.type : "";
  const initialTab = tabs.includes(routeType as (typeof tabs)[number]) ? (routeType as (typeof tabs)[number]) : "listings";
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const changeTab = (tab: (typeof tabs)[number]) => {
    setActiveTab(tab);
    router.push(tab === "listings" ? "/admin/reports" : `/admin/reports/${tab}`);
  };

  const emailSeries = useMemo(
    () => [
      { name: "Sent", data: chartData.emailWeekly.map((item) => item.sent), color: chartColors.primary },
      { name: "Delivered", data: chartData.emailWeekly.map((item) => item.delivered), color: chartColors.success },
      { name: "Opened", data: chartData.emailWeekly.map((item) => item.opened), color: chartColors.accent },
      { name: "Bounced", data: chartData.emailWeekly.map((item) => item.bounced), color: chartColors.danger },
    ],
    []
  );

  const topPageColumns = useMemo<ColumnDef<(typeof chartData.topPages)[number]>[]>(
    () => [
      { accessorKey: "page", header: ({ column }) => <DataTableColumnHeader column={column} title="Page" /> },
      {
        accessorKey: "views",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Views" />,
        cell: ({ row }) => row.original.views.toLocaleString(),
      },
      { accessorKey: "bounceRate", header: ({ column }) => <DataTableColumnHeader column={column} title="Bounce Rate" /> },
    ],
    []
  );

  return (
    <AdminLayout title="Reports">
      <PageHeader title="Reports" description="See which listings, channels, and messages turn attention into seller contact." />

      <div className="mb-4 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <Button key={tab} variant={activeTab === tab ? "primary" : "outline"} onClick={() => changeTab(tab)}>
            {tab}
          </Button>
        ))}
      </div>

      {activeTab === "listings" ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <BarChart
              title="Listing Count by Type"
              horizontal
              data={chartData.listingsByType.map((item) => item.count)}
              categories={chartData.listingsByType.map((item) => item.type)}
              name="Listings"
            />
            <PieChart
              title="Status Breakdown"
              labels={chartData.statusBreakdown.map((item) => item.status)}
              values={chartData.statusBreakdown.map((item) => item.count)}
              colors={[chartColors.success, chartColors.warning, chartColors.primary, chartColors.muted]}
            />
        </div>
      ) : null}

      {activeTab === "visitors" ? (
        <div className="space-y-6">
            <AreaChart
              title="Daily Visitors"
              categories={chartData.dailyVisitors.map((item) => item.date)}
              data={chartData.dailyVisitors.map((item) => item.visitors)}
              name="Visitors"
            />
          <DataTable
            data={chartData.topPages}
            columns={topPageColumns}
            searchColumn="page"
            searchPlaceholder="Search pages"
            onBulkDelete={() => undefined}
          />
        </div>
      ) : null}

      {activeTab === "customers" ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <PieChart
              title="Acquisition Source"
              labels={chartData.acquisitionSource.map((item) => item.source)}
              values={chartData.acquisitionSource.map((item) => item.count)}
              colors={[chartColors.primary, chartColors.accent, chartColors.success, chartColors.warning, chartColors.teal]}
            />
            <AreaChart
              title="Customer Growth"
              data={chartData.customerGrowth.map((item) => item.count)}
              categories={chartData.customerGrowth.map((item) => item.month)}
              name="Customers"
              colors={[chartColors.accent]}
            />
        </div>
      ) : null}

      {activeTab === "email" ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            <KpiCard label="Sent" value="4,820" delta="8%" icon={<Send size={34} />} />
            <KpiCard label="Delivered" value="4,701" delta="7%" icon={<Mail size={34} />} index={1} />
            <KpiCard label="Opened" value="2,134" delta="12%" icon={<MousePointerClick size={34} />} index={2} />
            <KpiCard label="Bounced" value="119" delta="3%" icon={<BarChart3 size={34} />} index={3} />
          </div>
          <LineChart title="Weekly Email Trend" categories={chartData.emailWeekly.map((item) => item.week)} series={emailSeries} />
        </div>
      ) : null}
    </AdminLayout>
  );
}
