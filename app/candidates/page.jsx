import Link from 'next/link';
import { MARKETS } from '../../lib/data';

export const metadata = { title: 'For Candidates | Consulo Global' };

const STEPS = [
  'Understand your experience.',
  'Map your market.',
  'Identify target businesses.',
  'Agree the approach with you.',
  'Create the conversation.',
];

export default function CandidatesPage() {
  return (
    <>
      <section className="pt-40 pb-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">FOR CANDIDATES</div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">The best career moves don&apos;t always start with a job advert.</h1>
          <p className="mt-8 text-xl text-white/80 max-w-3xl leading-relaxed">Consulo works with commercial, technical and leadership professionals across industrial technology — helping them access opportunities, businesses and conversations they may never encounter through traditional recruitment.</p>
        </div>
      </section>

      <section className="py-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">TARGETED MARKET REPRESENTATION</div>
              <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6 tracking-tight">For selected professionals.</h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">Consulo takes a targeted approach to the market — identifying businesses where your experience, network and technical knowledge could create genuine commercial value.</p>
              <Link href="/contact" className="inline-block bg-signal text-charcoal px-8 py-4 text-sm font-bold tracking-[0.15em]">START A CONVERSATION →</Link>
            </div>
            <div className="space-y-4">
              {STEPS.map((s, i) => (
                <div key={s} className="bg-white p-6 border-l-4 border-signal flex items-center gap-4">
                  <div className="text-signal text-2xl font-black">{String(i + 1).padStart(2, '0')}</div>
                  <div className="text-charcoal font-semibold">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-signal">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-6">Confidentiality matters.</h2>
          <p className="text-charcoal/80 text-lg leading-relaxed">Industrial technology is a connected market. Candidate information should never be presented to an organisation without the individual&apos;s agreement.</p>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">EXPLORE OUR MARKETS</div>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-12 tracking-tight">Where your experience fits.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MARKETS.map((m) => (
              <Link key={m.id} href={`/markets/${m.id}`} className="group">
                <div className="text-charcoal text-xs font-bold tracking-[0.2em] mb-2 group-hover:text-signal transition-colors">MARKET</div>
                <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-signal transition-colors">{m.title}</h3>
                <p className="text-sm text-charcoal/70">{m.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
