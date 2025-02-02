import { mergeCss } from '@mfauzanap_pandacss/core'
import type { Generator } from '@mfauzanap_pandacss/generator'
import type { Artifact, PandaHookable } from '@mfauzanap_pandacss/types'
import type { Runtime } from '@mfauzanap_pandacss/types/src/runtime'

export const getChunkEngine = ({
  paths,
  config,
  runtime: { path, fs },
}: Generator & { runtime: Runtime; hooks: PandaHookable }) => ({
  dir: path.join(...paths.chunk),
  readFile(file: string) {
    const fileName = path.join(...paths.chunk, this.format(file))
    return fs.existsSync(fileName) ? fs.readFileSync(fileName) : ''
  },
  getFiles() {
    const files = fs.existsSync(this.dir) ? fs.readDirSync(this.dir) : []
    return files.map((file) => fs.readFileSync(path.join(this.dir, file)))
  },
  format(file: string) {
    return path.relative(config.cwd, file).replaceAll(path.sep, '__').replace(path.extname(file), '.css')
  },
  getArtifact(file: string, css: string): Artifact {
    const fileName = this.format(file)
    const newCss = mergeCss(this.readFile(file), css)
    return {
      dir: paths.chunk,
      files: [{ file: fileName, code: newCss }],
    }
  },
  rm(file: string) {
    return fs.rmFileSync(path.join(...paths.chunk, this.format(file)))
  },
  empty() {
    return fs.rmDirSync(this.dir)
  },
  get glob() {
    return [`${this.dir}/**/*.css`]
  },
})
