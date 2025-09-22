// src/components/ColorConfigurator/RoletyZewnetrzneColorConfigurator.tsx
'use client';

import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import RoletyZewnPreview from './RoletyZewnPreview';
import { cassetteZewnColors, lamellaZewnColors } from '@/data/roletyZewnColors';
import type { ColorOption } from '@/data/plisyOptions';

const fade: Variants = {
  hidden: { opacity: 0, y: 6 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit:   { opacity: 0, y: -6, transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } },
};

const MOCKUP = {
  base:           '/mockups/rolety-zewn/base.png',
  lamellaMask:    '/mockups/rolety-zewn/mask-lamela.png',
  cassetteMask:   '/mockups/rolety-zewn/mask-cassette.png',
  mosquitoMask:   '/mockups/rolety-zewn/moskitiera.png', // solo per “z moskitierą”
  shade:          '/mockups/rolety-zewn/shad.png',
} as const;

function textColorForBg(hex?: string) {
  const c = (hex ?? '#000000').replace('#', '');
  const r = parseInt(c.slice(0,2),16)||0, g = parseInt(c.slice(2,4),16)||0, b = parseInt(c.slice(4,6),16)||0;
  const lum = (0.2126*r + 0.7152*g + 0.0722*b) / 255;
  return lum > 0.6 ? 'text-neutral-900' : 'text-white';
}

type Props = {
  title?: string;
  subtitle?: string;
  disclaimerText?: string;
  withMosquito?: boolean; // <— attiva l’overlay moskitiera
};

