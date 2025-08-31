// src/components/ProductExplainer/products/VegasMini.tsx
'use client';

import { motion } from 'framer-motion';
import { IconShield, IconHome, IconSparkles } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function VegasMini() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Rolety Vegas Mini</strong> to ekonomiczny system <em>bez kasety</em> z
        prowadzeniem żyłkowym poprowadzonym <em>pod tkaniną</em>. To najtańszy sposób
        na roletę materiałową montowaną na skrzydle okiennym — żyłki nie kolidują z
        klamką i nie zahaczają o dłoń, a lekka konstrukcja prezentuje się estetycznie
        na każdym oknie. Montaż możliwy bezinwazyjnie na ramie lub na listwie
        przyszybowej (wkręty). Dolne mocowanie umożliwia regulację naprężenia żyłek.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Tania i niezawodna roleta do większości okien.',
            'Montaż bezinwazyjny na ramie lub wkrętami do listwy przyszybowej.',
            'Mechanizm samohamujący — zatrzymasz roletę na dowolnej wysokości.',
            'Prowadzenie żyłkowe pod tkaniną — brak kolizji z klamką, stabilna praca przy uchyle.',
            'Rurka nawojowa Ø18 mm + szeroki wybór tkanin (gładkie, dekoracyjne, także z nadrukiem).',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Prowadzenie żyłkowe', Icon: IconShield },
          { label: 'Montaż bezinwazyjny', Icon: IconHome },
          { label: 'Mechanizm samohamujący', Icon: IconSparkles },
        ]}
      />

      <Note>
        Chcesz spersonalizować roletę? Możliwy <strong>nadruk</strong> grafiki lub zdjęcia —
        sprawdź <strong>Fotorolety</strong>.
      </Note>
    </Block>
  );
}
