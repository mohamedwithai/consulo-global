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
    },
  },
  plugins: [],
};
