// Hero entrance: one Web Animations timeline, run once when the hero comes into view.
//   1. logo, nav and the header CTA drop in
//   2. the kicker un-blurs
//   3. each headline line springs up out of a blur, 0.16s apart
//   4. then the subline, both buttons and the stats strip rise in turn
// Items carry data-enter="<name>" (header items live in Header.jsx, the rest in Hero.jsx).
// Until it starts, CSS keeps those items hidden (app/globals.css → "Entrance").
// Returns a cleanup function.

// Spring with one soft overshoot; cubic-bezier fallback where linear() isn't supported.
const SPRING_LINEAR =
  "linear(0, .009, .035 2.1%, .141 4.4%, .723 12.9%, .938 16.7%, 1.017 19.9%, 1.077, 1.121 24.9%, 1.137 26.9%, 1.139, 1.13 31.7%, 1.087 37.6%, 1.035 44.3%, 1.007 50.4%, .992 57.1%, .991 64.1%, .998 76.5%, 1)";
const EASE_OUT = "cubic-bezier(.22, 1, .36, 1)";

export function playHeroEntrance(hero) {
  if (!hero) return () => {};
  const reveal = () => hero.setAttribute("data-entered", "");

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduce.matches || typeof hero.animate !== "function") {
    reveal();
    return () => {};
  }

  const spring = CSS.supports("animation-timing-function", "linear(0, 1)") ? SPRING_LINEAR : "cubic-bezier(.34, 1.4, .64, 1)";
  const get = (name) => document.querySelector(`[data-enter="${name}"]`);
  let anims = [];
  let raf = 0;
  let cancelled = false;

  function play() {
    if (cancelled) return;
    // Frame units on desktop (1u = 1/1440 of the hero width); fixed px scale on phones.
    const k = window.innerWidth <= 820 ? 0.42 : hero.getBoundingClientRect().width / 1440;
    const px = (n) => `${(n * k).toFixed(2)}px`;

    const drop = [{ opacity: 0, transform: `translateY(${px(-28)})` }, { opacity: 1, transform: "none" }];
    const unblur = [{ opacity: 0, filter: `blur(${px(14)})` }, { opacity: 1, filter: "blur(0px)" }];
    const springUp = [
      { opacity: 0, filter: `blur(${px(16)})`, transform: `translateY(${px(70)}) scale(.96)` },
      { opacity: 1, filter: "blur(0px)", transform: "none" },
    ];
    const rise = [{ opacity: 0, transform: `translateY(${px(26)})` }, { opacity: 1, transform: "none" }];

    // [name, start ms, duration ms, keyframes, easing]
    const steps = [
      ["logo", 0, 700, drop, EASE_OUT],
      ["nav", 80, 700, drop, EASE_OUT],
      ["lang", 120, 700, drop, EASE_OUT],
      ["cta", 160, 700, drop, EASE_OUT],
      ["menu", 160, 700, drop, EASE_OUT], // phone menu button
      ["kicker", 260, 900, unblur, EASE_OUT],
      ["line1", 460, 1100, springUp, spring],
      ["line2", 620, 1100, springUp, spring], // 0.16s after line 1
      ["sub", 980, 800, rise, EASE_OUT],
      ["primary", 1100, 800, rise, EASE_OUT],
      ["secondary", 1220, 800, rise, EASE_OUT],
      ["stats", 1340, 800, rise, EASE_OUT],
    ];

    // One timeline: every animation is pinned to the same start time on document.timeline.
    const t0 = document.timeline.currentTime;
    anims = steps
      .map(([name, delay, duration, frames, easing]) => {
        const el = get(name);
        if (!el) return null;
        // 'backwards' holds the first frame until each item's turn; afterwards the
        // element falls back to its own styles, so hover transforms are untouched.
        const a = el.animate(frames, { duration, easing, fill: "backwards" });
        a.startTime = t0 + delay;
        return a;
      })
      .filter(Boolean);

    reveal(); // drops the CSS pre-hide in the same frame the animations take over
    hero.dataset.entrance = "playing";
    Promise.all(anims.map((a) => a.finished))
      .then(() => {
        hero.dataset.entrance = "done";
      })
      .catch(() => {});
  }

  const fontsReady = Promise.race([
    document.fonts ? document.fonts.ready : Promise.resolve(),
    new Promise((r) => setTimeout(r, 1500)),
  ]);

  // Run once, when the hero is on screen.
  const io = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      fontsReady.then(() => {
        raf = requestAnimationFrame(play);
      });
    },
    { threshold: 0.1 }
  );
  io.observe(hero);

  return () => {
    cancelled = true;
    io.disconnect();
    cancelAnimationFrame(raf);
    anims.forEach((a) => a.cancel());
  };
}
