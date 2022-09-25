const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    '../templates/**/*.{twig,html}',
    '../templates/*.{twig,html}',
    './src/vue/**/*.{vue,html}',
    './src/js/**/*.{vue,html,ts}',
    './src/css/components/**/*.css',
  ],
  theme: {
    fontFamily: {
      pairadice: ["nugie_romanticnugie_romantic", ...defaultTheme.fontFamily.serif],
      pairadice_italic: ["nugie_romanticnugieromanticIt", ...defaultTheme.fontFamily.serif],
      dosis: ["dosisextralight", ...defaultTheme.fontFamily.sans],
      sans: ['dosisextralight', ...defaultTheme.fontFamily.sans],
      serif: ["nugie_romanticnugie_romantic", ...defaultTheme.fontFamily.serif],
      mono: ["ui-monospace", ...defaultTheme.fontFamily.mono],
      display: ["dosisextralight", ...defaultTheme.fontFamily.sans],
      body: ["dosisextralight", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontFamily: {
        'sans': ['dosisextralight', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
