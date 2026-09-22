/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: emits plain HTML/CSS/JS into ./out for traditional
  // shared hosting (no Node runtime on the server, no vendor lock-in).
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.qwenlm.ai',
      },
    ],
    // Required so first-party SVG artwork in /public (market placeholders, client
    // wordmarks) can be served through next/image. Locked down with a CSP that
    // blocks scripting inside the SVG.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // next/image optimisation requires a server; disable it for the static build.
    unoptimized: true,
  },
  // Emit /about/index.html style paths so any static host resolves routes
  // without custom rewrite rules.
  trailingSlash: true,
  // The Clients page is hidden for now at the client's request; the page code
  // stays in app/clients so it can be restored by removing this redirect.
  // NOTE: `redirects()` has no effect on `output: 'export'` builds — Next
  // only applies it in server/Vercel deployments. Kept here as documentation
  // of intent; the actual block for a static export must happen at the web
  // server (see /public/.htaccess) or by not linking to /clients.
  async redirects() {
    return [{ source: '/clients', destination: '/', permanent: false }];
  },
};

export default nextConfig;
