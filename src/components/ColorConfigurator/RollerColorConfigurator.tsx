'use client';

import React from 'react';
import RollerBlindPreview from './RollerBlindPreview';
import {
  cassetteColors,
  featuredCassetteColors,
  fabricColors,
  type ColorOption,
  type CassetteColorOption,
} from '@/data/rollerColors';

function textColorForBg(hex: string) {
  const c = hex.replace('#','');
  const r = parseInt(c.substring(0,2), 16);
  const g = parseInt(c.substring(2,4), 16);
  const b = parseInt(c.substring(4,6), 16);
  const lum = (0.2126*r + 0.7152*g + 0.0722*b) / 255;
  return lum > 0.6 ? 'text-neutral-900' : 'text-white';
}

export default function RollerColorConfigurator() {
  const [cassette, setCassette] = React.useState<CassetteColorOption>(featuredCassetteColors[0] ?? cassetteColors[0]);
  const [fabric, setFabric] = React.useState<ColorOption>(fabricColors[0]);

  return (
    <section className="mt-10 space-y-8">
      {/* KASETA + PROWADNICE */}
      <div className="flex flex-col gap-3">
        <h3 className="text-base font-semibold text-neutral-900">Kolor skrzynki i prowadnic rolet</h3>
        <div className="flex flex-wrap items-center gap-3">
          {featuredCassetteColors.map((c) => {
            const selected = cassette.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setCassette(c)}
                className={`h-14 w-14 rounded-lg ring-2 transition
                  ${selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'}`}
                style={
                  c.texture
                    ? { backgroundImage: `url(${c.texture})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : { backgroundColor: c.hex ?? '#9aa0a6' }
                }
                title={`${c.name}${c.code ? ` • ${c.code}` : ''}`}
                aria-pressed={selected}
              />
            );
          })}

          {/* Tutti i colori kasety (con texture) */}
          {/* <details className="ml-1">
            <summary className="cursor-pointer select-none text-sm text-neutral-600 hover:text-neutral-900">
              Pokaż więcej kolorów
            </summary>
            <div className="mt-3 flex max-h-40 w-[min(680px,90vw)] flex-wrap gap-2 overflow-auto rounded-md border border-neutral-200 p-3">
              {cassetteColors.map((c) => {
                const selected = cassette.id === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setCassette(c)}
                    className={`h-7 w-7 rounded-md ring-2 transition
                      ${selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'}`}
                    style={
                      c.texture
                        ? { backgroundImage: `url(${c.texture})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                        : { backgroundColor: c.hex ?? '#9aa0a6' }
                    }
                    title={`${c.name}${c.code ? ` • ${c.code}` : ''}`}
                    aria-pressed={selected}
                  />
                );
              })}
            </div>
          </details> */}
        </div>
      </div>

      {/* TKANINA */}
      <div className="flex flex-col gap-3">
        <h3 className="text-base font-semibold text-neutral-900">Kolor tkaniny rolety (materiał)</h3>
        <div className="relative overflow-x-auto rounded-md  p-2">
          <div className="flex h-8 min-w-max items-center gap-[2px]">
            {fabricColors.map((c) => {
              const selected = fabric.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setFabric(c)}
                  className={`h-10 w-2 rounded-[2px] ring-2 ring-offset-1 transition
                    ${selected ? 'ring-amber-400' : 'ring-transparent hover:ring-neutral-300'}`}
                  style={{ backgroundColor: c.hex ?? '#9aa0a6' }}
                  title={`${c.name}${c.code ? ` • ${c.code}` : ''}`}
                  aria-pressed={selected}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* PREVIEW + PANNELLI */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 flex items-center justify-center">
          <RollerBlindPreview
            cassetteHex={cassette.hex}
            cassetteTexture={cassette.texture}
            fabricHex={fabric.hex ?? '#9aa0a6'}
            className="w-full max-w-[320px]"
          />
        </div>

        <div className="md:col-span-2 grid gap-4 md:grid-cols-2">
          {/* LEWA: TKANINA */}
          <div
            className={`flex h-36 flex-col items-center justify-center rounded-xl shadow-sm ring-1 ring-neutral-200 ${textColorForBg(fabric.hex ?? '#9aa0a6')}`}
            style={{ backgroundColor: fabric.hex ?? '#9aa0a6' }}
          >
            <p className="text-sm opacity-90">Wybierz kolor tkaniny</p>
            <p className="text-lg font-semibold">{fabric.name}</p>
            {fabric.code && <p className="font-medium tracking-wide">{fabric.code}</p>}
          </div>

          {/* PRAWA: KASETA/PROWADNICE (con texture) */}
          <div
            className={`flex h-36 flex-col items-center justify-center rounded-xl shadow-sm ring-1 ring-neutral-200 ${cassette.textClass ?? 'text-white'}`}
            style={
              cassette.texture
                ? { backgroundImage: `url(${cassette.texture})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                : { backgroundColor: cassette.hex ?? '#9aa0a6' }
            }
          >
            <p className="text-sm opacity-90">Wybierz kolor skrzynki i prowadnic</p>
            <p className="text-lg font-semibold">{cassette.name}</p>
            {cassette.code && <p className="font-medium tracking-wide">{cassette.code}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
