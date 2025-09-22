// src/components/ColorConfigurator/PlisyPreview.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, cubicBezier } from 'framer-motion';

type Props = {
  baseSrc?: string;        // np. /mockups/plisy/base.png  (rama + tło)
  fabricMask?: string;     // np. /mockups/plisy/fabric-mask.png  (obszar tkaniny)
  profileMask?: string;    // np. /mockups/plisy/profile-mask.png (obszar profili)
  shadeSrc?: string;       // np. /mockups/plisy/shade.png
  fabricHex?: string;
  fabricTexture?: string;
  profileHex?: string;
  profileTexture?: string;
  animateKey?: string;
  /** Ilość widocznych "fałd" (pleatów). */
  pleatCount?: number;
  /** Jaki procent wysokości zajmuje "pełny" odcinek fałdy (0..1). */
  pleatFillRatio?: number;
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

export default function PlisyPreview({
  baseSrc = '/mockups/plisy/base.png',
  fabricMask = '/mockups/plisy/fabric-mask.png',
  profileMask = '/mockups/plisy/profile-mask.png',
  shadeSrc = '/mockups/plisy/shade.png',
  fabricHex,
  fabricTexture,
  profileHex = '#c9c9c9',
  profileTexture,
  animateKey,
  pleatCount = 22,
  pleatFillRatio = 0.68,
  className = '',
  aspect = '4 / 3',
  fit = 'contain',
}: Props) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [h, setH] = React.useState(0);

  React.useEffect(() => {
    if (!wrapperRef.current) return;
    const ro = new ResizeObserver((entries) => {
      const cr = entries[0]?.contentRect;
      if (cr) setH(Math.round(cr.height));
    });
    ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  // wyliczamy "okres" fałdy w pikselach (jak slats) → brak aliasingu
  const periodPxRaw = h > 0 && pleatCount > 0 ? h / pleatCount : 0;
  const periodPx = periodPxRaw ? Math.max(1, Math.round(periodPxRaw)) : 0;
  const fillPx = periodPx ? Math.max(1, Math.round(periodPx * Math.max(0, Math.min(1, pleatFillRatio)))) : 0;

  const pleatMaskImage =
    periodPx && fillPx
      ? `repeating-linear-gradient(
           to bottom,
           #000 0px,
           #000 ${fillPx}px,
           transparent ${fillPx}px,
           transparent ${periodPx}px
         )`
      : undefined;

  // tkanina: kolor / tekstura (powtarzana co "fałdę")
  const fabricBg: React.CSSProperties = fabricTexture
    ? {
        backgroundImage: `url(${fabricTexture})`,
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'center top',
        backgroundSize: periodPx ? `100% ${periodPx}px` : '100% 12px',
      }
    : { backgroundColor: fabricHex ?? '#d8dbe0' };

  // profil: kolor / tekstura (mask profilu)
  const profileBg: React.CSSProperties = profileTexture
    ? {
        backgroundImage: `url(${profileTexture})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : { backgroundColor: profileHex };

  const fitClass = fit === 'cover' ? 'object-cover' : 'object-contain';

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ position: 'relative', aspectRatio: aspect, overflow: 'hidden' }}
    >
      {/* BASE */}
      <Image
        src={baseSrc}
        alt=""
        fill
        sizes="(max-width: 740px) 100vw, 560px"
        className={`absolute inset-0 h-full w-full ${fitClass} bg-white select-none pointer-events-none`}
        priority
      />

      {/* TKANINA (masked to fabricMask + pleaty) */}
      <div className="absolute inset-0" style={maskStyle(fabricMask, fit)}>
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={animateKey ?? (fabricTexture ? `tex:${fabricTexture}` : `hex:${fabricHex}`)}
            className="absolute inset-0"
            style={{
              ...fabricBg,
              WebkitMaskImage: pleatMaskImage,
              maskImage: pleatMaskImage,
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

      {/* PROFIL/RAMKA (masked to profileMask) */}
      <div className="absolute inset-0" style={maskStyle(profileMask, fit)}>
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={(profileTexture ? `profile-tex:${profileTexture}` : `profile-hex:${profileHex}`)}
            className="absolute inset-0"
            style={profileBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: easeCB }}
          />
        </AnimatePresence>
      </div>

      {/* OMBRE */}
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

      {/* lekki refleks */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,.14) 0%, rgba(255,255,255,0) 45%)' }}
        initial={{ opacity: 0.08 }}
        animate={{ opacity: 0.14 }}
        transition={{ duration: 0.6, ease: easeCB }}
      />
    </div>
  );
}
