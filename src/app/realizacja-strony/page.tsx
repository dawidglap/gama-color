import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realizacja strony internetowej – Gama Color | Webfast Studio",
  description:
    "Realizacja strony Gama Color w Słupsku: UX, wydajność i podstawy SEO. Strony internetowe w praktyce – case study i link do wykonawcy.",
  alternates: {
    canonical: "https://gama-color.com.pl/realizacja-strony",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RealizacjaStronyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Realizacja strony internetowej – Gama Color",
    url: "https://gama-color.com.pl/realizacja-strony",
    description:
      "Case study realizacji strony Gama Color w Słupsku: zakres prac UX, performance i podstawy SEO.",
    isPartOf: {
      "@type": "WebSite",
      name: "Gama Color",
      url: "https://gama-color.com.pl",
    },
    about: {
      "@type": "Organization",
      name: "Gama Color",
    },
    publisher: {
      "@type": "Organization",
      name: "Gama Color",
    },
    provider: {
      "@type": "Organization",
      name: "Webfast Studio",
      url: "https://webfast.com.pl",
    },
  };

  return (
    <main className="relative">
      <div className="mx-auto max-w-4xl px-4 py-12 text-neutral-800">
        <p className="text-sm font-medium text-neutral-500">Case study</p>
        <h1 className="mt-2 text-3xl font-bold text-neutral-900 md:text-5xl">
          Realizacja strony internetowej – Gama Color
        </h1>
        <p className="mt-5 text-base leading-7 text-neutral-700">
          Ta podstrona opisuje realizację nowej witryny Gama Color – lokalnej firmy
          z Słupska specjalizującej się w osłonach okiennych. Celem było stworzenie
          strony, która w klarowny sposób prezentuje ofertę, wspiera kontakt z
          klientem oraz jest technicznie przygotowana pod SEO. To krótki, lecz
          konkretny opis prac wykonanych we współpracy z zespołem{" "}
          <a
            href="https://webfast.com.pl"
            className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:text-black"
          >
            Webfast Studio (tworzenie stron internetowych w Słupsku)
          </a>
          .
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">Cel projektu</h2>
          <p className="leading-7 text-neutral-700">
            Głównym celem było uporządkowanie informacji o produktach i usługach,
            tak aby klient w kilka sekund rozumiał, czym zajmuje się Gama Color.
            Istotne było też podkreślenie lokalności marki, wyeksponowanie
            przewag (pomiar, doradztwo, montaż) oraz zachęcenie do kontaktu.
            Strona miała wyglądać nowocześnie, ale bez przesadnych efektów,
            które utrudniają odbiór na urządzeniach mobilnych.
          </p>
          <p className="leading-7 text-neutral-700">
            Dodatkowym wymaganiem było szybkie ładowanie i czytelna struktura
            treści – z myślą o użytkownikach mobilnych oraz o widoczności w Google.
            Zadbaliśmy o to, aby każdy segment oferty miał swoją logiczną ścieżkę
            nawigacji oraz spójną warstwę wizualną.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">Zakres prac</h2>
          <p className="leading-7 text-neutral-700">
            Zakres obejmował zarówno aspekty UX, jak i techniczne fundamenty SEO.
            W praktyce oznaczało to między innymi:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-neutral-700">
            <li>uproszczenie architektury informacji i przejrzyste kategorie produktów,</li>
            <li>czytelne sekcje ofertowe z dopasowanymi CTA,</li>
            <li>optymalizację wydajności i statyczne generowanie kluczowych podstron,</li>
            <li>podstawowe SEO on-page: nagłówki, opisy, linkowanie wewnętrzne,</li>
            <li>spójny styl wizualny oparty o typografię i kontrast.</li>
          </ul>
          <p className="leading-7 text-neutral-700">
            Dzięki temu użytkownik szybciej znajduje potrzebne informacje, a
            wyszukiwarka lepiej rozumie strukturę serwisu i tematykę oferty.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">Efekty</h2>
          <p className="leading-7 text-neutral-700">
            W efekcie powstała lekka i szybka strona, która dobrze prezentuje ofertę
            Gama Color. Użytkownicy widzą najważniejsze informacje od razu po wejściu,
            a następnie mogą przejść do szczegółów produktów bez zbędnego klikania.
            Strona jest responsywna, czytelna i gotowa do dalszego rozwoju treści.
          </p>
          <p className="leading-7 text-neutral-700">
            Z perspektywy SEO strona otrzymała solidne fundamenty: jasną strukturę,
            logiczne adresy URL oraz poprawne metadane. To dobra baza pod dalsze
            działania marketingowe i budowanie widoczności w lokalnych wynikach
            wyszukiwania.
          </p>
        </section>

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <p className="text-neutral-700">
            Szukasz wykonawcy strony w Słupsku?{" "}
            <a
              href="https://webfast.com.pl"
              className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:text-black"
            >
              Zobacz Webfast Studio
            </a>
            .
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
