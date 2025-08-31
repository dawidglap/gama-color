'use client';

import { motion } from 'framer-motion';
import {
  IconSparkles,
  IconShield,
  IconHome,
  IconBuildingStore,
  IconPhoto,
  IconFile,
} from '@tabler/icons-react';
import { Block, Bullets, Chips, fadeUp, stagger } from '../ui';

export default function Fotorolety() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Fotorolety</strong> to rolety materiałowe z nadrukiem <em>dowolnej</em> grafiki
        lub zdjęcia — od fotografii z telefonu po profesjonalny projekt firmowy. To nowoczesna
        dekoracja okien łącząca estetykę, prywatność i funkcjonalność.
      </motion.p>

      <Chips
        items={[
          { label: 'Personalizacja 1:1', Icon: IconSparkles },
          { label: 'Na wymiar', Icon: IconShield },
          { label: 'Montaż w Słupsku', Icon: IconHome },
          { label: 'Do firm i witryn', Icon: IconBuildingStore },
        ]}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={stagger}>
          <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
          <Bullets
            points={[
              'Użyj własnego zdjęcia lub projektu.',
              'Mocny efekt dekoracyjny i prywatność.',
              'Świetne do salonu, sypialni, gabinetu.',
              'Produkcja na wymiar + fachowy montaż.',
              'Widoczne również po zmroku (światło wewnętrzne).',
            ]}
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-semibold text-neutral-900">Zastosowania firmowe</h3>
          <p className="mt-3">
            Zamień „milczące okna” w nośnik komunikacji wizualnej. Idealne do witryn, salonów
            usługowych, biur i gabinetów — subtelnie promują markę i ofertę.
          </p>
        </motion.div>
      </div>

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
    </Block>
  );
}
