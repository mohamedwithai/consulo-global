import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '../../../components/AnimatedSection';
import { SEARCH_STORIES } from '../../../lib/data';

export const metadata = {
  title: 'Search Stories | Consulo Global',
  description:
    'Short, anonymised case studies showing the thinking behind selected industrial technology searches.',
};

export default function SearchStoriesPage() {
  return (
    <>
      <section className="pt-40 pb-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <Link href="/clients" className="inline-block text-white/50 text-xs font-bold tracking-[0.2em] mb-6 hover:text-signal transition-colors">
              ← FOR CLIENTS
            </Link>
            <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">SEARCH STORIES</div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">
              The thinking behind the search.
            </h1>
            <p className="mt-8 text-xl text-white/80 max-w-3xl leading-relaxed">
              Short, anonymised case studies from selected industrial technology searches. No client or
              candidate is identifiable — the purpose is to show how the market was mapped and why the
              appointment was made.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20">
          {SEARCH_STORIES.map((story, i) => (
            <Story key={story.id} story={story} index={i} />
          ))}
        </div>
      </section>

      <section className="py-28 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Every search starts with the market.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              If your search has been difficult to fill, the problem is usually the size of the map rather
              than the size of the market.
            </p>
            <Link href="/contact" className="inline-block bg-signal text-charcoal px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-white transition-colors">
              START A SEARCH →
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function Story({ story, index }) {
  return (
    <article id={story.id} className="scroll-mt-24 bg-white border border-charcoal/10">
      <header className="border-b border-charcoal/10 p-8 md:p-12">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="text-signal text-xs font-black tracking-[0.2em]">0{index + 1}</span>
          <span className="bg-bone text-charcoal px-3 py-1 text-[11px] font-semibold tracking-[0.1em] uppercase">{story.market}</span>
          <span className="bg-bone text-charcoal px-3 py-1 text-[11px] font-semibold tracking-[0.1em] uppercase">{story.region}</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-charcoal leading-tight tracking-tight max-w-4xl">
          {story.title}
        </h2>
        <p className="mt-5 text-lg text-charcoal/70 leading-relaxed max-w-3xl">{story.summary}</p>
      </header>

      <StaggerContainer className="divide-y divide-charcoal/10" stagger={0.06}>
        {story.stages.map((stage, i) => (
          <StaggerItem key={stage.label}>
            <div className="grid md:grid-cols-[minmax(0,260px)_1fr] gap-3 md:gap-10 p-8 md:px-12 md:py-8">
              <div className="flex items-start gap-3">
                <span className="text-signal text-xs font-black tracking-[0.15em] pt-1">0{i + 1}</span>
                <h3 className="text-sm font-black tracking-[0.12em] uppercase text-charcoal">{stage.label}</h3>
              </div>
              <p className="text-charcoal/75 leading-relaxed">{stage.body}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </article>
  );
}
