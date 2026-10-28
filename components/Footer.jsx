import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n/config";
import { assetPath } from "@/lib/assetPath";

export default function Footer({ locale = "ar" }) {
  const t = getDictionary(locale).footer;
  const href = (p) => localizePath(locale, p);

  return (
    <footer className="bg-[#071a2e] px-6 pt-20 text-[#94a3b8]">
      <div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-5">
          <img src={assetPath("/logo.png")} alt={t.logoAlt} className="h-[58.08px] w-auto object-contain" />
          <p className="max-w-[330px] text-[12px] leading-[1.9]">{t.about}</p>
          <p className="text-[12px]">
            <span className="font-semibold text-[#e8ca65]">{t.hqLabel}</span> {t.hq}
          </p>
        </div>

        <FooterCol title={t.ecosystemTitle} items={t.ecosystemLinks.map((l) => [l.label, href(l.href)])} />
        <FooterCol title={t.capabilitiesTitle} items={t.capabilities.map((label) => [label, href("/services")])} />

        <div>
          <p className="mb-4 text-[14px] font-bold text-white">{t.contactTitle}</p>
          <ul className="space-y-3 text-[12px]">
            <li>
              {t.crLabel} <span className="text-[#e8ca65]">{t.toBeAdded}</span>
            </li>
            <li>
              {t.emailLabel}{" "}
              <a className="text-white hover:text-[#e8ca65]" href="mailto:info@blackpearls.sa">info@blackpearls.sa</a>
            </li>
            <li>
              {t.phoneLabel} <span className="text-[#e8ca65]">{t.toBeAdded}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1240px] flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 text-[12px]">
        <p>{t.copyright}</p>
        <div className="flex gap-6">
          {t.legal.map((label) => (
            <Link key={label} href="#" className="hover:text-[#e8ca65]">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <p className="mb-4 text-[14px] font-bold text-white">{title}</p>
      <ul className="space-y-3 text-[12px]">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="hover:text-[#e8ca65]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
