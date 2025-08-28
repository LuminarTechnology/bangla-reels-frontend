import ContainerWrapper from "@/src/components/common/ContainerWrapper";
import Footer from "@/src/components/common/Footer";
import Navbar from "@/src/components/common/Navbar";
import React, { ReactNode } from "react";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

interface Props {
  readonly children: ReactNode;
  readonly params: Promise<{ lang: string }>;
}

export default async function UserLayout({ children, params }: Props) {
  const { lang } = await params;

  let messages;
  try {
    messages = (await import(`../../../locales/${lang}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={lang}>
      <body>
        <NextIntlClientProvider locale={lang} messages={messages}>
          <div className="gradient-background">
            <Toaster position="top-right" richColors />
            <Navbar currentLang={lang} />
            <ContainerWrapper>{children}</ContainerWrapper>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
