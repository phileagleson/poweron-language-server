import { ClientCapabilities, Connection, SymbolInformation, TextDocuments } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import * as Parser from 'web-tree-sitter'
import { Tree } from "web-tree-sitter";

type SymbolName = string

export type SymbolsMap = Map<SymbolName, SymbolInformation>

export interface TreesByUri {
  [uri: string]: Tree
}

export interface SymbolsByUri {
  [uri: string]: SymbolsMap
}

export interface Context {
  connection: Connection
  documents: TextDocuments<TextDocument>
  capabilities: ClientCapabilities
  parser: Parser
  trees: TreesByUri
  symbols: SymbolsByUri
  commonFilesDirectory?: string
}
