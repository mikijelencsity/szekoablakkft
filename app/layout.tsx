import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/lib/lenis";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import PhoneButton from "@/components/PhoneButton";

const satoshi = Manrope({
  variable: "--font-satoshi",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Szeko Ablak Kft | Windows, Renovation & Construction",
  description:
    "Fast, reliable, and high-quality window installation, renovation, and construction services. Request your free, no-obligation quote today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <LenisProvider>
          <Preloader />
          <Header />
          {children}
          <PhoneButton />
        </LenisProvider>
      </body>
    </html>
  );
}
