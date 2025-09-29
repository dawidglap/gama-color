// app/jak-mierzyc/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

/** ── SEO ───────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Jak mierzyć – instrukcje pomiaru | Gama Color Słupsk",
  description:
    "Proste instrukcje pomiaru dla: żaluzji, plis, rolet (Classic, Profil, dzień i noc) i innych. Jedna grafika na produkt + szybki download.",
  alternates: { canonical: "/jak-mierzyc" },
};

/** ── Dati: placeholder immagini/download (sostituisci i path quando pronti) ─ */
type Guide = { name: string; slug: string; image: string; download: string };

const GUIDES: Guide[] = [
  { name: "Żaluzje pionowe",        slug: "zaluzje-pionowe",        image: "/measure/zaluzje-pionowe.webp",        download: "/measure/zaluzje-pionowe.webp" },
  { name: "Żaluzje poziome",        slug: "zaluzje-poziome",        image: "/measure/zaluzje-poziome.webp",        download: "/measure/zaluzje-poziome.webp" },
  { name: "Żaluzje drewniane 25mm", slug: "zaluzje-drewniane-25",   image: "/measure/zaluzje-drewniane-25.webp",   download: "/measure/zaluzje-drewniane-25.webp" },
  { name: "Żaluzje drewniane 50mm", slug: "zaluzje-drewniane-50",   image: "/measure/zaluzje-drewniane-50.webp",   download: "/measure/zaluzje-drewniane-50.webp" },
  { name: "Żaluzje bambusowe 25mm", slug: "zaluzje-bambusowe-25",   image: "/measure/zaluzje-bambusowe-25.webp",   download: "/measure/zaluzje-bambusowe-25.webp" },
  { name: "Żaluzje bambusowe 50mm", slug: "zaluzje-bambusowe-50",   image: "/measure/zaluzje-bambusowe-50.webp",   download: "/measure/zaluzje-bambusowe-50.webp" },
  { name: "Plisy",                  slug: "plisy",                  image: "/measure/plisy.webp",                  download: "/measure/plisy.webp" },
  { name: "Rolety Vegas Classic",   slug: "rolety-vegas-classic",   image: "/measure/rolety-vegas-classic.webp",   download: "/measure/rolety-vegas-classic.webp" },
  { name: "Rolety Vegas Profil",    slug: "rolety-vegas-profil",    image: "/measure/rolety-vegas-profil.webp",    download: "/measure/rolety-vegas-profil.webp" },
  { name: "Rolety wolno-wiszące",   slug: "rolety-wolno-wiszace",   image: "/measure/rolety-wolno-wiszace.webp",   download: "/measure/rolety-wolno-wiszace.webp" },
  { name: "Rolety dzień i noc",     slug: "rolety-dzien-i-noc",     image: "/measure/rolety-dzien-i-noc.webp",     download: "/measure/rolety-dzien-i-noc.webp" },
];

