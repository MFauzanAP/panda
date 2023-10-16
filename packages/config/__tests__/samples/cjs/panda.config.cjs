const { defineConfig } = require('@mfauzanap_pandacss/dev')
const { tokens } = require('../common/tokens')

module.exports = defineConfig({
  preflight: true,
  presets: ['@mfauzanap_pandacss/dev/presets'],
  include: ['./src/**/*.{ts,tsx,jsx}'],
  exclude: [],
  hash: false,
  jsxFramework: 'react',
  theme: {
    extend: {
      tokens: tokens,
    },
  },
})
