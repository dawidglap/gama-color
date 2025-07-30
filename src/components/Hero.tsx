'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import heroData from '../data/home/hero.json'
import { WavyBackground } from './ui/wavy-background'
import HeroImage from '../../public/images/hero.webp'
import { Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from './ui/resizable-navbar'

const parentVariants = {
  hidden: { opacity: 0, y: '100%' },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Hero() {
  const { subtitle, ctaText, ctaLink } = heroData

  return (
    <>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={[
              { name: "O nas", link: "#about" },
              { name: "Produkty", link: "#products" },
              { name: "Realizacje", link: "#realizacje" },
              { name: "Kontakt", link: "#contact" },
            ]}
          />
          <NavbarButton href="#contact">Kontakt</NavbarButton>
        </NavBody>
      </Navbar>


  {/* Hero Content */}


      <WavyBackground containerClassName="py-16 px-4 lg:px-8 overflow-hidden">
        <motion.section
          initial="hidden"
          animate="show"
          variants={parentVariants}
          className="w-full flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-7xl xl:max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 px-0">
            
            {/* Text Content */}
            <motion.div className="text-center lg:text-left w-full lg:w-1/2" variants={childVariants}>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 [text-wrap:balance]"
                variants={childVariants}
              >
                <span className="relative inline-block">
                  <span className="relative z-10">Rolety</span>
                  <span className="absolute inset-x-0 bottom-0 h-[0.35em] bg-yellow-300 z-0 -rotate-[2deg]" />
                </span>
                ,&nbsp;
                <span className="relative inline-block">
                  <span className="relative z-10">Żaluzje</span>
                  <span className="absolute inset-x-0 bottom-0 h-[0.35em] bg-red-400 z-0 -rotate-[2deg]" />
                </span>
                &nbsp;i&nbsp;
                <span className="relative inline-block">
                  <span className="relative z-10">Plisy</span>
                  <span className="absolute inset-x-0 bottom-0 h-[0.35em] bg-blue-400 z-0 -rotate-[2deg]" />
                </span>{" "}
                na wymiar, w Słupsku.
                
              </motion.h1>

              <motion.p
                className="text-sm sm:text-xl text-gray-600 mb-8 max-w-prose mx-auto lg:mx-0"
                variants={childVariants}
              >
                {subtitle}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                variants={childVariants}
              >
                <Link href={ctaLink}>
                  <span className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded shadow transition text-base sm:text-lg">
                    {ctaText}
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image with subtle reveal */}
        
            <motion.div
  className="lg:w-1/2 w-full"
  initial={{ opacity: 0, scale: 1.08, y: 40 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ delay: 1.4, duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
>
  <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[4/3] xl:aspect-[16/9]">
    <Image
      src={HeroImage}
      alt="Hero image"
      fill
      className="rounded-xl shadow-xl object-cover"
      priority
    />
  </div>
</motion.div>

            
          </div>
        </motion.section>
      </WavyBackground>
      
    </>
  )
}
