"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/I18nProvider";

const STEP_MS = 1300; // time each step stays highlighted

// "How we work": five steps on a gold line. The highlight walks 01 → 05 and loops
// while the section is on screen; hovering or focusing a card holds it on that step.
export default function Method() {
  const { t } = useI18n();
  const { title, intro, steps } = t.home.method;
  const listRef = useRef(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!inView || held || reduce) return;
    const id = setInterval(() => setActive((i) => (i + 1) % steps.length), STEP_MS);
    return () => clearInterval(id);
  }, [inView, held]);

  const hold = (i) => {
    setActive(i);
    setHeld(true);
  };
  const release = () => setHeld(false);

  return (
    <section data-reveal className="px-6 py-28">
      <div className="mx-auto max-w-[1240px] text-center">
        <h2 className="font-[family-name:var(--font-alexandria)] text-[44px] font-bold leading-tight text-[#111827] md:text-[60px]">
          {title}
        </h2>
        <p className="mx-auto mt-8 max-w-[720px] text-[16px] leading-[1.7] text-[#555e68] md:mt-14">
          {intro}
        </p>

        <div className="relative mt-14 md:mt-24">
          {/* the gold line the cards sit on (desktop) */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[76px] hidden h-[2px] bg-gradient-to-l from-transparent via-[#e5c98a] to-transparent md:block"
          />

          <ol
            ref={listRef}
            className="relative mx-auto grid max-w-[1010px] gap-5 sm:grid-cols-2 md:grid-cols-5 md:gap-6"
            onMouseLeave={release}
          >
            {steps.map((s, i) => {
              const on = i === active;
              return (
                <li
                  key={s.no}
                  tabIndex={0}
                  aria-current={on ? "step" : undefined}
                  onMouseEnter={() => hold(i)}
                  onFocus={() => hold(i)}
                  onBlur={release}
                  className={`flex min-h-[208px] flex-col items-center rounded-md border bg-white px-4 pb-8 pt-5 text-center outline-none transition-[border-color,box-shadow] duration-500 focus-visible:ring-2 focus-visible:ring-[#c59b27] ${
                    on ? "border-[#e5c98a] shadow-[0_10px_30px_-12px_rgba(158,116,18,0.35)]" : "border-[#ece6d9] shadow-[0_1px_2px_rgba(17,24,39,0.04)]"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-mono text-[14px] font-bold transition-[background-color,color,transform,box-shadow] duration-500 ease-out motion-reduce:transition-none ${
                      on
                        ? "scale-[1.06] border-[#cf9a27] bg-[#cf9a27] text-[#8a6410] shadow-[0_0_0_6px_rgba(207,154,39,0.15)]"
                        : "scale-100 border-[#cf9a27] bg-white text-[#9e7412]"
                    }`}
                  >
                    {s.no}
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-alexandria)] text-[16px] font-bold text-[#111827]">{s.title}</h3>
                  <p className="mt-3 text-[12.5px] leading-[1.75] text-[#555e68]">{s.desc}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
