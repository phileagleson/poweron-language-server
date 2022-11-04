export const shareAnalysisFields = new Map<string, string>()
shareAnalysisFields.set("plan", ` 
\n### Analysis Plan
\nThis field indicates which Analysis Plan group in the Analysis Plan Parameters is associated with this record.
\nField Number         **001**
\nMnemonic             **PLAN**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **09301**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can use the counters in this record to keep track of certain kinds of share activity. You can use these counters in conjunction with the Analysis Plan Parameters identified by the value in this field to charge sophisticated fees.
`)
shareAnalysisFields.set("statementdate", ` 
\n### Statement Date
\nThe Statement Cutoff Processing batch program sets this field to the current system date then creates a new Share Analysis record for the selected group that has the counters set to 0.
\nField Number         **002**
\nMnemonic             **STATEMENTDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **09302**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe information in this record can be used for fee posting and producing analysis statements for the specified statement group. Accumulated information in this record is kept for later analysis while new information continues to accumulate. Under normal circumstances, you should not revise this field.
\n***Important:***  Symitar Quest updates the counters for the first Analysis record in a share where the effective date of a transaction falls after the date in the Statement Prev Date field and on or before the date in the Statement Date field, even if the record has already been cut off. We highly recommend that you perform share analysis cutoff after all transactions have been posted for the day, but if this is not possible, you should not generate your account analysis statements until the system date has been advanced past the share analysis cutoff date.
`)
shareAnalysisFields.set("statementgroup", ` 
\n### Statement Group
\nThe information in this record can be used for fee posting and producing analysis statements for the specified statement groups.
\nField Number         **004**
\nMnemonic             **STATEMENTGROUP**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **09304**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe Statement Cutoff Processing batch program lets you specify a list of statement groups to set a statement cutoff date for all shares in the specified statement groups.
\n
\nEnter a credit union-defined code (0-99) to identify the statement group that includes statements for this share. If you want to cut off analysis statements separately from shares and loans, use a unique statement group.
`)
shareAnalysisFields.set("statementprevdate", ` 
\n### Statement Prev Date
\nThe information in this record can be used for fee posting and producing analysis statements for the specified statement group.
\nField Number         **003**
\nMnemonic             **STATEMENTPREVDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **09303**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe Statement Cutoff Processing batch program creates a new Share Analysis record for the selected group with the counters set to 0 and sets this field to the current system date in the new record. This allows the accumulated information to be kept for later analysis while allowing new information to accumulate. Under normal circumstances, you should not revise this field.
\n***Important:***  Symitar Quest updates the counters for the first Analysis record in a share where the effective date of a transaction falls after the date in the Statement Prev Date field and on or before the date in the Statement Date field, even if the record has already been cut off. We highly recommend that you perform share analysis cutoff after all transactions have been posted for the day, but if this is not possible, you should not generate your account analysis statements until the system date has been advanced past the Share Analysis cutoff date.
`)
shareAnalysisFields.set("cashamttotal", ` 
\n### Cash Amount Total
\nThis field stores the monthly total of CD, CR, ATM, FR and FD transactions on analyzed accounts.
\nField Number         **007**
\nMnemonic             **CASHAMTTOTAL**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **09307**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareAnalysisFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date in the Record Change Date field when you create, change, or save the Share Analysis record.
\nField Number         **008**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **09308**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThere will be times when Symitar Quest updates the Record Change Date field because the record was saved, even though there may not be any actual changes in the record. However, Symitar Quest does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
shareAnalysisFields.set("locator", ` 
\n### Locator
\nThis field value in each record is unique for each member account.
\nField Number         **005**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **09305**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nBecause each Locator field value is unique, it can be used as a unique identification of a specific record. Symitar Quest automatically assigns the Locator field value when the record is created, and you cannot change it. The value is a positive number greater than zero.
`)
shareAnalysisFields.set("counter", ` 
\n## COUNTER:1
\n### Deposit Count
\nThis counter is used to track teller deposit (transactions using the SD transaction code) and batch deposit transactions.
\nField Number         **006:001**
\nMnemonic             **COUNTER:1**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can use the counters in this record to keep track of certain kinds of share activity. Counters 001-050 are system-defined, and counters 051-100 are defined by the financial institution. Symitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter matches the ANALYSISFREECOUNTMAX constant.
\n
\n## COUNTER:2
\n### Dep Correction Count
\nThis counter is used to track teller deposit transactions with adjustments.
\nField Number         **006:002**
\nMnemonic             **COUNTER:2**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can use the counters in this record to keep track of certain kinds of share activity. Counters 001-050 are system-defined, and counters 051-100 are credit union-defined. Symitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n## COUNTER:3
\n### Returned Deposit Count
\nThis counter is used to track returned deposits.
\nField Number         **006:003**
\nMnemonic             **COUNTER:3**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe credit union can use the counters in this record to keep track of certain kinds of share activity. Counters 001-050 are system-defined, and counters 051-100 are credit union-defined. You must manually maintain this counter in the Account Manager.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n## COUNTER:4
\n### Draft Count
\nThis counter is used to track draft transactions (transactions using the DR transaction code, DRAFTPOST, ACHPOST, ON US, etc.).
\nField Number         **006:004**
\nMnemonic             **COUNTER:4**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe credit union can use the counters in this record to keep track of certain kinds of share activity. Counters 001-050 are system-defined, and counters 051-100 are credit union-defined. Symitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n## COUNTER:5
\n### Bulk Count
\nThis counter is used to track bulk deposits (transactions using the BK transaction code).
\nField Number         **006:005**
\nMnemonic             **COUNTER:5**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe credit union can use the counters in this record to keep track of certain kinds of share activity. Counters 001-050 are system-defined, and counters 051-100 are credit union-defined. This is a system-defined counter used to track bulk deposits (BK transaction code). Symitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n## COUNTER:6
\n### Change Order Count
\nThis counter is used to track the number of change orders.
\nField Number         **006:006**
\nMnemonic             **COUNTER:6**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n## COUNTER:7
\n### NSF Count
\nThis counter is used to track the number of NSF batch postings.
\nField Number         **006:007**
\nMnemonic             **COUNTER:7**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n## COUNTER:8 
\n### Sweep Count
\nThis counter is used to track the number of sweep count transactions.
\nField Number         **006:008**
\nMnemonic             **COUNTER:8**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n## COUNTER:9
\n### Stop Payment Count
\nThis counter is used to track the number of stop payment transactions (SP transaction code, audio, home banking).
\nField Number         **006:009**
\nMnemonic             **COUNTER:9**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:10
\n### Account Printout Count
\nThis counter is used to track the number of account printouts.
\nField Number         **006:010**
\nMnemonic             **COUNTER:10**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou must maintain this counter manually in the Account Manager.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:11
\n### Stmt Balancing Count
\nThis counter is used to track the number of statement balances.
\nField Number         **006:011**
\nMnemonic             **COUNTER:11**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou must manually maintain this counter in the Account Manager.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:12
\n### Statement Copy Count
\nThis counter is used to track statement balances.
\nField Number         **006:012**
\nMnemonic             **COUNTER:12**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou must manually maintain this counter in the Account Manager.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:13
\n### Check Copy Count
\nThis counter is used to track check copies.
\nField Number         **006:013**
\nMnemonic             **COUNTER:13**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou must manually maintain this counter in the Account Manager unless you modify audio and home banking edits.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:14
\n### Primary Check Count
\nThis counter is used to track checks disbursed from the primary printer (transactions using the KD and KS transaction codes).
\nField Number         **006:014**
\nMnemonic             **COUNTER:14**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:15
\n### Secondary Check Count
\nThis counter is used to track checks disbursed from the secondary printer (transactions using the KO and KS transaction codes).
\nField Number         **006:015**
\nMnemonic             **COUNTER:15**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:16
\n### Money Order Count
\nThis counter is used to track money order transactions (transactions using the MO transaction code).
\nField Number         **006:016**
\nMnemonic             **COUNTER:16**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:17
\n### Wire Xfer In Count
\nThis counter is used to track incoming wire transfers.
\nField Number         **006:017**
\nMnemonic             **COUNTER:17**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou must manually maintain this counter in the Account Manager if you do not have the Wire Management module. If you have the module, the counts are automatically incremented by the Wire Posting batch program.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:18
\n### Wire Xfer Out Count
\nThis counter is used to track outgoing wire transfers.
\nField Number         **006:018**
\nMnemonic             **COUNTER:18**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou must manually maintain this counter in the Account Manager if you do not have the Wire Management module. If you have the module, the counts are automatically incremented by the Wire Posting batch program.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:19
\n### Overdraft Xfer Count
\nThis counter is used to track transfers to cover overdrafts (batch postings).
\nField Number         **006:019**
\nMnemonic             **COUNTER:19**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:20
\n### Courtesy Pay Count
\nThis counter is used to track courtesy pay transactions.
\nField Number         **006:020**
\nMnemonic             **COUNTER:20**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system automatically counts courtesy pays if you have set the Count Courtesy Pays prompt in the batch program to Yes.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:21
\n### ACH Debit Count
\nThis counter is used to track ACH debits when they post.
\nField Number         **006:021**
\nMnemonic             **COUNTER:21**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:22
\n### ACH Credit Count
\nThis counter is used to track ACH credits when they post.
\nField Number         **006:022**
\nMnemonic             **COUNTER:22**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:23
\n### ACH Orig Debit Count
\nThis counter is used to track ACH debits when you run ACH Origination.
\nField Number         **006:023**
\nMnemonic             **COUNTER:23**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:24
\n### ACH Orig Credit Count
\nThis counter is used to track ACH credits when you run ACH Origination.
\nField Number         **006:024**
\nMnemonic             **COUNTER:24**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:25
\n### Checks Received Count
\nThis counter is used to track checks received and checks cashed (transactions using the KR and KC transaction codes).
\nField Number         **006:025**
\nMnemonic             **COUNTER:25**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can use the counters in this record to keep track of certain kinds of share activity. Counters 001-050 are system-defined, and counters 051-100 are credit union-defined. Symitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:26
\n### On Us Disbursed Count
\nThis counter is used to track on-us items drawn on an analyzed share and disbursed from an account (transactions using the ON transaction code).
\nField Number         **006:026**
\nMnemonic             **COUNTER:26**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:27
\n### Lobby Visit Count
\nThis counter is used to track lob visits (teller transactions).
\nField Number         **006:027**
\nMnemonic             **COUNTER:27**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can use the counters in this record to keep track of certain kinds of share activity. Counters 001-050 are system-defined, and counters 051-100 are defined by the financial institution. You must maintain this counter manually.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:28
\n### Loose Coin Count
\nThis counter is used to track loose coin bulk deposits (transactions using the BK transaction code).
\nField Number         **006:028**
\nMnemonic             **COUNTER:28**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:29
\n### Rolled Coin Count
\nThis counter is used to track rolled coin bulk deposits (transactions using the BK transaction code).
\nField Number         **006:029**
\nMnemonic             **COUNTER:29**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:30
\n### Loose Currency Count
\nThis counter is used to track loose currency bulk deposits (transactions using the BK transaction code).
\nField Number         **006:030**
\nMnemonic             **COUNTER:30**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:31
\n### Strap Currency Count
\nThis counter is used to track strapped currency bulk deposits (transactions using the BK transaction code).
\nField Number         **006:031**
\nMnemonic             **COUNTER:31**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:32
\n### On Us Deposited Count
\nThis counter is used to track on-us items drawn on a different account and deposited to an analyzed share (transactions using the ON transaction code).
\nField Number         **006:032**
\nMnemonic             **COUNTER:32**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest maintains this counter automatically. Under normal circumstances, you should not revise this field.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
\n
\n##  COUNTER:33–COUNTER:050
\n### Counter 033 Count–Counter 050 Count
\nThese counters are reserved for future use.
\nField Number         **006:033–006:050**
\nMnemonic             **COUNTER:33–COUNTER:050**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nCounters 001-050 are system-defined and counters 051-100 are defined by the financial institution.
\n
\n##  COUNTER:51–COUNTER:100
\n### Counter 051 Count–Counter 100 Count
\nThese counters are defined by the financial institution in the Analysis Global Parameters in the Parameter Manager.
\nField Number         **006:051–006:100**
\nMnemonic             **COUNTER:51–COUNTER:100**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **09306**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nCounter 051–100 Count fields do not appear in the Analysis Plan Parameters until it is defined.
\n
\nThis field does not appear in the Share Analysis record unless the Per Item Charge parameter for this field (in the Analysis Plan Parameters) is greater than 0.00 or the Number of Free Items parameter in Analysis Plan Parameters matches the ANALYSISFREECOUNTMAX constant.
`)
