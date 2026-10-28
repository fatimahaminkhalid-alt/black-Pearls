import AboutHero from "@/components/about/AboutHero";
import { AboutIntro, VisionMission, Philosophy } from "@/components/about/AboutSections";
import { CallToAction } from "@/components/home/HomeSections";

export default function EnglishAboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro locale="en" />
      <VisionMission locale="en" />
      <Philosophy locale="en" />
      <CallToAction locale="en" />
    </>
  );
}
