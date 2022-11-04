export const loanRecordFields = new Map<string, string>()
loanRecordFields.set("description", ` 
\n### Description
\nThis field stores a loan description that displays in inquiries and on statements.
\nField Number         **077**
\nMnemonic             **DESCRIPTION**
\nData Type            **30 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01377**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nEnter a description of the loan (up to 30 characters).
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Description field from the specified Application record. If you do not make an entry, Symitar Quest displays the message:
\n   - Cannot be blank
\n
\nYou cannot save the Loan record until you enter a description.
`)
loanRecordFields.set("type", ` 
\n### Loan Type
\nThis field stores a credit union-defined code to identify the type of loan.
\nField Number         **004**
\nMnemonic             **TYPE**
\nData Type            **Code to 99 or Code to 9999**
\nSource               **User-entered or System-entered**
\nHelp File            **01304**
\nDefault Control      **No**
\nDefault Value **00**
\n
\nEnter a credit union-defined code (00-99 or 0000-9999) to identify the type of loan. If you want to use a four-digit code, contact Jack Henry Support.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Loan Type field from the specified Application record.
\n
\nThe loan type determines what defaults, screens, and GL translations are used for this loan. Many batch programs select a group of loans by their loan type.
`)
loanRecordFields.set("id", ` 
\n### Loan ID
\nThis field stores a unique two or four-character ID that identifies the Loan record.
\nField Number         **001**
\nMnemonic             **ID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **01301**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou assign the Loan ID field when you create the Loan record. You cannot access this field for file maintenance. Once you assign a value for the Loan ID field, that ID remains permanently associated with the loan, and you cannot assign the same ID to any other Loan record in the account.
\n***Important:***  We must make a system parameter setting to let loan IDs be either two or four digits. If you wish to change from two to four-digit IDs, notify your account executive. If you change the number of digits, analyze all specfiles that reference share or loan IDs and make any necessary changes. The following list describes conditions that require changes:
\nIf the specfile prints a report that includes a share or loan ID, and if there is insufficient space on the report to support a four-character ID, you should reformat the report to allow for four characters.
\nIf a specfile references a share or loan ID in a temporary field that is defined as CHARACTER(2), you should change the field definition to CHARACTER, or CHARACTER(4).
\nIf the specfile writes a share or loan ID to an output file, expand the output field to four characters. If subsequent PowerOn specfiles use this file, also change those specfiles to reference a four-character ID. If a third party uses the file, the third party should make changes to their file format to accept the new ID length.
`)
loanRecordFields.set("loancode", ` 
\n### Loan Code
\nThis field stores a code that defines certain characteristics of the loan and determines how Symitar Quest processes the loan.
\nField Number         **014**
\nMnemonic             **LOANCODE**
\nData Type            **Code to 6**
\nSource               **System-entered or User-entered**
\nHelp File            **01314**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Closed End
\n   The loan is a closed-end loan. A description of Closed End appears whenever anyone accesses this Loan record, and Symitar Quest processes the record as a closed-end loan. When a transaction brings the value in the Loan Balance field to 0.00, and if the value in the Interest Unpaid field is also 0.00, Symitar Quest sets the value in the Close Date field of the loan to the system date.##### (1) Open End
\n   The loan is an open-end loan. A description of Open End appears whenever anyone accesses this Loan record, and Symitar Quest processes the record as an open-end loan. Symitar Quest does not automatically set a close date for open-end loans, since open-end loans can remain open with a zero balance.
\n       - When the value in the ARM Notice field is set to (1) Secured by principal dwelling, and you set this field to a value other than 0 or 1, Symitar Quest displays this error message:
\n       - Loan Code not allowed for ARM notice
\n   
\n       - Symitar Quest lets you make advances against an open-end loan; if you set up a line of credit loan as an open-end loan, however, the member cannot take automated advances (through the audio response system or ATM or for overdraw protection). The open-end loan code is useful for signature loans when the credit union wants to recalculate the member's debt ratio or credit score before making an advance.
\n##### (2) Line of Credit
\n   The loan is a line of credit loan. A description of Line of Credit appears whenever anyone accesses this Loan record, and Symitar Quest processes the record as a line of credit loan. Symitar Quest does not automatically set a close date for line of credit loans, since line of credit loans can remain open with a zero balance.
\n   
\n       - You cannot change this field to (2) Line of Credit if the loan is in a participation.
\n##### (3) Credit Card
\n   The loan is a credit card loan. A description of Credit Card appears whenever anyone accesses this Loan record, and Symitar Quest processes the record as a credit card loan. Symitar Quest does not automatically set a close date for credit card loans, since credit card loans can remain open with a zero balance. For complete information on in-house processing of credit card loans, see Credit Cards.
\n   
\n       - You cannot change this field to (3) Credit Card if the loan is in a participation.
\n   
\n       - Important: Payment Application Methods parameters for user-created mortgage method types (10-9999), (2) Alternate Standard Method I, and (3) Alternate Standard Method II do not apply to a Loan record when this field is set to (3) Credit Card.
\n##### (4) Lease
\n   The loan is a lease loan and you have purchased the Leasing Support module from us. A description of Lease appears whenever anyone accesses this Loan record, and Symitar Quest processes the record as a lease loan. When a transaction brings the value in the Loan Balance field to $0.00, and if the value in the Interest Unpaid field is set to $0.00, Symitar Quest sets the value in the Close Date field of the loan to the system date.
\n       - Important: Payment Application Methods parameters for user-created mortgage method types (10-9999), (2) Alternate Standard Method I, and (3) Alternate Standard Method II do not apply to a Loan record when this field is set to (4) Lease.
\n##### (5) Avg Daily Bal LOC
\n   The loan is an average daily balance line of credit loan. This option can also be used for any line of credit loan that uses average daily balance finance charge calculations. It works properly only when the loan has a value in the Interest Type field set to 10-99. Symitar Quest does not accrue interest for these loans.
\n   
\n       - This option does not work with promo fields.
\n   
\n       - Caution:
\n       - If you change this field for existing loans from (3) Credit Card to (5) Avg Daily Bal LOC, make sure that the following Loan record fields contain the correct values:
\n       - Interest Rate Index
\n       - Interest Rate Margin
\n       - Interest Rate Margin Sign
\n       - Interest Rate Maximum
\n       - Interest Rate Minimum
\n       - Discount Rate (optional)
\n       - Risk Rate (optional)
\n       - Schd Rate Change Date
\n       - Periodic Cap
\n       - Periodic Cap Start Rate
\n       - Periodic Cap Start Date
\n       - Periodic Cap Frequency
\n       - Important: Payment Application Methods parameters for user-created mortgage method types (10-9999), (2) Alternate Standard Method I, and (3) Alternate Standard Method II do not apply to a Loan record when this field is set to (5) Avg Daily Bal LOC.
\n##### (6) LOC Combination
\n   The loan is a SymChoice Loan. SymChoice Loans can have multiple segments, each with its own interest rate and term.
\n   
\n       - When you select this option, Symitar Quest sets the value in the Max Due Date Advance Period field to 1.
\n   
\n       - If you select this option, you cannot use the options 1, 5, 6, 7, 8, or 10–8999 in the Loan record Interest Type field.
\n   
\n       - If you select this option when the Loan has a Schedule record as a child record, Symitar Quest displays this error message:
\n       - Loan Code cannot be set when Schedule record is found 
\n       -     
\n       - If you select this option when the Loan has a Rate Change record as a child record, Symitar Quest displays this error message:
\n       - Loan Code cannot be set to Combination Loan due to Rate Change record
\n       - Important: Payment Application Methods parameters for user-created mortgage method types (10-9999), (2) Alternate Standard Method I, and (3) Alternate Standard Method II do not apply to a Loan record when this field is set to (6) LOC Combination.
\nThis field must be either (0) Closed End or (1) Open End if a bankruptcy chapter (options 1–4) is selected in the Bankruptcy Chapter Reported field. If you attempt to enter a value other than (0) Closed End or (1) Open End, the following error message appears:
\n   - Bankruptcy Chapter Reported is only allowed with Closed End and Open End loans
\n   -     
\nSymitar Quest prevents you from entering a loan code value other than 0 or 1 when a Loan Bankruptcy record exists. If you attempt to enter a value other than (0) Closed End or (1) Open End, the following error message appears:
\n   - Loan Code cannot be changed when Bankruptcy record is found
\n   -     
\n
\nSymitar Quest does not update this field from the Application record when you use the Pull Fields From App action field.
`)
loanRecordFields.set("activitydate", ` 
\n### Activity Date
\nSymitar Quest stores the date of the previous monetary transaction that affected the Loan record in this field.
\nField Number         **177**
\nMnemonic             **ACTIVITYDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01477**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever a teller, ATM network, MemberConnect system, SymConnect client system, or batch program posts a monetary transaction to the Loan record, Symitar Quest updates this field with the effective date of the previous monetary transaction.
\n
\nWhen you update the Activity Date field in the Loan record, the Activity Date field in the Account record is automatically updated.
\n
\nWhen a Loan record is first created, Symitar Quest sets this field to the open date.
\nThe following types of teller transactions and batch transactions do not update this field:
\n   - Insurance (unless you have the Insurance Updts Activity Date parameter in Miscellaneous Parameters set to Yes)
\n   - Fees
\n   - Dividends
\n   - Withholding
\n   - Interest refunds
\nThe following batch programs do not update this field:
\n   - Dividend Posting
\n   - Fee Posting
\n   - Insurance Posting (unless you have the Insurance Updts Activity Date parameter in Miscellaneous Parameters set to Yes)
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("checkdigits", ` 
\n### Check Digits
\nThis field stores check digits that you may use to help Symitar Quest verify account numbers when processing drafts, ATM transactions, or outside processor transactions. Both the account number and the check digits must be valid, or Symitar Quest reports the transaction as an exception.
\nField Number         **002**
\nMnemonic             **CHECKDIGITS**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **01302**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
`)
loanRecordFields.set("reference", ` 
\n### Reference
\nThis field stores any loan-related reference information for an auto loan.
\nField Number         **011**
\nMnemonic             **REFERENCE**
\nData Type            **20 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01311**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nEnter any reference information about the loan (up to 20 characters).
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Loan Ref field from the specified Application record.
\n
\nThis reference relates only to this Loan record. Enter any references for the entire account in the Reference field of the Account record.
`)
loanRecordFields.set("nickname", ` 
\n### Nickname
\nThis field stores a nickname for a loan.
\nField Number         **265**
\nMnemonic             **NICKNAME**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **01565**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nEnter a nickname for the loan, such as MY 2007 CAR LOAN.
\n
\nPowerOn can access this field for reading and writing.
`)
loanRecordFields.set("branch", ` 
\n### Branch
\nThis field stores the number of the branch that "owns" the loan. When you create a loan record, the default is the branch at which you create the Loan record.
\nField Number         **134**
\nMnemonic             **BRANCH**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-entered**
\nHelp File            **01434**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Main branch##### 1–9999
\n   Credit union defined branch number
\nIf your credit union uses branch accounting, you can use this field to specify the branch to which transactions for the loan should be posted. To translate loan transactions to the General Ledger by branch, you must set the GL Translation Branch Level parameter in the Miscellaneous Parameters to (1) Pull GL Branch by Share/Loan Record.
\n
\nSome batch programs can also produce reports by share or loan branch.
\n***Important:***  For NetTeller users, the query 60 processes a branch number value of three characters. When the branch number is longer than three characters, the JHADRIVER sends a blank value to NetTeller.
`)
loanRecordFields.set("createdbyuser", ` 
\n### Created By User
\nSymitar Quest stores the user ID in this field and is populated when this Loan record is created.
\nField Number         **297**
\nMnemonic             **CREATEDBYUSER**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **31128**
\nDefault Control      **No**
\nDefault Value **Current user number**
\n
\n#### Data Type Descriptions
\n##### 0–9998
\n   The user ID of the creator of the record.##### 9999
\n   The system is unable to determine the information because it is not available.
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("createdatbranch", ` 
\n### Created At Branch
\nSymitar Quest stores the branch ID in this field of the branch where the Loan record is created.
\nField Number         **298**
\nMnemonic             **CREATEDATBRANCH**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **31129**
\nDefault Control      **No**
\nDefault Value **Current user branch**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The system is unable to determine the information because it is not available.##### 1–9999
\n   The branch ID where the record was created.
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("purposecode", ` 
\n### Loan Purpose
\nThis field stores the credit union-defined code to indicate the purpose of the loan.
\nField Number         **019**
\nMnemonic             **PURPOSECODE**
\nData Type            **Code to 999**
\nSource               **User-entered or System-entered**
\nHelp File            **01319**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter a credit union-defined code (0-999) to indicate the purpose of the loan.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Purpose field from the specified Application record.
`)
loanRecordFields.set("couponcode", ` 
\n### Coupon Code
\nThis field stores a code that specifies how Symitar Quest handles loans with the Payment Method field set to (1) Coupon.
\nField Number         **024**
\nMnemonic             **COUPONCODE**
\nData Type            **Code to 2**
\nSource               **System-entered or User-entered**
\nHelp File            **01324**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Normal
\n   The coupons have not been generated for loan payments. The first time you run the Daily Posting batch program, Symitar Quest generates a year's worth of coupons (one coupon for each loan payment scheduled during the year), and sets this field to (2) Generated until the first payment is posted for the loan. This process keeps Symitar Quest from generating duplicate coupons. When the first loan payment is posted, Symitar Quest resets this field to (0) Normal.
\n   
\n       - The number of coupons Symitar Quest generates depends on the value in the Payment Frequency field for this loan.
\n   
\n       - Examples:
\n       - If the value in the Payment Frequency field is (4) Monthly, Symitar Quest generates coupons when the value in the Payments Made field is a multiple of 12.
\n       - If the value in the Payment Frequency field is (9) Weekly, Symitar Quest generates coupons when the Payments Made field is a multiple of 52.
\n##### (1) Generate
\n   Symitar Quest should reissue coupons for loan payments. You can use this coupon code to regenerate loan coupons if a member has lost them. When you first run the Daily Posting batch program after manually changing the coupon code to (1) Generate, Symitar Quest checks the values of the Payment Count and Payments Made fields and generates the number of coupons necessary to bring the loan into the regular coupon cycle.
\n       - Note:
\n       - If the value in the Payment Frequency field is (4) Monthly, the Payment Count field is 48, and Payments Made field is 3, Symitar Quest generates nine new coupons.
\n       - If the value in the Payment Frequency field is (9) Weekly, the Payment Count field is 104, and Payments Made field is 3, Symitar Quest generates 49 new coupons.
\n   
\n       - Once the Daily Posting batch program generates the new coupons, Symitar Quest sets this field to (2) Generated. When the next loan payment is posted, Symitar Quest resets this field to (0) Normal.
\n##### (2) Generated
\n   Under normal circumstances, you should not select this option. The Daily Posting batch program sets this value to indicate that coupons have been generated for the loan, and a loan payment has not posted since the coupons were generated. Symitar Quest monitors the loan and resets this field to (0) Normal when a payment posts.
\n`)
loanRecordFields.set("vin", ` 
\n### VIN #
\nSymitar Quest stores a member's Vehicle Identification Number.
\nField Number         **218**
\nMnemonic             **VIN**
\nData Type            **20 Characters**
\nSource               **System-entered**
\nHelp File            **01518**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest pulls this value from an Application or Account record.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("mfoelid", ` 
\n### MFOEL ID
\nThis field stores the credit union-defined code to identify a loan that is part of a Multi-Featured, Open-End Lending (MFOEL) plan.
\nField Number         **316**
\nMnemonic             **MFOELID**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **31148**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter the credit union-defined code (1-99) to identify a loan that is part of a Multi-Featured, Open-End Lending (MFOEL) plan. Zero is not a valid MFOEL ID.
\n
\nThe Statement Generation batch program uses this field to include closed-end loans in the tabular statement format.
`)
loanRecordFields.set("notenumber", ` 
\n### Note Number
\nThis field stores a credit union-defined number associated with this loan.
\nField Number         **003**
\nMnemonic             **NOTENUMBER**
\nData Type            **10 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01303**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nIf your credit union assigns note numbers to loans, enter the note number of the loan (up to 10 characters) in this field.
\n
\nYou can cause the system to increment the note numbers in new Loan records by specifying a Next Note Number and a Next Note Step in the Miscellaneous Parameters.
\n
\nWhen you create a Loan record, the system adds the Next Note Step increment to the last note number assigned to determine the default note number for the new note and stores the new default note number in the Next Note Number parameter. Each time you assign a note number, Symitar Quest updates the Next Note Number parameter with the note number you assigned.
\n
\nIf you create a Loan record and leave this field blank, the system prompts for the note number before you okay the new Loan record. The default at this prompt is NEXT, and if you accept the default, Symitar Quest automatically assigns the note number based on the Next Note Number and Next Note Step parameters.
`)
loanRecordFields.set("micracctnumber", ` 
\n### MICR Account Number
\nThis field stores the account number portion of a draft's MICR line.
\nField Number         **245**
\nMnemonic             **MICRACCTNUMBER**
\nData Type            **20 Characters**
\nSource               **System-entered or User-entered**
\nHelp File            **01545**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field can be blank or can contain the account number portion of the MICR line that corresponds to the Loan record. Only enter digits 0–9. There is no minimum length and no enforced check digit requirement. If you use this field, the field's contents appear along with the Description field value in several places throughout Symitar Quest, including Teller Transactions.
\n   - Important: It is the credit union’s responsibility to ensure that the selected format meets the Financial Industry Standards from Accredited Standards Committee X9, Inc.
\n
\nThe MICR account number information is not included on member receipts and statements. This field is for reference and display purposes only; the system does not use it unless you request that we modify your credit union's draft posting edit logic. There is no automatic or enforced connection between this field and any other field in any record, including Lookup records and Check Order records.
`)
loanRecordFields.set("lastpaymentdate", ` 
\n### Last Payment Date
\nThe system stores the date of the last loan payment in this field.
\nField Number         **030**
\nMnemonic             **LASTPAYMENTDATE**
\nData Type            **Date**
\nSource               **System-entered or User-entered**
\nHelp File            **01330**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system updates this field with the effective date of each Loan Payment (LP) teller transaction posted to the loan. You may have to adjust this field manually if you void or adjust a Loan Payment (LP) transaction.
`)
loanRecordFields.set("firstpaymentdate", ` 
\n### First Payment Date
\nThe system stores the date of the first scheduled payment date for this loan.
\nField Number         **203**
\nMnemonic             **FIRSTPAYMENTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01503**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system sets this field to the same value as the Due Date field when the due date is calculated. If the value in the Due Date field is changed before the first payment, the system also updates this field to the same value. This process can occur at the following times:
\n   - During creation of a new loan
\n   - When the Due Date field is blank at the time of a Loan Payment (LP) teller transaction
\n   - During Loan Application Processing if the value in the Due Date field is copied to the Loan record from the Application record
\n
\nOnce the first payment date has passed or the first payment has been made, the system makes no further changes to this field.
\n
\nAfter a payment has been received, you cannot perform file maintenance on this field via the Loan record. You can, however, perform file maintenance via a specfile.
\n***Important:***  If you perform a File Maintenance (FM) transaction and make a change to this field, the system does not update the Due Date field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("paymenttype", ` 
\n### Payment Type
\nThis field stores a code to indicate how the system should calculate loan payments.
\nField Number         **022**
\nMnemonic             **PAYMENTTYPE**
\nData Type            **Code to 1**
\nSource               **User-entered or System-entered**
\nHelp File            **01322**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Level Payment
\n   The system should calculate equal periodic loan payments. The system does the following:
\n       - Calculates a payment schedule that pays off the loan in equal payments (principal + interest = the same amount each period)
\n       - Applies the standard payment amount first to the unpaid interest, next to Billed Fee Unpaid field, and only then applies any remainder to the principal
\n   
\n       - The amount applied to the loan principal changes each period, since the amount of interest due each period depends on the loan balance and the number of days in the loan period. This is the normal option for most daily interest loans.
\n   
\n       - Select this option for daily billed interest-only loans. Daily billed interest is used for loans where the amount of interest due at the time of statement cutoff is billed to the member. When the member makes a payment, the system takes only the amount of interest that has been billed, even though more interest has accrued. The system applies any amount that the member pays over the billed interest first to the unpaid interest, next to Billed Fee Unpaid field, and only then toward principal reduction.
\n##### (1) Level Principal
\n   Symitar Quest should calculate loan payments so that the same amount is applied to the loan principal each period. Symitar Quest does the following:
\n       - Calculates a standard principal amount (Original Balance ÷ Payment Count) for each loan payment
\n       - Adds any unpaid interest to the payment amount
\n   
\n       - The total payment changes each period, since the amount of interest due each period depends on the loan balance and the number of days in the loan period. This option is often used for single payment loans, real estate loans, or interest-only payment loans (but not for daily billed interest-only loans). It is also used when loans reach their balloon dates (the value in the Payment Type field changes from (0) Level Payment to (1) Level Principal).
\n***Important:***  If the value in the Loan Code field is set to (6) LOC Combination, the value in the Payment Type field applies to Segment 0, not the entire loan.
\n
\nIf you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Payment Type field of the loan calculation screen.
\n
\nIf you use the MBS Multiple Repayment Programs Per Loan module and have a Schedule record associated with this Loan record that is active, the value of this field is copied from the Schedule record.
\n
\nFor more information on how the payment type affects the loan payment, see the Payment field description.
`)
loanRecordFields.set("paymentmethod", ` 
\n### Payment Method
\nThis field stores a code that specifies how loan payments are to be made.
\nField Number         **023**
\nMnemonic             **PAYMENTMETHOD**
\nData Type            **Code to 9**
\nSource               **User-entered or System-entered**
\nHelp File            **01323**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Cash
\n   The loan payments must be made in cash, either over the counter or by mail. The member must initiate loan payments. Depending on the credit union services offered to members, the member can make over-the-counter loan payments, pay by mail, pay via ATM or audio response unit, or pay by an EFT ACH origination.##### (1) Coupon
\n   The system should issue coupons for loan payments. The system generates coupons for loan payments. The member then returns a coupon with each loan payment.##### (2) Auto Transfer
\n   Loan payments are made by automatic transfer of funds from the same account or from another account at the credit union. Create at least one Loan Transfer record that specifies the account and the share from which funds are transferred. Use this option for transferring funds on the due date only. For other options, see options (7) Scheduled Auto Transfer or (8) Scheduled Auto Transfer After Due.
\n   
\n       - The Daily Posting batch program transfers the full or partial loan payment amount from one or more Share records on the due date of the loan. If the entire loan payment amount is not available, The system transfers the funds each time you run the Daily Posting batch program until the full loan payment amount is satisfied, even if a partial payment was transferred the last time the Daily Posting batch program ran. The system does not advance the due date until the entire loan payment amount has been transferred, not two or more partial amounts.
\n   
\n       - This posting depends on how you have set the Grace Days After Due Date prompt in the Daily Posting batch program. The funds transfer on the due date if the Grace Days After Due Date prompt is set to 0. If it is set to 1, the transfer will occur the day after the due date; if it is set to 2, it will occur two days after the due date, and so on.
\n##### (3) Payroll
\n   The loan payments are made by automatic payroll deduction. Create an EFT payroll record for the payroll group from which the loan payments are deducted, if one does not exist.
\n   
\n       - The Payroll Posting batch program deducts all or a specified part of the loan payment from the first EFT payroll transaction in the loan period.
\n##### (4) Payroll After Due
\n   The loan payments are made by automatic payroll deduction from the first payroll after the due date of the loan. Create an EFT payroll record for the payroll group from which the loan payments are deducted, if one does not exist.
\n   
\n       - The Payroll Posting batch program deducts the loan payment from the first EFT payroll transaction after the due date of the loan. This option is useful if you must increase an automatic payroll deduction to cover a loan payment. Once the loan payment has been deducted, the system resets this field to (3) Payroll.
\n##### (5) Distribution
\n   The loan payments are made by distribution of an Electronic Funds Transfer (EFT). Create an EFT record for the payroll group from which the loan payments are deducted, and at least one EFT transfer record specifying the distribution of the payroll funds.
\n   
\n       - The Payroll Posting batch program deducts the loan payment according to the distribution established for the first EFT payroll transaction in the loan period.
\n##### (6) Distribution After Due
\n   The loan payments are made by distribution of the first Electronic Funds Transfer (EFT) after the due date of the loan. Create an EFT record for the payroll group from which the loan payments are deducted, and at least one EFT Transfer record specifying the distribution of the payroll funds.
\n   
\n       - The Payroll Posting batch program deducts the loan payment according to the distribution established for the first EFT payroll transaction after the due date of the loan. This option is useful if you must increase an automatic payroll deduction to cover a loan payment. Once the loan payment has been deducted, the system resets this field to (5) Distribution.
\n##### (7) Scheduled Auto Transfer
\n   The loan payments are made by automatic transfer on a scheduled date, whether a payment is due. Create at least one Loan Transfer record that specifies the account and the share from which funds are transferred.
\n   
\n       - The Daily Posting batch program transfers the loan payment on a specified date, regardless of whether the loan is paid ahead. If the loan is paid ahead and funds are not available on the date of the scheduled transfer, the system does not attempt to transfer the funds again until the next scheduled transfer date. This option allows the system to accept additional loan payments, regardless of the due date.
\n   
\n       - The system can temporarily change this field from (7) Scheduled Auto Transfer to (8) Scheduled Auto Transfer After Due under the following conditions:
\n   
\n       - The value in the Loan Code field is (2) Line of Credit
\n       - A loan advance add-on is made on the loan
\n       - The value in the New Loan Due Date Code field is a specified number of days (10-99)
\n       - The value in the Due Day 1 field is set to a specific day of the month
\n       - The date in the New Loan Due Date Code field plus the date of the advance is greater than the value in the Due Day 1 field
\n   
\n       - The system sets the value in the Due Date field to the day in the nearest Due Day 1 field after the days in the New Loan Due Date Code field from the advance date. However, this payment method ignores the month and year of a loan due date. To prevent a payment being posted on the day in the Due Day 1 field only a few days away, the system changes this field to (8) Scheduled Auto Transfer After Due. Once the first payment is made, the system changes this field back to (7) Scheduled Auto Transfer.
\n   
\n       - Example:
\n       - If you have a zero balance loan with a value in the Payment Frequency field of (4) Monthly, the Payment Method field of (7) Scheduled Auto Transfer, the New Loan Due Date Code field of 30, and the Due Day 1 field set to 20; an advance posted on September 17 results in a new value in the Due Date field of October 20. The system changes this field to (8) Scheduled Auto Transfer After Due so that no payment is posted on September 20 (which is three days past the date of the advance). Once the payment is made on October 20, the system changes this field back to (7) Scheduled Auto Transfer.
\n##### (8) Scheduled Auto Transfer After Due
\n   The loan payments are made by automatic transfer on the first scheduled transfer date that matches the loan's due date. Create at least one Loan Transfer record that specifies the account and the share from which funds are transferred, and there must be an entry in the Due Day 1 field of the Loan record.
\n   
\n       - The Daily Posting batch program transfers the loan payment on the first scheduled transfer date after the due date of the loan, regardless of whether the loan is paid ahead. If funds are not available on the date of the scheduled transfer, the system does not attempt to transfer the funds again until the next scheduled transfer date. This option is useful if you must increase an automatic payroll deduction to cover a loan payment. Once the loan payment has been deducted, the system resets this field to (7) Scheduled Auto Transfer.
\n   
\n       - For example, if you allow your members to pay ahead on their loans paid by transfer, you either set this field to (8) Scheduled Auto Transfer After Due at the time of the loan creation or you set the effective date of the Loan Transfer Record to the first due date at the time of loan creation.
\n   
\n       - Payment method (7) Scheduled Auto Transfer only looks to the day of the loan in the Due Date field to determine if a transfer payment is due for the loan while payment method (8) Scheduled Auto Transfer After Due causes the system to wait until the due date is reached then looks at the month, day, and year, and then takes the payment.
\n   
\n       - Example:
\n       - A member takes out a loan today that is due the 15th of each month beginning in May. Tomorrow is April 15. If the payment method is (7) Scheduled Auto Transfer, Daily Posting takes a payment. To prevent that, you either set the payment method to (8) Scheduled Auto Transfer After Due or set the loan transfer Effective Date field value to the date of the first payment. If you set the payment method to (8) Scheduled Auto Transfer After Due, the system changes the payment method back to (7) Scheduled Auto Transfer when the first payment is taken.
\n##### (9) Amortization Transfer
\n   The loan payments are based on calculations using the Amortization Schedules parameters.
\n       - The calculation is based on the "adjusted" original loan amount and the factor. The system takes any additional payments or advances into account when calculating the "adjusted" original loan amount. The system adds outstanding interest and fees to the calculated amount, if applicable.
\n       - The transfer has the effective date set to the value in the Effective Date field in the Amortization Schedules parameters.
\n       - Transfers are not considered for Regulation E.
\n   
\n       - The system automatically creates a Type 8 Transfer record.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Payment Method field from the specified Application record.
\n
\nYou could ignore this field if you use the Forced Transfer Option Count option in the Daily Posting Batch Program. This prompt lets you force payments to delinquent loans that are not necessarily set up for automatic transfer.
`)
loanRecordFields.set("paymentfrequency", ` 
\n### Payment Frequency
\nThis field stores a code that specifies when the member makes a payment.
\nField Number         **025**
\nMnemonic             **PAYMENTFREQUENCY**
\nData Type            **Code to 14**
\nSource               **System-entered or User-entered**
\nHelp File            **01325**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Single Pay
\n   The member is to repay the loan in a single payment.
\n       - Important: If you select this option in a loan projection, Symitar Quest updates the Payment Type field to Level Principal and automatically updates the Balloon Date field to match the Maturity Date field.
\n##### (1) Annual
\n   The member makes loan payments once a year.##### (2) Semiannual
\n   The member makes loan payments semiannually (twice per year).##### (3) Quarterly
\n   The member makes loan payments quarterly.
\n   
\n       - For loans with the Interest Type field set to (1) Monthly 360 day, this field must be set to (3) Quarterly, (4) Monthly, or (5) Semimonthly.
\n##### (4) Monthly
\n   The member makes loan payments monthly.
\n   
\n       - For loans with the Interest Type field set to (1) Monthly 360 day, this field must be set to (3) Quarterly, (4) Monthly, or (5) Semimonthly.
\n   
\n       - For loans with the Interest Type field set to (3) Daily billed I, (4) Daily billed II, (6) Daily Billed 360, or (10-8999) Credit Card Interest this field must be set to (4) Monthly.
\n   
\n       - For loans with Schedule records, this field must be set to (4) Monthly.
\n   
\n       - Important:
\n       - The DQ Calculation Method field should never be changed from Payment Buckets Only Contains Changes to Payment Buckets are Calculated Monthly. However, if this change must be made, you need to look at the payment buckets and ensure that there is a bucket for each due date you want to be able to track delinquency for. Buckets may need to be created for each due date that the loan was delinquent at the time the change needs to be made. This ensures that the system properly recognizes the loan as delinquent. If the buckets are not created, the system assumes that the payments between the current due date and the last due date were $0.00.
\n##### (5) Semimonthly
\n   The member makes loan payments semimonthly (twice per month).
\n       - Important: If you select this option, you must also enter dates in the Due Day 1 and Due Day 2 fields.
\n   
\n       - For loans with the Interest Type field set to (1) Monthly 360 day, this field must be set to (3) Quarterly, (4) Monthly, or (5) Semimonthly.
\n##### (6) Biweekly skip first
\n   The member makes loan payments biweekly (every two weeks), skipping the first payment of the month if there are three scheduled payments in the month.##### (7) Biweekly skip last
\n   The member makes loan payments biweekly (every two weeks), skipping the last payment of the month if there are three scheduled payments in the month.
\n   
\n       - For loans with the Interest Type field set to (7) Actual/364 or (8) Scheduled/364, this field must be set to (7) Biweekly skip last or (8) Biweekly.
\n##### (8) Biweekly
\n   The member makes loan payments biweekly (every two weeks), regardless of the number of payments in the month.
\n   
\n       - For loans with the Interest Type field set to (7) Actual/364 or (8) Scheduled/364, this field must be set to (7) Biweekly skip last or (8) Biweekly.
\n##### (9) Weekly
\n   The member makes loan payments weekly.##### (10) Immediate
\n   The loan must be repaid immediately in a single payment.##### (11) Weekly skip first
\n   The member makes loan payments weekly, skipping the first payment of the month if there are five scheduled payments in the month.##### (12) Weekly skip last
\n   The member makes loan payments weekly, skipping the last payment of the month if there are five scheduled payments in the month.##### (13) Bimonthly
\n   The member makes loan payments every other month.##### (14) Amortized Schedule
\n   No longer used The loans are tied to a schedule to pay on the date and for the amount that is in the schedule. The Amortization Schedule field value should be used in these instances and points Symitar Quest to the amortization schedule to decide when to take a payment. The schedule is set up in Parameter Manager.
\n   
\n       - If you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Payment Frequency field from the specified Application record. If you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Payment Frequency field of the loan calculation screen.
`)
loanRecordFields.set("originaldate", ` 
\n### Original Loan Date
\nThis field stores the date the loan was originally disbursed.
\nField Number         **007**
\nMnemonic             **ORIGINALDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01307**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest updates this field with the effective date under the following conditions:
\n   - During the most recent New Loan (LN) teller transaction affecting the loan, the Original Loan Date field always updates to the effective date of the LN transaction.
\n   - During the first Loan Advance (LA) teller transaction affecting a zero-balance loan, if the value in the Loan Code field is set to (1) Open End, (2) Line of Credit, or (3) Credit Card), and you disburse the loan using the Loan Advance (LA) teller transaction, Symitar Quest sets this field to the value of the Effective Date field.
\n   - During an advance on an overdraft loan or a credit card loan via NetTeller, Symitar Quest sets this field to the value of the Effective Date field.
\nSymitar Quest does not update this field with the effective date under the following conditions:
\n   - An advance on an overdraft loan via the Draft Posting batch program
\n   - An advance on a credit card loan in the ATM Dialog work area
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("opendate", ` 
\n### Open Date
\nThis field stores the date when the Loan record is created.
\nField Number         **008**
\nMnemonic             **OPENDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01308**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest updates this field with the system date when the Loan record is created.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("closedate", ` 
\n### Close Date
\nThis field stores the date the loan is closed.
\nField Number         **010**
\nMnemonic             **CLOSEDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01310**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nWhen you open a new loan, Symitar Quest sets this field to blank.
\n
\nSymitar Quest updates this field with the effective date of any Loan Payment (LP) teller transaction that pays off a closed-end loan (the value in the Loan Code field is 0). Otherwise, you must update this field manually.
\n
\nOnce a loan has a value in this field, Symitar Quest does not allow any further monetary transactions that affect the loan on or after that date.
\nSymitar Quest does not allow you to enter a value in this field if the value in the Loan Balance field is not set to 0.00, or if there is an amount in the Interest Unpaid field, or if there are any open Segment records on that Loan record. If you attempt to enter a value in this field when the loan has a non-zero balance, unpaid interest, or open segments, Symitar Quest displays this message:
\n   - Nonzero balance or unpaid interest
\nSymitar Quest does not allow you to enter a value in the Close Date field if a Loan Bankruptcy record is open and the value in the Balance field is not 0.00 in any Loan Bankruptcy PrePetition Bal record. If you attempt to enter a value in this field when a Loan Bankruptcy record is open and the value in the Balance field is not 0.00 in any Loan Bankruptcy PrePetition Bal record, the following message appears:
\n   - Open Bankruptcy record exists, loan cannot be closed
\n
\nYou must use the Purge Account Processing batch program to delete a Loan record. A Loan record must have a value in this field that is on or before the system date, you must have generated the final statement for the loan, and the loan must have a loan balance of 0.00, or the Purge Account Processing batch program cannot delete that loan.
\nIf you populate this field and there is a balance greater than zero in the Unapplied Partial Payment field, the following message appears:
\n   - Error: Unapplied Partial Payment balance, loan cannot be closed.
`)
loanRecordFields.set("dueday1", ` 
\n### Due Day 1
\nThis field stores the day of the month on which the first payment is due for semimonthly loans, or the day of the month on which all payments are due for annual, semiannual, quarterly, bimonthly, or monthly loans.
\nField Number         **035**
\nMnemonic             **DUEDAY1**
\nData Type            **Code to 31**
\nSource               **User-entered or System-entered**
\nHelp File            **01335**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar Quest does not use this field for single pay, weekly, or biweekly loans.
\n#### Data Type Descriptions
\n##### 0
\n   If the value in the Payment Method field is set to anything other than (7) Scheduled auto transfer or (8) Scheduled auto transfer after due and the Payment Frequency field is not set to (5) Semimonthly, type 0 to set the value in the Due Date field to the system date plus one frequency if an advance is taken on the 1st through 27th of the month. If the advance is taken on the 28th through 31st of the month, the value in the Due Date field is set to the last day of the month.
\n       - Important:
\n   
\n       - If a loan has the value in the Payment Method field set to (5) Distribution, the Payment Frequency field set to (5) Semimonthly, and you leave this field to the default 0, when the distribution is posted or when the member makes a manual payment, Symitar Quest blanks out the value in the Due Date field.
\n##### 1–30
\n   If the value in the Payment Frequency field is set to (5) Semimonthly, enter a value 1–30 to store the day of the month the first payment is due for semi-monthly loans. You must enter a non-zero value in the Due Day 1 field.
\n   
\n       - The value in the Due Day 1 field must be less than the value in the Due Day 2 field for semi-monthly payment frequencies.
\n##### 1–31
\n   If the value in the Payment Method field is set to anything other than (7) Scheduled auto transfer or (8) Scheduled auto transfer after due and the Payment Frequency field is not set to (5) Semimonthly, enter a value 1–31 to store the specified day of the month in the Due Date field.
\n       - If the value in the Payment Method field is set to (7) Scheduled auto transfer or (8) Scheduled auto transfer after due, enter a value 1–31 to store the specified day of the month in the Due Date field for the scheduled auto transfer. You must enter a non-zero value in the Due Day 1 field.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the Due Day 1 field value from the specified Application record. If you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the Due Day 1 field value of the loan calculation screen.
`)
loanRecordFields.set("dueday2", ` 
\n### Due Day 2
\nThis field stores the day of the month on which the second payment is due for semimonthly payment loans.
\nField Number         **036**
\nMnemonic             **DUEDAY2**
\nData Type            **Code to 31**
\nSource               **User-entered or System-entered**
\nHelp File            **01336**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   If the value in the Payment Frequency field is not set to (5) Semimonthly, this field is not used. Leave the default at 0.##### 1–31
\n   If the value in the Payment Frequency field is set to (5) Semimonthly, enter a value 1–31 to set the value in the Due Date field to the specified day of the month for payment. The value in the Due Day 2 field must be greater than the value in the Due Day 1 field.
\n       - If the value in the Payment Method field is set to (7) Scheduled auto transfer or (8) Scheduled auto transfer after due, enter a value 1–31 to set the value in the Due Date field to the specified day of the month for scheduled auto transfer.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the Due Day 2 field value from the specified Application record. If you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the Due Day 2 field value of the loan calculation screen.
`)
loanRecordFields.set("duedate", ` 
\n### Due Date
\nSymitar Quest stores the date the next loan payment is due.
\nField Number         **037**
\nMnemonic             **DUEDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01337**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nYou can update this field manually, or you can let Symitar Quest calculate due dates based on the value in the Payment Frequency field, the Due Day 1 field, and the Due Day 2 field:
\n   - When the loan is set up, Symitar Quest computes the due date by adding one payment frequency to the system date. If there is a value in the Due Day 1 field or the Due Day 2 field, Symitar Quest also ensures that the due date is advanced to the appropriate day of the month.
\n   - If you type 0 in the Due Day 1 field and set the Payment Method field to (3) Payroll, (4) Payroll after due, (5) Distribution, or (6) Distribution after due, Symitar Quest sets the due date to the last day of the month.
\n   - After the loan has been set up, Symitar Quest updates this field as appropriate each time a Loan Payment (LP) teller transaction affects the loan. For additional information about how Symitar Quest calculates due dates, see the Partial Payment field description.
\n   - If you void a Loan Payment (LP) teller transaction, Symitar Quest adjusts this field accordingly. If you adjust a Loan Payment (LP) teller transaction, you may have to update this field manually.
\n   - If the value in the Payment Frequency field in the Loan record is set to (4) Monthly or less, you can set this field when you book the individual loan.
\n   - When you set the Due Date field for a SymChoice Loan, you ensure that Symitar Quest calculates the Due Date field consistently for all Segment records of the loan.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the First Due Date field value from the specified Application record. If you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the Due Date field value of the loan calculation screen.
\nThe following updates occur when the loan Due Date field is extended in the Loan Calculation screen:
\n   - The Maturity Date and Balloon Date fields are updated. Symitar Quest calculates these fields by adding the values from the Loan Months fields to the modified Due Date field.
\n   - The Payment field is updated based on the Symitar Quest loan payment calculation formula.
\n   - Loans that have the Interest Type field set to something other than 1 or 8 calculate interest from the Interest Date field to the modified due date.
\n   - Mortgage loans: Loans that have the Interest Type field set to 1 or 8 calculate the interest per the payment frequency, regardless of the Interest Date field.
\n   - Example:
\n   - A monthly payment frequency calculates interest as Balance * Interest Rate / 12. A biweekly payment frequency calculates interest as Balance * Interest Rate / 26. Extending the due date on this loan type is not recommended.
\n   - Important: If your institution elects to use the Loan Calculation screen for Interest Type fields with a value of 1 or 8, the following Loan record fields must be manually updated:
\n   - Interest Unpaid: For any unpaid interest
\n   - Interest Date: To one payment frequency in arrears from the loan due date
\n   - Pmt Bucket Amt: To store the payment change
\n   - Pmt Bucket Due Date: To store the effective date of the payment change
\n
\nIf you are using Metro 2® Format (Symitar v.2) and want to report a loan as deferred, be sure to set both the Due Date and the Credit Rpt Deferred Pmt Start fields to an appropriate future date.
`)
loanRecordFields.set("maxloanduedate", ` 
\n### Max Loan Due Date
\nThis field contains the calculation of how far the loan’s due date is allowed to advance into the future.
\nField Number         **851**
\nMnemonic             **MAXLOANDUEDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **31527**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis field is calculated in near-real-time using the Max Due Date Advance Period field value to display how far the loan’s due date is allowed to advance into the future. The value in the Due Date Advance Code field must be set to the (0) Use Max Due Date Advance Period option.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("newloanduedatecode", ` 
\n### New Loan Due Date Code
\nThis field stores a code that specifies how Symitar Quest advances the due date for an add-on to a zero-balance loan.
\nField Number         **033**
\nMnemonic             **NEWLOANDUEDATECODE**
\nData Type            **Code to 99**
\nSource               **User-entered or System-entered**
\nHelp File            **01333**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No Change
\n   Symitar Quest should not update the Due Date field. The Due Date field remains the same as it was before the add-on. Use this option for loans with the Loan Code field value set to (0) Closed End and for loans with the Interest Type field value set to (1) Monthly 360 day.
\n       - Important: Do not use this option in this field for a SymChoice Loan. This option can cause a SymChoice Loan to become delinquent if you take an advance when the loan balance is zero.
\n##### (1) One Period
\n   Symitar Quest should advance the due date by one period from the date of the add-on. If you specify a value in the Due Day 1 field, Symitar Quest advances the Due Date field to that date. The period is determined by the value in the Payment Frequency field.##### (2) From the First
\n   Symitar Quest should set the Due Date field as follows:
\n       - Start from the first day of the month in which the add-on occurs.
\n       - Move forward one period, as indicated by the Payment Frequency field value. For example, if the Payment Frequency field value is set to (4) Monthly, Symitar Quest moves forward one month from the first day of the month of the add-on to set a new value in the Due Date field.
\n       - If the Payment Frequency field value is set to (1) Annual, (2) Semiannual, (3) Quarterly, (4) Monthly, or (5) Semimonthly, and if the Due Day 1 or Due Day 2 field values are set, Symitar Quest sets the Due Date field value to the next due day in the month. In most cases this is the value in the Due Day 1 field, unless the Due Day 1 field value is set to the first day of the month, in which case it is the value in the Due Day 2 field.
\n       - If the Payment Frequency field value is (1) Annual, (2) Semiannual, (3) Quarterly, or (4) Monthly, and if the resulting date is 28 or higher, Symitar Quest adjusts the value in the Due Date field to the last day of the month.
\n       - In some cases using this option in a loan with a Payment Frequency field value of (5) Semimonthly, (6) Biweekly skip first, (7) Biweekly skip last, (8) Biweekly, or (9) Weekly can cause Symitar Quest to set the value in the Due Date field to a date before the add-on occurred.
\n       - Example:
\n       - If an add-on occurs on March 25, this field is set to (2) From the First, and the value in the Payment Frequency field is (8) Biweekly, Symitar Quest starts at March 1 and moves the value in the Due Date field forward 14 days to March 15. The new Due Date field value for the loan becomes March 15, which is 10 days before the add-on occurred.
\n       - The same problem can occur when the Payment Frequency field value is (5) Semimonthly, this problem also occurs when Due Day 1 and Due Day 2 field values are set.
\n       - Example:
\n       - If an add-on occurs on March 25, this field is set to (2) From the First, the value in the Payment Frequency field is (5) Semimonthly, and the value in the Due Day 1 field is March 15, the new Due Date field value becomes March 15, 10 days before the add-on occurred.
\n   
\n       - If the Payment Frequency field value is (5) Semimonthly and the add-on occurs after the value in the Due Day 1 and Due Day 2 fields, the new Due Date field value is always set to a date before the add-on occurred.
\n##### (3) From the Last
\n   Symitar Quest should set the Due Date field as follows:
\n       - Start from the last day of the month before the add-on occurs.
\n       - Move forward one period, as indicated by the Payment Frequency field value. For example, if the Payment Frequency field value is (4) Monthly, Symitar Quest moves forward one month from the last day of the month before the add-on to set a new value in the Due Date field.
\n       - If the Payment Frequency field value is (1) Annual, (2) Semiannual, (3) Quarterly, (4) Monthly, or (5) Semimonthly, and if the values in the Due Day 1 or Due Day 2 fields are set, Symitar Quest sets the Due Date field value to the first due day in the month.
\n       - If the Payment Frequency field value is (1) Annual, (2) Semiannual, (3) Quarterly, or (4) Monthly, and if the calculated date is 28 or higher, Symitar Quest adjusts the value in the Due Date field to the last day of the month.
\n       - In some cases using this option in a loan with a Payment Frequency field value of (5) Semimonthly, (6) Biweekly skip first, (7) Biweekly skip last, (8) Biweekly, or (9) Weekly can cause Symitar Quest to set the value in the Due Date field to a date before the add-on occurred.
\n       - Example:
\n       - If an add-on occurs on March 25, this field is set to (3) From the Last, and the value in the Payment Frequency field is (8) Biweekly, Symitar Quest starts at February 28 and moves the value in the Due Date field forward 14 days to March 14. The new Due Date field value for the loan becomes March 14, which is 11 days before the add-on occurred.
\n       - The same problem can occur when the Payment Frequency field value is (4) Monthly, this field value is (3) From the Last, and the Due Day 1 or Due Day 2 field values are set.
\n       - Example:
\n       - If an add-on occurs on March 12 and the Due Day 1 field value is March 10, Symitar Quest starts on February 28 and moves the Due Date field value forward one month to March 28, then uses the Due Day 1 field value to set the new Due Date field value to March 10, two days before the add-on occurred.
\n       - If the Payment Frequency field value is (5) Semimonthly and the add-on occurs after the value in the Due Day 1 field, the new Due Date field value is always set to a date before the add-on occurred.
\n       - Note: If an add-on occurs on March 25, this field value is (3) From the Last, the Payment Frequency field value is (5) Semimonthly, and Due Day 1 is March 15, the new Due Date field value for the loan becomes March 15, 10 days before the add-on occurred.
\n##### (4) From Bucket One
\n   Symitar Quest should set the Due Date field by advancing the date in the Pmt Bucket Due Date 1 field by one period, as determined by the value in the Payment Frequency field. Use this option only for loans that have the Loan Code field value set to (3) Credit Card and for loans that have payments that are being calculated by statement cutoff and that also have the DQ Calculation Method field value set to (1) Payment Buckets are Calculated Monthly. Never select this option for other kinds of loans.
\n   
\n       - Because the due date in the Pmt Bucket Due Date 1 field is always the due date for the current statement cycle, the resulting new due date for the loan is always the due date for the next statement cycle. The only exception is that for a loan that has not gone through its first statement cutoff, Symitar Quest will not change the Due Date field value if it has been filled in. If the Due Date field is blank, Symitar Quest sets the due date to the Due Day 1 field value in the month following the transaction.
\n##### (7-25)
\n   For a SymChoice Loan, enter a number 7–25 if the value in the New Segment Cutoff field in Loan Defaults is set to (0) Number of Days.##### (10-99) Number of Days
\n   Enter a number 10–99 to specify the minimum number of days before the first due date. Symitar Quest calculates the next due date by adding the number days you specify to the day the add-on occurs. The Due Date field value may also be affected by the Payment Frequency and Due Day 1 field values as follows:
\n       - If the Payment Frequency field value is set to (4) Monthly and the Due Day 1 field is filled in, Symitar Quest does the following to set a new due date:
\n       - Adds the number of days specified in this field to the date of the add-on
\n       - Advances the Due Date field value to the next Due Day 1 field value that is on or after the day indicated by the number in this field
\n       - example: If you have zero balance loan with a value of (4) Monthly in the Payment Frequency field, a value of 45 in this field, and a value of 1 in the Due Day 1 field, an add-on posted on July 10 results in a new due date of September 1. An add-on posted on July 29 results in a new due date of October 1.
\n       - If the Payment Frequency field value is set to (6) Biweekly skip first, (7) Biweekly skip last, (8) Biweekly, or (9) Weekly, Symitar Quest does the following to set a new due date:
\n       - Adds the number of days specified in this field to the date of the add-on
\n       - Starts at the existing due date and calculates the first scheduled due date on or after the day indicated by the number in this field
\n   
\n       - Biweekly or weekly due dates that coincide with specific days of the week will continue to do so after an advance to a zero-balance loan.
\n   
\n       - The value in this field can cause Symitar Quest to temporarily change the Payment Method field value from (7) Scheduled auto transfer to (8) Scheduled auto transfer after due under the following conditions:
\n       - The Loan Code field value is (2) Line of Credit
\n       - A loan advance add-on is made on the loan
\n       - This field value is a specified number of days (10-99)
\n       - The Due Day 1 field value is set to a specific day of the month
\n       - The days in this field plus the date of the advance is greater than the value in Due Day 1 field
\n       - Symitar Quest sets the value in the Due Date field to the nearest Due Day 1 field value after the field days entered in this field from the advance date. However, the (7) Scheduled auto transfer payment method ignores the month and year of a loan due date. To prevent a payment being posted on the value in the Due Day 1 field only a few days away, Symitar Quest changes the value in the Payment Method field to (8) Scheduled auto transfer after due. Once the first payment is made, Symitar Quest changes the value in the Payment Method field back to (7) Scheduled auto transfer.
\n       - Example:
\n       - If you have a zero balance loan with a Payment Frequency field value of (4) Monthly, a Payment Method field value of (7) Scheduled auto transfer, a value in this field of 30, and the Due Day 1 field value set to 20, an advance posted on September 17 results in a new Due Date field value of October 20. Symitar Quest changes the Payment Method field value to (8) Scheduled auto transfer After Due so that no payment is posted on September 20 (which is three days past the date of the advance). Once the payment is made on October 20, Symitar Quest changes the Payment Method field value back to (7) Scheduled auto transfer.
`)
loanRecordFields.set("duedateadvancecode", ` 
\n### Due Date Advance Code
\nThis field stores a code that specifies how Symitar Quest advances the Due Date field when a payment is made to the loan.
\nField Number         **034**
\nMnemonic             **DUEDATEADVANCECODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01334**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Use Max Due Date Advance Period
\n   Symitar Quest should use the number of periods by which the due date can advance in the Max Due Date Advance Period field. This option is the default and the most commonly used value for this field.##### (1) Overlimit payment use 'Max Due Date Advance Period' else use 'One when due'
\n   This option is for loans with credit card interest types 10–8999 that are set up for automatic transfer payments with a Transfer record that fits this criteria:
\n       - The Amount Option field value is set to (5) Grace Amount.
\n       - The Amount field value is set to 0.00.
\n   
\n       - Symitar Quest uses the standard maximum due date advance logic if the loan was overlimit at the end of the last statement cutoff. Otherwise the batch program sets the beginning cycle date so that the due date advances only if the payment is received on or after the due date.
\n   
\n       - This option prevents the system from advancing the due date if the loan is not overlimit and the member makes a payment before the due date that satisfies the minimum payment due, but does not equal or exceed the grace amount. Preventing the system from advancing the due date in this scenario ensures that the transfer that satisfies the grace amount still occurs.
`)
loanRecordFields.set("maxduedateadvanceperiod", ` 
\n### Max Due Date Advance Period
\nThis field stores a code that defines the maximum number of periods the due date can be advanced into the future.
\nField Number         **358**
\nMnemonic             **MAXDUEDATEADVANCEPERIOD**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01429**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   There to be no limit on how far the due date can advance.##### 1
\n   Required if the Loan Code field value is set to (6) LOC Combination. In this case, you cannot perform file maintenance on this field. If you attempt to do so, this error message appears:
\n       - Error: Max Due Date Advance Period must equal 1 when Loan Code = 6!
\n##### 1–9999
\n   The maximum number of periods the due date can be advanced into the future.
\n`)
loanRecordFields.set("initialbcdsettingoption", ` 
\n### Initial BCD Setting Option
\nThis field stores a code that determines how the beginning cycle date will be set for non-billed loans and loans that use the (1) Use Loan Due Date (One when due) option.
\nField Number         **360**
\nMnemonic             **INITIALBCDSETTINGOPTION**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31192**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Use Current Cycle Due Date – 1 Period + 1 Day
\n   This loan does not use a beginning cycle date.##### (1) Use Loan Due Date (One when due)
\n   The beginning cycle date for a new loan is set to the value of the Loan record Due Date field value for the One when due functionality.
\n   
\n       - The One when due functionality advances the Due Date field value by one period only when a payment is made on or after the due date. Symitar Quest does not advance the due date for loan payments made before the due date.
\n   
\n       - The purpose of this option is to specify that the loan requires a full payment on the due date, no matter how much extra was paid before the due date. Use this function for loans with a value in the Payment Method field of (2) Auto transfer if you do not want over-the-counter transactions to affect the amount taken by automatic transfers on the due date.
`)
loanRecordFields.set("bcdday1", ` 
\n### BCD Day 1
\nThis field stores the day that each billing cycle starts for a loan.
\nField Number         **361**
\nMnemonic             **BCDDAY1**
\nData Type            **Code to 31**
\nSource               **User-entered or System-entered**
\nHelp File            **31190**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar Quest automatically sets the value of this field when you disburse the loan based on the following rules:
\n   - For loans with an interest type of (3) Daily Billed I, (4) Daily Billed II, (6) Daily 360, or (10-8999) Credit Card Interest, the value of this field is always 0. When you run the Statement Cutoff Processing batch program to calculate set payments for these loans, the system populates the loan's Beginning Cycle Date field with the day after the cutoff date. For these loans, this is the date the new cycle begins.
\n   - For all loans with biweekly or weekly payment frequencies, the value of this field is 0.
\n   - For loans with any other interest type and payment frequency combination, the value of this field is normally the day after the value entered in the Due Day 1 field (if populated) or the day after the day value of the Due Date field.
\n   - Exceptions:
\n   - For loans that have the Initial BCD Setting Option field value set to (1) One When Due, this field is the same as the Due Day 1 field value or the day value of the Due Date field value.
\n   - For loans that have the Payment Frequency field value set to (5) Semimonthly and that do not use One when due functionality, the BCD Day 1 field value must be the lesser of the Due Day 1 field value plus 1 or Due Day 2 field value plus 1. In other words, if the loan's Due Day 1 field value is 15 and the Due Day 2 field value is 31, this field value is 1, not 16. This change is because the day values must be stored in numeric order from low to high.
\n
\n   - This field value cannot have a value of 0 for semi-monthly payment frequencies.
\n
\n   - If the loan balance is zero, then there is no field validation for this field or the BCD Day 2 field.
\n
\nIf you change the value of a loan's Due Day 1 field value or the day portion of the loan's Due Date field value, you must modify this field value following the rules described above. If you change a loan's Payment Frequency field value, you must also modify this field value.
\n
loans that use Loan Batch FM Processing to calculate the payment [DQ Calculation Method field value set to (1) Payment Buckets Are Calculated Monthly] may have this field value set to the day after the loan cycles into the new period by a specfile or other process after the loan is disbursed. For example, if the loan is due on the 25th of the month and it cycles on the last day of the month, you can reset this field to 1 after disbursing the loan.
`)
loanRecordFields.set("bcdday2", ` 
\n### BCD Day 2
\nThis field stores the loan's beginning cycle date only for loans that have the Payment Frequency field value set to (5) Semimonthly.
\nField Number         **362**
\nMnemonic             **BCDDAY2**
\nData Type            **Code to 31**
\nSource               **User-entered or System-entered**
\nHelp File            **31191**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar Quest automatically sets the value of this field for loans that have the Payment Frequency field value set to (5) Semimonthly based on the following rule:
\n
\nFor a loan with semimonthly payments, both the Due Day 1 and Due Day 2 fields must be populated. When you disburse the loan, the system populates this field with the greater of the Due Day 2 field value plus 1 or the Due Day 1 field value plus 1. In other words, if the loan's Due Day 1 field value is 15 and the Due Day 2 field value is 31, this field value is 16, not 1. This change is because the day values must be stored in numeric order from low to high.
\n
\nException: For loans that have the Initial BCD Setting Option field value set to (1) One When Due, this field is the same as the Due Day 2 field value.
\n
\nIf you change the value of a loan's Due Day 2 field or Payment Frequency field, you must also modify this field accordingly.
\n
\nThis field cannot have a value of 0 for semi-monthly payment frequencies.
\n
\nIf the loan balance is zero, then there is no field validation for the BCD Day 1 field or this field.
`)
loanRecordFields.set("beginningcycledate", ` 
\n### Beginning Cycle Date
\nThis field contains the calculation of when a loan payment can advance the loan’s due date and, in combination with the Max Due Date Advance Period field, how far into the future the total amount of multiple payments can advance the loan due date.
\nField Number         **850**
\nMnemonic             **BEGINNINGCYCLEDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **31526**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen using an interest type of 3, 4, 6, or 10–8999, the Beginning Cycle Date field is updated by the Statement Cutoff batch program. For new billed loans, the Beginning Cycle Date field is populated with the statement date plus one day once the loan has been funded.
\n
\nThe Daily Posting batch program also updates this field for the following interest types and represents the beginning cycle date for the current payment period:
\n***Important:***  You must run the Daily Posting batch program to update the Beginning Cycle Date field to reflect the start of the new payment period for non-daily billed loans.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("balloondate", ` 
\n### Balloon Date
\nThis field stores the date any balloon loan payment comes due.
\nField Number         **038**
\nMnemonic             **BALLOONDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01338**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date any balloon loan payment comes due. Once the loan's due date reaches or exceeds this date, Symitar Quest resets the Payment field value to the remaining loan balance and resets the Payment Type field value to (1) Level Principal. If the loan has an interest type of (3) Daily billed I or (4) Daily billed II, Symitar Quest resets the Interest Type field value to (0) Daily 365 day. If the Interest Type field value is set to (6) Daily Billed 360, Symitar Quest resets the Interest Type field value to (5) Actual/360.
\n
\nWhenever a partial payment is made to a balloon payment loan after the balloon date, the Daily Posting batch program resets the Payment field value to the new loan balance. Whenever a loan is paid ahead beyond the balloon date, the Daily Posting batch program does not set the payment amount to the loan balance until one payment frequency before the balloon date.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Balloon Date field from the specified Application record. If you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Balloon Date field of the loan calculation screen.
`)
loanRecordFields.set("balloonamount", ` 
\n### Balloon Amount
\nThis field stores the amount of the final payment (including principal and interest) of a loan.
\nField Number         **132**
\nMnemonic             **BALLOONAMOUNT**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01432**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUse this field when you want to calculate a loan to make the final payment (including principal and interest) equal a specified amount. For example, to calculate the payment on a $10,000 loan so that the final balloon payment, due in 36 months, is $5,000, simply enter $5,000 in this field.
\n
\nIf you specify (2) Calculate Loan Term for the calculation type on the loan calculation screen, Symitar Quest ignores the value in this field.
\n***Important:***  If the Loan Code field value is set to (6) LOC Combination, the value in this field applies to Segment 0, not the entire loan.
`)
loanRecordFields.set("maturitydate", ` 
\n### Maturity Date
\nThis field stores the date the loan will be paid off.
\nField Number         **111**
\nMnemonic             **MATURITYDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01411**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date the loan will be paid off.
\n
\nIf the Loan Code field value is set to (6) LOC Combination, this field must be equal to or later than the latest field values of the Maturity Date fields for all segments associated with the loan.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Loan Maturity Date field from the specified Application record. If you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Maturity Date field of the loan calculation screen.
\n***Important:***  This field must have a non-blank value for the early Payoff Chargeback function of Dealer Reserve Accounting Processing to work properly.
`)
loanRecordFields.set("balance", ` 
\n### Loan Balance
\nThis field stores the current principal balance of the loan.
\nField Number         **059**
\nMnemonic             **BALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01359**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest updates this field with the current principal balance whenever a Loan Payment (LP), New Loan (LN), Loan Addon (LA), or Loan Refinance (LR) teller transaction affects the loan.
\n
\nWhen the Loan Balance field has a value greater than 0.00, Segment 0 of a SymChoice Loan can only go forward one cycle when a Loan Advance (LA) transaction is performed through Teller Transactions on Segment 0 using a defined Payment Calc Type field value of 0001 to 8999.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("originalbalance", ` 
\n### Original Balance
\nThis field stores the original balance of the loan or the balance after an add-on to the loan.
\nField Number         **060**
\nMnemonic             **ORIGINALBALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01360**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nFor line-of-credit loans, Symitar Quest updates this field with the new Loan Balance field value whenever the balance changes because of a New Loan (LN) teller transaction, or whenever any Loan Addon (LA) teller transaction, except for insurance or fee add-ons, brings the loan balance above the balance currently in this field. For closed-end loans, the value in the Original Balance field changes when you perform a New Loan (LN) transaction, but it does not change when you perform a Loan Advance (LA) transaction.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Loan Amount field from the specified Application record.
\n
\nSymitar Quest updates this value for the loan when you use loan calculation only during the initial loan creation. Symitar Quest does not update this field during revisions of the loan record, even if you use the Loan Calc Screen action field. In that case, you may need to manually change this field value, if the loan has not yet been funded.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("creditlimit", ` 
\n### Credit Limit
\nThis field stores the credit limit for line of credit or credit card loans.
\nField Number         **061**
\nMnemonic             **CREDITLIMIT**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01361**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the credit limit for line of credit or credit card loans. For loans with a Loan Code field value of (1) Open End, (2) Line of Credit, (3) Credit Card, or (5) Avg Daily Bal LOC, Symitar Quest calculates the value in the Available Credit field by subtracting the Loan Balance field value and any loan hold amounts from the amount in this field.
\n
\nThis calculation may also be affected depending on your setting in the Credit Card LOC Available parameter in Miscellaneous Parameters if the Loan Code field value is (3) Credit Card or (5) Avg Daily Bal LOC.
\n***Important:*** 
\nFor loans with a Loan Code field value of (0) Closed End, (1) Open End, or (4) Lease, a value in this field of 0.00 indicates an unlimited credit limit. For loans with those loan codes, a loan advance is allowed without an override when this field value is 0.00. There is a Teller Transaction privilege to allow loan advances for loans with a Loan Code field value of (0) Closed End.
\nFor loans with a Loan Code field value of (2) Line of Credit or (3) Credit Card, a value in this field of 0.00 indicates a zero credit limit. For loans with those loan codes, a loan advance requires an override when this field value is 0.00.
\n
\nIf you attempt to complete a transaction that exceeds this field value for the loan, Symitar Quest displays a warning, and you cannot complete the transaction unless you have the privilege to do so.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Loan Credit Limit field from the specified Application record.
\nWhen you enter an amount in this field that is less than the value in the BT Limit Max, CA Limit Max, or Combined CA/BT Limit Max fields, Symitar Quest sends the following warning:
\n   - Warning: Amount entered is less than the CA/BT Limiting Limit Max field(s)!
`)
loanRecordFields.set("availablecredit", ` 
\n### Available Credit
\nThis field contains the computed available credit.
\nField Number         **800**
\nMnemonic             **AVAILABLECREDIT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01580**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is used in inquiries only. This field value is always 0.00 for closed-end loans and credit card loans with a Credit Limit field value set to 0.00. For loans with a Loan Code field value of (1) Open End, (2) Line of Credit, (3) Credit Card, and (5) Avg Daily Bal LOC with a non-zero Credit Limit field value (if the Available Credit Calculation field value is set to (0) Revolving), Symitar Quest computes this field as the Credit Limit field value minus the Loan Balance field value, minus any related loan holds.
\n***Important:***  For loans with a Loan Code field value of (3) Credit Card and (5) Avg Daily Bal LOC, the Available Credit field is affected by the value in the Credit Card LOC parameter in Miscellaneous Parameters.
\n
\nIf Available Credit Calculation field value is set to (1) Non-Revolving, Symitar Quest computes this field as the Credit Limit field value minus the Amount Advanced field value, minus any related loan holds.
\n
\nWhen the Credit Limit field value is 0.00, this field value is equal to the outstanding Loan Balance field value (negative).
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("cashadvancelimit", ` 
\n### Cash Advance Limit
\nThis field contains the computed maximum cash advance limit at the time of inquiry.
\nField Number         **838**
\nMnemonic             **CASHADVANCELIMIT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31514**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThis field is used in inquiries only. Symitar Quest computes this field as the maximum cash advance limit at the time of inquiry and as the lesser of the following:
\n   - The CA Limit Max field value when not 0.00
\n   - The CA Percent field value
\n   - The Combined CA/BT Limit Max field value when not 0.00
\n   - The Combined CA/BT Percent field value
\nThis field is recalculated when the following fields are modified:
\n   - CA Percent
\n   - CA Limit Max
\n   - Combined CA/BT Percent
\n   - Combined CA/BT Limit Max
\n   - Credit Limit
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("availablecashadvance", ` 
\n### Available Cash Advance
\nThis field contains the computed amount of cash advance available at the time of inquiry.
\nField Number         **839**
\nMnemonic             **AVAILABLECASHADVANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31515**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nThis field is used in inquiries only. Symitar Quest computes this field as the Cash Advance Limit field value minus the Total CA Balance to Date field value, minus the Interest Unpaid field value (the Interest Unpaid field value depends on the value in the Credit Card LOC Available parameter), minus any related cash advance loan holds.
\n
\nThis field may display a value less than or equal to 0.00 when the CA Percent or Combined CA/BT Percent field values equal 0.00 because there could be prior transactions driving the available amount negative.
\n
\nAt the time of inquiry, this field cannot be greater than the Available Credit or Available Combined CA/BT field values. When the calculated value is greater, Symitar Quest modifies this field to display the lesser of the Available Credit or Available Combined CA/BT field values.
\n
\nWhen the Credit Limit field is modified, Symitar Quest recalculates the Cash Advance Limit field value which affects this field calculation.
\nThis field is affected by the Credit Card LOC Available parameter in Miscellaneous Parameters:
\n   - When you select the (0) Credit Card LOC Available is Cred Limit minus Full Balance option at the Credit Card LOC Available parameter, Symitar Quest includes the Interest Unpaid field value in calculating this field value at the time of inquiry.
\n
\n   - The Interest Unpaid field value is a combination of interest due and interest billed for purchases, cash advances, and balance transfers as of the last statement cutoff date. The value in this field may decrease as loan payment transactions are applied to the loan.
\n
\n   - When you select the (1) Credit Card LOC Available is Cred Limit minus Principal Balance option at the Credit Card LOC Available parameter, Symitar Quest does not include the Interest Unpaid field value in calculating this field value at the time of inquiry.
\n   - When you select the (2) Same as (0) for Statement Cutoff and Generation, (1) elsewhere option at the Credit Card LOC Available parameter, Symitar Quest uses the (0) Credit Card LOC Available is Cred Limit minus Full Balance option procedure to calculate this field value for statement cutoff and statement generation and uses the (1) Credit Card LOC Available is Cred Limit minus Principal Balance option procedure elsewhere to calculate this field value.
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("balancetransferlimit", ` 
\n### Balance Transfer Limit
\nThis field contains the computed maximum balance transfer limit at time of inquiry.
\nField Number         **840**
\nMnemonic             **BALANCETRANSFERLIMIT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31516**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nTo enter a value in this field, the CC Balance Transfer internal parameter must also be set to (1) Yes. We must enable this parameter. Contact Support for details.
\nThis field is used in inquiries only. Symitar Quest computes this field as the maximum balance transfer limit at time of inquiry and as the lesser of the follow:
\n   - The BT Limit Max field value when not 0.00
\n   - The BT Percent field value
\n   - The Combined CA/BT Limit Max field value when not 0.00
\n   - The Combined CA/BT Percent field value
\nThis field value is recalculated when the following fields are modified:
\n   - BT Percent
\n   - BT Limit Max
\n   - Combined CA/BT Percent
\n   - Combined CA/BT Limit Max
\n   - Credit Limit
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("availablebalancetransfer", ` 
\n### Available Balance Transfer
\nThis field contains the computed amount of balance transfer available at the time of inquiry.
\nField Number         **841**
\nMnemonic             **AVAILABLEBALANCETRANSFER**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31517**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nThis field is used in inquiries only. Symitar Quest computes this field as the Balance Transfer Limit field value minus the Total BT Balance to Date field value, minus the Interest Unpaid field value (the Interest Unpaid field value depends on the Credit Card LOC Available parameter).
\n
\nThis field may display a value less than or equal to 0.00 when the BT Percent or Combined CA/BT Percent field values equal 0.00 because there could be prior transactions driving the available amount negative.
\n
\nAt the time of inquiry, this field cannot be greater than the Available Credit or Available Combined CA/BT field values. When the calculated value is greater, Symitar Quest modifies this field to display the lesser of the Available Credit or Available Combined CA/BT field values.
\n
\nWhen the Credit Limit field is modified, Symitar Quest recalculates the Balance Transfer Limit field value, which affects this field calculation.
\nThis field is affected by the Credit Card LOC Available parameter in Miscellaneous Parameters:
\n   - When you select the (0) Credit Card LOC Available is Cred Limit minus Full Balance option at the Credit Card LOC Available parameter, Symitar Quest includes the Interest Unpaid field value in calculating this field value at the time of inquiry.
\n
\n   - The Interest Unpaid field value is a combination of interest due and interest billed for purchases, cash advances, and balance transfers as of the last statement cutoff date. The value in this field may decrease as loan payment transactions are applied to the loan.
\n
\n   - When you select the (1) Credit Card LOC Available is Cred Limit minus Principal Balance option at the Credit Card LOC Available parameter, Symitar Quest does not include the Interest Unpaid field value in calculating this field value at the time of inquiry.
\n   - When you select the (2) Same as (0) for Statement Cutoff and Generation, (1) elsewhere option at the Credit Card LOC Available parameter, Symitar Quest uses the (0) Credit Card LOC Available is Cred Limit minus Full Balance option procedure to calculate this field value for statement cutoff and statement generation and uses the (1) Credit Card LOC Available is Cred Limit minus Principal Balance option procedure elsewhere to calculate this field value.
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("combinedcabtlimit", ` 
\n### Combined CA/BT Limit
\nThis field contains the computed maximum combined cash advance and balance transfer limit at time of inquiry.
\nField Number         **842**
\nMnemonic             **COMBINEDCABTLIMIT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31518**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThis field is used in inquiries only. Symitar Quest computes this field as the maximum combined cash advance and balance transfer limit at time of inquiry and as the lesser of the following:
\n   - The Combined CA/BT Limit Max field value when not 0.00
\n   - The Combined CA/BT Percent field
\n   - The sum of the Cash Advance Limit and the Balance Transfer Limit field values.
\nWhen the following fields are modified, this field is recalculated:
\n   - CA Percent
\n   - CA Limit Max
\n   - BT Percent
\n   - BT Limit Max
\n   - Combined CA/BT Percent
\n   - Combined CA/BT Limit Max
\n   - Credit Limit
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("availablecombinedcabt", ` 
\n### Available Combined CA/BT
\nThis field contains the computed combined cash advance and balance transfer amount available at the time of inquiry.
\nField Number         **843**
\nMnemonic             **AVAILABLECOMBINEDCABT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31519**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nThis field is used in inquiries only. Symitar Quest computes this field as the Combined CA/BT Limit field value minus the Total CA Balance to Date field value, minus the Total BT Balance to Date field value, minus the Interest Unpaid field value (the Interest Unpaid field value depends on the Credit Card LOC Available parameter), minus any related cash advance loan holds.
\n
\nThis field may display a value less than or equal to 0.00 when the Combined CA/BT Percent field value equals 0.00 because there could be prior transactions driving the available amount negative.
\n
\nAt the time of inquiry, this field cannot be greater than the Available Credit field value. When the calculated value is greater, Symitar Quest modifies this field to display the Available Credit field value.
\n
\nWhen the Credit Limit field is modified, Symitar Quest recalculates the Combined CA/BT Limit field value which affects the Available Combined CA/BT calculation.
\nThis field is affected by the Credit Card LOC Available parameter in Miscellaneous Parameters:
\n   - When you select the (0) Credit Card LOC Available is Cred Limit minus Full Balance option at the Credit Card LOC Available parameter, Symitar Quest includes the Interest Unpaid field value in calculating this field value at the time of inquiry.
\n
\n   - The Interest Unpaid field value is a combination of interest due and interest billed for purchases, cash advances, and balance transfers as of the last statement cutoff date. The value in this field may decrease as loan payment transactions are applied to the loan.
\n
\n   - When you select the (1) Credit Card LOC Available is Cred Limit minus Principal Balance option at the Credit Card LOC Available parameter, Symitar Quest does not include the Interest Unpaid field value in calculating this field value at the time of inquiry.
\n   - When you select the (2) Same as (0) for Statement Cutoff and Generation, (1) elsewhere option at the Credit Card LOC Available parameter, Symitar Quest uses the (0) Credit Card LOC Available is Cred Limit minus Full Balance option procedure to calculate this field value for statement cutoff and statement generation and uses the (1) Credit Card LOC Available is Cred Limit minus Principal Balance option procedure elsewhere to calculate this field value.
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("credlimitexpiration", ` 
\n### Credit Limit Expiration
\nThis field stores the expiration date of the credit limit for line of credit or credit card loans.
\nField Number         **080**
\nMnemonic             **CREDLIMITEXPIRATION**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01380**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nEnter the expiration date of the credit limit for line of credit or credit card loans.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Cred Lim Exp Date field from the specified Application record.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("availcreditcalc", ` 
\n### Available Credit Calculation
\nThis field stores a code that determines how available credit is calculated only for line of credit loans.
\nField Number         **071**
\nMnemonic             **AVAILCREDITCALC**
\nData Type            **Code to 1**
\nSource               **User-entered or System-entered**
\nHelp File            **01371**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Revolving
\n   For revolving line of credit loans, the available credit decreases as advances are taken and increases as the principal is paid off. Symitar Quest automatically selects this option for loans with a Loan Code field value of (6) LOC Combination.##### (1) Non-Revolving
\n   For non-revolving line of credit loans, the available credit decreases as advances are taken, but does not increase as the principal is paid off.
\nSee Non-Revolving Line of Credit Loans in the Miscellaneous Loan Features topic for more information.
`)
loanRecordFields.set("creditlimitgroup", ` 
\n### Credit Limit Group
\nThis field stores a code that identifies the credit limit group with which this Loan record is associated.
\nField Number         **145**
\nMnemonic             **CREDITLIMITGROUP**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01445**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The home equity loan does not use any other loans to determine the available credit limit. Therefore, the home equity loan's available credit limit is $35,000.00.##### 1–99
\n   Symitar Quest accumulates all loan balances in the accounts that share this same group value, and uses this amount to determine the available credit limit.
\n       - Example:
\n       - The following loans are from a sample member account:
\n       - ID	Description	Balance	Credit Limit	Credit Limit Group
\n       - 01	LOC	500.00	3,000.00	03
\n       - 05	VISA	1,000.00	4,500.00	03
\n       - 10	Home Equity	10,000.00	45,000.00	00
\n   
\n       - In this example, the LOC and VISA loans share the same credit limit group, and their combined balances are used to determine each loan's available credit limit.
\n   
\n       - The available credit limit on the LOC loan is calculated by adding the two loan balances ($500.00 (LOC) + $1,000.00 (VISA) = $1,500.00) and subtracting this total from the Credit Limit field value of the LOC loan alone ($3,000.00 - $1,500.00 = $1,500.00). This calculation results in an available credit limit of $1,500.00.
\n   
\n       - The available credit limit on the VISA loan is calculated by adding the two loan balances ($1,500.00) and subtracting this total from the Credit Limit field value of the VISA loan alone ($4,500.00 - $1,500.00 = $3,000.00). This calculation results in an available credit limit of $3,000.00.
\n   
\n       - Important: You should not set the Due Date Advance Code field value to (1) Overlimit payment use 'One period max' else use 'One when due' for any loan with a shared credit limit. This combination is not supported by Symitar Quest.
\n   
\n       - To determine the available credit for a loan that shares its credit limit with other loans, the system uses the credit limit from the effective loan that you are trying to post the add-on to (it does not sum the credit limits of all loans linked by credit limit group). The system then subtracts all loan balances (if the Available Credit Calculation field value is (0) Revolving) or it subtracts the amounts already advanced on the loans (the Available Credit Calculation field value is (1) Non-Revolving). The system also subtracts any outstanding holds for any of the linked loans. The result is the available credit.
\n   
\n       - Example:
\n   
\n       - Three loans are linked under the same account to share credit.
\n   
\n       - Linked via same Credit Limit Group	Credit Limit	Balance
\n       - Loan A	100,000.00	50,000.00
\n       - Loan B	100,000.00	20,000.00
\n       - Loan C	50,000.00	5,000.00
\n       -  	 	75,000.00
\n   
\n       - Posting an add-on to Loan B causes the system to use the loan's credit limit of $100,000 less the outstanding balances of $75,000; resulting in $25,000 as available credit for the add-on. The credit limits of Loan A and C are grayed out because those limits are not used when the add-on is occurring for Loan B.
\n   
\n       - The system allows the add-on to occur for a loan even if another loan that is part of the credit limit group is delinquent.
`)
loanRecordFields.set("advanceamount", ` 
\n### Amount Advanced
\nSymitar Quest stores the total amount of advances against the loan in this field.
\nField Number         **202**
\nMnemonic             **ADVANCEAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01502**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field does not include add-ons for insurance, fees, or taxes. Symitar Quest uses this field to determine available credit for non-revolving loans (non-revolving means that the available credit decreases as advances are taken, but does not increase as the principal is paid off).
\n
\nSee Non-Revolving Line of Credit Loans for more information.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("lastadvancedate", ` 
\n### Last Advance Date
\nSymitar Quest stores the last date an advance was taken against the loan.
\nField Number         **201**
\nMnemonic             **LASTADVANCEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01501**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest does not update this field for loan add-ons for insurance, taxes, fees, adjustments, or recasts.
\n
\nWhen a loan advance is taken, Symitar Quest automatically updates the Last Advance Date field value to the current system date or to the effective date for the advance, if used. Symitar Quest does not update this date for loan add-ons in which the member is not receiving an advance (for example, insurance, tax add-ons, or fees).
\n
\nSymitar Quest does not back out the Last Advance Date when a loan advance is voided.
\n
\nSymitar Quest initially sets the value of the Last Advance Date field in existing loans to the most recent advance date from transaction history. If no advance date is found, Symitar Quest uses the value in the Open Date field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("originationbalance", ` 
\n### Origination Balance
\nSymitar Quest stores the opening day balance of the loan. This information is used on IRS form 1098 for the Outstanding Mortgage Principal (box 2).
\nField Number         **409**
\nMnemonic             **ORIGINATIONBALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31245**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
\n
\nThe Daily Posting batch program updates the Origination Balance field value based on the loan codes as follows:
\nWith the Loan Balance field value the first time it is run after the open date for loan codes 1, 2, 3, 5, or 6.
\n   - With the first non-zero Loan Balance field value for loan codes 0 or 4.
`)
loanRecordFields.set("beginningyearbalance", ` 
\n### Beginning Year Balance
\nSymitar Quest stores the balance of the loan at the start of the current calendar year in this field.
\nField Number         **392**
\nMnemonic             **BEGINNINGYEARBALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31224**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program to start a calendar year, Symitar Quest copies the amount in the Balance field to this field. This update takes place for all Loan records.
\n
\nWhen the Loan Bankruptcy record Type field value is (1) Bankruptcy, and the Loan Bankruptcy PrePetition Bal record Amount Code field value is (1) Principal, the Loan Bankruptcy PrePetition Bal record Balance field value is added.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("prevbeginningyearbalance", ` 
\n### Prev Beginning Year Balance
\nSymitar Quest stores the balance of the loan at the start of the previous calendar year in this field.
\nField Number         **393**
\nMnemonic             **PREVBEGINNINGYEARBALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31225**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program to start a calendar year, Symitar Quest moves the amount in the Beginning Year Balance field to this field. This update takes place for all Loan records.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("payment", ` 
\n### Payment
\nThis field stores the amount of the standard loan payment.
\nField Number         **029**
\nMnemonic             **PAYMENT**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01329**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nYou can update this field manually, or Symitar Quest can calculate the loan payment amount based on the Loan Code, Payment Type, and the Balloon Date field values and on the parameters set with the Payment Calculation Types parameters.
\n
\nIf Symitar Quest computes the payment, it assumes that the payment is monthly unless you specify otherwise with the Payment Frequency Adjustment parameter in the Payment Calculation Types parameters. You can use this parameter to change the computed monthly payment to match the Payment Frequency field value.
\n
\nFor each of the above loan payment calculations, the Payment Calculation Types parameters include a Payment Minimum and a Payment Calculation Set Code parameter that determines whether the payment amount should change each time you make an add-on or advance, or only if the add-on or advance would increase the current payment amount.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Payment field from the specified Application record. If you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Payment field of the loan calculation screen.
\n
\nIf you use the MBS Multiple Repayment Programs Per Loan module and have a Schedule record associated with this Loan record that is active, the value of this field is copied from the Schedule record.
`)
loanRecordFields.set("alternatepayment", ` 
\n### Alternate Payment
\nThis field stores an amount greater than the standard payment that the member would like to pay between the dates in the Alternate Pmt Effective and the Alternate Pmt Expiration fields.
\nField Number         **146**
\nMnemonic             **ALTERNATEPAYMENT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01446**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter an amount greater than the standard payment that the member would like to pay between the dates in the Alternate Pmt Effective and the Alternate Pmt Expiration fields. This field is not useful for loans with a Payment Method field value of (0) Cash or (1) Coupon. Symitar Quest uses this field amount during automatic payment transfers performed during Daily Posting. Symitar Quest also uses this amount during payroll and ACH distribution posting when the loan distribution amount specified is 0.00 (zero).
\nSymitar Quest attempts to take this field amount instead of the standard payment amount when all the following conditions are met:
\n   - This field is filled in.
\n   - This field is based on the system's standard interpretation of the Alternate Pmt Effective and Alternate Pmt Expiration dates. Alternate Pmt Effective and Alternate Pmt Expiration Dates are optional fields to allow more control over when to collect the higher amount. If these fields are blank, Daily Post always attempts to pull this field value.
\n   - This field value is greater than the standard loan payment.
\n***Important:***  Symitar Quest still performs all calculations based on the standard payment amount, such as calculating the amount of any delinquency, the amount of any late charge, the amount of the remaining partial payment, and the advancement of the loan due date. This field simply specifies that Symitar Quest should attempt to take a larger amount than the standard payment.
\n
\nIf this field amount is not available for automatic payment transfers during Daily Posting, Symitar Quest reverts to taking only the standard payment amount. For automatic transfer payment loans (Payment Method field value is (2) Auto transfer) and for scheduled automatic transfer payment loans that are not paid ahead (Payment Method field value is (7) Scheduled auto transfer or (8) Scheduled auto transfer after due), Symitar Quest can take partial payments as long as the Ignore Partial Payment option in Daily Posting is set to N.
\n
\nFor automatic transfer payment loans (Payment Method field value is (2) Auto transfer), you should set the loan's Due Date Advance Code field value to any value other than (0) Use Max Due Date Advance Period and set the Max Due Date Advance Period field value to 0 if you set this field value greater than or equal to twice the standard payment. This change is because Symitar Quest still advances the due date based on the standard payment amount. Therefore, if the Due Date Advance Code field value is set to (0) Use Max Due Date Advance Period with the Max Due Date Advance Period field value set to 0, and if twice the standard payment is taken during Daily Posting, the due date advances by two payment frequencies, and the next automatic transfer payment due date will be skipped. If you set the loan Due Date Advance Code field value to (0) Use Max Due Date Advance Period with the Max Due Date Advance Period field value set to 1, no payment due dates will be skipped.
\n
\nSymitar Quest also uses this field amount during Payroll Posting and during ACH Posting when the distribution amount is specified as 0.00 (zero). Symitar Quest uses this field amount only if the Loan payment amount field value is not (1) Amount required to bring current. If this field amount is not available during Payroll Posting and ACH Distribution Posting, Symitar Quest does not revert to using the standard payment amount. Symitar Quest does not clear the Partial Payment field.
`)
loanRecordFields.set("altpmteffective", ` 
\n### Alternate Pmt Effective
\nThis field stores the date on which the value in the Alternate Payment field becomes effective.
\nField Number         **147**
\nMnemonic             **ALTPMTEFFECTIVE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01447**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date on which the value in the Alternate Payment field becomes effective. This increased payment amount is in effect until the date specified in the Alternate Pmt Expiration field.
\n
\nThis field is not useful for loans with a Payment Method field value of (0) Cash or (1) Coupon.
`)
loanRecordFields.set("altpmtexpiration", ` 
\n### Alternate Pmt Expiration
\nThis field stores the date on which the value in the Alternate Payment field expires.
\nField Number         **148**
\nMnemonic             **ALTPMTEXPIRATION**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01448**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date on which the value in the Alternate Payment field expires.
\n
\nThis field is not useful for loans with a Payment Method field value of (0) Cash or (1) Coupon.
`)
loanRecordFields.set("partialpayment", ` 
\n### Partial Payment
\nSymitar Quest stores the amount of any partial payments made to the loan in this field.
\nField Number         **028**
\nMnemonic             **PARTIALPAYMENT**
\nData Type            **Money**
\nSource               **System-entered or User-entered**
\nHelp File            **01328**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field does not apply to loans with the Interest Type field value set to (1) Monthly 360 or (8) Scheduled/364. For those loans, you can only post unapplied partial payments (see the Allow Unapplied Partial Pmt field description). Whenever a Loan Payment (LP) teller transaction affects this loan, Symitar Quest determines the value of this field according to the Due Date Advance Code field value in the Loan record, as described below:
\n   - If the value in the Due Date Advance Code field is (0) Use Max Due Date Advance Period and the value in the Max Due Date Advance Period field is set to 0, the loan's due date advances each time a full payment is made. To accomplish this advance:
\n   - Symitar Quest subtracts any late charge amount from the amount of the payment if the late charge is calculated in addition to the standard payment.
\n   - Symitar Quest adds the amount arrived at in the previous step to any existing amount in this field.
\n   - Symitar Quest determines the amount due for the current due date by searching each Pmt Bucket Due Date field in the Loan record (from bucket 8 to bucket 1) until it finds the first date on or before the due date.
\n   - Symitar Quest finds the Pmt Bucket Amt field that corresponds to the Pmt Bucket Due Date field found in the previous step, or if all bucket due dates are blank, uses the value of the Payment field as the due amount.
\n   - If the value of the current transaction amount plus any existing amount in Partial Payment equals or exceeds the due amount, Symitar Quest advances the due date of the loan by one frequency and increments the Payments Made field value by one.
\n   - Symitar Quest repeats the preceding steps until it runs out of funds or until the amount remaining is not sufficient to equal a full payment. Any amount remaining is stored in the Partial Payment field.
\n   - If the value in the Due Date Advance Code field is (0) Use Max Due Date Advance Period and the value in the Max Due Date Advance Period field is set to 1–99, the loan's due date can only advance until it matches the value in the Max Loan Due Date field. To accomplish this advance:
\n   - Symitar Quest checks the value in the Max Loan Due Date field to determine whether the due date can advance. If the current loan due date equals or exceeds the value of the Max Loan Due Date field, the payment is applied to the loan but the due date does not advance and no amount is stored in the Partial Payment field.
\n   - If the due date can advance by at least one frequency, Symitar Quest subtracts any late charge amount from the amount of the payment if the late charge is calculated in addition to the standard payment.
\n   - Symitar Quest adds the amount arrived at in the previous step to any existing amount in this field.
\n   - Symitar Quest determines the amount due for the current due date by searching each Pmt Bucket Due Date field in the Loan record (from bucket 8 to bucket 1) until it finds the first date on or before the due date.
\n   - Symitar Quest finds the Pmt Bucket Amt field that corresponds to the Pmt Bucket Due Date field found in the previous step, or if all bucket due dates are blank, uses the value of the Payment field as the due amount.
\n   - If the value of the current transaction amount plus any existing amount in the Partial Payment field equals or exceeds the due amount, Symitar Quest advances the due date of the loan by one frequency and increments the Payments Made field value by one.
\n   - Symitar Quest repeats the preceding steps until one of the following is true:
\n   - There are no funds remaining
\n   - The amount remaining is not sufficient to equal a full payment
\n   - The due date reaches the value in the Max Loan Due Date field
\n   - If the value in the Max Loan Due Date field has not been reached, any amount remaining is stored in the Partial Payment field.
\n   - If the value in the Max Loan Due Date field is reached, the remainder of the payment is applied to the loan but the value of the Partial Payment field remains at $0.00.
\n   - If a payment is made before the date in the Beginning Cycle Date field, it is applied as principal and is not stored in the Partial Payment field to apply to the next payment due date.
\n   - If the value in the Due Date Advance Code field is (0) Use Max Due Date Advance Period with the Max Due Date Advance Period field value set to 1 and the Initial BCD Setting Option field value set to (1) Use Loan Due Date (One when due), the loan's due date can only advance by one frequency when a payment is received on or after the due date. To accomplish this advance:
\n   - Symitar Quest compares the loan's due date to the value in the Max Loan Due Date field.
\n   - If the loan's due date equals or exceeds the value in the Max Loan Due Date field, the transaction posts to the loan but the due date does not advance and no amount is stored in the Partial Payment field.
\n   - If the loan's due date is less than the value in the Max Loan Due Date field:
\n   - Symitar Quest subtracts any late charge amount from the amount of the payment if the late charge is calculated in addition to the standard payment.
\n   - Symitar Quest determines the amount due for the current due date by searching each Pmt Bucket Due Date field in the Loan record (from bucket 8 to bucket 1) until it finds the first date on or before the due date.
\n   - Symitar Quest finds the value of the Pmt Bucket Amt field that corresponds to the value of the Pmt Bucket Due Date field found in the previous step, or if all bucket due dates are blank, uses the value in the Payment field as the due amount.
\n   - If the value of the current transaction amount plus any existing amount in the Partial Payment field equals or exceeds the due amount, Symitar Quest advances the due date of the loan by one frequency and increments the Payments Made field value by one.
\n   - Symitar Quest repeats the preceding steps until one of the following is true:
\n   - There are no funds remaining
\n   - The amount remaining is not sufficient to equal a full payment
\n   - The due date reaches the value in the Max Loan Due Date field.
\n   - If the value in the Max Loan Due Date field has not been reached, any amount remaining is stored in the Partial Payment field.
\n   - If the value in the Max Loan Due Date field has been reached, the remainder of the payment is applied to the loan but the Partial Payment field remains at $0.00.
\n   - If the value in the Due Date Advance Code field is (1) Overlimit payments use 'Max Due Date Advance Period' else use 'One when due':
\n   - If the loan was overlimit at the last statement cutoff, Symitar Quest determines the effect of a loan payment on this field as described above using the value in the Due Date Advance Code field set to the (0) Use Max Due Date Advance Period.
\n   - If the loan was not overlimit at the last statement cutoff, Symitar Quest determines the effect of a loan payment on this field as described above using the value in the Initial BCD Setting Option field set to (1) One When Due.
\n   - Important: If you attempt to maintain the Partial Payment field and the Allow Unapplied Partial Pmt field value is set to (1) Yes, Symitar Quest sends the following error:
\n   - Error: Update not allowed when Allow Unapplied Partial Pmt is set to Yes.
\n   - For non-SymChoice Loans, anytime a payment is posted to a loan, Symitar Quest posts a comment noting the value of the Partial Payment field before the associated loan payment. No comment is posted if the Partial Payment field value was set to $0.
\n   - Due Date mm/dd/yy 
\n   -     % PartialPmt xxx.xx to xxx.xx
\n   - For SymChoice Loans, the comments are posted per the Loan Segment record:
\n   - Due Date mm/dd/yy 
\n   -     % Sxxxx PartialPmt xxx.xx to xxx.xx
\n
\n   - These comments are suppressed on receipts and statements, but display and print in member history and online banking. When a payment is voided, the % comment restores the partial payment value. No comment is posted if the Partial Payment field value was $0 before the transaction you are voiding.
\n
\n   - The % comments are used to automatically repopulate the Partial Payment field when a payment is voided. If you do a payment adjustment, you can use this field to update the Partial Payment field manually.
\n
\nFor loans with a value of (6) LOC Combination in the Loan Code field, the Partial Payment field value is the total partial payments for all segments, including Segment 0. If you or Symitar Quest perform file maintenance on the same field on an associated Segment record, Symitar Quest updates this field accordingly.
\n
\nWhenever you void a Loan Payment (LP) teller transaction, Symitar Quest resets the Partial Payment field value to the value it held before the transaction. If you adjust a Loan Payment teller transaction, you should determine the effect of the adjustment on the value in the Partial Payment field and update this field manually.
`)
loanRecordFields.set("unappliedpartialpmt", ` 
\n### Unapplied Partial Payment
\nSymitar Quest stores and accumulates the unapplied partial payments made to loans with the Interest Type field value set to (1) Monthly 360 day or (8) Scheduled/364, through loan payment and Loan Payment Adjustment (LPZ) transactions until a full payment can be posted to the loan.
\nField Number         **324**
\nMnemonic             **UNAPPLIEDPARTIALPMT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31157**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("stmtunappliedpartialpmt", ` 
\n### Stmt Unapplied Partial Pmt
\nSymitar Quest stores the loan balance in this field from the Unapplied Partial Payment field as of the Statement Date field value.
\nField Number         **326**
\nMnemonic             **STMTUNAPPLIEDPARTIALPMT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31158**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("allowunappliedpmt", ` 
\n### Allow Unapplied Partial Pmt
\nThis field stores a code that specifies if unapplied partial payments are allowed to accumulate in the Unapplied Partial Payment field for loans with the Interest Type field value set to (1) Monthly 360 day or (8) Scheduled/364.
\nField Number         **325**
\nMnemonic             **ALLOWUNAPPLIEDPMT**
\nData Type            **Code to 1**
\nSource               **User-entered or System-entered**
\nHelp File            **31156**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nThis field allows you to selectively turn the functionality on or off at the loan level.
\n#### Data Type Descriptions
\n##### (0) No
\n   Reject partial payments for this loan through all posting programs even if the posting program allows it. For example, if Daily Posting allows payment shortages and this field option is selected, the system rejects the payment shortage.
\n   
\n       - Symitar Quest lets you set this field to No when the Unapplied Partial Payment field value is greater than 0. If a posting program allows for unapplied partial payments, the system attempts to take the difference of the amount due for the loan (LOANDUECALC) minus the balance in the Unapplied Partial Payment field. If there are sufficient funds, the loan Due Date field value is advanced and the Unapplied Partial Payment field is cleared. If there are insufficient funds to advance the loan Due Date field value, the system returns an error stating partial payment is not allowed.
\n##### (1) Yes
\n   Allow partial payments to accumulate in Unapplied Partial Payment field for this loan.
\n       - Symitar Quest documents accepted partial payments applied to the Unapplied Partial Payment field on applicable posting program exception reports, or to the front-end user.
\n       - If this field option is selected and the Interest Type field value is not (1) Monthly 360 day or (8) Scheduled/364, Symitar Quest returns this error message:
\n       - Error: Interest Type does not Allow Unapplied Partial Payment.
\n       - Symitar Quest does not allow you to answer Yes to the Allow Unapplied Partial Pmt loan field if the Partial Payment field is > 0 and returns this error message:
\n       - Error: Update not allowed, Partial Payment field is greater than zero.
\n   
\n       - This process eliminates the possibility of a balance in both the Unapplied Partial Payment and Partial Payment fields.
`)
loanRecordFields.set("lastfmdate", ` 
\n### Last FM Date
\nSymitar Quest stores the date of the last file maintenance of this Loan record or a child record of this Loan record in this field.
\nField Number         **005**
\nMnemonic             **LASTFMDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01305**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever you perform file maintenance on this Loan record using Account File Maintenance or the File Maintenance (FM) teller transaction, Symitar Quest updates this field with the system date.
\n***Important:***  This field in the Loan record is not updated when the file maintenance is performed by a batch process. Creation and revision of a Loan Tracking record does not update this field, although the deletion of a Loan Tracking record does.
\n
\nYou cannot access this field for manual file maintenance.
`)
loanRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nSymitar Quest stores the system date in this field when you create, change, or save the Loan record. Sometimes Symitar Quest updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **271**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **31102**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  Symitar Quest does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("lasttrandate", ` 
\n### Last Transaction Date
\nSymitar Quest stores the date of the last teller or batch transaction that affected this Loan record in this field.
\nField Number         **006**
\nMnemonic             **LASTTRANDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01306**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever a teller or batch transaction affects a Loan record, Symitar Quest updates this field with the posting date of the transaction posted to the loan.
\n
\nUnlike the Activity Date field in the Account record, insurance, dividend, withholding, interest refund, and fee transactions cause Symitar Quest to update this field.
\n
\nIf you void the first transaction ever posted to the loan, Symitar Quest resets this date to date null (--/--/--).
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("lastpurgedate", ` 
\n### Last Purge Date
\nSymitar Quest stores the date in this field of the last loan history purge for this loan type.
\nField Number         **072**
\nMnemonic             **LASTPURGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01372**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever you purge loan history for this loan type using the Purge Transaction Processing batch program, Symitar Quest updates this field with the date that is one day before the date you enter at the Save Share Transactions From prompt in the batch program.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("collateralcode", ` 
\n### Collateral Code
\nThis field stores the credit union-defined code to identify the collateral, if any, for the loan.
\nField Number         **015**
\nMnemonic             **COLLATERALCODE**
\nData Type            **Code to 999**
\nSource               **User-entered or System-entered**
\nHelp File            **01315**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter the credit union-defined code (0–999) to identify the collateral, if any, for the loan.
\n***Important:***  You must populate the Collateral Code, Credit Report Number, Credit Reporting Code, and ECOA Code fields accordingly when reporting a loan to a credit bureau.
\n
\nYou define collateral codes with the Credit Reporting Parameters in the Parameter Manager.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Collateral Code field from the specified Application record.
`)
loanRecordFields.set("collateraldate", ` 
\n### Collateral Date
\nThis field stores the date the collateral, if any, was pledged for the loan.
\nField Number         **016**
\nMnemonic             **COLLATERALDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01316**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe use of this field is entirely credit union-defined. For example, instead of using this field to store the date collateral was pledged for the loan, you can enter the date the collateral for the loan should be re-evaluated.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Collateral Date field from the specified Application record.
`)
loanRecordFields.set("approvalcode", ` 
\n### Approval Code
\nThis field stores a user number or a credit union-defined code to indicate who approved the loan, depending on credit union policy.
\nField Number         **017**
\nMnemonic             **APPROVALCODE**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-entered**
\nHelp File            **01317**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter either a user number or a credit union-defined code (0-9999) to indicate who approved the loan, depending on credit union policy.
\n
\nIf your approval codes match the user numbers, you can use the Teller Tran Fund Approved privilege to allow or prevent users from funding a loan that they approved.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Approval Code field from the specified Application record.
`)
loanRecordFields.set("approvaldate", ` 
\n### Approval Date
\nThis field stores the date the loan was approved.
\nField Number         **018**
\nMnemonic             **APPROVALDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01318**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date the loan was approved.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Approval Date field from the specified Application record.
`)
loanRecordFields.set("militaryaprloan", ` 
\n### Military APR Loan
\nThis field stores a code that indicates whether the loan qualifies for the military APR program.
\nField Number         **394**
\nMnemonic             **MILITARYAPRLOAN**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31226**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nFor the loan to qualify, both the borrower and the kind of loan must qualify. The user determines whether the loan and borrower qualify, and then sets this field value.
\n#### Data Type Descriptions
\n##### (0) No
\n   The loan and borrower do not qualify for the military APR program.##### (1) Yes
\n   The loan and borrower qualify for the military APR program.
\nThe RB.LOAN.CALCULATE.MAPR and RD.LOAN.CALCULATE.MAPR specfiles use this field to determine whether to make a Military APR calculation for the loan.
`)
loanRecordFields.set("hmdauniversalloanidentifier1", ` 
\n### Universal Loan Identifier 1
\nThis field is used for HMDA reporting; it stores the unique loan identifier (ULI) of the covered loan.
\nField Number         **428**
\nMnemonic             **HMDAUNIVERSALLOANIDENTIFIER1**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **31260**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe ULI is not the loan number, but the credit report number (the tradeline) that is sent to the credit bureaus.
\n
\nEnter a unique identifier of the covered loan. The system validates the entered value to determine if a duplicate ULI exists. The system does not validate the Universal Loan Identifier 1 and Universal Loan Identifier 2 fields for duplicates between different record types.
`)
loanRecordFields.set("hmdauniversalloanidentifier2", ` 
\n### Universal Loan Identifier 2
\nThis field is used for HMDA reporting; it stores up to five additional universal loan identifier (ULI) characters, if the ULI was previously established outside of Symitar Quest and is more than the 40 characters allowed in the Universal Loan Identifier 1 field.
\nField Number         **429**
\nMnemonic             **HMDAUNIVERSALLOANIDENTIFIER2**
\nData Type            **5 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **31261**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe ULI is not the loan number, but the credit report number (the tradeline) that is sent to the credit bureaus.
\n
\nEnter up to five additional ULI characters. The system validates the entered value to determine if a duplicate ULI exists. The system does not validate the Universal Loan Identifier 1 and Universal Loan Identifier 2 fields for duplicates between different record types.
`)
loanRecordFields.set("statementgroup", ` 
\n### Statement Group
\nThis field stores a credit union-defined statement group number that can be used to specify groups to categorize loans for reports, displays, and statement printing.
\nField Number         **073**
\nMnemonic             **STATEMENTGROUP**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01373**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter the number of the statement group (0-99) that includes statements for this loan. Whenever the Statement Generation batch program generates statements for the statement group specified in this field, Symitar Quest produces the statement for this loan.
`)
loanRecordFields.set("statementmailcode", ` 
\n### Statement Mail Code
\nThis field stores a credit union-defined non-mail codes to categorize reasons for not mailing statements.
\nField Number         **075**
\nMnemonic             **STATEMENTMAILCODE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01375**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Normal
\n   Statements for this loan should be mailed to the member in the usual manner.##### 1–99
\n   Statements for this loan should not be mailed to the member. You can use credit union-defined non-mail codes (1-99) to categorize reasons for not mailing statements: incorrect address, foreign address (extra postage required), employee account, etc.
\n   
\n       - If custom text descriptions for each mail code in Statement Mail Code Names Parameters have been defined, those text descriptions display in the drop-down menu when revising this field. These descriptions help you select the correct mail code as defined by your credit union. Symitar Quest displays the description and the mail code in the field; however, only the mail code is included on the member's statement.
\n
\nThe Statement Generation batch program lets you sort loan statements according to this field.
`)
loanRecordFields.set("statementdate", ` 
\n### Statement Date
\nSymitar Quest stores the date of the most recent statement cutoff for this loan in this field.
\nField Number         **074**
\nMnemonic             **STATEMENTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01374**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever the Statement Cutoff Processing batch program affects this loan, Symitar Quest transfers the value in this field to the Statement Previous Date field and updates this field with the effective date of the Statement Cutoff Processing batch run.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("statementprevdate", ` 
\n### Statement Previous Date
\nSymitar Quest stores the date the previous statement was produced for this loan in this field.
\nField Number         **078**
\nMnemonic             **STATEMENTPREVDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01378**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever the Statement Cutoff Processing batch program affects this loan, Symitar Quest transfers the value in the Statement Date field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("paymentcalctype", ` 
\n### Payment Calc Type
\nThis field stores a credit union-defined payment calculation type that defines how Symitar Quest should calculate the loan payment.
\nField Number         **027**
\nMnemonic             **PAYMENTCALCTYPE**
\nData Type            **Code to 8999**
\nSource               **User-entered**
\nHelp File            **01327**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nThis field is useful if a loan has a tiered payment range that depends on the loan balance. For example, a tiered payment range defined with the Payment Calculation Types parameters might specify a payment of $25 for loan balances up to $500, $50 for loan balances from $500 to $1,000.
\n#### Data Type Descriptions
\n##### (0) No Change
\n   Symitar Quest should use the value in the Payment field as the loan payment.
\n       - The loan has an Interest Type field value of (1) Monthly 360 day or (8) Scheduled/364.
\n       - The loan's payments are set by a batch program such as Loan File Maintenance Processing or Statement Cutoff Processing.
\n   
\n       - This option can also be used for a SymChoice Loan (Loan Code field = (6) Combination LOC).
\n##### 0001-8999
\n   Symitar Quest should calculate loan payments during Loan Advance (LA) and Loan Segment Transfer (LG) transactions using the parameters defined for this payment calculation type with the Payment Calculation Types parameters in the Parameter Manager.
\n   
\n       - When the Loan Code field value is set to (6) LOC Combination and the payment calculation type is greater than zero, we recommend that you set up payment calculation type parameters for your SymChoice Loans so that the value of the Due Grace Days parameter matches that of the New Loan Due Date Code, New Segment Cutoff Option and New Segment Cutoff Days Loan record fields.
\n   
\n       - A defined payment calculation type displays with four-digit type numbers and a description.
\n   
\n       - The Payment Calc Type field values, 9000–9999, are reserved for future system-defined use.
\n***Important:***  If the Loan Code field value is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
\n
\nIf you use the MBS Multiple Repayment Programs Per Loan module and have a Schedule record associated with this Loan record that is active, the value of this field is copied from the Schedule record.
`)
loanRecordFields.set("paymentskips", ` 
\n### Payment Skips
\nThis field specifies a code that specifies the number of loan payments the member is allowed to skip.
\nField Number         **026**
\nMnemonic             **PAYMENTSKIPS**
\nData Type            **Code to 9**
\nSource               **User-entered or System-entered**
\nHelp File            **01326**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nThis field is useful if the credit union allows members to skip loan payments for a portion of the year. For example, a credit union might allow teachers and other educator members to skip payments during the summer months, if they are not paid during the summer. In this case, enter the number of payment skips allowed in this field, and enter the due date of the first payment the member is allowed to skip in the Payment Skip Start Day field.
\n***Important:***  If you intend to allow payment skips, you must perform file maintenance on this field and the Payment Skip Start Day field before the date of the last scheduled payment before the skip. For example, if a member's loan is paid monthly on the first of the month, and the member wants to skip payments for 11/1 and 12/1, you must perform file maintenance on the Payment Skips and Payment Skip Start Day fields before 10/1, since it is the payment on 10/1 that causes the due date to advance. If you perform file maintenance on these fields on 10/1 or after, Symitar Quest will still take a payment on 11/1.
\n
\nThe number of payments the member can skip is determined by the Payment Frequency field value on the loan.
\n#### Data Type Descriptions
\n##### 0
\n   No payment skips allowed if the Payment Frequency field value is set to (0) Single Pay, (1) Annual, (2) Semiannual, or (10) Immediate.##### 1
\n   One payment skip is allowed if the Payment Frequency field value is set to (3) Quarterly.##### 1–3
\n   Up to three payment skips allowed if the Payment Frequency field value is set to (4) Monthly##### 1–6
\n   Up to six payment skips allowed if the Payment Frequency field value is set to (5) Semimonthly.##### 1–7
\n   Up to seven payment skips allowed if the Payment Frequency field value is set to (6) Biweekly skip first, (7) Biweekly skip last, or (8) Biweekly.##### 1–9
\n   Up to nine payment skips allowed if the Payment Frequency field value is set to (9) Weekly, (11) Weekly skip first, or (12) Weekly skip last.
\nIf you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Payment Skips field of the loan calculation screen.
\n
\nYou cannot specify payment skips for a loan that has the Interest Type field value set to (1) Monthly 360 day.
\n***Important:***  Although Symitar Quest does not restrict you from applying payment skips to an escrow loan, doing so may cause a shortage in escrow.
`)
loanRecordFields.set("paymentskipstartday", ` 
\n### Payment Skip Start Day
\nThis field stores a code that represents the due date of the first payment the member can skip.
\nField Number         **079**
\nMnemonic             **PAYMENTSKIPSTARTDAY**
\nData Type            **Code to 1231**
\nSource               **User-entered or System-entered**
\nHelp File            **01379**
\nDefault Control      **Yes**
\nDefault Value **0000**
\n
\nThis field and the Payment Skips field work together. If you enter a value in the Payment Skips field to allow members to skip that number of loan payments, you must enter a date in this field to tell Symitar Quest when to begin allowing the member to skip payments.
\n***Important:***  If you intend to allow payment skips, you must perform file maintenance on this field and the Payment Skips field before the date of the last scheduled payment before the skip. For example, if a member's loan is paid monthly on the first of the month, and the member wants to skip payments for 11/1 and 12/1, you must perform file maintenance on the Payment Skips and Payment Skip Start Day fields before 10/1, since it is the payment on 10/1 that causes the due date to advance. If you perform file maintenance on these fields on 10/1 or after, Symitar Quest will still take a payment on 11/1.
\n#### Data Type Descriptions
\n##### 0000
\n   The member cannot skip any payments.##### 0101–1231
\n   The due date (MMDD) of the first payment the member can skip.
\nIf you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Payment Skip Start Day field of the loan calculation screen.
`)
loanRecordFields.set("paymentapplicationmethod", ` 
\n### Payment Application Method
\nThis field stores a system or credit union-defined code that defines how Symitar Quest should apply loan payments for this loan.
\nField Number         **256**
\nMnemonic             **PAYMENTAPPLICATIONMETHOD**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-entered**
\nHelp File            **01556**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Standard
\n   The standard functionality is used when applying loan payments. Payments are applied in the following system-defined order:
\n       - Escrow
\n       - Termination fee (applies to loans with the Loan Code field set to (4) Lease)
\n       - Disposition fee (applies to loans with the Loan Code field set to (4) Lease)
\n       - Late charges
\n       - Sales tax (applies to loans with the Loan Code field set to (4) Lease)
\n       - Interest
\n       - Billed fees
\n       - Principal
\n   
\n       - This order is the standard way Symitar Quest applies payments for non-mortgage and non-SBA loans.
\n##### (1) SBA Required Method
\n   Apply payments in the following system-defined order:
\n       - Escrow
\n       - Interest
\n       - Principal
\n       - Late charges
\n       - Additional principal
\n   
\n       - This order conforms to the SBA requirements for applying payments on a 365-day calendar basis. On loans based on a 365-day calendar year, interest must be collected to the date the payment is received. These payments are applied in the manner indicated, regardless of how the payment is processed (teller transactions, Daily Posting, ACH, batch programs, SymConnect, transfers, ATM, home banking, audio response, etc.).
\n   
\n       - The Escrow portion of each payment installment due will be collected first for SBA escrowed loans, using a daily interest type method. This collection ensures the member's escrow account is properly maintained, and accurately depicts the escrow balance as of the loan due date. This process provides the ability to accurately run escrow analysis and ensure that sufficient funds are available when escrow disbursements are due.
\n   
\n       - You should consider using the mortgage order method for SBA Loans using the Interest Type field value option (1) Monthly 360 day.
\n   
\n       - This method uses the Fees/Charges Posting Option field value to determine how Symitar Quest collects late charges when applying a loan payment.
\n##### (2) Alternate Standard Method I
\n   Follow the posting order for applying loan payments and to defer uncollected billed fees and late charges in the following system-defined order:
\n       - Escrow
\n       - Interest
\n       - Principal
\n       - Billed fees
\n       - Late charges
\n   
\n       - This method uses the Fees/Charges Posting Option field value to determine how Symitar Quest collects billed fees and late charges when applying a loan payment.
\n   
\n       - Additionally, you cannot use this method in a Loan record when the Interest Type field value is set to (1) Monthly 360 day or (8) Scheduled/364 and the Loan Code field value is set to (3) Credit Card, (4) Lease, (5) Avg Daily Bal LOC, or (6) LOC Combination.
\n##### (3) Alternate Standard Method II
\n   Follow the posting order for applying loan payments and to defer uncollected late charges and billed fees in the following system-defined order:
\n       - Escrow
\n       - Interest
\n       - Principal
\n       - Late charges
\n       - Billed fees
\n   
\n       - This method uses the Fees/Charges Posting Option field value to determine how Symitar Quest collects billed fees and late charges when applying a loan payment.
\n   
\n       - Additionally, you cannot use this method in a Loan record when the Interest Type field value is set to (1) Monthly 360 day or (8) Scheduled/364 and the Loan Code field value is set to (3) Credit Card, (4) Lease, (5) Avg Daily Bal LOC, or (6) LOC Combination.
\n##### (10-9999) <Defined Payment Application Method Description>
\n   Apply payments on a mortgage loan (the Interest Type field value set to (1) Monthly 360 Day or (8) Scheduled/364) in the following system-defined order:
\n       - Interest
\n       - Principal
\n       - Escrow
\n       - <defined>
\n   
\n       - These mortgage payment application method selections (10–9999) only appear if they are defined in the Payment Application Methods parameters.
\n   
\n       - Important: If you select a payment application method that uses a mortgage payment order (10–9999), and either of the following is true, Symitar Quest sends an error:
\n       - The Loan Code field value is not (0) Closed end, (1) Open end, or (2) Line of credit
\n       - The Interest Type field value is not (1) Monthly 360 day or (8) Scheduled/364
`)
loanRecordFields.set("paymentcount", ` 
\n### Payment Count
\nSymitar Quest stores the total number of payments in the term of the loan in this field.
\nField Number         **031**
\nMnemonic             **PAYMENTCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01331**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nSymitar Quest calculates this value using the value in the Loan Months field from the loan calculation screen and the value in the Payment Frequency field in the Loan record, as follows:
\n   - If the Payment Frequency field value is set to (0) Single Pay or (10) Immediate, the value in this field is set to 1.
\n   - If the Payment Frequency field value is set to (1) Annual, the value in this field is set to the Loan Months field value divided by 12.
\n   - If the Payment Frequency field value is set to (2) Semiannual, the value in this field is set to the Loan Months field value divided by 6.
\n   - If the Payment Frequency field value is set to (3) Quarterly, the value in this field is set to the Loan Months field value divided by 3.
\n   - If the Payment Frequency field value is set to (4) Monthly, the value in this field is set to the Loan Months field value.
\n   - If the Payment Frequency field value is set to (5) Semimonthly, (6) Biweekly skip first, or (7) Biweekly skip last, the value in this field is set to the Loan Months field value multiplied by 2.
\n   - If the Payment Frequency field value is set to (8) Biweekly, the value in this field is set to the Loan Months field value divided by 12, with the result multiplied by 26.
\n   - If the Payment Frequency field value is set to (9) Weekly, the value in this field is set to the Loan Months field value divided by 12, with the result multiplied by 52.
\n   - If the Payment Frequency field value is set to (11) Weekly skip first or (12) Weekly skip last, the value in this field is set to the Loan Months field value multiplied by 4.
\n
\nIf you use the Pull Fields From App action field, Symitar Quest updates this field with the value calculated from the Payment Frequency and Loan Months fields from the specified Application record. If you use the Loan Calc Screen action field, Symitar Quest updates this field with the value calculated from the Payment Frequency and Loan Months fields of the loan calculation screen.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("paymenthistory", ` 
\n## PAYMENTHISTORY:1
\n### Payments Made
\nSymitar Quest stores the number of payments made during the term of the loan in this field.
\nField Number         **032:1**
\nMnemonic             **PAYMENTHISTORY:1**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01332**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar Quest updates this field each time a Loan Payment (LP) teller transaction posts to the loan and the scheduled payment amount is satisfied. To understand how and when Symitar Quest updates the value in this field, see the Partial Payment field description. When you void a Loan Payment (LP) transaction, Symitar Quest decreases this field by the appropriate number of payments. If you perform a Loan Payment Adjustment (LPZ) or a Recast Loan (RL) transaction, you must update this field manually, if necessary.
\n
\n## PAYMENTHISTORY:2
\n### 11- 30 Days DQ
\nSymitar Quest stores the number of times loan payments have been late by the number of days specified in the Payment History Day Cutoff 1 parameter defined in the Miscellaneous Parameters.
\nField Number         **032:2**
\nMnemonic             **PAYMENTHISTORY:2**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01332**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe field value is customizable and the field name reflects the value you entered into Miscellaneous Parameters. As an example, you can change the parameter definition to 35 days changing the field name to 11-35 Days DQ to fit the needs of your credit union. However, the Name value in PowerOn Control remains as 11-30 Days DQ.
\n
\nWhenever a Loan Payment (LP) transaction affects this loan and the payment is late, Symitar Quest updates the values in the 11- 30 Days DQ, 31- 60 Days DQ, 61- 90 Days DQ, 91- 120 Days DQ, and 121 and up Days DQ fields according to the number of days the payment is late. If you void a Loan Payment teller transaction, Symitar Quest adjusts the values in these fields accordingly. If you adjust a Loan Payment teller transaction, you may have to update the values in these fields manually.
\n
\nThis field is not related to the Payments Made field.
\n
\n## PAYMENTHISTORY:3
\n### 31- 60 Days DQ
\nSymitar Quest stores the number of times loan payments have been late by the number of days specified in the Payment History Day Cutoff 2 parameter defined in the Miscellaneous Parameters.
\nField Number         **032:3**
\nMnemonic             **PAYMENTHISTORY:3**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01332**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe field value is customizable and the field name reflects the value you entered into Miscellaneous Parameters. As an example, you can change the parameter definition to 65 days changing the field name to 31-65 Days DQ to fit the needs of your credit union. However, the Name value in PowerOn Control remains as 31-60 Days DQ.
\n
\nWhenever a Loan Payment (LP) transaction affects this loan and the payment is late, Symitar Quest updates the values in the 11- 30 Days DQ, 31- 60 Days DQ, 61- 90 Days DQ, 91- 120 Days DQ, and 121 and up Days DQ fields according to the number of days the payment is late. If you void a Loan Payment teller transaction, Symitar Quest adjusts the values in these fields accordingly. If you adjust a Loan Payment teller transaction, you may have to update the values in these fields manually.
\n
\nThis field is not related to the Payments Made field.
\n
\n## PAYMENTHISTORY:4
\n### 61- 90 Days DQ
\nSymitar Quest stores the number of times loan payments have been late by the number of days specified in the Payment History Day Cutoff 3 parameter defined in the Miscellaneous Parameters.
\nField Number         **032:4**
\nMnemonic             **PAYMENTHISTORY:4**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01332**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe field value is customizable and the field name reflects the value you entered into Miscellaneous Parameters. As an example, you can change the parameter definition to 95 days changing the field name to 61-95 Days DQ to fit the needs of your credit union. However, the Name value in PowerOn Control remains as 61-90 Days DQ.
\n
\nWhenever a Loan Payment (LP) transaction affects this loan and the payment is late, Symitar Quest updates the values in the 11- 30 Days DQ, 31- 60 Days DQ, 61- 90 Days DQ, 91- 120 Days DQ, and 121 and up Days DQ fields according to the number of days the payment is late. If you void a Loan Payment teller transaction, Symitar Quest adjusts the values in these fields accordingly. If you adjust a Loan Payment teller transaction, you may have to update the values in these fields manually.
\n
\nThis field is not related to the Payments Made field.
\n
\n## PAYMENTHISTORY:5
\n### 91-120 Days DQ
\nSymitar Quest stores the number of times loan payments have been late by the number of days specified in the Payment History Day Cutoff 4 parameter defined in the Miscellaneous Parameters.
\nField Number         **032:5**
\nMnemonic             **PAYMENTHISTORY:5**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01332**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe field value is customizable and the field name reflects the value you entered into Miscellaneous Parameters. As an example, you can change the parameter definition to 125 days changing the field name to 91-125 Days DQ to fit the needs of your credit union. However, the Name value in PowerOn Control remains as 91-120 Days DQ.
\n
\nWhenever a Loan Payment (LP) transaction affects this loan and the payment is late, Symitar Quest updates the values in the 11- 30 Days DQ, 31- 60 Days DQ, 61- 90 Days DQ, 91- 120 Days DQ, and 121 and up Days DQ fields according to the number of days the payment is late. If you void a Loan Payment teller transaction, Symitar Quest adjusts the values in these fields accordingly. If you adjust a Loan Payment teller transaction, you may have to update the values in these fields manually.
\n
\nThis field is not related to the Payments Made field.
\n
\n## PAYMENTHISTORY:6
\n### 121 and up Days DQ
\nSymitar Quest stores the number of times loan payments have been late by the number of days specified in the Payment History Day Cutoff 5 parameter defined in the Miscellaneous Parameters.
\nField Number         **032:6**
\nMnemonic             **PAYMENTHISTORY:6**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01332**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe field value is customizable and the field name reflects the value you entered into Miscellaneous Parameters. As an example, you can change the parameter definition to 125 days changing the field name to 125 and up Days DQ to fit the needs of your credit union. However, the Name value in PowerOn Control remains as 121 and up Days DQ.
\n
\nWhenever a Loan Payment (LP) transaction affects this loan and the payment is late, Symitar Quest updates the values in the 11- 30 Days DQ, 31- 60 Days DQ, 61- 90 Days DQ, 91- 120 Days DQ, and 121 and up Days DQ fields according to the number of days the payment is late. If you void a Loan Payment teller transaction, Symitar Quest adjusts the values in these fields accordingly. If you adjust a Loan Payment teller transaction, you may have to update the values in these fields manually.
\n
\nThis field is not related to the Payments Made field.
`)
loanRecordFields.set("fasb91alternateterm", ` 
\n### FASB 91 Alternate Term
\nThis field stores a credit union-determined term that is shorter than the term of the loan calculated for the Payment Count field.
\nField Number         **124**
\nMnemonic             **FASB91ALTERNATETERM**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01424**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nSymitar Quest uses this field as the term for straight-line calculations performed during the GL Posting batch program for Loan FASB 91 accruals. The calculations determine a monthly amount from the Original Amortized Fees field that the Loan FASB 91 Accruals posts when you run the GL Posting batch program.
\n
\nIf this field is zero, then the Payment Count field value is used as the term for straight-line calculations.
`)
loanRecordFields.set("feeschargespostingoption", ` 
\n### Fees/Charges Posting Option
\nThis field stores a code that determines how billed fees and late charges are collected after a loan payment is applied.
\nField Number         **129**
\nMnemonic             **FEESCHARGESPOSTINGOPTION**
\nData Type            **Code to 2**
\nSource               **System-entered**
\nHelp File            **31206**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nThis field does not apply to late charges when the late charge comes out of the standard payment.
\nThis field applies only to loans that use one of the following options in the Payment Application Method field:
\n   - (1) SBA Required Method
\n   - (2) Alternate Standard Method I
\n   - (3) Alternate Standard Method II
\n   - If the Payment Application Method field is set to anything other than one of these options, the field cannot be revised and Symitar Quest displays one of the following default values:
\n   - (0) Not Used for this Payment Application Method
\n   - (1) Not Used for this Payment Application Method
\n   - (2) Not Used for this Payment Application Method
\n##### (0) Pay when loan is current
\n   Automatically postpone billed fees and late charges until the loan is current.
\n   
\n       - Symitar Quest considers the loan current if the member satisfies the payment due for that billing cycle. Once the loan is current, Symitar Quest applies the excess amount to billed fees, late charges, and unpaid escrow before satisfying the next payment due date.
\n##### (1) Pay per due date
\n   Pay billed fees and late charges, per due date, after the periodic payment for that due date has been satisfied.
\n       - When the member satisfies the first periodic payment, Symitar Quest applies the excess funds to billed fees (including postponed billed fees) and late charges (including postponed late charges), based on the payment order.
\n       - When the member satisfies billed fees and late charges, Symitar Quest applies the excess funds to unpaid escrow.
\n       - When the member satisfies the unpaid escrow balance, Symitar Quest applies the excess funds to the payment order for the next period and fully distributes the loan payment.
\n##### (2) Pay after periodic payments are applied
\n   Pay billed fees and late charges per due date, with excess funds remaining after satisfying as many full periodic payments as possible.
\n   
\n       - The loan is current when the member satisfies the payment for that billing cycle.
\n   
\n       - When the member does not satisfy the loan due date for the current billing cycle, but does satisfy full periodic payments, Symitar Quest applies the excess funds to billed fees (including postponed billed fees) and late charges (including postponed late charges), based on the payment order.
\n       - After the member satisfies billed fees and late charges, Symitar Quest applies the excess funds to unpaid escrow.
`)
loanRecordFields.set("stmtfeesytd", ` 
\n### Stmt Fees YTD
\nSymitar Quest stores the amount in this field to be printed on statements of total fees charged to this loan this year.
\nField Number         **306**
\nMnemonic             **STMTFEESYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31138**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field, populated by the Statement Cutoff Processing batch program, is the sum of the following fields:
\n   - Billed Fee YTD No Adj
\n   - CA/BT Trns Int Chg Billed YTD
\n   - Fees YTD No Adj
\n   - Insurance YTD No Adj
\n   - Late Charge YTD No Adj
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("stmtfeeslastyear", ` 
\n### Stmt Fees Last Year
\nSymitar Quest stores the sum of all fields that make up the Stmt Fees YTD field for this loan during the previous year in this field.
\nField Number         **364**
\nMnemonic             **STMTFEESLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31194**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe following fields are used to get the sum in the Stmt Fees YTD field:
\n   - Billed Fee YTD No Adj
\n   - CA/BT Trns Int Chg Billed YTD
\n   - Fees YTD No Adj
\n   - Insurance YTD No Adj
\n   - Late Charge YTD No Adj
\n
\nWhen you run the Close Day Processing batch program at the end of a calendar year, Symitar Quest copies the amount in the Stmt Fees YTD field and puts it in the Stmt Fees Last Year field. After the first run of the Statement Cutoff batch program, Symitar Quest sets the Stmt Fees YTD field to zero.
\n
\nThis field does not include adjustments.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("feesytd", ` 
\n### Fees YTD
\nSymitar Quest stores the amount in this field of total fees charged to this loan this year.
\nField Number         **304**
\nMnemonic             **FEESYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31136**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is updated by transaction processing of any fee. During a teller transaction, all charged fees designated in Miscellaneous Parameters as Regulation Z Fee Types are also included in value in this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("feesytdnoadj", ` 
\n### Fees YTD No Adj
\nSymitar Quest stores the total amount in this field of transaction fees charged to a loan during the current year, not including adjustments.
\nField Number         **369**
\nMnemonic             **FEESYTDNOADJ**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31199**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest adds the fee amount to this field whenever any transaction fee is processed. During a teller transaction, all charged fees designated in Miscellaneous Parameters as Regulation Z Fee Types are also added to this field.
\n
\nWhen you run the Close Day Processing batch program at the end of a calendar year, Symitar Quest transfers the amount in this field to the Fees Last Yr No Adj field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("feeslastyear", ` 
\n### Fees Last Year
\nSymitar Quest stores the amount in this field of total fees charged to this loan during the previous year.
\nField Number         **305**
\nMnemonic             **FEESLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31137**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the value in the Fees YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("feeslastyrnoadj", ` 
\n### Fees Last Yr No Adj
\nSymitar Quest stores the amount in this field of fees assessed on the loan the previous year, not including adjustments.
\nField Number         **370**
\nMnemonic             **FEESLASTYRNOADJ**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31200**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("stmtmaxlatefee", ` 
\n### Stmt Max Late Fee
\nThis field stores value of the maximum late fee to be printed in the Late Payment Warning disclosure on member statements for credit card loans.
\nField Number         **313**
\nMnemonic             **STMTMAXLATEFEE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31145**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nIf this field is 0.00, then the Late Payment Warning is determined by the Late Charge Type Parameters.
`)
loanRecordFields.set("stmtmaxpenaltyapr", ` 
\n### Stmt Max Penalty APR
\nSymitar Quest stores the maximum penalty Annual Percentage Rate (APR) on a loan in this field to print in the Late Payment Warning section on statements.
\nField Number         **327**
\nMnemonic             **STMTMAXPENALTYAPR**
\nData Type            **Rate**
\nSource               **System-entered**
\nHelp File            **31159**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nIf this field is 0.000%, then Statement Generation batch program uses the Late Charge Type parameters to calculate the maximum penalty APR. If 0.000% is calculated from the Late Charge Type parameters, then the Late Payment Warning will not print.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("currstmtfees", ` 
\n### Current Statement Period Fees
\nSymitar Quest stores the accrued amounts of fees paid on the loan in this field for the current statement period.
\nField Number         **261**
\nMnemonic             **CURRSTMTFEES**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01561**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Regulation Z Fee Types parameter in the Miscellaneous Parameters identifies the fee types accrued in this field.
\n
\nPlacing a fee into the Military APR Fee Types parameter in Miscellaneous Parameters does not affect whether that fee accrues to this field. The amount of a fee with a fee type of (0) Unknown does not accrue to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("prevstmtfees", ` 
\n### Previous Statement Period Fees
\nSymitar Quest stores the accrued amounts of fees paid on the loan in this field for the previous statement period.
\nField Number         **262**
\nMnemonic             **PREVSTMTFEES**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01562**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Regulation Z Fee Types parameter in the Miscellaneous Parameters identifies the fee types accrued in this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("currstmtintaccrd", ` 
\n### Current Stmt Interest Accrued
\nSymitar Quest stores the total interest charged or accrued for the current statement period in this field.
\nField Number         **263**
\nMnemonic             **CURRSTMTINTACCRD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01563**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field accumulates interest during a statement period that the Reg Z APR calculation uses for a Loan record Loan Code field with a value of (1) Open End, (2) Line of Credit, or (6) LOC Combination.
\n
\nThe field also includes the total interest paid during the current statement period for loans with a Loan record Loan Code field that has a value of (0) Closed End or (4) Lease, unless those loans also have a Loan record Interest Type field with the value (1) Monthly 360 Day or (8) Scheduled 364.
\n
\nFor SymChoice Loans, this field contains the accumulated interest for all loan segments, not just segment 0 (zero). The Loan record Seg 0 Current Stmt Int Accr field holds the accumulated interest for segment 0 only.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("prevstmtintaccrd", ` 
\n### Previous Stmt Interest Accrued
\nSymitar Quest stores the total interest charged or accrued for the previous statement period in this field.
\nField Number         **264**
\nMnemonic             **PREVSTMTINTACCRD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01564**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nFor SymChoice Loans, this field contains the previously accumulated interest for all loan segments, not just segment 0. The Loan record Seg 0 Previous Stmt Int Accr field holds the previously accumulated interest for segment 0 only.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("maprcurrstmtintaccrd", ` 
\n### MAPR Current Stmt Int Accrued
\nSymitar Quest stores the total interest charged or accrued for the current statement period in this field, beginning on the day following the date in the Statement Date field.
\nField Number         **414**
\nMnemonic             **MAPRCURRSTMTINTACCRD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31246**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest uses this field for the Military APR calculation.
\nThis field accumulates interest during a statement period for loans with one of the listed values in both of the indicated Loan record fields:
\n   - The Military APR Loan field value is set to Yes.
\n   - The Loan Code field value is set to one of these values:
\n   - (0) Closed End
\n   - (1) Open End
\n   - (2) Line of Credit
\n   - (4) Lease
\n   - (6) LOC Combination
\n
\n   - If the Loan record has the Loan Code field set to (0) Closed End or (4) Lease, Symitar Quest populates this field. The system does not use the interest amount in calculating the MAPR. Only calculations for open-end loans use the value in this field.
\n
\nThis field does not accumulate interest for loans with a value in the Interest Type field of (1) Monthly 360 Day or (8) Scheduled/364.
\n
\nFor SymChoice Loans and credit card loans, this field contains the accumulated interest for all loan segments.
\n
\nWhen you run the Statement Cutoff Processing batch program, Symitar Quest resets this field to 0 (zero).
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("stmtescrowunpaid", ` 
\n### Statement Escrow Unpaid
\nSymitar Quest stores the balance in the Escrow Unpaid field in this field as of the date in the Statement Date field.
\nField Number         **302**
\nMnemonic             **STMTESCROWUNPAID**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31133**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("dqnoticetype", ` 
\n### DQ Notice Type
\nThis field stores a code that identifies which set of delinquency notices are to be used for the loan.
\nField Number         **276**
\nMnemonic             **DQNOTICETYPE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **31107**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter a defined DQ notice type code (0-99) defined in the Delinquent Notice Messages parameters to indicate the type of delinquent notice to be used.
`)
loanRecordFields.set("dqnoticenumber", ` 
\n### DQ Notice
\nThis field stores the total number of delinquent notices generated for this loan. The field can also indicate if Symitar Quest should not generate delinquent notices for this loan.
\nField Number         **051**
\nMnemonic             **DQNOTICENUMBER**
\nData Type            **Code to 9**
\nSource               **User-entered or System-entered**
\nHelp File            **01351**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0–8
\n   Initially set to 0, Symitar Quest increments this field by 1 each time the Daily Posting batch program generates a delinquent notice for the loan, until all eight possible delinquent notices have been generated, or until the loan is brought current.##### (9) No Notices
\n   Enter this value if Symitar Quest should not generate delinquent notices for this loan (for example, if the loan is charged off).
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("dqnoticedate", ` 
\n### DQ Notice Date
\nSymitar Quest stores the last date a delinquent notice was generated for this loan in this field.
\nField Number         **052**
\nMnemonic             **DQNOTICEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01352**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest updates this field each time the Daily Posting batch program generates a delinquent notice for the loan.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("dqcarddate", ` 
\n### DQ Card Date
\nSymitar Quest stores the last date a delinquent card was generated for this loan in this field.
\nField Number         **053**
\nMnemonic             **DQCARDDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01353**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest updates this field each time the Daily Posting batch program generates a delinquent card for the loan.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("dqcalculationmethod", ` 
\n### DQ Calculation Method
\nThis field stores a code that indicates if Symitar Quest should calculate the values for the payment buckets each month.
\nField Number         **090**
\nMnemonic             **DQCALCULATIONMETHOD**
\nData Type            **Code to 1**
\nSource               **User-entered or System-entered**
\nHelp File            **01390**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Payment Buckets Only Contain Changes
\n   Symitar Quest should not calculate the values for the payment buckets each month. For closed and open-end loans with a fixed payment amount, Symitar Quest does not use the payment buckets.
\n   
\n       - When you run Loan file maintenance processing, Statement Cutoff Processing, or Rate Change Processing for loans with a variable payment amount, Symitar Quest updates the value in the Pmt Bucket Amt and Pmt Bucket Due Date fields only when the payment amount changes.
\n##### (1) Payment Buckets Are Calculated Monthly
\n   Symitar Quest should calculate the values for the payment buckets each month. Symitar Quest updates each value in the Pmt Bucket Amt and Pmt Bucket Due Date field on a monthly basis, regardless of whether the payment amount changes.
\n       - This delinquency method can be used on line of credit and credit card loans only if they meet the following characteristics:
\n       - The Payment Frequency field value must be (4) Monthly.
\n       - No value in the Payment Skips field.
\n       - A payment required each month (cannot be paid ahead).
\n       - The Payment Calc Type field value must be (0) No Change.
\n       - There must be a monthly amount in the Payment field calculated by the Loan File Maintenance Processing batch program (for line of credit loans) or by the Statement Cutoff Processing batch program (for credit card loans).
\n       - Important: You must run the Set Loan Payments Amounts function of the Loan File Maintenance Processing batch program on a monthly basis to calculate the payment amount for line of credit loans, or they show totally incorrect delinquency information.
\n   
\n       - This delinquency method can also be used for interest-only loans with the following characteristics:
\n   
\n       - The Payment Type field value must be (1) Level Principal.
\n       - The Payment field value must be 0.00 (for interest-only payments).
\n       - The Due Date Advance Code field value must be (0) Use Max Due Date Advance Period with the Max Due Date Advance Period field value set to 1 and the Initial BCD Setting Option field value set to (1) Use Loan Due Date (One when due).
\n       - The Due Day 1 field value must be completed to enable Symitar Quest to calculate the scheduled due dates.
\n       - The Payment Method field value must be (2) Auto transfer with a corresponding Loan Transfer record.
\n       - The Payment Calc Type field value must be (0) No Change.
\n       - There must be a monthly amount in the Payment field calculated by the Daily Posting Batch Program.
\n       - You can only use this option for loans with the Interest Type field set to (0) Daily 365 Day or (5) Actual/360.
\n   
\n       - Loans with this setup must be paid by automatic transfer and they do not comply with Reg Z because there is no advance billing.
\n   
\n       - The Balloon Date field value must be set to the date the loan is to be paid off. Since these loans are interest-only loans, there must be a value in the Balloon Date field.
\n       - Important: Do not run the Loan File Maintenance Processing batch program to set payment amounts for interest-only loans. Setting the loan fields as described above allows the Statement Cutoff Processing batch program to determine the payment amount for these loans.
\n
\nFor an explanation of how Symitar Quest uses the Pmt Bucket Amt and Pmt Bucket Due Date fields to track delinquency or payment amounts for loans with a DQ Calculation Method of (1) Payment Buckets Are Calculated Monthly, see the Pmt Bucket Amt 1 field description.
\n
\nIf you use the MBS Multiple Repayment Programs Per Loan module and have a Schedule record associated with this Loan record that is active, the value of this field is copied from the Schedule record.
\n
\nWe do not advise changing this field from (0) Payment Buckets Only Contain Changes to (1) Payment Buckets are Calculated Monthly on any loan that has a balance. If this field is set incorrectly in the loan and you must change it, you must also populate the payment buckets for each due date and payment amount for which you want the system to be able to calculate delinquency. When this field is set to (1) Payment Buckets are Calculated Monthly and there is no bucket corresponding to an iteration of the due date, the system assumes that the payment due for that date was $0.00 and behaves accordingly. Changing the field without updating the buckets on a loan that is currently delinquent causes the Loan File Maintenance Processing batch program to treat the loan as if it were current and pull the due date forward to the cycle for which it is setting the current payment amount, erasing the prior delinquency and forgiving all missed payments.
`)
loanRecordFields.set("earlyintervntnnoticedate", ` 
\n### Early Intervention Notice Date
\nThis field stores the last date that you sent an Early Intervention Notice to the member.
\nField Number         **410**
\nMnemonic             **EARLYINTERVNTNNOTICEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31239**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis date is for reference only. Symitar Quest does not use it for any functions.
`)
loanRecordFields.set("chargeoffdate", ` 
\n### Charge-off Date
\nThis field stores the date that the loan was charged off.
\nField Number         **009**
\nMnemonic             **CHARGEOFFDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01309**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date that the loan was charged off. When you enter a date in this field, Symitar Quest automatically creates a GL transaction entry that transfers the charged-off balance to the GL account number specified in the GL translation table for (10) Loan Principal Charge Off (see Charging Off Loans). Symitar Quest posts the GL transaction to the General Ledger when you run the Close Day Processing batch program.
\nOnce you enter a value in this field, Symitar Quest accepts only Loan Payment (LP) teller transactions for the loan. Symitar Quest applies loan payments in the order specified by the value in the Charge Off Payment Order parameter in the Miscellaneous Parameters. You can define either of the following orders:
\n   - Principal, then interest, then late charges
\n   - Late charges, then interest, then principal
\n***Important:***  You cannot enter a value in this field if the loan is in a participation and the Allow Charge-Off field value in the Participation record is set to No. You must remove the loan from the participation first.
\nIf you populate this field and there is a balance greater than zero in the Unapplied Partial Payment field, Symitar Quest sends the following error:
\n   - Error: Unapplied Partial Payment balance, loan cannot be charged off.
\n
\nTo assign a status code of (64) Account Paid in Full, Was a Charge Off or (97) Unpaid Balance Reported as a Loss, set the Credit Reporting Code field value to (0) Normal and Symitar Quest automatically assigns the status code based on whether it is reported as paid in full or as a loss.
`)
loanRecordFields.set("chargeofftype", ` 
\n### Charge-off Type
\nThis field stores a credit union-defined code to indicate why this loan was charged off or what type of loan was charged off.
\nField Number         **064**
\nMnemonic             **CHARGEOFFTYPE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01364**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter a credit union-defined code (0-99) to indicate why this loan was charged off or what type of loan was charged off. The use of this field is entirely credit union-defined. You can use this field to categorize charge-off types for reports and displays.
`)
loanRecordFields.set("chargeoffamount", ` 
\n### Charge-off Amount
\nThis field stores the amount charged-off.
\nField Number         **065**
\nMnemonic             **CHARGEOFFAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01365**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf you charge off the loan, enter amount charged-off in this field. The amount should be positive. For example, if the loan balance is -750.00 at the time of the charge-off, type 75000. Any negative amount results in a zero on the credit report.
\n
\nTo assign a status code of (64) Account Paid in Full, Was a Charge Off or (97) Unpaid Balance Reported as a Loss, set the Credit Reporting Code field value to (0) Normal and Symitar Quest automatically assigns the status code based on whether it is reported as paid in full or as a loss.
\n
\nIf the credit union is using Metro2 format, this amount is reported to the bureau as the charged-off amount. As the member makes recovery payments, the balance may go down, but the amount in this field is the balance at charge-off.
`)
loanRecordFields.set("refundpostcode", ` 
\n### Refund Post Code
\nThis field stores how portions of the interest payments may be refunded, used mainly for real estate loans.
\nField Number         **039**
\nMnemonic             **REFUNDPOSTCODE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **01339**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nThis field is for information only and does not affect interest refund postings. It merely describes how the refund is disbursed.
\n#### Data Type Descriptions
\n##### (0) To Share
\n   Post interest refunds to a Share record.##### (1) By Check
\n   Mail interest refund checks to the member.##### (2) Transfer
\n   Transfer interest refunds to another account.
\n`)
loanRecordFields.set("refundytd", ` 
\n### Refund YTD
\nSymitar Quest stores the total of all interest refunds in this field during the current year to date.
\nField Number         **040**
\nMnemonic             **REFUNDYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01340**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest adds the amount of any Interest Refund (IR) teller transaction to the value in this field. For proper IRS reporting, this field must include the amount of any refund of interest paid in a previous year. The first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the value in this field to the Refund Last Year field and resets this field to 0.00.
\n***Important:***  If you refund interest in the same year it was paid, you should subtract it from the value in the Interest Paid YTD field. You should place the refunded interest amount in this field only if the refund is for interest paid in a previous calendar year. For example, if you post an interest refund on December 31 that represents a refund of interest paid in the same year, you should subtract that amount from the value in the Interest Paid YTD field. If you post an interest refund on January 1 that represents a refund of interest paid in the previous year, you should add that amount to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("refundlastyear", ` 
\n### Refund Last Year
\nSymitar Quest stores the total amount of all interest refunded to the member in this field during the previous year.
\nField Number         **041**
\nMnemonic             **REFUNDLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01341**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the value in the Refund YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("principalytd", ` 
\n### Principal YTD
\nSymitar Quest stores the total amount applied to the principal of this loan during the current year to date.
\nField Number         **062**
\nMnemonic             **PRINCIPALYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01362**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever you post a Loan Payment (LP) teller transaction to this loan, Symitar Quest adds the balance change amount to this field. If you void a Loan Payment (LP) teller transaction that affects this loan, Symitar Quest adjusts this field accordingly.
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the value in this field to the Principal Last Year field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("principallastyear", ` 
\n### Principal Last Year
\nSymitar Quest stores the total amount applied to the principal of this loan in this field during the previous year.
\nField Number         **063**
\nMnemonic             **PRINCIPALLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01363**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the value in the Principal YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("prinpaidfromopen", ` 
\n### Principal Paid From Open
\nSymitar Quest stores the total amount of principal paid on a loan in this field.
\nField Number         **320**
\nMnemonic             **PRINPAIDFROMOPEN**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31152**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf a loan is refinanced, the amount in this field may not be accurate.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("stmtprincipalytd", ` 
\n### Stmt Principal YTD
\nSymitar Quest stores the amount in the Principal YTD field in this field at the time of statement cutoff.
\nField Number         **340**
\nMnemonic             **STMTPRINCIPALYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31172**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("stmtprincipallastyear", ` 
\n### Stmt Principal Last Year
\nSymitar Quest stores the amount contained in the Principal Last Year field in this field at the time of statement cutoff.
\nField Number         **341**
\nMnemonic             **STMTPRINCIPALLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31173**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("stmtprinpdfromopen", ` 
\n### Stmt Principal Paid From Open
\nSymitar Quest stores the amount in the Principal Paid From Open field in this field at the time of statement cutoff.
\nField Number         **321**
\nMnemonic             **STMTPRINPDFROMOPEN**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31153**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("minbalance", ` 
\n### Minimum Balance
\nThis field stores the minimum balance for the loan.
\nField Number         **130**
\nMnemonic             **MINBALANCE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01430**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the minimum balance for the loan. Symitar Quest does not allow any payment that would bring the loan balance below this minimum. This is useful for specific line of credit loans that must maintain a minimum balance.
`)
loanRecordFields.set("minadvance", ` 
\n### Minimum Advance
\nThis field stores the minimum advance amount for line of credit or credit card loans.
\nField Number         **131**
\nMnemonic             **MINADVANCE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01431**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the minimum advance amount for line of credit or credit card loans. Symitar Quest does not allow advances for less than this amount.
`)
loanRecordFields.set("regecount", ` 
\n### Reg E Count
\nSymitar Quest stores the total number of Regulation E transactions in this field that affected this loan during the current statement period.
\nField Number         **076**
\nMnemonic             **REGECOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01376**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar Quest increments this field by 1 each time you post a transaction with a Reg E Code field value of 1 in a Transaction record for this loan. When the Statement Processing batch program updates the value in the Statement Date field, Symitar Quest resets this field to 0.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("securedcode", ` 
\n### Secured Code
\nThis field stores a code that indicates how this loan is secured.
\nField Number         **066**
\nMnemonic             **SECUREDCODE**
\nData Type            **Code to 3**
\nSource               **User-entered or System-entered**
\nHelp File            **01366**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Pledged
\n   The loan is not secured by any shares or stock portfolios.##### (1) 100% Pledged
\n   The loan is completely secured by one or more shares or stock portfolios.##### (2) Partial Release First
\n   The shares or stock portfolios partially securing a loan should be released before other collateral securing the loan. This option is useful if a share or stock portfolio is only one form of security pledged for the loan.##### (3) Partial Release Last
\n   The shares or stock portfolios partially securing a loan should be released after other collateral securing the loan. This option is useful if a share or stock portfolio is only one form of security pledged for the loan.
\nIf you select (1) 100% Pledged, (2) Partial Release First, or (3) Partial Release Last, you must also create a Pledge record under the Loan record. The Loan Pledge record identifies the share or stock portfolio securing the loan, as well as the percentage or amount pledged. When you have created both the Loan record and the Pledge record (in that order), Symitar Quest creates a Hold record under the specified Share or Portfolio record.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Secured Code field from the specified Application record.
\n
\nWhen you fund the loan using the New Loan (LN) transaction, Symitar Quest fills in the Hold Amount field in the Share Hold or Portfolio Hold record. The Share Hold or Portfolio Hold record ensures that sufficient funds are left in the share or stock portfolio to cover the percentage or amount of the security pledged for the loan.
\n
\nFor common pledge scenarios, go to Pledge Records.
`)
loanRecordFields.set("securedamount", ` 
\n### Secured Amount
\nThis field stores the total amount secured for this loan.
\nField Number         **067**
\nMnemonic             **SECUREDAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01367**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nFor loans that have the Secured Code field set to (1) 100% Pledged, (2) Partial Release First, or (3) Partial Release Last, Symitar Quest enters the initial value in this field when you fund the loan with the New Loan (LN) teller transaction, based on the secured amounts or percentages in the loan's associated Pledge records. Symitar Quest updates this field with the balance change amount of any transaction that affects this loan.
\nUnder normal circumstances, you should not revise this field. If, however, you created and funded a share-secured loan and did not set the Secured Code field to (1) 100% Pledged, (2) Partial Release First, or (3) Partial Release Last, follow the procedure described below to correct the Pledge and Hold records:
\n   - Delete the current Loan Pledge record from the secured loan (if one exists).
\n   - Change the Secured Code field in the Loan record to (1) 100% Pledged, (2) Partial Release First, or (3) Partial Release Last.
\n   - Change the Secured Amount field in the Loan record to the current loan balance if the Secured Code field is set to (1) 100% Pledged, or to the appropriate partial amount of the current loan balance if the Secured Code field is set to (2) Partial Release First or (3) Partial Release Last.
\n   - Create a new Loan Pledge record under the secured loan.
\n
\nFor common pledge scenarios, see Pledge Records.
`)
loanRecordFields.set("fasb91code", ` 
\n### FASB 91 Code
\nThis field stores a credit union-defined code used in conjunction with loan type codes to create combinations that post to designated General Ledger accounts.
\nField Number         **138**
\nMnemonic             **FASB91CODE**
\nData Type            **Code to 199**
\nSource               **System-entered or User-entered**
\nHelp File            **01438**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nSymitar Quest usually sets the value in this field to the value in Loan Defaults. You can also enter a code (1-199) manually.
\n
\nIn the FASB 91 Loan Accruals function of the GL Posting batch program after the Loan Branch List prompt, the Break Totals Down By FASB 91 Code? prompt appears. If you select Y, Symitar Quest breaks down totals by FASB 91 code. If you select N, Symitar Quest breaks down totals only by loan type.
\n
\nThe GL Accrual Detail for FASB 91 and GL Accrual Exceptions for FASB 91 reports have a new column that displays the FASB 91 code for each account.
`)
loanRecordFields.set("refinancebalance", ` 
\n### Refinance Balance
\nSymitar Quest stores the balance of the refinance when the next Loan Refinance (LR) transaction is processed.
\nField Number         **253**
\nMnemonic             **REFINANCEBALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01553**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Original Balance field value is not changed. This field is initially set to 0.
`)
loanRecordFields.set("refinancedate", ` 
\n### Refinance Date
\nSymitar Quest stores the date of the refinance when the next Loan Refinance (LR) transaction is processed.
\nField Number         **254**
\nMnemonic             **REFINANCEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01554**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe Original Loan Date field value is not changed. This field is initially set to date null (__/__/____).
`)
loanRecordFields.set("refinancecounter", ` 
\n### Refinance Counter
\nThis field stores the number of Loan Refinance (LR) transactions that occurred.
\nField Number         **255**
\nMnemonic             **REFINANCECOUNTER**
\nData Type            **Code to 9999**
\nSource               **System-entered or User-entered**
\nHelp File            **01555**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nWith each Loan Refinance (LR) transaction created for this loan, Symitar Quest increments the value in this field by 1. This field is initially set to 0.
\n
\nYou can manually change this field if you want to reflect the number of Loan Refinance (LR) transactions that occurred.
`)
loanRecordFields.set("intpayoffcalc", ` 
\n### Interest Payoff Calculation
\nThis field stores a code that determines how payoff interest is calculated when a payoff inquiry is performed or when the loan payment amount received is sufficient to pay the loan in full.
\nField Number         **363**
\nMnemonic             **INTPAYOFFCALC**
\nData Type            **Code to 1**
\nSource               **User-entered or System-entered**
\nHelp File            **31193**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nThis field is reserved for future use.
\nThis field is only used for loans where the Interest Type field value is set to (1) Monthly 360 day. If the Interest Type field value is set to anything else, Symitar Quest displays one of the following and the field cannot be revised:
\n   - 0 Not Used for this Interest Type
\n   - 1 Not Used for this Interest Type
\n#### Data Type Descriptions
\n##### (0) Use Interest Type method
\n   Use the method defined for interest type (1) Monthly 360 day to calculate the payoff interest due.
\n   
\n       - This method complies with Fannie Mae® and Freddie Mac® servicing guidelines. An interest type of (1) Monthly 360 day calculates interest on a 360-day year using a 30-day month basis for each full month outstanding, and calculates daily interest on a 365-day basis for a partial month.
\n   
\n       - Symitar Quest calculates interest as follows:
\n       - For full months: Loan Balance × Interest Rate ÷ 12 (for each delinquent payment) since the Interest Date to the current due date
\n       - For partial months: Loan Balance × Interest Rate ÷ 365 × the number of days from the current due date to the payoff date
\n##### (1) Use Daily 365-day
\n   Use the method defined for interest type 1 to calculate payoff interest daily on a 365-day basis.
\n   
\n       - Symitar Quest calculates interest as follows: Loan Balance × Interest Rate ÷ 365 × the number of days since the Interest Date to the payoff date.
`)
loanRecordFields.set("interesttype", ` 
\n### Interest Type
\nThis field stores either a system-defined or a credit union-defined code that indicates the method Symitar Quest uses to calculate interest on the loan.
\nField Number         **045**
\nMnemonic             **INTERESTTYPE**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-entered**
\nHelp File            **01345**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0 (Daily 365 day)
\n   Calculate loan interest on a 365-day basis. Symitar Quest calculates interest as follows: Interest Rate ÷ 365 x Loan Balance x the number of days since the Interest Date.##### 1 (Monthly 360 day)
\n   Calculate loan interest on a 360-day basis. This option is normally used for real estate loans only and is designed so that the payment schedule is known to the penny from the date the loan is funded. Interest calculations depend on the value in the Payment Frequency field:
\n       - If the Payment Frequency field value is set to (1) Annual, Symitar Quest calculates interest as follows: Loan Balance X Interest Rate.
\n       - If the Payment Frequency field value is set to (2) Semiannually, Symitar Quest calculates interest as follows: Loan Balance X Interest Rate ÷2.
\n       - If the Payment Frequency field value is set to (3) Quarterly, Symitar Quest calculates interest as follows: Loan Balance X Interest Rate ÷ 4.
\n       - If the Payment Frequency field value is set to (4) Monthly, Symitar Quest calculates interest as follows: Loan Balance X Interest Rate ÷ 12.
\n       - If the Payment Frequency field value is set to (5) Semimonthly, Symitar Quest calculates interest as follows: Loan Balance X Interest Rate ÷ 24.
\n   
\n       - Under this option, Symitar Quest does not accept extra principal reduction amounts on payments that are more than one payment past due. Therefore, if the loan is four months past due and you want to post four monthly payments, you must post four separate Loan Payment (LP) transactions.
\n   
\n       - Partial payments will not be accepted during the Loan Payment (LP) transaction for loans of this interest type unless your credit union has the Allow Partial Payment parameter set to Yes in External Loan Processing Parameters. If you absolutely have to post a partial payment, then you must use the Loan Payment Adjustment (LPZ) transaction and post it as an adjustment. Mortgage servicing rules generally do not allow for the application of partial payments. Symitar Quest does not allow the member to make a partial payment by transfer from shares. The batch programs that perform loan payments does not take partial payments on 360-day interest loans, regardless of how you answer any of the options at the Take Partial Payments? prompt in the Daily Posting batch program.
\n   
\n       - There are two times when 360-day loans are treated like 365-day loans:
\n       - When the loan is initially funded, a special interest payment is taken that pays the interest up to one month before the first scheduled payment due date.
\n       - When the loan is paid off, the interest due after the last scheduled payment is calculated using the normal 365-day method (see the Interest Due field description).
\n       - Important: 360-day interest loans of this type must have the following fields set as specified:
\n       - The Interest Type field value must be set to 1 (Monthly 360 day).
\n       - The Payment Frequency field value must be set to one of the following:
\n       - (1) Annual
\n       - (2) Semi-annual
\n       - (3) Quarterly
\n       - (4) Monthly
\n       - (5) Semi-monthly
\n       - The Payment Skips field value must be set to 0.
\n       - The Due Day 1 field value (and the Due Day 2 field value, if semimonthly) must be filled in.
\n       - The Due Date Advance Code field value must be set to one of the following:
\n       - (0) Use Max Due Date Advance Period with the Max Due Date Advance Period field value set to 1
\n       - (0) Use Max Due Date Advance Period with the Max Due Date Advance Period field value set to 1 and the Initial BCD Setting Options field value set to (1) Use Loan Due Date (One when due)
\n       - The Initial BCD Setting Option field value must be (1) Use Loan Due Date (One when due) to use the One when due functionality.
\n       - The New Loan Due Date Code field value should be set to 0.
\n       - The Loan Code field value should be set to (0) Closed End.
\n       - The Payment Calc Type field value must be set to (0) No Change.
\n       - The DQ Calculation Method field value must be set to (0) Payment Buckets Only Contain Changes.
\n##### 2 (Daily 365.25 Day Interest)
\n   Calculate loan interest on a 365.25-day basis. This option is normally used for student loans. Symitar Quest calculates interest as follows: Interest Rate ÷ 365.25 x Loan Balance x number of days since the Interest Date.##### 3 (Daily Billed Interest I)
\n   This interest type is valid only for interest-only loans. During Statement Cutoff Processing, Symitar Quest calculates interest as follows: Interest Rate / 365 x Loan Balance x number of days since the Interest Date.
\n       - Symitar Quest puts this amount of interest in the Int Unpaid Billed field.
\n       - Symitar Quest puts this interest amount, less any delinquent interest amount, in the Payment field.
\n       - Symitar Quest adjusts the Payment Bucket field values accordingly.
\n       - Symitar Quest subtracts any interest payments from the Int Unpaid Billed field value, until it reaches 0.00 (zero), after which Symitar Quest applies any further payments to the Billed Fee Unpaid field value and then to principal, even if there is additional accrued interest.
\n       - For delinquent loans when the system date has reached the balloon date, or for non-delinquent loans when the system date has reached the due date prior to the balloon date and the due date equals the balloon date, the Daily Posting batch program automatically sets this field value to 0, the Payment Type field value to (1) Level Principal, and the Payment field value to the loan balance. This process causes the entire loan balance plus all accrued interest to become due and payable on the balloon date.
\n       - Example:
\n       - If the date in the Due Date and Balloon Date fields of the Loan record equal 03/25/2019, the loan balloons when you run the Daily Posting batch program on 02/25/2019, which is the due date prior to the balloon date.
\n   
\n       - Daily billed interest loans of this type must have the following fields set as specified:
\n   
\n       - This field value must be set to 3.
\n       - The Payment Type field value must be set to (0) Level Payment. This differs from other interest-only loans, which are set to (1) Level Principal.
\n       - The Payment Frequency field value must be set to (4) Monthly.
\n       - The Due Date Advance Code field value must be set to (0) Use Max Due Date Advance Period with the Max Due Date Advance Period field value set to 1.
\n       - The DQ Calculation Method field value must be set to (1) Payment Buckets Are Calculated Monthly.
\n       - The Balloon Date field value must be set to the loan's due date. For example, if the loan's due date is the 15th, the Balloon Date field value must also be set to the 15th. Since these loans are interest-only loans, there must be a balloon date.
\n       - Important: You must run Statement Cutoff Processing on a monthly basis for loans with this interest type, and you must run it for the statement group identified in the Loan record a minimum of 10 days before the loan's due date. By regulation, you may need to run the program more than 10 days before the due date, but 10 days is the minimum to ensure that the statement can be generated and sent to the member before the loan payment is due.
\n##### 4 (Daily Billed Interest II)
\n   This interest type is valid only for interest-only loans. During Statement Cutoff Processing, Symitar Quest calculates interest as follows: Interest Rate / 365 x Loan Balance x number of days since the Interest Date.
\n       - Symitar Quest puts this amount of interest from the Int Unpaid Billed field.
\n       - Symitar Quest puts this interest amount, less any delinquent interest amount, in the Payment field.
\n       - Symitar Quest adjusts the Payment Bucket field values accordingly.
\n       - Symitar Quest subtracts any interest payments from the Int Unpaid Billed field value, until it reaches 0.00 (zero), after which Symitar Quest applies any further payments to the Billed Fee Unpaid field value and then to principal, even if there is additional accrued interest.
\n       - When the system date has reached the balloon date, the Daily Posting batch program automatically sets this field value to 0, the Payment Type field value to (1) Level Principal, and the Payment field value to the loan balance. This causes the entire loan balance plus all accrued interest to become due and payable on the balloon date.
\n       - Daily billed interest loans of this type must have the following fields set as specified:
\n       - This field value must be set to 4.
\n       - The Payment Type field value must be set to (0) Level Payment. This differs from other interest-only loans, which are set to (1) Level Principal.
\n       - The Payment Frequency field value must be set to (4) Monthly.
\n       - The Due Date Advance Code field value must be set to (0) Use Max Due Date Advance Period with the Max Due Date Advance Period field value set to 1.
\n       - The DQ Calculation Method field value must be set to (1) Payment Buckets Are Calculated Monthly.
\n       - The Balloon Date field value must be set to the loan's due date. For example, if the loan's due date is the 15th, the Balloon Date field value must also be set to the 15th. Since these loans are interest-only loans, there must be a balloon date.
\n       - Important: You must run Statement Cutoff Processing on a monthly basis for loans with this interest type, and you must run it for the statement group identified in the Loan record a minimum of 10 days before the loan's due date. By regulation, you may need to run the program more than 10 days before the due date, but 10 days is the minimum to ensure that the statement can be generated and sent to the member before the loan payment is due.
\n##### 5 (Actual/360)
\n   Calculate daily interest on a 360-day basis. Symitar Quest calculates interest as follows: Interest Rate ÷ 360 x Loan Balance x number of days since the Interest Date.##### 6 (Daily Billed 360)
\n   This interest type is valid only for interest-only loans. Use this interest type for loans where you bill to the member the amount of interest due at the time of statement cutoff. During Statement Cutoff Processing, Symitar Quest calculates daily interest as follows: Interest Rate ÷ 360 x Loan Balance x number of days since the Interest Date.
\n       - Symitar Quest puts this amount of interest in the Int Unpaid Billed field.
\n       - Symitar Quest puts this interest amount, less any delinquent interest amount, in the Payment field.
\n       - Symitar Quest adjusts the Payment Bucket field values accordingly.
\n       - Symitar Quest subtracts any interest payments from the Int Unpaid Billed field value, until it reaches 0.00 (zero), after which Symitar Quest applies any further payments to the Billed Fee Unpaid field value and then to principal, even if there is additional accrued interest.
\n       - After the last standard payment has been received, if the due date matches the value in the Balloon Date field, the Daily Posting batch program automatically sets this field value to 5, the Payment Type field value to (1) Level Principal and the Payment field value to the loan balance. However, if the last periodic payment is not received, then the Daily Posting batch program also automatically sets this field value to the Payment Type field value and the Payment field value to the loan balance when the system date matches the balloon date. This causes the entire loan balance plus all accrued interest to become due and payable on the balloon date.
\n       - Daily billed interest loans of this type must have the following fields set as specified:
\n       - This field value must be set to 6.
\n       - The Payment Type field value must be set to (0) Level Payment. This differs from other interest-only loans, which are set to (1) Level Principal.
\n       - The Payment Frequency field value must be set to (4) Monthly.
\n       - The Due Date Advance Code field value must be set to (0) Use Max Due Date Advance Period with the Max Due Date Advance Period field value set to 1.
\n       - The DQ Calculation Method field value must be set to (1) Payment Buckets Are Calculated Monthly.
\n       - The Balloon Date field value must be set to the loan's due date. For example, if the loan's due date is the 15th, the Balloon Date field value must also be set to the 15th. Since these loans are interest-only loans, there must be a balloon date.
\n       - Important: You must run Statement Cutoff Processing on a monthly basis for loans with this interest type, and you must run it for the statement group identified in the Loan record a minimum of 10 days before the loan's due date. By regulation, you may need to run the program more than 10 days before the due date, but 10 days is the minimum to ensure that the statement can be generated and sent to the member before the loan payment is due.
\n##### 7 (Actual/364)
\n   Calculate daily interest on a 364-day basis as shown below:
\n       - Biweekly	Weekly
\n       - Per Diem = rate x balance/364 Accrual = Per Diem X # of days to accrue	Per Diem = rate x balance/364 Accrual = Per Diem x # of days to accrue
\n       - Actual/364 day interest loans of this type must have the following set as specified:
\n       - In the Interest Type Parameters, set the Interest Type Method parameter to (1) Actual/364 (364 Day).
\n       - In the Late Charge Type Parameters, set a number in Late Charge Grace Days parameter.
\n       - This field value must be set to 7.
\n       - The Payment Frequency field value must be set to (8) Biweekly or (9) Weekly.
\n       - The Payment Skips field value must be set to 0.
\n       - The Due Day 1 field value must be left blank for weekly and biweekly.
\n       - The Due Date Advance Code field value must be set to (0) Use Max Due Date Advance Period with the following:
\n       - The Max Due Date Advance Period field value set to 1.
\n       - The Initial BCD Setting Option field value set to (0) Use Current Cycle Date - 1 Period + 1 Day or (1) Use Loan Due Date (One when due).
\n       - The New Loan Due Date Code field value must be set to (0) No Change.
\n       - The Loan Code field value must be set to (0) Closed End.
\n       - The Payment Calc Type field value must be set to (0) No Change.
\n       - The DQ Calculation Method field value must be set to (0) Payment Buckets Only Contain Changes.
\n   
\n       - You must also install RD.LOANPROJECT PowerOn specfile to create the job file for transfers.
\n##### 8 (Scheduled/364)
\n   Calculate daily interest on a 364-day basis as shown below:
\n       - Biweekly	Weekly
\n       - Per Diem = rate x balance/364 Accrual = Per Diem X 14	Per Diem = rate x balance/364 Accrual = Per Diem x 7
\n       - Scheduled/364 day interest loans of this type must have the following set as specified:
\n       - In the Interest Type Parameters, set the Interest Type Method parameter to (1) Scheduled/364 (364 Day).
\n       - In the Late Charge Type parameters, set a number in the Late Charge Grace Days.
\n       - This field value must be set to 8.
\n       - The Payment Frequency field value must be set to (8) Biweekly or (9) Weekly.
\n       - The Payment Skips field value must be set to 0.
\n       - The Due Day 1 field value must be blank for weekly and biweekly.
\n       - The Due Date Advance Code field value must be set to (0) Use Max Due Date Advance Period with the following:
\n       - The Max Due Date Advance Period field value must be set to 1.
\n       - The Initial BCD Setting Option field value must be set to (0) Use Current Cycle Date - 1 Period + 1 Day or (1) Use Loan Due Date (One when due).
\n       - The New Loan Due Date Code field value must be set to (0) No Change.
\n       - The Loan Code field value must be set to (0) Closed End.
\n       - The Payment Calc Type field value must be set to (0) No Change.
\n       - The DQ Calculation Method field value must be set to (0) Payment Buckets Only Contain Changes.
\n   
\n       - You must also install RD.LOANPROJECT PowerOn specfile to create the job file for transfers.
\n##### 9
\n   This option does not display since it is reserved for future system use.##### 10–8999 (Credit Card Interest)
\n   A credit union-defined interest type to calculate loan interest according to the parameters defined for that interest type. You can use this option for credit card loans only.
\n       - You cannot enter a value 10–8999 in this field when a Loan Rate Change record exists under the loan. If you make such an entry, Symitar Quest displays this error message:
\n       - This Interest Type cannot be set when Rate Change record exists
\n       - Check the specified interest type parameter fields CA, BT, and PU Interest Period Option to confirm the interest calculation. It will be defined in one of the following ways:
\n       - Select the (0) Monthly option to use the following formula to calculate interest: average daily balance x (interest rate/12)
\n       - Select the (1) Daily option to use the following formula to calculate interest: average daily balance x days in period x (interest rate/365)
\n       - Performing these calculations in Statement Cutoff Processing results in interest rounding to the nearest penny. Amounts in the range of $0.0000–0.0049 round down to $0.00. Amounts in the range of $0.0050-.0099 round up to $0.01.
\n       - Important: You can define interest calculations for up to 8990 different interest types (10-8999) in the Interest Type Parameters in the Parameter Manager. You must define the calculation for any interest type used at your credit union except options 0–9. You must specify a defined interest type to proceed. If you specify an interest type you have not defined, Symitar Quest displays this message:
\n       - Undefined Interest Type
\n##### 9000–9999
\n   Reserved for future system-defined use.
\nIf you select an interest type of 0, 2, 3, 4, 6, 7, or 8, which are each calculated daily, Symitar Quest performs the interest calculation based on the rates currently available for that loan.
\n
\nIf you use the MBS Multiple Repayment Programs Per Loan module and have a Schedule record associated with this Loan record that is active, the value of this field is copied from the Schedule record.
\n
\nIf you select an option in the Payment Application Method field that uses a mortgage payment order (10-9999), and this field value is not set to 1 or 8, Symitar Quest sends an error.
\n
\nPayment Application Methods parameters (2) Alternate Standard Method I and (3) Alternate Standard Method II do not apply to a Loan record when this field value is set to 1 or 8.
\n***Important:***  Payment calculations by the Statement Cutoff Processing batch program, for loans with interest types 3, 4, or 6, may give unexpected results when you do not clear the Partial Payment field. To clear the Partial Payment field, create a job file to run the CLEAR.PARTIAL.PAY PowerOn specfile before running the Statement Cutoff Processing batch program. This non-library specfile and usage instructions are on the For Clients portal. Click CLEAR.PARTIAL.PAY.zip, or follow this path: Products & Services > Symitar > Symitar Downloads > PowerOn Programs.
`)
loanRecordFields.set("interestrate", ` 
\n### Interest Rate
\nThis field stores the interest rate charged for the loan.
\nField Number         **046**
\nMnemonic             **INTERESTRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **01346**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nEnter the interest rate charged for the loan. Symitar Quest limits the rate to three digits after the decimal point. If you specify a value in the Interest Type field of 10-8999, Symitar Quest uses the rate specified for that interest type in the Interest Type Parameters.
\n***Important:***  If the Loan Code field value is set to (6) LOC Combination, the Interest Rate field value applies to Segment 0, not the entire loan.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Interest Rate field from the specified Application record. If you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Interest Rate field of the loan calculation screen.
`)
loanRecordFields.set("interestdate", ` 
\n### Interest Date
\nSymitar Quest stores the most recent date from which interest accrues in this field, which means interest has been calculated on this loan through the previous day (but not including today).
\nField Number         **049**
\nMnemonic             **INTERESTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01349**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAny interest accrued but not collected as of the day before the value in this field is added to the amount in the Interest Unpaid field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("interestunpaid", ` 
\n### Interest Unpaid
\nSymitar Quest stores the amount of unpaid interest due on the loan in this field as of the day before the loan's Interest Date field value.
\nField Number         **050**
\nMnemonic             **INTERESTUNPAID**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01350**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nA Loan Payment (LP) transaction affects this field as follows:
\n   - If the loan has an interest type of 0 (Daily 365 Day), 2 (Daily 365.25), 3 (Daily Billed I), 4 (Daily Billed II), 5 (Actual/360), 6 (Daily Billed 360), or 7 (Actual/364), Symitar Quest:
\n   - Calculates the interest that has accrued from the Interest Date field value through the day before the effective date of the payment
\n   - Adds the calculated amount to this field to determine the total interest due
\n   - Subtracts the amount of the loan payment applied to interest from the total interest due to determine the new value for this field
\n   - Important: For loans with an interest type of 3, 4, and 6, the value of this field is always greater than $0.00 after a regular payment is received.
\n   - If the loan has an interest type of 1 (Monthly 360) or 8 (Scheduled 364), the value in this field after a completed payment is always $0.00. Symitar Quest treats all payments to loans of this type as unapplied partial payments until a full or threshold payment is received. Because interest on these loans is calculated and collected per payment, it is impossible for a full payment to fail to satisfy all interest due.
\n   - If the loan has an interest type of 10-8999 (Credit Card Interest), the value in this field is reduced by the amount of interest received until it reaches 0.00. Once the value in this field is $0.00, the system does not populate this field again until Statement Cutoff Processing runs.
\nA Loan Advance (LA) transaction affects this field as follows:
\n   - If the loan has an interest type of 0 (Daily 365 Day), 2 (Daily 365.25), 3 (Daily Billed I), 4 (Daily Billed II), 5 (Actual/360), 6 (Daily Billed 360), or 7 (Actual/364), Symitar Quest adds the interest that has accrued from the Interest Date field value through the day before the effective date of the advance to the amount stored in this field to determine the new value of interest.
\n   - If the loan has an interest type of 10-8999 (Credit Card Interest), the value in this field is unaffected by advances. The Statement Cutoff Processing batch program calculates all interest due for credit card loans.
\n***Important:***  If the loan has an interest type of 1 or 8, you cannot perform an advance.
\n
\nA Loan Refinance (LR) transaction always results in a value of $0.00 in this field because the transaction automatically adds any interest unpaid as of the date of the refinance to the principal balance of the loan.
\n
\nA Loan Segment Transfer (LG) transaction calculates unpaid interest on all segments from the Interest Date field through the day before the effective date of the transfer and populates this field with the total interest due on all segments.
\n
\nRate changes, whether posted by Rate Change Processing (immediate rate changes) or with the Daily Posting batch program (scheduled future rate changes) updates this field by adding the amount of interest accrued from the last interest date through the day before the rate change takes effect. (Exception: Loans with interest types of 10-8999.)
\nThe Statement Cutoff Processing batch program updates this field as follows:
\n   - For loans with an interest type of 3 (Daily Billed I), 4 (Daily Billed II), and 6 (Daily Billed 360), Symitar Quest calculates interest accrued from the interest date through today and adds that amount to any existing amount in this field.
\n   - For loans with an interest type of 10-8999 (Credit Card Interest), Symitar Quest calculates the finance charge from the interest date through today and adds that amount to this field. If the Statement Cutoff Processing batch program calculates a cash advance transaction finance charge for the loan, Symitar Quest adds the amount of that charge to this field.
\n
\nFor loans with a Loan Code field value of (6) LOC Combination, this field is the total amount of unpaid interest charged to all segments. Each segment has its own Interest Unpaid field that stores the interest due on that segment. Symitar Quest calculates the value of the Seg 0 Interest Unpaid field by subtracting the amounts in all other segment's Interest Unpaid fields from the amount in this field. If you want to adjust the amount of interest due on Segment 0, you must manually add or subtract the difference to or from the value in that Interest Unpaid field. You cannot perform file maintenance on the Seg 0 Interest Unpaid field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("intunpaidbilled", ` 
\n### Int Unpaid Billed
\nSymitar Quest stores the total amount of unpaid interest in this field for which the member has been billed.
\nField Number         **149**
\nMnemonic             **INTUNPAIDBILLED**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01449**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is only used for loans with an interest type of 3 (Daily Billed I), 4 (Daily Billed II), or 6 (Daily Billed 360). During Statement Cutoff Processing, Symitar Quest:
\n   - Sets the Payment Type, Due Date Advance Code, Max Due Date Advance Period, and DQ Calculation Method fields to the appropriate values if they are not set properly
\n   - Calculates the amount of interest due up through the cutoff date
\n   - Adds this amount to any amount already in this field
\n   - Sets the loan's Interest Date field value to the statement cutoff effective date plus one day
\n   - Sets the loan's Payment field to the amount of the Unpaid Billed field value
\n   - Rolls the existing payment buckets and sets the Pmt Bucket Amt 1 field value to this calculated field and the Pmt Bucket Due Date 1 field to the due date to which this payment amount applies
\n
\nWhen a user performs a Loan Payment (LP) transaction on a loan with any of the daily billed interest types, Symitar Quest caps the amount of interest collected at the amount in this field. Any additional funds apply first to any amount in the Billed Fee Unpaid field and then to principal. Any interest that accrues between the cutoff date and the payment date is collected in the next billing cycle.
\n
\nAlthough this field is not used for payment calculations on non-daily billed interest loans, any monetary adjustment to interest for any interest type updates this field. For example, if you perform a Void (VO) transaction on a loan with an interest type of 0, this field is populated with the amount of interest that was voided. Because this field has no effect on loans that do not use daily billed interest types, you do not need to manually correct this field.
\n
\nFor loans with a loan code of (6) LOC Combination, this field value is the total interest unpaid billed for all daily billed segments, including Segment 0. Each segment has its own Int Unpaid Billed field that stores the billed interest due on that segment if it has a daily billed interest type. Symitar Quest calculates the value of the Seg 0 Int Unpaid Billed field by subtracting the amounts in all other segments' Int Unpaid Billed fields from the amount in this field. If you want to adjust the amount of billed interest due on Segment 0, you must manually add or subtract the difference to or from the value in that Int Unpaid Billed field. You cannot perform file maintenance on the Seg 0 Int Unpaid Billed field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("interestytd", ` 
\n### Interest Paid YTD
\nSymitar Quest stores the total of all interest paid on the loan in this field during the current year to date.
\nField Number         **042**
\nMnemonic             **INTERESTYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01342**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a Loan Payment (LP) teller transaction is posted to the loan, Symitar Quest adds the interest amount to the value in this field. The first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the value in this field to the Interest Paid Last Year field and resets this field to 0.00.
\n
\nFor loans that have the Loan Code field set to (6) LOC Combination, this field is the total of all interest paid for all segments, including Segment 0, during the current year to date. If you or Symitar Quest performs file maintenance on the same field on an associated Segment record, Symitar Quest updates this field accordingly.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("interestlastyear", ` 
\n### Interest Paid Last Year
\nSymitar Quest stores the total of all interest paid on the loan in this field during the previous year.
\nField Number         **043**
\nMnemonic             **INTERESTLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01343**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the amount in the Interest Paid YTD field to this field.
\n
\nFor loans that have the Loan Code field set to (6) LOC Combination, this field is the total interest paid for all segments last year, including Segment 0. If you or Symitar Quest performs file maintenance on the same field on an associated Segment record, Symitar Quest updates this field accordingly.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("interestfromopen", ` 
\n### Interest From Open
\nSymitar Quest stores the total of all interest paid on the loan in this field since the loan was opened.
\nField Number         **044**
\nMnemonic             **INTERESTFROMOPEN**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01344**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a Loan Payment (LP) teller transaction is posted to the loan, Symitar Quest adds the interest amount to the value in this field. The value in this field accumulates throughout the loan term.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("stmtintfromopen", ` 
\n### Stmt Interest From Open
\nSymitar Quest stores the amount in the Interest From Open field at the time of statement cutoff.
\nField Number         **319**
\nMnemonic             **STMTINTFROMOPEN**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31151**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("splitrate", ` 
\n### Split Rate
\nTo encourage members to carry a higher loan balance, some credit unions charge a lower interest rate once the loan balance reaches or exceeds a specified amount. This field stores that lower interest rate.
\nField Number         **047**
\nMnemonic             **SPLITRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01347**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nThis rate is best understood as a tiered rate, since the rate applies to the entire loan balance.
\nEnter the lower interest rate that should take effect when the loan balance reaches or exceeds the amount in the value in the Split Rate Balance field. If the value in the Split Rate Balance field is greater than zero, Symitar Quest determines which rate to use in interest calculations as follows:
\n   - If the value in the Loan Balance field is less than the value of the Split Rate Balance field, Symitar Quest calculates loan interest at the interest rate specified for the loan.
\n   - If the value in the Loan Balance field is equal to or greater than the value in the Split Rate Balance field, Symitar Quest calculates loan interest at the split rate specified for the loan.
\n
\nSee Interest Types for further details on this process.
`)
loanRecordFields.set("splitratebalance", ` 
\n### Split Rate Balance
\nTo encourage members to carry a higher loan balance, some credit unions charge a lower interest rate once the loan balance reaches or exceeds a specified amount. This field stores the loan balance that triggers the lower interest rate.
\nField Number         **048**
\nMnemonic             **SPLITRATEBALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01348**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis rate applies to the split amount loan balance.
\n
\nEnter an amount. Once the value in the Loan Balance field reaches or exceeds this amount, Symitar Quest uses the Split Rate field value to calculate loan interest. See Interest Types for further details on this process.
`)
loanRecordFields.set("variablerateindicator", ` 
\n### Variable Rate Indicator
\nThis field stores a code to identify variable rate loans with an interest type of 0-9 in the interest rate calculation section on member statements.
\nField Number         **314**
\nMnemonic             **VARIABLERATEINDICATOR**
\nData Type            **Code to 1**
\nSource               **User-entered or System-entered**
\nHelp File            **31146**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Fixed Rate
\n   The loan is a fixed rate loan.##### (1) Variable Rate
\n   The loan is a variable rate loan.
\n   
\n       - For this indicator, the annual percentage rate (APR) is noted as being variable in the Interest Charge Calculation section at the end of the statement. Regulation Z requires that this information appears on the tabular format statement for open-end consumer loans with variable rates.
\n
\nFor loans with an interest type of 10-8999, this field is overridden by the Variable Rate Indicator parameter in the Interest Type Parameters.
\n***Important:***  If the Interest Rate Index field is set to a value other than the (0) Fixed Rate default value, the statement data file is updated with the variable rate indicator flag.
`)
loanRecordFields.set("interestrateindex", ` 
\n### Interest Rate Index
\nThis field stores a code that identifies the rate index to specify the base rate and frequency of changes.
\nField Number         **081**
\nMnemonic             **INTERESTRATEINDEX**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01381**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Fixed Rate
\n   Use a fixed rate for interest calculations. Depending on the values in the Interest Type, Interest Rate, Split Rate, and Split Rate Balance fields, Symitar Quest uses either the interest rate, the split rate, or the calculation defined in the Interest Type Definitions parameters to calculate the interest on the loan.##### 1–99
\n   The credit union-defined index code for a variable rate loan.
\n   
\n       - There are options in a drop-down list based on the defined Interest Rate Index parameters. The list displays the value in the Description parameter for each Interest Rate Index that has the Defined Code parameter set to (1) Defined Interest Rate Index.
\n   
\n       - If you have not defined a value in the Interest Rate index, you cannot save the Loan record that you are creating or revising.
\n   
\n       - You can use the rate index to specify the base rate and frequency of changes for variable rate loans. For example, you could define the following rate indexes:
\n       - 01 Based on 6-month T-Bill rate, changed quarterly
\n       - 02 Based on 6-month T-Bill rate, changed monthly
\n       - 03 Based on credit union cost of funds, changed semiannually
\n   
\n       - These codes are used by the Rate Change Processing batch program. You can enter the base rate in the program or reference it from the Interest Rate Index Parameters.
\n   
\n       - Rate Change Processing then calculates the new interest rate for the loans as follows:
\n       - Adds the interest rate margin to the base rate
\n       - Adds the risk rate
\n       - Subtracts the discount rate
\n       - If necessary, adjusts the calculated interest rate as follows:
\n       - If the calculated rate is less than the value in the Interest Rate Minimum field, the value in the Interest Rate Minimum field becomes the interest rate.
\n       - If the calculated rate is greater than the value in the Interest Rate Maximum field, the value in the Interest Rate Maximum field becomes the interest rate.
\n       - If the calculated rate is greater than the value in the Periodic Cap Start Rate field plus the value in the Periodic Cap field, the sum of the values in the Periodic Cap Start Rate field and the Periodic Cap field becomes the interest rate.
\n       - Stores the resulting rate in the Interest Rate field
\n***Important:***  If the Loan Code field is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
\n
\nFor complete information on the Rate Change Processing batch program, see Rate Change Processing.
`)
loanRecordFields.set("interestratemargin", ` 
\n### Interest Rate Margin
\nThis field stores the points to be added to the base rate in the rate index to determine the value in the Interest Rate field.
\nField Number         **082**
\nMnemonic             **INTERESTRATEMARGIN**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01382**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nThe Interest Rate Margin and Interest Rate Index fields work together to control how Symitar Quest determines variable interest rates based on a credit union-defined index. Enter the points to be added to the base rate in the rate index to determine the value in the Interest Rate field. For example, if you specify a value in this field of 3.500%, Symitar Quest adds 3.5% to the base rate for the index to determine the Interest Rate field value.
\n***Important:***  If the Loan Code is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
`)
loanRecordFields.set("interestratemarginsign", ` 
\n### Interest Rate Margin Sign
\nThis field stores a code that specifies that a loan interest rate is a specific percentage above or below the index rate.
\nField Number         **133**
\nMnemonic             **INTERESTRATEMARGINSIGN**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01433**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Positive Margin
\n   The loan interest rate is a specific percentage above the index rate.##### (1) Negative Margin
\n   The loan interest rate is a specific percentage below the index rate.
\nThis field affects the Rate Change Processing batch program if you change rates based on the value in the Interest Rate Index field.
\n***Important:***  If the Loan Code is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
`)
loanRecordFields.set("interestratemin", ` 
\n### Interest Rate Minimum
\nThis field indicates the minimum interest rate that Symitar Quest uses to calculate the loan.
\nField Number         **084**
\nMnemonic             **INTERESTRATEMIN**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01384**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\n***Important:***  If the Loan Code is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
`)
loanRecordFields.set("interestratemax", ` 
\n### Interest Rate Maximum
\nThis field stores the maximum rate Symitar Quest should use to calculate interest for this loan.
\nField Number         **083**
\nMnemonic             **INTERESTRATEMAX**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01383**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\n***Important:***  If the Loan Code is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
`)
loanRecordFields.set("riskrate", ` 
\n### Risk Rate
\nThis field stores a value that increases the calculated margin rate when the Rate Change Processing batch program calculates the new interest rate for non-credit card loans tied to an interest rate index.
\nField Number         **141**
\nMnemonic             **RISKRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01441**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nThe value in this field is added to the base rate when the Rate Change Processing batch program calculates the new interest rate for non-credit card loans tied to an interest rate index.
\n
\nSymitar Quest takes the new specified base rate, adds or subtracts the margin rate, adds the risk rate, and subtracts the discount rate to arrive at the new interest rate when you run Rate Change Processing for loans using option (2) Select by Interest Rate Index or (5) Select by Next Rate Change Date.
\n***Important:***  If the Loan Code is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
`)
loanRecordFields.set("intpaidtodate", ` 
\n### Int Paid To Date
\nSymitar Quest stores the date in this field that interest was paid for the most recently collected interest payment.
\nField Number         **258**
\nMnemonic             **INTPAIDTODATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01558**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nOne of the reporting requirements for SBA-guaranteed loans is to report for each payment the dates interest was collected from and to. The interest paid to date becomes the interest paid from date when the next payment is collected.
\n
\nThis field updates only when the Member Business Services SBA 1502 Reporting module is turned on and an SBA GP Number is entered into the Loan record.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("intpaidpartialdayamt", ` 
\n### Int Paid To Partial
\nSymitar Quest stores the amount of any partial day's interest, relating to the entire principal balance of the loan that has been collected and reported to SBA as of the last date an interest payment was received.
\nField Number         **259**
\nMnemonic             **INTPAIDPARTIALDAYAMT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01559**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIn a normal situation when the collected loan payment covers the accrued interest as of the date the payment is received, this field contains 0.00.
\n
\nThis field reflects any partial day's interest collected on the entire loan.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("discountrate", ` 
\n### Discount Rate
\nThis field stores a value that decreases the calculated margin rate when the Rate Change Processing batch program calculates the new interest rate for non-credit card loans tied to an interest rate index.
\nField Number         **142**
\nMnemonic             **DISCOUNTRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01442**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nThe value in this field is subtracted from the base rate when the Rate Change Processing batch program calculates the new interest rate for non-credit card loans tied to an interest rate index.
\n
\nSymitar Quest takes the new specified base rate, adds or subtracts the margin rate, adds the risk rate, and subtracts the discount rate to arrive at the new interest rate when you run Rate Change Processing for loans using option (2) Select by Interest Rate Index or (5) Select by Next Rate Change Date.
\n***Important:***  If the Loan Code is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
`)
loanRecordFields.set("periodiccap", ` 
\n### Periodic Cap
\nThis field stores a limit on changes for variable rate loans.
\nField Number         **119**
\nMnemonic             **PERIODICCAP**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01419**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nFor more information, see Rate Change Processing.
\n***Important:***  If the Loan Code is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
`)
loanRecordFields.set("periodicstartrate", ` 
\n### Periodic Cap Start Rate
\nSymitar Quest stores the interest rate in this field as of the value in the Periodic Cap Start Date field.
\nField Number         **120**
\nMnemonic             **PERIODICSTARTRATE**
\nData Type            **Rate**
\nSource               **System-entered**
\nHelp File            **01420**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nSymitar Quest maintains this field for loans with a value in the Periodic Cap field.
\n
\nThe first time you run the Rate Change Processing batch program during the periodic cap period, Symitar Quest updates this field with the interest rate before the change. If you run Rate Change Processing more than once during the periodic cap period for the loan, Symitar Quest does not change this field again.
\n***Important:***  If the Loan Code is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("periodicstartdate", ` 
\n### Periodic Cap Start Date
\nSymitar Quest stores the starting date in this field from which the current period cap starts.
\nField Number         **121**
\nMnemonic             **PERIODICSTARTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01421**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nSymitar Quest maintains this field for loans with a value in the Periodic Cap field.
\n
\nWhen you run the Rate Change Processing batch program, Symitar Quest updates this field with the value in the Original Loan Date field, if blank, or with the current value in this field plus the value in the Periodic Cap Frequency field if the system run date is greater than the current date in this field plus the value in the Periodic Cap Frequency field.
\n***Important:***  If the Loan Code is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("periodicfrequency", ` 
\n### Periodic Cap Frequency
\nThis field stores the frequency associated with the Periodic Cap field.
\nField Number         **210**
\nMnemonic             **PERIODICFREQUENCY**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **01510**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Annual
\n   The period for which the periodic cap applies is one year.##### (1) Semi-Annual
\n   The period for which the periodic cap applies is six months.##### (2) Quarterly
\n   The period for which the periodic cap applies is three months.##### (3) Monthly
\n   The period for which the periodic cap applies is one month.
\nWhen you run the Rate Change Processing batch program, Symitar Quest updates the Periodic Cap Start Date field with the value in the Original Loan Date field, if blank, or with the current value in the Periodic Cap Start Date field plus the value in this field if the system run date is greater than the current date in this field plus the value in this field.
\n
\nYou can use this field with our Member Business Services product. See Periodic Caps for more information.
\n***Important:***  If the Loan Code is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
`)
loanRecordFields.set("roundrateto", ` 
\n### Round Rate To
\nThis field stores a value between 0.000 and 999.999 that you want to round the interest rate when Symitar Quest calculates a new interest.
\nField Number         **388**
\nMnemonic             **ROUNDRATETO**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **31219**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nIf you type a value outside between 0.000 and 999.999 (including negative values), Symitar Quest displays this message:
\n   - Value must be between 0.000 and 999.999
\nThe Rate Change Processing batch program uses this field under either of two conditions:
\n   - You answer the Change Type prompt with (2) Create Initial ARM Notice
\n   - You answer the Change Type prompt with (1) Loan Interest Rate Changes and the Selection prompt with (5) Select by Next Rate Change Date
`)
loanRecordFields.set("rateroundingmethod", ` 
\n### Rate Rounding Method
\nThis field stores a code that indicates how Symitar Quest performs rate-rounding when your entry at the Round Rate To field requires the calculation of a new interest rate for this loan.
\nField Number         **387**
\nMnemonic             **RATEROUNDINGMETHOD**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31220**
\nDefault Control      **Yes**
\nDefault Value **2**
\n
\n#### Data Type Descriptions
\n##### (0) Round Down
\n   Round down to the nearest interest rate, depending on your entry for the Round Rate To field of the Loan record.##### (1) Round Up
\n   Round up to the nearest interest rate, depending on how you set the Round Rate To field of the Loan record.##### (2) Round to Nearest
\n   Round either up or down to the nearest interest rate, depending on how you set the Round Rate To field of the Loan record.
\n   
\n       - Select this option if the Round Rate To field value is set to 0.000.
\nThe Rate Change Processing batch program only uses this field under one of these conditions:
\n   - You set the Change Type prompt to (2) Create Initial ARM Notice
\n   - You set the Change Type prompt to (1) Loan Interest Rate Changes and the Selection prompt to (5) Select by Next Rate Change Date
`)
loanRecordFields.set("amortizationterm", ` 
\n### Amortization Term
\nThis field stores the number of months for which the credit union amortized this loan.
\nField Number         **385**
\nMnemonic             **AMORTIZATIONTERM**
\nData Type            **Code to 600**
\nSource               **User-entered**
\nHelp File            **31217**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter the number of months for which the credit union amortized this loan. For example, a 30-year loan displays as 360.
\nYou cannot exit this field until you type a positive number 0–600. If you type any other value, Symitar Quest displays this message:
\n   - Value must be between 0 and 600
\n
\nThis field is for informational purposes only.
`)
loanRecordFields.set("originalrate", ` 
\n### Original Rate
\nThis field stores the original effective APR (Annual Percentage Rate) when the loan was opened.
\nField Number         **109**
\nMnemonic             **ORIGINALRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01409**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nEnter the original effective APR when the loan was opened. You must determine and enter the original rate manually. Symitar Quest does not calculate this value.
`)
loanRecordFields.set("apr", ` 
\n### APR
\nSymitar Quest stores the calculated APR (Annual Percentage Rate) for the loan.
\nField Number         **143**
\nMnemonic             **APR**
\nData Type            **Rate**
\nSource               **System-entered**
\nHelp File            **01443**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nThis field is calculated in a loan projection and stored here if the value in the Prepaid Finance Chg field is non-zero.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("effectiveapr", ` 
\n### Effective APR
\nThis field stores the current effective APR (Annual Percentage Rate) for the loan.
\nField Number         **108**
\nMnemonic             **EFFECTIVEAPR**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01408**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nEnter the current effective APR for the loan. You must determine and enter the effective APR manually. Symitar Quest does not calculate this value. Symitar Quest does not accept negative values in this field.
`)
loanRecordFields.set("prepaidfinancechg", ` 
\n### Prepaid Finance Chg
\nThis field stores any additional amounts included in a loan.
\nField Number         **144**
\nMnemonic             **PREPAIDFINANCECHG**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01444**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter any additional amounts (such as points on a loan, mortgage insurance premiums, flood insurance, etc.), included in a loan.
`)
loanRecordFields.set("origunamortizedfees", ` 
\n### Original Unamortized Fees
\nThis field stores the original amount of unamortized fees.
\nField Number         **125**
\nMnemonic             **ORIGUNAMORTIZEDFEES**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01425**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Loan FASB 91 Accruals posting does not change this field.
`)
loanRecordFields.set("unamortizedfees", ` 
\n### Unamortized Fees
\nThis field stores the total amount of fees to be amortized over the term of the loan, according to FASB 91.
\nField Number         **110**
\nMnemonic             **UNAMORTIZEDFEES**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01410**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nYou must enter the initial fee amount in this field. Then each time the GL Posting batch program amortizes fees or expenses, Symitar Quest reduces the amount in this field by the amount amortized.
\n
\nEnter the amount of the fee or the cost originally incurred when booking the loan. You can enter a positive amount for net fees or you can enter a negative amount for net costs.
`)
loanRecordFields.set("pointsytd", ` 
\n### Points YTD
\nThis field stores the total number of points the borrower paid for this loan during the current year.
\nField Number         **112**
\nMnemonic             **POINTSYTD**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01412**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is used only for real estate loans where the borrower must pay points for the purchase of a primary residence. Your credit union must determine which points are reportable to the IRS. You must update this field manually for reporting on IRS 1098 Mortgage Interest Statements.
\n
\nEnter the total number of points the borrower paid for this loan during the current year. When you run Close Day Processing in a new year, Symitar Quest transfers the amount in this field to the Points Last Year field and resets this field value to 0.00.
`)
loanRecordFields.set("pointslastyear", ` 
\n### Points Last Year
\nSymitar Quest stores the total number of points the borrower paid for this loan during the previous year.
\nField Number         **113**
\nMnemonic             **POINTSLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01413**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is used only for real estate loans where the borrower must pay points for the purchase of a primary residence. Your credit union must determine which points are reportable to the IRS.
\n
\nWhen you run Close Day Processing in a new year, Symitar Quest transfers the amount in the Points YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("prepaymentpenalty", ` 
\n### Prepayment Penalty
\nThis field stores a code that indicates whether information displays on periodic mortgage statements or mortgage coupons.
\nField Number         **373**
\nMnemonic             **PREPAYMENTPENALTY**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31203**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nSymitar Quest does not support prepayment penalties within its core functionality. This field is functional only for periodic mortgage statements and you must update it manually.
\n#### Data Type Descriptions
\n##### (0) No
\n   No extra information displays on periodic mortgage statements or mortgage coupons.##### (1) Yes
\n   A "Yes" displays for "Prepayment Penalty" on periodic mortgage statements or mortgage coupons.
\n`)
loanRecordFields.set("prepaymentpenaltyexpdate", ` 
\n### Prepayment Penalty Exp Date
\nThis field stores the date on which the prepayment penalty expires.
\nField Number         **386**
\nMnemonic             **PREPAYMENTPENALTYEXPDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31218**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nYou cannot enter a date that is after the Maturity Date field value. If you enter a date later than the Maturity Date field value, Symitar Quest displays this error message:
\n   - Prepayment Penalty Exp Date cannot be later than the Maturity Date
\n
\nThe core functionality of Symitar Quest does not support prepayment penalties. Use this field as part of generating the ARM notices. Update the field manually.
`)
loanRecordFields.set("nextratechangedate", ` 
\n### Next Rate Change Date
\nThis field stores the date when the rate may next change.
\nField Number         **374**
\nMnemonic             **NEXTRATECHANGEDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **31204**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nFor adjustable rate loans, enter the date when the rate may next change. When this field is not blank, Symitar Quest captures the month and date for the periodic mortgage statement.
\n
\nSymitar Quest uses the value in the Rate Change Cycle Months field to calculate the next time a rate may change.
\nWhen you run the Rate Change Processing batch program, it creates a Rate Change record if the following conditions are true:
\n   - At the Change Type prompt, you select (1) Loan Interest Rate Change.
\n   - At the Selection prompt, you select (5) Select by Next Rate Change Date.
\n   - At the Perform Rate Change prompt, you select Yes.
\n   - Symitar Quest then updates this field by adding the value of the Rate Change Cycle Months field to the previously existing value in this field.
\n
\nFor Loan records with a value of 1 (Monthly 360 Day) or 8 (Scheduled/364) in the Interest Type field, Symitar Quest calculates this field value using the value in the Due Date 1 field.
`)
loanRecordFields.set("ratechangecyclemonths", ` 
\n### Rate Change Cycle Months
\nThis field stores the number of months before the rate can change.
\nField Number         **375**
\nMnemonic             **RATECHANGECYCLEMONTHS**
\nData Type            **Code to 999**
\nSource               **User-entered**
\nHelp File            **31205**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nEnter the number of months before the rate can change.
\n
\nThe Next Rate Change Date field in the Loan record cannot be blank for Symitar Quest to use this field.
\n
\nIf the value in this field is 0, Symitar Quest makes no changes to the Next Rate Change Date field.
`)
loanRecordFields.set("schdratechangedate", ` 
\n### Schd Rate Change Date
\nThis field stores the date for a future effective rate change from the Future Effective Date prompt in Rate Change Processing.
\nField Number         **204**
\nMnemonic             **SCHDRATECHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered or User-entered**
\nHelp File            **01504**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nFor average daily balance loans with interest types 10–8999, the Future Effective Date prompt in the Rate Change Processing batch program is ignored.
\n
\nSee Future Loan Rate Changes for more information.
\n***Important:***  You should perform file maintenance on this field and the Schd Rate, Schd Split Rate, Schd Split Balance, Schd Cap Start Date, and Schd Cap Start Rate fields only to cancel a future scheduled rate change. We recommend that you do not perform file maintenance on this field for any other reason, since placing a date in this field can cause an unintended rate change.
\n***Important:***  If the Loan Code is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
`)
loanRecordFields.set("schdrate", ` 
\n### Schd Rate
\nThis field stores the rate to be used when a scheduled future rate change is implemented.
\nField Number         **205**
\nMnemonic             **SCHDRATE**
\nData Type            **Rate**
\nSource               **System-entered or User-entered**
\nHelp File            **01505**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nSee Future Loan Rate Changes for more information.
\n***Important:***  You should perform file maintenance on this field and the Schd Rate, Schd Split Rate, Schd Split Balance, Schd Cap Start Date, and Schd Cap Start Rate fields only to cancel a future scheduled rate change. We recommend that you do not perform file maintenance on this field for any other reason, since placing a date in this field can cause an unintended rate change.
\n***Important:***  If the Loan Code is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
`)
loanRecordFields.set("schdsplitbalance", ` 
\n### Schd Split Balance
\nThis field stores the new split balance to be used when a scheduled future rate change is implemented.
\nField Number         **206**
\nMnemonic             **SCHDSPLITBALANCE**
\nData Type            **Money**
\nSource               **System-entered or User-entered**
\nHelp File            **01506**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSee Future Loan Rate Changes for more information.
\n***Important:***  You should perform file maintenance on this field and the Schd Rate, Schd Split Rate, Schd Split Balance, Schd Cap Start Date, and Schd Cap Start Rate fields only to cancel a future scheduled rate change. We recommend that you do not perform file maintenance on this field for any other reason, since placing a date in this field can cause an unintended rate change.
`)
loanRecordFields.set("schdsplitrate", ` 
\n### Schd Split Rate
\nThis field stores the new split rate to be used when a scheduled future rate change is implemented.
\nField Number         **207**
\nMnemonic             **SCHDSPLITRATE**
\nData Type            **Rate**
\nSource               **System-entered or User-entered**
\nHelp File            **01507**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nSee Future Loan Rate Changes for more information.
\n***Important:***  You should perform file maintenance on this field and the Schd Rate, Schd Split Rate, Schd Split Balance, Schd Cap Start Date, and Schd Cap Start Rate fields only to cancel a future scheduled rate change. We recommend that you do not perform file maintenance on this field for any other reason, since placing a date in this field can cause an unintended rate change.
`)
loanRecordFields.set("schdperiodstartrate", ` 
\n### Schd Cap Start Rate
\nThis field stores the value in the Periodic Cap Start Rate field to be used when a scheduled future rate change is implemented.
\nField Number         **208**
\nMnemonic             **SCHDPERIODSTARTRATE**
\nData Type            **Rate**
\nSource               **System-entered or User-entered**
\nHelp File            **01508**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nSee Future Loan Rate Changes for more information.
\n***Important:***  You should perform file maintenance on this field and the Schd Rate, Schd Split Rate, Schd Split Balance, Schd Cap Start Date, and Schd Cap Start Rate fields only to cancel a future scheduled rate change. We recommend that you do not perform file maintenance on this field for any other reason, since placing a date in this field can cause an unintended rate change.
\n***Important:***  If the Loan Code is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
`)
loanRecordFields.set("schdperiodstartdate", ` 
\n### Schd Cap Start Date
\nThis field stores the date in the Periodic Cap Start Date field which Symitar Quest uses as a starting point for determining when to implement a scheduled future rate change.
\nField Number         **209**
\nMnemonic             **SCHDPERIODSTARTDATE**
\nData Type            **Date**
\nSource               **System-entered or User-entered**
\nHelp File            **01509**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSee Future Loan Rate Changes for more information.
\n***Important:***  You should perform file maintenance on this field and the Schd Rate, Schd Split Rate, Schd Split Balance, Schd Cap Start Date, and Schd Cap Start Rate fields only to cancel a future scheduled rate change. We recommend that you do not perform file maintenance on this field for any other reason, since placing a date in this field can cause an unintended rate change.
\n***Important:***  If the Loan Code is set to (6) LOC Combination, this field applies to Segment 0, not the entire loan.
`)
loanRecordFields.set("amortizationschd", ` 
\n### Amortization Schedule
\nThis field stores the numeric value of the set of Amortization Schedules parameters.
\nField Number         **211**
\nMnemonic             **AMORTIZATIONSCHD**
\nData Type            **Code to 9999**
\nSource               **System-entered or User-entered**
\nHelp File            **01511**
\nDefault Control      **Yes**
\nDefault Value **0**
`)
loanRecordFields.set("amortizationschdtype", ` 
\n### Amortize Schd Type
\nThis field stores a code that indicates whether the set of Amortization Schedules parameters is global or local.
\nField Number         **212**
\nMnemonic             **AMORTIZATIONSCHDTYPE**
\nData Type            **Code to 1**
\nSource               **System-entered or User-entered**
\nHelp File            **01512**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Local
\n   The set of Amortization Schedules parameters is local.##### (1) Global
\n   The set of Amortization Schedules parameters is global.
\n`)
loanRecordFields.set("callitemschd", ` 
\n### Call Item Schedule
\nPrimarily for users of the corporate interface: This field stores the numeric value of the set of Call/Put Item Schedules parameters used for call items.
\nField Number         **213**
\nMnemonic             **CALLITEMSCHD**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01513**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nSee Call/Put Item Global Schedules or Call/Put Item Local Schedules in the Parameter Manager book for further details.
`)
loanRecordFields.set("callitemschdtype", ` 
\n### Call Item Schd Type
\nPrimarily for users of the corporate interface: This field stores a code that indicates whether the set of Call Item Schedules parameters specified in the Call Item Schedule field is global or local.
\nField Number         **214**
\nMnemonic             **CALLITEMSCHDTYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01514**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Local
\n   The set of Call Item Schedules parameters is local.##### (1) Global
\n   The set of Call Item Schedules parameters is global.
\n`)
loanRecordFields.set("putitemschd", ` 
\n### Put Item Schedule
\nPrimarily for users of the corporate interface: This field stores the numeric value of the set of Call/Put Item Schedules parameters used for put items.
\nField Number         **232**
\nMnemonic             **PUTITEMSCHD**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01532**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nSee Call/Put Item Global Schedules or Call/Put Item Local Schedules in the Parameter Manager book for further details.
`)
loanRecordFields.set("putitemschdtype", ` 
\n### Put Item Schd Type
\nPrimarily for users of the corporate interface: This field stores a code that indicates whether the set of Call/Put Item Schedules parameters specified in the Put Item Schedule field is global or local.
\nField Number         **233**
\nMnemonic             **PUTITEMSCHDTYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01533**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Local
\n   The set of Call/Put Item Schedules parameters is local.##### (1) Global
\n   The set of Call/Put Item Schedules parameters is global.
\n`)
loanRecordFields.set("currintpayable", ` 
\n### Current Int Payable
\nSymitar Quest stores the total in this field of all outstanding interest that has been accrued, but unpaid, regardless of month from which it is outstanding.
\nField Number         **236**
\nMnemonic             **CURRINTPAYABLE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01536**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIn other words, this field stores the accrued interest from the date in the Interest Date field to the present.
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Loan Interest Accrual parameter in the Miscellaneous Parameters to Yes. To maintain this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
\nIf the field is populated, Symitar Quest updates this field by:
\n   - Subtracting from it the interest when posting a Loan Payment (LP) or Loan Refinance (LR) teller transaction
\n   - Adding the interest back to the field if you subsequently void the transaction
\n   - Recomputing the amount during the next end-of-day calculations after posting a Loan Advance (LA)
\n
\nSymitar Quest does not use this information-only field for any computations.
`)
loanRecordFields.set("currmonthpaidint", ` 
\n### Current Mth Paid Int
\nSymitar Quest stores the total interest paid in this field on the loan during the current calendar month.
\nField Number         **246**
\nMnemonic             **CURRMONTHPAIDINT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01546**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest defines the MTD Accumulated Int field value as the total of MTD Accrued Int + Current Mth Paid Int.
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Loan Interest Accrual parameter in the Miscellaneous Parameters to Yes. To maintain this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
\n
\nIf the field is populated, then the MTD Paid Interest field stores the total interest paid during the current month. This amount may include interest owed from previous months.
`)
loanRecordFields.set("mtdpaidint", ` 
\n### MTD Paid Interest
\nSymitar Quest stores the total in this field of all interest paid in the current month.
\nField Number         **238**
\nMnemonic             **MTDPAIDINT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01538**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Loan Interest Accrual parameter in the Miscellaneous Parameters to Yes. To maintain this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
\n
\nIf the field is populated, Symitar Quest updates it by adding to it the interest when posting a Loan Payment (LP), Loan Advance (LA), or Loan Finance (LR) teller transaction. If you subsequently void the transaction, Symitar Quest subtracts the interest amount from this field.
\n
\nThis amount in this field may include interest owed from previous months. The Current Mth Paid Int field stores the total interest paid on the loan during the current calendar month.
\n
\nSymitar Quest does not use this information-only field for any computations.
`)
loanRecordFields.set("premthintpaid", ` 
\n### 01 Mth Pre Int Paid - 03 Mth Pre Int Paid
\nSymitar Quest stores the total in each of these fields of all interest paid in each of the indicated previous months.
\nField Number         **242:1 - 242:3**
\nMnemonic             **PREMTHINTPAID:1 - PREMTHINTPAID:3**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01542**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThere are three of these fields to store three previous months of data.
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Loan Interest Accrual parameter in the Miscellaneous Parameters to Yes. To maintain this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
\n
\nSymitar Quest does not use these information-only fields for any computations.
`)
loanRecordFields.set("mtdaccruedint", ` 
\n### MTD Accrued Int
\nSymitar Quest stores the total in this field of all outstanding interest (for the current calendar month) that has accrued, but has not been paid, since the last date interest was paid.
\nField Number         **237**
\nMnemonic             **MTDACCRUEDINT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01537**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Loan Interest Accrual parameter in the Miscellaneous Parameters to Yes. To maintain this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
\n
\nIf the field is populated, Symitar Quest updates it by subtracting from it the interest paid when posting a Loan Payment (LP) teller transaction or recomputing the amount during the Daily Posting after a Loan Advance (LA).
\n
\nSymitar Quest does not use this information-only field for any computations.
`)
loanRecordFields.set("premthintaccrued", ` 
\n### 01 Mth Pre Int Accr - 03 Mth Pre Int Accr
\nSymitar Quest stores the total in each of these fields of all outstanding accrued unpaid interest in each of the indicated previous months.
\nField Number         **241:1 - 241:3**
\nMnemonic             **PREMTHINTACCRUED:1 - PREMTHINTACCRUED:3**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01541**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThere are three of these fields to store three previous months of data.
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Loan Interest Accrual parameter in the Miscellaneous Parameters to Yes. To maintain this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
\n
\nSymitar Quest does not use these information-only fields for any computations.
`)
loanRecordFields.set("mtdaccumulatedint", ` 
\n### MTD Accumulated Int
\nSymitar Quest stores the total of all accumulated interest for the current calendar month, regardless of payment of the interest or accrual.
\nField Number         **239**
\nMnemonic             **MTDACCUMULATEDINT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01539**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Loan Interest Accrual parameter in the Miscellaneous Parameters to Yes. To maintain this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
\n
\nThis field is the combined total of the MTD Accrued Int + Current Mth Paid Int fields in the Loan record. When either of these fields is not updated automatically, you must update this field manually.
\n
\nSymitar Quest does not use this information-only field for any computations.
`)
loanRecordFields.set("premthintaccumltd", ` 
\n### 01 Mth Pre Int Accm - 12 Mth Pre Int Accm
\nSymitar Quest stores the total in each of these fields of all accumulated interest, unpaid and paid, for the previous calendar month indicated, regardless of payment of the interest or accrual in each of the indicated previous months.
\nField Number         **240:1 - 240:12**
\nMnemonic             **PREMTHINTACCUMLTD:1 - PREMTHINTACCUMLTD:12**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01540**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThere are 12 of these fields to store 12 previous months of data.
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Loan Interest Accrual parameter in the Miscellaneous Parameters to Yes. To maintain this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
\n
\nSymitar Quest does not use these information-only fields for any computations.
`)
loanRecordFields.set("mtdpriorrateaccrual", ` 
\n### MTD Prior Rate Accr
\nThis field stores the dividend accrual in this field for the current calendar month.
\nField Number         **244**
\nMnemonic             **MTDPRIORRATEACCRUAL**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01544**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest uses this field value to calculate daily interest.
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Loan Interest Accrual parameter in the Miscellaneous Parameters to Yes. To maintain this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
\nIf the field is populated:
\n   - The calculation takes place during a Loan Payment (LP) transaction when the total interest paid is not enough to pay the current month interest due. In this case, Symitar Quest updates this field value with the difference of the current month interest due and interest paid.
\n   - Symitar Quest also calculates the value in this field during a Loan Advance (LA) transaction. After calculating the accrual, Symitar Quest updates this field value with the accrual incurred during the current calendar month.
`)
loanRecordFields.set("lastaccrupdatedate", ` 
\n### Last Accr Updt Date
\nSymitar Quest stores the last date in this field on which the accruals for the Loan record were updated.
\nField Number         **243**
\nMnemonic             **LASTACCRUPDATEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01543**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Loan Interest Accrual parameter in the Miscellaneous Parameters to Yes. To maintain this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
\n
\nSymitar Quest does not use these information-only fields for any computations.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("latechargetype", ` 
\n### Late Charge Type
\nThis field stores a credit union-defined code that indicates which late charge type definition Symitar Quest should use to calculate late charges for this loan.
\nField Number         **054**
\nMnemonic             **LATECHARGETYPE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01354**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Late charges are not assessed for this loan.##### 1–99
\n   The credit union-defined type that Symitar Quest should use to calculate late charges for this loan. You can define up to 99 different late charge types (1-99) in the Late Charge Types parameters in the Parameter Manager.
\n`)
loanRecordFields.set("latechargedate", ` 
\n### Late Charge Date
\nSymitar Quest stores a date in this field related to late charges. The meaning of that date differs depending on the late charge calculation formula referenced by the Late Charge Type field.
\nField Number         **117**
\nMnemonic             **LATECHARGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01417**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("latechargeaccrued", ` 
\n### Late Charge Accrued
\nSymitar Quest stores an amount in this field related to late charges. The meaning of that amount differs depending on the late charge calculation formula referenced by the Late Charge Type field.
\nField Number         **055**
\nMnemonic             **LATECHARGEACCRUED**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01355**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("latechargeunpaid", ` 
\n### Late Charge Unpaid
\nSymitar Quest stores the total amount in this field of all unpaid late charges for this loan.
\nField Number         **056**
\nMnemonic             **LATECHARGEUNPAID**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01356**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest updates this field as necessary after each Loan Payment (LP), Loan Refinance (LR), or New Loan (LN) teller transaction that affects this loan. Whenever you void a Loan Payment (LP) teller transaction that included late charges, Symitar Quest adds the late charge amount to this field.
\n
\nIf the Late Charge Formula parameter in the Late Charge Types parameters is set to the (7) Indiana option, this field stores any accumulated late charges due to missed/late payments when the first regular payment is made. When a payment is made and Symitar Quest establishes a current payment date as equal to the date in the Late Charge Date field, this field is reset to 0.00.
\n
\nWhen the system is in memo-post mode, the Late Charge Unpaid Chg Amt memo record field documents the anticipated change to this field when the transaction is a SymConnect reversal (adjustment) of a previously posted transaction. If the payment has not yet posted, memo-post mode does not document the anticipated change to this field. A manual adjustment may be needed.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("latechargeytd", ` 
\n### Late Charge YTD
\nSymitar Quest stores the total amount in this field of late charges assessed for this loan during the current year.
\nField Number         **057**
\nMnemonic             **LATECHARGEYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01357**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest updates this field with the amount of late charges assessed for any Loan Payment (LP) teller transaction that affects this loan. The first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the amount in this field to theLate Charge Last Yr field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("latechgytdnoadj", ` 
\n### Late Chg YTD No Adj
\nSymitar Quest stores the total amount in this field of late charges billed to the loan during the current year, not including adjustments.
\nField Number         **367**
\nMnemonic             **LATECHGYTDNOADJ**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31197**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest updates this field by adding the amount of late charges assessed for any Loan Payment (LP) teller transaction that affects this loan.
\n
\nWhen you run the Close Day Processing batch program at the end of a calendar year, Symitar Quest transfers the amount in this field to the Late Charge Last Yr No Adj field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("latechargelastyear", ` 
\n### Late Charge Last Yr
\nSymitar Quest stores the total amount in this field of late charges assessed for this loan during the previous year.
\nField Number         **058**
\nMnemonic             **LATECHARGELASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01358**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the amount in the Late Charge YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("latechglastyrnoadj", ` 
\n### Late Chg Last Yr No Adj
\nSymitar Quest stores the total amount in this field of late charges billed to the loan during the previous year, not including adjustments.
\nField Number         **368**
\nMnemonic             **LATECHGLASTYRNOADJ**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31198**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("latechgpdfromopen", ` 
\n### Late Charge Paid From Open
\nSymitar Quest stores the amount in this field of total late charges paid on the loan.
\nField Number         **317**
\nMnemonic             **LATECHGPDFROMOPEN**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31149**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is incremented each time a fee is collected through the P action code specified in the Action Code field in the Transaction record associated with this loan.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("latechgwaivedytd", ` 
\n### Waived Late Charge YTD
\nSymitar Quest stores the total amount in this field of waived late charges for this loan during the current year.
\nField Number         **185**
\nMnemonic             **LATECHGWAIVEDYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01485**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest updates this field with the amount of waived late charges that affect this loan during these teller transactions:
\n   - Loan Payment (LP)
\n   - Loan Payment Adjustment (LPZ)
\n   - Loan Refinance (LR)
\n   - Loan Refinance Adjustment (LRZ)
\n   - Void (VO)
\n   - Recast Loan (RL)
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the amount in this field to the Waived Late Charge Last Yr field and resets this field to 0.00.
\nIf you perform a File Maintenance (FM) transaction that creates a negative balance in this field, Symitar Quest displays the following message:
\n   - Warning: Waived Late Charge YTD field should not be negative.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("latechgwaivedlastyear", ` 
\n### Waived Late Charge Last Yr
\nSymitar Quest stores the total amount in this field of waived late charges for this loan during the previous year.
\nField Number         **186**
\nMnemonic             **LATECHGWAIVEDLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01486**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the amount in the Waived Late Charge YTD field to this field.
\nIf you perform a File Maintenance (FM) transaction that creates a negative balance in this field, Symitar Quest displays the following message:
\n   - Warning: Waived Late Charge Last Yr field should not be negative.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("latechgwaivedfromopen", ` 
\n### Waived Late Charge From Open
\nSymitar Quest stores the total of all waived late charges in this field on the loan since the loan was opened.
\nField Number         **187**
\nMnemonic             **LATECHGWAIVEDFROMOPEN**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01487**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field cannot have a value less than zero. If any transaction would result in a negative value here, the field defaults to zero.
\n
\nA negative balance can occur if waived late charges are reversed that were not tracked prior to the Release 2012.00.
\nSymitar Quest adjusts this loan field by the waived late charge amount related to the following teller transactions:
\n   - Loan Payment (LP)
\n   - Loan Payment Adjustment (LPZ)
\n   - Loan Refinance (LR)
\n   - Loan Refinance Adjustment (LPZ)
\n   - Void (VO)
\n   - Recast Loan (RL)
\nIf you perform a File Maintenance (FM) transaction that creates a negative balance in this field, Symitar Quest displays the following message:
\n   - Warning: Waived Late Charge From Open field should not be negative.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("stmtlatechargeytd", ` 
\n### Stmt Late Charge YTD
\nSymitar Quest stores the amount in the Late Charge YTD field in this field at the time of statement cutoff.
\nField Number         **342**
\nMnemonic             **STMTLATECHARGEYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31174**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("stmtlatechargelastyear", ` 
\n### Stmt Late Charge Last Yr
\nSymitar Quest stores the amount in the Late Charge Last Yr field in this field at the time of statement cutoff.
\nField Number         **343**
\nMnemonic             **STMTLATECHARGELASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31175**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("stmtltchgpdfrmopn", ` 
\n### Stmt Late Charge Pd From Open
\nSymitar Quest stores the amount in the Late Charge Paid from Open field in this field at the time of statement cutoff.
\nField Number         **318**
\nMnemonic             **STMTLTCHGPDFRMOPN**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31150**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("stmtlatechgunpaid", ` 
\n### Statement Late Charge Unpaid
\nSymitar Quest stores the balance in the Late Charge Unpaid field in this field as of the date in the Statement Date field.
\nField Number         **301**
\nMnemonic             **STMTLATECHGUNPAID**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31132**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("nsfmonthtodate", ` 
\n### NSF Month to Date
\nSymitar Quest stores the total number of times an NSF condition affected this loan in this field during the current month.
\nField Number         **087**
\nMnemonic             **NSFMONTHTODATE**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01387**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf you indicate that Symitar Quest should count NSFs at the Count NSFs prompt in the Credit and Debit Card Posting (for cards), Draft Posting (for drafts), or Daily Posting (for automatic transfers) batch programs, whenever an NSF condition affects this loan, Symitar Quest increments this field by 1.
\n
\nThe first time you run the Daily Posting batch program in a new calendar month, Symitar Quest resets this field to 0000.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("nsfytd", ` 
\n### NSF Year to Date
\nSymitar Quest stores the total number of times an NSF condition affected this loan in this field during the current year.
\nField Number         **088**
\nMnemonic             **NSFYTD**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01388**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf you indicate that Symitar Quest should count NSFs at the Count NSFs prompt in the Credit and Debit Card Posting (for cards), Draft Posting (for drafts), or Daily Posting (for automatic transfers) batch programs, whenever an NSF condition affects this loan, Symitar Quest increments this field by 1.
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the value in this field to the NSF Last Year field and resets this field to 0000.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("nsflastyear", ` 
\n### NSF Last Year
\nSymitar Quest stores the total number of times an NSF condition affected this loan in this field during the previous year.
\nField Number         **089**
\nMnemonic             **NSFLASTYEAR**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01389**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the value in the NSF Year to Date field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("feecount", ` 
\n### Fee Count 1 - Fee Count 4
\nThese fields store the number of times in each of these fields that a specific fee has been assessed for this loan, or the number of times a specified transaction has occurred (for the purpose of calculating or charging a fee).
\nField Number         **114:1 - 114:4**
\nMnemonic             **FEECOUNT:1 - FEECOUNT:4**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01414**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAt any of these four fields, you can enter the number of times (0-9999) a specific fee has been assessed for this loan, or the number of times a specified transaction has occurred (for the purpose of calculating or charging a fee).
\n
\nYou can use these fields to store any type of credit union-defined information. You must update these fields manually. Symitar Quest does not update these fields as the result of teller transactions or batch processing. You could use these fields to store the number of times (up to four) that each different credit union-defined fee has been assessed for the loan.
`)
loanRecordFields.set("ledgeraccrual", ` 
\n### Ledger Accrual
\nSymitar Quest stores the ledger accrual amount for this loan in this field.
\nField Number         **234**
\nMnemonic             **LEDGERACCRUAL**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01534**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe accrual batch process updates this field. This is a protected field, but not a required one.
\n
\nSymitar Quest only populates this field if the GL Daily Accrual parameter in the Miscellaneous Parameters is set to Yes. Update this field by running the Loan Interest Accrual – Periodic option of the Dividend/Interest Accruals batch program.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("ledgeraccrualdate", ` 
\n### Ledger Accrual Date
\nSymitar Quest stores the date in this field on which the accrual batch process updates the ledger accrual for this loan during daily accruals.
\nField Number         **235**
\nMnemonic             **LEDGERACCRUALDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01535**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis is a protected field, but not a required one.
\n
\nSymitar Quest only populates this field if the GL Daily Accrual parameter in the Miscellaneous Parameters is set to Yes. Update this field by running the Loan Interest Accrual – Periodic option of the Dividend/Interest Accruals batch program.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("accrualstatus", ` 
\n### Accrual Status
\nSymitar Quest stores a code in this field that specifies the current accrual status of the loan.
\nField Number         **379**
\nMnemonic             **ACCRUALSTATUS**
\nData Type            **Code to 1**
\nSource               **System-entered**
\nHelp File            **31211**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Accrual
\n   The loan was included in the last batch accrual posting.##### (1) Non-Accrual
\n   The loan was excluded from the last batch accrual posting.
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("glaccrualstatusoption", ` 
\n### GL Accrual Status Option
\nThis field stores a code that is used by the Dividend/Interest Accrual Report batch program to determine whether a loan should have GL interest accrued.
\nField Number         **198**
\nMnemonic             **GLACCRUALSTATUSOPTION**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **01498**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Use DQ Days, Auto Resume
\n   Use the DQ Days prompt value in the Dividend/Interest Accrual batch program to determine whether an accrual should be calculated.
\n   
\n       - For example, when the number of days past due is greater than or equal to the value entered at the DQ Days prompt, GL interest does not accrue. When the number of days past due is less than the value at the DQ Days prompt, GL interest accrues.
\n##### (1) Use DQ Days, Do Not Resume
\n   Have the Dividend/Interest Accrual batch program calculate an accrual when the due date is less than the value entered at the DQ Days prompt.
\n   
\n       - When the number of days past due is greater than or equal to the value entered at the DQ Days prompt value, the Dividend/Interest Accrual batch program resets this field to (3) Ignore DQ Days, Do not Accrue. This field must be changed manually to start accruing GL interest again.
\n##### (2) Ignore DQ Days, Accrue
\n   Calculate accruals no matter how many days past due the loan is.
\n       - Important: This field must be changed manually to stop accruing GL interest again.
\n##### (3) Ignore DQ Days, Do Not Accrue
\n   Do not calculate accruals no matter how many days past-due the loan is.
\n       - Important: This field must be changed manually to start accruing GL interest again.
\n
\nYou can set field-level security privileges for this field to let you control file maintenance. To set the privileges, go to Field Control Parameters in the Parameter Manager and then select Loan. If you do not specify field-level security privileges, the default lets all users perform file maintenance on this field.
`)
loanRecordFields.set("lastaccrualreversal", ` 
\n### Last Accrual Reversal
\nSymitar Quest stores the amount in this field of accrued income that was reversed the last time this loan went to nonaccrual status.
\nField Number         **315**
\nMnemonic             **LASTACCRUALREVERSAL**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31207**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("lastaccrreversaldate", ` 
\n### Last Accrual Reversal Date
\nSymitar Quest stores the date in this field of the most recent reversal of accrued interest because of delinquency.
\nField Number         **377**
\nMnemonic             **LASTACCRREVERSALDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **31209**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("totalaccrualreversal", ` 
\n### Total Accrual Reversal
\nSymitar Quest stores the total amount in this field of accrued interest that was reversed on this loan.
\nField Number         **376**
\nMnemonic             **TOTALACCRUALREVERSAL**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31208**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("accrreinstatementdate", ` 
\n### Accr Reinstatement Date
\nThis field stores the date when the loan returns to accrual status.
\nField Number         **378**
\nMnemonic             **ACCRREINSTATEMENTDATE**
\nData Type            **Date**
\nSource               **System-entered or User-entered**
\nHelp File            **31210**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
loanRecordFields.set("insurancetype", ` 
\n### Insurance Type
\nThis field stores a credit union-defined code that identifies the type of insurance.
\nField Number         **068**
\nMnemonic             **INSURANCETYPE**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-entered**
\nHelp File            **01368**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The applicant has chosen not to purchase insurance.##### 1–9999
\n   The applicant has chosen to purchase an insurance type of this type defined in the Insurance Type Parameters.
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Insurance Type field from the specified Application record. If you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Insurance Type field of the loan calculation screen.
`)
loanRecordFields.set("insurancemax", ` 
\n### Insurance Maximum
\nThis field stores the maximum insurable loan balance.
\nField Number         **069**
\nMnemonic             **INSURANCEMAX**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01369**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the maximum insurable loan balance.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Max Ins Balance field from the specified Application record.
`)
loanRecordFields.set("insurancebalance", ` 
\n### Insurance Balance
\nSymitar Quest stores the loan balance in this field currently insured for this loan.
\nField Number         **070**
\nMnemonic             **INSURANCEBALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01370**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest updates this field with the value from either the Loan Balance field or the Insurance Maximum field, whichever is smaller.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("insuranceytd", ` 
\n### Insurance YTD
\nThis field stores the amount of total insurance added to the principal loan balance this year.
\nField Number         **307**
\nMnemonic             **INSURANCEYTD**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **31139**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
loanRecordFields.set("insuranceytdnoadj", ` 
\n### Insurance YTD No Adj
\nSymitar Quest stores the total amount in this field of insurance billed to the principal loan balance during the current year, not including adjustments.
\nField Number         **365**
\nMnemonic             **INSURANCEYTDNOADJ**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31195**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen you run the Close Day Processing batch program at the end of a calendar year, Symitar Quest transfers the amount in this field to the Insurance Last Yr No Adj field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("insurancelastyear", ` 
\n### Insurance Last Year
\nSymitar Quest stores the amount in this field of total insurance added to the principal loan balance during the previous year.
\nField Number         **308**
\nMnemonic             **INSURANCELASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31140**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the value in the Insurance YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("insurancelstyrnoadj", ` 
\n### Insurance Last Yr No Adj
\nSymitar Quest stores the total amount in this field of insurance billed to the principal loan balance during the previous year, not including adjustments.
\nField Number         **366**
\nMnemonic             **INSURANCELSTYRNOADJ**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31196**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("singlepremiumlife", ` 
\n### Sgl Prem Life
\nSymitar Quest stores the amount in this field of the single premium for any credit life insurance calculated for the loan.
\nField Number         **122**
\nMnemonic             **SINGLEPREMIUMLIFE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01422**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Sgl Prem Life field from the specified Application record. If you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with premium amount calculated for the specified insurance type from the loan calculation screen.
\n
\nFor more information on calculating loan premiums for various loan types, see the Loan Calc Screen action field description and see Insurance Types and Insurance Tables in the Parameter Manager.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("singlepremiumdisability", ` 
\n### Sgl Prem Disability
\nSymitar Quest stores the amount in this field of the single premium for any credit disability insurance calculated for the loan.
\nField Number         **123**
\nMnemonic             **SINGLEPREMIUMDISABILITY**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01423**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Sgl Prem Disability field from the specified Application record. If you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with premium amount calculated for the specified insurance type from the loan calculation screen.
\n
\nFor more information on calculating loan premiums for various loan types, see the Loan Calc Screen action field description and see Insurance Types and Insurance Tables in the Parameter Manager.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("originsurancetype", ` 
\n### Original Insurance Type
\nSymitar Quest stores the original insurance type in this field on a loan.
\nField Number         **268**
\nMnemonic             **ORIGINSURANCETYPE**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01568**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe first time Insurance Posting changes the value in the Insurance Type field, the original value is copied into this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("firstinsbirthdate", ` 
\n### First Insured Birth Date
\nSymitar Quest stores the first insured's date of birth in this field.
\nField Number         **266**
\nMnemonic             **FIRSTINSBIRTHDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01566**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest checks the age against Insurance Tables to calculate member eligibility for insurance. If the date is not filled in, Symitar Quest does not use the Max Life Direct Ins Type or the Max Dis Direct Insurance Type parameter (see Insurance Types).
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the First Insured Birth Date field from the specified Application record. If you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the First Insured Birth Date field of the loan calculation screen.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("secondinsbirthdate", ` 
\n### Second Insured Birth Date
\nSymitar Quest stores the second insured's date of birth in this field.
\nField Number         **267**
\nMnemonic             **SECONDINSBIRTHDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01567**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest checks the age against Insurance Tables to calculate member eligibility for insurance. If the date is not filled in, Symitar Quest does not use the Max Life Direct Ins Type or the Max Dis Direct Insurance Type parameter (see Insurance Types).
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Second Insured Birth Date field from the specified Application record. If you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Second Insured Birth Date field of the loan calculation screen.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("armnotice", ` 
\n### ARM Notice
\nThis field stores a code that determines whether the Rate Change Processing batch program creates ARM notices for this loan.
\nField Number         **380**
\nMnemonic             **ARMNOTICE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31212**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   Symitar Quest does not generate ARM notices for this loan (for example, fixed-rate loans, credit card loans, or line-of-credit loans).##### (1) Secured by Principal Dwelling
\n   Symitar Quest generates ARM notices for this loan only if the Loan Code field value is set to (0) Closed End or (1) Open End.
\n       - If you select any option besides 0 or 1 for the Loan Code field value, Symitar Quest displays this error message:
\n       - ARM notice not allowed for Loan Code
\n##### (2) CU Defined Custom Specfile
\n   Symitar Quest generates ARM notices for this loan through means other than the Rate Change Processing batch program (using a customized credit union specfile, for example). There is no functionality associated with this option.
\n`)
loanRecordFields.set("initialarmnotice", ` 
\n### Initial ARM Notice
\nThis field stores a code that determines whether the Rate Change Processing batch program creates a one-time initial ARM notice for this loan.
\nField Number         **381**
\nMnemonic             **INITIALARMNOTICE**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **31213**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   This loan does not need an initial ARM notice.##### (1) System Generated
\n   Symitar Quest generates the Regulation Z-compliant initial ARM notice for this loan.
\n       - The batch program only creates the notice if:
\n       - The ARM Notice field value has the value (1) Secured by Principal Dwelling
\n       - This field has the value (1) System Generated
\n       - You select (2) Create Initial ARM Notice at the Change Type prompt of the Rate Change Processing batch program.
\n##### (2) CU Defined Custom Specfile
\n   Symitar Quest generates an initial ARM notice for this loan through a custom specfile. There is no functionality associated with this option.##### (3) Third-Party Generated
\n   A third party produces the initial ARM notice. There is no functionality for this option.
\n`)
loanRecordFields.set("initarmnoticecreationdate", ` 
\n### Init ARM Notice Creation Date
\nSymitar Quest stores the date in this field on which the Rate Change Processing batch program created the initial ARM notice.
\nField Number         **382**
\nMnemonic             **INITARMNOTICECREATIONDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **31214**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest does not provide an automated method to reset this field to <Blank> __/__/__.
\n
\nOnce this field has a value, Symitar Quest is unable to generate another Initial ARM Notice for this loan.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("lastarmnoticecreationdate", ` 
\n### Last ARM Notice Creation Date
\nSymitar Quest stores the most recent date in this field on which Symitar Quest sent out a payment disclosure ARM notice.
\nField Number         **383**
\nMnemonic             **LASTARMNOTICECREATIONDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **31215**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest updates the field with the system date each time the Rate Change Processing batch program produces an ARM notice for this loan.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("pmioriginalvalue", ` 
\n### Original Value
\nThis field stores the original value of the collateral for the loan.
\nField Number         **272**
\nMnemonic             **PMIORIGINALVALUE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31103**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is the lesser of the sales price of the property securing the mortgage, as reflected in the purchase contract, or the appraised value at the time the subject residential mortgage transaction was completed. In the case of a refinancing, this means the appraised value relied upon by the lender to approve the refinance transaction. This value is manually entered at the time of loan funding.
`)
loanRecordFields.set("pmipurchaseprice", ` 
\n### Purchase Price
\nThis field stores the purchase price or sales price of the property securing the mortgage, as reflected in the purchase contract.
\nField Number         **273**
\nMnemonic             **PMIPURCHASEPRICE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31104**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nManually enter this value at the time of loan funding.
`)
loanRecordFields.set("pmiappraisedvalue", ` 
\n### PMI Appraised Value
\nThis field stores the value of the residence when it was appraised during a mortgage application.
\nField Number         **274**
\nMnemonic             **PMIAPPRAISEDVALUE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31105**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf a member applies for a mortgage loan and puts down less than 22% of the cost of the residence, a credit union can ask the borrower to take out private mortgage insurance (PMI) based on this appraised value. In the case of a refinancing, the field stores the appraised value the lender used to approve the refinance transaction.
\n
\nManually enter this value at the time of loan funding.
`)
loanRecordFields.set("pmiltvratio", ` 
\n### PMI Loan To Value Ratio
\nThis field contains the calculated loan amount divided by the lesser of the values in the Purchase Price or PMI Appraised Value fields at the time of loan completion.
\nField Number         **823**
\nMnemonic             **PMILTVRATIO**
\nData Type            **Rate**
\nSource               **System-calculated**
\nHelp File            **01599**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nIn the case of a refinancing, the user leaves the Purchase Price field value at the default value of 0.00 and the PMI Appraised Value field value is used. This field recalculates and changes with each payment made on the loan.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("highriskcode", ` 
\n### High Risk Loan
\nThis field stores a code that specifies whether a loan is to be considered high risk.
\nField Number         **275**
\nMnemonic             **HIGHRISKCODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31106**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   The loan is not considered high risk.##### (1) Yes
\n   The loan is considered high risk.
\n   
\n       - High risk loans are not subject to termination and cancellation provisions, only final termination at midpoint.
\n***Important:***  If during the course of the loan the high risk flag is modified, your credit union needs to review all records pertaining to the loan to determine if all the corresponding PMI fields are accurate.
`)
loanRecordFields.set("mortginscollytd", ` 
\n### Mortgage Ins Collected YTD
\nThis field stores the total dollar amount collected during the current calendar year to pay mortgage insurance.
\nField Number         **287**
\nMnemonic             **MORTGINSCOLLYTD**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **31118**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe amount in this field can be more or less than the value in the Mortgage Ins Paid YTD field. This field is updated anytime a member makes a payment to an escrowed loan with the portion of the payment that applies to PMI.
\n
\nThis field is associated with a PMI Escrow record. When a PMI type Escrow record performs a disbursement, the amount disbursed is added to this field. After year end, the system moves this amount to the Mortgage Ins Collected Last Yr field and it is mapped to the 1098 - Mortgage Interest Statement IRS tax form.
\n
\nWhen a date is populated in the PMI Cancellation Date field of the PMI type Escrow record, any PMI disbursements processed after the date in the PMI Cancellation Date field will not be added to this field.
`)
loanRecordFields.set("mortginscolllastyr", ` 
\n### Mortgage Ins Collected Last Yr
\nSymitar Quest stores the total dollar amount in this field collected during the current calendar year to pay mortgage insurance.
\nField Number         **288**
\nMnemonic             **MORTGINSCOLLLASTYR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31119**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe amount may be more or less than the value in the Mortgage Ins Paid Last Yr field.
`)
loanRecordFields.set("pmiytd", ` 
\n### Mortgage Ins Paid YTD
\nThis field stores the year-to-date totals for private mortgage insurance (PMI).
\nField Number         **269**
\nMnemonic             **PMIYTD**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01569**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is not automatically updated; you must perform file maintenance on this field to ensure its accuracy. This field is updated when an escrow disbursement occurs from the escrow share to pay the loan's PMI.
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest moves the amount in this field to the Mortgage Ins Paid Last Yr field and resets this field to 0.00.
`)
loanRecordFields.set("pmilastyear", ` 
\n### Mortgage Ins Paid Last Yr
\nSymitar Quest stores the previous year's totals in this field for private mortgage insurance (PMI).
\nField Number         **270**
\nMnemonic             **PMILASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31101**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest moves the amount in the Mortgage Ins Paid YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("escrowid", ` 
\n### Escrow ID
\nThis field stores the ID of the Share record to which the escrow amount should be posted whenever the member makes a loan payment.
\nField Number         **116**
\nMnemonic             **ESCROWID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **01416**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nEnter the ID (up to 4 characters) of the Share record to which the escrow amount should be posted whenever the member makes a loan payment.
\n***Important:***  Entering an ID related to a Share ID that is not valid (no share, closed, charged-off, etc.) returns an error.
`)
loanRecordFields.set("escrowamount", ` 
\n### Escrow Amount
\nThis field stores the periodic escrow amount for the loan.
\nField Number         **115**
\nMnemonic             **ESCROWAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01415**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nYou must calculate this amount manually. Whenever the member makes a loan payment, Symitar Quest applies this amount to the share identified by Escrow ID field value, then posts the rest of the payment to principal and interest.
`)
loanRecordFields.set("escrowunpaid", ` 
\n### Escrow Unpaid
\nSymitar Quest stores the total amount in this field of all unpaid escrow that was deferred from payments applied to this loan once the due date advanced.
\nField Number         **300**
\nMnemonic             **ESCROWUNPAID**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31131**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field balance is not included in the Payment Due field amount. Balances for unpaid escrow can be recovered through a share deposit, or loan payment overage in Teller Transactions.
\n
\nAnytime escrow is deferred to advance the loan due date that increases the escrow unpaid balance, or funds are received that reduce the escrow unpaid balance, Symitar Quest posts a comment noting the value that this field was before and after the associated transaction. No comment is posted if this field is not affected.
\n
\nThese comments are suppressed on receipts and statements, but display and print in member history and online banking. When a transaction is voided, the % comment restores the escrow unpaid value.
\n
\nThe % comments are used to automatically repopulate this field when a payment is voided. If you do an adjustment, you can use this field to update this field manually.
\n
\nYou can only apply payments to unpaid escrow through a loan payment or share deposit. Adjustment transactions do not recognize unpaid escrow.
\n
\nUnder normal circumstances, you should not revise this field. The only exception is when Loan Payment Adjustment (LPZ) transactions are performed.
`)
loanRecordFields.set("escrowapplied", ` 
\n### Escrow Applied
\nSymitar Quest stores the portion of the loan payment in this field that applies to escrow without the due date advancing.
\nField Number         **322**
\nMnemonic             **ESCROWAPPLIED**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31154**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nOnce the loan due date is advanced, this field is reset to 0.00. This field is a subset of the Partial Payment field that monitors the entire payment amount required to advance the loan's due date.
\n
\nSymitar Quest updates this field as necessary after each Loan Payment (LP) transaction for the escrow portion of the payment in which the payment does not advance the due date of the loan.
\n
\nWhen a Share Deposit (SD) transaction is processed to the escrow share directly, the amount is not applied to this field. Only the Loan Payments (LP) transaction clears this field, then populates it with the escrow amount that has been applied.
`)
loanRecordFields.set("occupancytype", ` 
\n### Occupancy Type
\nThis field stores a code that specifies the occupancy status of the property the borrower purchased with this loan.
\nField Number         **384**
\nMnemonic             **OCCUPANCYTYPE**
\nData Type            **Code to 4**
\nSource               **User-entered**
\nHelp File            **31216**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The loan is not a principal residence, a secondary residence, or an investment property.##### (1) Principal Residence
\n   The loan covers a property the borrower plans to occupy as principal residence.##### (2) Second Residence
\n   The loan covers a property that is a second home or vacation home.##### (3) Investment Property with Rental Income
\n   The loan covers a property to generate rental income.##### (4) Investment Property Without Rental Income
\n   The loan covers a property that is an investment, but not an income-generating rental.
\nThis field is for informational purposes only.
`)
loanRecordFields.set("propertyaddresstype", ` 
\n### Property Address Type
\nThis field stores a code that indicates how Symitar Quest stores the property address information that secures a mortgage loan.
\nField Number         **389**
\nMnemonic             **PROPERTYADDRESSTYPE**
\nData Type            **Code to 2**
\nSource               **User-entered or System-entered**
\nHelp File            **31221**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Same as Primary Member Address
\n   The property securing the loan is the same as the primary member’s address.##### (1) Property Address
\n   The property address that secures the loan is different than the primary member’s address.##### (2) Property Description
\n   No property address is available for the property securing the loan.
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Property Address Type field from the specified Application record.
\n
\nIRS Form 1098 reporting uses this field.
`)
loanRecordFields.set("propertyjurisdiction", ` 
\n### Property Jurisdiction
\nThis field stores the property's jurisdiction.
\nField Number         **390**
\nMnemonic             **PROPERTYJURISDICTION**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **31222**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf a property address is not available, enter the property's jurisdiction (county and state) (up to 40 characters).
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Property Jurisdiction field from the specified Application record.
`)
loanRecordFields.set("assessorparcelnumber", ` 
\n### Assessor Parcel Number
\nThis field stores the property's Assessor Parcel Number (APN).
\nField Number         **391**
\nMnemonic             **ASSESSORPARCELNUMBER**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **31223**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf a property address is not available, enter the property's Assessor Parcel Number or Numbers (up to 40 characters). For example: VV-WW0-XX-YYY-ZZZ.
\nThe IRS's Instructions for Form 1098 (2016) states that the APN can be any one of the following:
\n   - Assessor's Identification Number (AIN)
\n   - Property Identification Number (PIN)
\n   - Property Account Number
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the Assessor Parcel Number field from the specified Application record.
`)
loanRecordFields.set("mtgnumprop", ` 
\n### Number of Mortgaged Properties
\nThis field stores the number of properties that secure this mortgage loan.
\nField Number         **426**
\nMnemonic             **MTGNUMPROP**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **31258**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter the number of properties (0-999) that secure this mortgage loan.
\n
\nWhen this field has a value greater than 1, the IRS Reporting batch program uses the value in this field to populate box 9, Number of Mortgaged Properties, in the IRS Form 1098 (Mortgage Interest Statement).
`)
loanRecordFields.set("pmtbucketamount", ` 
\n### Pmt Bucket Amt 1 - Pmt Bucket Amt 8
\nEach of these eight fields stores a history of payment amounts, each due on the effective date specified in the corresponding Pmt Bucket Due Date x field.
\nField Number         **091:1 - 091:8**
\nMnemonic             **PMTBUCKETAMOUNT:1 - PMTBUCKETAMOUNT:8**
\nData Type            **Money**
\nSource               **System-entered or User-entered**
\nHelp File            **01391**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest stores payment amounts in reverse chronological order, with the most recent payment in Pmt Bucket Amt 1 and the oldest payment in Pmt Bucket Amt 8.
`)
loanRecordFields.set("pmtbucketduedate", ` 
\n### Pmt Bucket Due Date 1 - Pmt Bucket Due Date 8
\nSymitar Quest stores a payment date in each of these eight fields for the payments in the corresponding Pmt Bucket Amt x fields.
\nField Number         **092:1-092:8**
\nMnemonic             **PMTBUCKETDUEDATE:1 - PMTBUCKETDUEDATE:8**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01392**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf the loan is current or fewer than eight months past due, the dates appear in reverse chronological order with no gaps.
\n
\nIf the loan is more than eight months delinquent, Symitar Quest does not update the date in the Pmt Bucket Due Date 8 field. The Pmt Bucket Due Date 8 field always stores the oldest due date for which the payment has not been made.
\n
\nUnder normal circumstances, you should not perform file maintenance on the payment bucket due date fields.
`)
loanRecordFields.set("billedfeebucketamount", ` 
\n### Billed Fee Bucket Amt 1 - Billed Fee Bucket Amt 8
\nSymitar Quest stores a history of billed fee amounts in each of these eight fields in parallel with the Pmt Bucket Amt x and Pmt Bucket Due Date x fields.
\nField Number         **183:1 - 183:8**
\nMnemonic             **BILLEDFEEBUCKETAMOUNT:1 - BILLEDFEEBUCKETAMOUNT:8**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01483**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nDuring file maintenance processing of the Loan record, if there is an amount in one of these buckets, Symitar Quest totals it with the corresponding Pmt Bucket Amt x field value to determine the actual payment that is due on the date in the corresponding Pmt Bucket Due Date x field value. A loan payment must equal the sum of the corresponding Billed Fee Bucket Amt x and Pmt Bucket Amt x field values to advance the Due Date field value on the loan, but the amount in the fee bucket is excluded from late charge calculations.
\n
\nUnder normal circumstances, you should not perform file maintenance on the billed fee bucket amount fields.
`)
loanRecordFields.set("escrowbucketamount", ` 
\n### Escrow Bucket Amt 1 - Escrow Bucket Amt 8
\nSymitar Quest stores a history of escrow amounts in each of these eight fields, each due on the effective date specified in the corresponding Pmt Bucket Due Date x field.
\nField Number         **323:1 - 323:8**
\nMnemonic             **ESCROWBUCKETAMOUNT:1 - ESCROWBUCKETAMOUNT:8**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31155**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest stores the escrow amounts in reverse chronological order with the most recent amount in Escrow Bucket Amt 1 field and the oldest amount in Escrow Bucket Amt 8 field.
\n
\nUnder normal circumstances, you should not perform file maintenance on the escrow bucket amount fields.
`)
loanRecordFields.set("feebillingdate", ` 
\n### Fee Billing Date
\nThis field stores the billing date in this field for the value in the Fee Billing Amount field.
\nField Number         **178**
\nMnemonic             **FEEBILLINGDATE**
\nData Type            **Date**
\nSource               **System-entered or User-entered**
\nHelp File            **01478**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest uses this field to update the date when the Billed Fee Unpaid field and the Billed Fee Bucket Amt x fields are updated in the Statement Cutoff Processing and Loan File Maintenance Processing batch programs.
\nYou can initialize this field using any of the following methods:
\n   - Performing manual file maintenance
\n   - Using the Perform FM from PowerOn Output function of the Miscellaneous Processing batch program
\n   - Performing a custom edit run
`)
loanRecordFields.set("feebillingamount", ` 
\n### Fee Billing Amount
\nThis field stores the fee amount billed on the date in the Fee Billing Date field.
\nField Number         **179**
\nMnemonic             **FEEBILLINGAMOUNT**
\nData Type            **Money**
\nSource               **System-entered or User-entered**
\nHelp File            **01479**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIn conjunction with the Fee Billing Date field, Symitar Quest updates the Billed Fee Unpaid field and the Billed Fee Bucket Amt x fields during Statement Cutoff Processing and Loan File Maintenance Processing batch programs.
\nYou can initialize this field using any of the following methods:
\n   - Performing manual file maintenance
\n   - Using the Perform FM from PowerOn Output function of the Miscellaneous Processing batch program
\n   - Performing a custom edit run
`)
loanRecordFields.set("billedfeeunpaid", ` 
\n### Billed Fee Unpaid
\nSymitar Quest stores billed fees in this field that are currently unpaid on this loan.
\nField Number         **180**
\nMnemonic             **BILLEDFEEUNPAID**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01480**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe order in which the billed fee is satisfied depends on the value in the Payment Application Method field. Billed fees cannot be collected on loans in which the Payment Application Method field value is set to (1) SBA Required Method or a user created mortgage method type of 10-8999.
\n
\nThe Loan File Maintenance Processing and Statement Cutoff Processing batch programs update this field based on the value in the Fee Billing Amount and Fee Billing Date fields.
\n
\nWhen you make a Loan Payoff inquiry, the value displayed in the Billed Fee Due field may not always equal the value in this field. If there is a value in the Fee Billing Date field that is between the current system date and the loan payoff date you enter, then Symitar Quest adds the value in the Fee Billing Amount field that is scheduled for that date to the value in this field to calculate the value that displays in the Billed Fee Due field.
\n***Important:***  This field value should never be negative. This can occur if you do a Loan Payment Adjustment (LPZ) transaction entering a positive amount for the Billed Fee. If you do an LPZ transaction like this, you should do one of the following:
\nSet this field to the billed fee amount before doing the transaction so the ending result after the LPZ transaction would be 0.00.
\nAfter you complete the transaction, reset the negative amount in this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("billedfeeytd", ` 
\n### Billed Fee YTD
\nSymitar Quest stores the amount in this field of billed fees collected during payment processing this year.
\nField Number         **181**
\nMnemonic             **BILLEDFEEYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01481**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nDuring year-end processing, Symitar Quest moves this dollar amount to the value in the Billed Fee Last Year field and resets this field to $0.00.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("billedfeeytdnoadj", ` 
\n### Billed Fee YTD No Adj
\nSymitar Quest stores the amount in this field of billed fees collected during payment processing during the current year, not including adjustments.
\nField Number         **371**
\nMnemonic             **BILLEDFEEYTDNOADJ**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31201**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen you run the Close Day Processing batch program at the end of a calendar year, Symitar Quest transfers the amount in this field to the Billed Fee Last Yr No Adj field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("billedfeelastyear", ` 
\n### Billed Fee Last Year
\nSymitar Quest stores the amount in this field of billed fees collected during payment processing last year.
\nField Number         **182**
\nMnemonic             **BILLEDFEELASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01482**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("billedfeelstyrnoadj", ` 
\n### Billed Fee Last Yr No Adj
\nSymitar Quest stores the amount in this field of billed fees billed to the loan during payment processing for the previous year, not including adjustments.
\nField Number         **372**
\nMnemonic             **BILLEDFEELSTYRNOADJ**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31202**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("ecoacode", ` 
\n### ECOA Code
\nThis field stores an Equal Credit Opportunity Act (ECOA) code that indicates how Symitar Quest should report the loan to credit bureaus.
\nField Number         **020**
\nMnemonic             **ECOACODE**
\nData Type            **Code to 11**
\nSource               **User-entered or System-entered**
\nHelp File            **01320**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (00)
\n   This ECOA code translates to an association code of (0) Undesignated, which is reported by Experian® only.
\n       - Important: Do not use this obsolete ECOA code. Under most circumstances, you should select (1) Individual, (2) Joint Contractual, or (5) Comaker in the ECOA Code field. Credit unions do not normally use other ECOA codes.
\n##### (01) Individual (Verified)
\n   Report the name of the primary borrower to credit bureaus with an association code of (1) Individual Borrower. Symitar Quest reports to credit bureaus the member name from the primary Name record for the account.##### (02) Joint Contractual
\n   Report the name of the primary borrower to credit bureaus with an association code of (2) Joint Account - Contractual Responsibility and the names from all applicable Name records with an association code of (2) Joint Account - Contractual Responsibility. Using this option with the Name Type field in the Loan Name record set to (9) Authorized Signer allows Symitar Quest to include this individual in credit reporting.##### (03) Joint User
\n   Report the name of the primary borrower with an association code of (2) Joint Account - Contractual Responsibility and the names from all applicable Name records with an association code of (3) Authorized User - Joint Account. Using this option with the Name Type field in the Loan Name records set to (9) Authorized Signer allows Symitar Quest to include this individual in credit reporting.##### (04) Joint
\n   Report the name of the primary borrower with an association code of (4) Joint Account and the names from all applicable Name records with an association code of (4) Joint Account. Credit unions do not normally use this ECOA code. Using this option with the Name Type field in the Loan Name record set to (9) Authorized Signer allows Symitar Quest to include this individual in credit reporting.
\n       - Important: Do not use this obsolete ECOA code. Under most circumstances, you should select (1) Individual, (2) Joint Contractual, or (5) Comaker in the ECOA Code field. Credit unions do not normally use other ECOA codes.
\n##### (05) Comaker
\n   Report the name of the primary borrower with an association code of (5) Comaker and the names from all applicable Name records with an association code of (5) Comaker. Using this option with the Name Type field in the Loan Name record set to (9) Authorized Signer allows Symitar Quest to include this individual in credit reporting.##### (06) On behalf of
\n   Report the name of the primary borrower with an association code of (2) Joint Account - Contractual Responsibility and the names from all applicable Name records with an association code of (6) On Behalf Of. Credit unions do not normally use this ECOA code.
\n       - Important: Do not use this obsolete ECOA code. Under most circumstances, you should select (1) Individual, (2) Joint Contractual, or (5) Comaker in the ECOA Code field. Credit unions do not normally use other ECOA codes.
\n##### (07) Maker
\n   Report the name of the primary borrower with an association code of (7) Maker and the names from all applicable Name records with an association code of (7) Maker. Credit unions do not normally use this ECOA code. Using this option with the Name Type field in the Loan Name record set to (9) Authorized Signer allows Symitar Quest to include this individual in credit reporting.##### (08) Deceased
\n   Report the name of the primary borrower with an association code of (X) Deceased.##### (09) Account Terminated
\n   Report the name of the primary borrower with an association code of (T) Terminated.##### (10) Delete Specific Borrower
\n   Report the name with an association code of (Z).##### (11) Business/Commercial
\n   Report the name with an association code of (W). Codes (10) Delete Specific Borrower and (11) Business/Commercial support the DA - Account Closed by Consumer status code for Ch2 fields on the Equifax® credit report Segment 13 (Bankruptcy). See Equifax Version 5.0 Credit Reports.The name in the Loan record is reported as a primary name with the designation indicated in this field, and depending on the code in this field, additional names may be reported as secondary. You must send a credit report number, a collateral code, and the appropriate credit reporting code and ECOA code when reporting to a credit bureau.
\n   - Important: If you specify 2 or greater in the ECOA Code field, Symitar Quest uses the Name Logic parameter in the Credit Reporting Parameters to determine which secondary names to report.
\n
\n   - An exception to the above occurs when the Loan Name record has the SSN/TIN Override field is set to (1) Overrides Primary SSN/TIN. Then the name corresponding to the SSN/TIN in the Loan Name record is used and the rules of the Name Logic parameter are ignored.
\n
\nOnce Symitar Quest determines which secondary names to report, Symitar Quest checks the ECOA Code field in each of those Name records. If the setting of the ECOA Code field in any of those Name records is 2 or greater, the Name record ECOA Code field determines how Symitar Quest reports that Name record. If the setting for the ECOA Code in any Name record is (0) Individual or (1) Individual, however, the ECOA Code in the Loan record determines how Symitar Quest reports that secondary.
\n
\nIf you enter 2 or greater in the ECOA Code field, and the Name record contains a different value that is 2 or greater in the ECOA Code field, Symitar Quest reports the ECOA code specified in the Name record.
\n
\nFor more information, see Credit Reporting Parameters.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value from the ECOA Code field from the specified Application record.
`)
loanRecordFields.set("creditreportingcode", ` 
\n### Credit Reporting Code
\nThis field stores a code that specifies how the loan should be reported to credit bureaus.
\nField Number         **021**
\nMnemonic             **CREDITREPORTINGCODE**
\nData Type            **Code to 99**
\nSource               **System-entered or User-entered**
\nHelp File            **01321**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nYou must send a credit report number, a collateral code, and the appropriate credit reporting code and ECOA code when reporting to a credit bureau.
\n#### Data Type Descriptions
\n##### (0) Normal
\n   Symitar Quest should automatically assign one of the following status codes to indicate the status of the loan:
\n       - 11 = Current account (0–29 days past the due date)
\n       - 13 = Paid or closed account/zero balance
\n       - 64 = Account paid in full, was a charge-off
\n       - 71 = Account 30–59 days past the due date
\n       - 78 = Account 60–89 days past the due date
\n       - 80 = Account 90–119 days past the due date
\n       - 82 = Account 120–149 days past the due date
\n       - 83 = Account 150–179 days past the due date
\n       - 84 = Account 180 days or more past the due date
\n       - 97 = Unpaid balance reported as a loss (charge-off)
\n   
\n       - Do not enter any of the codes listed above. Select (0) Normal to cause Symitar Quest to assign the appropriate status code automatically. If you enter any code except (0) Normal, you must perform file maintenance on this field manually.
\n##### (1) Do Not Report
\n   Symitar Quest should not report this loan to credit bureaus.
\n   
\n       - If a member registers a fraud alert, select this code to comply with the Fair and Accurate Credit Transactions (FACT) Act of 2003 (see the note on credit union-defined warning codes that you must create in Warning Parameters in the Parameter Manager book). This code flags possibly fraudulent transactions, blocks Symitar Quest from reporting those questionable transactions to credit bureaus, and warns against the sale or transfer of the flagged loan if it becomes delinquent. You also cannot put such a loan into collection for debt resulting from the reported fraud.
\n##### 2
\n   Symitar Quest does not currently offer this as an option for this code.##### 03–98
\n   Enter one of the following status codes to override the system-generated status code:
\n       - 03 = Credit card lost or stolen
\n   
\n       - Not valid in Metro 2® Format.
\n   
\n       - 04 = Closed inactive account
\n   
\n       - Not valid in Metro 2 Format.
\n   
\n       - 05 = Account transferred - CDIA required method is to use Special Comment Code.
\n       - 06 (DA) = Delete entire account (for reasons other than fraud). Symitar Quest reports this code option to the credit bureaus one time, and then Symitar Quest changes the code to (1) Do Not Report when you run the Trial Balance Reports batch program.
\n       - 07 (DF) = Delete entire account due to confirmed fraud (fraud investigation completed) - Metro 2 Format.
\n       - 10 = Refinanced
\n   
\n       - Not valid in Metro 2 Format.
\n   
\n       - 42 = Repossession/now redeemed
\n   
\n       - Not valid in Metro 2 Format.
\n   
\n       - 61 = Account paid in full, was a voluntary surrender
\n       - 62 = Account paid in full, was a collection account
\n       - 63 = Account paid in full, was a repossession
\n       - 65 = Account paid in full. A foreclosure was started
\n       - 66 = Paid by dealer
\n   
\n       - Not valid in Metro 2 Format.
\n   
\n       - 67 = Bankruptcy liquidation reorganization
\n   
\n       - Not valid in Metro 2 Format.
\n   
\n       - 68 = Settled
\n   
\n       - Not valid in Metro 2 Format.
\n   
\n       - 69 = Bankruptcy adjustment plan
\n   
\n       - Not valid in Metro 2 Format.
\n   
\n       - 85 = Credit grantor could not locate consumer/consumer now located
\n       - 86 = Now paying, was a charge-off
\n   
\n       - Not valid in Metro 2 Format.
\n   
\n       - 87 = Foreclosure proceeding started
\n   
\n       - Not valid in Metro 2 Format.
\n   
\n       - 88 = Claim filed with government for insured portion of balance on a defaulted loan
\n       - 89 = Deed received in lieu of foreclosure on a defaulted mortgage; there may be a balance due
\n       - 91 = Early termination of lease/sales contract by default
\n   
\n       - Not valid in Metro 2 Format.
\n   
\n       - 92 = Insurance claim
\n   
\n       - Not valid in Metro 2 Format.
\n   
\n       - 93 = Account assigned to internal or external collections
\n       - 94 = Foreclosure completed; there may be a balance due
\n       - 95 = Voluntary surrender; there may be a balance due
\n       - 96 = Merchandise was repossessed; there may be a balance due
\n       - 98 = Credit grantor cannot locate consumer
\n
\nIf you put a close date on a charged-off loan, the loan reports to the credit bureaus one last time, with a status of closed. When the Close Date field is populated, Symitar Quest changes this field value to (1) Do Not Report, and the loan no longer reports.
\n
\nDo not enter special comment codes in this field. Enter all special comment codes in the Credit Report Comment field.
\n
\nTo assign a status code of (64) Account Paid in Full, Was a Charge Off or (97) Unpaid Balance Reported as a Loss, set this field to (0) Normal and Symitar Quest automatically assigns the status code based on whether it is reported as paid in full or as a loss.
`)
loanRecordFields.set("creditreportcomment", ` 
\n### Credit Report Comment
\nThis field stores the comment code reported to credit reporting agencies in the Metro Credit Reporting Special Comments field.
\nField Number         **137**
\nMnemonic             **CREDITREPORTCOMMENT**
\nData Type            **2 Characters**
\nSource               **System-entered or User-entered**
\nHelp File            **01437**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nType any of the following comment codes:
\n   - Blank = Removes Any Previously Reported Special Comment Code
\n   - A = Early Termination by Default (No longer used)
\n   - B = Account Payments Managed by Financial Counseling Program
\n   - C = Paid by Co-Maker or Guarantor
\n   - D = Student Loan - Payment Deferred. Requires Account Type 12 (Not used in Metro 2® Format)
\n   - E = Primary Borrower Declared Bankruptcy (Not used in Metro 2 Format)
\n   - F = Secondary Borrower Declared Bankruptcy (Not used in Metro 2 Format)
\n   - G = Account Closed Due to Transfer or Refinance (No longer used)
\n   - H = Loan Assumed by Another Party
\n   - I = Election of Remedy
\n   - J = Election of Remedy (Not used in Metro 2 Format)
\n   - K = Retains Previously Reported Special Comment (No longer used)
\n   - L = Account Closed (Not used in Metro 2 Format)
\n   - M = Account Closed at Credit Grantor's Request
\n   - N = Account Closed at Consumer's Request (Not used in Metro 2 Format)
\n   - O = Account Transferred to Another Lender
\n   - P = Dispute Resolved - Consumer Disagrees (Not used in Metro 2 Format)
\n   - Q = Dispute Resolved - Consumer Disagrees (Not used in Metro 2 Format)
\n   - R = Removes Any Previously Reported Special Comment Code (Not used in Metro 2 Format)
\n   - S = Special Handling - Contact Credit Grantor for Additional Information
\n   - U = Special Handling - Contact Credit Grantor for Additional Information (Not used in Metro 2 Format)
\n   - V = Adjustment Pending
\n   - W = Adjustment Pending (Not used in Metro 2 Format)
\n   - X = Account In Dispute under Fair Credit Billing Act (Not used in Metro 2 Format)
\n   - Y = Account In Dispute under Fair Credit Billing Act (Not used in Metro 2 Format)
\n   - Z = Account Previously In Dispute - Now Resolved (Not used in Metro 2 Format)
\n   - AA = Student Loan - Payment Deferred. Requires Account Type 12 (Not used in Metro 2 Format)
\n   - AB = Debt Being Paid Through Insurance
\n   - AC = Paying Under A Partial Payment Agreement
\n   - AD = Interest Bearing (No longer used)
\n   - AE = Non-Interest Bearing (No longer used)
\n   - AF = Single Payment Loan (Not used in Metro 2 Format)
\n   - AG = Simple Interest Loan (No longer used)
\n   - AH = Purchased By Another Lender
\n   - AI = Recalled To Military Active Duty
\n   - AJ = Payroll Deduction (No longer used)
\n   - AK = Reaffirmation Of Debt (Not used in Metro 2 Format)
\n   - AL = Student Loan Permanently Assigned To Government (No longer used)
\n   - AM = Account Payments Assured By Wage Garnishment
\n   - AN = Account Acquired By FDIC/NCUA
\n   - AO = Voluntarily Surrendered - then Redeemed or Reinstated
\n   - AP = Credit Line Suspended
\n   - AR = Contingent Liability (Not used in Metro 2 Format)
\n   - AS = Account Closed Due To Refinance
\n   - AT = Account Closed Due To Transfer
\n   - AU = Account Paid In Full For Less Than The Full Balance
\n   - AV = First Payment Never Received
\n   - AW = Affected By Natural or Declared Disaster
\n   - AX = Account Paid From Collateral
\n   - AY = Now Paying (Not used in Metro 2 Format)
\n   - AZ = Redeemed or Reinstated Repossession
\n   - BA = Transferred To Recovery
\n
\n   - Comment Codes BB through BK require Account Type 3A or 13.
\n
\n   - BB = Full Termination/Status Pending
\n   - BC = Full Termination/Obligation Satisfied
\n   - BD = Full Termination/Balance Owing
\n   - BE = Early Termination/Status Pending
\n   - BF = Early Termination/Obligation Satisfied
\n   - BG = Early Termination/Balance Owing
\n   - BH = Early Termination/Insurance Loss
\n   - BI = Involuntary Repossession
\n   - BJ = Involuntary Repossession/Obligation Satisfied
\n   - BK = Involuntary Repossession/Balance Owing
\n   - BL = Credit Card Lost or Stolen
\n
\n   - Comment Codes BN and BP require Account Status Code 13 or 61–65 and a Current Balance of zero.
\n
\n   - BN = Paid By Company Which Originally Sold The Merchandise
\n   - BO = Foreclosure Proceeding Started
\n   - BP = Paid Through Insurance
\n   - BQ = Payment Deferred (Not used in Metro 2 Format)
\n   - BS = Prepaid Lease - Requires Account Type 3A or 13
\n   - BT = Principal Deferred/Interest Payment Only
\n   - BU = Account Information Disputed By Consumer (Not used in Metro 2 Format)
\n   - BV = Bankruptcy Chapter 7 (Not used in Metro 2 Format)
\n   - BW = Bankruptcy Chapter 11 (Not used in Metro 2 Format)
\n   - BX = Bankruptcy Chapter 12 (Not used in Metro 2 Format)
\n   - BY = Bankruptcy Withdrawn (Not used in Metro 2 Format)
\n   - CA = Account Closed at Consumer's Request and in Dispute (Not used in Metro 2 Format)
\n   - CB = Account Closed at Consumer's Request and Dispute Resolved, Consumer Disagrees (Not used in Metro 2 Format)
\n   - CH = Guaranteed/Insured
\n   - CI = Account Closed Due to Inactivity
\n
\n   - For Comment Codes CJ and CM, the Account Status Code should not be 13 or 61–65 and the Current Balance should not be zero.
\n
\n   - CJ = Credit Line No Longer Available – In Repayment Phase
\n   - CK = Credit Line Reduced Due to Collateral Depreciation
\n   - CL= Credit Line Suspended Due to Collateral Depreciation
\n   - CM = Collateral Released by Creditor / Balance Owing
\n   - CN = Loan Modified Under a Federal Government Plan
\n   - CO = Loan Modified, but Not Under a Federal Government Plan
\n   - CP = Loan in Forbearance
\n   - DE = Extinguished Debt
\n   - HA = Special Evaluation Required - Account Payment Affected By Hostile Acts Against the United States (Not used in Metro 2 Format)
\n
\nThe Credit Reporting Code field no longer contains values representing the special comments described above. Enter all special comment codes in this field. Discuss the use of special comment codes with your credit reporting agency.
\n
\nSymitar Quest automatically reports special comment code L (Account Closed) for any line of credit loan that is closed or that is current but has an expired credit limit. Symitar Quest reports this special comment code only if you leave this field blank. If you want to report special comment code M (Account Closed at Credit Grantor's Request) or N (Account Closed at Consumer's Request), you must manually type the appropriate code in this field.
\n***Important:***  For Metro I reporting, you must manually type special comment code N (Account Closed at Consumer's Request) for any line of credit loan closed at the consumer's request.
`)
loanRecordFields.set("creditreportnumber", ` 
\n### Credit Report Number
\nThis account number in this field is sent to the credit bureaus the last time that the credit reporting tape runs.
\nField Number         **085**
\nMnemonic             **CREDITREPORTNUMBER**
\nData Type            **17 Characters**
\nSource               **System-entered**
\nHelp File            **01385**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf the account number in this field is different from the account number the loan is currently associated with, an L1 segment is generated during the next run of the credit reporting tape batch function (that is, if Change Account Number Wizard was run against the member account associated with this loan, the old account number populates this field.)
\nSymitar Quest creates the number in this field when you run the Trial Balance Reports batch program. It uses the account number under which Symitar Quest previously reported this loan to a credit bureau and the loan ID as follows:
\n   - First three digits: Symitar Quest fills these digits with 000.
\n   - Next ten digits: Symitar Quest uses the value in the loan's Account Number field.
\n   - Last four digits: Symitar Quest uses the value in the loan's Loan ID field. If your credit union uses a two-digit Loan ID, Symitar Quest adds a leading zero and places another zero between the two digits of the Loan ID field value. For a three-digit loan ID, Symitar Quest adds a leading zero.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("creditreportlaststatus", ` 
\n### Credit Report Last Status
\nSymitar Quest stores the last Metro Credit Reporting Status Code reported to the credit bureau in this field.
\nField Number         **136**
\nMnemonic             **CREDITREPORTLASTSTATUS**
\nData Type            **Code to 99**
\nSource               **System-entered**
\nHelp File            **01436**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSee the Credit Reporting Code field description for a list of valid codes. This field contains 0 if the share or loan has never been reported. Symitar Quest updates this field whenever you run the Credit Reporting Tape option of the Trial Balance batch program.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("creditreportoccurdate", ` 
\n### Credit Report Occurrence
\nSymitar Quest stores the last Metro Credit Reporting date in this field of occurrence reported to the credit bureau.
\nField Number         **135**
\nMnemonic             **CREDITREPORTOCCURDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01435**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIt contains a date null (__/__/__) if the loan has never been reported or if the Credit Report Last Status field value is either (11) Current or (13) Paid or Closed Account/Zero Balance.
\n
\nThe date of occurrence reported to credit bureaus must contain the date of the first delinquency that led to the derogatory status being reported. This field is used by the credit reporting agencies to purge information from their databases.
\n
\nSymitar Quest calculates the date of occurrence by looking back through the loan transaction history and determining the delinquency status of the loan as of the last day of each month. When Symitar Quest finds a month-end where the loan would have been reported as current (under 30 days delinquent), Symitar Quest then uses the due date as of the end of the following month (the first month the loan would have been reported delinquent) and adds 30 days.
\nThere is an exception if any of the following is true:
\n   - The loan is current on the date you run the reporting tape.
\n   - There is insufficient transaction history on file to find a month-end when the loan was current.
\n   - The date found does not make sense when compared to the delinquency status.
\n   - The date is after the loan charge-off date for charge-offs.
\n
\nIn the case of an exception, Symitar Quest uses the Original Loan Date field value (or the Open Date field value if the Original Loan Date field is blank). You are required to report this date if the actual date of occurrence is not known.
\n
\nThe date of occurrence starts over every time the loan is current, then "freezes" upon the first derogatory status (30 days delinquent).
\n
\nIf you manually set the value in the Credit Reporting Code field to force a derogatory status to be reported, you must manually set this field to the correct date of occurrence.
`)
loanRecordFields.set("creditreportconsumerinfo", ` 
\n### Credit Report Consumer Info
\nThis field stores consumer information indicators (CII) for the Metro 2® Format for credit reports.
\nField Number         **162**
\nMnemonic             **CREDITREPORTCONSUMERINFO**
\nData Type            **2 Characters**
\nSource               **System-entered or User-entered**
\nHelp File            **01462**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nType one of the following:
\n
\nA value in this field without a corresponding value in the Loan Name or Pledge Name Credit Report Consumer Info field indicates that the value applies only to the primary account holder. If there is no value here, but there is one in the corresponding field in the Loan Name or Pledge Name record, that indicates the value there applies only to the secondary or associated consumer. Values for this field in both records apply to both the primary and secondary consumer.
`)
loanRecordFields.set("creditreportconsumerinfodate", ` 
\n### Credit Rpt Consumer Date
\nThis field stores the date you last performed file maintenance on the Credit Report Consumer Info field.
\nField Number         **260**
\nMnemonic             **CREDITREPORTCONSUMERINFODATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01560**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever you perform file maintenance on the Credit Report Consumer Info field in the Loan record, Symitar Quest does not update this field with the system date. You must set the date manually.
\nTip: You can set field-level security privileges for this field to let you control file maintenance. To set the privileges, go to the Parameter Manager, select Field Control Parameters, and then select Loan. If you do not specify field-level security privileges, the default lets all users perform file maintenance on this field.
\n
\nWhen the bankruptcy (BK loan) is current, this field is used as the date of first delinquency.
`)
loanRecordFields.set("creditrptdeferredpmtstart", ` 
\n### Credit Rpt Deferred Pmt Start
\nThis field stores the date when the first payment is due for a deferred loan (usually a student loan).
\nField Number         **289**
\nMnemonic             **CREDITRPTDEFERREDPMTSTART**
\nData Type            **Date**
\nSource               **System-entered or User-entered**
\nHelp File            **31120**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf the date is set in the future at the time of credit reporting, and you are using the Metro 2® Format (Symitar v.2), Symitar Quest reports the loan as deferred.
\n
\nWhen you set this field to a future date, you still have to set the value in the Due Date field appropriately, so that the loan status and past due amounts are calculated and reported properly.
`)
loanRecordFields.set("creditreportcompliance", ` 
\n### Credit Report Compliance Info
\nThis field stores consumer information for the Metro 2® Format for credit reports.
\nField Number         **163**
\nMnemonic             **CREDITREPORTCOMPLIANCE**
\nData Type            **2 Characters**
\nSource               **System-entered or User-entered**
\nHelp File            **01463**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nType one of the following:
`)
loanRecordFields.set("creditscoretype", ` 
\n### Credit Score Type
\nThis field stores a credit union-defined code that specifies the type of credit score to be calculated.
\nField Number         **200**
\nMnemonic             **CREDITSCORETYPE**
\nData Type            **Code to 9**
\nSource               **User-entered or System-entered**
\nHelp File            **01500**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf you want to calculate credit scores, you must contact us to program the calculations. Once the credit scoring calculations are programmed, you can enter a credit union-defined code (0-9) to specify the type of credit score to be calculated.
\n
\nIf you create a Loan record, Symitar Quest initializes this field to 0. If you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Credit Score Type field from the specified Application record.
\n
\nAlthough you can perform file maintenance on this field, it is intended primarily as a historical record of the credit score used to approve the loan so that you can review the lending policy by comparing payment history to credit scores to see if the scoring method in use is effective.
`)
loanRecordFields.set("creditscore", ` 
\n### Credit Score
\nThis field stores the results of credit score calculations.
\nField Number         **199**
\nMnemonic             **CREDITSCORE**
\nData Type            **Number to 999,999,999**
\nSource               **User-entered or System-entered**
\nHelp File            **01499**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf you want to calculate credit scores, you must contact us to program the calculations. This field stores the results of those credit score calculations.
\n
\nIf you create a Loan record, Symitar Quest initializes this field to 0. If you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Credit Score field from the specified Application record.
\n
\nAlthough you can perform file maintenance on this field, it is intended primarily as a historical record of the credit score used to approve the loan so that you can review the lending policy by comparing payment history to credit scores to see if the scoring method in use is effective.
`)
loanRecordFields.set("bureauscore", ` 
\n## BUREAUSCORE:1
\n### Bureau Score Experian
\nThis field stores the most recent credit score received from the Experian credit bureau for the main applicant for the loan.
\nField Number         **227:1**
\nMnemonic             **BUREAUSCORE:1**
\nData Type            **Number to 999,999,999**
\nSource               **User-entered or System-entered**
\nHelp File            **01527**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar Quest always updates this field automatically when it associates a new credit report with the main applicant. You can also perform file maintenance on this field to change score information back to a possibly higher or more preferable score, if circumstances permit. This field is also an Application record field.
\n
\n## BUREAUSCORE:2
\n### Bureau Score Equifax
\nThis field stores the most recent credit score received from the Equifax credit bureau for the main applicant for the loan.
\nField Number         **227:2**
\nMnemonic             **BUREAUSCORE:2**
\nData Type            **Number to 999,999,999**
\nSource               **User-entered or System-entered**
\nHelp File            **01527**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar Quest always updates this field automatically when it associates a new credit report with the main applicant. You can also perform file maintenance on this field to change score information back to a possibly higher or more preferable score, if circumstances permit. This field is also an Application record field.
\n
\n## BUREAUSCORE:3
\n### Bureau Score Transunion
\nThis field stores the most recent credit score received from the Transunion® credit bureau for the main applicant for the loan.
\nField Number         **227:3**
\nMnemonic             **BUREAUSCORE:3**
\nData Type            **Number to 999,999,999**
\nSource               **User-entered or System-entered**
\nHelp File            **01527**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar Quest always updates this field automatically when it associates a new credit report with the main applicant. You can also perform file maintenance on this field to change score information back to a possibly higher or more preferable score, if circumstances permit. This field is also an Application record field.
\n
\n## BUREAUSCORE:4
\n### Bureau Score ChexSystems
\nThis field stores the most recent credit score received from the ChexSystems® credit bureau for the main applicant for the loan.
\nField Number         **227:4**
\nMnemonic             **BUREAUSCORE:4**
\nData Type            **Number to 999,999,999**
\nSource               **User-entered or System-entered**
\nHelp File            **01527**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nChexSystems does not currently offer credit scores with their reports so the value of this field is always zero.
`)
loanRecordFields.set("origriskgrade", ` 
\n### Original Risk Grade
\nThis field stores the original risk grade assigned to the note when it was originated.
\nField Number         **299**
\nMnemonic             **ORIGRISKGRADE**
\nData Type            **4 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **31130**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is file maintained.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Original Risk Grade field from the specified Application record.
`)
loanRecordFields.set("crinttypeind", ` 
\n### CR Interest Type Indicator
\nThis field stores the interest rate indicator reported to the credit reporting bureaus using the Metro 2® Format (Symitar v.2).
\nField Number         **303**
\nMnemonic             **CRINTTYPEIND**
\nData Type            **1 Character**
\nSource               **User-entered**
\nHelp File            **31135**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
`)
loanRecordFields.set("lastcrreportdate", ` 
\n### Last CR Reporting Date
\nSymitar Quest stores the date in this field when the first payment is due for a deferred loan (usually a student loan).
\nField Number         **252**
\nMnemonic             **LASTCRREPORTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01552**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen you run the Trial Balance Reports batch program and select the Credit Reporting Tape option, Symitar Quest stores the current date in this field to indicate when the loan was last reported.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("crhighbal", ` 
\n### CR Highest Balance
\nSymitar Quest stores the highest balance ever attained on a loan in this field.
\nField Number         **251**
\nMnemonic             **CRHIGHBAL**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01551**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Trial Balance Reports batch program calculates and stores this value.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("creditreporttransferindicator", ` 
\n### CR Transfer Indicator
\nThis field stores a code indicating whether the CR Transfer Name field contains the name of the company from which the loan was purchased or to which it was sold.
\nField Number         **126**
\nMnemonic             **CREDITREPORTTRANSFERINDICATOR**
\nData Type            **Code to 9**
\nSource               **User-entered or System-entered**
\nHelp File            **01426**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThis information is reported as the portfolio indicator in Field 2 of the K2 Segment of the Metro 2® Format (Symitar v.2).
\n#### Data Type Descriptions
\n##### (0) Do not send
\n   There is no K2 Segment to report.##### (1) Purchased from Name
\n   The CR Transfer Name field contains the name of the company from whom the portfolio was purchased.##### (2) Sold to Name
\n   The CR Transfer Name field contains the name of the company to whom the portfolio was sold.##### (9) Remove prev reported Name
\n   Remove previously reported K2 Segment information.
\nIf an entry of 1, 2, or 9 is made in this field, the CR Transfer Date field cannot be blank.
\n
\nIf an entry of 1, or 2 is made in this field, the CR Transfer Name field cannot be blank.
\nIf an entry of 9 is made in this field and the CR Transfer Date field value is after the Last CR Reporting Date field value then the Trial Balance batch program performs the following actions:
\n   - Resets this field to (0) Do not send
\n   - Clears the CR Transfer Name field
\n   - Clears the CR Transfer Date field
`)
loanRecordFields.set("creditreporttransfername", ` 
\n### CR Transfer Name
\nThis field stores the name of the company from which the portfolio or partial portfolio was purchased or to which the portfolio was sold.
\nField Number         **128**
\nMnemonic             **CREDITREPORTTRANSFERNAME**
\nData Type            **30 Characters**
\nSource               **User-entered**
\nHelp File            **01428**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe CR Transfer Indicator field value identifies this relationship.
\n
\nThis information is reported as the Purchased Portfolio or Sold To Name in Field 3 of the K2 Segment in the Metro 2® Format (Symitar v.2).
\n
\nThe Trial Balance batch program clears this field when the CR Transfer Indicator field value is set to (9) Remove prev reported Name and the CR Transfer Date field value is after the CR Reporting Date field value.
`)
loanRecordFields.set("creditreporttransferdate", ` 
\n### CR Transfer Date
\nThis field stores either the date the loan was transferred (purchased or sold) or the date the credit union decided to send the removal code.
\nField Number         **127**
\nMnemonic             **CREDITREPORTTRANSFERDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01427**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf this field date is after the date in the Last CR Reporting Date field, then a K2 Segment is sent.
\n
\nThis field is used to initiate the reporting of a transferred loan in the K2 Segment of the Metro 2® Format (Symitar v.2).
\nIf an entry of 1, 2, or 9 is made in the CR Transfer Indicator field, the CR Transfer Date field cannot be blank. You cannot save the Loan record until you enter a date in this field. If you do not make an entry, Symitar Quest displays the following message:
\n   - CR Transfer Date cannot be blank
`)
loanRecordFields.set("crpmtcurrent", ` 
\n### Current CR Pmt History
\nSymitar Quest stores the payment status in this field for the current month when you run the Trial Balance Reports batch program.
\nField Number         **249**
\nMnemonic             **CRPMTCURRENT**
\nData Type            **1 Character**
\nSource               **System-entered**
\nHelp File            **01549**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nValid values include:
\n   - Stored Value	Value Displayed
\n   - 0	Current account
\n   - 1	30–59 days past due date
\n   - 2	60–89 days past due date
\n   - 3	90–119 days past due date
\n   - 4	120–149 days past due date
\n   - 5	150–179 days past due date
\n   - 6	180 or more days past due date
\n   - B	No payment history available before this time
\n   - D	No payment history available this month
\n   - E	Zero balance and current account
\n   - G	Collection
\n   - H	Foreclosure completed
\n   - J	Voluntary Surrender
\n   - K	Repossession
\n   - L	Charge-off
`)
loanRecordFields.set("crpmthistory", ` 
\n### CR Pmt History 01 - CR Pmt History 24
\nSymitar Quest stores values in these fields that represents the payment status from one month to 24 months before the current calendar month.
\nField Number         **250:1 - 250:24**
\nMnemonic             **CRPMTHISTORY:1 - CRPMTHISTORY:24**
\nData Type            **1 Character**
\nSource               **System-entered**
\nHelp File            **01550**
\nDefault Control      **No**
\nDefault Value **B**
\n
\nSymitar Quest stores each appropriate payment status (one month before the current calendar month in CR Pmt History 01, two months before the current calendar month in CR Pmt History 02, etc.) in these fields after you run the Trial Balance Reports batch program and select the Update Credit Rpt Pmt History Buckets prompt. See the Current CR Pmt History field description for a description of valid payment status values.
`)
loanRecordFields.set("mortgageidnumber", ` 
\n### Mortgage Identification Number
\nThis field stores the mortgage identification number assigned to a mortgage loan and remains with that loan regardless of the lender that currently owns it.
\nField Number         **399**
\nMnemonic             **MORTGAGEIDNUMBER**
\nData Type            **18 Characters**
\nSource               **User-entered**
\nHelp File            **31231**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter the 18-digit mortgage identification number assigned to a mortgage loan and remains with that loan regardless of the lender that currently owns it. You may not enter special characters or blanks.
`)
loanRecordFields.set("agencyidentifier", ` 
\n### Agency Identifier
\nThis field stores a code that indicates if a secondary agency is identified.
\nField Number         **397**
\nMnemonic             **AGENCYIDENTIFIER**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31229**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 00 Mortgage Identification Number unavailable
\n   The mortgage does not have a secondary agency.##### 01 Fannie Mae
\n   Fannie Mae is the secondary agency.##### 02 Freddie Mac
\n   Freddie Mac is the secondary agency.
\n`)
loanRecordFields.set("agencyacctnumber", ` 
\n### Agency Account Number
\nThis field stores a unique identifier issued by one of the secondary agencies: Fannie Mae® or Freddie Mac®.
\nField Number         **398**
\nMnemonic             **AGENCYACCTNUMBER**
\nData Type            **18 Characters**
\nSource               **User-entered**
\nHelp File            **31230**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter a unique identifier (18 characters) issued by one of the secondary agencies: Fannie Mae® or Freddie Mac®. You may not enter special characters or blanks.
`)
loanRecordFields.set("acquisitiondate", ` 
\n### Acquisition Date
\nThis field stores the date the loan was acquired from a third party.
\nField Number         **411**
\nMnemonic             **ACQUISITIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31238**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe IRS Form 1098 (box 11) reporting uses this field.
`)
loanRecordFields.set("acquisitionbalance", ` 
\n### Acquisition Balance
\nThis field stores the outstanding loan principal balance as of the date of acquisition from a third party.
\nField Number         **412**
\nMnemonic             **ACQUISITIONBALANCE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31240**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe IRS Form 1098 (box 2) reporting uses this field when the acquisition date is in the IRS reporting year.
`)
loanRecordFields.set("accelerationgoodthrudate", ` 
\n### Acceleration Good Thru Date
\nThis field stores the final date (called the "good-through date") after which the value that you entered in the Acceleration Amount field is no longer valid.
\nField Number         **418**
\nMnemonic             **ACCELERATIONGOODTHRUDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31250**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
loanRecordFields.set("accelerationamt", ` 
\n### Acceleration Amount
\nThis field stores the payment amount that a borrower must pay by a specified date.
\nField Number         **419**
\nMnemonic             **ACCELERATIONAMT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31251**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen you enter an amount in this field, Symitar Quest uses this amount as the total in the Periodic Mortgage Statement Amount Due field under the Explanation of Amount Due heading.
`)
loanRecordFields.set("accelerationstmtmsgcode", ` 
\n### Acceleration Stmt Msg Code
\nThis field stores the acceleration statement message code that you defined in Statement Messages parameters.
\nField Number         **420**
\nMnemonic             **ACCELERATIONSTMTMSGCODE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **31252**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar Quest prints the message below the Periodic Mortgage Statement Acceleration Amount Due field in the Explanation of Amount Due section.
\nWhen SymConnect, SymXchange, or a batch program performing file maintenance enters an undefined message code in this field, Symitar Quest displays this message:
\n   - Statement Message Code is Undefined
`)
loanRecordFields.set("reinstatementgoodthrudate", ` 
\n### Reinstatement Good Thru Date
\nThis field stores the final date (called the "good-through date") after which a payment in the Reinstatement Amount field no longer reinstates the loan.
\nField Number         **421**
\nMnemonic             **REINSTATEMENTGOODTHRUDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31253**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
loanRecordFields.set("reinstatementamt", ` 
\n### Reinstatement Amount
\nThis field stores the amount that your borrower must pay to reinstate their loan by a specified date.
\nField Number         **422**
\nMnemonic             **REINSTATEMENTAMT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31254**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis is an alternative payment option when your credit union requests an acceleration amount.
\nWhen you enter a value in this field, Symitar Quest modifies the periodic mortgage statement to do the following:
\n   - Use the amount that you enter in this field in the Amount Due section of the statement.
\n   - Add the Periodic Mortgage Statement Reinstatement Amount Due and Acceleration Amount Due fields under the Explanation of Amount Due heading.
\nWhen saving the Loan record, if a value is not entered in this field, Symitar Quest displays this error message:
\n   - The Acceleration Amount must have a value when a Reinstatement Amount exists
`)
loanRecordFields.set("reinstatementstmtmsgcode", ` 
\n### Reinstatement Stmt Msg Code
\nThis field stores the reinstatement statement message code that you defined in Statement Messages parameters.
\nField Number         **423**
\nMnemonic             **REINSTATEMENTSTMTMSGCODE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **31255**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar Quest prints this message below the Periodic Mortgage Statement Reinstatement Amount Due field in the Explanation of Amount Due section of the periodic mortgage statement.
\nWhen SymConnect, SymXchange, or a batch program performing file maintenance enters an undefined message code in this field, Symitar Quest displays this message:
\n   - Statement Message Code is Undefined
`)
loanRecordFields.set("sendfinalchgoffstmt", ` 
\n### Send Final Charge Off Stmt
\nThis field stores a code that indicates whether you want Symitar Quest to produce a periodic mortgage statement for a final charge-off the next time you run the Statement Generation batch program.
\nField Number         **406**
\nMnemonic             **SENDFINALCHGOFFSTMT**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31241**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   You do not want Symitar Quest to produce a periodic mortgage statement for a final charge-off.##### (1) Yes
\n   You want to have Symitar Quest produce a periodic mortgage statement for the final charge-off. Symitar Quest adds wording to indicate that the statement is final:
\n       - Suspension of Statements & Notice of Charge Off-Retain this copy for your record
\n   
\n       - You can only select this option if there is a value in the Charge-off Date field of the Loan record.
\n   
\n       - When you select this option, and the Final Charge Off Stmt Date field is null, the Statement Cutoff Processing batch program populates the Final Charge Off Stmt Date field with the system date.
\n   
\n       - Symitar Quest then prints on the statement the same message that your credit union set up in the Statement Messages parameters in Parameter Manager and indicated in the Final Chg Off Stmt Msg Code field value.
\n   
\n       - The Statement Generation batch program generates the mortgage statement with the final charge-off message until the statement cycle expires. This allows you to rerun the Statement Generation batch program multiple times, if necessary. When the cycle expires, statement generation no longer produces statements for the loan.
\n   
\n       - The requirement for a charge-off date holds true for transactions performed by the Miscellaneous Processing batch program, with SymConnect, or with SymXchange.
`)
loanRecordFields.set("finalchgoffstmtdate", ` 
\n### Final Charge Off Stmt Date
\nSymitar Quest stores the system date in this field when you run the Statement Cutoff Processing batch program for the periodic mortgage statement.
\nField Number         **407**
\nMnemonic             **FINALCHGOFFSTMTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **31242**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe Statement Generation batch program creates the final charge-off statement each time statement generation is run for the reporting period.
\n
\nWhen a date appears in this field, the Statement Cutoff Processing batch program excludes the loan from subsequent statement cutoff processing jobs.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("finalchgoffstmtmsgcode", ` 
\n### Final Chg Off Stmt Msg Code
\nThis field stores a code for the charge-off statement message based on your entry in the Statement Messages parameters in Parameter Manager.
\nField Number         **408**
\nMnemonic             **FINALCHGOFFSTMTMSGCODE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **31243**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThis message code permits the addition of a final charge-off statement on the periodic mortgage statement.
\nWhen SymConnect, SymXchange, or a batch program performing file maintenance enters an undefined message code in this field, Symitar Quest displays this message:
\n   - Statement Message Code is undefined.
\nIf the statement message code you enter includes a placeholder (such as !EFFECTDATE, Symitar Quest resets the field to its previous value and displays this error message:
\n   - Invalid placeholder
`)
loanRecordFields.set("foreclosureeffectdate", ` 
\n### Foreclosure Effective Date
\nThis field stores the effective date on which your credit union made the first notice or filing required for foreclosure.
\nField Number         **403**
\nMnemonic             **FORECLOSUREEFFECTDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31235**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAfter this date, you can include a message in the periodic mortgage statement to notify the borrower of the filing, for example:
\n   - ACCORDING TO OUR RECORDS, WE FILED THE PAPERWORK FOR FORCLOSURE ON 
\n   -     AUGUST 1, 2016. IF YOU FEEL THIS WAS IN ERROR, PLEASE CONTACT YOUR 
\n   -     LOAN OFFICER AT 1-800-999-9999.
\n   -     
\n
\nSymitar Quest prints on the statement the same message that your credit union set up in the Statement Messages of Parameter Manager and indicated in the Foreclosure Stmt Msg Code field value.
\n
\nIf you enter a date in this field that is equal to or later than the date in the Foreclosure Expiration Date field, Symitar Quest clears the Foreclosure Expiration Date field.
`)
loanRecordFields.set("foreclosureexpiredate", ` 
\n### Foreclosure Expiration Date
\nThis field stores the date that the loan is no longer in foreclosure.
\nField Number         **404**
\nMnemonic             **FORECLOSUREEXPIREDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31236**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest no longer includes the message in the periodic mortgage statement that notifies the borrower of a foreclosure filing.
\nIf you enter a date in this field that is equal to or earlier than the date in the Foreclosure Effective Date field, Symitar Quest displays the following error message:
\n   - Foreclosure Expiration Date must be after the Foreclosure Effective Date
`)
loanRecordFields.set("foreclosurestmtmsgcode", ` 
\n### Foreclosure Stmt Msg Code
\nThis field stores a code for the foreclosure statement message code that you set up in the Statement Messages parameters in Parameter Manager.
\nField Number         **405**
\nMnemonic             **FORECLOSURESTMTMSGCODE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **31237**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe code contains the parameters that you used to create the foreclosure statement message that appears on a delinquent periodic mortgage loan statement.
\nWhen SymConnect, SymXchange, or a batch program performing file maintenance enters an undefined message code in this field, Symitar Quest displays this message:
\n   - Statement Message Code is undefined
`)
loanRecordFields.set("lossmiteffectdate", ` 
\n### Temp Loss Mit Effective Date
\nThis field stores the effective date on which you add the loan to a loss mitigation program.
\nField Number         **400**
\nMnemonic             **LOSSMITEFFECTDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31232**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWithin the parameters allowed by the Consumer Financial Protection Bureau (CFPB), while a loan is in a loss mitigation program, you can include a loss mitigation message in the periodic mortgage statement. The message describes the program to which the member has agreed.
\n
\nOn the earliest periodic mortgage statement sent on or after the date you enter in this field, Symitar Quest prints the loss mitigation message on the statement. Symitar Quest uses the message that your credit union sets up in the Statement Messages in Parameter Manager and indicated in the Temp Loss Mit Stmt Msg Code field value. If the Temp Loss Mit Payment field is populated, a modified mortgage statement generates and the contracted payment amount and the temporary loss mitigation payment amount appears in the Explanation of Amount Due section. Symitar Quest uses the messages that your credit union set up in the Statement Messages in Parameter Manager and referenced in the Temp Loss Mit Pmt Stmt Msg Cde field value and the Regular Payment Stmt Msg Code field value.
\n
\nIf you enter a date in this field that is equal to or later than a date already entered in the Temp Loss Mit Expiration Date field value, Symitar Quest clears that field.
`)
loanRecordFields.set("lossmitexpiredate", ` 
\n### Temp Loss Mit Expiration Date
\nThis field stores the date on and after which the loan is no longer included in a loss mitigation program.
\nField Number         **401**
\nMnemonic             **LOSSMITEXPIREDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31233**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhile a loan is in a loss mitigation program, you can include a loss mitigation message, a loss mitigation payment amount, a loss mitigation payment message, and a regular payment message in the Periodic Mortgage Statement indicating any loss mitigation program to which the borrower has agreed.
\n
\nAfter the expiration date, Symitar Quest no longer includes the message about the loss mitigation program.
\nIf you enter a date in this field that is equal to or earlier than a date already entered in the Temp Loss Mit Effective Date field value, Symitar Quest displays this error message when saving the record:
\n   - Loss Mit Expiration Date must be after the Loss Mit Effective Date.
`)
loanRecordFields.set("lossmitstmtmsgcode", ` 
\n### Temp Loss Mit Stmt Msg Code
\nThis field stores a code for the mitigation statement message code that you set up in the Statement Messages parameters in Parameter Manager.
\nField Number         **402**
\nMnemonic             **LOSSMITSTMTMSGCODE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **31234**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe code contains the parameters that you used to create the loss mitigation message that appears on periodic mortgage loan statements.
\nWhen SymConnect, SymXchange, or a batch program performing file maintenance enters an undefined message code in this field, Symitar Quest displays this message:
\n   - Statement Message Code is undefined
`)
loanRecordFields.set("lossmitpayment", ` 
\n### Temp Loss Mit Payment
\nThis field stores the temporary loss mitigation payment amount that the member agreed to for the loan.
\nField Number         **415**
\nMnemonic             **LOSSMITPAYMENT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31247**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen you enter a value in this field, Symitar Quest modifies the Periodic Mortgage Statement to do the following:
\n   - Use the amount that you enter in this field as the current payment due.
\n   - Calculate the total in the Amount Due section of the periodic mortgage statement, based on the current and past due temporary loss mitigation payments.
\n   - Add a temporary loss mitigation payment breakdown in the Explanation of Amount Due section of the periodic mortgage statement, along with the contractual loan payment amount due.
\n
\n   - The loss mitigation payment breakdown appears for any statements generated on or after the Temp Loss Mit Effective Date field value, up to the Temp Loss Mit Expiration Date field value.
\nWhen you enter a value in this field, if you do not also enter a value in the Temp Loss Mit Effective Date field, Symitar Quest displays this message:
\n   - Temp Loss Mit Eff Date must have a value 
\n   -     when a Temp Loss Mit Payment exists
\n***Important:***  The Payment field value reflects the amount established in the original loan contract. Symitar Quest applies payments made under a temporary loss mitigation program as partial payments. The system advances the loan due date only when the member makes a full periodic payment.
`)
loanRecordFields.set("lossmitpmtstmtmsgcode", ` 
\n### Temp Loss Mit Pmt Stmt Msg Cde
\nThis field stores a code for the mitigation payment statement message code that you set up in the Statement Messages parameters in Parameter Manager.
\nField Number         **416**
\nMnemonic             **LOSSMITPMTSTMTMSGCODE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **31248**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe message only appears in the statement when all the following conditions are met:
\n   - The Temp Loss Mit Payment field value is greater than 0.00.
\n   - The Temp Loss Mit Effective Date field value is equal to or earlier than the system date.
\n   - The Temp Loss Mit Expiration Date field value is later than the system date or is blank.
\n
\nUnder those conditions, the value stored here prints below the Periodic Mortgage Statement Total Amount Due field in the Temporary Loss Mitigation Payment section.
\nWhen SymConnect, SymXchange, or a batch program performing file maintenance enters an undefined message code in this field, Symitar Quest displays this message:
\n   - Statement Message Code is Undefined
`)
loanRecordFields.set("regpaymentstmtmsgcode", ` 
\n### Regular Payment Stmt Msg Code
\nThis field stores a code for the regular statement message code that you set up in the Statement Messages parameters in Parameter Manager.
\nField Number         **417**
\nMnemonic             **REGPAYMENTSTMTMSGCODE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **31249**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe message only appears in the statement when all the following conditions are met:
\n   - The Temp Loss Mit Payment field value is greater than 0.00.
\n   - The Temp Loss Mit Effective Date field value is equal to or earlier than the system date.
\n   - The Temp Loss Mit Expiration Date field value is later than the system date or is blank.
\n
\nUnder those conditions, the value stored here prints below the Periodic Mortgage Statement Total Amount Due field in the Regular Payment section.
\nWhen SymConnect, SymXchange, or a batch program performing file maintenance enters an undefined message code in this field, Symitar Quest displays this message:
\n   - Statement Message Code is Undefined
`)
loanRecordFields.set("currstmtlossmitamtdue", ` 
\n### Curr Stmt Temp LossMit AmtDue
\nSymitar Quest stores the total amount due in this field for an active temporary loss mitigation plan as of the most recent statement cutoff for this loan.
\nField Number         **424**
\nMnemonic             **CURRSTMTLOSSMITAMTDUE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31256**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever the Statement Cutoff Processing batch program affects this loan, Symitar Quest transfers the value in this field to the Prev Stmt Temp LossMit AmtDue field value, and then recalculates this field.
\n
\nThe Statement Cutoff Processing batch program calculates this field as follows: Prev Stmt Temp LossMit AmtDue + Temp Loss Mit Payment - calculated total of loan payments made during the statement period.
\nThe starting and ending dates for the loan payment activity depend on these two conditions:
\n   - Condition	Starting Date	Ending Date
\n   - Value in the Statement Previous Date field is later than or equal to the value in the Temp Loss Mit Effective Date field	Previous statement date	Through the current statement date
\n   - Value in the Statement Previous Date field is earlier than the value in the Temp Loss Mit Effective Date field	Temporary loss mitigation effective date	Through the current statement date
\n
\nThis field cannot contain a negative value.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("prevstmtlossmitamtdue", ` 
\n### Prev Stmt Temp LossMit AmtDue
\nSymitar Quest stores the total amount due in this field for the temporary loss mitigation plan from the previous statement produced for this loan.
\nField Number         **425**
\nMnemonic             **PREVSTMTLOSSMITAMTDUE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31257**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen you run the Statement Cutoff Processing batch program, Symitar Quest puts the value of the Curr Stmt Temp LossMit AmtDue field value for the previous processing period (such as a month) into this field.
\n
\nThis field cannot contain a negative value.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("stmtnotestartdate", ` 
\n### Statement Note Start Date
\nSymitar Quest stores the value of the Enter Date field of the oldest active Statement Note record in this field that appears on the periodic mortgage statement as of the system date you run the Statement Cutoff Processing batch program.
\nField Number         **413**
\nMnemonic             **STMTNOTESTARTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **31244**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis field only applies to statement notes that you create under the Loan record. It does not apply to custom notes.
\n
\nWhen you create a Statement Note record, Symitar Quest stores the system date in the Enter Date field. That field does not appear in the record, so you cannot perform file maintenance on the date.
\n
\nEach time you run the Statement Cutoff Processing batch program, the batch program resets this field. The date is from the oldest active Statement Note record that does not exceed the number of days you enter at the batch program's Max Stmt Note Look Back prompt. Symitar Quest stores that date in this field regardless of the Expire Date field value in the Statement Note record.
\n
\nWhen the Enter Date field value in the Statement Note record exceeds the number of days set at the Max Stmt Note Look Back prompt, the Statement Note record no longer appears on the periodic mortgage statement.
\nThe Statement Cutoff Processing batch program leaves this field blank when any of these conditions are true:
\n   - There are no Statement Note records under the loan.
\n   - All Statement Note records under the loan have a value in the Expire Date field that is equal to or earlier than the effective date on which you run the batch program.
\n   - All the Statement Note records under the loan have a value in the Enter Date field that exceeds the value you enter at the Max Stmt Note Look Back prompt. In such a case, this field is blank even if the Expire Date field of the Statement Note record is in the future.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("bkchapterreported", ` 
\n### Bankruptcy Chapter Reported
\nThis field stores a code that identifies the Bankruptcy Chapter reported.
\nField Number         **427**
\nMnemonic             **BKCHAPTERREPORTED**
\nData Type            **Code to 4**
\nSource               **User-entered**
\nHelp File            **31259**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) None
\n   A Bankruptcy record does not exist.##### (1) Chapter 7
\n   A Chapter 7 bankruptcy is reported.
\n   
\n       - You cannot select this option if an open Bankruptcy record is found with PrePetition Bal records.
\n##### (2) Chapter 11
\n   A Chapter 11 bankruptcy is reported.
\n   
\n       - You cannot select this option if an open Bankruptcy record is found with PrePetition Bal records.
\n##### (3) Chapter 12
\n   A Chapter 12 bankruptcy is reported.##### (4) Chapter 13
\n   A Chapter 13 bankruptcy is reported.
\nSymitar Quest uses the value in this field and the associated Bankruptcy record, to identify an active bankruptcy and to generate a mortgage statement using the selected bankruptcy chapter’s language.
\n
\nThis functionality only applies to mortgage statements generated through the Statement Generation batch program.
`)
loanRecordFields.set("warningcode", ` 
\n### Warning 01 Code - Warning 20 Code
\nThese fields each store a warning code to apply that warning to a loan.
\nField Number         **012:1 - 012:20**
\nMnemonic             **WARNINGCODE:1 - WARNINGCODE:20**
\nData Type            **Code to 999**
\nSource               **User-entered or System-entered**
\nHelp File            **01312**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nAt any of these fields, you can enter a warning code to apply that warning to a loan. Depending on your parameters defined in Warning Parameters in the Parameter Manager, you can enter up to 20 different warning codes in a Loan record.
\n#### Data Type Descriptions
\n##### (0) No Warning Code
\n   No warning code in this warning to a loan.##### 1–999
\n   A warning code (1-999) to apply this warning to a loan
\nYou can set warning codes to expire automatically by using this parameter together with Warning 1 Expiration - Warning20 Expiration fields.
\n
\nFor more information on how to define warning codes and warning messages, see Warning Parameters.
`)
loanRecordFields.set("warningexpiration", ` 
\n### Warning 01 Expiration - Warning 20 Expiration
\nThese fields each store a date after which the corresponding warning code should no longer apply to the loan.
\nField Number         **086:1 - 086:20**
\nMnemonic             **WARNINGEXPIRATION:1 - WARNINGEXPIRATION:20**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01386**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAt any of these fields, you can enter a date after which the corresponding warning (see the Warning 01 Code - Warning 20 Code field descriptions) should no longer apply to the loan.
\n
\nSymitar Quest automatically places and removes the delinquent loan warning code during Daily Posting. If a loan becomes current, Symitar Quest sets the warning expiration date to the current system date instead of setting the warning code to zero. This means that you can see the last time the account or a particular loan became current by displaying a detail inquiry on the account or loan record since it shows the delinquent loan warning and its expiration date.
\n
\nIf you enter a value at one of the Warning # Code fields, but you do not enter a date at the corresponding field here, the warning remains in effect indefinitely or until you remove that Warning # Code field value manually.
`)
loanRecordFields.set("service", ` 
\n### Service 1 - Service 8
\nThese fields each store a credit union-defined credit union services offered with a loan.
\nField Number         **013:1 - 013:8**
\nMnemonic             **SERVICE:1 - SERVICE:8**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01313**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nThese fields allow you to identify up to eight different credit union-defined credit union services offered with a loan (for example, an ATM card, a debit card, or access to the audio response system).
\n
\nAt any one of these fields, you can enter a credit union-defined code (0-99) to identify a service offered with the loan.
`)
loanRecordFields.set("studentloancode", ` 
\n### Student Loan Code
\nThis field stores a code that identifies whether this loan is a student loan.
\nField Number         **139**
\nMnemonic             **STUDENTLOANCODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01439**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not a Student Loan
\n   This is not a student loan.##### (1) Student Loan subject to 1098-E
\n   This is a student loan subject to IRS Form 1098-E student loan interest reporting requirements.
\n       - If you try to select this option on a loan that has the Loan Code field value set to (6) LOC Combination the following message displays:
\n       - Student Loan Code not allowed for Combination Loans
\n
\nYou should make sure that you set this field to the correct value before the end of the year.
`)
loanRecordFields.set("studentcoveredperiodend", ` 
\n### Student Covered End
\nThis field stores the date the "covered period" ends for the student loan.
\nField Number         **140**
\nMnemonic             **STUDENTCOVEREDPERIODEND**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01440**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nGenerally, the value for this field is 60 months after the loan has gone into repayment status.
\n
\nSymitar Quest does not refer to this date when calculating deductible interest for a student loan.
`)
loanRecordFields.set("studentloanorigfeeytd", ` 
\n### Student Loan Org Fee YTD
\nThis field stores the loan origination fee in this field for the current year, if any, for a student loan.
\nField Number         **228**
\nMnemonic             **STUDENTLOANORIGFEEYTD**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01528**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf you charge additional origination fees on this loan, add that amount to the current amount of the loan origination fee and enter the total.
`)
loanRecordFields.set("studentloanorigfeelastyear", ` 
\n### Student Loan Org Fee LYr
\nSymitar Quest stores the loan origination fee in this field for last year for a student loan.
\nField Number         **229**
\nMnemonic             **STUDENTLOANORIGFEELASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01529**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen you run the Close Day Processing batch program on the last day of the year, Symitar Quest moves the amount from the Student Loan Origination Fee YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("studentloancapintytd", ` 
\n### Student Loan Cap Int YTD
\nThis field stores the loan capitalized interest, if any, for a student loan.
\nField Number         **230**
\nMnemonic             **STUDENTLOANCAPINTYTD**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01530**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf additional amounts of capitalized interest are incurred, add the new amount to the current figure and enter the total.
`)
loanRecordFields.set("studentloancapintlastyear", ` 
\n### Student Loan Cap Int LYr
\nSymitar Quest stores the loan capitalized interest in this field for last year for a student loan.
\nField Number         **231**
\nMnemonic             **STUDENTLOANCAPINTLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01531**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen you run the Close Day Processing batch program on the last day of the year, Symitar Quest moves the amount from the Student Loan Cap Int YTD field to this field.
`)
loanRecordFields.set("cutotalsusecode", ` 
\n### CU Totals Code
\nThis field stores a code that identifies whether include the loan balance in the credit union totals calculations or not.
\nField Number         **118**
\nMnemonic             **CUTOTALSUSECODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01418**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nThis field is used only for debt ratio calculations.
\n#### Data Type Descriptions
\n##### (0) Use record in credit union totals
\n   Include the loan balance in the credit union totals calculations.##### (1) Do not use record in credit union totals
\n   Exclude the loan balance from the credit union totals calculations. If you exclude a loan balance from credit union totals, Symitar Quest also ignores the loan balance when performing debt ratio calculations.
\n`)
loanRecordFields.set("applicationid", ` 
\n### Application ID
\nThis field stores the ID of the loan application used when granting this loan.
\nField Number         **161**
\nMnemonic             **APPLICATIONID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01461**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nEnter the ID (up to 4 characters) of the loan application used when granting this loan.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Application ID field from the specified Application record.
`)
loanRecordFields.set("dealercode", ` 
\n### Dealer Code
\nThis field stores the dealer code for a lease loan.
\nField Number         **176**
\nMnemonic             **DEALERCODE**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01476**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is for reference purposes only. For more information regarding this optional lease loan support, see Leasing Support.
`)
loanRecordFields.set("dealerreserve", ` 
\n### Dealer Reserve
\nThis field stores the amount of the dealer reserve for a lease loan.
\nField Number         **175**
\nMnemonic             **DEALERRESERVE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01475**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is for reference purposes only. For more information regarding this optional lease loan support, see Leasing Support.
`)
loanRecordFields.set("salestaxrate", ` 
\n### Sales Tax Rate
\nThis field contains the system-computed current lease loan sales tax rate at the time of the inquiry.
\nField Number         **806**
\nMnemonic             **SALESTAXRATE**
\nData Type            **Rate**
\nSource               **System-calculated**
\nHelp File            **01586**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nThis field, used in inquiries only. It is the sum of the State Sales Tax Rate, County Sales Tax Rate, and City Sales Tax Rate field values. For more information regarding this optional lease loan support, see Leasing Support.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("salestaxstateindicator", ` 
\n### Sales Tax State Indicator
\nThis field stores a code that determines how state sales tax will be used as part of the information required to compute the sales tax.
\nField Number         **170**
\nMnemonic             **SALESTAXSTATEINDICATOR**
\nData Type            **Code to 4**
\nSource               **System-entered or User-entered**
\nHelp File            **01470**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states. This field is used to determine how state sales tax will be used as part of the information required to compute the sales tax. The following fields are also used for this purpose:
\n   - Lessee State
\n   - Lessee County
\n   - Lessee City
\n   - Dealer State
\n   - Dealer County
\n   - Dealer City
\n   - Sales Tax County Indicator
\n   - Sales Tax City Indicator
\n#### Data Type Descriptions
\n##### (0) No State Tax
\n   The state portion of the sales tax is 0.000%.##### (1) Use Lessee State
\n   Symitar Quest should use the Lessee State field value to determine the state portion of the sales tax.##### (2) Use Dealer State
\n   Symitar Quest should use the Dealer State field value to determine the state portion of the sales tax.##### (3) Use Fixed Lessee State
\n   Symitar Quest should use the Fixed Lessee State Tax Rate field value to determine the state portion of the sales tax.##### (4) Use Fixed Dealer State
\n   Symitar Quest should use the Fixed Dealer State Tax Rate field value to determine the state portion of the sales tax.
\nSales tax rates are found in the Sales Tax Rate Database on your system. For more information regarding this optional lease loan support, see Leasing Support.
`)
loanRecordFields.set("salestaxcountyindicator", ` 
\n### Sales Tax County Indicator
\nThis field stores a code that determines how county sales tax will be used as part of the information required to compute the sales tax.
\nField Number         **171**
\nMnemonic             **SALESTAXCOUNTYINDICATOR**
\nData Type            **Code to 4**
\nSource               **System-entered or User-entered**
\nHelp File            **01471**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states. This field is used to determine how county sales tax will be used as part of the information required to compute the sales tax. The following fields are also used for this purpose:
\n   - Lessee State
\n   - Lessee County
\n   - Lessee City
\n   - Dealer State
\n   - Dealer County
\n   - Dealer City
\n   - Sales Tax State Indicator
\n   - Sales Tax City Indicator
\n#### Data Type Descriptions
\n##### (0) No County Tax
\n   The county portion of the sales tax is 0.000%.##### (1) Use Lessee County
\n   Symitar Quest should use the Lessee County field value to determine the county portion of the sales tax.##### (2) Use Dealer County
\n   Symitar Quest should use the Dealer County field value to determine the county portion of the sales tax.##### (3) Use Fixed Lessee County
\n   Symitar Quest should use the Fixed Lessee County Tax Rate field value to determine the county portion of the sales tax.##### (4) Use Fixed Dealer County
\n   Symitar Quest should use the Fixed Dealer County Tax Rate field value to determine the county portion of the sales tax.
\nSales tax rates are found in the Sales Tax Rate Database on your system. For more information regarding this optional lease loan support, see Leasing Support.
`)
loanRecordFields.set("salestaxcityindicator", ` 
\n### Sales Tax City Indicator
\nThis field stores a code that determines how city sales tax will be used as part of the information required to compute the sales tax.
\nField Number         **172**
\nMnemonic             **SALESTAXCITYINDICATOR**
\nData Type            **Code to 4**
\nSource               **System-entered or User-entered**
\nHelp File            **01472**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states. This field is used to determine how city sales tax will be used as part of the information required to compute the sales tax. The following fields are also used for this purpose:
\n   - Lessee State
\n   - Lessee County
\n   - Lessee City
\n   - Dealer State
\n   - Dealer County
\n   - Dealer City
\n   - Sales Tax State Indicator
\n   - Sales Tax County Indicator
\n#### Data Type Descriptions
\n##### (0) No City Tax
\n   The city portion of the sales tax is 0.000%.##### (1) Use Lessee City
\n   Symitar Quest should use the Lessee City field value to determine the city portion of the sales tax.##### (2) Use Dealer City
\n   Symitar Quest should use the Dealer City field value to determine the city portion of the sales tax.##### (3) Use Fixed Lessee City
\n   Symitar Quest should use the Fixed Lessee City Tax Rate field value to determine the city portion of the sales tax.##### (4) Use Fixed Dealer City
\n   Symitar Quest should use the Fixed Dealer City Tax Rate field value to determine the city portion of the sales tax.
\nSales tax rates are found in the Sales Tax Rate Database on your system. For more information regarding this optional lease loan support, see Leasing Support.
`)
loanRecordFields.set("lesseestate", ` 
\n### Lessee State
\nThis field stores the 2-character state code where the car is registered as part of the information required to compute the sales tax.
\nField Number         **164**
\nMnemonic             **LESSEESTATE**
\nData Type            **2 Characters**
\nSource               **System-entered**
\nHelp File            **01464**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states. This field is used to store the 2-character state code where the car is registered as part of the information required to compute the sales tax. The following fields are also used for this purpose:
\n   - Lessee County
\n   - Lessee City
\n   - Dealer State
\n   - Dealer County
\n   - Dealer City
\n   - Sales Tax State Indicator
\n   - Sales Tax County Indicator
\n   - Sales Tax City Indicator
\n
\nA Sales Tax Rate Database is also used for determining sales tax. During file maintenance, Symitar Quest compares the value of this field with the values in the Sales Tax Rate Database. If no match is found or the Sales Tax Rate Database is empty, Symitar Quest displays a warning message. If the state entered is found in the database, no message displays.
\n
\nNote that only warnings appear and that all data entered is still allowed. For more information regarding this optional lease loan support, see Leasing Support.
`)
loanRecordFields.set("lesseecounty", ` 
\n### Lessee County
\nThis field stores the county where the car is registered as part of the information required to compute the sales tax.
\nField Number         **165**
\nMnemonic             **LESSEECOUNTY**
\nData Type            **32 Characters**
\nSource               **System-entered**
\nHelp File            **01465**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states. This field is used to store the county where the car is registered as part of the information required to compute the sales tax. The following fields are also used for this purpose:
\n   - Lessee State
\n   - Lessee City
\n   - Dealer State
\n   - Dealer County
\n   - Dealer City
\n   - Sales Tax State Indicator
\n   - Sales Tax County Indicator
\n   - Sales Tax City Indicator
\n
\nA Sales Tax Rate Database is also used for determining sales tax. During file maintenance, Symitar Quest compares the value of this field with the values in the Sales Tax Rate Database. If no match is found or the Sales Tax Rate Database is empty, Symitar Quest displays a warning message. If the county entered is found in the database, no message displays.
\n
\nNote that only warnings appear and that all data entered is still allowed. For more information regarding this optional lease loan support, see Leasing Support.
`)
loanRecordFields.set("lesseecity", ` 
\n### Lessee City
\nThis field stores the city where the car is registered as part of the information required to compute the sales tax.
\nField Number         **166**
\nMnemonic             **LESSEECITY**
\nData Type            **32 Characters**
\nSource               **System-entered**
\nHelp File            **01466**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states. This field is used to store the city where the car is registered as part of the information required to compute the sales tax. The following fields are also used for this purpose:
\n   - Lessee State
\n   - Lessee County
\n   - Dealer State
\n   - Dealer County
\n   - Dealer City
\n   - Sales Tax State Indicator
\n   - Sales Tax County Indicator
\n   - Sales Tax City Indicator
\n
\nA Sales Tax Rate Database is also used for determining sales tax. During file maintenance, Symitar Quest compares the value of this field with the values in the Sales Tax Rate Database. If no match is found or the Sales Tax Rate Database is empty, Symitar Quest displays a warning message. If the city entered is found in the database, no message displays.
\n
\nNote that only warnings appear and that all data entered is still allowed. For more information regarding this optional lease loan support, see Leasing Support.
`)
loanRecordFields.set("fixedlesseestatetaxrate", ` 
\n### Fixed Lessee State Tax Rate
\nThis field stores a fixed state sales tax rate for the lessee state.
\nField Number         **432**
\nMnemonic             **FIXEDLESSEESTATETAXRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **31264**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nEnter a fixed state sales tax rate for the lessee state. If the Sales Tax State Indicator field value is set to (3) Use Fixed Lessee State, Symitar Quest uses this field setting for the State Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Fixed Lessee State Tax Rate field of the loan calculation screen.
`)
loanRecordFields.set("fixedlesseecountytaxrate", ` 
\n### Fixed Lessee County Tax Rate
\nThis field stores a fixed county sales tax rate for the lessee county.
\nField Number         **433**
\nMnemonic             **FIXEDLESSEECOUNTYTAXRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **31265**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nEnter a fixed county sales tax rate for the lessee county. If the Sales Tax County Indicator field value is set to (3) Use Fixed Lessee County, Symitar Quest uses this field setting for the County Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Fixed Lessee County Tax Rate field of the loan calculation screen.
`)
loanRecordFields.set("fixedlesseecitytaxrate", ` 
\n### Fixed Lessee City Tax Rate
\nThis field stores a fixed city sales tax rate for the lessee city.
\nField Number         **434**
\nMnemonic             **FIXEDLESSEECITYTAXRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **31266**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nEnter a fixed city sales tax rate for the lessee city. If the Sales Tax City Indicator field value is set to (3) Use Fixed Lessee City, Symitar Quest uses this field setting for the City Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Fixed Lessee City Tax Rate field of the loan calculation screen.
`)
loanRecordFields.set("leaseterminatedate", ` 
\n### Lease Termination Date
\nThis field stores the date when the member terminates a lease loan by surrendering the vehicle.
\nField Number         **173**
\nMnemonic             **LEASETERMINATEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01473**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nEnter the date when the member terminates a lease loan by surrendering the vehicle. Interest on the loan ceases to accrue after this date.
\n
\nFor more information regarding this optional lease loan support, see Leasing Support.
`)
loanRecordFields.set("leaseterminatefee", ` 
\n### Lease Termination Fee
\nThis field stores the fee amount to be charged if a lease loan is paid off before the balloon date.
\nField Number         **174**
\nMnemonic             **LEASETERMINATEFEE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01474**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nFor more information regarding this optional lease loan support, see Leasing Support.
`)
loanRecordFields.set("leasedispositiondate", ` 
\n### Lease Disposition Date
\nThis field stores the date when the disposition fee is charged when a vehicle is turned back in at the end of a lease.
\nField Number         **430**
\nMnemonic             **LEASEDISPOSITIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31262**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nEnter the date when the disposition fee is charged when a vehicle is turned back in at the end of a lease.
\n
\nIf you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Lease Disposition Date field of the loan calculation screen.
`)
loanRecordFields.set("leasedispositionfee", ` 
\n### Lease Disposition Fee
\nThis field stores the fee amount to be charged when a vehicle is turned back in at the end of a lease.
\nField Number         **431**
\nMnemonic             **LEASEDISPOSITIONFEE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31263**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the fee amount to be charged when a vehicle is turned back in at the end of a lease.
\n
\nIf you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Lease Disposition Fee field of the loan calculation screen.
`)
loanRecordFields.set("statesalestaxrate", ` 
\n### State Sales Tax Rate
\nThis field contains the system-computed current lease loan state sales tax rate at the time of the inquiry.
\nField Number         **807**
\nMnemonic             **STATESALESTAXRATE**
\nData Type            **Rate**
\nSource               **System-calculated**
\nHelp File            **01587**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nThis field, used in inquiries only. It is computed using the Sales Tax Rate Database and the Dealer State, Lessee State, and Sales Tax State Indicator field values.
\n
\nIf the Sales Tax State Indicator field value is set to (3) Use Fixed Lessee State, Symitar Quest uses the Fixed Lessee State Tax Rate field setting for the State Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf the Sales Tax State Indicator field value is set to (4) Use Fixed Dealer State, Symitar Quest uses the Fixed Dealer State Tax Rate field setting for the State Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nFor more information regarding this optional lease loan support, see Leasing Support.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("cntysalestaxrate", ` 
\n### County Sales Tax Rate
\nThis field contains the system-calculated current lease loan county sales tax rate at the time of the inquiry.
\nField Number         **808**
\nMnemonic             **CNTYSALESTAXRATE**
\nData Type            **Rate**
\nSource               **System-calculated**
\nHelp File            **01588**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nThis field, used in inquiries only. It is computed using the Sales Tax Rate Database and the Dealer County, Lessee County, and Sales Tax County Indicator field values.
\n
\nIf the Sales Tax County Indicator field value is set to (3) Use Fixed Lessee County, Symitar Quest uses the Fixed Lessee County Tax Rate field setting for the County Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf the Sales Tax County Indicator field value is set to (4) Use Fixed Dealer County, Symitar Quest uses the Fixed Dealer County Tax Rate field setting for the County Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nFor more information regarding this optional lease loan support, see Leasing Support.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("citysalestaxrate", ` 
\n### City Sales Tax Rate
\nThis field contains the system-calculated current lease loan city sales tax rate at the time of the inquiry.
\nField Number         **809**
\nMnemonic             **CITYSALESTAXRATE**
\nData Type            **Rate**
\nSource               **System-calculated**
\nHelp File            **01589**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nThis field, used in inquiries only. It is computed using the Sales Tax Rate Database and the Dealer City, Lessee City, and Sales Tax City Indicator field values.
\n
\nIf the Sales Tax City Indicator field value is set to (3) Use Fixed Lessee City, Symitar Quest uses the Fixed Lessee City Tax Rate field setting for the City Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf the Sales Tax City Indicator field value is set to (4) Use Fixed Dealer City, Symitar Quest uses the Fixed Dealer City Tax Rate field setting for the City Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nFor more information regarding this optional lease loan support, see Leasing Support.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("dealerstate", ` 
\n### Dealer State
\nThis field stores the 2-character state code where the car was leased as part of the information required to compute the sales tax.
\nField Number         **167**
\nMnemonic             **DEALERSTATE**
\nData Type            **2 Characters**
\nSource               **System-entered**
\nHelp File            **01467**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states. This field is used to store the two-character state code where the car was leased as part of the information required to compute the sales tax. The following fields are also used for this purpose:
\n   - Lessee State
\n   - Lessee County
\n   - Lessee City
\n   - Dealer County
\n   - Dealer City
\n   - Sales Tax State Indicator
\n   - Sales Tax County Indicator
\n   - Sales Tax City Indicator
\n
\nA Sales Tax Rate Database is also used for determining sales tax. During file maintenance, Symitar Quest compares the value of this field with the values in the Sales Tax Rate Database. If no match is found or the Sales Tax Rate Database is empty, Symitar Quest displays a warning message. If the state entered is found in the database, no message displays.
\n
\nNote that only warnings appear and that all data entered is still allowed. For more information regarding this optional lease loan support, see Leasing Support.
`)
loanRecordFields.set("dealercounty", ` 
\n### Dealer County
\nThis field stores the county where the car was leased as part of the information required to compute the sales tax.
\nField Number         **168**
\nMnemonic             **DEALERCOUNTY**
\nData Type            **32 Characters**
\nSource               **System-entered**
\nHelp File            **01468**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states. This field is used to store the county where the car was leased as part of the information required to compute the sales tax. The following fields are also used for this purpose:
\n   - Lessee State
\n   - Lessee County
\n   - Lessee City
\n   - Dealer State
\n   - Dealer City
\n   - Sales Tax State Indicator
\n   - Sales Tax County Indicator
\n   - Sales Tax City Indicator
\n
\nA Sales Tax Rate Database is also used for determining sales tax. During file maintenance, Symitar Quest compares the value of this field with the values in the Sales Tax Rate Database. If no match is found or the Sales Tax Rate Database is empty, Symitar Quest displays a warning message. If the county entered is found in the database, no message displays.
\n
\nNote that only warnings appear and that all data entered is still allowed. For more information regarding this optional lease loan support, see Leasing Support.
`)
loanRecordFields.set("dealercity", ` 
\n### Dealer City
\nThis field stores the city where the car was leased as part of the information required to compute the sales tax.
\nField Number         **169**
\nMnemonic             **DEALERCITY**
\nData Type            **32 Characters**
\nSource               **System-entered**
\nHelp File            **01469**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states. This field is used to store the city where the car was leased as part of the information required to compute the sales tax. The following fields are also used for this purpose:
\n   - Lessee State
\n   - Lessee County
\n   - Lessee City
\n   - Dealer State
\n   - Dealer County
\n   - Sales Tax State Indicator
\n   - Sales Tax County Indicator
\n   - Sales Tax City Indicator
\n
\nA Sales Tax Rate Database is also used for determining sales tax. During file maintenance, Symitar Quest compares the value of this field with the values in the Sales Tax Rate Database. If no match is found or the Sales Tax Rate Database is empty, Symitar Quest displays a warning message. If the city entered is found in the database, no message displays.
\n
\nNote that only warnings appear and that all data entered is still allowed. For more information regarding this optional lease loan support, see Leasing Support.
`)
loanRecordFields.set("fixeddealerstatetaxrate", ` 
\n### Fixed Dealer State Tax Rate
\nThis field stores a fixed state sales tax rate for the dealer state.
\nField Number         **435**
\nMnemonic             **FIXEDDEALERSTATETAXRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **31267**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nEnter a fixed state sales tax rate for the dealer state. If the Sales Tax State Indicator field value is set to (4) Use Fixed Dealer State, Symitar Quest uses this field setting for the State Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Fixed Dealer State Tax Rate field of the loan calculation screen.
`)
loanRecordFields.set("fixeddealercountytaxrate", ` 
\n### Fixed Dealer County Tax Rate
\nThis field stores a fixed county sales tax rate for the dealer county.
\nField Number         **436**
\nMnemonic             **FIXEDDEALERCOUNTYTAXRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **31268**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nThis field allows a user to enter a fixed county sales tax rate for the dealer county. If the Sales Tax County Indicator field value is set to (4) Use Fixed Dealer County, Symitar Quest uses this field setting for the County Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Fixed Dealer County Tax Rate field of the loan calculation screen.
`)
loanRecordFields.set("fixeddealercitytaxrate", ` 
\n### Fixed Dealer City Tax Rate
\nThis field stores a fixed city sales tax rate for the dealer city.
\nField Number         **437**
\nMnemonic             **FIXEDDEALERCITYTAXRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **31269**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nThis field allows a user to enter a fixed city sales tax rate for the dealer city. If the Sales Tax City Indicator field value is set to (4) Use Fixed Dealer City, Symitar Quest uses this field setting for the City Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf you pull this value using the Loan Calc Screen action field, Symitar Quest updates this field with the value in the Fixed Dealer City Tax Rate field of the loan calculation screen.
`)
loanRecordFields.set("promotype", ` 
\n### Promo 1 Type - Promo 2 Type
\nThese fields each store a credit union-defined code that identifies a promotion type for this loan.
\nField Number         **150:1 - 150:2**
\nMnemonic             **PROMOTYPE:1 - PROMOTYPE:2**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01450**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nIf a loan has a daily interest type (not monthly or credit card), you can enter a credit union-defined promo type code (0-99) at either field to identify a promotion for this loan.
\n***Important:***  If the Loan Code field value is (5) Avg Daily Bal LOC or (6) LOC Combination, this loan does not work with promo fields.
`)
loanRecordFields.set("promoeffectdate", ` 
\n### Promo 1 Effective Date - Promo 2 Effective Date
\nThese fields each store a date when the corresponding promotion is effective for advances taken on or after that date and before the date in the corresponding Promo # Expiration Date field.
\nField Number         **151:1 - 151:2**
\nMnemonic             **PROMOEFFECTDATE:1 - PROMOEFFECTDATE:2**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01451**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nAt either of these fields, enter the date the corresponding promotion should become effective.
\nWhen populating this field, you must also input a corresponding expiration date in the Promo 1 Expiration Date or Promo 2 Expiration Date field or you will receive the following error message:
\n   - Promotion 1 effective and expiration dates must both be set.
\n
\nWhen you enter a date in one of these fields, the corresponding promotion is effective for advances taken on or after that date and before the date in the corresponding Promo # Expiration Date field. Different promotions for the same loan cannot overlap dates, but one promotion can expire on the same date the other promotion begins. The effective and expiration dates control only whether advances are added to the corresponding Promo # Total Advances and Promo # Balance field values. The Promo # Balance field value is charged interest at the rate in the Promo # Rate field regardless of the setting of these dates.
\n***Important:***  If the Loan Code field value is (5) Avg Daily Bal LOC, this loan does not work with promo fields.
`)
loanRecordFields.set("promoexpiredate", ` 
\n### Promo 1 Expiration Date - Promo 2 Expiration Date
\nThese fields each store a date when the corresponding promotion should end.
\nField Number         **152:1 - 152:2**
\nMnemonic             **PROMOEXPIREDATE:1 - PROMOEXPIREDATE:2**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01452**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nAt either of these fields, enter the date the corresponding promotion should end.
\n
\nYou must fill in this field with a value other than --/--/---- to activate the corresponding promotion.
\n
\nWhen you enter a date in one of these fields, the corresponding promotion is effective for advances taken on or after the Promo # Effective Date and before the Promo # Expiration Date. Different promotions for the same loan cannot overlap dates, but one promotion can expire on the same date that the other promotion begins. The effective and expiration dates control only whether advances are added to the Promo # Total Advances and Promo # Balance fields. The Promo # Balance is charged interest at the Promo # Rate regardless of these dates.
\n***Important:*** 
\nPromotions are not supported for SymChoice Loans. If the Loan Code field value is set to (6) LOC Combination, this field returns the following error message when you attempt to revise it:
\nCannot be set for Combination Loans
\nIf the Loan Code field value is (5) Avg Daily Bal LOC, this loan does not work with promo fields.
`)
loanRecordFields.set("promoratetype", ` 
\n### Promo 1 Rate Type - Promo 2 Rate Type
\nThese fields each store a code that indicates if the corresponding promotion uses a fixed or variable rate.
\nField Number         **153:1 - 153:2**
\nMnemonic             **PROMORATETYPE:1 - PROMORATETYPE:2**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01453**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Fixed
\n   The corresponding promotion uses a fixed rate.##### (1) Variable
\n   The corresponding promotion uses a variable rate.***Important:*** 
\nPromotions are not supported for SymChoice Loans. If the Loan Code field value is set to (6) LOC Combination, this field returns the following error message when you attempt to revise it:
\nCannot be set for Combination Loans
\nIf the Loan Code field value is (5) Avg Daily Bal LOC, this loan does not work with promo fields.
`)
loanRecordFields.set("promorate", ` 
\n### Promo 1 Rate - Promo 2 Rate
\nSymitar Quest stores in each of these fields the actual interest rate for the corresponding promotion.
\nField Number         **154:1 - 154:2**
\nMnemonic             **PROMORATE:1 - PROMORATE:2**
\nData Type            **Rate**
\nSource               **System-entered**
\nHelp File            **01454**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nFor variable rate promotions, the value of this field should be equal to the regular Interest Rate field value minus the corresponding value in the Promo # Rate Offset field.
\n***Important:*** 
\nPromotions are not supported for SymChoice Loans. If the Loan Code field value is set to (6) LOC Combination, this field returns the following error message when you attempt to revise it:
\nCannot be set for Combination Loans
\nIf the Loan Code field value is (5) Avg Daily Bal LOC, this loan does not work with promo fields.
\n
\nSee Interest Types for information about how Symitar Quest uses these fields to calculate interest rates.
`)
loanRecordFields.set("promorateoffset", ` 
\n### Promo 1 Rate Offset - Promo 2 Rate Offset
\nThese fields each store an offset rate for the corresponding promotion.
\nField Number         **155:1 - 155:2**
\nMnemonic             **PROMORATEOFFSET:1 - PROMORATEOFFSET:2**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01455**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nFor variable rate promotions, enter an offset rate at either of these fields. Symitar Quest subtracts the value of that field from the regular Interest Rate field value to calculate and set the corresponding Promo # Rate field value during Rate Change Processing. Symitar Quest also uses the corresponding Promo # Rate Minimum and Promo # Rate Maximum field values when calculating and setting the corresponding Promo # Rate field value during Rate Change Processing.
\n
\nIf the Promo # Rate Type field value indicates that the corresponding promotion is a fixed rate promotion, Symitar Quest does not use this field and you cannot access this field for file maintenance.
\n***Important:*** 
\nPromotions are not supported for SymChoice Loans. If the Loan Code field value is set to (6) LOC Combination, this field returns the following error message when you attempt to revise it:
\nCannot be set for Combination Loans
\nIf the Loan Code field value is (5) Avg Daily Bal LOC, this loan does not work with promo fields.
`)
loanRecordFields.set("promoratemin", ` 
\n### Promo 1 Rate Minimum - Promo 2 Rate Minimum
\nThese fields each store a minimum rate for the corresponding promotion.
\nField Number         **156:1 - 156:2**
\nMnemonic             **PROMORATEMIN:1 - PROMORATEMIN:2**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01456**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nFor variable rate promotions, enter a minimum rate at either of these fields. The Rate Change Processing batch program subtracts the corresponding Promo # Rate Offset field value from the loan's regular Interest Rate field value and compares the result to the value in that corresponding field, then uses the higher value as the interest rate for the corresponding promotion.
\n
\nIf the Promo # Rate Type field value indicates that the corresponding promotion is a fixed rate promotion, Symitar Quest does not use this field and you cannot access this field for file maintenance.
\n***Important:*** 
\nPromotions are not supported for SymChoice Loans. If the Loan Code field value is set to (6) LOC Combination, this field returns the following error message when you attempt to revise it:
\nCannot be set for Combination Loans
\nIf the Loan Code field value is (5) Avg Daily Bal LOC, this loan does not work with promo fields.
`)
loanRecordFields.set("promoratemax", ` 
\n### Promo 1 Rate Maximum - Promo 2 Rate Maximum
\nThese fields each store a maximum rate for the corresponding promotion.
\nField Number         **157:1 - 157:2**
\nMnemonic             **PROMORATEMAX:1 - PROMORATEMAX:2**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01457**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nFor variable rate promotions, enter a maximum rate at either of these fields. The Rate Change Processing batch program subtracts the corresponding Promo # Rate Offset field value from the loan's regular Interest Rate field value and compares the result to the value in the corresponding Promo # Rate Maximum field, then uses the lower value as the interest rate for the corresponding promotion.
\n
\nIf the Promo # Rate Type field value indicates that the corresponding promotion is a fixed rate promotion, Symitar Quest does not use this field and you cannot access this field for file maintenance.
\n***Important:*** 
\nPromotions are not supported for SymChoice Loans. If the Loan Code field value is set to (6) LOC Combination, this field returns the following error message when you attempt to revise it:
\nCannot be set for Combination Loans
\nIf the Loan Code field value is (5) Avg Daily Bal LOC, this loan does not work with promo fields.
`)
loanRecordFields.set("promototaladvances", ` 
\n### Promo 1 Total Advances - Promo 2 Total Advances
\nThese fields each store the total amount of advances on this loan during the corresponding promotion, not including insurance or fees.
\nField Number         **158:1 - 158:2**
\nMnemonic             **PROMOTOTALADVANCES:1 - PROMOTOTALADVANCES:2**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01458**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest adds the balance change amount to this field when an advance transaction is posted to this loan during the promotion. If you void a Loan Advance (LA) transaction that affects this loan, Symitar Quest adjusts this field accordingly.
\n
\nUnder normal circumstances, you should not revise this field. Revising this field manually may cause inaccurate statements.
\n***Important:*** 
\nPromotions are not supported for SymChoice Loans. If the Loan Code field value is set to (6) LOC Combination, this field returns the following error message when you attempt to revise it:
\nCannot be set for Combination Loans
\nIf the Loan Code field value is (5) Avg Daily Bal LOC, this loan does not work with promo fields.
`)
loanRecordFields.set("promoadvancecutoff", ` 
\n### Promo 1 Advance Cutoff - Promo 2 Advance Cutoff
\nThese fields each store the total amount of advances that must be taken during the corresponding promotion before the corresponding promotion "kicks in".
\nField Number         **159:1 - 159:2**
\nMnemonic             **PROMOADVANCECUTOFF:1 - PROMOADVANCECUTOFF:2**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01459**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the total amount of advances that must be taken during the corresponding promotion before the corresponding promotion "kicks in".
\nSymitar Quest does the following when an advance transaction is posted to this loan during the promotion:
\n   - If, before this advance, the corresponding Promo x Total Advances field value is already equal to or greater than the value of this field, Symitar Quest adds the amount of the advance to the corresponding Promo x Balance field value.
\n   - If this advance causes the value of the corresponding Promo x Total Advances field value to equal or surpass the value of this field, Symitar Quest sets the corresponding Promo x Balance field value to the smaller of the Loan Balance field value minus the other corresponding Promo x Balance field value or the corresponding Promo x Total Advances field value.
\n***Important:*** 
\nPromotions are not supported for SymChoice Loans. If the Loan Code field value is set to (6) LOC Combination, this field returns the following error message when you attempt to revise it:
\nCannot be set for Combination Loans
\nIf the Loan Code field value is (5) Avg Daily Bal LOC, this loan does not work with promo fields.
`)
loanRecordFields.set("promobalance", ` 
\n### Promo 1 Balance - Promo 2 Balance
\nSymitar Quest stores in each of these fields that portion of the total loan Balance field value subject to the corresponding promotion.
\nField Number         **160:1 - 160:2**
\nMnemonic             **PROMOBALANCE:1 - PROMOBALANCE:2**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01460**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe sum of the value of the Promo 1 Balance and Promo 2 Balance fields cannot, under any circumstances, exceed the value in the Balance field.
\n
\nUnder normal circumstances, you should not revise this field. Revising this field manually may cause inaccurate statements.
\n***Important:***  You should be careful about granting file maintenance privileges for any of the promo fields, since changing almost any of them can cause interest to be computed at a rate different from the regular interest rate. For example, if you set the promotion effective and expiration dates, but leave all the rest of the fields set to the default of zero, then all loan advances taken during the specified promotion period will be charged no interest at all. Make sure that only appropriate personnel can revise these fields.
\n***Important:*** 
\nPromotions are not supported for SymChoice Loans. If the Loan Code field value is set to (6) LOC Combination, this field returns the following error message when you attempt to revise it:
\nCannot be set for Combination Loans
\nIf the Loan Code field value is (5) Avg Daily Bal LOC, this loan does not work with promo fields.
`)
loanRecordFields.set("memberusertransfercode", ` 
\n### Member User Transfer Code
\nFor users of the corporate interface: This field stores a code that indicates which type of Corporate Transfer Parameters apply to this loan when a member user is making a transfer using the corporate interface.
\nField Number         **215**
\nMnemonic             **MEMBERUSERTRANSFERCODE**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01515**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   You can make no transfers to or from this loan using the corporate interface.##### 1–9999
\n   Type of parameter selections (rule sets) apply to this loan. The corresponding rule set dictates whether Symitar Quest displays the loan in the various drop-down menus in the Symitar Quest corporate interface and how transfers to or from this loan function.
\n`)
loanRecordFields.set("corporateusertransfercode", ` 
\n### Corporate User Transfer Code
\nFor users of the corporate interface: This field indicates which type of Corporate Transfer Parameters apply to this loan when a corporate user is making a transfer using the corporate interface on behalf of a member user.
\nField Number         **216**
\nMnemonic             **CORPORATEUSERTRANSFERCODE**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01516**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   You can make no transfers to or from this loan using the corporate interface.##### 1–9999
\n   Type of parameter selections (rule sets) apply to this loan. The corresponding rule set dictates whether Symitar Quest displays the loan in the various drop-down menus in the Symitar corporate interface and how transfers to or from this loan function.
\n`)
loanRecordFields.set("indirectdealernum", ` 
\n### Dealer Number
\nThis field stores the dealer number.
\nField Number         **247**
\nMnemonic             **INDIRECTDEALERNUM**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01547**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf the Dealer Reserve Accounting module has been implemented, enter the dealer number in this field. When you define a dealer, you assign a unique number to that dealer in the Dealer record. When entering a new loan, you only have to enter this field, if applicable, and not the full name of the dealer. In the Dealer Reserve Accounting Manager, that dealer number displays at the top of the screen. This field links the loan to that dealer.
\nIf you try to use this field on a loan with a Loan Code field value of (6) LOC Combination the following message displays:
\n   - Dealer Number not allowed for Combination Loans
\n
\nThis field must be blank if a bankruptcy chapter option is selected in the Bankruptcy Chapter Reported field.
`)
loanRecordFields.set("participationnumber", ` 
\n### Participation Number
\nSymitar Quest stores the participation number from the associated Participation record in this field.
\nField Number         **217**
\nMnemonic             **PARTICIPATIONNUMBER**
\nData Type            **10 Characters**
\nSource               **System-entered**
\nHelp File            **01517**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nWhen placing a loan in a participation, Symitar Quest enters the participation number from the associated Participation record in this field. When removing a loan from a participation, Symitar Quest removes the value from this field.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("sbagpnumber", ` 
\n### SBA GP Number
\nThis field stores the SBA-assigned loan identification number.
\nField Number         **257**
\nMnemonic             **SBAGPNUMBER**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01557**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis 10-character SBA-assigned loan identification number is the key to identifying an SBA-guaranteed loan in both the FTA and SBA databases. The 1502 reports must be sorted according to this number. When you enter a value in this field, an SBA 1502 Reporting Tracking record is created automatically.
\n
\nThis field must be blank if a bankruptcy chapter option is selected in the Bankruptcy Chapter Reported field.
`)
loanRecordFields.set("indirectplanid", ` 
\n### Reserve Plan ID
\nThis field stores the reserve plan ID associated with this indirect loan.
\nField Number         **248**
\nMnemonic             **INDIRECTPLANID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **01548**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf the Indirect Lending module has been implemented, enter the reserve plan ID associated with this indirect loan. This ID should be the same Reserve Plan ID value in the Dealer Plan record which provides the correct up-front reserve amount or percent and charge-back specifications.
`)
loanRecordFields.set("avgweightedintrate", ` 
\n### Average Weighted Int Rate
\nThis field contains the interest rate or, for SymChoice Loans, the calculated average weighted interest rate for the loan as a whole, based on the balance of each segment.
\nField Number         **824**
\nMnemonic             **AVGWEIGHTEDINTRATE**
\nData Type            **Rate**
\nSource               **System-calculated**
\nHelp File            **31501**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nFor non-SymChoice Loans, the value of this field is equal to the Interest Rate field value.
\n
\nFor SymChoice Loans, loans with a Loan Code field value of (6) LOC Combination, this field calculates the average weighted interest rate for the loan as a whole, based on the balance of each segment. If the Loan Balance field value is 0.00, this field is equal to the Interest Rate field value, which is the interest rate for Segment 0.
\nThis field equals the sum for all segments (including Segment 0) of the Interest Rate field value in each Segment record, multiplied by the Segment Balance field value in each Segment record divided by the total principal amount (Loan Balance field value in the Loan record) as follows:
\n   - [ Segment 0 (Interest Rate * Segment Balance)
\n   -     + Segment 1 (Interest Rate * Segment Balance)
\n   -     + Segment 2 (Interest Rate * Segment Balance)
\n   -     + Segment 3 (Interest Rate * Segment Balance) ] / Loan Balance = Average Weighted Int Rate
\n***Important:***  If the records needed to perform this calculation do not exist or are in the process of being created, Symitar Quest does not perform the calculation and this field is set to the default value.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("combolnsegmentmax", ` 
\n### Combo Segment Max
\nThis field stores the maximum number of segments (including Segment 0) that can be added to a SymChoice Loan.
\nField Number         **279**
\nMnemonic             **COMBOLNSEGMENTMAX**
\nData Type            **Code to 100**
\nSource               **User-entered or System-entered**
\nHelp File            **31110**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter a value (1-100) to identify the maximum number of segments (including Segment 0) that can be added to a SymChoice Loan. For example, if you set this field to 3, you can set up Segment 0 and 2 segment records. You cannot set this field to 0.
\nIf you try to create a Segment record after the maximum allowable segments have been created, the following message displays:
\n   - Segment not allowed. Maximum number of segments already exists
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Combo Segment Max field from the specified Application record.
`)
loanRecordFields.set("combopmtordermeth", ` 
\n### Combo Payment Order Method
\nThis field stores a code that determines the order in which to pay segments for SymChoice Loans.
\nField Number         **278**
\nMnemonic             **COMBOPMTORDERMETH**
\nData Type            **Code to 2**
\nSource               **System-entered or User-entered**
\nHelp File            **31109**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Use Segment Payment Order
\n   Pay the segments in the order indicated by the Segment Payment Order field value in the Segment record and the Seg 0 Payment Order field value in the Loan record.##### (1) Int Rate lo to hi
\n   Pay the segments in the order of their interest rates, starting from the lowest to the highest.##### (2) Int Rate hi to lo
\n   Pay the segments in the order of their interest rates, starting from the highest to the lowest.
\nIf there is more than one segment with the same value in the Segment Payment Order or Interest Rate field, Symitar Quest pays the segments in the order the Segment records appear under the Loan record.
\n
\nIf you select the (1) Int Rate lo to hi or (2) Int Rate hi to lo option, the order may change if you change the interest rate for any segment.
\nFor a partial payment, when not all segments can be paid, Symitar Quest applies funds in the following order, up to the segment’s payment amount for the due date being processed:
\n   - The late charges (which apply to the whole loan)
\n   - Interest for each segment in the order determined by the Combo Payment Order Method field value
\n   - Any billed fees
\n   - The principal for each segment in the order determined by the Combo Payment Order Method field value
\n
\nThe payment application logic for SymChoice Loans (the Loan Code field value is (6) LOC Combination) applies payments to the loan segments in a round robin method based on the standard or charge-off payment application order. Symitar Quest determines the interest and principal distribution amount based on the values in this field and the Combo Seg 0 Payment Order field. The system applies loan payments to each segment, per loan due date, until each segment has been fulfilled for that due date and then advances the loan due date by one frequency. This same logic is applied to the next installment due date until the entire payment is allocated.
\n***Important:***  This method of applying payments may result in paying billed fees or principal to one segment, while interest is still due on another segment.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Combo Payment Order Method field from the specified Application record.
`)
loanRecordFields.set("comboseg0pmtorder", ` 
\n### Combo Seg 0 Payment Order
\nThis field stores a code that indicates if Segment 0 is to be paid first or last when used with the Combo Payment Order Method field for SymChoice Loans.
\nField Number         **277**
\nMnemonic             **COMBOSEG0PMTORDER**
\nData Type            **Code to 2**
\nSource               **System-entered or User-entered**
\nHelp File            **31108**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nIf the Combo Payment Order Method field value is set to (0) Use Segment Payment Order, Symitar Quest ignores the value in this field and uses the order in the Seg 0 Payment Order field instead.
\n#### Data Type Descriptions
\n##### (0) Seg 0 Sorted Among Segments
\n   The order in which Segment 0 is paid will be determined by where its interest rate falls in relation to the other segments.##### (1) Seg 0 First
\n   Segment 0 is paid first.##### (2) Seg 0 Last
\n   Segment 0 is paid last.
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Combo Seg 0 Payment Order field from the specified Application record.
`)
loanRecordFields.set("newsegcutoffoption", ` 
\n### New Segment Cutoff Option
\nThis field stores a code that identifies how Symitar Quest calculates the Due Date field in the projections screen of a Segment record.
\nField Number         **338**
\nMnemonic             **NEWSEGCUTOFFOPTION**
\nData Type            **Code to 1**
\nSource               **User-entered or System-entered**
\nHelp File            **31170**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Number of Days
\n   Calculate the segment Due Date field in the projections screen by comparing the calculated segment cutoff date to the loan Due Date field value. The segment cutoff date is determined by adding the number of days specified in the New Segment Cutoff Days field to the segment Loan Date field value in the projections screen.
\n       - If the segment cutoff date is on or before the loan Due Date field value, the segment Due Date in the projections screen defaults to the same value as the loan Due Date field value.
\n       - If the segment cutoff date is after the loan Due Date field value, the segment Due Date field value in the projections screen defaults to the next loan due date.
\n       - Examples:
\n       - Below are examples showing how Symitar Quest calculates the segment Due Date field value in the projections screen using the (0) Number of Days option. In these examples, we assume that we have a SymChoice Loan with a loan Due Date field value of 03/15/11 and monthly payments:
\n       -  	Example 1	Example 2
\n       - Segment Loan Date	3/03/11	03/03/11
\n       - New Segment Cutoff Days	10	15
\n       - New Segment Cutoff Date	03/13/11	03/18/11
\n       - Segment Due Date	03/15/11	04/15/11
\n##### (1) One Period
\n   Calculate the segment Due Date field value in the projections screen by comparing the segment Loan Date field value in the projections screen to the loan Due Date field value.
\n       - If the segment Loan Date field value in the projections screen is at least one period from the loan Due Date field value, the segment Due Date field value in the projections screen defaults to the same value as the loan Due Date field value.
\n       - If the segment Loan Date field value in the projections screen is less than one period from the loan Due Date field value, the segment Due Date field value in the projections screen defaults to the next loan due date.
\n       - Examples:
\n       - Below are examples showing how Symitar Quest calculates the segment Due Date field value in the projections screen using the (1) One Period option. In these examples, we assume that we have a SymChoice Loan with a loan Due Date field value of 03/15/11 and biweekly payments:
\n       -  	Example 1	Example 2
\n       - Segment Loan Date	03/01/11	03/03/11
\n       - Payment Frequency	(8) Biweekly	(8) Biweekly
\n       - Segment Due Date	03/15/11	03/29/11
\n
\nIf the segment Due Date field value in the projections screen defaults to the same value as the loan Due Date field value, Symitar Quest updates the existing payment bucket in the Loan record to include the new segment's payment amount when funds are transferred to the new segment using the Loan Segment (LG) transaction code. If the segment Due Date field value in the projections screen defaults to the next loan due date, Symitar Quest creates a payment bucket in the Loan record that includes the new segment's payment amount following the fund transfer.
`)
loanRecordFields.set("newsegcutoffdays", ` 
\n### New Segment Cutoff Days
\nThis field stores the number of days used to calculate the segment cutoff date.
\nField Number         **339**
\nMnemonic             **NEWSEGCUTOFFDAYS**
\nData Type            **Code to 25**
\nSource               **User-entered**
\nHelp File            **31171**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   This field not used because the New Segment Cutoff Option field value is not set to (0) Number of Days.##### 1–25
\n   The number of days used to calculate the segment cutoff date, if the New Segment Cutoff Option field value is set to (0) Number of Days. Symitar Quest calculates the segment cutoff date by adding the number of days entered in this field to the value in the Loan Date field in the segment projections screen. Symitar Quest then compares the segment cutoff date to the loan Due Date field value to determine the segment Due Date field value in the projections screen.
\nFor more information, see the (0) Number of Days option in the New Segment Cutoff Option field description.
`)
loanRecordFields.set("seg0description", ` 
\n### Seg 0 Description
\nThis field stores a description of the segment for SymChoice Loans.
\nField Number         **280**
\nMnemonic             **SEG0DESCRIPTION**
\nData Type            **30 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **31111**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nRequired entry for SymChoice Loans: Enter a description of the segment (up to 30 characters). You cannot save the Loan record for a SymChoice Loan until you enter a description. If you do not make an entry, Symitar Quest displays the message:
\n   - Seg 0 Description cannot be blank
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Seg 0 Description field from the specified Application record.
`)
loanRecordFields.set("seg0balance", ` 
\n### Seg 0 Balance
\nThis field contains the balance for Segment 0 for SymChoice Loans.
\nField Number         **825**
\nMnemonic             **SEG0BALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31502**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest calculates this field as the Loan Balance field value minus the total of all the Segment Balance field values in the Segment records.
\n
\nFor non-SymChoice Loans, this field contains the same amount as in the Loan Balance field.
\n***Important:***  If the records needed to perform this calculation do not exist or are in the process of being created, Symitar Quest does not perform the calculation and this field is set to the default value.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("seg0intunpaid", ` 
\n### Seg 0 Int Unpaid
\nThis field contains the amount of unpaid interest accrued to the Interest Date field value for Segment 0 for SymChoice Loans.
\nField Number         **827**
\nMnemonic             **SEG0INTUNPAID**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31504**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis amount is included in the total Interest Unpaid field value. Symitar Quest calculates this field as the Loan's Interest Unpaid field value minus the total of all the Interest Unpaid field values in the Segment records.
\n
\nFor non-SymChoice Loans, this field contains the same amount as in the Interest Unpaid field.
\n***Important:***  If the records needed to perform this calculation do not exist or are in the process of being created, Symitar Quest does not perform the calculation and this field is set to the default value.
\n
\nYou cannot access this field for file maintenance. If you need to revise this field, do so by changing the value in the Interest Unpaid field by the desired amount.
`)
loanRecordFields.set("seg0intunpaidbilled", ` 
\n### Seg 0 Int Unpaid Billed
\nThis field contains the amount of unpaid billed interest accrued to the Interest Date for Segment 0 for SymChoice Loans.
\nField Number         **826**
\nMnemonic             **SEG0INTUNPAIDBILLED**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31503**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis amount is included in the total Int Unpaid Billed field value. Symitar Quest calculates this field as the Loan's Int Unpaid Billed field value minus the total of all the Int Unpaid Billed field values in the Segment records.
\n
\nFor non-SymChoice Loans this field contains the same amount as the Int Unpaid Billed field.
\n***Important:***  If the records needed to perform this calculation do not exist or are in the process of being created, Symitar Quest does not perform the calculation and this field is set to the default value.
\n
\nYou cannot access this field for file maintenance. If you need to revise this field, do so by changing the value in the Int Unpaid Billed field by the desired amount.
`)
loanRecordFields.set("seg0interestytd", ` 
\n### Seg 0 Interest Paid YTD
\nThis field contains the total of all interest paid on Segment 0 during the current year for SymChoice Loans.
\nField Number         **833**
\nMnemonic             **SEG0INTERESTYTD**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31510**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis amount is included in the total Interest Paid YTD field value. Whenever a Loan Payment (LP) teller transaction is posted to the loan, Symitar Quest adds the interest amount to the value in this field. Symitar Quest calculates this field as the Loan's Interest Paid YTD field value minus the total of all the Interest Paid YTD field values in the Segment records.
\n
\nFor non-SymChoice Loans, this field contains the same amount as in the Interest Paid YTD field.
\n***Important:***  If the records needed to perform this calculation do not exist or are in the process of being created, Symitar Quest does not perform the calculation and this field is set to the default value.
\n
\nYou cannot access this field for file maintenance. If you need to revise this field, do so by changing the value in the Interest Paid YTD field by the desired amount.
`)
loanRecordFields.set("seg0interestlastyear", ` 
\n### Seg 0 Interest Paid Last Year
\nThis field contains the total of all interest paid on Segment 0 during the previous year for SymChoice Loans.
\nField Number         **832**
\nMnemonic             **SEG0INTERESTLASTYEAR**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31509**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis amount is included in the total Interest Paid Last Year field value. Symitar Quest calculates this field as the Loan's Interest Paid Last Year field value minus the total of all the Interest Paid Last Year field values in the Segment records.
\n
\nFor non-SymChoice Loans, this field contains the same amount as in the Interest Paid Last Year field.
\n***Important:***  If the records needed to perform this calculation do not exist or are in the process of being created, Symitar Quest does not perform the calculation and this field is set to the default value.
\n
\nYou cannot access this field for file maintenance. If you need to revise this field, do so by changing the value in the Interest Paid Last Year field by the desired amount.
`)
loanRecordFields.set("seg0payment", ` 
\n### Seg 0 Payment
\nThis field contains the payment for Segment 0 for SymChoice Loans.
\nField Number         **829**
\nMnemonic             **SEG0PAYMENT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31506**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis amount is included in the total Payment field value. Symitar Quest calculates this field as the Loan's Payment field value minus the total of all Payment field values in the Segment records.
\n
\nFor non-SymChoice Loans, this field contains the same amount as in the Payment field.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Seg 0 Payment field from the specified Application record.
\n
\nYou cannot access this field for file maintenance. If you need to revise this field, do so by changing the Payment field by the desired amount.
`)
loanRecordFields.set("seg0partialpmt", ` 
\n### Seg 0 Partial Payment
\nThis field contains the partial payment for Segment 0 for SymChoice Loans.
\nField Number         **828**
\nMnemonic             **SEG0PARTIALPMT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31505**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis amount is included in the total Partial Payment field value. Symitar Quest calculates this field as the Loan's Partial Payment field value minus the total of all Partial Payment field values in the Segment records.
\n
\nFor non-SymChoice Loans, this field contains the same amount as the Partial Payment field.
\n
\nThis field can contain the entire payment due amount for Segment 0 if the entire segment amount due has been paid but the payment did not cover all the segments in the loan. The field is not cleared (to 0.00) until the loan payment is made in full, which advances the due date for the loan.
\n
\nWhen Symitar Quest performs a single segment transaction on a delinquent loan, this field can contain several payment amounts, up to the maximum loan due date at time of transaction. As the loan due date advances, the payment amount portion is subtracted from this field.
\n***Important:***  If the records needed to perform this calculation do not exist or are in the process of being created, Symitar Quest does not perform the calculation and this field is set to the default value.
\n
\nYou cannot access this field for file maintenance. If you need to revise this field, do so by changing the Partial Payment field by the desired amount.
`)
loanRecordFields.set("seg0levelprinpmt", ` 
\n### Seg 0 Level Prin Pmt
\nThis field stores the amount of principal to apply to each payment for Segment 0 if the Payment Type field value is set to (1) Level Principal for SymChoice Loans.
\nField Number         **282**
\nMnemonic             **SEG0LEVELPRINPMT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31113**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nFor a level principal payment on an interest-only loan (not for billed interest), set this field to 0.00.
\n
\nIf the Payment Type field value is not set to (1) Level Principal, you cannot access this field for file maintenance.
`)
loanRecordFields.set("seg0paymentorder", ` 
\n### Seg 0 Payment Order
\nThis field stores a number to indicate the order in which Segment 0 will be paid for a SymChoice Loan Payment (LP) transaction.
\nField Number         **281**
\nMnemonic             **SEG0PAYMENTORDER**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-entered**
\nHelp File            **31112**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter a number to indicate the order in which Segment 0 will be paid for a SymChoice Loan Payment (LP) transaction. Symitar Quest will first pay the segment with a Seg 0 Payment Order of 0, then pay the segment with a Seg 0 Payment Order of 1, etc. If there are two or more segments with the same payment order, Symitar Quest will pay them in the order they appear under the Loan record. This field is only used if the Combo Payment Order Method field value is set to (0) Use Segment Payment Order, otherwise, Symitar Quest ignores this field.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Seg 0 Payment Order field from the specified Application record.
`)
loanRecordFields.set("seg0beginningcycledate", ` 
\n### Seg 0 Beginning Cycle Date
\nThis field stores the beginning cycle date for the current payment period for a SymChoice Loan.
\nField Number         **359**
\nMnemonic             **SEG0BEGINNINGCYCLEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **31147**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis field is updated by Statement Cutoff Processing or Daily Posting and represents the beginning cycle date for the current payment period.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("seg0pmtbucketamt", ` 
\n### Seg 0 Pmt Bucket Amt 1 - Seg 0 Pmt Bucket Amt 8
\nThese fields contain a history of payment amounts for Segment 0, each due on the effective date specified in the corresponding Pmt Bucket Due Date x field.
\nField Number         **834:1 - 834:8**
\nMnemonic             **SEG0PMTBUCKETAMT:1 - SEG0PMTBUCKETAMT:8**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31511**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest calculates these fields as the Loan's Pmt Bucket Amt field value minus the total of all Pmt Bucket Amt field values in the Segment records.
\n
\nSymitar Quest stores these payment amounts in reverse chronological order, with the most recent payment in Seg 0 Pmt Bucket Amt 1 and the oldest payment in Seg 0 Pmt Bucket Amt 8. Any time a new payment bucket is created for any segment, a corresponding payment bucket must be created for every segment associated with the loan. In this way, the payment buckets for all segments (and the loan) are kept in sync with the bucket dates and with each other.
\n
\nSee the Pmt Bucket Amt 1 field description for more information on these fields.
\n***Important:***  If the records needed to perform this calculation do not exist or are in the process of being created, Symitar Quest does not perform the calculation and this field is set to the default value.
\n
\nYou cannot access this field for file maintenance. If you need to revise this field, do so by changing the Pmt Bucket Amt field by the desired amount.
`)
loanRecordFields.set("seg0currstmtintaccrd", ` 
\n### Seg 0 Current Stmt Int Accr
\nThis field stores the total interest paid in the current statement period for Segment 0 of a SymChoice Loan.
\nField Number         **395**
\nMnemonic             **SEG0CURRSTMTINTACCRD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31227**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Regulation Z calculation uses this field when it determines the APR for a Segment 0.
\n
\nYou can only perform file maintenance on this field if your credit union has the SymChoice Loan module. However, under normal circumstances, do not revise this field.
`)
loanRecordFields.set("seg0prevstmtintaccrd", ` 
\n### Seg 0 Previous Stmt Int Accr
\nThis field stores the total interest paid in the previous statement period for Segment 0 of a SymChoice Loan.
\nField Number         **396**
\nMnemonic             **SEG0PREVSTMTINTACCRD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31228**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Regulation Z calculation uses this field when it determines the APR for a Segment 0.
\n
\nYou can only perform file maintenance on this field if your credit union has the SymChoice Loan module. However, under normal circumstances, do not revise this field.
`)
loanRecordFields.set("cappedfeesamountcap", ` 
\n### Capped Fees Amount Cap
\nThis field stores the dollar amount your credit union sets for its capped fees amount.
\nField Number         **284**
\nMnemonic             **CAPPEDFEESAMOUNTCAP**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31116**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nFor a period of time that you determine, the loan cannot be charged any additional fees once the dollar amount in this field is reached. Fees eligible for capping are listed in the Fee Types to Cap batch question in most of the posting batch programs. This field depends on the Fee Types to Cap batch question being filled out for the cap fee amount to take effect.
\n
\nSymitar Quest validates this field on the Loan record and also at the Account record level, even when the fee is being paid for by a share (when the share fee transaction indicates it is for a loan).
\n
\nFor Symitar Quest to count fee types as part of the capped fee amount, the Fee Types to Cap parameter in Miscellaneous Parameters must include the (33) Payment Skip Fee and (34) Other Regulation Z Fee fees. If these two fee types are not being capped, Symitar Quest does not prevent the fee from being charged if the capped fee amount is reached.
\n
\nYou can add the RB.CLEARFEECAPFIELDS PowerOn specfile to your nightly processing job file to clear the Capped Fees Amount This Period field value at the end of the period you set.
`)
loanRecordFields.set("cappedfeescountcap", ` 
\n### Capped Fees Count Cap
\nThis field stores the number of fee occurrences at which your credit union stops charging capped fees for the loan during a time period you specify.
\nField Number         **286**
\nMnemonic             **CAPPEDFEESCOUNTCAP**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **31117**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Your credit union does not stop charging capped fees for the loan during a time period you specify.##### 1–9999
\n   The number of fee occurrences at which your credit union stops charging capped fees for the loan during a time period you specify.
\nFees eligible for capping are listed in the Fee Types to Cap batch question. This field depends on the Fee Types to Cap batch question being filled out for the fee count cap to take effect.
\n
\nA PowerOn specfile in the nightly processing jobs clears the Capped Fee Count This Period field value at the end of the period you specify.
`)
loanRecordFields.set("cappedfeesamtperiod", ` 
\n### Capped Fees Amount This Period
\nThis field stores the sum of the capped fees charged by batch programs, online transaction processing, and teller transactions to the loan during a time period you specify.
\nField Number         **283**
\nMnemonic             **CAPPEDFEESAMTPERIOD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31114**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nYou must list fees eligible for capping (including those fees designated in the Regulation Z Fee Types parameter in Miscellaneous Parameters) in the Fee Types to Cap batch question.
\n
\nA PowerOn specfile in nightly processing clears this field at the end of the period you specify.
`)
loanRecordFields.set("cappedfeescntperiod", ` 
\n### Capped Fees Count This Period
\nThis field stores the number of occurrences of capped fees, incrementing by one each time a capped fee is charged to the loan.
\nField Number         **285**
\nMnemonic             **CAPPEDFEESCNTPERIOD**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **31115**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Your credit union does not increment each time a capped fee is charged to the loan.##### 1–9999
\n   The number of occurrences of capped fees, incrementing by one, each time a capped fee is charged to the loan.
\nYou must list fees eligible for capping (including those fees designated in the Regulation Z Fee Types parameter in Miscellaneous Parameters) in the Fee Types to Cap batch question.
\n
\nIf the capped fees count on a loan has been reached, this field does not increment and Symitar Quest does not charge a fee. If an overdraw transaction on a loan causes this field value to reach the Capped Fees Count Cap field value, the capped fee is charged and this field value increments.
\n
\nA PowerOn specfile in nightly processing clears this field at the end of the period you specify.
`)
loanRecordFields.set("cardactoverlimitfeeeventdate", ` 
\n### Overlimit Fee Event Date
\nThis field stores the date Fee Posting or Miscellaneous Posting batch programs post the first overlimit fee for the loan.
\nField Number         **334**
\nMnemonic             **CARDACTOVERLIMITFEEEVENTDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31166**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
loanRecordFields.set("cardactlatefeeeventdate", ` 
\n### Late Fee Event Date
\nThis field stores the date Fee Posting or Miscellaneous Posting batch programs post the first late fee for the loan.
\nField Number         **335**
\nMnemonic             **CARDACTLATEFEEEVENTDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31167**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
loanRecordFields.set("cardactdeclchkaxsfeeeventdate", ` 
\n### Decline Chk Axs Fee Event Date
\nThis field stores the date Fee Posting, Miscellaneous Posting, or Check posting batch programs post the first declined access check fee for the loan.
\nField Number         **336**
\nMnemonic             **CARDACTDECLCHKAXSFEEEVENTDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31168**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
loanRecordFields.set("cardactreturnitemfeeeventdate", ` 
\n### Return Payment Fee Event Date
\nThis field stores the date Fee Posting or Miscellaneous Posting batch programs post the first return payment fee for the loan.
\nField Number         **337**
\nMnemonic             **CARDACTRETURNITEMFEEEVENTDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31169**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
loanRecordFields.set("stmtccintbilledytd", ` 
\n### Stmt CC Interest Billed YTD
\nSymitar Quest stores the amount in this field to be printed on statements of total interest billed to this credit card loan this year.
\nField Number         **312**
\nMnemonic             **STMTCCINTBILLEDYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31144**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is populated by the Statement Cutoff Processing batch program. This field is only used for statements.
`)
loanRecordFields.set("ccintbilledytd", ` 
\n### CC Interest Billed YTD
\nSymitar Quest stores the amount in this field of total interest charged to this credit card loan this calendar year.
\nField Number         **310**
\nMnemonic             **CCINTBILLEDYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31142**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is populated by the Statement Cutoff Processing batch program.
`)
loanRecordFields.set("cabttransintchargebilledytd", ` 
\n### CA/BT Trans Int Chg Billed YTD
\nSymitar Quest stores the amount in this field of total cash advance and balance transfer transaction interest charges billed to the loan this year.
\nField Number         **309**
\nMnemonic             **CABTTRANSINTCHARGEBILLEDYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31141**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is populated by the Statement Cutoff Processing batch program.
`)
loanRecordFields.set("ccintbilledlastyear", ` 
\n### CC Interest Billed Last Year
\nSymitar Quest stores the amount in this field of total interest charged to this credit card loan during the previous year.
\nField Number         **311**
\nMnemonic             **CCINTBILLEDLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31143**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, Symitar Quest transfers the value in the CC Interest Billed YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("ccpromoeffectdate", ` 
\n### Cred Card Promo Effect 2 - Credit Card Promo Effect 9
\nThese fields each store a date when the corresponding credit card promotion is effective for purchases, cash advances, and balance transfers taken on or before the date in the Promo # Expiration Date parameter (or before the number of days in the Promo # Expiration Days parameter have passed).
\nField Number         **184:2 - 184:9**
\nMnemonic             **CCPROMOEFFECTDATE:2 - CCPROMOEFFECTDATE:9**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01484**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAt any of these fields, enter the date the corresponding credit card promotion is effective for purchases, cash advances, and balance transfers taken on or before the date in the Promo # Expiration Date parameter (or before the number of days in the Promo # Expiration Days parameter have passed). This is the active promo period and balances are charged at the promo rates established in the Interest Type Parameters.
\n
\nNo new purchases, cash advances, or balance transfers can be made on this promo after the date in the Promo # Expiration Date parameter (except with an override transaction) but balances are charged at the promo rate until the date in the Promo # Termination Date parameter (or before the number of days in the Promo # Termination Days parameter have passed). This is the expired promo period. Override transactions can be done with the Loan Advance (LA) transaction code or through the Draft Posting batch program.
\n
\nFor more information, see Card Promotions.
`)
loanRecordFields.set("puintcharge", ` 
\n### PU Int Charge
\nSymitar Quest stores the amount in this field of interest calculated on purchases at the end of the statement period just completed.
\nField Number         **095**
\nMnemonic             **PUINTCHARGE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01395**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThis field stores the amount of interest calculated at the end of the statement period just completed for the following:
\n   - The balance of purchases at the current rate (from the PU Average Balance field value)
\n   - The balance of purchases at the old rate (from the PU Average Balance 2 field value)
\n
\nSymitar Quest performs extremely complex calculations to compute the value in this field, depending on the Interest Type Parameters for the loan. The following explanation is accurate for many of our clients.
\n
\nDuring the Statement Cutoff Processing batch program, Symitar Quest checks through all the transactions that affect principal to see if the member paid off the entire amount in the PU New Balance field by the due date. If the member paid off the entire new balance, Symitar Quest resets this field to 0.00. If the PU New Balance field still has a balance on the due date, Symitar Quest computes the PU Average Balance field value and multiplies it by the value in the Purchase Interest Rate parameter in the Interest Type Parameters, then divides that figure by 12 and enters the result in this field.
\n
\nFor complete information about the calculations performed to compute interest charges for credit card loans, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("puoldintunpaid", ` 
\n### PU Old Int Unpaid
\nSymitar Quest stores the total amount in this field of interest due on current purchases at the end of the previous statement period.
\nField Number         **094**
\nMnemonic             **PUOLDINTUNPAID**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01394**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nWhen you run the Statement Cutoff Processing batch program, Symitar Quest replaces the current value in this field with the PU New Int Unpaid field value from the most recently completed statement period.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("punewintunpaid", ` 
\n### PU New Int Unpaid
\nSymitar Quest stores the total amount in this field of interest due on current purchases at the end of the statement period just completed.
\nField Number         **097**
\nMnemonic             **PUNEWINTUNPAID**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01397**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Copies the current value in this field to the PU Old Int Unpaid field
\n   - Adds the amount in the PU Int Charge field to the current value in this field
\n   - Adjusts the sum as necessary for transactions during the statement period that affect interest on purchases
\n   - Enters the adjusted sum in this field
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("purcholdbalance", ` 
\n## PURCHOLDBALANCE:1
\n### PU Old Balance
\nSymitar Quest stores the principal balance in this field for current purchases at the end of the previous statement period.
\nField Number         **093:1**
\nMnemonic             **PURCHOLDBALANCE:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01393**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nWhen you run the Statement Cutoff Processing batch program, Symitar Quest replaces the current value in this field with the PU New Balance field value from the most recently completed statement period.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n### PU Old Balance 2 - PU Old Balance 9
\nSymitar Quest stores the principal purchase balance in each of these fields made at an old interest rate in these fields. Current purchases do not affect this field.
\nField Number         **093:2 - 093:9**
\nMnemonic             **PURCHOLDBALANCE:2 - PURCHOLDBALANCE:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01393**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\n
\nWhen you run the Statement Cutoff Processing batch program, Symitar Quest replaces the current value in each field with the corresponding PU New Balance # field value from the most recently completed statement period.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("purchavgbalance", ` 
\n## PURCHAVGBALANCE:1
\n### PU Average Balance
\nSymitar Quest stores the average daily principal balance in this field of current purchases for the statement period just completed.
\nField Number         **106:1**
\nMnemonic             **PURCHAVGBALANCE:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01406**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Calculates the average daily principal balance on purchases based on the value in the PU New Balance field
\n   - If the PU New Balance field value is 0.00 by the statement due date, sets this field to 0.00
\n   - If the PU New Balance field value is not 0.00, does the following:
\n   - Starts with the ending purchase balance for the previous statement period
\n   - Goes through the transaction history to derive the purchase balance for each day in the statement period
\n   - Sums the ending balances for each of those days
\n   - Divides the sum by the number of days in the period
\n   - Updates this field with the result
\n   - Uses the value in this field to determine the interest charge on current purchases for this month
\n
\nFor complete information about how Symitar Quest calculates the value of this field, see the Credit Cards publication.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n### PU Average Balance 2 - PU Average Balance 9
\nSymitar Quest stores the average daily principal balance in these fields of current purchases of promotion # for the statement period just completed.
\nField Number         **106:2 - 106:9**
\nMnemonic             **PURCHAVGBALANCE:2 - PURCHAVGBALANCE:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01406**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Calculates the average daily principal balance on purchases based on the value in each PU New Balance # field
\n   - Updates each field with the result
\n   - Uses the value in each field to determine the interest charge on old purchases for this month
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("purchnewbalance", ` 
\n## PURCHNEWBALANCE:1
\n### PU New Balance
\nSymitar Quest stores the current purchase principal balance in this field at the end of the statement period just completed.
\nField Number         **096:1**
\nMnemonic             **PURCHNEWBALANCE:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01396**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Moves the current value in this field to the PU Old Balance field
\n   - Checks the transaction history for purchase transactions
\n   - Computes the total transaction amount that affects purchase principal
\n   - Enters the computed amount in this field
\n
\nWhenever you perform a Loan Payment (LP) or Loan Addon (LA) teller transaction, you specify whether the transaction should be applied to the purchase principal, cash advance principal, or balance transfer principal.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n### PU New Balance 2 - PU New Balance 9
\nSymitar Quest stores the purchase principal balance in each of these fields related to the alternate interest rate at the end of the statement period just completed. Current purchases do not affect this field.
\nField Number         **096:2 - 096:9**
\nMnemonic             **PURCHNEWBALANCE:2 - PURCHNEWBALANCE:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01396**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Moves the current value in each field to the PU Old Balance # field
\n   - Computes the total transaction amount of each field that affects purchase principal
\n   - Enters the computed amount in each field
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("pupmtsincelaststmt", ` 
\n## PUPMTSINCELASTSTMT:1
\n### PU Pmt Since Last Stmt
\nSymitar Quest stores loan payment transactions in this field that have occurred since the last statement cutoff processing date and that apply to the credit card loan’s purchase balance at the standard rate.
\nField Number         **355:1**
\nMnemonic             **PUPMTSINCELASTSTMT:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31187**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nThe transaction amount applied to purchases is based on the Balance Chg transaction field amount. The amount displays as a negative value in this field.
\n
\nSymitar Quest resets this field value to 0.00 after Statement Cutoff Processing is run for the loan’s specified statement group.
\n***Important:***  A Void (VO) transaction, a negative LPZ transaction, or a batch reversal updates this field when the Sub Action Code transaction field value equals P or blank; however, the transaction could apply to a specific promotion or a credit card transaction type, and you may need to manually adjust the balances for these transactions.
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n### PU Pmt Since Last Stmt 2 - PU Pmt Since Last Stmt 9
\nSymitar Quest stores loan payment transactions for each field that have occurred since the last statement cutoff processing date and that apply to the credit card loan’s purchase balance at an alternate interest rate from the standard rate.
\nField Number         **355:2 - 355:9**
\nMnemonic             **PUPMTSINCELASTSTMT:2 - PUPMTSINCELASTSTMT:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31187**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\n
\nThe amount applied to purchases from each loan payment transaction is based on the Balance Chg transaction field amount. The amount displays as a negative value in each field.
\n
\nThese field values are reset to 0.00 after Statement Cutoff Processing is run for the loan’s specified statement group.
\n***Important:***  A Void (VO) transaction, a negative LPZ transaction, or a batch reversal has no effect on these fields. You must manually adjust the balance for these transactions, as needed.
\n***Important:***  The computed value in these fields is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see variances when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("puaddonsincelaststmt", ` 
\n## PUADDONSINCELASTSTMT:1
\n### PU Add-on Since Last Stmt
\nSymitar Quest stores loan add-on transactions in this field that have occurred since the last statement cutoff processing date and that are being charged as a credit card purchase at the standard rate.
\nField Number         **351:1**
\nMnemonic             **PUADDONSINCELASTSTMT:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31183**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nThis field value is reset to 0.00 after Statement Cutoff Processing is run for the loan’s specified statement group.
\n
\nA negative amount is allowed in this field. For example, when a LAZ transaction reverses a purchase loan add-on transaction, a negative amount may result. Voiding a purchase loan add-on transaction adjusts this field by the transaction amount.
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n### PU Add-on Since Last Stmt 2 - PU Add-on Since Last Stmt 9
\nSymitar Quest stores loan add-on transactions in these fields that have occurred since the last statement cutoff processing date and that are being charged as a credit card purchase at an alternate interest rate from the standard rate.
\nField Number         **351:2 - 351:9**
\nMnemonic             **PUADDONSINCELASTSTMT:2 - PUADDONSINCELASTSTMT:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31183**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\n
\nThese field values are reset to 0.00 after Statement Cutoff Processing is run for the loan’s specified statement group.
\n
\nA negative amount is allowed in these fields. For example, when a LAZ transaction reverses a purchase loan add-on transaction, a negative amount may result. Voiding a purchase loan add-on transaction adjusts these fields by the transaction amount.
\n***Important:***  The computed value in these fields is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see variances when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("statementnewbalance", ` 
\n### Statement New Balance
\nThis field contains the total amount of card balances and the total amount of interest due at the end of the statement period just completed.
\nField Number         **848**
\nMnemonic             **STATEMENTNEWBALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31524**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("statementoldbalance", ` 
\n### Statement Old Balance
\nThis field contains the total amount of card balances and the total amount of interest due at the end of the previous statement period.
\nField Number         **849**
\nMnemonic             **STATEMENTOLDBALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31525**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("feeoldbalance", ` 
\n### Fee Old Balance
\nSymitar Quest stores the fee balance in this field at the end of the previous statement period.
\nField Number         **104**
\nMnemonic             **FEEOLDBALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01404**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nThe Statement Cutoff Processing batch program moves the current value in the Fee New Balance field to this field.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("feenewbalance", ` 
\n### Fee New Balance
\nSymitar Quest stores the ending fee balance in this field for the statement period just completed.
\nField Number         **105**
\nMnemonic             **FEENEWBALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Moves the current value in this field to the Fee Old Balance field
\n   - Checks the transaction history for fee transactions
\n   - Adds the total amount of fees assessed during the statement period
\n   - Subtracts any fee payments and fee credit adjustments
\n   - Enters the resulting amount in this field
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("feepmtsincelaststmt", ` 
\n### Fee Pmt Since Last Stmt
\nSymitar Quest stores loan payment transactions in this field that have occurred since the last statement cutoff processing date and that apply to the credit card loan’s fee balance.
\nField Number         **354**
\nMnemonic             **FEEPMTSINCELASTSTMT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31186**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nThe transaction amount applied to fees is based on the Balance Chg transaction field amount. The amount displays as a negative value in this field.
\n
\nThis field value is reset to 0.00 after Statement Cutoff Processing is run for the loan’s specified statement group.
\n***Important:***  A Void (VO) transaction, a negative LPZ transaction, or a batch reversal updates this field when the Sub Action Code transaction field value equals F; however, if the Sub Action Code transaction field value is blank, there is no effect on this field and fees may have been included in the transaction. You may need to manually adjust the balance for these transactions.
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("feeaddonsincelaststmt", ` 
\n### Fee Add-on Since Last Stmt
\nSymitar Quest stores loan add-on transactions in this field that have occurred since the last statement cutoff processing date and that are being charged as a credit card fee.
\nField Number         **350**
\nMnemonic             **FEEADDONSINCELASTSTMT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31182**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nThis field value is reset to 0.00 after Statement Cutoff Processing is run for the loan’s specified statement group.
\n
\nA negative amount is allowed in this field. For example, when a LAZ transaction reverses a fee loan add-on transaction, a negative amount may result. Voiding a fee loan add-on transaction adjusts this field by the transaction amount.
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("caintcharge", ` 
\n### CA Int Charge
\nSymitar Quest stores the amount in this field of interest calculated on cash advances at the end of the statement period just completed.
\nField Number         **100**
\nMnemonic             **CAINTCHARGE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01400**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThis field stores the amount of interest calculated at the end of the statement period just completed for the following:
\n   - The balance of cash advances at the current rate (from the CA Average Balance field value)
\n   - The balance of cash advances at the old rate (from the CA Average Balance 2 field value)
\n
\nSymitar Quest performs extremely complex calculations to compute the value in this field, depending on the Interest Type Parameters for the loan. The following explanation is accurate for many of our clients.
\n
\nDuring the Statement Cutoff Processing batch program, Symitar Quest computes the CA Average Balance field value and multiplies it by the value in the Cash Advance Interest Rate parameter in the Interest Type Parameters, then divides that figure by 12 and enters the result in this field.
\n
\nFor information about interest calculations for credit card loans, see Credit Cards.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("caoldintunpaid", ` 
\n### CA Old Int Unpaid
\nSymitar Quest stores the total amount in this field of interest due on cash advances at the end of the previous statement period.
\nField Number         **099**
\nMnemonic             **CAOLDINTUNPAID**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01399**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nWhen you run the Statement Cutoff Processing batch program, Symitar Quest replaces the current value in this field with the CA New Int Unpaid field value from the most recently completed statement period.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("canewintunpaid", ` 
\n### CA New Int Unpaid
\nSymitar Quest stores the total amount in this field of interest due on cash advances at the end of the statement period just completed.
\nField Number         **103**
\nMnemonic             **CANEWINTUNPAID**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Copies the current value in this field to the CA Old Int Unpaid field
\n   - Adds the amounts in the CA Int Charge and CA Trans Int Charge fields to the current value in this field
\n   - Adjusts the sum as necessary for transactions during the statement period that affect interest on cash advances
\n   - Enters the adjusted sum in this field
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("catransintcharge", ` 
\n### CA Trans Int Charge
\nSymitar Quest stores the amount in this field of the cash advances transaction finance charges for the statement period just completed.
\nField Number         **101**
\nMnemonic             **CATRANSINTCHARGE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01401**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nDuring the Statement Cutoff Processing batch program, Symitar Quest computes a transaction finance charge for cash advances based on the Interest Type Parameters, as described below:
\n   - Multiplies each separate cash advance in the statement period by the value in the Cash Advance Transaction Rate parameter
\n   - Adds the resulting total to the value in the Cash Advance Transaction Base parameter to get the total transaction interest charge
\n   - If the total transaction interest charge is less than the value in the Cash Advance Transaction Minimum parameter, uses the value in the Cash Advance Transaction Minimum parameter
\n   - If the total transaction interest charge is greater than the value in the Cash Advance Transaction Maximum parameter, uses the value in the Cash Advance Transaction Maximum parameter
\n   - In all other cases, uses the transaction interest charge
\n
\nOnce Symitar Quest decides which amount to use for each separate cash advance, it adds those amounts together and updates this field with the sum.
\n
\nFor information about the calculations performed to compute cash advance transaction finance charges for credit card loans, see Card Finance Charges.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("cashadvoldbalance", ` 
\n## CASHADVOLDBALANCE:1
\n### CA Old Balance
\nSymitar Quest stores the principal balance in this field for current cash advances at the end of the previous statement period.
\nField Number         **098:1**
\nMnemonic             **CASHADVOLDBALANCE:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01398**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nWhen you run the Statement Cutoff Processing batch program, Symitar Quest replaces the current value in this field with the CA New Balance field value from the most recently completed statement period.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n### CA Old Balance 2 - CA Old Balance 9
\nSymitar Quest stores the cash advances in these fields made at an old rate. Current cash advances do not affect this field.
\nField Number         **098:2 - 098:9**
\nMnemonic             **CASHADVOLDBALANCE:2 - CASHADVOLDBALANCE:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01398**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\n
\nWhen you run the Statement Cutoff Processing batch program, Symitar Quest replaces the current value in each field with the CA New Balance # field value from the most recently completed statement period.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("cashadvavgbalance", ` 
\n## CASHADVAVGBALANCE:1
\n### CA Average Balance
\nSymitar Quest stores the average daily principal balance in this field of current cash advances for the statement period just completed.
\nField Number         **107:1**
\nMnemonic             **CASHADVAVGBALANCE:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01407**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Calculates the average daily principal balance based on the value in the CA New Balance field
\n   - Updates this field with the result
\n   - Uses the value in this field to determine the interest charge on current cash advances for this month
\n
\nFor complete information about how Symitar Quest calculates the value of this field, see Credit Cards.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n### CA Average Balance 2 - CA Average Balance 9
\nSymitar Quest stores the average daily principal balance in these fields of current cash advances of promotion # for the statement period just completed.
\nField Number         **107:2 - 107:9**
\nMnemonic             **CASHADVAVGBALANCE:2 - CASHADVAVGBALANCE:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01407**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Calculates the average daily principal balance based on the value in each CA New Balance # field
\n   - Updates each field with the result
\n   - Uses the value in each field to determine the interest charge on old cash advances for this month
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("cashadvnewbalance", ` 
\n## CASHADVNEWBALANCE:1
\n### CA New Balance
\nSymitar Quest stores the cash advance principal balance in this field at the end of the statement period just completed. Under normal circumstances, you should not revise this field.
\nField Number         **102:1**
\nMnemonic             **CASHADVNEWBALANCE:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01402**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Moves the current value in this field to the CA Old Balance field
\n   - Checks the transaction history for cash advance transactions
\n   - Computes the total transaction amount that affects the cash advance principal
\n   - Enters the computed amount in this field
\n
\nWhenever you perform a Loan Payment (LP) or Loan Addon (LA) teller transaction, you specify whether the transaction should be applied to the purchase principal, cash advance principal, or balance transfer principal.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n### CA New Balance 2 - CA New Balance 9
\nSymitar Quest stores the cash advance principal balance in these fields related to the alternate interest rate at the end of the statement period just completed. Current cash advances do not affect this field.
\nField Number         **102:2 - 102:9**
\nMnemonic             **CASHADVNEWBALANCE:2 - CASHADVNEWBALANCE:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01402**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Moves the current value in each field to the CA Old Balance # field
\n   - Computes the total transaction amount of each field that affects the cash advance principal
\n   - Enters the computed amount in each field
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("capmtsincelaststmt", ` 
\n## CAPMTSINCELASTSTMT:1
\n### CA Pmt Since Last Stmt
\nSymitar Quest stores loan payment transactions in this field that have occurred since the last statement cutoff processing date and that apply to the credit card loan’s cash advance balance at the standard rate.
\nField Number         **356:1**
\nMnemonic             **CAPMTSINCELASTSTMT:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31188**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nThe amount applied to cash advances from each payment transaction is based on the Balance Chg transaction field amount. The amount displays as a negative value in this field.
\n
\nThis field value is reset to 0.00 after Statement Cutoff Processing is run for the loan’s specified statement group.
\n***Important:***  A Void (VO) transaction, a negative LPZ transaction, or a batch reversal updates this field when the Sub Action Code transaction field value equals C; however, the transaction could apply to a specific cash advance promotion. If the Sub Action Code transaction field value is blank, there is no effect on this field and cash advances may have been included in the transaction. You may need to manually adjust the balance for these transactions.
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n### CA Pmt Since Last Stmt 2 - CA Pmt Since Last Stmt 9
\nSymitar Quest stores loan payment transactions for each field that have occurred since the last statement cutoff processing date and that apply to the credit card loan’s cash advance balance at an alternate interest rate from the standard rate.
\nField Number         **356:2 - 356:9**
\nMnemonic             **CAPMTSINCELASTSTMT:2 - CAPMTSINCELASTSTMT:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31188**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\n
\nThe amount applied to cash advances from each loan payment transaction is based on the Balance Chg transaction field amount. The amount displays as a negative value in each field.
\n
\nThese field values are reset to 0.00 after Statement Cutoff Processing is run for the loan’s specified statement group.
\n***Important:***  A Void (VO) transaction, negative LPZ transaction, or a batch reversal has no effect on these fields. You must manually adjust the balance for these transactions, as needed.
\n***Important:***  The computed value in these fields is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see variances when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("caaddonsincelaststmt", ` 
\n## CAADDONSINCELASTSTMT:1
\n### CA Add-on Since Last Stmt
\nSymitar Quest stores loan add-on transactions in this field that have occurred since the last statement cutoff processing date and that are being charged as a credit card cash advance at the standard rate.
\nField Number         **352:1**
\nMnemonic             **CAADDONSINCELASTSTMT:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31184**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nThis field value is reset to 0.00 after Statement Cutoff Processing is run for the loan’s specified statement group.
\n
\nA negative amount is allowed in this field. For example, when a LAZ transaction reverses a cash advance loan add-on transaction, a negative amount may result. Voiding a cash advance loan add-on transaction adjusts this field by the transaction amount.
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n### CA Add-on Since Last Stmt 2 - CA Add-on Since Last Stmt 9
\nSymitar Quest stores loan add-on transactions in these fields that have occurred since the last statement cutoff processing date and that are being charged as a credit card cash advance at an alternate interest rate from the standard rate.
\nField Number         **352:2 - 352:9**
\nMnemonic             **CAADDONSINCELASTSTMT:2 - CAADDONSINCELASTSTMT:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31184**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\n
\nThese field values are reset to 0.00 after Statement Cutoff Processing is run for the loan’s specified statement group.
\n
\nA negative amount is allowed in these fields. For example, when a LAZ transaction reverses a cash advance loan add-on transaction, a negative amount may result. Voiding a cash advance loan add-on transaction adjusts these fields by the transaction amount.
\n***Important:***  The computed value in these fields is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see variances when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("btintcharge", ` 
\n### BT Int Charge
\nSymitar Quest stores the amount in this field of interest calculated on balance transfers at the end of the statement period just completed.
\nField Number         **291**
\nMnemonic             **BTINTCHARGE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31123**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThis field stores the amount of interest calculated at the end of the statement period just completed for the following:
\n   - The balance of balance transfers at the current rate
\n   - The balance of balance transfers at the old rate
\n
\nSymitar Quest performs extremely complex calculations to compute the value in this field, depending on the Interest Type Parameters for the loan. The following explanation is accurate for many of our clients.
\n
\nDuring the Statement Cutoff Processing batch program, Symitar Quest computes the BT Average Balance field value and multiplies it by the value in the Balance Xfr Interest Rate parameter in the Interest Type Parameters, then divides that figure by 12 and enters the result in this field.
\n
\nFor information about interest calculations for credit card loans, see Credit Cards.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("btoldintunpaid", ` 
\n### BT Old Int Unpaid
\nSymitar Quest stores the total amount in this field of interest due on balance transfers at the end of the previous statement period.
\nField Number         **290**
\nMnemonic             **BTOLDINTUNPAID**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31122**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nWhen you run the Statement Cutoff Processing batch program, Symitar Quest replaces the current value in this field with the BT New Int Unpaid field from the most recently completed statement period.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("btnewintunpaid", ` 
\n### BT New Int Unpaid
\nSymitar Quest stores the total amount in this field of interest due on balance transfers at the end of the statement period just completed.
\nField Number         **294**
\nMnemonic             **BTNEWINTUNPAID**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31126**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Copies the current value in this field to the BT Old Int Unpaid field
\n   - Adds the amounts in the BT Int Charge and BT Trans Int Charge fields to the current value in this field
\n   - Adjusts the sum as necessary for transactions during the statement period that affect interest on balance transfers
\n   - Enters the adjusted sum in this field
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("bttransintcharge", ` 
\n### BT Trans Int Charge
\nSymitar Quest stores the amount in this field of the balance transfer transaction finance charges for the statement period just completed.
\nField Number         **292**
\nMnemonic             **BTTRANSINTCHARGE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31124**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nDuring the Statement Cutoff Processing batch program, Symitar Quest computes a transaction finance charge for balance transfers based on the Interest Type Parameters, as described below:
\n
\nOnce Symitar Quest decides which amount to use for each separate balance transfer, it adds those amounts together and updates this field with the sum.
\n
\nFor information about similar calculations performed to compute cash advance transaction finance charges for credit card loans, see Cash Advance Transaction Finance Charges.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("balxfroldbalance", ` 
\n## BALXFROLDBALANCE:1
\n### BT Old Balance
\nSymitar Quest stores the principal balance in this field for current balance transfers at the end of the previous statement period.
\nField Number         **296:1**
\nMnemonic             **BALXFROLDBALANCE:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31121**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nWhen you run the Statement Cutoff Processing batch program, Symitar Quest replaces the current value in this field with the BT New Balance field value from the most recently completed statement period.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n### BT Old Balance 2 - BT Old Balance 9
\nSymitar Quest stores the balance transfers in these fields made at an old rate. Current balance transfers do not affect this field.
\nField Number         **296:2 - 296:9**
\nMnemonic             **BALXFROLDBALANCE:2 - BALXFROLDBALANCE:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31121**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\n
\nWhen you run the Statement Cutoff Processing batch program, Symitar Quest replaces the current value in each field with the BT New Balance # from the most recently completed statement period.
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("balxfravgbalance", ` 
\n## BALXFRAVGBALANCE:1
\n### BT Average Balance
\nSymitar Quest stores the average daily principal balance in this field of current balance transfers for the statement period just completed. Under normal circumstances.
\nField Number         **295:1**
\nMnemonic             **BALXFRAVGBALANCE:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31127**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Calculates the average daily principal balance based on the value in the BT New Balance field
\n   - Updates this field with the result
\n   - Uses the value in this field to determine the interest charge on current balance transfers for this month
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n### BT Average Balance 2 - BT Average Balance 9
\nSymitar Quest stores the average daily principal balance in these fields of current balance transfers of promotion # for the statement period just completed.
\nField Number         **295:2 - 295:9**
\nMnemonic             **BALXFRAVGBALANCE:2 - BALXFRAVGBALANCE:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31127**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Calculates the average daily principal balance based on the value in each BT New Balance # field
\n   - Updates each field with the result
\n   - Uses the value in each field to determine the interest charge on current balance transfers for this month
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("balxfrnewbalance", ` 
\n## BALXFRNEWBALANCE:1
\n### BT New Balance
\nSymitar Quest stores the balance transfer principal balance in this field at the end of the statement period just completed. Under normal circumstances, you should not revise this field.
\nField Number         **293:1**
\nMnemonic             **BALXFRNEWBALANCE:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31125**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Moves the current value in this field to the BT Old Balance field
\n   - Checks the transaction history for balance transfer transactions
\n   - Computes the total transaction amount that affects the balance transfer principal
\n   - Enters the computed amount in this field
\n
\nWhenever you perform a Loan Payment (LP) or Loan Addon (LA) teller transaction, you specify whether the transaction should be applied to the purchase principal, cash advance principal, or balance transfer principal.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n### BT New Balance 2 - BT New Balance 9
\nSymitar Quest stores the balance transfer principal balance in these fields related to the alternate interest rate at the end of the statement period just completed. Current balance transfers do not affect this field.
\nField Number         **293:2 - 293:9**
\nMnemonic             **BALXFRNEWBALANCE:2 - BALXFRNEWBALANCE:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31125**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\nThe Statement Cutoff Processing batch program does the following:
\n   - Moves the current value in each field to the BT Old Balance # field
\n   - Computes the total transaction amount of each field that affects the balance transfer principal
\n   - Enters the computed amount in each field
\n
\nFor more information, see Card Promotions.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("btpmtsincelaststmt", ` 
\n## BTPMTSINCELASTSTMT:1
\n### BT Pmt Since Last Stmt
\nSymitar Quest stores loan payment transactions in this field that have occurred since the last statement cutoff processing date and that apply to the credit card loan’s balance transfer balance at the standard rate.
\nField Number         **357:1**
\nMnemonic             **BTPMTSINCELASTSTMT:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31189**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nTo enter a value in this field, the CC Balance Transfer internal parameter must also be set to (1) Yes. We must enable this parameter. Contact Support for details.
\n
\nThe amount applied to balance transfers from each loan payment transaction is based on the Balance Chg transaction field amount. The amount displays as a negative value in this field.
\n
\nThis field value is reset to 0.00 after Statement Cutoff Processing is run for the loan’s specified statement group.
\n***Important:***  A Void (VO) transaction, a negative LPZ transaction, or a batch reversal updates this field when the Sub Action Code transaction field value equals B; however, the transaction could apply to a specific balance transfer promotion. If the Sub Action Code transaction field value is blank, there is no effect on this field and valance transfers may have been included in the transaction. You may need to manually adjust the balance for these transactions.
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nYou cannot perform file maintenance on this field.
\n
\n### BT Pmt Since Last Stmt 2 - BT Pmt Since Last Stmt 9
\nSymitar Quest stores loan payment transactions for these fields that have occurred since the last statement cutoff processing date and that apply to the credit card loan’s balance transfer balance at an alternate interest rate from the standard rate.
\nField Number         **357:2 - 357:9**
\nMnemonic             **BTPMTSINCELASTSTMT:2 - BTPMTSINCELASTSTMT:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31189**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\n
\nTo enter a value in these fields, the CC Balance Transfer internal parameter must also be set to (1) Yes. We must enable this parameter. Contact Support for details.
\n
\nThe amount applied to balance transfers from each loan payment transaction is based on the Balance Chg transaction field amount. The amount displays as a negative value in each field.
\n
\nThese field values are reset to 0.00 after Statement Cutoff Processing is run for the loan’s specified statement group.
\n***Important:***  A Void (VO) transaction, a negative LPZ transaction, or a batch reversal has no effect on these fields. You must manually adjust the balance for these transactions, as needed.
\n***Important:***  The computed value in these fields is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see variances when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nFor more information, see Card Promotions.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("btaddonsincelaststmt", ` 
\n## BTADDONSINCELASTSTMT:1
\n### BT Add-on Since Last Stmt
\nSymitar Quest stores loan add-on transactions in this field that have occurred since the last statement cutoff processing date and that are being charged as a credit card balance transfer at the standard rate.
\nField Number         **353:1**
\nMnemonic             **BTADDONSINCELASTSTMT:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31185**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nTo enter a value in this field, the CC Balance Transfer internal parameter must also be set to (1) Yes. We must enable this parameter. Contact Support for details.
\n
\nThis field value is reset to 0.00 after Statement Cutoff Processing is run for the loan’s specified statement group.
\n
\nA negative amount is allowed in this field. For example, when a LAZ transaction reverses a balance transfer loan add-on transaction, a negative amount may result. Voiding a balance transfer loan add-on transaction adjusts this field by the transaction amount.
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nYou cannot perform file maintenance on this field.
\n
\n### BT Add-on Since Last Stmt 2 - BT Add-on Since Last Stmt 9
\nSymitar Quest stores loan add-on transactions in these fields that have occurred since the last statement cutoff processing date and that are being charged as a credit card balance transfer at an alternate interest rate from the standard rate.
\nField Number         **353:2 - 353:9**
\nMnemonic             **BTADDONSINCELASTSTMT:2 - BTADDONSINCELASTSTMT:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **31185**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fields apply only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest that are being charged an alternate interest rate from the standard rate. Each field value can be one of eight possible credit card promotional rates.
\n
\nTo enter a value in these fields, the CC Balance Transfer internal parameter must also be set to (1) Yes. We must enable this parameter. Contact Support for details.
\n
\nThese field values are reset to 0.00 after Statement Cutoff Processing is run for the loan’s specified statement group.
\n
\nA negative amount is allowed in these fields. For example, when a LAZ transaction reverses a balance transfer loan add-on transaction, a negative amount may result. Voiding a balance transfer loan add-on transaction adjusts these fields by the transaction amount.
\n***Important:***  The computed value in these fields is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see variances when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nFor more information, see Card Promotions.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("capercent", ` 
\n### CA Percent
\nThis field stores the percentage of the overall credit limit that can be allocated to cash advances by multiplying the percent value in this field by the Credit Limit field value.
\nField Number         **344**
\nMnemonic             **CAPERCENT**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **31176**
\nDefault Control      **Yes**
\nDefault Value **100.000**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nTo establish a cash advance limit for this loan based on a percent of the Credit Limit field, enter a value between 0 and 100 percent in this field. Symitar Quest calculates the cash advance limit and rounds to the nearest dollar.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the CA Percent field from the specified Application record.
`)
loanRecordFields.set("calimitmax", ` 
\n### CA Limit Max
\nThis field stores the maximum amount that can be allocated to cash advances from the overall credit limit.
\nField Number         **345**
\nMnemonic             **CALIMITMAX**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **31177**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nTo establish a maximum cash advance limit for the loan, enter an amount that is greater than 0 and less than the Credit Limit field value.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the CA Limit Max field from the specified Application record.
`)
loanRecordFields.set("btpercent", ` 
\n### BT Percent
\nWhen balance transfers are allowed, this field stores the percentage of the overall credit limit to be allocated to balance transfers by multiplying the percent value in this field by the Credit Limit field value.
\nField Number         **346**
\nMnemonic             **BTPERCENT**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **31178**
\nDefault Control      **Yes**
\nDefault Value **100.000**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nTo enter a value in this field, the CC Balance Transfer internal parameter must also be set to (1) Yes. We must enable this parameter. Contact Support for details.
\n
\nTo establish a balance transfer limit for this loan based on a percent of the Credit Limit, enter a value between 0 and 100 percent in this field. Symitar Quest calculates the balance transfer limit and rounds to the nearest dollar.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the BT Percent field from the specified Application record.
`)
loanRecordFields.set("btlimitmax", ` 
\n### BT Limit Max
\nThis field stores the maximum amount that can be allocated to balance transfers from the overall credit limit.
\nField Number         **347**
\nMnemonic             **BTLIMITMAX**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **31179**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nTo enter a value in this field, the CC Balance Transfer internal parameter must also be set to (1) Yes. We must enable this parameter. Contact Support for details.
\n
\nTo establish a maximum balance transfer limit for the loan, enter an amount that is greater than 0 and less than the Credit Limit field value.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the BT Limit Max field from the specified Application record.
`)
loanRecordFields.set("combinedcabtpercent", ` 
\n### Combined CA/BT Percent
\nWhen balance transfers are allowed, this field stores the percentage of the overall credit limit to be allocated to cash advances and balance transfers combined by multiplying the percent value in this field by the Credit Limit field value.
\nField Number         **348**
\nMnemonic             **COMBINEDCABTPERCENT**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **31180**
\nDefault Control      **Yes**
\nDefault Value **100.000**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nTo establish a combined cash advance and balance transfer limit for this loan based on a percent of the Credit Limit, enter a value between 0 and 100 percent in this field. Symitar Quest calculates the combined cash advance and balance transfer limit and rounds to the nearest dollar.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Combined CA/BT Percent field from the specified Application record.
`)
loanRecordFields.set("combinedcabtlimitmax", ` 
\n### Combined CA/BT Limit Max
\nThis field stores the maximum amount that can be allocated to combined cash advances and balance transfers from the overall credit limit.
\nField Number         **349**
\nMnemonic             **COMBINEDCABTLIMITMAX**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **31181**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nThis field applies only to credit card loans (the Loan Code field value is 3) with an Interest Type field value of (10-8999) Credit Card Interest.
\n
\nTo establish a maximum cash advance and balance transfer limit for the loan, enter an amount that is greater than 0 and less than the Credit Limit field value.
\n
\nIf you pull this value using the Pull Fields From App action field, Symitar Quest updates this field with the value in the Combined CA/BT Limit Max field from the specified Application record.
`)
loanRecordFields.set("totalfeebalancetodate", ` 
\n### Total Fee Balance to Date
\nThis field contains the fee balance to date; it adds the last statement cutoff processing balance and any related loan add-ons and loan payments that have occurred during the statement cycle.
\nField Number         **844**
\nMnemonic             **TOTALFEEBALANCETODATE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31520**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("totalpubalancetodate", ` 
\n### Total PU Balance to Date
\nThis field contains the total purchase balance to date; it adds the last statement cutoff processing purchase balances and any related loan add-ons and loan payments that have occurred during the statement cycle.
\nField Number         **845**
\nMnemonic             **TOTALPUBALANCETODATE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31521**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("totalcabalancetodate", ` 
\n### Total CA Balance to Date
\nThis field contains the cash advance balance to date; it adds the last statement cutoff processing cash advance balances and any related loan add-ons and loan payments that have occurred during the statement cycle.
\nField Number         **846**
\nMnemonic             **TOTALCABALANCETODATE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31522**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("totalbtbalancetodate", ` 
\n### Total BT Balance to Date
\nThis field contains the balance transfer balance to date; it adds the last statement cutoff processing balance transfer balances and any related loan add-ons and loan payments that have occurred during the statement cycle.
\nField Number         **847**
\nMnemonic             **TOTALBTBALANCETODATE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31523**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  The computed value in this field is an approximate calculation and may not be entirely accurate. You may see variances between this field and a payoff inquiry, and you may see a variance when the loan payment application is finalized once Statement Cutoff Processing is completed.
\n
\nYou cannot perform file maintenance on this field.
`)
loanRecordFields.set("ovloptin", ` 
\n### OVL Opt-In?
\nThis field stores a code to indicate whether the member has chosen (opted-in) to use the OVL service.
\nField Number         **328**
\nMnemonic             **OVLOPTIN**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31160**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   The member did not select to opt in for the OVL service.##### (1) Yes
\n   The member selected to opt in for the OVL service.
\nThe Statement Generation batch program uses this field in conjunction with the Print Stmt Disclosure If No OVL prompt in cases where, even though the member did not go over the limit for that statement period (so no OVL fee was assessed), the credit union still chooses to print the revocation statement.
`)
loanRecordFields.set("ovlauthfee", ` 
\n### OVL Auth/Fee Option
\nThis field stores a code that determines whether to authorize or assess a fee for credit card over-the-limit transactions.
\nField Number         **329**
\nMnemonic             **OVLAUTHFEE**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **31161**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n***Important:***  If you provide over-the-limit service for credit cards, we recommend that you use Default Manager to set the default value for this field to (3) No Auth/No Fee Allowed or (1) Auth & No Fee Allowed for credit card loan types. Regulation Z states that you may not charge an over-the-limit fee until the member opts in and a confirmation is sent.
\n
\nA value in this field is required for the authorization and fee posting programs, and for determining whether to authorize or assess a fee for credit card over-the-limit transactions.
\n#### Data Type Descriptions
\n##### (0) Auth/Fee Allowed
\n   Fees are authorized and can be assessed for credit card over-the-limit transactions.##### (1) Auth/No Fee Allowed
\n   Fees are authorized but cannot be assessed for credit card over-the-limit transactions.##### (2) No Auth/Fee Allowed
\n   Fees are not authorized but can be assessed for credit card over-the-limit transactions.##### (3) No Auth/No Fee Allowed
\n   Fees are not authorized and cannot be assessed for credit card over-the-limit transactions.
\n`)
loanRecordFields.set("ovlauthfeeeffdate", ` 
\n### OVL Auth/Fee Eff Date
\nThis field stores the effective date of the OVL Auth/Fee Option field setting.
\nField Number         **330**
\nMnemonic             **OVLAUTHFEEEFFDATE**
\nData Type            **Date**
\nSource               **System-entered or User-entered**
\nHelp File            **31162**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis field is associated with the OVL Auth/Fee Option field. When you update the OVL Auth/Fee Option field, Symitar Quest automatically sets this field to the system date (today’s date).
`)
loanRecordFields.set("ovlprevauthfee", ` 
\n### OVL Previous Auth/Fee Option
\nSymitar Quest stores a code in this field that specifies the previous setting of the OVL Auth/Fee Option field.
\nField Number         **331**
\nMnemonic             **OVLPREVAUTHFEE**
\nData Type            **Code to 3**
\nSource               **System-entered**
\nHelp File            **31163**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n***Important:***  If you provide over-the-limit service for credit cards, we recommend that you set the default value for the Previous OVL Auth/Fee Option field to (3) No Auth/No Fee Allowed or (1) Auth/No Fee Allowed for credit card loan types via Default Manager. Regulation Z states that you may not charge an over-the-limit fee until the member opts-in and a confirmation is sent.
\n
\nWhen you perform file maintenance on the OVL Auth/Fee Option field, Symitar Quest transfers its previous value to this field. This field can contain these values:
\n#### Data Type Descriptions
\n##### (0) Auth/Fee Allowed
\n   Fees are authorized and can be assessed for credit card over-the-limit transactions.##### (1) Auth/No Fee Allowed
\n   Fees are authorized but cannot be assessed for credit card over-the-limit transactions.##### (2) No Auth/Fee Allowed
\n   Fees are not authorized but can be assessed for credit card over-the-limit transactions.##### (3) No Auth/No Fee Allowed
\n   Fees are not authorized and cannot be assessed for credit card over-the-limit transactions.
\nUnder normal circumstances, you should not revise this field.
`)
loanRecordFields.set("ovlstmtdisclfee", ` 
\n### OVL Statement Disclosure Fee
\nThis field stores the fee amount that the Statement Generation batch program reads and prints on the revocation disclosure expressing the member’s right to revoke any consent for opting into the over-the-limit transaction services for credit card loans.
\nField Number         **333**
\nMnemonic             **OVLSTMTDISCLFEE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31165**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nThe amount entered in this field should represent the fee amount the next time the member goes over the limit, not the fee that was charged at the time of the last over-the-limit transaction appearing on their credit card statement.
\n
\nWe do not know where each credit union stores their fee disclosures for over-the-limit transactions. Some credit unions may store them in parameters, hard coded in specfiles, or they may not store them at all. We considered the idea of having a global parameter to store this fee. However, there would have been an issue with handling different credit card types that have different types of fees, so we decided to add this field to the Loan record. When fees change per Loan Type, a PowerOn specfile can be written to update this field for all Loans that may be affected. The credit union also has the option of specifying this fee at a new batch prompt that we are adding to the Statement Generation batch program.
`)
loanRecordFields.set("ovlcyclecount", ` 
\n### OVL Trn Billing Cycle Count 1 - OVL Trn Billing Cycle Count 3
\nSymitar Quest stores the count in these fields of over-the-limit transactions that occurred during each of the last three billing cycles.
\nField Number         **332:1 - 332:3**
\nMnemonic             **OVLCYCLECOUNT:1 - OVLCYCLECOUNT:3**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **31164**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nWhen posting the over-limit transaction, the posting program updates OVL Trn Billing Cycle 1 field based on the current count of over-limit transactions which occurred for the billing period. Each time you run Statement Cutoff Processing, the previous value in OVL Trn Billing Cycle Count 1 field rolls down to the next bucket and so on.
\n***Important:***  OVL counts should only be for member-initiated transactions. Insurance Posting and Fee Posting are initiated by the credit union and should not penalize a member even if it takes them over the limit. This means that transactions that are not initiated by the member, such as when the credit union runs Insurance Posting or Fee Posting, the OVL Trn Billing Count 1 field is not updated.
`)
loanRecordFields.set("userchar1 - userchar4", ` 
\n### User Char 01 - User Char 04
\nThese four custom fields can store any credit union-defined character data.
\nField Number         **219 - 222**
\nMnemonic             **USERCHAR1 - USERCHAR4**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01519-01522**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nEach of these fields only appears in Symitar Quest once you define the field name in the Loan User Field Names parameters in the Parameter Manager.
`)
loanRecordFields.set("useramount1", ` 
\n## USERAMOUNT1
\n### User Amount 01
\nThese two custom fields can store any credit union-defined cash amount.
\nField Number         **223**
\nMnemonic             **USERAMOUNT1**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01523**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEach of these fields only appears in Symitar Quest once you define the field name in the Loan User Field Names parameters in the Parameter Manager.
`)
loanRecordFields.set("useramount2", ` 
\n## USERAMOUNT2
\n### User Amount 01 - User Amount 02
\nThese two custom fields can store any credit union-defined cash amount.
\nField Number         **224**
\nMnemonic             **USERAMOUNT2**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01524**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEach of these fields only appears in Symitar Quest once you define the field name in the Loan User Field Names parameters in the Parameter Manager.
`)
loanRecordFields.set("userdate1", ` 
\n## USERDATE1
\n### User Date 01 - User Date 02
\nThese two custom fields can store any credit union-defined date.
\nField Number         **225**
\nMnemonic             **USERDATE1**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01525**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEach of these fields only appears in Symitar Quest once you define the field name in the Loan User Field Names parameters in the Parameter Manager.
`)
loanRecordFields.set("userdate2", ` 
\n## USERDATE1
\n### User Date 01 - User Date 02
\nThese two custom fields can store any credit union-defined date.
\nField Number         **226**
\nMnemonic             **USERDATE2**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01526**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEach of these fields only appears in Symitar Quest once you define the field name in the Loan User Field Names parameters in the Parameter Manager.
`)
loanRecordFields.set("positivepaydraft", ` 
\n### Positive Pay Draft
\nThis field stores a code that allows the user to add the loan to the Positive Pay Draft module using PowerOn specfiles or SymConnect.
\nField Number         **438**
\nMnemonic             **POSITIVEPAYDRAFT**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **31270**
\nDefault Control      **No**
\nDefault Value **0**
`)
loanRecordFields.set("interestdue", ` 
\n### Interest Due
\nThis field contains the computed amount of interest due on the loan at the time of the inquiry.
\nField Number         **801**
\nMnemonic             **INTERESTDUE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01581**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  For SymConnect, audio response, home banking, and kiosk applications only, Symitar Quest calculates this amount using the effective date of the on host program instead of the current business date. The effective date is the earlier of the current business date or the actual operating system date.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("latechargedue", ` 
\n### Late Charge Due
\nThis field contains the computed amount of late charges due on the loan at the time of the inquiry.
\nField Number         **802**
\nMnemonic             **LATECHARGEDUE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01582**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar Quest performs this complex calculation using the Late Charge Types parameters.
\n***Important:***  For SymConnect, audio response, home banking, and kiosk applications only, Symitar Quest calculates this amount using the effective date of the on host program instead of the current business date. The effective date is the earlier of the current business date or the actual operating system date.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("paymentdue", ` 
\n### Payment Due
\nThis field contains the computed payment due on the loan (including past due amounts) at the time of the inquiry.
\nField Number         **803**
\nMnemonic             **PAYMENTDUE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01583**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("pastdueamount", ` 
\n### Past Due Amount
\nThis field contains the computed amount past due on the loan at the time of the inquiry.
\nField Number         **804**
\nMnemonic             **PASTDUEAMOUNT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01584**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("payoffamount", ` 
\n### Payoff Amount
\nThis field contains the computed current loan payoff amount at the time of the inquiry for any type of loan, including credit card loans.
\nField Number         **805**
\nMnemonic             **PAYOFFAMOUNT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01585**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  For SymConnect, audio response, home banking, and kiosk applications only, Symitar Quest calculates this amount using the effective date of the on host program instead of the current business date. The effective date is the earlier of the current business date or the actual operating system date.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("salestaxdue", ` 
\n### Sales Tax Due
\nThis field contains the computed current lease loan sales tax amount due at the time of the inquiry.
\nField Number         **810**
\nMnemonic             **SALESTAXDUE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01590**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nFor more information regarding this optional lease loan support, see Leasing Support.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("salestaxpayoff", ` 
\n### Sales Tax Payoff
\nThis field contains the computed current lease loan sales tax payoff amount at the time of the inquiry.
\nField Number         **811**
\nMnemonic             **SALESTAXPAYOFF**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01591**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf a lease loan is paid off before the Balloon Date field date, the lessee is still responsible for remitting the unpaid sales tax to the state. This unpaid sales tax amount is found in this calculated field.
\n***Important:***  For SymConnect, audio response, home banking, and kiosk applications only, Symitar Quest calculates this amount using the effective date of the on host program instead of the current business date. The effective date is the earlier of the current business date or the actual operating system date.
\n
\nFor more information regarding this optional lease loan support, see Leasing Support.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("effectivebalance", ` 
\n### Effective Balance
\nThis field contains the computed sum of the principal balance plus the value in the Billed Fee Unpaid field, for non-daily interest loans, or total balance (the sum of principal, interest, late charges and other fees), for credit card loan.
\nField Number         **812**
\nMnemonic             **EFFECTIVEBALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01592**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nYou can use this field when writing PowerOn specfiles, but Symitar Quest does not display it as part of the Loan record.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("lrlnbalance", ` 
\n### LR Loan Balance
\nThis field contains the computed latest balance from when the loan was refinanced.
\nField Number         **813**
\nMnemonic             **LRLNBALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01593**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field has the same functionality as the Original Balance field for Loan Refinance (LR) transactions. The Original Balance field value is the balance when the loan was first funded and this field value is the same unless the loan has been refinanced using LR (or TRANPERFORM and Miscellaneous Posting versions).
\n
\nThis field is viewable and is accessible to PowerOn specfiles.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("lrlndate", ` 
\n### LR Loan Date
\nThis field contains the computed latest date the loan was refinanced.
\nField Number         **814**
\nMnemonic             **LRLNDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **01594**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe Original Date field value is the date when the loan was first funded and this field value is the same unless the loan has been refinanced using LR (or TRANPERFORM and Miscellaneous Posting versions).
\n
\nThis field is viewable and is accessible to PowerOn specfiles.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("payeeline", ` 
\n### Payee Line 1 - Payee Line 6
\nThese fields each contain mailing information derived from other name and address fields in this loan.
\nField Number         **815:1 - 815:6**
\nMnemonic             **PAYEELINE:1 - PAYEELINE:6**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **01595**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest derives a member's mailing address using various information from the Name records at the loan level, including the name fields (First Name, Last Name, Middle Name), address fields (Street, City, Extra Address, etc.), and other pertinent fields (Mail Override, etc.). To allow the use of the same address, Symitar Quest places this information in these calculated fields. You can use this address to mail statements, notices, and other communications.
\n
\n           Payee Line 1First Name, Middle Name, Last Name (primary or joint)
\n           Payee Line 2First Name, Middle Name, Last Name (joint)
\n           Payee Line 3Extra Address
\n           Payee Line 4Street
\n           Payee Line 5City, State, Zip Code
\n           Payee Line 6Country
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("alternateaddress", ` 
\n### Alternate Address 1 - Alternate Address 6
\nThese fields each contain alternate mailing information derived from other name and address fields in this loan.
\nField Number         **816:1 - 816:6**
\nMnemonic             **ALTERNATEADDRESS:1 - ALTERNATEADDRESS:6**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **01596**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest derives a member's alternate mailing address using various information from the Name records at the loan level, including the name fields (First Name, Last Name, Middle Name), address fields (Street, City, Extra Address, etc.), and other pertinent fields (Mail Override, etc.). To allow the use of the same address, Symitar Quest places this information in these calculated fields. You can use this address to mail statements, notices, and other communications.
\n
\n           Alternate Address 1First Name, Middle Name, Last Name (primary name or joint name)
\n           Alternate Address 2First Name, Middle Name, Last Name (joint name or Extra Address)
\n           Alternate Address 3Extra Address or Street
\n           Alternate Address 4Street or City, State, Zip Code
\n           Alternate Address 5City, State, Zip Code or Country
\n           Alternate Address 6Country or blank
\nThe joint name will not appear in the alternate address information if the Name Type field value is (2) Mailing Only or (3) Alternate mailing or the Mail Override field value is (1) Overrides primary mailing address.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("payeephone", ` 
\n### Payee Phone 1 - Payee Phone 3
\nThese fields each contain a member's phone number information derived from other name fields in this loan.
\nField Number         **817:1 - 817:3**
\nMnemonic             **PAYEEPHONE:1 - PAYEEPHONE:3**
\nData Type            **16 Characters**
\nSource               **System-calculated**
\nHelp File            **01597**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest derives a member's phone number using information from the Name record at the loan level. To allow the use of the same phone number, Symitar Quest places this information in these calculated fields. These fields are associated with the Payee Line 1 - Payee Line 6 calculated fields in the Loan record. You can cause this phone number to appear on a member's checks or statements.
\n
\n           Payee Phone 1Home Phone
\n           Payee Phone 2Work Phone
\n           Payee Phone 3Mobile Phone
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("alternatephone", ` 
\n### Alternate Phone 1 - Alternate Phone 3
\nThese fields each contain a member's alternate phone number information derived from other name fields in this loan.
\nField Number         **818:1 - 818:3**
\nMnemonic             **ALTERNATEPHONE:1 - ALTERNATEPHONE:3**
\nData Type            **16 Characters**
\nSource               **System-calculated**
\nHelp File            **01598**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar Quest derives a member's phone number using information from the joint Name record at the loan level. To allow the use of the same phone number, Symitar Quest places this information in these calculated fields. These fields are associated with the Alternate Address 1 - Alternate Address 6 calculated fields in the Loan record. You can cause this phone number to appear on a member's checks or statements.
\n
\n           Alternate Phone 1Home Phone
\n           Alternate Phone 2Work Phone
\n           Alternate Phone 3Mobile Phone
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("alternatenametype", ` 
\n### Alternate Name Record Type
\nThis field contains the computed alternate name type derived from fields in other Name records.
\nField Number         **819**
\nMnemonic             **ALTERNATENAMETYPE**
\nData Type            **Code to 53**
\nSource               **System-calculated**
\nHelp File            **00094**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest retrieves the information with which it populates this field in the following way:
\n   - Symitar Quest looks for a Loan-level Name record with a Name Type field value of (03) Alternate mailing and the Name Type field value of the first Name record found is returned in this field.
\n   - If Symitar Quest does not find a Name record with aName Type with the appropriate field value, it looks for a Loan-level Name record with a Mail Override field value of (1) Overrides primary mailing address and the Name Type field value of the first Name record found is returned in this field.
\n   - If Symitar Quest does not find a Name record with a Name Type with the desired Name Type or Mail Override setting, it looks for a Name record with these specifications at the Account level in the same way it searched for a Name record at the Loan level (steps 1 and 2).
\n   - If no such Name records exist at the Loan or the Account level, the Name Type field value of the primary Name record is returned in this field (this value will always be 00 Primary).
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("alternatenamelocator", ` 
\n### Alternate Name Record Locator
\nThis field contains the locator number of the first Loan-level Name record that it finds that has a Name Type field value of (3) Alternate mailing or a Mail Override field value of (1) Overrides primary mailing address.
\nField Number         **820**
\nMnemonic             **ALTERNATENAMELOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **00095**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest searches for the Mail Override field value only if it cannot find the appropriate Name Type field value. If this field does not find a Name record with either of these settings at the Loan level, it searches for one at the Account level.
\n
\nIf Symitar Quest does not find a Name record with a Name Type field value of (3) Alternate mailing or a Mail Override field value of (1) Overrides primary mailing address at the Loan or Account level, it returns the Name Type field value of the primary Name record (this value will always be 00 Primary).
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("payeenametype", ` 
\n### Payee Name Record Type
\nThis field contains the Name Type field value of the first Loan-level Name record that it finds that has a Mail Override field value of (1) Overrides primary mailing address.
\nField Number         **821**
\nMnemonic             **PAYEENAMETYPE**
\nData Type            **Code to 53**
\nSource               **System-calculated**
\nHelp File            **00096**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf Symitar Quest does not find a Name record with this setting at the Loan level, it searches for one at the Account level.
\n
\nIf a Name record with a Mail Override field value of (1) Overrides primary mailing address is not found at the Loan or Account level, it returns the Name Type field value of the primary Name record (this value will always be 00 Primary).
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("payeenamelocator", ` 
\n### Payee Name Record Locator
\nThis field contains the locator number of the first Loan-level Name record that it finds that has a Mail Override field value of (1) Overrides primary mailing address.
\nField Number         **822**
\nMnemonic             **PAYEENAMELOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **00097**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf Symitar Quest does not find a Name record with this setting at the Loan level, it searches for one at the Account level.
\n
\nIf a Name record with a Mail Override field value of (1) Overrides primary mailing address is not found at the Loan or Account level, Symitar Quest returns the Name Type field value of the primary Name record (this value will always be 00 Primary).
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("seg0paymentdue", ` 
\n### Seg 0 Payment Due
\nThis field contains the computed payment due on Segment 0 (including past due amounts) at the time of the inquiry for non-SymChoice Loans.
\nField Number         **830**
\nMnemonic             **SEG0PAYMENTDUE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31507**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nFor SymChoice Loans, Symitar Quest calculates this field as the Payment Due field value minus the total for the Segment records' Payment field values.
\n
\nFor non-SymChoice Loans, this field contains the same amount as the Payment Due field value.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("seg0payoffamt", ` 
\n### Seg 0 Payoff Amt
\nThis field contains the computed payoff amount for Segment 0 (including past due amounts) at the time of the inquiry for non-SymChoice Loans.
\nField Number         **831**
\nMnemonic             **SEG0PAYOFFAMT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31508**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nFor SymChoice Loans, Symitar Quest calculates this field as the Payoff Amount field value minus the total for the Segment records' Payoff Amount field values.
\n
\nFor non-SymChoice Loans, this field contains the same amount as the Payoff Amount field value.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("thresholdpmt", ` 
\n### Threshold Payment
\nThis field contains the computed threshold payment amount required to advance the loan due date.
\nField Number         **835**
\nMnemonic             **THRESHOLDPMT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31134**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field amount only applies to loans with an Interest Type field value of (1) Monthly 360 day or (8) Scheduled/364 that use a payment application method that allows a threshold payment, and loans using the SBA Required Payment Application Method, regardless of the interest type used.
\n
\nSBA guidelines require a servicer to accept and advance the loan due date if a payment amount is received that fulfills the standard payment amount due. SBA does not consider late charges as part of the standard loan payment amount and is not required to be paid to advance the loan due date. Therefore, all payment posting programs will automatically postpone uncollected late charges if a standard payment amount is received that does not include the late charge portion.
\n
\nWhile this field is not shown by default, the field can be added to a custom screen definition.
\n
\nThis field does not appear in the Loan record display; however, the field and system-calculated amount displays in the Teller Transaction window when a Loan Payment (LP) transaction is performed on loans that allow a threshold payment.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("unadjapaymentdue", ` 
\n### Unadjusted Payment Due
\nThis field contains the computed Payment Due field value excluding the Unapplied Partial Payment field balance.
\nField Number         **836**
\nMnemonic             **UNADJAPAYMENTDUE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31512**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is typically used in specfiles to identify Unapplied Partial Payment balances that exceed the loan's Payment Due amount.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("unadjthresholdpmt", ` 
\n### Unadjusted Threshold Pmt
\nThis field contains the computed Threshold Payment field amount excluding the Unapplied Partial Payment field balance in the Loan record.
\nField Number         **837**
\nMnemonic             **UNADJTHRESHOLDPMT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31513**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is typically used in specfiles to identify Unapplied Partial Payment balances that exceed the loan's Threshold Payment amount.
\n
\nYou cannot access this field for file maintenance.
`)
loanRecordFields.set("nextstmtdate", ` 
\n### Next Statement Date
\nThis field contains the next expected statement date for loans with a value of 10-8999 in the Loan record Interest Type field.
\nField Number         **852**
\nMnemonic             **NEXTSTMTDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **31528**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nSymitar Quest calculates the next statement date based on the values of the Cutoff Default Option and Cutoff Default Days parameters in the Interest Type parameters.
\n
\nYou cannot access this field for file maintenance.
`)
