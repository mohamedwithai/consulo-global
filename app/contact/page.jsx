'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ROUTES = [
  { id: 'hiring', label: "I'm Hiring", desc: 'Start a search for your next hire.' },
  { id: 'career', label: "I'm Considering My Career", desc: 'Confidential career conversation.' },
  { id: 'talk', label: 'I Just Want to Talk', desc: 'General enquiry or introduction.' },
];

const FIELDS = {
  hiring: [
    { k: 'name', l: 'Name', req: true },
    { k: 'company', l: 'Company', req: true },
    { k: 'email', l: 'Work email', req: true, type: 'email' },
    { k: 'phone', l: 'Telephone', req: true },
    { k: 'role', l: 'Role / capability required', req: true },
    { k: 'geography', l: 'Geography', req: true },
    { k: 'market', l: 'Specialist market', req: true },
    { k: 'seniority', l: 'Seniority', req: true },
    { k: 'achieve', l: 'What do you need this person to achieve?', req: true, area: true },
  ],
  career: [
    { k: 'name', l: 'Name', req: true },
    { k: 'email', l: 'Email', req: true, type: 'email' },
    { k: 'role', l: 'Current role', req: true },
    { k: 'company', l: 'Current company', req: true },
    { k: 'location', l: 'Location', req: true },
    { k: 'market', l: 'Specialist market', req: true },
    { k: 'linkedin', l: 'LinkedIn profile (optional)' },
    { k: 'consider', l: 'What would make you consider your next move?', req: true, area: true },
  ],
  talk: [
    { k: 'name', l: 'Name', req: true },
    { k: 'email', l: 'Email', req: true, type: 'email' },
    { k: 'company', l: 'Company / organisation (optional)' },
    { k: 'message', l: 'Message', req: true, area: true },
  ],
};

export default function ContactPage() {
  const [route, setRoute] = useState(null);
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-40 pb-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">GET IN TOUCH</div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight max-w-5xl">Start a search or career conversation.</h1>
          <p className="mt-8 text-xl text-white/80 max-w-3xl leading-relaxed">Talk to Consulo Global about specialist industrial recruitment, executive search or a confidential career discussion.</p>
        </div>
      </section>

      <section className="py-28 bg-bone">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          {!route && !submitted && (
            <>
              <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">CHOOSE YOUR ROUTE</div>
              <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-10 tracking-tight">How can we help?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {ROUTES.map((r) => (
                  <button key={r.id} onClick={() => setRoute(r.id)} className="bg-white p-8 border border-charcoal/10 text-left hover:border-signal hover:shadow-lg transition-all group">
                    <div className="text-signal text-3xl font-black mb-3 group-hover:scale-110 transition-transform">→</div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">{r.label}</h3>
                    <p className="text-sm text-charcoal/70">{r.desc}</p>
                  </button>
                ))}
              </div>
            </>
          )}

          {route && !submitted && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <button onClick={() => setRoute(null)} className="text-sm text-charcoal/60 mb-6 hover:text-charcoal">← Back to routes</button>
              <div className="text-signal text-xs font-bold tracking-[0.2em] mb-4">{ROUTES.find((r) => r.id === route).label}</div>
              <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-10 tracking-tight">Tell us more.</h2>
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-charcoal/10">
                <div className="grid md:grid-cols-2 gap-6">
                  {FIELDS[route].map((f) => (
                    <div key={f.k} className={f.area ? 'md:col-span-2' : ''}>
                      <label className="block text-xs font-bold tracking-[0.1em] text-charcoal mb-2">
                        {f.l} {f.req && <span className="text-signal">*</span>}
                      </label>
                      {f.area ? (
                        <textarea
                          required={f.req}
                          value={form[f.k] || ''}
                          onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                          rows={4}
                          className="w-full border border-charcoal/20 bg-bone px-4 py-3 text-sm text-charcoal focus:border-signal focus:outline-none transition-colors"
                        />
                      ) : (
                        <input
                          type={f.type || 'text'}
                          required={f.req}
                          value={form[f.k] || ''}
                          onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                          className="w-full border border-charcoal/20 bg-bone px-4 py-3 text-sm text-charcoal focus:border-signal focus:outline-none transition-colors"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <button type="submit" className="mt-8 bg-signal text-charcoal px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-charcoal hover:text-signal transition-colors">
                  SEND MESSAGE →
                </button>
              </form>
            </motion.div>
          )}

          {submitted && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-12 border border-signal text-center">
              <div className="text-signal text-5xl font-black mb-4">✓</div>
              <h3 className="text-2xl font-black text-charcoal mb-3">Message received.</h3>
              <p className="text-charcoal/70 mb-6">Thank you. A member of the Consulo team will be in touch shortly.</p>
              <button onClick={() => { setSubmitted(false); setRoute(null); setForm({}); }} className="bg-charcoal text-signal px-6 py-3 text-xs font-bold tracking-[0.15em]">SEND ANOTHER MESSAGE</button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
