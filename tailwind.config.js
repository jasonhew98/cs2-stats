/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-100)',
          dark: 'var(--primary-200)',
          light: 'var(--primary-300)',
        },
        accent: {
          DEFAULT: 'var(--accent-100)',
          dark: 'var(--accent-200)',
        },
        font: {
          DEFAULT: 'var(--font-100)',
          dark: 'var(--font-200)',
        },
        base: {
          DEFAULT: 'var(--base-100)',
          dark: 'var(--base-200)',
          light: 'var(--base-300)',
        },
      },
    },
  },
  plugins: [],
};
