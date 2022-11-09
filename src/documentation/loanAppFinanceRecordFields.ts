export const loanAppFinanceRecordFields = new Map<string, string>()
loanAppFinanceRecordFields.set("type", ` 
\n### Finance Type
\nThis field stores a code that categorizes the contents of this Finance record.
\nField Number         **014**
\nMnemonic             **TYPE**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **02114**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Asset
\n   This Finance record represents an asset.##### (1) Liability
\n   This Finance record represents a liability.##### (2) Income
\n   This Finance record represents income.##### (3–9)
\n   This Finance record represents a credit union-defined code to identify the contents of this record. Because the values for this field are user-defined, you should create a help file that lists the user-defined codes and their meanings.
\n`)
loanAppFinanceRecordFields.set("description", ` 
\n### Item Desc/Creditor Name
\nThis field stores the description of the finance item or the name of the creditor.
\nField Number         **003**
\nMnemonic             **DESCRIPTION**
\nData Type            **30 Characters**
\nSource               **User-entered**
\nHelp File            **02103**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter a description of the finance item or the name of the creditor (up to 30 characters), depending on the use of this Finance record.
`)
loanAppFinanceRecordFields.set("address", ` 
\n### Address
\nThis field stores the address of the creditor.
\nField Number         **004**
\nMnemonic             **ADDRESS**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **02104**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the address of the creditor (up to 40 characters).
`)
loanAppFinanceRecordFields.set("reference", ` 
\n### Reference
\nThis field stores any reference information about this Finance record.
\nField Number         **005**
\nMnemonic             **REFERENCE**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **02105**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter any reference information about this Finance record (up to 20 characters). For example, you can use this field to store a vehicle license number, VIN, bank account number, policy number, note number, or any other reference.
`)
loanAppFinanceRecordFields.set("assetvalue", ` 
\n### Asset Value
\nThis field stores the dollar value of an asset outside the credit union.
\nField Number         **006**
\nMnemonic             **ASSETVALUE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **02106**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf this Finance record represents an asset outside the credit union, enter the dollar value of the asset.
`)
loanAppFinanceRecordFields.set("monthlyincome", ` 
\n### Monthly Income
\nThis field stores the monthly income of an income outside the credit union.
\nField Number         **007**
\nMnemonic             **MONTHLYINCOME**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **02107**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf this Finance record represents income from outside the credit union, enter the monthly income amount.
`)
loanAppFinanceRecordFields.set("liabilitybalance", ` 
\n### Liability Balance
\nThis field stores the total liability balance of a liability outside the credit union.
\nField Number         **010**
\nMnemonic             **LIABILITYBALANCE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **02110**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf this Finance record represents a liability outside the credit union, enter the total liability balance.
`)
loanAppFinanceRecordFields.set("monthlyexpense", ` 
\n### Monthly Expense
\nThis field stores the monthly expense amount of an expense outside the credit union.
\nField Number         **011**
\nMnemonic             **MONTHLYEXPENSE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **02111**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf this Finance record represents an expense outside the credit union, enter the monthly expense amount.
`)
loanAppFinanceRecordFields.set("creditlimit", ` 
\n### Credit Limit
\nThis field stores the amount of the credit limit of a credit card or a line of credit outside the credit union.
\nField Number         **012**
\nMnemonic             **CREDITLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **02112**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf this Finance record represents a credit card or a line of credit outside the credit union, enter the amount of the credit limit.
`)
loanAppFinanceRecordFields.set("interestrate", ` 
\n### Interest Rate
\nThis field stores the interest rate that is currently being applied to the item in this record.
\nField Number         **016**
\nMnemonic             **INTERESTRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **02116**
\nDefault Control      **No**
\nDefault Value **.000**
\n
\nThis field is intended for use in on-demand PowerOn specfiles that generate application forms, but is otherwise not used by the system.
`)
loanAppFinanceRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the date when you create, change, or save the Application Finance record.
\nField Number         **018**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **02118**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system stores the system date in this field when you create, change, or save the Application Finance record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\n***Important:***  The system does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
loanAppFinanceRecordFields.set("ownercode", ` 
\n### Owner Code
\nThis field stores a code that identifies the owner of the asset, liability, or expense in this Finance record.
\nField Number         **001**
\nMnemonic             **OWNERCODE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **02101**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Main Applicant
\n   The main applicant is the owner of the asset, income, liability, or expense.##### (1) Coborrower
\n   A co-borrower is the owner of the asset, income, liability, or expense.##### (2) Both
\n   The main applicant and a co-borrower both own the asset, income, liability, or expense.
\n`)
loanAppFinanceRecordFields.set("itemtype", ` 
\n### Item Type
\nThis field stores the kind of asset, income, or liability item in this Finance record.
\nField Number         **002**
\nMnemonic             **ITEMTYPE**
\nData Type            **2 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **02102**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nWhen you create a Finance record from a credit report trade item in Application Processing, this field is updated with the credit report's loan type. If you create or revise this Finance record manually, enter a credit union-defined code (2 characters).
`)
loanAppFinanceRecordFields.set("debtratiousecode", ` 
\n### Debt Ratio Code
\nThis field stores a code that specifies whether the system should include this Finance record in debt ratio calculations.
\nField Number         **013**
\nMnemonic             **DEBTRATIOUSECODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **02113**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Use This Record in Debt Ratio Calculation
\n   You want to include this Finance record in debt ratio calculations.##### (1) Do Not Use This Record in Debt Ratio Calculation
\n   You do not want to include this Finance record in debt ratio calculations.
\n`)
loanAppFinanceRecordFields.set("liabilitystatus", ` 
\n### Liability Status
\nThis field stores a code that represents the status of a liability.
\nField Number         **008**
\nMnemonic             **LIABILITYSTATUS**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **02108**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Current
\n   All payments are current.##### (1) Past Due
\n   Some payments are past due.##### (2) In Collection
\n   The liability account is in collection.
\n`)
loanAppFinanceRecordFields.set("assetstatus", ` 
\n### Asset Status
\nThis field stores a code that represents the status of an asset.
\nField Number         **009**
\nMnemonic             **ASSETSTATUS**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **02109**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Own Completely
\n   The main applicant or co-borrower owns the asset completely.##### (1) Buying
\n   The main applicant or co-borrower is purchasing the asset, but does not yet own it completely.##### (2) Renting
\n   The main applicant or co-borrower rents the asset.
\n`)
loanAppFinanceRecordFields.set("userpledgecode", ` 
\n### User Pledge Code
\nThis field stores a code that provides information about whether an item is pledged for another purpose.
\nField Number         **017**
\nMnemonic             **USERPLEDGECODE**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **02117**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter a credit union-defined code (0-9). This field is intended for use in on-demand PowerOn specfiles that generate application forms, but is otherwise not used by the system.
`)
loanAppFinanceRecordFields.set("locator", ` 
\n### Locator
\nThis field stores a unique number within each member account that can be used as a unique identification of this record.
\nField Number         **015**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **02115**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
