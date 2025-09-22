// src/components/ProductExplainer/products/Markizy.tsx
'use client';

import { motion } from 'framer-motion';
import {
  IconSun,
  IconWind,
  IconRulerMeasure,
  IconPalette,
  IconCloudStorm,
  IconSettingsAutomation,
  IconShield,
  IconHome,
} from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from "../ui";

export default function MarkizyExplainer() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Markizy</strong> to komfortowy cień na tarasie i balkonie oraz realna
        ochrona przed nagrzewaniem wnętrz. Projektujemy i montujemy markizy na wymiar,
        dobierając konstrukcję, tkaninę i sterowanie do warunków wiatrowych i ekspozycji
        na słońce. Efekt? Przyjemna strefa odpoczynku i spójna estetyka domu.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Skuteczna bariera przed intensywnym słońcem – więcej cienia, niższa temperatura.',
            'Szeroki wybór tkanin: ~100 wzorów/kolorów, odporne i impregnowane.',
            'Konstrukcje aluminiowe: balkonowe, tarasowe, w kasecie / półkasecie, boczne, koszowe, markizolety i poręczowe.',
            'Wykonanie na wymiar – idealne dopasowanie do Twojej przestrzeni.',
            'Sterowanie ręczne lub elektryczne; automatyka pogodowa (wiatr/słońce) dla bezpieczeństwa i wygody.',
            'Profesjonalny montaż w Słupsku i na Pomorzu – doradzimy najlepszy system.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Ochrona przed słońcem', Icon: IconSun },
          { label: 'Na wymiar', Icon: IconRulerMeasure },
          { label: 'Paleta tkanin', Icon: IconPalette },
          { label: 'Automatyka pogodowa', Icon: IconCloudStorm },
          { label: 'Sterowanie elektryczne', Icon: IconSettingsAutomation },
          { label: 'Solidna konstrukcja', Icon: IconShield },
          { label: 'Montaż balkon/taras', Icon: IconHome },
          { label: 'Odporność na wiatr*', Icon: IconWind },
        ]}
      />

      <Note>
        * Dobór klasy odporności wiatrowej zależy od modelu, rozpiętości i miejsca montażu.
        Pomożemy dobrać bezpieczny zakres wysięgu oraz sterowanie (pilot, ścienny, czujniki).
      </Note>
    </Block>
  );
}
