export const loanBankruptcyPrepetitionBalanceRecordFields = new Map<string, string>()
loanBankruptcyPrepetitionBalanceRecordFields.set("id", `
\n## ID
\nThis field stores the four-character ID that identifies the PrePetition Bal record.
\nField Number         **001**
\nMnemonic             **ID**
\nData Type            **4 Characters**
\nSource               **User-entered**
\nHelp File            **32501**
\nDefault Control      **No**
\nDefault Value **Blank**
\n
\nAssign a value to the PrePetition Bal ID field when creating the PrePetition Bal record.
\n
\nYou cannot assign the same pre-petition balance ID to another PrePetition Bal record under the associated Bankruptcy record. If you try to do so, the following error message appears:
\n
\nThis field only allows a numeric value, and an error message appears if the value is not numeric.
`)
loanBankruptcyPrepetitionBalanceRecordFields.set("opendate", `
\n## OPENDATE
\nThe system updates this field with the system date when the PrePetition Bal record is created.
\nField Number         **002**
\nMnemonic             **OPENDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **32502**
\nDefault Control      **No**
\nDefault Value **System date at creation**
`)
loanBankruptcyPrepetitionBalanceRecordFields.set("closedate", `
\n## CLOSEDATE
\nThis field stores the date a PrePetition Bal record is closed.
\nField Number         **003**
\nMnemonic             **CLOSEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **32503**
\nDefault Control      **No**
\nDefault Value **Blank**
\n
\nYou cannot enter a value in the Close Date field if the Loan Bankruptcy PrePetition Bal record Balance field is not 0.00. The system returns the following message:
\n
\nPrePetition Bal records are deleted with their parent Loan record, when the Loan record is deleted.
`)
loanBankruptcyPrepetitionBalanceRecordFields.set("recordchangedate", `
\n## RECORDCHANGEDATE
\nThis field stores the system date when you create, change, or save the PrePetition Bal record.
\nField Number         **004**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **32504**
\nDefault Control      **No**
\nDefault Value **Blank**
\n
\nThe system updates the Record Change Date field when the record is saved, even if there are not any actual changes in the records.
\n
\nYou cannot perform file maintenance on this field.
`)
loanBankruptcyPrepetitionBalanceRecordFields.set("lastpaymentdate", `
\n## LASTPAYMENTDATE
\nThis field stores the date of the last pre-petition balance payment.
\nField Number         **005**
\nMnemonic             **LASTPAYMENTDATE**
\nData Type            **Date**
\nSource               **System-calculated or user-entered**
\nHelp File            **32505**
\nDefault Control      **No**
\nDefault Value **Blank**
\n
\nThe system updates this field with the effective date of each Loan Balance Payment (LB) teller transaction posted to the balance.
\n
\nYou may have to adjust this field manually if you void or adjust a Loan Balance Payment (LB) transaction.
`)
loanBankruptcyPrepetitionBalanceRecordFields.set("amountcode", `
\n## AMOUNTCODE
\nThe amount code defines the amount in the PrePetition Bal record, and how the system processes loan balance transactions.
\nField Number         **006**
\nMnemonic             **AMOUNTCODE**
\nData Type            **Code to 7**
\nSource               **User-entered**
\nHelp File            **32506**
\nDefault Control      **No**
\nDefault Value **(1) Principal**
\n
\nData Type Descriptions
\n   - (1) Principal
\n   - (2) Interest
\n   - (3) Escrow
\n   - (4) Late Charge
\n   - (5) Billed Fee
\n   - (6) Misc Expenses
\n   - (7) Unapplied
\n
\nThe Amount Code field option (7) Unapplied can only be selected if the Loan record Interest Type field is set to (1) Monthly 360 Day or (8) Scheduled 364. If the Interest Type field is set to a value other than (1) Monthly 360 Day or (8) Scheduled 364, the system sends the following error message:
\nInvalid Amount Code - Unapplied Partial Payment not allowed for this loan
\n
\nYou cannot assign the same amount code to another PrePetition Bal record under the associated Loan Bankruptcy record. If you attempt to assign the same amount code, the following error message appears:
\n
\nYou cannot assign an amount code value of 0.
`)
loanBankruptcyPrepetitionBalanceRecordFields.set("balance", `
\n## BALANCE
\nThis field stores the current balance for the record.
\nField Number         **007**
\nMnemonic             **BALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **32507**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system updates this field with the current balance whenever a Loan Balance Payment (LB), or Loan Balance Transfer (BG) teller transaction affects the PrePetition Bal record.
\n
\nThis field cannot be accessed for file maintenance. Adjustments can only be made using the Loan Balance Transfer (BG) transaction.
`)
loanBankruptcyPrepetitionBalanceRecordFields.set("balanceytd", `
\n## BALANCEYTD
\nThis field stores the total of all monies paid on the balance during the current year (to date).
\nField Number         **008**
\nMnemonic             **BALANCEYTD**
\nData Type            **Money**
\nSource               **System-calculated or user-entered**
\nHelp File            **32508**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a Loan Balance Payment (LB) is posted, the system adds the transaction amount to the value in this field.
\n
\nThe first time that the Close Day Processing batch program is run and changes the system date to a new calendar year, the system transfers the value in this field to the Balance Paid Last Year field and resets this field to 0.00.
\nTip: Adjust this field manually if you void or adjust a Loan Balance Payment (LB) transaction.
`)
loanBankruptcyPrepetitionBalanceRecordFields.set("balancelastyear", `
\n## BALANCELASTYEAR
\nThis field stores the total of all monies paid on the balance during the previous year.
\nField Number         **009**
\nMnemonic             **BALANCELASTYEAR**
\nData Type            **Money**
\nSource               **System-calculated or user-entered**
\nHelp File            **32509**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time that the Close Day Processing batch program is run and changes the system date to a new calendar year, the system transfers the amount in the Balance Paid YTD field to this field.
\nTip: Adjust this field manually if you void or adjust a Loan Balance Payment (LB) transaction.
`)
loanBankruptcyPrepetitionBalanceRecordFields.set("originalbalance", `
\n## ORIGINALBALANCE
\nFunctionality for this field will be available in a future release.
\n
\nThis field stores the original balance of the record.
\nField Number         **010**
\nMnemonic             **ORIGINALBALANCE**
\nData Type            **Money**
\nSource               ****
\nHelp File            **32510**
\nDefault Control      ****
\nDefault Value ****
\n
\nThe system updates this field with the transaction amount when a Loan Balance Transfer (BG) teller transaction is performed.
`)
loanBankruptcyPrepetitionBalanceRecordFields.set("includeinloanbal", `
\n## INCLUDEINLOANBAL
\nFunctionality for this field will be available in a future release.
\n
\nThis field indicates whether the Balance field amount is included in the corresponding Loan record field.
\nField Number         **011**
\nMnemonic             **INCLUDEINLOANBAL**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **32511**
\nDefault Control      **No**
\nDefault Value **(0) No**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   Select this option if the Balance field amount is not included in the corresponding Loan record field.##### (1) Yes
\n   Select this option if the Balance field amount is included in the corresponding Loan record field.
\n       - Example:
\n       - If Amount Code equals	Add to Loan record field equals
\n       - (1) Principal	Balance
\n       - (2) Interest	Interest Unpaid
\n       - (3) Escrow	Escrow Unpaid
\n       - (4) Late Charge	Late Charge Unpaid
\n       - (5) Billed Fee	Billed Fee Unpaid
\n       - (6) Misc Expenses	Billed Fee Unpaid
\n       - (7) Unapplied	Unapplied Partial Payment
\n   
\n       - This option is not available if the Type field is set to (1) Bankruptcy in the associated Loan Bankruptcy record. The following error message appears:
\n   
\n       - Balance cannot be included when Bankruptcy record type is Bankruptcy
\n   
\n       - There is no corresponding Loan record field for termination fees or sales tax.
`)
loanBankruptcyPrepetitionBalanceRecordFields.set("includeincreditrpt", `
\n## INCLUDEINCREDITRPT
\nFunctionality for this field will be available in a future release.
\n
\nThis field indicates whether the Balance field amount is included in credit reporting.
\nField Number         **012**
\nMnemonic             **INCLUDEINCREDITRPT**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **32512**
\nDefault Control      **No**
\nDefault Value **(0) No**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   Select this option if the Balance field amount is not included in credit reporting.##### (1) Yes
\n   Select this option if the Balance field amount is included in credit reporting.
\n`)
