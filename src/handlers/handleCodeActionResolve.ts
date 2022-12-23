import { MessageActionItem, MessageType, RequestHandler, ShowMessageRequestParams, TextDocumentEdit, URI, WorkspaceEdit } from 'vscode-languageserver'
import { CodeAction } from 'vscode-languageserver-types'
import { Context } from '../interfaces'
import { DEFINETITLE } from './handleCodeAction'

export interface DefineDataType {
 uri: URI
 varName: string
}

export function getCodeActionResolveHandler(context: Context): RequestHandler<CodeAction, CodeAction, void> {
 return async function handleCodeActionResolve(params: CodeAction): Promise<CodeAction> {
  if (params.title && params.title === DEFINETITLE) {
   let res = await askUserWhichDataType(context)
   if (res) {
    // find define division if it exists
    let data = params.data as DefineDataType
    const tree = context.trees[data.uri]
    const poweron = tree.getLanguage()
    let queryString = `(define_division) @div`
    let query = poweron.query(queryString)
    let line = -1
    let character = -1
    let defineDivFound = false
    query.captures(tree.rootNode).forEach(cap => {
     defineDivFound = true
     line = cap.node.endPosition.row
     character = cap.node.endPosition.column
    })

    if (!defineDivFound) {
     alertUser(context, "Define Division NOT Found", MessageType.Error)
     return {
      title: params.title
     }
    }
    // check if var is already defined 
    queryString = `(variable_declaration (identifier) @var)`
    query = poweron.query(queryString)

    let varFound = false
    query.captures(tree.rootNode).forEach(cap => {
     if (cap.node.text.toLowerCase() === data.varName.toLowerCase()) {
      alertUser(context, `Variable: ${data.varName} is already defined`, MessageType.Warning)
      varFound = true
      return {
       title: params.title
      }
     }
    })

    if (!varFound && defineDivFound) {
     const newLine = ` ${data.varName}=${res.title}\nEND`
     const result: WorkspaceEdit = {}
     const edit: TextDocumentEdit = {
      textDocument: {
       uri: data.uri,
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
     return {
      title: params.title,
      edit: result
     }
    }
   }
  }
  return { title: '' }
 }

 function alertUser(context: Context, message: string, type: MessageType) {
  const params: ShowMessageRequestParams = {
   type,
   message
  }

  context.connection.sendRequest('window/showMessageRequest', params)
 }

 async function askUserWhichDataType(context: Context): Promise<MessageActionItem | null> {
  const params: ShowMessageRequestParams = {
   type: MessageType.Info,
   message: "Data Type?",
   actions: [
    { title: `CHARACTER` },
    { title: `CODE` },
    { title: `DATE` },
    { title: `FLOAT` },
    { title: `MONEY` },
    { title: `NUMBER` },
    { title: `RATE` },
   ]
  }
  const response = await context.connection.sendRequest('window/showMessageRequest', params)
  if (response) {
   return response as MessageActionItem
  }
  return null
 }
}
