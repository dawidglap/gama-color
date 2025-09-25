// app/produkty/plisy/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// SEO
export const metadata: Metadata = {
  title: "Plisy – żaluzje plisowane na wymiar | Gama Color Słupsk",
  description:
    "Plisy COSIMO, COSIMO SMARTLINE i ULTIMA – na wymiar, także do okien dachowych i o nietypowych kształtach. Pomiar i montaż: Słupsk, Ustka, Kobylnica, Siemianice, Redzikowo.",
};

type Item = {
  slug: string;
  title: string;
  category: string;
  description: string;
  href: string;
  image: string;
  highlights?: string[];
};

const ITEMS: Item[] = [
  {
    slug: "cosimo",
    title: "Plisy COSIMO – góra/dół",
    category: "Plisy",
    description:
      "Uniwersalny system do okien standardowych. Precyzyjne zasłanianie wybranego fragmentu szyby i duży wybór tkanin. Idealne do mieszkań i domów w Słupsku, Ustce i Kobylnicy.",
    href: "/produkty/plisy/cosimo",
    image: "/images/plisy/g16.webp",
    highlights: [
      "Sterowanie góra–dół",
      "Setki tkanin i kolorów",
      "Estetyczny profil",
    ],
  },
  {
    slug: "cosimo-smartline",
    title: "Plisy COSIMO SMARTLINE – do okien dachowych",
    category: "Plisy",
    description:
      "Nowoczesny system w prowadnicach, stworzony do okien dachowych. Kolory profili: biały, srebrny, sosna. Sprawdza się w Słupsku, Redzikowie i Siemianicach.",
    href: "/produkty/plisy/cosimo-smartline",
    image: "/images/plisy/g9.webp",
    highlights: [
      "Prowadnice boczne",
      "Dachowe i uchylne",
      "Profile: biały/srebrny/sosna",
    ],
  },
  {
    slug: "ultima",
    title: "Plisy ULTIMA – do kształtów nietypowych",
    category: "Plisy",
    description:
      "Rozwiązanie do okien o kształtach trójkątnych, trapezowych, półokrągłych i okrągłych. Równie dobrze działa w standardowych ramach – Słupsk, Rowy, Ustka i okolice.",
    href: "/produkty/plisy/ultima",
    image: "/images/plisy/g13.webp",
    highlights: [
      "Trójkąty, trapezy, łuki",
      "Precyzyjne dopasowanie",
      "Montaż na wymiar",
    ],
  },
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
          <Link href="/" className="hover:underline">
            Strona główna
          </Link>
          <span className="mx-2">/</span>
          <Link href="/produkty" className="hover:underline">
            Produkty
          </Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-neutral-700">
            Plisy
          </span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <p className="text-sm font-medium text-neutral-500">Oferta</p>
          <h1 className="mt-2 text-3xl font-bold text-neutral-900 md:text-5xl">
            Plisy na wymiar
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-600">
            Plisy to wszechstronne osłony, które dopasujemy do niemal każdego
            okna – również dachowego i o nietypowym kształcie. Zapewniają
            kontrolę światła i prywatności dokładnie tam, gdzie tego potrzebujesz.
            Realizujemy pomiar i montaż w Słupsku, Ustce, Kobylnicy, Siemianicach,
            Redzikowie i okolicznych miejscowościach.
          </p>

          {/* brand separator */}
          <div className="mt-6 flex w-full gap-4">
            <span className="h-1 w-24 rounded-full bg-yellow-400" />
            <span className="h-1 w-24 rounded-full bg-red-500" />
            <span className="h-1 w-24 rounded-full bg-blue-400" />
          </div>
        </header>

        {/* Pannelli */}
        <div className="space-y-8">
          {ITEMS.map((item, idx) => (
            <section
              key={item.slug}
              className="bg-[#F4F4F4] overflow-hidden rounded-lg shadow-md ring-1 ring-neutral-100"
            >
              <div className="grid items-stretch gap-0 md:grid-cols-2">
                {/* Colonna testo */}
                <div className="p-6 md:p-8">
                  <div className="mb-3 inline-flex items-center gap-2">
                    <span className="rounded-md bg-gradient-to-br from-neutral-900 via-neutral-700 to-blue-400 px-3 py-1 text-xs font-medium text-neutral-100">
                      {item.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-neutral-700">{item.description}</p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-neutral-700"
                        >
                          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-yellow-400" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    {/* Primary: kontakt */}
                    <a
                      href="tel:+48598423534"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 active:bg-neutral-900 sm:w-auto"
                      aria-describedby="pomiar-footnote"
                    >
                      Skontaktuj się z doradcą
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.63 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.15a2 2 0 0 1 2.11-.45c.8.3 1.64.51 2.5.63A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </a>

                    {/* Secondary: szczegóły */}
                    <Link
                      href={item.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 active:bg-neutral-100 sm:w-auto"
                    >
                      Zobacz szczegóły
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Colonna immagine */}
                <div className="relative min-h-[240px] md:min-h-[360px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 50vw, 100vw"
                    priority={idx < 2}
                  />
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-xl border border-neutral-200 bg-white p-5 text-sm text-neutral-600 shadow-sm">
          <p>
            Nie wiesz, który system plis wybrać? Zadzwoń – doradzimy i umówimy{" "}
            <strong>bezpłatny pomiar</strong> w Słupsku, Ustce, Kobylnicy,
            Siemianicach, Redzikowie i pobliskich miejscowościach.
          </p>
        </div>

        <div className="h-8" />
      </div>
    </main>
  );
}
