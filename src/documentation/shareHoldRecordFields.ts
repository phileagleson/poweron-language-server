export const holdRecordFields = new Map<string, string>()
holdRecordFields.set("type", ` 
\n### Hold Type
\nThis field identifies the purpose of the Hold record.
\nField Number         **001**
\nMnemonic             **TYPE**
\nData Type            **Code to 23**
\nSource               **User-entered or System-calculated**
\nHelp File            **00501**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n#### Data Type Descriptions
\n##### (0) General Purpose
\n   Select this option to hold any amount for any purpose defined by the credit union.##### (1) Check Hold
\n   Select this option to hold the entire amount of a check or a partial amount until the check clears. The system creates Hold records with this hold type during teller transactions, based on the check hold parameters in the Regulation CC Parameters.
\n   
\n       - When a teller initiates a hold and indicates that it is a non-local check (by selecting (2) Nonlocal # Day Hold at the Check Hold prompt), The system enters the current banking day in the Reference 1 field. The system also places an N in the Reference 1 field following the date (position 10).
\n##### (2) Certified Draft
\n   Select this option to hold the entire amount of a certified draft or a partial amount until the certified draft clears.
\n   
\n       - The Reference 1 field must contain a draft number or range of draft numbers.
\n##### (3) Stop Draft
\n   Select this option to stop payment on a draft (check). Use this hold type when you have received written authorization from the member. You can stop payment on a single draft or on a range of drafts.
\n   
\n       - The Reference 1 field must contain a draft number or range of draft numbers.
\n   
\n       - If you have not received written authorization from the member, set the Hold Type field to (7) Stop Draft verbal.
\n##### (4) Signature Auth
\n   Select this option to reserve funds for a preauthorized credit card purchase or for ATM point of sale transactions. The system automatically creates Hold records with this hold type and releases funds automatically. The screen displays SigAuth to distinguish between signature-based and PIN-based holds.##### (5) Pledge Hold
\n   Select this option to hold funds pledged against a loan. When you create a Loan Pledge record and specify a share ID, the system creates a Share Hold record with the Hold Type field set to (5) Pledge hold under the specified Share record. The system cross-references the Share Hold record to the original Loan Pledge record. You cannot delete this type of Hold record until the loan is paid in full.##### (6) Stop ACH
\n   Select this option to prevent the system from posting an automated clearing house transaction. Use this hold type when you have received written authorization from the member.
\n   
\n       - You can specify whether this hold applies to debits, credits, or both by making the appropriate selection at the Reference 2 field.
\n   
\n       - If you have not received written authorization from the member, set the Hold Type field to (8) Stop ACH verbal.
\n##### (7) Stop Draft Verbal
\n   Select this option to stop payment on a draft. Use this hold type when you have received only a verbal authorization from the member.
\n   
\n       - The Reference 1 field must contain a draft number or range of draft numbers.
\n   
\n       - Once you receive written authorization from the member, you can change the Hold Type field to (3) Stop Draft.
\n##### (8) Stop ACH Verbal
\n   Select this option to prevent the system from posting an automated clearing house transaction. Use this Hold Type when you have received only a verbal authorization from the member.   You can specify whether this hold applies to debits, credits, or both by making the appropriate selection at the Reference 2 field.
\n   
\n       - Once you receive written authorization from the member, you can change the Hold Type field to (6) Stop ACH.
\n##### (9) Revoke ACH
\n   Select this option to prevent the system from posting an automated clearing house transaction for as long as the Hold record remains in the account. To stop all ACH transactions, you must set the Hold Type field to (9) Revoke ACH and set the following fields as shown:
\n       - Leave the Reference 1 field blank.
\n       - Set the Payee Name field to ALL.
\n       - Set the Hold Amount field to 0.00.
\n   
\n       - You can specify whether this hold applies to debits, credits, or both by making the appropriate selection at the Reference 2 field.
\n   
\n       - Use this code for single or recurring TEL and WEB entries.
\n##### (10) Merchant Verification
\n   Select this option to hold funds when a merchant calls to verify that funds are available to cover a member's check.##### (11) Merchant Verification - Information
\n   Select this option to indicate that a merchant called to verify availability of funds. This hold type is informational only and does not cause the system to hold funds.##### (12) Uncollected Fee
\n   Select this option to place a hold when the system cannot collect a fee because the funds are not available. Batch posting programs place this hold type if you set the Uncollected Fee Option parameter in the Miscellaneous Parameters to Take Only Full Fees When Balance Covers the Full Fee or Take Partial Fees Whenever Any Balance Exists.
\n   
\n       - The Daily Posting batch program collects the fee when funds are available and expires the Hold record. If the hold is for a loan, the system posts the fee as a loan advance.
\n   
\n       - Tip: The system does not create uncollected fee holds for loans automatically. You must create them manually, either in the Account Manager or with a specfile.
\n##### (13) Loan Draft
\n   Select this option to place a hold on a preapproved loan draft for a zero-balance preapproved loan. This hold type lets you track outstanding preapproved loan drafts.
\n   
\n       - A loan draft hold is intended only for preapproved loan drafts to loans with the Loan Code field set to (0) Closed End, (1) Open End, or (6) LOC Combination. Type 00 in the Hold Amount field, and leave the Expiration Date field blank. The Draft Posting batch program uses the Credit Limit field in the Loan record to determine the maximum dollar amount permitted. When the preapproved loan draft posts to the loan during the Draft Posting batch program, the system fills in the actual amount of the draft in the Hold Amount field, and enters the draft posting date in the Expiration Date field.
\n##### (14) Bill Payment
\n   Select this option to place a hold on a member draft used for bill payment until the draft posts to the account or until the hold expires.##### (15) Bill Payment - Information
\n   Select this option to indicate that a member draft is being used for bill payment. This hold type is informational only and does not cause the system to hold funds.##### (16) Unauthorized ACH Stop
\n   Select this option to create Hold records for unauthorized ACH transactions. The ACH Posting program checks for this type of hold, and checks to make sure it exists (and that it matches the ACH transaction), stops the ACH transaction, and prints it on the exception report.
\n   
\n       - You can specify whether this hold applies to debits, credits, or both by making the appropriate selection at the Reference 2 field.
\n   
\n       - Tip: Before you create a Hold record of this type, the member should have provided all the required proofs that the ACH transaction is unauthorized. See your ACH manual for requirement details.
\n##### (17) ACH Origination
\n   Select this option to place a hold on a Share or Loan record that is being used for ACH Origination.##### (18) ACH DNE
\n   Select this option to place a hold on a Share or Loan record when a Death Notification Entry (DNE) is received. This will stop all Treasury-disbursed payments.
\n       - Important: An ACH DNE hold should never be created manually unless you receive an official DNE from a government agency through the normal ACH process and your ACH Posting batch program was not able to create the hold due to an exception, or your ACH Posting batch job was not set up to process DNE holds automatically. The ACH DNE hold has been specifically designed to meet the regulations of the Treasury Department; if you receive a death notification from any other source (other than an ACH DNE), you should not create an ACH DNE hold.
\n##### (19) PIN Auth
\n   Select this option to place a hold on PIN-based transactions. The screen displays PINAuth to distinguish between signature-based and PIN-based holds.##### (20) Business Block ACH Debit
\n   Select this option to prevent the system from posting ACH debits for member business shares. Specify which debits are blocked with Standard Entry Class (SEC) codes at the Reference 3 field.##### (21) Wire Hold
\n   Select this option to place the entire amount of a wire transfer on hold until the outgoing wire is posted.##### (23) Faster Payments
\n   Do not select option (23) Faster Payments, which is used for JHA PayCenter Zelle® payments. The system automatically creates a Hold record with this hold type when a Zelle payment is made.
\nYou can release all hold types except (5) Pledge Hold and (9) Revoke ACH by setting the Expiration Date field to the current system date. Although you can also delete the Hold record to release the hold, setting the Expiration Date field to the system date provides a better audit trail. The system sets the Expiration Date field for some hold types automatically, based on information in the Regulation CC Parameters and the Miscellaneous Parameters. For more information about releasing a hold, review information in the Expiration Date field section of this document.
\n***Important:***  If you change the Hold Type field from (0) General Purpose to any other type of hold (except for (6) Stop ACH, (7) Stop Draft Verbal, (9) Revoke ACH, or (16) Unauthorized ACH Stop), you must enter (or re-enter) the check number in the Reference 1 field, including any leading zeros. For hold types of (2) Certified Draft, (3) Stop Draft, or (7) Stop Draft Verbal, to specify a range of check numbers you must also enter the ending check number in the Reference 2 field, including any leading zeros. If you do not enter the check numbers with their leading zeros, the system does not recognize them as check numbers after you change the hold type.
\n
\nIf you want to change the hold type from (0) General Purpose to any other type of hold, we recommend that you delete the original Hold record and create a new Hold record manually with the new hold type.
`)
holdRecordFields.set("achrecurringstop", ` 
\n### ACH Recurring Stop
\nThis field indicates whether the Hold record is used to stop multiple ACH items.
\nField Number         **018**
\nMnemonic             **ACHRECURRINGSTOP**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00518**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nYou can set this field when creating or editing an ACH Hold record Hold Type field and setting it to (6) Stop ACH or (8) Stop ACH verbal).
\n#### Data Type Descriptions
\n##### (0) Single Stop (default)
\n   The hold stops the first matching item received and is expired by the ACH Posting batch program if the Expire Stop Payments prompt is set to Yes after a matching transaction is received.##### (1) Recurring Stop
\n   The hold stops all matching items received until the date in the Hold record Expiration Date field is reached. (If no expiration date is set, the hold remains in effect indefinitely.)
\nAlthough designed for use when the Stop Hold Type field is set to ACH or ACH Verbal, this field is visible in all Hold records.
`)
holdRecordFields.set("effectivedate", ` 
\n### Effective Date
\nthis field stores the date the hold should take effect or the date the hold was created for hold types 1–12 and 14–21, and for hold type (13) Loan Draft, it stores the date a preapproved loan draft form was issued to the member.
\nField Number         **002**
\nMnemonic             **EFFECTIVEDATE**
\nData Type            **Date**
\nSource               **User-entered or System-calculated**
\nHelp File            **00502**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe default for all hold types is the system date.
`)
holdRecordFields.set("expirationdate", ` 
\n### Expiration Date
\nThis field stores the expiration date of the hold.
\nField Number         **003**
\nMnemonic             **EXPIRATIONDATE**
\nData Type            **Date**
\nSource               **User-entered or System-calculated**
\nHelp File            **00503**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf the system matches a preauthorization hold, it does not change the Expiration Date and Expiration Time fields, but instead sets the Match Date and Match Time fields.
\n
\nEnter the date when the hold should be released. The system sets the expiration date automatically for some hold types.
\n
\nThe ACH Posting batch program can optionally expire Share Hold records with the Hold Type field set to (3) Stop Draft, (6) Stop ACH, (7) Stop Draft verbal, or (8) Stop ACH verbal. Select Yes at the Expire Stop Payments prompt to cause ACH Posting to set the Expiration Date field when an ACH payment is received to the current system date.
\n
\nIf hold types have been expired by the RB.AUTHHOLDS.EXPIRE.FM specfile, then the Expiration Date field is changed to the system date that was recorded from the specfile output. This change can be reversed at the Undo a Posting from FM Posting Journal? prompt by selecting Yes while generating the report in Miscellaneous Processing. The Expiration Date reverts back to the original system time.
\n
\nFor more information about setting the parameters that determine expiration dates, see the following topics: MemberConnect Parameters, Miscellaneous Parameters, and Regulation CC Parameters.
`)
holdRecordFields.set("expirationtime", ` 
\n### Expiration Time
\nThis field stores the time when a hold should be released.
\nField Number         **008**
\nMnemonic             **EXPIRATIONTIME**
\nData Type            **Code to 2359**
\nSource               **User-entered or System-calculated**
\nHelp File            **00508**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system uses this field when placing point-of-sale signature authorization holds (the Hold Type field is set to 4). This field is not used when the Hold Type is set to (13) Loan Draft, (14) Bill payment, (15) Bill payment - information, or (18) ACH DNE.
\n
\nYour online network software can set the expiration time for a preauthorized hold, but it cannot set the expiration date for a deposit hold.
\n
\nIf the system matches a preauthorization hold, it does not change the Expiration Date and Expiration Time fields, but instead sets the Match Date and Match Time fields.
\n
\nIf hold types have been expired by the RB.AUTHHOLDS.EXPIRE.FM specfile, then the Expiration Time field is changed to the system date that was recorded from the specfile output. This change can be reversed at the Undo a Posting from FM Posting Journal? prompt by selecting Yes while generating the report in Miscellaneous Processing. The Expiration Time reverts back to the original system time.
`)
holdRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date when you create, change or save the Hold record.
\nField Number         **017**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00517**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system may update this field because the record was saved, even though there may not be any actual changes in the record. However, the system does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
holdRecordFields.set("holdcreationdate", ` 
\n### Hold Creation Date
\nThis field stores the AIX date (mm/dd/yyyy) that you created the hold record.
\nField Number         **020**
\nMnemonic             **HOLDCREATIONDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00520**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf you authorize a hold while the system is in memo post mode, the system populates this field with the date from the memo post mode record.
`)
holdRecordFields.set("holdcreationtime", ` 
\n### Hold Creation Time
\nThis field stores the AIX time (hh:mm:ss) that you created the hold record.
\nField Number         **021**
\nMnemonic             **HOLDCREATIONTIME**
\nData Type            **8 Characters**
\nSource               **System-entered**
\nHelp File            **00521**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf you authorize a hold while the system is in memo post mode, the system populates the Hold Creation Time field with the time from the memo post mode record.
`)
holdRecordFields.set("matchdate", ` 
\n### Match Date
\nThis field stores the date of an authorization hold.
\nField Number         **014**
\nMnemonic             **MATCHDATE**
\nData Type            **Date**
\nSource               **User-entered or System-calculated**
\nHelp File            **00514**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system updates this field when an authorization hold matches, allowing the database to retain the original expiration date and time. If there is any date in this field, the system considers the hold expired.
`)
holdRecordFields.set("matchtime", ` 
\n### Match Time
\nThis field stores the time of an authorization hold.
\nField Number         **015**
\nMnemonic             **MATCHTIME**
\nData Type            **Code to 2359**
\nSource               **User-entered or System-calculated**
\nHelp File            **00515**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system updates this field when an authorization hold matches, allowing the database to retain the original expiration date and time.
`)
holdRecordFields.set("transactiontype", ` 
\n### Transaction Type
\nThis field identifies the transaction type for ATM and PIN authorization transactions for preauthorized Loan holds only.
\nField Number         **019**
\nMnemonic             **TRANSACTIONTYPE**
\nData Type            **Code to 1**
\nSource               **User-entered or System-calculated**
\nHelp File            **00519**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThis field is only used for Loan Hold records, not for Share Hold records.
\nData Type Descriptions:
\n   - (0) Purchase (default)
\n   - (1) Cash Advance
\n
\nThis information is derived from online authorization messages sent by the network, including the Cash Advance MCC List parameter in the Online Main Parameters.
\n
\nYou can perform file maintenance on this field from the Loan Hold record screen when the Hold Type field is set to (4) Signature Auth or (19) PIN Auth.
\n
\nCash advance Hold records created through batch programs do not update this field.
\n
\nThis field can be updated for all loan types; however, the system automatically updates this field to (1) Cash Advance when an online cash advance transaction targets a credit card loan (the Loan Code field is set to 3 and Interest Type field is set to 10–8999).
\n
\nA non-credit card approved authorization transaction (the Hold Type field is set to 4 or 19) sets the value of this field to (0) Purchase.
\n
\nThe field cannot be edited from the record window when the Hold record is not a Loan Hold with the Hold Type field set to (4) Signature Auth or (19) PIN Auth.
`)
holdRecordFields.set("feecode", ` 
\n### Fee Code
\nThis field stores the code that determines the fee placed on the transaction.
\nField Number         **016**
\nMnemonic             **FEECODE**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-calculated**
\nHelp File            **00516**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf the Hold Type field is set to (12) Uncollected Fee, values stored in this field dictate how the Sub Source Code field appears in the Transaction record when the fee eventually posts. The system transfers the stored value to the Transaction record field when the Daily Posting batch program collects an uncollected fee.
\n
\nIf the Hold Type field is set to (12) Uncollected Fee, the value in this field must be within the range of currently defined values for the Sub Source Code field in the Transaction record, when the Source Code in the Transaction record is F. This list appears as a drop-down menu.
\nIf the Hold Type field is set to (4) Signature Auth or (19) PIN Auth, the system sets this field to indicate what types of fees the system is allowed to charge at the time of completion. This depends on the OD Transfer Fee Calc Option option and whether the system would charge an overdraft fee based on the share's available balance at the time of authorization.
\n   - If this field is set to 0, the system allows charging any type of fee (transfer, courtesy pay, or non-sufficient funds) at completion.
\n   - If this field is set to 1, the system does not charge any fee at completion.
\n   - If this field is set to 2, the system allows charging a transfer fee at completion, but does not charge a courtesy pay or non-sufficient funds fee.
\n   - If this field is set to 3, the system allows charging a courtesy pay or non-sufficient funds fee at completion, but does not charge a transfer fee.
\n
\nFor 0100 and 1100 along with 0120 and 1120 messages, this field is only set if the Use Fee Status from Auth parameter in Online Main Parameters is set for the source code of the current message.
\n
\nWhen the system receives a 0220 or 1220 completion message targeting a share, the system searches for a Share Hold record matching the completion message. If it finds a match, the system checks whether your financial institution has activated the Use Fee Status from Auth option for the source code of the current message (ATM, point of sale, signature, or bill payment). If so, the system checks this field to determine what fees it can charge (based on the current available balance).
\n
\nIf the Hold Type field is not set to (4) Signature Auth, (12) Uncollected Fee, or (19) PIN Auth, this field must be set to 0.
\n
\nSee Card Authorization and Posting Overdraft Fees for more information.
`)
holdRecordFields.set("amount", ` 
\n### Hold Amount
\nThis field stores the amount of money held.
\nField Number         **006**
\nMnemonic             **AMOUNT**
\nData Type            **Money**
\nSource               **User-entered or System-calculated**
\nHelp File            **00506**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nDepending on the hold type, you can choose whether to fill in this field.
`)
holdRecordFields.set("ledgerbalance", ` 
\n### Ledger Balance
\nThis field stores the balance that the ATM software uses when it creates a PIN authorization or signature authorization Hold record.
\nField Number         **023**
\nMnemonic             **LEDGERBALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00523**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nWhen the system performs a PIN authorization or a signature authorization hold during memo post mode, the system populates this field with the available balance.
`)
holdRecordFields.set("availablebalance", ` 
\n### Available Balance
\nThis field stores the value calculated by an ATM to authorize a transaction.
\nField Number         **022**
\nMnemonic             **AVAILABLEBALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00522**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe amount the ATM enters in this field represents the balance after a transaction in which the ATM creates a PIN authorization or signature authorization Hold record.
\nThe ATM uses this formula for shares:
\n   - AvailableShare Balance=Share Ledger Balance-Minimum Balance-Holds {Holds=Total Holds-Exclude Holds}
\n   - +OD Transfer {if you set appropriate parameters}+OD Tolerance {if you set appropriate parameters}
\nThe ATM uses this formula for loans:
\n   - AvailableShare Balance=Credit Limit-Loan Balance-Holds {Holds=Total Holds-Exclude Holds}
\n   - -Hold Pledge-Interest Due-Late Charges Due-Fees Due
\n
\nWhen the system performs a PIN authorization or a signature authorization hold during memo post mode, the system populates this field with the available balance.
`)
holdRecordFields.set("reference1", ` 
\n### Reference 1
\nAll the Reference # fields, store reference information that is related to the hold.
\nField Number         **004**
\nMnemonic             **REFERENCE1**
\nData Type            **10 Characters**
\nSource               **User-entered or System-calculated**
\nHelp File            **00504**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can use uppercase or lowercase letters to enter any information related to the hold. The system enters reference information for some hold types automatically.
\n
\nThis field is used only for the following hold types:
\n***Important:***  The use of the Reference # fields varies according to the hold type. Because of this, if you accidentally create a Hold record with the wrong hold type, it is safest to delete the Hold record and create a new Hold record with the correct hold type.
`)
holdRecordFields.set("reference2", ` 
\n### Reference 2
\nAll the Reference # fields, store reference information that is related to the hold.
\nField Number         **005**
\nMnemonic             **REFERENCE2**
\nData Type            **10 Characters**
\nSource               **User-entered or System-calculated**
\nHelp File            **00505**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can use uppercase or lowercase letters to enter any information related to the hold. The system enters reference information for some hold types automatically.
\n
\nThis field is used only for the following hold types:
\n
\nIf the Hold Type field is set to (17) ACH Origination, the system sets the Reference 1 field in the Hold record to the Payee Name field in the Payee record. The Reference 2 field in the Hold record is set to the four-digit Audio ID field in the EFT record and the system date that the hold was created.
`)
holdRecordFields.set("payeename", ` 
\n### Payee Name
\nThe value in this field varies depending on the hold type.
\nField Number         **007**
\nMnemonic             **PAYEENAME**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **00507**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe Payee Name field is not used for the following hold types:
\n   - (0) General purpose
\n   - (1) Check hold
\n   - (2) Certified Draft
\n   - (5) Pledge hold
\n   - (10) Merchant verification
\n   - (11) Merchant verification - information
\n   - (17) ACH Origination
\n   - (20) Business Block ACH Debit
\n   - (21) Wire Hold
`)
holdRecordFields.set("memberbranch", ` 
\n### Member Branch
\nThis field is used by corporate credit unions only and it stores the branch number if available.
\nField Number         **010**
\nMnemonic             **MEMBERBRANCH**
\nData Type            **4 Characters**
\nSource               **User-entered**
\nHelp File            **00510**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field can be blank to indicate that a draft does not have a member branch number, or it can contain a number to indicate the branch that issued the draft.
`)
holdRecordFields.set("stoppaycode", ` 
\n### Stop Reason Code
\nThis field stores the reason given for a stop.
\nField Number         **011**
\nMnemonic             **STOPPAYCODE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **00511**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is applicable only when the Hold Type field is set to (3) Stop Draft or (7) Stop Draft verbal
\nData Type Descriptions:
\n   - (0) Unknown
\n   - (1) Lost
\n   - (2) Stolen
\n   - (3) Destroyed
\n   - (4) Not Endorsed
\n   - (5) Certified
\n   - (6) Disputed
\n   - (7) Returned Merchandise
\n   - (8) Stopped/Canceled Service
\n   - (9–98) Undefined (reserved for future use)
\n   - (99) Other
\n
\nYou can specify values from 0–8 and 99. Values 9-98 are reserved.
`)
holdRecordFields.set("reference3", ` 
\n### Reference 3
\nAll the Reference # fields, store reference information that is related to the hold.
\nField Number         **012**
\nMnemonic             **REFERENCE3**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00512**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is used only for the following hold types:
\n
\nIf the Stop Reason Code field is set to (99) Other, you can use this free-form text field to specify a reason for the stop payment.
\nThe Reference 3 field is not used for the following hold types:
\n   - (0) General purpose
\n   - (1) Check hold
\n   - (2) Certified Draft
\n   - (5) Pledge hold
\n   - (6) Stop ACH
\n   - (8) Stop ACH verbal
\n   - (9) Revoke ACH
\n   - (10) Merchant verification
\n   - (11) Merchant verification - information
\n   - (12) Uncollected fee
\n   - (13) Loan Draft
\n   - (14) Bill payment
\n   - (15) Bill payment - information
\n   - (16) Unauthorized ACH Stop
\n   - (17) ACH Origination
\n   - (21) Wire Hold
`)
holdRecordFields.set("reference4", ` 
\n### Reference 4
\nAll the Reference # fields, store reference information that is related to the hold.
\nField Number         **013**
\nMnemonic             **REFERENCE4**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **00513**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is used for all check and ACH hold types.
\n
\nThis field contains the transaction confirmation number for stop payments in the Share Hold record. The confirmation number is ten digits, followed by the eight-digit calendar date and the four-digit time. The system uses the first eight digits to calculate the confirmation number. The last two digits display the unit number obtained from home banking. The system does not reassign the confirmation number if you perform a reload and recover and can generate the confirmation number even when the system is in memo post mode.
\n
\nFor 0100and 1100 along with 0120 and 1120 messages, this field is only set if the Use Fee Status from Auth parameter in Online Main Parameters is set for the source code of the current message.
\n
\nWhen the system receives a 0100 or 1100 authorization request message targeting a share, it stores the calculated available balance in this field. This field contains the available balance that the system determines for the purpose of calculating fees (without the transaction amount). The system uses the ATM Avail Bal Post Excl List, POS Avail Bal Post Excl List, SIG Avail Bal Post Excl List, or BP Avail Bal Post Excl List parameter in Online Main Parameters to determine which holds to consider in the calculation. If the OD Transfer Fee Calc Option option is set to 0, the available balance does not include available overdraft transfer funds. If the OD Transfer Fee Calc Option option is set to 1 or 2, the available balance does include available overdraft transfer funds. If the system is in memo post mode when it receives the message, it cannot calculate and store the available balance, and sets this field to Memo Mode - Balance Not Available.
\nWhen the system receives a 0120 or 1120 authorization advice message targeting a share, it sets this field as follows:
\n   - If your financial institution has not activated the Waive Fee for Auth Advice option for the source code of the current message (ATM, point of sale, signature, or bill payment), the system stores the calculated available balance in this field. If the system is in memo post mode when it receives the message, it instead sets this field to Memo Mode - Balance Not Available.
\n   - If your financial institution has activated the Waive Fee for Auth Advice option for the source code of the current message and the OD Transfer Fee Calc Option option is set to 0 or 1, the system sets this field to Advice - No Fee.
\n   - If your financial institution has activated the Waive Fee for Auth Advice option for the source code of the current message and the OD Transfer Fee Calc Option option is set to 2, the system sets this field to Advice - Xfr Fee Possible.
\n
\nSee Card Authorization and Posting Overdraft Fees for more information.
`)
holdRecordFields.set("locator", ` 
\n### Locator
\nThis field value in each record is unique for each member account.
\nField Number         **009**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **00509**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nBecause each Locator field value is unique, it can be used as a unique identification of a specific record. The system automatically assigns the Locator field value when the record is created, and you cannot change it. The value is a positive number greater than zero.
\n
\nThe Locator field can be used during PowerOn file maintenance (both demand and batch) to uniquely identify a record. We recommend using a Locator field because a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
holdRecordFields.set("feedescription", ` 
\n### Fee Description
\nThis field stores the description in the Fee Code field.
\nField Number         **800**
\nMnemonic             **FEEDESCRIPTION**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **00580**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
