import type { UtilityConfig } from '@mfauzanap_pandacss/types'

export const typography: UtilityConfig = {
  color: {
    className: 'text-col',
    values: 'colors',
  },
  fontFamily: {
    className: 'font',
    values: 'fonts',
  },
  fontSize: {
    className: 'fs',
    values: 'fontSizes',
  },
  fontWeight: {
    className: 'font-w',
    values: 'fontWeights',
  },
  fontSmoothing: {
    className: 'smoothing',
    values: {
      antialiased: 'antialiased',
      'subpixel-antialiased': 'auto',
    },
    transform(value) {
      return {
        WebkitFontSmoothing: value,
      }
    },
  },
  fontVariantNumeric: {
    className: 'numeric',
  },
  letterSpacing: {
    className: 'tracking',
    values: 'letterSpacings',
  },
  lineHeight: {
    className: 'leading',
    values: 'lineHeights',
  },
  textAlign: {
    className: 'text-al',
  },
  textDecoration: {
    className: 'text-decor',
  },
  textDecorationColor: {
    className: 'text-decor-c',
    values: 'colors',
  },
  textEmphasisColor: {
    className: 'text-emphasis',
    values: 'colors',
  },
  textDecorationStyle: {
    className: 'text-decor-style',
  },
  textDecorationThickness: {
    className: 'text-decor-t',
  },
  textUnderlineOffset: {
    className: 'underline-offset',
  },
  textTransform: {
    className: 'text-transform',
  },
  textIndent: {
    className: 'indent',
    values: 'spacing',
  },
  textShadow: {
    className: 'text-shadow',
    values: 'shadows',
  },
  textOverflow: {
    className: 'text-overflow',
  },
  verticalAlign: {
    className: 'align',
  },
  wordBreak: {
    className: 'break',
  },
  textWrap: {
    className: 'text-wrap',
    values: ['wrap', 'balance', 'nowrap'],
    transform(value) {
      return { textWrap: value }
    },
  },
  truncate: {
    className: 'truncate',
    values: { type: 'boolean' },
    transform(value) {
      if (!value) return {}
      return {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }
    },
  },
  lineClamp: {
    className: 'clamp',
    transform(value) {
      if (value === 'none') {
        return {
          WebkitLineClamp: 'unset',
        }
      }
      return {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: value,
        WebkitBoxOrient: 'vertical',
      }
    },
  },
}
