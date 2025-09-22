// src/components/ColorConfigurator/RoletyZewnPreview.tsx
'use client';

import Image from 'next/image';
import React from 'react';

type Styleable = { hex?: string; texture?: string };

function layerStyle(fill: Styleable, maskUrl: string): React.CSSProperties {
  const bg: React.CSSProperties = fill.texture
    ? {
        backgroundImage: `url(${fill.texture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: fill.hex ?? '#9aa0a6', // fallback
      }
    : { backgroundColor: fill.hex ?? '#9aa0a6' };

  return {
    ...bg,
    WebkitMaskImage: `url(${maskUrl})`,
    maskImage: `url(${maskUrl})`,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
  };
}

type Props = {
  baseSrc: string;
  lamellaMask: string;
  cassetteMask: string;
  mosquitoMask?: string; // opzionale
  shadeSrc?: string;

  lamellaHex?: string;
  lamellaTexture?: string;

  cassetteHex?: string;
  cassetteTexture?: string;

  showMosquito?: boolean;
  className?: string;
};

export default function RoletyZewnPreview({
  baseSrc,
  lamellaMask,
  cassetteMask,
  mosquitoMask,
  shadeSrc,
  lamellaHex,
  lamellaTexture,
  cassetteHex,
  cassetteTexture,
  showMosquito,
  className,
}: Props) {
  return (
    <div className={className ?? ''}>
      <div className="relative h-full w-full">
        {/* base */}
        <img
          src={baseSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-contain object-center"
          draggable={false}
        />

        {/* skrzynka + prowadnice */}
        <div
          className="absolute inset-0"
          style={layerStyle({ hex: cassetteHex, texture: cassetteTexture }, cassetteMask)}
          aria-hidden
        />

        {/* lamela */}
        <div
          className="absolute inset-0"
          style={layerStyle({ hex: lamellaHex, texture: lamellaTexture }, lamellaMask)}
          aria-hidden
        />

        {/* moskitiera (opzionale) — riempita con un grigio trasparente */}
        {showMosquito && mosquitoMask && (
          <div
            className="absolute inset-0"
            style={{
              background:
                'repeating-linear-gradient(45deg, rgba(30,30,30,.22) 0 2px, rgba(30,30,30,.26) 2px 4px)',
              WebkitMaskImage: `url(${mosquitoMask})`,
              maskImage: `url(${mosquitoMask})`,
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
            }}
            aria-hidden
          />
        )}

        {/* shade opzionale */}
        {shadeSrc && (
          <img
            src={shadeSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-contain object-center"
            draggable={false}
          />
        )}
      </div>
    </div>
  );
}
