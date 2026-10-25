import { Alexandria, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-alexandria",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "اللؤلؤ الأسود | Black Pearls",
  description:
    "اللؤلؤ الأسود شركة قابضة سعودية تبني منظومات متكاملة في الاستراتيجية والتقنية وتطوير الأعمال والابتكار وبناء القدرات.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${alexandria.variable} ${inter.variable}`}>
      <body>
        <Motion />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
