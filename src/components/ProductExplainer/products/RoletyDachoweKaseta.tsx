// src/components/products/RoletyDachoweKaseta.tsx
'use client';

import { motion } from 'framer-motion';
import { IconShield, IconHome, IconSparkles } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp } from '../ui';

export default function RoletyDachoweKaseta() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Rolety dachowe w kasecie</strong> to wygodne i estetyczne rozwiązanie do okien
        połaciowych z drewna i PVC. Płaska kaseta oraz boczne prowadnice ograniczają przenikanie
        światła do minimum, a <em>samohamujący mechanizm</em> pozwala zatrzymać roletę na dowolnej
        wysokości. Zamknięta konstrukcja zapewnia płynne prowadzenie tkaniny także przy oknie
        uchylonym; roletą można sterować również <em>sztycą</em> w oknach wysoko położonych.
      </motion.p>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Kaseta + prowadnice: minimalne przenikanie światła i eleganczne wykończenie.',
            'Mechanizm samohamujący – precyzyjne ustawienie na dowolnej wysokości.',
            'Płynna praca tkaniny także przy uchylonym skrzydle.',
            'Łączenie ultradźwiękowe prowadników z tkaniną – materiał nie wypada z prowadnic.',
            'Sterowanie sztycą – wygodne użytkowanie przy wysokim montażu.',
            'Maks. szerokość: 110 cm • Maks. wysokość: 150 cm.',
            'Duży wybór tkanin (od dekoracyjnych po zaciemniające) i detali wykończeniowych.',
            'Profesjonalny pomiar i montaż w Słupsku i okolicach.',
          ]}
        />
      </div>

      <Chips
        items={[
          { label: 'Kaseta + prowadnice', Icon: IconShield },
          { label: 'Do okien dachowych (PVC/drewno)', Icon: IconHome },
          { label: 'Mechanizm samohamujący', Icon: IconSparkles },
        ]}
      />

      <Note>
        Szukasz prostszego i tańszego rozwiązania? Zobacz także <strong>Rolety dachowe wolnowiszące</strong> –
        idealne, gdy nie potrzebujesz prowadnic i pełnej zabudowy.
      </Note>
    </Block>
  );
}
