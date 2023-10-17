import { defineConfig } from '@mfauzanap_pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./stories/**/*.jsx'],
  exclude: [],
  outdir: 'styled-system',
})
