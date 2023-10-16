import presetBase from '@mfauzanap_pandacss/preset-base'
import presetPanda from '@mfauzanap_pandacss/preset-panda'
import type { Config } from '@mfauzanap_pandacss/types'

import { recipes } from './recipes'
import { semanticTokens } from './semantic-tokens'

const { utilities, patterns } = presetBase
const theme = presetPanda.theme

const { breakpoints, keyframes } = theme

export { utilities, patterns, breakpoints, keyframes }

export const conditions = {
  ...presetBase.conditions,
  materialTheme: '[data-color=material] &',
  pastelTheme: '[data-color=pastel] &',
}

export const tokens = {
  ...theme.tokens,
  colors: {
    ...theme.tokens.colors,
    deep: {
      test: {
        yam: {
          value: '%555',
        },
        pool: {
          poller: {
            value: '#fff',
          },
          tall: {
            value: '$dfdf',
          },
        },
      },
    },
  },
}

export const config: Config = {
  ...presetBase,
  theme: {
    ...theme,
    tokens,
    semanticTokens,
    recipes,
  },
}
