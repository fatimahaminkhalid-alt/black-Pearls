"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Site-wide cinematic layer: smooth scrolling (Lenis), a slow zoom on the hero video
// while scrolling, and gentle reveals for sections. Disabled for reduced-motion users.
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    let lenis;
    let tick;

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      lenis = new Lenis({ duration: 1.2, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      tick = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      const video = document.querySelector("[data-hero-video]");
      const hero = document.querySelector("[data-hero]");
      if (video && hero) {
        gsap.to(video, {
          scale: 1.12,
          yPercent: 6,
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
        });
      }

      gsap.utils.toArray("[data-word]").forEach((el) => {
        gsap.from(el, {
          yPercent: 110,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: el.closest("[data-reveal]") || el, start: "top 85%", once: true },
        });
      });

      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    });

    return () => {
      mm.revert();
      if (tick) gsap.ticker.remove(tick);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
