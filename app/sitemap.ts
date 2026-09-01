import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/automation-audit", "/how-we-work", "/who-we-help", "/about"].map((path) => ({ url: `${SITE_URL}${path}`, changeFrequency: "monthly" as const, priority: path ? 0.8 : 1 }));
}