export default function RoletyZewnetrzneColorConfigurator({
  title = 'Kolorystyka rolet zewnętrznych',
  subtitle = 'Wybierz kolor skrzynki/prowadnic i lameli',
  disclaimerText = 'Uwaga: kolory widoczne na ekranie mogą różnić się od rzeczywistych w zależności od ustawień ekranu. Zapraszamy po próbki.',
  withMosquito = false,
}: Props) {

  const [cassette, setCassette] = React.useState<ColorOption>(cassetteZewnColors[0]);
  const [lamella,  setLamella]  = React.useState<ColorOption>(lamellaZewnColors[0]);

  const key = `${cassette.id}-${lamella.id}-${withMosquito ? 'm' : 's'}`;

  // sfondi per i riquadri grandi
  const cassetteBg: React.CSSProperties = cassette.texture
    ? { backgroundImage: `url(${cassette.texture})`, backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundColor: cassette.hex ?? '#9aa0a6' }
    : { backgroundColor: cassette.hex ?? '#9aa0a6' };

  const lamellaBg: React.CSSProperties = lamella.texture
    ? { backgroundImage: `url(${lamella.texture})`, backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundColor: lamella.hex ?? '#9aa0a6' }
    : { backgroundColor: lamella.hex ?? '#9aa0a6' };

  return (
    <section className="mt-10 space-y-8">
      {/* Header */}
      <motion.header variants={fade} initial="hidden" animate="show"
        className="relative overflow-hidden rounded-2xl bg-neutral-900 sm:bg-gradient-to-br from-neutral-900 via-neutral-800 to-blue-400 px-5 py-8 text-white md:px-8 md:py-10">
        <span className="absolute left-6 top-0 h-10 w-[2px] bg-yellow-400 md:h-12" aria-hidden />
        <span className="absolute left-7 top-0 h-10 w-[2px] bg-red-400 md:h-12" aria-hidden />
        <span className="absolute left-8 top-0 h-10 w-[2px] bg-blue-400 md:h-12" aria-hidden />
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-white/70 md:text-base">{subtitle}</p>}
      </motion.header>

      {/* Mobile preview */}
      <div className="md:hidden">
        <div className="relative mx-auto mt-2 w-full max-w-[420px]" style={{ aspectRatio: '4 / 3' }}>
          <AnimatePresence mode="sync" initial={false}>
            <motion.div key={key + '-m'} variants={fade} initial="hidden" animate="show" exit="exit" className="absolute inset-0">
              <RoletyZewnPreview
                baseSrc={MOCKUP.base}
                lamellaMask={MOCKUP.lamellaMask}
                cassetteMask={MOCKUP.cassetteMask}
                mosquitoMask={withMosquito ? MOCKUP.mosquitoMask : undefined}
                shadeSrc={MOCKUP.shade}
                lamellaHex={lamella.hex}
                lamellaTexture={lamella.texture}
                cassetteHex={cassette.hex}
                cassetteTexture={cassette.texture}
                showMosquito={withMosquito}
                className="h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop preview */}
      <div className="hidden md:flex md:items-center md:justify-center">
        <div className="relative w-full max-w-[560px]" style={{ aspectRatio: '4 / 3' }}>
          <AnimatePresence mode="sync" initial={false}>
            <motion.div key={key + '-d'} variants={fade} initial="hidden" animate="show" exit="exit" className="absolute inset-0">
              <RoletyZewnPreview
                baseSrc={MOCKUP.base}
                lamellaMask={MOCKUP.lamellaMask}
                cassetteMask={MOCKUP.cassetteMask}
                mosquitoMask={withMosquito ? MOCKUP.mosquitoMask : undefined}
                shadeSrc={MOCKUP.shade}
                lamellaHex={lamella.hex}
                lamellaTexture={lamella.texture}
                cassetteHex={cassette.hex}
                cassetteTexture={cassette.texture}
                showMosquito={withMosquito}
                className="h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* KOLORY — skrzynka/prowadnice */}
      <div className="flex flex-col gap-3 ">
        <h3 className="text-base font-semibold text-center text-neutral-900">Kolor skrzynki i prowadnic</h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {cassetteZewnColors.map((c) => {
            const selected = cassette.id === c.id;
            const style: React.CSSProperties = c.texture
              ? { backgroundImage: `url(${c.texture})`, backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundColor: c.hex ?? '#9aa0a6' }
              : { backgroundColor: c.hex ?? '#9aa0a6' };
            return (
              <button
                key={c.id}
                onClick={() => setCassette(c)}
                className={`h-14 w-14 rounded-lg border border-neutral-200 ring-2 transition ${
                  selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                }`}
                style={style}
                title={c.name}
                aria-pressed={selected}
              />
            );
          })}
        </div>
      </div>

      {/* KOLORY — lamela (tantissimi): ribbon a bastoncini + griglia mobile */}
      <div className="flex flex-col gap-3">
        <h3 className="text-base font-semibold text-center text-neutral-900">Kolor lameli</h3>

        {/* Desktop ribbon */}
        <div className="mx-auto relative hidden overflow-x-auto rounded-md p-2 md:block">
          <div className="flex h-8 min-w-max items-center gap-[2px]">
            {lamellaZewnColors.map((c) => {
              const selected = lamella.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setLamella(c)}
                  className={`h-10 w-2 rounded-[2px] ring-2 ring-offset-1 transition ${
                    selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                  }`}
                  style={{ backgroundColor: c.hex ?? '#9aa0a6' }}
                  title={c.name}
                  aria-pressed={selected}
                />
              );
            })}
          </div>
        </div>

        {/* Mobile grid */}
        <div className="grid grid-cols-12 gap-2  md:hidden px-2">
          {lamellaZewnColors.map((c) => {
            const selected = lamella.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setLamella(c)}
                className={`h-7 w-7 rounded-[4px] ring-2 transition ${
                  selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                }`}
                style={{ backgroundColor: c.hex ?? '#9aa0a6' }}
                title={c.name}
                aria-pressed={selected}
              />
            );
          })}
        </div>
      </div>

      {/* Riquadri grandi selezionati */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="relative h-40 overflow-hidden rounded-md ring-1 ring-neutral-200 md:h-52">
          <div className="absolute inset-0" style={lamellaBg} />
          <div className={`relative z-10 flex h-full items-center justify-center px-3 text-center ${textColorForBg(lamella.hex)}`}>
            <div>
              <p className="text-base md:text-lg opacity-90">Wybrany kolor lameli:</p>
              <p className="mt-1 text-xl font-semibold md:text-2xl">{lamella.name}</p>
            </div>
          </div>
        </div>

        <div className="relative h-40 overflow-hidden rounded-md ring-1 ring-neutral-200 md:h-52">
          <div className="absolute inset-0" style={cassetteBg} />
          <div className={`relative z-10 flex h-full items-center justify-center px-3 text-center ${textColorForBg(cassette.hex)}`}>
            <div>
              <p className="text-base md:text-lg opacity-90">Wybrany kolor skrzynki i prowadnic:</p>
              <p className="mt-1 text-xl font-semibold md:text-2xl">{cassette.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <motion.p variants={fade} initial="hidden" animate="show"
        className="mx-auto mt-2 max-w-2xl text-[10px] leading-relaxed text-neutral-500 sm:text-center sm:text-xs">
        {disclaimerText}
      </motion.p>
    </section>
  );
}
