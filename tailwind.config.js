/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '90': '90px',
      },
      colors: {
        color: {
          'primary': '#064061',
          'secondary': '#C4C4C4',
          'main': '#4EB7F2',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/img/rectangle.png')",
      }
    },

  },
  plugins: [],
}
