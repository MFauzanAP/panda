import { defineConfig } from '@mfauzanap_pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./pages/**/*.{vue,ts,tsx}', './components/**/*.{vue,ts,tsx}'],
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'vue',
})
