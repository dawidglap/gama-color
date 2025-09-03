// src/components/ColorConfigurator/BambusoweSlatsPreview.tsx
'use client';
import React from 'react';
import BlindsSlatsPreview from './BlindsSlatsPreview';

type Props = {
  slatTexture?: string;
  slatHex?: string;
  animateKey?: string;
  className?: string;
  aspect?: `${number} / ${number}`;
  fit?: 'cover' | 'contain';
  slatCount?: number;
  slatFillRatio?: number;
};

/** Preview con default per żaluzje bambusowe */
export default function BambusoweSlatsPreview({
  slatTexture,
  slatHex,
  animateKey,
  className,
  aspect = '4 / 3',
  fit = 'contain',
  slatCount = 26,
  slatFillRatio = 1.0, // regolabile in base alla tua lamella
}: Props) {
  return (
    <BlindsSlatsPreview
      baseSrc="/mockups/zaluzje-bambusowe/base.png"
      slatsMask="/mockups/zaluzje-bambusowe/lamelle.png"
      shadeSrc="/mockups/zaluzje-bambusowe/shade.png"
      slatTexture={slatTexture}
      slatHex={slatHex}
      animateKey={animateKey}
      className={className}
      aspect={aspect}
      fit={fit}
      slatCount={slatCount}
      slatFillRatio={slatFillRatio}
    />
  );
}
