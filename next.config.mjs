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
};

export default nextConfig;
