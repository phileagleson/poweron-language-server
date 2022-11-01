export const householdRecordFields = new Map<string, string>()
householdRecordFields.set("type", ` 
\n### Household Type
\nThis field stores a credit union-defined code that identifies the type of Household record.
\nField Number         **001**
\nMnemonic             **TYPE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **02301**
\nDefault Control      **No**
\nDefault Value **00**
\n
`)
householdRecordFields.set("accountnumber", ` 
\n### Household Account
\nThis field stores the account number of a family member's account.
\nField Number         **002**
\nMnemonic             **ACCOUNTNUMBER**
\nData Type            **10 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **02302**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\n
\nEnter the account number of a family member's account (not the head-of-household account). You can type * to display and choose from a list of all account numbers.
\nIf you do not enter an account number or enter an invalid account number, the system displays the message:
\n   - Account Not Found
\n   - If you enter the account number of the current account, the system displays the message:
\n   - Cannot Be Current Account
\n   - You must enter a valid account number.
\n
\nWhenever you enter an account number in this field in a non-head of household Account record, the system creates another Household record under the Account record identified in this field and updates the Household Account field in the new Household record with the account number of the non-head of household account.
`)
householdRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThe system stores the system date in this field when you create, change, or save the Household record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **004**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **02304**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot change the value of this field.
`)
householdRecordFields.set("locator", ` 
\n### Locator
\nThis field stores a unique number within each member account that can be used as a unique identification of this record.
\nField Number         **003**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **02303**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n
\nThe system automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
