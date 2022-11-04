import { Hover, HoverParams, MarkupContent, MarkupKind } from "vscode-languageserver"
import { SyntaxNode } from "web-tree-sitter"
import { nodeAtPoint, wordAtPoint } from "../analyze"
import { acctRecordFields } from "../documentation/accountRecordFields"
import { commentRecordFields } from "../documentation/commentRecordFields"
import { fmHistoryRecordFields } from "../documentation/fmHisnoryRecordFields"
import { powerOnFunctions } from "../documentation/functions"
import { householdRecordFields } from "../documentation/householdRecordFields"
import { lookupRecordFields } from "../documentation/lookupRecordFields"
import { nameRecordFields } from "../documentation/nameRecordFields"
import { preferenceAccessRecordFields } from "../documentation/preferenceAccessRecordFields"
import { preferenceRecordFields } from "../documentation/preferenceRecordFields"
import { trackingRecordFields } from "../documentation/trackingRecordFields"
import { noteRecordFields } from "../documentation/noteRecordFields"
import { Context } from "../interfaces"
import { shareRecordFields } from "../documentation/shareRecordFields"
import { holdRecordFields } from "../documentation/shareHoldRecordFields"
import { transferRecordFields } from "../documentation/transferRecordFields"
import { checkOrderRecordFields } from "../documentation/checkOrderRecordFields"
import { transactionRecordFields } from "../documentation/transactionRecordFields"
import { shareAnalysisGroupRecordFields } from "../documentation/shareAnalysisGroupRecordFields"
import { shareAnalysisFields } from "../documentation/shareAnalysisRecordFields"
import { shareAnalysisPlanRecordFields } from "../documentation/shareAnalysisPlanRecordFields"
import { irsRecordFields } from "../documentation/irsRecordFields"
import { irsDistributionRecordFields } from "../documentation/irsDistributionRecordFields"
import { loanRecordFields } from "../documentation/loanRecordFields"
import { pledgeRecordFields } from "../documentation/pledgeRecordFields"
import { escrowAnalysisRecordFields } from "../documentation/escrowAnalysisRecordFields"
import { escrowRecordFields } from "../documentation/escrowRecordFields"
import { scheduleRecordFields } from "../documentation/scheduleRecordFields"
import { segmentRecordFields } from "../documentation/segmentRecordFields"
import { rateChangeRecordFields } from "../documentation/rateChangeRecordFields"
import { loanBankruptcyRecordFields } from "../documentation/loanBankruptcyRecordFields"
import { loanBankruptcyPrepetitionBalanceRecordFields } from "../documentation/loanBankruptcyPrepetitionBalanceRecordFields"
import { eftRecordFields } from "../documentation/eftRecordFields"


export function getHoverHandler(context: Context) {

  return function handleHover(params: HoverParams): Hover | null {
    const node = nodeAtPoint(params.position.line, params.position.character, params.textDocument.uri, context)
    if (!node) return null

    if (node.type.toString() === 'poweron_function' || node.parent?.type.toString() === 'poweron_function') {
      let funcName = wordAtPoint(params.position.line, params.position.character, params.textDocument.uri, context)
      if (!funcName) return null
      funcName = funcName.split('(')[0].toLowerCase()
      const contents = powerOnFunctions.get(funcName)
      if (contents) {
        return {
          contents,
          range: {
            start: {
              line: node.startPosition.row,
              character: node.startPosition.column
            },
            end: {
              line: node.endPosition.row,
              character: node.endPosition.column
            }
          }
        }
      }
    } else if (node.type.toString() === 'field_name' ||
      node.type.toString() === 'record_type') {
      let recordType = ''
      let fieldName = ''
      let targetNode = node
      if (node.type.toString() === 'record_type') {
        recordType = node.text
        if (node.nextSibling?.type.toString() === 'field_name') {
          fieldName = node.nextSibling.text
          targetNode = node.nextSibling
        }
      } else if (node.type.toString() === 'field_name') {
        fieldName = node.text
        if (node.previousSibling?.type.toString() === 'record_type') {
          recordType = node.previousSibling.text
        } else if (node.parent?.previousSibling?.type.toString() == 'record_type') {
          recordType = node.parent.previousSibling.text
        }
      }

      if (!fieldName && !recordType) return null

      return getHoverInfo(fieldName.toLowerCase(), recordType.toLowerCase(), targetNode)
    }

    return null
  }
}

