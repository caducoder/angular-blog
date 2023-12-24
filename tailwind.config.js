/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'menu-icon': "url(/assets/img/menu.png)",
        'close-icon': "url(/assets/img/close.png)"
      }
    },
  },
  plugins: [],
}

