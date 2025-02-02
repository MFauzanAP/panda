# @mfauzanap_pandacss/config

## 0.15.5

### Patch Changes

- @mfauzanap_pandacss/error@0.15.5
- @mfauzanap_pandacss/logger@0.15.5
- @mfauzanap_pandacss/preset-base@0.15.5
- @mfauzanap_pandacss/preset-panda@0.15.5
- @mfauzanap_pandacss/types@0.15.5

## 0.15.4

### Patch Changes

- abd7c47a: Fix preset merging, config wins over presets.
  - @mfauzanap_pandacss/types@0.15.4
  - @mfauzanap_pandacss/error@0.15.4
  - @mfauzanap_pandacss/logger@0.15.4
  - @mfauzanap_pandacss/preset-base@0.15.4
  - @mfauzanap_pandacss/preset-panda@0.15.4

## 0.15.3

### Patch Changes

- Updated dependencies [1ac2011b]
- Updated dependencies [58743bc4]
  - @mfauzanap_pandacss/types@0.15.3
  - @mfauzanap_pandacss/preset-base@0.15.3
  - @mfauzanap_pandacss/preset-panda@0.15.3
  - @mfauzanap_pandacss/error@0.15.3
  - @mfauzanap_pandacss/logger@0.15.3

## 0.15.2

### Patch Changes

- 2645c2da: > Note: This is only relevant for users using more than 1 custom defined preset that overlap with each
  other.

  BREAKING CHANGE: Presets merging order felt wrong (left overriding right presets) and is now more intuitive (right
  overriding left presets)

  Example:

  ```ts
  const firstConfig = definePreset({
    theme: {
      tokens: {
        colors: {
          'first-main': { value: 'override' },
        },
      },
      extend: {
        tokens: {
          colors: {
            orange: { value: 'orange' },
            gray: { value: 'from-first-config' },
          },
        },
      },
    },
  })

  const secondConfig = definePreset({
    theme: {
      tokens: {
        colors: {
          pink: { value: 'pink' },
        },
      },
      extend: {
        tokens: {
          colors: {
            blue: { value: 'blue' },
            gray: { value: 'gray' },
          },
        },
      },
    },
  })

  // Final config
  export default defineConfig({
    presets: [firstConfig, secondConfig],
  })
  ```

  Here's the difference between the old and new behavior:

  ```diff
  {
    "theme": {
      "tokens": {
        "colors": {
          "blue": {
            "value": "blue"
          },
  -        "first-main": {
  -          "value": "override"
  -        },
          "gray": {
  -          "value": "from-first-config"
  +          "value": "gray"
          },
          "orange": {
            "value": "orange"
          },
  +        "pink": {
  +            "value": "pink",
  +        },
        }
      }
    }
  }
  ```

- Updated dependencies [26a788c0]
  - @mfauzanap_pandacss/types@0.15.2
  - @mfauzanap_pandacss/preset-base@0.15.2
  - @mfauzanap_pandacss/preset-panda@0.15.2
  - @mfauzanap_pandacss/error@0.15.2
  - @mfauzanap_pandacss/logger@0.15.2

## 0.15.1

### Patch Changes

- @mfauzanap_pandacss/types@0.15.1
- @mfauzanap_pandacss/error@0.15.1
- @mfauzanap_pandacss/logger@0.15.1
- @mfauzanap_pandacss/preset-base@0.15.1
- @mfauzanap_pandacss/preset-panda@0.15.1

## 0.15.0

### Patch Changes

- Updated dependencies [4bc515ea]
- Updated dependencies [39298609]
  - @mfauzanap_pandacss/types@0.15.0
  - @mfauzanap_pandacss/preset-base@0.15.0
  - @mfauzanap_pandacss/preset-panda@0.15.0
  - @mfauzanap_pandacss/error@0.15.0
  - @mfauzanap_pandacss/logger@0.15.0

## 0.14.0

### Patch Changes

- Updated dependencies [8106b411]
- Updated dependencies [e6459a59]
- Updated dependencies [6f7ee198]
  - @mfauzanap_pandacss/types@0.14.0
  - @mfauzanap_pandacss/preset-base@0.14.0
  - @mfauzanap_pandacss/preset-panda@0.14.0
  - @mfauzanap_pandacss/error@0.14.0
  - @mfauzanap_pandacss/logger@0.14.0

## 0.13.1

### Patch Changes

