import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '../../components/AnimatedSection';
import { IMAGES, MARKETS, REGIONS } from '../../lib/data';

export const metadata = { title: 'About | Consulo Global' };

const HERITAGE = [
  {
    k: 'Since 2017',
    t: 'Built inside industrial markets',
    d: 'Consulo was founded to serve industrial and technical markets where genuine sector knowledge is the difference between a shortlist and a search.',
  },
  {
    k: 'Eight markets',
    t: 'Specialism, not coverage',
    d: 'Automation, electrification, power transmission, material handling, distribution, process technology, thermal systems and energy & oilfield technologies — mapped as connected ecosystems.',
  },
  {
    k: 'Four regions',
    t: 'One methodology',
    d: 'The same specialist approach applied across the United Kingdom, Continental Europe, Middle East and United States.',
  },
];

const PHILOSOPHY = [
  {
    n: '01',
    t: 'The market comes before the candidate',
    d: 'We map products, applications, customers, competitors and adjacent technologies before we approach a single person.',
  },
  {
    n: '02',
    t: 'Technology defines transferability',
    d: 'The right candidate frequently sits one technology across, not one job title down. Knowing where experience genuinely transfers is the specialism.',
  },
  {
    n: '03',
    t: 'The best people are not applying',
    d: 'Direct search, long-term relationships and confidential conversations reach the talent an advertised vacancy never will.',
  },
  {
    n: '04',
    t: 'A shortlist should be short',
    d: 'Focused, relevant and defensible — every candidate presented with the reasoning behind why they are on the list.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">ABOUT CONSULO GLOBAL</div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">Specialist industries deserve specialist recruiters.</h1>
          <p className="mt-8 text-xl text-white/80 max-w-3xl leading-relaxed">Consulo Global is an international specialist search business focused on the commercial, technical and leadership talent behind industrial technology. Founded in 2017 and headquartered in Dubai, we operate across the United Kingdom, Continental Europe, the Middle East and the USA.</p>
        </div>
      </section>

      {/* Evolution */}
      <section className="py-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">OUR EVOLUTION</div>
              <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6 tracking-tight">From Consulo First to Consulo Global.</h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-6">Consulo began in 2017 with a clear purpose: to provide specialist recruitment to industrial and technical markets where genuine sector knowledge matters.</p>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-6">Consulo Global represents the next stage of that journey — taking the specialist approach upon which the business was built and applying it across an increasingly international client and candidate network.</p>
              <p className="text-lg text-charcoal/70 leading-relaxed">In doing so, Consulo has developed an extensive specialist industry network — spanning direct competitors, adjacent technology businesses, distributors and the wider supply chain across every market we serve.</p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="relative h-[420px] w-full">
                <Image
                  src={IMAGES.power}
                  alt="Industrial drive technology"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-signal text-xs font-bold tracking-[0.2em]">INDUSTRIAL TECHNOLOGY SEARCH</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Heritage & market knowledge */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="max-w-3xl mb-16">
            <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">SPECIALIST HERITAGE</div>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight tracking-tight">Industrial markets are our starting point, not a sector we cover.</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-10" stagger={0.12}>
            {HERITAGE.map((h) => (
              <StaggerItem key={h.k}>
                <div className="border-t-2 border-signal pt-6">
                  <div className="text-charcoal/50 text-xs font-bold tracking-[0.2em] mb-4">{h.k}</div>
                  <h3 className="text-xl font-black text-charcoal mb-3 tracking-tight">{h.t}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{h.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Search philosophy */}
      <section className="py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[380px_1fr] gap-16">
            <FadeIn>
              <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">SEARCH PHILOSOPHY</div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">Understand the market. Then find the people.</h2>
            </FadeIn>
            <StaggerContainer className="divide-y divide-white/10 border-t border-white/10" stagger={0.1}>
              {PHILOSOPHY.map((p) => (
                <StaggerItem key={p.n}>
                  <div className="grid sm:grid-cols-[64px_1fr] gap-4 sm:gap-8 py-8">
                    <div className="text-signal text-lg font-black tracking-tight">{p.n}</div>
                    <div>
                      <h3 className="text-xl font-black text-white mb-2 tracking-tight">{p.t}</h3>
                      <p className="text-white/60 leading-relaxed">{p.d}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Technologies and industries we understand */}
      <section className="py-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="max-w-3xl mb-16">
            <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">WHAT WE UNDERSTAND</div>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight tracking-tight">The technologies and industries behind the searches.</h2>
          </FadeIn>
          <div className="border-t border-charcoal/15">
            {MARKETS.map((m) => (
              <Link
                key={m.id}
                href={`/markets/${m.id}`}
                className="group grid md:grid-cols-[minmax(0,340px)_1fr_auto] gap-4 md:gap-10 items-baseline border-b border-charcoal/15 py-7 hover:bg-white transition-colors duration-300"
              >
                <h3 className="text-lg md:text-xl font-black text-charcoal tracking-tight group-hover:text-signal transition-colors">{m.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{m.technologies.slice(0, 6).join(' · ')}</p>
                <span className="text-signal text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* International reach */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="max-w-3xl mb-14">
            <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">INTERNATIONAL REACH</div>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight tracking-tight">Four regions. One specialist methodology.</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-4 gap-4" stagger={0.08}>
            {REGIONS.map((r, i) => (
              <StaggerItem key={r}>
                <div className="bg-bone p-8 border-t-4 border-signal h-full">
                  <div className="text-signal text-3xl font-black mb-2">0{i + 1}</div>
                  <div className="text-charcoal font-bold">{r}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="mt-8 text-center text-charcoal/60 text-sm">Headquartered in Dubai · Serving clients and candidates internationally</p>
        </div>
      </section>

      {/* Ambition */}
      <section className="py-28 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <div className="text-signal text-xs font-bold tracking-[0.2em] mb-6">OUR AMBITION</div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
              To build Consulo into a genuinely global <span className="text-signal">industrial technology search business.</span>
            </h2>
            <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
              Deeper specialism in the markets we already know, in more of the territories our clients operate in — supported by the market intelligence that comes from working in these technologies every day.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-block bg-signal text-charcoal px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-white transition-colors">DISCUSS A SEARCH →</Link>
              <Link href="/markets" className="inline-block border-2 border-white text-white px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-white hover:text-charcoal transition-colors">EXPLORE OUR MARKETS →</Link>
            </div>
            <p className="mt-12 text-sm text-white/45">
              The team behind Consulo Global can be found on{' '}
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 underline underline-offset-4 hover:text-signal transition-colors">LinkedIn</a>.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
