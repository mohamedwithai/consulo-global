'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { MARKETS } from '../lib/data';

const NAV_ITEMS = [
  { href: '/', label: 'HOME' },
  { href: '/markets', label: 'MARKETS', mega: 'markets' },
  { href: '/clients', label: 'CLIENTS', mega: 'clients' },
  { href: '/candidates', label: 'CANDIDATES', mega: 'candidates' },
  { href: '/about', label: 'ABOUT' },
  { href: '/insights', label: 'INSIGHTS' },
  { href: '/contact', label: 'CONTACT' },
];

const MEGA_CONTENT = {
  markets: MARKETS.map((m) => ({ label: m.title, href: `/markets/${m.id}` })),
  clients: [
    { label: 'Search Services', href: '/clients' },
    { label: 'Contingent Search', href: '/clients' },
    { label: 'Exclusive Search', href: '/clients' },
    { label: 'Executive Search', href: '/clients' },
    { label: 'Talent Mapping', href: '/clients' },
    { label: 'Start a Search', href: '/contact' },
  ],
  candidates: [
    { label: 'Explore Opportunities', href: '/candidates' },
    { label: 'Targeted Market Representation', href: '/candidates' },
    { label: 'Confidential Career Discussion', href: '/candidates' },
    { label: 'Submit Your Profile', href: '/contact' },
  ],
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState(null);
  const pathname = usePathname();

  const handleNav = () => {
    setMegaMenu(null);
    setMobileOpen(false);
  };

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F7F5]/95 backdrop-blur-md border-b border-[#3F4143]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link href="/" onClick={handleNav} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#FFD91A] flex items-center justify-center font-black text-[#3F4143] text-lg tracking-tight">C</div>
            <div className="flex flex-col">
              <span className="font-black text-[#3F4143] text-lg tracking-tight leading-none">CONSULO</span>
              <span className="text-[10px] tracking-[0.2em] text-[#3F4143]/60 uppercase leading-none mt-1">Global</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.id || item.href}
                item={item}
                active={isActive(item.href)}
                megaMenu={megaMenu}
                setMegaMenu={setMegaMenu}
                onNavigate={handleNav}
              />
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={handleNav}
            className="hidden lg:inline-flex items-center gap-2 bg-[#FFD91A] text-[#3F4143] px-5 py-2.5 text-xs font-bold tracking-[0.15em] hover:bg-[#3F4143] hover:text-[#FFD91A] transition-all"
          >
            START A SEARCH →
          </Link>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-[#3F4143]" aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden bg-white border-t border-[#3F4143]/10 overflow-hidden">
            <div className="px-6 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} onClick={handleNav} className="block w-full py-3 text-sm font-semibold tracking-[0.1em] text-[#3F4143] border-b border-[#3F4143]/10">
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={handleNav} className="block w-full mt-3 bg-[#FFD91A] text-[#3F4143] px-5 py-3 text-xs font-bold tracking-[0.15em]">
                START A SEARCH →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ item, active, megaMenu, setMegaMenu, onNavigate }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => item.mega && setMegaMenu(item.mega)}
      onMouseLeave={() => setMegaMenu(null)}
    >
      <Link
        href={item.href}
        onClick={onNavigate}
        className={`px-4 py-2 text-xs font-semibold tracking-[0.15em] transition-colors ${active ? 'text-[#3F4143]' : 'text-[#3F4143]/70 hover:text-[#3F4143]'}`}
      >
        {item.label}
      </Link>
      {item.mega && megaMenu === item.mega && (
        <div className="absolute top-full left-0 mt-0 w-72 bg-white border border-[#3F4143]/10 shadow-xl py-3">
          {MEGA_CONTENT[item.mega].map((m, i) => (
            <Link key={i} href={m.href} onClick={onNavigate} className="block text-left px-6 py-2 text-sm text-[#3F4143]/80 hover:bg-[#FFD91A]/20 hover:text-[#3F4143] transition-colors">
              {m.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