function getHoverInfo(fieldName: string, recordType: string, node: SyntaxNode): Hover | null {
  let mdContent: string | undefined = ''
  switch (recordType) {
    case 'account':
      mdContent = acctRecordFields.get(fieldName)
      break
    case 'fmhistory':
      mdContent = fmHistoryRecordFields.get(fieldName)
      break
    case 'name':
    case 'share name':
    case 'irs name':
    case 'loan name':
    case 'loan pledge name':
    case 'eft name':
    case 'card name':
    case 'externalloan name':
      mdContent = nameRecordFields.get(fieldName)
      break
    case 'lookup':
      mdContent = lookupRecordFields.get(fieldName)
      break
    case 'comment':
      mdContent = commentRecordFields.get(fieldName)
      break
    case 'household':
      mdContent = householdRecordFields.get(fieldName)
      break
    case 'preference':
      mdContent = preferenceRecordFields.get(fieldName)
      break
    case 'card access':
    case 'preference access':
      mdContent = preferenceAccessRecordFields.get(fieldName)
      break
    case 'tracking':
    case 'externalloan tracking':
    case 'share tracking':
    case 'loan tracking':
    case 'loanapp tracking':
      mdContent = trackingRecordFields.get(fieldName)
      break
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
      mdContent = noteRecordFields.get(fieldName)
      break
    case 'share':
      mdContent = shareRecordFields.get(fieldName)
      break
    case 'share hold':
    case 'loan hold':
    case 'portfolio hold':
      mdContent = holdRecordFields.get(fieldName)
      break
    case 'share transfer':
    case 'eft transfer':
    case 'loan transfer':
    case 'externalloan transfer':
      mdContent = transferRecordFields.get(fieldName)
      break
    case 'loan checkorder':
    case 'share checkorder':
      mdContent = checkOrderRecordFields.get(fieldName)
      break
    case 'loan transaction':
    case 'share transaction':
      mdContent = transactionRecordFields.get(fieldName)
      break
    case 'share analysisgroup':
      mdContent = shareAnalysisGroupRecordFields.get(fieldName)
      break
    case 'share analysisplan':
      mdContent = shareAnalysisPlanRecordFields.get(fieldName)
      break
    case 'share analysis':
      mdContent = shareAnalysisFields.get(fieldName)
      break
    case 'irs':
    case 'ira':
      mdContent = irsRecordFields.get(fieldName)
      break
    case 'irs distribution':
      mdContent = irsDistributionRecordFields.get(fieldName)
      break
    case 'loan':
      mdContent = loanRecordFields.get(fieldName)
      break
    case 'pledge':
    case 'loan pledge':
    case 'loanapp pledge':
      mdContent = pledgeRecordFields.get(fieldName)
      break
    case 'loan escrowanalysis':
    case 'loanapp escrowanalysis':
      mdContent = escrowAnalysisRecordFields.get(fieldName)
      break
    case 'loan escrow':
    case 'loanapp escrow':
      mdContent = escrowRecordFields.get(fieldName)
      break
    case 'loan schedule':
    case 'loanapp schedule':
      mdContent = scheduleRecordFields.get(fieldName)
      break
    case 'loan lnsegment':
    case 'loanapp lnsegment':
      mdContent = segmentRecordFields.get(fieldName)
      break
    case 'loan ratechange':
      mdContent = rateChangeRecordFields.get(fieldName)
      break
    case 'loan bankruptcy':
      mdContent = loanBankruptcyRecordFields.get(fieldName)
      break
    case 'loan bankruptcy prepetitionbal':
      mdContent = loanBankruptcyPrepetitionBalanceRecordFields.get(fieldName)
      break
    case 'eft':
    case 'bill':
    case 'payroll':
      mdContent = eftRecordFields.get(fieldName)
      break
    default:
      return null
  }

  if (!mdContent) return null
  const contents: MarkupContent = {
    kind: MarkupKind.Markdown,
    value: mdContent
  }

  return {
    contents,
    range: {
      start: {
        line: node.startPosition.row,
        character: node.startPosition.column
      },
      end: {
        line: node.endPosition.row,
        character: node.endPosition.column
      }
    }

  }
}
