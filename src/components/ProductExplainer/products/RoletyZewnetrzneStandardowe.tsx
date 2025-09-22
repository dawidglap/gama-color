// src/components/ProductExplainer/products/RoletyZewnetrzneStandardowe.tsx
'use client';

import { motion } from 'framer-motion';
import {
  IconShield,
  IconRulerMeasure,
  IconHome,
  IconSnowflake,
  IconSun,
  IconVolume,
  IconPalette,
  IconPlug,
} from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function RoletyZewnetrzneStandardowe() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Rolety zewnętrzne standardowe</strong> to sprawdzony system natynkowy
        z aluminiową skrzynką i pancerzem PA39/PA45/PA52. Montowane na murze (bez
        ograniczania światła okna) lub we wnęce okiennej, podnoszą komfort przez cały rok:
        zimą zmniejszają straty ciepła, latem ograniczają nagrzewanie, a dodatkowo
        poprawiają akustykę i prywatność. Idealny wybór do nowych domów i modernizacji.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Izolacja termiczna zimą i ochrona przed słońcem latem — niższe koszty ogrzewania i chłodzenia.',
            'Lepsza akustyka: odczuwalna redukcja hałasu z zewnątrz.',
            'Montaż na murze lub we wnęce — decyzję można podjąć także po zakończeniu budowy.',
            'Trwały pancerz aluminiowy PA39/PA45/PA52, wzmocniona listwa dolna 55 mm.',
            'Kolorystyka: standard, drewnopodobne oraz pełna paleta RAL; pióra klipsowane.',
            'Możliwość sterowania elektrycznego i integracji z automatyką.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Izolacja termiczna', Icon: IconSnowflake },
          { label: 'Ochrona przed słońcem', Icon: IconSun },
          { label: 'Redukcja hałasu', Icon: IconVolume },
          { label: 'Na wymiar', Icon: IconRulerMeasure },
          { label: 'Mur / wnęka', Icon: IconHome },
          { label: 'Kolory & RAL', Icon: IconPalette },
          { label: 'Elektryka (opcjonalnie)', Icon: IconPlug },
          { label: 'Bezpieczeństwo', Icon: IconShield },
        ]}
      />

      <Note>
        Montujemy <strong>rolety zewnętrzne w Słupsku i okolicach</strong>. Pomożemy dobrać pancerz,
        kolor skrzynki/prowadnic i sposób sterowania tak, by pasowały do Twojej elewacji i okien.
      </Note>
    </Block>
  );
}
