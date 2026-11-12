import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        display: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        // Editorial Telemetry Brand Palette
        telemetry: {
          paper: '#F6F5F0',
          cardLight: '#FAF9F5',
          ink: '#151413',
          obsidian: '#050505',
          charcoal: '#111111',
          charcoalElevated: '#181818',
          borderDark: '#2E2E2E',
          forest: '#1B3B2B',
          forestLight: '#285840',
          vermilion: '#EA4316',
          vermilionBright: '#FF4D1C',
        },

        // Neutralize Slate globally -> Zero blue undertones in Dark Mode, Warm archival paper in Light Mode
        slate: {
          50: '#F6F5F0',
          100: '#ECEAE2',
          200: '#DCD9CE',
          300: '#C2BEB0',
          400: '#8E8B82',
          500: '#6E6B64',
          600: '#4A4945',
          700: '#2E2E2E',
          800: '#1C1C1C',
          900: '#111111',
          950: '#050505',
        },

        // Remap Indigo/PrismOS to Forest & Vermilion Telemetry Accents so subpages match seamlessly
        indigo: {
          50: '#F2EDE7',
          100: '#E5DDD2',
          200: '#C8D6CE',
          300: '#8FB39E',
          400: '#FF6B42',
          500: '#EA4316',
          600: '#1B3B2B',
          700: '#142E21',
          800: '#12261C',
          900: '#0D1C14',
          950: '#08110C',
        },
        prism: {
          50: '#F6F5F0',
          100: '#ECEAE2',
          200: '#DCD9CE',
          300: '#8FB39E',
          400: '#FF6B42',
          500: '#EA4316',
          600: '#1B3B2B',
          700: '#142E21',
          800: '#111111',
          900: '#0A0A0A',
          950: '#050505',
        },
        rise: {
          50: '#F6F5F0',
          100: '#ECEAE2',
          200: '#DCD9CE',
          300: '#8FB39E',
          400: '#FF6B42',
          500: '#EA4316',
          600: '#1B3B2B',
          700: '#142E21',
          800: '#111111',
          900: '#0A0A0A',
          950: '#050505',
        },
        amber: {
          400: '#FF7849',
          500: '#EA4316',
        },
        emerald: {
          400: '#34D399',
          500: '#1B3B2B',
        },
        rose: {
          400: '#FF5A36',
          500: '#EA4316',
        },
        violet: {
          400: '#A3B8AA',
          500: '#1B3B2B',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'slide-in': 'slide-in 0.25s ease-out',
        shimmer: 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config