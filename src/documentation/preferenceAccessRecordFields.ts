export const preferenceAccessRecordFields = new Map<string, string>()
preferenceAccessRecordFields.set("accesstype", ` 
\n### Access Type
\nThis field stores a code that indicates what the member can do. There are different access types for Preference Access and Card Access records.
\nField Number         **001**
\nMnemonic             **ACCESSTYPE**
\nData Type            **Code to 3 (Preference Access) or Code to 99 (Card Access)**
\nSource               **User-entered**
\nHelp File            **06701**
\nDefault Control      **No**
\nDefault Value **1**
`)
preferenceAccessRecordFields.set("accountnumber", ` 
\n### Account Number
\nThis field stores the number of an account the member can access.
\nField Number         **002**
\nMnemonic             **ACCOUNTNUMBER**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **06702**
\nDefault Control      **No**
\nDefault Value **(Blank)**
`)
preferenceAccessRecordFields.set("idtype", ` 
\n### ID Type
\nThis field stores a code that specifies what access is allowed to or from any share or loan.
\nField Number         **003**
\nMnemonic             **IDTYPE**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **06703**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Share
\n   - Allow access to or from a specific share ID.##### (1) Loan
\n   - Allow access to or from a specific loan ID.##### (2) Unrestricted
\n   - Preference Access: Allow access to or from any share, loan, or external loan on the other account.##### (2) Unspecified
\n   - Card Access: Let you define the ID Type to LOC field, Credit Card field, etc.##### (3) External Loan
\n   - Preference Access: Allow access to or from an external loan specified in the External Loan Account Number field.
\n`)
preferenceAccessRecordFields.set("id", ` 
\n### ID
\nThis field stores the ID of the Share or Loan record the member can access.
\nField Number         **004**
\nMnemonic             **ID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **06704**
\nDefault Control      **No**
\nDefault Value **(Blank)**
`)
preferenceAccessRecordFields.set("extloanaccount", ` 
\n### External Loan Account Number
\nThis field stores the number of an external loan account the member can access.
\nField Number         **012**
\nMnemonic             **EXTLOANACCOUNT**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **06712**
\nDefault Control      **No**
\nDefault Value **(Blank)**
`)
preferenceAccessRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date when you create, change, or save the Access record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **011**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **06711**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
preferenceAccessRecordFields.set("enablewithdrawal", ` 
\n### Enable Withdrawals
\nThis field stores a code that specifies whether withdrawals are allowed.
\nField Number         **005**
\nMnemonic             **ENABLEWITHDRAWAL**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **06705**
\nDefault Control      **No**
\nDefault Value **1**
\n
\n#### Data Type Descriptions
\n##### (0) No withdrawals allowed
\n   - No withdrawals are allowed.##### (1) Withdrawals allowed
\n   - Withdrawals are allowed. In the Preference Access record, this is valid only if you enter (2) Alternate account at the Access Type field.
\n`)
preferenceAccessRecordFields.set("enabledeposit", ` 
\n### Enable Deposits
\nThis field stores a code that specifies whether deposits are allowed.
\nField Number         **006**
\nMnemonic             **ENABLEDEPOSIT**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **06706**
\nDefault Control      **No**
\nDefault Value **1**
\n
\n#### Data Type Descriptions
\n##### (0) No deposits allowed
\n   - No deposits are allowed.##### (1) Deposits allowed
\n   - Deposits are allowed. In the Preference Access record, this is valid only if you enter (2) Alternate account at the Access Type field.
\n`)
preferenceAccessRecordFields.set("enableinquiry", ` 
\n### Enable Inquiries
\nThis field stores a code that specifies whether inquiries are allowed.
\nField Number         **007**
\nMnemonic             **ENABLEINQUIRY**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **06707**
\nDefault Control      **No**
\nDefault Value **1**
\n
\n#### Data Type Descriptions
\n##### (0) No inquiries allowed
\n   - No inquiries are allowed.##### (1) Inquiries allowed
\n   - Inquiries are allowed. In the Preference Access record, this is valid only if you enter (2) Alternate account at the Access Type field.
\n`)
preferenceAccessRecordFields.set("enablefm", ` 
\n### Enable FM
\nThis field stores a code that specifies whether inquiries are allowed.
\nField Number         **009**
\nMnemonic             **ENABLEFM**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **06709**
\nDefault Control      **No**
\nDefault Value **1**
\n
\n#### Data Type Descriptions
\n##### (0) No FM allowed
\n   - No file maintenance is allowed.##### (1) FM allowed
\n   - File maintenance is allowed. In the Preference Access record, this is valid only if you enter (2) Alternate account at the Access Type field.
\nCard Access records do not use this field.
`)
preferenceAccessRecordFields.set("qualifier", ` 
\n### Qualifier
\nThis field stores a cross-reference to a share or loan in a network processor's database to shares or loans in the system.
\nField Number         **010**
\nMnemonic             **QUALIFIER**
\nData Type            **3 Characters**
\nSource               **User-entered**
\nHelp File            **06710**
\nDefault Control      **No**
\nDefault Value **(Blank)**
`)
preferenceAccessRecordFields.set("locator", ` 
\n### Locator
\nThe system stores a unique number within each member account in this field that can be used as a unique identification of this record.
\nField Number         **008**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **06708**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
