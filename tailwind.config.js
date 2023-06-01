/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "/node_modules/tw-elements/dist/js/**/*.js", "/node_modules/tw-elements/dist/src/js/data/chart/*.js"],
  theme: {
    extend: {
      spacing: {
        '140': '600px',
        '180': '800px',
        '120': '120rem',
        '100': '100vh'
      },
      maxWidth: {
        '120': '120rem'
      },
      boxShadow: {
        '3xl': '0 4px 6px -1px rgba(0 0 0 / 10%), 0 2px 4px -1px rgba(0 0 0 / 6%)'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      fontFamily: {
        'sans-serif': ['-apple-system', 'blinkmacsystemfont', "Segoe UI", 'roboto', "Helvetica Neue", 'arial', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]
      }
    },
    colors: {
      'uoc-corporate': '#000078',
      'uoc-masterbrand': '#73edff',
      'uoc-bg': '#d5faff',
      'background': '#fff'
    }
  },
  plugins: [
  ],
};

