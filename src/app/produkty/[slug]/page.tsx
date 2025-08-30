// app/produkty/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import ProductHeader from "@/components/ProductHeader";
import ProductExplainer from "@/components/ProductExplainer";
import ProductGallery from "@/components/ProductGallery";
import stef from "../../../../public/images/stef.png";

// --- Tipi e dati -------------------------------------------------------------

type Product = {
  title: string;
  category: string;
  description: string;
  image: string;        // hero
  asideImage?: string;  // immagine che riempie l'aside (solo desktop)
  galleryImages?: string[];
};

const PRODUCTS: Record<string, Product> = {
  fotorolety: {
    title: "Fotorolety – rolety z nadrukiem",
    category: "Rolety",
    description:
      "Rolety z nadrukiem dowolnej grafiki lub zdjęcia. Personalizacja 1:1, produkcja na wymiar i montaż w Słupsku i okolicach.",
    image: "/images/fotorolety-hero.webp",
    asideImage: "/images/fotorolety/g5.webp",
    galleryImages: [
      "/images/fotorolety/g1.webp",
      "/images/fotorolety/g2.webp",
      "/images/fotorolety/g3.webp",
      "/images/fotorolety/g4.webp",
    ],
  },
  zaluzje: {
    title: "Żaluzje drewniane i aluminiowe",
    category: "Żaluzje",
    description:
      "Poziome i pionowe, drewniane, aluminiowe, bambusowe. Elegancja i precyzyjna regulacja światła.",
    image: "/images/zaluzje-og.jpg",
    asideImage: "/images/zaluzje-aside.jpg",
  },
  plisy: {
    title: "Plisy na wymiar",
    category: "Plisy",
    description:
      "Nowoczesne i funkcjonalne. Zasłoń dowolny fragment okna. Systemy Cosimo i Cosimo Smartline.",
    image: "/images/plisy-og.jpg",
    asideImage: "/images/plisy-aside.jpg",
  },
  "rolety-rzymskie-austriackie": {
    title: "Rolety rzymskie i austriackie",
    category: "Rolety",
    description:
      "Dekoracyjne rolety z tkaninami premium. Elegancki efekt fałd do salonu, sypialni i gabinetu.",
    image: "/images/rolety-rzymskie-og.jpg",
    asideImage: "/images/rolety-rzymskie-aside.jpg",
  },
  moskitiery: {
    title: "Moskitiery okienne i drzwiowe",
    category: "Moskitiery",
    description:
      "Ramkowe, rolowane, przesuwne. Skuteczna ochrona przed owadami przy pełnym dopływie świeżego powietrza.",
    image: "/images/moskitiery-og.jpg",
    asideImage: "/images/moskitiery-aside.jpg",
  },
  markizy: {
    title: "Markizy tarasowe i balkonowe",
    category: "Markizy",
    description:
      "Estetyczna osłona przed słońcem. Solidna aluminiowa konstrukcja i szeroka paleta tkanin.",
    image: "/images/markizy-og.jpg",
    asideImage: "/images/markizy-aside.jpg",
  },
  "rolety-zewnetrzne": {
    title: "Rolety zewnętrzne",
    category: "Rolety zewnętrzne",
    description:
      "Termoizolacja, akustyka, prywatność i bezpieczeństwo. Systemy dopasowane do nowoczesnej architektury.",
    image: "/images/rolety-zew-og.jpg",
    asideImage: "/images/rolety-zew-aside.jpg",
  },
};

export function generateStaticParams() {
  return Object.keys(PRODUCTS).map((slug) => ({ slug }));
}

