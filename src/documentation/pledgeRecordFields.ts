export const pledgeRecordFields = new Map<string, string>()
pledgeRecordFields.set("type", ` 
\n### Pledge Type
\nThis field identifies the purpose of the Pledge record.
\nField Number         **001**
\nMnemonic             **TYPE**
\nData Type            **Code to 5**
\nSource               **System-entered or User-entered**
\nHelp File            **00601**
\nDefault Control      **No**
\nDefault Value **0 (Loan Pledge) or 5 (Account Pledge)**
\n
\n#### Data Type Descriptions
\n##### (0) Share Secured
\n   The Pledge record identifies a share pledged as security for a loan. Use this option if a loan is secured partially or completely by a Share record.
\n   
\n       - If you choose this option when you create a Pledge record, and if the Loan record has the Secured Code field set to (1) 100% Share, (2) Partial Release First, or (3) Partial Release Last, the system creates a Hold record under the Share record specified at the Share ID field. Each time the member makes a loan payment, the system reduces the value in the Secured Amount field in the Loan record and the value of the Hold Amount field in the Share Hold record by the amount of the loan payment applied to principal. When the loan is paid off, the system resets both the Secured Amount and the Hold Amount fields to 0.00.
\n   
\n       - For common pledge scenarios, see the Pledge Records topic.
\n##### (1) Cosigner
\n   The Pledge record identifies a cosigner for a loan. If the cosigner is a credit union member, you can use the Pledge record to cross-reference the cosigner's account for credit reporting and mailing delinquent notices. If the cosigner is not a credit union member, you must also create a Name record under the Pledge record.##### (2) Collateral Owner
\n   The Pledge record identifies the owner of collateral pledged for a loan. Use this option if a loan is secured by collateral owned by a person other than the account holder. If the collateral owner is not a credit union member, you must also create a Name record under the Pledge record.##### (3) Portfolio Secured
\n   The Pledge record identifies stocks pledged as security for a loan. The member must have a Portfolio record. Although not required, you can also have at least one Portfolio Tracking record to define the type and value of stocks owned and the stock amount available for pledging.
\n   
\n       - When calculating the portfolio balance and the amount available for pledging to a loan, the system excludes portfolio stock Tracking records where the expiration date or the release date has been reached.
\n##### (4) Guarantor
\n   The Pledge record identifies a guarantor on a loan. If the guarantor is already a credit union member, you can use the Pledge record to cross-reference the guarantor's account. If the guarantor is not a credit union member, you must also create a Name record under the Pledge record.
\n   
\n       - Some guaranty agreements specify the guarantor's liability as a percentage of the outstanding loan balance, and others specify the liability as a fixed dollar amount. The Pledge Rate or Pledge Amount field should contain the appropriate data when this pledge type is specified. The Pledge Rate field lets the user specify the percentage of a loan guaranteed by the guarantor, and the Pledge Amount field is used when the guarantee is expressed as a fixed dollar amount. Both fields cannot be used for the same pledge type.
\n##### (5) Collateral
\n   The Pledge record is associated with a Collateral record.
\n   
\n       - If this option is selected for a Loan Pledge record, the following fields are not used and cannot be revised:
\n   
\n       - Account Number
\n       - ID
\n       - Collateral Code
\n       - Pledge Rate
\n       - Pledge Amount
\n   
\n       - This is the only option available when you create an Account Pledge record, and the above fields are not even displayed.
`)
pledgeRecordFields.set("accountnumber", ` 
\n### Account Number
\nThis field identifies the account pledging security for a loan. This field is not used if the Pledge Type field is set to (5) Collateral.
\nField Number         **002**
\nMnemonic             **ACCOUNTNUMBER**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **00602**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
pledgeRecordFields.set("id", ` 
\n### ID
\nThis optional field identifies a share or portfolio pledging security for a loan. This field is not used if the Pledge Type is (5) Collateral.
\nField Number         **003**
\nMnemonic             **ID**
\nData Type            **2 or 4 Characters**
\nSource               **User-defined**
\nHelp File            **00603**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n***Important:***  If you attempt to leave this field blank after selecting it, or if you attempt to save the Loan Pledge record with this field blank, the system displays the following error message:
`)
pledgeRecordFields.set("collateralnumber", ` 
\n### Collateral Number
\nThis field references the Collateral record associated with this Account Pledge record.
\n
\nThis field is used only if the Pledge Type field is set to (5) Collateral.
\nField Number         **008**
\nMnemonic             **COLLATERALNUMBER**
\nData Type            **10 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **00608**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
pledgeRecordFields.set("collateraldescription", ` 
\n### Collateral Description
\nThe system copies this field from the associated Collateral record's Description field. The first 20 characters are displayed in the Pledge record in both the Application Processing Tree and the Account Manager Tree.
\n
\nThis field is used only if the Pledge Type field is set to (5) Collateral.
\nField Number         **800**
\nMnemonic             **COLLATERALDESCRIPTION**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **29809**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field cannot be updated.
`)
pledgeRecordFields.set("effectivedate", ` 
\n### Effective Date
\nThis field stores the creation date of the Pledge record or, if entered manually, the date this Pledge record can be used.
\n
\nThis field is used only if the Pledge Type is set to (5) Collateral.
\nField Number         **010**
\nMnemonic             **EFFECTIVEDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **00610**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
pledgeRecordFields.set("expirationdate", ` 
\n### Expiration Date
\nThis field stores the date this Pledge record should expire.
\n
\nThis field is used only if the Pledge Type field is set to (5) Collateral.
\nField Number         **011**
\nMnemonic             **EXPIRATIONDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00611**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system sets this field when the loan is paid down to a zero balance. You cannot perform file maintenance on this field.
\n
\nThe system automatically updates the corresponding Collateral Hold record's Expiration Date field with the value entered in this field.
`)
pledgeRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThe system stores the system date in this field when you create, change, or save the Pledge record.
\nField Number         **012**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00612**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThere will be times when the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\n***Important:***  The system does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
pledgeRecordFields.set("collateralcode", ` 
\n### Collateral Code
\nThis field contains a user-defined code used to identify the collateral pledged for a loan. You can use this field to categorize types of collateral for reports and displays. This field is not used if the Pledge Type is (5) Collateral.
\nField Number         **004**
\nMnemonic             **COLLATERALCODE**
\nData Type            **Code to 999**
\nSource               **User-defined**
\nHelp File            **00604**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter a credit union-defined code (0–999) to identify the collateral pledged for a loan.
`)
pledgeRecordFields.set("percent", ` 
\n### Pledge Rate
\nUse this field to specify the percentage of a loan secured by a pledge; alternatively, you can use the Pledge Amount field to specify a dollar amount secured by a pledge.
\nField Number         **005**
\nMnemonic             **PERCENT**
\nData Type            **Rate**
\nSource               **User-defined**
\nHelp File            **00605**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nIf you enter a rate in this field, type 0 in the Pledge Amount field; if you enter an amount in the Pledge Amount field, type 0 in this field.
\n
\nIf you have multiple loans set at a pledge rate, the loans pay down evenly, at the same time.
\n
\nThis field is often set at 100%. This allows a member to secure the full balance of a loan with the designated share even as payments lower the balance.
\n
\nIf you secure a loan by pledging a number of different shares, you must create additional Pledge records to secure the total loan balance. For example, if you secure a loan with five Share records, you must create five separate Pledge records that each specify a pledge rate.
`)
pledgeRecordFields.set("amount", ` 
\n### Pledge Amount
\nUse this field to specify the dollar amount of a loan secured by a pledge; alternatively, you can use the Pledge Rate field to specify the percentage secured by a pledge.
\n
\nThis field is not used if the Pledge Type field is set to (5) Collateral.
\nField Number         **006**
\nMnemonic             **AMOUNT**
\nData Type            **Money**
\nSource               **User-defined**
\nHelp File            **00606**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf you enter an amount in this field, type 0 in the Pledge Rate field; if you enter a rate in the Pledge Rate field, type 0 in this field.
\n
\nIf you have multiple loans set at a pledge amount, the loans are paid one at a time.
`)
pledgeRecordFields.set("priority", ` 
\n### Collateral Priority
\nThis field indicates the priority of the collateral associated with this Pledge record. This field is used only if the Pledge Type is set to (5) Collateral.
\nField Number         **009**
\nMnemonic             **PRIORITY**
\nData Type            **Code to 2**
\nSource               **System-entered or User-entered**
\nHelp File            **00609**
\nDefault Control      **No**
\nDefault Value **1**
\n
\nData Type Descriptions:
\n   - (0) Other
\n   - (1) Primary
\n   - (2) Secondary
`)
pledgeRecordFields.set("locator", ` 
\n### Locator
\nThe system stores a unique number within each member account in this field that can be used as a unique identification of this record.
\nField Number         **007**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **N/A**
\n
\nThe system automatically assigns a value in the Locator field when the record is created, and you cannot change it. The value in this field can be used as a unique identification of a specific record. The value is a positive number.
\n
\nThe Locator field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using the Locator field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
