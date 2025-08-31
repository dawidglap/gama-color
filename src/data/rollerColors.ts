// Tipi condivisi
export type ColorOption = {
    id: string;
    name: string;
    hex?: string;      // per tkanina o fallback
    code?: string;
    featured?: boolean;
};

export type CassetteColorOption = ColorOption & {
    texture?: string;  // path pubblico: /images/textures/xxx.webp
    textClass?: string; // opzionale: classe testo per i pannelli (es. "text-white")
};

/* ---------------- KASETA/PROWADNICE: con TEXTURE ---------------- */
// Metti i file in /public/images/textures/...
export const cassetteColors: CassetteColorOption[] = [
    { id: 'sosna', name: 'Sosna', code: 'DB 703', texture: '/images/textures/sosna.webp', textClass: 'text-white', featured: true },
    { id: 'bialy', name: 'Biały', code: 'RAL 9016', texture: '/images/textures/bialy.webp', textClass: 'text-neutral-900', featured: true },
    { id: 'brazowy', name: 'Brązowy', code: 'RAL 8017', texture: '/images/textures/brazowy.webp', textClass: 'text-white', featured: true },
    { id: 'dab-bagienny', name: 'Dąb bagienny', code: 'RAL 7016', texture: '/images/textures/dab-bagienny.webp', textClass: 'text-white', featured: true },
    { id: 'mahon', name: 'Mahoń', code: 'RAL 9006', texture: '/images/textures/mahon.webp', textClass: 'text-white', featured: true },
    { id: 'orzech', name: 'Orzech', code: 'RAL 7040', texture: '/images/textures/orzech.webp', textClass: 'text-white', featured: true },
    { id: 'zloty-dab', name: 'Złoty dąb', code: 'RAL 8017', texture: '/images/textures/zloty-dab.webp', textClass: 'text-white', featured: true },
    // Se vuoi anche "sosna": togli featured o aggiungilo
    // { id: 'sosna',  name: 'Sosna', code: '—', texture: '/images/textures/sosna.webp', textClass:'text-neutral-900' },
];
export const featuredCassetteColors = cassetteColors.filter(c => c.featured);

/* ---------------- TKANINA: lista ordinata dai tuoi screenshot ---------------- */
// (come prima: generiamo HEX provvisori finché non hai i valori reali)
export const fabricCodesOrdered: string[] = [
    // a6xx
    'e503', 'a602', 'a603', 'a604', 'a605', 'a606',
    'a607', 'a608', 'a609', 'a610', 'a611', 'a612',
    'a613', 'a614', 'a615', 'a616', 'a617', 'a618',
    'a619', 'a620', 'a621', 'a622', 'a623', 'a624',
    'a625', 'a626', 'a627', 'a628', 'a629', 'a630',
    'a631', 'a632', 'a633', 'a634', 'a635',
    // a8xx
    'a801', 'a802', 'a803', 'a804', 'a805', 'a806',
    'a807', 'a808', 'a809', 'a810', 'a811', 'a812',
    'a813', 'a814', 'a815', 'a816', 'a817', 'a818',
    'a819', 'a820',
    // b901..b1003
    'b901', 'b902', 'b903', 'b904', 'b905', 'b907',
    'b908', 'b909', 'b910', 'b1001', 'b1002', 'b1003',
    // b301..b4070
    'b301', 'b310', 'b311', 'b321', 'b330', 'b338',
    'b339', 'b341', 'b342', 'b351', 'b357', 'b381',
    'b401', 'b402', 'b403', 'b404-v1', 'b404-v2', 'b405-v1',
    'b406', 'b411', 'b412', 'b413', 'b414', 'b434',
    'b435', 'b436', 'b437', 'b4070',
    // b7xx
    'b702', 'b703', 'b704', 'b706', 'b713', 'b714', 'b715', 'b716',
    // c1xx/c3xx
    'c101', 'c102', 'c103', 'c104', 'c105', 'c106',
    'c107', 'c108', 'c109', 'c110', 'c301', 'c302',
    'c303', 'c304', 'c305', 'c306', 'c307', 'c308', 'c309',
    // e5xx
    'e501', 'e502', 'a601',
    // m1xx/m2xx
    'm101', 'm103', 'm104', 'm201', 'm202', 'm203', 'm204',
];

// colore approssimato deterministico
export function approxHexFromCode(code: string): string {
    const clean = code.toLowerCase();
    const n = parseInt(clean.replace(/[^\d]/g, ''), 10) || 0;
    const family = clean[0]; // a,b,c,e,m
    const seed = [...clean].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const baseHue = family === 'a' ? 40 : family === 'b' ? 20 : family === 'c' ? 210 : family === 'e' ? 30 : family === 'm' ? 28 : 180;
    const hue = (baseHue + (n * 11 + seed) % 360) % 360;
    const sat = family === 'e' ? 20 : family === 'a' ? 45 : family === 'b' ? 35 : family === 'm' ? 50 : 60;
    const light = family === 'e' ? 92 : family === 'a' ? 78 : family === 'b' ? 70 : family === 'm' ? 55 : 60;
    const h = hue / 360, s = sat / 100, l = light / 100;
    const toRgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1; if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t; if (t < 1 / 2) return q; if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6; return p;
    };
    const q = l < .5 ? l * (1 + s) : l + s - l * s; const p = 2 * l - q;
    const r = Math.round(toRgb(p, q, h + 1 / 3) * 255);
    const g = Math.round(toRgb(p, q, h) * 255);
    const b = Math.round(toRgb(p, q, h - 1 / 3) * 255);
    const hex = (x: number) => x.toString(16).padStart(2, '0');
    return `#${hex(r)}${hex(g)}${hex(b)}`;
}

export const fabricColors: ColorOption[] = fabricCodesOrdered.map(code => ({
    id: code.replace(/\s+/g, '-'),
    name: code.replace(/-/g, ' ').toUpperCase(),
    code: code.toUpperCase(),
    hex: approxHexFromCode(code),
}));
