import { readFileSync, writeFileSync } from 'fs'
import { basename, dirname, join } from 'path'

function getEntrypoint(pkg: string, file: string) {
  const entry = require.resolve(pkg)
  const isDist = entry.includes('dist')
  if (!isDist) {
    return join(dirname(entry), 'src', file)
  }
  return join(dirname(entry), file)
}

const fileMap = [
  [
    '@mfauzanap_pandacss/types',
    [
      ['csstype.d.ts'],
      ['system-types.d.ts'],
      ['selectors.d.ts'],
      ['recipe.d.ts'],
      ['pattern.d.ts'],
      ['parts.d.ts'],
      ['composition.d.ts'],
    ],
  ],
  ['@mfauzanap_pandacss/is-valid-prop', [['index.mjs', 'is-valid-prop.mjs']]],
  ['@mfauzanap_pandacss/shared', [['shared.mjs', 'helpers.mjs'], ['astish.mjs'], ['normalize-html.mjs']]],
] as const

async function main() {
  fileMap.forEach(([pkg, files]) => {
    files.forEach((file: any) => {
      const [input, output = input] = file
      const filepath = getEntrypoint(pkg, input)

      let content = readFileSync(filepath, 'utf8').replace("'./tokens'", "'../tokens'")

      if (filepath.includes('system-types.d.ts')) {
        content = content.replace('(SystemProperties | GenericProperties)', 'SystemProperties')
      }

      const outPath = join(__dirname, '..', 'src', 'artifacts', 'generated', basename(output) + '.json')
      writeFileSync(outPath, JSON.stringify({ content }, null, 2), 'utf8')
    })
  })
}

main()
