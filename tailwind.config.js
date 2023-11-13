/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#003366',
        'coral': '#FF6B6B',
        'light-grey': '#F2F2F2',
        'dark-grey': '#333333',
        'teal': '#008080',
      },
      // Add other theme extensions here if needed
    },
  },
  plugins: [],
  // Other Tailwind configurations if needed
}
