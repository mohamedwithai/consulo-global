// Horizontal lockup from public/logo/consulo-horizontal.svg, inlined so the
// wordmark renders in Archivo (loaded in app/layout.jsx) instead of a fallback.
const WORDMARK_FONT = 'var(--font-archivo), Helvetica, Arial, sans-serif';
const GUNMETAL = '#3A3F44';
const STEEL = '#8A9199';
const SIGNAL = '#F5C518';

const ARC = 'M76.8 29.07 A34 34 0 1 0 76.8 70.93';

function Mark({ color }) {
  return (
    <>
      <path d={ARC} fill="none" stroke={color} strokeWidth="14" />
      <rect x="50" y="43" width="26" height="14" fill={color} />
    </>
  );
}

function Consulo({ color }) {
  return (
    <text x="122" y="48" fontFamily={WORDMARK_FONT} fontSize="34" fontWeight="700" letterSpacing="2.2" fill={color}>
      CONSULO
    </text>
  );
}

// The sheen band is masked to the mark and "CONSULO"; it sweeps across once
// when the parent .logo-link is hovered (see globals.css).
export default function Logo({ className = '' }) {
  return (
    <svg viewBox="0 0 420 100" className={className} role="img" aria-label="Consulo Global" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="consulo-logo-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="0.4" stopColor="#FFFFFF" stopOpacity="0.18" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.65" />
          <stop offset="0.6" stopColor="#FFFFFF" stopOpacity="0.18" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <mask id="consulo-logo-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="420" height="100">
          <Mark color="#FFFFFF" />
          <Consulo color="#FFFFFF" />
        </mask>
      </defs>

      <g aria-hidden="true">
        <Mark color={GUNMETAL} />
        <Consulo color={GUNMETAL} />
        <text x="124" y="74" fontFamily={WORDMARK_FONT} fontSize="15" fontWeight="500" letterSpacing="7.4" fill={STEEL}>
          GLOBAL
        </text>
        <g mask="url(#consulo-logo-mask)">
          <g transform="skewX(-20)">
            <rect className="logo-sheen" x="-140" y="-20" width="120" height="140" fill="url(#consulo-logo-sheen)" />
          </g>
        </g>
        <rect x="76" y="43" width="7" height="14" fill={SIGNAL} />
      </g>
    </svg>
  );
}
