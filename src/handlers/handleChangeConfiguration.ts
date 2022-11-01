import { DidChangeConfigurationParams, WorkspaceFolder } from 'vscode-languageserver'
import { analyze } from '../analyze'
import { Context } from '../interfaces'
import { getPoweronFilesInDir, readDocumentFromUrl } from '../io'

const COMMONFILES = 'commonFilesDirectory'

export function getChangeConfigurationHandler(context: Context) {

  return async function handleChangeConfiguration(params: DidChangeConfigurationParams) {
    if (params.settings[COMMONFILES]) {
      context.commonFilesDirectory = params.settings[COMMONFILES]
    }

    if (context.commonFilesDirectory && context.commonFilesDirectory != '') {
      let uri = ''
      if (context.commonFilesDirectory.includes('\\')) {
        uri = `file:///${context.commonFilesDirectory.replace(/\\/g, '/')}`
      } else {
        uri = `file://${context.commonFilesDirectory}`
      }
      const sep = uri.endsWith('/') ? '' : '/'
      uri += sep
      const commonFolder: WorkspaceFolder = {
        uri,
        name: uri.substring(uri.lastIndexOf('/') + 1)
      }
      const urls: URL[] = getPoweronFilesInDir(commonFolder.uri, context)

      for (const url of urls) {
        if (!context.trees[url.href]) {
          const document = readDocumentFromUrl(context, url)


          if (!document) continue
          const {
            tree,
          } = analyze(context, document)

          context.trees[url.href] = tree
        }
      }
    }
  }
}


