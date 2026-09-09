'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { viewport } from '../lib/motion';

/**
 * Renders a client's logo where we hold permission to display it, and a
 * typographic wordmark where we do not yet. Both states occupy the same box so
 * the grid stays optically even as real artwork is added company by company.
 */
export default function ClientLogo({ client, index = 0, compact = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.45, delay: Math.min(index, 8) * 0.05 }}
      className={`group flex items-center justify-center border border-charcoal/10 bg-white transition-colors duration-300 hover:border-signal ${
        compact ? 'h-20 px-5' : 'h-28 px-6'
      }`}
    >
      {client.logo ? (
        <div className={`relative w-full ${compact ? 'h-10' : 'h-14'}`}>
          <Image
            src={client.logo}
            alt={client.name}
            fill
            sizes="200px"
            className="object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
          />
        </div>
      ) : (
        <Wordmark name={client.name} compact={compact} />
      )}
    </motion.div>
  );
}

function Wordmark({ name, compact }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span
        className={`font-black uppercase leading-tight tracking-tight text-charcoal/70 transition-colors duration-300 group-hover:text-charcoal ${
          compact ? 'text-sm' : 'text-base'
        }`}
      >
        {name}
      </span>
      <span className="h-[2px] w-6 bg-signal transition-all duration-300 group-hover:w-10" />
    </div>
  );
}
