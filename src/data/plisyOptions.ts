// src/data/plisyOptions.ts
export type ColorOption = {
    id: string;
    name: string;
    hex?: string;      // fallback / colore pieno
    texture?: string;  // path in /public (PER ORA NON USATO)
};

/* ========= Utilities ========= */
function hslToHex(h: number, s: number, l: number): string {
    s /= 100; l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const toHex = (x: number) => Math.round(255 * x).toString(16).padStart(2, '0');
    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}
function hashToHex(name: string): string {
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    const hue = h % 360;
    const sat = 45 + (h % 30); // 45–75
    const lig = 40 + (h % 20); // 40–59
    return hslToHex(hue, sat, lig);
}

type Entry = { slug: string; name: string };

/** Crea opzioni SOLO con HEX (texture lasciata commentata per uso futuro). */
function makeHexOptions(prefix: string, items: Entry[]): ColorOption[] {
    return items.map(({ slug, name }) => ({
        id: `${prefix}-${slug}`,
        name,
        hex: hashToHex(`${prefix}:${name}`),
        // texture: `/textures/plisy/${prefix}/${slug}.jpg`, // <-- riattiva quando avrai i file
    }));
}

/* ========= Liste ========= */
// TREND 01 — Kamari 004..028
const trend01 = makeHexOptions('trend01', [
    { slug: 'kamari-004', name: 'Kamari 004' },
    { slug: 'kamari-005', name: 'Kamari 005' },
    { slug: 'kamari-006', name: 'Kamari 006' },
    { slug: 'kamari-007', name: 'Kamari 007' },
    { slug: 'kamari-009', name: 'Kamari 009' },
    { slug: 'kamari-010', name: 'Kamari 010' },
    { slug: 'kamari-011', name: 'Kamari 011' },
    { slug: 'kamari-015', name: 'Kamari 015' },
    { slug: 'kamari-016', name: 'Kamari 016' },
    { slug: 'kamari-017', name: 'Kamari 017' },
    { slug: 'kamari-018', name: 'Kamari 018' },
    { slug: 'kamari-019', name: 'Kamari 019' },
    { slug: 'kamari-020', name: 'Kamari 020' },
    { slug: 'kamari-021', name: 'Kamari 021' },
    { slug: 'kamari-022', name: 'Kamari 022' },
    { slug: 'kamari-023', name: 'Kamari 023' },
    { slug: 'kamari-024', name: 'Kamari 024' },
    { slug: 'kamari-025', name: 'Kamari 025' },
    { slug: 'kamari-026', name: 'Kamari 026' },
    { slug: 'kamari-027', name: 'Kamari 027' },
    { slug: 'kamari-028', name: 'Kamari 028' },
]);

// TREND 02 — Femi / Shine
const trend02 = makeHexOptions('trend02', [
    { slug: 'femi-101', name: 'Femi 101' },
    { slug: 'femi-102', name: 'Femi 102' },
    { slug: 'femi-105', name: 'Femi 105' },
    { slug: 'femi-106', name: 'Femi 106' },
    { slug: 'femi-108', name: 'Femi 108' },
    { slug: 'femi-110', name: 'Femi 110' },
    { slug: 'femi-111', name: 'Femi 111' },
    { slug: 'femi-113', name: 'Femi 113' },
    { slug: 'femi-114', name: 'Femi 114' },
    { slug: 'femi-115', name: 'Femi 115' },
    { slug: 'femi-116', name: 'Femi 116' },
    { slug: 'shine-1040', name: 'Shine 1040' },
    { slug: 'shine-1041', name: 'Shine 1041' },
    { slug: 'shine-1042', name: 'Shine 1042' },
    { slug: 'shine-1043', name: 'Shine 1043' },
    { slug: 'shine-1044', name: 'Shine 1044' },
    { slug: 'shine-1045', name: 'Shine 1045' },
    { slug: 'shine-1046', name: 'Shine 1046' },
    { slug: 'shine-1047', name: 'Shine 1047' },
    { slug: 'shine-1048', name: 'Shine 1048' },
    { slug: 'shine-1049', name: 'Shine 1049' },
    { slug: 'shine-1050', name: 'Shine 1050' },
    { slug: 'shine-1051', name: 'Shine 1051' },
    { slug: 'shine-1052', name: 'Shine 1052' },
    { slug: 'shine-1053', name: 'Shine 1053' },
    { slug: 'shine-1054', name: 'Shine 1054' },
]);