export default function Page() {
  return (
    <main className="relative md:px-0 px-2">
      {/* Strisce brand fisse (destra) */}
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

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500">
          <Link href="/" className="hover:underline">Strona główna</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-neutral-700">Jak mierzyć</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <p className="text-sm font-medium text-neutral-500">Instrukcje</p>
          <h1 className="mt-2 text-3xl font-bold text-neutral-900 md:text-5xl">
            Jak prawidłowo wykonać pomiar?
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-600">
            Aby precyzyjnie dopasować produkt do okna, wykonaj prosty pomiar. Poniżej znajdziesz
            krótkie instrukcje — każdy produkt ma jedną grafikę z opisem wymiarów oraz link do pobrania.
          </p>

          {/* brand separator */}
          <div className="mt-6 flex w-full gap-4">
            <span className="h-1 w-24 rounded-full bg-yellow-400" />
            <span className="h-1 w-24 rounded-full bg-red-500" />
            <span className="h-1 w-24 rounded-full bg-blue-400" />
          </div>
        </header>

        {/* Lista stile “tabela” */}
        <section
          aria-label="Lista produktów z instrukcjami pomiaru"
          className="overflow-hidden rounded-lg border border-neutral-200 bg-white"
        >
          <ul className="divide-y divide-neutral-200">
            {GUIDES.map((g, idx) => (
              <li
                key={g.slug}
                className={[
                  "grid grid-cols-1 gap-3 px-4 py-4 sm:grid-cols-3 sm:items-center sm:px-6",
                  idx % 2 === 1 ? "bg-neutral-50" : "bg-white",
                ].join(" ")}
              >
                <span className="text-base font-semibold text-neutral-900">
                  {g.name}
                </span>

                <span className="text-neutral-600">
                  Krótka instrukcja pomiaru — zobacz grafikę.
                </span>

                <div className="flex items-center justify-start gap-4 sm:justify-end">
                  {/* Apri popup immagine */}
                  <a
                    href={`#guide-${g.slug}`}
                    className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 active:bg-neutral-100"
                    aria-controls={`guide-${g.slug}`}
                  >
                    » zobacz jak wymierzyć
                  </a>

                  {/* Download diretto */}
                  <a
                    href={g.download}
                    download
                    className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 active:bg-neutral-900"
                  >
                    Pobierz grafikę
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Nota: bezpłatny pomiar — warunek */}
        <div className="mx-auto mt-12 max-w-xl rounded-xl border border-neutral-200 bg-white p-5 text-sm text-neutral-600 shadow-sm">
          <p id="pomiar-footnote">
            <strong>Uwaga:</strong> bezpłatny pomiar dotyczy realizacji zakończonych zamówieniem.
            W przypadku rezygnacji z zamówienia może obowiązywać opłata za serwis.
          </p>
        </div>

        <div className="h-8" />
      </div>

      {/* ── Modali (no-JS): :target mostra/chiude ─────────────────────────── */}
      <style>{`
        .gc-modal {
          position: fixed; inset: 0; display: grid; place-items: center;
          background: rgba(0,0,0,.5); opacity: 0; pointer-events: none;
          transition: opacity .2s ease;
          z-index: 70;
          padding: 1rem;
        }
        .gc-modal:target { opacity: 1; pointer-events: auto; }
        .gc-modal__card {
          width: 100%; max-width: 960px; background: #fff; border-radius: .75rem;
          box-shadow: 0 10px 30px rgba(0,0,0,.15);
          overflow: hidden;
        }
        .gc-modal__header, .gc-modal__footer {
          padding: 0.75rem 1rem; border-bottom: 1px solid rgb(229,229,229);
        }
        .gc-modal__footer { border-top: 1px solid rgb(229,229,229); border-bottom: 0; }
        .gc-modal__body { max-height: 75vh; overflow: auto; background: #f9fafb; }
        .gc-close {
          display: inline-flex; align-items: center; gap:.5rem;
          color: #111827; font-weight: 600; font-size: .875rem;
        }
      `}</style>

      {GUIDES.map((g) => (
        <div key={g.slug} id={`guide-${g.slug}`} className="gc-modal">
          <div className="gc-modal__card">
            <div className="gc-modal__header flex items-center justify-between">
              <h2 className="text-lg font-semibold text-neutral-900">{g.name} — jak wymierzyć</h2>
              {/* Chiudi (torna al top con #_) */}
              <a href="#_" className="gc-close">
                Zamknij
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </a>
            </div>

            <div className="gc-modal__body">
              {/* usa <img> semplice per lasciare a te la sostituzione dei path */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.image}
                alt={`${g.name} — instrukcja pomiaru`}
                className="mx-auto block h-auto w-full max-w-[960px]"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="gc-modal__footer flex items-center justify-between">
              <a href={g.download} download className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800">
                Pobierz grafikę
              </a>
              <a href="#_" className="gc-close">Zamknij</a>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
