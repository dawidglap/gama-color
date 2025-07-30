"use client"

import React from "react";
import { useId } from "react";
import { motion, Variants } from 'framer-motion'


import {
  BadgeCheck,
  Ruler,
  ScanLine,
  Handshake,
  Palette,
  ShieldCheck,
  Clock3,
  Trophy,
  
} from "lucide-react";

const sectionVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};





export function FeaturesSectionDemo() {
  return (
    <motion.div
  className="pt-10 lg:pt-0 pb-10 lg:pb-10 lg:py-0"
  variants={sectionVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
>


      <div className="max-w-7xl xl:max-w-[1600px] mx-auto  px-4 lg:px-8">
          <motion.div
  className="max-w-4xl text-center mx-auto mb-16"
  variants={fadeUp}
>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 px-8">
            Ponad <span className="font-extrabold">30 lat</span> doświadczenia w montażu <span className="text-yellow-400">rolet</span>, <span className="text-red-500">żaluzji </span>i <span className="text-blue-500">plis</span>.
          </h2>
          <p  className="text-sm sm:text-xl text-gray-600 mb-8 max-w-prose mx-auto lg:mx-0 mt-5">
            Od 1994 roku dostarczamy wysokiej jakości osłony okienne – fachowo, terminowo i z gwarancją zadowolenia.
Zaufaj lokalnej firmie z tradycją – wybierz sprawdzone rozwiązania dla Twojego domu i biura.


          </p>
        </motion.div>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:py-20">
  {grid.map((feature) => {
    const Icon = feature.icon;
    return (
      <motion.div
      variants={fadeUp}
        key={feature.title}
        className="relative bg-gradient-to-b  from-blue-100  to-white p-6 rounded-3xl overflow-hidden shadow-md"
      >
        <div className="flex gap-3 mb-4">
          <Icon className="w-6 h-6 text-blue-600 " />
          <p className="text-base font-bold text-neutral-800 ">
            {feature.title}
          </p>
        </div>
        <p className="text-neutral-600  text-base font-normal">
          {feature.description}
        </p>
      </motion.div>
    );
  })}
</div>

      </div>
    </motion.div>
  );
}

const grid = [
  {
    title: "Ponad 30 lat doświadczenia",
    description:
      "Od 1994 roku specjalizujemy się w sprzedaży i montażu rolet, żaluzji i plis w Słupsku i okolicach.",
    icon: BadgeCheck,
  },
  {
    title: "Fachowy montaż i pomiar",
    description:
      "Zapewniamy precyzyjny pomiar i profesjonalny montaż osłon okiennych — zawsze na czas i bezproblemowo.",
    icon: Ruler,
  },
  {
    title: "Produkty na wymiar",
    description:
      "Wszystkie nasze rolety, żaluzje, plisy i moskitiery wykonujemy dokładnie pod wymiar Twoich okien.",
    icon: ScanLine,
  },
  {
    title: "Bezpłatna wycena i doradztwo",
    description:
      "Doradzimy najlepsze rozwiązanie do Twojego wnętrza i przygotujemy indywidualną wycenę — całkowicie za darmo.",
    icon: Handshake,
  },
  {
    title: "Bogata oferta tkanin i kolorów",
    description:
      "Posiadamy szeroki wybór materiałów, kolorów i mechanizmów dopasowanych do każdego stylu i budżetu.",
    icon: Palette,
  },
  {
    title: "Gwarancja jakości",
    description:
      "Współpracujemy wyłącznie ze sprawdzonymi producentami. Oferujemy gwarancję na wszystkie produkty i montaż.",
    icon: ShieldCheck,
  },
  {
    title: "Szybka realizacja zamówień",
    description:
      "Działamy sprawnie i terminowo – od pomiaru po montaż. Większość zleceń realizujemy w kilka dni roboczych.",
    icon: Clock3,
  },
  {
    title: "Obsługa klienta na najwyższym poziomie",
    description:
      "Zadowolenie klienta to dla nas priorytet. Zapewniamy stały kontakt i elastyczne podejście do każdego projektu.",
    icon: Trophy,
  },
];


export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className=" pointer-events-none absolute left-1/2 top-0  -20 -2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] /30 from-zinc-100/30 to-zinc-300/30 /30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay /10 /10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        
        <svg x={x} y={y} className="overflow-visible">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
