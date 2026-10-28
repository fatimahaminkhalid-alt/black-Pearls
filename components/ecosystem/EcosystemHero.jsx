"use client";

import { useEffect, useRef } from "react";
import { playHeroEntrance } from "@/lib/heroEntrance";
import { useI18n } from "@/components/I18nProvider";
import Breaks from "@/components/Breaks";
import { assetPath } from "@/lib/assetPath";

// Ecosystem hero (Figma: "منظومتنا hero", 1440×876). Same entrance timeline as the other heroes.
export default function EcosystemHero() {
  const t = useI18n().t.ecosystem.hero;
  const heroRef = useRef(null);

  useEffect(() => playHeroEntrance(heroRef.current), []);

  return (
    <section
      ref={heroRef}
      data-hero
      className="relative isolate flex min-h-[600px] flex-col items-center overflow-hidden bg-[#0d1c32] px-6 pb-20 pt-[160px] text-center md:h-[876px] md:pb-0 md:pt-[220px]"
    >
      {/* data-hero-video gets the slow scroll zoom from Motion.jsx */}
      <img
        data-hero-video
        src={assetPath("/about-hero.jpg")}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#0d1c32]/80" />

      <p
        data-enter="kicker"
        className="inline-flex items-center gap-3.5 rounded-xl bg-[#e3e2e0]/10 px-5 py-1.5 text-[10px] font-bold leading-4 tracking-[1.2px] text-[#ffdf98] shadow-[0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[6px]"
      >
        <span aria-hidden="true" className="size-2 shrink-0 rounded-xl bg-[#fece57]" />
        {t.badge}
      </p>

      <h1
        data-enter="line1"
        className="mt-[51px] font-[family-name:var(--font-alexandria)] text-[40px] font-semibold leading-[68px] tracking-[-0.025em] text-[#f2f1ee] md:text-[48px]"
      >
        {t.title}
      </h1>

      <p data-enter="line2" className="mt-4 max-w-[672px] text-[19px] font-bold leading-[30px] text-[#ffdf98] md:mt-[35px] md:text-[22px]">
        {t.prop}
      </p>

      <p data-enter="sub" className="mt-4 max-w-[1100px] text-[16px] leading-[29.25px] text-[#76849f] md:mt-3 md:text-[18px]">
        <Breaks text={t.desc} />
      </p>
    </section>
  );
}
