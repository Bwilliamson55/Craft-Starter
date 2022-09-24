// module exports
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    '../templates/**/*.{twig,html}',
    './src/vue/**/*.{vue,html}',
    './src/css/components/**/*.css',
  ],
  theme: {
    fontFamily: {
      pairadice: ["nugie_romanticnugie_romantic", "serif"],
      pairadice_italic: ["nugie_romanticnugieromanticIt", "italic"],
      dosis: ["dosisextralight", "sans"],
    },
    extend: {
      fontFamily: {
        'sans': ['dosisextralight', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
