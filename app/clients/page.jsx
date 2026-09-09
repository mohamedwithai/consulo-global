import Link from 'next/link';
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
  { n: '02', t: 'Map', d: 'Competitors, adjacent markets, target companies, talent pools.' },
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
      <section className="pt-32 pb-20 bg-[#3F4143]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">FOR CLIENTS</div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">Building your business starts with the right people.</h1>
          <p className="mt-8 text-xl text-white/80 max-w-3xl leading-relaxed">Whether you&apos;re replacing a critical hire, expanding into a new territory, building a sales team or searching for your next business leader, Consulo combines industry knowledge, market intelligence and direct search to identify the people capable of delivering your objectives.</p>
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">WHAT ARE YOU LOOKING TO ACHIEVE?</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#3F4143] mb-12 tracking-tight">Choose your objective.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {OBJECTIVES.map((c, i) => (
              <Link key={c.t} href="/contact" className="bg-white p-8 border border-[#3F4143]/10 hover:border-[#FFD91A] transition-colors cursor-pointer block">
                <div className="text-[#FFD91A] text-3xl font-black mb-3">0{i + 1}</div>
                <h3 className="text-xl font-bold text-[#3F4143] mb-2">{c.t}</h3>
                <p className="text-[#3F4143]/70 text-sm">{c.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">SEARCH PROCESS</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#3F4143] mb-12 tracking-tight">The Consulo Search Process.</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((s) => (
              <div key={s.n} className="bg-[#F7F7F5] p-6 border-l-4 border-[#FFD91A]">
                <div className="text-[#FFD91A] text-2xl font-black mb-2">{s.n}</div>
                <h3 className="text-base font-bold text-[#3F4143] mb-2">{s.t}</h3>
                <p className="text-xs text-[#3F4143]/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">SERVICE MODELS</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#3F4143] mb-12 tracking-tight">How we work with you.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICE_MODELS.map((s) => (
              <div key={s.t} className="bg-white p-8 border-l-4 border-[#3F4143]">
                <h3 className="text-xl font-bold text-[#3F4143] mb-3">{s.t}</h3>
                <p className="text-[#3F4143]/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientExperience />

      <SearchStoriesTeaser />

      <section className="py-20 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Link href="/contact" className="inline-block bg-[#FFD91A] text-[#3F4143] px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-[#3F4143] hover:text-[#FFD91A] transition-colors">START A SEARCH →</Link>
        </div>
      </section>
    </>
  );
}
