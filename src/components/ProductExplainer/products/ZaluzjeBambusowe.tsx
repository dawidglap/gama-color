// src/components/ProductExplainer/products/ZaluzjeBambusowe.tsx
'use client';

import { motion } from 'framer-motion';
import { IconLeaf, IconHome, IconDroplet, IconSparkles } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function ZaluzjeBambusowe() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Żaluzje bambusowe</strong> to elegancka osłona okienna z naturalnego surowca.
        Lekkie lamele z bambusa nadają wnętrzom przytulny, ciepły charakter, a dzięki
        <em> wysokiej odporności na wilgoć</em> świetnie sprawdzają się także w kuchni czy łazience.
        Dostępne szerokości lamel to <strong>25&nbsp;mm</strong> oraz <strong>50&nbsp;mm</strong> —
        możesz wybrać drabinki sznurkowe lub taśmy.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Naturalny bambus – ponadczasowa estetyka i lekkość we wnętrzu.',
            'Wyższa odporność na wilgoć niż w żaluzjach drewnianych – dobre do kuchni i łazienek.',
            'Dwie szerokości lamel: 25 mm (okno) i 50 mm (wnęka/na mur) – możliwość taśm tekstylnych.',
            'Precyzyjna regulacja światła bez konieczności całkowitego podnoszenia żaluzji.',
            'Montaż: w świetle okna, do ściany lub sufitu – także bezinwazyjnie na skrzydło.',
            'Opcjonalne prowadzenie boczne w oknach uchylnych – lamele trzymają linię przy otwieraniu.',
            'Profesjonalny pomiar i montaż w Słupsku i okolicach – doradzimy na miejscu.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Bambus naturalny', Icon: IconLeaf },
          { label: 'Lamele 25/50 mm', Icon: IconSparkles },
          { label: 'Odporne na wilgoć', Icon: IconDroplet },
          { label: 'Montaż okno/ściana/sufit', Icon: IconHome },
        ]}
      />

      <Note>
        Szukasz konkretnego odcienia lub struktury? Skorzystaj z naszego
        <strong> konfiguratora kolorów</strong> i wybierz wykończenie lamel. Na życzenie przygotujemy
        próbki i dobierzemy rozwiązanie pod Twoje wnętrze.
      </Note>
    </Block>
  );
}
