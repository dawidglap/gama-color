// src/components/ColorConfigurator/ConfiguratorSlotRoletyZewn.tsx
'use client';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

// Code-split solo client
const RoletyZewnetrzneColorConfigurator = dynamic(
  () => import('./RoletyZewnetrzneColorConfigurator'),
  { ssr: false }
);

// Slug supportati per rolety zewnętrzne
export type RoletyZewnSlug = 'standardowe' | 'standardowe-moskitiery' | 'nadstawne';

// Mappa slug → componente
const MAP: Record<RoletyZewnSlug, ComponentType<any>> = {
  standardowe: RoletyZewnetrzneColorConfigurator,
  'standardowe-moskitiery': RoletyZewnetrzneColorConfigurator,
  nadstawne: RoletyZewnetrzneColorConfigurator,
};

export default function ConfiguratorSlotRoletyZewn({ slug }: { slug: RoletyZewnSlug }) {
  const Cmp = MAP[slug];
  // se arriva uno slug non previsto, non renderizziamo nulla
  if (!Cmp) return null;
  return <Cmp />;
}
