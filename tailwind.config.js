/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E14",
        paper: "#EEF0EA",
        paperDim: "#E1E4DB",
        slate: {
          DEFAULT: "#4A5471",
          50: "#F4F5F8",
          100: "#E9ECF1",
          200: "#D3D8E3",
          300: "#ADB6CB",
          400: "#8390AF",
          500: "#5D6B8F",
          600: "#4A5471",
          700: "#363D52",
          800: "#242937",
          900: "#141720",
          950: "#0B0E14",
        },
        channelCyan: "#1FA9A0",
        channelMagenta: "#C23E77",
        ibec: {
          lime: "#abb330",
          orange: "#ea5b0c",
          gray: "#4d4f53",
        },
      },
      fontFamily: {
        sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
}
