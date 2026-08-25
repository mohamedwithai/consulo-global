'use client';

import { motion } from 'framer-motion';
import { fadeInUp, defaultTransition, viewport } from '../lib/motion';

export function FadeIn({ children, className, delay = 0, variants = fadeInUp }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className, stagger = 0.12 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: stagger, delayChildren: 0.1 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div variants={fadeInUp} transition={defaultTransition} className={className}>
      {children}
    </motion.div>
  );
}
