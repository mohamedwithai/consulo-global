'use client';

import { useState } from 'react';
import Image from 'next/image';

// How many copies of the logo set are rendered side by side. One set of ten
// badges is ~1,300px wide on desktop; three copies keep the track wider than
// the viewport plus one set at every animation frame, up to ~2,600px screens.
const COPIES = 3;

/**
 * Infinite, seamless logo carousel that scrolls left to right.
 *
 * Motion is a pure CSS transform animation (GPU-composited, no JS per frame).
 * Each copy of the set animates by 100% of its own width, so spacing inside a
 * set and between sets is identical and the loop never jumps.
 *
 * Interaction:
 * - Desktop: hovering or keyboard-focusing the strip pauses it.
 * - Touch: press and hold pauses; releasing resumes.
 * - Everyone: the pause/play button stops it permanently (WCAG 2.2.2).
 * - prefers-reduced-motion: no animation; the strip becomes a static row that
 *   can be swiped/scrolled horizontally instead (see globals.css).
 */
export default function LogoMarquee({ logos, duration = 40, label = 'Partner logos' }) {
  const [stopped, setStopped] = useState(false);
  const [held, setHeld] = useState(false);
  const paused = stopped || held;

  const release = () => setHeld(false);

  return (
    <div className="relative">
      <div
        role="region"
        aria-label={label}
        className="logo-marquee group relative flex overflow-hidden select-none [-webkit-touch-callout:none]"
        data-paused={paused ? 'true' : undefined}
        style={{ '--marquee-duration': `${duration}s` }}
        onTouchStart={() => setHeld(true)}
        onTouchEnd={release}
        onTouchCancel={release}
        onContextMenu={(e) => e.preventDefault()}
      >
        {Array.from({ length: COPIES }, (_, copy) => (
          <ul
            key={copy}
            aria-hidden={copy > 0 ? 'true' : undefined}
            className="logo-marquee__set flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12 lg:gap-16 lg:pr-16 animate-marquee-ltr"
          >
            {logos.map((logo) => (
              <li key={logo.name} className="shrink-0">
                <Image
                  src={logo.logo}
                  alt={copy === 0 ? logo.name : ''}
                  width={256}
                  height={256}
                  // Eager: copies sit outside the viewport until they scroll
                  // in, and lazy-loading would let them arrive blank.
                  loading="eager"
                  draggable={false}
                  className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 object-contain transition-transform duration-300 ease-out hover:scale-105"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setStopped((s) => !s)}
        aria-pressed={stopped}
        className="logo-marquee__toggle mt-6 mx-auto flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-charcoal/50 hover:text-charcoal focus-visible:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal transition-colors"
      >
        <span aria-hidden="true" className="inline-flex h-3 w-3 items-center justify-center">
          {stopped ? (
            <svg viewBox="0 0 12 12" className="h-3 w-3 fill-current"><path d="M2 1l9 5-9 5z" /></svg>
          ) : (
            <svg viewBox="0 0 12 12" className="h-3 w-3 fill-current"><path d="M2 1h3v10H2zM7 1h3v10H7z" /></svg>
          )}
        </span>
        {stopped ? 'PLAY' : 'PAUSE'}
        <span className="sr-only"> logo carousel</span>
      </button>
    </div>
  );
}
