import { accessSync, constants, readdirSync, readFileSync, statSync } from "fs"
import { TextDocument } from "vscode-languageserver-textdocument"
import { Context } from './interfaces'
import { isPoweronExtension } from "./utils"

export function readDocumentFromUrl(context: Context, url: URL): TextDocument | null {
  let content: string

  try {
    content = readFileSync(url, 'utf8')
  } catch (err) {
    const { message, name } = err as Error
    context.connection.console.error(`${name}: ${message}`)
    return null
  }

  return TextDocument.create(url.href, 'poweron', 0, content)
}

export function getPoweronFilesInDir(uri: string, context: Context): URL[] {
  const result: URL[] = []
  const url = new URL(uri)

  try {
    accessSync(url, constants.R_OK)
  } catch (_err) {
    return []
  }

  for (const dirent of readdirSync(url, { withFileTypes: true })) {
    if (isPoweronExtension(dirent.name, context)) {
      result.push(new URL(`${uri}/${dirent.name}`))
      continue
    }

    if (dirent.isDirectory()) {
      result.push(...getPoweronFilesInDir(`${uri}/${dirent.name}`, context))
    }
  }

  return result
}

export function isDir(uri: string): boolean {
  return statSync(new URL(uri)).isDirectory()
}
