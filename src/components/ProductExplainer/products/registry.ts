'use client';

import dynamic from 'next/dynamic';
import { Fallback } from '../ui';

// dynamic imports per page weight & code-split
const Fotorolety = dynamic(() => import('../products/Fotorolety'), { ssr: false });
const VegasClassic = dynamic(() => import('../products/VegasClassic'), { ssr: false });
const VegasProfil = dynamic(() => import('../products/VegasProfil'), { ssr: false });
const VegasMini = dynamic(() => import('../products/VegasMini'), { ssr: false });

const REGISTRY: Record<string, React.ComponentType> = {
    'fotorolety': Fotorolety,
    'vegas-classic': VegasClassic,
    'vegas-profil': VegasProfil,
    'vegas-mini': VegasMini,

    // aggiungi qui: 'vegas-profil': dynamic(() => import('./VegasProfil'), { ssr: false }),
};

export function getProductComponent(slug: string): React.ComponentType {
    return REGISTRY[slug] ?? Fallback;
}
