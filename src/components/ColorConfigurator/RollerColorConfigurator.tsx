// src/components/ColorConfigurator/RollerColorConfigurator.tsx
'use client';

import React from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import RollerBlindPreview from './RollerBlindPreview';
import {
  cassetteColors,
  featuredCassetteColors,
  fabricColors,
  type ColorOption,
  type CassetteColorOption,
} from '@/data/rollerColors';

function textColorForBg(hex: string) {
  const c = hex?.replace('#', '') ?? '000000';
  const r = parseInt(c.substring(0, 2), 16) || 0;
  const g = parseInt(c.substring(2, 4), 16) || 0;
  const b = parseInt(c.substring(4, 6), 16) || 0;
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return lum > 0.6 ? 'text-neutral-900' : 'text-white';
}

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } },
};

export default function RollerColorConfigurator({
  title = 'Kolorystyka rolet materiałowych',
  subtitle = 'Wybierz kolor, który pasuje do Ciebie',
}: {
  title?: string;
  subtitle?: string;
}) {
  const [cassette, setCassette] = React.useState<CassetteColorOption>(
    featuredCassetteColors[0] ?? cassetteColors[0],
  );
  const [fabric, setFabric] = React.useState<ColorOption>(fabricColors[0]);

  const cassetteBgStyle: React.CSSProperties = cassette.texture
    ? {
        backgroundImage: `url(${cassette.texture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : { backgroundColor: cassette.hex ?? '#9aa0a6' };

  return (
    <section className="mt-10 space-y-8">
      {/* HEADER */}
      <motion.header
        variants={fadeVariants}
        initial="hidden"
        animate="show"
        className="relative overflow-hidden rounded-2xl bg-neutral-900 px-5 py-8 text-white md:px-8 md:py-10"
      >
        <span className="absolute left-6 top-0 h-10 w-[2px] bg-yellow-400 md:h-12" aria-hidden />
        <span className="absolute left-7 top-0 h-10 w-[2px] bg-red-400 md:h-12" aria-hidden />
        <span className="absolute left-8 top-0 h-10 w-[2px] bg-blue-400 md:h-12" aria-hidden />
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-sm text-white/70 md:text-base">{subtitle}</p>}
      </motion.header>

      {/* ✅ MOBILE PREVIEW: subito sotto l’header */}
      <div className="md:hidden">
        <div className="relative mx-auto mt-2 w-full max-w-[420px]" style={{ aspectRatio: '300 / 320' }}>
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={`${cassette.id}-${fabric.id}-m`}
              variants={fadeVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute inset-0"
            >
              <RollerBlindPreview
                cassetteHex={cassette.hex}
                cassetteTexture={cassette.texture}
                fabricHex={fabric.hex ?? '#9aa0a6'}
                className="h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* KASETA + PROWADNICE */}
      <div className="flex flex-col gap-3">
        <h3 className="text-base font-semibold text-neutral-900">
          Kolor skrzynki i prowadnic rolet
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          {featuredCassetteColors.map((c) => {
            const selected = cassette.id === c.id;
            return (
              <motion.button
                whileTap={{ scale: 0.96 }}
                key={c.id}
                onClick={() => setCassette(c)}
                className={`h-14 w-14 rounded-lg border-2 border-neutral-200 ring-2 transition ${
                  selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                }`}
                style={
                  c.texture
                    ? {
                        backgroundImage: `url(${c.texture})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : { backgroundColor: c.hex ?? '#9aa0a6' }
                }
                title={`${c.name}${c.code ? ` • ${c.code}` : ''}`}
                aria-pressed={selected}
              />
            );
          })}
        </div>
      </div>

      {/* TKANINA – desktop: barra; mobile: griglia */}
      <div className="flex flex-col gap-3">
        <h3 className="text-base font-semibold text-neutral-900">
          Kolor tkaniny rolety (materiał)
        </h3>

        {/* Desktop (md+): barra strisce */}
        <div className="relative hidden overflow-x-auto rounded-md p-2 md:block">
          <div className="flex h-8 min-w-max items-center gap-[2px]">
            {fabricColors.map((c) => {
              const selected = fabric.id === c.id;
              return (
                <motion.button
                  whileTap={{ scale: 0.92 }}
                  key={c.id}
                  onClick={() => setFabric(c)}
                  className={`h-10 w-2 rounded-[2px] ring-2 ring-offset-1 transition ${
                    selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                  }`}
                  style={{ backgroundColor: c.hex ?? '#9aa0a6' }}
                  title={`${c.name}${c.code ? ` • ${c.code}` : ''}`}
                  aria-pressed={selected}
                />
              );
            })}
          </div>
        </div>

        {/* Mobile (<md): griglia come screenshot 2 */}
        <div className="grid grid-cols-10 gap-2 md:hidden">
          {fabricColors.map((c) => {
            const selected = fabric.id === c.id;
            return (
              <motion.button
                whileTap={{ scale: 0.94 }}
                key={c.id}
                onClick={() => setFabric(c)}
                className={`h-7 w-7 rounded-[4px] ring-2 transition ${
                  selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                }`}
                style={{ backgroundColor: c.hex ?? '#9aa0a6' }}
                title={`${c.name}${c.code ? ` • ${c.code}` : ''}`}
                aria-pressed={selected}
              />
            );
          })}
        </div>
      </div>

      {/* PREVIEW + PANNELLI (desktop) */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* 🔒 Desktop-only preview */}
        <div className="hidden items-center justify-center md:col-span-1 md:flex">
          <div className="relative w-full max-w-[340px]" style={{ aspectRatio: '300 / 320' }}>
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={`${cassette.id}-${fabric.id}-d`}
                variants={fadeVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute inset-0"
              >
                <RollerBlindPreview
                  cassetteHex={cassette.hex}
                  cassetteTexture={cassette.texture}
                  fabricHex={fabric.hex ?? '#9aa0a6'}
                  className="h-full w-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pannelli info */}
        <div className="md:col-span-2 grid gap-4 md:grid-cols-2">
          {/* TKANINA */}
          <div className="relative h-36 overflow-hidden rounded-md shadow-sm ring-1 ring-neutral-200">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={fabric.id}
                variants={fadeVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute inset-0"
                style={{ backgroundColor: fabric.hex ?? '#9aa0a6' }}
              />
            </AnimatePresence>
            <div
              className={`relative z-10 flex h-full flex-col items-center justify-center ${textColorForBg(
                fabric.hex ?? '#9aa0a6',
              )}`}
            >
              <p className="text-sm opacity-90">Wybierz kolor tkaniny</p>
              <p className="text-lg font-semibold">{fabric.name}</p>
            </div>
          </div>

          {/* KASETA/PROWADNICE */}
          <div className="relative h-36 overflow-hidden rounded-md shadow-sm ring-1 ring-neutral-200">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={cassette.id}
                variants={fadeVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute inset-0"
                style={cassetteBgStyle}
              />
            </AnimatePresence>
            <div
              className={`relative z-10 flex h-full flex-col items-center justify-center ${
                cassette.textClass ?? 'text-white'
              }`}
            >
              <p className="text-sm opacity-90">Wybierz kolor skrzynki i prowadnic</p>
              <p className="text-lg font-semibold">{cassette.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
