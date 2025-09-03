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

/** Preview con default per żaluzje laminowane */
export default function LaminowaneSlatsPreview({
  slatTexture,
  slatHex,
  animateKey,
  className,
  aspect = '4 / 3',
  fit = 'contain',
  slatCount = 26,
  slatFillRatio = 1.0,
}: Props) {
  return (
    <BlindsSlatsPreview
      baseSrc="/mockups/zaluzje-drewniane/base.png"
      slatsMask="/mockups/zaluzje-drewniane/lamelle.png"
      shadeSrc="/mockups/zaluzje-drewniane/shade.png"
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
