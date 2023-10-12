module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    darkTheme: 'white',
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        gray: '#9B9B9B',
        dark: '#222',
        dark2: '#161616',
        bgDark: '#2E2E2E',
        bgGray: '#F9FAFB',
      },
    },
  },
}
