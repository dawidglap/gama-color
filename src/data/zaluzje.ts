// src/data/zaluzje.ts
const CATEGORY = "Żaluzje" as const;

export type ZaluzjeVariant = {
    slug: string;
    title: string;
    short: string;
    description: string;
    image: string;
    asideImage?: string;
    category: typeof CATEGORY;
    galleryImages?: string[];
    // opzionale: future integrazioni (es. configuratore)
    colorConfig?: { cassetteIds?: string[] };
};

export const ZALUZJE: Record<string, ZaluzjeVariant> = {
    "zaluzje-drewniane-50mm": {
        slug: "zaluzje-drewniane-50mm",
        title: "Żaluzje drewniane 50 mm",
        short: "Naturalne drewno, szerokie lamele i elegancki charakter wnętrza.",
        description:
            "Żaluzje z lamelami 50 mm to klasyka w nowoczesnym wydaniu: piękne drewno, stabilna konstrukcja i świetna kontrola światła. Idealne do salonów, gabinetów i przestrzeni premium.",
        image: "/images/zaluzje/drewniane-50/hero.jpg",
        asideImage: "/images/zaluzje/drewniane-50/aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/zaluzje/drewniane-50/g1.jpg",
            "/images/zaluzje/drewniane-50/g2.jpg",
            "/images/zaluzje/drewniane-50/g3.jpg",
            "/images/zaluzje/drewniane-50/g4.jpg",
        ],
    },

    "zaluzje-aluminiowe-25mm": {
        slug: "zaluzje-aluminiowe-25mm",
        title: "Żaluzje aluminiowe 25 mm",
        short: "Smukłe lamele, duża paleta kolorów i atrakcyjna cena.",
        description:
            "Lekkie, trwałe i łatwe w czyszczeniu. Lamele 25 mm łączą funkcjonalność z minimalistycznym wyglądem – pasują do biur i nowoczesnych mieszkań.",
        image: "/images/zaluzje/aluminiowe-25/hero.jpg",
        asideImage: "/images/zaluzje/aluminiowe-25/aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/zaluzje/aluminiowe-25/g1.jpg",
            "/images/zaluzje/aluminiowe-25/g2.jpg",
            "/images/zaluzje/aluminiowe-25/g3.jpg",
            "/images/zaluzje/aluminiowe-25/g4.jpg",
        ],
    },

    "zaluzje-pionowe": {
        slug: "zaluzje-pionowe",
        title: "Żaluzje pionowe (verticale)",
        short: "Praktyczne przesłony do biur, sal konferencyjnych i dużych przeszkleń.",
        description:
            "Płynna regulacja światła, możliwość zsuwu na bok/środek, tkaniny od transparentnych po zaciemniające. Idealne na wysokie i szerokie przeszklenia.",
        image: "/images/zaluzje/pionowe/hero.jpg",
        asideImage: "/images/zaluzje/pionowe/aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/zaluzje/pionowe/g1.jpg",
            "/images/zaluzje/pionowe/g2.jpg",
            "/images/zaluzje/pionowe/g3.jpg",
            "/images/zaluzje/pionowe/g4.jpg",
        ],
    },
};

export const ZALUZJE_LIST = Object.values(ZALUZJE);
