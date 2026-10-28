import ServicesHero from "@/components/services/ServicesHero";
import { ServicesExplorer } from "@/components/services/ServicesSections";
import { CallToAction } from "@/components/home/HomeSections";

export default function EnglishServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesExplorer locale="en" />
      <CallToAction locale="en" />
    </>
  );
}
