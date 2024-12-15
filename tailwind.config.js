// tailwind.config.js
import tailwindcssAnimate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  corePlugins: { preflight: false },
  prefix: "",
  theme: {
    extend: {},
  },
  plugins: [tailwindcssAnimate, typography],
}
