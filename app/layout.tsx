import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/lib/lenis";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneButton from "@/components/PhoneButton";
import CookieConsent from "@/components/CookieConsent";
import GoogleTagManager from "@/components/GoogleTagManager";

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
  manifest: "/manifest.webmanifest",
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
  sameAs: ["https://www.facebook.com/szekoablak/"],
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dózsa György út 285.",
    addressLocality: "Sükösd",
    postalCode: "6346",
    addressRegion: "Bács-Kiskun",
    addressCountry: "HU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.2833,
    longitude: 18.9667,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Bács-Kiskun vármegye" },
    { "@type": "City", name: "Baja" },
    { "@type": "City", name: "Kalocsa" },
    { "@type": "City", name: "Kecskemét" },
    { "@type": "City", name: "Sükösd" },
  ],
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NWM2FD3Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
        <CookieConsent />
        <GoogleTagManager />
      </body>
    </html>
  );
}
