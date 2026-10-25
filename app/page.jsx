import Hero from "@/components/Hero";
import { About, Domains, Method, WhyUs, CallToAction } from "@/components/home/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Domains />
      <Method />
      <WhyUs />
      <CallToAction />
    </>
  );
}
