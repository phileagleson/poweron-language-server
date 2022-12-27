import { CompletionItem, CompletionItemKind, CompletionParams, InsertTextFormat } from "vscode-languageserver"
import { Context } from "../interfaces"

import dataTypesJson = require('../completions/dataTypes.json')
import poweronFunctionsJson = require('../completions/poweronFunctions.json')
import accountFileRecordsJson = require('../completions/accountFileRecords.json')
import acctRecordJson = require('../completions/accountRecordFields.json')
import fmHistoryJson = require('../completions/fmHistoryFields.json')
import nameRecordFieldsJson = require('../completions/nameRecordFields.json')
import lookupRecrodFieldsJson = require('../completions/lookupRecordFields.json')
import commentRecordFieldsJson = require('../completions/commentRecordFields.json')
import householdRecordFieldJson = require('../completions/householdRecordFields.json')
import prefeferenceRecordFieldJson = require('../completions/preferenceRecordFields.json')
import trackingRecordFieldsJson = require('../completions/trackingRecordFields.json')
import noteRecordFieldsJson = require('../completions/noteRecordFields.json')
import shareRecordFieldsJson = require('../completions/shareRecordFields.json')
import holdRecordFieldsJson = require('../completions/holdRecordFields.json')
import transferRecordFieldsJson = require('../completions/transferRecordFields.json')
import checkOrderRecordFieldsJson = require('../completions/checkOrderRecordFields.json')
import transactionRecordFieldsJson = require('../completions/transactionRecordFields.json')
import shareAnalysisGroupRecordFieldsJson = require('../completions/shareAnalysisGroupRecordFields.json')
import shareAnalysisPlanRecordFieldsJson = require('../completions/shareAnalysisPlanRecordFields.json')
import irsDistributionRecordFieldsJson = require('../completions/irsDistributionRecordFields.json')
import pledgeRecordFieldsJson = require('../completions/pledgeRecordFields.json')
import escrowAnalysisRecordFieldsJson = require('../completions/escrowAnalysisRecordFields.json')
import escrowRecordFieldsJson = require('../completions/escrowRecordFields.json')
import scheduleRecordFieldsJson = require('../completions/scheduleRecordFields.json')
import segmentRecordFieldsJson = require('../completions/segmentRecordFields.json')
import rateChangeRecordFieldsJson = require('../completions/rateChangeRecordFields.json')
import loanBankruptcyRecordFieldsJson = require('../completions/loanBankruptcyRecordFields.json')
import loanBankruptcyPrePetitionBalanceRecordFieldsJson = require('../completions/loanBankruptcyPrePetitionBalanceRecordFields.json')
import eftRecordFieldsJson = require('../completions/eftRecordFields.json')
import eftAddendaInfoRecordFieldsJson = require('../completions/eftAddendaInfoRecordFields.json')
import externalLoanRecordFieldsJson = require('../completions/externalLoanRecordFields.json')
import cardRecordFieldsJson = require('../completions/cardRecordFields.json')
import accessRecordFieldsJson = require('../completions/accessRecordFields.json')
import loanAppRecordFieldsJson = require('../completions/loanAppRecordFields.json')
import loanAppPersonRecordFieldsJson = require('../completions/loanAppPersonRecordFields.json')
import loanAppFinanceRecordFieldsJson = require('../completions/loanAppFinanceRecordFields.json')
import cpWorkCardRecordFieldsJson = require('../completions/cpWorkCardRecordFields.json')
import cpWorkCardTrackingRecordFieldsJson = require('../completions/cpWorkCardTrackingRecordFields.json')
import creditReportRecordFieldsJson = require('../completions/creditReportRecordFields.json')
import creditReportItemRecordFieldsJson = require('../completions/creditReportItemRecordFields.json')
import portfolioRecordFieldsJson = require('../completions/portfolioRecordFields.json')
import portfolioTrackingRecordFieldsJson = require('../completions/portfolioTrackingRecordFields.json')
import siteRecordFieldsJson = require('../completions/siteRecordFields.json')
import siteCashOrderTypeRecordFieldsJson = require('../completions/siteCashOrderTypeRecordFields.json')
import externalAccountRecordFieldsJson = require('../completions/externalAccountRecordFields.json')
import batchACHOriginationRecordFieldsJson = require('../completions/batchACHOriginationRecordFields.json')
import loanRecordFieldsJson = require('../completions/loanRecordFields.json')

