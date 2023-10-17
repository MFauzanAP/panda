import { defineConfig } from '@mfauzanap_pandacss/dev'

export default defineConfig({
  include: ['src/**/*.tsx'],
  outdir: 'panda',
  jsxFramework: 'solid',
  jsxFactory: 'panda',
})
