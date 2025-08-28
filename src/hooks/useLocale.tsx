"use client";
import { useState, useEffect } from "react";

export function useLocale() {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem("locale");
    if (stored) setLocale(stored);
  }, []);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return { locale, changeLocale };
}
