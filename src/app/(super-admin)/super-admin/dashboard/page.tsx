import { DashboardHeader } from "@/src/components/pages/super-admin/DashboardHeader";
import DashboardMetrics from "@/src/components/pages/super-admin/DashboardMetrics";
import React from "react";

export default function SuperAdminDashboard() {
  return (
    <div>
      <DashboardHeader/>
      <DashboardMetrics/>
    </div>
  );
}
