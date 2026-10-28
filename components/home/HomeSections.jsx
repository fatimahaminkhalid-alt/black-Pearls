import { Fragment } from "react";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n/config";
import { assetPath } from "@/lib/assetPath";

// Home page sections. Text comes from lib/i18n/ar.js and lib/i18n/en.js (home.*).
// Each section takes the page language as `locale` ("ar" by default).

export function About({ locale = "ar" }) {
  const t = getDictionary(locale).home.about;
  const words = t.lead.split(" ");

  return (
    <section data-reveal className="mx-auto grid max-w-[1240px] gap-16 px-6 py-28 md:grid-cols-2">
      <div>
        <h2 className="font-[family-name:var(--font-alexandria)] text-[50px] font-bold leading-none text-[#9e7412]">{t.title}</h2>
        <p className="mt-6 max-w-[520px] font-[family-name:var(--font-alexandria)] text-[25px] font-semibold leading-[1.5] text-[#111827]">
          <span className="sr-only">{t.lead}</span>
          <span aria-hidden="true">
            {words.map((w, i) => (
              <Fragment key={i}>
                {i > 0 && " "}
                <span className="inline-block overflow-hidden align-bottom">
                  <span data-word className="inline-block">
                    {w}
                  </span>
                </span>
              </Fragment>
            ))}
          </span>
        </p>
        <p className="mt-6 max-w-[520px] text-[14px] leading-[1.8] text-[#555e68]">{t.body}</p>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-[16px] leading-[1.8] text-[#555e68]">{t.intro}</p>
        <div className="relative isolate overflow-hidden rounded-xl bg-[#071a2e] p-8 pb-40 text-[#f7f5f0]">
          <img
            src={assetPath("/vision-2030.jpg")}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_70%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-b from-[#071a2e]/95 via-[#071a2e]/70 via-35% to-transparent to-80%"
          />
          <p className="text-[12px] font-bold tracking-widest text-[#e8ca65]">{t.visionKicker}</p>
          <p className="mt-3 text-[18px] font-bold">{t.visionTitle}</p>
          <p className="mt-3 text-[14px] leading-[1.7] text-[#cbd5e1]">{t.visionBody}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.chips.map((c) => (
              <span key={c} className="rounded-full border border-white/20 bg-[#071a2e]/40 px-3 py-1 text-[12px] text-[#e2e8f0] backdrop-blur-sm">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Domains({ locale = "ar" }) {
  const t = getDictionary(locale).home.domains;

  return (
    <section data-reveal className="bg-[#f7f5f0] px-6 py-28">
      <div className="mx-auto max-w-[1240px]">
        <p className="text-[12px] font-bold text-[#9e7412]">{t.kicker}</p>
        <h2 className="mt-3 font-[family-name:var(--font-alexandria)] text-[48px] font-extrabold leading-none">{t.title}</h2>

        <ul className="mt-14 divide-y divide-[#111827]/10 border-y border-[#111827]/10">
          {t.items.map((d) => (
            <li key={d.no} data-reveal className="grid items-center gap-6 py-10 md:grid-cols-[120px_1fr_1fr]">
              <span className="font-[family-name:var(--font-alexandria)] text-[36px] font-medium text-[#c59b27]">{d.no}</span>
              <div>
                <h3 className="font-[family-name:var(--font-alexandria)] text-[24px] font-bold">{d.title}</h3>
                <p className="mt-1 text-[12px] font-medium text-[#9e7412]">{d.sub}</p>
              </div>
              <p className="text-[14px] leading-[1.8] text-[#555e68]">{d.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// "How we work" lives in its own client component (animated step highlight).
export { default as Method } from "./Method";

export function WhyUs({ locale = "ar" }) {
  const t = getDictionary(locale).home.why;

  return (
    <section data-reveal className="bg-[#0b1f3a] px-6 py-28 text-[#f7f5f0]">
      <div className="mx-auto max-w-[1240px]">
        <p className="text-[12px] font-bold text-[#e8ca65]">{t.kicker}</p>
        <h2 className="mt-3 font-[family-name:var(--font-alexandria)] text-[48px] font-medium leading-none">{t.title}</h2>

        <div className="mt-14 space-y-6">
          {t.items.map((c, i) => (
            <div key={i} data-reveal className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_280px]">
              <div>
                <p className="text-[12px] font-bold text-[#e8ca65]">{t.approach}</p>
                <p className="mt-3 text-[22px] font-bold leading-[1.6]">
                  {c.gold} <span className="text-[#e8ca65]">{c.goldBold}</span> {c.tail}
                </p>
              </div>
              <div>
                <p className="text-[18px] text-[#94a3b8]">{t.traditional}</p>
                <p className="mt-2 text-[16px] font-light leading-[1.7] text-[#94a3b8]">{c.before}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallToAction({ locale = "ar" }) {
  const t = getDictionary(locale).home.cta;

  return (
    <section data-reveal className="relative overflow-hidden bg-[#071a2e] px-6 py-28 text-center text-[#f7f5f0]">
      <svg aria-hidden="true" viewBox="0 0 200 200" className="pointer-events-none absolute -left-24 -top-24 h-[320px] w-[320px] opacity-20 animate-[spin_40s_linear_infinite] motion-reduce:animate-none">
        <defs>
          <path id="cta-ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text
          direction="ltr"
          className={`fill-[#e8ca65] font-semibold ${locale === "en" ? "text-[7.5px] tracking-[0.22em]" : "text-[13px] tracking-[0.1em]"}`}
        >
          <textPath href="#cta-ring">{t.ring}</textPath>
        </text>
      </svg>
      <h2 className="font-[family-name:var(--font-alexandria)] text-[38px] font-semibold leading-[1.25] md:text-[50px]">
        {t.before} <span className="text-[#e8ca65]">{t.gold}</span> {t.after}
      </h2>
      <p className="mx-auto mt-6 max-w-[700px] text-[18px] leading-[1.7] text-[#cbd5e1]">{t.body}</p>
      <Link
        href={localizePath(locale, "/contact")}
        className="mt-10 inline-block rounded-md bg-[#e8ca65] px-10 py-3 text-[16px] font-bold text-[#071a2e] transition-opacity hover:opacity-90"
      >
        {t.button}
      </Link>
      <p className="mt-8 text-[12px] text-[#94a3b8]">{t.note}</p>
    </section>
  );
}
