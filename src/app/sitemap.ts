import type { MetadataRoute } from "next";

import { ROLETY } from "@/data/rolety";
import { ZALUZJE } from "@/data/zaluzje";
import { PLISY } from "@/data/plisy";
import { MOSKITIERY } from "@/data/moskitiery";
import { ROLETY_ZEWNETRZNE } from "@/data/roletyZewnetrzne";
import { RA } from "@/data/roletyRzymskieAustriackie";
import { SITE_URLS } from "@/lib/site-urls";

function withBase(base: string, path: string) {
  if (!path || path === "/") {
    return base;
  }

  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function entriesFor(path: string, lastModified: Date): MetadataRoute.Sitemap {
  return SITE_URLS.map((base) => ({
    url: withBase(base, path),
    lastModified,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPaths = [
    "/",
    "/produkty",
    "/produkty/rolety-materialowe",
    "/produkty/plisy",
    "/produkty/zaluzje",
    "/produkty/moskitiery",
    "/produkty/rolety-zewnetrzne",
    "/produkty/rolety-rzymskie-austriackie",
    "/produkty/markizy",
    "/o-nas",
    "/jak-mierzyc",
    "/polityka-prywatnosci",
    "/mapa-strony",
  ];

  const entries: MetadataRoute.Sitemap = [
    ...staticPaths.flatMap((path) => entriesFor(path, lastModified)),
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
