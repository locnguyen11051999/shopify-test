/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,liquid}"],
  theme: {
    fontSize: {
      sm: '15px',
      base: '19px',
      large: '28px',
      xl: '37px',
    },
    fontFamily: {
      sans: [
        "Proxima Nova, sans-serif"
      ],
      header: [
        "Gotham Bold"
      ]
    },
    extend: {
      colors: {
        'deep-blue': '#1c2026',
        'color': '#65757e'
      },
      width: {
        'item-large': 'calc(25% - 22.5px)',
        'item-medium': 'calc(50% - 15px)'
      }
    }
  },
  plugins: [],
}

