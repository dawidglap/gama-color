// src/components/products/ZaluzjeVerticali.tsx
'use client';

import { motion } from 'framer-motion';
import { IconShield, IconHome, IconSparkles } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp, stagger } from '../ui';

export default function ZaluzjeVerticali() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Żaluzje pionowe (verticale)</strong> to funkcjonalna i elegancka osłona
        do biur, mieszkań i przestrzeni usługowych. Pasy tkaniny obracają się i
        zsuwają na bok lub do środka, dzięki czemu możesz precyzyjnie regulować
        ilość i kierunek światła bez podnoszenia całej osłony. Montaż sufitowy lub
        naścienny sprawia, że verticale świetnie sprawdzają się przy dużych
        przeszkleniach, witrynach i w salach konferencyjnych.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Płynna regulacja: obrót lameli + zsuw w wybranym kierunku (lewo/prawo/środek).',
            'Montaż sufitowy lub naścienny — dopasowanie do architektury wnętrza.',
            'Świetne do dużych przeszkleń i wysokich pomieszczeń, także jako lekka ścianka działowa.',
            'Szeroka kolekcja tkanin: transparentne, półzaciemniające i zaciemniające.',
            'Możliwość dopasowania do skosów i nietypowych kształtów (łuki pionowe/poziome).',
            'Łatwe czyszczenie i serwis, elementy wymienne dostępne na miejscu.',
            'Pomiar, doradztwo i montaż w Słupsku i okolicach.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Montaż: sufit/ściana', Icon: IconHome },
          { label: 'Regulacja kąta i zsuwu', Icon: IconSparkles },
          { label: 'Do dużych przeszkleń', Icon: IconShield },
        ]}
      />

      <Note>
        Dobierz materiał pod akustykę i stopień zaciemnienia. Pokażemy próbki na miejscu
        i pomożemy wybrać najlepszy wariant do Twojego biura lub domu.
      </Note>
    </Block>
  );
}
