"use client";

import { createContext, useContext, useMemo } from "react";
import { getDictionary } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n/config";

// Gives client components the current language: const { locale, t, href } = useI18n();
const I18nContext = createContext(null);

export function I18nProvider({ locale, children }) {
  const value = useMemo(
    () => ({ locale, t: getDictionary(locale), href: (path) => localizePath(locale, path) }),
    [locale]
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (ctx) return ctx;
  return { locale: "ar", t: getDictionary("ar"), href: (p) => p };
}
