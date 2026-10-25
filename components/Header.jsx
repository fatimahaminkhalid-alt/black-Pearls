import Link from "next/link";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن الشركة" },
  { href: "/services", label: "خدماتنا" },
  { href: "/ecosystem", label: "منظومتنا" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-[#f7f5f0]">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-6">
        <Link href="/" aria-label="اللؤلؤ الأسود - الرئيسية" className="shrink-0">
          <span className="inline-block rounded-xl bg-[#f7f5f0] px-2 py-1 shadow-lg">
            <img src="/logo.png" alt="اللؤلؤ الأسود" className="h-12 w-auto" />
          </span>
        </Link>

        <nav aria-label="القائمة الرئيسية" className="hidden gap-8 text-[16px] md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-[#e8ca65]">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-md border border-[#e8ca65] px-5 py-2 text-[16px] text-[#e8ca65] transition-colors hover:bg-[#e8ca65] hover:text-[#071a2e]"
        >
          كن شريكاً
        </Link>
      </div>
    </header>
  );
}
