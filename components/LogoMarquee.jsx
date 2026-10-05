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
 * - No visible pause/play button (removed at the client's request).
 * - prefers-reduced-motion: no animation; the strip becomes a static row that
 *   can be swiped/scrolled horizontally instead (see globals.css).
 */
export default function LogoMarquee({ logos, duration = 40, label = 'Partner logos' }) {
  const [held, setHeld] = useState(false);
  const paused = held;

  const release = () => setHeld(false);

  return (
    <div className="relative">
      <div
        role="region"
        aria-label={label}
        // py-3: headroom so the hover zoom (scale-105) isn't clipped by
        // overflow-hidden at the top and bottom of the strip.
        className="logo-marquee group relative flex overflow-hidden py-3 select-none [-webkit-touch-callout:none]"
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
    </div>
  );
}
