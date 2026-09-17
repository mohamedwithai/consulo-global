'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, defaultTransition } from '../lib/motion';
import { COLORS } from '../lib/theme';

export default function MarketCard({ market, index = 0, wide = false, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group bg-white overflow-hidden border border-charcoal/10 hover:border-signal/50 transition-colors duration-300 ${className}`}
    >
      <Link href={`/markets/${market.id}`} className={wide ? 'grid md:grid-cols-2 h-full' : undefined}>
        <div className={`relative overflow-hidden ${wide ? 'h-64 md:h-full md:min-h-[320px]' : 'h-64'}`}>
          <Image
            src={market.image}
            alt={market.title}
            fill
            sizes={wide ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
          >
            <div className="text-signal text-xs font-bold tracking-[0.2em] mb-2">MARKET</div>
            <h3 className="text-white text-xl font-bold leading-tight">{market.title}</h3>
          </motion.div>
        </div>
        <div className={wide ? 'p-8 md:p-10 flex flex-col justify-center' : 'p-6'}>
          <p className={`text-charcoal/70 leading-relaxed mb-4 ${wide ? 'text-base' : 'text-sm'}`}>{market.tagline}</p>
          <div className="flex flex-wrap gap-1.5">
            {market.technologies.slice(0, wide ? 8 : 5).map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.08, backgroundColor: COLORS.signal }}
                className="text-[10px] tracking-[0.1em] bg-bone text-charcoal px-2 py-1 font-medium cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="mt-6 flex items-center gap-2 text-charcoal text-xs font-bold tracking-[0.15em] group-hover:text-signal transition-colors"
            whileHover={{ x: 4 }}
          >
            EXPLORE MARKET →
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
