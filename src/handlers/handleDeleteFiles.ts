import { DeleteFilesParams, FileDelete, URI } from "vscode-languageserver";
import { Context } from "../interfaces";
import { getPoweronFilesInDir, isDir } from "../io";
import { isPoweronExtension } from "../utils";


const fileDeleteMap: Map<URI, Set<FileDelete>> = new Map()

export function getWillDeleteFilesHandler(context: Context) {

  return function handleWillDeleteFiles(params: DeleteFilesParams): null {
    for (const { uri } of params.files) {
      if (!fileDeleteMap.has(uri)) fileDeleteMap.set(uri, new Set())

      if (isDir(uri)) {
        for (const url of getPoweronFilesInDir(uri, context)) {
          fileDeleteMap.get(uri)!.add({ uri: url.toString() })
        }

        continue
      }

      if (!isPoweronExtension(uri, context)) continue

      fileDeleteMap.get(uri)!.add({ uri })
    }
    return null
  }
}


export function getDidDeletFilesHandler(context: Context) {

  return function handleDidDeleteFiles(params: DeleteFilesParams): void {
    for (const { uri } of params.files) {
      if (!fileDeleteMap.has(uri)) continue

      for (const fileDelete of fileDeleteMap.get(uri)!) {

        delete context.trees[fileDelete.uri]

      }
      fileDeleteMap.delete(uri)
    }
  }
}
