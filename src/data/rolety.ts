// src/data/rolety.ts
const CATEGORY = "Rolety materiałowe" as const;

export type RoletyVariant = {
    slug: string;
    title: string;
    short: string;
    description: string;
    image: string;
    asideImage?: string;
    category: typeof CATEGORY;
    galleryImages?: string[];
    /** Config del color configurator per variante */
    colorConfig?: {
        /** Limita i colori cassetta/prowadnice agli ID specificati (es. ['bialy','brazowy']) */
        cassetteIds?: string[];
    };
};

export const ROLETY: Record<string, RoletyVariant> = {
    "vegas-classic": {
        slug: "vegas-classic",
        title: "Rolety Vegas Classic",
        short: "Elegancka kaseta + płaskie prowadnice. Montaż do listwy przyszybowej.",
        description:
            "Vegas Classic to uznany system rolet w opływowej kasecie (aluminium lub PVC). Prowadnice klejone do listew utrzymują tkaninę przy szybie, również w oknie uchylonym. Samohamujący mechanizm pozwala zatrzymać roletę na dowolnej wysokości i łatwo zmienić stronę łańcuszka. Szeroki wybór tkanin – także możliwość nadruku (Fotorolety).",
        image: "/images/rolety/vegas-classic/g1.webp",
        asideImage: "/images/rolety/vegas-classic/g6.webp",
        category: CATEGORY,
        galleryImages: [
            "/images/rolety/vegas-classic/g1.webp",
            "/images/rolety/vegas-classic/g2.webp",
            "/images/rolety/vegas-classic/g3.webp",
            "/images/rolety/vegas-classic/g5.webp",
        ],
    },

    "vegas-profil": {
        slug: "vegas-profil",
        title: "Rolety Vegas Profil",
        short: "System w całości przyklejany. Prowadnice w kształcie C.",
        description:
            "Prowadnice typu C pozwalają montować roletę na oknach z przewiązkami i na całej wysokości drzwi balkonowych. Montaż szybki i czysty, bez wiercenia w ramie.",
        image: "/images/rolety/vegas-profil-hero.jpg",
        asideImage: "/images/rolety/vegas-profil-aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/rolety/vegas-profil/g1.webp",
            "/images/rolety/vegas-profil/g2.webp",
            "/images/rolety/vegas-profil/g3.webp",
            "/images/rolety/vegas-profil/g4.webp",
        ],
    },

    "vegas-mini": {
        slug: "vegas-mini",
        title: "Rolety Vegas Mini",
        short: "Wolnowiszący, ekonomiczny system na wymiar.",
        description:
            "Najprostsze i najtańsze rolety materiałowe. Montaż na listwie przyszybowej lub bezinwazyjnie na ramie okna.",
        image: "/images/rolety/vegas-mini-hero.jpg",
        asideImage: "/images/rolety/vegas-mini-aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/rolety/vegas-mini/g1.webp",
            "/images/rolety/vegas-mini/g2.webp",
            "/images/rolety/vegas-mini/g3.webp",
            "/images/rolety/vegas-mini/g4.webp",
        ],
        // ⬇️ Limiti per il configuratore colori (solo biały/brązowy)
        colorConfig: {
            cassetteIds: ["bialy", "brazowy"],
        },
    },

    "rolety-wolnowiszace": {
        slug: "rolety-wolnowiszace",
        title: "Rolety wolnowiszące",
        short: "Klasyczna osłona i dekoracja większych powierzchni.",
        description:
            "Montaż nad wnęką, do sufitu, we wnęce lub bezpośrednio na ramie. Sprawdzą się także jako ekran projekcyjny.",
        image: "/images/rolety/wolnowiszace-hero.jpg",
        asideImage: "/images/rolety/wolnowiszace-aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/rolety/wolnowiszace/g1.webp",
            "/images/rolety/wolnowiszace/g2.webp",
            "/images/rolety/wolnowiszace/g3.webp",
            "/images/rolety/wolnowiszace/g4.webp",
        ],
        // ⬇️ Limiti per il configuratore colori (solo biały/brązowy)
        colorConfig: {
            cassetteIds: ["bialy", "brazowy"],
        },
    },

    "rolety-dzien-noc": {
        slug: "rolety-dzien-noc",
        title: "Rolety dzień i noc",
        short: "Dwie warstwy tkaniny – pełna kontrola światła.",
        description:
            "Pasy zaciemniające i transparentne ułożone naprzemiennie. Zgrabna kaseta i estetyczne prowadnice.",
        image: "/images/rolety/dzien-noc-hero.jpg",
        asideImage: "/images/rolety/dzien-noc-aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/rolety/dzien-noc/g1.webp",
            "/images/rolety/dzien-noc/g2.webp",
            "/images/rolety/dzien-noc/g3.webp",
            "/images/rolety/dzien-noc/g4.webp",
        ],
    },

    "rolety-dachowe-wolnowiszace": {
        slug: "rolety-dachowe-wolnowiszace",
        title: "Rolety dachowe wolnowiszące",
        short: "Komfort latem i zimą dla poddasza.",
        description:
            "Chronią przed nadmiernym słońcem i ułatwiają nocny wypoczynek. Tkaniny antyrefleksyjne ograniczają nagrzewanie.",
        image: "/images/rolety/dachowe-wolnowiszace-hero.jpg",
        asideImage: "/images/rolety/dachowe-wolnowiszace-aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/rolety/dachowe-wolnowiszace/g1.webp",
            "/images/rolety/dachowe-wolnowiszace/g2.webp",
            "/images/rolety/dachowe-wolnowiszace/g3.webp",
            "/images/rolety/dachowe-wolnowiszace/g4.webp",
        ],
    },

    "rolety-dachowe-w-kasecie": {
        slug: "rolety-dachowe-w-kasecie",
        title: "Rolety dachowe w kasecie",
        short: "Kaseta i prowadnice – maksymalna kontrola światła.",
        description:
            "Do okien dachowych drewnianych i PVC. Prowadnice utrzymują tkaninę przy szybie i minimalizują dopływ światła.",
        image: "/images/rolety/dachowe-w-kasecie-hero.jpg",
        asideImage: "/images/rolety/dachowe-w-kasecie-aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/rolety/dachowe-w-kasecie/g1.webp",
            "/images/rolety/dachowe-w-kasecie/g2.webp",
            "/images/rolety/dachowe-w-kasecie/g3.webp",
            "/images/rolety/dachowe-w-kasecie/g4.webp",
        ],
    },
};

export const ROLETY_LIST = Object.values(ROLETY);
