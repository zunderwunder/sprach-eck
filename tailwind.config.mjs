// tailwind.config.mjs
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
        sans: ['Avenir', 'system-ui', 'sans-serif'],
        primary: ['Quicksand', 'system-ui', 'sans-serif']
      },
      fontWeight: {
        light: '300',
        bold: '700',
      }
    }
  },
  plugins: [import('@tailwindcss/forms').then(module => module.default)]
};