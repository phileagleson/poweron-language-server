export const irsDistributionRecordFields = new Map<string, string>()
irsDistributionRecordFields.set("type", ` 
\n### IRS Distribution Type
\nThis field stores a code that determines how the system uses the IRS Distribution record for dividends, maturity, or teller transactions.
\nField Number         **001**
\nMnemonic             **TYPE**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **02611**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nRequired entry: Make an entry in this field in one of the following ways to determine how the system uses the IRS Distribution record.
\n#### Data Type Descriptions
\n##### (0) Auto Distribution
\n   Set up multiple auto distribution records for multiple distributions. The Daily Posting batch program completes these distributions. Enter at least one value in the Source Share ID field for automatic distributions.
\n   
\n       - You must also make entries in the Distribution Amount, Distribution Code, Distribution Method, Distribution Frequency, and Distribution Day 1 fields.
\n##### (1) Dividend
\n   Complete only one IRS Distribution record with a value in the IRS Distribution Type field set to (1) Dividend to indicate the distribution code and withholding information the system should use when the Dividend Posting or the Daily Posting batch programs post dividends to shares. If the system finds no IRS Distribution record with a value in this field of (1) Dividend, it sets the distribution code for the dividend to (7) Normal Distribution and makes no withholding.
\n   
\n       - For dividends, the system uses the Dividend Post Code field in the Share record and the Transfer record (if applicable) to determine how to distribute the dividend, not the fields in the IRS Distribution record. The IRS Distribution record for dividends is used only to indicate the distribution code and withholding information.
\n##### (2) Maturity
\n   Complete only one IRS Distribution record with a value in the IRS Distribution Type field set to (2) Maturity to indicate the distribution code and withholding information to use when the Daily Posting batch program distributes maturity funds to shares. If the system finds no IRS Distribution record with a value in the IRS Distribution Type field of (2) Maturity, it sets the distribution code for the dividend to (7) Normal Distribution and makes no withholding.
\n   
\n       - For maturity dividends, the system uses the Maturity Post Code field in the Share record and the Transfer record (if applicable) to determine how to distribute the dividend, not the fields in the IRS Distribution record. The IRS Distribution record for maturity is used only to indicate the distribution code and withholding information for distributions.
\n##### (3) Teller Trans Default
\n   Complete only one IRS Distribution record with a value in the IRS Distribution Type field set to (3) Teller Trans Default to indicate the defaults used for the distribution code and withholding information when withdrawing funds from a tax-deferred account using the Share Withdrawal (SW) teller transaction.***Important:***  If you have multiple shares served by the same IRS record, the IRS Distribution Type field defaults you set up for dividends, maturity, or teller transactions apply to all those shares.
`)
irsDistributionRecordFields.set("effectivedate", ` 
\n### Effective Date
\nThis field stores the date on which the IRS Distribution record should take effect.
\nField Number         **002**
\nMnemonic             **EFFECTIVEDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **02612**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  If all the following conditions are true, the system sets the value in the Next Distribution Date field using the value in the Distribution Frequency field and the Distribution Day 1 or Distribution Day 2 field, whichever is next:
\nThe Next Distribution Date field is blank.
\nThe value in this field is blank or in the future.
\nThe value in the Distribution Frequency field is not 0.
\nThe values in the Distribution Day 1 or Distribution Day 2 fields are not 0.
`)
irsDistributionRecordFields.set("expirationdate", ` 
\n### Expiration Date
\nThis field stores the date to expire this IRS Distribution record.
\nField Number         **003**
\nMnemonic             **EXPIRATIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **02613**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter a date to expire this IRS Distribution record. Effective on and after this date, the system stops using this IRS Distribution record in determining distributions. The system also uses this field to determine when to purge this record.
`)
irsDistributionRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThe system stores the system date in this field when you create, change, or save the IRS Distribution record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **024**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **02634**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
irsDistributionRecordFields.set("amount", ` 
\n### Distribution Amount
\nThis field stores the required distribution amount based on the IRA Required Minimum Distribution (RMD) edit run calculation.
\nField Number         **004**
\nMnemonic             **AMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **02614**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe IRA Required Minimum Distribution (RMD) edit run updates this field, which is a required field and available for entry only if the IRS Distribution Type field is set to (0) Auto Distribution. If there have been previous distributions for this share within the year, when you run the RMD edit run, the value in this field will be less than for the previous distribution.
\nThe RMD edit run calculates both this field and the Calc Life Expect (x10) field in the IRA RMD Recalculation Info Tracking record using one of the following tables:
\n   - If the beneficiary is 10 years old or younger, the RMD edit run uses the Joint Life and Last Survivor Expectancy Table from the IRS website.
\n   - Otherwise, the RMD edit run uses the Uniform Lifetime Table from the IRS website.
\n
\nSince the RMD edit run rounds the distribution amount value up one cent, the value in this field might be one cent off compared to the IRS record.
`)
irsDistributionRecordFields.set("distributioncode", ` 
\n### Distribution Code
\nThis field stores a code that identifies the distribution code to use for the withdrawal.
\nField Number         **005**
\nMnemonic             **DISTRIBUTIONCODE**
\nData Type            **Code to 15**
\nSource               **User-entered**
\nHelp File            **02615**
\nDefault Control      **No**
\nDefault Value **7**
\n
\nThis field is required and is available regardless of the IRS Distribution Type value. Select the distribution code to use for the withdrawal. The values available depend on the values in the IRS Code field in the IRS record. This field determines where the distribution is recorded in the IRS record.
\n#### Data Type Descriptions
\n##### (1) Early (Premature) Distribution, No Known Exception
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (2) Deferred Comp
\n       - (3) SEP
\n       - (4) Keogh
\n       - (5) 401K
\n       - (6) Roth IRA
\n       - (7) SIMPLE IRA
\n       - (11) Roth Conversion
\n       - (12) Conduit IRA
\n       - (13) Governmental 457
\n##### (2) Early (Premature) Distribution, Exception Applies
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (2) Deferred Comp
\n       - (3) SEP
\n       - (4) Keogh
\n       - (5) 401K
\n       - (6) Roth IRA
\n       - (7) SIMPLE IRA
\n       - (11) Roth Conversion
\n       - (12) Conduit IRA
\n       - (13) Governmental 457
\n##### (3) Disability
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (2) Deferred Comp
\n       - (3) SEP
\n       - (4) Keogh
\n       - (5) 401K
\n       - (6) Roth IRA
\n       - (7) SIMPLE IRA
\n       - (8) Coverdell ESA
\n       - (9) Archer MSA
\n       - (10) Medicare MSA
\n       - (11) Roth Conversion
\n       - (12) Conduit IRA
\n       - (13) Governmental 457
\n       - (14) Single HSA
\n       - (15) Family HSA
\n##### (4) Death
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (2) Deferred Comp
\n       - (3) SEP
\n       - (4) Keogh
\n       - (5) 401K
\n       - (6) Roth IRA
\n       - (7) SIMPLE IRA
\n       - (8) Coverdell ESA
\n       - (9) Archer MSA
\n       - (10) Medicare MSA
\n       - (11) Roth Conversion
\n       - (12) Conduit IRA
\n       - (13) Governmental 457
\n       - (14) Single HSA
\n       - (15) Family HSA
\n##### (5) Recharacterized Contribution|Prohibited Transaction
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (2) Deferred Comp
\n       - (3) SEP
\n       - (4) Keogh
\n       - (5) 401K
\n       - (6) Roth IRA
\n       - (7) SIMPLE IRA
\n       - (9) Archer MSA
\n       - (10) Medicare MSA
\n       - (11) Roth Conversion
\n       - (12) Conduit IRA
\n       - (13) Governmental 457
\n       - (14) Single HSA
\n       - (15) Family HSA
\n##### (6) Recharacterized Contribution|Direct Rollover|Early Distribution in First Two Years|Code 6 - Recipient is not Designated Beneficiary|Death Later Year Non-Spouse
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (3) SEP
\n       - (4) Keogh
\n       - (5) 401K
\n       - (6) Roth IRA
\n       - (7) SIMPLE IRA
\n       - (8) Coverdell ESA
\n       - (9) Archer MSA
\n       - (10) Medicare MSA
\n       - (11) Roth Conversion
\n       - (12) Conduit IRA
\n       - (13) Governmental 457
\n       - (14) Single HSA
\n       - (15) Family HSA
\n##### (7) Normal Distribution|Code 1 Normal Distribution
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (2) Deferred Comp
\n       - (3) SEP
\n       - (4) Keogh
\n       - (5) 401K
\n       - (6) Roth IRA
\n       - (7) SIMPLE IRA
\n       - (8) Coverdell ESA
\n       - (9) Archer MSA
\n       - (10) Medicare MSA
\n       - (11) Roth Conversion
\n       - (12) Conduit IRA
\n       - (13) Governmental 457
\n       - (14) Single HSA
\n       - (15) Family HSA
\n##### (8) Distribution of Excess Contribution (current tax year)
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (2) Deferred Comp
\n       - (3) SEP
\n       - (4) Keogh
\n       - (5) 401K
\n       - (6) Roth IRA
\n       - (7) SIMPLE IRA
\n       - (8) Coverdell ESA
\n       - (9) Archer MSA
\n       - (10) Medicare MSA
\n       - (11) Roth Conversion
\n       - (12) Conduit IRA
\n       - (13) Governmental 457
\n       - (14) Single HSA
\n       - (15) Family HSA
\n##### (9) Distribution of Excess Contribution (previous tax year)
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (2) Deferred Comp
\n       - (3) SEP
\n       - (4) Keogh
\n       - (5) 401K
\n       - (6) Roth IRA
\n       - (7) SIMPLE IRA
\n       - (8) Coverdell ESA
\n       - (9) Archer MSA
\n       - (10) Medicare MSA
\n       - (11) Roth Conversion
\n       - (12) Conduit IRA
\n       - (13) Governmental 457
\n       - (14) Single HSA
\n       - (15) Family HSA
\n##### (10) Direct Rollover|Early (Premature) Distribution, IRS Levy
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (3) SEP
\n       - (6) Roth IRA
\n       - (11) Roth Conversion
\n##### (11) Direct Rollover to Roth IRA
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (3) SEP
\n       - (4) Keogh
\n       - (5) 401K
\n       - (12) Conduit IRA
\n       - (13) Governmental 457
\n       - (14) Single HSA
\n       - (15) Family HSA
\n##### (12) Death Direct Rollover
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (3) SEP
\n       - (4) Keogh
\n       - (5) 401K
\n       - (12) Conduit IRA
\n       - (13) Governmental 457
\n##### (13) Death Direct Rollover to Roth
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (3) SEP
\n       - (4) Keogh
\n       - (5) 401K(11) Roth Conversion
\n       - (12) Conduit IRA
\n       - (13) Governmental 457
\n##### (14) Transfer to Another Institution|Transfer from Another Institution
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (2) Deferred Comp
\n       - (3) SEP
\n       - (4) Keogh
\n       - (5) 401K
\n       - (6) Roth IRA
\n       - (7) SIMPLE IRA
\n       - (8) Coverdell ESA
\n       - (9) Archer MSA
\n       - (10) Medicare MSA
\n       - (11) Roth Conversion
\n       - (12) Conduit IRA
\n       - (13) Governmental 457
\n       - (14) Single HSA
\n       - (15) Family HSA
\n##### (15) Transfer Within this Institution
\n   Used only with the following values in the IRS Code field in the IRS record:
\n       - (1) IRA
\n       - (2) Deferred Comp
\n       - (3) SEP
\n       - (4) Keogh
\n       - (5) 401K
\n       - (6) Roth IRA
\n       - (7) SIMPLE IRA
\n       - (8) Coverdell ESA
\n       - (9) Archer MSA
\n       - (10) Medicare MSA
\n       - (11) Roth Conversion
\n       - (12) Conduit IRA
\n       - (13) Governmental 457
\n       - (14) Single HSA
\n       - (15) Family HSA
\n
\nWhen using an IRS Distribution Type field value of (0) Auto Distribution, you must transfer from a tax-deferred share to a non-tax-deferred share. Because of this, certain distribution codes are not available; for example, you would never use (15) Transfer Within this Institution because you cannot transfer from a tax-deferred share to another tax-deferred share using an IRS Distribution Type field value of (0) Auto Distribution. Likewise, you cannot use (10) Early (Premature) Distribution, IRS Levy since it is an invalid entry; if you select it, an error message appears.
`)
irsDistributionRecordFields.set("fedwholdcode", ` 
\n### Fed Withholding Code
\nThis field stores a code that determines how the system handles federal withholding for this distribution.
\nField Number         **006**
\nMnemonic             **FEDWHOLDCODE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **02616**
\nDefault Control      **No**
\nDefault Value **1**
\n
\n#### Data Type Descriptions
\n##### (0) No Withholding
\n   No withholding will be taken out.##### (1) Standard Withholding
\n   Withhold the standard federal withholding amount.##### (2) Percent/Amount
\n   Withhold an amount or a percentage of the distribution. Indicate the amount using the Fed Withholding Amount and Fed Withholding Percent fields. If you indicate both, the system calculates the withholding by first taking the percent indicated and then adding the amount.
\n       - Example:
\n       - If you set a Fed Withholding Percent field value of 2.000 and a Fed Withholding Amount field value of 5.00, the system withholds 2% of the total distribution, plus an additional $5.00.
`)
irsDistributionRecordFields.set("fedwholdpercent", ` 
\n### Fed Withholding Percent
\nThis field stores the percentage the system should withhold for federal withholding.
\nField Number         **007**
\nMnemonic             **FEDWHOLDPERCENT**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **02617**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nIf the Fed Withholding Code field value is set to (2) Percent/Amount, you must indicate how much the system should withhold. Use this field if you want to enter a percentage for federal withholding. If you enter a non-zero value in both the Fed Withholding Percent and Fed Withholding Amount fields, the system calculates the value for the percent of the total distribution and then adds the additional withholding amount. If that sum exceeds the distribution amount, the system withholds 100% of the distribution amount.
`)
irsDistributionRecordFields.set("fedwholdamount", ` 
\n### Fed Withholding Amount
\nThis field stores a dollar amount for how much the system should withhold federal withholding.
\nField Number         **008**
\nMnemonic             **FEDWHOLDAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **02618**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf the Fed Withholding Code field value is set to (2) Percent/Amount, the IRA RMD edits run updates how much the system should withhold. Use this field to enter a dollar amount for federal withholding. If you enter a non-zero value in both the Fed Withholding Percent and Fed Withholding Amount fields, the system calculates the value for the percent of the total distribution and then adds this additional withholding amount. If that sum exceeds the distribution amount, the system withholds 100% of the distribution amount.
\n***Important:***  If the IRS Distribution Type field value is (1) Dividend or (2) Maturity, and if you are transferring funds from a tax-deferred share to more than one non-tax-deferred account, the system withholds the value in this field from each non-tax-deferred account. For example, if you enter $25.00 in this field and you are transferring 50% to non-tax-deferred share 41 and the other 50% to non-tax-deferred share 42, the system withholds $25.00 from the distribution to share 41 and $25.00 from share 42, for a total withholding of $50.00.
`)
irsDistributionRecordFields.set("statewholdcode", ` 
\n### State Withholding Code
\nThis field stores a code that determines how the system handles state withholding for this distribution.
\nField Number         **009**
\nMnemonic             **STATEWHOLDCODE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **02619**
\nDefault Control      **No**
\nDefault Value **1**
\n
\n#### Data Type Descriptions
\n##### (0) No Withholding
\n   No withholding will be taken out.##### (1) Standard Withholding
\n   Withhold the standard state withholding amount.##### (2) Percent/Amount
\n   Withhold an amount or a percentage of the distribution. Indicate the amount using the State Withholding Amount and the State Withholding Percent fields. If you indicate both, the system calculates the withholding by first taking the percent indicated and then adding the amount.
\n       - Example:
\n       - If you set a State Withholding Percent field value of 2.000 and a State Withholding Amount field value of 5.00, the system withholds 2% of the total distribution, plus an additional $5.00.
`)
irsDistributionRecordFields.set("statewholdpercent", ` 
\n### State Withholding Percent
\nThis field stores the percentage the system should withhold for state withholding.
\nField Number         **010**
\nMnemonic             **STATEWHOLDPERCENT**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **02620**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nIf the State Withholding Code field value is set to (2) Percent/Amount, you must indicate how much the system should withhold. Use this field if you want to enter a percentage for state withholding. If you enter a non-zero value in both the State Withholding Percent and State Withholding Amount fields, the system calculates the value for the percent of the total distribution and then adds the additional withholding amount. If that sum exceeds the distribution amount, the system withholds 100% of the distribution amount.
`)
irsDistributionRecordFields.set("statewholdamount", ` 
\n### State Withholding Amount
\nThis field stores a dollar amount for how much the system should withhold state withholding.
\nField Number         **011**
\nMnemonic             **STATEWHOLDAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **02621**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf the State Withholding Code field value is set to (2) Percent/Amount, you must indicate how much the system should withhold. Use this field to enter a dollar amount for federal withholding. If you enter a non-zero value in both the State Withholding Percent and State Withholding Amount fields, the system calculates the value for the percent of the total distribution and then adds this additional withholding amount. If that sum exceeds the distribution amount, the system withholds 100% of the distribution amount.
\n***Important:***  If the IRS Distribution Type field value is (1) Dividend or (2) Maturity, and if you are transferring funds from a tax-deferred share to more than one non-tax-deferred account, the system withholds the value in this field from each non-tax-deferred account. For example, if you enter $25.00 in this field and you are transferring 50% to non-tax-deferred share 41 and the other 50% to non-tax-deferred share 42, the system withholds $25.00 from the distribution to share 41 and $25.00 from share 42, for a total withholding of $50.00.
`)
irsDistributionRecordFields.set("distributionmethod", ` 
\n### Distribution Method
\nThis field is used only for IRS Distribution records with a value in the IRS Distribution Type field of (0) Auto Distribution. This field stores a code that indicates how the distribution should be handled.
\nField Number         **012**
\nMnemonic             **DISTRIBUTIONMETHOD**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **02622**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) By Check
\n   The credit union should mail a check directly to the member to complete this automatic distribution. The Daily Posting batch program initiates the distribution and generates a check to the member. The check remains in the Check Issuance file until you print it. The check is issued to the name in the Name record for this account with the same value in the SSN/TIN field (Social Security Number) as the IRS record.##### (1) Transfer
\n   The system should transfer the distribution to another share or to another account. You indicate the receiving account and share using the Destination Account and Destination Share ID fields. You must also indicate the source account and share using one or more Source Share ID # fields.
\n`)
irsDistributionRecordFields.set("destinationaccount", ` 
\n### Destination Account
\nThis field is used only for IRS Distribution records with a value in the IRS Distribution Type field of (0) Auto Distribution and a value in the Distribution Method field of (1) Transfer. This field stores the account number associated with the share to which you are transferring funds.
\nField Number         **013**
\nMnemonic             **DESTINATIONACCOUNT**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **02623**
\nDefault Control      **No**
\nDefault Value **The account currently open at the time you create this record**
\n
\nEnter the account number associated with the share to which you are transferring funds.
`)
irsDistributionRecordFields.set("destinationid", ` 
\n### Destination Share ID
\nThis field is used only for IRS Distribution records with a value in the IRS Distribution Type field of (0) Auto Distribution and a value in the Distribution Method field of (1) Transfer. This field stores the share ID to which you are transferring funds.
\nField Number         **014**
\nMnemonic             **DESTINATIONID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **02624**
\nDefault Control      **No**
\nDefault Value **<Blank)**
\n
\nType an asterisk (*) to display a list of the share IDs for eligible shares. Select the share to which you are transferring funds. Since this record is for the distribution of tax-deferred funds, the destination share should not be tax-deferred (as determined by the value in the IRS Code field in the Share record).
`)
irsDistributionRecordFields.set("distributionfreq", ` 
\n### Distribution Frequency
\nThis field is used only for IRS Distribution records with a value in the IRS Distribution Type field of (0) Auto Distribution. This field stores a code that defines how often the distribution should occur.
\nField Number         **015**
\nMnemonic             **DISTRIBUTIONFREQ**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **02625**
\nDefault Control      **No**
\nDefault Value **4**
\n
\n#### Data Type Descriptions
\n##### (0) Demand
\n   The distribution should occur on demand.##### (1) Annual
\n   The automatic distribution should occur annually on the anniversary of the value in the Next Distribution Date field.##### (2) Semiannual
\n   The automatic distribution should occur semiannually (twice per year) on the six-month anniversary of the value in the Next Distribution Date field.##### (3) Quarterly
\n   The automatic distribution should occur quarterly on the quarterly anniversary of the value in the Next Distribution Date field.##### (4) Monthly
\n   The automatic distribution should occur monthly. The system schedules the transfer on the day indicated in the Distribution Day 1 field.##### (5) Semimonthly
\n   The automatic distribution should occur semimonthly (twice per month). The system schedules the transfers on the days indicated in the Distribution Day 1 and Distribution Day 2 fields.##### (8) Biweekly
\n   The automatic distribution should occur biweekly (every two weeks).##### (9) Weekly
\n   The automatic distribution should occur weekly.
\nThe system completes the distribution on the next distribution date, or if the next distribution date has passed and the transfer has not yet been completed.
`)
irsDistributionRecordFields.set("distributionday1", ` 
\n### Distribution Day 1
\nThis field is used only for IRS Distribution records with a value in the IRS Distribution Type field of (0) Auto Distribution. This field stores the day of the month on which you want the automatic distribution to take place for annual, semiannual, quarterly, monthly, or semimonthly transfers.
\nField Number         **016**
\nMnemonic             **DISTRIBUTIONDAY1**
\nData Type            **Code to 31**
\nSource               **User-entered**
\nHelp File            **02626**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Invalid entry##### 1–30
\n   The day of the month on which you want the automatic distribution to take place##### 31
\n   The last day of the month for every month that matches the value in the Distribution Frequency fieldThis field is available for entry only if the value in the IRS Distribution Type is (0) Auto Distribution and the value in the Distribution Frequency field is one of the following:
\n   - (1) Annual
\n   - (2) Semiannual
\n   - (3) Quarterly
\n   - (4) Monthly
\n   - (5) Semimonthly
`)
irsDistributionRecordFields.set("distributionday2", ` 
\n### Distribution Day 2
\nThis field is used only for IRS Distribution records with a value in the IRS Distribution Type field of (0) Auto Distribution. This field stores the day of the month on which you want a second distribution day within a month for semimonthly transfers.
\nField Number         **017**
\nMnemonic             **DISTRIBUTIONDAY2**
\nData Type            **Code to 31**
\nSource               **User-entered**
\nHelp File            **02627**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Invalid entry##### 1–30
\n   The day of the month on which you want the second automatic distribution to occur within the month##### 31
\n   The last day of the month for every month that matches the value in the Distribution Frequency field
\nThis field is available for entry only if the value in the IRS Distribution Type field is (0) Auto Distribution and the value in the Distribution Frequency field is (5) Semimonthly.
`)
irsDistributionRecordFields.set("rege", ` 
\n### Reg E
\nThis field is used only for IRS Distribution records with a value in the IRS Distribution Type field of (0) Auto Distribution and a value in the Distribution Method field of (1) Transfer. This field stores a code that indicates if the transfer be flagged as Reg E or not.
\nField Number         **018**
\nMnemonic             **REGE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **02628**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Reg E
\n   Indicate that the transfer is between family members and should not be flagged as Reg E unless the transfer is to an external account at another financial institution.##### (1) Reg E
\n   The transfer is between different accounts and should be flagged as Reg E.***Important:***  Reg E provides regulations for electronic funds transfers and does not apply to checks.
`)
irsDistributionRecordFields.set("nextdistributndate", ` 
\n### Next Distribution Date
\nThis field is used only for IRS Distribution records with a value in the IRS Distribution Type field of (0) Auto Distribution. This field stores the date of the next automatic share distribution.
\nField Number         **019**
\nMnemonic             **NEXTDISTRIBUTNDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **02629**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n***Important:***  If all the following conditions are true, the system sets the value in the Next Distribution Date field using the value in the Distribution Frequency field and the Distribution Day 1 or Distribution Day 2 field, whichever is next:
\nThe Next Distribution Date field is blank.
\nThe value in this field is blank or in the future.
\nThe value in the Distribution Frequency field is not 0.
\nThe values in the Distribution Day 1 or Distribution Day 2 fields are not 0.
`)
irsDistributionRecordFields.set("lastdistributnamt", ` 
\n### Last Distribution Amount
\nThis field stores the total amount of the distribution whenever the system performs certain distributions.
\nField Number         **020**
\nMnemonic             **LASTDISTRIBUTNAMT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **02630**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system updates this field with the total amount of the distribution whenever it performs one of these distributions:
\n
\nUnder normal circumstances, you should not revise this field.
`)
irsDistributionRecordFields.set("lastdistributndate", ` 
\n### Last Distribution Date
\nThis field stores the transaction posting date of the distribution whenever the system performs certain distributions.
\nField Number         **021**
\nMnemonic             **LASTDISTRIBUTNDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **02631**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system updates this field with the transaction posting date of the distribution whenever it performs one of these distributions:
\n
\nUnder normal circumstances, you should not revise this field.
`)
irsDistributionRecordFields.set("sourceid", ` 
\n## SOURCEID:1 - SOURCEID:20
\n### Source Share ID 1 - Source Share ID 20
\nThese fields are used only for IRS Distribution records with a value in the IRS Distribution Type field of (0) Auto Distribution. These fields store share IDs in the same account that you can use as source shares for IRS distributions.
\nField Number         **023:1 - 023:20**
\nMnemonic             **SOURCEID:1 - SOURCEID:20**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **02633**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nType an asterisk (*) to display a list of the share IDs in the same account you can use as a source share for IRS distribution. Select the share from which you want to transfer funds. Since you use the IRS Distribution record only for the distribution of tax-deferred funds, the source share must be a tax-deferred share. In addition, the share must have the same value in the IRS Code and IRS Plan fields as the parent IRS record.
\n
\nSelect share IDs for these fields in the order you want the system to use as the source of tax-deferred funds for distributions. The system makes the distribution from the share whose ID is entered in the Source Share ID 1 field first. When that share is depleted to the available balance, the system distributes the remaining funds from the share whose ID is entered in the Source Share ID 2 field, etc.
`)
irsDistributionRecordFields.set("locator", ` 
\n### Locator
\nThis field stores a unique number within each member account that can be used as a unique identification of this record.
\nField Number         **022**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field value in each record is unique for each member account. You can use this field as a unique identification of a specific record.
`)