// TREND 03 — California / Frankfurt / Jaipur / Kala / Op
const trend03 = makeHexOptions('trend03', [
    { slug: 'california-01', name: 'California 01' },
    { slug: 'california-02', name: 'California 02' },
    { slug: 'california-003', name: 'California 003' },
    { slug: 'frankfurt-7099', name: 'Frankfurt 7099' },
    { slug: 'jaipur-6203', name: 'Jaipur 6203' },
    { slug: 'jaipur-6505', name: 'Jaipur 6505' },
    { slug: 'jaipur-6506', name: 'Jaipur 6506' },
    { slug: 'kala-7650', name: 'Kala 7650' },
    { slug: 'kala-7693', name: 'Kala 7693' },
    { slug: 'kala-7695', name: 'Kala 7695' },
    { slug: 'kala-7699', name: 'Kala 7699' },
    { slug: 'kala-7700', name: 'Kala 7700' },
    { slug: 'kala-7701', name: 'Kala 7701' },
    { slug: 'op-101', name: 'Op 101' },
    { slug: 'op-102', name: 'Op 102' },
    { slug: 'op-103', name: 'Op 103' },
    { slug: 'op-104', name: 'Op 104' },
]);

// TREND 04 — Office / Stockholm
const trend04 = makeHexOptions('trend04', [
    { slug: 'office-327', name: 'Office 327' },
    { slug: 'office-2011', name: 'Office 2011' },
    { slug: 'office-2298', name: 'Office 2298' },
    { slug: 'office-4135', name: 'Office 4135' },
    { slug: 'office-5171', name: 'Office 5171' },
    { slug: 'office-9058', name: 'Office 9058' },
    { slug: 'office-9136', name: 'Office 9136' },
    { slug: 'stockholm-7300', name: 'Stockholm 7300' },
    { slug: 'stockholm-7301', name: 'Stockholm 7301' },
    { slug: 'stockholm-7302', name: 'Stockholm 7302' },
    { slug: 'stockholm-7304', name: 'Stockholm 7304' },
    { slug: 'stockholm-7307', name: 'Stockholm 7307' },
    { slug: 'stockholm-7308', name: 'Stockholm 7308' },
    { slug: 'stockholm-7309', name: 'Stockholm 7309' },
    { slug: 'stockholm-7311', name: 'Stockholm 7311' },
    { slug: 'stockholm-7312', name: 'Stockholm 7312' },
    { slug: 'stockholm-7313', name: 'Stockholm 7313' },
    { slug: 'stockholm-7315', name: 'Stockholm 7315' },
    { slug: 'stockholm-7316', name: 'Stockholm 7316' },
]);

// TREND 05 — Kamari Pearl
const trend05 = makeHexOptions('trend05', [
    { slug: 'kamari-pearl-204', name: 'Kamari Pearl 204' },
    { slug: 'kamari-pearl-205', name: 'Kamari Pearl 205' },
    { slug: 'kamari-pearl-206', name: 'Kamari Pearl 206' },
    { slug: 'kamari-pearl-207', name: 'Kamari Pearl 207' },
    { slug: 'kamari-pearl-209', name: 'Kamari Pearl 209' },
    { slug: 'kamari-pearl-210', name: 'Kamari Pearl 210' },
    { slug: 'kamari-pearl-211', name: 'Kamari Pearl 211' },
    { slug: 'kamari-pearl-215', name: 'Kamari Pearl 215' },
    { slug: 'kamari-pearl-216', name: 'Kamari Pearl 216' },
    { slug: 'kamari-pearl-217', name: 'Kamari Pearl 217' },
    { slug: 'kamari-pearl-218', name: 'Kamari Pearl 218' },
    { slug: 'kamari-pearl-219', name: 'Kamari Pearl 219' },
    { slug: 'kamari-pearl-220', name: 'Kamari Pearl 220' },
    { slug: 'kamari-pearl-222', name: 'Kamari Pearl 222' },
    { slug: 'kamari-pearl-223', name: 'Kamari Pearl 223' },
    { slug: 'kamari-pearl-224', name: 'Kamari Pearl 224' },
    { slug: 'kamari-pearl-225', name: 'Kamari Pearl 225' },
    { slug: 'kamari-pearl-226', name: 'Kamari Pearl 226' },
    { slug: 'kamari-pearl-227', name: 'Kamari Pearl 227' },
    { slug: 'kamari-pearl-228', name: 'Kamari Pearl 228' },
]);

