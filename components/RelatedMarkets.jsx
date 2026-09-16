import Link from 'next/link';
import { MARKETS } from '../lib/data';

/**
 * Reinforces that the markets are interconnected — every market page
 * points at the two it overlaps with most.
 */
export default function RelatedMarkets({ market }) {
  const related = (market.related || [])
    .map((id) => MARKETS.find((m) => m.id === id))
    .filter(Boolean);

  if (!related.length) return null;

  return (
    <section className="py-28 bg-bone border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">CONNECTED MARKETS</div>
        <h2 className="text-2xl md:text-3xl font-black text-charcoal mb-10 tracking-tight">
          Where this market crosses over.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {related.map((m) => (
            <Link
              key={m.id}
              href={`/markets/${m.id}`}
              className="group flex items-center justify-between gap-6 bg-white p-8 border border-charcoal/10 hover:border-signal transition-colors"
            >
              <div>
                <h3 className="text-xl font-bold text-charcoal group-hover:text-signal transition-colors leading-tight">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">{m.tagline}</p>
              </div>
              <span className="text-signal text-xl shrink-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
