import { PrepareRenameParams, Range } from "vscode-languageserver";
import { nodeAtPoint } from "../analyze";
import { Context } from '../interfaces'
import { isDefFile, isRFile } from "../utils";


export function getPrepareRenameHandler(context: Context) {
  return function handlePrepareRename(params: PrepareRenameParams): Range | null {
    const { position, textDocument } = params
    if (isRFile(textDocument.uri, context)) {
      context.connection.window.showErrorMessage(`Cannot perform rename in RD/RB files`)
      return null
    }

    let node = nodeAtPoint(position.line, position.character, textDocument.uri, context)
    let modifier = 0
    if (isDefFile(textDocument.uri, context)) {
      modifier = -1
      node = nodeAtPoint(position.line - 1, position.character, textDocument.uri, context)
    }
    if (!node || node.text === '' || node.type.toString() !== 'identifier') return null


    return Range.create(
      {
        line: node.startPosition.row + modifier,
        character: node.startPosition.column
      },
      {
        line: node.endPosition.row + modifier,
        character: node.endPosition.column
      }
    )
  }
}
