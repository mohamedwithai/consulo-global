'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero({ title, subtitle, cta1, cta2, href1, href2, image }) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3F4143]/95 via-[#3F4143]/70 to-[#3F4143]/30" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-block bg-[#FFD91A] text-[#3F4143] px-3 py-1 text-xs font-bold tracking-[0.2em] mb-8">
            INDUSTRIAL TECHNOLOGY SEARCH
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">
            {title}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">{subtitle}</p>
          <div className="mt-12 flex flex-wrap gap-4">
            {cta1 && href1 && (
              <Link href={href1} className="bg-[#FFD91A] text-[#3F4143] px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-white transition-colors">
                {cta1} →
              </Link>
            )}
            {cta2 && href2 && (
              <Link href={href2} className="border-2 border-white text-white px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-white hover:text-[#3F4143] transition-colors">
                {cta2} →
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
