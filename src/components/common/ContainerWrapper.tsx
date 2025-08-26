import { cn } from "@/src/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ContainerWrapper = ({ children }: Props) => {
  return <div className={cn("mx-auto max-w-[1440px] px-2 md:px-4")}>{children}</div>;
};

export default ContainerWrapper;
