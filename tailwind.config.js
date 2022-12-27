const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [
    './public/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      audiowide: ['Audiowide', 'Helvetica', 'Arial', 'serif'],
      avenir: ['Avenir', 'Helvetica', 'Arial', 'sans-serif']
    },
    colors: {
      ...colors,
      custom: {
        cyan: '#23a6d5',
        green: '#23d5ab'
      }
    }
  },
  variants: {},
  plugins: []
}
