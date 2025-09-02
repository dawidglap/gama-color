// src/data/zaluzjeVerticali.ts
// Kolory PRZYBLIŻONE na podstawie screenshotów — służą do podglądu w konfiguratorze.
// W razie potrzeby podmień hex-y na dokładniejsze.

export type VerticalOption = {
    id: string;        // np. 'poma-040', 'itaca-blue'
    name: string;      // etykieta dla UI
    hex: string;       // kolor pełny (bez tekstury)
    textClass?: string;
    featured?: boolean;
};

export type VerticalGroup = {
    id: string;        // np. 'poma'
    name: string;      // 'Poma'
    options: VerticalOption[];
};

// prosta funkcja do doboru koloru tekstu na kafelku
function textFor(hex: string): "text-white" | "text-neutral-900" {
    const c = hex.replace("#", "");
    const r = parseInt(c.slice(0, 2), 16);
    const g = parseInt(c.slice(2, 4), 16);
    const b = parseInt(c.slice(4, 6), 16);
    const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return lum > 0.6 ? "text-neutral-900" : "text-white";
}

const o = (id: string, name: string, hex: string, featured = false): VerticalOption => ({
    id, name, hex, textClass: textFor(hex), featured
});

export const ZALUZJE_VERTICALI: VerticalGroup[] = [
    {
        id: "poma",
        name: "Poma",
        options: [
            o("poma-040", "040", "#E9E6D5"),
            o("poma-060", "060", "#F4E271"),
            o("poma-070", "070", "#E9B88F"),
            o("poma-090", "090", "#BDB78A"),
            o("poma-132", "132", "#EDEDED"),
            o("poma-140", "140", "#FFFFFF"),
            o("poma-228", "228", "#B5B5B5"),
            o("poma-245", "245", "#8E8E8E"),
            o("poma-300", "300", "#DCD2B8"),
            o("poma-407", "407", "#B2C2B0"),
            o("poma-415", "415", "#CFE4E6"),
            o("poma-425", "425", "#9CB9D8"),
            o("poma-600", "600", "#F0A23A"),
            o("poma-701", "701", "#E7A6C0"),
        ],
    },
    {
        id: "madryt",
        name: "Madryt",
        options: [
            o("madryt-040", "040", "#E8E5D1"),
            o("madryt-075", "075", "#EFCDB2"),
            o("madryt-114", "114", "#F1E18A"),
            o("madryt-140", "140", "#EFEFEF"),
            o("madryt-231", "231", "#D9D4C7"),
            o("madryt-414", "414", "#6FA08A"),
            o("madryt-417", "417", "#C8D6E4"),
            o("madryt-447", "447", "#E28D51"),
            o("madryt-543", "543", "#99C0BA"),
            o("madryt-600", "600", "#F1CF69"),
            o("madryt-735", "735", "#CE6C51"),
        ],
    },
    {
        id: "praga",
        name: "Praga",
        options: [
            o("praga-114", "114", "#EFE18C"),
            o("praga-120", "120", "#E5D08E"),
            o("praga-132", "132", "#F0EEE8"),
            o("praga-228", "228", "#BDBDB7"),
            o("praga-404", "404", "#D2E7EA"),
            o("praga-410", "410", "#96B8AE"),
            o("praga-415", "415", "#C8D6E6"),
            o("praga-444", "444", "#E2B480"),
            o("praga-450", "450", "#5A77B3"),
            o("praga-636", "636", "#F6F5D8"),
            o("praga-735", "735", "#D47762"),
        ],
    },
    {
        id: "berlin",
        name: "Berlin",
        options: [
            o("berlin-045", "045", "#E9E2D2"),
            o("berlin-140", "140", "#DFE6F0"),
            o("berlin-388", "388", "#B5543E"),
            o("berlin-410", "410", "#96B6AE"),
            o("berlin-444", "444", "#EDC79F"),
            o("berlin-455", "455", "#6E87BD"),
            o("berlin-600", "600", "#F0D264"),
            o("berlin-620", "620", "#F0C638"),
            o("berlin-655", "655", "#7A1E27"),
            o("berlin-735", "735", "#D07A5F"),
            o("berlin-795", "795", "#4A2E27"),
        ],
    },
    {
        id: "kair",
        name: "Kair",
        options: [
            o("kair-045", "045", "#EDE5DF"),
            o("kair-076", "076", "#F2D7C4"),
            o("kair-114", "114", "#EFE18A"),
            o("kair-120", "120", "#F1DEA5"),
            o("kair-128", "128", "#F7F7F7"),
            o("kair-140", "140", "#E6D8E8"),
            o("kair-228", "228", "#CFCFCF"),
            o("kair-408", "408", "#C6D4A2"),
            o("kair-409", "409", "#7C8E4D"),
            o("kair-418", "418", "#C7D4E8"),
            o("kair-425", "425", "#7EA3D6"),
            o("kair-447", "447", "#E38D52"),
            o("kair-448", "448", "#E77F3F"),
            o("kair-455", "455", "#6D8AC6"),
            o("kair-570", "570", "#6E9D71"),
            o("kair-595", "595", "#E1A74B"),
            o("kair-600", "600", "#F2D87A"),
            o("kair-610", "610", "#F4E592"),
            o("kair-630", "630", "#F5D857"),
            o("kair-655", "655", "#7A1C26"),
            o("kair-735", "735", "#D27C5F"),
            o("kair-760", "760", "#CE5C36"),
        ],
    },
    {
        id: "londyn",
        name: "Londyn",
        options: [
            o("londyn-040", "040", "#DEE5C9"),
            o("londyn-045", "045", "#ECE5D6"),
            o("londyn-055", "055", "#E3DFC8"),
            o("londyn-060", "060", "#F2E273"),
            o("londyn-076", "076", "#E5B883"),
            o("londyn-128", "128", "#F7F7F2"),
            o("londyn-403", "403", "#CAD8C7"),
            o("londyn-411", "411", "#9FAF6C"),
            o("londyn-430", "430", "#AFC4D6"),
            o("londyn-600", "600", "#E3B35C"),
            o("londyn-731", "731", "#E0AD86"),
        ],
    },
    {
        id: "kama-bis",
        name: "Kama bis",
        options: [
            o("kama-128", "128", "#F4EFD7"),
            o("kama-140", "140", "#EADBD5"),
            o("kama-228", "228", "#D1D1C8"),
            o("kama-404", "404", "#CDEFE2"),
            o("kama-409", "409", "#85773D"),
            o("kama-415", "415", "#BFD7F0"),
            o("kama-418", "418", "#A9C9EB"),
            o("kama-425", "425", "#6E8EC9"),
            o("kama-450", "450", "#495E97"),
            o("kama-561", "561", "#84D2C3"),
            o("kama-663", "663", "#0E1B3D"),
        ],
    },
    {
        id: "operato",
        name: "Operato",
        options: [
            o("operato-040", "040", "#E3EAD8"),
            o("operato-070", "070", "#E9B483"),
            o("operato-132", "132", "#E6E6E1"),
            o("operato-228", "228", "#BDBCBB"),
            o("operato-300", "300", "#D9C5A6"),
            o("operato-407", "407", "#789E77"),
            o("operato-415", "415", "#9FBAC4"),
        ],
    },
    {
        id: "itaca",
        name: "Itaca",
        options: [
            o("itaca-blue", "Itaca blue", "#4E6C84"),
            o("itaca-bluegrey", "Itaca bluegrey", "#88A9C1"),
            o("itaca-camel", "Itaca camel", "#C69B6B"),
            o("itaca-champagne", "Itaca champagne", "#F1E2A9"),
            o("itaca-chestnut", "Itaca chestnut", "#8B5E47"),
            o("itaca-forestgreen", "Itaca forestgreen", "#2E5D4D"),
            o("itaca-green", "Itaca green", "#69AF9A"),
            o("itaca-grey", "Itaca grey", "#8E8E86"),
            o("itaca-huntergreen", "Itaca huntergreen", "#2C4F46"),
            o("itaca-ivory", "Itaca ivory", "#EFE9D3"),
            o("itaca-lemon", "Itaca lemon", "#E2D050"),
            o("itaca-lightgrey", "Itaca lightgrey", "#D7D5CE"),
            o("itaca-navy", "Itaca navy", "#344A62"),
            o("itaca-orchid", "Itaca orchid", "#C98590"),
            o("itaca-peach", "Itaca peach", "#F0C8B2"),
            o("itaca-peppermint", "Itaca peppermint", "#7DB081"),
            o("itaca-rust", "Itaca rust", "#C96A57"),
            o("itaca-seafoam", "Itaca seafoam", "#C9DCC8"),
            o("itaca-sienna", "Itaca sienna", "#B07249"),
            o("itaca-silvergrey", "Itaca silvergrey", "#C7C6BF"),
            o("itaca-skyblue", "Itaca skyblue", "#A9CBE7"),
            o("itaca-tan", "Itaca tan", "#C39C74"),
            o("itaca-vanilla", "Itaca vanilla", "#F6ECD6"),
            o("itaca-white", "Itaca white", "#FFFFFF"),
        ],
    },
    {
        id: "niagara",
        name: "Niagara",
        options: [
            o("niagara-blue", "Niagara blue", "#7692A9"),
            o("niagara-camel", "Niagara camel", "#A87A4D"),
            o("niagara-custard", "Niagara custard", "#EFE0B8"),
            o("niagara-green", "Niagara green", "#6EA382"),
            o("niagara-grey", "Niagara grey", "#A7A59B"),
            o("niagara-huntergreen", "Niagara huntergreen", "#2C463A"),
            o("niagara-ivory", "Niagara ivory", "#EFE8D6"),
            o("niagara-lemon", "Niagara lemon", "#EDD36A"),
            o("niagara-mauve", "Niagara mauve", "#C76E62"),
            o("niagara-mint", "Niagara mint", "#BBD9C7"),
            o("niagara-navy", "Niagara navy", "#253459"),
            o("niagara-redwine", "Niagara redwine", "#7C2F27"),
            o("niagara-sienna", "Niagara sienna", "#B17348"),
            o("niagara-sunbeam", "Niagara sunbeam", "#E3AE2B"),
            o("niagara-white", "Niagara white", "#FFFFFF"),
        ],
    },
];

// wygodne eksporty
export const VERTICALI_ALL: VerticalOption[] = ZALUZJE_VERTICALI.flatMap(g => g.options);
export const VERTICALI_BY_ID: Record<string, VerticalOption> =
    Object.fromEntries(VERTICALI_ALL.map(v => [v.id, v]));
export const VERTICALI_FEATURED: VerticalOption[] =
    [
        "poma-140", "poma-415", "praga-450", "berlin-600",
        "kair-425", "kama-663", "itaca-ivory", "niagara-navy",
    ].map(id => VERTICALI_BY_ID[id]).filter(Boolean);
