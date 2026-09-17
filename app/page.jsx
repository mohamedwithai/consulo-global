import Link from 'next/link';
import Hero from '../components/Hero';
import MarketMosaic from '../components/MarketMosaic';
import ProcessSteps from '../components/ProcessSteps';
import RegionGrid from '../components/RegionGrid';
import ClientCandidateSplit from '../components/ClientCandidateSplit';
import ClientLogoStrip from '../components/ClientLogoStrip';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { IMAGES, MARKETS, PUBLISHED_INSIGHTS } from '../lib/data';

export default function HomePage() {
  return (
    <>
      <Hero
        title="The people behind industrial technology."
        subtitle="Consulo Global connects industrial technology businesses with the people capable of driving commercial growth, technical capability and leadership across the United Kingdom, Continental Europe, Middle East and United States."
        cta1="DISCUSS A SEARCH"
        href1="/contact"
        cta2="EXPLORE OPPORTUNITIES"
        href2="/candidates"
        image={IMAGES.hero}
      />

      <ClientLogoStrip />

      {/* Specialist Markets */}
      <section className="py-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <StaggerContainer className="max-w-3xl mb-16">
            <StaggerItem>
              <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">SPECIALIST MARKETS</div>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight tracking-tight">
                Deep specialism across the industrial technology ecosystem.
              </h2>
            </StaggerItem>
          </StaggerContainer>
          <MarketMosaic markets={MARKETS} />
        </div>
      </section>

      {/* Statement */}
      <section className="py-28 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <div className="text-signal text-xs font-bold tracking-[0.2em] mb-6">OUR APPROACH</div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
              We don&apos;t start with candidates. <br />
              <span className="text-signal">We start with your market.</span>
            </h2>
          </FadeIn>
        </div>
      </section>

      <ProcessSteps />
      <RegionGrid />
      <ClientCandidateSplit />

      {/* Latest Insights */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <StaggerContainer className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <StaggerItem className="max-w-3xl">
              <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">MARKET INTELLIGENCE</div>
              <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight tracking-tight">Latest Insights.</h2>
            </StaggerItem>
            <StaggerItem>
              <Link href="/insights" className="text-charcoal text-sm font-bold tracking-[0.15em] border-b-2 border-signal pb-1 hover:text-signal transition-colors">
                VIEW ALL INSIGHTS →
              </Link>
            </StaggerItem>
          </StaggerContainer>
          <StaggerContainer className="grid md:grid-cols-3 gap-6" stagger={0.15}>
            {PUBLISHED_INSIGHTS.slice(0, 3).map((ins) => (
              <StaggerItem key={ins.title}>
                <Link href="/insights" className="group cursor-pointer block p-4 -m-4 rounded hover:bg-bone transition-colors duration-300">
                  <div className="text-signal text-xs font-bold tracking-[0.2em] mb-3">{ins.category}</div>
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-signal transition-colors leading-tight">{ins.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-4">{ins.excerpt}</p>
                  <div className="text-xs text-charcoal/50">{ins.date} · {ins.readTime}</div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
