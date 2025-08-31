'use client';

import { motion } from 'framer-motion';
import { IconShield, IconHome, IconSparkles } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp, stagger } from '../ui';

export default function VegasClassic() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Rolety Vegas Classic</strong> to sprawdzony system rolet wewnętrznych,
        ceniony za elegancję, niezawodność i prosty montaż. Opływowa kaseta aluminiowa
        lub PCV jest mocowana do listwy przyszybowej na cztery wkręty —
        <em> okno zachowuje gwarancję</em>. Prowadnice przyklejane taśmą piankową
        utrzymują materiał blisko szyby, również przy uchylonym oknie.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Mechanizm samohamujący — zatrzymasz roletę na dowolnej wysokości.',
            'Wymiana strony łańcuszka i mechanizmu bez narzędzi — w kilka sekund.',
            'Osprzęt w kolorach idealnie dopasowanych do ramy okna.',
            'Szeroki wybór tkanin: gładkie i dekoracyjne + możliwość nadruku.',
            'Montujemy w Słupsku i okolicach — pomiar i doradztwo na miejscu.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Kaseta alum./PCV', Icon: IconShield },
          { label: 'Montaż na listwie przyszybowej', Icon: IconHome },
          { label: 'Mechanizm samohamujący', Icon: IconSparkles },
        ]}
      />

      <Note>
        Chcesz spersonalizować roletę? Wybierz nadruk grafiki lub zdjęcia — sprawdź <strong>Fotorolety</strong>.
      </Note>
    </Block>
  );
}
