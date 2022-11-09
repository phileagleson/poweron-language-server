export const externalAccountRecordFields = new Map<string, string>()
externalAccountRecordFields.set("financialinstitutionname", ` 
\n### Financial Institution Name
\nThis field stores the name of the external financial institution.
\nField Number         **007**
\nMnemonic             **FINANCIALINSTITUTIONNAME**
\nData Type            **36 Characters**
\nSource               **User-entered**
\nHelp File            **02257**
\nDefault Control      **No**
\nDefault Value **(Blank)**
`)
externalAccountRecordFields.set("primaryaccountholdername", ` 
\n### Primary Account Holder Name
\nThis field stores the primary name on the account held at the external financial institution.
\nField Number         **008**
\nMnemonic             **PRIMARYACCOUNTHOLDERNAME**
\nData Type            **22 Characters**
\nSource               **User-entered**
\nHelp File            **02258**
\nDefault Control      **No**
\nDefault Value **(Blank)**
`)
externalAccountRecordFields.set("number", ` 
\n### External Account Number
\nThis field stores the account number of the account held at the external financial institution.
\nField Number         **009**
\nMnemonic             **NUMBER**
\nData Type            **17 Characters**
\nSource               **User-entered**
\nHelp File            **02259**
\nDefault Control      **No**
\nDefault Value **(Blank)**
`)
externalAccountRecordFields.set("accttype", ` 
\n### Acct Type
\nThis field stores the type of account held at the external financial institution.
\nField Number         **003**
\nMnemonic             **ACCTTYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **02253**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Savings
\n   The account held at the external financial institution is a savings account.##### (1) Checking
\n   The account held at the external financial institution is a checking account.
\n`)
externalAccountRecordFields.set("rt", ` 
\n### R&T
\nThis field stores the external financial institution's routing number.
\nField Number         **010**
\nMnemonic             **RT**
\nData Type            **9 Characters**
\nSource               **User-entered**
\nHelp File            **02260**
\nDefault Control      **No**
\nDefault Value **(Blank)**
`)
externalAccountRecordFields.set("status", ` 
\n### Status
\nThis field stores the current status.
\nField Number         **001**
\nMnemonic             **STATUS**
\nData Type            **Code to 3**
\nSource               **System-entered or User-entered**
\nHelp File            **02251**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Pending
\n   The default status when a member submits information at the Add an Account in home banking (system-entered)##### (1) Prenote/Verification Sent
\n   The status when prenote and micro transactions are used to validate the financial institution's routing and transit number and the member's account number (system-entered)
\n   
\n       - This status is populated when your credit union runs the ACH Reports batch program and generates either the pre-note or the micro transaction.
\n##### (2) Approved
\n   The status when one of the following verification methods validates the external account information:
\n       - Prenote verification method:
\n       - Your credit union approves the member's accounts and provides the member with access to the Make a Transfer section of external account transfers in home banking (user-entered).
\n       - Micro transaction verification method:
\n       - The member correctly confirms the verification amounts related to the corresponding external account request submitted through home banking (system-entered).
\n##### (3) Rejected
\n   The status when one of the following verification methods are rejected:
\n       - Prenote verification:
\n       - Your credit union rejects the member request for account setup (user-entered).
\n       - Micro transaction verification:
\n       - The member selects the Delete button in home banking and the External Account Transfer record Status field value is Pending, Prenote/Verification Sent, or Failed (system-entered).
\n##### (4) Failed
\n   The status when the member enters an incorrect verification amount to validate an external account setup in home banking
\n       - Once the status is updated to (4) Failed, the member is unable to approve the external account (system-defined) and the system displays the following message:
\n       - FAILED status selected! You
\n       - will need to inform member of
\n       - status change.
\n   
\n       - This status only applies when the SymConnect Client Specific Parameter Verification Method is set to (1) Micro Transaction. However, you can perform file maintenance on this field if either (0) Prenote or (1) Micro Transaction options are set for the Verification Method parameter.
`)
externalAccountRecordFields.set("creationdate", ` 
\n### Creation Date
\nThis field stores the date the External Account record was created.
\nField Number         **004**
\nMnemonic             **CREATIONDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **02254**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system updates this field with the system date when the External Account record is created.
`)
externalAccountRecordFields.set("prenotesentdate", ` 
\n### Prenote/Verification Sent Date
\nThis field stores the date the system sent the prenote or the micro transaction amount to the external financial institution.
\nField Number         **006**
\nMnemonic             **PRENOTESENTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **02256**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system populates this field with the batch date when the ACH Reports batch program is run.
`)
externalAccountRecordFields.set("expirationdate", ` 
\n### Expiration Date
\nThis field stores the date when the member deletes the external financial institution.
\nField Number         **005**
\nMnemonic             **EXPIRATIONDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **02256**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen the member deletes the external financial institution, the system populates this field with the current system date.
\n
\nWhen using the (1) Micro Transaction option in the Verification Method parameter in the SymConnect Client-Specific Parameters:
`)
externalAccountRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThe system stores the system date in this field when you create, change, or save the External Account record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **011**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **02261**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot change the value of this field.
`)
externalAccountRecordFields.set("locator", ` 
\n### Locator
\nThis field stores a unique number within each member account that can be used as a unique identification of this record.
\nField Number         **002**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **02252**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
