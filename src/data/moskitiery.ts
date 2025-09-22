// src/data/moskitiery.ts
const CATEGORY = "Moskitiery" as const;

export type MoskitieraVariant = {
    slug: "ramkowe-okienne" | "drzwiowe-otwierane" | "rolowane" | "przesuwne";
    title: string;
    short: string;
    description: string;
    image: string;
    asideImage?: string;
    category: typeof CATEGORY;
    galleryImages?: string[];
    notes?: string[];
};

export const MOSKITIERY: Record<MoskitieraVariant["slug"], MoskitieraVariant> = {
    "ramkowe-okienne": {
        slug: "ramkowe-okienne",
        title: "Moskitiery ramkowe (okienne)",
        short:
            "Prosta i skuteczna ochrona okien przed owadami. Montaż bezinwazyjny na ramie – idealne na sezon.",
        description:
            "Moskitiery ramkowe to najpopularniejszy sposób, aby zatrzymać owady przy otwartych oknach. Aluminiowa rama z siatką z włókna szklanego jest lekka, trwała i odporna na warunki pogodowe. Montowane bezinwazyjnie na zaczepach, łatwo je zakładać i zdejmować do czyszczenia. Warianty kolorystyczne dopasujemy do stolarki, a gęstość siatki dobierzemy pod potrzeby (np. pyłki, drobne insekty).",
        image: "/images/moskitiery/ramkowe/hero.jpg",
        asideImage: "/images/moskitiery/ramkowe/aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/moskitiery/ramkowe/g1.jpg",
            "/images/moskitiery/ramkowe/g2.jpg",
            "/images/moskitiery/ramkowe/g3.jpg",
            "/images/moskitiery/ramkowe/g4.jpg",
        ],
        notes: [
            "Szybki montaż bez wiercenia",
            "Ramy na wymiar, kolory do stolarki",
            "Łatwe zdejmowanie i mycie",
        ],
    },

    "drzwiowe-otwierane": {
        slug: "drzwiowe-otwierane",
        title: "Moskitiery drzwiowe (otwierane)",
        short:
            "Wygodne skrzydło na zawiasach do drzwi balkonowych/tarasowych. Solidna rama, samozamykacz opcjonalnie.",
        description:
            "Moskitiery drzwiowe otwierane montujemy do ościeżnicy lub fasady. Stabilna, aluminiowa rama i siatka z włókna szklanego tworzą trwałą barierę przed owadami, a jednocześnie pozwalają swobodnie wychodzić na balkon czy taras. Możliwe są magnetyczne domyki, samozamykacze oraz listwy szczotkowe uszczelniające. To codzienna wygoda bez kompromisu dla wentylacji.",
        image: "/images/moskitiery/drzwiowe/hero.jpg",
        asideImage: "/images/moskitiery/drzwiowe/aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/moskitiery/drzwiowe/g1.jpg",
            "/images/moskitiery/drzwiowe/g2.jpg",
            "/images/moskitiery/drzwiowe/g3.jpg",
            "/images/moskitiery/drzwiowe/g4.jpg",
        ],
        notes: [
            "Zawiasy + magnesy, opcja samozamykacza",
            "Listwy szczotkowe dla pełnej szczelności",
            "Świetne do balkonów i tarasów",
        ],
    },

    "rolowane": {
        slug: "rolowane",
        title: "Moskitiery rolowane (pionowe / poziome)",
        short:
            "Kaseta z prowadnicami i mechanizmem sprężynowym. Do okien i drzwi, wygodne rozwijanie i zwijanie.",
        description:
            "System rolowany (pionowy do okien lub poziomy do drzwi) pozwala jednym ruchem rozwinąć siatkę i schować ją do kasety, gdy nie jest potrzebna. Prowadnice i listwy doszczelniają, tworząc skuteczną barierę przed insektami i pyłkami. To rozwiązanie szczególnie wygodne w intensywnie użytkowanych wnękach okiennych i drzwiach balkonowych.",
        image: "/images/moskitiery/rolowane/hero.jpg",
        asideImage: "/images/moskitiery/rolowane/aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/moskitiery/rolowane/g1.jpg",
            "/images/moskitiery/rolowane/g2.jpg",
            "/images/moskitiery/rolowane/g3.jpg",
            "/images/moskitiery/rolowane/g4.jpg",
        ],
        notes: [
            "Kaseta + sprężyna, prowadnice",
            "Wariant pionowy / poziomy",
            "Szybkie chowanie siatki po sezonie",
        ],
    },

    "przesuwne": {
        slug: "przesuwne",
        title: "Moskitiery przesuwne",
        short:
            "Tor jezdny do dużych przeszkleń: tarasy, witryny, ogrody zimowe. Płynna praca skrzydła, wysoka trwałość.",
        description:
            "Moskitiery przesuwne projektujemy z myślą o szerokich przejściach: drzwi tarasowe, witryny, ogrody zimowe. Skrzydło porusza się lekko po prowadnicach, nie zajmując miejsca przy otwieraniu. To trwałe i estetyczne rozwiązanie, które zapewnia cyrkulację powietrza bez uciążliwych owadów — także przy bardzo dużych wymiarach.",
        image: "/images/moskitiery/przesuwne/hero.jpg",
        asideImage: "/images/moskitiery/przesuwne/aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/moskitiery/przesuwne/g1.jpg",
            "/images/moskitiery/przesuwne/g2.jpg",
            "/images/moskitiery/przesuwne/g3.jpg",
            "/images/moskitiery/przesuwne/g4.jpg",
        ],
        notes: [
            "Do dużych przeszkleń",
            "Płynny przesuw na prowadnicach",
            "Solidna konstrukcja aluminiowa",
        ],
    },
};

export const MOSKITIERY_LIST = Object.values(MOSKITIERY);
