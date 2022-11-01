import { CodeAction, CodeActionKind, CodeActionParams, Command, Range, TextDocumentEdit, URI, WorkspaceEdit } from 'vscode-languageserver'
import { Context } from '../interfaces'

export function getCodeActionHandler(context: Context) {
  
  return function handleCodeAction(params: CodeActionParams): Command[] | CodeAction[] | null {
    const actions: CodeAction[] = []
    const HTMLTITLE = `Wrap selection in HTMLVIEWLINE`
    const htmlEdit = wrapInHtmlViewLine(params.range, params.textDocument.uri, context)
    if (htmlEdit) {
      const wrapInHtml: CodeAction = {
        title: HTMLTITLE,
        kind: CodeActionKind.RefactorRewrite,
        edit: htmlEdit
      }
      
      actions.push(wrapInHtml)
    }
    return actions
  }
}

function wrapInHtmlViewLine(range: Range, uri: URI, context: Context): WorkspaceEdit | null {
  const result: WorkspaceEdit = {}
  const edit: TextDocumentEdit = {
    textDocument: {
      uri: uri,
      version: null
    },
    edits: []
  }
  const docText = context.trees[uri].rootNode.text
  const lines = docText.split('\n')
  const start = range.start.line
  const end = range.end.line
  for (let x = start; x <= end; x++) {
    const newLine = `HTMLVIEWLINE("${lines[x].trimEnd()}")`
    edit.edits.push({
      range: {
        start: {
          line: x,
          character: 0
        },
        end: {
          line: x,
          character: lines[x].length - 1
        }
      },
      newText: newLine
    })
  }
  if (edit.edits.length > 0) {
    result.documentChanges = [edit]
    return result
  }
  return null
}
