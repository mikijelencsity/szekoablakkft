// Egyszerű süti-hozzájárulás állapot localStorage-ban.
// Az analitikai szkript (GoogleAnalytics.tsx) csak "accepted" állapotnál töltődik be.

export const CONSENT_KEY = "szeko-cookie-consent";
export const CONSENT_EVENT = "szeko-cookie-consent-changed";

export type ConsentValue = "accepted" | "rejected";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function setConsent(value: ConsentValue) {
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export function resetConsent() {
  window.localStorage.removeItem(CONSENT_KEY);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}
