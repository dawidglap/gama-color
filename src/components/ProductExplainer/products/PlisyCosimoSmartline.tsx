// src/components/Plisy/PlisyCosimoSmartline.tsx
'use client';

import { motion } from 'framer-motion';
import {
  IconPalette,
  IconRulerMeasure,
  IconHome,
  IconShield,
  IconRuler2,
} from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function PlisyCosimoSmartline() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Plisy COSIMO SMARTLINE</strong> to nowoczesny system żaluzji
        plisowanej w prowadnicach, zaprojektowany z myślą o <em>oknach dachowych</em>.
        Prowadnice stabilizują tkaninę i utrzymują równy naciąg, a blokada
        <em> Easy&nbsp;Click</em> ułatwia codzienne użytkowanie. Profile dostępne w
        kolorach: <strong>biały</strong>, <strong>srebrny</strong> i
        <strong> sosna</strong>. Montujemy w Słupsku, Redzikowie, Siemianicach,
        Ustce i okolicy.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Prowadnice boczne – równy naciąg tkaniny i estetyczne prowadzenie.',
            'Idealne do okien dachowych: stabilna praca przy uchyle i w pełnym otwarciu.',
            'Blokada Easy Click (Cosimo One) – komfortowa obsługa i solidne trzymanie pozycji.',
            'Profile: biały / srebrny / sosna – dopasowanie do ramy okiennej i wystroju.',
            'Pomiar i montaż na miejscu: Słupsk, Redzikowo, Siemianice, Ustka.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Prowadnice boczne', Icon: IconRuler2 },
          { label: 'Okna dachowe', Icon: IconHome },
          { label: 'Easy Click', Icon: IconShield },
          { label: 'Profile: biały/srebrny/sosna', Icon: IconPalette },
          { label: 'Pomiary na wymiar', Icon: IconRulerMeasure },
        ]}
      />

      <Note>
        Szukasz plis do okien o nietypowych kształtach (trójkąty, trapezy, łuki)?
        Zobacz <strong>Plisy ULTIMA</strong>. Do okien standardowych polecamy{' '}
        <strong>Plisy COSIMO</strong>.
      </Note>
    </Block>
  );
}
