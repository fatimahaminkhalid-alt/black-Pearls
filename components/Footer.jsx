import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#071a2e] px-6 pt-20 text-[#94a3b8]">
      <div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-5">
          <span className="inline-block rounded-xl bg-[#f7f5f0] px-2 py-1">
            <img src="/logo.png" alt="اللؤلؤ الأسود" className="h-12 w-auto" />
          </span>
          <p className="max-w-[330px] text-[12px] leading-[1.9]">
            شركة قابضة سعودية رائدة تبني المنظومات المتكاملة وتستثمر في الاستراتيجيات والتقنيات التي تصنع قيمة وطنية مستدامة متوافقة مع رؤية المملكة 2030.
          </p>
          <p className="text-[12px]">
            <span className="font-semibold text-[#e8ca65]">المقر الرئيسي:</span> الرياض، المملكة العربية السعودية
          </p>
        </div>

        <FooterCol title="المنظومة" items={[["الرئيسية", "/"], ["عن الشركة", "/about"], ["منظومتنا", "/ecosystem"], ["خدماتنا", "/services"], ["تواصل معنا", "/contact"]]} />
        <FooterCol title="القدرات" items={[["الاستراتيجية", "/services"], ["التقنية", "/services"], ["تطوير الأعمال", "/services"], ["الابتكار", "/services"], ["بناء القدرات", "/services"]]} />

        <div>
          <p className="mb-4 text-[14px] font-bold text-white">التواصل والامتثال</p>
          <ul className="space-y-3 text-[12px]">
            <li>
              سجل تجاري سعودي: <span className="text-[#e8ca65]">يضاف لاحقاً</span>
            </li>
            <li>
              البريد الإلكتروني:{" "}
              <a className="text-white hover:text-[#e8ca65]" href="mailto:info@blackpearls.sa">info@blackpearls.sa</a>
            </li>
            <li>الهاتف: <span className="text-[#e8ca65]">يضاف لاحقاً</span></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1240px] flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 text-[12px]">
        <p>© 2026 شركة اللؤلؤ الأسود القابضة. جميع الحقوق محفوظة بالمملكة العربية السعودية.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-[#e8ca65]">ميثاق الحوكمة</Link>
          <Link href="#" className="hover:text-[#e8ca65]">الشروط والأحكام</Link>
          <Link href="#" className="hover:text-[#e8ca65]">سياسة الخصوصية</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <p className="mb-4 text-[14px] font-bold text-white">{title}</p>
      <ul className="space-y-3 text-[12px]">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="hover:text-[#e8ca65]">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
