import { WorkspaceFolder } from "vscode-languageserver"
import { analyze } from "../analyze"
import { Context } from "../interfaces"
import { getPoweronFilesInDir, readDocumentFromUrl } from "../io"

const COMMONFILES = 'commonFilesDirectory'
const section = 'indexoutofbounds.poweron-vscode'

export function getInitializedHandler(context: Context) {
  const { trees, } = context

  async function index(workspaceFolders: WorkspaceFolder[]) {
    await getConfig(context)
    if (context.commonFilesDirectory && context.commonFilesDirectory != '') {
      let uri = ''
      if (context.commonFilesDirectory.includes('\\')) {
        uri = `file:///${context.commonFilesDirectory.replace(/\\/g, '/')}`
      } else {
        uri = `file://${context.commonFilesDirectory}`
      }
      const sep = uri.endsWith('/') ? '' : '/'
      uri += sep
      let commonFolder: WorkspaceFolder = {
        uri,
        name: uri.substring(uri.lastIndexOf('/') + 1)
      }
      workspaceFolders.push(commonFolder)
    }
    const urls: URL[] = workspaceFolders.flatMap((folder) => getPoweronFilesInDir(folder.uri, context))
    for (const url of urls) {
      const document = readDocumentFromUrl(context, url)


      if (!document) continue
      const {
        tree,
      } = analyze(context, document)

      trees[url.href] = tree
    }
  }

  return async function handleInitialized() {
    const progressReporter = await context.connection.window.createWorkDoneProgress()
    const workspaceFolders =
      (await context.connection.workspace.getWorkspaceFolders()) ?? []
    progressReporter.begin('Indexing')
    index(workspaceFolders)
    progressReporter.done()
  }
}

async function getConfig(context: Context) {
  try {
    const result = await context.connection.workspace.getConfiguration({
      section
    })
    if (result[COMMONFILES]) {
      context.commonFilesDirectory = result[COMMONFILES]
    }
  } catch (err) {
    return
  }
}
