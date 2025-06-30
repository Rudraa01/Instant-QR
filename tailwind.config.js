/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pastel-gradient': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 25%, #e8b7ff 50%, #c7e9ff 75%, #ffb3e6 100%)',
        'soft-gradient': 'linear-gradient(120deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
      },
      colors: {
        pastel: {
          pink: '#ffb3e6',
          purple: '#e8b7ff',
          blue: '#c7e9ff',
          peach: '#ffecd2',
          coral: '#fcb69f',
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}