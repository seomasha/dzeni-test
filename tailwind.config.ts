import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Softer, friendlier palette
        cream: '#FFFAF7',
        ivory: '#FFFFFF',
        blush: '#FCE4EC',         // very soft pink
        pink: '#F8BBD0',           // medium soft pink
        rose: '#E89BAE',           // lighter dusty rose
        'rose-deep': '#D67890',    // for accents
        gold: '#E5C09B',           // softer warm gold
        taupe: '#8C7B7B',          // body text mid
        'taupe-dark': '#5D4E4E',   // darker text (lighter than before)
        lavender: '#F0E6F1',
        peach: '#FCE4D6',
        mint: '#E4F0EC',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        accent: ['Italiana', 'Georgia', 'serif'],
        script: ['Dancing Script', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.9s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
