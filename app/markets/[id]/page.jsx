import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import MarketMap from '../../../components/MarketMap';
import RelatedMarkets from '../../../components/RelatedMarkets';
import { MARKETS } from '../../../lib/data';

export function generateStaticParams() {
  return MARKETS.map((m) => ({ id: m.id }));
}

export function generateMetadata({ params }) {
  const market = MARKETS.find((m) => m.id === params.id);
  if (!market) return {};
  return { title: `${market.title} | Consulo Global` };
}

export default function MarketPage({ params }) {
  const index = MARKETS.findIndex((m) => m.id === params.id);
  const market = MARKETS[index];
  if (!market) notFound();

  return (
    <>
      {/* Each market opens with its own imagery and index so the seven pages
          are immediately distinguishable from one another. */}
      <section className="relative pt-40 pb-28 bg-charcoal overflow-hidden">
        <Image
          src={market.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-signal text-charcoal px-2.5 py-1 text-xs font-black tracking-[0.15em]">
              {String(index + 1).padStart(2, '0')} / {String(MARKETS.length).padStart(2, '0')}
            </span>
            <span className="text-signal text-xs font-bold tracking-[0.2em]">SPECIALIST MARKET</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">{market.title}</h1>
          <p className="mt-8 text-xl text-white/80 max-w-3xl leading-relaxed">{market.tagline}</p>
        </div>
      </section>

      <section className="py-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">TECHNOLOGIES</div>
              <h2 className="text-3xl font-black text-charcoal mb-6">The technologies we recruit across.</h2>
              <div className="flex flex-wrap gap-2">
                {market.technologies.map((t) => (
                  <span key={t} className="bg-white border border-charcoal/20 text-charcoal px-3 py-1.5 text-xs font-medium tracking-wide">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">WHERE THE TALENT SITS</div>
              <h2 className="text-3xl font-black text-charcoal mb-6">Organisations we know.</h2>
              <ul className="space-y-3">
                {market.talent.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-charcoal/80">
                    <span className="text-signal font-bold mt-1">→</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <MarketMap market={market} />

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">TYPICAL APPOINTMENTS</div>
              <h2 className="text-3xl font-black text-charcoal mb-6">Roles we place.</h2>
              <div className="grid grid-cols-2 gap-3">
                {market.appointments.map((a) => (
                  <div key={a} className="bg-bone p-4 border-l-2 border-signal">
                    <div className="text-sm font-semibold text-charcoal">{a}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">INDUSTRIES</div>
              <h2 className="text-3xl font-black text-charcoal mb-6">Sectors we serve.</h2>
              <div className="flex flex-wrap gap-2">
                {market.industries.map((i) => (
                  <span key={i} className="bg-charcoal text-white px-3 py-1.5 text-xs font-medium tracking-wide">{i}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedMarkets market={market} />

      <section className="py-28 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Looking for talent in {market.title}?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-signal text-charcoal px-8 py-4 text-sm font-bold tracking-[0.15em]">DISCUSS A SEARCH →</Link>
            <Link href="/candidates" className="border-2 border-white text-white px-8 py-4 text-sm font-bold tracking-[0.15em]">EXPLORE OPPORTUNITIES →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
