/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Consulo palette. Named so the brand colours are used deliberately
        // rather than pasted as hex literals across the codebase.
        charcoal: {
          DEFAULT: '#3F4143',
          deep: '#2A2C2E',
        },
        signal: {
          DEFAULT: '#FFD91A',
          deep: '#E6C200',
        },
        bone: '#F7F7F5',
      },
      spacing: {
        // Section rhythm: the gap between major bands of the page.
        section: '7rem',
      },
      keyframes: {
        // Left-to-right: each copy of the logo set starts one full set-width
        // to the left and slides to its natural position, so copy N lands
        // exactly where copy N-1 began and the loop has no visible seam.
        'marquee-ltr': {
          from: { transform: 'translate3d(-100%, 0, 0)' },
          to: { transform: 'translate3d(0, 0, 0)' },
        },
      },
      animation: {
        'marquee-ltr': 'marquee-ltr var(--marquee-duration, 40s) linear infinite',
      },
    },
  },
  plugins: [],
};
