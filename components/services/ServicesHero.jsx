"use client";

import { useEffect, useRef } from "react";
import { playHeroEntrance } from "@/lib/heroEntrance";
import { useI18n } from "@/components/I18nProvider";
import { assetPath } from "@/lib/assetPath";
import Breaks from "@/components/Breaks";

// Services hero (Figma: "hero خدماتنا", 1440×550). Same entrance timeline as the other heroes.
export default function ServicesHero() {
  const t = useI18n().t.services.hero;
  const heroRef = useRef(null);

  useEffect(() => playHeroEntrance(heroRef.current), []);

  return (
    <section
      ref={heroRef}
      data-hero
      className="relative isolate flex min-h-[640px] flex-col items-center overflow-hidden bg-[#0d1c32] px-6 pb-16 pt-[180px] text-center md:h-[828px] md:pb-0 md:pt-[222px]"
    >
      {/* same Riyadh photo as the About hero; data-hero-video gets the slow scroll zoom from Motion.jsx */}
      <img
        data-hero-video
        src={assetPath("/about-hero.jpg")}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#0d1c32]/80" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[100px] -z-10 h-[350px] w-[700px] max-w-full -translate-x-1/2 rounded-full bg-gradient-to-r from-[#c59b27]/30 to-[#f59e0b]/20 opacity-[0.02] blur-[70px]"
      />

      <p
        data-enter="kicker"
        className="inline-flex items-center gap-1.5 rounded-xl bg-[#e3e2e0]/20 px-5 py-1.5 text-[12px] leading-4 tracking-[0.3px] text-[#ffdf98] backdrop-blur-[6px]"
      >
        <span aria-hidden="true" className="size-1.5 rounded-xl bg-[#fece57]" />
        {t.badge}
        <img src={assetPath("/services/badge-icon.png")} alt="" aria-hidden="true" width={11} height={12} className="h-[11.667px] w-[10.5px]" />
      </p>

      <h1
        data-enter="line1"
        className="mt-[45px] font-[family-name:var(--font-alexandria)] text-[40px] font-semibold leading-[56px] tracking-[-0.03em] text-white md:text-[48px]"
      >
        {t.title}
      </h1>

      <p data-enter="line2" className="mt-6 max-w-[672px] text-[19px] leading-[30px] text-[#eec14b] md:mt-[37px] md:text-[22px]">
        {t.subtitle}
      </p>

      <p data-enter="sub" className="mt-6 max-w-[900px] text-[15px] leading-[29.25px] text-[#76849f] md:mt-[45px]">
        <Breaks text={t.copy} />
      </p>
    </section>
  );
}
