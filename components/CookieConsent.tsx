"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONSENT_EVENT, getConsent, setConsent } from "@/lib/consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);

    function handleChange(e: Event) {
      const detail = (e as CustomEvent<string | null>).detail;
      setVisible(detail === null);
    }

    window.addEventListener(CONSENT_EVENT, handleChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleChange);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-white/10 bg-surface-dark/97 backdrop-blur">
      <div className="container-px flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-white/75">
          Sütiket használunk a weboldal működéséhez és a látogatottság mérésére
          (Google Analytics). A mérőkód csak akkor töltődik be, ha
          hozzájárul. Részletek:{" "}
          <Link href="/adatkezeles" className="underline hover:text-white">
            Adatkezelési tájékoztató
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent("rejected")}
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Elutasítom
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-brand hover:text-white"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  );
}
