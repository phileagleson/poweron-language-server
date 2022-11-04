export const eftRecordFields = new Map<string, string>()
eftRecordFields.set("type", ` 
\n### EFT Type
\nThis field identifies the purpose of the EFT record.
\nField Number         **001**
\nMnemonic             **TYPE**
\nData Type            **Code to 7**
\nSource               **System-calculated or User-entered**
\nHelp File            **00701**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n#### Data Type Descriptions
\n##### (0) Payroll
\n   Select this option for one of the following:
\n       - A payroll direct deposit
\n       - An automatic share-to-share, share-to-loan, or loan payment transfer (including periodic distributions from a tax-deferred share to another share or loan)
\n       - A deposit to the account requested from another financial institution through ACH (Automated Clearing House) origination
\n##### (1) Bill Payment
\n   Select this option for one of the following:
\n       - A transfer of funds for bill payment
\n       - A periodic distribution from a tax-deferred share to be paid to the member by check
\n       - A withdrawal from the account to be sent to another institution through ACH origination
\n##### (2) ACH Distribution
\n   Select this option if the EFT record matches an ACH deposit or deposit prenotification item and is used to post ACH distributions during ACH Posting. Symitar Quest matches EFT records based on criteria you specify in the following EFT record fields:
\n       - Match Code 1
\n       - Match ID 1
\n       - Match Code 2
\n       - Match ID 2
\n       - Match Code 3
\n       - Match ID 3
\n       - Match Code 4
\n       - Match ID 4
\n       - Match Code 5
\n       - Match ID 5
\n       - Match Code 6
\n       - Match ID 6
\n##### (3) ACH Origination
\n   Select this option if the EFT record controls a deposit to the account or a withdrawal from the account that is requested from another financial institution or sent to another financial institution through ACH origination.##### (4) ACH Origination - NTMC
\n   Select this option if the EFT record controls a deposit or withdrawal for the account to be requested from another financial institution or sent to another financial institution by NTMC through ACH origination. This option is set by the system.
\n       - Important: As of March 17, 2015, the ACH Origination - NTMC option is not available.
\n##### (5) ACH Debit
\n   Select this option if the EFT record matches an ACH debit and is used to post ACH debits during ACH posting. This EFT record allows you to redirect an ACH debit entry to debit a different share ID than what is entered in the ACH debit entry but that is within the same account. For example, the ACH debit entry indicates that the debit should post from a share account, and the member wants it to post from a draft account. By setting up an ACH Debit EFT record under the member account, and entering the draft ID in the ID field of the EFT record, and filling in the appropriate match code field, you can redirect which share ID is debited by answering Yes at the Perform ACH Debit Redirection? prompt in the ACH Posting batch program. Symitar Quest matches EFT records based on criteria you specify in the following EFT record fields:
\n       - Match Code 1
\n       - Match ID 1
\n       - Match Code 2
\n       - Match ID 2
\n       - Match Code 3
\n       - Match ID 3
\n       - Match Code 4
\n       - Match ID 4
\n       - Match Code 5
\n       - Match ID 5
\n       - Match Code 6
\n       - Match ID 6
\n##### (6) Batch ACH Origination
\n   Select this option to identify EFT records that are set up for batch origination. To originate EFT records that have the EFT Type field set to (6) Batch ACH Origination, you must select the batch ACH group at the ACH Origination Batch ACH Group List prompt located in the ACH Origination option of the ACH Reports batch program.##### (7) ACH Origination - Verification
\n   Select this option to identify EFT records that calculate a micro transaction amount used for account verification when a new external account for transfers is submitted by a member through home banking. The micro transaction amount is drawn from either a GL account or the member's share, and it is deposited to the external financial institution through ACH origination.
\n   
\n       - Depending on how you set up the Verification Count parameter in the SymConnect Client-Specific Parameters, there could be one or two micro transactions created for a single external account transfer request.
\n   
\n       - The criteria used to pick up an ACH Origination - Verification EFT record via the ACH Reports batch program is as follows:
\n   
\n       - The EFT record is not expired.
\n       - The EFT Type field is set to (7) ACH Origination - Verification.
\n       - The External Account record is found for this EFT record.
\n       - The External Account record Status field is set to (0) Pending; or the External Account record Status field is set to (1) Prenote/Verification Sent and the Prenote /Verification Sent Date field is equal to the system date.
\n       - The EFT Frequency field is set to (0) None.
\n   
\n       - This EFT type is only used to send the micro transaction amount. Once the EFT record is sent during ACH origination, the record is expired. Symitar Quest sets the Expiration Date field to the batch date.
`)
eftRecordFields.set("groupnumber", ` 
\n### Group Number
\nThis field stores the credit union-defined number (up to six digits) of the payroll group or bill payment group referenced by the EFT record.
\nField Number         **002**
\nMnemonic             **GROUPNUMBER**
\nData Type            **6 Characters**
\nSource               **User-entered**
\nHelp File            **00702**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf you select (2) ACH Distribution at the EFT Type field, Symitar Quest does not use this field, but you might want to enter a value in the Group Number field for your own purposes.
\n
\nSymitar Quest uses the Group Number field in two batch programs:
\n
\nWe do not recommend posting periodic transfers from shares by ACH distribution group number, but you can do so to post ACH items directly to shares throughout the month and transfer out to the distribution list once a month. We recommend that you perform all ACH distributions at the time of posting.
`)
eftRecordFields.set("idtype", ` 
\n### ID Type
\nThis field determines whether the share, loan, or GL account is affected.
\nField Number         **003**
\nMnemonic             **IDTYPE**
\nData Type            **Code to 2**
\nSource               **System-calculated or User-entered**
\nHelp File            **00703**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
eftRecordFields.set("id", ` 
\n### ID
\nThis field stores the share or loan ID from which the funds will be withdrawn.
\nField Number         **004**
\nMnemonic             **ID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **00704**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
eftRecordFields.set("glcode", ` 
\n### GL Code
\nThis field specifies the GL code you are performing an ACH origination for when the ID Type field is set to GL Account.
\nField Number         **049**
\nMnemonic             **GLCODE**
\nData Type            **Code to 999**
\nSource               **System-calculated or User-entered**
\nHelp File            **00749**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nFor EFT records that have the EFT Type field set to (7) ACH Origination - Verification, the GL code you enter offsets the verification amount transaction (micro transaction) of the external account. Symitar Quest originates the items using ACH transaction code (47) General Ledger Payment.
`)
eftRecordFields.set("audioid", ` 
\n### Audio ID
\nThis field controls audio response access for on-demand bill payment EFT records only.
\nField Number         **017**
\nMnemonic             **AUDIOID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **00717**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nOn-demand bill payment allows members to change the amount paid to the vendor each month. When you run the Bill Payment Posting batch program for an on-demand bill payment group, Symitar Quest resets the Post Amount field to 0. The item does not post again until the member calls in to specify a new post amount.
\n
\nIf the EFT Type field is set to (3) ACH Origination, enter a unique non-zero value if you want to place ACH origination holds. The ACH Reports batch program copies the value in this field to the Reference 2 field in the ACH Origination Hold record.
`)
eftRecordFields.set("payee", ` 
\n### Payee
\nThis field identifies the payee ID, payee name, or a portion of the payee name for this EFT record.
\nField Number         **005**
\nMnemonic             **PAYEE**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **00705**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nType an asterisk (*) to look up payees.
\n
\nLeave this field blank to use the name from an associated EFT Name record, if one exists. If there is not an associated EFT Name record, Symitar Quest uses the name from the primary account Name record.
`)
eftRecordFields.set("reference", ` 
\n### Reference
\nThis field stores the external account number from the EFT record.
\nField Number         **006**
\nMnemonic             **REFERENCE**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00706**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
eftRecordFields.set("reference2", ` 
\n### Reference 2
\nThis field is used only when the EFT Type field is set to (3) ACH Origination. During the ACH origination process, for applicable SEC entries this information is in the ACH file as the individual identification number.
\nField Number         **039**
\nMnemonic             **REFERENCE2**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00739**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nFor WEB credit entries, this is a required field (per NACHA rules) and is used to store the name of the consumer originator that initiated the origination entry. For WEB debit entries, this field is optional (per NACHA rules). For CCD, PPD, and TEL entries, this field is optional. Leave this field blank for ARC, BOC and RCK entries.
`)
eftRecordFields.set("amountcode", ` 
\n### Amount Code
\nThis field stores an optional credit-union defined code to indicate how bill payments should be calculated.
\nField Number         **022**
\nMnemonic             **AMOUNTCODE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **00722**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
eftRecordFields.set("batchachorignum", ` 
\n### Batch ACH Origination Number
\nEach time NetTeller creates a new Batch ACH Origination number, this field stores a system-generated number for all EFT records that are related to the Batch ACH Origination record.
\nField Number         **048**
\nMnemonic             **BATCHACHORIGNUM**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **00748**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is used to cross-reference EFT records to their related Batch ACH Origination record. The number is the same as the Locator field number from the related Batch ACH Origination record. This field is only used with EFT records associated with Batch ACH Origination; otherwise, it is set to zero.
\n
\nUnder normal circumstances, you should not revise this field. This field is for internal use only and not sent in the ACH file.
`)
eftRecordFields.set("frequency", ` 
\n### Frequency
\nThis field is used for scheduled bill payment EFT records (the EFT Type field is set to 1) posted by Bill Payment Posting or for ACH origination (the EFT Type field is set to 3) handled by ACH Reports.
\nField Number         **033**
\nMnemonic             **FREQUENCY**
\nData Type            **Code to 14**
\nSource               **System-calculated or User-entered**
\nHelp File            **00733**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n#### Data Type Descriptions
\n##### (0) None
\n   Select this option if this is not a scheduled bill payment or if the ACH origination occurs only once.##### (1) Annual
\n   Select this option if the scheduled bill payment or ACH origination should occur annually.##### (2) Semiannual
\n   Select this option if the scheduled bill payment or ACH origination should occur semiannually (twice per year).##### (3) Quarterly
\n   Select this option if the scheduled bill payment or ACH origination should occur quarterly.##### (4) Monthly
\n   Select this option if the scheduled bill payment or ACH Origination should occur monthly.##### (5) Semimonthly
\n   Select this option if the scheduled bill payment or ACH origination should occur semimonthly (twice per month).##### (6) Biweekly Skip First
\n   Select this option if the scheduled bill payment or ACH origination should occur biweekly (every two weeks), skipping the first payment of the month if there are three scheduled payments in the month.##### (7) Biweekly Skip Last
\n   Select this option if the scheduled bill payment or ACH origination should occur biweekly (every two weeks), skipping the last payment of the month if there are three scheduled payments in the month.##### (8) Biweekly
\n   Select this option if the scheduled bill payment or ACH origination should occur biweekly (every two weeks).##### (9) Weekly
\n   Select this option if the scheduled bill payment or ACH origination should occur weekly.##### (11) Weekly Skip First
\n   Select this option if the scheduled bill payment or ACH origination should occur weekly, skipping the first payment of the month if there are five scheduled payments in the month.##### (12) Weekly Skip Last
\n   Select this option if the scheduled bill payment or ACH origination should occur weekly, skipping the last payment of the month if there are five scheduled payments in the month.##### (13) Bimonthly
\n   Select this option if the scheduled bill payment or ACH origination should occur every other month.***Important:***  The payment frequency (10) Immed for immediate payment does not apply here. The numbering has been set to conform to the rest of Symitar Quest.
\n
\nIf the EFT Type field is set to (3) ACH Origination and the Frequency field is set to (0) None, ACH origination occurs every time the ACH Origination batch function runs, as long as the value in the group number field is within the specified list and the posting date is between the Effective Date and the Expiration Date fields for this EFT record.
\n
\nIf the EFT Type field is set to (3) ACH Origination and the Frequency field is set to a value other than (0) None, ACH origination occurs every time the ACH Origination batch function runs, as long as the group number is within the specified list, the posting date is between the Effective Date and the Expiration Date fields for this EFT record, and the posting date is after the dates in the Next Date and Defer Until fields.
`)
eftRecordFields.set("day1", ` 
\n### Day 1
\nThis field stores the day of the month (1-31) on which the first scheduled bill payment or ACH origination should occur for annual, semiannual, quarterly, monthly, or semimonthly payments (the Frequency field is set to 1, 2, 3, 4, or 5).
\nField Number         **034**
\nMnemonic             **DAY1**
\nData Type            **Code to 31**
\nSource               **User-entered**
\nHelp File            **00734**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is used for scheduled bill payment EFT records (the EFT Type field is set to 1) posted by Bill Payment Posting or for ACH origination (the EFT Type field is set to 3) handled by ACH Reports.
`)
eftRecordFields.set("day2", ` 
\n### Day 2
\nThis field stores the day of the month (1-31) on which the second scheduled bill payment or ACH origination should occur for semimonthly payments (the Frequency field is set to 5).
\nField Number         **035**
\nMnemonic             **DAY2**
\nData Type            **Code to 31**
\nSource               **User-entered**
\nHelp File            **00735**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is used for scheduled bill payment EFT records (the EFT Type field is set to 1) posted by Bill Payment Posting or for ACH origination (the EFT Type field is set to 3) handled by ACH Reports.
`)
eftRecordFields.set("nextdate", ` 
\n### Next Date
\nThis field is used for scheduled bill payment EFT records (the EFT Type field is set to 1) posted by the Bill Payment Posting batch program or for ACH origination records (the EFT Type field is set to 3) handled by ACH Reports.
\nField Number         **032**
\nMnemonic             **NEXTDATE**
\nData Type            **Date**
\nSource               **System-calculated or User-entered**
\nHelp File            **00732**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis field is not used for payroll EFT records (the EFT Type field is set to 0) or for ACH Distribution records (the EFT Type field is set to 2).
\n
\nIf the EFT Type field is set to (3) ACH Origination and the Frequency field is set to a value other than (0) None, ACH origination advances the Next Date field according to the following criteria:
\n***Important:***  If you enter a date that is after the current system date in the Effective Date field, and the Last Tran Date field is blank, the ACH Origination function of the ACH Reports batch program will generate an ACH prenotification. ACH Origination determines the EFT start date using the values in the Effective Date, Frequency, and Day 1 fields. You must set the Next Date field to at least one period back from the desired start date for the date to advance correctly. If you do not do this, you must readjust the Next Date field after the origination of the prenotification so that the first monetary ACH origination occurs on the desired date.
`)
eftRecordFields.set("deferdate", ` 
\n### Defer Until
\nThis field stores the first date that scheduled bill payments or ACH origination should occur.
\nField Number         **036**
\nMnemonic             **DEFERDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00736**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis field is used for scheduled bill payment EFT records (the EFT Type field is set to 1) posted by Bill Payment Posting or for ACH origination (the EFT Type field is set to 3) handled by ACH Reports. Symitar Quest advances the Next Date field, as needed, but does not make any payments before this date. This field is used to manually specify that scheduled bill payments or ACH origination should be skipped until this date.
`)
eftRecordFields.set("prenotesentdate", ` 
\n### Prenote/Verification Sent Date
\nThis field stores the date that the pre-note or micro transaction amount is sent to the external financial institution (for ACH origination).
\nField Number         **040**
\nMnemonic             **PRENOTESENTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00740**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest populates this field with the batch date when the ACH Reports batch program is run.
\n
\nYou cannot access this field for file maintenance.
`)
eftRecordFields.set("status", ` 
\n### Status
\nThis field stores a credit union-defined character that indicates the status of the EFT record.
\nField Number         **023**
\nMnemonic             **STATUS**
\nData Type            **1 Character**
\nSource               **User-entered**
\nHelp File            **00723**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is useful for inquiries only and can be used to store extra information about bill payments. You must perform file maintenance on this field manually.
\n
\nIf the EFT Type field is set to (3) ACH Origination and the Match ID 1 field that is set to WEB or TEL, ACH Origination uses the value in this field as the payment type code.
\n
\nLeave this field blank for ARC, CCD, or RCK transactions.
`)
eftRecordFields.set("standardamount", ` 
\n### Standard Amount
\nThis field stores the standard dollar amount of the deposit, deduction, or distribution and is used for inquiries only.
\nField Number         **012**
\nMnemonic             **STANDARDAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00712**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nWhen you create the EFT record, enter the standard (usual) dollar amount of the payroll deposit, bill payment deduction, or ACH distribution here. The EFT Batch File Maintenance batch program updates this field with the value in the Post Amount field. Otherwise, this field contains the standard amount originally entered when the EFT record was created.
\n
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
`)
eftRecordFields.set("postamount", ` 
\n### Post Amount
\nThis field indicates the amount posted to the member's account.
\nField Number         **011**
\nMnemonic             **POSTAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00711**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can update this field using the EFT Repeat FM work area.
\n***Important:***  The Post Amount field in the EFT record prohibits amounts over $25,000 when a BOC Standard Entry Class (SEC) code is created. If you enter an amount over $25,000, the following message appears:
\nAmount not to exceed $25,000
`)
eftRecordFields.set("effectivedate", ` 
\n### Effective Date
\nThis field indicates the date the funds transfers should start.
\nField Number         **007**
\nMnemonic             **EFFECTIVEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00707**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf the EFT Type field is set to (3) ACH Origination, entering a date in this field causes the ACH Origination function of the ACH Reports batch program to generate an ACH prenotification if the Last Tran Date field is not already filled in, indicating that this is the first run for the record.
\n
\nFor other ACH origination, entering a date in this field causes the ACH Origination function of the ACH Reports batch program to generate an ACH prenotification.
\n***Important:***  ACH Origination sets the EFT start date using the values in the Effective Date, Frequency, and Day 1 fields. When you generate a prenotification, you must set the Next Date field to at least one period back from the desired start date for the date to advance correctly.
`)
eftRecordFields.set("expirationdate", ` 
\n### Expiration Date
\nThis field stores the date after which the funds transfers should no longer occur.
\nField Number         **008**
\nMnemonic             **EXPIRATIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00708**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf the EFT Type field is set to (3) ACH Origination, enter the date after which the ACH origination should no longer occur. When the system date reaches this date, Symitar Quest stops performing ACH origination for this EFT record.
\n
\nIf pending EFT records have the EFT Type field set to (7) ACH Origination - Verification, Symitar Quest replaces this field with the batch date when the ACH Reports batch program is run for the ACH Origination Verification Group.
\n
\nIf the Frequency field is set to (0) None, the ACH Origination batch function can optionally set the expiration date to the posting date after an item has been originated.
`)
eftRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date when you create, change, or save the EFT record.
\nField Number         **047**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00747**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThere will be times when Symitar Quest updates this field because the record was saved, even though there may not be any actual changes in the record.
\n***Important:***  Symitar Quest does not change this field when a calculated field changes.
`)
eftRecordFields.set("matchcode1", ` 
\n### Match Code 1
\nThis field contains a code that specifies the ACH field to be matched with the information entered in the Match ID 1 field.
\nField Number         **025**
\nMnemonic             **MATCHCODE1**
\nData Type            **Code to 16**
\nSource               **System-calculated or User-entered**
\nHelp File            **00725**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nBecause there are six sets of match code and match ID fields, you can specify up to six different fields to match on. Symitar Quest attempts to find a match as follows:
\n   - If all six match code fields are set to (0) None, no match can occur with that EFT record.
\n   - If up to five of the match code fields are set to (0) None, Symitar Quest pays attention only to the non-zero match codes.
\n   - If all match code fields are non-zero, the ACH item must match all specifications to be considered a match to the EFT record.
\n
\nIt is generally best to set the Match Code 1 and Match ID 1 fields to match the Company ID field. If there are two or more different ACH items that post to the same account and come from the same Company ID field, you can use the Match Code 2 field to match the Individual ID, Name, or ACH Transaction Code fields to specify a unique match with this particular ACH distribution.
\n
\nIn most cases, matching on the exact company ID is sufficient. In some cases, however, additional match criteria are required. For example, a husband and wife may both work at the same company and may want different distributions for their paychecks, or a member may want different distributions for savings than for demand deposits, requiring you to match the ACH Transaction Code field. To allow for such cases, you can set up each account differently. Symitar Quest checks the EFT records in order and selects the first ACH distribution EFT record that matches.
\n
\nWhen used for ACH distribution, many ACH character fields in the ACH Item record (Individual Name, Custom Info, etc.) are matched with fields in the EFT record (Match ID 1, Match ID 2, etc.). The matching fields in the EFT record must be entered exactly the same with the exception of case sensitivity.
\n
\nWhen the EFT Type field is set to (2) ACH Distribution, select one of the following to indicate the ACH field that will match the Match ID 1 field.
\n##### (0) None
\n   Select this option if Symitar Quest should not consider this field when searching for a matching EFT record for ACH distributions.##### (1) Company ID
\n   Select this option to match the Company ID field, a ten-character field in the ACH Batch Header record. This field usually contains digits, but sometimes contains blanks or other characters.##### (2) Company Name
\n   Select this option to match on the Company Name field, a 16-character field in the ACH Batch Header record.##### (3) Company Disc
\n   Select this option to match the Company Discretionary Data field, a 20-character field in the ACH Batch Header record. On the ACH Edit List report, this field is identified as the Company Discretion field.##### (4) Company Entry
\n   Select this option to match the Company Entry Description field, a 10-character field in the ACH Batch Header record. On the ACH Edit List report, this field is identified as the Desc field.##### (5) Individual ID
\n   Select this option to match the Individual ID field, a 15-character field in the ACH Entry Detail record.##### (6) Individual Name
\n   Select this option to match the Individual Name field, a 22-character field in the ACH Entry Detail record.##### (7) Individual Acct
\n   Select this option to match the Individual Account Number (DFI Account Number) field, a 17-character field in the ACH Entry Detail record. On the ACH Edit List report, this field is identified as the Individual Acct field. This field is stored on the ACH item record in the Processor Account field.##### (8) Tran Code
\n   Select this option to match the ACH Transaction Code field, a two-digit field in the ACH Entry Detail record. On some reports, this field is identified as the Tran field. The applicable ACH transaction codes are as follows:
\n       - (22) Demand deposit
\n       - (23) Demand deposit prenote
\n       - (32) Savings deposit
\n       - (33) Savings deposit prenote
\n##### (9) Settle Day
\n   Select this option to match a date derived from the Julian settlement date in the ACH Batch Header record. The date is the two-digit day of the month for the settlement date. For example, if the settlement date for the entry is the first of the month, this field is set to 01.##### (10) Desc Date
\n   Select this option to match the Company Descriptive Date field, a six-character field in the ACH Batch Header record. On the ACH Edit List report, this field is identified as the Desc Date field.##### (11) Amount
\n   Select this option to match the amount of the deposit. You can enter the amount in any format, since Symitar Quest uses only the digits from the Match ID field to perform the match, but we suggest that you enter the amount with commas and decimal points in the appropriate places to make it more readable. For example, 5,320.77 is more readable than 532077, although both represent the same amount.##### (12) Custom Info
\n   Select this option to match the client-selected data in the Custom Info field. This eight-character field can correspond to data from the ACH Batch Header record or ACH Entry Detail record.##### (13) Standard Entry Class Code
\n   Select this option to match the type of ACH Origination transaction (ARC, CCD, CIE, etc.).##### (14) Originating R & T
\n   Select this option to match the routing and transit number for the financial institution originating the transaction.##### (15) Effective Entry Date
\n   Select this option to match the effective date entered for the transaction.##### (16) Share ID
\n   Select this option to match the share ID included with the account number in the ACH Entry Detail record. The appropriate share ID is determined by the credit union's edit logic.   For additional information about setting up matches, see the Match Code and Match ID sections of this document.
\nIf the EFT Type field is set to (3) ACH Origination, select one of the following to indicate whether there is a representative payee:
\n
\nThe ACH Origination function (of the ACH Reports batch program) flags the representative payee indicator with this value for the item in the new ACH ENR file.
`)
eftRecordFields.set("matchcode2", ` 
\n### Match Code 2
\nThis field contains a code that specifies the ACH field to be matched with the information entered in Match ID 2 field.
\nField Number         **027**
\nMnemonic             **MATCHCODE2**
\nData Type            **Code to 16**
\nSource               **System-calculated or User-entered**
\nHelp File            **00727**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf the EFT Type field is set to (2) ACH Distribution, enter a value (0-16) to indicate the ACH field that will match the Match ID 2 field. For a list of available codes, see the definition for the Match Code 1 field in this document.
`)
eftRecordFields.set("matchcode3", ` 
\n### Match Code 3
\nThis field contains a code that specifies the ACH field to be matched with the information entered in Match ID 3 field.
\nField Number         **030**
\nMnemonic             **MATCHCODE3**
\nData Type            **Code to 16**
\nSource               **System-calculated or User-entered**
\nHelp File            **00730**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf the EFT Type field is set to (2) ACH Distribution, enter a value (0-16) to specify the ACH field that will match the Match ID 3 field. For a list of available codes, see the definition for the Match Code field in this document.
\n
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
`)
eftRecordFields.set("matchcode4", ` 
\n### Match Code 4
\nThis field stores a code that specifies the ACH field to be matched with the information entered in Match ID 4 field.
\nField Number         **041**
\nMnemonic             **MATCHCODE4**
\nData Type            **Code to 16**
\nSource               **System-calculated or User-entered**
\nHelp File            **00741**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf the EFT Type field is set to (2) ACH Distribution, enter a value (0-16) to specify the ACH field that will match the Match ID 4 field. For a list of available codes, see the definition for the Match Code 1 field in this document.
\n
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
`)
eftRecordFields.set("matchcode5", ` 
\n### Match Code 5
\nThis field stores a code that specifies the ACH field to be matched with the information entered in Match ID 5 field.
\nField Number         **043**
\nMnemonic             **MATCHCODE5**
\nData Type            **Code to 16**
\nSource               **System-calculated or User-entered**
\nHelp File            **00743**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf the EFT Type field is set to (2) ACH Distribution, enter a value (0-16) to specify the ACH field that will match the Match ID 5 field. For a list of available codes, see the definition for the Match Code 1 field in this document.
\n
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
`)
eftRecordFields.set("matchcode6", ` 
\n### Match Code 6
\nThis field stores a code that specifies the ACH field to be matched with the information entered in Match ID 6 field.
\nField Number         **045**
\nMnemonic             **MATCHCODE6**
\nData Type            **Code to 16**
\nSource               **System-calculated or User-entered**
\nHelp File            **00745**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf the EFT Type field is set to (2) ACH Distribution, enter a value (0-16) to indicate the ACH field that matches the Match ID 6 field. For a list of available codes, see the definition of the Match Code 1 field in this document.
\n
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
`)
eftRecordFields.set("matchid1", ` 
\n### Match ID 1
\nThis field stores the information to be matched to the ACH field that is specified in the Match Code 1 field.
\nField Number         **026**
\nMnemonic             **MATCHID1**
\nData Type            **22 Characters**
\nSource               **User-entered**
\nHelp File            **00726**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf you enter a value (0-16) at the Match Code 1 field, then in this field you should enter the information that will match the ACH field that you specified in the Match Code 1 field. (The Match Code 1 field definition in this document contains information about the entries required in the ACH fields.) Your entry in this field must match the entry in an ACH field.
\n
\nYou can use the match ID fields to search for an exact match or a similar match to the characters you enter. To find a similar match, create a template in the match ID field by enclosing your entry in quotation marks (" "). The template can also include the following characters:
\n
\nYou can use only one template. You cannot use several templates separated by backslashes. For example, to match any company name beginning with AJAX TOOL, such as AJAX TOOL INC or AJAX TOOL LIMITED, you can specify the following:
\n
\nTo match only AJAX TOOL INC, you can specify the following:
\n
\nIf the Match Code 1 field is set to (16) Share ID, Symitar Quest adds leading zeros to the share ID entered in this field so that it is in the correct format for your system (two or four digits). You must specify an exact value to match. If you set the Match Code 1 field to (16) Share ID, a tooltip appears reminding you of this when you hover the cursor over the Match ID 1 prompt.
\n
\nThe only match code value that does not support templates is (11) Amount, which matches on the amount. For this value, you must specify the exact amount in the Match ID field.
\n
\nIf the EFT Type field is set to (3) ACH Origination and you type ENR or CIE as the first three characters of the Match ID 1 field, ACH origination uses the value in this field as the Standard Entry Class (SEC) code. Symitar Quest also accepts the following Entry Class Code field values: WEB, ARC, BOC, TEL, RCK, and CCD. (See the Entry Class Code document for more details.)
`)
eftRecordFields.set("matchid2", ` 
\n### Match ID 2
\nThis field specifies the information to be matched to the ACH field that is specified in the Match Code 2 field.
\nField Number         **028**
\nMnemonic             **MATCHID2**
\nData Type            **22 Characters**
\nSource               **User-entered**
\nHelp File            **00728**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf you enter a value (0-16) in the Match Code 2 field, then in this field, you should enter the information that matches the ACH field specified in the Match Code 2 field. See the definition for Match Code 1 in this document for information about the entries required in the ACH fields. Your entry in this field must match the entry in an ACH field.
\n
\nFor information about creating templates in the match ID fields, see the definition for the Match ID 1 field in this document.
\n
\nIf Match Code 2 field is set to (16) Share ID, Symitar Quest adds leading zeros to the share ID entered in this field so that it is in the correct format for your system (two or four digits). You must specify an exact value to match. If you set the Match Code field to (16) Share ID, a tooltip appears reminding you of this when you hover the cursor over the Match ID 2 prompt.
\n
\nIf the EFT Type field is set to (3) ACH Origination, and the Item record Entry Class Code field is set to ENR , you must enter the 16-digit receiving company name/ID number in either this field or the Receiving Company field of the Payee record. If both the Receiving Company field of the Payee record and the Match ID 2 field of the EFT record contain values, the ACH Origination function uses this value. The processor will reject any transaction that does not have either a value in this field or a value in the Receiving Company field of the Payee record. See the ACH Rule Book for information on mandatory and required fields.
\n
\nWhen the Entry Class Code field is set to CIE, this field should contain the Individual Identification Number.
\n
\nWhen the Entry Class Code field is set to ARC, BOC, POP, or RCK, this field must contain the check serial number. Enter the check serial number in the Match ID 2 field and the check serial number is also added to the Individual Identification Number field in the ACH Entry Detail record to meet return fee NACHA requirements.
`)
eftRecordFields.set("matchid3", ` 
\n### Match ID 3
\nThis field specifies the information to be matched to the ACH field that is specified in the Match Code 3 field.
\nField Number         **031**
\nMnemonic             **MATCHID3**
\nData Type            **22 Characters**
\nSource               **User-entered**
\nHelp File            **00731**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf you enter a value (0-16) in the Match Code 3 field, then in this field, you should enter the information that matches the ACH field specified in the Match Code 3 field. See the definition for the Match Code 1 field in this document for information about the entries required in the ACH fields. Your entry in this field must match the entry in an ACH field.
\n
\nFor information about creating templates in the match ID fields, see the definition for the Match ID 1 field in this document.
\n
\nIf Match Code 3 field is set to (16) Share ID, Symitar Quest adds leading zeros to the share ID entered in this field so that it is in the correct format for your system (two or four digits). You must specify an exact value to match. If you set the Match Code field to (16) Share ID, a tooltip appears reminding you of this when you hover the cursor over the Match ID 3 prompt.
\n
\nWhen the EFT Type field is set to (3) ACH Origination, the financial institution name entered in this field appears in the ACH warehouse entry, either in this field or in the Warehouse Company Name field of the Payee record. When both the Warehouse Company Name field of the Payee record and the Match ID 3 field of the EFT record contain values, the ACH Origination function uses this value.
\n
\nIf you answer Yes at the Post Company Name prompt in the ACH Posting batch program, the name of the financial institution appears in the transaction history and on the member’s statement. This ensures that transactions clearly display the source of the transaction funds.
`)
eftRecordFields.set("matchid4", ` 
\n### Match ID 4
\nThis field specifies the information to be matched to the ACH field that is specified in the Match Code 4 field.
\nField Number         **042**
\nMnemonic             **MATCHID4**
\nData Type            **22 Characters**
\nSource               **User-entered**
\nHelp File            **00742**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf you enter a value (0-16) in the Match Code 4 field, then in this field you should enter the information that matches the ACH field specified in the Match Code 4 field. See the definition for the Match Code 1 field in this document for information about the entries required in the ACH fields. Your entry in this field must match the entry in an ACH field.
\n
\nFor information about creating templates in the Match ID fields, see the definition for the Match ID 1 field in this document..
\n
\nIf the Match Code 4 field is set to (16) Share ID, Symitar Quest adds leading zeros to the share ID entered in this field so that it is in the correct format for your system (two or four digits). You must specify an exact value to match. If you set the Match Code field to (16) Share ID, a tooltip appears reminding you of this when you hover the cursor over the Match ID 4 prompt.
\n
\nWhen you create a PPD return fee entry related to an ARC, BOC, or POP item, the individual's name entered in the Match ID 4 field must match exactly as it appears in the ACH Item record or Exception Item record Individual Name field for the original ACH item.
`)
eftRecordFields.set("matchid5", ` 
\n### Match ID 5
\nThis field specifies the information to be matched to the ACH field that is specified in the Match Code 5 field.
\nField Number         **044**
\nMnemonic             **MATCHID5**
\nData Type            **22 Characters**
\nSource               **User-entered**
\nHelp File            **00744**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf you enter a value (0-16) in the Match Code 5 field, then in this field you should enter the information that will match the ACH field specified in the Match Code 5 field. See the definition in the Match Code 1 field in this document for information about the entries required in the ACH fields. Your entry in this field must match the entry in an ACH field.
\n
\nFor information about creating templates in the Match ID fields, see the definition of the Match ID 1 field in this document.
\n
\nIf Match Code 5 field is set to (16) Share ID, Symitar Quest adds leading zeros to the share ID entered in this field so that it is in the correct format for your system (two or four digits). You must specify an exact value to match. If you set the Match Code field to (16) Share ID, a tooltip appears reminding you of this when you hover the cursor over the Match ID 5 prompt.
`)
eftRecordFields.set("matchid6", ` 
\n### Match ID 6
\nThis field specifies the information to be matched to the ACH field that is specified in the Match Code 6 field.
\nField Number         **046**
\nMnemonic             **MATCHID6**
\nData Type            **22 Characters**
\nSource               **User-entered**
\nHelp File            **00746**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf you enter a value (0-16) in the Match Code 6 field, then in this field you should enter the information that matches the ACH field specified in the Match Code 6 field. See the definition in the Match Code 1 field in this document for information about the entries required in the ACH fields. Your entry in this field must match the entry in an ACH field.
\n
\nFor information about creating templates in the Match ID fields, see the definition of the Match Code 1 field in this document.
\n
\nIf Match Code 6 field is set to (16) Share ID, Symitar Quest adds leading zeros to the share ID entered in this field so that it is in the correct format for your system (two or four digits). You must specify an exact value to match. If you set the Match Code field to (16) Share ID, a tooltip appears reminding you of this when you hover the cursor over the Match ID 6 prompt.
`)
eftRecordFields.set("specificamount", ` 
\n### Specific Amount
\nThis field stores the specific dollar amount for bill payments and is useful to change the bill payment amount temporarily.
\nField Number         **013**
\nMnemonic             **SPECIFICAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00713**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf there is an amount in this field, Symitar Quest posts this amount instead of the amount in the Post Amount field. You must perform file maintenance on this field manually.
\n
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
`)
eftRecordFields.set("balance", ` 
\n### Balance
\nFor bill payment records only, this field stores the balance owed by the payee.
\nField Number         **018**
\nMnemonic             **BALANCE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00718**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is useful for inquiries only. You must perform file maintenance on this field manually.
\n
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
`)
eftRecordFields.set("creditlimit", ` 
\n### Credit Limit
\nThis field stores the member's credit limit with the bill payment processor.
\nField Number         **015**
\nMnemonic             **CREDITLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00715**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is useful for inquiries only. You must perform file maintenance on this field manually.
\n
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
`)
eftRecordFields.set("statewithholding", ` 
\n### State Withholding
\nThis field indicates the amount that should be withheld for state taxes from an automated distribution of a tax-deferred share that has the IRS Code field set to (01) IRA, (02) Deferred Comp, (03) SEP, (04) Keogh, or (05) 401K.
\nField Number         **020**
\nMnemonic             **STATEWITHHOLDING**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00720**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
`)
eftRecordFields.set("federalwithholding", ` 
\n### Federal Withholding
\nThis field indicates the amount that should be withheld for federal taxes from an automated distribution of a tax-deferred share that has the IRS Code field set to (01) IRA, (02) Deferred Comp, (03) SEP, (04) Keogh, or (05) 401K.
\nField Number         **019**
\nMnemonic             **FEDERALWITHHOLDING**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00719**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
`)
eftRecordFields.set("dqcount", ` 
\n### DQ Count
\nFor bill payment EFT records only, this field indicates the total number of times the member has been delinquent with bill payments.
\nField Number         **021**
\nMnemonic             **DQCOUNT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00721**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is useful for inquiries only. You must perform file maintenance on this field manually.
\n
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
`)
eftRecordFields.set("postfreq", ` 
\n### Posting Freq
\nThis field is for information purposes only; it indicates the posting frequency of payrolls for inquiry purposes.
\nField Number         **024**
\nMnemonic             **POSTFREQ**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **00724**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou must update this field manually.
\n
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
`)
eftRecordFields.set("distributionratio", ` 
\n### Distribution Ratio
\nThis field indicates the amount to post.
\nField Number         **029**
\nMnemonic             **DISTRIBUTIONRATIO**
\nData Type            **Code to 22**
\nSource               **User-entered**
\nHelp File            **00729**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n#### Data Type Descriptions
\n##### (0) No special ratio, same as (1)
\n   Select this option to post the amounts specified in the EFT Transfer records, as usual##### (1) Take standard amounts
\n   Select this option to post the amounts specified in the EFT Transfer records, as usual.##### 2-19
\n   Select one of these options to post the value in the Post Amount field, as usual, but multiply the amounts in the EFT Transfer records by the specified value before posting.##### (20) Post no distributions
\n   Select this option to post the value in the Post Amount field, as usual, but not any of the amounts specified in the EFT Transfer records.##### (21) Take 50% of standard amounts
\n   Select this option to post the value in the Post Amount field, as usual, but post only 50% of the amounts specified in the EFT Transfer records.##### (22) Take 150% of standard amounts
\n   Select this option to post the value in the Post Amount field, as usual, but post 150% of the amounts specified in the EFT Transfer records.
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
\n***Important:***  You should thoroughly test any changes to your payroll handling procedures in a separate test institution before implementing them in your live institution.
`)
eftRecordFields.set("lasttrandate", ` 
\n### Last Tran Date
\nThis field stores the date of the last transaction.
\nField Number         **009**
\nMnemonic             **LASTTRANDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **00709**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nUnder normal circumstances, you should not revise this field.
`)
eftRecordFields.set("lasttranamount", ` 
\n### Last Tran Amount
\nThis field stores the amount of the last transaction.
\nField Number         **010**
\nMnemonic             **LASTTRANAMOUNT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **00710**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nUnder normal circumstances, you should not revise this field.
`)
eftRecordFields.set("countytd", ` 
\n### Count YTD
\nThis field stores the total number of funds transfers during the current year.
\nField Number         **016**
\nMnemonic             **COUNTYTD**
\nData Type            **Code to 9999**
\nSource               **System-calculated**
\nHelp File            **00716**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nWhenever the Payroll Posting or Bill Payment Posting batch program posts a payroll or bill payment transaction, Symitar Quest increments the value in this field by 1. Manual Payroll (PR) or Bill Payment (BP) teller transactions do not increment this field. Under normal circumstances, you should not revise this field.
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest resets this field to 0.
\n
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
`)
eftRecordFields.set("amountytd", ` 
\n### Amount YTD
\nThis field stores the total amount of all funds transferred during the current year.
\nField Number         **014**
\nMnemonic             **AMOUNTYTD**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **00714**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nWhenever the Payroll Posting or Bill Payment Posting batch program posts a payroll or bill payment transaction, Symitar Quest adds the transaction amount to this field. Manual Payroll (PR) or Bill Payment (BP) teller transactions do not increment this field. Under normal circumstances, you should not revise this field.
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest resets this field to 0.
\n
\nIf the EFT Type field is set to (3) ACH Origination, this field is not used.
`)
eftRecordFields.set("regdcode", ` 
\n### Regulation D Code
\nThis field indicates whether this EFT record is used to post a withdrawal that is subject to Regulation D limiting.
\nField Number         **038**
\nMnemonic             **REGDCODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00738**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest uses this field only if the EFT Type field is set to (1) Bill Payment.
\nData Type Descriptions:
\n   - (0) Not Reg D
\n   - (1) Reg D Limited
\n
\nIf you set this field to (1) Reg D Limited, the Bill Payment Posting batch program treats the withdrawal as subject to Regulation D limiting if the withdrawal posts to a share that has a share type that is specified in the Reg D Limiting Type List parameter in the Miscellaneous Parameters. If the share is not a Regulation D-limited share, Symitar Quest ignores this field and the withdrawal is not subject to limiting under Regulation D.
\n***Important:***  Consult with your credit union auditor or compliance officer about using this field, especially if you use the Bill Payment Posting batch program for bill payments, ACH origination, or IRA distributions, or to create checks that are payable to your members rather than to a third party.
`)
eftRecordFields.set("locator", ` 
\n### Locator
\nThis field value in each record is unique for each member account.
\nField Number         **037**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **00737**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nBecause each Locator field value is unique, it can be used as a unique identification of a specific record. Symitar Quest automatically assigns the Locator field value when the record is created, and you cannot change it. The value is a positive number greater than zero.
\n
\nThe Locator field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using the Locator field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
eftRecordFields.set("payeename", ` 
\n### Payee Name
\nThis field stores the payee's name.
\nField Number         **800**
\nMnemonic             **PAYEENAME**
\nData Type            **40 Characters**
\nSource               **System-entered**
\nHelp File            **00780**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou cannot access this field for file maintenance. Symitar Quest derives the value for this field as follows:
`)
eftRecordFields.set("payeeextraaddress", ` 
\n### Payee Extra Address
\nThis field stores the payee's extra address information.
\nField Number         **801**
\nMnemonic             **PAYEEEXTRAADDRESS**
\nData Type            **40 Characters**
\nSource               **System-entered**
\nHelp File            **00781**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou cannot access this field for file maintenance. Symitar Quest derives the value for this field as follows:
`)
eftRecordFields.set("payeestreet", ` 
\n### Payee Street
\nThis field stores the name of the payee's street address.
\nField Number         **802**
\nMnemonic             **PAYEESTREET**
\nData Type            **40 Characters**
\nSource               **System-entered**
\nHelp File            **00782**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou cannot access this field for file maintenance. Symitar Quest derives the value for this field as follows:
`)
eftRecordFields.set("payeecity", ` 
\n### Payee City
\nThis field stores the name of the payee's city.
\nField Number         **803**
\nMnemonic             **PAYEECITY**
\nData Type            **40 Characters**
\nSource               **System-entered**
\nHelp File            **00783**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou cannot access this field for file maintenance. Symitar Quest derives the value for this field as follows:
`)
eftRecordFields.set("payeestate", ` 
\n### Payee State
\nThis field stores the name of the payee's state.
\nField Number         **804**
\nMnemonic             **PAYEESTATE**
\nData Type            **10 Characters**
\nSource               **System-entered**
\nHelp File            **00784**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou cannot access this field for file maintenance. Symitar Quest derives the value for this field as follows:
`)
eftRecordFields.set("payeezipcode", ` 
\n### Payee Zip Code
\nThis field stores the payee's ZIP Code.
\nField Number         **805**
\nMnemonic             **PAYEEZIPCODE**
\nData Type            **10 Characters**
\nSource               **System-entered**
\nHelp File            **00785**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou cannot access this field for file maintenance. Symitar Quest derives the value for this field as follows:
`)
