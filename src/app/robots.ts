import type { MetadataRoute } from "next";

import { SITE_URLS } from "@/lib/site-urls";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: SITE_URLS.map((base) => `${base}/sitemap.xml`),
  };
}
