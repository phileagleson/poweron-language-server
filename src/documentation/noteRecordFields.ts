export const noteRecordFields = new Map<string, string>()
noteRecordFields.set("id", ` 
\n### ID
\nThis field stores the share or loan ID.
\nField Number         **001**
\nMnemonic             **ID**
\nData Type            **2 or 4 Characters**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is not visible. You cannot revise this field.
`)
noteRecordFields.set("idtype", ` 
\n### ID Type
\nThis field determines which Note record type is affected.
\nField Number         **002**
\nMnemonic             **IDTYPE**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is not visible. You cannot revise this field.
\n#### Data Type Descriptions
\n##### 0
\n   For Share Note records and for Collection Work Card Note records pertaining to shares##### 1
\n   For Loan Note records and for Collection Work Card Note records pertaining to loans##### 2
\n   For Loan Application Note records##### 3
\n   For Account Note, Card Note, and Invoice Note records##### 4
\n   For Portfolio Note records
\n`)
noteRecordFields.set("code", ` 
\n### Note Code
\nThis field indicates whether the Note record contains free-form text or predefined text.
\nField Number         **003**
\nMnemonic             **CODE**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-calculated**
\nHelp File            **02703, 02713–02718, 02720, 02727, 15902, 15966, 16502**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nHelp File numbers
\n   - 02703: Account Note record
\n   - 02713: Share Note record
\n   - 02714; Loan Note record
\n   - 02715: Application Note record
\n   - 02716: Collection Note record
\n   - 02717: Card Note record
\n   - 02718: Portfolio Note record
\n   - 02720: Invoice Note record
\n   - 02727: CTR Note record
\n   - 15902: Participant Note record
\n   - 15966: Participation Note record
\n   - 16502: Dealer Note record
\n
\nThis field is used for normal access validation. For access with interactive validation, use the Note Codes field (field 700).
\n
\nYou can enter more than one note code, but Symitar Quest stores only the first note code you enter in this field.
`)
noteRecordFields.set("text", ` 
\n### Text Line 01–Text Line 50
\nEach Text Line # field stores one line of note text.
\nField Number         **004:001–004:050**
\nMnemonic             **TEXT:1–TEXT:50**
\nData Type            **40 Characters**
\nSource               **User-entered or System-calculated**
\nHelp File            **02704**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
noteRecordFields.set("userid", ` 
\n### User ID
\nThis field stores the user number of the user who created the Note record.
\nField Number         **005**
\nMnemonic             **USERID**
\nData Type            **Code to 9999**
\nSource               **System-calculated**
\nHelp File            **02705**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest updates this field automatically. We recommend that you do not perform file maintenance on this field.
`)
noteRecordFields.set("enterdate", ` 
\n### Enter Date
\nThis field stores the date on which the Note record was created.
\nField Number         **006**
\nMnemonic             **ENTERDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **02706**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest updates this field automatically. You cannot revise this field.
`)
noteRecordFields.set("entertime", ` 
\n### Enter Time
\nThis field records the time the Note record was created (HHMM).
\nField Number         **007**
\nMnemonic             **ENTERTIME**
\nData Type            **Code to 2359**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest updates this field automatically. We recommend that you do not perform file maintenance on this field.
`)
noteRecordFields.set("voidflag", ` 
\n### Voided
\nThis field is set to 1 when you void a Collection Note record; otherwise, this field is set to 0.
\nField Number         **008**
\nMnemonic             **VOIDFLAG**
\nData Type            **Code to 1**
\nSource               **System-calculated**
\nHelp File            **02709N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is used for Collection Note records only, not for Account Note records, Application Note records, Card Note records, Invoice Note records, Loan Note records, Portfolio Note records, or Share Note records. You cannot revise this field.
`)
noteRecordFields.set("voidedby", ` 
\n### Voided By
\nThis field stores the user ID of the person who voids the Collection Note record.
\nField Number         **009**
\nMnemonic             **VOIDEDBY**
\nData Type            **Code to 9999**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is used for Collection Note records only, not for Account Note records, Application Note records, Card Note records, Invoice Note records, Loan Note records, Portfolio Note records, or Share Note records. You cannot revise this field.
`)
noteRecordFields.set("expirationdate", ` 
\n### Expiration Date
\nThis field stores an expiration date for the Note record.
\nField Number         **010**
\nMnemonic             **EXPIRATIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **02711**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe Purge Account Processing batch program can use this field to determine if this Note record is eligible for the purge (if it meets all other purge criteria). A Note record with a blank Expiration Date field cannot be purged in this way unless the entire member account is purged.
`)
noteRecordFields.set("locator", ` 
\n### Locator
\nThis field value in each record is unique for each member account.
\nField Number         **011**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **02719**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nBecause each Locator field value is unique, it can be used as a unique identification of a specific record. Symitar Quest automatically assigns the Locator field value when the record is created, and you cannot change it. The value is a positive number greater than zero.
\n
\nThe Locator field can be used during PowerOn file maintenance (both demand and batch) to uniquely identify a record. We recommend using a Locator field because a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
noteRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date when you create change, or save the Note record.
\nField Number         **012**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest may update this field because the record was saved, even though there may not be any actual changes in the record. However, Symitar Quest does not change this field when a calculated field changes. You cannot revise this field.
`)
noteRecordFields.set("none", ` 
\n### Note Codes
\nThis field is used to perform some file maintenance action on other fields; it does not store anything.
\nField Number         **700**
\nMnemonic             **None**
\nData Type            **30 Characters**
\nSource               **User-entered**
\nHelp File            **02703, 02713–02718, 02720**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nHelp File numbers
\n   - 02703: Account Note record
\n   - 02713: Share Note record
\n   - 02714; Loan Note record
\n   - 02715: Application Note record
\n   - 02716: Collection Note record
\n   - 02717: Card Note record
\n   - 02718: Portfolio Note record
\n   - 02720: Invoice Note record
\n
\nThis field is for access with interactive validation. For normal access validation, use Note Code (field 003).
\n
\nThe user can enter a single note code or a series of note codes and Symitar Quest does the following:
`)
noteRecordFields.set("textlinecount", ` 
\n### Text Line Count
\nThis field stores the total number of text lines in the Note record.
\nField Number         **800**
\nMnemonic             **TEXTLINECOUNT**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **02712**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest determines the number of the highest non-blank text line to calculate the number of text lines used. Symitar Quest counts blank lines between non-blank lines, but does not count any blank lines after the last non-blank line. You cannot access this field for file maintenance.
`)
