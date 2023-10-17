import { defineConfig } from '@mfauzanap_pandacss/dev'
import codegenPreset from './preset'

export default defineConfig({
  presets: ['@mfauzanap_pandacss/dev/presets', codegenPreset],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'styled-system-vue',

  // The JSX framework to use
  jsxFramework: 'vue',
})
