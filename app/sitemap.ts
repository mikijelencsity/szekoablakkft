import type { MetadataRoute } from "next";
import { services } from "@/lib/szolgaltatasok-adat";
import { posts } from "@/lib/blog-adat";

const SITE_URL = "https://szekoablak.hu";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/szolgaltatasok", "/referenciak", "/rolunk", "/blog", "/kapcsolat"];
  const serviceRoutes = services.map((s) => `/szolgaltatasok/${s.slug}`);
  const blogRoutes = posts.map((p) => `/blog/${p.slug}`);

  return [...routes, ...serviceRoutes, ...blogRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/szolgaltatasok/")
          ? 0.7
          : route.startsWith("/blog/")
            ? 0.6
            : 0.8,
  }));
}
