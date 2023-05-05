/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
      },
      colors: {
        color1: '#4F7DD6'
      },
    },
    screens: {
      'md': '35em',
      'lg': '60em',
    },
  },
  plugins: [],
}
