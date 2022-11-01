export const trackingRecordFields = new Map<string, string>()
trackingRecordFields.set("type", ` 
\n### Tracking Type
\nThis field determines how you use the Account Tracking record.
\nField Number         **001**
\nMnemonic             **TYPE**
\nData Type            **Code to 99**
\nSource               **User-entered or System-calculated**
\nHelp File            **06801**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n#### Data Type Descriptions
\n##### (0) MC Status Inquiry
\n   Select this option if the Account Tracking record stores mortgage loan information converted from the MC (Mortgage Computer) software by an edit run. The following fields are predefined for the MC Status Inquiry Tracking record:
\n       - User Char 01 = MC Account Number
\n       - User Char 02 = DDA Account Number
\n       - User Char 03 = Description
\n       - User Char 04 = Loan Officer
\n       - User Char 05 = Repayment Code
\n       - User Char 06 = Property Street Address
\n       - User Char 07 = Property City Zip
\n       - User Amount 01 = Principal Balance
\n       - User Amount 02 = Escrow Balance
\n       - User Amount 03 = P&I Payment
\n       - User Amount 04 = Escrow Payment Total
\n       - User Amount 05 = Late Fees Due
\n       - User Amount 06 = Total Amount Due
\n       - User Amount 07 = New P&I Payment Amount
\n       - User Amount 08 = Loan Amount
\n       - User Amount 09 = Curtailment
\n       - User Code 01 = Info Last Updated Time
\n       - User Code 02 = Statement Group
\n       - User Code 03 = Loan Purpose
\n       - User Code 04 = Loan Term
\n       - User Code 05 = Loan Type
\n       - User Date 01 = Interest Adjustment Date
\n       - User Date 02 = Next Payment Due Date
\n       - User Date 03 = P&I Adjustment Date
\n       - User Date 04 = Info Last Updated Date
\n       - User Date 05 = Statement Cutoff Date
\n       - User Date 06 = Date of Loan
\n       - User Date 07 = Statement Prev Date
\n       - User Rate 01 = Interest Rate
\n       - User Rate 02 = Loan to Value
\n##### (1) FICS Status Inquiry
\n   Select this option if the Account Tracking record stores loan information converted from the Financial Industry Computer Systems, Inc.® (FICS) software by an edit run. The following fields are predefined for the FICS Status Inquiry Tracking record:
\n       - User Char 01 = FICS Account Number
\n       - User Char 02 = FICS Member Number
\n       - User Char 03 = Auto-Payment Choice
\n       - User Char 04 = Description
\n       - User Char 05 = Share ID
\n       - User Amount 01 = Current Principal Balance
\n       - User Amount 02 = Current T&I Balance
\n       - User Amount 03 = Current P&I Payment
\n       - User Amount 04 = Impound Payment
\n       - User Amount 05 = Current Late Charges
\n       - User Amount 06 = Total Payment Amount
\n       - User Amount 07 = Interest Paid YTD
\n       - User Amount 08 = Taxes Paid YTD
\n       - User Amount 09 = HAX/FLD Ins Paid YTD
\n       - User Amount 10 = Monthly Subsidy Amount
\n       - User Code 01 = Info Last Updated Time
\n       - User Code 02 = Auto-Payment Code
\n       - User Code 03 = Statement Group
\n       - User Code 04 = Loan Code
\n       - User Code 05 = Prevent FICS Address Update
\n       - User Date 02 = Next Payment Due Date
\n       - User Date 03 = P&I Adjustment Date
\n       - User Date 04 = Info Last Updated Date
\n       - User Date 05 = Statement Cutoff Date
\n       - User Date 06 = Statement Prev Date
\n       - User Date 07 = Last FICS Address Update Date
\n       - User Number 01 = Name Locator Code
\n       - User Rate 01 = Interest Rate
\n##### (2) Other Account Information
\n   Select this option if the Account Tracking record stores information about other accounts related to the member's account. The following fields are predefined for the Other Account Information Tracking record:
\n       - User Char 01 = Description
\n       - User Amount 01 = Balance
\n       - User Amount 02 = Available/DQ
\n       - User Amount 03 = Payment
\n       - User Code 01 = Available/DQ Print Code
\n       - User Code 02 = Payment Print Code
\n       - User Code 03 = Statement Group
\n       - User Date 01 = Due Date
\n       - User Date 02 = Statement Cutoff Date
\n       - User Date 03 = Statement Prev Date
\n##### (3) Credit Card Status Inquiry
\n   Select this option if the Account Tracking record stores credit card information received from certain credit card processors. The following fields are predefined for Credit Card Status Inquiry Tracking record:
\n       - User Char 01 = Card Number
\n       - User Char 02 = Block Code
\n       - User Char 03 = Reclass Code
\n       - User Char 04 = Description
\n       - User Amount 01 = Balance
\n       - User Amount 02 = Available
\n       - User Amount 03 = Credit Limit
\n       - User Amount 04 = Last Payment Amount
\n       - User Amount 05 = Next Payment Amount
\n       - User Code 01 = Card/Loan Type
\n       - User Code 02 = Statement Group
\n       - User Date 01 = Last Payment Date
\n       - User Date 02 = Next Payment Date
\n       - User Date 03 = Expiration Date
\n       - User Date 04 = Processors Update Date
\n       - User Date 05 = Statement Cutoff Date
\n       - User Date 06 = Statement Prev Date
\n##### (4) Unclaimed Property Information
\n   Select this option if the Account Tracking record stores unclaimed property information to be reported to the NAUPA (National Association of Unclaimed Property Administrators). Your financial institution must create an Account Tracking record of this type for each type of tangible asset that must be reported to NAUPA. The following fields are predefined for the Unclaimed Property Information Tracking record:
\n       - User Number 01 = Number of Shares Due the Owner
\n       - User Number 02 = Additional Shares
\n       - User Number 03 = Deleted Shares
\n       - User Number 04 = Remitted Shares
\n       - User Number 05 = Number of Unexchanged Shares
\n       - User Char 01 = Property Description
\n       - User Char 02 = Property Type
\n       - User Char 03 = Deduction Type
\n       - User Char 04 = Addition Type
\n       - User Char 05 = Deletion Type
\n       - User Char 06 = Stock Issue Name
\n       - User Char 07 = CUSIP Number
\n       - User Char 08 = Unexchanged Issue Name
\n       - User Char 09 = CUSIP Number
\n       - User Amount 01 = Amount Due the Owner
\n       - User Amount 02 = Deduction Amount
\n       - User Amount 03 = Addition Amount
\n       - User Amount 04 = Deletion Amount
\n       - User Code 01 = Warning Code
\n       - User Date 01 = Starting Transaction Date
\n       - User Date 02 = Ending Transaction Date
\n       - User Date 03 = Warning Expiration
\n       - User Date 04 = Date Reported
\n       - User Date 05 = Date Advertised
\n       - User Rate 01 = Current Interest Rate
\n##### (5) IRA RMD Recalculation Info
\n   Select this option if if the Account Tracking record is used in conjunction with an edit run that can be used to recalculate the required minimum distribution (RMD).
\n       - Symitar has developed an edit run that can be implemented to calculate the required minimum distribution (RMD) for IRA accounts. This edit run has been designed to run in two modes:
\n       - Recalculate and Update Tracking records
\n       - Update EFT records and IRS Distribution records
\n   
\n       - You can also selectively exclude certain Account Tracking records from the edit run. If you are interested, please contact Symitar Support for further details and information.
\n   
\n       - The following fields are predefined for the IRA RMD Recalculation Info Tracking record:
\n       - User Number 01 = Distribution Frequency
\n       - User Number 02 = Life Expect Offset (years)
\n       - User Number 03 = Calculated Life Expect (x10)
\n       - User Number 04 = Remaining Yearly Distributions
\n       - User Char 01 = Owner SSN
\n       - User Char 02 = EFT Group Number
\n       - User Char 03 = Source ID
\n       - User Char 04 = Destination ID
\n       - User Char 05 = Destination SSN
\n       - User Char 06 = Destination Name
\n       - User Char 07 = Destination Address Line 1
\n       - User Char 08 = Destination Address Line 2
\n       - User Char 09 = Check Reference
\n       - User Char 10 = Destination Account Number
\n       - User Amount 01 = Specific Yearly Amount
\n       - User Amount 02 = Additional Yearly Amount
\n       - User Amount 03 = Yearly Withholding Amount
\n       - User Amount 04 = Calculated Yearly RMD Amount
\n       - User Amount 05 = Calculated Yearly Dist Amount
\n       - User Amount 06 = Calculated Yearly W/H Amount
\n       - User Code 01 = Oldest Beneficiary Is Spouse
\n       - User Code 02 = Refigure Owner Life Expect
\n       - User Code 03 = Refigure Spouse Life Expect
\n       - User Code 04 = IRS Code
\n       - User Code 05 = IRS Plan
\n       - User Code 06 = EFT Type
\n       - User Code 07 = Apply Tracking Info
\n       - User Code 08 = Never Apply Tracking Info
\n       - User Code 09 = Custom Distribution Calc Code
\n       - User Code 10 = Custom Withholding Calc Code
\n       - User Date 01 = Oldest Beneficiary Birth Date
\n       - User Date 02 = Youngest Nonspouse Birth Date
\n       - User Date 03 = Effective Date
\n       - User Date 04 = Owner Birthdate
\n       - User Date 05 = Calculated Life Expect Date
\n       - User Rate 01 = Withholding Percent
\n       - User Rate 02 = Specific Percent of IRA Value
\n##### (6) Non-Mbr Bond/Member 1099-INT
\n   Select this option if if the Account Tracking record stores bond redemption information on a bond purchased by a member for a non-member recipient. The following fields are predefined for the Non-Mbr Bond/Member 1099-INT Tracking record:
\n       - User Char 01 = Recipient SSN
\n       - User Char 02 = Recipient Name
\n       - User Char 03 = Recipient Street
\n       - User Char 04 = Recipient City
\n       - User Char 05 = Recipient State
\n       - User Char 06 = Recipient Zip Code
\n       - User Char 07 = Name Control
\n       - User Code 01 = Redemption/Reporting Year
\n       - User Amount 01 = Bond Interest
\n       - User Amount 02 = Interest Income
\n       - User Amount 03 = Early Withdrawal Penalty
\n       - User Amount 04 = Federal Income Tax Withheld
\n       - User Amount 05 = State Income Tax Withheld
\n##### (7) Corporate Member Data
\n   Select this option if if the Account Tracking record stores information about corporate member credit unions. The following fields are predefined for the Corporate Member Data Tracking record:
\n       - User Char 01 = Charter Number
\n       - User Char 02 = Chapter
\n       - User Char 03 = Processor
\n       - User Char 04 = Business Hours (line 1)
\n       - User Char 05 = Business Hours (line 2)
\n       - User Char 06 = Business Hours (line 3)
\n       - User Amount 01 = Incoming Wire Min Notify Amt
\n       - User Amount 02 = Mbr-to-Mbr Xfer Min Notify Amt
\n       - User Amount 03 = New Wire Min Verify Amt
\n       - User Amount 04 = Western Union Min Verify Amt
\n       - User Amount 05 = Pre-Auth Wire Min Verify Amt
\n       - User Code 01 = Verify Pre-Auth Template Edits
\n       - User Code 02 = Incoming Funds Notify Option
\n##### (8) NetTeller
\n   Select this option if the Account Tracking record stores information about member bill payment through NetTeller Online Banking. The following fields are predefined for the NetTeller Tracking record:
\n       - User Amount 16 = NetTeller Misc Amt 1
\n       - User Amount 17 = NetTeller Misc Amt 2
\n       - User Amount 18 = NetTeller Misc Amt 3
\n       - User Amount 19 = NetTeller Misc Amt 4
\n       - User Amount 20 = NetTeller Misc Amt 5
\n       - User Char 01 = NetTeller ID
\n       - User Char 02 = Bill Pay Fee Share ID
\n       - User Char 03 = Bill Pay Share List 1
\n       - User Char 04 = Bill Pay Share List 2
\n       - User Char 05 = Bill Pay Share List 3
\n       - User Char 06 = Bill Pay Share List 4
\n       - User Char 07 = Bill Pay Share List 5
\n       - User Char 08 = Bill Pay Share List 6
\n       - User Char 09 = Bill Pay Share List 7
\n       - User Char 10 = Bill Pay Share List 8
\n       - User Char 11 = DirectLine Fee Share ID
\n       - User Char 16 = NetTeller Misc Char 1
\n       - User Char 17 = NetTeller Misc Char 2
\n       - User Char 18 = NetTeller Misc Char 3
\n       - User Char 19 = NetTeller Misc Char 4
\n       - User Char 20 = NetTeller Misc Char 5
\n       - User Code 01 = Current Month Bill Count
\n       - User Code 02 = Last Month Bill Count
\n       - User Code 03 = NetTeller PIN
\n       - User Code 04 = Use Alternate Address
\n       - User Code 16 = NetTeller Misc Code 1
\n       - User Code 17 = NetTeller Misc Code 2
\n       - User Code 18 = NetTeller Misc Code 3
\n       - User Code 19 = NetTeller Misc Code 4
\n       - User Code 20 = NetTeller Misc Code 5
\n       - User Date 01 = Bill Pay Open Date
\n       - User Date 02 = Bill Pay Close Date
\n       - User Date 03 = Bill Pay Last Pmt Date
\n       - User Date 04 = DirectLine Open Date
\n       - User Date 05 = DirectLine Close Date
\n       - User Date 16 = NetTeller Misc Date 1
\n       - User Date 17 = NetTeller Misc Date 2
\n       - User Date 18 = NetTeller Misc Date 3
\n       - User Date 19 = NetTeller Misc Date 4
\n       - User Date 20 = NetTeller Misc Date 5
\n       - User Number 01 = NT Associated Pref Locator
\n       - User Number 16 = NetTeller Misc Num 1
\n       - User Number 17 = NetTeller Misc Num 2
\n       - User Number 18 = NetTeller Misc Num 3
\n       - User Number 19 = NetTeller Misc Num 4
\n       - User Number 20 = NetTeller Misc Num 5
\n##### (9) Service List
\n   Select this option if the Account Tracking record stores services not identified in the 360 View parameters. The following field is predefined for the Service List Tracking record:
\n       - User Char 01–20 = Service 1-20
\n##### (10) Foreign Country Access
\n   Select this option if if the Account Tracking record stores foreign country access codes. The following fields are predefined for the Foreign Country Access Tracking record:
\n       - User Code 01–20 = Country Code 1-20
\n       - User Date 01–20 = Expiration Date 1-20
\n##### (11) Block Rule Override
\n   Select this option if the Account Tracking record stores block rule override. The following fields are predefined for the Block Rule Override Tracking record:
\n       - User Code 01–20 = Override Rule 1-20
\n       - User Date 01–20 = Expiration Date 1-20
\n##### (12) FACT Act Identity Theft Red Flag
\n   Select this option if the Account Tracking record stores FACT Act identity theft red flag information. The following fields are predefined for the FACT Act Identity Theft Red Flag Tracking record:
\n       - User Char 01 = Social Security Number
\n       - User Char 02 = Risk Level
\n       - User Char 03 = Alert From Fraud Detection
\n       - User Char 04 = Suspicious Documents
\n       - User Char 05 = Suspicious Identifying Information
\n       - User Char 06 = Unusual Use
\n       - User Char 07 = Notice from Member
\n       - User Char 08 = Other
\n       - User Date 01 = Risk Review Date
\n##### (13) 1099-MISC
\n   Select this option if the Account Tracking record stores miscellaneous income information related to the member's account.
\n   
\n       - If multiple Account Tracking records have the same value in the SSN/TIN field and the IRS Reporting Box field, the system checks the amount of the IRS Reporting Amount field for each record. If that amount exceeds the value you type at the 1099-MISC Cut-off Amount prompt, the IRS Reporting batch program reports the multiple Account Tracking records on one 1099-MISC form.
\n   
\n       - If neither Tracking record has a value in the SSN/TIN field, the batch program compares the values of the SSN/TIN fields from the Name record for each member.
\n##### (14) Account Change History
\n   Select this option if the Account Tracking record stores the account change history.
\n       - This record includes the following system-defined fields:
\n       - Account Change Date 01 - Account Change Date 10
\n       - Account Change Date 11 - Account Change Date 20
\n       - 	
\n       - Account Number 01 - Account Number 10
\n       - Account Number 11 - Account Number 20
\n       - The system does not display some standard Tracking record fields on the file creation screen. The following fields for Account Tracking records that have the Tracking Type field set to (14) Change Account Number Tracking appear only on the file revision screen:
\n       - Creation Date
\n       - Creation Time
\n       - Expiration Date
\n       - Last FM Date
\n       - Locator
\n       - 	
\n       - Record Change Date
\n       - Tracking Code
\n       - Tracking Type
\n       - User ID
\n##### 15–29
\n   These tracking types are reserved for future use.##### 30–99
\n   These tracking types are defined by your financial institution if you want to use the Account Tracking record for another purpose.
\n`)
trackingRecordFields.set("trackingcode", ` 
\n### Tracking Code
\nThis field stores a credit union-defined code that further identifies the purpose of the Account Tracking record.
\nField Number         **009**
\nMnemonic             **TRACKINGCODE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **06809**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is for informational purposes only. The system does not use this field.
`)
trackingRecordFields.set("creationdate", ` 
\n### Creation Date
\nThis field stores the current system date when you create the Account Tracking record.
\nField Number         **006**
\nMnemonic             **CREATIONDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **06806**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system updates this field automatically. Under normal circumstances, you should not revise this field.
`)
trackingRecordFields.set("creationtime", ` 
\n### Creation Time
\nThis field stores the current system time (HHMM) when you create the Account Tracking record.
\nField Number         **007**
\nMnemonic             **CREATIONTIME**
\nData Type            **Code to 2359**
\nSource               **System-calculated**
\nHelp File            **06807**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system updates this field automatically. Under normal circumstances, you should not revise this field.
`)
trackingRecordFields.set("userid", ` 
\n### User ID
\nThis field stores the user number of the user who created the Account Tracking record.
\nField Number         **004**
\nMnemonic             **USERID**
\nData Type            **Code to 9999**
\nSource               **System-calculated**
\nHelp File            **06804**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system updates this field automatically. Under normal circumstances, you should not revise this field.
`)
trackingRecordFields.set("fmlastdate", ` 
\n### Last FM Date
\nThis field stores the date file maintenance was last performed on the Account Tracking record.
\nField Number         **005**
\nMnemonic             **FMLASTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **06805**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system updates this field with the system date whenever you perform file maintenance of the Account Tracking record. You cannot perform file maintenance on this field.
`)
trackingRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date when you create, change, or save the Tracking record.
\nField Number         **131**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **09442**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system updates this field and may update it because the record was saved, even though there may not be any actual changes in the record; however, it does not update this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
trackingRecordFields.set("expiredate", ` 
\n### Expiration Date
\nThis field stores an expiration date for the Account Tracking record.
\nField Number         **008**
\nMnemonic             **EXPIREDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06808**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe Purge Account Processing batch program can use this field to determine whether this Account Tracking record is eligible for the purge, if it meets all other purge criteria. An Account Tracking record with a blank Expiration Date field cannot be purged unless the entire member account is purged.
`)
trackingRecordFields.set("id", ` 
\n### ID
\nThis field is not used for Account Tracking records.
\nField Number         **002**
\nMnemonic             **ID**
\nData Type            **2 or 4 Characters**
\nSource               **System-calculated**
\nHelp File            **06802**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
trackingRecordFields.set("idtype", ` 
\n### ID Type
\nThis field stores a number that identifies the Tracking record's parent record type.
\nField Number         **003**
\nMnemonic             **IDTYPE**
\nData Type            **Code to 4**
\nSource               **System-entered**
\nHelp File            **06803**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nFor an Account Tracking record, this value is always 3. The system updates this field automatically. You cannot perform file maintenance on this field.
`)
trackingRecordFields.set("usernumber1", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber2", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber3", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber4", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber5", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber6", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber7", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber8", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber9", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber10", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber11", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber12", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber13", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber14", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber15", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber16", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber17", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber18", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber19", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usernumber20", ` 
\n### User Number 01–User Number 20
\nThese fields store any credit union-defined numbers for tracking types 30–99.
\nField Number         **010–019, 071–080**
\nMnemonic             **USERNUMBER1–USERNUMBER20**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06810–06819, 06871–06880**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar1", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar2", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar3", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar4", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar5", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar6", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar7", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar8", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar9", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar10", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar11", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar12", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar13", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar14", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar15", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar16", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar17", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar18", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar19", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userchar20", ` 
\n### User Char 01–User Char 20
\nThese fields store any credit union-defined character data for tracking types 30–99.
\nField Number         **020–029, 081–090**
\nMnemonic             **USERCHAR1–USERCHAR20**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06820–06829, 06881–06889, 09400**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount1", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount2", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount3", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount4", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount5", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount6", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount7", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount8", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount9", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount10", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount11", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount12", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount13", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount14", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount15", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount16", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount17", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount18", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount19", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("useramount20", ` 
\n### User Amount 01–User Amount 20
\nThese fields store any credit union-defined amounts for tracking types 30–99.
\nField Number         **030–039, 091–100**
\nMnemonic             **USERAMOUNT1–USERAMOUNT20**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06830–06839, 09401–09410**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode1", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode2", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode3", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode4", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode5", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode6", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode7", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode8", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode9", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode10", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode11", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode12", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode13", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode14", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode15", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode16", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode17", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode18", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode19", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("usercode20", ` 
\n### User Code 01–User Code 20
\nThese fields store any credit union-defined codes for tracking types 30–99.
\nField Number         **040–049, 101–110**
\nMnemonic             **USERCODE1–USERCODE20**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06840–06849, 09411–09420**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate1", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate2", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate3", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate4", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate5", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate6", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate7", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate8", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate9", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate10", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate11", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate12", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate13", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate14", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate15", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate16", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate17", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate18", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate19", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userdate20", ` 
\n### User Date 01–User Date 20
\nThese fields store any credit union-defined dates for tracking types 30–99.
\nField Number         **050–059, 111–120**
\nMnemonic             **USERDATE1–USERDATE20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06850–06859, 09421–09430**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate1", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate1", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate1", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate1", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate1", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate1", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate1", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate1", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate2", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate3", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate4", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate5", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate6", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate7", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate8", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate9", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate10", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate11", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate12", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate13", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate14", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate15", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate16", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate17", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate18", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate19", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("userrate20", ` 
\n### User Rate 01–User Rate 20
\nThese fields store any credit union-defined rates for tracking types 30–99.
\nField Number         **060–069, 121–130**
\nMnemonic             **USERRATE1–USERRATE20**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **06860–06869, 09431–09440**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can define a field name with the Account File Tracking Type Parameters in the Parameter Manager work area.
`)
trackingRecordFields.set("locator", ` 
\n### Locator
\nThis field value in each record is unique for each member account.
\nField Number         **070**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nBecause each Locator field value is unique, it can be used as a unique identification of a specific record. The system automatically assigns the Locator field value when the record is created, and you cannot change it. The value is a positive number greater than zero.
\n
\nThe Locator field can be used during PowerOn file maintenance (both demand and batch) to uniquely identify a record. We recommend using a Locator field because a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
