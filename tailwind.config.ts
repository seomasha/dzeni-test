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
        // Warm greige/neutral palette — matched to photo tones
        cream: '#FAFAF8',          // warm studio white
        section: '#F2EBE4',        // warm greige (Photo 1 gray + warm undertone)
        blush: '#F5CDDA',          // soft blush pink accent
        pink: '#EDAEC4',           // medium pink
        rose: '#D4849A',           // visible dusty rose
        'rose-deep': '#B5617A',    // deep rose for emphasis
        gold: '#C9935A',           // warm amber gold (from balayage hair tones)
        taupe: '#7A6E68',          // warm mid-gray brown
        'taupe-dark': '#3A3230',   // dark warm brown for headings
        lavender: '#EDE6F0',
        peach: '#F5E0D0',
        mint: '#E0EDEA',
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
      },
    },
  },
  plugins: [],
}

export default config
