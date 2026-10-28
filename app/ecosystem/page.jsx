import EcosystemHero from "@/components/ecosystem/EcosystemHero";
import NetworkMap from "@/components/ecosystem/NetworkMap";
import Pipeline from "@/components/ecosystem/Pipeline";
import Convergence from "@/components/ecosystem/Convergence";
import { CallToAction } from "@/components/home/HomeSections";
import { getLocale, pageMetadata } from "@/lib/i18n/server";

export async function generateMetadata() {
  return pageMetadata("ecosystem", "/ecosystem");
}

export default async function EcosystemPage() {
  const locale = await getLocale();

  return (
    <>
      <EcosystemHero />
      <NetworkMap />
      <Pipeline />
      <Convergence />
      <CallToAction locale={locale} />
    </>
  );
}
