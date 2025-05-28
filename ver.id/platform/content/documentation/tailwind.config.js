const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './.vitepress/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,svelte,astro,js,jsx,cjs,mjs,ts,tsx,cts,mts,html,md,mdx,json}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
      },
      width: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
      },
      fontFamily: {
        sans: ['inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
    safelist: [],
};
