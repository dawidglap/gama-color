// src/data/zaluzjeSlats.ts
export type SlatOption = {
    id: string;
    name: string;
    hex?: string;        // colore pieno
    texture?: string;    // /images/textures/slats/...
    textClass?: string;  // per etichetta in UI
    featured?: boolean;
};

/** --- COLORI PIENI (come li hai già) --- */
const SLAT_COLORS: SlatOption[] = [
    { id: 'alu-003', name: 'Aluminium 003', hex: '#9b6334', textClass: 'text-white' },
    { id: 'alu-043', name: 'Aluminium 043', hex: '#d39323', textClass: 'text-neutral-900' },
    { id: 'alu-115', name: 'Aluminium 115', hex: '#2a1c0e', textClass: 'text-white' },
    { id: 'alu-117', name: 'Aluminium 117', hex: '#3a2311', textClass: 'text-white' },
    { id: 'alu-132', name: 'Aluminium 132', hex: '#bf1b1b', textClass: 'text-white' },
    { id: 'alu-135', name: 'Aluminium 135', hex: '#d6c56a', textClass: 'text-neutral-900' },
    { id: 'alu-137', name: 'Aluminium 137', hex: '#e7b571', textClass: 'text-neutral-900' },
    { id: 'alu-158', name: 'Aluminium 158', hex: '#b9b6a2', textClass: 'text-neutral-900' },
    { id: 'alu-159', name: 'Aluminium 159', hex: '#5d5d47', textClass: 'text-white' },
    { id: 'alu-164', name: 'Aluminium 164', hex: '#0b0908', textClass: 'text-white' },
    { id: 'alu-165', name: 'Aluminium 165', hex: '#0a0a0b', textClass: 'text-white' },
    { id: 'alu-172', name: 'Aluminium 172', hex: '#6a9fc7', textClass: 'text-neutral-900' },
    { id: 'alu-175', name: 'Aluminium 175', hex: '#233b64', textClass: 'text-white' },
    { id: 'alu-179', name: 'Aluminium 179', hex: '#d0481e', textClass: 'text-white' },
    { id: 'alu-182', name: 'Aluminium 182', hex: '#de7126', textClass: 'text-white' },
    { id: 'alu-186', name: 'Aluminium 186', hex: '#8f1d12', textClass: 'text-white' },
    { id: 'alu-187', name: 'Aluminium 187', hex: '#3d0b0d', textClass: 'text-white' },
    { id: 'alu-191', name: 'Aluminium 191', hex: '#e1a59a', textClass: 'text-neutral-900' },
    { id: 'alu-194', name: 'Aluminium 194', hex: '#cea610', textClass: 'text-neutral-900' },
    { id: 'alu-202', name: 'Aluminium 202', hex: '#ceb0c1', textClass: 'text-neutral-900' },
    { id: 'alu-205', name: 'Aluminium 205', hex: '#e5c6b9', textClass: 'text-neutral-900' },
    { id: 'alu-264', name: 'Aluminium 264', hex: '#d7b057', textClass: 'text-neutral-900' },
    { id: 'alu-281', name: 'Aluminium 281', hex: '#15160d', textClass: 'text-white', featured: true },
    { id: 'alu-290', name: 'Aluminium 290', hex: '#c1c5bd', textClass: 'text-neutral-900' },
    { id: 'alu-341', name: 'Aluminium 341', hex: '#2d4830', textClass: 'text-white' },
    { id: 'alu-475', name: 'Aluminium 475', hex: '#922115', textClass: 'text-white' },
    { id: 'alu-509', name: 'Aluminium 509', hex: '#98a964', textClass: 'text-neutral-900' },
    { id: 'alu-511', name: 'Aluminium 511', hex: '#a29e8a', textClass: 'text-neutral-900' },
    { id: 'alu-517', name: 'Aluminium 517', hex: '#07144a', textClass: 'text-white', featured: true },
    { id: 'alu-522', name: 'Aluminium 522', hex: '#c5b57a', textClass: 'text-neutral-900' },

    { id: 'alu-541', name: 'Aluminium 541', hex: '#dac25b', textClass: 'text-neutral-900' },
    { id: 'alu-705', name: 'Aluminium 705', hex: '#235127', textClass: 'text-white' },
    { id: 'alu-776', name: 'Aluminium 776', hex: '#08132a', textClass: 'text-white' },
    { id: 'alu-937', name: 'Aluminium 937', hex: '#afbf6a', textClass: 'text-neutral-900' },
    { id: 'alu-996', name: 'Aluminium 996', hex: '#050405', textClass: 'text-white' },
    { id: 'alu-1037', name: 'Aluminium 1037', hex: '#2d140f', textClass: 'text-white' },
    { id: 'alu-1235', name: 'Aluminium 1235', hex: '#525140', textClass: 'text-white' },
    { id: 'alu-1510', name: 'Aluminium 1510', hex: '#202014', textClass: 'text-white' },
    { id: 'alu-1595', name: 'Aluminium 1595', hex: '#2f2b21', textClass: 'text-white' },
    { id: 'alu-1926', name: 'Aluminium 1926', hex: '#d9c251', textClass: 'text-neutral-900' },
    { id: 'alu-2005', name: 'Aluminium 2005', hex: '#bca671', textClass: 'text-neutral-900' },
    { id: 'alu-2007', name: 'Aluminium 2007', hex: '#b6b55b', textClass: 'text-neutral-900' },
    { id: 'alu-2011', name: 'Aluminium 2011', hex: '#30636c', textClass: 'text-white' },
    { id: 'alu-2014', name: 'Aluminium 2014', hex: '#8e9932', textClass: 'text-white' },
    { id: 'alu-2016', name: 'Aluminium 2016', hex: '#d7762c', textClass: 'text-white' },
    { id: 'alu-2017', name: 'Aluminium 2017', hex: '#2b1707', textClass: 'text-white' },
    { id: 'alu-2073', name: 'Aluminium 2073', hex: '#cdb7ad', textClass: 'text-neutral-900' },
    { id: 'alu-2083', name: 'Aluminium 2083', hex: '#cec48c', textClass: 'text-neutral-900' },
    { id: 'alu-2187', name: 'Aluminium 2187', hex: '#3f0909', textClass: 'text-white' },
    { id: 'alu-2956', name: 'Aluminium 2956', hex: '#d5bd7d', textClass: 'text-neutral-900' },
    { id: 'alu-3155', name: 'Aluminium 3155', hex: '#922316', textClass: 'text-white' },
    { id: 'alu-3550', name: 'Aluminium 3550', hex: '#06100a', textClass: 'text-white' },
    { id: 'alu-6603', name: 'Aluminium 6603', hex: '#93b296', textClass: 'text-neutral-900' },
    { id: 'alu-6645', name: 'Aluminium 6645', hex: '#c0c4c1', textClass: 'text-neutral-900' },
    { id: 'alu-7162', name: 'Aluminium 7162', hex: '#101c1e', textClass: 'text-white' },
    { id: 'alu-7216', name: 'Aluminium 7216', hex: '#370d07', textClass: 'text-white' },
    { id: 'alu-7355', name: 'Aluminium 7355', hex: '#335d6a', textClass: 'text-white' },
    { id: 'alu-7380', name: 'Aluminium 7380', hex: '#0a0704', textClass: 'text-white' },
    { id: 'alu-7381', name: 'Aluminium 7381', hex: '#141308', textClass: 'text-white' },
    { id: 'alu-8012', name: 'Aluminium 8012', hex: '#b5ae93', textClass: 'text-neutral-900' },

    { id: 'alu-8222', name: 'Aluminium 8222', hex: '#0f0907', textClass: 'text-white' },
    { id: 'alu-8224', name: 'Aluminium 8224', hex: '#c0ab8f', textClass: 'text-neutral-900' },
    { id: 'alu-8225', name: 'Aluminium 8225', hex: '#be2319', textClass: 'text-white' },
    { id: 'alu-9013', name: 'Aluminium 9013', hex: '#d1cfbf', textClass: 'text-neutral-900', featured: true },
    { id: 'alu-9273', name: 'Aluminium 9273', hex: '#030511', textClass: 'text-white' },
    { id: 'alu-9274', name: 'Aluminium 9274', hex: '#0b0604', textClass: 'text-white' },
    { id: 'alu-9911', name: 'Aluminium 9911', hex: '#573032', textClass: 'text-white' },
    { id: 'alu-99012', name: 'Aluminium 99012', hex: '#7b8aba', textClass: 'text-neutral-900' },
    { id: 'alu-99013', name: 'Aluminium 99013', hex: '#3f2d12', textClass: 'text-white' },
    { id: 'alu-7326', name: 'Aluminium 7326', hex: '#d3cfc5', textClass: 'text-neutral-900' },
    { id: 'alu-7328', name: 'Aluminium 7328', hex: '#938f8b', textClass: 'text-neutral-900' },
    { id: 'alu-7346', name: 'Aluminium 7346', hex: '#727385', textClass: 'text-white' },
    { id: 'alu-7344', name: 'Aluminium 7344', hex: '#615949', textClass: 'text-white' },
    { id: 'alu-7332', name: 'Aluminium 7332', hex: '#b1703a', textClass: 'text-white' },
    { id: 'alu-7325', name: 'Aluminium 7325', hex: '#665f3c', textClass: 'text-white' },
    { id: 'alu-7382', name: 'Aluminium 7382', hex: '#282614', textClass: 'text-white' },
    { id: 'alu-168', name: 'Aluminium 168', hex: '#444233', textClass: 'text-white' },
    { id: 'alu-199', name: 'Aluminium 199', hex: '#3b2c13', textClass: 'text-white' },
];

// Esempi per aggiungere TEXTURE (sovrascrivono l'hex):
// { id: 'wood-zloty-dab', name: 'Drewno — Złoty dąb', texture: '/images/textures/slats/zloty-dab.webp', textClass: 'text-white', featured: true },
const makeTexture = (n: number): SlatOption => ({
    id: `tex-g${n}`,
    name: `Dekor g${n}`,                // rinomina se preferisci (es. "Winchester 52")
    texture: `/images/textures/slats/g${n}.webp`,
    // se le texture sono scure lascia 'text-white', altrimenti 'text-neutral-900'
    textClass: 'text-white',
});

// genera: g1..g51
const SLAT_TEXTURES: SlatOption[] = Array.from({ length: 51 }, (_, i) => makeTexture(i + 1));

/** --- ESPORTO LISTA COMPLETA --- */
export const slatOptions: SlatOption[] = [
    ...SLAT_COLORS,
    ...SLAT_TEXTURES,
];

// Se vuoi evidenziare alcune texture come "featured" nella UI:
// SLAT_TEXTURES[0].featured = true;
// SLAT_TEXTURES[10].featured = true;