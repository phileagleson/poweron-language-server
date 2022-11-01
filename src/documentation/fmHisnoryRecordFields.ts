export const fmHistoryRecordFields = new Map<string, string>()
fmHistoryRecordFields.set("accountnumber", ` 
\n### Account Number
\n
\n The field contains the unique identifier of the changed record (which is not always the account number). This field identifies the account affected by file maintenance to the Account record; it identifies the member affected by file maintenance to the Member record, etc.
\nField Number         **002**
\nMnemonic             **ACCOUNTNUMBER**
\nData Type            **10 Characters**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
\n
\nThe length of the field changes depending on the record being modified.
`)
fmHistoryRecordFields.set("idtype", ` 
\n### ID Type
\n
\n This field identifies the type of record affected by the file maintenance.
\nField Number         **003**
\nMnemonic             **IDTYPE**
\nData Type            **Code to 12**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Share record or child record
\n##### 1
\n   Loan record or child record
\n##### 2
\n   An account child record that does not have its own ID type
\n##### 3
\n   Application record or child record
\n##### 4
\n   Portfolio record or child record
\n##### 5
\n   Records in the Pool Agreement with an ID type
\n##### 6
\n   Records in the Pool Agreement which do not have an ID type
\n##### 7
\n   Participant records which do not have an ID type
\n##### 8
\n   Participant Plan records
\n##### 9
\n   GL sub-accounts with an ID type
\n##### 10
\n   GL Account record or child record without an ID type
\n##### 11
\n   Accounts Payable record or child record
\n##### 12
\n   Collateral record or child records without an ID type
`)
fmHistoryRecordFields.set("id", ` 
\n### ID
\n
\n This field stores the two or four-character ID of the following record types (see ID Type) affected by the transaction:
\nField Number         **004**
\nMnemonic             **ID**
\nData Type            **2 or 4 Characters**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
\n
\nData Type Descriptions:
\n   - 0: Share record
\n   - 1: Loan record
\n   - 3: Application record
\n
\nIf the transaction did not affect any of these types of records or child records, this field is blank.
`)
fmHistoryRecordFields.set("sequencenumber", ` 
\n### Sequence Number
\n
\n The system assigns this number in sequence to each file maintenance transaction posted on a specific day.
\nField Number         **005**
\nMnemonic             **SEQUENCENUMBER**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
\n
\nThe system uses the same counter for all transactional sequence numbers. Since there are many processes running within the system simultaneously, there may appear to be gaps in the sequence numbers assigned for one process because the sequence numbers were assigned to another process that was running at the same time.
\n
\nFor example, if drafts are being posted by the back office at the same as time tellers are performing transactions, some sequence numbers are assigned to the draft posting activity while others are assigned to the teller transactions. For that reason, when only viewing the teller transaction output, there may appear to be missing sequence numbers; however, the "missing" sequence numbers were assigned to transactions being performed by the draft posting process that was running at the same time.
`)
fmHistoryRecordFields.set("postdate", ` 
\n### Post Date
\n
\n The system updates this field with the current system date when you accept the file maintenance transaction.
\nField Number         **006**
\nMnemonic             **POSTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("posttime", ` 
\n### Post Time
\n
\n The system updates this field with the system time when you accept the file maintenance transaction.
\nField Number         **007**
\nMnemonic             **POSTTIME**
\nData Type            **Code to 2359**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("usernumber", ` 
\n### User Number
\n
\n The system updates this field with the number of the user or the ID of the batch program that initiated the file maintenance transaction.
\nField Number         **008**
\nMnemonic             **USERNUMBER**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("useroverride", ` 
\n### User Override
\n
\n The system updates this field with the number of the user who provided an override for the transaction, if an override was necessary. If no override was necessary, this field contains 0999.
\nField Number         **009**
\nMnemonic             **USEROVERRIDE**
\nData Type            **Code to 999**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("securitylevels", ` 
\n### Security Levels
\n
\n The system updates this field with the security level assigned to this type of transaction in the Security Parameters.
\nField Number         **010**
\nMnemonic             **SECURITYLEVELS**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("branch", ` 
\n### Branch
\n
\n The system updates this field with the number of the branch where the file maintenance occurred, not necessarily the account branch.
\nField Number         **011**
\nMnemonic             **BRANCH**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("fmtype", ` 
\n### FM Type
\n
\n This field identifies the type of file maintenance:
\nField Number         **012**
\nMnemonic             **FMTYPE**
\nData Type            **Code to 2**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
\n
\nData Type Descriptions:
\n   - 0 = Record creation
\n   - 1 = Record revision
\n   - 2 = Record deletion
`)
fmHistoryRecordFields.set("lastfmdate", ` 
\n### FM Last Date
\n
\n This field stores the previous most recent transaction or FM date.
\nField Number         **013**
\nMnemonic             **LASTFMDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
\n
\nWhen the system updates the Post Date field in the FM History record or the Last FM Date field in the individual Account record (such as in the Share record) with the current date, it copies that previous last FM date to this field in the FM History record. In the File Maintenance inquiry in Account Manager, this field corresponds to the Last FM column. (The Post Date field value is displayed in the Date column.)
`)
fmHistoryRecordFields.set("recordtype", ` 
\n### Record Type
\n
\n This field contains the type of record affected by file maintenance.
\nField Number         **014**
\nMnemonic             **RECORDTYPE**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
\n
\n##### Record Type Constants
\n   - Account File
\n       - 1 = Account record
\n       - 2 = Name record
\n       - 3 = Lookup record
\n       - 4 = Comment record
\n       - 5 = Share record
\n       - 6 = Share Hold record
\n       - 7 = Share Name record
\n       - 8 = Share Transfer record
\n       - 9 = IRS record
\n       - 10 = Loan record
\n       - 11 = Loan Hold record
\n       - 12 = Loan Name record
\n       - 13 = Loan Pledge record
\n       - 14 = Loan Pledge Name record
\n       - 15 = Loan Transfer record
\n       - 16 = EFT record
\n       - 17 = EFT Name record
\n       - 18 = EFT Transfer record
\n       - 19 = Card record
\n       - 20 = Card Name record
\n       - 21 = Household record
\n       - 22 = Application record
\n       - 23 = Application Person record
\n       - 24 = Application Finance record
\n       - 25 = IRS Name record
\n       - 26 = CP Work Card record
\n       - 27 = Portfolio record
\n       - 28 = Credit Report (Cred Rep) record
\n       - 29 = Portfolio Hold record
\n       - 30 = FM History record
\n       - 31 = Share Transaction record
\n       - 32 = Loan Transaction record
\n       - 33 = Card Note record
\n       - 34 = Credit Item (Credit Report Item) record
\n       - 35 = Share Check Order record
\n       - 36 = Loan Check Order record
\n       - 37 = Preference record
\n       - 38 = Preference Access record
\n       - 39 = Tracking record
\n       - 40 = Share Tracking record
\n       - 41 = Loan Tracking record
\n       - 42 = Application Tracking record
\n       - 43 = CP (Collection Package) Tracking record
\n       - 44 = Note record
\n       - 45 = Share Note record
\n       - 46 = Loan Note record
\n       - 47 = Application Note record
\n       - 48 = CP (Collection Package) Note record
\n       - 49 = Portfolio Note record
\n       - 50 = Portfolio Tracking record
\n       - 51 = Card Access record
\n       - 52 = Savings Analysis record
\n       - 53 = Loan Billing record
\n       - 54 = Loan Segment Billing record
\n       - 55 = not used
\n       - 56 = External Loan Tracking record
\n       - 57 = External Loan Note record
\n       - 58 = Loan Rate Change record
\n       - 59 - 79 = (Reserved for future use)
\n       - 80 = Site
\n       - 81 = Cash Order Type
\n       - 82 = EFT Addenda Info
\n       - 83 = External Account
\n       - 84 = Pledge
\n       - 85 = Savings Analysis Plan
\n       - 86 = Savings Analysis Group
\n       - 87 = IRS Distribution
\n       - 88 = Loan Escrow Analysis
\n       - 89 = Loan Escrow
\n       - 90 = Loan Schedule
\n       - 91 = Loan App Schedule
\n       - 92 = Loan Segment
\n       - 93 = Loan App Segment
\n       - 94 = Application Escrow Analysis
\n       - 95 = Application Escrow
\n       - 96 = Batch ACH Origination
\n       - 97 = Application Pledge
\n       - 98 = External Loan
\n       - 99 = External Loan Name
\n       - 100 = External Transfer
\n
\n   - Accounts Payable File
\n       - 1 = Accounts Payable Vendor record
\n       - 2 = Accounts Payable Invoice record
\n       - 3 = Accounts Payable Invoice Note record
\n       - 4 = Accounts Payable FM History record
\n   - Member Address File
\n       - 1 = Member Address record
\n       - 30 = Member Address FM History record
\n        
\n   - Check File
\n       - 1 = Check record
\n       - 2 = Check FM History record
\n
\n   - Non-Account Name File
\n       - 1 = Non-Account Name record
\n       - 30 = Non-Account Name FM History record
\n        
\n   - Collateral File
\n       - 1 = Collateral record
\n       - 2 = Collateral Hold record
\n       - 3 = Collateral Document record
\n       - 4 = Collateral FM History record
\n       - 5 = Collateral Tracking record
\n       - 6 = Collateral Document Tracking record
\n
\n   - Participant/Dealer File
\n       - 1 = Participant record
\n       - 2 = Dealer Comment record
\n       - 3 = Dealer Reserve Plan record
\n       - 4 = Dealer Reserve Plan Loan record
\n       - 5 = Participant Tracking record
\n       - 6 = Dealer Reserve Plan Tracking record
\n       - 7 = Participant FM History record
\n       - 8 = Participant Tracking record
\n       - 9 = Dealer Reserve Plan Tracking record
\n       - 10 = Participant Note record
\n       - 11 = Dealer Note record
\n        
\n   - Financial Reporting File
\n       - 1 = Financial Reporting record
\n       - 2 = CTR record
\n       - 3 = CTR Account record
\n       - 4 = CCTR Person record
\n       - 5 = CTR Foreign record
\n       - 6 = CTR Branch record
\n       - 30 = Financial Reporting FM History record
\n       - 31 = Financial Reporting Note record
\n
\n   - Participation/Pool File
\n       - 1 = Participation record
\n       - 2 = Participation Loan record
\n       - 3 = Agreement record
\n       - 4 = Participation FM History record
\n       - 5 = Agreement Transaction record
\n       - 6 = Participation Note record
\n       - 7 = Participation Loan Note record
\n       - 8 = Agreement Note record
\n       - 9 = N/A
\n        
\n   - General Ledger File
\n       - 1 = General Ledger Account record
\n       - 2 = General Ledger Subaccount record
\n       - 3 = General Ledger History record
\n       - 4 = General Ledger FM History record
\n       - 5 = General Ledger Account Tracking record
\n
\n   - User File
\n       - 1 = User record
\n       - 2 = User Activity record
\n       - 3 = User Tracking record
\n        
\n   - Member File
\n       - 1 = Member record
\n       - 30 = Member FM History record
\n
\n   - Wire File
\n       - 1 = Wire record
\n       - 2 = Wire OFAC Details record
\n       - 3 = Wire USC Audit record
\n       - 4 = Wire Receiver Financial Institution Information record
\n       - 5 = Wire Drawdown Debit Account Advice record
\n       - 6 = Wire Intermediary Financial Institution Information record
\n       - 7 = Wire Intermediary Financial Institution Advice record
\n       - 8 = Wire Beneficiary Financial Institution Information record
\n       - 9 = Wire Beneficiary Financial Institution Advice record
\n       - 10 = Wire Beneficiary Information record
\n       - 11 = Wire Beneficiary Advice record
\n       - 12 = Wire Financial Institution to Financial Institution Information record
\n       - 13 = Wire Service Message record
\n       - 14 = Wire FM History record
`)
fmHistoryRecordFields.set("fieldnumber", ` 
\n### Field Number
\n
\n The system updates this field with number of the field affected by the file maintenance.
\nField Number         **015**
\nMnemonic             **FIELDNUMBER**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
\n
\n***Important:***  For certain FM History records, the system performs a special calculation for this field. If the file maintenance includes a new Locator field, the system stores that Locator value in the New Number field.
`)
fmHistoryRecordFields.set("subfieldnumber", ` 
\n### Sub Field Number
\n
\n The system updates this field with the subfield number (if any) of the field affected by the file maintenance.
\nField Number         **016**
\nMnemonic             **SUBFIELDNUMBER**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("datatype", ` 
\n### Data Type
\n
\n This field contains the type of data stored in the field identified by the Field Number field value, and if appropriate, by Sub Field Number:
\nField Number         **017**
\nMnemonic             **DATATYPE**
\nData Type            **Code to 8**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
\n
\nData Type Descriptions:
\n   - 0 = Character
\n   - 1 = Character
\n   - 2 = Rate
\n   - 3 = Date
\n   - 4 = Number
\n   - 5 = Code
\n   - 6 = Money
\n   - 7 = Money
\n   - 8 = Yes/No
`)
fmHistoryRecordFields.set("oldnumber", ` 
\n### Old Number
\n
\n If the Data Type field is set to 4 (Number), 5 (Code), or 8 (Yes/No), the system updates this field with the old value of the field before the file maintenance was performed.
\nField Number         **018**
\nMnemonic             **OLDNUMBER**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("newnumber", ` 
\n### New Number
\n
\n If the Data Type field is set to 4 (Number), 5 (Code), or 8 (Yes/No), the system updates this field with the new value of the field after the file maintenance is performed.
\nField Number         **019**
\nMnemonic             **NEWNUMBER**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
\n
\n***Important:***  For certain FM History records, the system performs a special calculation (see Field Number). If the file maintenance includes a new Locator field, the system stores that Locator value in this field.
`)
fmHistoryRecordFields.set("oldcharacter", ` 
\n### Old Character
\n
\n If the Data Type field is set to 0 (Character) or 1 (Character), the system updates this field with the old value of the field before the file maintenance was performed.
\nField Number         **020**
\nMnemonic             **OLDCHARACTER**
\nData Type            **40 Characters**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("newcharacter", ` 
\n### New Character
\n
\n If the Data Type field is set to 0 (Character) or 1 (Character), the system updates this field with the new value of the field after the file maintenance is performed.
\nField Number         **021**
\nMnemonic             **NEWCHARACTER**
\nData Type            **40 Characters**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("oldmoney", ` 
\n### Old Money
\n
\n If the Data Type is set to 6 (Money) or 7 (Money), the system updates this field with the old value of the field before the file maintenance was performed.
\nField Number         **022**
\nMnemonic             **OLDMONEY**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("newmoney", ` 
\n### New Money
\n
\n If the Data Type field is set to 6 (Money) or 7 (Money), the system updates this field with the new value of the field after the file maintenance is performed.
\nField Number         **023**
\nMnemonic             **NEWMONEY**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("olddate", ` 
\n### Old Date
\n
\n If the Data Type field is set to 3 (Date), the system updates this field with the old value of the field before the file maintenance was performed.
\nField Number         **024**
\nMnemonic             **OLDDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("newdate", ` 
\n### New Date
\n
\n If the Data Type field is set to 3 (Date), the system updates this field with the new value of the field after the file maintenance is performed.
\nField Number         **025**
\nMnemonic             **NEWDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("oldrate", ` 
\n### Old Rate
\n
\n If the Data Type field is set to 2 (Rate), the system updates this field with the old value of the field before the file maintenance was performed.
\nField Number         **026**
\nMnemonic             **OLDRATE**
\nData Type            **Rate**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("newrate", ` 
\n### New Rate
\n
\n If the Data Type field is set to 2 (Rate), the system updates this field with the new value of the field after the file maintenance is performed.
\nField Number         **027**
\nMnemonic             **NEWRATE**
\nData Type            **Rate**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("consolenumber", ` 
\n### Console Number
\n
\n If the file maintenance is performed from a console, the system stores the console number (0–8999) in this field. Otherwise, the system stores 9999 in this field.
\nField Number         **028**
\nMnemonic             **CONSOLENUMBER**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("batchsequence", ` 
\n### Batch Sequence
\n
\n If a record was created by a batch job, this field contains the sequence number of the batch job that created it, similar to the batch sequence field in the Transaction record. If a record was not created by a batch job, the system stores 0 in this field.
\nField Number         **029**
\nMnemonic             **BATCHSEQUENCE**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
\n
\nThe system assigns a batch sequence number to each batch job that runs throughout the day to uniquely identify each transaction with a specific batch job. The batch sequence number starts over at 1 after you run Close Day Processing to move the system date to a new day.
`)
fmHistoryRecordFields.set("processoruser", ` 
\n### Processor User
\n
\n This field contains information saved from the optional SymConnect User field in the SymConnect message. The SymConnect message creator can provide specific user information in this field.
\nField Number         **030**
\nMnemonic             **PROCESSORUSER**
\nData Type            **Code to 32767**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
\n
\nThe system saves the field value but performs no validation of the contents. A zero indicates that the Processor User field was not used.
\n
\nFor credit unions using SymConnect with the corporate interface, the Processor User field stores the initiator of a dual control request. The initiator is the user first making the request. (Dual control requests, such as creating a new corporate interface user, require a different user's confirmation before taking effect.)
`)
fmHistoryRecordFields.set("confirmationseq", ` 
\n### Confirmation Sequence
\n
\n This number is system-generated during posting or memo posting and provided to any SymConnect transaction requesting it.
\nField Number         **031**
\nMnemonic             **CONFIRMATIONSEQ**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("recordname", ` 
\n### Record Name
\n
\n This field contains a description of the record affected by the file maintenance; the system derives this field value from the value of the Record Type field.
\nField Number         **800**
\nMnemonic             **RECORDNAME**
\nData Type            **40 Characters**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
`)
fmHistoryRecordFields.set("fieldname", ` 
\n### Field Name
\n
\n This field contains a description of the field affected by the file maintenance; the system derives this field value from the values of the following fields: Record Type, Field Number, and Sub Field Number.
\n
\nField Number         **801**
\nMnemonic             **FIELDNAME**
\nData Type            **40 Characters**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
\n
\nTip: Although you can use the Field Name field to look for the field label in the system, you could encounter a change in behavior if the field label changes. The field labels are not static and could change without notice.
\n   - Instead of using IF FMHISTORY:FIELDNAME=”Field Label”, a better and more dynamic programming method is to use the field number because the field number never changes. The following code uses the Field Number field:
\n   - IF FMHISTORY:FIELDNUMBER=XXX
\n
\nThis method provides a more consistent and reliable programming method.
`)
fmHistoryRecordFields.set("confirmationnumber", ` 
\n### Confirmation Number
\n
\n Displays the 4-digit User Number and the 10-digit Confirmation Sequence number.
\nField Number         **802**
\nMnemonic             **CONFIRMATIONNUMBER**
\nData Type            **14 Numeric Characters**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **N/A**
\nDefault Value				 **N/A**
\n
\n***Important:***  This field is only available in the following file maintenance history records:
\nAccount record (FMHISTORY)
\nCheck record (CHECK FMHISTORY)
\nMember record (MEMBERREC FMHISTORY)
\nMember Address record (MBRADDRESS FMHISTORY)
`)
