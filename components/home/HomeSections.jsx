import Link from "next/link";

const domains = [
  { no: "01", title: "الاستراتيجية", sub: "تخطيط مسارات التحول والنمو", desc: "تصميم مسارات التحول والنمو المؤسسي، وصياغة الرؤى والسياسات المستقبلية المبنية على فهم عميق لديناميكيات السوق والتوجهات الوطنية." },
  { no: "02", title: "التقنية", sub: "حلول رقمية وبنية تحتية سيادية", desc: "تطوير حلول رقمية تدعم الكفاءة واتخاذ القرار، وبناء منظومات ذكية تعزز الأداء التشغيلي." },
  { no: "03", title: "تطوير الأعمال", sub: "توسيع الأسواق وصناعة التحالفات", desc: "خلق فرص نمو نوعية وغير تقليدية، وتوسيع الحصص السوقية للكيانات، وبناء الشراكات الاستراتيجية." },
  { no: "04", title: "الابتكار", sub: "حاضنات وتحويل الأفكار إلى منتجات", desc: "تصميم برامج ومبادرات ابتكار مؤثرة تدعم استكشاف الأفكار الريادية وتحويلها إلى منتجات." },
  { no: "05", title: "بناء القدرات", sub: "تطوير رأس المال البشري والقيادي", desc: "تأهيل القيادات التنفيذية وتطوير المهارات الوطنية في مختلف التخصصات المحورية." },
];

const steps = [
  { no: "01", title: "الفهم العميق", desc: "تحليل التحديات والسياق التنظيمي والبيئي بدقة بالغة." },
  { no: "02", title: "نموذج العمل", desc: "تحويل الرؤية النظرية إلى هيكل عمل تنفيذي واستثماري متين." },
  { no: "03", title: "تصميم الحلول", desc: "ابتكار أدوات ومنظومات مخصصة تتواءم مع متطلبات الواقع." },
  { no: "04", title: "المشاركة بالتنفيذ", desc: "العمل الميداني جنباً إلى جنب مع شركائنا لضمان الجودة." },
  { no: "05", title: "قياس الأثر", desc: "متابعة مؤشرات الأداء الحقيقية وتحقيق المستهدفات بدقة." },
];

const contrasts = [
  { gold: "نحن ننزل إلى الميدان و", goldBold: "نشارك في التنفيذ", tail: "حتى تحقيق النتائج الملموسة.", before: "نحن لا نقدم مجرد استشارات وتقارير نظرية مفرغة." },
  { gold: "بل نبني", goldBold: "منظومات متكاملة ومستدامة", tail: "تتناغم وتتطور ذاتياً مع المستقبل.", before: "نحن لا نبني حلولاً وخدمات منفصلة أو معزولة عن بعضها." },
  { gold: "بل نقيس نجاحنا بـ", goldBold: "الأثر التراكمي الملموس", tail: "على اقتصاد الوطن وشركائنا.", before: "نحن لا نقيس الإنجاز بعدد الساعات المستهلكة أو حجم العقود." },
];

const chips = ["بناء مجتمعات مزدهرة", "تمكين الإنسان", "تنمية الاقتصاد"];

