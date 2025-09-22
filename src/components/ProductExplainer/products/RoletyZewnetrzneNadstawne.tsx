// src/components/ProductExplainer/products/RoletyZewnetrzneNadstawne.tsx
'use client';

import { motion } from 'framer-motion';
import {
  IconBuilding,
  IconRulerMeasure,
  IconHome,
  IconLayersIntersect,
  IconShield,
  IconPalette,
} from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function RoletyZewnetrzneNadstawne() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Rolety nadstawne (naokienne)</strong> montuje się razem z oknem we wnęce,
        dzięki czemu skrzynka z PVC może być zabudowana częściowo lub całkowicie
        (przy rewizji od dołu). System świetnie integruje się z bryłą budynku, poprawia
        parametry cieplne i pozostaje dyskretny w aranżacji wnętrza.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Montaż z oknem — idealnie na etapie projektu lub wymiany stolarki.',
            'Zabudowa skrzynki: częściowa lub pełna (rewizja od dołu).',
            'Izolacja cieplna w standardzie (U ok. 1,1), opcjonalnie wzmocniona (nawet do ok. 0,6).',
            'Stabilna konstrukcja: kotwy zewnętrzne, prowadnice z uszczelką szczotkową.',
            'Duże pojemności skrzynek (162 / 197 / 287 mm) – gotowe na pancerz MAXI.',
            'Możliwa zintegrowana, rolowana moskitiera bez ograniczania pojemności pancerza.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Nowe budynki', Icon: IconBuilding },
          { label: 'Integracja z wnęką', Icon: IconLayersIntersect },
          { label: 'Na wymiar', Icon: IconRulerMeasure },
          { label: 'Zabudowa skrzynki', Icon: IconHome },
          { label: 'Lepsze U (opcje)', Icon: IconShield },
          { label: 'Kolory & RAL', Icon: IconPalette },
        ]}
      />

      <Note>
        Planujesz stolarkę z roletami? Przygotujemy <strong>kompletne rozwiązanie nadstawne</strong> —
        dobierzemy skrzynkę, pancerz i zabudowę pod Twoją inwestycję w Słupsku i okolicy.
      </Note>
    </Block>
  );
}
