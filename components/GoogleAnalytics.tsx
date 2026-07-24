"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_EVENT, type ConsentValue, getConsent } from "@/lib/consent";

const GA_ID = "G-9LRTHS4WN0";

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(getConsent() === "accepted");

    function handleChange(e: Event) {
      const detail = (e as CustomEvent<ConsentValue | null>).detail;
      setEnabled(detail === "accepted");
    }

    window.addEventListener(CONSENT_EVENT, handleChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleChange);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
