import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import React, { ReactNode } from "react";
import { LocaleProvider } from "../../LocaleProvider";

interface Props {
  readonly children: ReactNode;
  readonly params: Promise<{ lang: string }>;
}

export default async function SuperAdminLayout({ children, params }: Props) {
  const { lang } = await params;
  let messages;

  try {
    messages = (await import(`@/src/locales/${lang}.json`)).default;
  } catch {
    notFound();
  }
  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      <LocaleProvider routeLang={lang}>
        <main className="scrollbar-admin">{children}</main>
      </LocaleProvider>
    </NextIntlClientProvider>
  );
}
