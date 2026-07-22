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

const SITE_URL = "https://szekoablak.hu";
const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Szeko Ablak Kft — Nyílászáró, Redőny, Felújítás",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Szeko Ablak Kft | Nyílászáró, Redőny, Felújítás",
    template: "%s | Szeko Ablak Kft",
  },
  description:
    "Gyors, megbízható és magas minőségű nyílászárócsere, redőny, felújítás és építőipari munkák. Kérjen ingyenes árajánlatot még ma.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icons/icon-64.png", type: "image/png", sizes: "64x64" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: SITE_URL,
    siteName: "Szeko Ablak Kft",
    title: "Szeko Ablak Kft | Nyílászáró, Redőny, Felújítás",
    description:
      "Gyors, megbízható és magas minőségű nyílászárócsere, redőny, felújítás és építőipari munkák.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Szeko Ablak Kft | Nyílászáró, Redőny, Felújítás",
    description:
      "Gyors, megbízható és magas minőségű nyílászárócsere, redőny, felújítás és építőipari munkák.",
    images: [OG_IMAGE.url],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Szeko Ablak Kft",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: ["+36202191858", "+36202194514"],
  email: "szeko2010@gmail.com",
  priceRange: "$$",
  foundingDate: "2010",
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ablakcsere" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ajtócsere" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Redőnyszerelés" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Szúnyogháló" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Párkány" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teljes körű lejavítás" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Festés" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Padlóburkolás" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${satoshi.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
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
