// src/data/drewnianeSlats.ts
export type WoodSlatOption = {
    id: string;
    name: string;
    texture: string;     // /mockups/zaluzje-drewniane/texture/gX.png
    textClass?: string;  // per etichette su chip/card
    featured?: boolean;
};

// mapping “nome visibile” → file g1..g13
const WOOD_FILES: { name: string; file: `g${number}` }[] = [
    { name: 'Artic Bleached White', file: 'g1' },
    { name: 'Crystal White', file: 'g2' },
    { name: 'Elegant Natural', file: 'g3' },
    { name: 'Emerald Green', file: 'g4' },
    { name: 'Golden Maple', file: 'g5' },
    { name: 'Imperial Cherry Wood', file: 'g6' },
    { name: "Luxury Tiger's Eye", file: 'g7' },
    { name: 'Majestic Mahogany', file: 'g8' },
    { name: 'Midnight Ebony', file: 'g9' },
    { name: 'Obsidian Black', file: 'g10' },
    { name: 'Prestige Light Blue', file: 'g11' },
    { name: 'Royal Oak', file: 'g12' },
    { name: 'Silver Smoke Grey', file: 'g13' },
];

// id leggibile: kebab-case, senza apostrofi o simboli
function toSlug(name: string) {
    return name
        .toLowerCase()
        .replace(/['’]/g, '')        // togli apostrofi
        .replace(/[^a-z0-9]+/g, '-') // non alfanumerici → trattino
        .replace(/^-+|-+$/g, '');    // trim trattini
}

// heuristica semplice per contrasto del testo
function textClassFor(name: string) {
    return /(white|light|silver|natural|maple|oak|blue)/i.test(name)
        ? 'text-neutral-900'
        : 'text-white';
}

export const woodSlatOptions: WoodSlatOption[] = WOOD_FILES.map(({ name, file }) => ({
    id: `wood-${toSlug(name)}`,
    name,
    // ⬇️ path senza spazi: g1..g13
    texture: `/mockups/zaluzje-drewniane/texture/${file}.png`,
    textClass: textClassFor(name),
}));

// Esempio “featured” (opzionale)
// const mark = new Set(['Royal Oak', 'Majestic Mahogany', 'Obsidian Black']);
// woodSlatOptions.forEach(o => { if (mark.has(o.name)) o.featured = true; });
