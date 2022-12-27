import { FileOperationFilter } from 'vscode-languageserver-protocol/lib/common/protocol.fileOperations'
import { CancellationToken, InitializeParams, InitializeResult, TextDocumentSyncKind, WorkDoneProgressReporter } from "vscode-languageserver";
import { Context } from "../interfaces";
import { initializeParser } from "../parser";

const fileOperationFilter: FileOperationFilter = {
 pattern: {
  glob: '**/*.{git}',
  options: { ignoreCase: true },
 }
}

const folderOperationFilter: FileOperationFilter = {
 pattern: {
  glob: '**/*'
 }
}

export function getInitializeHandler(context: Context) {

 return async function handleInitialize(
  params: InitializeParams,
  _cancel: CancellationToken,
  progressReporter: WorkDoneProgressReporter,
 ): Promise<InitializeResult> {
  progressReporter.begin('Initializing')

  const parser = await initializeParser()

  context.capabilities = params.capabilities
  context.parser = parser

  const result: InitializeResult = {
   capabilities: {
    textDocumentSync: TextDocumentSyncKind.Full,
    completionProvider: {
     resolveProvider: false,
     triggerCharacters: [':', '=', '@'],
    },
    definitionProvider: true,
    codeActionProvider: {
     resolveProvider: false
    },
    documentHighlightProvider: false,
    documentSymbolProvider: true,
    workspaceSymbolProvider: false,
    foldingRangeProvider: true,
    selectionRangeProvider: true,
    executeCommandProvider: {
     commands: ["lsp.addVarToDefine"]
    },
    referencesProvider: true,
    hoverProvider: true,
    renameProvider: { prepareProvider: false },
    documentFormattingProvider: false,
    workspace: {
     fileOperations: {
      willDelete: {
       filters: [fileOperationFilter, folderOperationFilter]
      },
      didDelete: {
       filters: [fileOperationFilter, folderOperationFilter]
      },
      didCreate: {
       filters: [fileOperationFilter]
      },
      didRename: {
       filters: [fileOperationFilter, folderOperationFilter]
      },
     }
    }
   }
  }

  progressReporter.done()
  return result
 }
}

