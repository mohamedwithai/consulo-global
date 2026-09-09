import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from './AnimatedSection';
import { SEARCH_STORIES } from '../lib/data';

/**
 * Sits underneath Clients. Deliberately not a main-navigation item — the
 * stories are proof for people already considering a search.
 */
export default function SearchStoriesTeaser() {
  return (
    <section id="search-stories" className="scroll-mt-24 py-28 bg-[#3F4143]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="max-w-3xl mb-14">
          <div className="text-[#FFD91A] text-xs font-bold tracking-[0.2em] mb-4">SEARCH STORIES</div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            The thinking behind selected searches.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Short, anonymised case studies. Not client names or candidate details — how the market was
            mapped, what made the search difficult, and why the appointment was made.
          </p>
        </FadeIn>

        <StaggerContainer className="border-t border-white/15" stagger={0.08}>
          {SEARCH_STORIES.map((story, i) => (
            <StaggerItem key={story.id}>
              <Link
                href={`/clients/search-stories#${story.id}`}
                className="group grid md:grid-cols-[52px_1fr_auto] gap-4 md:gap-8 items-center border-b border-white/15 py-7 hover:bg-white/[0.04] transition-colors duration-300"
              >
                <span className="text-[#FFD91A] text-xs font-black tracking-[0.2em]">0{i + 1}</span>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-[#FFD91A] transition-colors">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/50">
                    {story.market} · {story.region}
                  </p>
                </div>
                <span className="text-[#FFD91A] text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12">
          <Link
            href="/clients/search-stories"
            className="inline-block text-white text-sm font-bold tracking-[0.15em] border-b-2 border-[#FFD91A] pb-1 hover:text-[#FFD91A] transition-colors"
          >
            READ ALL SEARCH STORIES →
          </Link>
        </div>
      </div>
    </section>
  );
}