- d0fbc7cc: Allow `.mts` and `.cts` panda config extension
- Updated dependencies [d0fbc7cc]
  - @mfauzanap_pandacss/error@0.13.1
  - @mfauzanap_pandacss/logger@0.13.1
  - @mfauzanap_pandacss/preset-base@0.13.1
  - @mfauzanap_pandacss/preset-panda@0.13.1
  - @mfauzanap_pandacss/types@0.13.1

## 0.13.0

### Patch Changes

- @mfauzanap_pandacss/error@0.13.0
- @mfauzanap_pandacss/logger@0.13.0
- @mfauzanap_pandacss/preset-base@0.13.0
- @mfauzanap_pandacss/preset-panda@0.13.0
- @mfauzanap_pandacss/types@0.13.0

## 0.12.2

### Patch Changes

- @mfauzanap_pandacss/error@0.12.2
- @mfauzanap_pandacss/logger@0.12.2
- @mfauzanap_pandacss/preset-base@0.12.2
- @mfauzanap_pandacss/preset-panda@0.12.2
- @mfauzanap_pandacss/types@0.12.2

## 0.12.1

### Patch Changes

- @mfauzanap_pandacss/error@0.12.1
- @mfauzanap_pandacss/logger@0.12.1
- @mfauzanap_pandacss/preset-base@0.12.1
- @mfauzanap_pandacss/preset-panda@0.12.1
- @mfauzanap_pandacss/types@0.12.1

## 0.12.0

### Patch Changes

- Updated dependencies [bf2ff391]
  - @mfauzanap_pandacss/preset-base@0.12.0
  - @mfauzanap_pandacss/error@0.12.0
  - @mfauzanap_pandacss/logger@0.12.0
  - @mfauzanap_pandacss/preset-panda@0.12.0
  - @mfauzanap_pandacss/types@0.12.0

## 0.11.1

### Patch Changes

- Updated dependencies [23b516f4]
  - @mfauzanap_pandacss/types@0.11.1
  - @mfauzanap_pandacss/preset-base@0.11.1
  - @mfauzanap_pandacss/preset-panda@0.11.1
  - @mfauzanap_pandacss/error@0.11.1
  - @mfauzanap_pandacss/logger@0.11.1

## 0.11.0

### Patch Changes

- dead08a2: Normalize tsconfig path mapping result to posix path.

  It fix not generating pattern styles on windows eventually.

- Updated dependencies [5b95caf5]
- Updated dependencies [811f4fb1]
  - @mfauzanap_pandacss/types@0.11.0
  - @mfauzanap_pandacss/preset-base@0.11.0
  - @mfauzanap_pandacss/preset-panda@0.11.0
  - @mfauzanap_pandacss/error@0.11.0
  - @mfauzanap_pandacss/logger@0.11.0

## 0.10.0

### Patch Changes

- Updated dependencies [24e783b3]
- Updated dependencies [00d11a8b]
- Updated dependencies [1972b4fa]
- Updated dependencies [386e5098]
- Updated dependencies [a669f4d5]
  - @mfauzanap_pandacss/types@0.10.0
  - @mfauzanap_pandacss/preset-base@0.10.0
  - @mfauzanap_pandacss/preset-panda@0.10.0
  - @mfauzanap_pandacss/error@0.10.0
  - @mfauzanap_pandacss/logger@0.10.0

## 0.9.0

### Patch Changes

- Updated dependencies [c08de87f]
  - @mfauzanap_pandacss/preset-base@0.9.0
  - @mfauzanap_pandacss/types@0.9.0
  - @mfauzanap_pandacss/preset-panda@0.9.0
  - @mfauzanap_pandacss/error@0.9.0
  - @mfauzanap_pandacss/logger@0.9.0

## 0.8.0

### Patch Changes

- e1f6318a: Fix module resolution issue when using panda from a browser environment
- be0ad578: Fix parser issue with TS path mappings
- Updated dependencies [be0ad578]
  - @mfauzanap_pandacss/preset-base@0.8.0
  - @mfauzanap_pandacss/types@0.8.0
  - @mfauzanap_pandacss/preset-panda@0.8.0
  - @mfauzanap_pandacss/error@0.8.0
  - @mfauzanap_pandacss/logger@0.8.0

## 0.7.0

### Patch Changes

- 1a05c4bb: Fix issue where hot module reloading is inconsistent in the PostCSS plugin when another internal
  typescript-only package is changed
- Updated dependencies [60a77841]
- Updated dependencies [a9c189b7]
- Updated dependencies [d9eeba60]
  - @mfauzanap_pandacss/preset-base@0.7.0
  - @mfauzanap_pandacss/types@0.7.0
  - @mfauzanap_pandacss/preset-panda@0.7.0
  - @mfauzanap_pandacss/error@0.7.0
  - @mfauzanap_pandacss/logger@0.7.0

