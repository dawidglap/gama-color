// src/components/products/ZaluzjePoziome.tsx
'use client';

import { motion } from 'framer-motion';
import { IconShield, IconHome, IconSparkles } from '@tabler/icons-react';
import { Block, Bullets, Chips, Note, fadeUp, stagger } from '../ui';

export default function ZaluzjePoziome() {
  return (
    <Block>
      <motion.p variants={fadeUp}>
        <strong>Żaluzje poziome</strong> to sprawdzony i wciąż bardzo popularny system
        osłonowy. Umożliwiają precyzyjną regulację kąta padania światła bez konieczności
        całkowitego podnoszenia osłony. Oferujemy lamele aluminiowe i drewnopodobne
        o szerokościach <em>16 mm, 25 mm oraz 50 mm</em>. Sterowanie odbywa się
        za pomocą pokrętła, a mechanizm z blokadą pozwala zatrzymać żaluzję
        na dowolnej wysokości.
      </motion.p>

      <motion.div variants={stagger} className="space-y-4">
        <h3 className="text-lg font-semibold text-neutral-900">Dlaczego warto</h3>
        <Bullets
          points={[
            'Precyzyjna regulacja światła i prywatności — bez konieczności podnoszenia żaluzji.',
            'Ochrona wnętrza przed nagrzewaniem i promieniami UV.',
            'Lamele aluminiowe 16/25/50 mm; wariant 50 mm także do dużych przeszkleń (montaż do ściany lub sufitu).',
            'Możliwy montaż bezinwazyjny na ramie okna lub na listwie przyszybowej (zaczepy/wkręty).',
            'Opcjonalne prowadzenie żyłkowe albo dolne zaczepy — stabilna praca przy oknie uchylnym.',
            'Szeroka kolekcja kolorów, w tym okleiny drewnopodobne i dekor dopasowany do wystroju.',
            'Wysoka jakość komponentów = długie i bezproblemowe użytkowanie.',
          ]}
        />
      </motion.div>

      <Chips
        items={[
          { label: 'Lamele 16 / 25 / 50 mm', Icon: IconShield },
          { label: 'Montaż: bezinwazyjny / listwa / sufit', Icon: IconHome },
          { label: 'Prowadzenie żyłkowe opcjonalnie', Icon: IconSparkles },
        ]}
      />

      <Note>
        Szukasz efektu naturalnego drewna? Polecamy żaluzje <strong>drewnopodobne</strong> oraz
        dopasowane kolorystycznie detale: maskownicę, obciążnik sznurka, pokrętło i listwę dolną.
        Zapewniamy pomiar, doradztwo i montaż w Słupsku i okolicach.
      </Note>
    </Block>
  );
}
