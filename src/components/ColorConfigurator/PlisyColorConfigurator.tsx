// src/components/Plisy/PlisyColorConfigurator.tsx
'use client';
import React from 'react';
import { motion, AnimatePresence, type Variants, cubicBezier } from 'framer-motion';
import PlisyPreview from '../ColorConfigurator/PlisyPreview';
import type { ColorOption } from '@/data/types'; // { id:string; name:string; hex?:string; texture?:string }
import { plisyFabricOptions, plisyProfileOptions } from '@/data/plisyOptions';

const easeCB = cubicBezier(0.16, 1, 0.3, 1);
const fade: Variants = {
  hidden: { opacity: 0, y: 6 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeCB } },
  exit:   { opacity: 0, y: -6, transition: { duration: 0.28, ease: easeCB } },
};

export default function PlisyColorConfigurator({
  title = 'Kolorystyka plis',
  subtitle = 'Wybierz tkaninę i profil',
  disclaimerText = 'Kolory i struktury na ekranie mogą różnić się od rzeczywistych — zapraszamy po próbki.',
}: { title?: string; subtitle?: string; disclaimerText?: string }) {
  const [fabric, setFabric]   = React.useState<ColorOption>(plisyFabricOptions[0]);
  const [profile, setProfile] = React.useState<ColorOption>(plisyProfileOptions[0]);

  const animateKey = `${fabric.id}|${profile.id}`;

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
            <motion.div key={animateKey + '-m'} variants={fade} initial="hidden" animate="show" exit="exit" className="absolute inset-0">
              <PlisyPreview
                // mockup defaults (sostituisci con i tuoi file quando pronti)
                baseSrc="/mockups/plisy/base.png"
                fabricMask="/mockups/plisy/fabric-mask.png"
                profileMask="/mockups/plisy/profile-mask.png"
                shadeSrc="/mockups/plisy/shade.png"
                fabricHex={fabric.hex}
                fabricTexture={fabric.texture}
                profileHex={profile.hex}
                profileTexture={profile.texture}
                animateKey={animateKey}
                pleatCount={22}
                pleatFillRatio={0.68}
                className="h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* DESKTOP PREVIEW */}
      <div className="hidden md:flex md:items-center md:justify-center">
        <div className="relative w-full max-w-[560px]" style={{ aspectRatio: '4 / 3' }}>
          <AnimatePresence mode="sync" initial={false}>
            <motion.div key={animateKey + '-d'} variants={fade} initial="hidden" animate="show" exit="exit" className="absolute inset-0">
              <PlisyPreview
                baseSrc="/mockups/plisy/base.png"
                fabricMask="/mockups/plisy/fabric-mask.png"
                profileMask="/mockups/plisy/profile-mask.png"
                shadeSrc="/mockups/plisy/shade.png"
                fabricHex={fabric.hex}
                fabricTexture={fabric.texture}
                profileHex={profile.hex}
                profileTexture={profile.texture}
                animateKey={animateKey}
                pleatCount={22}
                pleatFillRatio={0.68}
                className="h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* PALETA: TKANINA */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-base font-semibold text-neutral-900 text-center">Tkanina (kolor / tekstura)</h3>

        {/* Desktop ribbon */}
        <div className="hidden w-full md:block">
          <div className="mx-auto max-w-5xl overflow-x-auto">
            <div className="flex justify-center">
              <div className="inline-flex whitespace-nowrap gap-[6px] px-2 py-1">
                {plisyFabricOptions.map((opt) => {
                  const selected = fabric.id === opt.id;
                  const style = opt.texture
                    ? { backgroundImage: `url(${opt.texture})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : { backgroundColor: opt.hex ?? '#9aa0a6' };
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setFabric(opt)}
                      className={`h-8 w-8 rounded-[6px] ring-2 transition
                        ${selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'}`}
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
          {plisyFabricOptions.map((opt) => {
            const selected = fabric.id === opt.id;
            const style = opt.texture
              ? { backgroundImage: `url(${opt.texture})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              : { backgroundColor: opt.hex ?? '#9aa0a6' };
            return (
              <button
                key={opt.id}
                onClick={() => setFabric(opt)}
                className={`h-7 w-7 rounded-[4px] ring-2 transition
                  ${selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'}`}
                style={style}
                title={opt.name}
                aria-pressed={selected}
              />
            );
          })}
        </div>
      </div>

      {/* PALETA: PROFIL */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-base font-semibold text-neutral-900 text-center">Profil / ramka</h3>

        {/* Desktop ribbon */}
        <div className="hidden w-full md:block">
          <div className="mx-auto max-w-5xl overflow-x-auto">
            <div className="flex justify-center">
              <div className="inline-flex whitespace-nowrap gap-[6px] px-2 py-1">
                {plisyProfileOptions.map((opt) => {
                  const selected = profile.id === opt.id;
                  const style = opt.texture
                    ? { backgroundImage: `url(${opt.texture})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : { backgroundColor: opt.hex ?? '#9aa0a6' };
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setProfile(opt)}
                      className={`h-8 w-8 rounded-[6px] ring-2 transition
                        ${selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'}`}
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
          {plisyProfileOptions.map((opt) => {
            const selected = profile.id === opt.id;
            const style = opt.texture
              ? { backgroundImage: `url(${opt.texture})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              : { backgroundColor: opt.hex ?? '#9aa0a6' };
            return (
              <button
                key={opt.id}
                onClick={() => setProfile(opt)}
                className={`h-7 w-7 rounded-[4px] ring-2 transition
                  ${selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'}`}
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
        className="mx-auto mt-2 max-w-2xl text-[10px] sm:text-center leading-relaxed text-neutral-500 sm:text-xs"
      >
        {disclaimerText}
      </motion.p>
    </section>
  );
}
