import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import React, { ReactNode } from "react";
import { LocaleProvider } from "../../LocaleProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { enUS, esES, bnIN } from "@clerk/localizations";
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
  const lnLN = lang === "bn" ? bnIN : lang === "es" ? esES : enUS;
  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      <LocaleProvider routeLang={lang}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
          localization={lnLN}
        >
          <main className="scrollbar-admin">{children}</main>
        </ClerkProvider>
      </LocaleProvider>
    </NextIntlClientProvider>
  );
}
