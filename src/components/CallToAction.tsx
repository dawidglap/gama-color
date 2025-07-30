'use client'

import { motion } from 'framer-motion'

const CallToAction = () => {
  return (
    <motion.div
      className='bg-background py-16 text-center'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='mx-auto max-w-4xl px-8'>
        {/* Tytuł */}
        <h2 className='text-4xl font-bold text-primary md:text-5xl'>
          Masz pytania? Chętnie doradzimy!
        </h2>
        {/* Podtytuł */}
        <p className='mt-4 text-lg text-secondary md:text-xl'>
          Skontaktuj się z nami już teraz i umów bezpłatny pomiar lub konsultację.
        </p>
        {/* Przycisk */}
        <div className='mt-8'>
          <a href='tel:+48598423534'>
            <motion.button
              className='hover:bg-yellow-500 cursor-pointer rounded-lg bg-yellow-400 px-6 py-3 text-lg font-bold text-accent-content shadow-lg transition'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Zadzwoń: +48 59 842 35 34
            </motion.button>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default CallToAction
