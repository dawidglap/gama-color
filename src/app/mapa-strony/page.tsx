// app/mapa-strony/page.tsx
import Link from "next/link";
import { Metadata } from "next";

// ====== DATA (adatta gli import ai tuoi file se servisse) ======
import { ROLETY } from "@/data/rolety"; // rolety materiałowe
import { ZALUZJE } from "@/data/zaluzje";
import { PLISY } from "@/data/plisy";
import { MOSKITIERY } from "@/data/moskitiery";
import { ROLETY_ZEWNETRZNE } from "@/data/roletyZewnetrzne";

// (facoltativo) SEO
export const metadata: Metadata = {
  title: "Mapa strony — GAMA COLOR",
  description:
    "Pełna mapa strony GAMA COLOR: żaluzje, rolety, plisy, moskitiery, rolety zewnętrzne i markizy oraz strony informacyjne.",
};

// helper tipizzati
type Item = { href: string; label: string };
function buildList<T extends { slug: string; title: string }>(
  record: Record<string, T>,
  basePath: string
): Item[] {
  return Object.values(record).map((v) => ({
    href: `${basePath}/${v.slug}`,
    label: v.title,
  }));
}

export default function SiteMapPage() {
  // liste dinamiche dai data
  const roletyMat = buildList(ROLETY, "/produkty/rolety-materialowe");
  const zaluzje = buildList(ZALUZJE, "/produkty/zaluzje");
  const plisy = buildList(PLISY, "/produkty/plisy");
  const moskitiery = buildList(MOSKITIERY, "/produkty/moskitiery");
  const roletyZewn = buildList(ROLETY_ZEWNETRZNE, "/produkty/rolety-zewnetrzne");

  // rzymskie/austriackie — se i tuoi slug sono diversi, aggiorna qui
  const rzymskieAustriackie: Item[] = [
    { href: "/produkty/rolety-rzymskie-austriackie/rolety-rzymskie", label: "Rolety rzymskie" },
    { href: "/produkty/rolety-rzymskie-austriackie/rolety-austriackie", label: "Rolety austriackie" },
  ];

  // pagine info
  const info: Item[] = [
    { href: "/o-nas", label: "O nas" },
    { href: "/produkty", label: "Produkty" },
    { href: "/#advantages", label: "Dlaczego my" },
    { href: "/#reviews", label: "Opinie klientów" },
    { href: "/#faq", label: "FAQ" },
    { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
  ];

  return (
    <main className="relative">
      {/* ==== STRISCE BRAND LATERALI ==== */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-y-0 right-[-12px] z-0 hidden translate-x-4 sm:block"
      >
        <div className="relative h-full w-[220px] rotate-[18deg]">
          <div className="absolute inset-y-0 right-0 w-[14px] rounded-full bg-blue-400/90" />
          <div className="absolute inset-y-0 right-[28px] w-[14px] rounded-full bg-red-500/90" />
          <div className="absolute inset-y-0 right-[56px] w-[14px] rounded-full bg-yellow-400/90" />
        </div>
      </div>

      {/* ==== CONTAINER ==== */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500">
          <Link href="/" className="hover:underline">Strona główna</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-neutral-700">Mapa strony</span>
        </nav>

        {/* header */}
        <header className="mb-8">
          <p className="text-sm font-medium text-neutral-500">Nawigacja</p>
          <h1 className="mt-2 text-3xl font-bold text-neutral-900 md:text-5xl">Mapa strony</h1>
          <p className="mt-4 max-w-3xl text-neutral-600">
            Szybki przegląd wszystkich kluczowych podstron i produktów GAMA COLOR.
            Linki są pogrupowane, aby ułatwić dotarcie do interesującej Cię kategorii.
          </p>
        </header>

        {/* separatore brand */}
        <div className="mb-10 flex w-full">
          <div className="h-1 w-1/3 bg-yellow-400" />
          <div className="h-1 w-1/3 bg-red-500" />
          <div className="h-1 w-1/3 bg-blue-400" />
        </div>

        {/* GRID */}
        <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <Section title="Rolety materiałowe" base="/produkty/rolety-materialowe" items={roletyMat} />
          <Section title="Żaluzje" base="/produkty/zaluzje" items={zaluzje} />
          <Section title="Plisy" base="/produkty/plisy" items={plisy} />
          <Section title="Moskitiery" base="/produkty/moskitiery" items={moskitiery} />
          <Section title="Rolety zewnętrzne" base="/produkty/rolety-zewnetrzne" items={roletyZewn} />
          <Section title="Rolety rzymskie i austriackie" base="/produkty/rolety-rzymskie-austriackie" items={rzymskieAustriackie} />
          <Section
            title="Markizy"
            base="/produkty/markizy"
            items={[{ href: "/produkty/markizy", label: "Markizy tarasowe i balkonowe" }]}
          />
          <Section title="Informacje" base="/" items={info} />
        </section>
      </div>
    </main>
  );
}

/* ====== piccolo componente lista ====== */
function Section({ title, base, items }: { title: string; base: string; items: { href: string; label: string }[] }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200/70">
      <h2 className="text-lg font-semibold text-neutral-900">
        <Link href={base} className="hover:underline">{title}</Link>
      </h2>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="group inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900"
            >
              <span className="h-[3px] w-3 rounded-full bg-yellow-400 transition group-hover:w-4" />
              <span className="underline decoration-transparent underline-offset-2 group-hover:decoration-neutral-300">
                {it.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
