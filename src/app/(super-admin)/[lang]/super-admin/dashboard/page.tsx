import AnalyticsDashboard from "@/src/components/pages/super-admin/dashboard/AnalyticsDashboard";
import { DashboardHeader } from "@/src/components/pages/super-admin/dashboard/DashboardHeader";
import DashboardMetrics from "@/src/components/pages/super-admin/dashboard/DashboardMetrics";

import React from "react";

export default function SuperAdminDashboard() {
  return (
    <div>
      <DashboardHeader />
      <DashboardMetrics />
      <AnalyticsDashboard />
    </div>
  );
}
