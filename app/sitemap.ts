import type { MetadataRoute } from "next";
import { services } from "@/lib/szolgaltatasok-adat";

const SITE_URL = "https://szekoablak.hu";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/szolgaltatasok", "/referenciak", "/rolunk", "/kapcsolat"];
  const serviceRoutes = services.map((s) => `/szolgaltatasok/${s.slug}`);

  return [...routes, ...serviceRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/szolgaltatasok/") ? 0.7 : 0.8,
  }));
}
