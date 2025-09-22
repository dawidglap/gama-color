// src/components/ColorConfigurator/ConfiguratorSlotRoletyZewn.tsx
'use client';

import dynamic from 'next/dynamic';

const RoletyZewnetrzneColorConfigurator = dynamic(
  () => import('./RoletyZewnetrzneColorConfigurator'),
  { ssr: false }
);

// Slug obsługiwane
export type RoletyZewnSlug = 'standardowe' | 'standardowe-moskitiery' | 'nadstawne';

export default function ConfiguratorSlotRoletyZewn({ slug }: { slug: RoletyZewnSlug }) {
  if (slug === 'standardowe' || slug === 'standardowe-moskitiery') {
    return (
      <RoletyZewnetrzneColorConfigurator
        withMosquito={slug === 'standardowe-moskitiery'}
        title={slug === 'standardowe-moskitiery'
          ? 'Roleta zewnętrzna — Standard z moskitierą'
          : 'Roleta zewnętrzna — Standard'}
      />
    );
  }

  // Nadstawne: faremo un configuratore dedicato in un secondo step
  return null;
}
