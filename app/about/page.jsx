import Image from 'next/image';
import { IMAGES, REGIONS } from '../../lib/data';

export const metadata = { title: 'About | Consulo Global' };

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#3F4143]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">ABOUT CONSULO GLOBAL</div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">Specialist industries deserve specialist recruiters.</h1>
          <p className="mt-8 text-xl text-white/80 max-w-3xl leading-relaxed">Consulo Global is an international specialist search business focused on the commercial, technical and leadership talent behind industrial technology.</p>
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">OUR STORY</div>
              <h2 className="text-4xl md:text-5xl font-black text-[#3F4143] mb-6 tracking-tight">From Consulo First to Consulo Global.</h2>
              <p className="text-lg text-[#3F4143]/70 leading-relaxed mb-6">Consulo began in 2017 with a clear purpose: to provide specialist recruitment to industrial and technical markets where genuine sector knowledge matters.</p>
              <p className="text-lg text-[#3F4143]/70 leading-relaxed">Consulo Global represents the next stage of that journey — taking the specialist approach upon which the business was built and applying it across an increasingly international client and candidate network.</p>
            </div>
            <div className="bg-[#3F4143] p-12">
              <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">FOUNDER</div>
              <div className="relative w-full h-80 mb-6">
                <Image src={IMAGES.founder} alt="Fahad Al-Ghita" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <h3 className="text-2xl font-black text-white mb-1">Fahad Al-Ghita</h3>
              <div className="text-[#FFD91A] text-sm font-bold tracking-[0.1em] mb-4">Founder &amp; Managing Director</div>
              <p className="text-white/70 text-sm leading-relaxed">Consulo was founded around the belief that specialist recruitment should be driven by an understanding of the market rather than simply access to candidates. The operating philosophy is: understand the business, understand the technology, map the market, and then identify the people capable of making an impact.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">INTERNATIONAL REACH</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#3F4143] mb-12 tracking-tight">Four regions. One specialist methodology.</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {REGIONS.map((r, i) => (
              <div key={r} className="bg-[#F7F7F5] p-8 border-t-4 border-[#FFD91A]">
                <div className="text-[#FFD91A] text-3xl font-black mb-2">0{i + 1}</div>
                <div className="text-[#3F4143] font-bold">{r}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[#3F4143]/60 text-sm">Headquartered in Dubai · Serving clients and candidates internationally</p>
        </div>
      </section>
    </>
  );
}
