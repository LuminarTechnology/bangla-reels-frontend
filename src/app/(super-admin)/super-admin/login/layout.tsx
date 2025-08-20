import AdminAuthNavbar from "@/src/components/common/super-admin/AdminAuthNavbar";
import React, { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

export default function SuperAdminLoginLayout({ children }: Props) {
  return (
    <main className="container mx-auto px-10">
      <AdminAuthNavbar />
      {children}
    </main>
  );
}
