import type { MetadataRoute } from "next";

const SITE_URL = "https://szekoablak.hu";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
