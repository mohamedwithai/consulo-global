'use client';

import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './AnimatedSection';

const STEPS = [
  { n: '01', t: 'Understand', d: 'Business, role, products, customers, geography, objectives.' },
  { n: '02', t: 'Map', d: 'Competitors, adjacent markets, target companies, talent pools.' },
  { n: '03', t: 'Engage', d: 'Direct search, existing network, passive candidates, referrals.' },
  { n: '04', t: 'Assess', d: 'Technical relevance, commercial track record, cultural fit, motivation.' },
  { n: '05', t: 'Deliver', d: 'Focused shortlist, interview management, offer management, onboarding.' },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <StaggerContainer className="max-w-3xl mb-16">
          <StaggerItem>
            <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">SEARCH PROCESS</div>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-4xl md:text-5xl font-black text-[#3F4143] leading-tight tracking-tight">
              The Consulo Search Process.
            </h2>
          </StaggerItem>
        </StaggerContainer>
        <StaggerContainer className="grid md:grid-cols-5 gap-6" stagger={0.08}>
          {STEPS.map((s) => (
            <StaggerItem key={s.n}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="bg-white p-6 border-l-4 border-[#FFD91A] cursor-default group"
              >
                <motion.div
                  className="text-[#FFD91A] text-3xl font-black mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                >
                  {s.n}
                </motion.div>
                <h3 className="text-lg font-bold text-[#3F4143] mb-2 group-hover:text-[#FFD91A] transition-colors duration-300">
                  {s.t}
                </h3>
                <p className="text-sm text-[#3F4143]/70 leading-relaxed">{s.d}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
