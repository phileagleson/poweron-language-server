export const externalLoanRecordFields = new Map<string, string>()
externalLoanRecordFields.set("description", ` 
\n### Description
\nThis field stores a description of the loan.
\nField Number         **003**
\nMnemonic             **DESCRIPTION**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **32203**
\nDefault Control      **No**
\nDefault Value **(Blank)**
`)
externalLoanRecordFields.set("type", ` 
\n### External Loan Type
\nThis field stores a credit union-defined code that the system bases the rules associated with the loan.
\nField Number         **002**
\nMnemonic             **TYPE**
\nData Type            **Code to 8**
\nSource               **User-entered**
\nHelp File            **32202**
\nDefault Control      **No**
\nDefault Value **1**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Not used.##### 1–8
\n   Credit union-defined code from the External Loan Type parameter, defined in External Loan Processing Parameters, that the system bases the rules associated with the loan.
\n`)
externalLoanRecordFields.set("accountnumber", ` 
\n### External Loan Account Number
\nThis field stores the account number of the external loan on the third-party system.
\nField Number         **001**
\nMnemonic             **ACCOUNTNUMBER**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **32201**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nThe external loan account number can be masked when it appears in the system or when printed (see External Loan Processing Parameters).
\n***Important:***  You must enter an account number in this field. If you do not make an entry, the system displays the following message and will not let you save the record:
\nCannot be blank
`)
externalLoanRecordFields.set("status", ` 
\n### Status
\nThis field stores a code that indicates if the external loan is active or inactive.
\nField Number         **029**
\nMnemonic             **STATUS**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **32229**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Active
\n   The loan is active, and it appears in teller transactions, and no activities are restricted.
\n   
\n       - With this status, you can still place warnings on an External Loan record.
\n##### (1) Inactive
\n   The loan is inactive and it does not appear in teller transactions. You are not able to perform activity on the loan through teller transactions and activity performed through batch processing or SymConnect is restricted. This status is equivalent to a no batch posting allowed warning placed on the External Loan record.   With this status, the loan still appears in the account tree.
\n`)
externalLoanRecordFields.set("activitydate", ` 
\n### Activity Date
\nThis field stores the date of the previous monetary transaction that affected the External Loan record.
\nField Number         **019**
\nMnemonic             **ACTIVITYDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **32219**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever a teller, ATM network, MemberConnect system, SymConnect client system, or batch program posts a monetary transaction to the Loan record, the system updates this field with the effective date of the previous monetary transaction.
\n
\nWhen the system updates this field in the External Loan record, the Activity Date field in the Account record is automatically updated only if the Activity Date Update parameter in the External Loan Processing Parameters is set to Yes.
\n
\nThis date only reflects activity in the system. Activity performed directly by the third-party vendor will not be included in this field.
`)
externalLoanRecordFields.set("lastadvdate", ` 
\n### Last Advance Date
\nThis field stores the last time an advance was taken against the loan.
\nField Number         **023**
\nMnemonic             **LASTADVDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **32223**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system updates this field when a Loan Advance (LA) transaction is performed or when changed in a third-party file.
\n
\nThe system does not update this field for loan add-ons caused by insurance, taxes, fees, adjustments, or loan recast.
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("closedate", ` 
\n### Close Date
\nThis field stores the date a loan is closed.
\nField Number         **018**
\nMnemonic             **CLOSEDATE**
\nData Type            **Date**
\nSource               **System-entered or User-entered**
\nHelp File            **32218**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen you open a new loan, Symitar Quest sets this field to blank. You must update this field manually or by an edit run.
\n
\nOnce a loan has a close date, Symitar Quest does not allow any further monetary transactions that affect the external loan.
\n
\nUnlike a traditional Loan record, Symitar Quest does allow you to enter a close date if the Loan Balance field is not set to 0.00.
\n
\nYou may use the Purge Account Processing batch program to delete a batch of External Loan records. To do this, an External Loan record must have a close date on or before the system date, but the External Loan Balance field does not have to be set to 0.00.
\n
\nWhen the Close Date field has a value, the word "Closed" appears on the account tree.
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("latechargedue", ` 
\n### Late Charge Due
\nThis field stores the amount of any late charges the member must pay on the date entered in the Next Payment Due Date field.
\nField Number         **008**
\nMnemonic             **LATECHARGEDUE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **32208**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("statementgroup", ` 
\n### Statement Group
\nThis field stores the credit union-defined statement group for the loan.
\nField Number         **012**
\nMnemonic             **STATEMENTGROUP**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **32212**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nYou can use this field to categorize loans for reports, displays, and statement printing. Enter the number of the statement group (0-99) that includes statements for this loan. Whenever the Statement Generation batch program generates statements for the statement group specified in this field, Symitar Quest produces the statement for this loan.
`)
externalLoanRecordFields.set("statementmailcode", ` 
\n### Statement Mail Code
\nThis field stores a code that defines how the statement should be sent to the member.
\nField Number         **013**
\nMnemonic             **STATEMENTMAILCODE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **32213**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Normal
\n   This loan should be mailed to the member in the usual manner.##### 1–99
\n   This loan should not be mailed to the member. The use of these non-mail codes is entirely user-entered. You can use these non-mail codes to categorize reasons for not mailing statements: incorrect address, foreign address (extra postage required), employee account, etc.
\nIf you have defined custom text descriptions for each mail code in Statement Mail Code Names Parameters, those text descriptions display in the drop-down menu when revising this field. This helps you select the correct mail code as defined by your credit union. Symitar Quest displays the description and the mail code in the field; however, only the mail code is included on the member's statement.
\n
\nThe Statement Generation batch program can use this field to sort loan statements.
`)
externalLoanRecordFields.set("statementdate", ` 
\n### Statement Cutoff Date
\nThis field stores the statement cutoff date for the loan.
\nField Number         **014**
\nMnemonic             **STATEMENTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **32214**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("statementprevdate", ` 
\n### Statement Previous Date
\nThis field stores the date of the last statement for the external loan.
\nField Number         **015**
\nMnemonic             **STATEMENTPREVDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **32215**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("balance", ` 
\n### Balance
\nThis field stores the principal balance of the loan on the date it was last updated.
\nField Number         **004**
\nMnemonic             **BALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **32204**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe External Loan edit updates this field when the third-party file indicates that a payment was made and the principal on the loan has changed.
\n
\nDepending on when it was last updated with an edit run, this amount may not accurately reflect the balance on the loan.
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("paymentdue", ` 
\n### Payment Due
\nThis field stores the total payment amount for the loan.
\nField Number         **009**
\nMnemonic             **PAYMENTDUE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **32209**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("duedate", ` 
\n### Next Payment Due Date
\nThis field stores the due date for the total payment amount stored in the Payment Due field.
\nField Number         **010**
\nMnemonic             **DUEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **32210**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nDepending on when it was last updated, this date may not be in the future, and the member may already have made the payment.
\n
\nThe system considers a loan with this field in the past delinquent even though it may be current on the third-party system.
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("creditlimit", ` 
\n### Credit Limit
\nThis field stores the credit limit of the external loan. This field is for informational use only. It is up to the third-party processor to use this field.
\nField Number         **020**
\nMnemonic             **CREDITLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **32220**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system uses the values in the Available Credit and Available Cash Advance fields to determine the available advance amount on a loan.
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("availcredit", ` 
\n### Available Credit
\nThis field stores the available credit amount provided by the external loan provider.
\nField Number         **021**
\nMnemonic             **AVAILCREDIT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **32221**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system initially sets this field value to 0.00 for closed-end loans.
\n
\nThe external loan provider provides this field value. This field is not updated when a Loan Advance (LA) transaction is performed. The third-party provider must supply a new file to update the field.
\n
external loan providers may provide negative values for this field, but this field does not accept them. The Loan record Available Credit field accepts negative amounts, and external loans represented by Tracking records accept negative amounts, but when converting to External Loan records code to update this field via file maintenance, the code must be written to exclude negative values or the file maintenance fails.
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("cashadvancelimit", ` 
\n### Cash Advance Limit
\nThis field stores the cash advance credit limit of the external loan.
\nField Number         **030**
\nMnemonic             **CASHADVANCELIMIT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **32230**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is for informational use only. It is up to the third-party processor to use this field.
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("availablecashadvance", ` 
\n### Available Cash Advance
\nThis field stores the available cash advance provided by the external loan provider.
\nField Number         **031**
\nMnemonic             **AVAILABLECASHADVANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **32231**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system initially sets this field value to 0.00 for closed-end loans.
\n
\nThe external loan provider provides this field value. This field is not updated when a Loan Advance (LA) transaction is performed. The third-party provider must supply a new file to update the field.
\nThe system performs the following calculation to determine what cash is available for advance on the loan:
\nAvailable Cash Advance field value - Advance Since Update field value = available cash advance
\n
\nThe Cash Advance Limit field value is not checked.
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("advance", ` 
\n### Advance Since Update
\nThis field stores the accumulated amount of all advances since the core FICS® server program last updated the status of the External Loan record.
\nField Number         **022**
\nMnemonic             **ADVANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **32222**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
externalLoanRecordFields.set("lastupdatedate", ` 
\n### Info Last Update Date
\nThis field stores the date on which the External Loan record was last updated by an edit run.
\nField Number         **011**
\nMnemonic             **LASTUPDATEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **32211**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
externalLoanRecordFields.set("lastfmdate", ` 
\n### Last FM Date
\nThis field stores the date of the last file maintenance of this External Loan record.
\nField Number         **024**
\nMnemonic             **LASTFMDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **32224**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever you perform file maintenance on this External Loan record using Account File Maintenance or the File Maintenance (FM) teller transaction, the system updates this field with the system date.
\n
\nYou cannot perform file maintenance on this field
`)
externalLoanRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThe system stores the system date in this field when you create, change, or save the record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **025**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **32225**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
externalLoanRecordFields.set("lasttrandate", ` 
\n### Last Transaction Date
\nThis field stores the date of the last teller or batch transaction that affected the External Loan record.
\nField Number         **026**
\nMnemonic             **LASTTRANDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **32226**
\nDefault Control      **No**
\nDefault Value **null**
\n
\nThe system updates this field with the posting date of the last monetary transaction posts to the loan.
\n
\nThis field is used for informational purpose only. You cannot perform file maintenance on this field.
`)
externalLoanRecordFields.set("impoundpayment", ` 
\n### Impound Payment
\nThis field stores the impound payment amount for the mortgage loan.
\nField Number         **007**
\nMnemonic             **IMPOUNDPAYMENT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **32207**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("princintpayment", ` 
\n### P&I Payment
\nThis field stores the amount of the member’s scheduled principal and interest payment for the date entered in the Next Payment Due Date field.
\nField Number         **005**
\nMnemonic             **PRINCINTPAYMENT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **32205**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("escrowpayment", ` 
\n### Escrow Payment Total
\nThis field stores the amount of the member's escrow payment for the date entered in the Next Payment Due Date field.
\nField Number         **006**
\nMnemonic             **ESCROWPAYMENT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **32206**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar stores it in a temporary field. This value may not be the value stored in the Symitar database. The system displays this temporary field value in this field, followed by two asterisks (**), instead of the value in the Symitar database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access the temporary field rather than this field.
`)
externalLoanRecordFields.set("warningcode", ` 
\n### Warning 01 Code - Warning 20 Code
\nThese 20 fields can each contain a code that identifies a different credit union-defined warning to apply to this loan.
\nField Number         **016:1-016:20**
\nMnemonic             **WARNINGCODE:1 - WARNINGCODE:20**
\nData Type            **Code to 999**
\nSource               **User-entered**
\nHelp File            **32216**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No Warning Code
\n   No credit union-defined warning##### 1–999
\n   A credit union-defined warning code to apply to this external loan
\n   
\n       - Depending on your parameters, you can select a code from up to 999 different warning codes.
\n   
\n       - The Expand Warning Codes Miscellaneous parameter, which can be used to limit the number of warnings that appear, does not affect the number of warnings that appear for the External Loan record, regardless of the setting, all 20 warning codes appear.
\n
\nYou can set warning codes to expire automatically by using these fields together with Warning 01 Expiration - Warning 20 Expiration fields.
`)
externalLoanRecordFields.set("warningexpiration", ` 
\n### Warning 01 Expiration - Warning 20 Expiration
\nThese 20 fields can each contain a date after which the corresponding warning should no longer apply to the loan.
\nField Number         **017:1-017:20**
\nMnemonic             **WARNINGEXPIRATION:1 - WARNINGEXPIRATION:20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **32217**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAt any of these fields, you can enter a date after which the corresponding warning (see Warning 01 Code - Warning 20 Code) should no longer apply to the external loan.
\n
\nIf you select a value at a Warning # Code field, but you do not enter a date at the related Warning # Expiration field, the warning remains in effect indefinitely or until you remove the value in the Warning # Code field manually.
\n
\nThe third-party software, not Symitar, determines external loan derogatory status. If a loan becomes current, the system sets the Warning # Expiration field in the External Loan record to the current system date instead of setting the Warning # Code field to zero. A detail inquiry lists the delinquent loan warning and its expiration date. You can display a detail inquiry on the Account or External Loan record to determine when it became current.
`)
externalLoanRecordFields.set("service", ` 
\n### Service 1 - Service 8
\nThe eight Service # fields can each contain a code that identifies a different credit union-defined credit union services offered with an external loan (for example, an ATM card, a debit card, or access to the audio response system).
\nField Number         **027:1-027:8**
\nMnemonic             **SERVICE:1 - SERVICE:8**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **32227**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   No credit union-defined service##### 1–99
\n   A credit union-defined service code offered with the external loan
\n`)
externalLoanRecordFields.set("locator", ` 
\n### Locator
\nThis field stores a unique number within each member account that can be used as a unique identification of this record.
\nField Number         **028**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **32228**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
externalLoanRecordFields.set("nrtbalance", ` 
\n### Balance **
\nThis field contains the principal balance of the loan on the date it was last updated from the external provider database.
\nField Number         **800**
\nMnemonic             **NRTBALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
externalLoanRecordFields.set("nrtprincintpayment", ` 
\n### P&I Payment **
\nThis field contains the amount of the member’s scheduled principal and interest payment for the date entered in the Next Payment Due Date** field from the external provider database.
\nField Number         **801**
\nMnemonic             **NRTPRINCINTPAYMENT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
externalLoanRecordFields.set("nrtescrowpayment", ` 
\n### Escrow Payment Total **
\nThis field contains the amount of the member's escrow payment for the date entered in the Next Payment Due Date** field from the external provider database.
\nField Number         **802**
\nMnemonic             **NRTESCROWPAYMENT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
externalLoanRecordFields.set("nrtimpoundpayment", ` 
\n### Impound Payment **
\nThis field contains the impound payment amount for the mortgage loan from the external provider database.
\nField Number         **803**
\nMnemonic             **NRTIMPOUNDPAYMENT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
externalLoanRecordFields.set("nrtlatechargedue", ` 
\n### Late Charge Due **
\nThis field contains the amount of any late charges the member must pay on the date entered in the Next Payment Due Date** field from the external provider database.
\nField Number         **804**
\nMnemonic             **NRTLATECHARGEDUE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
externalLoanRecordFields.set("nrtpaymentdue", ` 
\n### Payment Due **
\nThis field contains the total payment amount for the loan from the external provider database.
\nField Number         **805**
\nMnemonic             **NRTPAYMENTDUE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
externalLoanRecordFields.set("nrtduedate", ` 
\n### Next Payment Due Date **
\nThis field contains the due date for the total payment amount stored in the Payment Due** field from the external provider database.
\nField Number         **806**
\nMnemonic             **NRTDUEDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
externalLoanRecordFields.set("nrtstatementdate", ` 
\n### Statement Cutoff Date **
\nThis field contains the statement cutoff date for the loan from the external provider database.
\nField Number         **807**
\nMnemonic             **NRTSTATEMENTDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
externalLoanRecordFields.set("nrtstatementprevdate", ` 
\n### Statement Previous Date **
\nThis field contains the date of the last statement for the external loan from the external provider database.
\nField Number         **808**
\nMnemonic             **NRTSTATEMENTPREVDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
externalLoanRecordFields.set("nrtclosedate", ` 
\n### Close Date **
\nThis field contains the date a loan is closed from the external provider database.
\nField Number         **809**
\nMnemonic             **NRTCLOSEDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
externalLoanRecordFields.set("nrtcreditlimit", ` 
\n### Credit Limit **
\nThis field contains the credit limit of the external loan from the external provider database.
\nField Number         **810**
\nMnemonic             **NRTCREDITLIMIT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
externalLoanRecordFields.set("nrtavailcredit", ` 
\n### Available Credit **
\nThis field contains the available credit amount from the external provider database.
\nField Number         **811**
\nMnemonic             **NRTAVAILCREDIT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
externalLoanRecordFields.set("nrtlastadvdate", ` 
\n### Last Advance Date **
\nThis field contains the last time an advance was taken against the loan from the external provider database.
\nField Number         **812**
\nMnemonic             **NRTLASTADVDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
externalLoanRecordFields.set("nrtcashadvancelimit", ` 
\n### Cash Advance Limit **
\nThis field contains the cash advance credit limit of the external loan from the external provider database.
\nField Number         **813**
\nMnemonic             **NRTCASHADVANCELIMIT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
externalLoanRecordFields.set("nrtavailablecashadvance", ` 
\n### Available Cash Advance **
\nThis field contains the available cash advance from the external provider database.
\nField Number         **814**
\nMnemonic             **NRTAVAILABLECASHADVANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  If you have near-real-time capability, when you access this record the external provider sends updates to this value from their database and Symitar Quest stores it in this temporary field. This value may not be the value stored in the Symitar Quest database. Symitar Quest displays this temporary field value in the related field, followed by two asterisks (**), instead of the value in the Symitar Quest database. This display occurs only as long as the user is in the account. To access this temporary value with a PowerOn specfile, you must access this field rather than the Symitar Quest database field.
`)
