// app/produkty/moskitiery/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MOSKITIERY } from "@/data/moskitiery";

type Slug = keyof typeof MOSKITIERY;

export default function MoskitieraDetailPage({ params }: { params: { slug: Slug } }) {
  const data = MOSKITIERY[params.slug as Slug];
  if (!data) return notFound();

  return (
    <main className="relative">
      {/* Strisce laterali */}
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500">
          <Link href="/" className="hover:underline">Strona główna</Link>
          <span className="mx-2">/</span>
          <Link href="/produkty" className="hover:underline">Produkty</Link>
          <span className="mx-2">/</span>
          <Link href="/produkty/moskitiery" className="hover:underline">Moskitiery</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-neutral-700">{data.title}</span>
        </nav>

        {/* hero */}
        <header className="mb-8 grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-neutral-500">{data.category}</p>
            <h1 className="mt-2 text-3xl font-bold text-neutral-900 md:text-5xl">
              {data.title} — na wymiar
            </h1>
            <p className="mt-4 text-neutral-600">{data.short}</p>

            {/* selling points rapidi */}
            {data.notes?.length ? (
              <ul className="mt-6 grid gap-2 text-sm text-neutral-700">
                {data.notes.map((n, i) => <li key={i}>• {n}</li>)}
              </ul>
            ) : null}

            {/* CTA */}
            <div className="mt-6 flex gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center rounded-xl bg-neutral-900 px-4 py-2 text-white shadow-sm ring-1 ring-neutral-900/10 transition hover:bg-neutral-800"
              >
                Darmowa wycena
              </Link>
              <Link
                href="/realizacje"
                className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-neutral-900 ring-1 ring-neutral-300 transition hover:bg-neutral-50"
              >
                Zobacz realizacje
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </header>

        {/* separatore brand */}
        <div className="mb-10 flex w-full">
          <div className="h-1 w-1/3 bg-yellow-400" />
          <div className="h-1 w-1/3 bg-red-500" />
          <div className="h-1 w-1/3 bg-blue-400" />
        </div>

        {/* corpo descrizione + aside */}
        <section className="grid gap-8 md:grid-cols-3">
          <article className="md:col-span-2">
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900">Dlaczego warto</h2>
            <p className="text-neutral-700">{data.description}</p>

            {/* galleria */}
            {data.galleryImages?.length ? (
              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                {data.galleryImages.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-neutral-200">
                    <Image src={src} alt={`${data.title} ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            ) : null}
          </article>

          <aside className="md:col-span-1">
            {data.asideImage && (
              <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-neutral-200">
                <Image src={data.asideImage} alt={`${data.title} — detal`} fill className="object-cover" />
              </div>
            )}
            <div className="rounded-2xl bg-neutral-50 p-5 ring-1 ring-neutral-200">
              <h3 className="mb-2 font-semibold text-neutral-900">Pomiar i montaż</h3>
              <ul className="space-y-1 text-sm text-neutral-700">
                <li>• Doradztwo i pomiar u klienta</li>
                <li>• Produkcja na wymiar, kolory do stolarki</li>
                <li>• Montaż i regulacja na miejscu</li>
                <li>• Serwis i części zamienne</li>
              </ul>
              <Link
                href="/kontakt"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-white ring-1 ring-neutral-900/10 transition hover:bg-neutral-800"
              >
                Umów pomiar
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
