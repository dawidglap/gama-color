const DEFAULT_SITE_URLS = [
  "https://gama-color.com.pl",
  "https://gama-kolor.pl",
] as const;

function normalize(url: string) {
  return url.trim().replace(/\/+$/, "");
}

function parseList(value?: string) {
  if (!value) {
    return [] as string[];
  }

  return value
    .split(",")
    .map((item) => normalize(item))
    .filter(Boolean);
}

const envPrimaryRaw = process.env.NEXT_PUBLIC_SITE_URL;
const envPrimary = envPrimaryRaw ? normalize(envPrimaryRaw) : "";
const envList = parseList(process.env.NEXT_PUBLIC_SITE_URLS);

const baseList = envList.length ? envList : [...DEFAULT_SITE_URLS];
const SITE_URLS = [envPrimary, ...baseList]
  .filter(Boolean)
  .filter((url, index, array) => array.indexOf(url) === index);

const PRIMARY_SITE_URL = envPrimary || SITE_URLS[0] || DEFAULT_SITE_URLS[0];

export { PRIMARY_SITE_URL, SITE_URLS };
