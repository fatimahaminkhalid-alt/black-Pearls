"use client";

import { usePathname } from "next/navigation";
import { switchLocalePath } from "@/lib/i18n/config";
import { useI18n } from "@/components/I18nProvider";
import { assetPath } from "@/lib/assetPath";
import { getDictionary } from "@/lib/i18n";

// Links to the same page in the other language ("/about" ⇄ "/en/about").
// A plain <a> (full page load) on purpose: the language changes <html lang/dir> and the layout.
export default function LanguageSwitch({ locale: localeProp }) {
  const context = useI18n();
  const pathname = usePathname();
  const locale = localeProp ?? context.locale;
  const other = locale === "en" ? "ar" : "en";
  const t = getDictionary(locale).nav;

  return (
    <a
      href={assetPath(switchLocalePath(pathname, other))}
      hrefLang={other}
      lang={other}
      aria-label={t.switchAria}
      className="bp-pill bp-lang"
      data-enter="lang"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 3.75 5.7 3.75 9S14.5 18.3 12 21c-2.5-2.7-3.75-5.7-3.75-9S9.5 5.7 12 3Z" />
      </svg>
      <span>{t.switchLabel}</span>
    </a>
  );
}
