export const transferRecordFields = new Map<string, string>()
transferRecordFields.set("type", ` 
\n### Transfer Type
\nThis field indicates the type of transfer performed.
\nField Number         **001**
\nMnemonic             **TYPE**
\nData Type            **Code to 9**
\nSource               **User-entered or System-calculated**
\nHelp File            **00901**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n#### Share records
\n##### (0) Overdraw
\n   Select this option if the purpose of the Share Transfer record is to transfer funds from another Share or Loan record in case of an overdraw. The Draft Posting, Credit and Debit Card Posting, ATM Posting, Fee Posting, Insurance Posting, Daily Posting, ACH Posting, and Bill Payment Posting batch programs can automatically transfer funds from another Share, Loan, or External Loan record in case of an overdraw.
\n   
\n       - You must create the overdraw Share Transfer record under the Share record receiving the funds, and you must specify the account and the ID of the Share, Loan, or External Loan record from which funds are to be transferred. If you transfer funds from a loan, the Loan record must have the Loan Code field set to (2) Line of Credit or (3) Credit Card. If you transfer funds from an external loan, the Allow Advances External Loan Parameter must be set to Yes. You cannot transfer funds for overdraw protection from closed-end loans.
\n##### (1) Dividend
\n   Select this option if the purpose of the Share Transfer record is to transfer dividends to another Share or Loan record. The Dividend Posting batch program (and the Daily Posting batch program for certificate and club maturity dividends) can automatically transfer either specified amounts or a percentage of the dividend amount to specified Share or Loan records.
\n   
\n       - You must create the dividend Share Transfer record under the Share record originating the dividend. The Dividend Post Code field in the Share record must be set to (2) Transfer, and you must specify the account to which funds are to be transferred and the ID of the Share or Loan record to which funds are to be transferred.
\n##### (2) Maturity
\n   Select this option if the purpose of this Share Transfer record is to transfer funds to another Share or Loan record at maturity of a club account or a certificate. The Daily Posting batch program can, upon maturity of a certificate or club account, automatically transfer the share balance to another Share or Loan record.
\n   
\n       - You must create the maturity Share Transfer record under the Share record originating the funds, and you must specify the account to which the funds are to be transferred and the ID of the Share or Loan record to which the funds are to be transferred. The Maturity Post Code field in the Share record must be set to (2) Transfer or (4) Transfer and Renew.
\n##### (3) Auto Share Transfer
\n   Select this option if the purpose of this Share Transfer record is to transfer funds automatically to another Share or Loan ((3) Automatic Payment) at specified intervals (see the Transfer Frequency field).
\n       - The Daily Posting batch program performs share-to-share transfers when you type Yes at the Perform Share Transfers prompt.
\n       - Daily Posting performs share-to-loan transfers when you type Yes at the Perform Share Transfers prompt and also type Yes at the Perform Share Transfers to Loans prompt.
\n##### (5) Sweep Funds In
\n   Select this option if the purpose of this Share Transfer record is to transfer funds from another share or loan when the balance is below the minimum balance.##### (6) Sweep Funds Out
\n   Select this option if the purpose of this Share Transfer record is to transfer funds to another share or loan when the balance is above the maximum balance.##### (7) Sweep Funds In/Out
\n   Select this option if the purpose of this Share Transfer record is to transfer funds from another Share record when the balance is below the minimum balance and to another Share or Loan record when the balance is above the maximum balance.
\n   
\n       - See the Share Sweeps document for information about the sweeps options and setup.
\n##### (8) Amortization
\n   Select this option when the Transfer record is for that purpose. If you make this selection, only the following fields are accessible:
\n       - Account
\n       - ID
\n       - Effective Date
\n       - Expiration Date
\n       - Last Transfer Date
\n   
\n       - You must choose this option for the Daily Posting Batch Program to calculate and perform certificate amortization at the Perform Amortization Loan Transfers? prompt.
\n   
\n       - Share-to-loan transfers do not work for delinquent loans or loans that have the Interest Type field set to (1) Monthly 360 day, or from tax-deferred shares or share certificates.
\n   
\n       - Set the Transfer Payment Type field to determine how the share-to-loan transfer works.
\n#### Loan Transfer records
\n##### (3) Automatic Payment
\n   This is the default for this field.
\n       - The Payment Method field in the Loan record must be set to (2) Auto transfer, (7) Scheduled auto transfer, or (8) Scheduled auto transfer after due, and you must create the Loan Transfer record under the Loan record to which the funds are transferred. In the Loan Transfer record, you must specify the account from which the funds are to be transferred, you must set the ID Type field to (0) Share, and you must specify the ID of the share from which the funds are to be transferred.
\n       - You can also use the (3) Automatic Payment transfer type when you create a Loan Transfer record beneath a loan being used for share sweeps (see the Share Sweeps document).
\n##### (8) Amortization
\n   When you select this option, only the following fields are accessible:
\n       - Account
\n       - ID
\n       - Effective Date
\n       - Expiration Date
\n       - Last Transfer Date
\n   
\n       - When you select this option and run the Daily Posting Batch Program, if you answer Yes to the Perform Share Transfers prompt, the following occurs:
\n   
\n       - The system calculates the amount to transfer using the Factor parameter associated with the Effective Date parameter in the Amortization Schedules parameters.
\n   
\n       - The system uses the adjusted original certificate amount and the Factor parameter as the basis for its calculations. Any additional deposits or withdrawals may affect the adjusted original certificate amount.
\n   
\n       - The system does not consider such transfers for Regulation E purposes.
\n##### (9) Off Cycle
\n   Select this option to allow transfers from an indicated share to a loan on a day other than (and including) the due date in the Loan record. These transfers occur regardless of whether the loan is current. You can use this option for Transfer records that have a Loan record or an External Loan record as the parent record.
\n   
\n       - If the transfer amount is $0.00 for an off-cycle loan under an external loan, the due date does not change, but the system pulls the amount from the Payment field in the External Loan record.
\n   
\n       - For standard off-cycle payments that have the Amount or Percent field filled in and the Take Partial Payments? prompt in the Daily Posting batch program is set to Yes, any available funds up to the specified amount are transferred and the Next Transfer Date field advances into the future (no further transfer attempts are made).
\n   
\n       - Or, if the Take Partial Payments? prompt in the Daily Posting batch program is set to No, the system attempts to transfer the value in the Amount or Percent field daily until satisfied, and then advances the date in the Next Transfer Date field.
\n   
\n       - In either scenario, no further transfer attempts are made if the value in the Cutoff Days after Transfer Date prompt is reached.
\n   
\n       - If the Take Partial Payments? prompt is set to No, the system creates an exception for the transaction until the share contains the funds to make a full payment.
\n   
\n       - All off-cycle transfers occur on the date in the Transfer record Next Transfer Date field, regardless of the due date in the Loan record.
\n   
\n       - If the Amount field in an off-cycle Transfer record is zero, the due date in the Loan record and the Next Transfer Date field in the Transfer record do not advance unless the standard payment is collected. If Take Partial Payments? prompt in the Daily Posting batch program is set to Yes, the system pulls funds until the payment is satisfied. This means that the order in which the transfers are set should be carefully reviewed for each loan.
\n   
\n       - If you select this option, regardless of how you answer the Daily Posting batch program Take Partial Payments? prompt for Transfer records that have the Transfer Payment Types field set to Additional, partial payments are not accepted; the system creates exceptions on the exception report.
\n#### EFT Transfer records
\n##### (4) Distribution
\n   The system sets this field and you cannot revise it in an EFT Transfer record. EFT Transfer records allow the system to transfer EFT payroll funds to Share or Loan records during the Payroll Posting batch program. You can distribute either a percentage of EFT funds or specified amounts to any number of Share or Loan records.
\n   
\n       - You must create the EFT Transfer records under the payroll EFT record originating the funds, and you must specify the account and the ID of the Share or Loan record to which the funds are to be transferred.
\n#### External Loan Transfer records
\n##### (9) Off Cycle
\n   Select this option for external loans.
\n`)
transferRecordFields.set("accountnumber", ` 
\n### Account
\nThis field indicates the account to or from which the funds are transferred.
\nField Number         **002**
\nMnemonic             **ACCOUNTNUMBER**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **00902**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
transferRecordFields.set("idtype", ` 
\n### ID Type
\nThis field indicates which type of account is affected.
\nField Number         **003**
\nMnemonic             **IDTYPE**
\nData Type            **Code to 3**
\nSource               **System-calculated or User-entered**
\nHelp File            **00903**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n#### Data Type Descriptions
\n##### (0) Share
\n   Select this option if the ID field contains a Share record ID.##### (1) Loan
\n   Select this option if the ID field contains a Loan record.##### (2) EFT
\n   Select this option to reference a specific EFT record that you created for a sweep of an external account at another financial institution. The program finds the EFT record that has an Audio ID field that matches the value in the ID field in the Share Transfer record. This option is only available for transfers with the Transfer Type field set to (6) Sweep funds out.##### (3) External Loan
\n   Select this option if the ID field contains an External Loan record ID. If you select anything other than (0) Overdraw or (6) Sweep funds out at the Transfer Type field, the system sets the ID Type field back to (0) Share. Sweep transfers are only allowed to an external loan—not from an external loan. External loan transfers set up to transfer from an external loan will not function.
\n`)
transferRecordFields.set("id", ` 
\n### ID
\nThis field indicates the ID of the account to or from which the funds are transferred.
\nField Number         **004**
\nMnemonic             **ID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **00904**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
transferRecordFields.set("extloanaccount", ` 
\n### External Loan Account Number
\nThis field stores the number of the external loan account.
\nField Number         **025**
\nMnemonic             **EXTLOANACCOUNT**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **00925**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf the ID Type field contained in the Share Transfer record is set to (3) External Loan, you must enter a value in this field. If the ID Type field is set to anything other than (3) External Loan, you cannot enter anything in this field. If you change the ID Type field to (3) External Loan, the system deletes the value in the ID field. If you change the ID Type field from (3) External Loan to a new value, the system deletes the value in the External Loan Account Number field.
\n
\nIf you enter an invalid value in the External Loan Account Number field, the system displays the following error:
\n
\nIf you entered a valid value in the External Loan Account Number field but the Allow Advances parameter in External Loan Processing Parameters is set to No, the system displays the following error:
\n
\nAccount-to-account transfers are allowed. Enter the account from which the funds should be transferred in the Account field.
`)
transferRecordFields.set("percent", ` 
\n### Percent
\nThis field indicates the percentage of the dividend to be transferred.
\nField Number         **006**
\nMnemonic             **PERCENT**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **00906**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou cannot combine both a percent and a fixed amount in a Transfer record. If you enter a value in the Percent field, do not enter a value in the Amount field.
\n
\nIf both the Percent field and the Amount field are set to 0, the transfer will not occur.
`)
transferRecordFields.set("amount", ` 
\n### Amount
\nThis field indicates the amount that should be transferred.
\nField Number         **005**
\nMnemonic             **AMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00905**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou cannot combine both a fixed amount and a percent in a Transfer record. If you enter a value in the Amount field, do not enter a value in the Percent field.
\n
\nIf both the Percent field and the Amount field are set to 0, the transfer will not occur.
`)
transferRecordFields.set("amountoption", ` 
\n### Amount Option
\nThis field is used only for Loan Transfer records to credit card loans that have the Transfer Type field set to (3) Automatic Payment.
\nField Number         **009**
\nMnemonic             **AMOUNTOPTION**
\nData Type            **Code to 5**
\nSource               **System-calculated or User-entered**
\nHelp File            **00909**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field cannot be updated when the Transfer Type field is changed from (3) Automatic Payment to another loan transfer type.
\n
\nThe options for this field allow you to specify the payment amount to transfer to a credit card loan.
\n#### Data Type Descriptions
\n##### (0) Use Amount Specified
\n   Select this option to transfer the amount specified in the Payment field of the Loan record. This is often called the minimum payment option.##### (1) Use Previous Stmt Balance
\n   Select this option to transfer 100% of the previous statement balance to pay the loan in full.##### (2) Use Specified If > Minimum
\n   Select this option to do the following:
\n       - If the Transfer record Amount field is greater than the amount in the Loan record Payment field, transfer the amount specified in the Transfer record.
\n       - If the Transfer record Amount field is less than the amount in the Loan record Payment field, transfer the payment specified in the Loan record.
\n##### (3) Method 2 Once, Revert to Minimum
\n   Select this option to perform the transfer once as specified for option (2) Use specified if > minimum, then begin transferring the amount specified in the Loan record Payment field. Once the transfer has been made, the system resets this field to (0) Use Amount Specified.##### (4) Method 2 Once, Revert to Balance
\n   Select this option to perform the transfer once as specified for option (2) Use Specified If > Minimum, then begin transferring 100% of the previous statement balance to pay the loan in full. Once the transfer has been made, the system resets this field to (1) Use Previous Stmt Balance.##### (5) Grace Amount
\n   Select this option to transfer the previous statement balance, minus any payments made, credit vouchers posted, or credit adjustments which have been posted before the payment due date. The system only attempts the transfer if the due date has not been advanced. This option differs from (1) Use Previous Stmt Balance in the following ways:
\n       - The system attempts to transfer the entire previous statement balance minus the sum of any payments made, any credit vouchers posted, or any credit adjustments posted during the current cycle.
\n       - The system attempts to transfer only the amount necessary to pay the previous statement balance in full; however, if the grace amount is less than the minimum payment due, the system attempts to transfer the minimum payment.
\n       - The system automatically reverts to the minimum payment once the grace period has expired.
\n   
\n       - When the required payment amount is satisfied, the system advances the due date. If a member makes an additional payment using the (5) Grace amount option after the payment is satisfied, the transfer does not occur because the due date has already been advanced past the current month.
\n   
\n       - Because the system cannot judge if previous payments, credits, and adjustments were enough to satisfy the minimum due, it transfers the minimum (the amount in the Payment field of the Loan record) if it is greater than the grace amount.
\n   
\n       - Important: For the first auto-transfer payments, after an in-house credit card conversion, the (5) Grace amount option does not function as normal. Since the prior statement was processed on the third-party vendor system, the calculations cannot be made correctly. The (5) Grace amount option only transfers the minimum payment due. After the first Symitar-generated statement cycle, then the grace amount calculations will function normally.
`)
transferRecordFields.set("minimumbalance", ` 
\n### Minimum Balance
\nThis field is used for share sweeps; it stores the minimum balance the share can reach.
\nField Number         **015**
\nMnemonic             **MINIMUMBALANCE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00915**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf the balance in this share is below the value of this field, the system transfers funds into this share from the specified Share or Loan record so that the balance is raised to this value.
`)
transferRecordFields.set("maximumbalance", ` 
\n### Maximum Balance
\nThis field is used for share sweeps; it stores the maximum balance the share can reach.
\nField Number         **016**
\nMnemonic             **MAXIMUMBALANCE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00916**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nIf the balance in this share is above the value of this field, the system transfers funds out of this share to the specified Share or Loan record so that the balance is lowered to this value.
`)
transferRecordFields.set("sweepminimum", ` 
\n### Sweep Minimum
\nThis field stores the minimum amount to transfer in a share sweep.
\nField Number         **020**
\nMnemonic             **SWEEPMINIMUM**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00920**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system transfers funds for a sweep only if the difference between the share's Balance field and the Minimum Balance or Maximum Balance field in the Share Transfer record is greater than the amount in this field. For example, if you set this field to $5.00 and the Maximum Balance field to $400.00, a sweep out will not occur until the amount in the share's Balance field is $405.00 or more. The default value is 0.00.
`)
transferRecordFields.set("sweepfee", ` 
\n### Sweep Fee
\nThis field is used for MBS sweeps; it stores the amount you want to charge for sweeps.
\nField Number         **021**
\nMnemonic             **SWEEPFEE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00921**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field lets the system charge a fee per sweep, other than through the MBS Account Analysis module. The default is $0.00.
\n
\nThe system charges this fee at the time the sweep occurs in the Daily Posting batch program. Each secondary share in a sweep relationship has its own Transfer record with its own Sweep Fee field; therefore, a different fee amount can be charged based on which secondary share transfer is involved in a sweep.
`)
transferRecordFields.set("sweepfeeidtype", ` 
\n### Sweep Fee ID Type
\nThis field is used for MBS sweeps; it determines whether the sweep will be charged to a share or loan.
\nField Number         **022**
\nMnemonic             **SWEEPFEEIDTYPE**
\nData Type            **Code to 1**
\nSource               **System-calculated or User-entered**
\nHelp File            **00922**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nData Type Descriptions:
\n   - (0) Share (the default)
\n   - (1) Loan
\n
\nThis field is only valid for Transfer records with the Transfer Type field set to (5) Sweep In, (6) Sweep Out, or (7) Sweep In/Out.
`)
transferRecordFields.set("sweepfeeid", ` 
\n### Sweep Fee ID
\nThis field is used for MBS sweeps; it specified the ID of the Share or Loan record that will be charged for the sweep.
\nField Number         **023**
\nMnemonic             **SWEEPFEEID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **00923**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nType * to look up Share or Loan record IDs. The default is null.
\n
\nThis field is only valid for Transfer records with the Transfer Type field set to (5) Sweep In, (6) Sweep Out, or (7) Sweep In/Out.
\n
\nDuring the Daily Posting batch program, the sweep fee is not charged if this field is left blank (the default).
`)
transferRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date when you create, change or save the Transfer record.
\nField Number         **024**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00924**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system may update this field because the record was saved, even though there may not be any actual changes in the record; however, the system does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
transferRecordFields.set("frequency", ` 
\n### Transfer Frequency
\nThis field determines the frequency of the transfer.
\nField Number         **011**
\nMnemonic             **FREQUENCY**
\nData Type            **Code to 14**
\nSource               **System-calculated or User-entered**
\nHelp File            **00911**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is used for automatic Share Transfer records when the Transfer Type field is set to (3) Auto Share Transfer. This field is also used for automatic Loan Transfer records when the Transfer Type field is set to (9) Off Cycle.
\n
\nThis field is not applicable for Loan Transfer records with the Transfer Type field set to (3) Automatic Payment.
\n#### Data Type Descriptions
\n##### (0) Demand
\n   Select this option if the transfer occurs only once on a specific effective date. If you select this option, the Transfer Day 1 and Transfer Day 2 fields are not accessible.##### (1) Annual
\n   Select this option if the automatic transfer should occur annually.##### (2) Semiannual
\n   Select this option if the automatic transfer should occur semiannually (twice per year).##### (3) Quarterly
\n   Select this option if the automatic transfer should occur quarterly.##### (4) Monthly
\n   Select this option if the automatic transfer should occur monthly. This is the default when you change the Transfer Type field to (3) Auto Share Transfer.
\n   
\n       - Select this option for External Loan Transfer records.
\n##### (5)Semimonthly
\n   Select this option if the automatic transfer should occur semimonthly (twice per month).##### (6) Biweekly Skip First
\n   Select this option if the automatic transfer should occur biweekly (every two weeks), skipping the first transfer of the month if there are three scheduled transfers in the month.##### (7) Biweekly Skip Last
\n   Select this option if the automatic transfer should occur biweekly (every two weeks), skipping the last transfer of the month if there are three scheduled transfers in the month.##### (8) Biweekly
\n   Select this option if the automatic transfer should occur biweekly (every two weeks).##### (9) Weekly
\n   Select this option if the automatic transfer should occur weekly.##### (10) Immediate
\n   The system skips this option. It is solely used for consistency in numbering with the Payment Frequency fields in the Loan and Application records. The Transfer Frequency field, however, is not tied to the Payment Frequency field. If any adjustments are made, the Transfer record must be updated manually.##### (11) Weekly Skip First
\n   Select this option if the automatic transfer should occur weekly, skipping the first transfer of the month if there are five scheduled transfers in the month.##### (12) Weekly Skip Last
\n   Select this option if the automatic transfer should occur weekly, skipping the last transfer of the month if there are five scheduled transfers in the month.##### (13) Bimonthly
\n   Select this option if the automatic transfer should occur bimonthly (every two months).***Important:***  Automatic transfers between consumer accounts within the same financial institution are exempt from Reg E if the transfer is between accounts belonging to family members.
`)
transferRecordFields.set("day1", ` 
\n### Transfer Day 1
\nThis fields determines the date on which automatic transfers should occur for annual, semiannual, quarterly, monthly, semimonthly, or bimonthly transfers.
\nField Number         **012**
\nMnemonic             **DAY1**
\nData Type            **Code to 31**
\nSource               **User-entered**
\nHelp File            **00912**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is used only for automatic Share Transfer records (the Transfer Type field is set to 3 or 9). Enter the day of the month (1-31) on which the first automatic transfer should occur for annual, semiannual, quarterly, monthly, semimonthly, or bimonthly transfers (the Transfer Frequency field is set to 1, 2, 3, 4, 5), or 13).
\nWhen creating a Transfer record, if you enter a date in the Transfer Day 1 or Transfer Day 2 field and the Next Transfer Date field is blank, the system advances the Next Transfer Date field in the following way:
\n   - If the date in the Effective Date field has passed or is blank, the system advances the date in the Next Transfer Date field to the next transfer frequency from the transfer day specified. For example, if the system date is 3/6/2006, the Transfer Frequency field is set to (4) Monthly and the Transfer Day 1 field is set to 10, the system sets the Next Transfer Date field to 4/10/2006 (one month after the date in the Transfer Day 1 field).
\n   - If the date in the Effective Date field is in the future, the system advances the Next Transfer Date field to the next transfer frequency from the transfer day specified that occurs in the same month as the effective date. For example, if the system date is 3/6/2006, the Effective Date field is set to 9/1/06, the Transfer Frequency field is set to (4) Monthly, and Transfer Day 1 field is set to 12, the system sets the Next Transfer Date field to 10/12/2006 (one month after the date in the Transfer Day 1 field in the month of the effective date).
\n***Important:***  Automatic transfers between consumer accounts within the same financial institution are exempt from Reg E if the transfer is between accounts belonging to family members.
`)
transferRecordFields.set("day2", ` 
\n### Transfer Day 2
\nThis fields determines the date on which automatic transfers should occur for semi-monthly transfers.
\nField Number         **013**
\nMnemonic             **DAY2**
\nData Type            **Code to 31**
\nSource               **User-entered**
\nHelp File            **00913**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is used only for automatic Share Transfer records (the Transfer Typefield is set to 3 or 9). Enter the day of the month (1-31) on which the second automatic transfer should occur for semimonthly transfers (theTransfer Frequency field is set to 5).
\nWhen creating a Transfer record, if you enter a date in the Transfer Day 1 or Transfer Day 2 field and the Next Transfer Date field is blank, the system advances the Next Transfer Date field in the following way:
\n   - If the date in the Effective Date field has passed or is blank, the system advances the date in the Next Transfer Date field to the next transfer frequency from the transfer day specified. For example, if the system date is 3/6/2006, the Transfer Frequency field is set to (4) Monthly and the Transfer Day 1 field is set to 10, the system sets the Next Transfer Date field to 4/10/2006 (one month after the date in the Transfer Day 1 field).
\n   - If the date in the Effective Date field is in the future, the system advances the Next Transfer Date field to the next transfer frequency from the transfer day specified that occurs in the same month as the effective date. For example, if the system date is 3/6/2006, the Effective Date field is set to 9/1/06, the Transfer Frequency field is set to (4) Monthly, and Transfer Day 1 field is set to 12, the system sets the Next Transfer Date field to 10/12/2006 (one month after the date in the Transfer Day 1 field in the month of the effective date).
\n***Important:***  Automatic transfers between consumer accounts within the same financial institution are exempt from Reg E if the transfer is between accounts belonging to family members.
`)
transferRecordFields.set("nextdate", ` 
\n### Next Transfer Date
\nThis field stores the date of the next automatic share transfer.
\nField Number         **010**
\nMnemonic             **NEXTDATE**
\nData Type            **Date**
\nSource               **User-entered or System-calculated**
\nHelp File            **00910**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis field is used only for automatic Share Transfer records (the Transfer Type field is set to 3) or off-cycle Transfer records (the Transfer Type field is set to 9). Choose one of the following:
\n   - Enter the date of the next automatic share transfer or off-cycle transfer.
\n   - If you are creating a Transfer record, leave this field blank to have the system calculate the date of the next automatic share transfer based on the Transfer Frequency, Transfer Day 1, and Transfer Day 2 fields.
\n   - For weekly transfers, enter the date the first transfer is to take place. The system updates this field automatically after the first transfer.
\nIf you enter a date in the Transfer Day 1 or Transfer Day 2 field, and the Next Transfer Date field is blank, the system advances the Next Transfer Date field in the following way:
\n   - If the date in the Effective Date field has passed or is blank, the system advances the Next Transfer Date field to match the next transfer frequency from the transfer day specified. For example, if the system date is 3/6/2006, the Transfer Frequency field is set to (4) Monthly and Transfer Day 1 field is set to 10, the system sets the Next Transfer Date field to 4/10/2006 (one month after the date in the Transfer Day 1) field.
\n   - If the date in the Effective Date field is in the future, the system advances the Next Transfer Date field to the next transfer frequency from the transfer day specified that occurs in the same month as the effective date. For example, if the system date is 3/6/2006, the Effective Date field is set to 9/1/06, the Transfer Frequency field is set to (4) Monthly, and Transfer Day 1 field is set to 12, the system sets the Next Transfer Date field to 10/12/2006 (one month after the date in the Transfer Day 1 field in the month of the effective date).
\n   - If the Transfer Day 1 and Transfer Day 2 fields are blank and the Next Transfer Date field is set to MM/28/YYYY, MM/29/YYYY, or MM/30/YYYY, and has the Transfer Frequency field set to (4) Monthly, the system advances the date in the Next Transfer Date field to the last day of the following month.
`)
transferRecordFields.set("lastdate", ` 
\n### Last Transfer Date
\nThis field indicated the date on which you want the final transfer to be made.
\nField Number         **018**
\nMnemonic             **LASTDATE**
\nData Type            **Date**
\nSource               **System-calculated or User-entered**
\nHelp File            **00919**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen you run the Daily Posting batch program, if the system performs certificate amortization and completes a transfer, it updates this field with the effective date from the amortization schedule (in the Parameter Manager) associated with the Share record.
\n
\nThis field is not used by the Daily Posting batch program when the Share record Transfer Type field is set to (3) Auto Share Transfer or when the Loan record Transfer Type field is set to (3) Automatic Payment or (9) Off Cycle.
`)
transferRecordFields.set("effectivedate", ` 
\n### Effective Date
\nThis field stores the date on which the transfer record should take effect.
\nField Number         **007**
\nMnemonic             **EFFECTIVEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00907**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nLeave this field blank if you want the system to calculate the date of the next automatic transfer based on the Transfer Frequency, Transfer Day 1, and Transfer Day 2 fields.
\nWhen creating a Transfer record, if you enter a date in the Transfer Day 1 or Transfer Day 2 field and the Next Transfer Date field is blank, the system advances the Next Transfer Date field in the following way:
\n   - If the date in the Effective Date field has passed or is blank, the system advances the value in the Next Transfer Date field to the next transfer frequency from the transfer day specified. For example, if the system date is 3/6/2022, the Transfer Frequency field is set to (4) Monthly and the Transfer Day 1 field is set to 10, the system sets the Next Transfer Date field to 4/10/2022 (one month after date in the Transfer Day 1) field.
\n   - If the date in the Effective Date field is in the future, the system advances the date in the Next Transfer Date field to the next transfer frequency from the transfer day specified that occurs in the next month of the following effective date. For example, if the system date is 3/6/2022, the Effective Date field is set to 9/1/22, the Transfer Frequency field is set to (4) Monthly, and the Transfer Day 1 field is set to 12, the system sets the Next Transfer Date field to 10/12/2022 (one month after value in the Transfer Day 1 field, in the month of the effective date).
`)
transferRecordFields.set("expirationdate", ` 
\n### Expiration Date
\nThis field stores the date on which the Transfer record is no longer valid.
\nField Number         **008**
\nMnemonic             **EXPIRATIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00908**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf you do not enter a date in this field, the Transfer record remains in effect indefinitely. The expiration date goes "to" the date, and not "through" the date. For example, if today's date is used, the Transfer record expires at the start of today and not at the end of the day. An expiration date of May 1, expires at the end of April 30.
`)
transferRecordFields.set("paymenttype", ` 
\n### Transfer Payment Type
\nThis field indicates how a payment should be handled when transferring funds from a share to a loan.
\nField Number         **019**
\nMnemonic             **PAYMENTTYPE**
\nData Type            **Code to 1**
\nSource               **System-calculated or User-entered**
\nHelp File            **00919**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n#### Data Type Descriptions
\n##### (0) Standard Payment
\n   Select this option to indicate that a transfer from a share to a loan should be treated as a standard payment.
\n       - This is default value. The transfers work exactly like automatic loan transfers.
\n       - If the payment is less than the full amount due, the system treats it as a partial payment for loans that accept partial payments. Be sure to answer batch question to allow for partial payments, such as answering Yes at the Take Partial Payments prompt in the Daily Posting batch program.
\n       - If the system sweeps funds from a share to a loan on or after the due date, the system does not process the payment and includes the transaction on the exception report.
\n       - If the payment amount is greater than the balance of the loan, the system takes out only the remaining amount due to pay the loan down to zero and leaves the remaining transfer amount in the share. These transfers are included on the Loans to Zero Balance report.
\n##### (1) Additional Payment
\n   Select this option to indicate that a transfer from a share to a loan should be treated as an additional payment.
\n       - If you select this option, the system does not change the due date for additional payments including off-cycle transfers.
\n       - Use this option when a member makes an extra loan payment before the due date and wants the system to transfer the regular payment automatically on the next due date. Unlike automatic loan transfers, this transfer will not affect the Due Date or Payment Due fields.
\n       - If the system sweeps funds from a share to a loan on or after the date in the Loan record Due Date field, or if the loan is delinquent, the system does not process the payment and does include the transaction on the exception report.
\n       - If you select this option, partial payments are not accepted, even from off-cycle transfers; exceptions are created and they appear on the exception report.
`)
transferRecordFields.set("maturitycheck", ` 
\n### Maturity Check
\nUsed for Share records, this field indicates whether the system should issue a check when the certificate matures.
\nField Number         **026**
\nMnemonic             **MATURITYCHECK**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00926**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nOn the maturity date, the issued check can be for either the full amount of the certificate or for a partial amount.
\n
\nYou can only perform file maintenance on this field if the Transfer Type field in the Transfer record is set to (2) Maturity.
\n#### Data Type Descriptions
\n##### (0) No
\n   Select this option if you do not want the system to issue checks when the certificate matures.##### (1) Yes
\n   Select this option if you want the system to issue checks when the certificate matures.
\n       - When you select (1) Yes, you can perform file maintenance on these Share Transfer record fields:
\n       - Percent
\n       - Amount
\n       - Record Change Date
\n       - Effective Date
\n       - Expiration Date
\n       - When you select (1) Yes, you cannot perform file maintenance on these Share Transfer fields:
\n       - Account
\n       - ID Type
\n       - ID
\n       - External Loan Account Number
\n       - Amount Option
\n       - Sweep Minimum
\n       - Sweep Fee
\n       - Sweep Fee ID Type
\n       - Sweep Fee ID
\n       - Record Change Date
\n       - Transfer Frequency
\n       - Transfer Day 1
\n       - Transfer Day 2
\n       - Next Transfer Date
\n       - Last Transfer Date
\n       - Reg E
\n       - Transfer Payment Type
\n       - When you select (1) Yes, the system sets these Share Transfer record fields to a blank value:
\n       - Account
\n       - ID
\n       - External Loan Account Number
\n   
\n       - When you select (1) Yes, the system sets the ID Type field in the Share Transfer record to 0.
\n   
\n       - When you select (1) Yes, the system updates the description of the Transfer record in the Member Record Tree to Maturity Check.
\n   
\n       - When you select (1) Yes, if you change the Transfer Type field in the Transfer record to anything other than (2) Maturity, the system resets the Maturity Check field to (0) No.
\nWhether you choose Yes or No, the system displays the Transfer record in the Account Record Tree:
\n   - In order of creation (newest first), if you started the creation of the Transfer record by right-clicking the Share record
\n   - In the order indicated by the position of an existing Transfer record if you started the creation of the Transfer record by right-clicking on an existing Transfer record
\n
\nYou can have multiple Transfer records for the same Share record. With multiple Transfer records, you can disburse the funds from a matured certificate in any combination of check, transfer, or rollover.
`)
transferRecordFields.set("locator", ` 
\n### Locator
\nThis field value in each record is unique for each member account.
\nField Number         **014**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **00914**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nBecause each Locator field value is unique, it can be used as a unique identification of a specific record. The system automatically assigns the Locator field value when the record is created, and you cannot change it. The value is a positive number greater than zero.
\n
\nThe Locator field can be used during PowerOn file maintenance (both demand and batch) to uniquely identify a record. We recommend using a Locator field because a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
transferRecordFields.set("rege", ` 
\n### Reg E
\nThis field indicates whether automatic share transfers and payroll EFT transfers are designated as governed by Reg E.
\nField Number         **017**
\nMnemonic             **REGE**
\nData Type            **Code to 1**
\nSource               **System-calculated or User-entered**
\nHelp File            **00917**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe Payroll Posting, ACH Posting, and Daily Posting batch programs reference this field for share auto transfers and Payroll EFT transfers.
\n
\nFor shares, this field applies when the Transfer Type field is set to (3) Auto Share Transfer. For EFT transfers, this field applies only when the Transfer Type field is set to (4) Distribution. For other transfer types, this field cannot be revised.
\n
\nThis field allows automatic transfers between consumer accounts within the same financial institution to be exempt from Reg E provided the transfer is between accounts belonging to family members.
`)
