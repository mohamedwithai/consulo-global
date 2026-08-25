'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './AnimatedSection';

export default function ClientCandidateSplit() {
  return (
    <section className="py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <StaggerContainer className="grid md:grid-cols-2 gap-6" stagger={0.15}>
          <StaggerItem>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-[#3F4143] p-12 text-white group"
            >
              <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">FOR CLIENTS</div>
              <h3 className="text-3xl font-black mb-4">Building your business starts with the right people.</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Contingent, exclusive and executive search plus talent mapping for industrial technology businesses.
              </p>
              <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
                <Link
                  href="/clients"
                  className="inline-block bg-[#FFD91A] text-[#3F4143] px-6 py-3 text-xs font-bold tracking-[0.15em] group-hover:shadow-lg transition-shadow"
                >
                  START A SEARCH →
                </Link>
              </motion.div>
            </motion.div>
          </StaggerItem>
          <StaggerItem>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white p-12 border border-[#3F4143]/10 group hover:border-[#FFD91A] transition-colors duration-300"
            >
              <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">FOR CANDIDATES</div>
              <h3 className="text-3xl font-black text-[#3F4143] mb-4">
                The best career moves don&apos;t always start with a job advert.
              </h3>
              <p className="text-[#3F4143]/70 mb-8 leading-relaxed">
                Confidential career conversations and targeted market representation for industrial technology professionals.
              </p>
              <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
                <Link
                  href="/candidates"
                  className="inline-block bg-[#3F4143] text-[#FFD91A] px-6 py-3 text-xs font-bold tracking-[0.15em] group-hover:shadow-lg transition-shadow"
                >
                  START A CONVERSATION →
                </Link>
              </motion.div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
