"use client";

import { useEffect, useRef } from "react";
import { playHeroEntrance } from "@/lib/heroEntrance";
import { useI18n } from "@/components/I18nProvider";
import { assetPath } from "@/lib/assetPath";

// Contact hero (Figma: "تواصل hero", 1440×651). Same entrance timeline as the other heroes.
export default function ContactHero() {
  const t = useI18n().t.contact.hero;
  const heroRef = useRef(null);

  useEffect(() => playHeroEntrance(heroRef.current), []);

  return (
    <section
      ref={heroRef}
      data-hero
      className="relative isolate flex min-h-[520px] flex-col items-center overflow-hidden border-b border-[#bb9a5a]/10 bg-[#0a192f] px-6 pb-16 pt-[170px] text-center md:h-[651px] md:pb-0 md:pt-[271px]"
    >
      {/* data-hero-video gets the slow scroll zoom from Motion.jsx */}
      <img
        data-hero-video
        src={assetPath("/about-hero.jpg")}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_30%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,0,0,0.85)_0%,rgba(7,19,34,0.85)_50%,rgba(10,25,47,0.85)_100%)]"
      />

      <div data-enter="line1" className="flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-6 bg-gradient-to-l md:w-10 from-[#bb9a5a]/0 to-[#bb9a5a]/60" />
        <h1 className="font-[family-name:var(--font-alexandria)] whitespace-nowrap text-[34px] font-bold leading-[72px] sm:text-[42px] tracking-[-0.03em] text-[#f6f3ee] md:text-[55px]">
          {t.title}
        </h1>
        <span aria-hidden="true" className="h-px w-6 bg-gradient-to-r md:w-10 from-[#bb9a5a]/0 to-[#bb9a5a]/60" />
      </div>

      <p data-enter="line2" className="mt-6 text-[21px] leading-8 tracking-[0.025em] text-[#bb9a5a] md:mt-6 md:text-[24px]">
        {t.subtitle}
      </p>

      <p data-enter="sub" className="mt-6 max-w-[600px] text-[15px] leading-6 text-[#a0a0a0] md:text-[16px]">
        {t.body}
      </p>
    </section>
  );
}
