import ContainerWrapper from "@/src/components/common/ContainerWrapper";
import Footer from "@/src/components/common/Footer";
import Navbar from "@/src/components/common/Navbar";
import React, { ReactNode } from "react";
import { Toaster } from "sonner";

interface Props {
  readonly children: ReactNode;
}

export default function UserLayout({ children }: Props) {
  return (
    <div className="gradient-background">
      <Toaster position="top-right" richColors />
      <Navbar />
      <ContainerWrapper>{children}</ContainerWrapper>
      <Footer />
    </div>
  );
}