import snippetJson = require('../completions/snippets.json')
import { nodeAtPoint, wordAtPoint } from "../analyze"

interface JSONData {
 label: string
 insertText: string
 description: string
}

export function getCompletionHandler(context: Context) {

 const dataTypes = loadCompletionItems(dataTypesJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const poweronFunctions = loadCompletionItems(poweronFunctionsJson, CompletionItemKind.Function, InsertTextFormat.Snippet)
 const acctFileRecords = loadCompletionItems(accountFileRecordsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const acctFields = loadCompletionItems(acctRecordJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const fmHistoryFields = loadCompletionItems(fmHistoryJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const nameRecordFields = loadCompletionItems(nameRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const lookupRecordFields = loadCompletionItems(lookupRecrodFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const commentRecordFields = loadCompletionItems(commentRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const householdRecordFields = loadCompletionItems(householdRecordFieldJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const preferenceRecordFields = loadCompletionItems(prefeferenceRecordFieldJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const trackingRecordFields = loadCompletionItems(trackingRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const noteRecordFields = loadCompletionItems(noteRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const shareRecordFields = loadCompletionItems(shareRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const holdRecordFields = loadCompletionItems(holdRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const transferRecordFields = loadCompletionItems(transferRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const checkOrderRecordFields = loadCompletionItems(checkOrderRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const transactionRecordFields = loadCompletionItems(transactionRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const shareAnalysisGroupRecordFields = loadCompletionItems(shareAnalysisGroupRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const shareAnalysisPlanRecordFields = loadCompletionItems(shareAnalysisPlanRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const irsDistributionRecordFields = loadCompletionItems(irsDistributionRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const pledgeRecordFields = loadCompletionItems(pledgeRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const escrowAnalysisRecordFields = loadCompletionItems(escrowAnalysisRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const escrowRecordFields = loadCompletionItems(escrowRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const scheduleRecordFields = loadCompletionItems(scheduleRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const segmentRecordFields = loadCompletionItems(segmentRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const rateChangeRecordFields = loadCompletionItems(rateChangeRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const loanBankruptcyRecordFields = loadCompletionItems(loanBankruptcyRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const loanBankruptcyPrePetitionBalanceRecordFields = loadCompletionItems(loanBankruptcyPrePetitionBalanceRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const eftRecordFields = loadCompletionItems(eftRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const eftAddendaInfoRecordFields = loadCompletionItems(eftAddendaInfoRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const externalLoanRecordFields = loadCompletionItems(externalLoanRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const cardRecordFields = loadCompletionItems(cardRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const accessRecordFields = loadCompletionItems(accessRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const loanAppRecordFields = loadCompletionItems(loanAppRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const loanAppPersonRecordFields = loadCompletionItems(loanAppPersonRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const loanAppFinanceRecordFields = loadCompletionItems(loanAppFinanceRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const cpWorkCardRecordFields = loadCompletionItems(cpWorkCardRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const cpWorkCardTrackingRecordFields = loadCompletionItems(cpWorkCardTrackingRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const creditReportRecordFields = loadCompletionItems(creditReportRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const creditReportItemRecordFields = loadCompletionItems(creditReportItemRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const portfolioRecordFields = loadCompletionItems(portfolioRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const portfolioTrackingRecordFields = loadCompletionItems(portfolioTrackingRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const siteRecordFields = loadCompletionItems(siteRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const siteCashOrderTypeRecordFields = loadCompletionItems(siteCashOrderTypeRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const externalAccountRecordFields = loadCompletionItems(externalAccountRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const batchACHOriginationRecordFields = loadCompletionItems(batchACHOriginationRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)
 const loanRecordFields = loadCompletionItems(loanRecordFieldsJson, CompletionItemKind.Field, InsertTextFormat.PlainText)

 const snippets = loadCompletionItems(snippetJson, CompletionItemKind.Snippet, InsertTextFormat.Snippet)

 return function handleCompletion(params: CompletionParams): CompletionItem[] {
  const defaultCompletions = [...poweronFunctions, ...snippets, ...acctFileRecords]

  let triggerCharacter = params.context?.triggerCharacter
  let recordType = ''

  if (!triggerCharacter) {
   let word = wordAtPoint(params.position.line, params.position.character, params.textDocument.uri, context)
   const node = nodeAtPoint(params.position.line, params.position.character - 1, params.textDocument.uri, context)
   if (node && node.type.toString() === 'identifier' && node.parent && node.parent.type === 'variable_declaration') {
    return dataTypes
   } else if (node && node.parent && (node.parent.type.toString() === `fmperform` ||
    node.parent.type.toString() === 'setexp' ||
    node.parent.parent?.type.toString() === 'setexp')) {
    const tree = context.trees[params.textDocument.uri]
    const poweron = tree.getLanguage()
    const queryString = '(record_type)@type'
    const query = poweron.query(queryString)
    let nodeToQuery = node
    /* 
      After typing 'SET' treeitter will be in an error state. We need to get the last record_type in the 
      fmperform statement to see which fields to return
     */
    if (node.parent.type.toString() === 'fmperform') {
     nodeToQuery = node.parent
    } else if (node.parent.parent?.type.toString() === 'fmperform') {
     nodeToQuery = node.parent.parent
    } else if (node.parent.parent?.parent?.type.toString() === 'fmperform') {
     nodeToQuery = node.parent.parent.parent
    }
    query.captures(nodeToQuery).forEach(cap => {
     recordType = cap.node.text.toLowerCase()
    })
    // clear out word so the for each block isn't triggered and 
    // set the trigger char to : so we can return the propper record type info without duplicating code
    if (recordType) {
     triggerCharacter = ':'
     word = ''
    }
   }

   if (word) {
    switch (word) {
     case 'each':
      return acctFileRecords
     default:
      break
    }
   }
  }

  if (triggerCharacter == ':') {
   let word: string | null = ''
   let node = nodeAtPoint(params.position.line, params.position.character - 1, params.textDocument.uri, context)
   if (node && node.type.toString() === 'database_field') {
    if (node.firstChild && node.firstChild.type.toString() === 'record_type') {
     node = node.firstChild
     word = node.text
    }
   } else {
    word = wordAtPoint(params.position.line, params.position.character, params.textDocument.uri, context)
   }
   // if we set the recordType as part of the fmperform logic, update 'word' here to the correct value
   if (recordType) word = recordType
   if (word) {
    word = word.split(':')[0]
    switch (word.toLowerCase()) {
     case 'account':
      return acctFields
     case 'fmhistory':
      return fmHistoryFields
     case 'name':
     case 'share name':
     case 'irs name':
     case 'loan name':
     case 'loan pledge name':
     case 'eft name':
     case 'card name':
     case 'externalloan name':
      return nameRecordFields
     case 'lookup':
      return lookupRecordFields
     case 'comment':
      return commentRecordFields
     case 'household':
      return householdRecordFields
     case 'preference':
      return preferenceRecordFields
     case 'tracking':
     case 'externalloan tracking': //TODO: check if any fields are different
     case 'share tracking':
     case 'loan tracking':
     case 'loanapp tracking':
      return trackingRecordFields
     case 'note':
     case 'card note':
     case 'cpworkcard note':
     case 'loan note':
     case 'loanapp note':
     case 'portfolio note':
     case 'share note':
     case 'externalloan note':
     case 'invoice note':
     case 'ctr note':
     case 'dealer note':
     case 'participant note':
     case 'participation note':
     case 'participationloan note':
     case 'agreement note':
      return noteRecordFields
     case 'share':
      return shareRecordFields
     case 'share hold':
     case 'loan hold':
     case 'portfolio hold':
      return holdRecordFields
     case 'transfer':
     case 'share transfer':
     case 'loan transfer':
     case 'eft transfer':
     case 'externalloan transfer':
      return transferRecordFields
     case 'loan checkorder':
     case 'share checkorder':
      return checkOrderRecordFields
     case 'loan transaction':
     case 'share transaction':
      return transactionRecordFields
     case 'share analysisgroup':
      return shareAnalysisGroupRecordFields
     case 'share analysisplan':
      return shareAnalysisPlanRecordFields
     case 'irs distribution':
      return irsDistributionRecordFields
     case 'pledge':
     case 'loan pledge':
     case 'loanapp pledge':
      return pledgeRecordFields
     case 'loan escrowanalysis':
     case 'loanapp escrowanalysis':
      return escrowAnalysisRecordFields
     case 'loan escrow':
     case 'loanapp escrow':
      return escrowRecordFields
     case 'loan schedule':
     case 'loanapp schedule':
      return scheduleRecordFields
     case 'loan lnsegment':
     case 'loanapp lnsegment':
      return segmentRecordFields
     case 'loan ratechange':
      return rateChangeRecordFields
     case 'loan bankruptcy':
      return loanBankruptcyRecordFields
     case 'loan bankruptcy prepetitioonbal':
      return loanBankruptcyPrePetitionBalanceRecordFields
     case 'eft':
     case 'payroll':
     case 'bill':
      return eftRecordFields
     case 'eft addendainfo':
      return eftAddendaInfoRecordFields
     case 'externalloan':
      return externalLoanRecordFields
     case 'card':
      return cardRecordFields
     case 'card access':
     case 'preference access':
      return accessRecordFields
     case 'loanapp':
      return loanAppRecordFields
     case 'loanapp person':
      return loanAppPersonRecordFields
     case 'loanapp finance':
      return loanAppFinanceRecordFields
     case 'cpworkcard':
      return cpWorkCardRecordFields
     case 'cpworkcard tracking':
      return cpWorkCardTrackingRecordFields
     case 'credrep':
      return creditReportRecordFields
     case 'credrep item':
      return creditReportItemRecordFields
     case 'portfolio':
      return portfolioRecordFields
     case 'portfolio tracking':
      return portfolioTrackingRecordFields
     case 'site':
      return siteRecordFields
     case 'site cashordertype':
      return siteCashOrderTypeRecordFields
     case 'externalaccount':
      return externalAccountRecordFields
     case 'batchachorig':
      return batchACHOriginationRecordFields
     case 'loan':
      return loanRecordFields
     default:
      return defaultCompletions
    }

   }

  } else if (triggerCharacter == '=') {
   const node = nodeAtPoint(params.position.line, params.position.character, params.textDocument.uri, context)
   if (node) {
    if (node.type.toString().toLowerCase() === 'source_file') {
     return acctFileRecords
    }
   }
   const inDefFile = params.textDocument.uri.toLowerCase().includes('.def')
   if (node?.type.toString() === 'variable_declaration' || inDefFile ||
    node?.type.toString() === 'define_division') {
    return [...dataTypes]
   }
   let word = wordAtPoint(params.position.line, params.position.character, params.textDocument.uri, context)
   if (word) {
    word = word.split('=')[0]
    switch (word.toLowerCase()) {
     case 'target':
      return acctFileRecords
     default:
      return defaultCompletions
    }
   }

  }
  return defaultCompletions
 }

}

function loadCompletionItems(jsonData: JSONData[], kind: CompletionItemKind, insertFormat: InsertTextFormat): CompletionItem[] {

 const fields: CompletionItem[] = []

 jsonData.forEach(field => {

  const compItem: CompletionItem = {
   label: field.label,
   insertText: field.insertText,
   kind: kind,
   documentation: field.description,
   insertTextFormat: insertFormat
  }

  fields.push(compItem)

 })

 return fields

}
