import type { Generator } from '@mfauzanap_pandacss/generator'
import type { Artifact, PandaHookable } from '@mfauzanap_pandacss/types'
import type { Runtime } from '@mfauzanap_pandacss/types/src/runtime'

export const getOutputEngine = ({
  paths,
  runtime: { path, fs },
}: Generator & { runtime: Runtime; hooks: PandaHookable }) => ({
  empty() {
    fs.rmDirSync(path.join(...paths.root))
  },
  async write(output: Artifact | undefined) {
    if (!output) return

    const { dir = paths.root, files } = output
    fs.ensureDirSync(path.join(...dir))

    return Promise.allSettled(
      files.map(async ({ file, code }) => {
        const absPath = path.join(...dir, file)
        if (code) {
          return fs.writeFile(absPath, code)
        }
      }),
    )
  },
})
