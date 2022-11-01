import { randomUUID } from "crypto"
import { MessageActionItem, MessageType, RenameParams, ShowMessageRequestParams, TextDocumentEdit, URI, WorkspaceEdit } from "vscode-languageserver"
import { nodeAtPoint } from "../analyze"
import { Context } from "../interfaces"
import { isDefFile, isRFile } from "../utils"

export function getRenameHandler(context: Context) {

  return async function handleRename(params: RenameParams): Promise<WorkspaceEdit | null> {
    let node = nodeAtPoint(params.position.line, params.position.character, params.textDocument.uri, context)
    if (isDefFile(params.textDocument.uri, context)) {
      node = nodeAtPoint(params.position.line + 1, params.position.character, params.textDocument.uri, context)
    }
    if (!node || node.type.toString() !== 'identifier') { // maybe handle string literals
      return null
    }

    const curName = node.text
    if (!curName) return null

    const inCurrentFile = definedInCurrentFile(params.textDocument.uri, curName, context)
    let response = null
    let accrossWorkspace = false
    if (!inCurrentFile) {
      response = await askUser(context)
      if (response && response.title.toLowerCase().includes('workspace')) {
        accrossWorkspace = true
      }
    }
    const result = renameSymbols(accrossWorkspace, curName, params.newName, params.textDocument.uri, context)
    return result
  }
}

function definedInCurrentFile(uri: URI, nameToFind: string, context: Context): boolean {
  if (isDefFile(uri, context)) return false

  const tree = context.trees[uri]
  const poweron = tree.getLanguage()
  const queryString = `(variable_declaration (identifier) @decl)`
  const query = poweron.query(queryString)
  let found = false
  query.captures(tree.rootNode).forEach(cap => {
    if (cap.node.text.toLowerCase() === nameToFind.toLowerCase()) {
      found = true
    }
  })

  return found
}

function renameSymbols(accrossWorkspace: boolean, curName: string, newName: string, uri: URI, context: Context): WorkspaceEdit | null {
  if (!accrossWorkspace) {
    const wsEdit: WorkspaceEdit = {}
    const textDocumentEdit: TextDocumentEdit = {
      textDocument: {
        uri,
        version: null,
      },
      edits: []
    }

    const tree = context.trees[uri]
    const poweron = tree.getLanguage()
    const queryString = `(identifier) @ident`
    const query = poweron.query(queryString)
    let modifier = 0
    if (isDefFile(uri, context)) {
      modifier = -1
    }
    query.captures(tree.rootNode).forEach(cap => {
      if (cap.node.text.toLowerCase() == curName.toLowerCase()) {
        textDocumentEdit.edits.push({
          range: {
            start: {
              line: cap.node.startPosition.row + modifier,
              character: cap.node.startPosition.column
            },
            end: {
              line: cap.node.endPosition.row + modifier,
              character: cap.node.endPosition.column
            }
          },
          newText: newName
        })
      }
    })
    wsEdit.documentChanges = [textDocumentEdit]
    return wsEdit
  } else {
    const changes: TextDocumentEdit[] = []
    const wsEdit: WorkspaceEdit = {
      documentChanges: changes
    }
    for (const [curUri, tree] of Object.entries(context.trees)) {
      if (!isRFile(curUri, context)) {

        const poweron = tree.getLanguage()
        const queryString = `(identifier) @ident`
        const query = poweron.query(queryString)
        const textDocumentEdit: TextDocumentEdit = {
          textDocument: {
            uri: curUri,
            version: +randomUUID(),
          },
          edits: []
        }
        let modifier = 0
        if (isDefFile(curUri, context)) {
          modifier = -1
        }
        query.captures(tree.rootNode).forEach(cap => {
          if (cap.node.text.toLowerCase() === curName.toLowerCase()) {
            textDocumentEdit.edits.push({
              range: {
                start: {
                  line: cap.node.startPosition.row + modifier,
                  character: cap.node.startPosition.column
                },
                end: {
                  line: cap.node.endPosition.row + modifier,
                  character: cap.node.endPosition.column
                }
              },
              newText: newName
            })
          }
        })
        if (textDocumentEdit.edits.length > 0) {
          changes.push(textDocumentEdit)
        }
      }
    }
    if (changes.length > 0) {
      return wsEdit
    }

  }
  return null
}

async function askUser(context: Context) {
  const params: ShowMessageRequestParams = {
    type: MessageType.Info,
    message: "This file only or accross workspace?",
    actions: [{ title: `This file only` }, { title: `Accross Workspace` }]
  }
  const response = await context.connection.sendRequest('window/showMessageRequest', params)
  if (response) {
    return response as MessageActionItem
  }
  return null
}
