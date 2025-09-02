'use client';

import { motion } from 'framer-motion';
import { IconShield, IconHome, IconSparkles } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function RoletyDzienNoc() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Rolety dzień i noc</strong> (Vegas Profil) łączą dekoracyjny efekt „zebra”
        z wygodą pełnej regulacji światła. Aluminiowa kaseta montowana jest
        <em> zatrzaskowo</em> na przyklejanych adapterach – bez wiercenia w ramie.
        Przestrzenne prowadnice w kształcie „C” przyklejamy do listew przyszybowych,
        nie zabierając światła szyby i umożliwiając montaż na oknach z przewiązkami.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Pasy transparentne i zaciemniające – płynna kontrola prywatności i światła.',
            'Kaseta aluminiowa zdejmowana i zakładana wielokrotnie bez narzędzi (łatwe czyszczenie).',
            'Montaż na adapterach z taśmą – szybko i bez wiercenia w profilu okna.',
            'Prowadnice typu C przyklejane do listew – nie wchodzą w światło szyby.',
            'Mechanizm samohamujący – zatrzymasz roletę na dowolnej wysokości; szybka zmiana strony łańcuszka.',
            'Kolorystyka osprzętu: biały, brąz oraz okleiny drewnopodobne (mahoń, złoty dąb, dąb rustykalny, orzech, sosna).',
            'Wymiary maksymalne: szerokość do 250 cm, wysokość do 190 cm (zależnie od tkaniny).',
            'Profesjonalny pomiar i montaż w Słupsku i okolicach.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Kaseta aluminiowa', Icon: IconShield },
          { label: 'Montaż bez wiercenia', Icon: IconHome },
          { label: 'Pasy dzień / noc', Icon: IconSparkles },
        ]}
      />

      <Note>
        Szukasz rolet z nadrukiem zdjęcia lub grafiki? Zobacz <strong>Fotorolety</strong>.
        W systemie Dzień i Noc stosujemy tkaniny w pasy (transparentne + zaciemniające).
      </Note>
    </Block>
  );
}
