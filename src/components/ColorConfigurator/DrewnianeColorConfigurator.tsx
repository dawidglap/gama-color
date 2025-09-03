'use client';

import React from 'react';
import { motion, AnimatePresence, cubicBezier, type Variants } from 'framer-motion';
import DrewnianeSlatsPreview from '../ColorConfigurator/DrewnianeSlatsPreview';
import { woodSlatOptions, type WoodSlatOption } from '../../data/drewnianeSlats';

const easeCB = cubicBezier(0.16, 1, 0.3, 1);
const fade: Variants = {
  hidden: { opacity: 0, y: 6 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeCB } },
  exit:   { opacity: 0, y: -6, transition: { duration: 0.28, ease: easeCB } },
};

export default function DrewnianeColorConfigurator({
  title = 'Kolorystyka żaluzji drewnianych',
  subtitle = 'Wybierz wybarwienie lameli z naturalnym rysunkiem drewna',
  disclaimerText = 'Kolory/struktury na ekranie są poglądowe i mogą różnić się od rzeczywistych. Skontaktuj się z nami po próbki.',
}: { title?: string; subtitle?: string; disclaimerText?: string }) {
  const [slats, setSlats] = React.useState<WoodSlatOption>(woodSlatOptions[0]);

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

      {/* MOBILE PREVIEW */}
      <div className="md:hidden">
        <div className="relative mx-auto mt-2 w-full max-w-[420px]" style={{ aspectRatio: '4 / 3' }}>
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={slats.id + '-m'}
              variants={fade}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute inset-0"
            >
              <DrewnianeSlatsPreview
                slatTexture={slats.texture}
                animateKey={slats.id}
                className="h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* DESKTOP PREVIEW (centrato) */}
      <div className="hidden md:flex md:items-center md:justify-center">
        <div className="relative w-full max-w-[560px]" style={{ aspectRatio: '4 / 3' }}>
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={slats.id + '-d'}
              variants={fade}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute inset-0"
            >
              <DrewnianeSlatsPreview
                slatTexture={slats.texture}
                animateKey={slats.id}
                className="h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* PALETTE LAMELI */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-center text-base font-semibold text-neutral-900">
          Lamele drewniane (tekstury)
        </h3>

        {/* DESKTOP: ribbon a listelli stretti (sotto alla finestra) */}
        <div className="hidden w-full md:block">
          <div className="mx-auto max-w-5xl overflow-x-auto">
            <div className="flex justify-center">
              <div className="inline-flex gap-[2px] whitespace-nowrap px-2 py-1">
                {woodSlatOptions.map((c) => {
                  const selected = slats.id === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSlats(c)}
                      className={`h-8 w-[12px] rounded-[2px] ring-2 transition ${
                        selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                      }`}
                      style={{
                        backgroundImage: `url(${c.texture})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      title={c.name}
                      aria-pressed={selected}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: griglia compatta */}
        <div className="grid grid-cols-10 gap-2 md:hidden">
          {woodSlatOptions.map((c) => {
            const selected = slats.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSlats(c)}
                className={`h-7 w-7 rounded-[4px] ring-2 transition ${
                  selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                }`}
                style={{
                  backgroundImage: `url(${c.texture})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                title={c.name}
                aria-pressed={selected}
              />
            );
          })}
        </div>

       {/* pannello grande campione texture — con etichetta sopra */}
<div
  className="relative mt-4 w-full max-w-3xl overflow-hidden rounded-md ring-1 ring-neutral-200"
  style={{ height: '7rem' }} // ~112px; regola se vuoi
  aria-label={`Podgląd tekstury: ${slats.name}`}
>
  {/* background della texture */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${slats.texture})` }}
  />

  {/* etichetta centrata sopra la texture */}
  <div className="absolute inset-0 grid place-items-center">
    <span
      className={[
        'px-3 text-base font-semibold md:text-lg',
        slats.textClass ?? 'text-white',
      ].join(' ')}
      style={{
        // ombra del testo: più marcata se il testo è bianco
        textShadow:
          (slats.textClass ?? 'text-white') === 'text-white'
            ? '0 1px 2px rgba(0,0,0,.55)'
            : '0 1px 1px rgba(255,255,255,.6)',
      }}
    >
      {slats.name}
    </span>
  </div>
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
