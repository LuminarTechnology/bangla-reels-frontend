import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import "@/src/styles/globals.css";

interface Props {
  readonly children: ReactNode;
}


export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="gradient-background min-h-screen">{children}</body>
      </html>
    </StoreProvider>
  );
}
