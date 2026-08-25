'use client';

import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './AnimatedSection';

export default function InsightsGrid({ insights }) {
  return (
    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.1}>
      {insights.map((ins) => (
        <StaggerItem key={ins.title}>
          <motion.article
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="bg-white p-8 border border-[#3F4143]/10 hover:border-[#FFD91A] transition-colors cursor-pointer group h-full"
          >
            <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">{ins.category}</div>
            <h2 className="text-xl font-bold text-[#3F4143] mb-4 group-hover:text-[#FFD91A] transition-colors leading-tight">
              {ins.title}
            </h2>
            <p className="text-sm text-[#3F4143]/70 leading-relaxed mb-6">{ins.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-[#3F4143]/50 pt-4 border-t border-[#3F4143]/10">
              <span>{ins.date}</span>
              <span>{ins.readTime}</span>
            </div>
            <motion.div
              className="mt-4 text-[#3F4143] text-xs font-bold tracking-[0.15em] group-hover:text-[#FFD91A] transition-colors"
              whileHover={{ x: 4 }}
            >
              READ INSIGHT →
            </motion.div>
          </motion.article>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
