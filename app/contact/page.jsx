import ContactHero from "@/components/contact/ContactHero";
import ContactArea from "@/components/contact/ContactArea";
import { pageMetadata } from "@/lib/i18n/server";

export async function generateMetadata() {
  return pageMetadata("contact", "/contact");
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactArea />
    </>
  );
}
