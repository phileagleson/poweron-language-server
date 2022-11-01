import { TextDocument } from 'vscode-languageserver-textdocument'
import { TextDocumentChangeEvent } from "vscode-languageserver"
import { Context } from '../interfaces'
import { analyze } from '../analyze'


export function getDidChangeContentHandler(context: Context) {
  const { trees } = context

  return function handleDidChangeContent(
    change: TextDocumentChangeEvent<TextDocument>
  ): void {
    const results = analyze(context, change.document)
    trees[change.document.uri] = results.tree
  }
}

