import Link from 'next/link';
import { notFound } from 'next/navigation';
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
  const market = MARKETS.find((m) => m.id === params.id);
  if (!market) notFound();

  return (
    <>
      <section className="pt-32 pb-20 bg-[#3F4143]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">SPECIALIST MARKET</div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">{market.title}</h1>
          <p className="mt-8 text-xl text-white/80 max-w-3xl leading-relaxed">{market.tagline}</p>
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">TECHNOLOGIES</div>
              <h2 className="text-3xl font-black text-[#3F4143] mb-6">The technologies we recruit across.</h2>
              <div className="flex flex-wrap gap-2">
                {market.technologies.map((t) => (
                  <span key={t} className="bg-white border border-[#3F4143]/20 text-[#3F4143] px-3 py-1.5 text-xs font-medium tracking-wide">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">WHERE THE TALENT SITS</div>
              <h2 className="text-3xl font-black text-[#3F4143] mb-6">Organisations we know.</h2>
              <ul className="space-y-3">
                {market.talent.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[#3F4143]/80">
                    <span className="text-[#FFD91A] font-bold mt-1">→</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">TYPICAL APPOINTMENTS</div>
              <h2 className="text-3xl font-black text-[#3F4143] mb-6">Roles we place.</h2>
              <div className="grid grid-cols-2 gap-3">
                {market.appointments.map((a) => (
                  <div key={a} className="bg-[#F7F7F5] p-4 border-l-2 border-[#FFD91A]">
                    <div className="text-sm font-semibold text-[#3F4143]">{a}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">INDUSTRIES</div>
              <h2 className="text-3xl font-black text-[#3F4143] mb-6">Sectors we serve.</h2>
              <div className="flex flex-wrap gap-2">
                {market.industries.map((i) => (
                  <span key={i} className="bg-[#3F4143] text-white px-3 py-1.5 text-xs font-medium tracking-wide">{i}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#3F4143]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Looking for talent in {market.title}?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-[#FFD91A] text-[#3F4143] px-8 py-4 text-sm font-bold tracking-[0.15em]">START A SEARCH →</Link>
            <Link href="/candidates" className="border-2 border-white text-white px-8 py-4 text-sm font-bold tracking-[0.15em]">START A CONVERSATION →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
