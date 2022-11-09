export const cpWorkCardRecordFields = new Map<string, string>()
cpWorkCardRecordFields.set("fmlastdate", ` 
\n### FM Last Date
\nThe system updates this field with the current system date whenever you perform file maintenance on this CP Work Card record. This field in the CP Work Card record is not updated when the file maintenance is performed by a batch process.
\nField Number         **002**
\nMnemonic             **FMLASTDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **02502**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
cpWorkCardRecordFields.set("closedate", ` 
\n### Close Date
\nEnter a close date for the Work Card record following your credit union's policies. When Daily Posting runs after this date, the system sets the Active field to (0) Inactive.
\nField Number         **003**
\nMnemonic             **CLOSEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **02503**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
cpWorkCardRecordFields.set("nextworkdate", ` 
\n### Next Work Date
\nEnter the next date you expect to work this Work Card record.
\nField Number         **004**
\nMnemonic             **NEXTWORKDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **02504**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
cpWorkCardRecordFields.set("lastworkdate", ` 
\n### Last Work Date
\nThe system updates this field with the current system date whenever a collector creates a collection Note record, records a promise to pay, or generates a collection letter.
\nField Number         **005**
\nMnemonic             **LASTWORKDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **02505**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
cpWorkCardRecordFields.set("lastworktime", ` 
\n### Last Work Time
\nThe system updates this field with the current system time whenever a collector creates a collection Note record, records a promise to pay, or generates a collection letter.
\nField Number         **006**
\nMnemonic             **LASTWORKTIME**
\nData Type            **Code to 2359**
\nSource               **System-calculated**
\nHelp File            **02506**
\nDefault Control      **No**
\nDefault Value **0**
`)
cpWorkCardRecordFields.set("lastcollectorid", ` 
\n### Collector ID 0
\nWhenever the Daily Posting batch program assigns a CP Work Card record to a collector, the system updates the Collector ID 0 field with the assigned collector's user number. You can change which collector is assigned to a CP Work Card record through file maintenance of this field. The system validates the field value against the Valid Collector List section in the Collection Work Card parameters.
\nField Number         **008**
\nMnemonic             **LASTCOLLECTORID**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-calculated**
\nHelp File            **02508**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe Collector ID 0 field documents the last collector assigned to a CP Work Card record. You can use the value in this field to maintain the same collector on a specific CP Work Card record when you assign collectors with the custom specfile in the Daily Posting batch program.
`)
cpWorkCardRecordFields.set("seccollectorid", ` 
\n### Collector ID 1 – Collector ID 9
\nWe replaced the Secondary Collector ID List field with new Collector ID 1 – Collector ID 9 fields. These fields are used when a CP Work Card record is assigned to more than one collector.
\nField Number         **013:001 - 013:009**
\nMnemonic             **SECCOLLECTORID:1 - SECCOLLECTORID:9**
\nData Type            **Code to 9999**
\nSource               **User-defined or System-calculated**
\nHelp File            **02508**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n9999 indicates that no collector has been assigned. If you set the Collector ID 0 field to 9999, the system blanks out the Priority 0 field. An assignment of 9999 cannot be included in the Valid Collector List parameter in the Collection Work Card parameters. If you change the Collector ID 0 field to 9999, the system moves all the following fields up, placing the 9999 value at the end of the list.
\nImportant: The system does not prevent you from assigning the same collector to the same Work Card record more than once. For example, if you assign collector 113 to Collector ID 0 and also to Collector ID 5, the system displays the same Work Card record multiple times in the collection queue: once for each assignment. Additionally, each assignment has its own Priority field setting.
\nYou can perform file maintenance on the Collector ID 0 - Collector ID 9 fields and set the values to 9999 in the following areas:
\nDirectly on the CP Work Card Record screen in the Account Manager work area
\n   - Using the Assign to... functionality in the collection queue
\n   - Using the Perform FM from PowerOn Output function of the Miscellaneous Processing batch program
\n   - Important: You cannot set the Collector ID 0 - Collector ID 9 fields to 9999 using the Collection Queue Specification File prompt in the Daily Posting batch program.
`)
cpWorkCardRecordFields.set("type", ` 
\n### Type
\nThis field identifies the kind of Work Card record. Only defined Work Card Types are displayed as options for this field.
\nField Number         **001**
\nMnemonic             **TYPE**
\nData Type            **Code to 99**
\nSource               **System-defined & User-entered**
\nHelp File            **02501**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) DQ Loan/Share
\n   Select this option if the Work Card record is for collection of a delinquent loan or share.##### (1) NSF Check
\n   Select this option if the Work Card record is for collection of an NSF check.##### (2) Third Party CC
\n   Select this option if the Work Card record is for collection of a third-party credit card loan.##### (3) Fraud
\n   Select this option if the Work Card record is for collection of a fraud.##### 4–99
\n   Select a credit union-defined collection type. You can define these types in work card type descriptions of the Collection Work Card Parameters.
\n`)
cpWorkCardRecordFields.set("active", ` 
\n### Active
\nThis field identifies the status of the Work Card record.
\nField Number         **009**
\nMnemonic             **ACTIVE**
\nData Type            **Code to 1**
\nSource               **User-entered or System-calculated**
\nHelp File            **02509**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Inactive
\n   Indicates the status of this Work Card record is inactive.##### (1) Active
\n   Indicates that the status of this Work Card record is active.
\nWhen the Daily Posting batch program creates a Work Card record, it sets this field to (1) Active for Work Card records with a Type field of (0) DQ Loan/Share and if collection conditions no longer exist, which make the Work Card unnecessary, Daily Posting sets the Work Card record to (0) Inactive. For a Work Card record with any other type, this field remains set to (1) Active until a user (or a file maintenance specfile) revises it. Symitar's standard Collection Package specfiles queue Work Card records only if they have a code of (1) Active and do not have a value in the Close Date field.
\n
\nIf you are using the Card Dispute Handling feature, you can create Collection Work Card records for card disputes in the Daily Posting batch program. If you choose to do this, Daily Posting checks the value of the Tracking Code field in the associated Card Dispute Tracking records. If there are any records with a Tracking Code of Pending, the system sets this field to (1) Active. If there are no pending disputes, the system sets this field to (0) Inactive.
\nThe system closes the Work Card record if the collector enters a Note Code field value of (9) Removal from Collections under the following circumstances:
\nThe loan becomes current
\n   - The member brings the loan under the credit limit
\n   - The member brings the share to a non-negative balance
`)
cpWorkCardRecordFields.set("notepurgedate", ` 
\n### Note Purge Date
\nThis field is not currently used.
\nField Number         **007**
\nMnemonic             **NOTEPURGEDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **02507**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
cpWorkCardRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThe system stores the system date in this field when you create, change, or save the Collection Work Card record. There are times when the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **014**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **02513**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system does not change the Record Change Date field value when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
cpWorkCardRecordFields.set("priority", ` 
\n### Priority 0
\nThis field contains the Priority 0 field value you assigned with the Daily Posting batch program using the custom specfile you entered at the Collection Queue Specification File prompt. You can perform file maintenance on this field.
\nField Number         **11**
\nMnemonic             **PRIORITY**
\nData Type            **20 Characters**
\nSource               **User-defined or System-calculated**
\nHelp File            **02511**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
cpWorkCardRecordFields.set("secpriority", ` 
\n### Priority 1 – Priority 9
\nThese fields determine the order in which the work cards appear in the collection queue. They contain the priority you assigned with the Daily Posting Batch Program using the custom specfile you entered at the Collection Queue Specification File prompt.
\nField Number         **012:001 - 012:009**
\nMnemonic             **SECPRIORITY:1 - SECPRIORITY:9**
\nData Type            **20 Characters**
\nSource               **User-defined or System-calculated**
\nHelp File            **02511**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf you set a Collector ID 0 – Collector ID 9 field to 9999, the system blanks out the associated Priority 0 - Priority 9 field. If you change the Collector ID 1 – Collector ID 9 fields to 9999, the system moves all the following fields up, placing the 9999 value at the end of the list.
\nYou can perform file maintenance on the Priority 0 – Priority 9 fields in the following areas:
\nDirectly on the CP Work Card Record screen in the Account Manager work area
\n   - Using SymConnect
\n   - Using the Perform FM from PowerOn Output function from the Miscellaneous Processing batch program
`)
cpWorkCardRecordFields.set("locator", ` 
\n### Locator
\nThe system stores a unique number within each member account in this field that can be used as a unique identification of this record.
\nField Number         **010**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **02510**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe value is a positive number greater than zero and up to about two billion. The system automatically assigns the Locator value when the record is created, and you cannot change it.
\n
\nThe Locator field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using the Locator field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
