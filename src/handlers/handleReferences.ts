import { Location, ReferenceParams } from "vscode-languageserver"
import { nodeAtPoint } from "../analyze"
import { Context } from "../interfaces"
import { hasDefineDivision, isDefFile } from "../utils"

const PROC_TYPE = 'procedure'
const IDENT_TYPE = 'identifier'

export function getReferenceHandler(context: Context) {

  return function handleReferences(params: ReferenceParams): Location[] {
    let result: Location[] = []
    const queryString = '(identifier) @cap'
    let node = nodeAtPoint(params.position.line, params.position.character, params.textDocument.uri, context)
    if (isDefFile(params.textDocument.uri, context)) {
      node = nodeAtPoint(params.position.line + 1, params.position.character, params.textDocument.uri, context)
    }
    let type = IDENT_TYPE
    let refToFind = node?.text

    if (!node) return []

    if (node.type.toString() === 'identifier') {
      if (refToFind) {
        result = findReferences(queryString, refToFind, params.textDocument.uri, type, context)
      }
    } else if (node.type.toString() === 'variable_declaration') {
      type = IDENT_TYPE
      node = node.child(0)
      refToFind = node?.text
      if (refToFind) {
        result = findReferences(queryString, refToFind, params.textDocument.uri, type, context)
      }
    } else if (node.type.toString() == 'procedure_call') {
      type = PROC_TYPE
      node = node.child(0)
      refToFind = node?.text
      if (refToFind) {
        result = findReferences(queryString, refToFind, params.textDocument.uri, type, context)
      }
    }
    return result
  }
}

function findReferences(queryString: string, refToFind: string, curUri: string, type: string, context: Context): Location[] {
  let foundReferences: Location[] = []
  let hasDefineDiv = hasDefineDivision(curUri, context)

  if (hasDefineDiv) {
    foundReferences = getDefInCurrentFile(refToFind, curUri, context)
    if (foundReferences.length <= 0) {
      hasDefineDiv = false
    }
  }

  for (const [uri, tree] of Object.entries(context.trees)) {
    if ((!hasDefineDiv) || (hasDefineDiv && uri === curUri) || (type === PROC_TYPE)) {
      const poweron = tree.getLanguage()
      const query = poweron.query(queryString)
      let matches = 0
      query.captures(tree.rootNode).forEach(cap => {
        if (cap.node.text.toLowerCase() == refToFind.toLowerCase()) {
          let modifier = 0
          if (isDefFile(uri, context)) {
            modifier = -1
          }
          matches += 1
          const foundRef = {
            uri,
            range: {
              start: {
                line: cap.node.startPosition.row + modifier,
                character: cap.node.startPosition.column
              },
              end: {
                line: cap.node.startPosition.row + modifier,
                character: cap.node.startPosition.column
              }
            }
          }
          foundReferences.push(foundRef)
        }
      })

    }
  }
  return foundReferences
}

function getDefInCurrentFile(decToFind: string, curUri: string, context: Context): Location[] {
  const result: Location[] = []
  const tree = context.trees[curUri]
  const poweron = tree.getLanguage()
  const query = poweron.query('(variable_declaration (identifier) @dec)')
  query.captures(tree.rootNode).forEach(cap => {
    if (cap.node.text.toLowerCase() == decToFind.toLowerCase()) {
      const foundDec = {
        uri: curUri,
        range: {
          start: {
            line: cap.node.startPosition.row,
            character: cap.node.startPosition.column
          },
          end: {
            line: cap.node.startPosition.row,
            character: cap.node.startPosition.column
          }
        }
      }
      result.push(foundDec)
    }
  })
  return result
}
