// app/produkty/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// SEO base
export const metadata: Metadata = {
  title: "Produkty – osłony okienne na wymiar | Gama Color Słupsk",
  description:
    "Rolety materiałowe, fotorolety, żaluzje, plisy, rolety rzymskie, moskitiery, markizy i rolety zewnętrzne. Pomiar i montaż w Słupsku i okolicach.",
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

// NOTE: usa immagini esistenti in /public/images/...
const ITEMS: Item[] = [
  {
    slug: "fotorolety",
    title: "Fotorolety – rolety z nadrukiem",
    category: "Rolety",
    description:
      "Personalizowane rolety z nadrukiem Twojego zdjęcia lub grafiki. Na wymiar z montażem w Słupsku i okolicach.",
    href: "/produkty/fotorolety",
    image: "/images/fotorolety-hero.webp",
    highlights: ["Personalizacja 1:1", "Na wymiar", "Do domu i firm"],
  },
  {
    slug: "rolety-materialowe",
    title: "Rolety materiałowe",
    category: "Rolety",
    description:
      "Rolety wolnowiszące, kasetowe i dzień–noc. Szeroki wybór tkanin, pomiar i montaż w Słupsku i na Pomorzu.",
    href: "/produkty/rolety-materialowe",
    image: "/images/roleta.webp",
    highlights: ["Prowadnice/kasety", "Setki tkanin", "Pomiar i montaż"],
  },
  {
    slug: "zaluzje",
    title: "Żaluzje drewniane i aluminiowe",
    category: "Żaluzje",
    description:
      "Drewno, bambus lub aluminium. Dokładna regulacja światła, montaż na wymiar (Słupsk + okolice).",
    href: "/produkty/zaluzje",
    image: "/images/zaluzje.webp",
    highlights: ["Drewno/bambus/alu", "Regulacja światła", "Na wymiar"],
  },
  {
    slug: "plisy",
    title: "Plisy na wymiar",
    category: "Plisy",
    description:
      "Nowoczesne plisy do każdego kształtu okna. Zasłonisz dowolny fragment szyby – montaż lokalny.",
    href: "/produkty/plisy",
    image: "/images/plisy.webp",
    highlights: ["Sterowanie góra/dół", "Cosimo / Smartline", "Wiele tkanin"],
  },
  {
    slug: "rolety-rzymskie-austriackie",
    title: "Rolety rzymskie i austriackie",
    category: "Rolety",
    description:
      "Eleganckie tkaniny i efektowne fałdy do salonu i sypialni. Szycie na miarę, montaż w Słupsku i okolicach.",
    href: "/produkty/rolety-rzymskie-austriackie",
    image: "/images/rzymskie.webp",
    highlights: ["Tkaniny premium", "Szycie na miarę", "Estetyczne wykończenie"],
  },
  {
    slug: "moskitiery",
    title: "Moskitiery okienne i drzwiowe",
    category: "Moskitiery",
    description:
      "Ramkowe, rolowane i przesuwne – skuteczna ochrona przed owadami. Na wymiar z montażem w Słupsku i okolicach.",
    href: "/produkty/moskitiery",
    image: "/images/moskitiery.webp",
    highlights: ["Ramkowe/rolo/przesuwne", "Na wymiar", "Wytrzymała siatka"],
  },
  {
    slug: "markizy",
    title: "Markizy tarasowe i balkonowe",
    category: "Markizy",
    description:
      "Konstrukcja aluminiowa i tkaniny odporne na UV. Pomiar i montaż w Słupsku oraz w regionie Pomorza.",
    href: "/produkty/markizy",
    image: "/images/markizy.webp",
    highlights: ["Konstrukcja alu", "Tkaniny UV", "Do tarasu/balkonu"],
  },
  {
    slug: "rolety-zewnetrzne",
    title: "Rolety zewnętrzne",
    category: "Rolety zewnętrzne",
    description:
      "Komfort termiczny i akustyczny, prywatność i bezpieczeństwo. Systemy podtynkowe i elewacyjne, montaż lokalny.",
    href: "/produkty/rolety-zewnetrzne",
    image: "/images/zew.webp",
    highlights: ["Izolacja i cisza", "Prywatność", "Bezpieczeństwo"],
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
          <span aria-current="page" className="text-neutral-700">
            Produkty
          </span>
        </nav>

        {/* Header principale */}
        <header className="mb-8">
          <p className="text-sm font-medium text-neutral-500">Oferta</p>
          <h1 className="mt-2 text-3xl font-bold text-neutral-900 md:text-5xl">
            Nasze produkty
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-600">
            Osłony okienne na wymiar z profesjonalnym doradztwem, pomiarem i
            montażem w Słupsku i okolicach. Wybierz rozwiązanie dopasowane do
            Twojego wnętrza i potrzeb.
          </p>

          {/* brand separator */}
          <div className="mt-6 flex w-full gap-4">
            <span className="h-1 w-24 rounded-full bg-yellow-400" />
            <span className="h-1 w-24 rounded-full bg-red-500" />
            <span className="h-1 w-24 rounded-full bg-blue-400" />
          </div>
        </header>

        {/* Pannelli “single column” stile Tesla */}
        <div className="space-y-8">
          {ITEMS.map((item, idx) => {
            const imageFirstOnDesktop = idx % 2 === 1; // alterna come “tesla”
            return (
              <section
                key={item.slug}
                className="bg-[#F4F4F4] overflow-hidden rounded-lg  shadow-md ring-1 ring-neutral-100"
              >
                <div
                  className={[
                    "grid items-stretch gap-0 md:grid-cols-2",
                    imageFirstOnDesktop ? "" : "",
                  ].join(" ")}
                >
                    {/* md:[&>*:first-child]:order-2 */}
                  {/* Colonna testo */}
                  <div className="p-6 md:p-8">
                    <div className="mb-3 inline-flex items-center gap-2">
                      <span className="rounded-md bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
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
                          <li key={h} className="flex items-start gap-2 text-sm text-neutral-700">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-yellow-400" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                   <div className="mt-6 flex flex-col gap-3 sm:flex-row">
  {/* Primary: kontakt (più evidente) */}
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

  {/* Secondary: szczegóły (meno evidente) */}
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
            );
          })}
        </div>

         <div className="mx-auto mt-12 max-w-xl rounded-xl border border-neutral-200 bg-white p-5 text-sm text-neutral-600 shadow-sm">
            <p>
              Nie widzisz produktu, którego szukasz? Zadzwoń do nas – doradzimy najlepsze rozwiązanie i umówimy <strong>bezpłatny pomiar</strong>.
            </p>
          </div>
        <div className="h-8" />
      </div>
    </main>
  );
}
