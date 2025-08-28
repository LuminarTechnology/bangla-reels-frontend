import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import "@/src/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "../config/site";
import { cn } from "../lib/utils";
import { fontSans } from "../config/fonts";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html suppressHydrationWarning={true}>
        <body className={cn("min-h-screen", fontSans.variable)} suppressHydrationWarning>
          <StoreProvider>{children}</StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
