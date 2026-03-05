import type { MetadataRoute } from "next";

import { ROLETY } from "@/data/rolety";
import { ZALUZJE } from "@/data/zaluzje";
import { PLISY } from "@/data/plisy";
import { MOSKITIERY } from "@/data/moskitiery";
import { ROLETY_ZEWNETRZNE } from "@/data/roletyZewnetrzne";
import { RA } from "@/data/roletyRzymskieAustriackie";
import { PRIMARY_SITE_URL } from "@/lib/site-urls";

function withBase(base: string, path: string) {
  if (!path || path === "/") {
    return base;
  }

  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function entriesFor(
  path: string,
  lastModified: Date,
  options?: Pick<MetadataRoute.Sitemap[number], "changeFrequency" | "priority">
): MetadataRoute.Sitemap {
  return [
    {
      url: withBase(PRIMARY_SITE_URL, path),
      lastModified,
      ...options,
    },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: Array<{
    path: string;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority?: MetadataRoute.Sitemap[number]["priority"];
  }> = [
    { path: "/" },
    { path: "/produkty" },
    { path: "/produkty/rolety-materialowe" },
    { path: "/produkty/plisy" },
    { path: "/produkty/zaluzje" },
    { path: "/produkty/moskitiery" },
    { path: "/produkty/rolety-zewnetrzne" },
    { path: "/produkty/rolety-rzymskie-austriackie" },
    { path: "/produkty/markizy" },
    { path: "/o-nas" },
    { path: "/jak-mierzyc" },
    { path: "/polityka-prywatnosci" },
    { path: "/mapa-strony" },
    { path: "/realizacja-strony", changeFrequency: "monthly", priority: 0.4 },
  ];

  const entries: MetadataRoute.Sitemap = [
    ...staticEntries.flatMap(({ path, changeFrequency, priority }) =>
      entriesFor(path, lastModified, { changeFrequency, priority })
    ),
    ...Object.keys(ROLETY).flatMap((slug) =>
      entriesFor(`/produkty/rolety-materialowe/${slug}`, lastModified)
    ),
    ...Object.keys(ZALUZJE).flatMap((slug) =>
      entriesFor(`/produkty/zaluzje/${slug}`, lastModified)
    ),
    ...Object.keys(PLISY).flatMap((slug) =>
      entriesFor(`/produkty/plisy/${slug}`, lastModified)
    ),
    ...Object.keys(MOSKITIERY).flatMap((slug) =>
      entriesFor(`/produkty/moskitiery/${slug}`, lastModified)
    ),
    ...Object.keys(ROLETY_ZEWNETRZNE).flatMap((slug) =>
      entriesFor(`/produkty/rolety-zewnetrzne/${slug}`, lastModified)
    ),
    ...Object.keys(RA).flatMap((slug) =>
      entriesFor(`/produkty/rolety-rzymskie-austriackie/${slug}`, lastModified)
    ),
  ];

  return entries;
}
