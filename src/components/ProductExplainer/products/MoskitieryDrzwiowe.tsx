// src/components/ProductExplainer/products/MoskitieryDrzwiowe.tsx
'use client';

import { motion } from 'framer-motion';
import { IconHome, IconShield, IconRulerMeasure, IconDoorEnter, IconMagnet } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function MoskitieryDrzwiowe() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Moskitiery drzwiowe (otwierane)</strong> to wygodne skrzydła montowane
        na zawiasach do drzwi balkonowych lub tarasowych. Wyposażone w magnesy i szczotki
        uszczelniające, skutecznie blokują owady, a opcjonalne samozamykacze podnoszą
        komfort codziennego użytkowania.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Solidna rama aluminiowa – trwałość i stabilność.',
            'Magnesy i uszczelki szczotkowe dla pełnej szczelności.',
            'Opcja samozamykacza – drzwi zawsze się domkną.',
            'Dostępne profile w okleinach i kolorach RAL.',
            'Dopasowane do każdego rodzaju drzwi balkonowych i tarasowych.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Do drzwi balkonowych', Icon: IconDoorEnter },
          { label: 'Magnesy + szczotki', Icon: IconMagnet },
          { label: 'Na wymiar', Icon: IconRulerMeasure },
          { label: 'Solidna konstrukcja', Icon: IconShield },
          { label: 'Montaż zawiasowy', Icon: IconHome },
        ]}
      />

      <Note>
        Realizujemy <strong>moskitiery drzwiowe w Słupsku i okolicach</strong>.
        Zmierzmy Twój balkon lub taras i zaproponujemy najlepsze rozwiązanie z samozamykaczem.
      </Note>
    </Block>
  );
}
