/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '900px',
      'sm':'640px',
    },
   
    extend: {
      backgroundColor: {
        '023440': '#023440',
      },
    },
  },
  plugins: [],
}

