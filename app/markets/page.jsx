import MarketCard from '../../components/MarketCard';
import MarketEcosystem from '../../components/MarketEcosystem';
import { MARKETS } from '../../lib/data';

export const metadata = { title: 'Specialist Markets | Consulo Global' };

export default function MarketsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#3F4143]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">SPECIALIST MARKETS</div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">Deep specialism across the industrial technology ecosystem.</h1>
          <p className="mt-8 text-xl text-white/80 max-w-3xl leading-relaxed">Consulo operates across seven specialist markets — from automation and motion control through electrification, mechanical power transmission, material handling and process technology to combustion and thermal systems.</p>
        </div>
      </section>
      <section className="py-20 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MARKETS.map((m) => (
              <MarketCard key={m.id} market={m} />
            ))}
          </div>
        </div>
      </section>
      <MarketEcosystem />
    </>
  );
}
