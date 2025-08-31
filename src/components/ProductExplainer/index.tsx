// src/components/ProductExplainer/index.tsx
'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '../ProductExplainer/ui';
import { getProductComponent } from '../ProductExplainer/products/registry';

export default function ProductExplainer({ slug }: { slug: string }) {
  const ProductBody = getProductComponent(slug);

  return (
    // ⛑️ niente whileInView qui: evitiamo che al hard reload resti "hidden"
    <motion.section
      initial={false}
      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 md:col-span-2"
    >
      {/* top accent */}
      <div className="mb-4 h-1 w-28 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400" />

      {/* titolo: anima subito, senza IntersectionObserver */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-xl font-semibold text-neutral-900"
      >
        Opis produktu
      </motion.h2>

      {/* corpo: i singoli blocchi all'interno dei file prodotto gestiscono le proprie animazioni */}
      <div className="mt-3">
        <ProductBody />
      </div>
    </motion.section>
  );
}
