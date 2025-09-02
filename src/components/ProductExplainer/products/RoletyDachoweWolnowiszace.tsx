// src/components/products/RoletyDachoweWolnowiszace.tsx
'use client';

import { motion } from 'framer-motion';
import { IconShield, IconHome, IconSparkles } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function RoletyDachoweWolnowiszace() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Rolety dachowe wolnowiszące</strong> to najprostsze i najkorzystniejsze cenowo
        rozwiązanie do okien połaciowych. Wyposażone w <em>mechanizm sprężynowy</em>,
        samoczynnie się zwijają i utrzymują tkaninę w stałym naprężeniu. Zestaw zaczepów
        pozwala wygodnie zatrzymać roletę na wybranej wysokości – idealnie do dozywania światła
        na poddaszu.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Mechanizm sprężynowy – płynne, samozwijające działanie i równy naciąg tkaniny.',
            'Pozycjonowanie na zaczepach – zatrzymujesz roletę na kilku wysokościach.',
            'Lekka konstrukcja – estetycznie wygląda na każdym oknie dachowym.',
            'Dobre prowadzenie materiału także przy oknie uchylonym.',
            'Montaż szybki i czysty, bez skomplikowanych przeróbek.',
            'Szeroki wybór tkanin: od dekoracyjnych po zaciemniające.',
            'Doradzamy, mierzymy i montujemy w Słupsku i okolicach.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Mechanizm sprężynowy', Icon: IconSparkles },
          { label: 'Do okien dachowych', Icon: IconHome },
          { label: 'Ekonomiczny wybór', Icon: IconShield },
        ]}
      />

      <Note>
        Potrzebujesz maksymalnej kontroli światła i prowadnic? Sprawdź również{' '}
        <strong>Rolety dachowe w kasecie</strong> – kaseta i prowadnice utrzymują tkaninę blisko szyby.
      </Note>
    </Block>
  );
}
