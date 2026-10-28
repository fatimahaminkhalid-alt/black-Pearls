import AboutHero from "@/components/about/AboutHero";
import { AboutIntro, VisionMission, Philosophy } from "@/components/about/AboutSections";
import { CallToAction } from "@/components/home/HomeSections";
import { getLocale, pageMetadata } from "@/lib/i18n/server";

export async function generateMetadata() {
  return pageMetadata("about", "/about");
}

export default async function AboutPage() {
  const locale = await getLocale();

  return (
    <>
      <AboutHero />
      <AboutIntro locale={locale} />
      <VisionMission locale={locale} />
      <Philosophy locale={locale} />
      <CallToAction locale={locale} />
    </>
  );
}
