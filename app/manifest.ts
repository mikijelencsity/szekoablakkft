import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Szeko Ablak Kft",
    short_name: "Szeko Ablak",
    description:
      "Nyílászáró-csere, redőny, felújítás és építőipari munkák Baján és Bács-Kiskun megyében.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2457ff",
    icons: [
      { src: "/icons/icon-96.png", sizes: "96x96", type: "image/png" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
