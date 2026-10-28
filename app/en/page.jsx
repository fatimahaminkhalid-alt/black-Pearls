import Hero from "@/components/Hero";
import { About, Domains, Method, WhyUs, CallToAction } from "@/components/home/HomeSections";

export default function EnglishHomePage() {
  return (
    <>
      <Hero />
      <About locale="en" />
      <Domains locale="en" />
      <Method />
      <WhyUs locale="en" />
      <CallToAction locale="en" />
    </>
  );
}
