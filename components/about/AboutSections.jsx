import { BoltIcon, BuildingIcon, ChartIcon, EyeIcon, ShieldIcon } from "@/components/about/icons";

import Breaks from "@/components/Breaks";
import { getDictionary } from "@/lib/i18n";

// About page sections (Figma "about as page": Desktop - 16 / 18 / 17).
// Text comes from lib/i18n/{ar,en}.js (about.*). Arrays render in reading order, so the
// first item sits on the right in Arabic and on the left in English.

const pillarIcons = [
  { Icon: ShieldIcon, tone: "navy" },
  { Icon: BoltIcon, tone: "gold" },
  { Icon: ChartIcon, tone: "navy" },
];
const panelIcons = [EyeIcon, BoltIcon];

export function AboutIntro({ locale = "ar" }) {
  const t = getDictionary(locale).about.intro;
  const stats = t.stats;
  const pillars = t.pillars.map((p, i) => ({ ...p, ...pillarIcons[i] }));

  return (
    <section id="about-intro" data-reveal className="scroll-mt-20 bg-white px-6 pb-24 pt-10 md:px-16 md:pb-[178px] md:pt-[37px]">
      <div className="mx-auto max-w-[1280px]">
        <p className="flex items-center gap-3 text-[12px] font-bold leading-4 tracking-[0.6px] text-[#bb9a5a] md:pe-8">
          <span aria-hidden="true" className="h-0.5 w-8 bg-[#bb9a5a]" />
          {t.meta}
        </p>

        <div className="mt-12 grid gap-14 md:mt-[57px] lg:grid-cols-[488px_1fr] lg:gap-16">
          {/* Title, HQ badge and stats (40%) */}
          <div className="md:pe-2">
            <div className="flex flex-col items-start gap-4">
              <span className="rounded border border-[#bb9a5a]/30 bg-[#bb9a5a]/10 px-[15px] py-[5px] text-[12px] font-semibold leading-4 text-[#0a192f]">
                {t.badge}
              </span>
              <h2 className="font-[family-name:var(--font-alexandria)] text-[44px] font-semibold leading-[60px] tracking-[-0.03em] text-[#0a192f] md:text-[50px]">
                {t.title}
              </h2>
              <span aria-hidden="true" className="h-1 w-24 rounded-full bg-[#bb9a5a]" />
            </div>

            <div className="mt-16 flex items-center gap-4 rounded-sm border border-[#bb9a5a]/30 bg-[#f4f3f1] p-[25px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              <span className="flex size-12 shrink-0 items-center justify-center rounded bg-[#0a192f] text-[#bb9a5a]">
                <BuildingIcon className="size-6" />
              </span>
              <div>
                <p className="text-[14px] font-semibold leading-5 text-[#0a192f]">{t.hqTitle}</p>
                <p className="mt-0.5 text-[12px] leading-4 text-[#0a192f]/70">{t.hqSub}</p>
              </div>
            </div>

            <div className="mt-8 flex gap-4 border-t border-[#bb9a5a]/25 pt-[9px]">
              {stats.map((s) => (
                <div key={s.label} className="flex min-w-0 flex-1 flex-col gap-1 pb-1 lg:w-[209px] lg:flex-none">
                  <p className={`font-serif text-[30px] font-bold leading-9 ${s.gold ? "text-[#bb9a5a]" : "text-[#0a192f]"}`}>{s.value}</p>
                  <p className="text-[12px] font-medium leading-4 text-[#0a192f]/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote and the three pillars (60%) */}
          <div className="lg:max-w-[720px] lg:justify-self-end lg:pt-8">
            <figure className="relative min-h-[210px] rounded-sm border border-[#bb9a5a]/25 bg-white/80 p-8 shadow-[0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[2px] md:p-[41px]">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute end-6 top-2 select-none font-serif text-[140px] font-bold leading-none text-[#bb9a5a]/20"
              >
                “
              </span>
              <blockquote className="relative max-w-[480px] text-[20px] leading-8 text-[#0a192f] md:text-[24px]">
                <Breaks text={t.quote} className="hidden md:block" />
              </blockquote>
            </figure>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {pillars.map(({ title, desc, Icon, tone }) => (
                <li
                  key={title}
                  data-reveal
                  className="flex flex-col items-start gap-[3px] rounded-sm border border-[#bb9a5a]/22 bg-white/90 px-[25px] pb-[25px] pt-[45px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[6px]"
                >
                  <span
                    className={`flex size-10 items-center justify-center rounded ${
                      tone === "gold" ? "bg-[#bb9a5a]/15 text-[#bb9a5a]" : "bg-[#0a192f]/10 text-[#0a192f]"
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="pt-[9px] text-[14px] font-semibold leading-6 text-[#0a192f]">{title}</h3>
                  <p className="text-[12px] leading-[19.5px] text-[#0a192f]/70">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VisionMission({ locale = "ar" }) {
  const t = getDictionary(locale).about.visionMission;
  const panels = t.panels.map((p, i) => ({ ...p, no: `0${i + 1}`, Icon: panelIcons[i] }));

  return (
    <section data-reveal className="bg-[#f4f3f1] px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-14 md:gap-20">
        <header className="flex max-w-[768px] flex-col items-center gap-4 text-center">
          <span className="rounded-full border border-[#bb9a5a]/30 bg-[#0a192f]/5 px-[15px] py-[5px] text-[12px] leading-4 text-[#0a192f]">
            {t.badge}
          </span>
          <h2 className="font-[family-name:var(--font-alexandria)] text-[36px] font-medium leading-[48px] tracking-[-0.03em] text-[#0a192f] md:text-[45px]">
            {t.title}
          </h2>
          <p className="text-[16px] font-light leading-6 text-[#0a192f]/70">
            {t.sub}
          </p>
        </header>

        <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-12">
          {panels.map(({ no, title, text, tags, Icon }) => (
            <article
              key={no}
              data-reveal
              className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-sm border border-[#bb9a5a]/30 bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.05)] md:p-[57px]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[15px] end-[15px] select-none font-serif text-[120px] font-black leading-[120px] text-[#bb9a5a]/[0.08]"
              >
                {no}
              </span>

              <div className="relative flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-sm border border-[#bb9a5a]/40 bg-[#bb9a5a]/15 text-[#bb9a5a]">
                      <Icon className="size-5" />
                    </span>
                    <span dir="ltr" className="font-[family-name:var(--font-inter)] text-[12px] font-bold leading-4 tracking-[0.6px] text-[#bb9a5a]">
                      • {no}
                    </span>
                  </div>
                  <span aria-hidden="true" className="size-3 rounded-full border border-[#bb9a5a] bg-[#bb9a5a]/30" />
                </div>
                <h3 className="pt-2 font-[family-name:var(--font-alexandria)] text-[30px] font-semibold leading-9 text-[#0a192f]">{title}</h3>
                <p className="text-[18px] leading-7 text-[#0a192f]/85 md:whitespace-pre-line md:text-[20px]">{text}</p>
              </div>

              <ul className="relative mt-8 flex flex-wrap gap-2 border-t border-[#bb9a5a]/20 pt-[33px]">
                {tags.map((t) => (
                  <li key={t} className="rounded-sm border border-[#bb9a5a]/25 bg-[#f4f3f1] px-[13px] py-[5px] text-[12px] leading-4 text-[#0a192f]/75">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Philosophy({ locale = "ar" }) {
  const t = getDictionary(locale).about.philosophy;

  return (
    <section data-reveal className="relative isolate overflow-hidden bg-[#09182c] px-6 py-24 text-center md:min-h-[643px] md:py-0 md:pt-[144px] ltr:md:pb-28">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[calc(50%+133px)] -z-10 h-[350px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bb9a5a]/10 blur-[60px]"
      />
      <div className="mx-auto flex max-w-[896px] flex-col items-center gap-7">
        <p className="pb-6 text-[12px] font-bold leading-4 tracking-[1.2px] text-[#bb9a5a]">{t.kicker}</p>
        <p className="max-w-[672px] text-[26px] font-light leading-10 tracking-[0.025em] text-[#faf9f6]/70 md:text-[36px]">
          {t.line}
        </p>

        {/* vertical ornament: a gold stream flows from the top diamond into the bottom one (styles: globals.css → "Flow ornament") */}
        <span aria-hidden="true" className="bp-flow">
          <span className="bp-flow__top" />
          <span className="bp-flow__track">
            <span className="bp-flow__line" />
          </span>
          <span className="bp-flow__end" />
        </span>

        <h2 className="max-w-[768px] font-[family-name:var(--font-alexandria)] text-[34px] font-black leading-[1.2] tracking-[-0.025em] text-[#bb9a5a] drop-shadow-[0_4px_12px_rgba(187,154,90,0.3)] md:text-[48px] md:leading-[48px]">
          {t.gold}
        </h2>
        <p className="max-w-[600px] pt-8 text-[16px] font-light leading-6 text-[#faf9f6]/60">
          {t.body}
        </p>
      </div>
    </section>
  );
}
