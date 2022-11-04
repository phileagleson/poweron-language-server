export const scheduleRecordFields = new Map<string, string>()
scheduleRecordFields.set("id", ` 
\n### Schedule ID
\nThe system uses this field to keep the Schedule records in order visually. The order of the Schedule records imported into the Loan record is actually based on the Beginning Date field.
\nField Number         **001**
\nMnemonic             **ID**
\nData Type            **2 Characters**
\nSource               **System-calculated or User-entered**
\nHelp File            **31301**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n***Important:***  You are prompted for this value when a Schedule record is first created and it cannot be changed after the record is saved.
`)
scheduleRecordFields.set("beginningdate", ` 
\n### Beginning Date
\nThis field stores the date when this particular Schedule record becomes effective.
\nField Number         **002**
\nMnemonic             **BEGINNINGDATE**
\nData Type            **Date**
\nSource               **System-calculated or User-entered**
\nHelp File            **31302**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
scheduleRecordFields.set("expiration", ` 
\n### Expiration Date
\nThis field stores the date when this particular Schedule record should expire.
\nField Number         **003**
\nMnemonic             **EXPIRATION**
\nData Type            **Date**
\nSource               **System-calculated or User-entered**
\nHelp File            **31303**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  You must enter an expiration date for each Schedule record except for the last one associated with the Loan record.
`)
scheduleRecordFields.set("paymentcalctype", ` 
\n### Payment Calc Type
\nThis field is used to determine the calculation method for the loan. This replaces the Payment Calc Type field in the Loan or Application record when this schedule is activated.
\nImportant: This field requires an entry.
\nThis field is used to determine the calculation method for the loan. This replaces the Payment Calc Type field in the Loan or Application record when this schedule is activated.
\n   - Important: This field requires an entry.
\nField Number         **004**
\nMnemonic             **PAYMENTCALCTYPE**
\nData Type            **Code to 9999**
\nSource               **System-calculated or User-entered**
\nHelp File            **31304**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No Change
\n   This selection indicates that the following circumstances are true:
\n       - The loan's Interest Type field is set to (1) Monthly 360 day.
\n       - The loan is an interest-only loan (the Interest Type field is set to 3, 4, or 6).
\n       - When you set the Schedule record's Use Rate Processing field to Yes, you cannot set the Payment Calc Type field to any value besides (0) No Change. If you do, when you save the record, the system displays the following error message:
\n       - Rate change processing cannot be used with the Payment Calc Type
\n   
\n       - While the selection is valid, this field is generally not used for credit card loan types.
\n##### 0001-8999
\n   Specify a credit union-defined payment calculation type if the system should calculate loan payments using the parameters defined for that payment calculation type with the Payment Calculation Types parameters in the Parameter Manager.##### 9000-9999
\n   Reserved for future system-defined use.
\n`)
scheduleRecordFields.set("payment", ` 
\n### Payment
\nWhen you set the Schedule record's Use Rate Change Processing field to Yes, this field is updated with the calculated payment amount from the Rate Change Processing batch program. In this case, the system does not update the Loan record Pmt Bucket Amt 1 field or the Loan record Pmt Bucket Due Date 1 field.
\nImportant: This field requires an entry.
\nWhen you set the Schedule record's Use Rate Change Processing field to Yes, this field is updated with the calculated payment amount from the Rate Change Processing batch program. In this case, the system does not update the Loan record Pmt Bucket Amt 1 field or the Loan record Pmt Bucket Due Date 1 field.
\n   - Important: This field requires an entry.
\nField Number         **005**
\nMnemonic             **PAYMENT**
\nData Type            **Money**
\nSource               **User-entered, System-entered (Copied from Application Record), or System-entered (Copied from Loan Calculation)**
\nHelp File            **31305**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nAn entry in this field is required.
\n
\nWhen you set the Schedule record's Use Rate Change Processing field to Yes, the system updates the Payment field value with the calculated payment amount from the Rate Change Processing batch program. In this case, the system does not update the Loan record Pmt Bucket Amt 1 field or the Loan record Pmt Bucket Due Date 1 field.
`)
scheduleRecordFields.set("paymenttype", ` 
\n### Payment Type
\nThis field stores the method for calculating the payment. This replaces the Payment Type field in the Loan or Application record when this schedule is activated.
\nImportant: This field requires an entry.
\nThis field stores the method for calculating the payment. This replaces the Payment Type field in the Loan or Application record when this schedule is activated.
\n   - Important: This field requires an entry.
\nField Number         **006**
\nMnemonic             **PAYMENTTYPE**
\nData Type            **Code to 1**
\nSource               **System-calculated or System-entered (Copied from Loan Calculation)**
\nHelp File            **31306**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Level Payment
\n   This value indicates that the system should calculate equal periodic loan payments.
\n   
\n       - The amount applied to the loan principal changes each period, since the amount of interest due each period depends on the loan balance and the number of days in the loan period. This is the normal option for most daily interest loans.
\n   
\n       - When you set the Rate Change record's Payment Change Date field to Yes, you can only use the (0) Level Payment option in this field. If you select any other option, when you save the record the system sends the following error message:
\n       - Rate Change record's <parmname>Payment Change Date</parmname>  cannot be used with the Payment Type
\n   
\n       - You should select (0) Level Payment for daily billed interest-only loans. Daily billed interest is used for loans where the amount of interest due at the time of statement cutoff is billed to the member.
\n##### (1) Level Principal
\n   This value indicates that the system should calculate loan payments so that the same amount is applied to the loan principal each period.
\n   
\n       - The total payment changes each period, since the amount of interest due each period depends on the loan balance and the number of days in the loan period. This option is often used for single payment loans, real estate loans, or interest-only payment loans (but not for daily billed interest-only loans).
`)
scheduleRecordFields.set("paymentdescription", ` 
\n### Payment Description
\nThis field stores the payment description of the combination of fields that make the loan either Principal and Interest, Interest Only, Calculated or No Payment (this is used if the payments within this schedule should be skipped). This field is not used for any calculations.
\nField Number         **800**
\nMnemonic             **PAYMENTDESCRIPTION**
\nData Type            **30 Characters**
\nSource               **System-calculated**
\nHelp File            **31340**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system creates the following descriptions and you cannot perform file maintenance on this field:
`)
scheduleRecordFields.set("useratechangeprocessing", ` 
\n### Use Rate Change Processing?
\nWhen you run the Rate Change Processing batch program, the value in this field determines whether the system updates the Payment field value for this Schedule record.
\nField Number         **023**
\nMnemonic             **USERATECHANGEPROCESSING**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31323**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   The system ignores the Schedule record when you run the Rate Change Processing batch program. (If the Schedule record's Beginning Date field matches the Loan record's Payment Change Date field, the batch program does refer to the Schedule record despite the No selection.)##### (1) Yes
\n   The system updates the Payment field of the Schedule record with the reamortized payment amount that it calculates for the loan's Adjusted Rate field.   Under certain conditions, you cannot select (1) Yes:
\n       - If you set the Interest Type field in the Schedule record to:
\n       - (3) Daily billed I
\n       - (4) Daily billed II
\n       - (6) Daily Billed 360
\n       - If you select one of those three options for the Interest Type field, the system displays an error message:
\n       - Rate change processing cannot be used with the Interest Type
\n       - If you set the Payment Calc Type field in the Schedule record to any value other than 0000 No Change
\n       - If you select any other option, the system displays this error message:
\n       - Rate change processing cannot be used with the Payment Calc type.
\n       - If you set the Payment Type field in the Schedule record to any value other than (0) Level payment
\n       - If you select any other option, the system displays this error message:
\n       - Rate change processing cannot be used with the Payment Type
\nFor the update to take place, use these values in the Rate Change Processing batch program:
\n   - For the Selection prompt: (5) Select by Next Rate Change Date
\n   - For the Perform Rate Change? prompt: Yes
\n   - For the Perform Payment Reamortization? prompt: Yes
`)
scheduleRecordFields.set("repeatcode", ` 
\n### Repeat Code
\nThis field stores the code indicating how often you want the system to import the Schedule record.
\nField Number         **009**
\nMnemonic             **REPEATCODE**
\nData Type            **Code to 14**
\nSource               **System-calculated or User-entered**
\nHelp File            **31309**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nData Type Descriptions:
\n   - (0) None
\n   - (1) Annual
\n   - (2) Semiannual
\n   - (3) Quarterly
\n   - (4) Monthly
\n   - (5-12) Not used
\n   - (13) Bimonthly
\n   - (14) Not used
\n
\nThe system updates the Beginning Date field as often as you specify with the Repeat Code field. The system continues to update the Beginning Date until the Beginning Date field matches the loan's current Due Date field. At that point, the Schedule record expires.
\nFor example, set these Schedule record fields as follows:
\n   - Beginning Date: 02/01/20
\n   - Repeat Code: (2) Semiannual
\n   - Expiration Date: 02/01/21
\n
\nThe system then imports the Schedule record on 02/01/20, 08/01/20, and 02/01/21.
\n
\nThe system continues to use the last Schedule record found throughout the remaining term of a loan, independent of the setting of the Repeat Code field.
`)
scheduleRecordFields.set("dqcalculationmethod", ` 
\n### DQ Calculation Method
\nThis field stores the method used to calculate delinquency for interest-only Schedule records. This replaces the DQ Calculation Method field in the Loan or Application record when this schedule is activated.
\nImportant: This field requires an entry.
\nThis field stores the method used to calculate delinquency for interest-only Schedule records. This replaces the DQ Calculation Method field in the Loan or Application record when this schedule is activated.
\n   - Important: This field requires an entry.
\nField Number         **007**
\nMnemonic             **DQCALCULATIONMETHOD**
\nData Type            **Code to 1**
\nSource               **System-calculated or User-entered**
\nHelp File            **31307**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Payment Buckets Only Contain Changes
\n   Indicates that the system should not calculate the values for the payment buckets each month. For closed and open-end loans with a fixed payment amount, the system does not use the payment buckets.##### (1) Payment Buckets Are Calculated Monthly
\n   Indicates that the system should calculate the values for the payment buckets each month. The system updates each Pmt Bucket Amt field and Pmt Bucket Due Date field on a monthly basis, regardless of whether the payment amount changes.
\n       - This delinquency method can also be used for interest-only loans with the following characteristics:
\n       - Payment Type must be (1) Level Principal
\n       - Payment must be 0.00 (for interest-only payments)
\n       - Due Date Advance Code must be (0) Use Max Due Date Advance Period
\n       - Max Due Date Advance Period must be 1
\n       - Initial BCD Setting Option must be (1) Use Loan Due Date (One when due)
\n       - Due Day 1 must be completed to enable the system to calculate the scheduled due dates
\n       - Payment Method must be (2) Auto transfer with a corresponding Loan Transfer record
\n       - Payment Calc Type must be (0) No Change
\n       - The monthly Payment amount is calculated by the Daily Posting batch program
\n       - Always use the (1) Payment Buckets Are Calculated Monthly option for all loans with an Interest Type of (3) Daily Billed Interest I, (4) Daily Billed Interest II, or (6) Daily Billed 360 Interest.
\n       - Balloon Date must be set to the date the loan is to be paid off. Since these loans are interest-only loans, there must be a balloon date.
`)
scheduleRecordFields.set("interesttype", ` 
\n### Interest Type
\nThis field stores the method for calculating loan interest that can be different for each Schedule record. This replaces the Interest Type field in the Loan or Application record when this schedule is activated.
\nImportant: This field requires an entry.
\nThis field stores the method for calculating loan interest that can be different for each Schedule record. This replaces the Interest Type field in the Loan or Application record when this schedule is activated.
\n   - Important: This field requires an entry.
\nField Number         **008**
\nMnemonic             **INTERESTTYPE**
\nData Type            **Code to 6**
\nSource               **System-calculated or User-entered**
\nHelp File            **31308**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Daily 365 day
\n   Calculates loan interest on a 365-day basis##### (1) Monthly 360 day
\n   Calculates loan interest on a 360-day basis. This option is normally used for real estate loans and is designed so that the payment schedule is known to the penny from the date the loan is funded.
\n       - Important: 360-day interest loans of this type must have the following loan fields set as specified:
\n       - Interest Type must be set to (1) Monthly 360 day.
\n       - Payment Frequency must be set to (1) Annual, (2) Semi-annual, (3) Quarterly, (4) Monthly or (5) Semi-monthly.
\n       - Payment Skips must be set to 0.
\n       - Due Day 1 (and Due Day 2, if semimonthly) must be filled in.
\n       - Due Date Advance Code must be set to one of the following:
\n       - (0) Use Max Due Date Advance Period with the Max Due Date Advance Period set to 1.
\n       - (0) Use Max Due Date Advance Period with the Max Due Date Advance Period set to 1 and the Initial BCD Setting Options set to (1) Use Loan Due Date (One when due).
\n       - New Loan Due Date Code should be set to 0.
\n       - Loan Code should be set to (0) Closed End.
\n       - Payment Calc Type must be set to (0) No Change.
\n       - DQ Calculation Method must be set to (0) Payment Buckets Only Contain Changes.
\n##### (2) Daily 365.25 day
\n   Calculates loan interest on a 365.25-day basis. This option is normally used for student loans.
\n       - You cannot select options 3, 4, or 6 when you set the Schedule record's Use Rate Change Processing field to Yes. If you do, when you save the record, the system sends the following error message:
\n       - Rate change processing cannot be used with the Interest Type
\n##### (3) Daily billed I
\n   Daily billed loan interest, type 1. This interest type is valid only for interest-only loans.
\n       - Important: Daily billed interest loans of this type must have the following loan fields set as specified:
\n       - Interest Type must be set to (3) Daily billed I.
\n       - Payment Type must be set to (0) Level Payment. This differs from other interest-only loans, which are set to (1) Level Principal.
\n       - Payment Frequency must be set to (4) Monthly.
\n       - Due Date Advance Code must be set to (0) Use Max Due Date Advance Period with the Max Due Date Advance Period set to 1.
\n       - DQ Calculation Method must be set to (1) Payment Buckets Are Calculated Monthly.
\n       - Balloon Date must be set to the date the loan is to be paid off. Since these loans are interest-only loans, there must be a balloon date.
\n       - The Due Date for all daily billed loans must be the same.
\n##### (4) Daily billed II
\n   Daily billed loan interest, type 2. This interest type is valid only for interest-only loans.
\n       - Important: Daily billed interest loans of this type must have the following loan fields set as specified:
\n   Interest Type must be set to (4) Daily billed II.
\n       - Payment Type must be set to (0) Level Payment. This differs from other interest-only loans, which are set to (1) Level Principal.
\n       - Payment Frequency must be set to (4) Monthly.
\n       - Due Date Advance Code must be set to (1) Overlimit payment use 'Max Due Date Advance Period' else use 'One when due'.
\n       - DQ Calculation Method must be set to (1) Payment Buckets Are Calculated Monthly.
\n       - Balloon Date must be set to the date the loan is to be paid off. Since these loans are interest-only loans, there must be a balloon sate.
\n       - The Due Date for all daily billed loans must be the same.
\n##### (5) Actual/360
\n   Calculates daily interest on a 360-day basis##### (6) Daily Billed 360
\n   Daily billed interest type; valid only for interest-only loans. Use this interest type for loans where you bill to the member the amount of interest due at the time of statement cutoff.
\n       - Important: Daily billed interest loans of this type must have the following loan fields set as specified:
\n       - Interest Type must be set to (6) Daily Billed 360.
\n       - Payment Type must be set to (0) Level Payment. This differs from other interest-only loans, which are set to (1) Level Principal.
\n       - Payment Frequency must be set to (4) Monthly.
\n       - Due Date Advance Code must be set to (1) Overlimit payment use 'Max Due Date Advance Period' else use 'One when due'.
\n       - DQ Calculation Method must be set to (1) Payment Buckets Are Calculated Monthly.
\n       - Balloon Date must be set to the date the loan is to be paid off. Since these loans are interest-only loans, there must be a balloon date.
\n       - Due Date for all daily billed loans must be the same.
`)
scheduleRecordFields.set("dueday1", ` 
\n### Due Day 1
\nThis stores the day of the month (1–31) on which the first payment is due for semimonthly loans, or the day of the month on which all loan payments are due for annual, semiannual, quarterly, or monthly loans.
\nField Number         **010**
\nMnemonic             **DUEDAY1**
\nData Type            **Code to 31**
\nSource               **User-defined, System-entered (Copied from Application record), or System-entered (Copied from Loan Calculation)**
\nHelp File            **31310**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf the Payment Frequency field is set to (5) Semimonthly, use a value from 1–30 to store the day of the month the first payment is due for semi-monthly loans.
\n***Important:***  This field cannot be updated in the Schedule record. The Due Day 1 field must be set in the Loan record.
`)
scheduleRecordFields.set("dueday2", ` 
\n### Due Day 2
\nThis stores the day of the month (2–31) on which the second payment is due for semimonthly payment loans. This field is not used for annual, semiannual, quarterly, monthly, or biweekly loans.
\nField Number         **011**
\nMnemonic             **DUEDAY2**
\nData Type            **Code to 31**
\nSource               **User-defined, System-entered (Copied from Application record), or System-entered (Copied from Loan Calculation)**
\nHelp File            **31311**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n***Important:***  This field cannot be updated in the Schedule record. The Due Day 2 field must be set in the Loan record.
`)
scheduleRecordFields.set("recordchange", ` 
\n### Record Change Date
\nThis field contains the system date from the last time any changes were made to this record. When a record is first created, this field carries the system date on which the record is created.
\nField Number         **012**
\nMnemonic             **RECORDCHANGE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **31312**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system updates this field to the current system date every time the record is saved, even though there may not be any actual changes in the record. FM History is not updated when changes are made to this field.
\n
\nYou cannot perform file maintenance on this field.
`)
