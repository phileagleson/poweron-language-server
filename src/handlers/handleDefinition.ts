import { DefinitionParams, Location } from "vscode-languageserver"
import { nodeAtPoint } from "../analyze"
import { Context } from "../interfaces"
import { isDefFile } from "../utils"


export function getDefinitionHandler(context: Context) {

  return function handleDefinition(params: DefinitionParams): Location[] {
    let result: Location[] = []
    let nodeToFind = nodeAtPoint(params.position.line, params.position.character, params.textDocument.uri, context)
    if (isDefFile(params.textDocument.uri, context)) {
      nodeToFind = nodeAtPoint(params.position.line + 1, params.position.character, params.textDocument.uri, context)
    }
    let declarationToFind = nodeToFind?.text

    if (!nodeToFind || !declarationToFind) return []

    let queryString = ''
    if (nodeToFind.type.toString() == 'identifier') {
      if (nodeToFind.parent?.type.toString() === 'procedure_call') {
        queryString = '(procedure_definition (identifier) @dec)'
      } else {
        queryString = '(variable_declaration (identifier) @dec)'
      }
    } else if (nodeToFind.type.toString() === 'procedure_call') {
      queryString = '(procedure_definition (identifier) @dec)'
      const node = nodeToFind.child(0)
      if (node) {
        declarationToFind = node.text
      }
    } else if (nodeToFind.type.toString() == 'string_literal' && nodeToFind.parent?.type.toString() == 'include_statement') {
      const fileName = nodeToFind.text.substring(1, nodeToFind.text.length - 1)
      return findFile(fileName, context)
    }

    if (declarationToFind) {
      result = findDefinition(declarationToFind, queryString, context)
    }

    return result
  }

}

function findFile(fileName: string, context: Context): Location[] {
  const result: Location[] = []
  for (const [uri] of Object.entries(context.trees)) {
    if (uri.toLowerCase().includes(fileName.toLowerCase())) {
      const loc = {
        uri,
        range: {
          start: {
            line: 0,
            character: 0
          },
          end: {
            line: 0,
            character: 0
          }
        }
      }
      result.push(loc)
    }
  }

  return result
}

function findDefinition(declarationToFind: string, queryString: string, context: Context): Location[] {
  const foundDefs: Location[] = []

  for (const [curUri, tree] of Object.entries(context.trees)) {
    const lang = tree.getLanguage()
    const query = lang.query(queryString)
    query.captures(tree.rootNode).forEach((cap) => {
      if (cap.node.text.toLowerCase().trim() === declarationToFind.toLowerCase().trim()) {
        let modifier = 0
        if (isDefFile(curUri, context)) {
          modifier = -1
        }
        const foundDef = {
          uri: curUri,
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
        foundDefs.push(foundDef)
      }
    })

  }
  return foundDefs
}
