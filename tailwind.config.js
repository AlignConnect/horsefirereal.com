/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Serif Devanagari", "serif"],
        oswald: ["Oswald", "sans-serif"],
        poppin: ["Poppins", "sans-serif"],
        young: ["Young Serif", "serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        hero: "url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cb349ae4-3e2f-43dc-4a19-e0dd36f1b700/public')",
        hero2: "url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ade9af1f-67be-4cba-226e-1bf537e1f500/public')",
        hero3: "url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2607d4d0-6e2f-4911-d91e-65b8a9610800/public')",

        herohfd: "url('/main/hfd_images/maintop.jpg')",
        hero2hfd: "url('/main/hfd_images/top2.jpg')",
        hero3hfd: "url('/main/hfd_images/back.jpg')",
        hero4hfd: "url('/main/hfd_images/back3.jpg')",
        hero5hfd: "url('/main/hfd_images/backform.jpg')",

        web1: "url('/main/bhf_images/top1.webp')",
        mobile1: "url('/main/bhf_images/mobile-top2.webp')",
        backg: "url('/main/bhf_images/black.webp')",
        back2: "url('/main/bhf_images/back2.webp')",
      },

    },
  },
  plugins: [],
}
