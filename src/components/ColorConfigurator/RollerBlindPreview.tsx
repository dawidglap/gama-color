'use client';

import React from 'react';

function hashId(s: string) {
  let h = 0; for (let i = 0; i < s.length; i++) { h = (h << 5) - h + s.charCodeAt(i); h |= 0; }
  return Math.abs(h).toString(36);
}

export default function RollerBlindPreview({
  cassetteHex,
  cassetteTexture,
  fabricHex,
  className = '',
}: {
  cassetteHex?: string;         // fallback colore
  cassetteTexture?: string;     // /images/textures/xxx.webp
  fabricHex: string;
  className?: string;
}) {
  const patternId = React.useMemo(
    () => (cassetteTexture ? `cassetteTex-${hashId(cassetteTexture)}` : undefined),
    [cassetteTexture]
  );

  // fill per la cassetta: texture -> pattern, altrimenti hex
  const cassetteFill = cassetteTexture && patternId ? `url(#${patternId})` : (cassetteHex ?? '#9aa0a6');

  return (
    <svg viewBox="0 0 300 320" className={className} role="img" aria-label="Podgląd rolety" stroke="#efefef" rx="2">
      <defs>
        {cassetteTexture && patternId && (
          /**
           * pattern "full-stretch": l'immagine copre l'intera area della forma (senza ripetizione).
           * Se più avanti vuoi un pattern "tiled", cambia patternUnits="userSpaceOnUse" e width/height (px).
           */
          <pattern id={patternId} patternUnits="objectBoundingBox" width="1" height="1" patternContentUnits="objectBoundingBox">
            <image href={cassetteTexture} width="1" height="1" preserveAspectRatio="none" />
          </pattern>
        )}
      </defs>

      {/* rails */}
      <rect x="20"  y="30" width="16" height="240" fill={cassetteFill} rx="2" />
      <rect x="264" y="30" width="16" height="240" fill={cassetteFill} rx="2" />
      {/* cassette/top box */}
      <rect x="20" y="10" width="260" height="28" fill={cassetteFill} rx="4" />
      {/* fabric */}
      <rect x="36" y="38" width="228" height="210" fill={fabricHex} />
      {/* bottom bar */}
      <rect x="36" y="248" width="228" height="8" fill={cassetteFill} rx="2" />
      {/* chain (right) */}
      <line x1="275" y1="55" x2="275" y2="245" stroke="#efefef" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
      <rect x="272" y="150" width="6" height="22" rx="3" fill="#efefef" />
      {/* sottile contorno */}
      <rect x="20" y="10" width="260" height="260" fill="none" stroke="#111" strokeOpacity="0.08" />
    </svg>
  );
}
