import ClientLogo from './ClientLogo';
import { FadeIn } from './AnimatedSection';
import { CLIENT_ECOSYSTEMS, getClient } from '../lib/data';

export default function ClientExperience() {
  return (
    <section id="client-experience" className="scroll-mt-24 py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="max-w-3xl mb-16">
          <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">SELECTED CLIENT EXPERIENCE</div>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight tracking-tight">
            Companies we have recruited for across industrial technology.
          </h2>
          <p className="mt-6 text-lg text-charcoal/70 leading-relaxed">
            Grouped by technology ecosystem rather than listed at random. Several appear in more than one
            group — which is exactly how talent moves between them.
          </p>
        </FadeIn>

        <div className="space-y-14">
          {CLIENT_ECOSYSTEMS.map((eco) => (
            <div key={eco.id}>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-charcoal">{eco.title}</h3>
                <span className="h-px flex-1 bg-charcoal/10" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {eco.companies.map((name, i) => {
                  const client = getClient(name);
                  return client ? <ClientLogo key={name} client={client} index={i} /> : null;
                })}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-xs text-charcoal/50 leading-relaxed max-w-3xl">
          Company names and logos are shown to illustrate the markets Consulo Global recruits across.
          All marks remain the property of their respective owners and are displayed with permission.
        </p>
      </div>
    </section>
  );
}
