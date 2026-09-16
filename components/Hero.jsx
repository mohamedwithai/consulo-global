'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { easeOut } from '../lib/motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export default function Hero({ title, subtitle, cta1, cta2, href1, href2, image }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: easeOut }}
      >
        <Image src={image} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/30" />
      </motion.div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <div className="inline-block bg-signal text-charcoal px-3 py-1 text-xs font-bold tracking-[0.2em] mb-8">
              INDUSTRIAL TECHNOLOGY SEARCH
            </div>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight max-w-5xl"
          >
            {title}
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-8 text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            {subtitle}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4">
            {cta1 && href1 && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={href1}
                  className="inline-block bg-signal text-charcoal px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-white transition-colors"
                >
                  {cta1} →
                </Link>
              </motion.div>
            )}
            {cta2 && href2 && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={href2}
                  className="inline-block border-2 border-white text-white px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-white hover:text-charcoal transition-colors"
                >
                  {cta2} →
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-signal rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
