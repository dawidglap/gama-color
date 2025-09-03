'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// code-split SOLO nel client
const SlatsColorConfigurator = dynamic(
  () => import('./SlatsColorConfigurator'),
  { ssr: false }
);
const VerticalsColorConfigurator = dynamic(
  () => import('./VerticalsColorConfigurator'),
  { ssr: false }
);
const DrewnianeColorConfigurator = dynamic(
  () => import('./DrewnianeColorConfigurator'),
  { ssr: false }
);
const LaminowaneColorConfigurator = dynamic(
  () => import('./LaminowaneColorConfigurator'),
  { ssr: false }
);
const BambusoweColorConfigurator = dynamic(
  () => import('./BambusoweColorConfigurator'),
  { ssr: false }
);

// mappa slug → componente
const MAP: Record<string, React.ComponentType | null> = {
  'zaluzje-poziome': SlatsColorConfigurator,
  'zaluzje-pionowe-verticale': VerticalsColorConfigurator,
  'zaluzje-drewniane': DrewnianeColorConfigurator,
  'zaluzje-laminowane': LaminowaneColorConfigurator, // ⬅️ aggiunto
  'zaluzje-bambusowe': BambusoweColorConfigurator,
};

export default function ConfiguratorSlot({ slug }: { slug: string }) {
  const Cmp = MAP[slug] ?? null;
  if (!Cmp) return null;
  return <Cmp />;
}
