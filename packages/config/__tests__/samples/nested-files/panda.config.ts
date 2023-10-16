import { defineConfig } from '@mfauzanap_pandacss/dev'
import { themeTokens } from './src'

export default defineConfig({
  preflight: true,
  presets: ['@mfauzanap_pandacss/dev/presets'],
  include: ['./src/**/*.{ts,tsx,jsx}'],
  exclude: [],
  hash: false,
  jsxFramework: 'react',
  theme: {
    extend: {
      tokens: themeTokens,
    },
  },
})
