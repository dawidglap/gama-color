"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import Image from "next/image";

type Card = {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: StaticImageData;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            className={cn(
              "relative overflow-hidden min-h-[350px]",
              "bg-white rounded-xl h-full w-full"
            )}
          >
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.div className="absolute inset-0 h-full w-full">
      <Image
        src={card.thumbnail}
        height={500}
        width={500}
        className="object-cover object-center h-full w-full transition duration-200 pointer-events-none select-none"
        alt="thumbnail"
        style={{ objectFit: "cover", objectPosition: "center" }}
        draggable={false}
      />
    </motion.div>
  );
};
