// src/components/ColorConfigurator/ConfiguratorSlotPlisy.tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Code-split solo lato client
const PlisyColorConfigurator = dynamic(
  () => import('./PlisyColorConfigurator'),
  { ssr: false }
);

// Mappa slug → componente
const MAP: Record<string, React.ComponentType | null> = {
  'cosimo': PlisyColorConfigurator,
  'cosimo-smartline': PlisyColorConfigurator,
  'ultima': PlisyColorConfigurator,
};

export default function ConfiguratorSlotPlisy({ slug }: { slug: string }) {
  const Cmp = MAP[slug] ?? null;
  if (!Cmp) return null;
  return <Cmp />;
}
