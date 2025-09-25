// src/data/roletyRzymskieAustriackie.ts
const CATEGORY = "Rolety rzymskie i austriackie" as const;

export type RzymskieAustriackieVariant = {
    slug: "rolety-rzymskie" | "rolety-austriackie";
    title: string;
    short: string;
    description: string;
    image: string;
    asideImage?: string;
    category: typeof CATEGORY;
    galleryImages?: string[];
    // eventuali opzioni future (np. tkaniny, falbany, prowadzenie łańcuszka itp.)
};

export const RA: Record<RzymskieAustriackieVariant["slug"], RzymskieAustriackieVariant> = {
    "rolety-rzymskie": {
        slug: "rolety-rzymskie",
        title: "Rolety rzymskie",
        short:
            "Elegancja i porządek w jednym – miękkie fałdy, idealne do salonu, sypialni i kuchni. Szyte na wymiar, z setek tkanin.",
        description:
            "Rolety rzymskie łączą dekoracyjność zasłon z wygodą rolet. Szyte na wymiar dokładnie pod Twoje okno, tworzą równe, miękkie fałdy i pozwalają precyzyjnie dozować światło. Wybierzesz spośród tkanin transparentnych, przyciemniających i zaciemniających, w gładkich i strukturalnych fakturach. Idealne do wnętrz nowoczesnych i klasycznych – od kuchni, przez salon, aż po sypialnię. Dodatkowe wykończenia (lamówki, taśmy, podszewki blackout) pozwalają dopracować detal pod styl wnętrza.",
        image: "/images/rolety/rzymskie/g1.webp",
        asideImage: "/images/rolety/rzymskie/g2.webp",
        category: CATEGORY,
        galleryImages: [
            "/images/rolety/rzymskie/g1.webp",
            "/images/rolety/rzymskie/g2.webp",
            "/images/rolety/rzymskie/g3.webp",
            "/images/rolety/rzymskie/g4.webp",
        ],
    },

    "rolety-austriackie": {
        slug: "rolety-austriackie",
        title: "Rolety austriackie",
        short:
            "Miękkie marszczenia i romantyczny charakter. Klasyka, która wprowadza lekkość i wyjątkowy klimat do wnętrza.",
        description:
            "Rolety austriackie to dekoracja, która nie wychodzi z mody. Charakterystyczne, pionowe marszczenia nadają oknu miękkości i lekkości, świetnie podkreślając styl klasyczny, glamour lub modern classic. Dobierzemy gramaturę i przejrzystość tkaniny, by uzyskać efekt od subtelnej mgiełki po wyraźne przyciemnienie. Doskonałe do salonów, jadalni i pokoi dziennych, w których liczy się przyjemna, przytulna atmosfera.",
        image: "/images/rolety/austriackie/hero.webp",
        asideImage: "/images/rolety/austriackie/aside.webp",
        category: CATEGORY,
        galleryImages: [
            "/images/rolety/austriackie/g1.webp",
            "/images/rolety/austriackie/g2.webp",
            "/images/rolety/austriackie/g3.webp",
            "/images/rolety/austriackie/g4.webp",
        ],
    },
};

export const RA_LIST = Object.values(RA);
