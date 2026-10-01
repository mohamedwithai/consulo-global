import LogoMarquee from './LogoMarquee';
import { FadeIn } from './AnimatedSection';
import { PARTNER_LOGOS } from '../lib/data';

/**
 * Homepage credibility band: a short heading over an infinite, left-to-right
 * carousel of client/partner badges. Replaces the earlier grid of typographic
 * wordmarks now that the client has supplied real artwork.
 */
export default function ClientLogoStrip() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="mb-10 md:mb-14 text-center">
          <div className="text-signal text-xs font-bold tracking-[0.2em] mb-3">SELECTED CLIENT EXPERIENCE</div>
          <h2 className="text-2xl md:text-3xl font-black text-charcoal leading-tight tracking-tight max-w-2xl mx-auto">
            Companies we have recruited for across industrial technology.
          </h2>
        </FadeIn>
      </div>

      {/* Full-bleed so logos travel the whole viewport width, edge-faded. */}
      <FadeIn>
        <LogoMarquee logos={PARTNER_LOGOS} duration={45} label="Selected clients and partners" />
      </FadeIn>
    </section>
  );
}
