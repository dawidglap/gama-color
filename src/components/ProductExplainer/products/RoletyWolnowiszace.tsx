// src/components/product/RoletyWolnowiszace.tsx
'use client';

import { motion } from 'framer-motion';
import { IconShield, IconHome, IconSparkles } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp, stagger } from '../ui';

export default function RoletyWolnowiszace() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Rolety wolnowiszące</strong> to uniwersalne i ekonomiczne osłony okienne.
        Materiał jest nawijany na rurkę i utrzymywany przez parę uchwytów, dzięki czemu
        system sprawdza się zarówno na oknie, jak i montowany do ściany, sufitu lub we wnęce.
        Na ramie okiennej możemy zamontować roletę <em>bezinwazyjnie</em> albo do listwy
        przyszybowej za pomocą wkrętów. Samohamujący mechanizm łańcuszkowy pozwala
        zatrzymać tkaninę na dowolnej wysokości, a regulowana osłonka zapewnia
        płynną pracę łańcuszka nawet pod kątem.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Montaż do ściany, sufitu, na wnękę i we wnęce — także bezinwazyjnie na ramie okna.',
            'Możliwość montażu na listwie przyszybowej (wkręty) lub bez wiercenia.',
            'Mechanizm łańcuszkowy samohamujący — precyzyjne pozycjonowanie rolety.',
            'Regulowana osłonka łańcuszka: komfortowa praca w pionie pod dowolnym kątem.',
            'Opcjonalne dolne prowadzenie: haczyki lub magnesy (dla wybranych wariantów).',
            'Rurki nawojowe: Ø18, Ø19, Ø25 oraz Ø32 mm — większe średnice do większych przeszkleń.',
            'Szeroki wybór tkanin: gładkie, dekoracyjne, zaciemniające; możliwy nadruk (Fotorolety).',
            'Profesjonalny montaż i doradztwo w Słupsku i okolicach.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Montaż: ściana/sufit/wnęka', Icon: IconHome },
          { label: 'Mechanizm samohamujący', Icon: IconSparkles },
          { label: 'Duże formaty Ø32 mm', Icon: IconShield },
        ]}
      />

      <Note>
        Chcesz roletę z grafiką lub zdjęciem? Sprawdź naszą ofertę <strong>Fotorolety</strong> —
        przygotujemy projekt i wydruk zgodnie z Twoim pomysłem.
      </Note>
    </Block>
  );
}
