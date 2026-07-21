import type { MetadataRoute } from "next";

const SITE_URL = "https://szekoablak.hu";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/szolgaltatasok", "/referenciak", "/rolunk", "/kapcsolat"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
