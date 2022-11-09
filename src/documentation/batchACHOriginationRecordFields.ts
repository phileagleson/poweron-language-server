export const batchACHOriginationRecordFields = new Map<string, string>()
batchACHOriginationRecordFields.set("companyname", ` 
\n### Company Name
\nThis field stores the source of the entry and provides a description for the receiver containing the originator's name.
\nField Number         **001**
\nMnemonic             **COMPANYNAME**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **31701**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
`)
batchACHOriginationRecordFields.set("compantdiscretionarydata", ` 
\n### Company Discretionary Data
\nThis optional field stores significant codes used by originators.
\nField Number         **002**
\nMnemonic             **COMPANTDISCRETIONARYDATA**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **31702**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
`)
batchACHOriginationRecordFields.set("companyid", ` 
\n### Company ID
\nThis field stores the originator's unique identification number.
\nField Number         **003**
\nMnemonic             **COMPANYID**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **31703**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
`)
batchACHOriginationRecordFields.set("standardentryclasscode", ` 
\n### Standard Entry Class Code
\nThis field stores a character code that distinguishes the various types of ACH entries.
\nField Number         **004**
\nMnemonic             **STANDARDENTRYCLASSCODE**
\nData Type            **3 Characters**
\nSource               **User-entered**
\nHelp File            **31704**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nThe Standard Entry Class (SEC) code can be blank when the record is created, but blank is not a valid value. Your must type one of the following SEC codes in this field:
\n##### ARC
\n   The origination of debit entries to a consumer's account pursuant to a conversion of a consumer check received via U.S. Mail or at a drop box location for the payment of goods or services##### CCD
\n   Corporate Credit or Debit (the origination of business-to-business credit or debit entries)##### CIE
\n   Customer Initiated Entry##### ENR
\n   Automated Enrollment Entry##### PPD
\n   Prearranged Payment and Deposit Entry##### RCK
\n   The origination of debit entries to a consumer's account pursuant to a paper check returned for insufficient or uncollected funds and the paper item being resubmitted as an RCK entry##### TEL
\n   The origination of single and recurring debit entries to a consumer's account pursuant to an oral authorization obtained from the Receiver via the telephone##### WEB
\n   The origination of debit or credit entries to a consumer's account pursuant to an authorization obtained from the Receiver via the internet
\n`)
batchACHOriginationRecordFields.set("companyentrydescription", ` 
\n### Company Entry Description
\nThis field stores a description of the entry for the receiver.
\nField Number         **005**
\nMnemonic             **COMPANYENTRYDESCRIPTION**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **31705**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nIf you are originating return fee transactions, you must type the following exact words (in capital letters): RETURN FEE .
\n
\nIf you are reinitiating return entries, you must type the following exact words (in capital letters): RETRY PYMT.
\n
\nIf you are reinitiating reversal entries, you must type the following exact word (in capital letters): REVERSAL.
`)
batchACHOriginationRecordFields.set("efectiveentrydate", ` 
\n### Effective Entry Date
\nThis field stores the date specified by the originator as the day on which a batch of entries is to be settled.
\nField Number         **006**
\nMnemonic             **EFECTIVEENTRYDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31706**
\nDefault Control      **No**
\nDefault Value        **Date Null**
`)
batchACHOriginationRecordFields.set("depositsettlementdate", ` 
\n### Deposit Settlement Date
\nThis field stores the settlement date for all originated deposits.
\nField Number         **008**
\nMnemonic             **DEPOSITSETTLEMENTDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31708**
\nDefault Control      **No**
\nDefault Value        **Date Null**
`)
batchACHOriginationRecordFields.set("paysettlementdate", ` 
\n### Payment Settlement Date
\nThis field stores the settlement date for all originated withdrawals.
\nField Number         **009**
\nMnemonic             **PAYSETTLEMENTDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31709**
\nDefault Control      **No**
\nDefault Value        **Date Null**
`)
batchACHOriginationRecordFields.set("idtype", ` 
\n### ID Type
\nThis field stores a code that specifies whether the record is used to deposit or withdraw funds by ACH Origination from the member's shares or loans.
\nField Number         **015**
\nMnemonic             **IDTYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31715**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Share
\n   The value entered at the ID field refers to a member's Share record.##### (1) Loan
\n   The value entered at the ID field refers to a member's Loan record.
\nThis field overrides the ID Type field in the EFT record, if different.
`)
batchACHOriginationRecordFields.set("id", ` 
\n### ID
\nThis field stores the share or loan ID.
\nField Number         **016**
\nMnemonic             **ID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **31716**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nThis field overrides the ID field in the EFT record, if different.
`)
batchACHOriginationRecordFields.set("expiration", ` 
\n### Expiration Date
\nThis field stores the date used by the Purge Account Processing batch job to purge Batch ACH Origination records.
\nField Number         **010**
\nMnemonic             **EXPIRATION**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **31710**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nThis date is set by ACH posting and is used by the Purge Account Processing batch job to purge Batch ACH Origination records.
\n
\nThis field can only be set if the value in the Status field is set to one of the following:
\n
\nUnder normal circumstances, you should not revise this field.
`)
batchACHOriginationRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThe system stores the system date in this field when you create, change, or save the Batch ACH Origination record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **013**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **31713**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\n***Important:***  The system does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot change the value of this field.
`)
batchACHOriginationRecordFields.set("origamount", ` 
\n### Origination Amount
\nThis field stores the total dollar amount of the EFT items linked to the Batch ACH Origination record through the Batch ACH Origination Number field in the EFT record.
\nField Number         **011**
\nMnemonic             **ORIGAMOUNT**
\nData Type            **Money**
\nSource               **System-entered or User-entered**
\nHelp File            **31711**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nThe value in this field is computed when the Batch ACH Origination record and corresponding EFT records are created.
\n
\nWhen the ACH Origination part of the ACH Reports batch program is run, this field is recalculated and the value is stored. Once the Status field is set to anything other than (1) Pending, this field cannot be changed.
\n***Important:***  Any change made to the dollar amounts in the EFT records (between creation and origination) will not be recognized in the total until ACH Origination is run.
\n
\nThis field is for internal use only and is not sent in the ACH file.
`)
batchACHOriginationRecordFields.set("groupnumber", ` 
\n### Group Number
\nThis field stores the credit union-defined number used by ACH Posting to identify what items to post.
\nField Number         **014**
\nMnemonic             **GROUPNUMBER**
\nData Type            **6 Characters**
\nSource               **User-entered**
\nHelp File            **31714**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nThis number is used by ACH Posting to identify what items to post. This field overrides the Group Number field in the EFT record, if different.
\n
\nWhen the record is manually created, the value for this field cannot be blank.
\n
\nWhen you create this field using NetTeller Cash Management, the system automatically populates the field with the group number.
`)
batchACHOriginationRecordFields.set("postmethod", ` 
\n### Posting Method
\nThis field store a code that specifies if the posting program should post all the ACH items together or separately.
\nField Number         **017**
\nMnemonic             **POSTMETHOD**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31717**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Combined
\n   The whole batch should post as one debit or credit. If the posting program is unable to post the whole batch, all items in the batch except out.##### (1) Separate
\n   Each ACH item should post separately—not as one debit or credit. If the posting program is unable to post the whole batch, the program posts what it can from the batch.
\n`)
batchACHOriginationRecordFields.set("status", ` 
\n### Status
\nThis field stores the status of the Batch ACH Origination record.
\nField Number         **007**
\nMnemonic             **STATUS**
\nData Type            **Code to 6**
\nSource               **User-entered or System-entered**
\nHelp File            **31707**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) New
\n   A partial file is sent (information is missing or incomplete). The record maintains this status for just a fraction of a second until all information is received and NetTeller can change the status to (1) Pending. (User-entered)
\n       - Important: When creating the record manually, you must change the status from (0) New to (1) Pending for the record to be used.
\n##### (1) Pending
\n   The file has not yet been originated. NetTeller changes the file to (1) Pending once all information has been received through SymConnect. (User-entered)##### (2) Originated
\n   The file has been originated, but not yet posted. (System-entered)
\n       - Important: All fields except the Expiration Date field and the Status field are locked down and cannot be changed. The ACH Posting program can change this status when the ACH Posting program is run.
\n##### (3) Posted
\n   The file has been posted. (System-entered)
\n       - Important: All fields except the Expiration Date field and the Status field are locked down and cannot be changed. The ACH Posting program can change this status when the ACH Posting program is run.
\n##### (4) Posting Failed
\n   All items in the file were unable to post. (System-entered)
\n       - Important: All fields except the Expiration Date field and the Status field are locked down and cannot be changed. The ACH Posting program can change this status when the ACH Posting program is run.
\n##### (5) Origination Failed
\n   The file was unable to originate. (User-entered)##### (6) Posting Exception
\n   One or more (but not all) items in the batch failed to post. (System-entered)
\n   
\n       - All fields except the Expiration Date field and the Status field are locked down and cannot be changed.
`)
batchACHOriginationRecordFields.set("totaloriginationcount", ` 
\n### Total Origination Count
\nThis field stores the total number of ACH items included in the ACH batch.
\nField Number         **018**
\nMnemonic             **TOTALORIGINATIONCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **31718**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nThe value is computed during ACH Origination.
`)
batchACHOriginationRecordFields.set("totalpostedcount", ` 
\n### Total Posted Count
\nThis field stores the total number of ACH items included in the batch posting.
\nField Number         **019**
\nMnemonic             **TOTALPOSTEDCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **31719**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nThe number in this field may be less than or equal to the value in the Total Origination Count field.
`)
batchACHOriginationRecordFields.set("locator", ` 
\n### Locator
\nThis field stores a unique number within each member account that can be used as a unique identification of this record.
\nField Number         **012**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nThe system automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
