import DashboardNavbar from "@/src/components/common/DashboardNavbar";
import DashboardSidebar from "@/src/components/common/DashboardSidebar";
import { SuperAdminSidebarItems } from "@/src/constants/DashboardSidebarItems";
import { hasRole } from "@/src/utils/roles";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

export default async function SuperAdminDashboardLayout({ children }: Props) {
  // Protect the page from users who are not admins
  // const isAdmin = await hasRole("superAdmin");
  // if (!isAdmin) {
  //   redirect("/sign-in");
  // }
  return (
    <div className="flex h-screen max-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar sidebarItems={SuperAdminSidebarItems} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Navbar */}
        <DashboardNavbar />

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4">{children}</main>
      </div>
    </div>
  );
}
