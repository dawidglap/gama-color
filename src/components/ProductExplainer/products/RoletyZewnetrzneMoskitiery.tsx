// src/components/ProductExplainer/products/RoletyZewnetrzneMoskitiery.tsx
'use client';

import { motion } from 'framer-motion';
import {
  IconBug,
  IconRulerMeasure,
  IconHome,
  IconShield,
  IconChevronDown,
  IconPalette,
  IconPlug,
  IconSun,
  IconSnowflake,
} from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function RoletyZewnetrzneMoskitiery() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Roleta standard z moskitierą</strong> łączy zalety rolet zewnętrznych
        z wygodą wbudowanej moskitiery. Siatka z włókna szklanego chowa się do kasety,
        a mechanizm sprężynowy zapewnia lekką, intuicyjną obsługę. Efekt: świeże powietrze
        bez owadów, bez rezygnowania z ochrony termicznej i akustycznej.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Moskitiera zintegrowana w obudowie — zawsze pod ręką, niewidoczna po złożeniu.',
            'Mechanizm sprężynowy i wygodne ryglowanie — szybkie rozwijanie i zwijanie.',
            'Trwała siatka z włókna szklanego, odporna na warunki pogodowe.',
            'Pancerz aluminiowy PA39/PA45; wzmocniona listwa dolna 55 mm.',
            'Skrzynki 137/165/205 mm; kolory standard, drewnopodobne i RAL.',
            'Możliwość sterowania elektrycznego roletą.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Stop owadom', Icon: IconBug },
          { label: 'Kaseta moskitiery', Icon: IconChevronDown },
          { label: 'Na wymiar', Icon: IconRulerMeasure },
          { label: 'Mur / wnęka', Icon: IconHome },
          { label: 'Kolory & RAL', Icon: IconPalette },
          { label: 'Elektryka (opcjonalnie)', Icon: IconPlug },
          { label: 'Termika', Icon: IconSnowflake },
          { label: 'Ochrona słońce', Icon: IconSun },
          { label: 'Trwałość', Icon: IconShield },
        ]}
      />

      <Note>
        Pokażemy próbki siatek i profili na miejscu. <strong>Pomiar w Słupsku i okolicy</strong> —
        dobierzemy skrzynkę, kolor i wariant pancerza do Twojej stolarki i elewacji.
      </Note>
    </Block>
  );
}
