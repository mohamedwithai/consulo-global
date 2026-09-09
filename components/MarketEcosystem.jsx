'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from './AnimatedSection';
import { MARKETS, MARKET_ECOSYSTEM } from '../lib/data';
import { viewport } from '../lib/motion';

// Technologies that genuinely sit across two of the three connected markets.
// These are the crossover points a specialist search actually exploits.
const CROSSOVERS = [
  ['Variable Speed Drives', 'Servo Motors', 'Power Electronics'],
  ['Electric Motors', 'Electric Drivetrains', 'High-Efficiency Motors'],
];

const NODES = MARKET_ECOSYSTEM.map((id) => MARKETS.find((m) => m.id === id)).filter(Boolean);

export default function MarketEcosystem() {
  return (
    <section className="py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="max-w-3xl mb-16">
          <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">CONNECTED MARKETS</div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            These markets don&apos;t operate independently.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Automation, electrification and mechanical power transmission share technologies, customers and
            talent. Understanding where they overlap is how we find people the obvious search never reaches.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-y-8 items-stretch">
          {NODES.map((market, i) => (
            <Node key={market.id} market={market} index={i} connector={CROSSOVERS[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Node({ market, index, connector }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, delay: index * 0.12 }}
      >
        <Link
          href={`/markets/${market.id}`}
          className="group flex h-full flex-col justify-between border border-white/15 hover:border-signal bg-white/[0.03] hover:bg-white/[0.06] p-8 transition-colors duration-300"
        >
          <div>
            <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">0{index + 1}</div>
            <h3 className="text-2xl font-black text-white leading-tight group-hover:text-signal transition-colors">
              {market.title}
            </h3>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">{market.tagline}</p>
          </div>
          <div className="mt-8 text-xs font-bold tracking-[0.15em] text-white/50 group-hover:text-signal transition-colors">
            EXPLORE MARKET →
          </div>
        </Link>
      </motion.div>

      {connector && <Connector technologies={connector} delay={index * 0.12 + 0.2} />}
    </>
  );
}

function Connector({ technologies, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center gap-3 lg:w-44 lg:px-4 py-2"
      aria-hidden="true"
    >
      <div className="hidden lg:block text-signal text-2xl leading-none">↔</div>
      <div className="lg:hidden text-signal text-2xl leading-none">↕</div>
      <div className="text-[10px] text-white/50 tracking-[0.1em] text-center leading-relaxed">
        {technologies.join(' · ')}
      </div>
    </motion.div>
  );
}
