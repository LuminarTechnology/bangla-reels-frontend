import AdminNavbar from "@/src/components/common/super-admin/AdminNavbar";
import AdminSidebar from "@/src/components/common/super-admin/AdminSidebar";
import React, { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Navbar */}
        <AdminNavbar />

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4">{children}</main>
      </div>
    </div>
  );
}
