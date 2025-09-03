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
    // opcjonalnie (np. przyszły konfigurator)
    colorConfig?: { cassetteIds?: string[] };
};

export const ZALUZJE: Record<string, ZaluzjeVariant> = {
    /** ===================== ŻALUZJE POZIOME ===================== */
    "zaluzje-poziome": {
        slug: "zaluzje-poziome",
        title: "Żaluzje poziome",
        short:
            "Klasyczny system z lamelami poziomymi — precyzyjna regulacja światła i prywatności.",
        description:
            "Żaluzje poziome to jeden z najpopularniejszych systemów osłonowych. Umożliwiają dowolne ustawienie kąta lameli, dzięki czemu skutecznie redukują dopływ światła bez konieczności całkowitego zasłaniania okna. Sprawdzają się w mieszkaniach, domach i biurach. Duża paleta kolorów i wykończeń pozwala dopasować żaluzje do niemal każdej aranżacji. Oferujemy pomiar, doradztwo i montaż w Słupsku i okolicach.",
        image: "/images/zaluzje/poziome/hero.jpg",
        asideImage: "/images/zaluzje/poziome/aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/zaluzje/poziome/g1.jpg",
            "/images/zaluzje/poziome/g2.jpg",
            "/images/zaluzje/poziome/g3.jpg",
            "/images/zaluzje/poziome/g4.jpg",
        ],
    },

    /** ===================== ŻALUZJE PIONOWE ===================== */
    "zaluzje-pionowe-verticale": {
        slug: "zaluzje-pionowe-verticale",
        title: "Żaluzje pionowe (verticale)",
        short:
            "Praktyczne przesłony do biur i dużych przeszkleń — płynna regulacja światła.",
        description:
            "Żaluzje pionowe (verticale) świetnie sprawdzają się przy wysokich i szerokich przeszkleniach. Pozwalają na płynne sterowanie światłem oraz zsuw w jeden bok, na środek lub kurtynowo. Szeroki wybór tkanin — od transparentnych po zaciemniające — ułatwia dopasowanie do charakteru wnętrza. Montaż do sufitu lub we wnęce. Realizujemy pomiar i montaż w Słupsku i okolicach.",
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

    /** ===================== ŻALUZJE DREWNIANE ===================== */
    "zaluzje-drewniane": {
        slug: "zaluzje-drewniane",
        title: "Żaluzje drewniane (25 mm, 50 mm)",
        short:
            "Naturalne drewno i ciepły klimat we wnętrzu. Lamele 25 lub 50 mm na wymiar.",
        description:
            "Żaluzje drewniane to ponadczasowa elegancja i przytulny charakter. Dostępne szerokości lameli 25 i 50 mm pozwalają uzyskać subtelny lub wyrazisty efekt wizualny. Naturalne drewno pięknie komponuje się z meblami i podłogami, zapewniając przy tym precyzyjną kontrolę światła. Wykonujemy pomiar i profesjonalny montaż w Słupsku i okolicach.",
        image: "/images/zaluzje/drewniane/hero.jpg",
        asideImage: "/images/zaluzje/drewniane/aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/zaluzje/drewniane/g1.jpg",
            "/images/zaluzje/drewniane/g2.jpg",
            "/images/zaluzje/drewniane/g3.jpg",
            "/images/zaluzje/drewniane/g4.jpg",
        ],
    },

    /** ===================== ŻALUZJE LAMINOWANE ===================== */
    "zaluzje-laminowane": {
        slug: "zaluzje-laminowane",
        title: "Żaluzje laminowane (25 mm, 50 mm)",
        short:
            "Drewniana stylistyka z trwałym dekorem — idealne do spójnych aranżacji.",
        description:
            "Żaluzje laminowane łączą wygląd drewna z odpornym wykończeniem dekoru. Świetnie komponują się z meblami i podłogami, tworząc spójną aranżację nowoczesnych wnętrz. Dostępne szerokości lameli 25 i 50 mm, szeroka gama kolorów i detali wykończeniowych. Oferujemy doradztwo, pomiar i montaż w Słupsku i okolicach.",
        image: "/images/zaluzje/laminowane/hero.jpg",
        asideImage: "/images/zaluzje/laminowane/aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/zaluzje/laminowane/g1.jpg",
            "/images/zaluzje/laminowane/g2.jpg",
            "/images/zaluzje/laminowane/g3.jpg",
            "/images/zaluzje/laminowane/g4.jpg",
        ],
    },

    /** ===================== ŻALUZJE BAMBUSOWE ===================== */
    "zaluzje-bambusowe-25-50mm": {
        slug: "zaluzje-bambusowe-25-50mm",
        title: "Żaluzje bambusowe (25 mm, 50 mm)",
        short:
            "Egzotyczny surowiec, lekka konstrukcja i naturalny efekt w stylu eko.",
        description:
            "Żaluzje bambusowe wprowadzają do wnętrza nutę Orientu i naturalną lekkość. Są funkcjonalne, zapewniają płynną regulację światła, a bogata kolorystyka umożliwia dopasowanie do indywidualnego stylu pomieszczeń. Dostępne lamele o szerokości 25 i 50 mm. Montaż i doradztwo — Słupsk i okolice.",
        image: "/images/zaluzje/bambusowe/hero.jpg",
        asideImage: "/images/zaluzje/bambusowe/aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/zaluzje/bambusowe/g1.jpg",
            "/images/zaluzje/bambusowe/g2.jpg",
            "/images/zaluzje/bambusowe/g3.jpg",
            "/images/zaluzje/bambusowe/g4.jpg",
        ],
    },
};

export const ZALUZJE_LIST = Object.values(ZALUZJE);
