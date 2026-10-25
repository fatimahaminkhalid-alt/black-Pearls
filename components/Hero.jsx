"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Hero from the Figma home page: cinematic video, centered title and copy, stats strip.
export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("[data-hero-item]", {
        opacity: 0,
        y: 28,
        duration: 1,
        ease: "power3.out",
        stagger: 0.14,
      });
    });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches && videoRef.current) {
      videoRef.current.pause();
    } else if (videoRef.current) {
      // Arch-shaped opening: the skyline grows out of an arch, like the reel's transition.
      gsap.fromTo(
        videoRef.current,
        { clipPath: "inset(38% 26% 0% 26% round 999px 999px 0px 0px)" },
        { clipPath: "inset(0% 0% 0% 0% round 0px 0px 0px 0px)", duration: 2, ease: "power3.inOut" }
      );
    }

    return () => mm.revert();
  }, []);

  return (
    <section data-hero className="relative isolate flex h-[807px] max-h-[100svh] min-h-[640px] items-center overflow-hidden bg-[#071a2e] text-[#f7f5f0]">
      <video
        ref={videoRef}
        data-hero-video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#071a2e]/60 via-[#071a2e]/45 to-[#071a2e]/90" />

      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center px-6 pt-20 text-center">
        <h1 data-hero-item className="font-[family-name:var(--font-alexandria)] text-[48px] font-medium leading-[1.1] md:text-[64px]">
          نبني ما يصنع الأثر
        </h1>

        <p data-hero-item className="mt-6 max-w-[520px] text-[16px] font-semibold leading-[1.6] text-[#f7f5f0]/90">
          اللؤلؤ الأسود شركة قابضة سعودية تبني منظومات متكاملة في الاستراتيجية، التقنية، تطوير الأعمال، الابتكار، وبناء القدرات لتمكين الجهات الحكومية والشركات ورواد الأعمال من تحقيق تحول مستدام ونتائج قابلة للقياس.
        </p>

        <div data-hero-item className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="rounded-md bg-[#0b4a9e] px-7 py-3 text-[16px] font-bold text-white transition-opacity hover:opacity-90">
            كن شريكاً
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-[#e8ca65] px-7 py-3 text-[16px] text-[#e8ca65] transition-colors hover:bg-[#e8ca65] hover:text-[#071a2e]"
          >
            تواصل معنا
          </Link>
        </div>

        <div data-hero-item className="mt-20 grid w-full max-w-[640px] grid-cols-3 border-t border-white/15 pt-8">
          <div className="flex items-center justify-center border-l border-white/15 px-4 text-center">
            <p className="text-[20px] font-medium text-[#f7f5f0]">تنفيذ مشترك</p>
          </div>
          <div className="flex flex-col items-center border-l border-white/15 px-4 text-center">
            <p className="font-[family-name:var(--font-alexandria)] text-[36px] font-bold leading-none text-[#e8ca65]">5</p>
            <p className="mt-2 text-[12px] font-medium text-[#f7f5f0]/80">مجالات</p>
          </div>
          <div className="flex flex-col items-center px-4 text-center">
            <p className="text-[24px] font-bold tracking-wide text-[#e8ca65]">2030 VISION</p>
            <p className="mt-2 text-[12px] font-medium text-[#f7f5f0]/80">توافق مع الرؤية الوطنية</p>
          </div>
        </div>
      </div>
    </section>
  );
}
