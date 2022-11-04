export const irsRecordFields = new Map<string, string>()
irsRecordFields.set("ssn", ` 
\n### Taxpayer ID
\nThis field stores the Social Security Number of the person to whom this IRS record refers.
\nField Number         **006**
\nMnemonic             **SSN**
\nData Type            **9 Characters**
\nSource               **User-entered**
\nHelp File            **00406**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nRequired entry: Make an entry in this field in one of the following ways:
\n   - Type * to use the Social Security Number of the person identified in the primary Name record for this account.
\n   - Enter the Social Security Number of the person to whom this IRS record refers.
\nIf you do not make an entry in this field, the system displays the following message:
\n   - Taxpayer ID must be 9 digits
\nIf this field is blank when you accept your entries, the system displays the following message:
\n   - Taxpayer ID Cannot Be Blank
`)
irsRecordFields.set("irscode", ` 
\n### IRS Code
\nThis field stores a code that identifies how the share should be reported to the IRS.
\nField Number         **007**
\nMnemonic             **IRSCODE**
\nData Type            **Code to 15**
\nSource               **User-entered**
\nHelp File            **00407**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (00) Normal
\n   This share should be reported to the IRS as a normal share.##### (01) IRA
\n   This IRS record is for IRA (Individual Retirement Account) shares.##### (02) Deferred Comp
\n   This IRS record is for deferred comp shares.##### (03) SEP
\n   This IRS record is for SEP (Simplified Employer Pension) shares.##### (04) Keogh
\n   This IRS record is for Keogh shares.##### (05) 401K
\n   This IRS record is for 401(k) shares.##### (06) Roth IRA
\n   This IRS record is for Roth shares.
\n       - Important: Roth Conversion IRAs and Roth IRAs no longer have to be separated. You can set this field to this option for both types of accounts.
\n##### (07) SIMPLE IRA
\n   This IRS record is for SIMPLE IRA shares.##### (08) Coverdell ESA
\n   This IRS record is for Coverdell ESA shares.##### (09) Archer MSA
\n   This IRS record is for Archer MSA shares.##### (10) Medicare MSA
\n   This IRS record is for Medicare MSA shares.##### (11) Roth Conversion
\n   This IRS record is for converted Roth IRA shares rather than a new Roth IRA.
\n       - Important: Roth Conversion IRAs and Roth IRAs no longer have to be separated. Although you can continue to set this field to this option, you can set this field to the (6) Roth IRA option for both types of accounts. The field value of (11) Roth Conversion may be discontinued in the future.
\n##### (12) Conduit IRA
\n   This IRS record is for a traditional IRA that contains only funds rolled over from a qualified employer plan and not mixed with any other IRA funds.##### (13) Governmental 457
\n   This IRS record is for a Deferred Comp plan that is a Governmental 457 plan.##### (14) Single HSA
\n   This IRS record is for a Health Savings Account for an individual.##### (15) Family HSA
\n   This IRS record is for a Health Savings Account for a family.
\nThere must be one IRS record for each type of tax-deferred share for each Social Security Number in the account. The value in this field in an IRS record must match the value in the IRS Code field in its corresponding Share records.
\n
\nFor the special case of option (08) Coverdell ESA, see Setting Up a Coverdell ESA Share.
`)
irsRecordFields.set("irsplan", ` 
\n### IRS Plan
\nThis field can store a code that indicates the unique IRS plan, defined by your financial institution, that is used for matching criteria between this record and the IRA Share record (Share record with the value in the Share Type field set to IRA Share).
\nField Number         **012**
\nMnemonic             **IRSPLAN**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **00412**
\nDefault Control      **No**
\nDefault Value **00**
\n
\n#### Data Type Descriptions
\n##### 0
\n   This is your standard IRA plan. The IRA Share record is not part of a SEP plan and does not use an IRS plan for matching with this IRS record.##### 1–99
\n   The IRA Share record is part of a SEP plan and uses this IRS plan (defined by your financial institution) for matching with this IRS record.
\n   
\n       - Symitar suggests that you select unique IRS Plan numbers for each kind of plan you offer that must be reported separately. For example, you can set up all IRA Share records under the SEP plan with a value of 01 in this field, then set up all regular IRA Share records with a value of 00 in this field.
\nThe primary purpose of this field is to distinguish between IRA Share records that are part of a Simplified Employer Pension (SEP) plan (the IRS Code field set to (03) SEP) and IRA Share records that are not part of a SEP plan, by connecting specific Share records to a particular IRS record. Whenever the system accumulates contribution and distribution amounts in IRS records, it determines which IRS record to use based on the following matching criteria:
\n   - The Taxpayer ID field in the IRS record must match the effective SSN for the Share record.
\n   - The IRS Code field in the IRS record must match the IRS Code field in the Share record.
\n   - The IRS Plan field in the IRS record must match the IRS Plan field in the Share record.
\n
\nTherefore, the combination of the values in the SSN, IRS Code, and IRS Plan fields should be unique for every IRS record in an account. If your financial institution uses IRS plans, this field lets you have more than one IRA plan in each member account. Each is reported separately to the IRS. The IRS Reporting batch program does not consolidate information from two or more shares or IRS records or accounts if the values in the IRS Plan fields are different.
`)
irsRecordFields.set("irarmd", ` 
\n### Req Min Distrib <CTY>
\nThis field stores the required minimum distribution (RMD) for the IRA owner for the current tax year; CTY represents the current tax year.
\nField Number         **016**
\nMnemonic             **IRARMD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00416**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system calculates the RMD for Traditional, SEP, SIMPLE, and Conduit IRA accounts the first time you run the Close Day Processing batch program in a new calendar year. This calculated value replaces any existing value in the field. The system stores the calculated value only for original IRA owners who are alive and reach the mandatory distribution age by the end of the tax year. The system computes this value as follows:
\n
\nIf your financial institution purchased Symitar's IRA RMD Recalculation edit run, you can now store amounts calculated by this edit run in IRS records in addition to Tracking records. Call Symitar Support to request an edit modification to add this option.
`)
irsRecordFields.set("rmdtableoption", ` 
\n### RMD Table Option
\nThis field stores a code that defines the method the system uses to calculate the required minimum distribution.
\nField Number         **015**
\nMnemonic             **RMDTABLEOPTION**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **00415**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Auto
\n   The system calculates the required minimum distribution based on the information contained in the IRS Holder Birth Date and IRS Holder Spouse Birth Date fields. The system selects the table with the lowest RMD amount to use, (1) Uniform Table or (2) Joint Life Table.##### (1) Uniform Table
\n   The system calculates the required minimum distribution for the IRA holder based on the uniform lifetime life expectancy table in IRS Publication 590-B.##### (2) Joint Life Table
\n   The system calculates the required minimum distribution for the IRA holder whose spouse is more than 10 years younger and the sole beneficiary of their IRAs based on the Joint Life and Last Survivor life expectancy table in IRS Publication 590. For this option to calculate properly, the IRS Holder Birth Date and IRS Holder Spouse Birth Date fields must be filled in.
\nThe system calculates the RMD for Traditional, SEP, SIMPLE, and Conduit IRA accounts the first time you run the Close Day Processing batch program in a new calendar year. The calculated amount is stored in the Req Min Distrib <CTY> field.
`)
irsRecordFields.set("msaholdercode", ` 
\n### MSA Holder Code
\nThis field can store the category of the member with a tax-deferred Archer or Medicare Medical Savings Account (MSA) Share record (Share record with the value in the IRS Code field is set to (09) Archer MSA or (10) Medicare MSA).
\nField Number         **011**
\nMnemonic             **MSAHOLDERCODE**
\nData Type            **Code to 2**
\nSource               **System-entered**
\nHelp File            **00411**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThis field is used only for IRS records when the IRS Code field is set to (09) Archer MSA or (10) Medicare MSA. It indicates the category of the member, which must be obtained from the member when the Archer MSA is opened. This field is used to categorize the Archer MSA share on Form 8851. Valid values are:
\n   - (0) Normal
\n   - (1) Previously Uninsured
\n   - (2) Excludable
`)
irsRecordFields.set("irsholderbirthdate", ` 
\n### IRS Holder Birth Date
\nThis field stores the birth date of the IRS holder with a tax-deferred Health Savings Account (HSA) Share record (Share record with the value in the IRS Code field set to (14) Single HSA or (15) Family HSA).
\nField Number         **017**
\nMnemonic             **IRSHOLDERBIRTHDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00417**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nOne of the ways the system uses this field is to calculate the required minimum distribution (RMD) for Traditional, SEP, SIMPLE, and Conduit IRAs. The calculation occurs only if you set the IRS Code to (14) Single HSA or (15) Family HSA in the IRS record. Enter the birth date of the IRS holder for HSA Share records. The system checks the date in this field to determine if the IRS holder is eligible for a catch-up contribution (additional elective deferrals made by eligible participants aged 55 or over). If you do not enter a date, the system checks the birth date from a Name record with a matching Social Security Number.
`)
irsRecordFields.set("irsholderspousebirthdate", ` 
\n### IRS Holder Spouse Birth Date
\nThis field stores the birth date of the spouse of an IRS holder with a tax-deferred Health Savings Account (HSA) Share record (Share record with the value in the IRS Code field set to (14) Single HSA or (15) Family HSA).
\nField Number         **018**
\nMnemonic             **IRSHOLDERSPOUSEBIRTHDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00418**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nOne of the ways the system uses the IRS Holder Spouse Birth Date field is to calculate the required minimum distribution (RMD) for Traditional, SEP, SIMPLE, and Conduit IRA. This field is available only in two situations:
\n   - You set the IRS Code field in the IRS record to (15) Family HSA.
\n   - You use the Required Minimum Distribution (RMD) edit run with the Oldest Beneficiary is Spouse field of the IRA RMD Recalculation Info Tracking record set to (0) No.
\nSo that the system can use this field in IRS-related calculations, enter the birth date of the IRS holder's spouse for HSA Share records. The system checks the date in this field for two reasons:
\n   - To determine if the IRS holder's spouse is eligible for a spousal catch-up contribution (an additional elective deferral made by eligible participants aged 55 or over).
\n
\n   - If you enter a date here, the system calculates the spousal contribution, depending on the spouse's age. If you do not enter a date, the system does not calculate a spousal catch-up contribution to this share.
\n
\n   - To calculate a required minimum distribution when the spouse is not the oldest beneficiary.
`)
irsRecordFields.set("opendate", ` 
\n### Open Date
\nThis field stores the date of first participation for Roth IRA, SIMPLE IRA, Archer MSA, HSA, or Roth Conversion IRA shares.
\nField Number         **010**
\nMnemonic             **OPENDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **00410**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis field is used for IRS records with a value in the IRS Code field of one of the following:
\n   - (06) Roth IRA
\n   - (07) SIMPLE IRA
\n   - (09) Archer MSA
\n   - (11) Roth Conversion IRA
\n   - (14) Single HSA
\n   - (15) Family HSA
\n
\nThis field specifies the date of first participation for Roth IRA, SIMPLE IRA, Archer MSA, HSA, or Roth Conversion IRA shares. You must manually update this field when you perform a transfer or rollover.
\n
\nYou must set the value of this field through manual file maintenance, or the system fills it with the date of the first contribution. This field is used to determine if the account is opened during the current reporting period for IRS Form 8851.
`)
irsRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThe system stores the system date in this field when you create, change, or save the IRS record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **019**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00419**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
irsRecordFields.set("contributionyear", ` 
\n### Contribution Year
\nThis field stores a code indicating if the contributions to the tax-deferred share are for the current or previous tax year.
\nField Number         **008**
\nMnemonic             **CONTRIBUTIONYEAR**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00408**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Current Tax Year
\n   Contributions to the tax-deferred share are for the current tax year.##### (1) Previous Tax Year
\n   Contributions to the tax-deferred share are for the previous tax year.
\n`)
irsRecordFields.set("maxcontribution", ` 
\n### Max Contribution
\nThis field stores the maximum amount the owner of this IRS record is allowed to contribute to the tax-deferred share during the tax year.
\nField Number         **001**
\nMnemonic             **MAXCONTRIBUTION**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **00401**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the maximum amount the owner of this IRS record is allowed to contribute to the tax-deferred share during the tax year. You can use this field for the following types of tax-deferred shares:
\n   - Conduit IRA
\n   - SEP
\n   - Keogh
\n   - Archer MSA
\n   - HSA
\n   - Medicare Advantage MSA
\n   - The system computes the limits for other tax-deferred shares.
\nYou can also make an entry in this field to override the system-calculated value in the Actual Max Contribution field for the following types of retirement plans:
\n   - Traditional
\n   - Roth
\n   - SIMPLE IRA
\n   - Coverdell ESA
\n   - 401(k)
\n   - HSA
\n   - Deferred Comp
\n   - SEP
\n***Important:***  If you override the system-calculated limits from the Actual Max Contribution field, make sure that the limit you enter includes catch-up contributions for members who turn 50 years old before the end of the tax year. Also, if you use this field instead of the Actual Max Contribution field for these IRAs, the system will not update the Actual Max Contribution field with future changes in government regulations. To ensure compliance with government regulations, leave this field set at the default value of 0.00 for Traditional, Roth, SIMPLE IRA, Coverdell IRA, 401(k), HSA, and Deferred Comp retirement plans.
`)
irsRecordFields.set("actualmaxcontribution", ` 
\n### Actual Max Contribution
\nThis field contains the system-calculated maximum amount the owner of this IRS record is allowed to contribute to the share for tax-deferred retirement plans during the tax year.
\nField Number         **800**
\nMnemonic             **ACTUALMAXCONTRIBUTION**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system calculates this field for the following types of retirement plans using the appropriate values from the IRS Contribution Limit Parameters in Parameter Manager:
\n   - IRS Code Field Value	Retirement Plan Type
\n   - 01	IRA
\n   - 02	Deferred Comp
\n   - 05	401K
\n   - 06	Roth IRA
\n   - 07	SIMPLE IRA
\n   - 08	Coverdell ESA
\n   - 11	Roth Conversion
\n   - 13	Governmental 457
\n   - 14	Single HSA
\n   - 15	Family HSA
\n   - For tax-deferred share types not listed in the limits table, the system uses the value you enter in the Max Contribution field. You can also enter a value in that field to override this system-calculated value.
\n
\nIf the IRS record Max Contribution field equals 0.00, the Actual Max Contribution field is calculated using the associated value in the Current Tax Year <CTY> Contrib Limit parameter and the Current Tax Year <CTY> Catch-Up Limit parameter in the IRS Contribution Limit Parameters in Parameter Manager, based on the member’s age.
\n
\nYou can access this field in PowerOn specfiles and SymConnect inquiries.
\n
\nThe system includes catch-up contributions in this calculation only if the value in the Max Contribution field is 0.00.
\n
\nThe owner is identified by matching the IRS record Taxpayer ID field to the Name record SSN/TIN field. The owner’s age is determined by subtracting the current year from the Name record Birth Date field year.
\n
\nActual Max Contribution field calculation if Max Contribution field = 0.00:
irs Code/Retirement Plan	Age	Actual Max Contribution
\n
\n   - 01 IRS
\n   - 02 Deferred Comp
\n   - 05 401K
\n   - 06 Roth IRA
\n   - 07 SIMPLE IRA
\n   - 11 Roth Conversion
\n   - 13 Governmental 457
\n   - 	<50	Current Tax Year <CTY> Contrib Limit parameter value
\n
\n   - 01 IRS
\n   - 02 Deferred Comp
\n   - 05 401K
\n   - 06 Roth IRA
\n   - 07 SIMPLE IRA
\n   - 11 Roth Conversion
\n   - 13 Governmental 457
\n   - 	>=50	
\n
\n   - Current Tax Year <CTY> Contrib Limit parameter value + Current Tax Year <CTY> Catch-Up Limit parameter value
\n
\n
\n   - 14 Single HSA
\n   - 15 Family HSA
\n   - 	<55	Current Tax Year <CTY> Contrib Limit parameter value
\n
\n   - 14 Single HSA
\n   - 15 Family HSA
\n   - 	>=55	
\n
\n   - Current Tax Year <CTY> Contrib Limit parameter value + Current Tax Year <CTY> Catch-Up Limit parameter value
\n
\n
\n   - 08 Coverdell ESA
\n   - 	ALL	Current Tax Year <CTY> Contrib Limit parameter value
\nFor HSA plans, the system calculates the value in this field based on the following IRS Code field values:
\n   - For option (14) Single HSA, the system adds the standard maximum for the year and the amount of catch-up contribution permitted (if any). A member 55 or older can make a catch-up contribution if eligible.
\n   - For option (15) Family HSA, the system adds the standard maximum contribution for the year and the amount of the catch-up contribution permitted (if any), to this amount. A member or the member's spouse, who is 55 or older, can make a catch-up contribution, if eligible. If a member's spouse is 55 or older, the amount of their catch-up contribution must be reported under the spouse's SSN.
\n***Important:***  When calculating the value in this field, the system does not consider these criteria used by the IRS:
\nThe terms of the qualifying high-deductible health plan
\nThe date the share became eligible for contributions
\nThe date the member opened the share
\nPro-rated months eligible for catch-up contributions for the year a shareholder or spouse turns 55
`)
irsRecordFields.set("lastdistribtype", ` 
\n### Last Distribution Type
\nThis field stores the last distribution code used.
\nField Number         **020**
\nMnemonic             **LASTDISTRIBTYPE**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **00420**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe field is used by the IRS Reporting batch program to determine what event triggered the total distribution on Form 1099-R. For example, if a member makes a death distribution (distribution Code 4 - Death), the number 4 is stored in this field. Depending on the value in this field, the distribution code may differ.
\n
\nWhen performing a void or share recast, you must perform file maintenance on this field.
\n
\nIf the transaction was a withdrawal (Action Code = W) from a tax-deferred share, the system updates the Last Distribution Type field as follows:
\n
\n           (1) Early (Premature) Distribution, No Known Exception1
\n           (2) Early (Premature) Distribution, Exception Applies2
\n           (3) Disability3
\n           (4) Death4
\n           (5) Prohibited Transaction (IRS Code = 2, 7, 9, 10, or 12); (5) Direct Rollover to IRA (IRS Code = 4 or 5); (5) Recharacterization of contribution for current year (IRS Code = 1,3,6, or 11)5
\n           (6) Recharacterization of Contribution for the previous year6
\n           (7) Normal Distribution7
\n           (8) Distribution of Excess Contribution for <current tax year>8
\n           (9) Distribution of Excess Contribution for <previous tax year>9
\n           (10) Code G Direct Rollover5
\n           (10) Early Distribution IRS LevyQ
\n           (11) Direct Rollover to Roth IRAR
\n           (12) Death Direct RolloverD
\n           (13) Death Direct Rollover to Roth IRAB
\n           (14) Transfer to another InstitutionT
\n           (15) Transfer Within this InstitutionI
\n`)
irsRecordFields.set("fairmarketvaluelastyear", ` 
\n### Fair Mkt Value PTY
\nThis field stores the fair market value of a tax-deferred share for the previous tax year.
\nField Number         **009**
\nMnemonic             **FAIRMARKETVALUELASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00409**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe fair market value of a tax-deferred share is the balance in the account as of December 31, which must be reported on 5498 forms. The system calculates the fair market value for a tax-deferred share the first time you run the Close Day Processing batch program in a new calendar year. The system computes this value as follows:
\n
\nYou can override this calculated value manually, but under normal circumstances, you should not revise this field.
`)
irsRecordFields.set("fairmarketvaluedeath", ` 
\n### Fair Mkt Value Death
\nThis field stores the appropriate fair market value of a tax-deferred share when you become aware of the death of the account holder.
\nField Number         **013**
\nMnemonic             **FAIRMARKETVALUEDEATH**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00413**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe amount in this field is reported on the 1099-SA form. You must manually set this field to the appropriate value when you become aware of the death of the account holder. A non-zero value in this field alone does not trigger 1099-SA reporting; there must be a distribution amount as well. This field is used only for Health Savings Account (HSA), Archer MSA, and Medicare Advantage MSA (Medical Savings Account) shares.
`)
irsRecordFields.set("contrthisyear", ` 
\n## CONTRTHISYEAR:1
\n### Contr <CTY> for <CTY>|Employer <CTY> for <CTY>
\nThis field stores the total of all contributions to the tax-deferred share during the current tax year for the current tax year.
\nField Number         **004:001**
\nMnemonic             **CONTRTHISYEAR:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00404**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nWhenever a deposit with a teller-entered contribution code of (0) Contribution for current tax year is made to a share with the same values in the IRS code and taxpayer ID fields as this IRS record, the system adds the transaction amount to this field.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## CONTRTHISYEAR:2
\n### Contr <CTY> for <PTY>|Employer <CTY> for <PTY>
\nThis field stores the total of all contributions to the tax-deferred share during the current tax year for the previous tax year.
\nField Number         **004:002**
\nMnemonic             **CONTRTHISYEAR:2**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00404**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nWhenever a deposit with a teller-entered contribution code of (1) Contribution for previous tax year is made to a share with the same IRS code and taxpayer ID as this IRS record, the system adds the transaction amount to this field.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## CONTRTHISYEAR:3
\n### Contr <CTY> Rollover
\nThis field stores the total of all rollover contributions to the tax-deferred share.
\nField Number         **004:003**
\nMnemonic             **CONTRTHISYEAR:3**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00404**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a deposit with a teller-entered contribution code of (2) Rollover Contribution is made to a share with the same IRS code and taxpayer ID as this IRS record, the system adds the transaction amount to this field.
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the amount in this field to the Contr <PTY> Rollover field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## CONTRTHISYEAR:4
\n### Contr <CTY> Transfer
\nThis field stores the total of all transfer contributions to the tax-deferred share.
\nField Number         **004:004**
\nMnemonic             **CONTRTHISYEAR:4**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00404**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a deposit with a teller-entered contribution code of (3) Transfer from Another Institution is made to a share with the same IRS code and taxpayer ID as this IRS record, the system adds the transaction amount to this field. The system does not record transfers made with a contribution code of (4) Transfer Within this institution.
\n
\nYou should make deposits with this contribution code only if you withdraw (distribute) the funds from a share covered by the same IRS record. Since you are transferring funds between two shares covered by the same IRS record, there is no change in the total balance of the accounts.
\n
\nThe first time you run the Close Day Processing batch program into a new calendar year, the system moves the amount in this field to the Contr <PTY> Transfer field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## CONTRTHISYEAR:5
\n### Contr <CTY> Roth Conv/MSA|Contr <CTY> Roth Conv|Employee <CTY> for <CTY>
\nThis field stores various contributions during the current tax year depending on the IRS code entered in the Share record and IRS record for the account.
\nField Number         **004:005**
\nMnemonic             **CONTRTHISYEAR:5**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00404**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## CONTRTHISYEAR:6
\n### Contr <CTY> Roth Conv/MSA|Contr <CTY> Recharact|Employee <CTY> for <PTY>
\nThis field stores the total of all previous tax year contributions by the employee for the preceding tax year or the recharacterization amount from last year depending on the IRS code entered in the Share record and IRS record for the account.
\nField Number         **004:006**
\nMnemonic             **CONTRTHISYEAR:6**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00404**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\N## CONTRTHISYEAR:7
\n### Contr <CTY> Repmt Reservist|Contr <CTY> Unspecif
\nThis field stores the amount of any repayment of a qualified reservist distribution during the current year.
\nField Number         **004:007**
\nMnemonic             **CONTRTHISYEAR:7**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00404**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\N## CONTRTHISYEAR:8
\n### Contr <CTY> Repmt Disaster|Contr <CTY> Unspecif
\nThis field stores the amount of any repayment of a federally designated disaster distribution during the current year.
\nField Number         **004:008**
\nMnemonic             **CONTRTHISYEAR:8**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00404**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\N## CONTRTHISYEAR:9
\n### Contr <CTY> Late Rollover|Contr <CTY> Unspecif
\nThis field stores the total of all late rollover contributions to the tax-deferred share.
\nField Number         **004:009**
\nMnemonic             **CONTRTHISYEAR:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00404**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\n## CONTRTHISYEAR:10
\n### Contr <CTY> Repmt Birth/Adoption|Contr <CTY> Unspecif
\nThis field stores the amount of any repayment of a federally designated birth or adoption distribution during the current year.
\nField Number         **004:010**
\nMnemonic             **CONTRTHISYEAR:10**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00404**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
`)
irsRecordFields.set("distrthisyear", ` 
\n## DISTRTHISYEAR:1
\n### Distr <CTY> No Excptn
\nThis field stores the total of all early distributions during the current tax year with no exceptions.
\nField Number         **005:001**
\nMnemonic             **DISTRTHISYEAR:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a withdrawal with one of the following distribution codes is made from a share with the same IRS code and taxpayer ID as this IRS record, the system adds the transaction amount to this field:
\n   - (1) Code 1 - Early (Premature) Distribution, No Known Exception
\n   - (1) Code J - Early (Premature) Distribution, No Known Exception
\n
\nThe first time you run the Close Day Processing batch program into a new calendar year, the system moves the amount in this field to the Distr <PTY> No Excptn field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## DISTRTHISYEAR:2
\n### Distr <CTY> Exception
\nThis field stores the total of all early distributions during the current tax year with exceptions.
\nField Number         **005:002**
\nMnemonic             **DISTRTHISYEAR:2**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a withdrawal with one of the following distribution codes is made from a share with the same IRS code and taxpayer ID as this IRS record, the system adds the transaction amount to this field:
\n   - (2) Code 2 - Early (Premature) Distribution, Exception Applies
\n   - (2) Code T - Early (Premature) Distribution, Exception Applies
\n
\nThe first time you run the Close Day Processing batch program into a new calendar year, the system moves the amount in this field to the Distr <PTY> Exception field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## DISTRTHISYEAR:3
\n### Distr <CTY> Disability
\nThis field stores the total of all distributions during the current tax year due to disability.
\nField Number         **005:003**
\nMnemonic             **DISTRTHISYEAR:3**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a withdrawal with one of the following distribution codes is made from a share with the same IRS code and taxpayer ID as this IRS record, the system adds the transaction amount to this field:
\n   - (3) Code 3 - Disability
\n   - (3) Code 4 - Disability
\n   - (3) Code T - Disability
\n
\nThe first time you run the Close Day Processing batch program into a new calendar year, the system moves the amount in this field to the Distr <PTY> Disability field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## DISTRTHISYEAR:4
\n### Distr <CTY> Death
\nThis field stores the total of all distributions during the current tax year due to the member's death.
\nField Number         **005:004**
\nMnemonic             **DISTRTHISYEAR:4**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a withdrawal with one of the following distribution codes is made from a share with the same IRS code and taxpayer ID as this IRS record, the system adds the transaction amount to this field:
\n   - (4) Code 4 - Death
\n   - (4) Code 5 - Death
\n   - (4) Code T - Death
\n
\nThe first time you run the Close Day Processing batch program into a new calendar year, the system moves the amount in this field to the Distr <PTY> Death field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## DISTRTHISYEAR:5
\n### Distr <CTY> Rechar CTY|Distr <CTY> Prohib Trn
\nThis field stores the total of recharacterization distributions during the current tax year for the current tax year or the total of all prohibited distribution transactions during the current tax year depending on the IRS code entered in the Share record and IRS record for the account.
\nField Number         **005:005**
\nMnemonic             **DISTRTHISYEAR:5**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## DISTRTHISYEAR:6
\n### Distr <CTY> Rechar <PTY>|Distr <CTY> Direct Roll|Distr <CTY> Early 2 Yr|Distr <CTY> Not Benef|Distr <CTY> DeathNonSp|Distr <CTY> Unspecif
\nThis field stores various distributions during the current tax year depending on the IRS code entered in the Share record and IRS record for the account.
\nField Number         **005:006**
\nMnemonic             **DISTRTHISYEAR:6**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## DISTRTHISYEAR:7
\n### Distr <CTY> Normal
\nThis field stores the total of all normal distributions during the current tax year.
\nField Number         **005:007**
\nMnemonic             **DISTRTHISYEAR:7**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a withdrawal with one of the following distribution codes is made from a share with the same IRS code and taxpayer ID as this IRS record, the system adds the transaction amount to this field:
\n   - (7) Code 7 - Normal Distribution
\n   - (7) Code T - Normal Distribution
\n   - (7) Code 1 - Normal Distribution
\n
\nThe first time you run the Close Day Processing batch program into a new calendar year, the system moves the amount in this field to the Distr <PTY> Normal field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## DISTRTHISYEAR:8
\n### Distr <CTY> Excess <CTY>
\nThis field stores the total of all distributions of excess contributions during the current tax year for the current tax year.
\nField Number         **005:008**
\nMnemonic             **DISTRTHISYEAR:8**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a withdrawal with one of the following distribution codes is made from a share with the same IRS code and taxpayer ID as this IRS record, the system adds the transaction amount to this field:
\n   - (8) Code 81 - Distribution of Excess Contribution for current year
\n   - (8) Code J8 - Distribution of Excess Contribution for current year
\n   - (8) Code 2 - Distribution of Excess Contribution for current year
\n
\nThe first time you run the Close Day Processing batch program into a new calendar year, the system moves the amount in this field to the Distr <PTY> Excess <PTY> field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## DISTRTHISYEAR:9
\n### Distr <CTY> Excess <PTY>
\nThis field stores the total of all distributions of excess contributions during the current tax year, for the previous tax year.
\nField Number         **005:009**
\nMnemonic             **DISTRTHISYEAR:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a withdrawal with one of the following distribution codes is made from a share with the same IRS code and taxpayer ID as this IRS record, the system subtracts the transaction amount from this field:
\n   - (9) Code P1 - Distrib of Excess Contrib for last year
\n   - (9) Code JP - Distrib of Excess Contrib for last year
\n   - (9) Code 2 - Distrib of Excess Contrib for last year
\n
\nThe first time you run the Close Day Processing batch program into a new calendar year, the system moves the amount in this field to the Distr <PTY> Excess <PTY-1> field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRTHISYEAR:10
\n### Distr <CTY> Dirct Roll|Distr <CTY> IRS Levy|Distr <CTY> Unspecif
\nThis field can store the total of all direct rollovers from a Traditional or SEP IRA to a qualified plan during the current tax year.
\nField Number         **005:010**
\nMnemonic             **DISTRTHISYEAR:10**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRTHISYEAR:11
\n### Distr <CTY> Dirct Roll Roth|Distr <CTY> Unspecif
\nThis field stores the total of all rollovers not death related of a qualified retirement plan to a Roth IRA.
\nField Number         **005:011**
\nMnemonic             **DISTRTHISYEAR:11**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRTHISYEAR:12
\n### Distr <CTY> Death Dir Roll|Distr <CTY> Unspecif
\nThis field stores the total of all direct rollovers of a qualified retirement plan to an IRA.
\nField Number         **005:012**
\nMnemonic             **DISTRTHISYEAR:12**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRTHISYEAR:13
\n### Distr <CTY> Death Dir Roll Roth|Distr <CTY> Unspecif
\nThis field stores the total of all Direct Death Rollovers of a qualified retirement plan to a Roth IRA.
\nField Number         **005:013**
\nMnemonic             **DISTRTHISYEAR:13**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRTHISYEAR:14
\n### Distr <CTY> Transfer
\nThis field stores the total of all distributions during the current tax year from a share covered by this IRS record with a distribution code of (14) Transfer to Another Institution.
\nField Number         **005:014**
\nMnemonic             **DISTRTHISYEAR:14**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system does not record transfers made with a distribution code of (15) Transfer Within this institution.
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the amount in the Distr <PTY> Transfer field to this field.
\n
\nThe IRS Reporting batch program does not report amounts in this field to the IRS. However, the system must know the total amount transferred from all shares covered by this IRS record during the previous year to correctly report the fair market value of the share.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRTHISYEAR:15
\n### Distr <CTY> Fee
\nThis field stores the fee or fees charged this year to a qualified account, such as an IRA, HSA, or ESA.
\nField Number         **005:015**
\nMnemonic             **DISTRTHISYEAR:15**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fees are defined by your financial institution and may include for example, a maintenance fee, a lobby fee, a teller fee, etc.
\n
\nThe system only updates this field using the Fee Posting batch program or the Miscellaneous Posting batch program if a distribution code is not set using the Post From PowerOn Output option.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRTHISYEAR:16
\n### Distr <CTY> Ex Earn <CTY>
\nThis field stores the total of all earnings from excess contributions during the current tax year for the current tax year.
\nField Number         **005:016**
\nMnemonic             **DISTRTHISYEAR:16**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a withdrawal with one of the following distribution codes is made from a share with the same IRS code and taxpayer ID as this IRS record, the system prompts the teller for the portion of the gross distribution attributable to earnings and adds the teller-entered earnings amount to this field:
\n   - (8) Code 81 - Distribution of Excess Contribution for current year
\n   - (8) Code J8 - Distribution of Excess Contribution for current year
\n   - (8) Code 2 - Distribution of Excess Contribution for current year
\n
\nThe first time you run the Close Day Processing batch program into a new calendar year, the system moves the amount in this field to the Distr <PTY> Ex Earn <PTY> field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRTHISYEAR:17
\n### Distr <CTY> Ex Earn <PTY>
\nThis field stores the total of all earnings from excess contributions during the current tax year for the previous tax year.
\nField Number         **005:017**
\nMnemonic             **DISTRTHISYEAR:17**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00405**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a withdrawal with one of the following distribution codes is made from a share with the same IRS code and taxpayer ID as this IRS record, the system prompts the teller for the portion of the gross distribution attributable to earnings and adds the teller-entered earnings amount to this field:
\n   - (9) Code P - Distrib of Excess Contrib for last year
\n   - (9) Code P1 - Distrib of Excess Contrib for last year
\n   - (9) Code JP - Distrib of Excess Contrib for last year
\n   - (9) Code 3 - Distrib of Excess Contrib for last year
\n   - (9) Code 2 - Distrib of Excess Contrib for last year
\n
\nThe first time you run the Close Day Processing batch program into a new calendar year, the system moves the amount in this field to the Distr <PTY> Ex Earn <PTY-1> field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
`)
irsRecordFields.set("contrlastyear", ` 
\n## CONTRLASTYEAR:1
\n### Contr <PTY> for <PTY>|Employer <PTY> for <PTY>
\nThis field stores the total of all normal contributions to the tax-deferred share during the previous tax year for the previous tax year.
\nField Number         **002:001**
\nMnemonic             **CONTRLASTYEAR:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00402**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nWhen you run the IRS Reporting batch program, the system adds the amount in this field to the amount in the Contr <CTY> for <PTY> field to determine the total amount of normal contributions to report to the IRS for the previous tax year.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## CONTRLASTYEAR:2
\n### Contr <PTY> for <PTY-1>|Employer <PTY> for <PTY-1>
\nThis field stores the total of all contributions to the tax-deferred share during the previous tax year for the tax year before that.
\nField Number         **002:002**
\nMnemonic             **CONTRLASTYEAR:2**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00402**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## CONTRLASTYEAR:3
\n### Contr <PTY> Rollover
\nThis field stores the total of all rollover contributions to the tax-deferred share made during the previous tax year.
\nField Number         **002:003**
\nMnemonic             **CONTRLASTYEAR:3**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00402**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the amount in the Contr <CTY> Rollover field to this field.
\n
\nWhen you run the IRS Reporting batch program, the system uses the value in this field to determine the total amount of rollover contributions to report to the IRS for the previous tax year.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## CONTRLASTYEAR:4
\n### Contr <PTY> Transfer
\nThis field stores the total of all contributions transferred during the previous year to a share covered by this IRS record with a teller-entered contribution code of (3) Transfer from Another Institution.
\nField Number         **002:004**
\nMnemonic             **CONTRLASTYEAR:4**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00402**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system does not record transfers made with a contribution code of (4) Transfer Within this Institution.
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the amount in the Contr <CTY> Transfer field to this field.
\n
\nThe IRS Reporting batch program does not report amounts in this field to the IRS. However, the system must know the total amount that was transferred to all shares covered by this IRS record during the previous year to correctly report the fair market value of the share.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## CONTRLASTYEAR:5
\n### Contr <PTY> Roth Conv/MSA|Contr <PTY> Roth Conv|Employee <PTY> for <PTY>
\nThis field stores various contributions during the previous tax year depending on the IRS code entered in the Share record and IRS record for the account.
\nField Number         **002:005**
\nMnemonic             **CONTRLASTYEAR:5**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00402**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## CONTRLASTYEAR:6
\n### Contr <PTY> Rechar/MSA|Contr <PTY> Roth Conv|Employee <PTY> for <PTY-1>
\nThis field stores the total of all previous tax year contributions by the employee for the preceding tax year or the recharacterization amount from the previous-tax year depending on the IRS code entered in the Share record and IRS record for the account.
\nField Number         **002:006**
\nMnemonic             **CONTRLASTYEAR:6**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00402**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## CONTRLASTYEAR:7
\n### Contr <PTY> Repmt Reservist|Contr <PTY> Unspecif
\nThis field contains the amount of any distribution repayment by a qualified reservist during the previous year.
\nField Number         **002:007**
\nMnemonic             **CONTRLASTYEAR:7**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00402**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\N## CONTRLASTYEAR:8
\n### Contr <PTY> Repmt Disaster|Contr <PTY> Unspecif
\nThis field contains the amount of any repayment of a federally designated disaster distribution during the previous year.
\nField Number         **002:008**
\nMnemonic             **CONTRLASTYEAR:8**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00402**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\N## CONTRLASTYEAR:9
\n### Contr <PTY> Late Rollover|Contr <PTY> Unspecif
\nThis field stores the total of all late rollover contributions to the tax-deferred share made in the previous tax year.
\nField Number         **002:009**
\nMnemonic             **CONTRLASTYEAR:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00402**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, do not revise this field.
\n
\n## CONTRLASTYEAR:10
\n### Contr <PTY> Repmt Birth/Adoption|Contr <PTY> Unspecif
\nThis field contains the amount of any repayment of a federally designated birth or adoption distribution during the previous year.
\nField Number         **002:010**
\nMnemonic             **CONTRLASTYEAR:10**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00402**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
`)
irsRecordFields.set("distrlastyear", ` 
\n## DISTRLASTYEAR:1
\n### Distr <PTY> No Excptn
\nThis field stores the total of all early distributions made during the previous tax year with no exceptions.
\nField Number         **003:001**
\nMnemonic             **DISTRLASTYEAR:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the amount in the Distr <CTY> No Excptn field to this field.
\nWhen you run the IRS Reporting batch program, the system reports any amount in this field as the gross distribution and the taxable amount for all withdrawals with one of the following distribution codes:
\n   - (1) Code 1 - Early (Premature) Distribution, No Known Exception
\n   - (1) Code J - Early (Premature) Distribution, No Known Exception
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## DISTRLASTYEAR:2
\n### Distr <PTY> Exception
\nThis field stores the total of all early distributions during the previous tax year with exceptions.
\nField Number         **003:002**
\nMnemonic             **DISTRLASTYEAR:2**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the amount in the Distr <CTY> Exception field to this field.
\nWhen you run the IRS Reporting batch program, the system reports any amount in this field as the gross distribution and the taxable amount for all withdrawals with one of the following distribution codes:
\n   - (2) Code 2 - Early (Premature) Distribution, Exception Applies
\n   - (2) Code T - Early (Premature) Distribution, Exception Applies
\n
\N## DISTRLASTYEAR:3
\n### Distr <PTY> Disability
\nThis field stores the total of all distributions during the previous tax year due to disability.
\nField Number         **003:003**
\nMnemonic             **DISTRLASTYEAR:3**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the amount in the Distr <CTY> Disability field to this field.
\nWhen you run the IRS Reporting batch program, the system reports any amount in this field as the gross distribution and the taxable amount for all withdrawals with one of the following distribution codes:
\n   - (3) Code 3 - Disability
\n   - (3) Code 4 - Disability
\n   - (3) Code T - Disability
\n
\N## DISTRLASTYEAR:4
\n### Distr <PTY> Death
\nThis field stores the total of all distributions during the previous tax year due to the member's death.
\nField Number         **003:004**
\nMnemonic             **DISTRLASTYEAR:4**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the amount in the Distr <CTY> Death field to this field.
\nWhen you run the IRS Reporting batch program, the system reports any amount in this field as the gross distribution and the taxable amount for all withdrawals with one of the following distribution codes:
\n   - (4) Code 4 - Death
\n   - (4) Code 5 - Death
\n   - (4) Code T - Death
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## DISTRLASTYEAR:5
\n### Distr <PTY> Rechar PTY|Distr <PTY> Prohib Trn
\nThis field stores the total of recharacterization distributions made last the previous tax year for the previous tax year or the total of all prohibited distributions during the previous tax year depending on the IRS code entered in the Share record and IRS record for the account.
\nField Number         **003:005**
\nMnemonic             **DISTRLASTYEAR:5**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## DISTRLASTYEAR:6
\n### Distr <PTY> Rechar <PTY-1>|Distr <PTY> Direct Roll|Distr <PTY> Early 2 Yr|Distr <PTY> Not Benef|Distr <PTY> DeathNonSp|Distr <PTY> Unspecif
\nThis field stores various distributions during the previous tax year depending on the IRS code entered in the Share record and IRS record for the account.
\nField Number         **003:006**
\nMnemonic             **DISTRLASTYEAR:6**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## DISTRLASTYEAR:7
\n### Distr <PTY> Normal
\nThis field stores the total of all normal distributions during the previous tax year.
\nField Number         **003:007**
\nMnemonic             **DISTRLASTYEAR:7**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the amount in the Distr <CTY> Normal field to this field.
\nWhen you run the IRS Reporting batch program, the system reports any amount in this field as the gross distribution and the taxable amount for all withdrawals with one of the following distribution codes:
\n   - (7) Code 7 - Normal Distribution
\n   - (7) Code T - Normal Distribution
\n   - (7) Code 1 Normal, if the IRS code is (09) Archer MSA, (7) Code 1 Normal, (10) Medicare MSA, (14) Single HSA, or (15) Family HSA
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## DISTRLASTYEAR:8
\n### Distr <PTY> Excess <PTY>
\nThis field stores the total of all distributions of excess contributions made during the previous tax year for the same tax year.
\nField Number         **003:008**
\nMnemonic             **DISTRLASTYEAR:8**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the amount in the Distr <CTY> Excess <CTY> field to this field.
\nWhen you run the IRS Reporting batch program, the system reports any amount in this field as the gross distribution for all withdrawals made during the previous tax year with one of the following distribution codes:
\n   - (8) Code 81 - Distribution of Excess Contribution for current year
\n   - (8) Code J8 - Distribution of Excess Contribution for current year
\n   - (8) Code 2 - Distribution of Excess Contribution for current year, if the IRS code is (09) Archer MSA, (10) Medicare MSA, (14) Single HSA, or (15) Family HSA
\n
\nThe taxable amount for this type of distribution is recorded in the Distr <PTY> Ex Earn <PTY> field.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## DISTRLASTYEAR:9
\n### Distr <PTY> Excess <PTY-1>
\nThis field stores the total of all distributions of excess contributions made during the previous tax year for the tax year before that.
\nField Number         **003:009**
\nMnemonic             **DISTRLASTYEAR:9**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the amount in the Distr <CTY> Excess <PTY> field to this field.
\nWhen you run the IRS Reporting batch program, the system reports any amount in this field as the gross distribution for all withdrawals made during the previous tax year with one of the following distribution codes:
\n   - (9) Code P1 - Distrib of Excess Contrib for previous year
\n   - (9) Code JP - Distrib of Excess Contrib for previous year
\n   - (9) Code 2 - Distrib of Excess Contrib for previous year, if the IRS code is (09) Archer MSA, (10) Medicare MSA, (14) Single HSA, or (15) Family HSA
\n
\nThe taxable amount for this type of distribution is recorded in the Distr <PTY> Ex Earn <PTY-1> field.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRLASTYEAR:10
\n### Distr <PTY> Dirct Roll|Distr <PTY> IRS Levy|Distr <PTY> Unspecif
\nThis field can store the total of all direct rollovers from a Traditional or SEP IRA to a qualified plan during the previous tax year.
\nField Number         **003:010**
\nMnemonic             **DISTRLASTYEAR:10**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRLASTYEAR:11
\n### Distr <PTY> Direct Roll Roth|Distr <PTY> Unspecif
\nThis field stores the total of all Direct Death Rollovers of a qualified retirement plan to a Roth IRA.
\nField Number         **003:011**
\nMnemonic             **DISTRLASTYEAR:11**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRLASTYEAR:12
\n### Distr <PTY> Death Dir Roll|Distr <PTY> Unspecif
\nThis field stores the total of all Direct Rollovers of a qualified retirement plan to an IRA.
\nField Number         **003:012**
\nMnemonic             **DISTRLASTYEAR:12**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRLASTYEAR:13
\n### Distr <PTY> Death Dir Roll Roth|Distr <PTY> Unspecif
\nThis field stores the total of all rollovers not death related of a qualified retirement plan to a Roth IRA.
\nField Number         **003:013**
\nMnemonic             **DISTRLASTYEAR:13**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe name and use of this field depends on the value in the IRS Code field in this IRS record:
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRLASTYEAR:14
\n### Distr <PTY> Transfer
\nThis field stores the total of all distribution transfers during the previous tax year.
\nField Number         **003:014**
\nMnemonic             **DISTRLASTYEAR:14**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a withdrawal with a distribution code of (14) Transfer to Another Institution is made from a share with the same IRS code and taxpayer ID as this IRS record, system subtracts the transaction amount from this field. The system does not record transfers made with a distribution code of (15) Transfer Within this institution.
\n
\nYou should make withdrawals with this distribution code only if you deposit (contribute) the funds to a share covered by the same IRS record. Since you are transferring funds between two shares covered by the same IRS record, there is no change in the total balance of the accounts.
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the amount in the Distr <CTY> Transfer field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRLASTYEAR:15
\n### Distr <PTY> Fee
\nThis field stores the fee or fees charged for the previous tax year to a qualified account, such as an IRA, HSA, or ESA.
\nField Number         **003:015**
\nMnemonic             **DISTRLASTYEAR:15**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThese fees are defined by your financial institution and may include, for example, a maintenance fee, a lobby fee, a teller fee.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRLASTYEAR:16
\n### Distr <PTY> Ex Earn <PTY>
\nThis field stores the total of all earnings from excess contributions made during the previous tax year for the same tax year.
\nField Number         **003:016**
\nMnemonic             **DISTRLASTYEAR:16**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the amount in the Distr <CTY> Ex Earn<CTY> field to this field.
\nWhen you run the IRS Reporting batch program, the system reports any amount in this field as the taxable amount of all withdrawals made during the previous tax year with one of the following distribution codes:
\n   - (8) Code 81 - Distribution of Excess Contribution for previous year
\n   - (8) Code J8 - Distribution of Excess Contribution for previous year
\n   - (8) Code 2 - Distribution of Excess Contribution for previous year, if the IRS code is (09) Archer MSA, (10) Medicare MSA, (14) Single HSA, or (15) Family HSA
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## DISTRLASTYEAR:17
\n### Distr <PTY> Ex Earn <PTY-1>
\nThis field stores the total of all earnings from excess contributions during the previous tax year for the tax year before that.
\nField Number         **003:017**
\nMnemonic             **DISTRLASTYEAR:17**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00403**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the amount in the Distr <CTY> Ex Earn <PTY> field to this field.
\nWhen you run the IRS Reporting batch program, the system reports any amount in this field as the taxable amount of all withdrawals made during the previous tax year with one of the following distribution codes:
\n   - (9) Code P - Distrib of Excess Contrib for previous tax year
\n   - (9) Code P1 - Distrib of Excess Contrib for previous tax year
\n   - (9) Code JP - Distrib of Excess Contrib for previous tax year
\n   - (9) Code 3 - Distrib of Excess Contrib for last year
\n   - (9) Code 2 - Distrib of Excess Contrib for last year, if the IRS code is (09) Archer MSA, (10) Medicare MSA, (14) Single HSA, or (15) Family HSA
\n
\nUnder normal circumstances, you should not revise this field.
`)
irsRecordFields.set("locator", ` 
\n### Locator
\nThe system stores a unique number within each member account in this field that can be used as a unique identification of this record.
\nField Number         **014**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **00414**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
