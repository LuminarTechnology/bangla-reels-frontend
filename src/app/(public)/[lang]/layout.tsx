import ContainerWrapper from "@/src/components/common/ContainerWrapper";
import Footer from "@/src/components/common/Footer";
import Navbar from "@/src/components/common/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import React, { ReactNode } from "react";
import { Toaster } from "sonner";

interface Props {
  readonly children: ReactNode;
  readonly params: Promise<{ lang: string }>;
}

export default async function UserLayout({ children, params }: Props) {
  const { lang } = await params;
  let messages;

  try {
    messages = (await import(`@/src/locales/${lang}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      <div className="gradient-background">
        <Toaster position="top-right" richColors />
        <Navbar currentLang={lang} />
        <ContainerWrapper>
          <NextIntlClientProvider locale={lang} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ContainerWrapper>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
