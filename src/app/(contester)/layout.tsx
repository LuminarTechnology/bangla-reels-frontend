import React, { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

export default function ContesterLayout({ children }: Props) {
  return <main className="container mx-auto px-10">{children}</main>;
}
