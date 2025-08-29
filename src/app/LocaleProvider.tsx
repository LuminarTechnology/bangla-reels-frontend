"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type LocaleContextType = {
  lang: string;
  changeLang: (newLocale: string) => void;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({
  children,
  routeLang,
}: {
  children: React.ReactNode;
  routeLang?: string;
}) {
  const router = useRouter();
  const [lang, setLang] = useState(routeLang || "en");

  // 1. Sync route param -> localStorage
  useEffect(() => {
    const stored = localStorage.getItem("locale");

    if (!stored) {
      // first time, store the routeLang
      localStorage.setItem("locale", routeLang || "en");
    } else if (stored !== routeLang) {
      // if mismatch, prefer routeLang (since user may have typed URL)
      localStorage.setItem("locale", routeLang || "en");
    }

    setLang(routeLang || "en");
  }, [routeLang]);

  // 2. Change lang from UI
  const changeLang = (newLocale: string) => {
    setLang(newLocale);
    localStorage.setItem("locale", newLocale);
    router.push(`/${newLocale}`); // navigate to new route
  };

  return <LocaleContext.Provider value={{ lang, changeLang }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
