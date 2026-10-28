import { Alexandria, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import { I18nProvider } from "@/components/I18nProvider";
import { getDictionary } from "@/lib/i18n";
import { LOCALE_DIR } from "@/lib/i18n/config";
import { getLocale } from "@/lib/i18n/server";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-alexandria",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata() {
  const locale = await getLocale();
  const { site } = getDictionary(locale).meta;
  return {
    // Set NEXT_PUBLIC_SITE_URL (e.g. https://blackpearls.sa) so language links are absolute.
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
    title: site.title,
    description: site.description,
  };
}

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  return (
    // suppressHydrationWarning: the inline script below adds a "js" class before React hydrates.
    <html lang={locale} dir={LOCALE_DIR[locale]} className={`${alexandria.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Lets the hero hide its items until the entrance timeline starts (no flash, no-JS safe). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <I18nProvider locale={locale}>
          <Motion />
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </I18nProvider>
      </body>
    </html>
  );
}
