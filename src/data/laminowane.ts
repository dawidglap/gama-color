// src/data/laminowane.ts
export type LaminateSlatOption = {
    id: string;
    name: string;
    texture: string;     // /mockups/zaluzje-laminowane/texture/gX.png
    textClass?: string;  // per etichette su chip/card
    featured?: boolean;
};

/**
 * 8 dekorów premium.
 * I file usano naming senza spazi: g1..g8.png
 */
const LAMINATE_FILES: { name: string; file: `g${number}` }[] = [
    { name: 'Nordic Bleached Oak', file: 'g1' },
    { name: 'Golden Light Chestnut', file: 'g2' },
    { name: 'Elegant Shine Maple', file: 'g3' },
    { name: 'Imperial Red Cherry', file: 'g4' },
    { name: 'Heritage Light Walnut', file: 'g5' },
    { name: 'Tuscan Red Cypress', file: 'g6' },
    { name: 'Exotic Teak Blend', file: 'g7' },
    { name: 'Royal Dark Walnut', file: 'g8' },
];

// id leggibile: kebab-case, senza apostrofi o simboli
function toSlug(name: string) {
    return name
        .toLowerCase()
        .replace(/['’]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// heuristica semplice per contrasto del testo sull’etichetta
function textClassFor(name: string) {
    return /(white|light|sand|beige|silver|natural|maple|oak)/i.test(name)
        ? 'text-neutral-900'
        : 'text-white';
}

export const laminateSlatOptions: LaminateSlatOption[] = LAMINATE_FILES.map(({ name, file }) => ({
    id: `laminate-${toSlug(name)}`,
    name,
    texture: `/mockups/zaluzje-laminowane/${file}.png`,
    textClass: textClassFor(name),
}));

// Esempio "featured":
// const mark = new Set(['Nordic Bleached Oak','Elegant Shine Maple']);
// laminateSlatOptions.forEach(o => { if (mark.has(o.name)) o.featured = true; });
