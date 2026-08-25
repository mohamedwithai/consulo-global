import { INSIGHTS } from '../../lib/data';

export const metadata = { title: 'Insights | Consulo Global' };

export default function InsightsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#3F4143]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">MARKET INTELLIGENCE</div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">Industrial recruitment &amp; market intelligence.</h1>
          <p className="mt-8 text-xl text-white/80 max-w-3xl leading-relaxed">Hiring intelligence and market commentary across automation, power transmission, material handling, process technology and industrial sales.</p>
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHTS.map((ins) => (
              <article key={ins.title} className="bg-white p-8 border border-[#3F4143]/10 hover:border-[#FFD91A] transition-colors cursor-pointer group">
                <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">{ins.category}</div>
                <h2 className="text-xl font-bold text-[#3F4143] mb-4 group-hover:text-[#FFD91A] transition-colors leading-tight">{ins.title}</h2>
                <p className="text-sm text-[#3F4143]/70 leading-relaxed mb-6">{ins.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-[#3F4143]/50 pt-4 border-t border-[#3F4143]/10">
                  <span>{ins.date}</span>
                  <span>{ins.readTime}</span>
                </div>
                <div className="mt-4 text-[#3F4143] text-xs font-bold tracking-[0.15em] group-hover:text-[#FFD91A] transition-colors">READ INSIGHT →</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
