/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": `linear-gradient(
          to bottom,
          hsl(220, 65%, 20%) 1%,
          hsl(220, 95%, 3.52%) 80%,
          hsl(220, 95%, 15%) 100%
        )`,
      },
    },
  },
  plugins: [],
};
