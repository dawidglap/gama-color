// src/data/roletyZewnetrzne.ts
const CATEGORY = "Rolety zewnętrzne" as const;

export type RoletyZewnetrzneVariant = {
    slug: "standardowe" | "standardowe-moskitiery" | "nadstawne";
    title: string;
    short: string;
    description: string;
    image: string;
    asideImage?: string;
    category: typeof CATEGORY;
    galleryImages?: string[];
    notes?: string[];
};

export const ROLETY_ZEWNETRZNE: Record<RoletyZewnetrzneVariant["slug"], RoletyZewnetrzneVariant> = {
    standardowe: {
        slug: "standardowe",
        title: "Rolety zewnętrzne standardowe",
        short: "Aluminiowa skrzynka z pokrywą rewizyjną, montaż na murze lub we wnęce okiennej.",
        description:
            "Rolety zewnętrzne standardowe to uniwersalne rozwiązanie do nowych i modernizowanych budynków. Aluminiowa obudowa z pancerzem PA39, PA45 lub PA52 skutecznie chroni przed stratami ciepła zimą, nagrzewaniem latem i hałasem z zewnątrz. Montaż natynkowy na murze nie ogranicza światła okna, natomiast instalacja we wnęce zapewnia bardziej dyskretny efekt. Idealne dla inwestorów, którzy chcą zdecydować o montażu rolet już po zakończeniu budowy.",
        image: "/images/rolety-zewnetrzne/standardowe/g1.webp",
        asideImage: "/images/rolety-zewnetrzne/standardowe/g5.webp",
        category: CATEGORY,
        galleryImages: [
            "/images/rolety-zewnetrzne/standardowe/g1.webp",
            "/images/rolety-zewnetrzne/standardowe/g2.webp",
            "/images/rolety-zewnetrzne/standardowe/g3.webp",
            "/images/rolety-zewnetrzne/standardowe/g4.webp"
        ],
        notes: [
            "Aluminiowy pancerz PA39/PA45/PA52",
            "Izolacja termiczna i akustyczna",
            "Montaż na murze lub we wnęce",
        ],
    },

    "standardowe-moskitiery": {
        slug: "standardowe-moskitiery",
        title: "Rolety zewnętrzne standardowe z moskitierą",
        short: "Połączenie ochrony termicznej i akustycznej z wbudowaną moskitierą w kasecie.",
        description:
            "System rolet zewnętrznych zintegrowanych z moskitierą pozwala cieszyć się świeżym powietrzem bez owadów, nie rezygnując z zalet klasycznych rolet. Mechanizm sprężynowy umożliwia lekką obsługę, a siatka z włókna szklanego jest trwała i odporna na warunki atmosferyczne. Rozwijana moskitiera zwija się do osobnej kasety, dzięki czemu pozostaje w pełni funkcjonalna zarówno latem, jak i poza sezonem.",
        image: "/images/rolety-zewnetrzne/moskitiery/g1.webp",
        asideImage: "/images/rolety-zewnetrzne/moskitiery/g5.webp",
        category: CATEGORY,
        galleryImages: [
            "/images/rolety-zewnetrzne/moskitiery/g1.webp",
            "/images/rolety-zewnetrzne/moskitiery/g2.webp",
            "/images/rolety-zewnetrzne/moskitiery/g3.webp",
            "/images/rolety-zewnetrzne/moskitiery/g4.webp",
        ],
        notes: [
            "Roleta + moskitiera w jednym systemie",
            "Siatka z włókna szklanego",
            "Łatwa obsługa dzięki sprężynie i magnesom",
        ],
    },

    nadstawne: {
        slug: "nadstawne",
        title: "Rolety zewnętrzne nadstawne",
        short: "PVC skrzynka montowana wraz z oknem, możliwość pełnej zabudowy.",
        description:
            "Rolety nadstawne (naokienne) montuje się razem z oknem we wnęce, co pozwala na pełną integrację z bryłą budynku. Skrzynka z PVC może być zabudowana częściowo lub całkowicie, pozostając niewidoczną we wnętrzu. To idealny system dla nowych inwestycji, gdzie decyzję o roletach podejmuje się już na etapie projektu. Dostępne w wielu wariantach pancerza, z opcją zastosowania moskitiery.",
        image: "/images/rolety-zewnetrzne/nadstawne/g1.webp",
        asideImage: "/images/rolety-zewnetrzne/nadstawne/g4.webp",
        category: CATEGORY,
        galleryImages: [
            "/images/rolety-zewnetrzne/nadstawne/g1.webp",
            "/images/rolety-zewnetrzne/nadstawne/g2.webp",
            "/images/rolety-zewnetrzne/nadstawne/g3.webp",
            "/images/rolety-zewnetrzne/nadstawne/g5.webp",
        ],
        notes: [
            "Montaż z oknem – idealne dla nowych budynków",
            "Pełna lub częściowa zabudowa",
            "Możliwość integracji z moskitierą",
        ],
    },
};

export const ROLETY_ZEWNETRZNE_LIST = Object.values(ROLETY_ZEWNETRZNE);
