import MarketCard from '../../components/MarketCard';
import MarketEcosystem from '../../components/MarketEcosystem';
import { MARKETS } from '../../lib/data';

export const metadata = {
  title: 'Specialist Markets | Consulo Global',
  description: 'Eight specialist industrial technology markets — Industrial Automation Recruitment, Power Transmission Recruitment, Industrial Distribution Recruitment and more, mapped before a single candidate is approached.',
};

export default function MarketsPage() {
  return (
    <>
      <section className="pt-40 pb-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">SPECIALIST MARKETS</div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">Deep specialism across the industrial technology ecosystem.</h1>
          <p className="mt-8 text-xl text-white/80 max-w-3xl leading-relaxed">Consulo operates across eight specialist markets — from automation and motion control through electrification, mechanical power transmission, material handling and process technology to combustion, thermal systems and energy & oilfield technologies.</p>
        </div>
      </section>
      <section className="py-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-6">
            <MarketCard market={MARKETS[0]} wide />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MARKETS.slice(1).map((m, i) => (
              <MarketCard key={m.id} market={m} index={i} />
            ))}
          </div>
        </div>
      </section>
      <MarketEcosystem />
    </>
  );
}
