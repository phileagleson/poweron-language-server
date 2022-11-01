import { CreateFilesParams } from "vscode-languageserver";
import { analyze } from "../analyze";
import { Context } from "../interfaces";
import { readDocumentFromUrl } from "../io";

export function getCreateFliesHandler(context: Context) {

  return function handleCreateFlies(params: CreateFilesParams): void {
    for (const file of params.files) {
      const textDocument = readDocumentFromUrl(context, new URL(file.uri))

      if (!textDocument) {
        context.connection.window.showWarningMessage(
          `Could not read ${file.uri}. Analyzing is skipped.`
        )

        return
      }

      const results = analyze(context, textDocument)
      context.trees[file.uri] = results.tree
    }
  }
}
