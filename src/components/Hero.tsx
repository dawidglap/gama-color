'use client'

import Image from 'next/image'
import Link from 'next/link'
import heroData from '../../data/home/hero.json'

export default function Hero() {
  const { subtitle, ctaText, ctaLink, image } = heroData

  return (
    <section className="bg-[#f9f9f9] min-h-screen flex items-center px-4 py-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 [text-wrap:balance]">
            <span className="relative inline-block">
              <span className="relative z-10">Rolety</span>
              <span className="absolute inset-x-0 bottom-0 h-[0.35em] bg-blue-400 z-0 -rotate-[2deg]" />
            </span>
            ,&nbsp;
            <span className="relative inline-block">
              <span className="relative z-10">Żaluzje</span>
              <span className="absolute inset-x-0 bottom-0 h-[0.35em] bg-red-400 z-0 -rotate-[2deg]" />
            </span>
            &nbsp;i&nbsp;
            <span className="relative inline-block">
              <span className="relative z-10">Plisy</span>
              <span className="absolute inset-x-0 bottom-0 h-[0.35em] bg-yellow-300 z-0 -rotate-[2deg]" />
            </span>
             {" "} na wymiar, w Słupsku.
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-prose mx-auto lg:mx-0">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href={ctaLink}>
              <span className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded shadow transition text-base sm:text-lg">
                {ctaText}
              </span>
            </Link>
          </div>
        </div>

        {/* Image */}
        {image && (
          <div className="w-full max-w-sm sm:max-w-md lg:w-1/2">
            <Image
              src={image}
              alt="Hero image"
              width={500}
              height={500}
              className="rounded-xl shadow-lg w-full h-auto object-contain"
              priority
            />
          </div>
        )}
      </div>
    </section>
  )
}
