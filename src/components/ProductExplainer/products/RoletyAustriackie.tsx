// src/components/products/RoletyAustriackie.tsx
'use client';

import { motion } from 'framer-motion';
import { IconPalette, IconRulerMeasure, IconHome, IconPlug, IconShield, IconSparkles } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function RoletyAustriackie() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Rolety austriackie</strong> wprowadzają do wnętrza romantyczny, miękki charakter.
        Zmarszczona tkanina na specjalnej taśmie podczas podnoszenia układa się w dekoracyjne bufki
        lub półkoliste fale. To świetny wybór do salonu, jadalni i stylowych wnętrz
        w estetyce klasycznej, modern classic czy glamour.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Efektowne marszczenia – przy podnoszeniu tworzą dekoracyjne bufki/półkule.',
            'Szyte na wymiar – idealne dopasowanie do okna i charakteru wnętrza.',
            'Bogata kolekcja tkanin: woale, tafty, mieszanki; od lekko transparentnych po mocniej zacieniające.',
            'Prosty montaż do ściany, sufitu lub we wnęce; możliwy montaż na ramie okna.',
            'Łatwy demontaż do czyszczenia; konserwacja bez problemu.',
            'Pomiar i montaż w Słupsku i okolicy — doradzimy materiał i wykończenie (lamówki, taśmy).',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Szycie na wymiar', Icon: IconRulerMeasure },
          { label: 'Eleganckie marszczenia', Icon: IconSparkles },
          { label: 'Montaż ściana / sufit / wnęka', Icon: IconHome },
          { label: 'Opcje tkanin i podszewki', Icon: IconPalette },
          { label: 'Sterowanie łańcuszkowe / elektryczne', Icon: IconPlug },
          { label: 'Gwarancja i serwis', Icon: IconShield },
        ]}
      />

      <Note>
        Chcesz połączyć austriacki urok z praktycznym przyciemnieniem? Dobierzemy tkaninę lub podszewkę,
        aby uzyskać oczekiwany efekt światła i prywatności.
      </Note>
    </Block>
  );
}
