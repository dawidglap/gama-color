// src/components/ColorConfigurator/RoletyZewnPreview.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, cubicBezier } from 'framer-motion';

type Props = {
  baseSrc?: string;        // np. /mockups/rolety-zew/base.png (okno/ściana)
  slatsMask?: string;      // np. /mockups/rolety-zew/slats-mask.png (obszar pancerza)
  boxMask?: string;        // np. /mockups/rolety-zew/box-mask.png   (obszar skrzynki+prowadnic)
  shadeSrc?: string;       // np. /mockups/rolety-zew/shade.png
  slatHex?: string;
  slatTexture?: string;
  boxHex?: string;
  boxTexture?: string;
  animateKey?: string;
  /** wysokość pojedynczej lameli w px (do rastra podziału) */
  slatPitch?: number;      // default 12
  className?: string;
  aspect?: `${number} / ${number}`;
  fit?: 'cover' | 'contain';
};

const easeCB = cubicBezier(0.16, 1, 0.3, 1);

function maskStyle(maskSrc: string, fit: 'cover' | 'contain'): React.CSSProperties {
  return {
    WebkitMaskImage: `url(${maskSrc})`,
    maskImage: `url(${maskSrc})`,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: fit,
    maskSize: fit,
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
  };
}

export default function RoletyZewnPreview({
  baseSrc = '/mockups/rolety-zew/base.png',
  slatsMask = '/mockups/rolety-zew/slats-mask.png',
  boxMask = '/mockups/rolety-zew/box-mask.png',
  shadeSrc = '/mockups/rolety-zew/shade.png',
  slatHex = '#b8bcc3',
  slatTexture,
  boxHex = '#c7c9cc',
  boxTexture,
  animateKey,
  slatPitch = 12,
  className = '',
  aspect = '4 / 3',
  fit = 'contain',
}: Props) {
  const fitClass = fit === 'cover' ? 'object-cover' : 'object-contain';

  // Tło pancerza (kolor/tekstura)
  const slatBg: React.CSSProperties = {
    backgroundColor: slatHex,
    ...(slatTexture && {
      backgroundImage: `url(${slatTexture})`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }),
  };

  // Raster podziału lameli — delikatne poziome „rowki”
  const ribs =
    slatPitch > 0
      ? `repeating-linear-gradient(
          to bottom,
          rgba(0,0,0,.10) 0px,
          rgba(0,0,0,.10) 1px,
          transparent 1px,
          transparent ${slatPitch}px
        )`
      : undefined;

  // Tło skrzynki/prowadnic
  const boxBg: React.CSSProperties = {
    backgroundColor: boxHex,
    ...(boxTexture && {
      backgroundImage: `url(${boxTexture})`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }),
  };

  return (
    <div className={className} style={{ position: 'relative', aspectRatio: aspect, overflow: 'hidden' }}>
      {/* BASE */}
      <Image
        src={baseSrc}
        alt=""
        fill
        sizes="(max-width: 740px) 100vw, 560px"
        className={`absolute inset-0 h-full w-full ${fitClass} bg-white select-none pointer-events-none`}
        priority
      />

      {/* PANCERZ (mask) */}
      <div className="absolute inset-0" style={maskStyle(slatsMask, fit)}>
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={`slat-${animateKey}`}
            className="absolute inset-0"
            style={slatBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: easeCB }}
          />
        </AnimatePresence>

        {/* delikatny raster lameli */}
        {ribs && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: ribs,
              mixBlendMode: 'multiply',
              opacity: 0.35,
            }}
            aria-hidden
          />
        )}
      </div>

      {/* SKRZYNKA + PROWADNICE (mask) */}
      <div className="absolute inset-0" style={maskStyle(boxMask, fit)}>
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={`box-${boxHex}-${boxTexture ?? 'none'}`}
            className="absolute inset-0"
            style={boxBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: easeCB }}
          />
        </AnimatePresence>
      </div>

      {/* OMBRA */}
      {shadeSrc && (
        <Image
          src={shadeSrc}
          alt=""
          fill
          sizes="(max-width: 740px) 100vw, 560px"
          className={`absolute inset-0 h-full w-full ${fitClass} pointer-events-none`}
          priority
        />
      )}

      {/* delikatny refleks */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,.12) 0%, rgba(255,255,255,0) 45%)' }}
        aria-hidden
      />
    </div>
  );
}
