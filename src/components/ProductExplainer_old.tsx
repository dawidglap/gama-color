// src/components/ProductExplainer.tsx
'use client';

import { motion, type Variants } from 'framer-motion';
import {
  IconCheck,
  IconPhoto,
  IconSparkles,
  IconShield,
  IconBuildingStore,
  IconHome,
  IconFile,
} from '@tabler/icons-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export default function ProductExplainer({ slug }: { slug: string }) {
  // Registry: slug -> JSX content
  const CONTENT: Record<string, JSX.Element> = {
    'fotorolety': <FotoroletyContent />,
    'vegas-classic': <VegasClassicContent />,
    // aggiungi qui: 'vegas-profil': <VegasProfilContent />, ecc.
  };

  const body = CONTENT[slug] ?? <FallbackContent />;

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 md:col-span-2"
    >
      {/* top accent */}
      <div className="mb-4 h-1 w-28 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400" />

      <motion.h2 variants={fadeUp} className="text-xl font-semibold text-neutral-900">
        Opis produktu
      </motion.h2>

      {body}
    </motion.section>
  );
}

/* ---------------- FOTOROLETY ---------------- */

function FotoroletyContent() {
  return (
    <div className="mt-3 space-y-8 text-neutral-700">
      {/* intro */}
      <motion.p variants={fadeUp}>
        <strong>Fotorolety</strong> to rolety materiałowe z nadrukiem{' '}
        <em>dowolnej</em> grafiki lub zdjęcia — od fotografii z Twojego telefonu
        po profesjonalny projekt firmowy. To nowoczesna dekoracja okien łącząca
        estetykę, prywatność i funkcjonalność.
      </motion.p>

      {/* chips */}
      <motion.div variants={stagger} className="flex flex-wrap gap-2">
        {[
          { label: 'Personalizacja 1:1', Icon: IconSparkles },
          { label: 'Na wymiar', Icon: IconShield },
          { label: 'Montaż w Słupsku', Icon: IconHome },
          { label: 'Do firm i witryn', Icon: IconBuildingStore },
        ].map(({ label, Icon }, i) => (
          <motion.span
            key={i}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1 text-sm text-neutral-800 ring-1 ring-neutral-200"
          >
            <Icon className="h-4 w-4 text-neutral-500" />
            {label}
          </motion.span>
        ))}
      </motion.div>

      {/* why + use cases */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={stagger}>
          <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
          <ul className="mt-3 space-y-2">
            {[
              'Użyj własnego zdjęcia lub projektu.',
              'Mocny efekt dekoracyjny i prywatność.',
              'Świetne do salonu, sypialni, gabinetu.',
              'Produkcja na wymiar + fachowy montaż.',
              'Widoczne również po zmroku (światło wewnętrzne).',
            ].map((t, i) => (
              <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                <IconCheck className="mt-[2px] h-5 w-5 text-green-500" />
                <span>{t}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-semibold text-neutral-900">Zastosowania firmowe</h3>
          <p className="mt-3">
            Zamień „milczące okna” w nośnik komunikacji wizualnej. Idealne do witryn,
            salonów usługowych, biur i gabinetów — subtelnie promują markę i ofertę.
          </p>
        </motion.div>
      </div>

      {/* systems */}
      <motion.div variants={fadeUp}>
        <h3 className="text-lg font-semibold text-neutral-900">Dostępne systemy rolet</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {['Vegas Classic', 'Vegas Profil', 'Rolety wolnowiszące', 'Okna dachowe'].map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-neutral-50 px-3 py-1 text-sm text-neutral-800 ring-1 ring-neutral-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-2 text-sm text-neutral-500">
          * Dobór systemu zależy od typu okna i miejsca montażu — doradzimy na pomiarze.
        </p>
      </motion.div>

      {/* files */}
      <motion.div variants={fadeUp} className="relative overflow-hidden rounded-xl ring-1 ring-neutral-100">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-yellow-400 via-red-500 to-blue-400" />
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <IconPhoto className="mt-[2px] h-5 w-5 text-neutral-500" />
            <p>
              Użyj <strong>dowolnego zdjęcia lub grafiki</strong> (własnej lub firmowej).
            </p>
          </div>
          <div className="flex items-start gap-3">
            <IconFile className="mt-[2px] h-5 w-5 text-neutral-500" />
            <p>Najlepiej oryginalny plik w wysokiej jakości (JPG/PNG).</p>
          </div>
          <div className="flex items-start gap-3">
            <IconFile className="mt-[2px] h-5 w-5 text-neutral-500" />
            <p>Unikaj zrzutów ekranu i obrazów mocno skompresowanych.</p>
          </div>
          <div className="flex items-start gap-3">
            <IconShield className="mt-[2px] h-5 w-5 text-neutral-500" />
            <p>Upewnij się, że masz prawa do wykorzystania grafiki/zdjęcia.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------- VEGAS CLASSIC ---------------- */

function VegasClassicContent() {
  return (
    <div className="mt-3 space-y-8 text-neutral-700">
      {/* intro SEO */}
      <motion.p variants={fadeUp}>
        <strong>Rolety Vegas Classic</strong> to sprawdzony system rolet wewnętrznych,
        ceniony za elegancję, niezawodność i prosty montaż. Opływowa kaseta
        aluminiowa lub PCV jest mocowana do listwy przyszybowej na cztery wkręty —
        <em> okno zachowuje gwarancję</em>. Prowadnice przyklejane taśmą piankową
        utrzymują materiał blisko szyby, również przy uchylonym oknie.
      </motion.p>

      {/* benefits */}
      <motion.div variants={stagger}>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <ul className="mt-3 space-y-2">
          {[
            'Mechanizm samohamujący — zatrzymasz roletę na dowolnej wysokości.',
            'Wymiana strony łańcuszka i mechanizmu bez narzędzi — w kilka sekund.',
            'Osprzęt w kolorach idealnie dopasowanych do ramy okna.',
            'Szeroki wybór tkanin: gładkie i dekoracyjne + możliwość nadruku.',
            'Montujemy w Słupsku i okolicach — pomiar i doradztwo na miejscu.',
          ].map((t, i) => (
            <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
              <IconCheck className="mt-[2px] h-5 w-5 text-green-500" />
              <span>{t}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* mini chips */}
      <motion.div variants={stagger} className="flex flex-wrap gap-2">
        {[
          { label: 'Kaseta alum./PCV', Icon: IconShield },
          { label: 'Montaż na listwie przyszybowej', Icon: IconHome },
          { label: 'Mechanizm samohamujący', Icon: IconSparkles },
        ].map(({ label, Icon }, i) => (
          <motion.span
            key={i}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1 text-sm text-neutral-800 ring-1 ring-neutral-200"
          >
            <Icon className="h-4 w-4 text-neutral-500" />
            {label}
          </motion.span>
        ))}
      </motion.div>

      {/* note about print option */}
      <motion.div variants={fadeUp} className="rounded-xl bg-neutral-50 p-4 ring-1 ring-neutral-200">
        <p className="text-sm">
          Chcesz spersonalizować roletę? Wybierz nadruk grafiki lub zdjęcia — sprawdź{' '}
          <strong>Fotorolety</strong>.
        </p>
      </motion.div>
    </div>
  );
}

/* ---------------- FALLBACK ---------------- */

function FallbackContent() {
  return (
    <motion.p variants={fadeUp} className="mt-3 text-neutral-700">
      Tu wstawimy opis rozszerzony, zdjęcia detali i krótką listę korzyści.
    </motion.p>
  );
}
