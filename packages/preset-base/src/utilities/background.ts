import type { UtilityConfig } from '@mfauzanap_pandacss/types'

export const background: UtilityConfig = {
  backgroundPosition: {
    shorthand: 'bgPosition',
    className: 'bg-pos',
  },
  backgroundPositionX: {
    shorthand: 'bgPositionX',
    className: 'bg-pos-x',
  },
  backgroundPositionY: {
    shorthand: 'bgPositionY',
    className: 'bg-pos-y',
  },

  backgroundAttachment: {
    shorthand: 'bgAttachment',
    className: 'bg-attach',
  },
  backgroundClip: {
    shorthand: 'bgClip',
    className: 'bg-clip',
    transform(value) {
      return {
        backgroundClip: value,
        WebkitBackgroundClip: value,
      }
    },
  },
  background: {
    shorthand: 'bg',
    className: 'bg',
    values: 'colors',
  },
  backgroundColor: {
    shorthand: 'bgColor',
    className: 'bg-col',
    values: 'colors',
  },

  backgroundOrigin: {
    shorthand: 'bgOrigin',
    className: 'bg-origin',
  },
  backgroundImage: {
    shorthand: 'bgImage',
    className: 'bg-img',
    values: 'assets',
  },
  backgroundRepeat: {
    shorthand: 'bgRepeat',
    className: 'bg-repeat',
  },
  backgroundBlendMode: {
    shorthand: 'bgBlendMode',
    className: 'bg-blend',
  },
  backgroundSize: {
    shorthand: 'bgSize',
    className: 'bg-size',
  },
  backgroundGradient: {
    shorthand: 'bgGradient',
    className: 'bg-gradient',
    values(theme) {
      return {
        ...theme('gradients'),
        'to-t': 'linear-gradient(to top, var(--gradient))',
        'to-tr': 'linear-gradient(to top right, var(--gradient))',
        'to-r': 'linear-gradient(to right, var(--gradient))',
        'to-br': 'linear-gradient(to bottom right, var(--gradient))',
        'to-b': 'linear-gradient(to bottom, var(--gradient))',
        'to-bl': 'linear-gradient(to bottom left, var(--gradient))',
        'to-l': 'linear-gradient(to left, var(--gradient))',
        'to-tl': 'linear-gradient(to top left, var(--gradient))',
      }
    },
    transform(value) {
      return {
        '--gradient-stops': 'var(--gradient-from), var(--gradient-to)',
        '--gradient': 'var(--gradient-via-stops, var(--gradient-stops))',
        backgroundImage: value,
      }
    },
  },
  textGradient: {
    className: 'text-gradient',
    values(theme) {
      return {
        ...theme('gradients'),
        'to-t': 'linear-gradient(to top, var(--gradient))',
        'to-tr': 'linear-gradient(to top right, var(--gradient))',
        'to-r': 'linear-gradient(to right, var(--gradient))',
        'to-br': 'linear-gradient(to bottom right, var(--gradient))',
        'to-b': 'linear-gradient(to bottom, var(--gradient))',
        'to-bl': 'linear-gradient(to bottom left, var(--gradient))',
        'to-l': 'linear-gradient(to left, var(--gradient))',
        'to-tl': 'linear-gradient(to top left, var(--gradient))',
      }
    },
    transform(value) {
      return {
        '--gradient-stops': 'var(--gradient-from), var(--gradient-to)',
        '--gradient': 'var(--gradient-via-stops, var(--gradient-stops))',
        backgroundImage: value,
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }
    },
  },
  gradientFrom: {
    className: 'bg-gr-from',
    values: 'colors',
    transform(value) {
      return {
        '--gradient-from': value,
      }
    },
  },
  gradientTo: {
    className: 'bg-gr-to',
    values: 'colors',
    transform(value) {
      return {
        '--gradient-to': value,
      }
    },
  },
  gradientVia: {
    className: 'bg-gr-via',
    values: 'colors',
    transform(value) {
      return {
        '--gradient-via-stops': 'var(--gradient-from), var(--gradient-via), var(--gradient-to)',
        '--gradient-via': value,
      }
    },
  },
}
