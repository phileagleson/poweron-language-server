export const segmentRecordFields = new Map<string, string>()
segmentRecordFields.set("id", ` 
\n### Segment ID
\nThis field stores the four-character ID that identifies the Segment record.
\nField Number         **001**
\nMnemonic             **ID**
\nData Type            **4 Characters**
\nSource               **User-entered**
\nHelp File            **31401**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou assign the segment ID when creating the Segment record. Once you assign a segment ID, that ID remains permanently associated with the segment and cannot be assigned to any other Segment record on the same loan. You cannot access this field for file maintenance.
\n
\nYou cannot create a segment with a Segment ID field of 0000. That designation is reserved for the LOC segment, which is included on the Loan record.
\n
\nThis segment ID must be numeric, not alphabetic.
`)
segmentRecordFields.set("description", ` 
\n### Description
\nThis field stores a description of the Segment record. You cannot create a Segment record without entering a description in this field. If you do not enter a description, the system displays an error message and does not let you save the Segment record until you have entered a description.
\nField Number         **002**
\nMnemonic             **DESCRIPTION**
\nData Type            **30 Characters**
\nSource               **User-entered**
\nHelp File            **31402**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
`)
segmentRecordFields.set("type", ` 
\n### Segment Type
\nThis field stores a credit union-defined code to identify the type of loan segment.
\nField Number         **003**
\nMnemonic             **TYPE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **31403**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf you want to use a four-digit code, contact Symitar Support.
`)
segmentRecordFields.set("opendate", ` 
\n### Open Date
\nThe system updates this field with the system date when the Segment record is created. Under normal circumstances, you should not revise this field.
\nField Number         **004**
\nMnemonic             **OPENDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **31404**
\nDefault Control      **No**
\nDefault Value **System date at creation**
`)
segmentRecordFields.set("closedate", ` 
\n### Close Date
\nThis field stores the date a segment is closed. The system updates this field with the effective date of any Loan Payment (LP) teller transaction that pays off a closed-end segment (all segments in the Segment records are closed-end).
\nField Number         **005**
\nMnemonic             **CLOSEDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **31405**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen a closed-end segment in a SymChoice loan is paid in full, the system automatically enters the segment Close Date field value. Once a segment has a value in the Close Date field, the system does not allow any further monetary transactions that affect the segment on or after that date.
\n
\nYou cannot enter a Close Date value if the Segment Balance field is not 0.00, or if there is an amount in the Interest Unpaid or Interest Unpaid Billed fields of the Segment record. If you attempt to enter a close date when the segment has a non-zero balance or unpaid interest, the system displays the following message:
\n
\nYou must use the Purge Account Processing batch program to delete a Segment record. Segment records will be deleted with their parent Loan records when the Loan record qualifies for deletion.
`)
segmentRecordFields.set("originaldate", ` 
\n### Original Date
\nThis field stores the date the segment was originally disbursed. The system updates this field with the effective date of the most recent Loan Segment Transfer (LG) teller transaction to the segment. Under normal circumstances, you should not revise this field.
\nField Number         **006**
\nMnemonic             **ORIGINALDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **31406**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe Rate Change Processing batch program or other batch programs select a group of segments by their segment loan type.
`)
segmentRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date in this field when you create, change, or save the Loan Segment record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **007**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **31407**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
segmentRecordFields.set("paymentorder", ` 
\n### Payment Order
\nThe field contains a number from 0-9999 to indicate the order in which this segment will be paid for a Loan Payment (LP) transaction.
\nField Number         **008**
\nMnemonic             **PAYMENTORDER**
\nData Type            **Code to 9999**
\nSource               **System-entered or User-entered**
\nHelp File            **31408**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nUsing this order, the system pays segment 0 first, then pays the segment 1 next, and continues in the assigned order. If there are two or more segments with the same segment payment order, the system pays them in the order they appear under the Loan record. This field is used only if the Combo Payment Order Method field in the Loan record is set to (0) Use Segment Payment Order; otherwise, the system ignores this field.
`)
segmentRecordFields.set("paymenttype", ` 
\n### Payment Type
\nThis field stores the payment type the system should use to calculate segment payments.
\nField Number         **009**
\nMnemonic             **PAYMENTTYPE**
\nData Type            **Code to 1**
\nSource               **System-entered or User-entered**
\nHelp File            **31409**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Level Payment
\n   This option indicates the system should calculate equal periodic segment payments. When this option is selected, the system does the following:
\n       - Calculates a payment schedule that pays off the segment in equal payments (principal + interest = the same amount each period)
\n       - Applies the standard payment amount first to the Interest Unpaid field amount, next to the Billed Fees Unpaid amount, and only then applies any remainder to the principal
\n   
\n       - The amount applied to the segment principal changes each period, since the amount of interest due each period depends on the segment balance and the number of days in the loan period. This is the normal option for most daily interest loans.
\n##### (1) Level Principal
\n   This option indicates the system should calculate segment payments so that the same amount is applied to the segment principal each period. When this option is selected, the system does the following:
\n       - Calculates a standard principal amount (Original Balance field value ÷ Payment Count field value) for each segment payment
\n       - Adds any unpaid interest to the payment amount
\n   
\n       - The total payment changes each period, since the amount of interest due each period depends on the segment balance and the number of days in the loan period. This option is often used for single payment loans, real estate loans, or interest-only payment loans (but not for daily billed interest-only loans).
\n
\nIf you pull this value from a loan calculation, the system updates this field with the value in the Payment Type field of the Loan Calc screen.
`)
segmentRecordFields.set("lastpaymentdate", ` 
\n### Last Payment Date
\nThis field stores the date of the last segment payment. The system updates this field with the effective date of each Loan Payment (LP) teller transaction posted to the segment.
\nField Number         **010**
\nMnemonic             **LASTPAYMENTDATE**
\nData Type            **Date**
\nSource               **System-calculated or User-entered**
\nHelp File            **31410**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nYou may have to adjust this field manually if you void or adjust a Loan Payment (LP) transaction.
`)
segmentRecordFields.set("balloondate", ` 
\n### Balloon Date
\nThis field contains the date a balloon segment payment comes due. Once the system date reaches this date, the system resets the Payment field to the remaining segment balance and resets the Payment Type field to (1) Level Principal.
\nField Number         **011**
\nMnemonic             **BALLOONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31411**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever a partial payment is made to a balloon payment segment after the balloon date, the Daily Posting batch program resets the Payment field value to the new segment balance. Whenever a segment is paid ahead beyond the balloon date, the Daily Posting batch program will not set the payment amount to the segment balance until one payment frequency before the balloon date.
\n
\nUsing PowerOn specfiles, you can generate notices based on the Balloon Date to notify members of upcoming due dates for balloon payments.
\n
\nIf you pull this value from a loan calculation, the system updates this field with the value in the Balloon Date field of the Loan Calc screen.
\n***Important:***  For an interest-only segment, the Balloon Date field value must be set to the date the segment is to be paid off.
`)
segmentRecordFields.set("maturitydate", ` 
\n### Maturity Date
\nThis field contains the date the segment will be paid off.
\nField Number         **012**
\nMnemonic             **MATURITYDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered (copied from Loan Calculation)**
\nHelp File            **31412**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis date must be less than or equal to the Maturity Date field in the Loan record. If the Maturity Date field in the Loan record is blank, there is no restriction on the value of this field.
\n
\nIf you pull this value from a loan calculation, the system updates this field with the value in the Maturity Date field of the Loan Calc screen.
`)
segmentRecordFields.set("interesttype", ` 
\n### Interest Type
\nThis field contains the interest type used to calculate the loan segment interest.
\nField Number         **013**
\nMnemonic             **INTERESTTYPE**
\nData Type            **Date**
\nSource               **System-calculated or User-entered**
\nHelp File            **31413**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Daily 365 Day Interest
\n   Calculates segment interest on a 365-day basis. The system calculates interest as follows:
\n       - Interest Rate ÷ 365 x Segment Balance x the number of days since the Interest Date.
\n##### (2) Daily 365.25 Day Interest
\n   Calculates segment interest on a 365.25-day basis. The system calculates interest as follows:
\n       - Interest Rate ÷ 365.25 x Segment Balance x the number of days since the Interest Date.
\n##### (3) Daily Billed Interest I
\n   Calculates segment interest on an interest-only loan. This interest type is valid only for interest-only loans. The system calculates interest as follows:
\n       - Interest Rate / 365 x Segment Balance x number of days since the Interest Date.
\n       - For segments with an Interest Type of (3) Daily Billed Interest I the following changes occur:
\n       - The system puts this amount of interest in the Int Unpaid Billed field.
\n       - The system places this interest amount, less any delinquent interest amount, in the Payment field.
\n       - The system adjusts the Payment Bucket fields accordingly.
\n       - The system subtracts any interest payments from the Int Unpaid Billed field, until it reaches 0.00 (zero), after which it applies any further payments to Billed Fee Unpaid and then to principal, even if there is additional accrued interest.
\n       - When the system date has reached the balloon date, Daily Posting automatically sets the segment's Interest Type field to (0) Daily 365 Day Interest, the Payment Type field to (1) Level Principal, and the Payment field to the segment balance. This causes the entire segment balance plus all accrued interest to become due and payable on the Balloon Date.
\n       - Important: Daily billed interest loans of this type must have the following fields set as specified:
\n       - The Interest Type field in the Segment record must be set to (3) Daily Billed Interest I.
\n       - The Payment Type field in the Segment record must be set to (0) Level Payment. This differs from other interest-only loans, which are set to (1) Level Principal.
\n       - The Payment Frequency field in the Loan record must be set to (4) Monthly.
\n       - The Due Date Advance Code field in the Loan record must be set to (0) Use Max Due Date Advance Period with the Max Due Date Advance Period set to 1.
\n       - The DQ Calculation Method field in the Loan record must be set to (1) Payment Buckets Are Calculated Monthly.
\n       - The Balloon Date field in the Segment record must be set to the date the loan is to be paid off. Since these loans are interest-only loans, there must be a balloon date.
\n       - The Due Date field for all daily billed loans must be the same
\n##### (4) Daily Billed Interest II
\n   Calculates interest-only loans.   Important: This interest type is functionally identical to (3) Daily Billed Interest I. It lets credit unions support daily billed interest loans with an alternate due date (for example, all Daily Billed Interest I loans can be due on the 15th of every month, and Daily Billed Interest II loans can all be due on the 20th). Each type has its own statement cutoff options.
\n`)
segmentRecordFields.set("interestrate", ` 
\n### Interest Rate
\nThis field contains the interest rate charged for the segment. If you pull this value from a loan calculation, the system updates this field with the value in the Interest Rate field of the Loan Calc screen.
\nField Number         **014**
\nMnemonic             **INTERESTRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered (copied from Loan Calculation)**
\nHelp File            **31414**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nThe interest rate must be less than or equal to the Interest Rate Maximum field value in the Segment record. The interest rate must be greater than or equal to the Interest Rate Minimum field value in the Segment record.
\n***Important:***  If the user changes the Interest Rate field in the segment, it may change the order in which the segments are paid, based on the Combo Payment Order Method field in the parent Loan record.
`)
segmentRecordFields.set("intytd", ` 
\n### Interest Paid YTD
\nThis field stores the total of all interest paid on the loan during the current year to date. Whenever a loan payment is posted to the segment, the system adds the interest amount to the value in this field.
\nField Number         **015**
\nMnemonic             **INTYTD**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31415**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system transfers the value in this field to the Interest Paid Last Year field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\nIf you perform file maintenance on this field, the system also updates the corresponding Interest Paid YTD field in the Loan record, which stores the total for all segments.
`)
segmentRecordFields.set("interestlastyear", ` 
\n### Interest Paid Last Year
\nThis field stores the total of all interest paid on the segment during the previous year. The first time you run the Close Day Processing batch program in a new calendar year, the system transfers the amount in the Interest Paid YTD field to this field.
\nField Number         **016**
\nMnemonic             **INTERESTLASTYEAR**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31416**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
\n
\nIf you perform file maintenance on this field, the system also updates the corresponding Interest Paid Last Year field in the Loan record, which stores the total for all the segments.
`)
segmentRecordFields.set("interestunpaid", ` 
\n### Interest Unpaid
\nThis field stores the amount of unpaid interest charged to the segment.
\nField Number         **017**
\nMnemonic             **INTERESTUNPAID**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31417**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever you post a Loan Payment (LP) transaction to a segment, the system does the following:
\n
\nThe system also updates this field in several other situations:
\n***Important:***  The Interest Unpaid field is not used for calculating payments for non-daily billed interest loans. However, any monetary change (like those described above) made to such a loan will also update this field.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\nIf you perform file maintenance on this field, the system also updates the corresponding Interest Unpaid field in the Loan record, which stores the total for all segments.
`)
segmentRecordFields.set("intunpaidbilled", ` 
\n### Int Unpaid Billed
\nThis field stores the total amount of unpaid interest billed daily to the segment.
\nField Number         **018**
\nMnemonic             **INTUNPAIDBILLED**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31418**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nDuring Statement Cutoff Processing, the system does the following:
\n***Important:***  Although this field is not used for payment calculations on non-daily billed interest loans, any monetary adjustment to interest for any interest type will update this field.
\n
\nIf you perform file maintenance on this field, the system also updates the corresponding Int Unpaid Billed field in the Loan record, which stores the total for all the segments.
`)
segmentRecordFields.set("interestrateindex", ` 
\n### Interest Rate Index
\nThe drop-down list for this field initially offers a value of (00) Fixed Rate. The other options in the list show the Description settings for each of the Interest Rate Index Parameters that has a Defined Code field set to (1) Defined Interest Rate Index.
\nBefore you can save a Segment record during segment creation or revision, set a value in this field. If you do not, the system sends an error message:
\n   - Interest Rate Index type is not available.
\nField Number         **019**
\nMnemonic             **INTERESTRATEINDEX**
\nData Type            **Code to 99**
\nSource               **System-entered or User-entered**
\nHelp File            **31419**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Fixed Rate
\n   Uses a fixed rate for interest calculations. The system uses the Interest Rate or the calculation defined in the Interest Type Definitions parameters to calculate the interest on the segment.##### 1–99
\n   Credit union-defined index code used for variable rate segments. You can use the rate index to specify the base rate and frequency of changes for variable rate segments.
\n   
\n       - These codes are for your information only. You cannot store the actual base rate in the Loan record. Instead, you specify the current base rate when you run the Rate Change Processing batch program using option (2) Select by Interest Rate Index for loans with the specified Interest Rate Index.
\nRate Change Processing then calculates the new interest rate for the segments as described below:
\n   - Adds the Interest Rate Margin field value to the base rate
\n   - Adds the Risk Rate field value
\n   - Subtracts the Discount Rate field value
\n   - If necessary, adjusts the calculated interest rate as follows:
\n   - If the calculated rate is less than the Interest Rate Minimum field value, the Interest Rate Minimum becomes the interest rate.
\n   - If the calculated rate is greater than the Interest Rate Maximum field value, the Interest Rate Maximum becomes the interest rate.
\n   - If the calculated rate is greater than the Periodic Cap Start Rate field value plus the Periodic Cap field value, the sum of the Periodic Cap Start Rate field value and the Periodic Cap field value becomes the interest rate.
\n   - Stores the resulting rate in the Interest Rate field in the Segment record
\n
\nFor example, if you specify an Interest Rate Margin field value of 3.500%, the system adds 3.5% to the base rate for the index to determine the Interest Rate amount.
`)
segmentRecordFields.set("interestratemarginsign", ` 
\n### Interest Rate Margin Sign
\nThis field specifies whether a segment interest rate is a specific percentage above or below the index rate. The value stored in this field affects the Rate Change Processing batch program if you change rates based on a segment's interest rate index.
\nField Number         **020**
\nMnemonic             **INTERESTRATEMARGINSIGN**
\nData Type            **Code to 1**
\nSource               **System-entered or User-entered**
\nHelp File            **31420**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Positive Margin
\n   Indicates the segment interest rate is a specific percentage above the index rate.##### (1) Negative Margin
\n   Indicates the segment interest rate is a specific percentage below the index rate.
\n`)
segmentRecordFields.set("interestratemargin", ` 
\n### Interest Rate Margin
\nThis field and the Interest Rate Index field work together to control how the system determines variable interest rates based on a credit union-defined index. This field contains the points to be added to the base rate in the rate index to determine the variable interest rate.
\nField Number         **021**
\nMnemonic             **INTERESTRATEMARGIN**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **31412**
\nDefault Control      **Yes**
\nDefault Value **0.000**
`)
segmentRecordFields.set("interestratemax", ` 
\n### Interest Rate Maximum
\nThis field contains the maximum interest rate that can be used for variable rate interest calculations.
\nField Number         **022**
\nMnemonic             **INTERESTRATEMAX**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **31422**
\nDefault Control      **Yes**
\nDefault Value **0.000**
`)
segmentRecordFields.set("interestratemin", ` 
\n### Interest Rate Minimum
\nThis field contains the minimum interest rate that can be used for variable rate interest calculations.
\nField Number         **023**
\nMnemonic             **INTERESTRATEMIN**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **31423**
\nDefault Control      **Yes**
\nDefault Value **0.000**
`)
segmentRecordFields.set("periodiccap", ` 
\n### Periodic Cap
\nThis field indicates whether this segment has a periodic cap, and if so, how much it is. This field affects variable rate segments only.
\nField Number         **024**
\nMnemonic             **PERIODICCAP**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **31424**
\nDefault Control      **Yes**
\nDefault Value **0.000**
`)
segmentRecordFields.set("periodicstartrate", ` 
\n### Periodic Cap Start Rate
\nThis field contains the interest rate as of the date in the Periodic Cap Start Date field.
\nField Number         **025**
\nMnemonic             **PERIODICSTARTRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-calculated**
\nHelp File            **31425**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nThe system maintains this field for segments with a periodic cap. Under normal circumstances, you should not perform file maintenance on this field.
\n
\nThe first time you run the Rate Change Processing batch program during the periodic cap period, the system updates this field with the interest rate before the change. If you run Rate Change Processing more than once during the periodic cap period for the segment, the system does not change the Periodic Cap Start Rate again.
\n***Important:***  See the Periodic Cap field in the Loan record for additional information.
`)
segmentRecordFields.set("periodicstartdate", ` 
\n### Periodic Cap Start Date
\nThis field stores the last anniversary date for the cap. The system maintains this field for loans with a periodic cap.
\nField Number         **026**
\nMnemonic             **PERIODICSTARTDATE**
\nData Type            **Date**
\nSource               **User-entered or System-calculated**
\nHelp File            **31426**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nUnder normal circumstances, you should not perform file maintenance on this field.
\n
\nWhen you run the Rate Change Processing batch program, the system updates this field with either the Original Date field value of the segment or the last anniversary of the Original Date. Rate Change Processing then checks this date to verify that the interest rate has not already increased (or decreased) by the specified Periodic Cap.
\n
\nFor example, if the Original Segment Date is 06/12/20, and you run Rate Change Processing on 10/12/21, the system changes the Periodic Cap Start Date to 06/12/21. If you run Rate Change Processing again on 01/15/22, the system does not increase the interest rate for the segment if the current rate is equal to the Periodic Cap Start Rate field value plus the Periodic Cap field value.
\n
\nSee Periodic Caps for more information.
`)
segmentRecordFields.set("periodicfrequency", ` 
\n### Periodic Cap Frequency
\nThis field stores the frequency associated with the Periodic Cap field.
\nField Number         **027**
\nMnemonic             **PERIODICFREQUENCY**
\nData Type            **Code to 3**
\nSource               **System-entered or User-entered**
\nHelp File            **31427**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Annual
\n   The periodic cap applies for one year.##### (1) Semi-Annual
\n   The periodic cap applies for six months.##### (2) Quarterly
\n   The periodic cap applies for three months.##### (3) Monthly
\n   The periodic cap applies for one month.
\n`)
segmentRecordFields.set("riskrate", ` 
\n### Risk Rate
\nThis value increases the margin rate when the Rate Change Processing batch program calculates the new interest rate for segments tied to an interest rate index.
\nField Number         **028**
\nMnemonic             **RISKRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **31428**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nThe system takes the new specified base rate, adds or subtracts the Margin Rate field value, adds the Risk Rate field value, and subtracts the Discount Rate amount to arrive at the new interest rate when you run Rate Change Processing for loans using option (2) Select by Interest Rate Index.
`)
segmentRecordFields.set("discountrate", ` 
\n### Discount Rate
\nThis value decreases the margin rate when the Rate Change Processing batch program calculates the new interest rate for non-credit card loans tied to an interest rate index.
\nField Number         **029**
\nMnemonic             **DISCOUNTRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **31429**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nThe system takes the new specified base rate, adds or subtracts the Margin Rate field value, adds the Risk Rate field value, and subtracts the Discount Rate amount to arrive at the new interest rate when you run Rate Change Processing for loans using option (2) Select by Interest Rate Index.
`)
segmentRecordFields.set("firstpaymentdate", ` 
\n### First Payment Date
\nThis field contains the first scheduled payment date for a segment.
\nField Number         **030**
\nMnemonic             **FIRSTPAYMENTDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **31430**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system sets this field to the same value as the Due Date field when the segment is created.
\n
\nWhen a Segment record is created, the system defaults the segment Due Date field value to either the same value as the loan Due Date or the next due date. How the system determines the date to use depends on your selection at the New Segment Cutoff Option field in the Loan record.
\n
\nYou cannot make changes to this field once the segment is disbursed.
`)
segmentRecordFields.set("schdratechangedate", ` 
\n### Schd Rate Change Date
\nThis field contains the date a future rate change has been scheduled for this segment. See the Future Loan Rate Changes topic for more information.
\nField Number         **031**
\nMnemonic             **SCHDRATECHANGEDATE**
\nData Type            **Date**
\nSource               **System-calculated or User-entered**
\nHelp File            **31431**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  You should perform file maintenance on this field and the Schd Rate, Schd Cap Start Date, and Schd Cap Start Rate fields only to cancel a future scheduled rate change. We recommend that you do not perform file maintenance on this field for any other reason.
`)
segmentRecordFields.set("schdrate", ` 
\n### Schd Rate
\nThis field contains the value of the rate to be used when a scheduled future rate change is implemented. See the Future Loan Rate Changes topic for more information.
\nField Number         **032**
\nMnemonic             **SCHDRATE**
\nData Type            **Rate**
\nSource               **System-calculated or User-entered**
\nHelp File            **31432**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\n***Important:***  You should perform file maintenance on this field and the Schd Rate Change Date, Schd Cap Start Date, and Schd Cap Start Rate fields only to cancel a future scheduled rate change. We recommend that you do not perform file maintenance on this field for any other reason.
`)
segmentRecordFields.set("schdperiodstartrate", ` 
\n### Schd Cap Start Rate
\nThis field contains the value from the Periodic Cap Start Rate field to be used when a scheduled future rate change is implemented. See Future Loan Rate Changes for more information.
\nField Number         **033**
\nMnemonic             **SCHDPERIODSTARTRATE**
\nData Type            **Rate**
\nSource               **System-calculated or User-entered**
\nHelp File            **31433**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\n***Important:***  You should perform file maintenance on this field and the Schd Rate Change Date, Schd Rate, and Schd Cap Start Rate fields only to cancel a future scheduled rate change. We recommend that you do not perform file maintenance on this field for any other reason.
`)
segmentRecordFields.set("schdperiodstartdate", ` 
\n### Schd Cap Start Date
\nThis field contains the value from the Periodic Cap Start Date field, which the system uses as a starting point for determining when to implement a scheduled future rate change. See Future Loan Rate Changes for more information.
\nField Number         **034**
\nMnemonic             **SCHDPERIODSTARTDATE**
\nData Type            **Date**
\nSource               **System-calculated or User-entered**
\nHelp File            **31434**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  You should perform file maintenance on this field and the Schd Rate Change Date, Schd Rate, and Schd Cap Start Rate fields only to cancel a future scheduled rate change. We recommend that you do not perform file maintenance on this field for any other reason.
`)
segmentRecordFields.set("balance", ` 
\n### Segment Balance
\nThis field stores the current principal balance of the segment. The system updates this field with the current principal balance whenever a Loan Payment (LP), New Loan (LN), Loan Addon (LA), or Loan Segment Transfer (LG) teller transaction affects the loan.
\nField Number         **035**
\nMnemonic             **BALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31435**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Loan Balance field for a loan is equal to the sum of the Segment Balances field values for all segments in that loan. You cannot access this field for file maintenance.
`)
segmentRecordFields.set("originalbalance", ` 
\n### Original Balance
\nThis field stores the original balance of the segment or the balance after a balance transfer to the segment.
\nField Number         **036**
\nMnemonic             **ORIGINALBALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31436**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system updates this field with the new Segment Balance field value whenever the balance changes because a Loan Segment Transfer (LG) teller transaction brings the segment balance above the balance currently in this field. Under normal circumstances, you should not revise this field.
\n
\nThe system updates this field with the Loan Amount field value from the specified Application Segment record when pulling from the Application record and from the specified projection when pulling from the Loan Calc screen.
`)
segmentRecordFields.set("balloonamount", ` 
\n### Balloon Amount
\nThis field contains the balloon amount for a loan segment.
\nField Number         **037**
\nMnemonic             **BALLOONAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31437**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUse this field when you want to calculate a loan segment to make the final payment (including principal and interest) equal a specified amount. For example, if you want to calculate the payment on a $10,000 loan so that the final balloon payment, due in 36 months, is $5,000, simply enter $5,000 in this field.
\n
\nIf you specify (2) Calculate Loan Term for the calculation type on the Loan Calc screen, the system ignores the value in this field.
\n
\nIf you pull this value from a loan calculation, the system updates this field with the value in the Balloon Amount field of the Loan Calc screen.
`)
segmentRecordFields.set("payment", ` 
\n### Payment
\nThis field stores the amount of the standard segment payment.
\nField Number         **038**
\nMnemonic             **PAYMENT**
\nData Type            **Money**
\nSource               **User-entered or System-entered (Copied from Loan Calculation)**
\nHelp File            **31438**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nYou can update this field manually, or the system can calculate the segment payment amount based on the Loan Code field value in the Loan record, the Payment Type and Balloon Date fields in the Segment record, and the parameters set with the Payment Calculation Types parameters.
\n
\nThe system adjusts the Payment field in the Loan record any time the user updates the Payment fields in the associated Segment records.
\n
\nIf the system computes the payment, it assumes the payment is monthly unless you specify otherwise with the Payment Frequency Adjustment parameter in the Payment Calculation Types parameters. You can use this parameter to change the computed monthly payment to match the Payment Frequency field in the Loan record.
\n
\nYou can compute the payment amount using Projections, or by running the Rate Change Processing batch program. For more information on how the payment type affects the segment payment, see the Payment Type field.
`)
segmentRecordFields.set("partialpayment", ` 
\n### Partial Payment
\nThis field contains the partial payment amount that applies to the segment.
\nField Number         **039**
\nMnemonic             **PARTIALPAYMENT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **31439**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is calculated in the same way as the Partial Payment field in the Loan record, except that it applies only to this segment. The Loan record's Partial Payment field is the total of all the Segment records associated with the loan.
\n
\nThe Partial Payment field in the Segment record can contain the entire payment due amount for the segment if the entire segment amount due has been paid, but the payment did not cover all the segments in the loan. The field is not cleared (to 0.00) until the loan payment is made in full, resulting in advancing the due date for the loan.
\n
\nWhen you perform a single segment transaction on a delinquent loan, the Partial Payment field in the Segment record can contain several payment amounts, up to the maximum loan due date at time of transaction. As the loan due date advances, the system reduces the payment amount portion for the segment from the Partial Payment field.
\n
\nIf you perform file maintenance on this field, the system also updates the corresponding Partial Payment field in the Loan record, which stores the total for all the segments.
\nFor non-SymChoice loans, any time a payment is posted to a loan, the system also posts a comment providing the partial payment field value before and after the associated loan payment:
\n   - % PartialPmt xxx.xx to xxx.xx
\n   - The % comment prints if either the previous or current partial payment amount is not equal to $0.00.
\n
\nFor SymChoice loans, the comments are posted per segment record such as:
\n***Important:***  If the loan Due Date field value is equal to the Max Loan Due Date Loan field, the Partial Payment field is set to $0.00.
\n
\nThese comments are suppressed on receipts and statements, but display and print in member history and online banking.
\n
\nThe % comments are used to automatically repopulate the Partial Payment field when a payment is voided. If you do a payment adjustment, you can use this field to update the Partial Payment field manually.
`)
segmentRecordFields.set("pmtbucketamount", ` 
\n### Pmt Bucket Amt 1 - Pmt Bucket Amt 8
\nThe eight Pmt Bucket Amt fields store a history of payment amounts for the segment, each due on the effective date specified in the corresponding Pmt Bucket Due Date field in the Loan record. The system stores payment amounts in reverse chronological order, with the most recent payment in the Pmt Bucket Amt 1 field and the oldest payment in the Pmt Bucket Amt 8 field.
\nField Number         **040:1–040:8**
\nMnemonic             **PMTBUCKETAMOUNT:1 – PMTBUCKETAMOUNT:8**
\nData Type            **Money**
\nSource               **User-entered or System-calculated**
\nHelp File            **31440**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nAny time a new payment bucket is created for any segment, the system also creates a corresponding payment bucket for every segment associated with the loan. In this way, the payment buckets for all segments (and the loan) are kept in sync with the bucket dates and with each other.
\n
\nIf you update any of these fields, the system also updates the corresponding Pmt Bucket Amt 1–8 fields in the Loan record, which store the totals for all the segments.
\n
\nSee Pmt Bucket Amt 1 in the Loan record for more information on these fields.
`)
segmentRecordFields.set("variablerateindicator", ` 
\n### Variable Rate Indicator
\nThis field stores a code to identify variable rate loans with an Interest Typefield value of 0–9 in the interest rate calculation box on member statements.
\nField Number         **041**
\nMnemonic             **VARIABLERATEINDICATOR**
\nData Type            **Code to 1**
\nSource               **User-entered or System-entered**
\nHelp File            **31146**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Fixed Rate
\n   Indicates the segment has a fixed rate##### (1) Variable Rate
\n   Indicates the segment has a variable rate
\nFor loans with an Interest Type of 10-8999, this field is overridden by the Variable Rate Indicator parameter in the Interest Type Parameters.
`)
segmentRecordFields.set("beginningcycledate", ` 
\n### Beginning Cycle Date
\nThis field is updated by the Statement Cutoff or Daily Posting batch program and contains the beginning cycle date for the current payment period due.
\nField Number         **051**
\nMnemonic             **BEGINNINGCYCLEDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **31451**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
segmentRecordFields.set("paymentdue", ` 
\n### Payment Due
\nThis field, used for inquiries only, contains the system-calculated payment due on the segment (including past due amounts) at the time of the inquiry.
\nField Number         **800**
\nMnemonic             **PAYMENTDUE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
segmentRecordFields.set("payoffamount", ` 
\n### Payoff Amount
\nThis field, used for inquiries only, contains the system-calculated current segment payoff amount at the time of the inquiry.
\nField Number         **801**
\nMnemonic             **PAYOFFAMOUNT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **N/A**
\n
\n***Important:***  For SymConnect, audio response, home banking, and kiosk applications only, the system calculates this amount using the effective date of the on host program instead of the current business date. The effective date is the earlier of the current business date or the actual operating system date.
`)
