import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/lib/lenis";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneButton from "@/components/PhoneButton";

const satoshi = Manrope({
  variable: "--font-satoshi",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Szeko Ablak Kft | Ablak, Redőny, Felújítás",
  description:
    "Gyors, megbízható és magas minőségű ablakcsere, redőny, felújítás és építőipari munkák. Kérjen ingyenes, kötelezettség nélküli árajánlatot még ma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${satoshi.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <LenisProvider>
          <ScrollToTop />
          <Preloader />
          <Header />
          {children}
          <Footer />
          <PhoneButton />
        </LenisProvider>
      </body>
    </html>
  );
}
