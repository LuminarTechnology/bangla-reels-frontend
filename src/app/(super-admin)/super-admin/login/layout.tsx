import AdminAuthNavbar from "@/src/components/pages/super-admin/AdminAuthNavbar";
import React, { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

export default function SuperAdminLoginLayout({ children }: Props) {
  return (
    <main>
      <AdminAuthNavbar />
      {children}
    </main>
  );
}
