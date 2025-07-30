'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUserCircle } from 'react-icons/fa'
import Image from 'next/image'
import stef from '../../public/images/stef.png' // Sostituisci con il tuo path effettivo

const faqData = [
  {
    question: 'Ile kosztuje montaż?',
    answer: 'Koszt montażu zależy od rodzaju produktu i lokalizacji. Skontaktuj się z nami, aby otrzymać indywidualną wycenę.'
  },
  {
    question: 'Czy oferujecie bezpłatny pomiar?',
    answer: 'Tak! Nasz specjalista przyjedzie na miejsce i wykona profesjonalny pomiar bez żadnych opłat.'
  },
  {
    question: 'Jak długo trwa realizacja zamówienia?',
    answer: 'Standardowy czas realizacji wynosi od 5 do 14 dni roboczych w zależności od produktu.'
  },
  {
    question: 'Czy można zamówić produkty na wymiar?',
    answer: 'Oczywiście. Wszystkie nasze produkty są wykonywane na indywidualne zamówienie zgodnie z wymiarami klienta.'
  },
  {
    question: 'Jakie produkty oferujecie?',
    answer: 'W ofercie mamy rolety, żaluzje, plisy, rolety rzymskie, moskitiery, markizy oraz rolety zewnętrzne.'
  },
  {
    question: 'Czy można obejrzeć próbki materiałów?',
    answer: 'Tak, nasz doradca przyjeżdża z próbkami materiałów, dzięki czemu można dopasować je do wnętrza.'
  },
  {
    question: 'Czy wystawiacie faktury?',
    answer: 'Tak, wystawiamy faktury VAT dla osób prywatnych i firm.'
  },
  {
    question: 'Jak mogę złożyć zamówienie?',
    answer: 'Zamówienie można złożyć telefonicznie, mailowo lub przez formularz kontaktowy na naszej stronie.'
  }
]

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className='relative mx-auto max-w-6xl py-16'>
      <div className='container mx-auto px-4 lg:flex lg:space-x-8'>
        {/* Left - FAQ List */}
        <div className='px-6 md:px-4 lg:w-2/3'>
          <h2 className='mb-8 text-4xl font-bold text-center md:text-left text-primary'>
            Najczęściej zadawane pytania
          </h2>
          <div className='space-y-4'>
            {faqData.map((faq, index) => (
              <div
                key={index}
                className='border-b border-dotted border-gray-300 pb-4'
              >
                <button
                  className='flex w-full justify-between text-left'
                  onClick={() => toggleFaq(index)}
                >
                  <span className='text-xl font-medium text-black'>
                    {faq.question}
                  </span>
                  <motion.span
                    className='transform'
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  >
                    <svg
                      className='h-5 w-5 text-secondary'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </motion.span>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedIndex === index ? 'auto' : 0,
                    opacity: expandedIndex === index ? 1 : 0
                  }}
                  className='mt-2 overflow-hidden'
                >
                  <p className='text-gray-700'>{faq.answer}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Contact Box */}


<div className='mt-12 px-6 md:px-4 lg:mt-0 lg:w-1/3 lg:pl-8'>
  <div
    className='space-y-4 rounded-lg bg-background-secondary p-6 text-center shadow-md'
    style={{
      background: 'linear-gradient(135deg, #fff8e1, #ffe5e0)' // giallo → rosso
    }}
  >
    <div className='flex justify-center'>
      <div className='relative h-20 w-20 overflow-hidden rounded-full shadow-md'>
        <Image
          src={stef}
          alt='Zespół Gama Color'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
    <h3 className='text-2xl font-bold text-primary'>
      Masz inne pytania?
    </h3>
    <a
      href='mailto:biuro@gamacolor.pl'
      className='block text-sm text-secondary'
    >
      <span className='text-black font-semibold'>e-mail:</span> biuro@gamacolor.pl
    </a>
    <p className='text-sm text-secondary'>
      <span className='text-yellow-400 font-semibold'>tel:</span> +48 59 842 35 34 <br />
      <span className='text-red-500 font-semibold'>fax:</span> +48 59 842 35 34 <br />
      <span className='text-blue-500 font-semibold'>kom:</span> +48 603 380 709
    </p>
  </div>
</div>


      </div>
    </section>
  )
}

export default Faq
