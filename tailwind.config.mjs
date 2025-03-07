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
        primary: ['Poppins', 'sans-serif'], // Für Überschriften
        secondary: ['Nunito', 'sans-serif'], // Für Fließtext - jetzt mit Inter statt Avenir Light
      },
      fontWeight: {
        light: 300,
        bold: 600,
      },
    },
  },
  plugins: [],
}