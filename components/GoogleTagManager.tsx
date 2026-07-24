"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_EVENT, type ConsentValue, getConsent } from "@/lib/consent";

const GTM_ID = "GTM-NWM2FD3Z";

export default function GoogleTagManager() {
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
    <Script id="gtm-init" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');
      `}
    </Script>
  );
}
