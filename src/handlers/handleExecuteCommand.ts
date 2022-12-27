import { ExecuteCommandParams, MessageType, ShowMessageRequestParams, TextDocumentEdit, URI, WorkspaceEdit } from 'vscode-languageserver'
import { Context } from '../interfaces'

export interface DefineDataType {
 uri: URI
 varName: string
 dataType: string
}

export function getExecuteCommandHandler(context: Context) {
 return function handleExecuteCommand(params: ExecuteCommandParams): null {
  if (params.command === 'lsp.addVarToDefine' && params.arguments && params.arguments.length > 0) {
   const { uri, varName, dataType } = params.arguments[0] as DefineDataType
   context.connection.console.log(`uri: ${uri}`)
   context.connection.console.log(`varName: ${varName}`)
   context.connection.console.log(`dataType: ${dataType}`)

   // Check for Define Division
   const tree = context.trees[uri]
   const poweron = tree.getLanguage()
   let queryString = `(define_division) @div`
   let query = poweron.query(queryString)
   let line = -1
   let character = -1
   let defineDivFound = false
   query.captures(tree.rootNode).forEach(cap => {
    context.connection.console.log(`found define div`)
    defineDivFound = true
    line = cap.node.endPosition.row
    character = cap.node.endPosition.column
   })

   context.connection.console.log(`defineDivFound: ${defineDivFound}`)
   if (!defineDivFound) {
    alertUser(context, `Define Division not found in this specfile`, MessageType.Warning)
    return null
   }

   // Check to see if var is already Defined.
   queryString = `(variable_declaration (identifier) @var)`
   query = poweron.query(queryString)

   let varFound = false
   query.captures(tree.rootNode).forEach(cap => {
    if (cap.node.text.toLowerCase() === varName.toLowerCase()) {
     varFound = true
    }
   })

   if (varFound) {
    alertUser(context, `Variable: ${varName} is already defined`, MessageType.Warning)
    return null
   }


   // Create edit to apply
   const newLine = ` ${varName}=${dataType}\nEND`
   const result: WorkspaceEdit = {}
   const edit: TextDocumentEdit = {
    textDocument: {
     uri,
     version: null
    },
    edits: [{
     range: {
      start: {
       line,
       character: 0
      },
      end: {
       line,
       character
      }
     },
     newText: newLine
    }]
   }
   result.documentChanges = [edit]
   // send edit back to client to be applied.
   context.connection.sendRequest(`workspace/applyEdit`, { edit: result })
   return null
  }
  return null
 }
}


function alertUser(context: Context, message: string, type: MessageType) {
 const params: ShowMessageRequestParams = {
  type,
  message
 }
 context.connection.sendRequest('window/showMessageRequest', params)
}

