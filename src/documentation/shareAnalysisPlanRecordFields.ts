export const shareAnalysisPlanRecordFields = new Map<string, string>()
shareAnalysisPlanRecordFields.set("description", ` 
\n### Description
\nThis field specifies the description of this analysis plan.
\nField Number         **002**
\nMnemonic             **DESCRIPTION**
\nData Type            **30 Characters**
\nSource               **User-entered**
\nHelp File            **07957**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou created this description in the plan's Description field in the Analysis Plan parameters. The description appears in the account tree in the Account Manager.
`)
shareAnalysisPlanRecordFields.set("minimumcharge", ` 
\n### Minimum Charge
\nThis field specifies the minimum charge for account analysis.
\nField Number         **003**
\nMnemonic             **MINIMUMCHARGE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07957**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
shareAnalysisPlanRecordFields.set("maximumcharge", ` 
\n### Maximum Charge
\nThis field specifies the maximum charge for account analysis.
\nField Number         **004**
\nMnemonic             **MAXIMUMCHARGE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07958**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
shareAnalysisPlanRecordFields.set("maintenancecharge", ` 
\n### Maintenance Charge
\nThis field specifies the maintenance charge for account analysis.
\nField Number         **005**
\nMnemonic             **MAINTENANCECHARGE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07959**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
shareAnalysisPlanRecordFields.set("definedcode", ` 
\n### Defined Code
\nThis field stores the status of this analysis plan.
\nField Number         **016**
\nMnemonic             **DEFINEDCODE**
\nData Type            **Code to 2**
\nSource               **System-entered**
\nHelp File            **07970**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou selected the status for this plan in the Defined Code field in the Analysis Plan Parameters.
`)
shareAnalysisPlanRecordFields.set("effectivedate", ` 
\n### Effective Date
\nThis field stores the date the Analysis Plan record takes effect.
\nField Number         **017**
\nMnemonic             **EFFECTIVEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **07971**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf left blank, the Analysis Plan record is immediately effective through the date in the Expiration Date field.
`)
shareAnalysisPlanRecordFields.set("expirationdate", ` 
\n### Expiration Date
\nThis field stores the date the Analysis Plan record expires.
\nField Number         **018**
\nMnemonic             **EXPIRATIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **07972**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest defaults to the Analysis record when the Analysis Plan record expires. If this field is left blank, the Analysis Plan will never expire.
`)
shareAnalysisPlanRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nSymitar Quest stores the system date in this field when you create, change, or save the Share Analysis Plan record.
\nField Number         **025**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **07979**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest may update the Record Change Date field because the record was saved, even though there may not be any actual changes in the record. However, Symitar Quest does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
shareAnalysisPlanRecordFields.set("cashamountfree", ` 
\n### Cash Amount Free
\nThis field determines the amount of accumulated cash transactions that are free of charge.
\nField Number         **021**
\nMnemonic             **CASHAMOUNTFREE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07975**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nEach month, the amount in this parameter is subtracted from the value in the Cash Amount Total field.
`)
shareAnalysisPlanRecordFields.set("cashrate", ` 
\n### Cash Rate
\nThis field specifies the rate to apply to the Cash Amount Total field to calculate the monthly cash fee.
\nField Number         **022**
\nMnemonic             **CASHRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **07976**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis rate is similar to the amortization rate.
`)
shareAnalysisPlanRecordFields.set("cashatmtotals", ` 
\n### Cash ATM Totals
\nThis field specifies whether ATM transactions should be included in the monthly cash amount totals.
\nField Number         **023**
\nMnemonic             **CASHATMTOTALS**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07977**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nData Type Descriptions:
\n   - (0) Do not include ATM Transactions
\n   - (1) Include ATM Transactions
`)
shareAnalysisPlanRecordFields.set("earnratemethod", ` 
\n### Earn Rate Method
\nThis field specifies how to calculate earnings credit based on the tiered balances and rates.
\nField Number         **019**
\nMnemonic             **EARNRATEMETHOD**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07973**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n#### Data Type Descriptions
\n##### (0) Tiered Rate
\n   To calculate earnings credit by applying one tier earn rate to the entire share balance once it reaches a certain tier balance level##### (1) Blended Rate
\n   To calculate earnings credit by applying multiple tier earn rates to the share balance based on the amount in each tier balance level***Important:***  Blended rates and tiered rates cannot be used in the same plan.
`)
shareAnalysisPlanRecordFields.set("tier1balance", ` 
\n### Tier 1 Balance
\nThis field specifies the minimum investable balance for using the associated earning rate field: Tier 1 Earn Rate.
\nField Number         **006**
\nMnemonic             **TIER1BALANCE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07960**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
shareAnalysisPlanRecordFields.set("tier2balance", ` 
\n### Tier 2 Balance
\nThis field specifies the minimum investable balance for using the associated earning rate field: Tier 2 Earn Rate.
\nField Number         **007**
\nMnemonic             **TIER2BALANCE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07961**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
shareAnalysisPlanRecordFields.set("tier3balance", ` 
\n### Tier 3 Balance
\nThis field specifies the minimum investable balance for using the associated earning rate field: Tier 3 Earn Rate.
\nField Number         **008**
\nMnemonic             **TIER3BALANCE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07962**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
shareAnalysisPlanRecordFields.set("tier4balance", ` 
\n### Tier 4 Balance
\nThis field specifies the minimum investable balance for using the associated earning rate field: Tier 4 Earn Rate.
\nField Number         **009**
\nMnemonic             **TIER4BALANCE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07963**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
shareAnalysisPlanRecordFields.set("tier1earnrate", ` 
\n### Tier 1 Earn Rate
\nThis field specifies the earning rate for accounts that have the minimum investable balance defined in the associated tier balance field: Tier 1 Balance.
\nField Number         **010**
\nMnemonic             **TIER1EARNRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **07964**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
shareAnalysisPlanRecordFields.set("tier2earnrate", ` 
\n### Tier 2 Earn Rate
\nThis field specifies the earning rate for accounts that have the minimum investable balance defined in the associated tier balance field: Tier 2 Balance.
\nField Number         **011**
\nMnemonic             **TIER2EARNRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **07965**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
shareAnalysisPlanRecordFields.set("tier3earnrate", ` 
\n### Tier 3 Earn Rate
\nThis field specifies the earning rate for accounts that have the minimum investable balance defined in the associated tier balance field: Tier 3 Balance.
\nField Number         **012**
\nMnemonic             **TIER3EARNRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **07966**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
shareAnalysisPlanRecordFields.set("tier4earnrate", ` 
\n### Tier 4 Earn Rate
\nThis field specifies the earning rate for accounts that have the minimum investable balance defined in the associated tier balance field: Tier 4 Balance.
\nField Number         **013**
\nMnemonic             **TIER4EARNRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **07967**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
shareAnalysisPlanRecordFields.set("charge", ` 
\n## CHARGE:1
\n### Deposit Charge
\nThis field specifies the amount charged for deposits.
\nField Number         **014:001**
\nMnemonic             **CHARGE:1**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of deposits exceeds the value in the Deposit Free field. The Deposit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:2
\n### Dep Correction Charge
\nThis field specifies the amount charged for deposit corrections.
\nField Number         **014:002**
\nMnemonic             **CHARGE:2**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of deposit corrections exceeds the value in the Dep Correction Free field. The Dep Correction Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n##  CHARGE:3
\n### Returned Deposit Charge
\nThis field specifies the amount charged for returned deposits.
\nField Number         **014:003**
\nMnemonic             **CHARGE:3**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of returned deposits exceeds the value in the Returned Deposit Free field. The Returned Deposit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item)
\n
\n## CHARGE:4
\n### Draft Charge
\nThis field specifies the amount charged for drafts.
\nField Number         **014:004**
\nMnemonic             **CHARGE:4**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of drafts exceeds the value in the Draft Free field. The Draft Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:5
\n### Bulk Charge
\nThis field specifies the amount charged for bulk transactions.
\nField Number         **014:005**
\nMnemonic             **CHARGE:5**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of bulk transactions exceeds the value in the Bulk Free field. The Bulk Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:6
\n### Change Order Charge
\nThis field specifies the amount charged for change orders.
\nField Number         **014:006**
\nMnemonic             **CHARGE:6**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of change orders exceeds the value in the Change Order Free field. The Change Order Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:7
\n### NSF Charge
\nThis field specifies the amount charged for NSF items.
\nField Number         **014:007**
\nMnemonic             **CHARGE:7**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of NSF items exceeds the value in the NSF Free field. The NSF Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:8
\n### Sweep Charge
\nThis field specifies the amount charged for sweeps.
\nField Number         **014:008**
\nMnemonic             **CHARGE:8**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of sweeps exceeds the value in the Sweep Free field. The Sweep Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n### CHARGE:9
\n### Stop Payment Charge
\nThis field specifies the amount charged for stop payments.
\nField Number         **014:009**
\nMnemonic             **CHARGE:9**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of stop payments exceeds the value in the Stop Payment Free field. The Stop Payment Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:10
\n### Account Printout Charge
\nThis field specifies the amount charged for account printouts.
\nField Number         **014:010**
\nMnemonic             **CHARGE:10**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of account printouts exceeds the value in the Account Printout Free field. The Account Printout Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:11
\n### Stmt Balancing Charge
\nThis field specifies the amount charged for statement balancing.
\nField Number         **014:011**
\nMnemonic             **CHARGE:11**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of statement balancing exceeds the value in the Stmt Balancing Free field. The Stmt Balancing Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:12
\n### Statement Copy Charge
\nThis field specifies the amount charged for statement copies.
\nField Number         **014:012**
\nMnemonic             **CHARGE:12**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of statement copies exceeds the value in the Statement Copy Free field. The Statement Copy Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:13
\n### Check Copy Charge
\nThis field specifies the amount charged for check copies.
\nField Number         **014:013**
\nMnemonic             **CHARGE:13**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of check copies exceeds the value in the Check Copy Free field. The Check Copy Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:14
\n### Primary Check Charge
\nThis field specifies the amount charged for primary check items.
\nField Number         **014:014**
\nMnemonic             **CHARGE:14**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of primary check items exceeds the value in the Primary Check Free field. The Primary Check Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:15
\n### Secondary Check Charge
\nThis field specifies the amount charged for secondary check items.
\nField Number         **014:015**
\nMnemonic             **CHARGE:15**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of secondary check items exceeds the value in the Secondary Check Free field. The Secondary Check Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:16
\n### Money Order Charge
\nThis field specifies the amount charged for money orders.
\nField Number         **014:016**
\nMnemonic             **CHARGE:16**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of money orders exceeds the value in the Money Order Free field. The Money Order Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:17
\n### Wire Xfer In Charge
\nThis field specifies the amount charged for wire transfers coming in.
\nField Number         **014:017**
\nMnemonic             **CHARGE:17**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of wire transfers coming in exceeds the value in the Wire Xfer In Free field. The Wire Xfer In Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:18
\n### Wire Xfer Out Charge
\nThis field specifies the amount charged for wire transfers going out.
\nField Number         **014:018**
\nMnemonic             **CHARGE:18**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of wire transfers going out exceeds the value in the Wire Xfer Out Free field. The Wire Xfer Out Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:19
\n### Overdraft Xfer Charge
\nThis field specifies the amount charged for overdraft transfers.
\nField Number         **014:019**
\nMnemonic             **CHARGE:19**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of overdraft transfers exceeds the value in the Overdraft Xfer Free field. The Overdraft Xfer Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:20
\n### Courtesy Pay Charge
\nThis field specifies the amount charged for courtesy payments.
\nField Number         **014:020**
\nMnemonic             **CHARGE:20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of courtesy payments exceeds the value in the Courtesy Pay Free field. The Courtesy Pay Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:21
\n### ACH Debit Charge
\nThis field specifies the number of ACH debit items the account can have before a charge is applied.
\nField Number         **014:021**
\nMnemonic             **CHARGE:21**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of ACH credit items exceeds the value in the ACH Debit Free field. The ACH Debit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:22
\n### ACH Credit Charge
\nThis field specifies the amount charged for ACH credit items.
\nField Number         **014:022**
\nMnemonic             **CHARGE:22**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of ACH credit items exceeds the value in the e ACH Credit Free field. The ACH Credit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:23
\n### ACH Orig Debit Charge
\nThis field specifies the amount charged for ACH origination debit items.
\nField Number         **014:023**
\nMnemonic             **CHARGE:23**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of ACH origination debit credit items exceeds the value in the ACH Orig Debit Free field. The ACH Orig Debit Charge Typee field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:24
\n### ACH Orig Credit Charge
\nThis field specifies the amount charged for ACH origination credit items.
\nField Number         **014:024**
\nMnemonic             **CHARGE:24**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of ACH origination credit items exceeds the value in the ACH Orig Credit Free field. The ACH Orig Credit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:25
\n### Checks Received Charge
\nThis field specifies the amount charged for checks received.
\nField Number         **014:025**
\nMnemonic             **CHARGE:25**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of checks received exceeds the value in the Checks Received Free field. The Checks Received Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:26
\n### On Us Disbursed Charge
\nThis field specifies the amount charged for disbursed on-us items.
\nField Number         **014:026**
\nMnemonic             **CHARGE:26**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of disbursed on-us items exceeds the value in the On Us Disbursed Free field. The On Us Disbursed Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:27
\n### Lobby Visit Charge
\nThis field specifies the amount charged for lobby visits.
\nField Number         **014:027**
\nMnemonic             **CHARGE:27**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of lobby visits exceeds the value in the Lobby Visits Free field. The Lobby Visits Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:28
\n### Loose Coin Charge
\nThis field specifies the amount charged for loose coin transactions.
\nField Number         **014:028**
\nMnemonic             **CHARGE:28**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of loose coin transactions exceeds the value in the Loose Coin Free field. The Loose Coin Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:29
\n### Rolled Coin Charge
\nThis field specifies the amount charged for rolled coin transactions.
\nField Number         **014:029**
\nMnemonic             **CHARGE:29**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of rolled coin transactions exceeds the value in the Rolled Coin Free field. The Rolled Coin Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:30
\n### Loose Currency Charge
\nThis field specifies the amount charged for loose currency transactions.
\nField Number         **014:030**
\nMnemonic             **CHARGE:30**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of loose currency transactions exceeds the value in the Loose Currency Free field. The Loose Currency Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:31
\n### Strap Currency Charge
\nThis field specifies the amount charged for strap currency.
\nField Number         **014:031**
\nMnemonic             **CHARGE:31**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of strap currency exceeds the value in the Strap Currency Free field. The Strap Currency Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:32
\n### On Us Deposited Charge
\nThis field specifies the amount charged for deposited on-us items.
\nField Number         **014:032**
\nMnemonic             **CHARGE:32**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of deposited on-us items exceeds the value in the On Us Deposited Free field. The On Us Deposited Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGE:33 - CHARGE:100
\n### Counter 033 Charge - Counter 100 Charge
\nThese fields specify the amount charged for defined items.
\nField Number         **014:033 - 14:100**
\nMnemonic             **CHARGE:33 - CHARGE:100**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **07968**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of defined items exceeds the value in the associated Counter 033-100 Free field. The Counter 033-100 Charge Type fields determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\nThe first 50 fields are system-defined, with the first 32 fields currently defined and the remaining 18 fields reserved for future use. The second 50 fields are defined by the financial institution. Users can define these fields in the Analysis Global Parameters.
`)
shareAnalysisPlanRecordFields.set("free", ` 
\n## FREE:1
\n### Deposit Free
\nThis field specifies the amount charged for deposits.
\nField Number         **015:001**
\nMnemonic             **FREE:1**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of deposits exceeds the value in the Deposit Free field. The Deposit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## FREE:2
\n### Dep Correction Free
\nThis field specifies the amount charged for deposit corrections.
\nField Number         **015:002**
\nMnemonic             **FREE:2**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of deposit corrections exceeds the value in the Dep Correction Free field. The Dep Correction Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## FREE:3
\n### Returned Deposit Free
\nThis field specifies the amount charged for returned deposits.
\nField Number         **015:003**
\nMnemonic             **FREE:3**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of returned deposits exceeds the value in the Returned Deposit Free field. The Returned Deposit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## FREE:4
\n### Draft Free
\nThis field specifies the amount charged for drafts.
\nField Number         **015:004**
\nMnemonic             **FREE:4**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of drafts exceeds the value in the Draft Free field. The Draft Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## FREE:5
\n### Bulk Free
\nThis field specifies the amount charged for bulk transactions.
\nField Number         **015:005**
\nMnemonic             **FREE:5**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of bulk transactions exceeds the value in the Bulk Free field. The Bulk Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## FREE:6
\n### Change Order Free
\nThis field specifies the amount charged for change orders.
\nField Number         **015:006**
\nMnemonic             **FREE:6**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of change orders exceeds the value in the Change Order Free field. The Change Order Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## FREE:7
\n### NSF Free
\nThis field specifies the amount charged for NSF items.
\nField Number         **015:007**
\nMnemonic             **FREE:7**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of NSF items exceeds the value in the NSF Free field. The NSF Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## FREE:8
\n### Sweep Free
\nThis field specifies the amount charged for sweeps.
\nField Number         **015:008**
\nMnemonic             **FREE:8**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of sweeps exceeds the value in the Sweep Free field. The Sweep Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## FREE:9
\n### Stop Payment Free
\nThis field specifies the amount charged for stop payments.
\nField Number         **015:009**
\nMnemonic             **FREE:9**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of stop payments exceeds the value in the Stop Payment Free field. The Stop Payment Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:10
\n### Account Printout Free
\nThis field specifies the amount charged for account printouts.
\nField Number         **015:010**
\nMnemonic             **FREE:10**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of account printouts exceeds the value in the Account Printout Free field. The Account Printout Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:11
\n### Stmt Balancing Free
\nThis field specifies the amount charged for statement balancing.
\nField Number         **015:011**
\nMnemonic             **FREE:11**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of statement balancing exceeds the value in the Stmt Balancing Free field. The Stmt Balancing Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:12
\n### Statement Copy Free
\nThis field specifies the amount charged for statement copies.
\nField Number         **015:012**
\nMnemonic             **FREE:12**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of statement copies exceeds the value in the Statement Copy Free field. The Statement Copy Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:13
\n### Check Copy Free
\nThis field specifies the amount charged for check copies.
\nField Number         **015:013**
\nMnemonic             **FREE:13**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of check copies exceeds the value in the Check Copy Free field. The Check Copy Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:14
\n### Primary Check Free
\nThis field specifies the amount charged for primary check items.
\nField Number         **015:014**
\nMnemonic             **FREE:14**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of primary check items exceeds the value in the Primary Check Free field. The Primary Check Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:15
\n### Secondary Check Free
\nThis field specifies the amount charged for secondary check items.
\nField Number         **015:015**
\nMnemonic             **FREE:15**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of secondary check items exceeds the value in the Secondary Check Free field. The Secondary Check Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:16
\n### Money Order Free
\nThis field specifies the amount charged for money orders.
\nField Number         **015:016**
\nMnemonic             **FREE:16**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of money orders exceeds the value in the Money Order Free field. The Money Order Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:17
\n### Wire Xfer In Free
\nThis field specifies the amount charged for wire transfers coming in.
\nField Number         **015:017**
\nMnemonic             **FREE:17**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of wire transfers coming in exceeds the value in the Wire Xfer In Free field. The Wire Xfer In Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:18
\n### Wire Xfer Out Free
\nThis field specifies the amount charged for wire transfers going out.
\nField Number         **015:018**
\nMnemonic             **FREE:18**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of wire transfers going out exceeds the value in the Wire Xfer Out Free field. The Wire Xfer Out Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:19
\n### Overdraft Xfer Free
\nThis field specifies the amount charged for overdraft transfers.
\nField Number         **015:019**
\nMnemonic             **FREE:19**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of overdraft transfers exceeds the value in the Overdraft Xfer Free field. The Overdraft Xfer Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:20
\n### Courtesy Pay Free
\nThis field specifies the amount charged for courtesy payments.
\nField Number         **015:020**
\nMnemonic             **FREE:20**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of courtesy payments exceeds the value in the Courtesy Pay Free field. The Courtesy Pay Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:21
\n### ACH Debit Free
\nThis field specifies the number of ACH debit items the account can have before a charge is applied.
\nField Number         **015:021**
\nMnemonic             **FREE:21**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of ACH credit items exceeds the value in the ACH Debit Free field. The ACH Debit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:22
\n### ACH Credit Free
\nThis field specifies the amount charged for ACH credit items.
\nField Number         **015:022**
\nMnemonic             **FREE:22**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of ACH credit items exceeds the value in the e ACH Credit Free field. The ACH Credit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:23
\n### ACH Orig Debit Free
\nThis field specifies the amount charged for ACH origination debit items.
\nField Number         **015:023**
\nMnemonic             **FREE:23**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of ACH origination debit items exceeds the value in the ACH Orig Debit Free field. The ACH Orig Debit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:24
\n### ACH Orig Credit Free
\nThis field specifies the amount charged for ACH origination credit items.
\nField Number         **015:024**
\nMnemonic             **FREE:24**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of ACH origination credit items exceeds the value in the ACH Orig Credit Free field. The ACH Orig Credit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:25
\n### Checks Received Free
\nThis field specifies the amount charged for checks received.
\nField Number         **015:025**
\nMnemonic             **FREE:25**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of checks received exceeds the value in the Checks Received Free field. The Checks Received Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:26
\n### On Us Disbursed Free
\nThis field specifies the amount charged for disbursed on-us items.
\nField Number         **015:026**
\nMnemonic             **FREE:26**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of disbursed on-us items exceeds the value in the On Us Disbursed Free field. The On Us Disbursed Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:27
\n### Lobby Visit Free
\nThis field specifies the amount charged for lobby visits.
\nField Number         **015:027**
\nMnemonic             **FREE:27**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of lobby visits exceeds the value in the Lobby Visits Free field. The Lobby Visits Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:28
\n### Loose Coin Free
\nThis field specifies the amount charged for loose coin transactions.
\nField Number         **015:028**
\nMnemonic             **FREE:28**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of loose coin transactions exceeds the value in the Loose Coin Free field. The Loose Coin Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:29
\n### Rolled Coin Free
\nThis field specifies the amount charged for rolled coin transactions.
\nField Number         **015:029**
\nMnemonic             **FREE:29**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of rolled coin transactions exceeds the value in the Rolled Coin Free field. The Rolled Coin Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:30
\n### Loose Currency Free
\nThis field specifies the amount charged for loose currency transactions.
\nField Number         **015:030**
\nMnemonic             **FREE:30**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of loose currency transactions exceeds the value in the Loose Currency Free field. The Loose Currency Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:31
\n### Strap Currency Free
\nThis field specifies the amount charged for strap currency.
\nField Number         **015:031**
\nMnemonic             **FREE:31**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of strap currency exceeds the value in the Strap Currency Free field. The Strap Currency Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:32
\n### On Us Deposited Free
\nThis field specifies the amount charged for deposited on-us items.
\nField Number         **015:032**
\nMnemonic             **FREE:32**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of deposited on-us items exceeds the value in the On Us Deposited Free field. The On Us Deposited Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## FREE:33 - FREE:100
\n### Counter 033 Free - Counter 100 Free
\nThese fields specify the amount charged for defined items.
\nField Number         **015:033 - 015:100**
\nMnemonic             **FREE:33 - FREE:100**
\nData Type            **Code to 32767**
\nSource               **User-entered**
\nHelp File            **07969**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of those defined items exceeds the value in the associated Counter 033-100 Free field. The Counter 033-100 Charge Type fields determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\nThe first 50 fields are system-defined, with the first 32 fields currently defined and the remaining 18 fields reserved for future use. The second 50 fields are defined by the financial institution. Users can define these fields in the Analysis Global Parameters.
`)
shareAnalysisPlanRecordFields.set("plan", ` 
\n### Analysis Plan
\nThis field stores the credit union-defined analysis plan type code (0-99) that you enter when you create the Analysis Plan record.
\nField Number         **001**
\nMnemonic             **PLAN**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **02551**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYour credit union defines analysis plan types with the Analysis Plan Parameters. Once you create the Analysis Plan record, you cannot access this field for file maintenance.
`)
shareAnalysisPlanRecordFields.set("locator", ` 
\n### Locator
\nThis value in this field can be used as a unique identification of a specific record.
\nField Number         **024**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **07977**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe Locator field value in each record is unique within each member account. Symitar Quest automatically assigns the Locator value when the record is created, and you cannot change it. The value is a positive number.
\n
\nThe Locator field can be used during PowerOn file maintenance (both demand and batch) to uniquely identify a record. We recommend using the Locator field since a record's ordinal sequence number may change if someone inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
shareAnalysisPlanRecordFields.set("chargetype", ` 
\n## CHARGETYPE:1
\n### Deposit Charge Type
\nThis field specifies the amount charged for deposits.
\nField Number         **020:001**
\nMnemonic             **CHARGETYPE:1**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of deposit corrections exceeds the value in the Dep Correction Free field. The Dep Correction Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## CHARGETYPE:2
\n### Dep Correction Charge Type
\nThis field specifies the amount charged for deposit corrections.
\nField Number         **020:002**
\nMnemonic             **CHARGETYPE:2**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of deposit corrections exceeds the value in the Dep Correction Free field. The Dep Correction Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## CHARGETYPE:3
\n### Returned Deposit Charge Type
\nThis field specifies the amount charged for returned deposits.
\nField Number         **020:003**
\nMnemonic             **CHARGETYPE:3**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of returned deposits exceeds the value in the Returned Deposit Free field. The Returned Deposit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## CHARGETYPE:4
\n### Draft Charge Type
\nThis field specifies the amount charged for drafts.
\nField Number         **020:004**
\nMnemonic             **CHARGETYPE:4**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of drafts exceeds the value in the Draft Free field. The Draft Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## CHARGETYPE:5
\n### Bulk Charge Type
\nThis field specifies the amount charged for bulk transactions.
\nField Number         **020:005**
\nMnemonic             **CHARGETYPE:5**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of bulk transactions exceeds the value in the Bulk Free field. The Bulk Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## CHARGETYPE:6
\n### Change Order Charge Type
\nThis field specifies the amount charged for change orders.
\nField Number         **020:006**
\nMnemonic             **CHARGETYPE:6**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of change orders exceeds the value in the Change Order Free field. The Change Order Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## CHARGETYPE:7
\n### NSF Charge Type
\nThis field specifies the amount charged for NSF items.
\nField Number         **020:007**
\nMnemonic             **CHARGETYPE:7**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of NSF items exceeds the value in the NSF Free field. The NSF Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## CHARGETYPE:8
\n### Sweep Charge Type
\nThis field specifies the amount charged for sweeps.
\nField Number         **020:008**
\nMnemonic             **CHARGETYPE:8**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of sweeps exceeds the value in the Sweep Free field. The Sweep Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\N## CHARGETYPE:9
\n### Stop Payment Charge Type
\nThis field specifies the amount charged for stop payments.
\nField Number         **020:009**
\nMnemonic             **CHARGETYPE:9**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of stop payments exceeds the value in the Stop Payment Free field. The Stop Payment Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:10
\n### Account Printout Charge Type
\nThis field specifies the amount charged for account printouts.
\nField Number         **020:010**
\nMnemonic             **CHARGETYPE:10**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of account printouts exceeds the value in the Account Printout Free field. The Account Printout Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:11
\n### Stmt Balancing Charge Type
\nThis field specifies the amount charged for statement balancing.
\nField Number         **020:011**
\nMnemonic             **CHARGETYPE:11**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of statement balancing exceeds the value in the Stmt Balancing Free field. The Stmt Balancing Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:12
\n### Statement Copy Charge Type
\nThis field specifies the amount charged for statement copies.
\nField Number         **020:012**
\nMnemonic             **CHARGETYPE:12**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of statement copies exceeds the value in the Statement Copy Free field. The Statement Copy Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:13
\n### Check Copy Charge Type
\nThis field specifies the amount charged for check copies.
\nField Number         **020:013**
\nMnemonic             **CHARGETYPE:13**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of check copies exceeds the value in the Check Copy Free field. The Check Copy Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:14
\n### Primary Check Charge Type
\nThis field specifies the amount charged for primary check items.
\nField Number         **020:014**
\nMnemonic             **CHARGETYPE:14**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of primary check items exceeds the value in the Primary Check Free field. The Primary Check Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:15
\n### Secondary Check Charge Type
\nThis field specifies the amount charged for secondary check items.
\nField Number         **020:015**
\nMnemonic             **CHARGETYPE:15**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of secondary check items exceeds the value in the Secondary Check Free field. The Secondary Check Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:16
\n### Money Order Charge Type
\nThis field specifies the amount charged for money orders.
\nField Number         **020:016**
\nMnemonic             **CHARGETYPE:16**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of money orders exceeds the value in the Money Order Free field. The Money Order Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:17
\n### Wire Xfer In Charge Type
\nThis field specifies the amount charged for wire transfers coming in.
\nField Number         **020:017**
\nMnemonic             **CHARGETYPE:17**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of wire transfers coming in exceeds the value in the Wire Xfer In Free field. The Wire Xfer In Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:18
\n### Wire Xfer Out Charge Type
\nThis field specifies the amount charged for wire transfers going out.
\nField Number         **020:018**
\nMnemonic             **CHARGETYPE:18**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of wire transfers going out exceeds the value in the Wire Xfer Out Free field. The Wire Xfer Out Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:19
\n### Overdraft Xfer Charge Type
\nThis field specifies the amount charged for overdraft transfers.
\nField Number         **020:019**
\nMnemonic             **CHARGETYPE:19**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of overdraft transfers exceeds the value in the Overdraft Xfer Free field. The Overdraft Xfer Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:20
\n### Courtesy Pay Charge Type
\nThis field specifies the amount charged for courtesy payments.
\nField Number         **020:020**
\nMnemonic             **CHARGETYPE:20**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of courtesy payments exceeds the value in the Courtesy Pay Free field. The Courtesy Pay Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:21
\n### ACH Debit Charge Type
\nThis field specifies the number of ACH debit items the account can have before a charge is applied.
\nField Number         **020:021**
\nMnemonic             **CHARGETYPE:21**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of ACH credit items exceeds the value in the ACH Debit Free field. The ACH Debit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:22
\n### ACH Credit Charge Type
\nThis field specifies the amount charged for ACH credit items.
\nField Number         **020:022**
\nMnemonic             **CHARGETYPE:22**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of ACH credit items exceeds the value in the e ACH Credit Free field. The ACH Credit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:23
\n### ACH Orig Debit Charge Type
\nThis field specifies the amount charged for ACH origination debit items.
\nField Number         **020:023**
\nMnemonic             **CHARGETYPE:23**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of ACH origination debit credit items exceeds the value in the ACH Orig Debit Free field. The ACH Orig Debit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:24
\n### ACH Orig Credit Charge Type
\nThis field specifies the amount charged for ACH origination credit items.
\nField Number         **020:024**
\nMnemonic             **CHARGETYPE:24**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of ACH origination credit items exceeds the value in the ACH Orig Credit Free field. The ACH Orig Credit Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:25
\n### Checks Received Charge Type
\nThis field specifies the amount charged for checks received.
\nField Number         **020:025**
\nMnemonic             **CHARGETYPE:25**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of checks received exceeds the value in the Checks Received Free field. The Checks Received Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:26
\n### On Us Disbursed Charge Type
\nThis field specifies the amount charged for disbursed on-us items.
\nField Number         **020:026**
\nMnemonic             **CHARGETYPE:26**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of disbursed on-us items exceeds the value in the On Us Disbursed Free field. The On Us Disbursed Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:27
\n### Lobby Visit Charge Type
\nThis field specifies the amount charged for lobby visits.
\nField Number         **020:027**
\nMnemonic             **CHARGETYPE:27**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of lobby visits exceeds the value in the Lobby Visits Free field. The Lobby Visits Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:28
\n### Loose Coin Charge Type
\nThis field specifies the amount charged for loose coin transactions.
\nField Number         **020:028**
\nMnemonic             **CHARGETYPE:28**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of loose coin transactions exceeds the value in the Loose Coin Free field. The Loose Coin Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:29
\n### Rolled Coin Charge Type
\nThis field specifies the amount charged for rolled coin transactions.
\nField Number         **020:029**
\nMnemonic             **CHARGETYPE:29**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of rolled coin transactions exceeds the value in the Rolled Coin Free field. The Rolled Coin Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:30
\n### Loose Currency Charge Type
\nThis field specifies the amount charged for loose currency transactions.
\nField Number         **020:030**
\nMnemonic             **CHARGETYPE:30**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of loose currency transactions exceeds the value in the Loose Currency Free field. The Loose Currency Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:31
\n### Strap Currency Charge Type
\nThis field specifies the amount charged for strap currency.
\nField Number         **020:031**
\nMnemonic             **CHARGETYPE:31**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of strap currency exceeds the value in the Strap Currency Free field. The Strap Currency Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:32
\n### On Us Deposited Charge Type
\nThis field specifies the amount charged for deposited on-us items.
\nField Number         **020:032**
\nMnemonic             **CHARGETYPE:32**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of deposited on-us items exceeds the value in the On Us Deposited Free field. The On Us Deposited Charge Type field determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\n## CHARGETYPE:33 - CHARGETYPE:100
\n### Counter 033 Charge Type - Counter 100 Charge Type
\nThese fields specify the amount charged for defined items.
\nField Number         **020:-33 - 020:100**
\nMnemonic             **CHARGETYPE:33 - CHARGETYPE:100**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **07974**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe charge is applied after the number of those defined items exceeds the value in the associated Counter 033-100 Free field. The Counter 033-100 Charge Type fields determines whether the charge is applied once (flat rate) or for every occurrence of the item (per item).
\n
\nThe first 50 fields are system-defined, with the first 32 fields currently defined and the remaining 18 fields reserved for future use. The second 50 fields are defined by the financial institution. Users can define these fields in the Analysis Global Parameters.
`)