// --- Pagina (Next 15: params è una Promise) ---------------------------------

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = PRODUCTS[slug];
  if (!data) notFound();

  return (
    <main className="relative">
      {/* Strisce fisse lato destro (desktop) */}
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

      {/* Container unico */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500">
          <Link href="/" className="hover:underline">Strona główna</Link>
          <span className="mx-2">/</span>
          <Link href="/produkty" className="hover:underline">Produkty</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-neutral-700">{data.title}</span>
        </nav>

        {/* Header mobile (fuori immagine) */}
        <div className="md:hidden">
          <ProductHeader
            category={data.category}
            title={data.title}
            description={data.description}
            variant="default"
          />
        </div>

        {/* Hero + overlay header (desktop) */}
        <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-neutral-100 ring-1 ring-neutral-200/60">
          <Image src={data.image} alt={data.title} fill className="object-cover" priority />
          <div className="absolute inset-0 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
            <div className="absolute top-8 left-8 right-8">
              <ProductHeader
                category={data.category}
                title={data.title}
                description={data.description}
                variant="overlay"
              />
            </div>
          </div>
        </div>

        {/* separatore brand */}
        <div className="mb-10 flex w-full">
          <div className="h-1 w-1/3 bg-yellow-400" />
          <div className="h-1 w-1/3 bg-red-500" />
          <div className="h-1 w-1/3 bg-blue-400" />
        </div>

        {/* Contenuti + aside */}
        <section className="grid gap-8 md:grid-cols-3">
          <ProductExplainer slug={slug} />

          <aside className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 md:flex md:h-full md:flex-col">
            <h3 className="text-lg font-semibold text-neutral-900">Umów pomiar*</h3>
            <p className="mt-2 text-neutral-600">
              Zadzwoń lub napisz — doradzimy i zaplanujemy montaż.
            </p>

            <div className="mt-4 space-y-2">
              <a href="tel:+48598423534" className="block rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400 px-4 py-3 text-center font-medium text-white transition hover:opacity-90">
                +48 59 842 35 34
              </a>
              <a href="tel:+48603380709" className="block rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400 px-4 py-3 text-center font-medium text-white transition hover:opacity-90">
                +48 603 380 709
              </a>
              <a href="mailto:biuro@gamacolor.pl" className="block rounded-xl border border-transparent bg-neutral-100 px-4 py-3 text-center font-medium text-neutral-900 ring-1 ring-neutral-200 transition hover:bg-neutral-200">
                biuro@gamacolor.pl
              </a>
            </div>

            <div className="mt-4 text-center text-sm text-neutral-500">
              ul. Morcinka 21, 76-200 Słupsk
            </div>

            <p className="mt-4 text-[10px] leading-relaxed text-neutral-400">
              * Pomiar na miejscu jest bezpłatny w przypadku złożenia zamówienia.
              Wizyta pomiarowa bez dalszego zamówienia może wiązać się z opłatą serwisową.
            </p>

            {data.asideImage && (
              <div className="mt-6 hidden md:block md:flex-1">
                <div className="relative h-full w-full overflow-hidden rounded-xl ring-1 ring-neutral-100">
                  <Image
                    src={data.asideImage}
                    alt={`${data.title} — realizacja`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 28vw, (min-width: 768px) 33vw, 100vw"
                  />
                </div>
              </div>
            )}
          </aside>
        </section>

        {/* Gallery esempi (solo se presente) */}
        <ProductGallery images={data.galleryImages ?? []} altBase={data.title} />

        {/* FAQ dedicato (esempio per fotorolety) */}
        {slug === "fotorolety" && (
          <section className="mt-12 px-2 sm:px-0">
            <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
              <div className="sm:col-span-2">
                <h2 className="mb-6 text-3xl font-bold text-neutral-900">
                  Najczęściej zadawane pytania
                </h2>

                <div className="space-y-4">
                  <details className="group border-b border-dotted border-gray-300 pb-4">
                    <summary className="flex w-full cursor-pointer list-none justify-between text-left">
                      <span className="text-xl font-medium text-black">Czy mogę użyć własnego zdjęcia?</span>
                      <svg className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-2 text-neutral-700">
                      Tak. Najlepiej dostarczyć oryginalny plik JPG/PNG w wysokiej jakości. Pamiętaj o prawach do obrazu.
                    </div>
                  </details>

                  <details className="group border-b border-dotted border-gray-300 pb-4">
                    <summary className="flex w-full cursor-pointer list-none justify-between text-left">
                      <span className="text-xl font-medium text-black">W jakich systemach dostępne są fotorolety?</span>
                      <svg className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-2 text-neutral-700">
                      Vegas Classic, Vegas Profil, rolety wolnowiszące i rolety na okna dachowe. Doradzimy dobór na pomiarze.
                    </div>
                  </details>

                  <details className="group border-b border-dotted border-gray-300 pb-4">
                    <summary className="flex w-full cursor-pointer list-none justify-between text-left">
                      <span className="text-xl font-medium text-black">Jaki jest czas realizacji?</span>
                      <svg className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-2 text-neutral-700">
                      Ustalamy indywidualnie po pomiarze i akceptacji projektu. Zadzwoń po orientacyjny termin.
                    </div>
                  </details>

                  <details className="group border-b border-dotted border-gray-300 pb-4">
                    <summary className="flex w-full cursor-pointer list-none justify-between text-left">
                      <span className="text-xl font-medium text-black">Jak dbać o nadruk?</span>
                      <svg className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-2 text-neutral-700">
                      Czyść delikatnie suchą lub lekko wilgotną ściereczką. Unikaj silnych detergentów i tarcia.
                    </div>
                  </details>
                </div>
              </div>

              {/* box kontakt a lato FAQ */}
              <aside
                className="h-fit rounded-xl p-6 text-center shadow-sm ring-1 ring-neutral-100"
                style={{ background: "linear-gradient(135deg, #fff8e1, #ffe5e0)" }}
              >
                <div className="flex justify-center">
                  <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full shadow-md">
                    <Image src={stef} alt="Zespół Gama Color" fill className="object-cover" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900">Masz inne pytania?</h3>

                <a href="mailto:biuro@gamacolor.pl" className="mt-2 block text-sm text-neutral-700">
                  <span className="font-semibold text-black">e-mail:</span> biuro@gamacolor.pl
                </a>

                <div className="mt-2 space-y-1 text-sm text-neutral-700">
                  <a href="tel:+48598423534" className="block hover:underline">
                    <span className="font-semibold text-yellow-400">tel:</span> +48 59 842 35 34
                  </a>
                  <a href="tel:+48598423534" className="block hover:underline">
                    <span className="font-semibold text-red-500">fax:</span> +48 59 842 35 34
                  </a>
                  <a href="tel:+48603380709" className="block hover:underline">
                    <span className="font-semibold text-blue-500">kom:</span> +48 603 380 709
                  </a>
                </div>
              </aside>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
