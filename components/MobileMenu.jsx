"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localizePath, stripLocale } from "@/lib/i18n/config";
import LanguageSwitch from "@/components/LanguageSwitch";
import { getDictionary } from "@/lib/i18n";
import { assetPath } from "@/lib/assetPath";

// Phone navigation (≤ 820px). The desktop pill menu is hidden on phones, so this button
// opens a full-screen panel with the page links, the "Become a Partner" button and the
// language switch. Native <dialog>: focus stays inside, Esc closes it.
export default function MobileMenu({ locale: localeProp = "ar" }) {
  const pathname = usePathname();
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : localeProp;
  const nav = getDictionary(locale).nav;
  const current = stripLocale(pathname || "/");
  const ref = useRef(null);

  const open = () => {
    window.__lenis?.stop();
    ref.current?.showModal();
  };
  const close = () => ref.current?.close();

  // close after navigating to another page
  useEffect(() => {
    if (ref.current?.open) ref.current.close();
  }, [pathname]);

  // close if the screen grows to the desktop layout while it is open
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 821px)");
    const onChange = () => mq.matches && close();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <button type="button" onClick={open} aria-label={nav.menuOpen} aria-haspopup="dialog" className="bp-pill bp-menu-btn" data-enter="menu">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
          <path d="M4 7h16M4 12h16M4 17h10" />
        </svg>
      </button>

      <dialog ref={ref} data-lenis-prevent aria-label={nav.menuAria} onClose={() => window.__lenis?.start()} className="bp-menu">
        <div className="bp-menu__top">
          <Link href={localizePath(locale, "/")} aria-label={nav.homeAria} className="bp-menu__logo" onClick={close}>
            <img src={assetPath("/logo.png")} alt={nav.logoAlt} />
          </Link>
          <button type="button" onClick={close} aria-label={nav.menuClose} className="bp-menu__close">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav aria-label={nav.menuAria}>
          <ul className="bp-menu__links">
            {nav.links.map((link, i) => (
              <li key={link.href} style={{ "--i": i }}>
                <Link
                  href={localizePath(locale, link.href)}
                  aria-current={current === link.href ? "page" : undefined}
                  onClick={close}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="bp-menu__actions" style={{ "--i": nav.links.length }}>
          <Link href={localizePath(locale, "/contact")} className="bp-pill bp-pill--light bp-menu__cta" onClick={close}>
            {nav.cta}
          </Link>
          <LanguageSwitch locale={locale} />
        </div>
      </dialog>
    </>
  );
}
