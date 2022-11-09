export const eftAddendaInfoRecordFields = new Map<string, string>()
eftAddendaInfoRecordFields.set("type", ` 
\n### Addenda Info Type
\nThis field stores the addenda information type of (0) Standard. This is the only option for this field.
\nField Number         **001**
\nMnemonic             **TYPE**
\nData Type            **Code to 0**
\nSource               **System-defined**
\nHelp File            **02601**
\nDefault Control      **No**
\nDefault Value **0**
`)
eftAddendaInfoRecordFields.set("info", ` 
\n### Info 1
\nThis field stores up to 40 characters of additional information about the parent EFT record.
\nField Number         **003:001**
\nMnemonic             **INFO:1**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **02603**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n### Info 2
\nThis field stores up to 40 more characters of additional information about the parent EFT record.
\nField Number         **003:002**
\nMnemonic             **INFO:2**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **02603**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
eftAddendaInfoRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThe system stores the system date this field when you create, change, or save the EFT Addenda Info record. There are times when the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **004**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **02604**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nYou cannot perform file maintenance on this field.
\n   - Important: The system does not change this field when a calculated field changes.
`)
eftAddendaInfoRecordFields.set("locator", ` 
\n### Locator
\nThe system stores a unique number within each member account in this field that can be used as a unique identification of this record.
\nField Number         **002**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe value is a positive number greater than zero and up to about two billion. The system automatically assigns the Locator value when the record is created, and you cannot change it.
\n
\nThe Locator field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using the Locator field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
