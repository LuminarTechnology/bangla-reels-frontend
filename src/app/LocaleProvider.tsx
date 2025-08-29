"use client";
import { createContext, useContext, useEffect, useState } from "react";

type LocaleContextType = {
  lang: string;
  changeLang: (newLocale: string) => void;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem("locale");
    if (stored) {
      setLang(stored);
    } else {
      const browserLang = navigator.language.split("-")[0];
      setLang(browserLang);
      localStorage.setItem("locale", browserLang);
    }
  }, []);

  const changeLang = (newLocale: string) => {
    setLang(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return <LocaleContext.Provider value={{ lang, changeLang }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
