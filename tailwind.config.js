/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'primary-hover': 'var(--primary-hover)',
        secondary: 'var(--secondary-color)',
        purple: {
          DEFAULT: '#672c8e',
          50: '#f5f0f9',
          100: '#ece0f3',
          200: '#dcc3e9',
          300: '#c69ad9',
          400: '#b06bc6',
          500: '#9a47b3',
          600: '#8a3ca0',
          700: '#672c8e',
          800: '#5a2680',
          900: '#4a2066',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