## 0.6.0

### Patch Changes

- Updated dependencies [97fbe63f]
- Updated dependencies [08d33e0f]
- Updated dependencies [f7aff8eb]
  - @mfauzanap_pandacss/preset-base@0.6.0
  - @mfauzanap_pandacss/types@0.6.0
  - @mfauzanap_pandacss/error@0.6.0
  - @mfauzanap_pandacss/logger@0.6.0
  - @mfauzanap_pandacss/preset-panda@0.6.0

## 0.5.1

### Patch Changes

- 33198907: Create separate entrypoint for merge configs

  ```ts
  import { mergeConfigs } from '@mfauzanap_pandacss/config/merge'
  ```

- 1a2c0e2b: Fix `panda.config.xxx` file dependencies detection when using the builder (= with PostCSS or with the VSCode
  extension). It will now also properly resolve tsconfig path aliases.
- Updated dependencies [8c670d60]
- Updated dependencies [f9247e52]
- Updated dependencies [1ed239cd]
- Updated dependencies [78ed6ed4]
  - @mfauzanap_pandacss/types@0.5.1
  - @mfauzanap_pandacss/logger@0.5.1
  - @mfauzanap_pandacss/preset-base@0.5.1
  - @mfauzanap_pandacss/preset-panda@0.5.1
  - @mfauzanap_pandacss/error@0.5.1

## 0.5.0

### Patch Changes

- Updated dependencies [ead9eaa3]
- Updated dependencies [3a87cff8]
  - @mfauzanap_pandacss/types@0.5.0
  - @mfauzanap_pandacss/preset-panda@0.5.0
  - @mfauzanap_pandacss/preset-base@0.5.0
  - @mfauzanap_pandacss/error@0.5.0
  - @mfauzanap_pandacss/logger@0.5.0

## 0.4.0

### Patch Changes

- Updated dependencies [e8024347]
- Updated dependencies [d00eb17c]
- Updated dependencies [9156c1c6]
- Updated dependencies [54a8913c]
- Updated dependencies [0f36ebad]
- Updated dependencies [c7b42325]
- Updated dependencies [5b344b9c]
  - @mfauzanap_pandacss/preset-base@0.4.0
  - @mfauzanap_pandacss/types@0.4.0
  - @mfauzanap_pandacss/preset-panda@0.4.0
  - @mfauzanap_pandacss/error@0.4.0
  - @mfauzanap_pandacss/logger@0.4.0

## 0.3.2

### Patch Changes

- 9822d79a: Remove `bundledDependencies` from `package.json` to fix NPM resolution
  - @mfauzanap_pandacss/error@0.3.2
  - @mfauzanap_pandacss/logger@0.3.2
  - @mfauzanap_pandacss/preset-base@0.3.2
  - @mfauzanap_pandacss/preset-panda@0.3.2
  - @mfauzanap_pandacss/types@0.3.2

## 0.3.1

### Patch Changes

- efd79d83: Baseline release for the launch
- Updated dependencies [efd79d83]
  - @mfauzanap_pandacss/error@0.3.1
  - @mfauzanap_pandacss/logger@0.3.1
  - @mfauzanap_pandacss/preset-base@0.3.1
  - @mfauzanap_pandacss/preset-panda@0.3.1
  - @mfauzanap_pandacss/types@0.3.1

## 0.3.0

### Patch Changes

- Updated dependencies [bd5c049b]
- Updated dependencies [6d81ee9e]
  - @mfauzanap_pandacss/preset-base@0.3.0
  - @mfauzanap_pandacss/preset-panda@0.3.0
  - @mfauzanap_pandacss/types@0.3.0
  - @mfauzanap_pandacss/error@0.3.0
  - @mfauzanap_pandacss/logger@0.3.0

## 0.0.2

### Patch Changes

- c308e8be: Allow asynchronous presets
- fb40fff2: Initial release of all packages

  - Internal AST parser for TS and TSX
  - Support for defining presets in config
  - Support for design tokens (core and semantic)
  - Add `outExtension` key to config to allow file extension options for generated javascript. `.js` or `.mjs`
  - Add `jsxElement` option to patterns, to allow specifying the jsx element rendered by the patterns.

- Updated dependencies [c308e8be]
- Updated dependencies [fb40fff2]
  - @mfauzanap_pandacss/types@0.0.2
  - @mfauzanap_pandacss/error@0.0.2
  - @mfauzanap_pandacss/logger@0.0.2
