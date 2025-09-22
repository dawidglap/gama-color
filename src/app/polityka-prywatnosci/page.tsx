// app/polityka-prywatnosci/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Polityka prywatności — GAMA COLOR",
  description:
    "Jak GAMA COLOR przetwarza dane osobowe: cele, podstawy prawne, okresy przechowywania, odbiorcy danych, prawa użytkownika i cookies.",
};

export default function PrivacyPage() {
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
          <span aria-current="page" className="text-neutral-700">Polityka prywatności</span>
        </nav>

        {/* HERO */}
        <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-neutral-100 ring-1 ring-neutral-200/60">
          <Image
            src="/images/rodo/hero.webp"
            alt="GAMA COLOR — polityka prywatności"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
            <div className="absolute top-8 left-8 right-8 text-white">
              <p className="text-sm font-medium text-white/80">Dokument informacyjny (RODO)</p>
              <h1 className="mt-2 text-3xl font-bold md:text-5xl">Polityka prywatności</h1>
              <p className="mt-4 max-w-3xl text-white/90">
                Poniżej znajdziesz przejrzyste informacje o tym, kto jest administratorem
                danych, w jakich celach i na jakiej podstawie przetwarzamy dane oraz jakie
                prawa Ci przysługują.
              </p>
            </div>
          </div>
        </div>

        {/* separatore brand */}
        <div className="mb-10 flex w-full">
          <div className="h-1 w-1/3 bg-yellow-400" />
          <div className="h-1 w-1/3 bg-red-500" />
          <div className="h-1 w-1/3 bg-blue-400" />
        </div>

        {/* CONTENT */}
        <section className="prose prose-neutral max-w-none">
          <h2>1. Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest <strong>Gama Color — Zakład Wyrobu Żaluzji</strong>,
            ul. Morcinka 21, 76-200 Słupsk (dalej: <em>„Administrator”</em> lub <em>„My”</em>).
          </p>
          <p>
            Kontakt w sprawach ochrony danych:{" "}
            <a href="mailto:biuro@gamacolor.pl">biuro@gamacolor.pl</a>, tel.{" "}
            <a href="tel:+48598423534">+48 59 842 35 34</a>.{" "}
            {/** Jeżeli powołacie IOD, dopisz to zdanie: */}
            {/* Wyznaczyliśmy Inspektora Ochrony Danych — dane kontaktowe: ... */}
          </p>

          <h2>2. Zakres danych i źródła</h2>
          <ul>
            <li>
              Dane przekazywane świadomie — np. w formularzu lub mailu: imię i nazwisko,
              telefon, e-mail, adres montażu, treść zapytania, załączniki (np. wymiary, zdjęcia).
            </li>
            <li>
              Dane techniczne związane z korzystaniem z serwisu — adres IP, identyfikatory
              cookies, informacje o urządzeniu i przeglądarce; szczegóły w{" "}
              <Link href="/polityka-cookies" className="underline">
                Polityce cookies
              </Link>{" "}
              (jeśli nie ma jeszcze strony, można dodać sekcję poniżej).
            </li>
          </ul>

          <h2>3. Cele, podstawy prawne i okresy przetwarzania</h2>
          <div className="overflow-x-auto rounded-xl ring-1 ring-neutral-200">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="p-3 text-left">Cel</th>
                  <th className="p-3 text-left">Podstawa prawna</th>
                  <th className="p-3 text-left">Okres przetwarzania</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">
                    Udzielenie odpowiedzi na zapytanie (formularz, e-mail, telefon) i kontakt w sprawie
                    wyceny/pomiaru.
                  </td>
                  <td className="p-3">
                    art. 6 ust. 1 lit. f RODO — nasz uzasadniony interes (obsługa korespondencji).
                  </td>
                  <td className="p-3">Do zakończenia korespondencji + maks. 12 mies. w celach dowodowych.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Przygotowanie oferty, umówienie i realizacja pomiaru/montażu, wykonanie umowy.</td>
                  <td className="p-3">art. 6 ust. 1 lit. b RODO — niezbędne do wykonania umowy lub działań przed jej zawarciem.</td>
                  <td className="p-3">Do końca realizacji umowy, a następnie zgodnie z przepisami o przedawnieniu roszczeń.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Rozliczenia, fakturowanie, przechowywanie dokumentacji księgowej.</td>
                  <td className="p-3">art. 6 ust. 1 lit. c RODO — obowiązek prawny (ustawy podatkowe/rachunkowe).</td>
                  <td className="p-3">Przez okres wymagany przepisami (zwykle 5 lat podatkowych).</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Obsługa reklamacji i dochodzenie roszczeń/obrona przed roszczeniami.</td>
                  <td className="p-3">art. 6 ust. 1 lit. f RODO — nasz uzasadniony interes.</td>
                  <td className="p-3">Do upływu terminów przedawnienia roszczeń.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Newsletter i komunikacja marketingowa (jeśli włączysz).</td>
                  <td className="p-3">art. 6 ust. 1 lit. a RODO — zgoda; dodatkowo art. 10 ustawy o świadczeniu usług drogą elektroniczną i art. 172 Prawa telekomunikacyjnego.</td>
                  <td className="p-3">Do wycofania zgody.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Analityka serwisu i remarketing (np. Google Analytics / Meta Pixel — jeśli używasz).</td>
                  <td className="p-3">art. 6 ust. 1 lit. a RODO — zgoda (poprzez baner cookies).</td>
                  <td className="p-3">Zgodnie z ustawieniami plików cookies — patrz Polityka cookies.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Rekrutacja (jeśli kandydat prześle CV).</td>
                  <td className="p-3">art. 6 ust. 1 lit. a RODO — zgoda wyrażona poprzez przesłanie aplikacji; w razie rekrutacji na konkretne stanowisko także art. 6 ust. 1 lit. b.</td>
                  <td className="p-3">Do zakończenia procesu rekrutacji lub do wycofania zgody (talent pool).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>4. Odbiorcy danych</h2>
          <p>
            Dane możemy przekazywać zaufanym podmiotom przetwarzającym je w naszym imieniu:
            dostawcom hostingu i IT, poczty elektronicznej, księgowości, firmom serwisowym
            i montażowym (podwykonawcy), firmom kurierskim/transportowym, a także dostawcom
            narzędzi marketingowych i analitycznych (np. Google, Meta) — <em>jeśli te usługi są aktywne</em>.
            W razie konieczności udostępniamy dane również podmiotom uprawnionym na mocy prawa.
          </p>
          <p className="text-[13px] text-neutral-600">
            Uwaga: korzystanie z niektórych narzędzi może wiązać się z przekazywaniem danych do państw
            trzecich (poza EOG). W takich przypadkach stosujemy odpowiednie zabezpieczenia (np. standardowe
            klauzule umowne). Szczegóły znajdziesz w naszej Polityce cookies/banerze zgód.
          </p>

          <h2>5. Twoje prawa</h2>
          <p>Na zasadach określonych w RODO przysługuje Ci prawo do:</p>
          <ul>
            <li>dostępu do danych i uzyskania ich kopii,</li>
            <li>sprostowania (poprawienia) danych,</li>
            <li>usunięcia danych („prawo do bycia zapomnianym”),</li>
            <li>ograniczenia przetwarzania,</li>
            <li>przenoszenia danych,</li>
            <li>sprzeciwu wobec przetwarzania danych realizowanego na podstawie naszego uzasadnionego interesu,</li>
            <li>wycofania zgody w dowolnym momencie (jeśli przetwarzanie opiera się na zgodzie),</li>
            <li>złożenia skargi do organu nadzorczego — Prezesa UODO (uodo.gov.pl).</li>
          </ul>
          <p>
            Aby skorzystać z praw, skontaktuj się z nami:{" "}
            <a href="mailto:biuro@gamacolor.pl">biuro@gamacolor.pl</a>. W celu weryfikacji
            możemy poprosić o dodatkowe informacje pozwalające potwierdzić tożsamość.
          </p>

          <h2 id="cookies">6. Cookies i podobne technologie</h2>
          <p>
            Nasz serwis może korzystać z plików cookies i podobnych technologii w celach
            funkcjonalnych, statystycznych i marketingowych. Podstawą ich stosowania może
            być Twój <strong>wybór w banerze zgód</strong>. Preferencje możesz w każdej chwili
            zmienić w ustawieniach przeglądarki lub w panelu zgód. Szczegóły (rodzaje plików,
            cele, czasy przechowywania, partnerzy) opisujemy w{" "}
            <Link href="/polityka-cookies" className="underline">
              Polityce cookies
            </Link>.
          </p>

          <h2>7. Zautomatyzowane decyzje i profilowanie</h2>
          <p>
            Nie podejmujemy decyzji wywołujących skutki prawne w sposób zautomatyzowany.
            Jeśli włączone są narzędzia marketingowe (np. Google/Meta), możemy prowadzić
            <em> profilowanie</em> na podstawie aktywności w serwisie w celu dopasowania treści
            reklamowych — wyłącznie po wyrażeniu zgody w banerze cookies.
          </p>

          <h2>8. Obowiązek podania danych</h2>
          <p>
            Podanie danych jest dobrowolne, jednak w niektórych przypadkach może być
            niezbędne do realizacji usługi (np. przygotowania oferty, umówienia pomiaru,
            wystawienia dokumentów sprzedaży). Brak danych może uniemożliwić realizację
            tych działań.
          </p>

          <h2>9. Zmiany dokumentu</h2>
          <p>
            Zastrzegamy możliwość aktualizacji Polityki w razie zmian prawnych lub
            technologicznych. Aktualna wersja jest dostępna na tej stronie.
          </p>

          <div className="mt-10 rounded-2xl bg-neutral-900 px-6 py-5 text-white ring-1 ring-neutral-800">
            <p className="text-sm">
              <span className="font-semibold">Administrator:</span> Gama Color — Zakład Wyrobu Żaluzji, ul. Morcinka 21, 76-200 Słupsk ·{" "}
              <a href="mailto:biuro@gamacolor.pl" className="underline">biuro@gamacolor.pl</a> ·{" "}
              <a href="tel:+48598423534" className="underline">+48 59 842 35 34</a> /{" "}
              <a href="tel:+48603380709" className="underline">+48 603 380 709</a>
            </p>
            <p className="mt-1 text-xs text-white/80">Data ostatniej aktualizacji: {new Date().toLocaleDateString("pl-PL")}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
