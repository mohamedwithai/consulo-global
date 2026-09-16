import Link from 'next/link';
import { INSIGHTS, PUBLISHED_INSIGHTS } from '../../lib/data';
import InsightsGrid from '../../components/InsightsGrid';
import { FadeIn, StaggerContainer, StaggerItem } from '../../components/AnimatedSection';

const SCHEDULED_INSIGHTS = INSIGHTS.filter((i) => i.status === 'scheduled');

export const metadata = { title: 'Insights | Consulo Global' };

export default function InsightsPage() {
  return (
    <>
      <section className="pt-40 pb-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">MARKET INTELLIGENCE</div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">
              Industrial recruitment &amp; market intelligence.
            </h1>
            <p className="mt-8 text-xl text-white/80 max-w-3xl leading-relaxed">
              Hiring intelligence and market commentary across automation, power transmission, material handling, process technology and industrial sales.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <InsightsGrid insights={PUBLISHED_INSIGHTS} />

          <FadeIn>
            <div className="mt-16 border-t border-charcoal/15 pt-10 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="text-signal text-xs font-bold tracking-[0.2em] mb-3">PUBLISHING REGULARLY</div>
                <p className="text-charcoal/70 leading-relaxed">
                  New market intelligence is published across automation, electrification, power
                  transmission, material handling, distribution, process technology and thermal systems.
                  Follow Consulo Global on LinkedIn to see each piece as it goes live.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-block bg-charcoal text-signal px-6 py-3 text-xs font-bold tracking-[0.15em] hover:bg-signal hover:text-charcoal transition-colors">
                  FOLLOW ON LINKEDIN →
                </a>
                <Link href="/contact" className="inline-block border-2 border-charcoal text-charcoal px-6 py-3 text-xs font-bold tracking-[0.15em] hover:bg-charcoal hover:text-white transition-colors">
                  TALK TO CONSULO →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {SCHEDULED_INSIGHTS.length > 0 && (
        <section className="py-24 bg-charcoal">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeIn>
              <div className="text-signal text-xs font-bold tracking-[0.2em] mb-3">IN THE PIPELINE</div>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight max-w-3xl mb-12">
                More market intelligence in development.
              </h2>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
              {SCHEDULED_INSIGHTS.map((ins) => (
                <StaggerItem key={ins.title}>
                  <div className="border border-white/15 p-6 h-full">
                    <div className="text-signal text-xs font-bold tracking-[0.2em] mb-3">{ins.category}</div>
                    <h3 className="text-lg font-bold text-white leading-snug">{ins.title}</h3>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </>
  );
}
