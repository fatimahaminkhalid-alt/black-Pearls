"use client";

import { useEffect, useRef, useState } from "react";
import { BulbIcon, HubIcon, StarBadgeIcon } from "@/components/ecosystem/icons";
import { useI18n } from "@/components/I18nProvider";

// Figma: "SECTION 3: THE SYSTEM (IDEA → SYSTEM → IMPACT)". In the design every stage sits at 50%;
// here the active stage comes to full strength and the highlight walks 01 → 02 → 03 while the
// section is on screen (same behaviour as "كيف نعمل؟" on the home page). Hover/focus holds a stage.

// Stage text comes from lib/i18n/{ar,en}.js (ecosystem.pipeline.stages), in this same order.
const stageStyles = [
  {
    no: "01",
    Icon: BulbIcon,
    card: "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
    bar: "bg-[#fece57]",
    num: "text-[#775a00]/30",
    iconBox: "bg-[#e9e8e5] text-[#775a00]",
    title_: "text-[#1a1c1a]",
    body: "text-[#44474d]",
  },
  {
    no: "02",
    Icon: HubIcon,
    card: "bg-[#e9e8e5] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]",
    bar: "bg-[#775a00]",
    num: "text-[#775a00]",
    iconBox: "bg-[#0d1c32] text-[#fece57]",
    title_: "text-[#1a1c1a]",
    body: "text-[#44474d]",
  },
  {
    no: "03",
    Icon: StarBadgeIcon,
    card: "bg-[#0d1c32] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]",
    bar: "bg-[#fece57]",
    num: "text-[#fece57]",
    iconBox: "bg-[#e3e2e0]/20 text-[#fece57]",
    title_: "text-[#f2f1ee]",
    body: "text-[#76849f]",
  },
];

const STEP_MS = 1800;

export default function Pipeline() {
  const t = useI18n().t.ecosystem.pipeline;
  const stages = stageStyles.map((s, i) => ({ ...s, ...t.stages[i] }));
  const listRef = useRef(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [held, setHeld] = useState(false);
  const [still, setStill] = useState(false); // reduced motion: every stage at full strength

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = listRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || held || still) return;
    const id = setInterval(() => setActive((i) => (i + 1) % stages.length), STEP_MS);
    return () => clearInterval(id);
  }, [inView, held, still]);

  const hold = (i) => {
    setActive(i);
    setHeld(true);
  };
  const release = () => setHeld(false);

  return (
    <section className="bg-[#faf9f6] px-6 py-14 md:px-12">
      <div className="mx-auto max-w-[1184px]">
        <header className="max-w-[920px] lg:min-h-[137px]">
          <h2 className="font-[family-name:var(--font-alexandria)] text-[32px] font-medium leading-[52px] tracking-[-0.015em] text-[#1a1c1a] md:text-[40px]">
            {t.title}
          </h2>
          <p className="mt-1 text-[15px] leading-[24.38px] text-[#44474d]">
            {t.desc}
          </p>
        </header>

        <ol ref={listRef} className="mt-14 grid gap-8 lg:grid-cols-3" onMouseLeave={release}>
          {stages.map((s, i) => {
            const on = still || i === active;
            return (
              <li
                key={s.no}
                tabIndex={0}
                aria-current={!still && i === active ? "step" : undefined}
                onMouseEnter={() => hold(i)}
                onFocus={() => hold(i)}
                onBlur={release}
                className={`relative overflow-hidden rounded-lg p-8 outline-none transition-[opacity,translate] duration-700 ease-out focus-visible:ring-2 focus-visible:ring-[#c59b27] motion-reduce:transition-none ${s.card} ${
                  on ? "opacity-100 lg:-translate-y-1" : "opacity-50"
                }`}
              >
                <span aria-hidden="true" className={`block h-1 ${s.bar}`} />
                <div className="mt-5 flex items-center justify-between">
                  <span className={`font-serif text-[40px] font-bold leading-[52px] tracking-[-0.015em] ${s.num}`}>{s.no}</span>
                  <span className={`flex size-12 items-center justify-center rounded-xl ${s.iconBox}`}>
                    <s.Icon className="size-[22px]" />
                  </span>
                </div>
                <h3 className={`mt-[26px] text-[22px] font-bold leading-[30px] ${s.title_}`}>{s.title}</h3>
                <p className={`mt-[11px] text-[15px] leading-[24.38px] ${s.body}`}>{s.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
