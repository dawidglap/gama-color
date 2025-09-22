// src/components/ProductExplainer/products/MoskitieryPrzesuwne.tsx
'use client';

import { motion } from 'framer-motion';
import { IconHome, IconShield, IconRulerMeasure, IconDoorSliding, IconMaximize } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function MoskitieryPrzesuwne() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Moskitiery przesuwne</strong> to rozwiązanie stworzone z myślą o dużych
        przeszkleniach: tarasach, witrynach czy ogrodach zimowych. Skrzydło przesuwa się
        płynnie po prowadnicach, nie zajmując miejsca i nie ograniczając światła.
        Mocna konstrukcja aluminiowa zapewnia trwałość i estetykę nawet przy dużych wymiarach.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Idealne do dużych przeszkleń: tarasy, witryny, ogrody zimowe.',
            'Płynny przesuw na prowadnicach jedno- lub dwutorowych.',
            'Maksymalne wymiary skrzydła: 2000 × 2500 mm.',
            'Brak poprzeczki dzielącej – pełna widoczność.',
            'Profile w kolorach biały, brązowy, drewnopodobne i RAL.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Duże przeszklenia', Icon: IconMaximize },
          { label: 'System przesuwny', Icon: IconDoorSliding },
          { label: 'Stabilna konstrukcja', Icon: IconShield },
          { label: 'Na wymiar', Icon: IconRulerMeasure },
          { label: 'Kolory RAL i okleiny', Icon: IconHome },
        ]}
      />

      <Note>
        Idealne dla <strong>tarasów i ogrodów zimowych</strong>. 
        Zmierzmy Twoje przeszklenie i dobierzemy odpowiedni system prowadnic i kolor profilu.
      </Note>
    </Block>
  );
}
