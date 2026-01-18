/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        'cyber-dark': '#050505',
        'cyber-darker': '#000000',
        'cyber-card': '#0a0a0a',
        'cyber-border': '#1a1a1a',
        
        // Neon accent colors
        'neon-cyan': '#ff1744',
        'neon-green': '#ff4569',
        'neon-magenta': '#ff6b6b',
        
        // Text colors
        'cyber-text': '#e4e4e7',
        'cyber-muted': '#71717a',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'glitch': 'glitch 0.3s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(255, 23, 68, 0.4), 0 0 40px rgba(255, 23, 68, 0.2)',
        'neon-green': '0 0 20px rgba(255, 69, 105, 0.4), 0 0 40px rgba(255, 69, 105, 0.2)',
        'neon-magenta': '0 0 20px rgba(255, 107, 107, 0.4), 0 0 40px rgba(255, 107, 107, 0.2)',
      },
    },
  },
  plugins: [],
}
