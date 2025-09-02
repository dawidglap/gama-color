// src/components/ColorConfigurator/VerticalsControlGuide.tsx
'use client';

import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

type Variant = 'left' | 'right' | 'split' | 'center';

function ControlSketch({ variant }: { variant: Variant }) {
  // palette neutra
  const track = '#e5e7eb';
  const pane  = '#f8fafc';
  const slat  = '#98a2b3';
  const stack = '#64748b';

  // pakiety lameli (pozycje)
  const stacks: Record<Variant, Array<{ x: number; w: number }>> = {
    left:   [{ x: 14,  w: 20 }],
    right:  [{ x: 126, w: 20 }],
    split:  [{ x: 14,  w: 18 }, { x: 128, w: 18 }],
    center: [{ x: 68,  w: 24 }],
  };

  return (
    <div className="relative h-full w-full">
      {/* rysunek */}
      <svg viewBox="0 0 160 110" className="h-full w-full" aria-hidden>
        <rect x="0" y="0" width="160" height="110" rx="10" fill="white" />
        <rect x="12" y="14" width="136" height="10" rx="4" fill={track} />
        <rect x="12" y="26" width="136" height="70" fill={pane} stroke="#eef2f7" />
        {/* lamele luzem */}
        {Array.from({ length: 12 }).map((_, i) => {
          const x = 22 + i * 10;
          return <rect key={i} x={x} y={32} width={2} height={58} rx={1} fill={slat} />;
        })}
        {/* pakiet(y) */}
        {stacks[variant].map((s, i) => (
          <rect key={i} x={s.x} y={32} width={s.w} height={58} rx={2} fill={stack} />
        ))}
      </svg>

      {/* FRECCE — overlay con react-icons, nere */}
      <div className="pointer-events-none absolute inset-0">
        {variant === 'left' && (
          <FiArrowLeft className="absolute left-16 top-1/2 -translate-y-1/2 h-6 w-6 md:h-7 md:w-7 text-black opacity-85" />
        )}
        {variant === 'right' && (
          <FiArrowRight className="absolute right-16 top-1/2 -translate-y-1/2 h-6 w-6 md:h-7 md:w-7 text-black opacity-85" />
        )}
        {variant === 'split' && (
          <>
            {/* verso l'esterno: ←   → */}
            <FiArrowLeft  className="absolute left-[36%] top-1/2 -translate-y-1/2 h-6 w-6 md:h-7 md:w-7 text-black opacity-85" />
            <FiArrowRight className="absolute right-[36%] top-1/2 -translate-y-1/2 h-6 w-6 md:h-7 md:w-7 text-black opacity-85" />
          </>
        )}
        {variant === 'center' && (
          <>
            {/* verso il centro:  →   ← */}
            <FiArrowRight className="absolute left-[18%] top-1/2 -translate-y-1/2 h-6 w-6 md:h-7 md:w-7 text-black opacity-85" />
            <FiArrowLeft  className="absolute right-[18%] top-1/2 -translate-y-1/2 h-6 w-6 md:h-7 md:w-7 text-black opacity-85" />
          </>
        )}
      </div>
    </div>
  );
}

const items: Array<{ id: Variant; title: string; desc: string }> = [
  { id: 'left',   title: 'Zsuw w lewo',         desc: 'Pakiet po lewej stronie.' },
  { id: 'right',  title: 'Zsuw w prawo',        desc: 'Pakiet po prawej stronie.' },
  { id: 'split',  title: 'Rozsuwa się na boki', desc: 'Otwieranie od środka.' },
  { id: 'center', title: 'Zsuw do środka',      desc: 'Pakiet pośrodku toru.' },
];

export default function VerticalsControlGuide({ className = '' }: { className?: string }) {
  return (
    <section className={['mt-10', className].join(' ')}>
      <header className="mb-4 flex items-end justify-between">
        <h3 className="text-lg font-semibold text-neutral-900">Kierunek zsuwu lameli</h3>
        <span
          aria-hidden
          className="h-[3px] w-24 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400"
        />
      </header>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <li
            key={it.id}
            className="group rounded-2xl bg-white p-4 ring-1 ring-neutral-200 transition hover:shadow-sm"
          >
            <div className="aspect-[16/11] w-full overflow-hidden rounded-xl ring-1 ring-neutral-100">
              <ControlSketch variant={it.id} />
            </div>
            <div className="mt-3">
              <div className="font-medium text-neutral-900">{it.title}</div>
              <div className="text-sm text-neutral-500">{it.desc}</div>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-3 text-xs text-neutral-500">
        Przykładowe schematy. Dobierzemy wariant do układu okna i strony prowadzenia.
      </p>
    </section>
  );
}
