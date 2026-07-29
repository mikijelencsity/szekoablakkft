export const SITE_URL = "https://szekoablak.hu";

export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Szeko Ablak Kft — Nyílászáró, Redőny, Felújítás",
};

// Az openGraph mezői csak akkor öröklődnek a layoutból, ha az oldal
// egyáltalán nem definiál openGraph-ot. Amint definiál, a szülő teljesen
// felülíródik — ezért kell minden saját openGraph-ba beszórni ezeket.
export const ogImage = { images: [OG_IMAGE] };
export const twitterImage = { images: [OG_IMAGE.url] };
