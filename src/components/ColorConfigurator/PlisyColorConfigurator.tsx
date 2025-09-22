// src/components/Plisy/PlisyColorConfigurator.tsx
'use client';
import React from 'react';
import { motion, AnimatePresence, type Variants, cubicBezier } from 'framer-motion';
import PlisyPreview from '../ColorConfigurator/PlisyPreview';
import type { ColorOption } from '../../data/plisyOptions';
import { plisyFabricOptions, plisyProfileOptions } from '../../data/plisyOptions';

// Helper sfondo: HEX sempre + texture opzionale
function makeBg(opt: ColorOption): React.CSSProperties {
  return {
    backgroundColor: opt.hex ?? '#9aa0a6',
    ...(opt.texture
      ? {
          backgroundImage: `url(${opt.texture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }
      : {}),
  };
}

const easeCB = cubicBezier(0.16, 1, 0.3, 1);
const fade: Variants = {
  hidden: { opacity: 0, y: 6 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeCB } },
  exit:   { opacity: 0, y: -6, transition: { duration: 0.28, ease: easeCB } },
};

const MOCKUP = {
  base: '/mockups/plisy/base-plisy.png',
  fabricMask: '/mockups/plisy/maskFabric-plisy1.png',
  profileMask: '/mockups/plisy/profil-plisy.png',
  shade: '/mockups/plisy/shade-mask-plisy1.png',
} as const;

// Contrasto testo automatico
function textColorForBg(hex?: string) {
  const c = (hex ?? '#000000').replace('#', '');
  const r = parseInt(c.slice(0, 2), 16) || 0;
  const g = parseInt(c.slice(2, 4), 16) || 0;
  const b = parseInt(c.slice(4, 6), 16) || 0;
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return lum > 0.6 ? 'text-neutral-900' : 'text-white';
}

export default function PlisyColorConfigurator({
  title = 'Kolorystyka plis',
  subtitle = 'Wybierz tkaninę i profil',
  disclaimerText = 'Kolory i struktury na ekranie mogą różnić się od rzeczywistych — zapraszamy po próbki.',
}: { title?: string; subtitle?: string; disclaimerText?: string }) {
  const [fabric, setFabric]   = React.useState<ColorOption>(plisyFabricOptions[0]);
  const [profile, setProfile] = React.useState<ColorOption>(plisyProfileOptions[0]);

  const animateKey = `${fabric.id}|${profile.id}`;

  // ✅ calcolali DENTRO al componente
  const fabricBg  = React.useMemo(() => makeBg(fabric),  [fabric.hex, fabric.texture]);
  const profileBg = React.useMemo(() => makeBg(profile), [profile.hex, profile.texture]);

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
                baseSrc={MOCKUP.base}
                fabricMask={MOCKUP.fabricMask}
                profileMask={MOCKUP.profileMask}
                shadeSrc={MOCKUP.shade}
                fabricHex={fabric.hex}
                fabricTexture={fabric.texture}     // opzionale (in futuro)
                profileHex={profile.hex}
                profileTexture={profile.texture}   // opzionale
                animateKey={animateKey}
                pleatCount={22}
                pleatFillRatio={1}
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
                baseSrc={MOCKUP.base}
                fabricMask={MOCKUP.fabricMask}
                profileMask={MOCKUP.profileMask}
                shadeSrc={MOCKUP.shade}
                fabricHex={fabric.hex}
                fabricTexture={fabric.texture}
                profileHex={profile.hex}
                profileTexture={profile.texture}
                animateKey={animateKey}
                pleatCount={22}
                pleatFillRatio={1}
                className="h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* TKANINA — ribbon a bastoncini (desktop) / griglia (mobile) */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-base font-semibold text-neutral-900 text-center">Tkanina (kolor / tekstura)</h3>

        {/* Desktop: stick sottili */}
        <div className="relative hidden max-w-5xl overflow-x-auto rounded-md p-2 md:block">
          <div className="flex h-8 min-w-max items-center gap-[2px]">
            {plisyFabricOptions.map((opt) => {
              const selected = fabric.id === opt.id;
              return (
                <motion.button
                  whileTap={{ scale: 0.92 }}
                  key={opt.id}
                  onClick={() => setFabric(opt)}
                  className={`h-10 w-2 rounded-[2px] ring-2 ring-offset-1 transition ${
                    selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                  }`}
                  style={makeBg(opt)}
                  title={opt.name}
                  aria-pressed={selected}
                />
              );
            })}
          </div>
        </div>

        {/* Mobile: quadratini */}
        <div className="grid grid-cols-12 gap-2 md:hidden px-2">
          {plisyFabricOptions.map((opt) => {
            const selected = fabric.id === opt.id;
            return (
              <motion.button
                whileTap={{ scale: 0.94 }}
                key={opt.id}
                onClick={() => setFabric(opt)}
                className={`h-7 w-7 rounded-[4px] ring-2 transition ${
                  selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                }`}
                style={makeBg(opt)}
                title={opt.name}
                aria-pressed={selected}
              />
            );
          })}
        </div>
      </div>

      {/* PROFIL */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-base font-semibold text-neutral-900 text-center">Profil / ramka</h3>

        {/* Desktop */}
        <div className="hidden w-full md:block">
          <div className="mx-auto max-w-5xl overflow-x-auto">
            <div className="flex justify-center">
              <div className="inline-flex whitespace-nowrap gap-[6px] px-2 py-1">
                {plisyProfileOptions.map((opt) => {
                  const selected = profile.id === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setProfile(opt)}
                      className={`h-8 w-8 rounded-[6px] border border-neutral-200 ring-2 transition ${
                        selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                      }`}
                      style={makeBg(opt)}
                      title={opt.name}
                      aria-pressed={selected}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-6 gap-2 md:hidden">
          {plisyProfileOptions.map((opt) => {
            const selected = profile.id === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setProfile(opt)}
                className={`h-7 w-7 rounded-[4px] border-1 border-neutral-200 ring-2 transition ${
                  selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'
                }`}
                style={makeBg(opt)}
                title={opt.name}
                aria-pressed={selected}
              />
            );
          })}
        </div>
      </div>

      {/* Riquadri grandi con selezione */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {/* Fabric big sample */}
        <div className="relative h-40 overflow-hidden rounded-md ring-1 ring-neutral-200 md:h-52">
          <div className="absolute inset-0" style={fabricBg} />
          <div
            className={[
              'relative z-10 flex h-full flex-col items-center justify-center text-center px-3',
              textColorForBg(fabric.hex),
            ].join(' ')}
            style={{
              textShadow:
                textColorForBg(fabric.hex) === 'text-white'
                  ? '0 1px 2px rgba(0,0,0,.45)'
                  : '0 1px 1px rgba(255,255,255,.6)',
            }}
          >
            <p className="text-base md:text-lg opacity-90">Wybierz kolor tkaniny:</p>
            <p className="mt-1 text-xl font-semibold md:text-2xl">{fabric.name}</p>
          </div>
        </div>

        {/* Profile big sample */}
        <div className="relative h-40 overflow-hidden rounded-md ring-1 ring-neutral-200 md:h-52">
          <div className="absolute inset-0" style={profileBg} />
          <div
            className={[
              'relative z-10 flex h-full flex-col items-center justify-center text-center px-3',
              textColorForBg(profile.hex),
            ].join(' ')}
            style={{
              textShadow:
                textColorForBg(profile.hex) === 'text-white'
                  ? '0 1px 2px rgba(0,0,0,.45)'
                  : '0 1px 1px rgba(255,255,255,.6)',
            }}
          >
            <p className="text-base md:text-lg opacity-90">Wybierz kolor profilu:</p>
            <p className="mt-1 text-xl font-semibold md:text-2xl">{profile.name}</p>
          </div>
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
