'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.main
      className="min-h-screen flex items-center justify-center bg-red-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-white">
        Witamy w Gama Color!
      </h1>
    </motion.main>
  )
}
