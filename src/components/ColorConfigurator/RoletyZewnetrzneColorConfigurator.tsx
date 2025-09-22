// src/components/ColorConfigurator/RoletyZewnetrzneColorConfigurator.tsx
'use client';

import React from 'react';
import { motion, AnimatePresence, type Variants, cubicBezier } from 'framer-motion';
import RoletyZewnPreview from './RoletyZewnPreview';
import type { ColorOption } from '@/data/types';
import { pancerzOptions, boxGuideOptions } from '@/data/roletyZewnetrzneOptions';

const easeCB = cubicBezier(0.16, 1, 0.3, 1);
const fade: Variants = {
  hidden: { opacity: 0, y: 6 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeCB } },
  exit:   { opacity: 0, y: -6, transition: { duration: 0.28, ease: easeCB } },
};

type Props = {
  title?: string;
  subtitle?: string;
  disclaimerText?: string;
};

export default function RoletyZewnetrzneColorConfigurator({
  title = 'Konfigurator rolet zewnętrznych — pancerz i skrzynka',
  subtitle = 'Wybierz kolor pancerza (lameli) oraz kolor skrzynki i prowadnic',
  disclaimerText = 'Kolory/struktury na ekranie są poglądowe i mogą różnić się od rzeczywistych. Zapraszamy po próbki i konsultację.',
}: Props) {
  const [pancerz, setPancerz] = React.useState<ColorOption>(pancerzOptions[0]);
  const [box, setBox]         = React.useState<ColorOption>(boxGuideOptions[0]);

  const animateKey = `${pancerz.id}|${box.id}`;

  return (
    <section className="mt-10 space-y-8">
      {/* HEADER */}
      <motion.header
        variants={fade}
        initial="hidden"
        animate="show"
        className="relative overflow-hidden rounded-2xl bg-neutral-900 sm:bg-gradient-to-br from-neutral-900 via-neutral-800 to-blue-400 px-5 py-8 text-white md:px-8 md:py-10"
      >
        <span className="absolute left-6 top-0 h-10 w-[2px] bg-yellow-400 md:h-12" aria-hidden />
        <span className="absolute left-7 top-0 h-10 w-[2px] bg-red-400 md:h-12" aria-hidden />
        <span className="absolute left-8 top-0 h-10 w-[2px] bg-blue-400 md:h-12" aria-hidden />
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-white/70 md:text-base">{subtitle}</p>}
      </motion.header>

      {/* PREVIEW — MOBILE */}
      <div className="md:hidden">
        <div className="relative mx-auto mt-2 w-full max-w-[420px]" style={{ aspectRatio: '4 / 3' }}>
          <AnimatePresence mode="sync" initial={false}>
            <motion.div key={`m-${animateKey}`} variants={fade} initial="hidden" animate="show" exit="exit" className="absolute inset-0">
              <RoletyZewnPreview
                baseSrc="/mockups/rolety-zew/base.png"
                slatsMask="/mockups/rolety-zew/slats-mask.png"
                boxMask="/mockups/rolety-zew/box-mask.png"
                shadeSrc="/mockups/rolety-zew/shade.png"
                slatHex={pancerz.hex}
                slatTexture={pancerz.texture}
                boxHex={box.hex}
                boxTexture={box.texture}
                slatPitch={12}
                animateKey={animateKey}
                className="h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* PREVIEW — DESKTOP */}
      <div className="hidden md:flex md:items-center md:justify-center">
        <div className="relative w-full max-w-[560px]" style={{ aspectRatio: '4 / 3' }}>
          <AnimatePresence mode="sync" initial={false}>
            <motion.div key={`d-${animateKey}`} variants={fade} initial="hidden" animate="show" exit="exit" className="absolute inset-0">
              <RoletyZewnPreview
                baseSrc="/mockups/rolety-zew/base.png"
                slatsMask="/mockups/rolety-zew/slats-mask.png"
                boxMask="/mockups/rolety-zew/box-mask.png"
                shadeSrc="/mockups/rolety-zew/shade.png"
                slatHex={pancerz.hex}
                slatTexture={pancerz.texture}
                boxHex={box.hex}
                boxTexture={box.texture}
                slatPitch={12}
                animateKey={animateKey}
                className="h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* PALETA: PANCERZ */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-center text-base font-semibold text-neutral-900">Kolor pancerza (lameli)</h3>

        {/* Desktop ribbon */}
        <div className="hidden w-full md:block">
          <div className="mx-auto max-w-5xl overflow-x-auto">
            <div className="flex justify-center">
              <div className="inline-flex whitespace-nowrap gap-[6px] px-2 py-1">
                {pancerzOptions.map((opt) => {
                  const selected = pancerz.id === opt.id;
                  const style = opt.texture
                    ? { backgroundImage: `url(${opt.texture})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : { backgroundColor: opt.hex ?? '#b8bcc3' };
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setPancerz(opt)}
                      className={`h-8 w-8 rounded-[6px] ring-2 transition ${
                        selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                      }`}
                      style={style}
                      title={opt.name}
                      aria-pressed={selected}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile grid */}
        <div className="grid grid-cols-10 gap-2 md:hidden">
          {pancerzOptions.map((opt) => {
            const selected = pancerz.id === opt.id;
            const style = opt.texture
              ? { backgroundImage: `url(${opt.texture})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              : { backgroundColor: opt.hex ?? '#b8bcc3' };
            return (
              <button
                key={opt.id}
                onClick={() => setPancerz(opt)}
                className={`h-7 w-7 rounded-[4px] ring-2 transition ${
                  selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                }`}
                style={style}
                title={opt.name}
                aria-pressed={selected}
              />
            );
          })}
        </div>
      </div>

      {/* PALETA: SKRZYNKA + PROWADNICE */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-center text-base font-semibold text-neutral-900">Kolor skrzynki i prowadnic</h3>

        {/* Desktop ribbon */}
        <div className="hidden w-full md:block">
          <div className="mx-auto max-w-5xl overflow-x-auto">
            <div className="flex justify-center">
              <div className="inline-flex whitespace-nowrap gap-[6px] px-2 py-1">
                {boxGuideOptions.map((opt) => {
                  const selected = box.id === opt.id;
                  const style = opt.texture
                    ? { backgroundImage: `url(${opt.texture})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : { backgroundColor: opt.hex ?? '#c7c9cc' };
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setBox(opt)}
                      className={`h-8 w-8 rounded-[6px] ring-2 transition ${
                        selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                      }`}
                      style={style}
                      title={opt.name}
                      aria-pressed={selected}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile grid */}
        <div className="grid grid-cols-10 gap-2 md:hidden">
          {boxGuideOptions.map((opt) => {
            const selected = box.id === opt.id;
            const style = opt.texture
              ? { backgroundImage: `url(${opt.texture})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              : { backgroundColor: opt.hex ?? '#c7c9cc' };
            return (
              <button
                key={opt.id}
                onClick={() => setBox(opt)}
                className={`h-7 w-7 rounded-[4px] ring-2 transition ${
                  selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                }`}
                style={style}
                title={opt.name}
                aria-pressed={selected}
              />
            );
          })}
        </div>
      </div>

      {/* DISCLAIMER */}
      <motion.p
        variants={fade}
        initial="hidden"
        animate="show"
        className="mx-auto mt-2 max-w-2xl text-[10px] leading-relaxed text-neutral-500 sm:text-center sm:text-xs"
      >
        {disclaimerText}
      </motion.p>
    </section>
  );
}
