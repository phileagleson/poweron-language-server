import { extname } from "path"
import { URI } from "vscode-languageserver/node"
import { Context } from "./interfaces"

export function isPoweronExtension(path: URI | string, _context: Context): boolean {
  const ext = extname(path).toLowerCase()
  const prefixIdx = path.toString().indexOf('.')
  const prefix = path.toString().substring(0, prefixIdx).toLowerCase()

  let matchFound = false
  const def = /.def/
  const set = /.set/
  const fmp = /.fmp/
  const pro = /.pro/
  const sub = /.sub/
  const xxx = /{\d}{\d}{\d}/

  if (def.test(ext)) {
    matchFound = true
  } else if (set.test(ext)) {
    matchFound = true
  } else if (fmp.test(ext)) {
    matchFound = true
  } else if (pro.test(ext)) {
    matchFound = true
  } else if (sub.test(ext)) {
    matchFound = true
  } else if (xxx.test(ext)) {
    matchFound = true
  } else if (prefix === 'ela' || prefix === 'ear' || prefix === 'ema') {
    matchFound = true
  }

  return matchFound

}

export function isDefFile(uri: URI | string, _context: Context): boolean {
  const def = /.def/
  return def.test(uri.toLowerCase())
}

export function isRFile(uri: URI | string, _context: Context): boolean {
  const prefix = uri.substring(uri.lastIndexOf('/') + 1, uri.lastIndexOf('/') + 3)

  switch (prefix.toLowerCase()) {
    case 'rd':
    case 'rb':
      return true
    default:
      return false
  }
}

export function hasDefineDivision(uri: URI | string, context: Context): boolean {
  let hasDefineDiv = false
  if (!isDefFile(uri, context)) {
    const tree = context.trees[uri]
    const poweron = tree.getLanguage()
    const query = poweron.query('(define_division) @def')
    if (query.captures(tree.rootNode).length > 0) {
      hasDefineDiv = true
    }
  }
  return hasDefineDiv
}

export const CODESTART = "```poweron"
export const CODEEND = "```"
