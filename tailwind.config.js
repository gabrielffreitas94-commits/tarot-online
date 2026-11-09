/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        celestial: {
          950: '#05060d',
          900: '#0a0c1a',
          800: '#12152d',
          700: '#1b1f3f',
          600: '#262c57',
        },
        gold: {
          light: '#fdf6d8',
          DEFAULT: '#f5d061',
          dark: '#b38728',
          accent: '#e6c04f',
        },
        mystic: {
          purple: '#2d1b4e',
          violet: '#4b2a82',
          rose: '#822a59',
          glow: 'rgba(245, 208, 97, 0.25)',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'celestial-gold': '0 0 20px -3px rgba(245, 208, 97, 0.35)',
        'celestial-purple': '0 0 25px -2px rgba(130, 42, 89, 0.4)',
        'card-elevated': '0 10px 30px -5px rgba(0, 0, 0, 0.8)',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        shimmer: 'shimmer 4s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
