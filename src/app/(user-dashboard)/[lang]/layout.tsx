import ContainerWrapper from "@/src/components/common/ContainerWrapper";
import Footer from "@/src/components/common/Footer";
import Navbar from "@/src/components/common/Navbar";
import UserDashboardSidebar from "@/src/components/common/UserDashboardSidebar";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { LocaleProvider } from "../../LocaleProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { enUS, bnIN, esES } from "@clerk/localizations";
import { AuthTokenProvider } from "@/src/lib/AuthTokenProvider";
interface Props {
  readonly children: ReactNode;
  readonly params: Promise<{ lang: string }>;
}

export default async function DashboardLayout({ children, params }: Props) {
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
          <AuthTokenProvider />
          <div className="gradient-background">
            <div>
              <Navbar
                mobileDashboard={
                  <UserDashboardSidebar background="bg-transparent md:hidden block" />
                }
                currentLang={lang}
              />
            </div>
            <ContainerWrapper>
              <div className="flex h-[calc(100vh-64px)] gap-5 text-white">
                {/* Sidebar */}
                <div className="hidden sm:block">
                  <UserDashboardSidebar />
                </div>

                {/* Main Content */}
                <main className="w-full flex-1 space-y-8 overflow-y-auto rounded-2xl bg-[#0F0828] p-6 sm:p-8">
                  {children}
                </main>
              </div>
            </ContainerWrapper>
            <Footer />
          </div>
        </ClerkProvider>
      </LocaleProvider>
    </NextIntlClientProvider>
  );
}
