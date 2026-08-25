'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, defaultTransition } from '../lib/motion';

export default function MarketCard({ market, index = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white overflow-hidden border border-[#3F4143]/10 hover:border-[#FFD91A]/50 transition-colors duration-300"
    >
      <Link href={`/markets/${market.id}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={market.image}
            alt={market.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3F4143]/80 to-transparent" />
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
          >
            <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-2">MARKET</div>
            <h3 className="text-white text-xl font-bold leading-tight">{market.title}</h3>
          </motion.div>
        </div>
        <div className="p-6">
          <p className="text-[#3F4143]/70 text-sm leading-relaxed mb-4">{market.tagline}</p>
          <div className="flex flex-wrap gap-1.5">
            {market.technologies.slice(0, 5).map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.08, backgroundColor: '#FFD91A' }}
                className="text-[10px] tracking-[0.1em] bg-[#F7F7F5] text-[#3F4143] px-2 py-1 font-medium cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="mt-6 flex items-center gap-2 text-[#3F4143] text-xs font-bold tracking-[0.15em] group-hover:text-[#FFD91A] transition-colors"
            whileHover={{ x: 4 }}
          >
            EXPLORE MARKET →
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
