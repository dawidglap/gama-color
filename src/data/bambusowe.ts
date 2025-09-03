// src/data/bambusowe.ts
export type BambooSlatOption = {
    id: string;
    name: string;
    texture: string;     // /mockups/zaluzje-bambusowe/texture/bX.png
    textClass?: string;  // per etichette su chip/card
    featured?: boolean;
};

// mapping “nome visibile” → file b1..b5
const BAMBOO_FILES: { name: string; file: `b${number}` }[] = [
    { name: 'Opal White - 40T', file: 'b1' },
    { name: 'Golden Amber - 41T', file: 'b2' },
    { name: 'Desert Dawn - 42T', file: 'b3' },
    { name: 'Wenge Royale - 45T', file: 'b4' },
    { name: 'Obsidian Ebony - 46T', file: 'b5' },
];

// id leggibile: kebab-case
function toSlug(name: string) {
    return name
        .toLowerCase()
        .replace(/['’]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// heuristica semplice per contrasto del testo
function textClassFor(name: string) {
    return /(opal|golden|desert)/i.test(name) ? 'text-neutral-900' : 'text-white';
}

export const bambooSlatOptions: BambooSlatOption[] = BAMBOO_FILES.map(({ name, file }) => ({
    id: `bamboo-${toSlug(name)}`,
    name,
    texture: `/mockups/zaluzje-bambusowe/texture/${file}.webp`,
    textClass: textClassFor(name),
}));

// Esempio “featured” (opzionale)
// const mark = new Set(['Opal White 40t']);
// bambooSlatOptions.forEach(o => { if (mark.has(o.name)) o.featured = true; });
