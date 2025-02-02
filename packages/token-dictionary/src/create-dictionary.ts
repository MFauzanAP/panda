import { getDotPath, mapToJson } from '@mfauzanap_pandacss/shared'
import { TokenDictionary as BaseDictionary, type TokenDictionaryOptions } from './dictionary'
import { formats } from './format'
import { middlewares } from './middleware'
import { transforms } from './transform'

export class TokenDictionary extends BaseDictionary {
  constructor(options: TokenDictionaryOptions) {
    super(options)
    this.registerTransform(...transforms)
    this.registerMiddleware(...middlewares)
    this.build()
  }

  get get() {
    return formats.createVarGetter(this)
  }

  get conditionMap() {
    return formats.groupByCondition(this)
  }

  get categoryMap() {
    return formats.groupByCategory(this)
  }

  get values() {
    return formats.getFlattenedValues(this)
  }

  get colorPalettes() {
    return mapToJson(formats.groupByColorPalette(this))
  }

  get vars() {
    return formats.getVars(this)
  }

  getValue(path: string) {
    const result = this.values.get(path)
    if (result != null) {
      return Object.fromEntries(result)
    }
  }

  getTokenVar(path: string) {
    const json = mapToJson(this.values)
    return getDotPath(json, path)
  }
}
