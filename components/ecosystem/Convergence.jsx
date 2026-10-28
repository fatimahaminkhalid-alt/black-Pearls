"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "@/components/I18nProvider";

// Figma: "SECTION 4: THE CONVERGENCE (Visual Climax)". When the section comes into view the
// gold word "الأثر" draws together out of a wide blur, then the closing line and pillars rise in.
// Styles: globals.css → "Convergence".


export default function Convergence() {
  const { locale, t: dict } = useI18n();
  const t = dict.ecosystem.convergence;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        el.setAttribute("data-in", "");
        io.disconnect();
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="bp-converge relative isolate overflow-hidden bg-[#0d1c32] px-6 py-24 text-center md:py-32">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center md:min-h-[478px]">
        <p className="bp-converge__lead max-w-[720px] text-[18px] font-bold leading-[30px] text-[#76849f] md:text-[22px]">
          {t.lead}
        </p>

        <div className="relative mt-8 md:mt-[29px]">
          <div
            aria-hidden="true"
            className="bp-converge__glow absolute left-1/2 top-1/2 -z-10 h-[215px] w-[664px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#c59b27]/30 to-[#f59e0b]/20 blur-[70px]"
          />
          <h2
            className={`bp-converge__word bg-gradient-to-b from-[#ffdf98] via-[#fece57] to-[#775a00] bg-clip-text py-4 font-bold text-transparent md:py-8 ${
              locale === "en"
                ? "font-[family-name:var(--font-alexandria)] text-[64px] leading-[1.15] tracking-[0.12em] md:text-[110px] md:leading-[110px]"
                : "text-[76px] leading-[1.15] tracking-[-0.025em] md:text-[110px] md:leading-[110px]"
            }`}
          >
            {t.word}
          </h2>
        </div>

        <p className="bp-converge__rise mt-6 max-w-[860px] text-[16px] leading-[29.25px] text-[#76849f] md:mt-3 md:text-[18px]">
          {t.body}
        </p>

        <ul className="mt-10 flex flex-wrap justify-center gap-3 md:mt-14">
          {t.pills.map((p, i) => (
            <li
              key={p}
              className="bp-converge__rise rounded-xl bg-[#e3e2e0]/10 px-5 py-1.5 text-[13px] leading-5 text-[#ffdf98] backdrop-blur-[2px]"
              style={{ "--i": i + 1 }}
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
