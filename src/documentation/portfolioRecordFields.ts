export const portfolioRecordFields = new Map<string, string>()
portfolioRecordFields.set("id", ` 
\n### Portfolio ID
\nThis field stores a credit union-defined ID to identify the Portfolio record.
\nField Number         **001**
\nMnemonic             **ID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **11403**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
`)
portfolioRecordFields.set("description", ` 
\n### Description
\nThis field stores the credit union-defined field and typically contains a member's name or other identifying information.
\nField Number         **005**
\nMnemonic             **DESCRIPTION**
\nData Type            **30 Characters**
\nSource               **User-entered**
\nHelp File            **06905**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nIn an account with more than one Portfolio record, you can use this field to distinguish between Portfolio records. For example, if each spouse in a joint account has a separate Portfolio record, you can enter the person's name in this field of his or her Portfolio record.
`)
portfolioRecordFields.set("balance", ` 
\n### Balance
\nThis field contains the total value of all stocks described in the Portfolio Tracking records under this Portfolio record.
\nField Number         **800**
\nMnemonic             **BALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nThe system calculates the value of the stocks in each Portfolio Tracking record by multiplying the Number of Shares field value in the Portfolio Tracking record by the Type # Decimal Price parameter or the Type # Fraction Price parameter value in the Stock Parameters.
\n
\nIf there are no Portfolio Tracking records under this record, the system displays 0.00 in this field.
\n
\nThe system automatically recalculates the value of this field whenever either of the following events occur:
`)
portfolioRecordFields.set("availablebalance", ` 
\n### Available Balance
\nThis field contains the total value of the member's stocks available for pledging.
\nField Number         **801**
\nMnemonic             **AVAILABLEBALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nThe system does the following to calculate the value in this field:
\n
\nIf there are no Portfolio Tracking records under this record, the system displays 0.00 in this field.
\n
\nThe system automatically recalculates the value of this field when any of the following events occur:
`)
portfolioRecordFields.set("closedate", ` 
\n### Close Date
\nThis field stores the date the Portfolio record was closed.
\nField Number         **003**
\nMnemonic             **CLOSEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06903**
\nDefault Control      **No**
\nDefault Value        **Date Null**
`)
portfolioRecordFields.set("fmlastdate", ` 
\n### FM Last Date
\nThis field stores the last date file maintenance was performed on the Portfolio record.
\nField Number         **002**
\nMnemonic             **FMLASTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nThe system updates this field with the current system date whenever you update a Portfolio record or a Tracking or Note record under a Portfolio record.
\n***Important:***  This field in the Portfolio record is not updated when the file maintenance is performed by a batch process.
`)
portfolioRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThe system stores the system date in this field when you create, change, or save the Portfolio record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **006**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **06906**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\n***Important:***  The system does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot change the value of this field.
`)
portfolioRecordFields.set("notepurgedate", ` 
\n### Note Purge Date
\nThis field stores the date when you purged the Note records under the Portfolio record.
\nField Number         **004**
\nMnemonic             **NOTEPURGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nThe system updates this field with the current system date whenever you purge the Note records under the Portfolio record.
`)
