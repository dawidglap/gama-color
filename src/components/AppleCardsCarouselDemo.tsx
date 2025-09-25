"use client";

import React from "react";
import Link from "next/link";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import Image from "next/image";
import logoGama from "../../public/images/gama-color-logo.png";
import Roleta from "../../public/images/roleta.webp";
import Fotorolety from "../../public/images/fotorolety.webp";
import Zaluzje from "../../public/images/zaluzje.webp";
import Plisy from "../../public/images/plisy.webp";
import Rzymskie from "../../public/images/rzymskie.webp";
import Moskitiery from "../../public/images/moskitiery.webp";
import Markizy from "../../public/images/markizy.webp";
import Zew from "../../public/images/zew.webp";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card) => (
    <Link
      key={card.title}
      href={card.href}
      prefetch={false}
      aria-label={card.title}
      className="block cursor-pointer rounded-3xl hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2"
      onClickCapture={(e) => {
        // Evita che eventuali onClick interni della Card scattino prima della navigazione
        e.stopPropagation();
      }}
    >
      <Card card={card} />
    </Link>
  ));

  return (
    <div className="h-full w-full py-10">
      <h2 className="mx-auto max-w-7xl px-8 text-center text-3xl font-bold text-neutral-800 sm:text-4xl md:text-5xl">
        Nasze produkty <br />
        <Image
          src={logoGama}
          alt="Gama Color logo"
          width={240}
          height={80}
          className="mx-auto mt-2 h-8 w-auto sm:h-12 lg:mt-4"
          draggable={false}
        />
      </h2>
      <p className="mx-auto mt-5 mb-8 max-w-4xl px-8 text-center text-sm text-gray-600 sm:text-xl">
        Oferujemy szeroki wybór osłon okiennych na wymiar – od klasycznych rolet
        po nowoczesne plisy i praktyczne moskitiery. Profesjonalne doradztwo,
        pomiar i montaż w Słupsku i okolicach.
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const data = [

  {
    category: "Żaluzje",
    title: "Żaluzje drewniane i aluminiowe",
    src: Zaluzje,
    href: "/produkty/zaluzje",
    content: null as unknown as React.ReactNode,
  },
  {
    category: "Plisy",
    title: "Plisy na wymiar",
    src: Plisy,
    href: "/produkty/plisy",
    content: null as unknown as React.ReactNode,
  },
    {
    category: "Nowość",
    title: "Fotorolety",
    src: Fotorolety,
    href: "/produkty/fotorolety",
    content: null as unknown as React.ReactNode,
  },
  {
    category: "Rolety",
    title: "Rolety materiałowe",
    src: Roleta,
    href: "/produkty/rolety-materialowe",
    content: null as unknown as React.ReactNode,
  },
  {
    category: "Rolety",
    title: "Rolety Rzymskie i Austriackie",
    src: Rzymskie,
    href: "/produkty/rolety-rzymskie-austriackie",
    content: null as unknown as React.ReactNode,
  },
  {
    category: "Moskitiery",
    title: "Moskitiery okienne i drzwiowe",
    src: Moskitiery,
    href: "/produkty/moskitiery",
    content: null as unknown as React.ReactNode,
  },
  {
    category: "Markizy",
    title: "Markizy tarasowe i balkonowe",
    src: Markizy,
    href: "/produkty/markizy",
    content: null as unknown as React.ReactNode,
  },
  {
    category: "Rolety zewnętrzne",
    title: "Rolety zewnętrzne",
    src: Zew,
    href: "/produkty/rolety-zewnetrzne",
    content: null as unknown as React.ReactNode,
  },
];
