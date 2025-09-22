// app/produkty/moskitiery/page.tsx
import Link from "next/link";
import Image from "next/image";
import { MOSKITIERY_LIST } from "@/data/moskitiery";

export default function MoskitieryIndexPage() {
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
          <span aria-current="page" className="text-neutral-700">Moskitiery</span>
        </nav>

        {/* header SEO */}
        <header className="mb-8">
          <p className="text-sm font-medium text-neutral-500">Moskitiery</p>
          <h1 className="mt-2 text-3xl font-bold text-neutral-900 md:text-5xl">
            Moskitiery — świeże powietrze bez owadów
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-600">
            Okienne, drzwiowe, rolowane i przesuwne. Dobierzemy system do rodzaju okna/drzwi
            i częstotliwości użytkowania, a kolorystykę dopasujemy do stolarki. Pomiar i montaż
            w Słupsku i okolicy.
          </p>
        </header>

        {/* separatore brand */}
        <div className="mb-10 flex w-full">
          <div className="h-1 w-1/3 bg-yellow-400" />
          <div className="h-1 w-1/3 bg-red-500" />
          <div className="h-1 w-1/3 bg-blue-400" />
        </div>

        {/* griglia varianti (4) */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MOSKITIERY_LIST.map((v) => (
            <Link
              key={v.slug}
              href={`/produkty/moskitiery/${v.slug}`}
              className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm transition hover:shadow-md focus-visible:outline-none"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="line-clamp-2 text-lg font-semibold text-white drop-shadow">
                    {v.title}
                  </h3>
                </div>
              </div>

              <div className="p-4">
                <p className="line-clamp-3 text-sm text-neutral-600">{v.short}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                  <span className="text-neutral-800">Zobacz szczegóły</span>
                  <span aria-hidden>→</span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
