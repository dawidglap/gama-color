// app/not-found.tsx
import Link from "next/link";
import {
  IconArrowLeft,
  IconHome,
  IconSearch,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";

export const metadata = {
  title: "404 — Nie znaleziono strony | Gama Color",
  description:
    "Ups! Ktoś opuścił roletę nad tą stroną. Wróć na stronę główną lub skontaktuj się z nami.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="relative">
      {/* Strisce brand laterali */}
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

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14">
        {/* HERO */}
        <div className="relative mb-10 overflow-hidden rounded-3xl bg-neutral-900 text-white ring-1 ring-neutral-800">
          <div className="grid gap-6 p-8 md:grid-cols-2 md:p-12">
            <div>
              <p className="text-sm text-white/70">Błąd 404</p>
              <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">
                Ta strona nie istnieje
              </h1>

              {/* One-liner ironico */}
              <p className="mt-3 italic text-white/90">
                Ups! Ktoś opuścił roletę nad tą stroną.
              </p>
              <p className="mt-3 max-w-prose text-white/85">
                Link mógł wygasnąć lub został wpisany niepoprawnie. Skorzystaj z szybkich opcji poniżej.
              </p>

              {/* CTA */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-medium text-neutral-900 ring-1 ring-white/20 transition hover:bg-white/90"
                >
                  <IconHome size={18} /> Wróć na stronę główną
                </Link>
                <a
                  href="tel:+48598423534"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400 px-4 py-3 font-medium text-white transition hover:opacity-90"
                >
                  <IconPhone size={18} /> Zadzwoń do nas
                </a>
              </div>

              {/* Link secondari */}
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/o-nas"
                  className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/15 hover:bg-white/15"
                >
                  O nas
                </Link>
                <Link
                  href="/realizacje"
                  className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/15 hover:bg-white/15"
                >
                  Realizacje
                </Link>
                <Link
                  href="/opinie"
                  className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/15 hover:bg-white/15"
                >
                  Opinie klientów
                </Link>
              </div>
            </div>

            {/* box decorativo (niente immagini obbligatorie) */}
           <div
  className="relative w-full overflow-hidden rounded-2xl"
  style={{ aspectRatio: "16 / 10" }}
>
  <Image
    src="/images/rodo/hero.webp"          // ⬅️ metti qui il tuo path
    alt="Gama Color — montaż osłon okiennych"
    fill
    className="object-cover"
    sizes="(min-width: 768px) 50vw, 100vw"
    priority={false}
  />
  {/* leggero overlay per czytelność, opcjonalnie */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
</div>

          </div>
        </div>

        {/* BOX: Popularne skróty + Kontakt */}
        <section className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 md:col-span-2">
            <h2 className="text-lg font-semibold text-neutral-900">Popularne skróty</h2>
            <ul className="mt-3 grid gap-2 text-neutral-700 sm:grid-cols-2">
              <li>
                <Link href="/produkty/zaluzje" className="hover:underline">
                  Żaluzje — wszystkie systemy
                </Link>
              </li>
              <li>
                <Link href="/produkty/plisy" className="hover:underline">
                  Plisy
                </Link>
              </li>
              <li>
                <Link href="/produkty/rolety-materialowe" className="hover:underline">
                  Rolety materiałowe
                </Link>
              </li>
              <li>
                <Link href="/produkty/moskitiery" className="hover:underline">
                  Moskitiery
                </Link>
              </li>
              <li>
                <Link href="/produkty/rolety-zewnetrzne" className="hover:underline">
                  Rolety zewnętrzne
                </Link>
              </li>
              <li>
                <Link href="/produkty/markizy" className="hover:underline">
                  Markizy
                </Link>
              </li>
            </ul>
          </div>

          <aside className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
            <h3 className="text-lg font-semibold text-neutral-900">Potrzebujesz pomocy?</h3>
            <p className="mt-2 text-neutral-600">
              Zadzwoń lub napisz — znajdziemy właściwą stronę i doradzimy produkt.
            </p>

            <div className="mt-4 space-y-2">
              <a
                href="tel:+48598423534"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400 px-4 py-3 font-medium text-white transition hover:opacity-90"
              >
                <IconPhone size={18} /> +48 59 842 35 34
              </a>
              <a
                href="tel:+48603380709"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400 px-4 py-3 font-medium text-white transition hover:opacity-90"
              >
                <IconPhone size={18} /> +48 603 380 709
              </a>
              <a
                href="mailto:biuro@gamacolor.pl"
                className="flex items-center justify-center gap-2 rounded-xl border border-transparent bg-neutral-100 px-4 py-3 font-medium text-neutral-900 ring-1 ring-neutral-200 transition hover:bg-neutral-200"
              >
                <IconMail size={18} /> biuro@gamacolor.pl
              </a>
            </div>

            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:underline"
            >
              <IconArrowLeft size={16} />
              Wróć na stronę główną
            </Link>
          </aside>
        </section>
      </div>
    </main>
  );
}
