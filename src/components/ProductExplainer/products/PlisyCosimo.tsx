// src/components/Plisy/PlisyCosimo.tsx
'use client';

import { motion } from 'framer-motion';
import {
  IconPalette,
  IconRulerMeasure,
  IconHome,
  IconShield,
  IconArrowsVertical,
} from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function PlisyCosimo() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Plisy COSIMO (góra–dół)</strong> to uniwersalny system do okien
        standardowych, który pozwala zasłonić <em>dokładnie ten fragment szyby</em>,
        którego potrzebujesz. Estetyczny profil i duży wybór materiałów (w tym
        tkaniny zaciemniające) sprawiają, że COSIMO świetnie sprawdza się w
        mieszkaniach i domach w Słupsku, Ustce, Kobylnicy, Siemianicach i Redzikowie.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Precyzyjna kontrola światła: sterowanie góra–dół, zasłaniasz wybrany obszar okna.',
            'Ponad 200 tkanin do wyboru: transparentne, przyciemniające, zaciemniające – łatwe dopasowanie do wnętrza.',
            'Smukły, dopracowany profil – dyskretny wygląd i wygodne użytkowanie na co dzień.',
            'Stabilna praca systemu (w tym zaczepy zapobiegające opadaniu tkaniny).',
            'Pomiar i montaż na miejscu: Słupsk, Ustka, Kobylnica, Siemianice, Redzikowo.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Sterowanie góra–dół', Icon: IconArrowsVertical },
          { label: 'Szeroki wybór tkanin', Icon: IconPalette },
          { label: 'Montaż na skrzydle / we wnęce', Icon: IconHome },
          { label: 'Dopracowany profil', Icon: IconShield },
          { label: 'Pomiary na wymiar', Icon: IconRulerMeasure },
        ]}
      />

      <Note>
        Masz okna dachowe lub niestandardowe kształty? Sprawdź{' '}
        <strong>Plisy COSIMO SMARTLINE</strong> (okna dachowe) lub{' '}
        <strong>Plisy ULTIMA</strong> (trójkąty, trapezy, łuki).
      </Note>
    </Block>
  );
}
