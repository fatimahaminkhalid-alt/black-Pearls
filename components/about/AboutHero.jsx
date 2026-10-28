"use client";

import { useEffect, useRef } from "react";
import { playHeroEntrance } from "@/lib/heroEntrance";
import { useI18n } from "@/components/I18nProvider";
import { assetPath } from "@/lib/assetPath";

// About hero (Figma: "hero من نحن", 1440×828). Uses the same entrance timeline as the
// home hero: header drops in, badge un-blurs, title and subtitle spring up, then the rest rises.
export default function AboutHero() {
  const t = useI18n().t.about.hero;
  const heroRef = useRef(null);

  useEffect(() => playHeroEntrance(heroRef.current), []);

  return (
    <section
      ref={heroRef}
      data-hero
      className="relative isolate flex min-h-[640px] flex-col items-center overflow-hidden bg-[#071527] px-6 pb-10 pt-[180px] text-center md:h-[828px] md:pt-[222px]"
    >
      {/* data-hero-video: Motion.jsx gives it the same slow zoom on scroll as the home video */}
      <img
        data-hero-video
        src={assetPath("/about-hero.jpg")}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,25,47,0.75)_16%,rgba(7,21,39,0.7)_50%,#071527_100%)]"
      />

      <p
        data-enter="kicker"
        className="inline-flex items-center gap-2.5 rounded-full border border-[#bb9a5a]/35 bg-[#112240]/85 px-[17px] py-[7px] text-[12px] font-bold leading-4 tracking-[0.3px] text-[#bb9a5a] backdrop-blur-[6px]"
      >
        <span aria-hidden="true" className="size-3 rounded-full bg-[#c59b27]" />
        {t.badge}
      </p>

      <h1
        data-enter="line1"
        className="mt-4 font-[family-name:var(--font-alexandria)] text-[44px] font-bold leading-[1.4] tracking-[-0.04em] text-[#faf9f6] md:mt-3 md:text-[60px] md:leading-[96px]"
      >
        {t.title}
      </h1>

      <p
        data-enter="line2"
        className="mt-6 max-w-[860px] text-[20px] font-normal leading-[1.5] text-[#faf9f6]/95 md:mt-[31px] md:text-[30px] md:leading-9"
      >
        {t.subtitle}
      </p>

      <div data-enter="sub" className="flex flex-col items-center">
        <div aria-hidden="true" className="mt-7 flex w-[192px] items-center gap-[14px]">
          <span className="h-px flex-1 bg-gradient-to-l from-[#bb9a5a]/0 via-[#bb9a5a] to-[#bb9a5a]" />
          <span className="size-2 rotate-45 border border-[#bb9a5a] bg-[#0a192f]" />
          <span className="h-px flex-1 bg-gradient-to-r from-[#bb9a5a]/0 via-[#bb9a5a] to-[#bb9a5a]" />
        </div>
        <p className="mt-6 max-w-[620px] text-[15px] font-light leading-6 text-[#faf9f6]/70 md:text-[16px]">
          {t.tagline}
        </p>
      </div>

      <a
        href="#about-intro"
        data-enter="stats"
        className="mt-auto flex flex-col items-center gap-2 pt-12 text-[10px] leading-[15px] tracking-[1px] text-[#bb9a5a]/80 md:absolute md:bottom-[47px] md:left-1/2 md:mt-0 md:-translate-x-1/2 md:pt-0"
      >
        <span aria-hidden="true" className="flex h-9 w-5 justify-center rounded-full border border-[#bb9a5a] p-[5px]">
          <span className="h-2 w-1 animate-[bp-scroll-dot_1.8s_ease-in-out_infinite] rounded-full bg-[#bb9a5a] motion-reduce:animate-none" />
        </span>
        {t.discover}
      </a>
    </section>
  );
}
