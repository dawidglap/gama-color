'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FaStar } from 'react-icons/fa6'

const reviews = [
  { name: 'Katarzyna M.', review: 'Rolety rzymskie od Gama Color to prawdziwa ozdoba mojego salonu. Precyzyjne wykonanie i szybki montaż – polecam!' },
  { name: 'Marek P.', review: 'Plisy idealnie pasują do mojego okna dachowego. Świetna jakość materiałów i estetyczny wygląd.' },
  { name: 'Anna R.', review: 'Bardzo profesjonalna obsługa i doradztwo. Żaluzje drewniane wyglądają elegancko i dodają wnętrzu charakteru.' },
  { name: 'Tomasz Z.', review: 'Markiza na tarasie sprawdziła się idealnie podczas letnich upałów. Dziękuję za szybki montaż!' },
  { name: 'Joanna S.', review: 'Moskitiera doskonale chroni przed owadami, a jednocześnie nie ogranicza widoczności. Super jakość!' },
  { name: 'Wojciech L.', review: 'Rolety zewnętrzne świetnie izolują od hałasu i światła. Gama Color to gwarancja solidności.' },
  { name: 'Ewelina D.', review: 'Kontakt, pomiar i montaż – wszystko przebiegło sprawnie i profesjonalnie. Polecam każdemu!' },
  { name: 'Piotr J.', review: 'Zamówiliśmy żaluzje aluminiowe do biura – efekt przeszedł nasze oczekiwania. Dziękujemy!' },
  { name: 'Natalia B.', review: 'Rolety materiałowe w naszej sypialni wyglądają cudownie. Kolor dobrany idealnie do wnętrza.' },
  { name: 'Rafał G.', review: 'Plisy montowane w oknach ogrodowych świetnie chronią przed słońcem, a przy tym wyglądają stylowo.' },
  { name: 'Zuzanna H.', review: 'Długo szukałam firmy z taką jakością obsługi i produktu – Gama Color to strzał w dziesiątkę!' },
  { name: 'Adrian T.', review: 'Profesjonalne podejście do klienta i szeroka oferta produktów – polecam z całego serca.' },
  { name: 'Monika L.', review: 'Rolety dzień-noc w kuchni prezentują się rewelacyjnie. Montaż trwał niecałą godzinę!' },
  { name: 'Damian W.', review: 'Jestem bardzo zadowolony z efektu końcowego – estetyka, funkcjonalność i dobra cena.' }
]

const Reviews = () => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.4 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [controls])

  return (
    <motion.div
      id='reviews'
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={containerVariants}
      className='mx-auto max-w-6xl px-8 py-16'
    >
      <div className='mb-12 text-center'>
        <h2 className='text-4xl font-bold text-primary'>Opinie naszych klientów</h2>
        <p className='mt-4 text-sm sm:text-xl text-gray-600'>Sprawdź, co mówią o nas osoby, które wybrały Gama Color</p>
      </div>

      <div
        className='hidden gap-6 md:grid md:grid-cols-6'
        style={{
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateAreas: `
            "a a b b b c"
            "d d d e e f"
            "g g h h h i"
            "j j k k l l"
            "m m n n o o"
          `
        }}
      >
        {reviews.map((item, index) => {
          const areaMap = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'i', 'j', 'k', 'l', 'm', 'n'
          ]
          const area = areaMap[index]

          return (
            <motion.div
              key={index}
              className='relative flex flex-col rounded-lg p-4 text-xs text-secondary shadow-md transition hover:scale-105'
style={{
  gridArea: area,
  background: 'linear-gradient(145deg, #f3ede4 0%, #eae2d9 100%)'
}}

              variants={itemVariants}
            >
              <p className='mb-4'>{item.review}</p>
              <div className='mt-auto flex items-center gap-3'>
                <p className='font-bold'>{item.name}</p>
              </div>
              <div className='mt-3 flex items-center'>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className='text-xs text-yellow-500' />
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Mobile Layout */}
      <div className='flex flex-col gap-6 md:hidden'>
        {reviews.map((item, index) => (
          <motion.div
            key={index}
            className='relative flex flex-col rounded-lg bg-background-secondary p-4 text-xs text-secondary shadow-lg transition hover:scale-105'
            variants={itemVariants}
          >
            <p className='mb-4'>{item.review}</p>
            <div className='mt-auto flex items-center gap-3'>
              <p className='font-bold'>{item.name}</p>
            </div>
            <div className='mt-3 flex items-center'>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className='text-xs text-yellow-500' />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Reviews
