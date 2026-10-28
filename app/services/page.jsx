import ServicesHero from "@/components/services/ServicesHero";
import { ServicesExplorer } from "@/components/services/ServicesSections";
import { CallToAction } from "@/components/home/HomeSections";
import { getLocale, pageMetadata } from "@/lib/i18n/server";

export async function generateMetadata() {
  return pageMetadata("services", "/services");
}

export default async function ServicesPage() {
  const locale = await getLocale();

  return (
    <>
      <ServicesHero />
      <ServicesExplorer locale={locale} />
      <CallToAction locale={locale} />
    </>
  );
}