// TREND 06 — Montreal
const trend06 = makeHexOptions('trend06', [
    { slug: 'montreal-7510', name: 'Montreal 7510' },
    { slug: 'montreal-7513', name: 'Montreal 7513' },
    { slug: 'montreal-7515', name: 'Montreal 7515' },
    { slug: 'montreal-7520', name: 'Montreal 7520' },
    { slug: 'montreal-7521', name: 'Montreal 7521' },
    { slug: 'montreal-7523', name: 'Montreal 7523' },
    { slug: 'montreal-7526', name: 'Montreal 7526' },
    { slug: 'montreal-7527', name: 'Montreal 7527' },
    { slug: 'montreal-7610', name: 'Montreal 7610' },
    { slug: 'montreal-7613', name: 'Montreal 7613' },
    { slug: 'montreal-7615', name: 'Montreal 7615' },
    { slug: 'montreal-7620', name: 'Montreal 7620' },
    { slug: 'montreal-7621', name: 'Montreal 7621' },
    { slug: 'montreal-7623', name: 'Montreal 7623' },
    { slug: 'montreal-7626', name: 'Montreal 7626' },
    { slug: 'montreal-7627', name: 'Montreal 7627' },
]);

// TREND 07 — Amazone / Brussels / Delhi / Graffic / Jakarta / Kent / Kuala / Leipzig / Sofia / York
const trend07 = makeHexOptions('trend07', [
    { slug: 'amazone-2702', name: 'Amazone 2702' },
    { slug: 'brussels-1300', name: 'Brussels 1300' },
    { slug: 'delhi', name: 'Delhi' },
    { slug: 'graffic', name: 'Graffic' },
    { slug: 'jakarta-8450', name: 'Jakarta 8450' },
    { slug: 'jakarta-8452', name: 'Jakarta 8452' },
    { slug: 'kent-6350', name: 'Kent 6350' },
    { slug: 'kent-6353', name: 'Kent 6353' },
    { slug: 'kuala', name: 'Kuala' },
    { slug: 'leipzig-8355', name: 'Leipzig 8355' },
    { slug: 'leipzig-8550', name: 'Leipzig 8550' },
    { slug: 'sofia-8400', name: 'Sofia 8400' },
    { slug: 'sofia-8402', name: 'Sofia 8402' },
    { slug: 'sofia-8410', name: 'Sofia 8410' },
    { slug: 'sofia-8411', name: 'Sofia 8411' },
    { slug: 'york-8350', name: 'York 8350' },
    { slug: 'york-8351', name: 'York 8351' },
    { slug: 'york-8360', name: 'York 8360' },
    { slug: 'york-8361', name: 'York 8361' },
]);

// TREND 08 — Samoa / Stone / Torres
const trend08 = makeHexOptions('trend08', [
    { slug: 'samoa-001', name: 'Samoa 001' },
    { slug: 'samoa-002', name: 'Samoa 002' },
    { slug: 'samoa-003', name: 'Samoa 003' },
    { slug: 'samoa-004', name: 'Samoa 004' },
    { slug: 'samoa-005', name: 'Samoa 005' },
    { slug: 'stone-001', name: 'Stone 001' },
    { slug: 'stone-002', name: 'Stone 002' },
    { slug: 'stone-003', name: 'Stone 003' },
    { slug: 'stone-004', name: 'Stone 004' },
    { slug: 'stone-005', name: 'Stone 005' },
    { slug: 'torres-1069', name: 'Torres 1069' },
    { slug: 'torres-2275', name: 'Torres 2275' },
    { slug: 'torres-2276', name: 'Torres 2276' },
    { slug: 'torres-2294', name: 'Torres 2294' },
    { slug: 'torres-2295', name: 'Torres 2295' },
    { slug: 'torres-4139', name: 'Torres 4139' },
    { slug: 'torres-4140', name: 'Torres 4140' },
    { slug: 'torres-5176', name: 'Torres 5176' },
    { slug: 'torres-8134', name: 'Torres 8134' },
    { slug: 'torres-9125', name: 'Torres 9125' },
]);

