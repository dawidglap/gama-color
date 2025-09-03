// src/components/explainers/ZaluzjeDrewniane.tsx
'use client';

import { motion } from 'framer-motion';
import { IconTrees, IconRulerMeasure, IconBolt, IconHome } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function ZaluzjeDrewniane() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Żaluzje drewniane 25&nbsp;mm i 50&nbsp;mm</strong> to wybór dla osób, które lubią
        naturalne, ponadczasowe materiały. Lamele z drewna (basswood) nadają wnętrzu
        <em> ciepła i elegancji</em>, a precyzyjna regulacja kąta nachylenia pozwala łatwo
        sterować ilością światła. Wykonujemy żaluzje <strong>na wymiar z montażem w Słupsku i okolicach</strong>.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Naturalne drewno basswood – trwałe, lekkie, pokryte odpornymi lakierami.',
            'Dwie szerokości lamel: 25 mm (na skrzydło/między listwy) i 50 mm (nad wnęką lub we wnęce).',
            'Prowadzenie boczne (żyłka) przy oknach uchylnych – lamele nie „stukają” o szybę.',
            'Sterowanie klasyczne (patyk + sznurki) lub wygodne sterowanie elektryczne.',
            'Wersja 50 mm także na taśmach 25 mm oraz w klimatycznym systemie RETRO.',
            'Montaż w świetle okna, na ścianie albo do sufitu – dobieramy do sytuacji na miejscu.',
            'Łatwe czyszczenie i wysoka odporność na codzienne użytkowanie.',
            'Szeroka paleta kolorów i wybarwień drewna – dopasujemy do stylu Twojego wnętrza.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Naturalne drewno', Icon: IconTrees },
          { label: 'Lamele 25/50 mm', Icon: IconRulerMeasure },
          { label: 'Opcja elektryczna', Icon: IconBolt },
        ]}
      />

      <Note>
        Żaluzje 25&nbsp;mm najlepiej sprawdzają się na skrzydłach okiennych (często z prowadzeniem
        żyłkowym). Wersja 50&nbsp;mm pięknie wygląda nad wnęką okienną; możemy wykonać ją także
        w stylu <strong>RETRO</strong>. Zapewniamy profesjonalny pomiar, doradztwo i montaż.
        <span className="inline-flex items-center gap-1 py-0 bg-gradient-to-br from-neutral-900 via-neutral-700 to-blue-400 ml-2 rounded-md px-3 text-white">
          <IconHome size={16} /> Słupsk i okolice.
        </span>
      </Note>
    </Block>
  );
}
