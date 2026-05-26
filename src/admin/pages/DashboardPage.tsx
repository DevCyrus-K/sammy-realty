import { Building2, Eye, MessageSquare, UserPlus } from "lucide-react";
import { activityFeed, chartData, dashboardKpis } from "@/lib/mock-data";
import { AdminLayout } from "../components/layout/AdminLayout";
import { PageHeader } from "../components/ui/PageHeader";
import { BarChart } from "../components/charts/BarChart";
import { ActivityFeed } from "../components/dashboard/ActivityFeed";
import { KpiCard } from "../components/dashboard/KpiCard";
import { QuickActions } from "../components/dashboard/QuickActions";

const icons = [
  <Building2 key="listings" />,
  <UserPlus key="leads" />,
  <MessageSquare key="messages" />,
  <Eye key="views" />,
];

export default function DashboardPage() {
  return (
    <AdminLayout title="Dashboard">
      <PageHeader title="Dashboard" description="Welcome back - here's what's happening" />
      <div className="mb-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
        {dashboardKpis.map((item, index) => (
          <KpiCard key={item.title} label={item.title} value={item.value} delta={item.delta} icon={icons[index]} trend={item.trend} index={index} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <BarChart
            title="Listings Added per Month"
            data={chartData.listingsByMonth.map((item) => item.count)}
            categories={chartData.listingsByMonth.map((item) => item.month)}
          />
        </div>
        <ActivityFeed items={activityFeed} />
      </div>
      <div className="mt-6">
        <QuickActions />
      </div>
    </AdminLayout>
  );
}
