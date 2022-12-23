import { CodeAction, CodeActionKind, CodeActionParams, Command, MessageActionItem, MessageType, Range, ShowMessageRequestParams, TextDocumentEdit, URI, WorkspaceEdit } from 'vscode-languageserver'
import { nodeAtPoint } from '../analyze'
import { Context } from '../interfaces'

export const DEFINETITLE = `Add Variable to DEFINE division`
export const HTMLTITLE = `Wrap selection in HTMLVIEWLINE`

export function getCodeActionHandler(context: Context) {

 return async function handleCodeAction(params: CodeActionParams): Promise<Command[] | CodeAction[] | null> {
  const actions: CodeAction[] = []
  const htmlEdit = wrapInHtmlViewLine(params.range, params.textDocument.uri, context)
  if (htmlEdit) {
   const wrapInHtml: CodeAction = {
    title: HTMLTITLE,
    kind: CodeActionKind.RefactorRewrite,
    edit: htmlEdit
   }

   actions.push(wrapInHtml)
  }

  const node = nodeAtPoint(params.range.start.line, params.range.start.character, params.textDocument.uri, context)
  if (node && node.type.toString() === `identifier` && node.parent && node.parent.type.toString() === 'assignment_expression') {
   const addToDefineAction: CodeAction = {
    title: DEFINETITLE,
    kind: CodeActionKind.RefactorRewrite,
    data: {
     uri: params.textDocument.uri,
     varName: node.text
    }
   }
   actions.push(addToDefineAction)
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
     character: lines[x].length
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

