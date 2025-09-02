// src/components/ColorConfigurator/BlindsSlatsPreview.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, cubicBezier } from 'framer-motion';

type Props = {
  baseSrc?: string;        // /mockups/zaluzje/base.png
  slatsMask?: string;      // /mockups/zaluzje/lamelle.png (viewport mask)
  shadeSrc?: string;       // /mockups/zaluzje/shade.png
  slatHex?: string;
  slatTexture?: string;
  animateKey?: string;
  slatCount?: number;      // quante lamelle visibili (es. 26)
  slatFillRatio?: number;  // percentuale pieno per lamella (0..1), es. 0.62
  className?: string;
  aspect?: `${number} / ${number}`;
  fit?: 'cover' | 'contain';
};

const easeCB = cubicBezier(0.16, 1, 0.3, 1);

// maschera di viewport: scala come la base
function viewportMaskStyle(maskSrc: string, fit: 'cover' | 'contain'): React.CSSProperties {
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

export default function BlindsSlatsPreview({
  baseSrc = '/mockups/zaluzje/base.png',
  slatsMask = '/mockups/zaluzje/lamelle.png',
  shadeSrc = '/mockups/zaluzje/shade.png',
  slatHex,
  slatTexture,
  animateKey,
  slatCount = 24,
  slatFillRatio = 1.00,
  className = '',
  aspect = '4 / 3',
  fit = 'contain',
}: Props) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [h, setH] = React.useState(0);

  // misura pixel reali del box → righe perfette
  React.useEffect(() => {
    if (!wrapperRef.current) return;
    const ro = new ResizeObserver(entries => {
      const cr = entries[0]?.contentRect;
      if (cr) setH(Math.round(cr.height));
    });
    ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  // periodo e “pieno” in pixel interi
  const periodPxRaw = h > 0 && slatCount > 0 ? h / slatCount : 0;
  const periodPx = periodPxRaw ? Math.max(1, Math.round(periodPxRaw)) : 0;
  const fillPx = periodPx ? Math.max(1, Math.round(periodPx * Math.max(0, Math.min(1, slatFillRatio)))) : 0;

  // maschera a righe in pixel → niente aliasing
  const stripeMaskImage =
    periodPx && fillPx
      ? `repeating-linear-gradient(
           to bottom,
           #000 0px,
           #000 ${fillPx}px,
           transparent ${fillPx}px,
           transparent ${periodPx}px
         )`
      : undefined;

  // sfondo lamella: colore o texture, ripetuta ogni "periodPx" in verticale
  const slatBg: React.CSSProperties = slatTexture
    ? {
        backgroundImage: `url(${slatTexture})`,
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'center top',
        backgroundSize: periodPx ? `100% ${periodPx}px` : '100% 10px', // fallback
      }
    : { backgroundColor: slatHex ?? '#d8dbe0' };

  const fitClass = fit === 'cover' ? 'object-cover' : 'object-contain';

  return (
    <div ref={wrapperRef} className={className} style={{ position: 'relative', aspectRatio: aspect, overflow: 'hidden' }}>
      {/* BASE */}
      <Image
        src={baseSrc}
        alt=""
        fill
        sizes="(max-width: 740px) 100vw, 360px"
        className={`absolute inset-0 h-full w-full ${fitClass} bg-white select-none pointer-events-none`}
        priority
      />

      {/* VIEWPORT MASCHERATO (segue il fit della base) */}
      <div className="absolute inset-0" style={viewportMaskStyle(slatsMask, fit)}>
        {/* SOLO LE LAMELLE ANIMATE */}
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={animateKey ?? (slatTexture ? `tex:${slatTexture}` : `hex:${slatHex}`)}
            className="absolute inset-0"
            style={{
              ...slatBg,
              // maschera a righe in pixel: niente “lamelle rotte”
              WebkitMaskImage: stripeMaskImage,
              maskImage: stripeMaskImage,
              WebkitMaskRepeat: 'repeat',
              maskRepeat: 'repeat',
              WebkitMaskSize: 'auto',
              maskSize: 'auto',
              WebkitMaskPosition: '0 0',
              maskPosition: '0 0',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: easeCB }}
          />
        </AnimatePresence>
      </div>

      {/* OMBRE (aderenti al fit) */}
      {shadeSrc && (
        <Image
          src={shadeSrc}
          alt=""
          fill
          sizes="(max-width: 740px) 100vw, 360px"
          className={`absolute inset-0 h-full w-full ${fitClass} pointer-events-none`}
          priority
        />
      )}

      {/* riflesso leggero */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,.16) 0%, rgba(255,255,255,0) 45%)' }}
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0.16 }}
        transition={{ duration: 0.6, ease: easeCB }}
      />
    </div>
  );
}
