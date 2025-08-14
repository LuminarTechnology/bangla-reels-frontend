import React, { ReactNode } from "react";
import Navbar from "@/src/components/shared/Navbar";

interface Props {
  readonly children: ReactNode;
}

export default function UserLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
