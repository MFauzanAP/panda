import type { UtilityConfig } from '@mfauzanap_pandacss/types'

export const tables: UtilityConfig = {
  borderCollapse: {
    className: 'border-collapse',
  },
  borderSpacing: {
    className: 'border-spacing',
    values: 'spacing',
  },
  borderSpacingX: {
    className: 'border-spacing-x',
    values: 'spacing',
    transform(value) {
      return {
        borderSpacing: `${value} var(--border-spacing-y)`,
      }
    },
  },
  borderSpacingY: {
    className: 'border-spacing-y',
    values: 'spacing',
    transform(value) {
      return {
        borderSpacing: `var(--border-spacing-x) ${value}`,
      }
    },
  },
  tableLayout: {
    className: 'table-layout',
  },
}
