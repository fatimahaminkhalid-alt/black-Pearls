"use client";

import { useState } from "react";
import { BrainIcon, BulbIcon, CapIcon, CubeIcon, LandmarkIcon, RocketIcon } from "@/components/ecosystem/icons";
import { useI18n } from "@/components/I18nProvider";

// Figma: "Network Interactive SVG Canvas Wrapper" (993×621). The five pillars sit on a dashed
// pentagon and feed the core through gold spokes. Gold pulses flow along each spoke into the
// core; hovering or focusing a pillar lights its spoke and shows its focus inside the core.

const W = 993;
const H = 621;
const CORE = { x: 496.5, y: 311 };

// cx/cy = centre of each 64×64 pillar box, measured from the Figma frame.
// Labels come from lib/i18n/{ar,en}.js (ecosystem.network.nodes), in this same order.
const layout = [
  { id: "strategy", Icon: LandmarkIcon, cx: 496.5, cy: 84 },
  { id: "tech", Icon: BrainIcon, cx: 767.4, cy: 196 },
  { id: "business", Icon: RocketIcon, cx: 707.3, cy: 447 },
  { id: "innovation", Icon: BulbIcon, cx: 292.7, cy: 447 },
  { id: "capability", Icon: CapIcon, cx: 237.8, cy: 196 },
];

const pct = (v, total) => `${(v / total) * 100}%`;

export default function NetworkMap() {
  const t = useI18n().t.ecosystem.network;
  const nodes = layout.map((n, i) => ({ ...n, ...t.nodes[i] }));
  const [active, setActive] = useState(null);
  const current = nodes.find((n) => n.id === active);

  return (
    <section className="bg-[#f4f3f1] px-6 py-16 md:pb-[91px] md:pt-[86px]">
      <h2 className="sr-only">{t.srTitle}</h2>

      {/* Desktop / tablet: the network canvas */}
      <div
        className="relative mx-auto hidden aspect-[993/621] max-w-[993px] overflow-hidden rounded-lg bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] md:block"
        onMouseLeave={() => setActive(null)}
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full" aria-hidden="true">
          <circle cx={CORE.x} cy={CORE.y} r="133" fill="none" stroke="rgba(254,206,87,0.22)" strokeWidth="1.5" />
          <polygon
            points={nodes.map((n) => `${n.cx},${n.cy}`).join(" ")}
            fill="none"
            stroke="#e3e1dc"
            strokeWidth="1.5"
            strokeDasharray="5 6"
          />
          {nodes.map((n, i) => {
            const d = `M${n.cx} ${n.cy} L${CORE.x} ${CORE.y}`;
            const on = active === n.id;
            return (
              <g key={n.id}>
                <path d={d} stroke={on ? "#c59b27" : "#e6dfcc"} strokeWidth={on ? 2.5 : 2} className="transition-[stroke,stroke-width] duration-500" />
                <path
                  d={d}
                  pathLength="100"
                  className={`bp-net-pulse ${on ? "bp-net-pulse--on" : ""}`}
                  style={{ animationDelay: `${i * 0.75}s` }}
                />
              </g>
            );
          })}
        </svg>

        {/* Core */}
        <div
          className="absolute left-1/2 flex size-[176px] -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-[#0d1c32] p-3 text-center shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]"
          style={{ top: pct(CORE.y - 88, H) }}
        >
          <span className="mb-1 flex size-10 items-center justify-center rounded-xl bg-[#fece57]/20 text-[#fece57]">
            <CubeIcon className="size-[19px]" />
          </span>
          <p className="font-[family-name:var(--font-alexandria)] text-[16px] font-bold leading-6 text-[#ffdf98]">{t.coreTitle}</p>
          <p className="text-[12px] leading-4 tracking-[0.48px] text-[#76849f]">{t.coreSub}</p>
          <p aria-live="polite" className="mt-1 h-[30px] max-w-[150px] text-[10.5px] leading-[15px] text-[#fece57]/90">
            {current ? current.sub : ""}
          </p>
        </div>

        {/* Pillars */}
        <ul>
          {nodes.map(({ id, label, Icon, cx, cy }) => {
            const on = active === id;
            return (
              <li
                key={id}
                tabIndex={0}
                aria-label={label}
                onMouseEnter={() => setActive(id)}
                onFocus={() => setActive(id)}
                onBlur={() => setActive(null)}
                className="group absolute flex -translate-x-1/2 cursor-default flex-col items-center outline-none"
                style={{ left: pct(cx, W), top: pct(cy - 32, H) }}
              >
                <span
                  className={`flex size-16 items-center justify-center rounded-xl bg-white text-[#775a00] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] transition-[translate,box-shadow] duration-300 ease-out group-focus-visible:ring-2 group-focus-visible:ring-[#c59b27] motion-reduce:transition-none ${
                    on ? "-translate-y-1 shadow-[0_12px_24px_-8px_rgba(158,116,18,0.35)]" : ""
                  }`}
                >
                  <Icon className="size-5" />
                </span>
                <span
                  className={`mt-1.5 whitespace-nowrap rounded-sm bg-white/90 px-1.5 text-[16px] leading-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors duration-300 ${
                    on ? "text-[#775a00]" : "text-[#1a1c1a]"
                  }`}
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Phones: core card with the five pillars beneath */}
      <div className="mx-auto max-w-[480px] md:hidden">
        <div className="mx-auto flex w-[176px] flex-col items-center rounded-xl bg-[#0d1c32] p-5 text-center shadow-lg">
          <span className="mb-1 flex size-10 items-center justify-center rounded-xl bg-[#fece57]/20 text-[#fece57]">
            <CubeIcon className="size-[19px]" />
          </span>
          <p className="font-[family-name:var(--font-alexandria)] text-[16px] font-bold leading-6 text-[#ffdf98]">{t.coreTitle}</p>
          <p className="text-[12px] leading-4 text-[#76849f]">{t.coreSub}</p>
        </div>
        <span aria-hidden="true" className="mx-auto block h-8 w-0.5 bg-[#e6dfcc]" />
        <ul className="grid grid-cols-2 gap-3 rounded-lg bg-white p-4 shadow-[0_10px_20px_-8px_rgba(0,0,0,0.12)]">
          {nodes.map(({ id, label, sub, Icon }) => (
            <li key={id} className="flex flex-col items-center gap-2 rounded-lg p-3 text-center last:col-span-2">
              <span className="flex size-12 items-center justify-center rounded-xl bg-white text-[#775a00] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                <Icon className="size-5" />
              </span>
              <span className="text-[15px] leading-6 text-[#1a1c1a]">{label}</span>
              <span className="text-[11.5px] leading-4 text-[#76849f]">{sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
