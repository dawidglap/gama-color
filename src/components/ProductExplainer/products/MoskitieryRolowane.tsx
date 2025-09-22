// src/components/ProductExplainer/products/MoskitieryRolowane.tsx
'use client';

import { motion } from 'framer-motion';
import { IconHome, IconShield, IconRulerMeasure, IconArrowsVertical, IconArrowsHorizontal } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function MoskitieryRolowane() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Moskitiery rolowane</strong> dostępne w wersji pionowej i poziomej
        to system z kasetą i prowadnicami, w którym siatka rozwija się i chowa jednym ruchem.
        Mechanizm sprężynowy oraz uszczelnienia boczne zapewniają wygodę i skuteczną ochronę
        przed owadami w oknach i drzwiach balkonowych.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Kaseta chroni siatkę poza sezonem.',
            'Wariant pionowy do okien, poziomy do drzwi balkonowych.',
            'Prowadnice i listwy zapewniają szczelność.',
            'Spowalniacz chroni siatkę przy zwijaniu.',
            'Profile dostępne w okleinach i kolorach RAL.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Kaseta + prowadnice', Icon: IconShield },
          { label: 'Pionowe do okien', Icon: IconArrowsVertical },
          { label: 'Poziome do drzwi', Icon: IconArrowsHorizontal },
          { label: 'Na wymiar', Icon: IconRulerMeasure },
          { label: 'Montaż wnęka / ściana', Icon: IconHome },
        ]}
      />

      <Note>
        Szukasz moskitiery wygodnej w codziennym użyciu? 
        Polecamy <strong>system rolowany</strong> — pomiar i montaż w Słupsku i okolicach.
      </Note>
    </Block>
  );
}