export function About() {
  return (
    <section data-reveal className="mx-auto grid max-w-[1240px] gap-16 px-6 py-28 md:grid-cols-2">
      <div>
        <h2 className="font-[family-name:var(--font-alexandria)] text-[50px] font-bold leading-none text-[#9e7412]">من نحن</h2>
        <p className="mt-6 max-w-[520px] font-[family-name:var(--font-alexandria)] text-[25px] font-semibold leading-[1.5] text-[#111827]">
          <span className="sr-only">أكثر من شركة قابضة، نحن نبني منظومات تنمو مع المستقبل</span><span aria-hidden="true"><span className="inline-block overflow-hidden align-bottom"><span data-word className="inline-block">أكثر</span></span> <span className="inline-block overflow-hidden align-bottom"><span data-word className="inline-block">من</span></span> <span className="inline-block overflow-hidden align-bottom"><span data-word className="inline-block">شركة</span></span> <span className="inline-block overflow-hidden align-bottom"><span data-word className="inline-block">قابضة،</span></span> <span className="inline-block overflow-hidden align-bottom"><span data-word className="inline-block">نحن</span></span> <span className="inline-block overflow-hidden align-bottom"><span data-word className="inline-block">نبني</span></span> <span className="inline-block overflow-hidden align-bottom"><span data-word className="inline-block">منظومات</span></span> <span className="inline-block overflow-hidden align-bottom"><span data-word className="inline-block">تنمو</span></span> <span className="inline-block overflow-hidden align-bottom"><span data-word className="inline-block">مع</span></span> <span className="inline-block overflow-hidden align-bottom"><span data-word className="inline-block">المستقبل</span></span></span>
        </p>
        <p className="mt-6 max-w-[520px] text-[14px] leading-[1.8] text-[#555e68]">
          نحن لا نكتفي بتقديم التوصيات، بل نبتكر نماذج أعمال ريادية، ونقود مشاريع نوعية تعزز التنافسية وتساهم بفاعلية في تحقيق مستهدفات التحول الاقتصادي للمملكة.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-[16px] leading-[1.8] text-[#555e68]">
          اللؤلؤ الأسود شركة قابضة سعودية تعمل كمنظومة متكاملة تجمع بين الاستراتيجية، التقنية، الابتكار، وتطوير الأعمال؛ نساند الجهات الحكومية والشركات ورواد الأعمال على تحويل الأفكار إلى تنفيذ حقيقي ونمو مستدام.
        </p>
        <div className="rounded-xl bg-[#071a2e] p-8 text-[#f7f5f0]">
          <p className="text-[12px] font-bold tracking-widest text-[#e8ca65]">VISION 2030</p>
          <p className="mt-3 text-[18px] font-bold">متوافقون مع طموحات الرؤية السعودية 2030</p>
          <p className="mt-3 text-[14px] leading-[1.7] text-[#cbd5e1]">
            محركات التحول المتكاملة التي تديرها منظومة اللؤلؤ الأسود لصياغة مستقبل الأعمال وبناء القيمة الوطنية المضافة.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="rounded-full border border-white/20 px-3 py-1 text-[12px] text-[#e2e8f0]">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Domains() {
  return (
    <section data-reveal className="bg-[#f7f5f0] px-6 py-28">
      <div className="mx-auto max-w-[1240px]">
        <p className="text-[12px] font-bold text-[#9e7412]">قدراتنا ومنظوماتنا</p>
        <h2 className="mt-3 font-[family-name:var(--font-alexandria)] text-[48px] font-extrabold leading-none">ماذا نفعل؟</h2>

        <ul className="mt-14 divide-y divide-[#111827]/10 border-y border-[#111827]/10">
          {domains.map((d) => (
            <li key={d.no} data-reveal className="grid items-center gap-6 py-10 md:grid-cols-[120px_1fr_1fr]">
              <span className="font-[family-name:var(--font-alexandria)] text-[36px] font-medium text-[#c59b27]">{d.no}</span>
              <div>
                <h3 className="font-[family-name:var(--font-alexandria)] text-[24px] font-bold">{d.title}</h3>
                <p className="mt-1 text-[12px] font-medium text-[#9e7412]">{d.sub}</p>
              </div>
              <p className="text-[14px] leading-[1.8] text-[#555e68]">{d.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Method() {
  return (
    <section data-reveal className="px-6 py-28">
      <div className="mx-auto max-w-[1240px]">
        <p className="text-[12px] font-bold text-[#9e7412]">منهجية اللؤلؤ الأسود</p>
        <h2 className="mt-3 font-[family-name:var(--font-alexandria)] text-[48px] font-bold leading-none">كيف نعمل؟</h2>
        <p className="mt-6 max-w-[580px] text-[16px] leading-[1.7] text-[#555e68]">
          منهجية دقيقة ومدروسة تضمن انتقال الأفكار من التخطيط النظري إلى الأثر الواقعي المستدام.
        </p>

        <ol className="mt-14 grid gap-5 md:grid-cols-5">
          {steps.map((s) => (
            <li key={s.no} data-reveal className="rounded-xl border border-[#e8e6e1] bg-white p-6">
              <p className="font-mono text-[14px] font-bold text-[#9e7412]">{s.no}</p>
              <p className="mt-6 text-[16px] font-bold">{s.title}</p>
              <p className="mt-3 text-[12px] leading-[1.7] text-[#555e68]">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section data-reveal className="bg-[#0b1f3a] px-6 py-28 text-[#f7f5f0]">
      <div className="mx-auto max-w-[1240px]">
        <p className="text-[12px] font-bold text-[#e8ca65]">عوامل التميز المؤسسي</p>
        <h2 className="mt-3 font-[family-name:var(--font-alexandria)] text-[48px] font-medium leading-none">لماذا اللؤلؤ الأسود؟</h2>

        <div className="mt-14 space-y-6">
          {contrasts.map((c, i) => (
            <div key={i} data-reveal className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_280px]">
              <div>
                <p className="text-[12px] font-bold text-[#e8ca65]">نهج اللؤلؤ الأسود</p>
                <p className="mt-3 text-[22px] font-bold leading-[1.6]">
                  {c.gold} <span className="text-[#e8ca65]">{c.goldBold}</span> {c.tail}
                </p>
              </div>
              <div>
                <p className="text-[18px] text-[#94a3b8]">النمط التقليدي</p>
                <p className="mt-2 text-[16px] font-light leading-[1.7] text-[#94a3b8]">{c.before}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section data-reveal className="relative overflow-hidden bg-[#071a2e] px-6 py-28 text-center text-[#f7f5f0]">
      <svg aria-hidden="true" viewBox="0 0 200 200" className="pointer-events-none absolute -left-24 -top-24 h-[320px] w-[320px] opacity-20 animate-[spin_40s_linear_infinite] motion-reduce:animate-none">
        <defs>
          <path id="cta-ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-[#e8ca65] text-[13px] font-semibold tracking-[0.35em]">
          <textPath href="#cta-ring">الاستراتيجية • التقنية • تطوير الأعمال • الابتكار • بناء القدرات •</textPath>
        </text>
      </svg>
      <h2 className="font-[family-name:var(--font-alexandria)] text-[44px] font-semibold leading-[1.25] md:text-[60px]">
        هل تبحث عن <span className="text-[#e8ca65]">شريك حقيقي</span> للتحول؟
      </h2>
      <p className="mx-auto mt-6 max-w-[700px] text-[18px] leading-[1.7] text-[#cbd5e1]">
        انضم إلى منظومات اللؤلؤ الأسود وصمّم مستقبلك المؤسسي بخطوات استراتيجية واثقة تصنع فارقاً ملموساً في مسيرة التنمية.
      </p>
      <Link
        href="/contact"
        className="mt-10 inline-block rounded-md bg-[#e8ca65] px-10 py-3 text-[16px] font-bold text-[#071a2e] transition-opacity hover:opacity-90"
      >
        كن شريكاً
      </Link>
      <p className="mt-8 text-[12px] text-[#94a3b8]">الرياض، المملكة العربية السعودية • استجابة قيادية رفيعة خلال 24 ساعة</p>
    </section>
  );
}
