"use client";

import { resetConsent } from "@/lib/consent";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={resetConsent}
      className="mt-3 inline-flex items-center text-brand underline hover:text-brand-dark"
    >
      Süti-beállítások módosítása
    </button>
  );
}
