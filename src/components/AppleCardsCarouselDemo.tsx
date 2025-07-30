"use client";

import React from "react";
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
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl xl:max-w-[1600px] text-center px-8 mx-auto text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 ">
        Nasze produkty <br/>
        <Image
    src={logoGama}
    alt="Gama Color logo"
    width={240}
    height={80}
    className="h-8 sm:h-12 w-auto mx-auto mt-2 lg:mt-4"
  />
      </h2>
       <p  className="px-8 text-sm text-center sm:text-xl mx-auto text-gray-600 mb-8 max-w-4xl lg:mx-auto mt-5">
        Oferujemy szeroki wybór osłon okiennych na wymiar – od klasycznych rolet po nowoczesne plisy i praktyczne moskitiery. Profesjonalne doradztwo, pomiar i montaż w Słupsku i okolicach.

       </p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ title }: { title: string }) => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          {title}
        </span>{" "}
        – nasz bestseller! Idealne połączenie funkcjonalności i estetyki, dostępne w szerokiej gamie kolorów i materiałów. Gwarantujemy perfekcyjne dopasowanie do Twojego wnętrza oraz fachowy montaż.
      </p>
      <Image
        src="/images/rolety.jpg" // modifica questo path in base al prodotto
        alt={title}
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Nowość",
    title: "Fotorolety – NOWOŚĆ!",
    src: Fotorolety,
    content: <DummyContent title="Fotorolety" />,
  },
  {
    category: "Rolety",
    title: "Rolety materiałowe",
    src: Roleta,
    content: <DummyContent title="Rolety materiałowe" />,
  },
  {
    category: "Żaluzje",
    title: "Żaluzje drewniane i aluminiowe",
    src: Zaluzje,
    content: <DummyContent title="Żaluzje" />,
  },
  {
    category: "Plisy",
    title: "Plisy na wymiar",
    src: Plisy,
    content: <DummyContent title="Plisy" />,
  },
  {
    category: "Rolety",
    title: "Rolety Rzymskie i Austriackie",
    src: Rzymskie,
    content: <DummyContent title="Rolety Rzymskie i Austriackie" />,
  },
  {
    category: "Moskitiery",
    title: "Moskitiery okienne i drzwiowe",
    src: Moskitiery,
    content: <DummyContent title="Moskitiery" />,
  },
  {
    category: "Markizy",
    title: "Markizy tarasowe i balkonowe",
    src: Markizy,
    content: <DummyContent title="Markizy" />,
  },
  {
    category: "Rolety zewnętrzne",
    title: "Rolety zewnętrzne",
    src: Zew,
    content: <DummyContent title="Rolety zewnętrzne" />,
  },
];
