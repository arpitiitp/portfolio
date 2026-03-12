/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#050511',
          panel: '#111122',
          neon: '#00f0ff',
          matrix: '#00ff41',
          purple: '#b026ff',
          pink: '#ff0055',
        }
      },
      fontFamily: {
        mono: ['Space Mono', 'Courier New', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
