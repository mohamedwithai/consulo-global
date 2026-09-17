/** @type {import('next').NextConfig} */
const nextConfig = {
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
  },
  // The Clients page is hidden for now at the client's request; the page code
  // stays in app/clients so it can be restored by removing this redirect.
  async redirects() {
    return [{ source: '/clients', destination: '/', permanent: false }];
  },
};

export default nextConfig;
