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
  const cards = data.map((card, index) => (
    <Link
      key={card.title}
      href={card.href}
      prefetch={false}
      aria-label={card.title}
      className="cursor-pointer hover:opacity-90 block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-800 rounded-3xl"
      // Capture phase: blocca il click della Card (evita l'apertura "flash")
      onClickCapture={(e) => {
        // Evita che l'onClick interno della Card scatti prima della navigazione
        e.stopPropagation();
        // Nota: non chiamiamo preventDefault qui, così Next/Link gestisce normalmente la navigazione
      }}
    >
      <Card card={card} index={index} />
    </Link>
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl xl:max-w-[1600px] text-center px-8 mx-auto text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 ">
        Nasze produkty <br />
        <Image
          src={logoGama}
          alt="Gama Color logo"
          width={240}
          height={80}
          className="h-8 sm:h-12 w-auto mx-auto mt-2 lg:mt-4"
          draggable={false}
        />
      </h2>
      <p className="px-8 text-sm text-center sm:text-xl mx-auto text-gray-600 mb-8 max-w-4xl lg:mx-auto mt-5">
        Oferujemy szeroki wybór osłon okiennych na wymiar – od klasycznych rolet po nowoczesne plisy i praktyczne moskitiery. Profesjonalne doradztwo, pomiar i montaż w Słupsku i okolicach.
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Nowość",
    title: "Fotorolety – NOWOŚĆ!",
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
