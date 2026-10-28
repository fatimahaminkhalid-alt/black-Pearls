import EcosystemHero from "@/components/ecosystem/EcosystemHero";
import NetworkMap from "@/components/ecosystem/NetworkMap";
import Pipeline from "@/components/ecosystem/Pipeline";
import Convergence from "@/components/ecosystem/Convergence";
import { CallToAction } from "@/components/home/HomeSections";

export default function EnglishEcosystemPage() {
  return (
    <>
      <EcosystemHero />
      <NetworkMap />
      <Pipeline />
      <Convergence />
      <CallToAction locale="en" />
    </>
  );
}
