"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitch from "@/components/LanguageSwitch";
import { getDictionary } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n/config";
import { assetPath } from "@/lib/assetPath";

// Placed in frame units on the 1440-wide hero frame (see app/globals.css → "Hero frame").
// Coordinates are measured from the inline-start edge, so they mirror between Arabic (RTL) and English (LTR).
export default function Header({ locale = "ar" }) {
  const pathname = usePathname();
  locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : locale;
  const t = getDictionary(locale).nav;
  const href = (p) => localizePath(locale, p);

  return (
    <header className="bp-header">
      <Link href={href("/")} aria-label={t.homeAria} className="bp-logo" data-enter="logo">
        <img src={assetPath("/logo.png")} alt={t.logoAlt} />
      </Link>

      <nav aria-label={t.menuAria} data-enter="nav">
        <ul className="bp-nav-pill">
          {t.links.map((link) => (
            <li key={link.href}>
              <Link href={href(link.href)}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="bp-header-actions">
        <LanguageSwitch />
        <Link href={href("/contact")} className="bp-pill bp-pill--light bp-header-cta" data-enter="cta">
          {t.cta}
        </Link>
      </div>
    </header>
  );
}
