"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { playHeroEntrance } from "@/lib/heroEntrance";
import { useI18n } from "@/components/I18nProvider";
import { assetPath } from "@/lib/assetPath";

// Hero laid out on one 1440×1280 frame that scales with the viewport width (--u = 1/1440 of it).
// Entrance motion is a single Web Animations timeline (lib/heroEntrance.js).
export default function Hero() {
  const { t: dict, href } = useI18n();
  const t = dict.hero;
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const stopEntrance = playHeroEntrance(heroRef.current);

    const video = videoRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let tween;
    if (reduce.matches && video) {
      video.pause();
    } else if (video) {
      // Arch-shaped opening: the skyline grows out of an arch, like the reel's transition.
      tween = gsap.fromTo(
        video,
        { clipPath: "inset(38% 26% 0% 26% round 999px 999px 0px 0px)" },
        { clipPath: "inset(0% 0% 0% 0% round 0px 0px 0px 0px)", duration: 2, ease: "power3.inOut" }
      );
    }

    return () => {
      stopEntrance();
      if (tween) tween.kill();
    };
  }, []);

  return (
    <section ref={heroRef} data-hero className="bp-hero">
      <video
        ref={videoRef}
        data-hero-video
        className="bp-hero__video"
        src={assetPath("/hero.mp4")}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="bp-hero__shade" aria-hidden="true" />

      <h1 className="bp-title">
        <span className="bp-kicker" data-enter="kicker">{t.kicker}</span>
        <span className="bp-line bp-line--1" data-enter="line1">{t.line1}</span>
        <span className="bp-line bp-line--2" data-enter="line2">{t.line2}</span>
      </h1>

      <p className="bp-sub" data-enter="sub">
        {t.sub}
      </p>

      <div className="bp-ctas">
        <Link href={href("/contact")} className="bp-pill bp-pill--light bp-cta-primary" data-enter="primary">
          {t.primary}
        </Link>
        <Link href={href("/contact")} className="bp-pill bp-pill--glass bp-cta-secondary" data-enter="secondary">
          <svg viewBox="0 0 16 18" aria-hidden="true" className="ltr:-scale-x-100">
            <path d="M13 2.6v12.8L2.4 9Z" fill="currentColor" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
          </svg>
          {t.secondary}
        </Link>
      </div>

      <div className="bp-stats" data-enter="stats">
        <div className="bp-stat">
          <p className="bp-stat__label-lg">{t.stats.joint}</p>
        </div>
        <div className="bp-stat">
          <p className="bp-stat__num">{t.stats.domainsNum}</p>
          <p className="bp-stat__label">{t.stats.domains}</p>
        </div>
        <div className="bp-stat">
          <p className="bp-stat__vision">{t.stats.vision}</p>
          <p className="bp-stat__label">{t.stats.visionLabel}</p>
        </div>
      </div>
    </section>
  );
}
