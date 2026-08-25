import { INSIGHTS } from '../../lib/data';
import InsightsGrid from '../../components/InsightsGrid';
import { FadeIn } from '../../components/AnimatedSection';

export const metadata = { title: 'Insights | Consulo Global' };

export default function InsightsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#3F4143]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">MARKET INTELLIGENCE</div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">
              Industrial recruitment &amp; market intelligence.
            </h1>
            <p className="mt-8 text-xl text-white/80 max-w-3xl leading-relaxed">
              Hiring intelligence and market commentary across automation, power transmission, material handling, process technology and industrial sales.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <InsightsGrid insights={INSIGHTS} />
        </div>
      </section>
    </>
  );
}
