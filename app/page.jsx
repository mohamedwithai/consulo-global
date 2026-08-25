import Link from 'next/link';
import Hero from '../components/Hero';
import MarketCard from '../components/MarketCard';
import { IMAGES, MARKETS, INSIGHTS, REGIONS } from '../lib/data';

const PROCESS_STEPS = [
  { n: '01', t: 'Understand', d: 'Business, role, products, customers, geography, objectives.' },
  { n: '02', t: 'Map', d: 'Competitors, adjacent markets, target companies, talent pools.' },
  { n: '03', t: 'Engage', d: 'Direct search, existing network, passive candidates, referrals.' },
  { n: '04', t: 'Assess', d: 'Technical relevance, commercial track record, cultural fit, motivation.' },
  { n: '05', t: 'Deliver', d: 'Focused shortlist, interview management, offer management, onboarding.' },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="The people behind industrial technology."
        subtitle="Consulo Global connects industrial technology businesses with the people capable of driving commercial growth, technical capability and leadership across the United States, United Kingdom, Continental Europe and Middle East."
        cta1="START A SEARCH"
        href1="/contact"
        cta2="START A CONVERSATION"
        href2="/candidates"
        image={IMAGES.hero}
      />

      {/* Six Markets */}
      <section className="py-24 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">SPECIALIST MARKETS</div>
            <h2 className="text-4xl md:text-5xl font-black text-[#3F4143] leading-tight tracking-tight">
              Deep specialism across the industrial technology ecosystem.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MARKETS.map((m) => (
              <MarketCard key={m.id} market={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-24 bg-[#3F4143]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-6">OUR APPROACH</div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
            We don&apos;t start with candidates. <br />
            <span className="text-[#FFD91A]">We start with your market.</span>
          </h2>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">SEARCH PROCESS</div>
            <h2 className="text-4xl md:text-5xl font-black text-[#3F4143] leading-tight tracking-tight">
              The Consulo Search Process.
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((s) => (
              <div key={s.n} className="bg-white p-6 border-l-4 border-[#FFD91A]">
                <div className="text-[#FFD91A] text-3xl font-black mb-3">{s.n}</div>
                <h3 className="text-lg font-bold text-[#3F4143] mb-2">{s.t}</h3>
                <p className="text-sm text-[#3F4143]/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Reach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">INTERNATIONAL REACH</div>
              <h2 className="text-4xl md:text-5xl font-black text-[#3F4143] leading-tight tracking-tight mb-6">
                Four regions. One specialist search methodology.
              </h2>
              <p className="text-lg text-[#3F4143]/70 leading-relaxed mb-8">
                Headquartered in Dubai, Consulo Global operates across the United States, United Kingdom, Continental Europe and Middle East — mapping talent, competitors and routes to market for industrial technology businesses wherever they operate.
              </p>
              <Link href="/contact" className="inline-block bg-[#FFD91A] text-[#3F4143] px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-[#3F4143] hover:text-[#FFD91A] transition-colors">
                TALK TO CONSULO →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {REGIONS.map((r, i) => (
                <div key={r} className={`p-8 ${i % 2 === 0 ? 'bg-[#3F4143] text-white' : 'bg-[#FFD91A] text-[#3F4143]'}`}>
                  <div className="text-4xl font-black mb-2">0{i + 1}</div>
                  <div className="text-sm font-bold tracking-[0.1em]">{r}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client / Candidate Split */}
      <section className="py-24 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#3F4143] p-12 text-white">
              <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">FOR CLIENTS</div>
              <h3 className="text-3xl font-black mb-4">Building your business starts with the right people.</h3>
              <p className="text-white/70 mb-8 leading-relaxed">Contingent, exclusive and executive search plus talent mapping for industrial technology businesses.</p>
              <Link href="/clients" className="inline-block bg-[#FFD91A] text-[#3F4143] px-6 py-3 text-xs font-bold tracking-[0.15em]">START A SEARCH →</Link>
            </div>
            <div className="bg-white p-12 border border-[#3F4143]/10">
              <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">FOR CANDIDATES</div>
              <h3 className="text-3xl font-black text-[#3F4143] mb-4">The best career moves don&apos;t always start with a job advert.</h3>
              <p className="text-[#3F4143]/70 mb-8 leading-relaxed">Confidential career conversations and targeted market representation for industrial technology professionals.</p>
              <Link href="/candidates" className="inline-block bg-[#3F4143] text-[#FFD91A] px-6 py-3 text-xs font-bold tracking-[0.15em]">START A CONVERSATION →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div className="max-w-3xl">
              <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">MARKET INTELLIGENCE</div>
              <h2 className="text-4xl md:text-5xl font-black text-[#3F4143] leading-tight tracking-tight">Latest Insights.</h2>
            </div>
            <Link href="/insights" className="text-[#3F4143] text-sm font-bold tracking-[0.15em] border-b-2 border-[#FFD91A] pb-1">VIEW ALL INSIGHTS →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {INSIGHTS.slice(0, 3).map((ins) => (
              <Link key={ins.title} href="/insights" className="group cursor-pointer">
                <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-3">{ins.category}</div>
                <h3 className="text-xl font-bold text-[#3F4143] mb-3 group-hover:text-[#FFD91A] transition-colors leading-tight">{ins.title}</h3>
                <p className="text-sm text-[#3F4143]/70 leading-relaxed mb-4">{ins.excerpt}</p>
                <div className="text-xs text-[#3F4143]/50">{ins.date} · {ins.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
