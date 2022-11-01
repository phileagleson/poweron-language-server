import { DocumentUri, TextDocument } from "vscode-languageserver-textdocument"
import Parser, { Point, Tree } from "web-tree-sitter"
import { Context } from './interfaces'


export function analyze(
  context: Context,
  document: TextDocument,
): {
  tree: Tree
  document: TextDocument
} {

  let tree: Tree

  if (document.uri.toLowerCase().includes('.def')) {
    tree = context.parser.parse(`DEFINE\n${document.getText()}\nEND`)
  } else {
    tree = context.parser.parse(document.getText())
  }

  return {
    tree,
    document
  }

}

export function wordAtPoint(row: number, col: number, uri: DocumentUri, context: Context): string | null {
  const node = nodeAtPoint(row, col, uri, context)
  const word = node?.text
  if (word) {
    return word
  } else {
    return null
  }
}

export function nodeAtPoint(row: number, col: number, uri: DocumentUri, context: Context): Parser.SyntaxNode | null {
  let p: Point = { row: 0, column: 0 }
  let tree = context.trees[uri.toString()]
  p.row = row
  p.column = col
  const node = tree.rootNode.namedDescendantForPosition(p)
  return node
}
