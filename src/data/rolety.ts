// data/rolety.ts
const CATEGORY = "Rolety materiałowe" as const;

export type RoletyVariant = {
    slug: string;
    title: string;
    short: string;       // krótki opis do kart/hero
    description: string; // opis rozszerzony (SEO)
    image: string;       // hero image
    asideImage?: string; // obraz do asida (desktop)
    category: typeof CATEGORY;
};

export const ROLETY: Record<string, RoletyVariant> = {
    "vegas-classic": {
        slug: "vegas-classic",
        title: "Rolety Vegas Classic",
        short:
            "Eleganckie rolety kasetowe z prowadnicami — idealne dopasowanie do ramy okna.",
        description:
            "Vegas Classic to sprawdzony system rolet w kasecie aluminiowej lub PVC z prowadnicami, który estetycznie przylega do szyby i minimalizuje prześwity. Szeroka paleta tkanin i oklein osprzętu pozwala dobrać roletę do każdego stylu wnętrza. Profesjonalny pomiar, produkcja na wymiar i montaż w Słupsku oraz na terenie Pomorza.",
        image: "/images/rolety/vegas-classic-hero.jpg",
        asideImage: "/images/rolety/vegas-classic-aside.jpg",
        category: CATEGORY,
    },

    "vegas-profil": {
        slug: "vegas-profil",
        title: "Rolety Vegas Profil",
        short:
            "System przyklejany taśmą dwustronną — świetny na okna z przewiązkami i drzwi balkonowe.",
        description:
            "Vegas Profil to bezinwazyjny system rolet w kasecie, montowany na taśmę dwustronną. Prowadnice w kształcie litery C umożliwiają montaż na oknach z przewiązkami oraz na pełnej wysokości drzwi balkonowych. Szybki montaż, czysta estetyka i dopasowanie na wymiar — obsługujemy Słupsk i okoliczne miejscowości w regionie Pomorza.",
        image: "/images/rolety/vegas-profil-hero.jpg",
        asideImage: "/images/rolety/vegas-profil-aside.jpg",
        category: CATEGORY,
    },

    "vegas-mini": {
        slug: "vegas-mini",
        title: "Rolety Vegas Mini",
        short:
            "Ekonomiczne rolety wolnowiszące — montaż na listwie przyszybowej lub bezinwazyjnie.",
        description:
            "Vegas Mini to prosty i korzystny cenowo system rolet wolnowiszących. Sprawdza się w mieszkaniach i biurach, pozwalając na montaż na listwie przyszybowej lub bezinwazyjnie na ramie okna. Duży wybór tkanin (od lekkich po zaciemniające) i realizacja na wymiar z montażem w Słupsku i regionie Pomorza.",
        image: "/images/rolety/vegas-mini-hero.jpg",
        asideImage: "/images/rolety/vegas-mini-aside.jpg",
        category: CATEGORY,
    },

    "wolnowiszace": {
        slug: "wolnowiszace",
        title: "Rolety wolnowiszące",
        short:
            "Klasyczna osłona przeciwsłoneczna do większych przeszkleń — montaż na ścianie, suficie lub we wnęce.",
        description:
            "Rolety wolnowiszące to uniwersalne i trwałe rozwiązanie do zaciemniania większych powierzchni. Możliwy montaż nad wnęką, do sufitu, we wnęce lub bezpośrednio na okno; świetnie sprawdzą się także jako ekran projekcyjny czy przesłona wnęk. Wykonujemy pomiar i montaż na terenie Słupska i całego Pomorza.",
        image: "/images/rolety/wolnowiszace-hero.jpg",
        asideImage: "/images/rolety/wolnowiszace-aside.jpg",
        category: CATEGORY,
    },

    "dzien-noc": {
        slug: "dzien-noc",
        title: "Rolety dzień i noc",
        short:
            "Dwie warstwy tkaniny (pasy) — płynna regulacja światła i prywatności przez cały dzień.",
        description:
            "Rolety dzień i noc (tzw. zebra) łączą pasy zaciemniające i transparentne, dzięki czemu jednym ruchem regulujesz ilość wpadającego światła i prywatność. Zgrabna kaseta, estetyczne prowadnice i bogaty wybór tkanin. Realizacja na wymiar z fachowym montażem w Słupsku i w woj. pomorskim.",
        image: "/images/rolety/dzien-noc-hero.jpg",
        asideImage: "/images/rolety/dzien-noc-aside.jpg",
        category: CATEGORY,
    },

    "dachowe-wolnowiszace": {
        slug: "dachowe-wolnowiszace",
        title: "Rolety dachowe wolnowiszące",
        short:
            "Komfort na poddaszu — ograniczenie nagrzewania latem i lepsze warunki snu nocą.",
        description:
            "Rolety wolnowiszące do okien dachowych pomagają ograniczyć nasłonecznienie w dzień i zapewnić komfortowe warunki po zmroku. Dostępne tkaniny antyrefleksyjne i zaciemniające pozwalają dopasować poziom ochrony do potrzeb pomieszczenia. Pomiar i montaż realizujemy w Słupsku i na terenie Pomorza.",
        image: "/images/rolety/dachowe-wolnowiszace-hero.jpg",
        asideImage: "/images/rolety/dachowe-wolnowiszace-aside.jpg",
        category: CATEGORY,
    },

    "dachowe-w-kasecie": {
        slug: "dachowe-w-kasecie",
        title: "Rolety dachowe w kasecie",
        short:
            "Kaseta i prowadnice przy szybie — maksimum kontroli światła w oknach dachowych.",
        description:
            "Rolety dachowe w kasecie (do okien drewnianych i PVC) prowadzą tkaninę przy szybie, ograniczając prześwity i przypadkowe zwisanie. Skuteczna kontrola światła i estetyczny wygląd. Wycena, produkcja na wymiar i montaż — Słupsk oraz miejscowości w całym regionie Pomorza.",
        image: "/images/rolety/dachowe-w-kasecie-hero.jpg",
        asideImage: "/images/rolety/dachowe-w-kasecie-aside.jpg",
        category: CATEGORY,
    },
};

export const ROLETY_LIST = Object.values(ROLETY);
