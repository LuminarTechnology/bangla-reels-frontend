import Navbar from "@/src/components/shared/Navbar";
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
