import InterestButton from "@/components/contact/InterestButton";
import { getDictionary } from "@/lib/i18n";
import { assetPath } from "@/lib/assetPath";

// Services page sections (Figma "خدماتنا": "INTERACTIVE SERVICES EXPLORER" and the platform card).
// Text comes from lib/i18n/{ar,en}.js (services.*).

// Replace with the platform's real address when it's live.
const AGENCE_URL = "#";

export function ServicesExplorer({ locale = "ar" }) {
  const t = getDictionary(locale).services.explorer;
  const en = locale === "en";

  return (
    <section className="bg-[#faf9f6] px-6 pb-24 pt-14 md:pb-36">
      <div className="mx-auto max-w-[1060px]">
        <h2 className={en ? "text-[20px] font-light leading-10 tracking-[0.4em] text-[#1a1c1a]" : "text-[24px] leading-10 text-[#1a1c1a]"}>{t.heading}</h2>

        {/* 3 + 2 cards, centred like the Figma pyramid. Cards sit at 60% and come forward on hover/focus. */}
        <ul className="mx-auto mt-12 grid max-w-[1030px] justify-center gap-6 sm:grid-cols-2 md:mt-[78px] md:flex md:flex-wrap md:gap-x-[140px] md:gap-y-[85px]">
          {t.items.map((s) => (
            <li
              key={s.title}
              tabIndex={0}
              className="group flex min-h-[220px] flex-col items-center rounded-[15px] bg-white/10 px-4 pb-6 pt-[18px] text-center shadow-[6px_6px_20px_rgba(0,0,0,0.15)] outline-none transition-[opacity,translate,box-shadow] duration-500 ease-out focus-visible:ring-2 focus-visible:ring-[#b38600] md:size-[250px] [@media(hover:hover)]:opacity-60 [@media(hover:hover)]:hover:-translate-y-1.5 [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:hover:shadow-[6px_14px_30px_rgba(179,134,0,0.18)] [@media(hover:hover)]:focus-visible:opacity-100 motion-reduce:transition-none"
            >
              <h3
                className={`font-[family-name:var(--font-alexandria)] font-light tracking-[-0.02em] text-[#b38600] ${
                  en ? "text-[24px] leading-[44px] md:text-[25px]" : "text-[28px] leading-[52px] md:text-[30px]"
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`font-light text-[#334155] ${
                  en
                    ? "mt-4 text-[18px] leading-[30px] md:mt-[22px] md:text-[19px] md:leading-[32px]"
                    : "mt-4 text-[21px] leading-[44px] tracking-[-0.02em] md:mt-[27px] md:text-[22px] md:leading-[52px]"
                }`}
              >
                {s.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <AgencePlatform locale={locale} />
    </section>
  );
}

function AgencePlatform({ locale }) {
  const t = getDictionary(locale).services.agence;

  return (
    <article
      data-reveal
      className="mx-auto mt-24 flex max-w-[1312px] flex-col-reverse items-center gap-10 overflow-hidden rounded-[32px] border border-[#b38600]/20 bg-[#071a2e] p-8 shadow-[5px_10px_15px_5px_rgba(17,24,39,0.3)] backdrop-blur-[6px] md:mt-[176px] md:p-12 lg:min-h-[460px] lg:flex-row lg:gap-16"
    >
      <div className="flex w-full flex-1 flex-col lg:min-h-[362px]">
        <span className="self-end rounded-full border border-[#b38600]/30 px-4 py-1 text-[12px] font-bold leading-4 text-[#b38600]">{t.badge}</span>

        <h2 className="mt-6 leading-10 text-white md:mt-[26px]">
          <span className="font-[family-name:var(--font-alexandria)] text-[28px] md:text-[32px]">{t.name} </span>
          <span className="text-[15px] text-[#94a3b8]">{t.tagline}</span>
        </h2>

        <p className="mt-6 text-[17px] leading-[29.25px] text-[#94a3b8] md:mt-10 md:text-[18px]">
          {t.desc}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 lg:mt-auto">
          <a
            href={AGENCE_URL}
            className="group inline-flex items-center gap-2 text-[15px] leading-5 text-[#cea82e] transition-colors hover:text-[#e8ca65]"
          >
            {t.link}
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-[18px] transition-transform duration-300 ltr:-scale-x-100 rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1 motion-reduce:transition-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 8 8 12 12 16" />
              <line x1="16" y1="12" x2="8" y2="12" />
            </svg>
          </a>

          <InterestButton className="rounded-xl bg-[linear-gradient(132deg,#b38600_0%,#d4af37_100%)] px-10 py-4 text-[16px] font-bold leading-6 text-[#001529] shadow-[0_4px_14px_rgba(179,134,0,0.25)] transition-[translate,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(179,134,0,0.35)] motion-reduce:transition-none" />
        </div>
      </div>

      <img
        src={assetPath("/services/agence-logo.png")}
        alt={t.logoAlt}
        width={201}
        height={303}
        className="h-[200px] w-auto shrink-0 object-contain md:h-[303px] md:w-[201px]"
      />
    </article>
  );
}
