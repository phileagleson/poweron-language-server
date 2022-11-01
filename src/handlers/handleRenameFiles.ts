import { basename } from 'path'
import { FileRename, RenameFilesParams } from 'vscode-languageserver/node'
import { Context } from '../interfaces'
import { getPoweronFilesInDir, isDir } from '../io'
import { isPoweronExtension } from '../utils'

export function adaptFolderRenames(files: FileRename[], context: Context): FileRename[] {
  return (
    files
      .flatMap(({ oldUri, newUri }) => {
        // newUri because handling DidRename
        if (isDir(newUri)) {
          return getPoweronFilesInDir(newUri, context).map((fileUrl) => {
            const separator = oldUri.endsWith('/') ? '' : '/'
            return {
              oldUri: oldUri + separator + basename(fileUrl.toString()),
              newUri: fileUrl.toString(),
            }
          })
        }

        return { oldUri, newUri }
      })
      .filter(({ newUri }) => isPoweronExtension(newUri, context))
  )
}

export function getRenameFilesHandler(context: Context) {
  const { trees } = context

  return function handleRenameFiles(params: RenameFilesParams): void {
    const fileRenames = adaptFolderRenames(params.files, context)

    for (const file of fileRenames) {
      trees[file.newUri] = trees[file.oldUri]
      delete trees[file.oldUri]
    }
  }
}
