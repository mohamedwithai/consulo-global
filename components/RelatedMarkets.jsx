import Link from 'next/link';
import { MARKETS } from '../lib/data';

/**
 * Reinforces that the seven markets are interconnected — every market page
 * points at the two it overlaps with most.
 */
export default function RelatedMarkets({ market }) {
  const related = (market.related || [])
    .map((id) => MARKETS.find((m) => m.id === id))
    .filter(Boolean);

  if (!related.length) return null;

  return (
    <section className="py-20 bg-[#F7F7F5] border-t border-[#3F4143]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">CONNECTED MARKETS</div>
        <h2 className="text-2xl md:text-3xl font-black text-[#3F4143] mb-10 tracking-tight">
          Where this market crosses over.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {related.map((m) => (
            <Link
              key={m.id}
              href={`/markets/${m.id}`}
              className="group flex items-center justify-between gap-6 bg-white p-8 border border-[#3F4143]/10 hover:border-[#FFD91A] transition-colors"
            >
              <div>
                <h3 className="text-xl font-bold text-[#3F4143] group-hover:text-[#FFD91A] transition-colors leading-tight">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-[#3F4143]/70 leading-relaxed">{m.tagline}</p>
              </div>
              <span className="text-[#FFD91A] text-xl shrink-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
