// /data/plisy.ts
type PlisyItem = {
    slug: string;
    category: string;
    title: string;
    short: string;
    image: string;
    asideImage?: string;
    galleryImages?: string[];
};

export const PLISY: Record<string, PlisyItem> = {
    "cosimo": {
        slug: "cosimo",
        category: "Plisy",
        title: "Plisy COSIMO – góra/dół",
        short:
            "Uniwersalny system do okien standardowych. Precyzyjnie zasłania wybrany fragment szyby. Montaż i pomiar: Słupsk, Ustka, Kobylnica, Siemianice.",
        image: "/images/plisy/g1.webp",
        asideImage: "/images/plisy/g3.webp",
        galleryImages: ["/images/plisy/g2.webp",
            "/images/plisy/g4.webp",
            "/images/plisy/g1.webp",
            "/images/plisy/g5.webp"
        ],
    },
    "cosimo-smartline": {
        slug: "cosimo-smartline",
        category: "Plisy",
        title: "Plisy COSIMO SMARTLINE – do okien dachowych",
        short:
            "System w prowadnicach z blokadą Easy Click. Profile: biały, srebrny, sosna. Idealny do okien dachowych w Słupsku, Redzikowie, Siemianicach.",
        image: "/images/plisy/g6.webp",
        asideImage: "/images/plisy/g7.webp",
        galleryImages: ["/images/plisy/g6.webp",
            "/images/plisy/g8.webp",
            "/images/plisy/g6.webp",
            "/images/plisy/g6.webp"
        ],
    },
    "ultima": {
        slug: "ultima",
        category: "Plisy",
        title: "Plisy ULTIMA – do kształtów nietypowych",
        short:
            "Rozwiązanie do trójkątów, trapezów i łuków, a także do okien standardowych. Realizacje: Słupsk, Rowy, Ustka i okolice.",
        image: "/images/soon.webp",
        asideImage: "/images/soon.webp",
        galleryImages: ["/images/soon.webp",
            "/images/soon.webp",
            "/images/soon.webp",
            "/images/soon.webp"
        ],
    },
};
