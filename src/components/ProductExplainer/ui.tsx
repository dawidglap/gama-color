'use client';

import { motion, type Variants } from 'framer-motion';
import type { ComponentProps, ReactNode } from 'react';
import {
  IconCheck,
} from '@tabler/icons-react';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export function Block({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mt-3 space-y-8 text-neutral-700 ${className}`}>{children}</div>;
}

export function Chips({
  items,
  className = '',
}: {
  items: { label: string; Icon: (props: ComponentProps<'svg'>) => JSX.Element }[];
  className?: string;
}) {
  return (
    <motion.div variants={stagger} className={`flex flex-wrap gap-2 ${className}`}>
      {items.map(({ label, Icon }, i) => (
        <motion.span
          key={i}
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1 text-sm text-neutral-800 ring-1 ring-neutral-200"
        >
          <Icon className="h-4 w-4 text-neutral-500" />
          {label}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function Bullets({ points }: { points: ReactNode[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {points.map((t, i) => (
        <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
          <IconCheck className="mt-[2px] h-5 w-5 text-green-500" />
          <span>{t}</span>
        </motion.li>
      ))}
    </ul>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={fadeUp} className="rounded-xl bg-neutral-50 p-4 ring-1 ring-neutral-200">
      <p className="text-sm">{children}</p>
    </motion.div>
  );
}

export function Fallback() {
  return (
    <motion.p variants={fadeUp} className="mt-3 text-neutral-700">
      Tu wstawimy opis rozszerzony, zdjęcia detali i krótką listę korzyści.
    </motion.p>
  );
}
