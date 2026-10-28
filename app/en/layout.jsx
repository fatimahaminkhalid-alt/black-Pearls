"use client";

import { useEffect } from "react";
import { I18nProvider } from "@/components/I18nProvider";

export default function EnglishLayout({ children }) {
  useEffect(() => {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  }, []);

  return <I18nProvider locale="en">{children}</I18nProvider>;
}
