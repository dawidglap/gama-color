'use client';

import { motion } from 'motion/react';

export default function ProductHeader({
  category,
  title,
  description,
  variant = 'default', // 'default' | 'overlay'
}: {
  category: string;
  title: string;
  description: string;
  variant?: 'default' | 'overlay';
}) {
  const isOverlay = variant === 'overlay';

  return (
    <section className={`relative ${isOverlay ? 'mb-0' : 'mb-10'} overflow-visible`}>
      {/* glow soft brand (solo versione default) */}
      {!isOverlay && (
        <div
          aria-hidden
          className="pointer-events-none absolute -left-8 -top-10 -z-10 h-40 w-40 rounded-full
                     bg-gradient-to-tr from-yellow-300 via-red-300 to-blue-300 blur-3xl opacity-30"
        />
      )}

      {/* category pill */}
      <motion.span
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-medium ring-1 backdrop-blur
          ${isOverlay
            ? 'bg-white/20 text-white ring-white/40 drop-shadow'
            : 'bg-white/70 text-neutral-700 ring-neutral-200'
          }`}
      >
        {category}
      </motion.span>

      {/* title */}
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
        className={`mt-3 text-3xl font-bold tracking-tight md:text-5xl
          ${isOverlay ? 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]' : 'text-neutral-900'}`}
      >
        {title}
      </motion.h1>

      {/* description */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        className={`mt-4 max-w-3xl
          ${isOverlay
            ? 'text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]'
            : 'text-neutral-600'}`}
      >
        {description}
      </motion.p>

      {/* brand underline (animated) */}
      <div className="mt-6  hidden sm:flex gap-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`h-1 rounded-full ${isOverlay ? 'bg-yellow-300' : 'bg-yellow-400'}`}
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          className={`h-1 rounded-full ${isOverlay ? 'bg-red-300' : 'bg-red-500'}`}
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className={`h-1 rounded-full ${isOverlay ? 'bg-blue-300' : 'bg-blue-400'}`}
        />
      </div>
    </section>
  );
}
