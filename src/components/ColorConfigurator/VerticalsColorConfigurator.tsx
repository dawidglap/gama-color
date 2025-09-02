'use client';

import React from 'react';
import { motion, AnimatePresence, cubicBezier, type Variants } from 'framer-motion';

import BlindsSlatsVerticalPreview from './BlindsSlatsVerticalPreview';
import {
  ZALUZJE_VERTICALI,
  type VerticalGroup,
  type VerticalOption,
} from '@/data/zaluzjeVerticali';

const easeCB = cubicBezier(0.16, 1, 0.3, 1);
const fade: Variants = {
  hidden: { opacity: 0, y: 6 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeCB } },
  exit:   { opacity: 0, y: -6, transition: { duration: 0.28, ease: easeCB } },
};

function textColorForBg(hex?: string) {
  const c = (hex ?? '#999999').replace('#','');
  const r = parseInt(c.slice(0,2),16) || 0;
  const g = parseInt(c.slice(2,4),16) || 0;
  const b = parseInt(c.slice(4,6),16) || 0;
  const lum = (0.2126*r + 0.7152*g + 0.0722*b) / 255;
  return lum > 0.6 ? 'text-neutral-900' : 'text-white';
}

export default function VerticalsColorConfigurator({
  title = 'Kolorystyka żaluzji pionowych',
  subtitle = 'Wybierz kolekcję i odcień lamel',
  disclaimerText = 'Kolory na ekranie są poglądowe i mogą różnić się od rzeczywistych. Skontaktuj się z nami po próbki.',
}: { title?: string; subtitle?: string; disclaimerText?: string }) {

  const groups: VerticalGroup[] = ZALUZJE_VERTICALI;
  const [activeGroupId, setActiveGroupId] = React.useState<string>(groups[0].id);
  const activeGroup = React.useMemo(
    () => groups.find(g => g.id === activeGroupId) ?? groups[0],
    [groups, activeGroupId]
  );

  const [selected, setSelected] = React.useState<VerticalOption>(activeGroup.options[0]);

  // jeśli zmienisz kartę, a aktualny kolor do niej nie należy → przestaw na pierwszy
  React.useEffect(() => {
    if (!activeGroup.options.some(o => o.id === selected.id)) {
      setSelected(activeGroup.options[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGroupId]);

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
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-sm text-white/70 md:text-base">{subtitle}</p>}
      </motion.header>

      {/* TABS CATEGORIE – centrati, scrollabili su mobile */}
    {/* TABS CATEGORIE – brand style, senza scroll, responsive */}
<div role="tablist" aria-label="Kolekcje tkanin" className="mx-auto w-full max-w-5xl">
  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center md:gap-2">
    {groups.map((g) => {
      const active = g.id === activeGroupId;

      return (
        <button
          key={g.id}
          id={`tab-${g.id}`}
          role="tab"
          aria-selected={active}
          aria-controls={`panel-${g.id}`}
          onClick={() => setActiveGroupId(g.id)}
          className={[
            // base
            'relative  focus:outline-none py-[1px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400',
            // stato
            
            active
              ? 'rounded-md p-[1px] bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 shadow-xs'
              : 'rounded-md ring-1 ring-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100',
          ].join(' ')}
        >
          
          <span
            className={[
              'block rounded-md px-4 py-2 text-sm font-medium transition',
              active ? 'bg-white text-neutral-900 shadow-sm' : '',
            ].join(' ')}
          >
            {g.name}
          </span>
        </button>
      );
    })}
  </div>
</div>


      {/* PREVIEW CENTRATO */}
      <div className="mx-auto w-full max-w-[70%] sm:max-w-[320px]">
        <div className="relative mx-auto w-full" style={{ aspectRatio: '5 / 6' }}>
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={selected.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: easeCB }}
            >
              <BlindsSlatsVerticalPreview
                baseSrc="/mockups/zaluzje-verticale/zaluzje-base.png"
                slatsMask="/mockups/zaluzje-verticale/lamelle.png"
                // shadeSrc="/mockups/zaluzje-verticale/shade.png"
                slatHex={selected.hex}
                animateKey={selected.id}
                className="h-full w-full"
                aspect="5 / 6"
                fit="cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* “RIQUADRO GRANDE” CON COLORE SELEZIONATO */}
      <div
        className={`mx-auto mt-1 w-full max-w-5xl overflow-hidden rounded-xl ring-1 ring-neutral-200 ${textColorForBg(selected.hex)}`}
        style={{ backgroundColor: selected.hex }}
      >
        <div className="px-6 py-6 text-center md:py-8">
          <p className="text-sm/6 opacity-90 md:text-base">Wybrany kolor (kolekcja)</p>
          <p className="text-lg font-semibold md:text-xl">
            {activeGroup.name} — {selected.name}
          </p>
        </div>
      </div>

      {/* PALETTA: DESKTOP = barra sottile, MOBILE = griglia */}
      <div className="mx-auto w-full max-w-5xl">
        {/* Desktop: barra “a strisce” come nello screenshot */}
        <div className="hidden justify-center gap-[6px] px-2 md:flex md:flex-wrap">
          {activeGroup.options.map((opt) => {
            const isSel = opt.id === selected.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt)}
                aria-pressed={isSel}
                title={`${activeGroup.name} — ${opt.name}`}
                className={[
                  'h-6 w-[14px] rounded-[2px] ring-2 transition',
                  isSel ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300',
                ].join(' ')}
                style={{ backgroundColor: opt.hex }}
              />
            );
          })}
        </div>

        {/* Mobile: griglia colorata “a palette” */}
        <div className="grid grid-cols-10 gap-2 px-2 md:hidden">
          {activeGroup.options.map((opt) => {
            const isSel = opt.id === selected.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt)}
                aria-pressed={isSel}
                title={`${activeGroup.name} — ${opt.name}`}
                className={[
                  'h-8 w-full rounded-[4px] ring-2 transition',
                  isSel ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300',
                ].join(' ')}
                style={{ backgroundColor: opt.hex }}
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
        className="mx-auto mt-2 max-w-2xl text-center text-[10px] leading-relaxed text-neutral-500 sm:text-xs"
      >
        {disclaimerText}
      </motion.p>
    </section>
  );
}
