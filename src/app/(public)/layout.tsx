import React, { ReactNode } from "react";


interface Props {
  readonly children: ReactNode;
}

export default function UserLayout({ children }: Props) {
  return (
    <div>
      
      <main>{children}</main>
    </div>
  );
}
