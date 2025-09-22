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
        image: "/images/rolety-rzymskie-austriackie/rzymskie/hero.jpg",
        asideImage: "/images/rolety-rzymskie-austriackie/rzymskie/aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/rolety-rzymskie-austriackie/rzymskie/g1.jpg",
            "/images/rolety-rzymskie-austriackie/rzymskie/g2.jpg",
            "/images/rolety-rzymskie-austriackie/rzymskie/g3.jpg",
            "/images/rolety-rzymskie-austriackie/rzymskie/g4.jpg",
        ],
    },

    "rolety-austriackie": {
        slug: "rolety-austriackie",
        title: "Rolety austriackie",
        short:
            "Miękkie marszczenia i romantyczny charakter. Klasyka, która wprowadza lekkość i wyjątkowy klimat do wnętrza.",
        description:
            "Rolety austriackie to dekoracja, która nie wychodzi z mody. Charakterystyczne, pionowe marszczenia nadają oknu miękkości i lekkości, świetnie podkreślając styl klasyczny, glamour lub modern classic. Dobierzemy gramaturę i przejrzystość tkaniny, by uzyskać efekt od subtelnej mgiełki po wyraźne przyciemnienie. Doskonałe do salonów, jadalni i pokoi dziennych, w których liczy się przyjemna, przytulna atmosfera.",
        image: "/images/rolety-rzymskie-austriackie/austriackie/hero.jpg",
        asideImage: "/images/rolety-rzymskie-austriackie/austriackie/aside.jpg",
        category: CATEGORY,
        galleryImages: [
            "/images/rolety-rzymskie-austriackie/austriackie/g1.jpg",
            "/images/rolety-rzymskie-austriackie/austriackie/g2.jpg",
            "/images/rolety-rzymskie-austriackie/austriackie/g3.jpg",
            "/images/rolety-rzymskie-austriackie/austriackie/g4.jpg",
        ],
    },
};

export const RA_LIST = Object.values(RA);
