// src/components/Zaluzje/ZaluzjeLaminowane.tsx
'use client';

import { motion } from 'framer-motion';
import { IconPalette, IconRulerMeasure, IconHome, IconPlug, IconShield } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function ZaluzjeLaminowane() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Żaluzje laminowane (25&nbsp;mm, 50&nbsp;mm)</strong> to eleganckie i
        trwałe osłony z <em>litego drewna</em> pokrytego dekoracyjnym laminatem.
        Szeroka paleta kolorów i rysunków słojów ułatwia dopasowanie do mebli i podłóg,
        a precyzyjna regulacja kąta lamel pozwala wygodnie sterować światłem w pomieszczeniu.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Naturalne drewno z laminatem – świetny wygląd i wysoka odporność na użytkowanie.',
            'Dwie szerokości lamel: 25 mm (na skrzydło okna) i 50 mm (na wnękę/ścianę/sufit).',
            'Różne sposoby montażu: w świetle okna, do ściany lub sufitu; 25 mm także bezinwazyjnie na skrzydle.',
            'Opcje stylistyczne: taśmy dekoracyjne 25 mm oraz wersja Retro mechanizmu.',
            'Montujemy w Słupsku i okolicach — pomiar i doradztwo na miejscu.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Lamele 25 / 50 mm', Icon: IconRulerMeasure },
          { label: 'Dekory drewna', Icon: IconPalette },
          { label: 'Montaż ściana / sufit / okno', Icon: IconHome },
          { label: 'Opcja Retro / taśmy', Icon: IconShield },
          { label: 'Sterowanie elektryczne', Icon: IconPlug },
        ]}
      />

      <Note>
        Szukasz naturalnego wykończenia? Zobacz także <strong>Żaluzje drewniane</strong> —
        przygotujemy próbki i dopasujemy kolor na miejscu.
      </Note>
    </Block>
  );
}
