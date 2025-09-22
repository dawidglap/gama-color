// src/data/roletyZewnColors.ts
import type { ColorOption } from '@/data/plisyOptions';

/**
 * Kolory skrzynki i prowadnic — na podstawie zdjęcia, z nazwami PL.
 * Tekstury: lascio pronte le chiavi, se in futuro vorrai aggiungerle in /public/textures/...
 */
export const cassetteZewnColors: ColorOption[] = [
    { id: 'cass-bialy', name: 'Biały', hex: '#FFFFFF' },
    { id: 'cass-biel-kremowa', name: 'Biel kremowa', hex: '#F3EEE7' }, // crema
    { id: 'cass-kosc-slon', name: 'Kość słoniowa', hex: '#EDE6D6' }, // ivory
    { id: 'cass-bezowy', name: 'Beżowy', hex: '#DCCCB5' },
    { id: 'cass-szary', name: 'Szary', hex: '#9B9EA1' },
    { id: 'cass-jasny-szary', name: 'Jasny szary', hex: '#C8CACC' },

    { id: 'cass-srebrny', name: 'Srebrny', hex: '#BFC3C7' },
    { id: 'cass-stalowa-oliwka', name: 'Stalowa oliwka', hex: '#6F766F' },  // grigio/verde “steel olive”
    { id: 'cass-antracyt', name: 'Antracyt (RAL 7016)', hex: '#383E42' },

    { id: 'cass-zloty-dab', name: 'Złoty dąb', hex: '#A66A2C' },
    { id: 'cass-orzech', name: 'Orzech', hex: '#6B4A2E' },
    { id: 'cass-brazowy', name: 'Brązowy', hex: '#4A2F25' },
    { id: 'cass-ciemny-braz', name: 'Ciemny brąz', hex: '#3A231A' },
];

/**
 * Palette lameli — molto ampia come nella barra arcobaleno.
 * Per performance/UX ho generato 96 tinte evenly-spaced sull’intero spettro,
 * con nomi leggibili (gruppi cromatici PL).
 */
type Bucket = { label: string; from: number; to: number };
const BUCKETS: Bucket[] = [
    { label: 'Żółcie', from: 45, to: 70 },
    { label: 'Pomarańcze', from: 15, to: 44 },
    { label: 'Czerwienie', from: -15, to: 14 }, // negativo ≈ vicino 360
    { label: 'Róże', from: 345, to: 360 },
    { label: 'Fiolety', from: 285, to: 344 },
    { label: 'Granaty', from: 230, to: 284 },
    { label: 'Niebieskie', from: 200, to: 229 },
    { label: 'Turkusy', from: 170, to: 199 },
    { label: 'Zielenie', from: 90, to: 169 },
    { label: 'Oliwkowe', from: 71, to: 89 },
    { label: 'Beże/Brązy', from: 20, to: 69 }, // overlap soft; ok per naming
    { label: 'Szarości', from: 0, to: 0 }, // usato solo per neutri extra
];

function hueBucketName(h: number): string {
    const hh = ((h % 360) + 360) % 360;
    const b = BUCKETS.find(b =>
        b.from <= b.to ? (hh >= b.from && hh <= b.to) : (hh >= b.from || hh <= b.to)
    );
    return b?.label ?? 'Kolor';
}

function hslToHex(h: number, s: number, l: number): string {
    s /= 100; l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const toHex = (x: number) => Math.round(255 * x).toString(16).padStart(2, '0');
    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

/** 96 colori: 12 bucket × 8 step, con saturazione/luminosità adatte alle lamelle */
export const lamellaZewnColors: ColorOption[] = Array.from({ length: 96 }).map((_, i) => {
    const step = i % 8;
    const bucketIndex = Math.floor(i / 8);
    const hue = Math.round((i * 360) / 96); // sweep arcobaleno
    const sat = 72 - step * 3;              // leggero calo verso i grigi
    const lig = 52 - (step > 4 ? (step - 4) * 3 : 0); // qualche tono più scuro
    const hex = hslToHex(hue, sat, lig);
    const family = hueBucketName(hue);
    const name = `${family} ${String(step + 1).padStart(2, '0')}`;
    return { id: `lam-${i + 1}`, name, hex };
});
