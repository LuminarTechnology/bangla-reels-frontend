import { cn } from "@/src/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ContainerWrapper = ({ children }: Props) => {
  return <div className={cn(" max-w-[1440px] mx-auto px-4 bg-rose-900")}>{children}</div>;
};

export default ContainerWrapper;
