// src/components/Plisy/PlisyUltima.tsx
'use client';

import { motion } from 'framer-motion';
import {
  IconPalette,
  IconRulerMeasure,
  IconHome,
  IconShape,
  IconAdjustments,
} from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function PlisyUltima() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Plisy ULTIMA</strong> to system do okien{' '}
        <em>o nietypowych kształtach</em> — trójkątów, trapezów, półokręgów i
        okręgów — a także do standardowych ram. Dzięki elastycznej konstrukcji i
        szerokiej gamie tkanin precyzyjnie kontrolujesz światło i prywatność w
        salonie, sypialni czy poddaszu. Realizujemy pomiar i montaż w Słupsku,
        Ustce, Rowach, Kobylnicy, Siemianicach i okolicznych miejscowościach.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Dopasowanie do kształtów: trójkąty, trapezy, łuki, koła — także niestandardowe wymiary.',
            'Precyzyjna praca systemu i estetyczne prowadzenie tkaniny w każdej pozycji.',
            'Bogata kolekcja materiałów: transparentne, przyciemniające, zaciemniające.',
            'Estetyczne profile i detale wykończenia dopasowane do wnętrza.',
            'Lokalny pomiar i montaż: Słupsk, Ustka, Rowy, Kobylnica, Siemianice.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Nietypowe kształty', Icon: IconShape },
          { label: 'Regulacja światła', Icon: IconAdjustments },
          { label: 'Montaż na wymiar', Icon: IconRulerMeasure },
          { label: 'Profile i kolory', Icon: IconPalette },
          { label: 'Do domu i na poddasze', Icon: IconHome },
        ]}
      />

      <Note>
        Jeśli potrzebujesz plis do okien dachowych, sprawdź{' '}
        <strong>Plisy COSIMO SMARTLINE</strong>. Do klasycznych ram okiennych
        świetnie sprawdzą się <strong>Plisy COSIMO</strong>.
      </Note>
    </Block>
  );
}
