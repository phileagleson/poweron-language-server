export const rateChangeRecordFields = new Map<string, string>()
rateChangeRecordFields.set("ratechangedate", ` 
\nField Number         **001**
\nMnemonic             **RATECHANGEDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **32302**
\nDefault Control      **No**
\nDefault Value **__/__/__ (blank)**
\n
\nThis field stores the date a new interest rate goes into effect.
\n
\nWhen you run the interest Rate Change Processing batch program and choose the (5) Select by Next Rate Change Date option at the Selection prompt, the system creates a Rate Change record. For a newly created Rate Change record, the Rate Change Date field matches the date in the Loan recordNext Rate Change Date field from before you ran the Rate Change Processing batch program.
\nIf you make one of the following incorrect entries, the system produces an error or warning message:
\n   - Value matches the Rate Change Date field of any existing Rate Change record of the parent loan:
\n   - Error: Rate Change Date already exists
\n   - Value is prior to the system date:
\n   - Warning: Rate Change Date is before system date
\n   - You make no entry for the field:
\n   - Error: Rate Change Date cannot be blank
\n   - Value is prior to the Rate Change Date field of any sibling Rate Change record with a Reamortized Payment field value greater than 0.00
\n   - Warning: Future Rate Change Date already exists with reamortized payment
\n
\nIf the LoanInterest Type field has a value of (1) Monthly 360 Day or (8) Scheduled/364, the new interest rate becomes effective after the date in the Rate Change Date field.
\nFor example:
\n   - Loan record Payment Frequency field = Monthly
\n   - Loan record Due Day field = 1
\n   - Rate Change record Rate Change Date field = 3/5/15
\n   - Rate Change record Interest Rate field = 7.25%
\n
\nResult: The rate does not change on 3/5/15. Instead, the system updates the Loan record Interest Rate field to 7.25% once the value of the Loan record Interest Date field equals 4/1/15.
\n
\nYou cannot perform file maintenance on this field once you save the Rate Change record.
`)
rateChangeRecordFields.set("id", `
\nField Number         **002**
\nMnemonic             **ID**
\nData Type            **4 characters**
\nSource               **System-calculated**
\nHelp File            **3**
\nDefault Control      **No**
\nDefault Value **Field value of the Loan ID field of the parent Loan record**
\n
\nThe ID field stores the value of the parent Loan record Loan ID field. The system updates the ID field automatically. You cannot perform file maintenance on this field. The field does not appear in the Rate Change record, but is accessible through PowerOn and EasyWriter.
`)
rateChangeRecordFields.set("locator", `
\nDefault Value	Next sequential locator number
\nField Number         **003**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Next sequential locator number**
\n
\nThe value for the Locator field is unique within each Rate Change record. So, you can use the Locator field's value as a unique identification for that record. The system automatically assigns a value to the Locator field when you or the system creates a Rate Change record. The value is a positive number from 1 billion to about 2 billion. You cannot change this value.
\n
\nYou can use this field during PowerOn file maintenance (demand or batch) to identify a unique record.
\n
\nIf you select View > Options > Display Record Locators, the system displays the Locator field and value in the Account record tree.
\n
\nYou cannot perform file maintenance on this field.
`)
rateChangeRecordFields.set("creationdate", `
\nDefault Value	__/__/__ blank
\nField Number         **004**
\nMnemonic             **CREATIONDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **32305**
\nDefault Control      **No**
\nDefault Value **__/__/__ blank**
\n
\nThe system stores a date in the Creation Date field in two circumstances:
\n   - When you create a Rate Change record
\n   - When you run the Rate Change Processing batch program and set the Selection prompt to (5) Use Next Rate Change Date. With that setting, the Rate Change Processing batch program creates a Rate Change record
\n
\nYou cannot perform file maintenance on this field.
`)
rateChangeRecordFields.set("recordchangedate", `
\nField Number         **005**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **32306**
\nDefault Control      **No**
\nDefault Value **System Date**
\n
\nThe system stores the system date in the Record Change Date field when you create, revise, or save the Rate Change record.
\n
\nThe system may update the Record Change Date field when you save the Rate Change record, even though there may not have been any actual changes in the record.
\n
\nYou cannot perform file maintenance on this field.
`)
rateChangeRecordFields.set("paymentchangedate", `
\nField Number         **006**
\nMnemonic             **PAYMENTCHANGEDATE**
\nData Type            **Date**
\nSource               **System-calculated and User-entered**
\nHelp File            **32307**
\nDefault Control      **No**
\nDefault Value **__/__/__ blank**
\n
\nThe Payment Change Date field stores the date the reamortized payment takes effect. The Rate Change Processing batch program calculates this date after you select Yes at the Perform Payment Reamortization prompt. If you select No at the Perform Payment Reamortization prompt, the batch program leaves the field blank.
\n   - Important: If you perform file maintenance on this field, the system does not update the Loan record Pmt Bucket Due Date field or the Schedule record Beginning Date field.
\nThe system displays warnings when you make an incorrect entry:
\n   - The Payment Change Date field has a date earlier than the date stored in the Loan record Due Date field:
\n   - Warning: Payment Change Date is earlier than Due Date
\n   - The Payment Change Date field has a date that does not coincide with a normal payment frequency for the Loan record. (The system compares the Payment Change Date field to the Payment Frequency field or the Due Day 1 or Due Day 2 fields of the Loan record.):
\n   - Warning: Payment Change Date does not coincide with payment frequency
\n   - The value in the Payment Change Date field is earlier than the date in the Loan record Due Date field, and it does not match the loan's payment frequency:
\n   - Warning: Payment Change Date is earlier than Due Date and does not
\n   - coincide with payment frequency
\n   - The value in the Payment Change Date field is earlier than the date set in the Rate Change Date field of the same record:
\n   - Warning: Payment Change Date is earlier than the Rate Change Date
\n   - The value in the Payment Change Date field is earlier than the date set in the Rate Change Date field of the same record, and it does not match the loan's payment frequency:
\n   - Warning: Payment Change Date is earlier than the Rate Change Date and
\n   - does not coincide with payment frequency.
`)
rateChangeRecordFields.set("interestrate", `
\nField Number         **007**
\nMnemonic             **INTERESTRATE**
\nData Type            **Rate**
\nSource               **System-calculated and User-entered**
\nHelp File            **32308**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nThis field stores the interest rate in effect for the loan as of the date set in the Rate Change Date field as calculated by the Rate Change Processing batch program.
`)
rateChangeRecordFields.set("indexrate", `
\nField Number         **008**
\nMnemonic             **INDEXRATE**
\nData Type            **Rate**
\nSource               **System-calculated and User-entered**
\nHelp File            **32309**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nThis field stores the index rate value that the system used to calculate the value set in the Rate Change record Interest Rate field.
`)
rateChangeRecordFields.set("reamortizedpayment", `
\nField Number         **009**
\nMnemonic             **REAMORTIZEDPAYMENT**
\nData Type            **Money**
\nSource               **System-calculated and User-entered**
\nHelp File            **32310**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Reamortized Payment field stores the payment amount calculated by the Rate Processing batch program when you select Yes at the Perform Payment Reamortization prompt The amount represents one periodic payment of principal, interest, and escrow.
\n
\nWhen you select No at the Perform Payment Reamortization prompt, the system sets this field to .00.
\n
\nWhen you perform file maintenance on this field, you are not updating the Loan record Pmt Bucket Amt field or the Schedule record Payment field.
`)
rateChangeRecordFields.set("periodicstartrate", `
\nField Number         **010**
\nMnemonic             **PERIODICSTARTRATE**
\nData Type            **Rate**
\nSource               **System-calculated and User-entered**
\nHelp File            **32311**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nThe Periodic Cap Start Rate field stores the value that the system uses in the Loan record Periodic Cap Start Rate field when the rate change takes place.
`)
rateChangeRecordFields.set("periodicstartdate", `
\nField Number         **011**
\nMnemonic             **PERIODICSTARTDATE**
\nData Type            **Date**
\nSource               **System-calculated and User-entered**
\nHelp File            **32312**
\nDefault Control      **No**
\nDefault Value **__/__/__ blank**
\n
\nThe Periodic Cap Start Date field stores the value the system uses in the Loan record Periodic Cap Start Date field when the rate change takes place.
`)
