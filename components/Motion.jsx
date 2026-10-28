"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Site-wide cinematic layer.
//  1. Smooth scroll (Lenis): weighted, calm wheel scrolling; touch stays native.
//  2. Per page, re-run after every navigation:
//     • Hero exit: as the hero scrolls away its text drifts up, blurs and fades while the
//       background slowly pushes in, like a camera moving toward the city.
//     • Section headings rise line by line from behind a mask (SplitText, by lines, never by
//       letters, so Arabic letters stay joined).
//     • Cards and rows ([data-reveal]) rise in small staggered groups.
//     • The About lead ([data-word]) keeps its word-by-word reveal.
// Everything is skipped when the visitor prefers reduced motion.

const HEADINGS = "main section:not([data-hero]) h2:not(.sr-only):not(.bp-converge__word)";

export default function Motion() {
  const pathname = usePathname();
  const firstPage = useRef(true);

  // 1. Smooth scroll: created once for the whole visit
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.085, // lower = heavier, silkier glide
      wheelMultiplier: 0.9,
      smoothWheel: true,
      syncTouch: false, // phones keep their own native momentum
      anchors: { offset: -24 }, // "#about-intro" style links glide instead of jumping
      stopInertiaOnNavigate: true,
    });
    window.__lenis = lenis; // used by dialogs to pause the page behind them

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  // 2. Page animations: rebuilt for each page
  useEffect(() => {
    if (!firstPage.current && !window.location.hash) window.__lenis?.scrollTo(0, { immediate: true });
    firstPage.current = false;

    const mm = gsap.matchMedia();
    let raf = requestAnimationFrame(() => {
      mm.add(
        { motion: "(prefers-reduced-motion: no-preference)", phone: "(max-width: 820px)" },
        ({ conditions }) => {
          if (!conditions.motion) return;
          const phone = conditions.phone;

          // — Hero exit —
          const hero = document.querySelector("main [data-hero]");
          if (hero) {
            const items = hero.querySelectorAll("[data-enter]");
            const media = hero.querySelector("[data-hero-video]");
            const tl = gsap.timeline({
              scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.6 },
            });
            if (items.length) {
              tl.fromTo(
                items,
                { y: 0, opacity: 1, filter: "blur(0px)" },
                { y: phone ? -40 : -120, opacity: 0, filter: phone ? "blur(0px)" : "blur(8px)", ease: "none", stagger: 0.04 },
                0
              );
            }
            if (media) tl.fromTo(media, { scale: 1, yPercent: 0 }, { scale: 1.15, yPercent: 8, ease: "none" }, 0);
          }

          // — Headings: line by line from behind a mask —
          gsap.utils.toArray(HEADINGS).forEach((heading) => {
            SplitText.create(heading, {
              type: "lines",
              mask: "lines",
              linesClass: "bp-split-line", // masks get "bp-split-line-mask" (extra room, see globals.css)
              autoSplit: true, // re-split after fonts load and on resize
              onSplit: (self) =>
                gsap.from(self.lines, {
                  yPercent: 110,
                  duration: 1.15,
                  ease: "power4.out",
                  stagger: 0.12,
                  scrollTrigger: { trigger: heading, start: "top 88%", once: true },
                }),
            });
          });

          // — About lead: word by word —
          gsap.utils.toArray("[data-word]").forEach((el, i, all) => {
            if (i > 0) return;
            gsap.from(all, {
              yPercent: 110,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.06,
              scrollTrigger: { trigger: el.closest("p") || el, start: "top 85%", once: true },
            });
          });

          // — Cards and rows: rise in staggered groups, then hand styles back to CSS —
          const cards = gsap.utils.toArray("main [data-reveal]:not(section)");
          if (cards.length) {
            gsap.set(cards, { opacity: 0, y: phone ? 24 : 40 });
            ScrollTrigger.batch(cards, {
              start: "top 90%",
              once: true,
              onEnter: (batch) =>
                gsap.to(batch, {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                  stagger: 0.09,
                  overwrite: true,
                  clearProps: "opacity,transform", // hover effects keep working afterwards
                }),
            });
          }

          if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
        }
      );
    });

    return () => {
      cancelAnimationFrame(raf);
      mm.revert();
    };
  }, [pathname]);

  return null;
}