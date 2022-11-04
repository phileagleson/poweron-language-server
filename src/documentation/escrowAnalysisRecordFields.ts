export const escrowAnalysisRecordFields = new Map<string, string>()
escrowAnalysisRecordFields.set("nextanalysisdate", ` 
\n### Next Analysis Date
\nThis field contains the date the next analysis is to be generated.
\nField Number         **006**
\nMnemonic             **NEXTANALYSISDATE**
\nData Type            **Date**
\nSource               **User-defined or System-calculated**
\nHelp File            **31006**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the Next Analysis Datevalue from the previous analysis is projected 12 months into the future and that date is stored at this field.
`)
escrowAnalysisRecordFields.set("finalanalysisdate", ` 
\n### Final Analysis Date
\nThe system generates a final escrow disclosure for all escrowed loans where this date (final analysis date) falls within the date range entered at the Analysis Selection prompt, when you run a (2) Final Escrow Disclosure analysis type.
\nField Number         **059**
\nMnemonic             **FINALANALYSISDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31059**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system will not generate a final escrow disclosure on an escrowed loan that has active Escrow records. All Escrow records must be expired at the time you run a (2) Final Escrow Disclosure analysis type. Escrow records that have the Tracking Only field set to (1) Yes are automatically excluded.
`)
escrowAnalysisRecordFields.set("prioranalysissource", ` 
\n### Prior Analysis Source
\nThis field indicates whether there is a previous analysis available.
\nField Number         **058**
\nMnemonic             **PRIORANALYSISSOURCE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31058**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Available
\n   No previous analysis data is available to send.##### (1) Hardcopy
\n   A hardcopy of the last analysis performed on a different system will be enclosed.##### (2)
\n   Previous analysis data has been populated in the Loan Escrow Analysis record and the Loan Escrow records..This field is automatically set to (2) System Generated after the first analysis is run. When this field is set to (2) System Generated, the Escrow batch program produces the Previous Year Projections Statement, if the required information is available.
\n   - Important: If the Last Analysis Data fields in the Loan Escrow Analysis record and the Loan Escrow record are not populated, the Annual Escrow Account Disclosure Statement (Projections from Previous Year) will not print.
\nIf you answer Yes to the Print Previous Year Projections Stmt prompt in Escrow Reports batch program but the Prior Analysis Source field is set to (0) Not Available or (1) Hardcopy, the following message appears:
\n   - Warning: No PrevYr Proj/No PriorAnalSrc
`)
escrowAnalysisRecordFields.set("initialdisclthird", ` 
\n### Initial Disclosure Third Party
\nThis field indicates whether a third party has already provided the Initial Escrow Disclosure statement to the member.
\nField Number         **054**
\nMnemonic             **INITIALDISCLTHIRD**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31054**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   The initial disclosure was not provided to the member by a third party.##### (1) Yes
\n   The initial disclosure was already provided to the member by a third party.
\n`)
escrowAnalysisRecordFields.set("dateinitdisclneed", ` 
\n### Date Initial Disclosure Needed
\nThis field is used by the Escrow Reports batch program to determine when to create an Initial Escrow Disclosure statement and report for this escrow account.
\nField Number         **056**
\nMnemonic             **DATEINITDISCLNEED**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31056**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis is the date that the Initial Escrow Disclosure statement needs to be generated if the Initial Disclosure Third Party field is set to (0) No.
\n
\nIf the Initial Disclosure Third Party field is set to (1) Yes, this field cannot be updated.
`)
escrowAnalysisRecordFields.set("actualinitialdiscl", ` 
\n### Actual Initial Disclosure Date
\nThis field stores the date the initial escrow disclosure was created to be provided to the member.
\nField Number         **055**
\nMnemonic             **ACTUALINITIALDISCL**
\nData Type            **Date**
\nSource               **User-entered or System-calculated**
\nHelp File            **31055**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf the Initial Disclosure Third Party field is set to (1) Yes, you can update this field with the date the third party provided the initial disclosure to the member.
\n
\nIf the Initial Disclosure Third Party field is set to (0) No, this field cannot be updated. When the Escrow Reports batch program creates the Initial Escrow Disclosure statement, the field is automatically populated with the system date.
`)
escrowAnalysisRecordFields.set("dateanalysiscalc", ` 
\n### Date Analysis Calculated
\nThis field stores the date the last escrow analysis was calculated with the results in the Escrow Analysis record.
\nField Number         **001**
\nMnemonic             **DATEANALYSISCALC**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **31001**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system date is stored in this field.
`)
escrowAnalysisRecordFields.set("lastanalysisprocessed", ` 
\n### Last Analysis Processed
\nThis field indicates the most recent analysis process generated on an escrowed loan.
\nField Number         **060**
\nMnemonic             **LASTANALYSISPROCESSED**
\nData Type            **Code to 6**
\nSource               **System-entered**
\nHelp File            **31060**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) None
\n   No escrow analysis process has run.##### (1) Initial - New Period
\n   Used if the most recent analysis has the Analysis Type field set to (1) Initial Escrow Disclosure, and the Analysis Method field set to (1) New Period Analysis Statements.##### (2) Initial - Replacement
\n   Used if the most recent analysis has the Analysis Type field set to (1) Initial Escrow Disclosure, and the Analysis Method field set to (2) Replacement Analysis Statements.##### (3) Annual - New Period
\n   Used if the most recent analysis has the Analysis Type field set to (0) Annual Escrow Disclosure, and the Analysis Method field set to (1) New Period Analysis Statements.##### (4) Annual - Replacement
\n   Used if the most recent analysis has the Analysis Type field set to (0) Annual Escrow Disclosure, and the Analysis Method field set to (2) Replacement Analysis Statements.##### (5) Final - New Period
\n   Used if the most recent analysis has the Analysis Type field set to (2) Final Escrow Disclosure, and the Analysis Method field set to (1) New Period Analysis Statements.##### (6) Final - Replacement
\n   Used if the most recent analysis has the Analysis Type field set to (2) Final Escrow Disclosure, and the Analysis Method field set to (2) Replacement Analysis Statements.
\nThe system updates this field with one of the values listed above, when the (1) Analyze Escrow Accounts option is selected in the Escrow Reports batch program.
`)
escrowAnalysisRecordFields.set("currentpaymentfreq", ` 
\n### Current Payment Frequency
\nThis field contains the Payment Frequency field value copied from the Loan record when the escrow analysis was performed.
\nField Number         **004**
\nMnemonic             **CURRENTPAYMENTFREQ**
\nData Type            **Code to 12**
\nSource               **System-entered**
\nHelp File            **31004**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Single Pay
\n   The member is to repay the loan in a single payment.##### (1) Annual
\n   The member makes loan payments once a year.##### (2) Semiannual
\n   The member makes loan payments semiannually (twice per year).##### (3) Quarterly
\n   The member makes loan payments quarterly. For loans with the Interest Type field set to (1) Monthly 360 day, this field must be set to (3) Quarterly, (4) Monthly, or (5) Semimonthly.##### (4) Monthly
\n   The member makes loan payments monthly. For loans with the Interest Type field set to (1) Monthly 360 day, this field must be set to (3) Quarterly, (4) Monthly, or (5) Semimonthly.
\n   
\n       - For loans with the Interest Type field set to (3) Daily billed I, (4) Daily billed II, (6) Daily Billed 360, or (10-8999) Credit Card Interest this field must be set to (4) Monthly.
\n   
\n       - For loans with Schedule records, this field must be set to (4) Monthly.
\n##### (5) Semimonthly
\n   The member makes loan payments semimonthly (twice per month).
\n       - Important: If you select this option, you must also enter the dates in the Due Day 1 and Due Day 2 fields.
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
\n   The member makes loan payments every other month.
\n`)
escrowAnalysisRecordFields.set("currentdueday1", ` 
\n### Current Due Day 1
\nDuring escrow analysis, the value in the Due Day 1 field in the Loan record is copied to this field. This field contains the first payment due date for semi-monthly payment loans or the day of the month on which all loan payments are due for annual, semi-annual, quarterly, or monthly loans.
\nField Number         **052**
\nMnemonic             **CURRENTDUEDAY1**
\nData Type            **Code to 31**
\nSource               **System-entered**
\nHelp File            **31052**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   No current due day 1##### 1–31
\n   Current due day 1 for the loan
\n`)
escrowAnalysisRecordFields.set("currentdueday2", ` 
\n### Current Due Day 2
\nDuring escrow analysis, the value in the Due Day 2 field in the Loan record is copied to this field. This field is not used for annual, semi-annual, quarterly, monthly, or biweekly loans.
\nField Number         **053**
\nMnemonic             **CURRENTDUEDAY2**
\nData Type            **Code to 31**
\nSource               **System-entered**
\nHelp File            **31053**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   No current due day 2##### 1–31
\n   Current due day 2 for the loan
\n`)
escrowAnalysisRecordFields.set("", ` 
\n`)
escrowAnalysisRecordFields.set("nextpaymentduedate", ` 
\n### Next Payment Due Date
\nThis field stores the next payment due date for the loan when the escrow analysis was performed. This value is copied from the Loan record Due Date field.
\nField Number         **003**
\nMnemonic             **NEXTPAYMENTDUEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **31003**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
escrowAnalysisRecordFields.set("forecastbegstmtbal", ` 
\n### Forecasted Beg Statement Bal
\nThis field is calculated during the analysis and is typically used as the starting balance in the Estimate of Activity trial balance section. This trial balance is also part of the member escrow analysis statement.
\nField Number         **009**
\nMnemonic             **FORECASTBEGSTMTBAL**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31009**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe value in this field is calculated based on the following:
\n   - Add: Current escrow account balance that equals the Escrow Analysis record Current Escrow Balances field
\n   - Add: Any payments that are due before the New Escrow Payment Date 1 field value in the Escrow Analysis record
\n   - Subtract: Any prepaid escrow payments
\n   - Add: Any escrow payment reversals
\n   - Subtract: Any past due escrow disbursements
\n   - Important: If an overage is refunded, there is an amount in the Escrow Analysis record Overage Refunded field. In these instances, the starting balance used in the Estimate of Activity trial balance and in the Projections for Coming Year sections of the member escrow analysis statement is the Forecasted Beg Statement Bal field value less the Overage Refunded field value.
`)
escrowAnalysisRecordFields.set("expectedbegstmtbal", ` 
\n### Expected Beg Statement Bal
\nThis field is calculated during the analysis and is used as the starting balance in the Adj Trial Balance section. T
\nField Number         **010**
\nMnemonic             **EXPECTEDBEGSTMTBAL**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31010**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis trial balance is not part of the actual member escrow analysis statement. Its purpose is to calculate whether the escrow account has a shortage, deficiency, or overage. The value of this field is calculated based on the largest negative (month-end) balance from the Initial Trial Balance section, which is added to the required cushion amounts. Cushions are defined in Escrow Type Parameters by indicating the total months of cushion required during the analysis of the escrow account. The amount of one month's cushion is calculated during analysis and stored in the Loan Escrow record in the Last Month of Cushion field. This calculation is performed regardless of the Escrow Type parameter setting for the escrow type in each Loan Escrow record. This calculated value is compared to the Forecasted Beg Statement Bal field value to determine whether a shortage or overage exists.
`)
escrowAnalysisRecordFields.set("shortage", ` 
\n### Shortage
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, any calculated shortage is stored in this field.
\nField Number         **014**
\nMnemonic             **SHORTAGE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31014**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe value in this field is calculated as follows:
\n   - Add: Expected Beg Statement Bal field
\n   - Less: Forecasted Beg Statement Bal field
\n   - If the net between the two values is a positive amount, an shortage exists and is displayed in this field. If the net between the two values is a negative amount, an overage exists and is stored in the Overage field in this record.
`)
escrowAnalysisRecordFields.set("deficiency", ` 
\n### Deficiency
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, any deficiency is stored in this field.
\nField Number         **015**
\nMnemonic             **DEFICIENCY**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31015**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nA deficiency exists when the Forecasted Beg Statement Bal is a negative number. The deficiency is the amount needed to return the Forecasted Beg Statement Bal to zero.
`)
escrowAnalysisRecordFields.set("overage", ` 
\n### Overage
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, any calculated overage amount is stored in this field.
\nField Number         **011**
\nMnemonic             **OVERAGE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31011**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe value in this field is calculated as follows:
\n   - Add: Expected Beg Statement Bal field
\n   - Less: Forecasted Beg Statement Bal field
\n   - If the net between the two values is a negative amount, an overage exists that will be stored in this field. If the net between the two values is a positive amount, a shortage exists and is stored in the Shortage field in this record.
`)
escrowAnalysisRecordFields.set("overagerefunded", ` 
\n### Overage Refunded
\nThe value in this field represents the amount of any escrowed funds that are being refunded to the borrower as a result of the escrow account analysis.
\nField Number         **012**
\nMnemonic             **OVERAGEREFUNDED**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31012**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe threshold for refunding escrow overages is defined in Escrow Analysis parameters.
\n
\nThe Escrow Reports batch program performs escrow analysis on selected escrow accounts. If the results of an analysis reflect a refundable overage, the program withdraws the amount in the Overage Refunded field from the escrow share account and creates a refund check payable to the borrower.
\n
\nThe amount in the Overage Refunded field is subtracted from the Forecasted Beg Statement Bal field, with the net results shown as the Starting Balance field value in both the Estimate of Activity trial balance and in the projections section of the member escrow analysis statement.
`)
escrowAnalysisRecordFields.set("cushion", ` 
\n### Cushion
\nThis is the amount of cushion that was used in the latest escrow analysis. It is a total of all required cushions for the escrow types represented in the Loan Escrow records under the Loan record.
\nField Number         **016**
\nMnemonic             **CUSHION**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31016**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis amount is calculated by multiplying the Number of Cushion Months in Escrow Type parameters by the Last Month of Cushion amount in the respective Escrow record. The total of all the required cushions for the Loan Escrow records used in the analysis of one escrow account equal the Cushion.
`)
escrowAnalysisRecordFields.set("actionshortage", ` 
\n### Action Taken for Shortage
\nBased on the Escrow Analysis parameter settings and the actual analysis of the escrow account, this field contains the code that links to verbiage describing the action taken by the credit union relating to the shortage.
\nField Number         **023**
\nMnemonic             **ACTIONSHORTAGE**
\nData Type            **Code to 5**
\nSource               **System-calculated**
\nHelp File            **31023**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nData Type Descriptions:
\n   - (0) No shortage (default)
\n   - (1) Shortage LT - Take no action
\n   - (2) Shortage LT - Require repayment
\n   - (3) Shortage LT - Spread over 12 months or more
\n   - (4) Shortage GE - Take no action
\n   - (5) Shortage GE - Spread over 12 months or more
`)
escrowAnalysisRecordFields.set("actiondeficiency", ` 
\n### Action Taken for Deficiency
\nBased on the Escrow Analysis parameter settings and the actual analysis of the escrow account, this field contains the code that links to verbiage describing the action taken by the credit union relating to the deficiency.
\nField Number         **024**
\nMnemonic             **ACTIONDEFICIENCY**
\nData Type            **Code to 5**
\nSource               **System-calculated**
\nHelp File            **31025**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nData Type Descriptions:
\n   - (0) No Deficiency (default)
\n   - (1) Deficiency LT - Take no action
\n   - (2) Deficiency LT - Require repayment
\n   - (3) Deficiency LT - Spread up to 12 months
\n   - (4) Deficiency GE - Take no action
\n   - (5) Deficiency GE - Spread up to 12 months
`)
escrowAnalysisRecordFields.set("analysisthrudate", ` 
\n### Analysis Through Date
\nThis field stores the date that the analysis is projected through. It determines the last month that is reflected in the Projections for Coming Year section of the member analysis statement, as well as in the three trial balances that are calculated as part of the analysis.
\nField Number         **002**
\nMnemonic             **ANALYSISTHRUDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31002**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen running an analysis, this date is entered at the Analysis Through Date prompt in the Escrow Reports batch program.
`)
escrowAnalysisRecordFields.set("currentpayment", ` 
\n### Current Escrow Payment Amount
\nThis field stores the current total escrow payment for the loan.
\nField Number         **007**
\nMnemonic             **CURRENTPAYMENT**
\nData Type            **Money**
\nSource               **System-entered (copied from Loan record)**
\nHelp File            **31007**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis value is copied from the Escrow Amount field in the Loan record as part of the escrow analysis. The field value should also equal the total of the Payment Portion fields in the Loan Escrow records under the Loan record unless all escrow types associated with the escrow analysis have the Adjust Payment Portion parameter in Escrow Type Parameters set to (0) No.
`)
escrowAnalysisRecordFields.set("currentbalance", ` 
\n### Current Escrow Balances
\nThis field contains the balance in the escrow share account that is identified in the Loan record Escrow ID field.
\nField Number         **008**
\nMnemonic             **CURRENTBALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31008**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
escrowAnalysisRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThe system stores the system date in this field when you create, change, or save this record if the change is made from this record.
\nField Number         **057**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **31057**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThere are times when the system updates the Record Change Date field because the record was saved, even though there may not be any actual changes in the record.
\n   - Important: The system does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
escrowAnalysisRecordFields.set("requirednewpayment", ` 
\n### Required New Escrow Payment
\nThis field reflects the calculated escrow payment amount before adding an amount to cover any shortage or deficiency. It represents the total estimated escrow disbursement divided by 12 months if the payments are payable monthly, and divided by 24 months if the payments are payable semi-monthly.
\nField Number         **017**
\nMnemonic             **REQUIREDNEWPAYMENT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31017**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
escrowAnalysisRecordFields.set("amtcovershortage", ` 
\n### Amt Added to Cover Shortage
\nThis field contains the amount added to the Required New Escrow Payment field to cover any shortage spread over the number of months specified in the Escrow Analysis parameters. This is the amount per escrow payment needed to cover the shortage.
\nField Number         **018**
\nMnemonic             **AMTCOVERSHORTAGE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31018**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
escrowAnalysisRecordFields.set("amtcoverdeficiency", ` 
\n### Amt Added to Cover Deficiency
\nThis field contains the amount added to the Required New Escrow Payment field to cover any deficiency spread over the number of months specified at the Escrow Analysis parameters. This is the amount per escrow payment needed to cover the deficiency.
\nField Number         **019**
\nMnemonic             **AMTCOVERDEFICIENCY**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31019**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
escrowAnalysisRecordFields.set("pmtreducedoverage", ` 
\n### Payment Reduced for Overage
\nWhen an overage does not meet the refund threshold, the amount of the overage is divided by 12 if the loan payments are monthly and divided by 24 if the loan payments are semi-monthly; the resulting value is stored in this field. This amount is used to reduce each escrow payment.
\nField Number         **013**
\nMnemonic             **PMTREDUCEDOVERAGE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31013**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
escrowAnalysisRecordFields.set("amtaddedrounding", ` 
\n### Amt Added for Rounding
\nThis is the amount added, if any, to round the entire loan payment (principal, interest, and escrow amount) to an even dollar amount.
\nField Number         **020**
\nMnemonic             **AMTADDEDROUNDING**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31020**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis value is calculated based on the setting of the New Payment Rounding parameter in Escrow Analysis parameters. This figure can be a positive or negative number depending on the setting of the parameter. All rounding is done on the escrow portion of the loan payment to make the total loan payment an even dollar amount. The principal and interest amount of a payment are not affected by this parameter.
`)
escrowAnalysisRecordFields.set("newescrowpayment", ` 
\n### New Escrow Payment 1 – New Escrow Payment 2
\nThe New Escrow Payment 1 field stores a history of escrow payment amount changes resulting from the latest escrow analysis run by selecting either (1) New Period Analysis Statements or (2) Replacement Analysis Statements at the Analysis Method prompt.
\nField Number         **021:1 – 021:2**
\nMnemonic             **NEWESCROWPAYMENT:1 – NEWESCROWPAYMENT:2**
\nData Type            **Money**
\nSource               **User-defined or System-calculated**
\nHelp File            **31021**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSome escrow analysis results require only one escrow payment change, while others might require two. If an analysis results in changing the escrow payment only once, the new payment amount is stored in the New Escrow Payment 1 field and the remaining payment field equals 0.00. Likewise, the New Escrow Payment Date 1 field shows the effective date of the new payment amount and the remaining date field is __/__/____.
\nThe Loan Payment (LP) transaction provides the following functionality:
\n   - Copies the New Escrow Payment 1 field value to the Loan record Escrow Amount field ionce the New Escrow Payment Date 1 field equals the Loan record Due Date field
\n   - Updates the Payment Portion fields in the Loan Escrow records so that the sum of these fields equals the Loan record Escrow Amount field and also equals the Escrow Analysis record New Escrow Payment 1 field
\n   - Updates the Loan record Payment field for the amount that the Escrow Amount field value changed
\nThe following example illustrates the functionality and timing of the changes:
\n   - Current loan payment is 1,200.00, which includes a Loan record Escrow Amount field value of 200.00
\n   - Loan record Due Date field value is 2/15/20
\n   - Escrow Analysis record New Escrow Payment Date 1 field value is 3/15/20
\n   - Escrow Analysis record New Escrow Payment 1 field value is 250.00
\n   - Escrow Analysis record Change in Escrow Payment field value is 50.00
\n   - On 2/16/20 the member makes the February loan payment of 1,200.00 and the payment is posted, which then advances the Due Date field to 3/15/20.
\n   - The system reads the New Escrow Payment Date 1 field in the Loan Escrow Analysis records comparing it against the new Due Date field value of 3/15/20 and determines that it is time to change the escrow payment amount.
\n   - The system updates the Escrow Amount in the Loan record with the 250.00 reflected in the New Escrow Payment 1 field in the Escrow Analysis record. The following new % comment is posted in transaction history:
\n   - %EscAmt 200.00 to 250.00 02/16/20
\n   - The system updates the Loan record Payment field based on the value in the Escrow Analysis record Change in Escrow Payment field. In this case, the Payment is increased 50.00 from 1,200.00 to 1,250.00. The following % comment is posted in transaction history:
\n   - %Payment 1,200.00 to 1,250.00 02/16/20
\n   - The system updates the Payment Portion field in the Loan Escrow records that were used in the analysis with the sum of these values equaling the New Escrow Payment 1 field value. For example, if there were two Loan Escrow records under the Loan record that were used in the last analysis, then the Payment Portion fields for those two records are updated by The system as noted below:
\n   - Escrow Type       Old Payment Portion     New Payment Portion
\n   - Hazard Insurance        80.00                  100.00
\n   - Property Taxes         120.00                  
\n   -                         150.00
\n   - Escrow Payment         200.00 (old)            250.00 (new)
\n
\n   - Important: The functionality and % comments described above apply whether the loan payment is posted as a teller transaction, through batch posting,audio response, SymConnect, or ATM online.
`)
escrowAnalysisRecordFields.set("newpaymentdate", ` 
\n### New Escrow Payment Date 1 – New Escrow Payment Date 2
\nThis field contains the date that the New Escrow Payment 1 field becomes effective. When running an analysis, you must respond to the Payment Effective Date prompt, which determines the value in this field.
\nField Number         **005:1 – 005:2**
\nMnemonic             **NEWPAYMENTDATE:1 – NEWPAYMENTDATE:2**
\nData Type            **Date**
\nSource               **User-defined or System-calculated**
\nHelp File            **31005**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe New Escrow Payment Date 1 field contains the date that the New Escrow Payment 1 field becomes effective. When running an analysis, you must respond to the Payment Effective Date prompt, which determines the New Escrow Payment Date 1.
\nIf a group of escrow accounts are analyzed at the same time, the value input at the Payment Effective Date prompt does not necessarily determine the exact New Escrow Payment Date 1 for each of these escrowed loans. The reason for this is that each loan could be payable on a different day of the month. If the exact date entered at the prompt was used as the New Escrow Payment Date 1 for each loan, then the effect would be to change the day of the month that all or some of the loans are due. Therefore, the functionality uses the date entered at the prompt to compare against each loan's due day to populate the New Escrow Payment Date 1 field with the correct date on a loan by loan basis. The following are examples of the functionality:
\n   - Date input at the Payment Effective Date prompt in the Escrow Reports batch program = 6/05/20
\n   - Loan	Loan Payable	New Escrow Payment Date 1
\n   - 1	Monthly – 1st day	7/01/20
\n   - 2	Monthly – 10th day	6/10/20
\n   - 3	Semi-monthly – 1st and 15th days	6/15/20
\n   - 4	Semi-monthly – 5th and 20th days	6/05/20
\nThe following example illustrates the changes the system makes when posting a loan payment based on the New Escrow Payment Date 1 field:
\n   - Copies the New Escrow Payment 1 value to the Escrow Amount field in the Loan record once the New Escrow Payment Date 1 equals the Due Date field in the Loan record
\n   - Updates the Payment Portion fields in the Loan Escrow records so that the sum of these fields equals the Escrow Amount in the Loan record and also equals the New Escrow Payment 1 field in the Escrow Analysis record
\n   - Updates the Payment field in the Loan record for the amount that the Escrow Amount field value changed
\nThe following example illustrates the functionality and timing of the changes:
\n   - Current Loan record Loan Payment field value is 1,200.00, which includes an Escrow Amount of 200.00 (Loan record)
\n   - Loan record Due Date field is 2/15/20
\n   - Escrow Analysis record New Escrow Payment Date 1 field is 3/15/20
\n   - Escrow Analysis record New Escrow Payment 1 field is 250.00
\n   - Escrow Analysis record Change in Escrow Payment field is 50.00
\n   - On 2/16/20, the member makes the February loan payment of $1,200.00 and the payment is posted, which advances the Due Date field to 3/15/20
\n   - The system reads the New Escrow Payment Date 1 field in the Loan Escrow Analysis records comparing it against the new Due Date field value of 3/15/20, and determines that it is time to change the escrow payment amount.
\n   - The system updates the Loan record Escrow Amount field with the 250.00 reflected in the Escrow Analysis record New Escrow Payment 1 field. The following new % comment is posted in transaction history:
\n   - %EscAmt 200.00 to 250.00 02/16/06
\n   - The system updates the Loan record Payment field based on the value in the Escrow Analysis record Change in Escrow Payment field. In this case, the payment is increased from 1,200.00to 1,250.00. The following % comment is posted in transaction history:
\n   - %Payment 1,200.00 to 1,250.00 02/16/20
\n   - The system updates the Payment Portion field in the Loan Escrow records that were used in the analysis with the sum of these values equaling the New Escrow Payment 1. For example, if there were two Loan Escrow records under the Loan record that were used in the last analysis, then the Payment Portion fields for those two records are updated by the system as noted below:
\n   - Escrow Type         Old Payment Portion     New Payment Portion
\n   - Hazard Insurance          80.00                  100.00
\n   - Property Taxes           120.00                  
\n   -                         150.00
\n   - Escrow Payment           200.00 (old)            250.00 (new)
\n
\n   - Important: The functionality and % comments described apply whether the loan payment is posted as a teller transaction, through batch posting, audio response, SymConnect, or ATM online.
`)
escrowAnalysisRecordFields.set("changeescrowpmt", ` 
\n### Change in Escrow Payment
\nThis field contains the net change in the escrow payment due to the latest escrow analysis.
\nField Number         **022**
\nMnemonic             **CHANGEESCROWPMT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31022**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is calculated by subtracting the Current Escrow Payment Amount field value from the New Escrow Payment 1 field. The value in this field only contains the net difference between the initial values in these two fields. Any additional escrow payment change due to a value in the New Escrow Payment 2 field does not affect this field.
`)
escrowAnalysisRecordFields.set("prevanalysisdate", ` 
\n### Prev Analysis Date
\nWhen an analysis is completed using the (1) New Period Analysis Statements option in the Escrow Reports batch program, the system takes the value from the Next Analysis Date field and moves it to this field.
\nField Number         **031**
\nMnemonic             **PREVANALYSISDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **31031**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen a short year analysis is performed using the (1) New Period Analysis Statements option in the Escrow Reports batch program, this field is updated with the system date.
`)
escrowAnalysisRecordFields.set("prevdateanalycalc", ` 
\n### Prev Date Analysis Calculated
\nThis field stores the date the previous escrow analysis was calculated.
\nField Number         **026**
\nMnemonic             **PREVDATEANALYCALC**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **31026**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the date in the Date Analysis Calculated field to this field and populates the Date Analysis Calculated field with the current system date.
`)
escrowAnalysisRecordFields.set("prevpaymentfreq", ` 
\n### Prev Payment Frequency
\nThis field contains the Payment Frequency field value copied from the Loan record at the time the previous escrow analysis was performed. When an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the payment frequency in the Current Payment Frequency field to this field.
\nField Number         **029**
\nMnemonic             **PREVPAYMENTFREQ**
\nData Type            **Code to 13**
\nSource               **System-calculated**
\nHelp File            **31029**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Single Pay
\n   The member is to repay the loan in a single payment.##### (1) Annual
\n   The member makes loan payments once a year.##### (2) Semiannual
\n   The member makes loan payments semiannually (twice per year).##### (3) Quarterly
\n   The member makes loan payments quarterly. For loans with the Interest Type field set to (1) Monthly 360 day, this field must be set to (3) Quarterly, (4) Monthly, or (5) Semimonthly.##### (4) Monthly
\n   The member makes loan payments monthly. For loans with the Interest Type field set to (1) Monthly 360 day, this field must be set to (3) Quarterly, (4) Monthly, or (5) Semimonthly.
\n   
\n       - For loans with the Interest Type field set to (3) Daily billed I, (4) Daily billed II, (6) Daily Billed 360, or (10-8999) Credit Card Interest this field must be set to (4) Monthly.
\n   
\n       - For loans with Schedule records, this field must be set to (4) Monthly.
\n##### (5) Semimonthly
\n   The member makes loan payments semimonthly (twice per month).
\n       - Important: If you select this option, you must also enter the dates in the Due Day 1 and Due Day 2 fields.
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
\n   The member makes loan payments every other month.
\n`)
escrowAnalysisRecordFields.set("prevdueday1", ` 
\n### Prev Due Day 1
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Current Due Day 1 field to this field.
\nField Number         **050**
\nMnemonic             **PREVDUEDAY1**
\nData Type            **Code to 31**
\nSource               **System-entered**
\nHelp File            **31050**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   No previous due day##### 1–31
\n   Previous due day 1 for the loan
\n`)
escrowAnalysisRecordFields.set("prevdueday2", ` 
\n### Prev Due Day 2
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Current Due Day 2 field to this field.
\nField Number         **051**
\nMnemonic             **PREVDUEDAY2**
\nData Type            **Code to 31**
\nSource               **System-entered**
\nHelp File            **31051**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   No previous due day##### 1–31
\n   Previous due day 2 for the loan
\n`)
escrowAnalysisRecordFields.set("prevpaymentduedate", ` 
\n### Prev Payment Due Date
\nThis field displays the next payment due date for the loan at the time the previous escrow analysis was performed.
\nField Number         **028**
\nMnemonic             **PREVPAYMENTDUEDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **31028**
\nDefault Control      **No**
\nDefault Value **Date**
`)
escrowAnalysisRecordFields.set("prevfcastbegstmtbl", ` 
\n### Prev Forecasted Beg Stmt Bal
\nThe value in this field is used as the Starting Balance in the Estimate of Activity trial balance that is created as part of the escrow analysis process. This trial balance is part of the member escrow analysis statement.
\nField Number         **034**
\nMnemonic             **PREVFCASTBEGSTMTBL**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31035**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Forecasted Beg Statement Bal field to this field.
`)
escrowAnalysisRecordFields.set("prevexpbegstmtbl", ` 
\n### Prev Expected Beg Stmt Bal
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Expected Beg Statement Bal field to this field.
\nField Number         **035**
\nMnemonic             **PREVEXPBEGSTMTBL**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31035**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe original value in the Expected Beg Statement Bal field is calculated during the analysis and is used as the Starting Balance in the Adjusted Trial Balance section. This trial balance is not part of the actual member escrow analysis statement. Its purpose is to help calculate whether the escrow account has a shortage, deficiency, or overage at the time of the analysis.
`)
escrowAnalysisRecordFields.set("prevshortage", ` 
\n### Prev Shortage
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Shortage field to this field.
\nField Number         **039**
\nMnemonic             **PREVSHORTAGE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31039**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe value in this field is calculated as follows:
\n   - Add: Expected Beg Statement Bal field
\n   - Less: Forecasted Beg Statement Bal field
\n   - If the net between the two values is a positive amount, a shortage exists and is displayed in the Shortage field. If the net between the two values is a negative amount, an overage exists that is stored in the Overage field in this record.
`)
escrowAnalysisRecordFields.set("prevdeficiency", ` 
\n### Prev Deficiency
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Deficiency field to this field.
\nField Number         **040**
\nMnemonic             **PREVDEFICIENCY**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31040**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nA deficiency exists when the Forecasted Beg Statement Bal field is a negative number. This number is also used in the escrow analysis as the Starting Balance in the Estimate of Activity trial balance.
`)
escrowAnalysisRecordFields.set("prevoverage", ` 
\n### Prev Overage
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Overage field to this field.
\nField Number         **036**
\nMnemonic             **PREVOVERAGE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31036**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe value in this field is calculated as follows:
\n   - Add: Expected Beg Statement Bal field
\n   - Less: Forecasted Beg Statement Bal field
\n
\nIf the net between the two values is a negative amount, an overage exists that is stored in the Overage field. If the net between the two values is a positive amount, a shortage exists and is stored in the Shortage field.
`)
escrowAnalysisRecordFields.set("prevoveragerefunded", ` 
\n### Prev Overage Refunded
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Overage Refunded field to this field.
\nField Number         **037**
\nMnemonic             **PREVOVERAGEREFUNDED**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31037**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
escrowAnalysisRecordFields.set("prevcushion", ` 
\n### Prev Cushion
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Cushion field to this field.
\nField Number         **041**
\nMnemonic             **PREVCUSHION**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31041**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Cushion field represents the amount of cushion that was used in the latest escrow analysis. It is a total of all required cushions for the Escrow Types used in the analysis of one escrow account.
`)
escrowAnalysisRecordFields.set("prevactionshortage", ` 
\n### Prev Action Taken for Shortage
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Action Taken for Shortage field to this field.
\nField Number         **048**
\nMnemonic             **PREVACTIONSHORTAGE**
\nData Type            **Code to 5**
\nSource               **System-calculated**
\nHelp File            **31048**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nData Type Descriptions:
\n   - (0) No shortage (default)
\n   - (1) Shortage LT - Take no action
\n   - (2) Shortage LT - Require repayment
\n   - (3) Shortage LT - Spread over 12 months or more
\n   - (4) Shortage GE - Take no action
\n   - (5) Shortage GE - Spread over 12 months or more
\n
\nBased on the Escrow Analysis parameter settings and the actual analysis of the escrow account, the Action Taken for Shortage field contains the code that links to verbiage describing the action taken by the credit union relating to the shortage.
`)
escrowAnalysisRecordFields.set("prevactiondefic", ` 
\n### Prev Action Taken Deficiency
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Action Taken for Deficiency field to this field.
\nField Number         **049**
\nMnemonic             **PREVACTIONDEFIC**
\nData Type            **Code to 5**
\nSource               **System-calculated**
\nHelp File            **31049**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nData Type Descriptions:
\n   - (0) No Deficiency (default)
\n   - (1) Deficiency LT - Take no action
\n   - (2) Deficiency LT - Require repayment
\n   - (3) Deficiency LT - Spread up to 12 months
\n   - (4) Deficiency GE - Take no action
\n   - (5) Deficiency GE - Spread up to 12 months
\n
\nBased on the Escrow Analysis parameter settings and the actual analysis of the escrow account, the Action Taken for Deficiency field contains the code that links to verbiage describing the action taken by the credit union relating to the deficiency.
`)
escrowAnalysisRecordFields.set("prevanalythrudate", ` 
\n### Prev Analysis Through Date
\nThis field stores the date the previous escrow analysis was calculated through.
\nField Number         **027**
\nMnemonic             **PREVANALYTHRUDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31027**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the date in the Analysis Through Date field to this field.
`)
escrowAnalysisRecordFields.set("prevpayment", ` 
\n### Prev Escrow Payment Amount
\nThis is the total escrow payment for the loan based on a previous escrow analysis. When an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Current Escrow Payment Amount field to this field.
\nField Number         **032**
\nMnemonic             **PREVPAYMENT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31032**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
escrowAnalysisRecordFields.set("prevbalance", ` 
\n### Prev Escrow Balances
\nThis field equals the balance in the escrow share account that is identified in the Loan record Escrow ID field at the time of a previous analysis.
\nField Number         **033**
\nMnemonic             **PREVBALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31033**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
escrowAnalysisRecordFields.set("prevrequiredpmt", ` 
\n### Prev Required Escrow Payment
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Required New Escrow Payment field to this field.
\nField Number         **042**
\nMnemonic             **PREVREQUIREDPMT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31042**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Required New Escrow Payment field reflects the calculated escrow payment amount before adding an amount to cover any shortage or deficiency. It represents the total estimated escrow disbursement divided by 12 months if the payments are payable monthly, and divided by 24 months if the payments are payable semi-monthly.
`)
escrowAnalysisRecordFields.set("prevamtcovershort", ` 
\n### Prev Amt Added to Cover Short
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Amt Added to Cover Shortage field to this field.
\nField Number         **043**
\nMnemonic             **PREVAMTCOVERSHORT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31043**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Amt Added to Cover Shortage field contains the amount added to the Required New Escrow Payment field to cover any shortage spread over the number of months specified in the Escrow Analysis parameters. This is the amount per escrow payment needed to cover the shortage.
`)
escrowAnalysisRecordFields.set("prevamtcoverdef", ` 
\n### Prev Amt Added to Cover Defic
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Amt Added to Cover Deficiency field to this field.
\nField Number         **044**
\nMnemonic             **PREVAMTCOVERDEF**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31044**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Amt Added to Cover Deficiency field contains the amount added to the Required New Escrow Payment field to cover any deficiency spread over the number of months specified in the Escrow Analysis parameters. This is the amount per escrow payment needed to cover the deficiency.
`)
escrowAnalysisRecordFields.set("prevpmtreducedover", ` 
\n### Prev Pmt Reduced for Overage
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Payment Reduced for Overage field to this field.
\nField Number         **038**
\nMnemonic             **PREVPMTREDUCEDOVER**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31038**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen an overage does not meet the refund threshold, the amount of the overage is divided by 12 for monthly pay loans and divided by 24 for semi-monthly pay loans with the resulting value stored in this field. This amount is used to reduce each escrow payment.
`)
escrowAnalysisRecordFields.set("prevamtaddedround", ` 
\n### Prev Amt Added for Rounding
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Amt Added for Rounding field to this field.
\nField Number         **045**
\nMnemonic             **PREVAMTADDEDROUND**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31045**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Amt Added for Rounding field represents the amount added, if any, to round the escrow payment to an even dollar amount. The value is calculated based on the setting of the New Payment Rounding parameter in Escrow Analysis parameters. This figure can be a positive or negative number depending on the setting of the parameter. All rounding is done on the escrow amount of the loan payment. The principal and interest amount of a payment are not affected by this parameter.
`)
escrowAnalysisRecordFields.set("prevnewescrowpmt", ` 
\n### Prev New Escrow Payment 1 - Prev New Escrow Payment 2
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the New Escrow Payment 1 field to the Prev New Escrow Payment 1 field. Likewise, the system moves the amount in the New Escrow Payment 2 field to the Prev New Escrow Payment 2 field.
\nField Number         **046:1-046:2**
\nMnemonic             **PREVNEWESCROWPMT:1 - PREVNEWESCROWPMT:2**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31046**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
escrowAnalysisRecordFields.set("prevnewpmtdate", ` 
\n### Prev New Escrow Pmt Date 1 - Prev New Escrow Pmt Date 2
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the New Escrow Payment Date 1 field to the Prev New Escrow Pmt Date 1 field. Likewise, the system moves the amount in the New Escrow Payment Date 2 field to the Prev New Escrow Pmt Date 2 field.
\nField Number         **030:1-030:2**
\nMnemonic             **PREVNEWPMTDATE:1 - PREVNEWPMTDATE:2**
\nData Type            **Date**
\nSource               **User-defined or System-calculated**
\nHelp File            **31030**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
escrowAnalysisRecordFields.set("prevchgescrowpmt", ` 
\n### Prev Change in Escrow Payment
\nWhen an analysis is completed using either the (1) New Period Analysis Statements or (2) Replacement Analysis Statements option in the Escrow Reports batch program, the system moves the value in the Change in Escrow Payment field to this field.
\nField Number         **047**
\nMnemonic             **PREVCHGESCROWPMT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31047**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Change in Escrow Payment field contains the net change in the escrow payment due to the latest escrow analysis. It is calculated by subtracting the Current Escrow Payment Amount field value from the New Escrow Payment 1 field. The value in this field only contains the net difference between the initial values in these two fields. Any additional escrow payment change due to a value in the New Escrow Payment 2 field does not affect this field.
`)
escrowAnalysisRecordFields.set("closingrequest", ` 
\n### Escrow Closing Request
\nThis field tracks the entity that requested to close the escrow account and to generate the Escrow Closing Notice.
\nField Number         **061**
\nMnemonic             **CLOSINGREQUEST**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31061**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not requested
\n   Indicates you do not want to generate an Escrow Closing Notice.##### (1) Member requested closing
\n   Indicates that the member requested to close an escrow account. The Escrow Closing Notice includes the reason for the escrow account closure.##### (2) Lender requested closing
\n   Indicates that the lender requested to close an escrow account. The Escrow Closing Notice includes the reason for the escrow account closure.
\n`)
escrowAnalysisRecordFields.set("remainopenoption", ` 
\n### Escrow Remain Open Option
\nThis field specifies whether the credit union offers members the option to keep their escrow account open.
\nField Number         **062**
\nMnemonic             **REMAINOPENOPTION**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31062**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   The credit union does not offer the members the option to keep their escrow account open.##### (1) Yes
\n   The credit union offers the members the option to keep their escrow account open.
\n`)
escrowAnalysisRecordFields.set("noticedate", ` 
\n### Escrow Notice Date
\nThis field stores the date when the Escrow Reports batch program generates the Escrow Closing Notice.
\nField Number         **063**
\nMnemonic             **NOTICEDATE**
\nData Type            **Date**
\nSource               **User-entered or System-generated**
\nHelp File            **31063**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen the system populates a date in this field, you cannot generate another Escrow Closing Notice unless you delete the date in this field.
`)
escrowAnalysisRecordFields.set("noticeclosingdate", ` 
\n### Escrow Notice Closing Date
\nThis field specifies the date that the credit union can close the escrow account.
\nField Number         **064**
\nMnemonic             **NOTICECLOSINGDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **31064**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
escrowAnalysisRecordFields.set("noticeclosingfee", ` 
\n### Escrow Notice Closing Fee
\nThis field stores the fee amount in the Escrow Closing Fee Amount prompt in the Escrow Reports batch program.
\nField Number         **065**
\nMnemonic             **NOTICECLOSINGFEE**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **31065**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
escrowAnalysisRecordFields.set("locator", ` 
\n### Locator
\nThe system stores a unique number within each member account in this field that can be used as a unique identification of this record.
\nField Number         **025**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **31024**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
