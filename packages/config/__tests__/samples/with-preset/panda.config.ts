import { defineConfig } from '@mfauzanap_pandacss/dev'
import { tsImportPreset } from './src/ts-import-preset'

export default defineConfig({
  preflight: true,
  presets: ['@mfauzanap_pandacss/dev/presets', tsImportPreset, require('./src/required-preset')],
  include: ['./src/**/*.{ts,tsx,jsx}'],
  exclude: [],
  hash: false,
  jsxFramework: 'react',
  theme: {
    extend: {
      tokens: {
        colors: {
          'color-primary': { value: '#000' },
        },
      },
    },
  },
})
