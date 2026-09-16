import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.02em' }],
      '6xl': ['3rem', { lineHeight: '3.25rem', letterSpacing: '-0.025em' }],
      '7xl': ['4rem', { lineHeight: '4.25rem', letterSpacing: '-0.03em' }],
      '8xl': ['5rem', { lineHeight: '5.25rem', letterSpacing: '-0.035em' }],
    },
    extend: {
      colors: {
        vamo: {
          50: '#EAF6F4',
          100: '#CDE9E5',
          400: '#31B6A6',
          500: '#27998D',
          600: '#21827A',
          700: '#1A6A64',
          900: '#124E4E',
        },
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontFamily: {
        sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
        display: [
          ['Mona Sans', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
      transitionTimingFunction: {
        'apple-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
