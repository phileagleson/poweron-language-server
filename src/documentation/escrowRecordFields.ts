export const escrowRecordFields = new Map<string, string>()
escrowRecordFields.set("escrowtype", ` 
\n### Escrow Type
\nThis field stores a code defined by your financial institution in the Escrow Type parameters to indicate the type of funds being escrowed.
\nField Number         **001**
\nMnemonic             **ESCROWTYPE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **30931**
\nDefault Control      **No**
\nDefault Value **0**
`)
escrowRecordFields.set("vendornumber", ` 
\n### Vendor Number
\nThis field (from the Vendor record) stores the vendor identification that is used to pay recipients through the GL Posting batch program using the (2) Accounts Payable Posting option.
\nField Number         **018**
\nMnemonic             **VENDORNUMBER**
\nData Type            **10 Characters**
\nSource               **System-calculated**
\nHelp File            **30945**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
escrowRecordFields.set("distribfrequency", ` 
\n### Distribution Frequency
\nWhen an escrow disbursement is processed using the Daily Posting batch program, the value at this field is used to update the Next Distribution Date field.
\nField Number         **008**
\nMnemonic             **DISTRIBFREQUENCY**
\nData Type            **Code to 5**
\nSource               **System-calculated and User-entered**
\nHelp File            **30937**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Single Pay
\n   The item being escrowed requires only a single payment.##### (1) Annual
\n   The item being escrowed requires annual payments.##### (2) Semiannual
\n   The item being escrowed requires semi-annual payments.##### (3) Quarterly
\n   The item being escrowed requires quarterly payments.##### (4) Monthly
\n   The item being escrowed requires monthly payments.##### (5) Semimonthly
\n   The item being escrowed requires semi-monthly payments.
\n`)
escrowRecordFields.set("day1", ` 
\n### Day 1
\nThis field stores the day of the month (1–31) on which the first escrow payment is due for semi-monthly escrow payments or the day of the month on which all escrow payments are due for annual, semi-annual, quarterly, or monthly escrow payments.
\nField Number         **041**
\nMnemonic             **DAY1**
\nData Type            **Code to 31**
\nSource               **User-entered**
\nHelp File            **30971**
\nDefault Control      **No**
\nDefault Value **0**
`)
escrowRecordFields.set("day2", ` 
\n### Day 2
\nThis field stores the day of the month (1–31) on which the second escrow payment is due for semi-monthly escrow payments. This field is not used for annual, semi-annual, quarterly, or monthly escrow payments.
\nField Number         **042**
\nMnemonic             **DAY2**
\nData Type            **Code to 31**
\nSource               **User-entered**
\nHelp File            **30972**
\nDefault Control      **No**
\nDefault Value **0**
`)
escrowRecordFields.set("nextdistribdate", ` 
\n### Next Distribution Date
\nThis field contains the date of the next anticipated escrow distribution.
\nField Number         **002**
\nMnemonic             **NEXTDISTRIBDATE**
\nData Type            **Date**
\nSource               **User-entered or System-calculated**
\nHelp File            **30932**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen a distribution is made for a particular Escrow record, Symitar Quest updates this field based on the Distribution Frequency field value in the Escrow record. For example, if $1,000.00 is disbursed to pay hazard insurance and the Distribution Frequency field reflects (1) Annual, then the Last Distribution Date field is populated with the date of the disbursement, the Last Distribution Amount field is updated with the amount of the disbursement, and Symitar Quest updates the Next Distribution Date field with a date that is one year after the just completed distribution date.
\n   - Important: If the Expiration Date field is populated, we recommend that you set the Next Distribution Date field to at least three days before the Expiration Date field value.
`)
escrowRecordFields.set("nextdistribamount", ` 
\n### Next Distribution Amount
\nThis field stores the amount of the next distribution for an Escrow record.
\nField Number         **026**
\nMnemonic             **NEXTDISTRIBAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **30953**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe credit union does not typically know the exact amount until they receive an invoice from an insurance company or a taxing authority. Once received, update this field if necessary. However, this field is almost never blank unless the Loan Escrow record has the Tracking Only field set to (1) Yes or the Escrow Type in the Loan Escrow record has the Include in Escrow Analysis parameter set to (1) No.
\n
\nWhen it is time to pay this amount, the Daily Posting batch program is used to transfer the amount from the share account identified in the Loan record to the GL Escrow Clearing account translated to GL Code (59) Escrow Clearing. Additionally, the program creates an Invoice record and populates the amount to the Expense Amt 01 field in that record. The program also copies the amount in this field to the Last Distribution Amount field without deleting the amount at the Next Distribution Amount field.
`)
escrowRecordFields.set("invoicenumber", ` 
\n### Invoice Number
\nThis field stores the invoice number as it appears on the vendor's invoice. This field can contain any characters, including blanks.
\nField Number         **019**
\nMnemonic             **INVOICENUMBER**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **30946**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe value in this field is copied to the Number field on the Invoice record when the Daily Posting batch program automatically creates that record. Symitar Quest does not allow duplicate vendor invoice numbers for the same Vendor record. If there is no invoice number in this field in the Loan Escrow record when a disbursement needs to be made during Daily Posting, Symitar Quest calculates a unique number and includes it in the Number field in the Invoice record.
`)
escrowRecordFields.set("printdistribnotice", ` 
\n### Print Distribution Notice
\nThis field indicates whether an escrow distribution notice should be printed each time funds relating to the Escrow record are disbursed.
\nField Number         **011**
\nMnemonic             **PRINTDISTRIBNOTICE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **30939**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   Escrow distribution notices are not printed each time funds are disbursed##### (1) Yes
\n   Escrow distribution notices are printed each time funds are disbursed
\n`)
escrowRecordFields.set("forcedplacedins", ` 
\n### Force Placed Insurance
\nThis field indicates whether the credit union has had to acquire an insurance policy for a mortgaged property. Force-placed insurance is necessary when the borrower fails to provide the required insurance protection.
\nField Number         **012**
\nMnemonic             **FORCEDPLACEDINS**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **30940**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   Indicates that the insurance coverage represented by the Loan Escrow record was not force-placed by the credit union##### (1) Yes
\n   Indicates that the insurance coverage represented by the Loan Escrow record was force-placed by the credit union
\n`)
escrowRecordFields.set("paydividend", ` 
\n### Pay Dividend
\nThis field stores whether dividends are paid on the escrow type.
\nField Number         **015**
\nMnemonic             **PAYDIVIDEND**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **30943**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   Indicates dividends are not paid on the escrow type##### (1) Yes
\n   Indicates dividends are paid on the escrow type
\nPlease see Description in Dividend Posting Batch Prompts to see how this prompt affects the Description output to the escrow statements.
`)
escrowRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nSymitar Quest stores the system date in this field when you create, change, or save a record. There will be times when this field is updated because the record was saved, even though there may not be any actual changes in the record.
\nImportant: You cannot perform file maintenance on this field.
\nSymitar Quest stores the system date in this field when you create, change, or save a record. There will be times when this field is updated because the record was saved, even though there may not be any actual changes in the record.
\n   - Important: You cannot perform file maintenance on this field.
\nField Number         **047**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **30977**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  Many Symitar Quest files contain fields that contain a calculation but display a value. This field does not change when a calculated field changes. For example, the Share record contains the Available Balance field. The computed value of this field changes when a Hold record expires (increasing the Available Balance). In this case, Symitar Quest does not change the Record Change Date field.
`)
escrowRecordFields.set("vendorname", ` 
\n### Vendor Name
\nThis field contains the name of the vendor from the Vendor record.
\nField Number         **800**
\nMnemonic             **VENDORNAME**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **30991**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou cannot perform file maintenance on this field.
`)
escrowRecordFields.set("paymentportion", ` 
\n### Payment Portion
\nThis field contains the part of the total escrow payment for one mortgage loan that applies to the Escrow Type field value in the Escrow record.
\nField Number         **031**
\nMnemonic             **PAYMENTPORTION**
\nData Type            **Money**
\nSource               **User-entered or System-calculated**
\nHelp File            **30957**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen escrow accounts are analyzed, each escrow type has a payment amount calculated for it with the value being stored in the Payment Portion field in the Escrow record. The total of these payment amounts under the same mortgage loan equals the value in the Escrow Amount field in the Loan record. This value represents the total escrow payment for the mortgage loan.
`)
escrowRecordFields.set("savedadjustpayment", ` 
\n### Saved Adjust Payment Portion
\nThis field stores whether you have saved the value for the Adjust Payment Portion field from Escrow Type Parameters that was used during the last analysis.
\nField Number         **057**
\nMnemonic             **SAVEDADJUSTPAYMENT**
\nData Type            **Code to 1**
\nSource               **System-entered**
\nHelp File            **30987**
\nDefault Control      **No**
\nDefault Value **(1) Yes**
\n
\nData Type Descriptions:
\n   - (0) No
\n   - (1) Yes (default)
\n
\nYou cannot perform file maintenance on this field.
`)
escrowRecordFields.set("expirationdate", ` 
\n### Expiration Date
\nThis field stores the date the Escrow record expires. Symitar Quest uses this field to determine whether the Escrow record is included in escrow projections and escrow disbursements. See Escrow Analysis Calculations for a detailed explanation.
\nField Number         **054**
\nMnemonic             **EXPIRATIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **30984**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nTo ensure Symitar Quest processes the next scheduled escrow disbursement, we recommend that you set this field to a date that is at least three days after the date in the Next Distribution Date field.
\nTo ensure that Symitar Quest continues to calculate ratios and produce PMI termination date-related reports, we recommend that you set this field to the same date or to a date that is later than the date in the PMI Termination Date field.
\n   - Important: Symitar Quest does not generate a final escrow disclosure on an escrowed loan that has active Escrow records. All Escrow records must be expired at the time the (2) Final Escrow Disclosure option is run. Escrow records that have the Tracking Only field set to (1) Yes are automatically excluded.
`)
escrowRecordFields.set("lastdistribdate", ` 
\n### Last Distribution Date
\nThis field stores the date of the last distribution made for the Escrow record. When new Loan Escrow records are created this field may remain blank.
\nField Number         **003**
\nMnemonic             **LASTDISTRIBDATE**
\nData Type            **Date**
\nSource               **User-entered or System-calculated**
\nHelp File            **30933**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nTo create an escrow disbursement, the Next Distribution Date field and the Next Distribution Amount field must be populated. When a distribution is made for a particular Loan Escrow record using the Daily Posting batch program, Symitar Quest updates the Last Distribution Date field with the date of the disbursement and updates the Last Distribution Amount field with the amount of the disbursement.
`)
escrowRecordFields.set("lastdistribamount", ` 
\n### Last Distribution Amount
\nThis field stores the amount of the last distribution made for the Escrow record. When new Loan Escrow records are created this field may remain blank.
\nField Number         **027**
\nMnemonic             **LASTDISTRIBAMOUNT**
\nData Type            **Money**
\nSource               **User-entered or System-calculated**
\nHelp File            **30954**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nTo create an escrow disbursement, the Next Distribution Date field and the Next Distribution Amount field must be populated. When a distribution is made for a particular Loan Escrow record using the Daily Posting batch program, Symitar Quest updates the Last Distribution Date field with the date of the disbursement and updates the Last Distribution Amount field with the amount of the disbursement.
`)
escrowRecordFields.set("trackingonly", ` 
\n### Tracking Only
\nThis field indicates whether you track items without collecting any escrow funds and without including the Loan Escrow record in escrow analysis.
\nField Number         **013**
\nMnemonic             **TRACKINGONLY**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **30941**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   Treats the Loan Escrow record disbursement item as a normal escrowed item subject only to the setting in the Include in Escrow Analysis field in Escrow Type Parameters##### (1) Yes
\n   Tracks the item only and does not include it in escrow analysis or collect any funds relating to it. This selection overrides the Include in Escrow Analysis field in Escrow Type Parameters.
\n       - Important: This option completely separates this record from the escrow payment, escrow disbursement, and escrow analysis process.
`)
escrowRecordFields.set("floodinstracking", ` 
\n### Flood Insurance Tracking
\nThis field enables you to track mortgage loans that require flood insurance
\nField Number         **014**
\nMnemonic             **FLOODINSTRACKING**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **30942**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   The Loan Escrow record disbursement item does not involve flood insurance.##### (1) Yes
\n   The Loan Escrow record disbursement item represents flood insurance premiums.
\n`)
escrowRecordFields.set("realestateowner", ` 
\n### Real Estate Owner
\nThis field stores the name or names of the owners of the real estate held as collateral. The owners may also be the borrowers, but occasionally property owned by one person is pledged to the mortgage loan of another.
\nField Number         **020**
\nMnemonic             **REALESTATEOWNER**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **30947**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe Payment Type field in the Escrow Type Parameters defines the type of escrow payment between (0) None, (1) Insurance, (2) Taxes, and (3) PMI. When paying real estate taxes, the Daily Posting batch program copies the data in this field to the Description field of the Invoice record. When accounts payable is processing the payment, this data is copied from the Description field to the new escrow voucher since it helps identify whose taxes are being paid. This is especially important when more than one person's real estate taxes are being paid on a single check.
`)
escrowRecordFields.set("taxrefnumber", ` 
\n### Tax Reference Number
\nThis field stores the real estate tax reference number or identification number issued by the taxing authority and used to help identify the real property being taxed.
\nField Number         **021**
\nMnemonic             **TAXREFNUMBER**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **30948**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nWhen the Payment Type field is set to (1) Taxes, the Daily Posting batch program copies the first 32 characters in this field to the Additional Description field in the Invoice record preceded by "RE REF:". When accounts payable is processing the check payment, this data is copied from the Additional Description field to the new Escrow Voucher since it helps identify whose taxes are being paid. This is especially important when more than one person's real estate taxes are being paid on a single check.
\n***Important:***  If taxes are being paid and the Tax Reference Number field is blank in the Escrow record, Symitar Quest reads the Parcel Number field to obtain the identification number to include in the invoice and on the escrow voucher. Symitar Quest copies the first 32 characters in the Parcel Number field to the Additional Description field in the Invoice record preceded by "RE REF:".
\n
\nWhen the Payment Type field is set to (1) Taxes and both the Tax Reference Number and the Parcel Number fields are blank, the Daily Posting batch program will include the attempted disbursement relating to the Loan Escrow record as an exception and will include it on the Escrow Disbursements Exception report.
`)
escrowRecordFields.set("parcelnumber", ` 
\n### Parcel Number
\nThis field stores the real estate parcel number issued by some taxing authorities that is used to help identify the real estate property being taxed.
\nField Number         **022**
\nMnemonic             **PARCELNUMBER**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **30949**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nWhen paying real estate taxes, the Daily Posting batch program copies the first 32 characters of the Tax Reference Number field to the Additional Description field in the Invoice record preceded by "RE REF:". If the Tax Reference Number field is blank, Symitar Quest copies the first 32 characters of the Parcel Number field to the Additional Description field in the Invoice record preceded by "RE REF:".
\n
\nWhen accounts payable is processing the check payment, this data is copied from the Additional Description field to the new escrow voucher to help identify the property on which the taxes are being paid. This is especially important when more than one member's real estate taxes are being paid using a single check.
\n***Important:***  When the Payment Type field is set to (1) Taxes and both the Tax Reference Number and the Parcel Number fields are blank, the Daily Posting batch program includes the attempted disbursement relating to the Loan Escrow record as an exception and includes it on the Escrow Disbursements Exception report.
`)
escrowRecordFields.set("legaldescription", ` 
\n### Legal Description
\nThis field stores the legal description of the real estate.
\nField Number         **023**
\nMnemonic             **LEGALDESCRIPTION**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **30950**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
escrowRecordFields.set("policyowner", ` 
\n### Policy Owner
\nThis field stores the name (or names) of the insurance policy owners.
\nField Number         **024**
\nMnemonic             **POLICYOWNER**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **30951**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe Payment Type field in Escrow Type Parameters defines the type of escrow payment between (0) None, (1) Insurance, and (2) Taxes. When paying insurance premiums, the Daily Posting batch program copies the data in this field to the Description field of the Invoice record. When accounts payable is processing the payment, this data is copied from the Description field to the new escrow voucher since it helps the insurance company in posting the funds received. This is especially important when more than one person's insurance premiums are paid on a single check.
`)
escrowRecordFields.set("policynumber", ` 
\n### Policy Number
\nThis field stores the insurance policy number that the insurance premium is being paid on.
\nField Number         **025**
\nMnemonic             **POLICYNUMBER**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **30952**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nWhen a Payment Type of (0) Insurance is used, the Daily Posting batch program copies the data in this field to the Additional Description field in the Invoice record. When accounts payable is processing the check payment, this data is copied from the Additional Description field to the new escrow voucher because it helps identify whose premiums are being paid. This is especially important when more than one person's insurance premiums are paid on a single check.
`)
escrowRecordFields.set("policyamount", ` 
\n### Policy Amount
\nThis field stores the amount of the insurance policy.
\nField Number         **033**
\nMnemonic             **POLICYAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **30959**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
escrowRecordFields.set("policyorigdate", ` 
\n### Policy Origination Date
\nThis field stores the date the insurance policy originated. This field must be populated with a date for the PMI notices and disclosures to function properly.
\nField Number         **006**
\nMnemonic             **POLICYORIGDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **30935**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
escrowRecordFields.set("policyexpiredate", ` 
\n### Policy Expiration Date
\nThis field stores the date the insurance policy expires.
\nField Number         **007**
\nMnemonic             **POLICYEXPIREDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **30936**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
escrowRecordFields.set("pmidisclosuredate", ` 
\n### PMI Disclosure Date
\nThis field stores the date when the next annual PMI disclosure is to be generated for all residential mortgages.
\nField Number         **048**
\nMnemonic             **PMIDISCLOSUREDATE**
\nData Type            **Date**
\nSource               **System-calculated or User-entered**
\nHelp File            **30978**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe initial value for this field is blank. However, the Escrow Reports batch program sets the initial value to the system date (at the time the initial disclosure is generated) plus one year. This field is again updated by the Escrow Reports batch program once the next annual PMI disclosure date is reached and an annual notice is generated. Under normal circumstances, you should not revise this field.
\nWhen a date is entered in this field, the system no longer adds the PMI disbursement amount to the Mortgage Ins Collected YTD field in the Loan record.
\n   - Example:
\n   - If the PMI amount is 50.00 a month and the PMI Cancellation Date field is set to 10/1/2021, the Loan record records the PMI amounts for January through October. If PMI is still collected and disbursed for the months of November and December, the system does not record those amounts in the Mortgage Ins Collected YTD field of the Loan record.
\n
\nIn this example, the value in the Mortgage Ins Collected YTD field will be 500.00 for months January through October, even though the system collected and disbursed 600.00 to the PMI vendor.
\n
\nThe value in the Mortgage Ins Collected YTD field moves to the Mortgage Ins Collected Last Yr field and is mapped to the 1098 - Mortgage Interest Statement IRS tax form
\n
\nIf you want to perform file maintenance on this field, valid input values include clearing the field contents to blank, or dates equal to or greater than the current system date.
`)
escrowRecordFields.set("pmicancelnotice", ` 
\n### PMI Cancellation Notices
\nThis field indicates whether a PMI cancellation notice is generated for the corresponding loan.
\nField Number         **049**
\nMnemonic             **PMICANCELNOTICE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **30979**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nData Type Descriptions:
\n   - (0) None
\n   - (1) Cancellation Notice
\n   - (2) Cancellation Declined Notice
\n
\nThe Escrow Reports batch program generates the notices.
`)
escrowRecordFields.set("pmicanceldate", ` 
\n### PMI Cancellation Date
\nThis field stores the date PMI was canceled on the loan. This date is manually entered when the PMI is canceled.
\nField Number         **050**
\nMnemonic             **PMICANCELDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **30980**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf the PMI is canceled on a loan before the effective date of a pending payment change (that occurred because of a recent escrow analysis), you may need to run a replacement escrow analysis to update the New Escrow Payment # field in the Escrow Analysis record. The pending payment change in the Escrow Analysis record overrides the updated Payment field in the Loan record once the due date on the loan matches the New Escrow Payment Date # field.
`)
escrowRecordFields.set("pmitermdate", ` 
\n### PMI Termination Date
\nThis field contains the date when the lender generally must terminate the PMI.
\nField Number         **051**
\nMnemonic             **PMITERMDATE**
\nData Type            **Date**
\nSource               **System-calculated or User-entered**
\nHelp File            **30981**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nLoans with PMI that reach the date that the principal balance of the mortgage is first scheduled to reach 78% of the PMI loan to value for non-high risk loans (77% if the loan is designated as high risk) of the secured property (based solely on the initial amortization schedule in the case of a fixed rate loan, or on the amortization schedule then in effect in the case of an adjustable rate loan, regardless of the outstanding balance).
\n
\nIf the borrower is not current on that date, PMI should terminate on the first day of the first month following the date that the borrower becomes current. Symitar Quest initially calculates this field at the time of loan funding.
\n
\nIf you want to perform file maintenance on this field, valid input values include clearing the field contents to blank, or dates equal to or greater than the current system date.
\n***Important:***  If the Expiration Date field is populated, we recommend that you set the PMI Termination Date field to a date on or before the expiration date. This ensures that Symitar Quest continues to calculate ratios and produce PMI Termination Date-related reports.
`)
escrowRecordFields.set("pmimidtermdate", ` 
\n### PMI Midpt. Final Termin. Date
\nThis field stores the date the loan is halfway through the period between the first day of the amortization period and the ending when the mortgage is scheduled to be amortized.
\nField Number         **052**
\nMnemonic             **PMIMIDTERMDATE**
\nData Type            **Date**
\nSource               **System-calculated or User-entered**
\nHelp File            **30982**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAll loans, including high risk loans, are subject to PMI midpoint final termination. If the borrower is not current on that date, PMI should terminate on the first day of the first month following the date that the borrower becomes current. Symitar Quest initially calculates this field at the time of loan funding.
\n
\nIf you wish to perform file maintenance on this field, valid input values include clearing the field contents to blank, or dates equal to or greater than the current system date.
`)
escrowRecordFields.set("pmielignotices", ` 
\n### PMI Eligibility Notices
\nThis field stores the type of eligibility notice assigned to the corresponding loan.
\nField Number         **053**
\nMnemonic             **PMIELIGNOTICES**
\nData Type            **Code to 3**
\nSource               **System-calculated or User-entered**
\nHelp File            **30983**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nData Type Descriptions:
\n   - (0) None
\n   - (1) Cancellation Elig. Notice
\n   - (2) Termination Elig. Notice
\n   - (3) Midpt. Final Elig. Notice
\nThe Daily Posting batch program updates this field with the corresponding notice that was generated dependent upon if the loan has reached 80% PMI loan to value ratio, 78% PMI loan to value ratio, or the PMI midpoint final termination date.
\n   - Important: If this field is updated to the default value of (0) None, the next time the Daily Posting Batch Program is run, Symitar Quest generates the notice applicable to the loan's current status.
`)
escrowRecordFields.set("lastdisbursfreq", ` 
\n### Last Disbursement Frequency
\nThis field contains the value from the Distribution Frequency field in the same Loan Escrow record when the Loan Escrow record is used in the escrow analysis.
\nField Number         **009**
\nMnemonic             **LASTDISBURSFREQ**
\nData Type            **Code to 5**
\nSource               **System-entered**
\nHelp File            **30938**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Single Pay
\n   The item being escrowed requires only a single payment.##### (1) Annual
\n   The item being escrowed requires annual payments.##### (2) Semiannual
\n   The item being escrowed requires semi-annual payments.##### (3) Quarterly
\n   The item being escrowed requires quarterly payments.##### (4) Monthly
\n   The item being escrowed requires monthly payments.##### (5) Semimonthly
\n   The item being escrowed requires semi-monthly payments.
\nThis value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method prompt in the Escrow Reports batch program.
`)
escrowRecordFields.set("lastdisburseday1", ` 
\n### Last Disbursement Day 1
\nThis field stores the value from the Day 1 field in the same Loan Escrow record when the Loan Escrow record is used in the escrow analysis.
\nField Number         **043**
\nMnemonic             **LASTDISBURSEDAY1**
\nData Type            **Code to 31**
\nSource               **System-entered**
\nHelp File            **30973**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThis value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method.
`)
escrowRecordFields.set("lastdisburseday2", ` 
\n### Last Disbursement Day 2
\nThis field stores the value from the Day 2 field in the same Loan Escrow record when the Loan Escrow record is used in the escrow analysis.
\nField Number         **44**
\nMnemonic             **LASTDISBURSEDAY2**
\nData Type            **Code to 31**
\nSource               **System-entered**
\nHelp File            **30974**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThis value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method.
`)
escrowRecordFields.set("lastdisbursdate", ` 
\n### Last Disbursement Date
\nThis field contains the value copied from the Loan Escrow record Next Distribution Date field.
\nField Number         **004**
\nMnemonic             **LASTDISBURSDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **30934**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
escrowRecordFields.set("lastdisbursamt", ` 
\n### Last Disbursement Amount
\nThis field stores the value from the Next Distribution Amount field in the same Loan Escrow record if the Loan Escrow record is used in the escrow analysis.
\nField Number         **028**
\nMnemonic             **LASTDISBURSAMT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **30955**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
escrowRecordFields.set("lastexpirationdate", ` 
\n### Last Expiration Date
\nThis field stores the value from the Expiration Date field in the same Loan Escrow record when the Loan Escrow record is used in the escrow analysis.
\nField Number         **055**
\nMnemonic             **LASTEXPIRATIONDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **30985**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method prompt in the Escrow Reports batch program.
`)
escrowRecordFields.set("lastamtneededpmt", ` 
\n### Last Amt Needed From Each Pmt
\nThis field contains the amount calculated based on the value of the Last Total Annual Disbursemnts field divided by the value at the Last Number Pmts Due in Period.
\nField Number         **034**
\nMnemonic             **LASTAMTNEEDEDPMT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **30960**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
escrowRecordFields.set("lastnbrpmtsdue", ` 
\n### Last Number Pmts Due in Period
\nThis field stores how many escrow payments are due, based on the value in the Current Payment Frequency field.
\nField Number         **016**
\nMnemonic             **LASTNBRPMTSDUE**
\nData Type            **Code to 99**
\nSource               **System-calculated**
\nHelp File            **30944**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nDuring escrow analysis, if the Current Payment Frequency field in the Loan Escrow Analysis record is set to (4) Monthly, this field is set to 12 because there are 12 months in one year. If the Current Payment Frequency field is set to (5) Semi-monthly, this field is set to 24.
`)
escrowRecordFields.set("lasttotanndisburs", ` 
\n### Last Total Annual Disbursemnts
\nThis field contains a value calculated by multiplying the Last Disbursement Amount in the Loan Escrow record by the frequency of the disbursement as defined by the Last Disbursement Frequency field.
\nField Number         **036**
\nMnemonic             **LASTTOTANNDISBURS**
\nData Type            **Money**
\nSource               **User-entered or System-calculated**
\nHelp File            **30961**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
escrowRecordFields.set("lastmonthcushion", ` 
\n### Last Month of Cushion
\nThis field contains the cushion amount needed to offset any shortages for the last month of escrow.
\nField Number         **038**
\nMnemonic             **LASTMONTHCUSHION**
\nData Type            **Money**
\nSource               **User-entered or System-calculated**
\nHelp File            **30962**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nDuring escrow analysis, this value is calculated by multiplying the Last Amt Needed From Each Pmt field value by 1 if the Current Payment Frequency in the Loan Escrow Analysis record is (4) Monthly. If the Current Payment Frequency is (5) Semi-monthly, the value in the Last Amt Needed From Each Pmt is multiplied by 2.
\n
\nThis field is populated regardless of the value in the Number of Cushion Months parameter in Escrow Type parameters.
`)
escrowRecordFields.set("lastanalysiscalc", ` 
\n### Last Date Analysis Calculated
\nIf values in a Loan Escrow record are used during escrow analysis, this field stores the system date the analysis was run. This date is used when the last escrow analysis is being recreated.
\nField Number         **030**
\nMnemonic             **LASTANALYSISCALC**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **30956**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
escrowRecordFields.set("prevdisbursfreq", ` 
\n### Prev Disbursement Frequency
\nThis field contains the value from the Last Disbursement Frequency field.
\nField Number         **010**
\nMnemonic             **PREVDISBURSFREQ**
\nData Type            **Code to 5**
\nSource               **System-entered**
\nHelp File            **30965**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Single Pay
\n   The item being escrowed requires only a single payment.##### (1) Annual
\n   The item being escrowed requires annual payments.##### (2) Semiannual
\n   The item being escrowed requires semi-annual payments.##### (3) Quarterly
\n   The item being escrowed requires quarterly payments.##### (4) Monthly
\n   The item being escrowed requires monthly payments.##### (5) Semimonthly
\n   The item being escrowed requires semi-monthly payments.
\nDuring escrow analysis, the value from Last Disbursement Frequency field is moved to the Prev Disbursement Frequency field. This value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method prompt in the Escrow Reports batch program.
`)
escrowRecordFields.set("prevdisburseday1", ` 
\n### Prev Disbursement Day 1
\nThis field stores the value from the Last Disbursement Day 1 field in the same Loan Escrow record when the Loan Escrow record is used in the escrow analysis.
\nField Number         **045**
\nMnemonic             **PREVDISBURSEDAY1**
\nData Type            **Code to 31**
\nSource               **System-entered**
\nHelp File            **30975**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThis value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method.
`)
escrowRecordFields.set("prevdisburseday2", ` 
\n### Prev Disbursement Day 2
\nThis field stores the value from the Last Disbursement Day 2 field in the same Loan Escrow record when the Loan Escrow record is used in the escrow analysis.
\nField Number         **046**
\nMnemonic             **PREVDISBURSEDAY2**
\nData Type            **Code to 31**
\nSource               **System-entered**
\nHelp File            **30976**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThis value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method.
`)
escrowRecordFields.set("prevdisbursdate", ` 
\n### Prev Disbursement Date
\nThis field contains the value copied from the Loan Escrow record Last Disbursement Date field.
\nField Number         **005**
\nMnemonic             **PREVDISBURSDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **30964**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nDuring escrow analysis, the date from the Last Disbursement Date field is moved to this field. This value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method prompt in the Escrow Reports batch program.
`)
escrowRecordFields.set("prevdisbursamt", ` 
\n### Prev Disbursement Amount
\nThis field stores the amount from the Last Disbursement Amount field of the Loan Escrow record, during escrow analysis.
\nField Number         **029**
\nMnemonic             **PREVDISBURSAMT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **30967**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method prompt in the Escrow Reports batch program.
`)
escrowRecordFields.set("prevexpirationdate", ` 
\n### Prev Expiration Date
\nThis field stores the value from the Last Expiration Date field in the same Loan Escrow record when the Loan Escrow record is used in the escrow analysis.
\nField Number         **056**
\nMnemonic             **PREVEXPIRATIONDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **30986**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method prompt in the Escrow Reports batch program.
`)
escrowRecordFields.set("prevamtneededpmt", ` 
\n### Prev Amt Needed From Each Pmt
\nThis field stores the amount from the Last Amt Needed From Each Pmt field of the Loan Escrow record, during escrow analysis.
\nField Number         **035**
\nMnemonic             **PREVAMTNEEDEDPMT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **30968**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method prompt in the Escrow Reports batch program.
`)
escrowRecordFields.set("prevnbrpmtsdue", ` 
\n### Prev Number Pmts Due in Period
\nThis field stores the previous number of escrow payments due, based on the value in the Last Number Pmts Due in Period field.
\nField Number         **017**
\nMnemonic             **PREVNBRPMTSDUE**
\nData Type            **Code to 99**
\nSource               **System-entered**
\nHelp File            **30966**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nDuring escrow analysis, the value from the Last Number Pmts Due in Period field is moved to this field. This value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method prompt in the Escrow Reports batch program.
`)
escrowRecordFields.set("prevtotanndisburs", ` 
\n### Prev Total Annual Disbursemnts
\nThis field stores the amount from the Last Total Annual Disbursemnts field of the Loan Escrow record, during escrow analysis.
\nField Number         **037**
\nMnemonic             **PREVTOTANNDISBURS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **30969**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method prompt in the Escrow Reports batch program.
`)
escrowRecordFields.set("prevmonthcushion", ` 
\n### Prev Month of Cushion
\nThis field stores the amount from the Last Month of Cushion field of the Loan Escrow record, during escrow analysis.
\nField Number         **039**
\nMnemonic             **PREVMONTHCUSHION**
\nData Type            **Money**
\nSource               **User-entered or System-calculated**
\nHelp File            **30970**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method prompt in the Escrow Reports batch program.
`)
escrowRecordFields.set("prevanalysiscalc", ` 
\n### Prev Date Analysis Calculated
\nThis field stores the amount from the Last Date Analysis Calculated field of the Loan Escrow record, during escrow analysis.
\nField Number         **032**
\nMnemonic             **PREVANALYSISCALC**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **30958**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis value remains unchanged until a new analysis is run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method prompt in the Escrow Reports batch program.
`)
escrowRecordFields.set("locator", ` 
\n### Locator
\nSymitar Quest stores a unique number within each member account in this field that can be used as a unique identification of this record.
\nField Number         **040**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar Quest automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
