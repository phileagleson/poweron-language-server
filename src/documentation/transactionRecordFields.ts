export const transactionRecordFields = new Map<string, string>()
transactionRecordFields.set("balsegcount", ` 
\n### Balance Segment Count
\nThis field counts the number of balance segments used by the Transaction record.
\nField Number         **001**
\nMnemonic             **BALSEGCOUNT**
\nData Type            **Code to 1**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThere are two separate Transaction records created for a Loan Segment Transfer (LG) transaction.
`)
transactionRecordFields.set("accountnumber", ` 
\n### Account Number
\nThis field identifies the account affected by the transaction.
\nField Number         **002**
\nMnemonic             **ACCOUNTNUMBER**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("id", ` 
\n### ID
\nThis field stores the ID of the Share record (if the ID Type field is set to 0) or the Loan record (if the ID Type field is set to 1) affected by the transaction.
\nField Number         **003**
\nMnemonic             **ID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("idtype", ` 
\n### ID Type
\nThis field indicates whether the transaction affected a Share or Loan record.
\nField Number         **004**
\nMnemonic             **IDTYPE**
\nData Type            **Code to 1**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nData Type Descriptions:
\n   - (0) Share
\n   - (1) Loan
`)
transactionRecordFields.set("commentcode", ` 
\n### Comment Code
\nThis field indicates whether the transaction includes a comment.
\nField Number         **005**
\nMnemonic             **COMMENTCODE**
\nData Type            **Code to 1**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The transaction was monetary (the Action Code field is set to any value except C)##### 1
\n   The transaction includes a comment (the Action Code field is set to C)
\n`)
transactionRecordFields.set("transfercode", ` 
\n### Transfer Code
\nThis field stores a code that indicates whether the transaction includes a transfer.
\nField Number         **006**
\nMnemonic             **TRANSFERCODE**
\nData Type            **Code to 1**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The transaction does not include a transfer (X) transaction.##### 1
\n   The transaction includes a transfer (X) transaction.
\nA value of 1 in this field displays as Yes in the Transfer Code field on the transaction screen.
`)
transactionRecordFields.set("adjustmentcode", ` 
\n### Adjustment Code
\nThis field stores a code that indicates whether the transaction includes an adjustment.
\nField Number         **007**
\nMnemonic             **ADJUSTMENTCODE**
\nData Type            **Code to 1**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The transaction does not include an adjustment.##### 1
\n   The transaction includes an adjustment.
\nA value of 1 in this field displays as Yes in the Adjustment Code field on the transaction screen.
`)
transactionRecordFields.set("regecode", ` 
\n### Reg E Code
\nThis field stores a code that indicates if the transaction was a Reg E transaction.
\nField Number         **008**
\nMnemonic             **REGECODE**
\nData Type            **Code to 1**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The transaction does not include a Reg E transaction##### 1
\n   The transaction includes a Reg E transaction:
\n       - The Source Code is A (ATM), B (Bill Payment), or T (Audio Response Telephone).
\n       - The transaction was an ACH transaction to or from a share.
\n       - The transaction was an ACH advance from a loan.
\n       - The transaction included a Reg E (RE) transaction.
\n       - The Payroll Posting batch program transferred funds to another account number (in this case, both the withdrawal transaction and the deposit transaction have a Reg E Code of 1).
\n       - This transaction record is a comment transaction that is a continuation of the previously posted transaction to the same share or loan.
\n
\nA value of 1 in this field displays as Yes in the Reg E Code field on the transaction screen.
`)
transactionRecordFields.set("regdcheckcode", ` 
\n### Reg D Check Code
\nThis field indicates whether Reg D transactions have occurred on an account.
\nField Number         **009**
\nMnemonic             **REGDCHECKCODE**
\nData Type            **Code to 1**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The share used in the transaction does not have a share type that appears in the Reg D Limiting Type List parameter field in the Miscellaneous Parameters.##### 1
\n   The share used in the transaction has a share type that appears in the Reg D Limiting Type List parameter field in the Miscellaneous Parameters and one of the following is true:
\n       - A teller includes the Regulation D (RD) transaction code in a Share Withdrawal (SW) transaction
\n       - Important: The system does not update this field if the transaction string includes a Transfer (X) transaction.
\n       - The withdrawal is a point-of-sale transaction posted through the ACH Posting batch program
\n       - The withdrawal is posted through SymConnect with a Payee Name specified
\n
\nA value of 1 in this field displays as Yes in the RegD Chk field on the transaction screen.
`)
transactionRecordFields.set("regdtransfercode", ` 
\n### Reg D Transfer Code
\nThis field indicates whether a Reg D transfer transaction occurred on an account.
\nField Number         **010**
\nMnemonic             **REGDTRANSFERCODE**
\nData Type            **Code to 1**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The share used in the transaction does not have a share type that appears on the Reg D Limiting Type List parameter field in the Miscellaneous Parameters.##### 1
\n   The share used in the transaction has a share type that appears on the Reg D Limiting Type List parameter field in the Miscellaneous Parameters and one of the following is true:
\n       - The transaction includes a Transfer (X) transaction and the Source Code field is set to T (Audio Response Telephone).
\n       - A teller types Y at the Telephone Transfer prompt.
\n       - The transaction is a system-generated automatic overdraw transfer withdrawal.
\n   Important: This applies only when the Withdrawal Reg D limiting or Overdraw Reg D limiting prompt in the batch posting program is set to Y.
\nA value of 1 in this field displays as Yes in the RegD Trn field on the transaction screen.
`)
transactionRecordFields.set("voidcode", ` 
\n### Void Code
\nThis field indicates whether the transaction included a void.
\nField Number         **011**
\nMnemonic             **VOIDCODE**
\nData Type            **Code to 1**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The transaction did not include a Void (VO) transaction, and it appears as No in the Void Code field on the transaction screen.##### 1
\n   The transaction included a Void (VO) transaction, and it appears as Yes in the Void Code field on the transaction screen.
\nA value of 1 in this field appears as Yes in the Void Code field on the transaction screen.
`)
transactionRecordFields.set("subactioncode", ` 
\n### Sub Action Code
\nThis field stores a code that indicates the type of transaction that occurred.
\nField Number         **012**
\nMnemonic             **SUBACTIONCODE**
\nData Type            **1 Character**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThe Credit and Debit Card Posting batch program sets the Sub Action Code field to P (Purchase) for all transactions that post to shares.
`)
transactionRecordFields.set("sequencenumber", ` 
\n### Sequence Number
\nThis field stores a number that the system assigns in sequence to each transaction posted on a specific day.
\nField Number         **013**
\nMnemonic             **SEQUENCENUMBER**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThe system uses the same counter for all transactional sequence numbers. Since there are many processes running within the system simultaneously, there may appear to be gaps in the sequence numbers assigned for one process because the sequence numbers were assigned to another process that was running at the same time.
\n
\nFor example, if drafts are being posted by the back office at the same as time tellers are performing transactions, some sequence numbers are assigned to the draft posting activity while others are assigned to the teller transactions. For that reason, when only viewing the teller transaction output, there may appear to be missing sequence numbers; however, the "missing" sequence numbers were assigned to transactions being performed by the draft posting process that was running at the same time.
`)
transactionRecordFields.set("effectivedate", ` 
\n### Effective Date
\nThis field stores the effective date of the transaction.
\nField Number         **014**
\nMnemonic             **EFFECTIVEDATE**
\nData Type            **Date**
\nSource               **User-entered or System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value **Date Null**
\n
\nAfter a loan recast, the system resets this field to its previous value.
`)
transactionRecordFields.set("postdate", ` 
\n### Post Date
\nThis field stores the current system date when the transaction is completed.
\nField Number         **015**
\nMnemonic             **POSTDATE**
\nData Type            **Date**
\nSource               **System-calculated or User-entered**
\nHelp File            **Date**
\nDefault Control      **N/A**
\nDefault Value **Date Null**
`)
transactionRecordFields.set("posttime", ` 
\n### Post Time
\nThis field stores the current system time when the transaction is completed.
\nField Number         **016**
\nMnemonic             **POSTTIME**
\nData Type            **Code to 2359**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("usernumber", ` 
\n### User Number
\nThis field stores the user number of the person who or the batch ID of the batch program that initiated the transaction.
\nField Number         **017**
\nMnemonic             **USERNUMBER**
\nData Type            **Code to 9999**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("useroverride", ` 
\n### User Override
\nThis field stores the user number of the person who provided the override for the transaction.
\nField Number         **018**
\nMnemonic             **USEROVERRIDE**
\nData Type            **Code to 9999**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("securitylevels", ` 
\n### Security Levels
\nThis field stores the Security Parameters security level assigned to this type of transaction
\nField Number         **019**
\nMnemonic             **SECURITYLEVELS**
\nData Type            **Code to 9999**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("description", ` 
\n### Description
\nThis field stores a description of the transaction.
\nField Number         **020**
\nMnemonic             **DESCRIPTION**
\nData Type            **16 Characters**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("actioncode", ` 
\n### Action Code
\nThis field identifies the action performed by the transaction.
\nField Number         **021**
\nMnemonic             **ACTIONCODE**
\nData Type            **1 Character**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("sourcecode", ` 
\n### Source Code
\nThis field identifies the source of the transaction.
\nField Number         **022**
\nMnemonic             **SOURCECODE**
\nData Type            **1 Character**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\n*Use of these source codes is optional.
`)
transactionRecordFields.set("balancechange", ` 
\n### Balance Change
\nThis field stores the amount of the transaction the teller designates as principal.
\nField Number         **023**
\nMnemonic             **BALANCECHANGE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("interest", ` 
\n### Interest/Penalty
\nThis field stores the amount of the transaction the teller designates as interest (if the transaction affects a Loan record) or penalty (if the transaction affects a Share record).
\nField Number         **024**
\nMnemonic             **INTEREST**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("newbalance", ` 
\n### New Balance
\nThis field stores the sum of the Balance Change field and the Balance field from the Share record.
\nField Number         **025**
\nMnemonic             **NEWBALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThis field is only used for transactions that have the Comment Code field set to 0.
`)
transactionRecordFields.set("feeamount", ` 
\n### Fee Amount
\nThis field stores late charges and lease termination fees on Loan Payment (LP) transactions.
\nField Number         **026**
\nMnemonic             **FEEAMOUNT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nYou must know where the payment is being allocated (split among principal, interest, fees, sales tax, etc.).
`)
transactionRecordFields.set("escrowamount", ` 
\n### Escrow Amount
\nThis field stores the amount of a payment that the teller applies to an escrow Share record.
\nField Number         **027**
\nMnemonic             **ESCROWAMOUNT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("lasttrandate", ` 
\n### Last Tran Date
\nThis field stores the value from the Share or Loan record Last Transaction Date field before this transaction posts to the Share or Loan record.
\nField Number         **028**
\nMnemonic             **LASTTRANDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value **Date Null**
`)
transactionRecordFields.set("maturityloanduedate", ` 
\n### Maturity/Loan Due Date
\nThis field stores the value from the Share record Maturity Date field if this is a share transaction, or it stores the value from the Loan record Due Date field if this is a loan transaction.
\nField Number         **029**
\nMnemonic             **MATURITYLOANDUEDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value **Date Null**
\n
\nFor loan transactions, the due date of the loan occurs before the transaction was posted.
`)
transactionRecordFields.set("comment", ` 
\n### Comment
\nThis field stores the text of a comment transaction.
\nField Number         **030**
\nMnemonic             **COMMENT**
\nData Type            **42 Characters**
\nSource               **User-entered or System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThis field is only used for transactions that have the Comment Code field set to 1. There are standard uses of comment transactions where the comment contains specific information in specific formats. For example, if the first two characters are %, the remainder of the comment usually contains information that is expanded or suppressed by various standard system functions.
\nA fee comment for a transaction code defined by the Teller Transaction Trancode Fees parameters and by the Cmnt by Teller Trn Code Fees field of Miscellaneous Parameters uses the % format, as shown here:
\n   - Transaction Code	Fee Comment
\n   - Cash Disbursed	
\n   - % TlrTrn Trancode Fee XX,XXX.XX-CD 
\n
\n   - Checks Cashing	
\n   - % TlrTrn Trancode Fee XX,XXX.XX-KC 
\n
\n   - Check Disbursed	
\n   - % TlrTrn Trancode Fee XX,XXX.XX-KD
\n
\n   - Check Other	
\n   - % TlrTrn Trancode Fee XX,XXX.XX-KO
\n
\n   - Money Orders	
\n   - % TlrTrn Trancode Fee XX,XXX.XX-MO
\n
\n   - Stop Payment	
\n   - % TlrTrn Trancode Fee XX,XXX.XX-SP 
\n
\n   - Travelers Checks	
\n   - % TlrTrn Trancode Fee XX,XXX.XX-TC 
\n
\n   - Wire Transfer	
\n   - % TlrTrn Trancode Fee XX,XXX.XX-WT
\n
\nWhen the Cmnt by CD, MO, TC Trancodes field is set to Yes, the system displays one of these comments for the CD, MO, and TC transactions respectively:
\n
\n           Cash Disbursed% TCode 01 CD XX,XXX,XXX.XX-
\n
\n           Money Orders% TCode 01 MO XX,XXX,XXX.XX-CCC
\n
\nCCC represents the number of money orders
\n           Travelers Checks% TCode 01 TC XX,XXX,XXX.XX-
\nUser can also place free-form comments using the (SC) Share Comment or (LC) Loan Comment teller transaction or by batch or demand posting programs.
\n
\nIf this Transaction record is created by an edit run, the system may update this field with a specific value to identify the transaction as ATM, POS, FSC, SCC, or INQ.
\n
\nFor PIN-based transactions, the system appends additional Transaction record comments to ensure inclusion of all Reg E data (merchant name, address, city, and state or country) if that data does not fit in a single comment line.
\n
\nYou can also optionally append the terminal ID. Contact Card Services for more information.
\n
\nFor a Loan Comment Transaction record, the comment is for a FE transaction with a loan ID selected. The subsource code for the fee selected is any fee type set as a Regulation Z fee type in Miscellaneous Parameters. The format for a Comment field of this type is as follows: % OtherFee S IDID Sub XXXX Amt ##########.
\n
\nFor transactions other than teller transactions, the comment is created when indicated by the OTHERACTION value in the program.
`)
transactionRecordFields.set("branch", ` 
\n### Branch
\nThis field stores the branch number associated with the console that initiated the transaction.
\nField Number         **031**
\nMnemonic             **BRANCH**
\nData Type            **Code to 9999**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("consolenumber", ` 
\n### Console Number
\nThis field stores the console number (0–8999) if the transaction is performed from a console; otherwise, it stores 9999
\nField Number         **032**
\nMnemonic             **CONSOLENUMBER**
\nData Type            **Code to 9999**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("batchsequence", ` 
\n### Batch Sequence
\nThis field stores a number that the system assigns in sequence to each batch job that runs throughout the day, to uniquely identify each transaction with a specific batch job.
\nField Number         **033**
\nMnemonic             **BATCHSEQUENCE**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThe batch sequence number starts over at 1 after you run Close Day Processing to move the system date to a new day.
`)
transactionRecordFields.set("salestaxamount", ` 
\n### Sales Tax Amount
\nThe amount of sales tax is stored in this field when a payment is applied that includes sales tax, such as for lease loans.
\nField Number         **034**
\nMnemonic             **SALESTAXAMOUNT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
transaction comments are posted to the loan to detail the sales tax amount and rate breakdown by state, county, and city.
\n
\nFor more information regarding our optional lease loan support, see Leasing Support.
`)
transactionRecordFields.set("activitydate", ` 
\n### Activity Date
\nThis field stores the value from the Activity Date field in the Share or Loan record, depending on the type of transaction.
\nField Number         **035**
\nMnemonic             **ACTIVITYDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value **Date Null**
`)
transactionRecordFields.set("billedfeeamount", ` 
\n### Billed Fee Amount [Billed Fee]
\nThis field stores the amount of a partial payment the system applies against the billed fee when a loan has an amount in the Billed Fee Unpaid field.
\nField Number         **036**
\nMnemonic             **BILLEDFEEAMOUNT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nPayments that the system applies to billed fees are separate from principal, are not included in the amount in the Balance Change field, and do not affect the loan balance.
\n
\nAmounts applied to a billed fee through a Loan Balance Transfer (BG) or Loan Balance Payment (LB) transaction appear in this field.
`)
transactionRecordFields.set("processoruser", ` 
\n### Processor User
\nThis field stores information saved from the SymXchange Processor User field or from the optional SymConnect User field in the SymConnect message.
\nField Number         **037**
\nMnemonic             **PROCESSORUSER**
\nData Type            **Code to 32767**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThe SymConnect message creator can provide specific user information in this field. The system only saves the field, performing no validation of the contents. A zero in this field indicates that it was not used.
\n
\nFor credit unions using SymConnect or SymXchange with the corporate interface, this field stores the initiator of a dual control request. The initiator is the user first making the request. (Dual control requests, such as creating a new corporate interface user, require a different user's confirmation before taking effect.)
`)
transactionRecordFields.set("memberbranch", ` 
\n### Member Branch
\nThis field is only used by corporate credit unions; it can be blank to indicate that a transaction does not have a member branch number, or you can enter a four-digit number to indicate the branch where the transaction took place.
\nField Number         **038**
\nMnemonic             **MEMBERBRANCH**
\nData Type            **4 Characters**
\nSource               **User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThe system displays this field when you view detail for monetary transactions in the Transaction History inquiry.
\n
\nThe field is blank for all transactions unless the posting process sets it to some other value. Supported values are blank and 0000-9999. This field is only relevant if the Member Branch Support field in the Share record is set to On.
`)
transactionRecordFields.set("prevavailcredit", ` 
\n### Prev Available Credit
\nThis field stores the available credit as calculated at the time the transaction was processed, before it was posted.
\nField Number         **039**
\nMnemonic             **PREVAVAILCREDIT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("subsource", ` 
\n### Sub Source Code
\nThis field stores a code that specifies the transaction fee.
\nField Number         **040**
\nMnemonic             **SUBSOURCE**
\nData Type            **Code to 9999**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThe system applies subsource codes during batch posting (such as ACH Posting or Miscellaneous Posting) and certain teller transactions.
\n
\nThe transaction for some of the fees indicated by this code are not covered by Regulation DD.
\n
\nWhen the Source Code field is set to anything other than F (fee), the system sets this field to (0) Unknown. The system sets this field to one of the following values when the Source Code field is set to F:
\n
\nValues 51–1000 and 1002–9999 are reserved for future use.
\n
\nSubsource code 1001 is used by the system for escrow PMI disbursements.
`)
transactionRecordFields.set("confirmationseq", ` 
\n### Confirmation Sequence
\nThis field stores a number that is generated during posting or memo mode posting to be provided to SymConnect when requested.
\nField Number         **041**
\nMnemonic             **CONFIRMATIONSEQ**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("micracctnum", ` 
\n### MICR Account Number
\nThis field stores the value in the Exception Item record Processor Account field when the draft is an exception, unless custom coding requires it to store a different value.
\nField Number         **042**
\nMnemonic             **MICRACCTNUM**
\nData Type            **20 Characters**
\nSource               **System-calculated or User-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nAlthough the data in the MICR Account Number field will be the same as the data in the Processor Account field, if you manually change the value in either field so they no longer match, the MICR Account Number field takes preference. This information updates share draft transaction history at the time of posting.
`)
transactionRecordFields.set("micrrt", ` 
\n### MICR R&T Number
\nThis field stores the routing and transit (R&T) number when a transaction within a share draft file becomes an exception.
\nField Number         **043**
\nMnemonic             **MICRRT**
\nData Type            **9 Characters**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThis information updates share draft transaction history at the time of posting.
`)
transactionRecordFields.set("recurringtran", ` 
\n### Recurring?
\nThis field indicates whether the transaction is recurring (based on indicators provided by the network or merchant).
\nField Number         **044**
\nMnemonic             **RECURRINGTRAN**
\nData Type            **Code to 1**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nData Type Descriptions:
\n   - (0) No (default)
\n   - (1) Yes
\n
\nIf this field is set to 0 (No), it means that the network or merchant has indicated that this transaction is not recurring. For example, in the ATM Dialog record, if the network or merchant sends an "N" response for the recurring indicator or does not send the recurring indicator at all (if the indicator in the file is blank), the system sets the Recurring field on the Transaction record to 0and treats the transaction as a non-recurring transaction.
`)
transactionRecordFields.set("feeexmtcrtsyamt", ` 
\n### Fee Exempt Courtesy Amount
\nThis field stores the courtesy pay amount applied at the time as an overdrawn transaction if the ODT Auth/Fee Option field for the source code of the transaction is set to 2, 3, 6, or 7 on the Share record.
\nField Number         **045**
\nMnemonic             **FEEEXMTCRTSYAMT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThe posting program updates this field when the transaction is posted.
\n
\n           (Start)N/AN/A0.00N/A0.00
\n           #1-W/D no fee15.000.000.00 -15.00 -15.0015.000.00 +15.00 +15.00
\n           #2-W/D and fee20.0025.00-15.00
\n-20.00
\n-25.00
\n-60.000.0015.00 (no change)
\n           #3-Deposit10.00N/A-60.00 +10.00 -50.000.0015.00 -10.00 5.00
\n           #4 - W/D no fee30.000.00-50.00 -30.00 -80.0030.005.00 +30.00 35.00
\n           #5 - Deposit150.00N/A-80.00 +150.00 70.000.00Deposit > Value so =0.00
\n`)
transactionRecordFields.set("escrowunpaidbalchg", ` 
\n### Escrow Unpaid Bal Chg
\nThis field displays the amount that the Loan record Escrow Unpaid field has changed.
\nField Number         **046**
\nMnemonic             **ESCROWUNPAIDBALCHG**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("escrowappliedbalchg", ` 
\n### Escrow Applied Bal Chg
\nThis field displays the amount that the Loan record Escrow Applied field has changed during a single loan payment. If the amount decreases, the transaction history shows this as a negative amount and an increase shows as a positive amount.
\nField Number         **047**
\nMnemonic             **ESCROWAPPLIEDBALCHG**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("unappliedpartialpmtchg", ` 
\n### Unapplied Partial Pmt Chg
\nThis field stores the transaction activity for each loan payment affecting the Unapplied Partial Payment field and displays the amount in the expanded Transaction record field.
\nField Number         **048**
\nMnemonic             **UNAPPLIEDPARTIALPMTCHG**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThe activity in this field also appears in Transaction History under the Description field as "Unap," providing the ability to view the transaction activity in an unexpanded version.
\n
\nThe accumulated balance per loan is tracked in the Loan record Unapplied Partial Payment field. The actual unapplied partial payments reside in a GL account titled Loan Unapplied Partial Payment. After you run Close Day Processing. the balance of the GL should equal the amount in the Unapplied Partial Payment field for all Loan records in the servicing platform,
`)
transactionRecordFields.set("feecountby", ` 
\n### Count By for Fee Counts
\nThe system advances this counter field for NSF or Courtesy Pay fees.
\nField Number         **049**
\nMnemonic             **FEECOUNTBY**
\nData Type            **Code to 9999**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("latechgwaivedamt", ` 
\n### Waived Late Charge Amt
\nThis field tracks the amount of uncollected late charges that have been waived during a loan payment transaction. It lets the system handle adjustments to late charge activity when a previously waived late charge transaction is voided or reversed.
\nField Number         **050**
\nMnemonic             **LATECHGWAIVEDAMT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value **0.00**
\n
\nThe system updates this field with the amount of waived late charge activity that occurs during the following teller transactions:
\n   - Loan Payment (LP)
\n   - Loan Payment Adjustment (LPZ)
\n   - Loan Refinance (LR)
\n   - Loan Refinance Adjustment (LRZ)
\n   - Recast Loan (RL)
\n
\nA loan payment transaction that waives a late charge appears as a positive amount in this field. The transaction also increases the Waived Late Charge YTD and Waived Late Charge from Open fields in the Loan record.
\n
\nIf a previously waived late charge is reversed with the Loan Payment Adjustment (LPZ) or Loan Refinance Adjustment (LRZ) transaction, enter a negative value at the Waive Late Chg Adj prompt during the transaction. The negative amount iappears in this field. A negative amount in this field decreases the Waived Late Charge YTD and Waived Late Charge from Open fields in the Loan record.
\n
\nIf there is no related charge activity to document, the Waived Late Charge Amt field displays 0.00, the default value.
\n
\nWhen a loan transaction is performed, the Waived Late Charge Amt field always appears in the Transaction record if the loan uses the values 2, 3, 5, or 7 for the Late Charge Formula parameter (in Late Charge Type parameters). This happens whether or not the Waived Late Charge Amt field is affected by the transaction.
\n
\nLikewise, the Waived Late Charge Amt field appears in the Transaction record if the loan uses the values 0, 1, 4, or 6 for the Late Charge Formula parameter (in Late Charge Type parameters) or has a Loan record Late Charge Type field with a value of 0. This happens when a loan type transaction is performed that involves paid, waived, or postponed late charge activity.
`)
transactionRecordFields.set("latechgunpaidchgamt", ` 
\n### Late Charge Unpaid Chg Amt
\nThis field stores the amount that the Loan record Late Charge Unpaid field has changed during a single loan payment transaction submitted through teller transactions, batch posting, or an online transaction.
\nField Number         **051**
\nMnemonic             **LATECHGUNPAIDCHGAMT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value **0.00**
\n
\nIf the amount decreases, the transaction history shows this as a negative amount; and if the amount increases, the transaction history shows this as a positive amount. If there is no related late charge activity to document, the Late Charge Unpaid Chg Amt displays 0.00, the default value.
\n
\nWhen you perform a loan payment transaction that includes postponed late charges, the system saves the amount of postponed late charges that changed the balance in the Loan record Late Charge Unpaid field to this field.
\n
\nYou can automatically postpone a late charge through any posting program if the Payment Application Method field in the Loan record is set to either SBA Required or a mortgage method (as defined in the Payment Application Methods parameters) that allows threshold payments.
\n
\nWhen you perform a loan transaction on a loan that has the Late Charge Formula parameter (in Late Charge Type parameters) set to 2, 3, 5, or 7, the Late Charge Unpaid Chg Amt field displays in the Transaction record. This happens whether or not Late Charge Unpaid Chg Amt is affected by the transaction.
\n
\nFor loans that have the Late Charge Formula parameter set to 0, 1, 4, or 6 or loans that have a Late Charge Type Loan record field that is set to 0,this field displays in the Transaction record when a loan type transaction is performed that involves paid, waived, or postponed late charge activity.
\n
\nFor loans that have the Late Charge Formula parameter set to (7) Indiana, the system adds the calculated late charges due from delinquent payments and stores the value in this field until the accrued late charges can be recovered from future loan payment transactions.
\n
\nPreviously postponed late charges that result in no change to the Late Charge Unpaid field of the Loan record are not captured in this field and are not considered late charge activity.
`)
transactionRecordFields.set("prevlatechgdate", ` 
\n### Prev Late Charge Date
\nThe system updates this field with the value of the Loan record's Late Charge Date field when a loan transaction occurs.
\nField Number         **052**
\nMnemonic             **PREVLATECHGDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value **__/__/__**
\n
\nFor loans that have the Late Charge Formula parameter in Late Charge Types parameters set to 2, 3, 5, or 7, this field displays in the Transaction record whenever a loan type transaction is performed, since the Late Charge Date Loan record field can change due to a loan transaction that does not include late charge activity.
\n
\nFor loans that have the Late Charge Formula parameter set to 0, 1, 4, or 6 or a Late Charge Type Loan record field that is set to 0, this field displays in the Transaction record when a loan type transaction is performed that involves paid, waived, or postponed late charge activity.
`)
transactionRecordFields.set("prevlatechgaccrued", ` 
\n### Prev Late Charge Accrued
\nThis field only applies to a Loan record with the Late Charge Formula parameter set to (5) Wisconsin, and it displays the amount in the Loan record Late Charge Accrued field in before a loan payment transaction takes place.
\nField Number         **053**
\nMnemonic             **PREVLATECHGACCRUED**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value **0.00**
\n
\nThis field stores the amount of partial payments that are credited toward the first scheduled due date after the date stored in the Loan record Late Charge Date field.
\n
\nThis field only displays in the Transaction record when the Loan record Prev Late Charge Accrued field is not set to $0.00.
\n
\nThe member is given credit for the partial payment received for the scheduled payment due. If the grace period expires, the late charge is calculated based on the outstanding scheduled payment still due.
`)
transactionRecordFields.set("latechgfieldsvalid", ` 
\n### Late Charge Fields Valid
\nThis field determines whether to display late charge transaction fields.
\nField Number         **054**
\nMnemonic             **LATECHGFIELDSVALID**
\nData Type            **Code to 1**
\nSource               **System-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value **0**
\n
\nThis field is not visible in the Transaction record. It helps to minimize the number of transaction segments stored by tells the UI when to display the following late charge transaction fields:
\n   - Late Charge Unpaid Chg Amt
\n   - Prev Late Charge Date
\n   - Waived Late Charge Amt
\n
\nFor example, the fields above appear if this field is set to 1.
\n
\nWhen performing a loan transaction, whether or not there is late charge activity, the fields listed above appear if the Loan record Late Charge Formula field is set to one of the following options:
\n
\nWhen performing a loan type transaction, the fields listed above appear only if there is late charge activity and the Loan reacord Late Charge Formula is set to one of the following options:
\n
\nWhen performing a loan type transaction, the fields listed above appear only if there is late charge activity and the Loan record Late Charge Type field is set to 0.
`)
transactionRecordFields.set("balsegid", ` 
\n### Bal Seg 001 Segment ID
\nThis field stores the segment record ID associated with the Loan Segment Transfer (LG), Loan Advance (LA), or New Loan (LN) transaction performed through Teller Transactions for a SymChoice loan.
\nField Number         **055:1**
\nMnemonic             **BALSEGID:1**
\nData Type            **4 Characters**
\nSource               **System-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThe field is not populated when the transaction is performed through another source such as batch posting, SymConnect, or PowerOn.
\n
\nTo minimize the number of transaction segments stored, the system only stores the three balance segment transaction fields when a Loan Segment Transfer (LG), Loan Advance (LA), or New Loan (LN) transaction is performed. When no balance segments are stored, the information they contain is not displayed in the transaction detail.
\n
\nA Loan Advance (LA) or New Loan (LN) transaction only applies to Segment 0.
`)
transactionRecordFields.set("balsegpmtchangedate", ` 
\n### Bal Seg 001 Pmt Change Date
\nThis field stores the payment change date for the segment ID when a Loan Segment Transfer (LG), Loan Advance (LA), or New Loan (LN) transaction is performed through Teller Transactions for a SymChoice loan.
\nField Number         **056:1**
\nMnemonic             **BALSEGPMTCHANGEDATE:1**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value **Date Null**
\n
\nThe date in this field is either the same as the Payment Change Date Loan field from source Segment 0, or it's the same as the Loan record First Payment Date field of a segment whose balance was previously $0.00, or it's the same as the first due date from an Loan Advance (LA) or New Loan (LN) transaction.
\n
\nThis field is not populated when the transaction is performed through another source, such as batch posting, SymConnect, or PowerOn.
\n
\nA Loan Advance (LA) or New Loan (LN) transaction only applies to Segment 0.
\n
\nTo minimize the number of transaction segments stored, the system only stores the three balance segment transaction fields when a Loan Segment Transfer (LG), Loan Advance (LA), or New Loan (LN) transaction is performed. When no balance segments are stored, the information they contain is not displayed in the transaction detail.
`)
transactionRecordFields.set("inteffectdate", ` 
\n### Interest Effective Date
\nThis field stores the date to which interest is calculated when processing a transaction.
\nField Number         **057**
\nMnemonic             **INTEFFECTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value **Date Null**
\n
\nThis field must not be blank when the interest date is different from the transaction effective date.
`)
transactionRecordFields.set("balsegprevfirstpmtdate", ` 
\n### Bal Seg 001 Prev First Pmt Date
\nThis field stores the value of the Segment record’s First Payment Date field at time of transaction.
\nField Number         **058:1**
\nMnemonic             **BALSEGPREVFIRSTPMTDATE:1**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value **Date null**
`)
transactionRecordFields.set("draftnumber", ` 
\n### Draft Number
\nThis field stores the draft number.
\nField Number         **059**
\nMnemonic             **DRAFTNUMBER**
\nData Type            **10 Characters**
\nSource               **System-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThe system populates this field using the following methods:
`)
transactionRecordFields.set("tracernumber", ` 
\n### Tracer Number
\nThis field stores the tracer number.
\nField Number         **060**
\nMnemonic             **TRACERNUMBER**
\nData Type            **15 Characters**
\nSource               **System-entered**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThe system populates this field using the following methods:
\n   - Teller Transactions
\n   - Draft (DR)
\n   - On Us Draft (ON)
\n   - Batch Posting Programs
\n   - Draft Posting
\n   - ACH Posting
\n   - Miscellaneous Posting
\n   - PowerOn/TRANPERFORM
\n   - SymConnect/SymXchange
`)
transactionRecordFields.set("dispositionfee", ` 
\n### Disposition Fee
\nThis field stores the disposition fee when you apply a payment that includes a disposition fee for lease loans.
\nField Number         **061**
\nMnemonic             **DISPOSITIONFEE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThe system includes the disposition fee in the Fees column in the transaction summary.
`)
transactionRecordFields.set("terminationfee", ` 
\n### Termination Fee
\nThis field stores the termination fee when you apply a payment that includes a termination fee for lease loans.
\nField Number         **062**
\nMnemonic             **TERMINATIONFEE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThe system includes the termination fee in the Fees column in the transaction summary.
\n
\nTermination fees only apply if the loan is paid off and the Loan record Termination Fee field contains a value (and the lease is paid off before the balloon date). Sales tax is not collected on the last payment of a lease loan when it is paid off.
`)
transactionRecordFields.set("miscexpenseamount", ` 
\n### Misc Expense Amount [Misc Expense]
\nThis field records the transaction activity for each Loan Balance Payment (LB) or Loan Balance Transfer (BG) transaction that affects a Loan Bankruptcy PrePetition Bal record with the Amount Code field set to (6) Misc Expense.
\nField Number         **063**
\nMnemonic             **MISCEXPENSEAMOUNT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value **0.00**
\n
\nThis field only appears when an amount is allocated to miscellaneous expenses.
\n
\nWhen the Loan Transaction record is collapsed, the amount applied to miscellaneous expenses appears in the Description field as Misc Exp.
\n
\nWhen the Loan Transaction record is expanded, the amount applied to miscellaneous expenses appears in this field.
`)
transactionRecordFields.set("subsourcedescr", ` 
\n### Sub Source Description
\nThis field returns descriptions for each transaction, based on the Source Code and Sub Source Code field values.
\nField Number         **800**
\nMnemonic             **SUBSOURCEDESCR**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("tranamount", ` 
\n### Transaction Amount
\nThis field stores the sum of the absolute values of the Balance Change, Interest/Penalty, and Fee Amount fields.
\nField Number         **801**
\nMnemonic             **TRANAMOUNT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nAdjustment transactions result in a negative transaction amount.
`)
transactionRecordFields.set("confirmationnumber", ` 
\n### Confirmation Number
\nThis field displays the four-digit value in the User Number field and the 10-digit value in the Confirmation Sequence field.
\nField Number         **802**
\nMnemonic             **CONFIRMATIONNUMBER**
\nData Type            **14 Characters**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
`)
transactionRecordFields.set("stmtdesc", ` 
\n### Statement Description 1–Statement Description 4
\nThese fields store the same information that is on the statement in the description column with possible minor differences in the internal spacing and where the fields or lines are broken for continuation of the description.
\nField Number         **803:1–803:4**
\nMnemonic             **STMTDESC:1–STMTDESC:4**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThese fields are built by the system for all transactions, even those that do not usually appear on statements.
\n
\nThese four fields form a single statement-like description (up to 160 characters total) for each share and loan transaction. The combined descriptions are displayed in the transaction detail of the transaction history in Account Manager.
\n
\nThe description length printed on member statements depends on the width of the description column and may extend into the adjacent amount columns. The descriptions printed on a statement range from about 30 to over 60 characters wide, depending on the statement format.
\n
\nFor Cash Disbursed (CD), Money Orders (MO), and Travelers Checks (TC) transactions, the Statement Description 1 field lists the transaction code and amount, as shown here:
\n
\nFor fees related to teller transactions, the Statement Description 1 field lists the fee type and amount, as shown here:
\n
\nThe system can display fee amounts in this context up to $99,999.99.
\n
\nWhen displayed in the transaction history detail, IRA addenda are not included in the description.
\n
\nWhen the transaction is a Fee (FE) transaction, the statement description includes the fee type, the source of the funds, and the amount as in the following example:
\n
\nIf the comment is longer than 40 characters, the extra characters are stored in Statement Description 2 field.
\n
\nThe description for these fields can be modified using the statement description settings in the Statement Generation Batch Program.
`)
transactionRecordFields.set("calcmicrrt", ` 
\n### Calculated MICR R&T Number
\nThis field stores the routing and transit (R&T) number when the MICR R&T Number field stores exactly eight characters.
\nField Number         **804**
\nMnemonic             **CALCMICRRT**
\nData Type            **9 Characters**
\nSource               **System-calculated**
\nHelp File            **No**
\nDefault Control      **N/A**
\nDefault Value        **<Blank>**
\n
\nThe ninth character is the check digit, and it is calculated using a weighted mod 10 formula with 371 weights. If the number of characters in the MICR R&T Number field is more or less than eight, then no calculation is done and this field contains the same characters as the MICR R&T Number field.
\n
\nThis field is only calculated when there are eight characters in the MICR R&T Number field.
`)
