#!/usr/bin/env node

import {
 createConnection,
 TextDocuments,
 ProposedFeatures,
} from 'vscode-languageserver/node'

import {
 TextDocument
} from 'vscode-languageserver-textdocument'

import { getInitializeHandler } from './handlers/handleInitialize'
import { Context } from './interfaces'
import { getInitializedHandler } from './handlers/handleInitialized'
import { getCompletionHandler } from './handlers/handleCompletion'
import { getDidChangeContentHandler } from './handlers/handleDidChangeContent'
import { getDefinitionHandler } from './handlers/handleDefinition'
import { getReferenceHandler } from './handlers//handleReferences'
import { getHoverHandler } from './handlers/handleHover'
import { getCodeActionHandler } from './handlers/handleCodeAction'
import { getPrepareRenameHandler } from './handlers/handlePrepareRename'
import { getRenameHandler } from './handlers/handleRename'
import { getChangeConfigurationHandler } from './handlers/handleChangeConfiguration'
import { getCreateFliesHandler } from './handlers/handleCreateFiles'
import { getWillDeleteFilesHandler, getDidDeletFilesHandler } from './handlers/handleDeleteFiles'
import { getRenameFilesHandler } from './handlers/handleRenameFiles'
import { getExecuteCommandHandler } from './handlers/handleExecuteCommand'


const context = {
 connection:
  require.main === module
   ? createConnection(ProposedFeatures.all)
   : createConnection(process.stdin, process.stdout),
 documents: new TextDocuments(TextDocument),
 capabilities: {},
 parser: {},
 trees: {},
 symbols: {},

} as Context

function registerHandlers() {
 const { connection, documents } = context

 const handleInitialize = getInitializeHandler(context)
 const handleInitialized = getInitializedHandler(context)
 const handleCreateFiles = getCreateFliesHandler(context)
 const handleDidChangeContent = getDidChangeContentHandler(context)
 const handleCompletion = getCompletionHandler(context)
 const handleDefinition = getDefinitionHandler(context)
 const handleReferences = getReferenceHandler(context)
 const handleHover = getHoverHandler(context)
 const handleCodeAction = getCodeActionHandler(context)
 const handlePrepareRename = getPrepareRenameHandler(context)
 const handleRename = getRenameHandler(context)
 const handleChangeConfiguration = getChangeConfigurationHandler(context)
 const handleWillDeleteFiles = getWillDeleteFilesHandler(context)
 const handleDidDeleteFiles = getDidDeletFilesHandler(context)
 const handleRenameFiles = getRenameFilesHandler(context)
 const handleExecuteCommand = getExecuteCommandHandler(context)

 connection.onInitialize(handleInitialize)
 connection.onInitialized(handleInitialized)
 documents.onDidChangeContent(handleDidChangeContent)
 connection.onCompletion(handleCompletion)
 connection.onDefinition(handleDefinition)
 connection.onReferences(handleReferences)
 connection.onHover(handleHover)
 connection.onCodeAction(handleCodeAction)
 connection.onPrepareRename(handlePrepareRename)
 connection.onRenameRequest(handleRename)
 connection.onDidChangeConfiguration(handleChangeConfiguration)


 connection.workspace.onDidCreateFiles(handleCreateFiles)
 connection.workspace.onWillDeleteFiles(handleWillDeleteFiles)
 connection.workspace.onDidDeleteFiles(handleDidDeleteFiles)
 connection.workspace.onDidRenameFiles(handleRenameFiles)
 connection.onExecuteCommand(handleExecuteCommand)
}

export function main() {
 const { documents, connection } = context

 registerHandlers()
 documents.listen(connection)
 connection.listen()
}

if (require.main === module) main()

