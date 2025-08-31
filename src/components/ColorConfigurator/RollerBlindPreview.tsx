// src/components/ColorConfigurator/RollerBlindPreview.tsx
'use client';

import React from 'react';

function hashId(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = (h << 5) - h + s.charCodeAt(i); h |= 0; }
  return Math.abs(h).toString(36);
}

export default function RollerBlindPreview({
  cassetteHex,
  cassetteTexture,
  fabricHex,
  className = '',
}: {
  cassetteHex?: string;      // fallback colore per kaseta/guide/barra
  cassetteTexture?: string;  // /images/textures/xxx.webp
  fabricHex: string;
  className?: string;
}) {
  const uid = React.useId(); // ✅ id unico per istanza (SSR-safe)
  const patternId = React.useMemo(
    () => (cassetteTexture ? `cassetteTex-${uid}-${hashId(cassetteTexture)}` : undefined),
    [cassetteTexture, uid]
  );

  const cassetteFill = cassetteTexture && patternId
    ? `url(#${patternId})`
    : (cassetteHex ?? '#9aa0a6');

  // geometria base
  const X = { left: 20, railW: 16, innerLeft: 36, innerW: 228, top: 10, casH: 28 };
  const railsTop = 30, railsH = 240;
  const fabricTop = 38, fabricH = 210;
  const bottomBarY = fabricTop + fabricH, bottomBarH = 8;

  return (
    <svg
      viewBox="0 0 300 320"
      className={className}
      role="img"
      aria-label="Podgląd rolety"
    >
      <defs>
        {cassetteTexture && patternId && (
          /**
           * pattern full-stretch (0..1). Mettiamo anche un RECT di fallback con cassetteHex:
           * se l'immagine non viene renderizzata, resta il colore.
           */
          <pattern
            id={patternId}
            patternUnits="objectBoundingBox"
            width="1"
            height="1"
            patternContentUnits="objectBoundingBox"
          >
            {cassetteHex && <rect width="1" height="1" fill={cassetteHex} />}
            <image href={cassetteTexture} width="1" height="1" preserveAspectRatio="none" />
          </pattern>
        )}
      </defs>

      {/* prowadnice */}
      <rect x={X.left} y={railsTop} width={X.railW} height={railsH} fill={cassetteFill} rx="2" />
      <rect x={264} y={railsTop} width={X.railW} height={railsH} fill={cassetteFill} rx="2" />
      {/* kaseta/top */}
      <rect x={X.left} y={X.top} width="260" height={X.casH} fill={cassetteFill} rx="4" />
      {/* tkanina */}
      <rect x={X.innerLeft} y={fabricTop} width={X.innerW} height={fabricH} fill={fabricHex} />
      {/* listwa dolna */}
      <rect x={X.innerLeft} y={bottomBarY} width={X.innerW} height={bottomBarH} fill={cassetteFill} rx="2" />
      {/* łańcuszek */}
      <line x1="275" y1="55" x2="275" y2="245" stroke="#efefef" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
      <rect x="272" y="150" width="6" height="22" rx="3" fill="#efefef" />
      {/* obrysy lekkie */}
      <rect x="20" y="10" width="260" height="260" fill="none" stroke="#111" strokeOpacity="0.08" />
    </svg>
  );
}
