import React, { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

export default function SuperAdminLayout({ children }: Props) {
  return <main className="container mx-auto px-10">{children}</main>;
}
