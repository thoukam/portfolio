module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#090d17",
          900: "#0f1524",
          800: "#161d30",
          700: "#222a40",
        },
        paper: "#e6edf7",
        // jaune "signal" réservé au bloc Contact
        signal: "#f9c80e",
        muted: "#8f9bb0",
        // couleurs d'accent définies dans index.css (:root), faciles à changer
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          soft: "rgb(var(--accent-soft) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', '"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
}
