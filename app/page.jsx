import Hero from "@/components/Hero";
import { About, Domains, Method, WhyUs, CallToAction } from "@/components/home/HomeSections";
import { getLocale, pageMetadata } from "@/lib/i18n/server";

export async function generateMetadata() {
  return pageMetadata("home", "/");
}

export default async function HomePage() {
  const locale = await getLocale();

  return (
    <>
      <Hero />
      <About locale={locale} />
      <Domains locale={locale} />
      <Method />
      <WhyUs locale={locale} />
      <CallToAction locale={locale} />
    </>
  );
}
