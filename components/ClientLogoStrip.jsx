import Link from 'next/link';
import ClientLogo from './ClientLogo';
import { FadeIn } from './AnimatedSection';
import { FEATURED_CLIENTS } from '../lib/data';

/**
 * Condensed credibility piece for the homepage. Shows the most recognisable
 * names only and routes through to the full Client Experience section.
 */
export default function ClientLogoStrip() {
  return (
    <section className="py-28 bg-white border-y border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-signal text-xs font-bold tracking-[0.2em] mb-3">SELECTED CLIENT EXPERIENCE</div>
            <h2 className="text-2xl md:text-3xl font-black text-charcoal leading-tight tracking-tight">
              Companies we have recruited for across industrial technology.
            </h2>
          </div>
          <Link
            href="/clients#client-experience"
            className="text-charcoal text-sm font-bold tracking-[0.15em] border-b-2 border-signal pb-1 hover:text-signal transition-colors"
          >
            VIEW CLIENT EXPERIENCE →
          </Link>
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {FEATURED_CLIENTS.map((client, i) => (
            <ClientLogo key={client.slug} client={client} index={i} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
