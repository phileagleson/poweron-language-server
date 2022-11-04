export const shareAnalysisGroupRecordFields = new Map<string, string>()
shareAnalysisGroupRecordFields.set("accountnumber", ` 
\n### AnalysisGroup Group Acct
\nThis field stores the linked share account number.
\nField Number         **001**
\nMnemonic             **ACCOUNTNUMBER**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **02551**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nLinking accounts gives you the ability to analyze the entire group as if it were one account. If the secondary share is under the same account as the primary then this field should be left blank.
`)
shareAnalysisGroupRecordFields.set("id", ` 
\n### AnalysisGroup Group ID
\nThis field stores the ID of the linked share.
\nField Number         **002**
\nMnemonic             **ID**
\nData Type            **4 Characters**
\nSource               **User-entered**
\nHelp File            **02552**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
shareAnalysisGroupRecordFields.set("comment1", ` 
\n### AnalysisGroup Group Comment
\nThis field stores 40 characters of comment information.
\nField Number         **003**
\nMnemonic             **COMMENT1**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **02553**
\nDefault Control      **No**
\nDefault Value **<Blank**
`)
shareAnalysisGroupRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThe system stores the system date in this field when you create, change, or save the Share AnalysisGroup Group record.
\nField Number         **005**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **02555**
\nDefault Control      **No**
\nDefault Value **<Blank**
\n
\nAt times, the system updates this field because the record was saved, even though there may not be any actual changes in the record. However, the system does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
shareAnalysisGroupRecordFields.set("locator", ` 
\n### Locator
\nThe system automatically assigns the Locator value when the record is created, and it cannot be changed.
\nField Number         **004**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank**
\n
\nThe Locator field value in each record is unique for each member account. You can use the locator as a unique identification of a specific record. The value is a positive number greater than zero and up to about two billion.
`)

