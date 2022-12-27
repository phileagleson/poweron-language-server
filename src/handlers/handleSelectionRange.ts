
import { SelectionRange, SelectionRangeParams } from 'vscode-languageserver'
import { nodeAtPoint } from '../analyze'
import { Context } from '../interfaces'


export function getSelectionRangeHandler(context: Context) {
 return function handleSelectionRange(params: SelectionRangeParams): SelectionRange[] | null {
  const result = getSelectionRange(context, params)

  return result
 }
}

function getSelectionRange(context: Context, params: SelectionRangeParams): SelectionRange[] | null {
 let result: SelectionRange[] | null = null
 params.positions.forEach(pos => {
  const curNode = nodeAtPoint(pos.line, pos.character, params.textDocument.uri, context)
  const parentNode = curNode?.parent
  const parentParentNode = curNode?.parent?.parent

  if (!curNode) {
   return null
  }

  let parentRange: SelectionRange | null = null
  if (parentNode) {
   parentRange = {
    range: {
     start: {
      line: parentNode.startPosition.row,
      character: parentNode.startPosition.column
     },
     end: {
      line: parentNode.endPosition.row,
      character: parentNode.endPosition.column
     }
    },
   }
  }

  let parentParentRange: SelectionRange | null = null
  if (parentParentNode) {
   parentParentRange = {
    range: {
     start: {
      line: parentParentNode.startPosition.row,
      character: parentParentNode.startPosition.column
     },
     end: {
      line: parentParentNode.endPosition.row,
      character: parentParentNode.endPosition.column
     }
    },
   }
  }

  const sr: SelectionRange = {
   range: {
    start: {
     line: curNode.startPosition.row,
     character: curNode.startPosition.column
    },
    end: {
     line: curNode.endPosition.row,
     character: curNode.endPosition.column
    }
   },
  }
  if (parentRange) {
   sr.parent = parentRange
  }
  if (sr.parent && parentParentRange) {
   sr.parent.parent = parentParentRange
  }
  if (result) {
   result.push(sr)
  } else {
   result = [sr]
  }
 })

 return result
}
