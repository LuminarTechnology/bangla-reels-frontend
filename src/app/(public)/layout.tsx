import Navbar from "@/src/components/common/Navbar";
import React, { ReactNode } from "react";

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
