// app/o-nas/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconCalendar,
  IconHeartHandshake,
  IconShieldCheck,
  IconAward,
  IconTools,
  IconBuildingStore,
} from "@tabler/icons-react";

// SEO
export const metadata = {
  title: "O nas — GAMA COLOR | Żaluzje, rolety, plisy w Słupsku od 1994 r.",
  description:
    "GAMA COLOR — lokalny producent osłon okiennych w Słupsku. Od 1994 roku projektujemy i montujemy żaluzje, rolety, plisy, moskitiery, markizy i rolety zewnętrzne. Pomiar na miejscu, doradztwo i solidny serwis.",
};

export default function AboutPage() {
  return (
    <main className="relative">
      {/* ==== STRISCE BRAND LATERALI ==== */}
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

      {/* ==== CONTAINER ==== */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500">
          <Link href="/" className="hover:underline">Strona główna</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-neutral-700">O nas</span>
        </nav>

        {/* HERO con overlay */}
        <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-neutral-100 ring-1 ring-neutral-200/60">
          <Image
            src="/images/about/hero.jpg"
            alt="GAMA COLOR — montaż osłon okiennych"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
            <div className="absolute top-8 left-8 right-8 text-white">
              <p className="text-sm font-medium text-white/80">O nas</p>
              <h1 className="mt-2 text-3xl font-bold md:text-5xl">
                GAMA COLOR — Słupsk, od 1994 roku
              </h1>
              <p className="mt-4 max-w-3xl text-white/90">
                Zaczynaliśmy w małym lokalu przy ul. Wolności. Dziś projektujemy i
                montujemy kompletne systemy osłon okiennych dla domów, mieszkań i firm —
                z pomiarem na miejscu, doborem tkanin i pewnym serwisem po montażu.
              </p>
            </div>
          </div>
        </div>

        {/* header mobile */}
        <div className="md:hidden">
          <h1 className="text-3xl font-bold text-neutral-900">GAMA COLOR — Słupsk, od 1994 roku</h1>
          <p className="mt-3 text-neutral-600">
            Zaczynaliśmy w małym lokalu przy ul. Wolności. Dziś realizujemy kompletne systemy
            osłon okiennych z pomiarem, doradztwem i serwisem.
          </p>
        </div>

        {/* separatore brand */}
        <div className="mb-10 mt-6 flex w-full">
          <div className="h-1 w-1/3 bg-yellow-400" />
          <div className="h-1 w-1/3 bg-red-500" />
          <div className="h-1 w-1/3 bg-blue-400" />
        </div>

        {/* INTRO + CTA */}
        <section className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-neutral-900">Kim jesteśmy</h2>

            <p className="mt-3 text-neutral-700">
              Słupsk to nasze miejsce, a okna — nasza specjalność.{" "}
              <strong>Zakład Wyrobu Żaluzji GAMA COLOR</strong> działa tu nieprzerwanie od 1994 roku.
              Na starcie wytwarzaliśmy wyłącznie żaluzje poziome, ucząc się rzemiosła i słuchając
              potrzeb Klientów. Pół roku później przenieśliśmy się z <em>ul. Wolności 3</em> do
              większego lokalu przy <em>ul. Wolności 11</em>, a oferta szybko rozszerzyła się o{" "}
              <strong>rolety wolnowiszące</strong> i <strong>rolety zewnętrzne</strong>.
            </p>

            <p className="mt-3 text-neutral-700">
              Z biegiem lat marka była coraz częściej polecana. W{" "}
              <strong>2002 roku</strong> przenieśliśmy siedzibę pod obecny adres:
              <strong> ul. Morcinka 21</strong>. To tutaj rozbudowaliśmy park maszynowy i
              dopracowaliśmy proces montażu. Dzisiaj oferujemy pełne portfolio — żaluzje,
              <strong> rolety materiałowe (także dzień/noc)</strong>, <strong>plisy</strong>,{" "}
              <strong>moskitiery</strong>, <strong>markizy</strong> i <strong>rolety zewnętrzne</strong>.
              Działamy lokalnie: <strong>Słupsk i okolice</strong>. Przyjeżdżamy na pomiar,
              przywozimy próbki, doradzamy rozwiązania dopasowane do ekspozycji okna i stylu wnętrza.
            </p>

            {/* Punti di forza */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Feature
                Icon={IconShieldCheck}
                title="Pewna jakość"
                text="Sprawdzone systemy i komponenty, czysty i solidny montaż, gwarancja i serwis."
              />
              <Feature
                Icon={IconHeartHandshake}
                title="Lokalne doradztwo"
                text="Pomiar na miejscu, dobór tkanin i kolorów do stolarki i wnętrza."
              />
              <Feature
                Icon={IconTools}
                title="Na wymiar"
                text="Produkcja pod Twoje okna — od pojedynczego skrzydła po cały dom lub biuro."
              />
              <Feature
                Icon={IconAward}
                title="Doświadczenie"
                text="Ponad 30 lat w branży — wiedza, która procentuje w każdym detalu."
              />
            </div>
          </div>

          {/* Aside contatti */}
          <aside className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 md:flex md:h-full md:flex-col">
            <h3 className="text-lg font-semibold text-neutral-900">Skontaktuj się z nami</h3>
            <p className="mt-2 text-neutral-600">
              Chcesz wycenę, pomiar lub współpracę B2B? Jesteśmy do dyspozycji.
            </p>

            <div className="mt-4 space-y-2">
              <a
                href="tel:+48598423534"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400 px-4 py-3 text-center font-medium text-white transition hover:opacity-90"
              >
                <IconPhone size={18} /> +48 59 842 35 34
              </a>
              <a
                href="tel:+48603380709"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400 px-4 py-3 text-center font-medium text-white transition hover:opacity-90"
              >
                <IconPhone size={18} /> +48 603 380 709
              </a>
              <a
                href="mailto:biuro@gamacolor.pl"
                className="flex items-center justify-center gap-2 rounded-xl border border-transparent bg-neutral-100 px-4 py-3 text-center font-medium text-neutral-900 ring-1 ring-neutral-200 transition hover:bg-neutral-200"
              >
                <IconMail size={18} /> biuro@gamacolor.pl
              </a>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-neutral-600">
              <IconMapPin size={18} />
              ul. Morcinka 21, 76-200 Słupsk
            </div>

            <div className="mt-6 rounded-xl bg-neutral-50 p-4 text-sm text-neutral-700 ring-1 ring-neutral-100">
              <div className="flex items-center gap-2 font-medium">
                <IconBuildingStore size={18} /> Współpraca z architektami i firmami
              </div>
              <p className="mt-1 text-neutral-600">
                Próbki tkanin i systemów, wsparcie techniczne i terminowe realizacje.
              </p>
            </div>

            <p className="mt-4 text-[10px] leading-relaxed text-neutral-400">
              * Pomiar na miejscu jest bezpłatny w przypadku złożenia zamówienia.
              Wizyta pomiarowa bez dalszego zamówienia może wiązać się z opłatą serwisową.
            </p>

            <div className="mt-6 hidden md:block md:flex-1">
              <div className="relative h-full w-full overflow-hidden rounded-xl ring-1 ring-neutral-100">
                <Image
                  src="/images/about/aside.jpg"
                  alt="GAMA COLOR — realizacja"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 33vw, 100vw"
                />
              </div>
            </div>
          </aside>
        </section>

        {/* Timeline / Historia — FIX senza sovrapposizioni */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-neutral-900">Nasza historia</h2>

          {/* wrapper con linea verticale unica */}
          <ol className="relative mt-6 space-y-8">
            {/* linea verticale */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-[10px] top-0 h-full w-px bg-neutral-200"
            />

            {/* 1994 — start */}
            <li className="grid grid-cols-[20px_1fr] items-start gap-4">
              <span className="mt-1 h-4 w-4 rounded-full z-2 bg-yellow-400 ring-4 ring-yellow-100" />
              <div>
                <p className="text-sm font-medium text-neutral-500 flex items-center gap-2">
                  <IconCalendar size={16} /> 1994
                </p>
                <p className="mt-1 font-medium text-neutral-900">Start przy ul. Wolności 3</p>
                <p className="text-neutral-700">
                  Pierwsza siedziba i pierwsze zamówienia — produkcja żaluzji poziomych.
                </p>
              </div>
            </li>

            {/* 1994 — przenosiny po 6 mies. */}
            <li className="grid grid-cols-[20px_1fr] items-start gap-4">
              <span className="mt-1 h-4 w-4 rounded-full z-2 bg-red-500 ring-4 ring-red-100" />
              <div>
                <p className="text-sm font-medium text-neutral-500">Po 6 miesiącach</p>
                <p className="mt-1 font-medium text-neutral-900">Przeprowadzka na ul. Wolności 11</p>
                <p className="text-neutral-700">
                  Większa przestrzeń, nowe możliwości produkcji i obsługi Klientów.
                </p>
              </div>
            </li>

            {/* 2002 — Morcinka 21 */}
            <li className="grid grid-cols-[20px_1fr] items-start gap-4">
              <span className="mt-1 h-4 w-4 rounded-full z-2 bg-blue-400 ring-4 ring-blue-100" />
              <div>
                <p className="text-sm font-medium text-neutral-500">2002</p>
                <p className="mt-1 font-medium text-neutral-900">Nowa siedziba: ul. Morcinka 21</p>
                <p className="text-neutral-700">
                  Rozbudowa parku maszynowego i standaryzacja montażu. Umacniamy pozycję lokalnego producenta.
                </p>
              </div>
            </li>

            {/* Dziś — kompleksowa oferta */}
            <li className="grid grid-cols-[20px_1fr] items-start gap-4">
              <span className="mt-1 h-4 w-4 rounded-full bg-gradient-to-b from-yellow-400 via-red-400 to-blue-400 ring-4 ring-neutral-100 z-2" />
              <div>
                <p className="text-sm font-medium text-neutral-500">Dziś</p>
                <p className="mt-1 font-medium text-neutral-900">Kompleksowe systemy osłon</p>
                <p className="text-neutral-700">
                  Żaluzje, rolety materiałowe (w tym dzień/noc), plisy, moskitiery, markizy i rolety zewnętrzne.
                  Pomiar, doradztwo i montaż na miejscu, a po realizacji — pewny serwis.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Zakres i jakość */}
        <section className="mt-12 grid gap-8 md:grid-cols-3">
          <Stat color="bg-yellow-400" title="30+ lat" text="ciągłości działania w Słupsku" />
          <Stat color="bg-red-500" title="Setki tkanin" text="i konfiguracji systemów" />
          <Stat color="bg-blue-400" title="Lokalny serwis" text="pomiar, montaż i wsparcie" />
        </section>

        {/* CTA finale */}
        <section className="mt-12 overflow-hidden rounded-2xl bg-neutral-900 px-6 py-10 text-white ring-1 ring-neutral-800">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Porozmawiajmy o Twoich oknach</h2>
              <p className="mt-3 text-white/80">
                Doradzimy tkaniny, kolory i rodzaj montażu. Umów bezpłatny pomiar* lub
                zapytaj o współpracę przy inwestycji.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+48598423534"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400 px-5 py-3 font-medium text-white transition hover:opacity-90"
                >
                  <IconPhone size={18} /> Zadzwoń: 59 842 35 34
                </a>
                <a
                  href="mailto:biuro@gamacolor.pl"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-medium ring-1 ring-white/20 transition hover:bg-white/15"
                >
                  <IconMail size={18} /> biuro@gamacolor.pl
                </a>
              </div>

              <p className="mt-3 text-xs text-white/60">
                * Pomiar bezpłatny przy złożeniu zamówienia. W innym przypadku może obowiązywać opłata serwisowa.
              </p>
            </div>

            <div className="relative h-56 w-full overflow-hidden rounded-xl md:h-72">
              <Image
                src="/images/about/cta.jpg"
                alt="Pomiar i montaż — GAMA COLOR"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ====== componenti interni ====== */
function Feature({
  Icon,
  title,
  text,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl bg-white p-4 ring-1 ring-neutral-100">
      <div className="mt-1 shrink-0 rounded-lg bg-neutral-900/90 p-2 text-white">
        <Icon size={18} />
      </div>
      <div>
        <p className="font-semibold text-neutral-900">{title}</p>
        <p className="text-neutral-600">{text}</p>
      </div>
    </div>
  );
}

function Stat({ color, title, text }: { color: string; title: string; text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-neutral-100">
      <div className={`h-10 w-1 rounded-full ${color}`} aria-hidden />
      <div>
        <p className="text-2xl font-extrabold text-neutral-900">{title}</p>
        <p className="text-neutral-600">{text}</p>
      </div>
    </div>
  );
}
