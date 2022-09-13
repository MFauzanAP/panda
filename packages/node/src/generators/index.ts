import type { TokenMap } from '@css-panda/tokens'
import { ensureDir } from 'fs-extra'
import { outdent } from 'outdent'
import path from 'path'
import type { Context } from '../create-context'
import { generateConditions } from './conditions'
import { generateCss, generateKeyframes } from './css'
import { generateCssMap } from './css-map'
import { generateCssType } from './css-type'
import { generateCx } from './cx'
import { generateFontFace } from './font-face'
import { generateGlobalStyle } from './global-style'
import { generateisValidProp } from './is-valid-prop'
import { generateJs } from './js'
import { generateDts } from './js-dts'
import { generatePattern } from './pattern'
import { generatePropertyTypes } from './property-types'
import { generateRecipes } from './recipe'
import { generateSerializer } from './serializer'
import { generateSx } from './sx'
import { generateTokenDts } from './token-dts'
import { generateTransform } from './transform'
import { writeFileWithNote } from './__utils'

async function setupKeyframes(ctx: Context) {
  const code = generateKeyframes(ctx)
  if (!code) return
  await ensureDir(ctx.paths.ds)
  const filepath = path.join(ctx.paths.ds, 'keyframes.css')
  return writeFileWithNote(filepath, code)
}

async function setupDesignTokens(ctx: Context, dict: TokenMap) {
  if (dict.isEmpty) return
  await ensureDir(ctx.paths.ds)
  return Promise.all([
    writeFileWithNote(path.join(ctx.paths.ds, 'index.css'), generateCss(ctx, ctx.cssVar?.root)),
    writeFileWithNote(path.join(ctx.paths.ds, 'index.d.ts'), generateDts()),
    writeFileWithNote(path.join(ctx.paths.ds, 'index.js'), generateJs(dict)),
  ])
}

async function setupGlobalStyle(ctx: Context) {
  await ensureDir(ctx.paths.css)
  const code = generateGlobalStyle()
  return Promise.all([
    writeFileWithNote(path.join(ctx.paths.css, 'global-style.js'), code.js),
    writeFileWithNote(path.join(ctx.paths.css, 'global-style.d.ts'), code.dts),
  ])
}

async function setupTypes(ctx: Context, dict: TokenMap) {
  await ensureDir(ctx.paths.types)

  const code = await generateCssType()
  const conditions = generateConditions(ctx)

  return Promise.all([
    writeFileWithNote(path.join(ctx.paths.types, 'csstype.d.ts'), code.cssType),
    writeFileWithNote(path.join(ctx.paths.types, 'panda-csstype.d.ts'), code.pandaCssType),
    writeFileWithNote(path.join(ctx.paths.types, 'public.d.ts'), code.publicType),
    writeFileWithNote(path.join(ctx.paths.types, 'token.d.ts'), generateTokenDts(dict)),
    writeFileWithNote(path.join(ctx.paths.types, 'property-type.d.ts'), generatePropertyTypes(ctx.utilities)),

    writeFileWithNote(path.join(ctx.paths.css, 'conditions.js'), conditions.js),
    writeFileWithNote(path.join(ctx.paths.types, 'conditions.d.ts'), conditions.dts),
  ])
}

async function setupCss(ctx: Context) {
  await ensureDir(ctx.paths.css)
  const code = generateSerializer(ctx.hash)
  return Promise.all([
    writeFileWithNote(path.join(ctx.paths.css, 'transform.js'), generateTransform()),
    writeFileWithNote(path.join(ctx.paths.css, 'serializer.js'), code.serializer),
    writeFileWithNote(path.join(ctx.paths.css, 'css.js'), code.css),
    writeFileWithNote(path.join(ctx.paths.css, 'css.d.ts'), code.dts),
  ])
}

async function setupCssMap(ctx: Context) {
  await ensureDir(ctx.paths.css)
  const code = generateCssMap()
  return Promise.all([
    writeFileWithNote(path.join(ctx.paths.css, 'css-map.js'), code.js),
    writeFileWithNote(path.join(ctx.paths.css, 'css-map.d.ts'), code.dts),
  ])
}

async function setupCx(ctx: Context) {
  await ensureDir(ctx.paths.css)
  const code = generateCx()
  return Promise.all([
    writeFileWithNote(path.join(ctx.paths.css, 'cx.js'), code.js),
    writeFileWithNote(path.join(ctx.paths.css, 'cx.d.ts'), code.dts),
  ])
}

async function setupSx(ctx: Context) {
  await ensureDir(ctx.paths.css)
  const code = generateSx()
  return Promise.all([
    writeFileWithNote(path.join(ctx.paths.css, 'sx.js'), code.js),
    writeFileWithNote(path.join(ctx.paths.css, 'sx.d.ts'), code.dts),
  ])
}

async function setupFontFace(ctx: Context) {
  await ensureDir(ctx.paths.css)
  const code = generateFontFace()
  return Promise.all([
    writeFileWithNote(path.join(ctx.paths.css, 'font-face.js'), code.js),
    writeFileWithNote(path.join(ctx.paths.css, 'font-face.d.ts'), code.dts),
  ])
}

async function setupRecipes(ctx: Context) {
  const code = generateRecipes(ctx.config)

  if (!code) return
  await ensureDir(ctx.paths.recipe)

  return Promise.all([
    writeFileWithNote(path.join(ctx.paths.recipe, 'index.js'), code.js),
    writeFileWithNote(path.join(ctx.paths.recipe, 'index.d.ts'), code.dts),
  ])
}

async function setupPatterns(ctx: Context) {
  const code = generatePattern(ctx.config)

  if (!code) return
  await ensureDir(ctx.paths.pattern)

  return Promise.all([
    writeFileWithNote(path.join(ctx.paths.pattern, 'index.js'), code.js),
    writeFileWithNote(path.join(ctx.paths.pattern, 'index.d.ts'), code.dts),
  ])
}

async function setupJsx(ctx: Context) {
  // if (!ctx.jsx) return
  const code = await generateisValidProp(ctx)
  await ensureDir(ctx.paths.jsx)
  return Promise.all([writeFileWithNote(path.join(ctx.paths.jsx, 'is-valid-prop.js'), code.js)])
}

async function setupCssIndex(ctx: Context) {
  const code = outdent`
  export * from './css'
  export * from './cx'
  export * from './font-face'
  export * from './global-style'
  export * from './css-map'
  export * from './sx'
 `

  return Promise.all([
    writeFileWithNote(path.join(ctx.paths.css, 'index.js'), code),
    writeFileWithNote(path.join(ctx.paths.css, 'index.d.ts'), code),
  ])
}

export async function generateSystem(ctx: Context) {
  const { dictionary } = ctx

  await Promise.all([
    setupDesignTokens(ctx, dictionary),
    setupKeyframes(ctx),
    setupTypes(ctx, dictionary),
    setupCssMap(ctx),
    setupCx(ctx),
    setupSx(ctx),
    setupCss(ctx),
    setupFontFace(ctx),
    setupGlobalStyle(ctx),
    setupRecipes(ctx),
    setupPatterns(ctx),
    setupCssIndex(ctx),
    setupJsx(ctx),
  ])
}
