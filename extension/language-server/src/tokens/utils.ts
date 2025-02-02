import { box, type NodeRange } from '@mfauzanap_pandacss/extractor'
import { Bool } from 'lil-fp'
import { Range } from 'vscode-languageserver'

import { type SystemStyleObject } from '@mfauzanap_pandacss/types'

import { AtomicRule, optimizeCss } from '@mfauzanap_pandacss/core'
import { type PandaContext } from '@mfauzanap_pandacss/node'
import { toPx } from '@mfauzanap_pandacss/shared'
import * as base64 from 'base-64'

import parserCSS from 'prettier/parser-postcss'
import prettier from 'prettier/standalone'
import { match } from 'ts-pattern'
import * as utf8 from 'utf8'

import { type PandaVSCodeSettings } from '@mfauzanap_pandacss/extension-shared'
import { type Token } from '@mfauzanap_pandacss/token-dictionary'

export const isObjectLike = Bool.or(box.isObject, box.isMap)

export const nodeRangeToVsCodeRange = (range: NodeRange) =>
  Range.create(
    { line: range.startLineNumber - 1, character: range.startColumn - 1 },
    { line: range.endLineNumber - 1, character: range.endColumn - 1 },
  )

function getPrettiedCSS(css: string) {
  return prettier.format(css, {
    parser: 'css',
    plugins: [parserCSS],
  })
}

export type DisplayOptions = {
  mode?: PandaVSCodeSettings['hovers.display.mode']
  forceHash?: PandaVSCodeSettings['hovers.display.force-hash']
}

export const getMarkdownCss = (ctx: PandaContext, styles: SystemStyleObject, settings: PandaVSCodeSettings) => {
  const mode = settings['hovers.display.mode']
  const forceHash = settings['hovers.display.force-hash']

  const hash = ctx.config.hash
  if (forceHash) {
    ctx.config.hash = true
  }

  const context = ctx.createSheetContext()
  const rule = new AtomicRule(context)
  rule.process({ styles })

  const css = match(mode ?? 'optimized')
    .with('nested', () => rule.toCss())
    .with('optimized', () => optimizeCss(rule.toCss()))
    .with('minified', () => optimizeCss(rule.toCss(), { minify: true }))
    .run()

  const raw = getPrettiedCSS(css)
  const withCss = '```css' + '\n' + raw + '\n' + '```'

  // restore hash
  ctx.config.hash = hash

  return { raw, withCss }
}

export const printTokenValue = (token: Token, settings: PandaVSCodeSettings) =>
  `${token.value}${settings['rem-to-px.enabled'] && token.value.endsWith('rem') ? ` (${toPx(token.value)})` : ''}`

export const svgToMarkdownLink = (svg: string) => {
  const dataUri = 'data:image/svg+xml;charset=UTF-8;base64,' + base64.encode(utf8.encode(svg))
  return `![](${dataUri})`
}
