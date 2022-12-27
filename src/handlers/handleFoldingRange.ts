import { FoldingRange, FoldingRangeKind, FoldingRangeParams } from "vscode-languageserver"
import { Context } from '../interfaces'


export function getFoldingRangeHandler(context: Context) {
 return function hadleFoldingRange(params: FoldingRangeParams): FoldingRange[] | null {
  let result: FoldingRange[] | null = null
  let queryString = '(procedure_definition) @proc'
  const procedures = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, procedures)

  queryString = '(if_statement) @if'
  const ifStatement = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, ifStatement)


  queryString = '(if_statement_no_block) @if_statement_no_block'
  const ifStatementNoBlock = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, ifStatementNoBlock)

  queryString = '(if_statement_block) @if_statement_block'
  const ifStatementBlock = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, ifStatementBlock)

  queryString = '(if_else_no_block) @if_else_no_block'
  const ifElseNoBlock = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, ifElseNoBlock)

  queryString = '(if_else_block) @if_else_block'
  const ifElseBlock = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, ifElseBlock)

  queryString = '(else_if) @else_if'
  const elseIf = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, elseIf)

  queryString = '(while_statement) @while'
  const whileStatement = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, whileStatement)

  queryString = '(tranperform) @tran'
  const tranPerformStatement = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, tranPerformStatement)

  queryString = '(forrecordwith) @forrecordwith'
  const forRecordWith = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, forRecordWith)

  queryString = '(forrecord) @forrecord'
  const forRecord = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, forRecord)

  queryString = '(foreachdoend) @foreachdoend'
  const forEachDoEnd = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, forEachDoEnd)

  queryString = '(for_loop) @for_loop'
  const forLoop = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, forLoop)

  queryString = '(fmperform) @fmperform'
  const fmPerform = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, fmPerform)

  queryString = '(define_division) @define'
  const defineDiv = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, defineDiv)

  queryString = '(setup_division) @setup'
  const setupDiv = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, setupDiv)

  queryString = '(select_division) @select'
  const selectDiv = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, selectDiv)

  queryString = '(print_division) @print'
  const printDiv = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, printDiv)

  queryString = '(sort_division) @sort'
  const sortDiv = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, sortDiv)

  queryString = '(total_division) @total'
  const totalDiv = getFoldingRangeForQuery(queryString, context, params)
  result = addResults(result, totalDiv)

  return result
 }
}

function addResults(resultArr: FoldingRange[] | null, arrToAdd: FoldingRange[] | null): FoldingRange[] | null {
 if (arrToAdd) {
  if (resultArr) {
   resultArr = [...resultArr, ...arrToAdd]
  } else {
   resultArr = [...arrToAdd]
  }
 }

 return resultArr
}

function getFoldingRangeForQuery(queryString: string, context: Context, params: FoldingRangeParams): FoldingRange[] | null {
 let result: FoldingRange[] | null = null
 const uri = params.textDocument.uri
 const tree = context.trees[uri]
 const poweron = tree.getLanguage()
 const query = poweron.query(queryString)
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
