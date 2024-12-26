import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-rose': {
          light: '#FFEFEF',
          main: '#F3D0D7',
          dark: '#E5B8BF',
        },
        'accent-sand': {
          light: '#F6F5F2',
          main: '#F0EBE3',
          dark: '#E5E0D8',
        },
        'accent-peach': {
          light: '#FFE5DC',
          main: '#FFD5C8',
          dark: '#FFC5B4',
        },
        'neutral-gray': {
          50: '#F6F5F2',
          100: '#F0EBE3',
          200: '#E5E0D8',
          300: '#D2CEC6',
          400: '#BFB9B1',
          500: '#A6A099',
          600: '#8C8680',
          700: '#736D66',
          800: '#59544D',
          900: '#403B33',
        },
      },
    },
  },
  plugins: [],
};

export default config;
