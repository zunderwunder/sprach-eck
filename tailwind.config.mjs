/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#135451',
        accent: '#F39256',
        dark: '#333333',
        light: '#FFFFFF',
      },
      fontFamily: {
        primary: ['Quicksand Variable', 'sans-serif'],
        secondary: ['Avenir Light', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}