import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '../../lib/data';
import ClientExperience from '../../components/ClientExperience';
import SearchStoriesTeaser from '../../components/SearchStoriesTeaser';

export const metadata = { title: 'For Clients | Consulo Global' };

const OBJECTIVES = [
  { t: 'Expand your sales team', d: 'Technical Sales, BDM, Key Accounts, Regional Sales.' },
  { t: 'Enter a new market', d: 'Country Managers, Market Entry, Business Development.' },
  { t: 'Find a business leader', d: 'Sales Directors, Commercial Directors, MDs, GMs.' },
  { t: 'Find a technical specialist', d: 'Applications, Product, Engineering, Service.' },
];

const PROCESS_STEPS = [
  { n: '01', t: 'Understand', d: 'Business, role, products, customers, geography, objectives.' },
  { n: '02', t: 'Map', d: 'Competitor mapping, adjacent markets, target companies, talent intelligence.' },
  { n: '03', t: 'Engage', d: 'Direct search, existing network, passive candidates, referrals.' },
  { n: '04', t: 'Assess', d: 'Technical relevance, commercial track record, cultural fit, motivation.' },
  { n: '05', t: 'Deliver', d: 'Focused shortlist, interview management, offer management, onboarding.' },
];

const SERVICE_MODELS = [
  { t: 'Contingent Search', d: 'Flexible permanent recruitment for individual specialist appointments.' },
  { t: 'Exclusive Search', d: 'Dedicated search campaign with Consulo acting as the search partner.' },
  { t: 'Executive Search', d: 'Confidential market mapping and direct approach for senior appointments.' },
  { t: 'Talent Mapping & Market Intelligence', d: 'Understand the available talent before deciding to recruit.' },
];

export default function ClientsPage() {
  return (
    <>
      <section className="relative pt-40 pb-28 bg-charcoal overflow-hidden">
        <Image src={IMAGES.distribution} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/92 to-charcoal/60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">FOR CLIENTS</div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">Building your business starts with the right people.</h1>
          <p className="mt-8 text-xl text-white/80 max-w-3xl leading-relaxed">Whether you&apos;re replacing a critical hire, expanding into a new territory, building a sales team or searching for your next business leader, Consulo combines industry knowledge, market intelligence and direct search to identify the people capable of delivering your objectives.</p>
        </div>
      </section>

      <section className="py-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">WHAT ARE YOU LOOKING TO ACHIEVE?</div>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-12 tracking-tight">Choose your objective.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {OBJECTIVES.map((c, i) => (
              <Link key={c.t} href="/contact" className="bg-white p-8 border border-charcoal/10 hover:border-signal transition-colors cursor-pointer block">
                <div className="text-signal text-3xl font-black mb-3">0{i + 1}</div>
                <h3 className="text-xl font-bold text-charcoal mb-2">{c.t}</h3>
                <p className="text-charcoal/70 text-sm">{c.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">SEARCH PROCESS</div>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-12 tracking-tight">The Consulo Search Process.</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((s) => (
              <div key={s.n} className="bg-bone p-6 border-l-4 border-signal">
                <div className="text-signal text-2xl font-black mb-2">{s.n}</div>
                <h3 className="text-base font-bold text-charcoal mb-2">{s.t}</h3>
                <p className="text-xs text-charcoal/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">SERVICE MODELS</div>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-12 tracking-tight">How we work with you.</h2>
          <div className="border-t border-charcoal/15">
            {SERVICE_MODELS.map((s, i) => (
              <div key={s.t} className="grid md:grid-cols-[64px_minmax(0,340px)_1fr] gap-3 md:gap-10 items-baseline border-b border-charcoal/15 py-8">
                <div className="text-signal text-sm font-black tracking-[0.2em]">0{i + 1}</div>
                <h3 className="text-xl font-black text-charcoal tracking-tight">{s.t}</h3>
                <p className="text-charcoal/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientExperience />

      <SearchStoriesTeaser />

      <section className="py-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Link href="/contact" className="inline-block bg-signal text-charcoal px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-charcoal hover:text-signal transition-colors">START A SEARCH →</Link>
        </div>
      </section>
    </>
  );
}