// TREND 09 — Denim / Flax
const trend09 = makeHexOptions('trend09', [
    { slug: 'denim-7912', name: 'Denim 7912' },
    { slug: 'denim-7913', name: 'Denim 7913' },
    { slug: 'denim-7914', name: 'Denim 7914' },
    { slug: 'denim-7916', name: 'Denim 7916' },
    { slug: 'denim-7918', name: 'Denim 7918' },
    { slug: 'denim-7919', name: 'Denim 7919' },
    { slug: 'denim-7921', name: 'Denim 7921' },
    { slug: 'denim-7924', name: 'Denim 7924' },
    { slug: 'denim-7925', name: 'Denim 7925' },
    { slug: 'denim-7928', name: 'Denim 7928' },
    { slug: 'flax-1071', name: 'Flax 1071' },
    { slug: 'flax-1072', name: 'Flax 1072' },
    { slug: 'flax-2311', name: 'Flax 2311' },
    { slug: 'flax-2312', name: 'Flax 2312' },
    { slug: 'flax-2319', name: 'Flax 2319' },
    { slug: 'flax-2320', name: 'Flax 2320' },
    { slug: 'flax-4141', name: 'Flax 4141' },
    { slug: 'flax-9084', name: 'Flax 9084' },
    { slug: 'flax-9140', name: 'Flax 9140' },
    { slug: 'flax-9141', name: 'Flax 9141' },
]);

// TREND 10 — Basel
const trend10 = makeHexOptions('trend10', [
    { slug: 'basel-1201', name: 'Basel 1201' },
    { slug: 'basel-1202', name: 'Basel 1202' },
    { slug: 'basel-1204', name: 'Basel 1204' },
    { slug: 'basel-1207', name: 'Basel 1207' },
    { slug: 'basel-1209', name: 'Basel 1209' },
    { slug: 'basel-1210', name: 'Basel 1210' },
    { slug: 'basel-1211', name: 'Basel 1211' },
    { slug: 'basel-1213', name: 'Basel 1213' },
    { slug: 'basel-1215', name: 'Basel 1215' },
    { slug: 'basel-1216', name: 'Basel 1216' },
    { slug: 'basel-1217', name: 'Basel 1217' },
    { slug: 'basel-1218', name: 'Basel 1218' },
    { slug: 'basel-1219', name: 'Basel 1219' },
    { slug: 'basel-1220', name: 'Basel 1220' },
    { slug: 'basel-1221', name: 'Basel 1221' },
    { slug: 'basel-1222', name: 'Basel 1222' },
    { slug: 'basel-1223', name: 'Basel 1223' },
    { slug: 'basel-1225', name: 'Basel 1225' },
    { slug: 'basel-1226', name: 'Basel 1226' },
    { slug: 'basel-1230', name: 'Basel 1230' },
]);

/* ========= Export ========= */
export const plisyFabricOptions: ColorOption[] = [
    ...trend01, ...trend02, ...trend03, ...trend04, ...trend05,
    ...trend06, ...trend07, ...trend08, ...trend09, ...trend10,
];

// src/data/plisyOptions.ts  (SEZIONE PROFILI — KOMPLET 12 Z OBRAZKA)
export const plisyProfileOptions: ColorOption[] = [
    // z teksturą (masz pliki)
    { id: 'prof-srebrny', name: 'Srebrny', hex: '#bfc1c2' },

    { id: 'prof-bialy', name: 'Biały', hex: '#ffffff', texture: '/textures/bialy.webp' },
    { id: 'prof-brazowy', name: 'Brązowy', hex: '#3c2f2a', texture: '/textures/brazowy.webp' },
    { id: 'prof-dab-bagienny', name: 'Dąb bagienny', hex: '#5e4635', texture: '/textures/dab-bagienny.webp' },
    { id: 'prof-mahon', name: 'Mahoń', hex: '#6b2d1a', texture: '/textures/mahon.webp' },
    { id: 'prof-orzech', name: 'Orzech', hex: '#5a3d2a', texture: '/textures/orzech.webp' },
    { id: 'prof-sosna', name: 'Sosna', hex: '#cfb481', texture: '/textures/sosna.webp' },
    { id: 'prof-zloty-dab', name: 'Złoty dąb', hex: '#a8742e', texture: '/textures/zloty-dab.webp' },

    // bez tekstury (fallback na HEX)
    { id: 'prof-antracyt', name: 'Antracyt', hex: '#2f2f30' },   // ~ RAL 7016
    { id: 'prof-czarny', name: 'Czarny', hex: '#000000' },
    { id: 'prof-oliwka', name: 'Oliwka', hex: '#6b6e3a' },
    { id: 'prof-szampanski', name: 'Szampański', hex: '#e0cfa9' },
];

