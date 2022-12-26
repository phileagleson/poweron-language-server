import { DocumentSymbol, DocumentSymbolParams, SymbolKind, Range } from "vscode-languageserver";
import { Context } from '../interfaces'

export function getDocumentSymbolHandler(context: Context) {
 return function handleDocumentSymbols(params: DocumentSymbolParams): DocumentSymbol[] | null {
  let result: DocumentSymbol[] | null = null
  let uri = params.textDocument.uri
  const tree = context.trees[uri]
  const poweron = tree.getLanguage()
  let queryString = '(variable_declaration (identifier) @var)'
  let query = poweron.query(queryString)
  query.captures(tree.rootNode).forEach(cap => {
   let range: Range = {
    start: {
     line: cap.node.startPosition.row,
     character: cap.node.startPosition.column
    },
    end: {
     line: cap.node.endPosition.row,
     character: cap.node.endPosition.column
    }
   }

   let parentRange: Range = {
    start: {
     line: cap.node.parent!.startPosition.row,
     character: cap.node.parent!.startPosition.column
    },
    end: {
     line: cap.node.parent!.endPosition.row,
     character: cap.node.parent!.endPosition.column
    }
   }

   let ds: DocumentSymbol = {
    name: `${cap.node.text}`,
    detail: `${cap.node.parent!.text}`,
    kind: SymbolKind.Variable,
    range: parentRange,
    selectionRange: range
   }
   if (result) {
    result.push(ds)
   } else {
    result = [ds]
   }
  })

  queryString = '(procedure_definition (identifier) @proc)'
  query = poweron.query(queryString)
  query.captures(tree.rootNode).forEach(cap => {
   let range: Range = {
    start: {
     line: cap.node.startPosition.row,
     character: cap.node.startPosition.column
    },
    end: {
     line: cap.node.endPosition.row,
     character: cap.node.endPosition.column
    }
   }

   let parentRange: Range = {
    start: {
     line: cap.node.parent!.startPosition.row,
     character: cap.node.parent!.startPosition.column
    },
    end: {
     line: cap.node.parent!.endPosition.row,
     character: cap.node.parent!.endPosition.column
    }
   }

   let ds: DocumentSymbol = {
    name: `PROCEDURE ${cap.node.text}`,
    detail: `${cap.node.parent!.text}`,
    kind: SymbolKind.Function,
    range: parentRange,
    selectionRange: range
   }
   if (result) {
    result.push(ds)
   } else {
    result = [ds]
   }
  })
  return result
 }
}
