'use client';

import dynamic from 'next/dynamic';
import { Fallback } from '../ui';

// dynamic imports per page weight & code-split
const Fotorolety = dynamic(() => import('../products/Fotorolety'), { ssr: false });
const VegasClassic = dynamic(() => import('../products/VegasClassic'), { ssr: false });
const VegasProfil = dynamic(() => import('../products/VegasProfil'), { ssr: false });
const VegasMini = dynamic(() => import('../products/VegasMini'), { ssr: false });
const RoletyWolnowiszace = dynamic(() => import('../products/RoletyWolnowiszace'), { ssr: false });
const RoletyDzienNoc = dynamic(() => import('../products/RoletyDzienNoc'), { ssr: false });
const RoletyDachoweWolnowiszace = dynamic(() => import('../products/RoletyDachoweWolnowiszace'), { ssr: false });
const RoletyDachoweKaseta = dynamic(() => import('../products/RoletyDachoweKaseta'), { ssr: false });
const ZaluzjePoziome = dynamic(() => import('../products/ZaluzjePoziome'), { ssr: false });
const ZaluzjeVerticali = dynamic(() => import('../products/ZaluzjeVerticali'), { ssr: false });
const ZaluzjeDrewniane = dynamic(() => import('../products/ZaluzjeDrewniane'), { ssr: false });
const ZaluzjeLaminowane = dynamic(() => import('../products/ZaluzjeLaminowane'), { ssr: false });
const ZaluzjeBambusowe = dynamic(() => import('../products/ZaluzjeBambusowe'), { ssr: false });





const REGISTRY: Record<string, React.ComponentType> = {
    'fotorolety': Fotorolety,
    'vegas-classic': VegasClassic,
    'vegas-profil': VegasProfil,
    'vegas-mini': VegasMini,
    'rolety-wolnowiszace': RoletyWolnowiszace,
    'rolety-dzien-noc': RoletyDzienNoc,
    'rolety-dachowe-wolnowiszace': RoletyDachoweWolnowiszace,
    'rolety-dachowe-w-kasecie': RoletyDachoweKaseta,
    'zaluzje-poziome': ZaluzjePoziome,
    'zaluzje-pionowe-verticale': ZaluzjeVerticali,
    'zaluzje-drewniane': ZaluzjeDrewniane,
    'zaluzje-laminowane': ZaluzjeLaminowane,
    'zaluzje-bambusowe': ZaluzjeBambusowe,





    // aggiungi qui: 'vegas-profil': dynamic(() => import('./VegasProfil'), { ssr: false }),
};

export function getProductComponent(slug: string): React.ComponentType {
    return REGISTRY[slug] ?? Fallback;
}
