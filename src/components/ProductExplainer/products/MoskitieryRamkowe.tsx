// src/components/ProductExplainer/products/MoskitieryRamkowe.tsx
'use client';

import { motion } from 'framer-motion';
import { IconHome, IconShield, IconRulerMeasure, IconDroplet, IconPalette } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function MoskitieryRamkowe() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Moskitiery ramkowe (okienne)</strong> to najprostsze i najczęściej wybierane
        rozwiązanie do ochrony przed owadami. Montowane bezinwazyjnie na ramie okna,
        tworzą szczelną barierę dzięki specjalnie wyprofilowanej płetwie uszczelniającej.
        Lekkie, trwałe i łatwe w demontażu — idealne na sezon od wiosny do jesieni.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Indywidualny wymiar – dopasowanie do każdego okna.',
            'Stabilna aluminiowa rama odporna na warunki atmosferyczne.',
            'Montaż bez wiercenia – szybkie zakładanie i zdejmowanie.',
            'Profil uszczelniający utrudnia insektom przedostanie się do wnętrza.',
            'Dostępne kolory: biały, brązowy, drewnopodobny.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Montaż bezinwazyjny', Icon: IconHome },
          { label: 'Stabilna rama', Icon: IconShield },
          { label: 'Na wymiar', Icon: IconRulerMeasure },
          { label: 'Odporne na pogodę', Icon: IconDroplet },
          { label: 'Kolory do stolarki', Icon: IconPalette },
        ]}
      />

      <Note>
        Montujemy <strong>moskitiery ramkowe w Słupsku i okolicach</strong>. 
        Przywieziemy próbki profili i siatek, dobierzemy kolor pasujący do Twojej stolarki.
      </Note>
    </Block>
  );
}
