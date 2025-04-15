/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B4D69', // Town Square Blue
          light: '#3B82F6',    // Optional - Blue-500
          dark: '#1E3A8A',     // Optional - Blue-800
        },
        secondary: {
          DEFAULT: '#4B5563', // Gray-600
          light: '#6B7280',   // Gray-500
          dark: '#374151',    // Gray-700
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber-500
          light: '#FCD34D',   // Amber-300
          dark: '#D97706',    // Amber-600
        },
        background: '#F9FAFB', // Gray-50
        surface: '#FFFFFF',    // White
        text: {
          primary: '#111827',   // Gray-900
          secondary: '#4B5563', // Gray-600
        }
      },
      fontFamily: {
        heading: ['Calistoga', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      spacing: {
        'section': '6rem',
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'medium': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
}
