import Link from 'next/link';
import { MARKETS, REGIONS } from '../lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#3F4143] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <h3 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
            Specialist search for the commercial, technical and leadership talent behind industrial technology.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">MARKETS</div>
            <ul className="space-y-2">
              {MARKETS.map((m) => (
                <li key={m.id}>
                  <Link href={`/markets/${m.id}`} className="text-sm text-white/70 hover:text-[#FFD91A] transition-colors">
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">WORK WITH US</div>
            <ul className="space-y-2">
              <li><Link href="/clients" className="text-sm text-white/70 hover:text-[#FFD91A] transition-colors">Clients</Link></li>
              <li><Link href="/candidates" className="text-sm text-white/70 hover:text-[#FFD91A] transition-colors">Candidates</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-[#FFD91A] transition-colors">Start a Search</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-[#FFD91A] transition-colors">Career Discussion</Link></li>
              <li><Link href="/insights" className="text-sm text-white/70 hover:text-[#FFD91A] transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">CONSULO</div>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-white/70 hover:text-[#FFD91A] transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-[#FFD91A] transition-colors">Contact</Link></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-[#FFD91A] transition-colors">LinkedIn</a></li>
              <li><Link href="#" className="text-sm text-white/70 hover:text-[#FFD91A] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-white/70 hover:text-[#FFD91A] transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="text-sm text-white/70 hover:text-[#FFD91A] transition-colors">Terms</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">REGIONS</div>
            <ul className="space-y-2">
              {REGIONS.map((r) => (
                <li key={r}><span className="text-sm text-white/70">{r}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 text-xs text-white/50">
          <div>© Consulo Global LLC · Headquartered in Dubai</div>
          <div>Industrial Technology Search</div>
        </div>
      </div>
    </footer>
  );
}
