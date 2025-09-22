// src/components/products/RoletyRzymskie.tsx
'use client';

import { motion } from 'framer-motion';
import { IconPalette, IconRulerMeasure, IconHome, IconPlug, IconShield, IconWash } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function RoletyRzymskie() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Rolety rzymskie</strong> łączą elegancję zasłon z wygodą rolet.
        Szyte na wymiar pod Twoje okno, składają się w równe, poziome fałdy dzięki
        tunelikom z pręcikami usztywniającymi. Z lekkiej mgiełki udadzą firanę,
        z tkaniny zasłonowej — skutecznie przyciemnią wnętrze. Idealne do nowoczesnych
        i klasycznych aranżacji w salonie, sypialni czy kuchni.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Szyte na wymiar – perfekcyjne dopasowanie do wnęki lub skrzydła okna.',
            'Równe, miękkie fałdy dzięki systemowi tuneli z pręcikami.',
            'Ogromny wybór tkanin: transparentne, przyciemniające, blackout, struktury i wzory.',
            'Łatwe w utrzymaniu – tkaninę zdejmiesz z rzepu; pranie delikatne 30°C (po wyjęciu pręcików).',
            'Montaż do ściany, sufitu lub we wnęce; możliwy montaż na skrzydle okna.',
            'Profesjonalny pomiar i montaż w Słupsku i okolicach — doradzimy kolor i stopień zaciemnienia.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Szycie na wymiar', Icon: IconRulerMeasure },
          { label: 'Setki tkanin', Icon: IconPalette },
          { label: 'Montaż ściana / sufit / wnęka', Icon: IconHome },
          { label: 'Opcja sterowania elektrycznego', Icon: IconPlug },
          { label: 'Bezpieczeństwo i serwis', Icon: IconShield },
          { label: 'Łatwe pranie', Icon: IconWash },
        ]}
      />

      <Note>
        Szukasz efektu pełnego zaciemnienia do sypialni? Polecimy odpowiednią tkaninę
        <strong> blackout </strong> albo podszewkę. Zorganizujemy pomiar i przywieziemy próbki na miejsce.
      </Note>
    </Block>
  );
}
