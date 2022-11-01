export const commentRecordFields = new Map<string, string>()
commentRecordFields.set("type", ` 
\n### Comment Type
\n
\n This field stores a code that indicates how and when the system should display the comment.
\nField Number         **001**
\nMnemonic             **TYPE**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **00301**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Inquiry Only
\n   The system should display the comment only during account summary inquiries, according to the values in the Effective Date and Expiration Date fields.##### (1) Display every access
\n   The system should display the comment each time the account is accessed, according to the values in the Effective Date and Expiration Date fields.##### (2) Tickler Report
\n   The system should display the comment each time the account is accessed, and the comment should print on the Account Comments Journal produced by the Daily Posting batch program, according to the values in the Effective Date and Expiration Date fields.##### (3) Tickler Report and Force Display
\n   The system should display the comment each time the account is accessed, regardless of the values in the Effective Date and Expiration Date fields. The comment should print on the Account Comments Journal produced by the Daily Posting batch program, according to the values in the Effective Date and Expiration Date fields.
\n`)
commentRecordFields.set("comment", ` 
\n### Comment
\n
\n This field stores up to 40 characters comment text.
\nField Number         **004**
\nMnemonic             **COMMENT**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00304**
\nDefault Control      **No**
\nDefault Value **(Blank)**
`)
commentRecordFields.set("effectivedate", ` 
\n### Effective Date
\n
\n This field stores the date that the system should begin to display the comment.
\nField Number         **002**
\nMnemonic             **EFFECTIVEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00302**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis field defaults to the system date during creation of the Comment record. You can change the date, if desired.
`)
commentRecordFields.set("expirationdate", ` 
\n### Expiration Date
\n
\n This field stores the date after which the system should no longer display the comment.
\nField Number         **003**
\nMnemonic             **EXPIRATIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00303**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf you try to enter a value in this field before the value in the Effective Date field, the system displays the following message:
\n   - Expiration cannot be before effective
\n   - You must either enter a date after the value in the Effective Date field or leave this field blank.
\n
\nWhen the system date exceeds the value in the Expiration Date field, the comment does not display, unless you selected (3) Tickler Report and Force Display at the Comment Type field. In that case, the comment does not display on the Account Comments Journal produced by the Daily Posting batch program, but continues to display each time the account is accessed.
`)
commentRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\n
\n The system stores the system date in this field when you create, change, or save the Comment record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **006**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **29706**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot change the value of this field.
`)
commentRecordFields.set("locator", ` 
\n### Locator
\n
\n This field stores a unique number within each member account that can be used as a unique identification of this record.
\nField Number         **005**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **00305**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
