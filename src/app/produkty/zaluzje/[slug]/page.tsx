import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ZALUZJE } from "@/data/zaluzje";
import ProductHeader from "@/components/ProductHeader";
import ProductExplainer from "@/components/ProductExplainer";
import ProductGallery from "@/components/ProductGallery";
import ConfiguratorSlot from "@/components/ColorConfigurator/ConfiguratorSlot"; // ⬅️ wrapper client

// Slug statici
export function generateStaticParams() {
  return Object.keys(ZALUZJE).map((slug) => ({ slug }));
}

// Next 15: params è Promise
export default async function ZaluzjeVariantPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = ZALUZJE[slug];
  if (!data) notFound();

  return (
    <main className="relative">
      {/* strisce brand laterali */}
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

      {/* container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500">
          <Link href="/" className="hover:underline">Strona główna</Link>
          <span className="mx-2">/</span>
          <Link href="/produkty" className="hover:underline">Produkty</Link>
          <span className="mx-2">/</span>
          <Link href="/produkty/zaluzje" className="hover:underline">Żaluzje</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-neutral-700">{data.title}</span>
        </nav>

        {/* Header mobile */}
        <div className="md:hidden">
          <ProductHeader
            category={data.category}
            title={data.title}
            description={data.short}
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
                description={data.short}
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

        {/* contenuto + aside */}
        <section className="grid gap-8 md:grid-cols-3">
          <ProductExplainer slug={slug} />

          <aside className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 md:flex md:h-full md:flex-col">
            <h3 className="text-lg font-semibold text-neutral-900">Umów pomiar*</h3>
            <p className="mt-2 text-neutral-600">Zadzwoń lub napisz — doradzimy i zaplanujemy montaż.</p>

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

        {/* ⬇️ Configurator specifico per slug */}
      <div className="md:col-span-3">
        <ConfiguratorSlot slug={slug} />
      </div>

        {/* gallery */}
        <ProductGallery images={data.galleryImages ?? []} altBase={data.title} />
      </div>
    </main>
  );
}
