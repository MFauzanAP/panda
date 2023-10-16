import type { Config } from '@mfauzanap_pandacss/types'
import { bundleNRequire } from 'bundle-n-require'

export async function bundle<T = Config>(filepath: string, cwd: string) {
  const { mod: config, dependencies } = await bundleNRequire(filepath, { cwd, interopDefault: true })
  return { config: (config?.default ?? config) as T, dependencies }
}
