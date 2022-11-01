export const lookupRecordFields = new Map<string, string>()
lookupRecordFields.set("type", ` 
\n### Lookup Type
\n
\n This field stores a credit union-defined code that identifies the type of Lookup record.
\nField Number         **001**
\nMnemonic             **TYPE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **00201**
\nDefault Control      **No**
\nDefault Value **00**
\n
\nEnter a credit union-defined code (00-99) to identify the type of Lookup record.
`)
lookupRecordFields.set("number", ` 
\n### Lookup
\n
\n This field stores the value used to look up the account.
\nField Number         **002**
\nMnemonic             **NUMBER**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **00202**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter information (up to 20 characters) that can be used to look up the account. You can enter any information (such as a credit card number or employee number) to be used as a cross-reference to the account number. For example, if you enter a credit card number, you can access the account by typing @ followed by the credit card number at any Account prompt.
\n
\nIf you do not make an entry, the system displays the following message and you remain in this field:
\n   - Cannot be blank
\n   - You must enter a lookup number to proceed.
\nIf you create a Lookup record and enter a lookup number that has already been used in another Lookup record, the system displays one of the following messages:
\n   - Duplicate Lookup Number with Type # on Same Account
\n   - Duplicate Lookup Number with Type # on Account #
\n
\nYou can still approve the Lookup record if you intend to use the same lookup value for different lookup types or for different accounts.
`)
lookupRecordFields.set("idtype", ` 
\n### Reference ID Type
\n
\n This field stores a code that indicates if the lookup refers to a specific Share or Loan record.
\nField Number         **003**
\nMnemonic             **IDTYPE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **00203**
\nDefault Control      **No**
\nDefault Value **2**
\n
\n#### Data Type Descriptions
\n##### (0) Share
\n   The lookup refers to a specific Share record in the member's account.##### (1) Loan
\n   The lookup refers to a specific Loan record in the member's account.##### (2) None
\n   The lookup does not refer to a specific Share or Loan record in the member's account, but to the entire account.
`)
lookupRecordFields.set("id", ` 
\n### Reference ID
\n
\n This field stores the ID of the Share or Loan record this lookup refers to.
\nField Number         **004**
\nMnemonic             **ID**
\nData Type            **2 0r 4 Characters**
\nSource               **User-entered**
\nHelp File            **00204**
\nDefault Control      **No**
\nDefault Value **(Blank)**
`)
lookupRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\n
\n The system stores the system date in this field when you create, change, or save the Lookup record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **006**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00206**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot change the value of this field.
`)
lookupRecordFields.set("locator", ` 
\n### Locator
\n
\n This field stores a unique number within each member account that can be used as a unique identification of this record.
\nField Number         **005**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **00205**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
