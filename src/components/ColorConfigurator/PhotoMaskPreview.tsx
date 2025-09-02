// src/components/ColorConfigurator/PhotoMaskPreview.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  baseSrc?: string;        // /mockups/base.png
  fabricMask?: string;     // /mockups/mask-fabric.png
  cassetteMask?: string;   // /mockups/mask-cassette.png
  railsMask?: string;      // /mockups/mask-rails.png (opzionale)

  fabricHex: string;
  cassetteHex?: string;
  cassetteTexture?: string;

  className?: string;
  aspect?: `${number} / ${number}`;
  fit?: 'cover' | 'contain'; // NEW
};

function MaskLayer({
  maskSrc,
  style,
  className = '',
}: {
  maskSrc: string;
  style: React.CSSProperties;
  className?: string;
}) {
  const maskCss: React.CSSProperties = {
    WebkitMaskImage: `url(${maskSrc})`,
    maskImage: `url(${maskSrc})`,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: 'cover',
    maskSize: 'cover',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
  };
  return <div className={`absolute inset-0 ${className}`} style={{ ...style, ...maskCss }} />;
}

export default function PhotoMaskPreview({
  baseSrc = '/mockups/base.png',
  fabricMask = '/mockups/mask-fabric.png',
  cassetteMask = '/mockups/mask-cassette.png',
  railsMask, // opzionale
  fabricHex,
  cassetteHex,
  cassetteTexture,
  className = '',
  aspect = '3 / 4',
  fit = 'contain', // NEW: per evitare crop
}: Props) {
  const cassetteBg: React.CSSProperties = cassetteTexture
    ? { backgroundImage: `url(${cassetteTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: cassetteHex ?? '#9aa0a6' };

  const fitClass = fit === 'cover' ? 'object-cover' : 'object-contain';

  return (
    <div className={className} style={{ position: 'relative', aspectRatio: aspect, overflow: 'hidden' }}>
      {/* base */}
      <Image
        src={baseSrc}
        alt="Podgląd rolety - baza"
        fill
        sizes="(max-width: 740px) 100vw, 340px"
        className={`absolute inset-0 h-full w-full ${fitClass} select-none pointer-events-none bg-white`}
        priority
      />

      {/* ordine: tkanina (sotto) -> kaseta -> prowadnice (sopra) */}
      <MaskLayer maskSrc={fabricMask} style={{ backgroundColor: fabricHex }} />
      <MaskLayer maskSrc={cassetteMask} style={cassetteBg} />
      {railsMask && <MaskLayer maskSrc={railsMask} style={cassetteBg} />}

      {/* riflesso soft */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,.22) 0%, rgba(255,255,255,0) 45%)' }}
        initial={{ opacity: 0.15 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}