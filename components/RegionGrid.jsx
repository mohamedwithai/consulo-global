'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './AnimatedSection';
import { REGIONS } from '../lib/data';

export default function RegionGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">INTERNATIONAL REACH</div>
            <h2 className="text-4xl md:text-5xl font-black text-[#3F4143] leading-tight tracking-tight mb-6">
              Four regions. One specialist search methodology.
            </h2>
            <p className="text-lg text-[#3F4143]/70 leading-relaxed mb-8">
              Headquartered in Dubai, Consulo Global operates across the United States, United Kingdom, Continental Europe and Middle East — mapping talent, competitors and routes to market for industrial technology businesses wherever they operate.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-block bg-[#FFD91A] text-[#3F4143] px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-[#3F4143] hover:text-[#FFD91A] transition-colors"
              >
                TALK TO CONSULO →
              </Link>
            </motion.div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 gap-4" stagger={0.1}>
            {REGIONS.map((r, i) => (
              <StaggerItem key={r}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className={`p-8 cursor-default ${i % 2 === 0 ? 'bg-[#3F4143] text-white' : 'bg-[#FFD91A] text-[#3F4143]'}`}
                >
                  <motion.div
                    className="text-4xl font-black mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 300 }}
                  >
                    0{i + 1}
                  </motion.div>
                  <div className="text-sm font-bold tracking-[0.1em]">{r}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
