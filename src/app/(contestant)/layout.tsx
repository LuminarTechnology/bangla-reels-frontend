import React, { ReactNode } from "react";
import DashboardSidebar, { MobileSidebarTrigger } from "@/src/components/common/DashboardSidebar";
import DashboardNavbar from "@/src/components/common/DashboardNavbar";
import { ContestantSidebarItems } from "@/src/constants/DashboardSidebarItems";

interface Props {
  readonly children: ReactNode;
}

export default function ContestantDashboardLayout({ children }: Props) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar sidebarItems={ContestantSidebarItems} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="md:hidden">
          <MobileSidebarTrigger sidebarItems={ContestantSidebarItems} />
        </header>
        {/* Navbar */}
        <DashboardNavbar />

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">{children}</main>
      </div>
    </div>
  );
}
