'use client';

import { motion } from 'framer-motion';
import { viewport } from '../lib/motion';

const TIERS = [
  {
    key: 'direct',
    label: 'Direct Technology',
    note: 'The core products and systems that define the market.',
  },
  {
    key: 'adjacent',
    label: 'Adjacent Technology',
    note: 'Where transferable experience genuinely exists.',
  },
  {
    key: 'organisations',
    label: 'Target Organisations',
    note: 'The businesses that employ the people we are looking for.',
  },
  {
    key: 'talent',
    label: 'Target Talent',
    note: 'The commercial and technical functions we recruit.',
  },
];

/**
 * "How We Map This Market" — the visual that shows Consulo searches by
 * technology, competitor and adjacency rather than by job title.
 */
export default function MarketMap({ market }) {
  if (!market.map) return null;

  return (
    <section className="py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">HOW WE MAP THIS MARKET</div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            We don&apos;t search by job title.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Every search starts with the technology and works outwards — through adjacent products, the
            companies that sell them and the people who understand the application.
          </p>
        </motion.div>

        <div>
          {TIERS.map((tier, i) => (
            <Tier
              key={tier.key}
              tier={tier}
              index={i}
              items={market.map[tier.key] || []}
              last={i === TIERS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tier({ tier, items, index, last }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-10 border-l-2 border-signal bg-white/[0.04] p-8"
      >
        <div>
          <div className="flex items-baseline gap-3">
            <span className="text-signal text-xs font-black tracking-[0.2em]">0{index + 1}</span>
            <h3 className="text-lg font-black text-white tracking-tight">{tier.label}</h3>
          </div>
          <p className="mt-2 text-xs text-white/50 leading-relaxed">{tier.note}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
          {items.map((item, j) => (
            <span key={item} className="flex items-center gap-3">
              <span className="border border-white/20 bg-charcoal px-3 py-1.5 text-xs font-medium tracking-wide text-white/90 transition-colors duration-300 hover:border-signal hover:text-signal">
                {item}
              </span>
              {j < items.length - 1 && <span className="text-signal/60 text-xs">→</span>}
            </span>
          ))}
        </div>
      </motion.div>

      {!last && (
        <div className="flex justify-center py-3" aria-hidden="true">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.15 }}
            className="text-signal text-xl leading-none"
          >
            ↓
          </motion.span>
        </div>
      )}
    </>
  );
}
