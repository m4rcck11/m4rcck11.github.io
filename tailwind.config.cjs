/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta principal do tema
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Cores do tema retrowave/cyberpunk
        cyber: {
          bg: '#000000',           // Fundo principal
          'bg-light': '#1a1a1a',   // Fundo secundário
          'bg-lighter': '#2a2a2a', // Fundo terciário
          border: '#404040',       // Bordas
          'border-light': '#606060', // Bordas hover
          text: {
            primary: '#e5e7eb',    // Texto principal
            secondary: '#d1d5db',  // Texto secundário
            muted: '#9ca3af',      // Texto esmaecido
            accent: '#6b7280',     // Texto de destaque
          },
          accent: {
            cyan: '#00ffff',
            magenta: '#ff00ff',
            yellow: '#ffff00',
          }
        },
        // Cores personalizadas existentes
        custom: {
          dark: '#242323',
          'dark-light': '#2d2c2c',
          'dark-lighter': '#363535',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        tech: ['Orbitron', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'blink': 'blink 3s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}; 