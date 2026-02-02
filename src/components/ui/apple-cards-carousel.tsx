"use client";

import React, { useEffect, useRef, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import type { StaticImageData } from "next/image";

/* =========================
   Carousel (solo scroll & arrows)
   ========================= */
interface CarouselProps {
  items: React.ReactElement[];
  initialScroll?: number;
}

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialScroll]);

  const checkScrollability = () => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* (opzionale) fade ai lati per look premium */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-10 bg-gradient-to-r from-white to-transparent md:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-10 bg-gradient-to-l from-white to-transparent md:w-16" />

      {/* area scrollabile */}
      <div
        ref={carouselRef}
        onScroll={checkScrollability}
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth pb-10 [scrollbar-width:none] md:py-20
                   px-12 md:px-16" // spazio per frecce
      >
        <div
          className={cn(
            "flex flex-row justify-start gap-4 pl-4",
            "mx-auto max-w-7xl",
          )}
        >
          {items.map((item, index) => (
            <motion.div
              key={"card" + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                },
              }}
              className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* freccia sinistra */}
      <button
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40
                   flex h-10 w-10 items-center justify-center rounded-full bg-gray-100
                   disabled:opacity-50 shadow-sm"
        onClick={scrollLeft}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
      >
        <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
      </button>

      {/* freccia destra */}
      <button
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40
                   flex h-10 w-10 items-center justify-center rounded-full bg-gray-100
                   disabled:opacity-50 shadow-sm"
        onClick={scrollRight}
        disabled={!canScrollRight}
        aria-label="Scroll right"
      >
        <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
      </button>
    </div>
  );
};

/* =========================
   Card (solo presentazione)
   - nessun modal
   - perfetta da wrappare con <Link>
   ========================= */
type CardData = {
  src: StaticImageData;
  title: string;
  category: string;
  // content opzionale ignorato: se esiste nell’array esterno, non rompe nulla
};

export const Card = ({
  card,
  layout = false,
}: {
  card: CardData;
  layout?: boolean;
}) => {
  return (
    <motion.div
      layoutId={layout ? `card-${card.title}` : undefined}
      // cursor-pointer per chiara affordance, anche se c’è già sul Link wrapper
      className="relative z-10 flex h-80 w-56 cursor-pointer select-none flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96"
      role="presentation"
    >
      {/* overlay per il testo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />

      <div className="relative z-40 p-8">
        <motion.p
          layoutId={layout ? `category-${card.category}` : undefined}
          className="text-left font-sans text-sm font-medium text-white md:text-base"
        >
          {card.category}
        </motion.p>
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
        >
          {card.title}
        </motion.p>
      </div>

      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="absolute inset-0 z-10 object-cover"
      />
    </motion.div>
  );
};

/* =========================
   BlurImage (invariato)
   ========================= */
export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background image"}
      {...rest}
    />
  );
};
