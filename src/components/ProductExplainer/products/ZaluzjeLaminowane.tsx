// src/components/ProductExplainer/products/ZaluzjeLaminowane.tsx
'use client';

import { motion } from 'framer-motion';
import {
  IconPalette,
  IconRulerMeasure,
  IconHome,
  IconPlug,
  IconShield,
} from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function ZaluzjeLaminowane() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Żaluzje laminowane (25 mm, 50 mm)</strong> to elegancka i
        wyjątkowo trwała osłona okienna z <em>litego drewna</em> pokrytego
        dekoracyjnym laminatem. Szeroka paleta barw i struktur ułatwia
        dopasowanie lameli do mebli, podłóg czy stolarki – dzięki temu wnętrze
        zyskuje spójny, premium look i skuteczną kontrolę światła.
      </motion.p>

      <motion.p variants={fadeUp}>
        Rozwiązanie świetnie sprawdza się w salonach, sypialniach i biurach.
        Laminat zabezpiecza drewno przed codziennym użytkowaniem, a regulacja
        kąta nachylenia lameli pozwala precyzyjnie dozować prywatność i ilość
        promieni słonecznych. Montujemy i doradzamy <strong>w Słupsku i
        okolicach</strong> – od pomiaru po profesjonalny montaż.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Naturalne lamele z litego drewna, wzmocnione dekoracyjnym laminatem.',
            'Dwie szerokości do wyboru: 25 mm (okno) i 50 mm (wnęka/ściana/sufit).',
            'Montaż 25 mm: we wnęce, poza wnęką, do listew przyszybowych lub bezinwazyjnie na skrzydło.',
            'Montaż 50 mm: we wnęce, poza wnęką – do ściany lub sufitu.',
            'Opcje stylistyczne: taśmy dekoracyjne oraz wariant Retro.',
            'Możliwość linek bocznych przy oknach uchylnych – lamele trzymają się przy szybie.',
            'Wysoka trwałość i łatwość utrzymania w czystości.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Lamele 25 / 50 mm', Icon: IconRulerMeasure },
          { label: 'Duża paleta dekorów', Icon: IconPalette },
          { label: 'Montaż ściana / sufit / okno', Icon: IconHome },
          { label: 'Opcja Retro / taśmy', Icon: IconShield },
          { label: 'Sterowanie elektryczne', Icon: IconPlug },
        ]}
      />

      <Note>
        Szukasz efektu <em>wood look</em>, ale z inną fakturą? Sprawdź także
        nasze <strong>Żaluzje drewniane</strong> lub poproś o próbki
        kolorystyczne – przywieziemy je na pomiar.
      </Note>
    </Block>
  );
}
