'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './AnimatedSection';

export default function ClientCandidateSplit() {
  return (
    <section className="py-28 bg-bone">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <StaggerContainer className="grid md:grid-cols-2 gap-6" stagger={0.15}>
          <StaggerItem>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-charcoal p-12 text-white group"
            >
              <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">FOR CLIENTS</div>
              <h3 className="text-3xl font-black mb-4">Building your business starts with the right people.</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Contingent, exclusive and executive search plus talent mapping for industrial technology businesses.
              </p>
              <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
                <Link
                  href="/clients"
                  className="inline-block bg-signal text-charcoal px-6 py-3 text-xs font-bold tracking-[0.15em] group-hover:shadow-lg transition-shadow"
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
              className="bg-white p-12 border border-charcoal/10 group hover:border-signal transition-colors duration-300"
            >
              <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">FOR CANDIDATES</div>
              <h3 className="text-3xl font-black text-charcoal mb-4">
                The best career moves don&apos;t always start with a job advert.
              </h3>
              <p className="text-charcoal/70 mb-8 leading-relaxed">
                Confidential career conversations and targeted market representation for industrial technology professionals.
              </p>
              <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
                <Link
                  href="/candidates"
                  className="inline-block bg-charcoal text-signal px-6 py-3 text-xs font-bold tracking-[0.15em] group-hover:shadow-lg transition-shadow"
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
