// src/components/ProductExplainer/products/VegasProfil.tsx
'use client';

import { motion } from 'framer-motion';
import { IconShield, IconHome, IconSparkles } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function VegasProfil() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Rolety Vegas Profil</strong> to elegancki system z płaską, profilową kasetą
        i prowadnicami bocznymi, które prowadzą tkaninę blisko szyby i eliminują prześwity.
        Montaż dopasowujemy do typu okna — kaseta idealnie integruje się z ramą, a całość
        wygląda minimalistycznie i nowocześnie.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Profilowa kaseta — estetyczna, płaska, dobrze przylega do ramy okna.',
            'Prowadnice profilowe stabilizują tkaninę i ograniczają prześwity.',
            'Mechanizm samohamujący — zatrzymasz roletę na dowolnej wysokości.',
            'Szeroki wybór tkanin: gładkie, dekoracyjne, zaciemniające; możliwy nadruk.',
            'Profesjonalny pomiar i montaż w Słupsku i okolicach.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Kaseta profilowa', Icon: IconShield },
          { label: 'Prowadnice profilowe', Icon: IconHome },
          { label: 'Mechanizm samohamujący', Icon: IconSparkles },
        ]}
      />

      <Note>
        Chcesz spersonalizować roletę? Wybierz nadruk grafiki lub zdjęcia — sprawdź <strong>Fotorolety</strong>.
      </Note>
    </Block>
  );
}
