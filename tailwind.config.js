/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ibec: {
          lime: "#abb330",
          "lime-dark": "#8d9426",
          "lime-light": "#c4cc3b",
          dark: "#444444",
          charcoal: "#293e6b",
          gray: "#575760",
        },
        biotech: {
          950: "#070b14",
          900: "#0b1329",
          850: "#101b38",
          800: "#162244",
          700: "#1f305c",
          accent: "#06b6d4",
          emerald: "#10b981",
          violet: "#8b5cf6",
          rose: "#f43f5e"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
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
