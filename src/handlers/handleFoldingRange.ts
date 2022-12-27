import { FoldingRange, FoldingRangeKind, FoldingRangeParams } from "vscode-languageserver"
import { Context } from '../interfaces'


export function getFoldingRangeHandler(context: Context) {
 return function hadleFoldingRange(params: FoldingRangeParams): FoldingRange[] | null {
  let result: FoldingRange[] | null = null
  let uri = params.textDocument.uri
  const tree = context.trees[uri]
  const poweron = tree.getLanguage()
  let queryString = '(procedure_definition) @proc'
  let query = poweron.query(queryString)
  query.captures(tree.rootNode).forEach(cap => {
   const fr: FoldingRange = {
    startLine: cap.node.startPosition.row,
    startCharacter: cap.node.startPosition.column,
    endLine: cap.node.endPosition.row,
    endCharacter: cap.node.endPosition.column,
    kind: FoldingRangeKind.Region,
   }
   if (result) {
    result.push(fr)
   } else {
    result = [fr]
   }
  })
  return result
 }
}
