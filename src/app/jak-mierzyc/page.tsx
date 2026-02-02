// app/jak-mierzyc/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

/** ── SEO ───────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Jak mierzyć – instrukcje pomiaru | Gama Color Słupsk",
  description:
    "Instrukcje pomiaru dla żaluzji, plis i rolet. Proste schematy PDF do otwarcia lub pobrania.",
  alternates: { canonical: "/jak-mierzyc" },
};

/** ── Lista produktów (każdy z WŁASNYM linkiem – teraz identycznym) ─ */
const GUIDES = [
  {
    name: "Żaluzje pionowe",
    link: "https://tapparella.pl/wp-content/uploads/2020/11/TAPPA-Pomiar-V.pdf",
  },
  // {
  //   name: "Żaluzje poziome",
  //   link: "https://tapparella.pl/wp-content/uploads/2020/11/TAPPA-Pomiar-ZD-25.pdf",
  // },
  {
    name: "Żaluzje drewniane i bambusowe 25mm",
    link: "https://gama-color.pl/uploads/zaluzje-drewniane.pdf",
  },
  {
    name: "Żaluzje drewniane i bambusowe 50mm",
    link: "https://tapparella.pl/wp-content/uploads/2020/11/TAPPA-Pomiar-ZD-50.pdf",
  },
  // {
  //   name: "Żaluzje bambusowe 25mm",
  //   link: "https://tapparella.pl/wp-content/uploads/2020/11/TAPPA-Pomiar-ZD-25.pdf",
  // },
  // {
  //   name: "Żaluzje bambusowe 50mm",
  //   link: "https://tapparella.pl/wp-content/uploads/2020/11/TAPPA-Pomiar-ZD-50.pdf",
  // },
  {
    name: "Plisy",
    link: "https://tapparella.pl/wp-content/uploads/2021/10/TAPPA-Pomiar-PL-1-Montaz-standardowy-1.pdf",
  },
  {
    name: "Rolety Vegas Classic",
    link: "https://tapparella.pl/wp-content/uploads/2021/10/TAPPA-Pomiar-RM-RVClassic-DN.pdf",
  },
  {
    name: "Rolety Vegas Profil",
    link: "https://tapparella.pl/wp-content/uploads/2022/04/TAPPA-Pomiar-RM-RVProfil.pdf",
  },
  {
    name: "Rolety wolno-wiszące",
    link: "https://tapparella.pl/wp-content/uploads/2021/10/TAPPA-Pomiar-RM-Standard.pdf",
  },
  {
    name: "Rolety dzień i noc",
    link: "https://tapparella.pl/wp-content/uploads/2021/10/TAPPA-Pomiar-RM-RVClassic-DN.pdf",
  },
];

export default function Page() {
  return (
    <main className="relative md:px-0 px-2">
      {/* Brand stripes (prawa strona) */}
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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500">
          <Link href="/" className="hover:underline">
            Strona główna
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-700">Jak mierzyć</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <p className="text-sm font-medium text-neutral-500">Instrukcje</p>
          <h1 className="mt-2 text-3xl font-bold text-neutral-900 md:text-5xl">
            Jak prawidłowo wykonać pomiar?
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-600">
            Wybierz produkt i otwórz instrukcję pomiaru w nowej karcie lub
            pobierz plik PDF na komputer.
          </p>

          {/* Brand separator */}
          <div className="mt-6 flex gap-4">
            <span className="h-1 w-24 rounded-full bg-yellow-400" />
            <span className="h-1 w-24 rounded-full bg-red-500" />
            <span className="h-1 w-24 rounded-full bg-blue-400" />
          </div>
        </header>

        {/* Lista instrukcji */}
        <section className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
          <ul className="divide-y divide-neutral-200">
            {GUIDES.map((g, idx) => (
              <li
                key={g.name}
                className={[
                  "grid grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-3 sm:items-center sm:px-6",
                  idx % 2 === 1 ? "bg-neutral-50" : "bg-white",
                ].join(" ")}
              >
                <span className="font-semibold text-neutral-900">{g.name}</span>

                <span className="text-neutral-600">
                  Instrukcja pomiaru (PDF)
                </span>

                <div className="flex gap-3 sm:justify-end">
                  {/* OPEN */}
                  <a
                    href={g.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                  >
                    » zobacz jak wymierzyć
                  </a>

                  {/* DOWNLOAD */}
                  {/* <a
                    href={g.link}
                    download
                    className="inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
                  >
                    Pobierz grafikę
                  </a> */}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Nota */}
        <div className="mx-auto mt-12 max-w-xl rounded-xl border border-neutral-200 bg-white p-5 text-sm text-neutral-600 shadow-sm">
          <strong>Uwaga:</strong> bezpłatny pomiar dotyczy realizacji
          zakończonych zamówieniem. W przypadku rezygnacji może obowiązywać
          opłata za serwis.
        </div>
      </div>
    </main>
  );
}
