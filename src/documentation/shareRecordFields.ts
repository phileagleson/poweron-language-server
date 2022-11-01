export const shareRecordFields = new Map<string, string>()
shareRecordFields.set("description", ` 
\n### Description
\nThis field stores a share description that displays in inquiries and on statements.
\nField Number         **055**
\nMnemonic             **DESCRIPTION**
\nData Type            **30 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01055**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nEnter a description of the share (up to 30 characters).
\n
\nThe system updates this field for renewed shares depending on your entry at the Certificate Renewal Description Option prompt of the Daily Posting batch program.
`)
shareRecordFields.set("type", ` 
\n### Share Type
\nThis field stores a credit union-defined code to identify the type of share.
\nField Number         **003**
\nMnemonic             **TYPE**
\nData Type            **Code to 99 or Code to 9999**
\nSource               **User-entered**
\nHelp File            **01003**
\nDefault Control      **No**
\nDefault Value **00**
\n
\nEnter a credit union-defined code (00–99 or 0000–9999) to identify the type of share. The share type lets you group similar types of shares. The system posts share transactions to the general ledger by share type.
\n***Important:***  If your credit union uses the Renew Share Type field and the Description field does not exactly match the words and format of the words in the Share Type field, when the share renews the Description field it will not change to reflect the new share type.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
\n
\nIf you are currently using a two-digit code and you want to use a four-digit code, contact our Support team.
`)
shareRecordFields.set("id", ` 
\n### Share ID
\nThis field stores a unique two- or four-character ID that identifies the Share record.
\nField Number         **001**
\nMnemonic             **ID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **01001**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou assign the share ID when you create the Share record. You cannot access this field for file maintenance. Once you assign a share ID, that ID remains permanently associated with the share.
\n***Important:***  We must make a system parameter setting that allows share IDs be either two or four digits. If you wish to change from two to four digit IDs, notify your account executive. If you change the number of digits, analyze all specfiles that reference share or loan IDs and make any necessary changes. The following list describes conditions that require changes:
\nIf the specfile prints a report that includes a share or loan ID, and if there is insufficient space on the report to support a four-character ID, reformat the report to allow for four characters.
\nIf a specfile references a share or loan ID in a temporary field that is defined as CHARACTER(2), change the field definition to CHARACTER, or CHARACTER(4).
\nIf the specfile writes a share or loan ID to an output file, expand the output field to four characters. If subsequent PowerOn specfiles use this file, also change those specfiles to reference a four-character ID. If a third party uses the file, the third party should make changes to their file format to accept the new ID length.
`)
shareRecordFields.set("activitydate", ` 
\n### Activity Date
\nThis field store the date of the previous monetary transaction that affected the Share record.
\nField Number         **091**
\nMnemonic             **ACTIVITYDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01091**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever a teller, ATM network, MemberConnect system, SymConnect client system, or batch program posts a monetary transaction to the Share record, this field is updated with the effective date of the previous monetary transaction.
\n
\nWhen you update the Activity Date field in the Share record, the Activity Date field in the Account record is automatically updated.
\n
\nWhen a Share record is first created, this field is automatically set to the open date.
\n***Important:***  For some dividend disbursements by check or transfer, the value in the Div Disb Updts Activity Date field determines whether this field will be updated or not.
\nThe following types of teller transactions and batch transactions do not update this field:
\n   * Insurance (unless you have the Insurance Updts Activity Date parameter in Miscellaneous Parameters set to Yes)
\n   * Fees
\n   * Dividends
\n   * Withholding
\n   * Interest refunds
\nThe following batch programs do not update this field:
\n   * Dividend Posting (depending on your setting of the Div Disb Updts Activity Date field)
\n   * Fee Posting
\n   * Insurance Posting (unless you have the Insurance Updts Activity Date parameter in Miscellaneous Parameters set to Yes)
\n***Important:***  The system updates this field for dividend disbursements if the Dividend Post Code field in the Share record is set to(1) Check or (2) Transfer and the value in the Div Disb Updts Activity Date field in the Share record is set to (1) Update Activity Date.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("sharecode", ` 
\n### Share Code
\nThis field stores a code that defines the share type description for this record.
\nField Number         **011**
\nMnemonic             **SHARECODE**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **01011**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nSelect a system-defined code to identify the share type description.
\n
\nOption 1 for this field may be "Draft" or "Check" depending on your credit union's parameter settings.
\n#### Data Type Descriptions
\n##### (0) Share
\n   This is a normal share. The description "Share" appears whenever anyone accesses this Share record, and the system processes the record as a share. If the minimum balance in the Share record is greater than 0.00, the system sets the close date to the system date when the share balance falls to 0.00.##### (1) Draft
\n   This is a share draft. The description "Draft" appears whenever anyone accesses this Share record, and the system processes the record as a share draft, subject to draft clearing.##### (2) Certificate
\n   This is a certificate share. The description "Certificate" appears whenever anyone accesses this Share record, and the system processes the record as a certificate. The Maturity Post Code, Maturity Date, Term Frequency, and Term Period fields in the Share record control the processing of certificate shares. If the minimum balance in the Share record is greater than 0.00, the system sets the Close Date field to the system date when the share balance falls to 0.00.
\n   
\n       * The system does not allow a partial withdrawal that brings the balance below the minimum balance specified for the share. The member must either withdraw an amount that does not make the balance of the share fall below the minimum balance, or must withdraw the entire balance, thus closing the Share record.
\n##### (3) Club
\n   This is a club share. The description "Club" displays whenever anyone accesses this Share record, and the system processes the record as a club share. The Maturity Post Code, Maturity Date, Term Frequency, and Term Period fields in the Share record control the processing of club shares. The system does not automatically close club shares when funds are disbursed and the share balance drops to 0.00. You must close club shares manually by entering a date in the Close Date field of the Share record.***Important:***  If you select any value other than (0) Share or (1) Draft in this field when the Share is used for the escrow portion of an active Loan record (there is a value in the Escrow ID field), the system displays the following warning:
\nWarning: Escrow Share cannot be a Certificate or Club share!
`)
shareRecordFields.set("checkdigits", ` 
\n### Check Digits
\nThis field stores check digits that your financial institution may use to help the system verify account numbers when processing drafts, ATM transactions, or outside processor transactions. Both the account number and the check digits must be valid, or the system reports the transaction as an exception.
\nField Number         **002**
\nMnemonic             **CHECKDIGITS**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **01002**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nThe system does not use check digits for over-the-counter transactions.
`)
shareRecordFields.set("irscode", ` 
\n### IRS Code
\nThis field stores a code that defines how this share should be reported to the IRS.
\nField Number         **012**
\nMnemonic             **IRSCODE**
\nData Type            **Code to 15**
\nSource               **User-entered**
\nHelp File            **01012**
\nDefault Control      **Yes**
\nDefault Value **00**
\n
\nSelect a system-defined code to identify how this share should be reported to the IRS.
\n#### Data Type Descriptions
\n##### (00) Normal
\n   * This share should be reported to the IRS as a normal share.##### (01) IRA
\n   * This share should be reported to the IRS as an IRA (Individual Retirement Account). Create one corresponding IRS record for the account with an IRS Code field set to 01.##### (02) Deferred Comp
\n   * This share should be reported to the IRS as a deferred compensation share. Create one corresponding IRS record for the account with an IRS Code field set to 02, and you must maintain the IRS record manually or through an edit run.##### (03) SEP
\n   * This share should be reported to the IRS as an SEP (Simplified Employer Pension) share. Create one corresponding IRS record for the account with an IRS Code field set to 03, and you must create a matching Share record with an IRS Code field set to (01) IRA. Post the employee SEP contributions to the IRA share (IRS Code =01), and post the employer SEP contributions to the SEP share (the IRS Code field is set to 03).##### (04) Keogh
\n   * This share should be reported to the IRS as a Keogh share. Create one corresponding IRS record for the account with an IRS Code field set to 04.##### (05) 401K
\n   * This share should be reported to the IRS as a 401(k) retirement share. Create one corresponding IRS record for the account with an IRS Code field set to 05.##### (06) Roth IRA
\n   * This share should be reported to the IRS as a Roth IRA share. Create one corresponding IRS record for the account with an IRS Code field set to 06.##### (07) SIMPLE IRA
\n   * This share should be reported to the IRS as a SIMPLE IRA share. Create one corresponding IRS record for the account with an IRS Code field set to 07.##### (08) Coverdell ESA
\n   * This share should be reported to the IRS as a Coverdell ESA share. Create one corresponding IRS record for the account with an IRS Code field set to 08.##### (09) Archer MSA
\n   * This share should be reported to the IRS as an Archer MSA share. Create one corresponding IRS record for the account with an IRS Code field set to 09.##### (10) Medicare MSA
\n   * This share should be reported to the IRS as a Medicare MSA share. Create one corresponding IRS record for the account with an IRS Code field set to 10.##### (11) Roth Conversion
\n   * This share should be reported to the IRS as a Roth Conversion IRA rather than as a new Roth IRA. Create one corresponding IRS record for the account with an IRS Code field set to 11.
\n       * Important: Roth Conversion IRAs and Roth IRAs (IRS Code =(06) Roth IRA) do not have to be separated. Although you can use an IRS Code field set to (11) Roth Conversion, you could, instead, use an IRS Code field set to (6) Roth IRA for both types of accounts. An IRS code of (11) Roth Conversion may be discontinued in the future.
\n##### (12) Conduit IRA
\n   * This share should be reported to the IRS as a Conduit IRA. The Share record is a traditional IRA that contains only funds rolled over from a qualified employer plan and not mixed with any other IRA funds. Create one corresponding IRS record for the account with anIRS Code field set to 12.##### (13) Governmental 457
\n   * This share should be reported to the IRS as a Governmental 457 share. Create one corresponding IRS record for the account with an IRS Code field set to 13.##### (14) Single HSA
\n   * This share should be reported to the IRS as an HSA (Health Savings Account) share for an individual. Create one corresponding IRS record for the account with an IRS Code field set to 14.##### (15) Family HSA
\n   * This share should be reported to the IRS as an HSA (Health Savings Account) share for a family. Create one corresponding IRS record for the account with an IRS Code field set to 15.
\nFor complete information on IRS records, see IRS Record Fields.
\n***Important:***  If you enter any value other than (00) Normal in this field when the Share is used for the escrow portion of an active Loan record (there is a value in the Escrow ID field), the following warning appears:
\nWarning: Escrow Share cannot be Tax Deferred!
\n***Important:***  We highly recommend that the IRS Code field on a closed share remain the same and unchanged once the share is closed. Changing the IRS Code can impact other processes.
`)
shareRecordFields.set("irsplan", ` 
\n### IRS Plan
\nThis field specifies a code that the system uses, along with the IRS Code field in this record and the SSN/TIN field in the related Member record, to connect specific Share records to a specific IRS record.
\nField Number         **086**
\nMnemonic             **IRSPLAN**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01086**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   This is your standard IRA plan.
\n##### 1–99
\n   We suggest that you select unique numbers in the IRS Plan field for each kind of plan you offer that must be reported separately.
\nWhenever the system accumulates contribution and distribution amounts in IRS records, it determines which IRS record to use based on the following matching criteria:
\n
\nThe Taxpayer ID, IRS Code, and IRS Plan field combination should be unique for every IRS record in an account. The IRS Plan field lets you have more than one IRA plan in each member account. Each plan is reported separately to the IRS. The IRS Reporting batch program does not consolidate information from two or more shares, IRS records, or accounts if the IRS Plan numbers are different.
`)
shareRecordFields.set("certificatenumber", ` 
\n### Certificate Number
\nThis field stores a specific number to identify a certificate or the last unique certificate number used in a series.
\nField Number         **054**
\nMnemonic             **CERTIFICATENUMBER**
\nData Type            **10 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01054**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nUse this field in either of the following ways:
`)
shareRecordFields.set("originaldepositdate", ` 
\n### Original Deposit Date
\nThis field stores the date of the first deposit to this share.
\nField Number         **087**
\nMnemonic             **ORIGINALDEPOSITDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01087**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system automatically fills in this field when the first deposit, withdrawal, on-us transaction, or batch draft posting fee (such as NSF) occurs on the share. The system recognizes the first deposit by the fact that this field is date null (--/--/--). The system never changes this field after the first deposit. This makes it useful for tracking the first deposit to a certificate, since the system updates the Open Date and Original Balance fields whenever a certificate is automatically rolled over.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("originaldeposit", ` 
\n### Original Deposit
\nThis field stores the amount of the first deposit to the share.
\nField Number         **088**
\nMnemonic             **ORIGINALDEPOSIT**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01088**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system recognizes the first deposit by the fact that the Original Deposit Date field value is date null (--/--/--). The system never changes this field after the first deposit.
\n
\nIf this share is a certificate (the Share Code field is set to (2) Certificate), the initial value of this field is left blank, and a deposit to the specified share occurs in Teller Transactions, the system automatically populates this field with the first deposit amount for that share. This makes it useful for tracking the first deposit to a certificate, since the system updates the Open Date and Original Balance fields whenever a certificate is automatically rolled over.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("maturitypostcode", ` 
\n### Maturity Post Code
\nThis field is used only for shares with a Share record that has the Share Code field set to (2) Certificate or (3) Club. This field stores a code that determines how the balance of the certificate or club share is paid at maturity.
\nField Number         **050**
\nMnemonic             **MATURITYPOSTCODE**
\nData Type            **Code to 4**
\nSource               **User-entered**
\nHelp File            **01050**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Renew
\n   The system renews the certificates or club shares at maturity.##### (1) By Check
\n   The system pays the balance of the certificate or club share to the member by check at maturity. A check made out to the member is generated when the certificate or club share matures. The check remains in the check issuance file until you print it.
\n       * When you pay the entire maturity balance, the following occurs for each Share Code field value:
\n       * (2) Certificate: The system closes the share and it is not renewed.
\n       * (3) Club: The system does not close the share and it is renewed.
\n##### (2) Transfer
\n   The system transfers the balance of the certificate or club share to another share or another account at maturity. You must create at least one Share Transfer record. You can transfer the entire balance or a portion of the balance to another share or loan in the same account, or to another account.
\n       * When you transfer the entire maturity balance, the following occurs for each Share Code field value:
\n       * (2) Certificate: The system closes the share and it is not renewed.
\n       * (3) Club: The system does not close the share and it is renewed.
\n##### (3) Suspend
\n   The system keeps the amount of the certificate or club share in the share until you transfer the funds manually. The system does not renew the share at maturity, and the share does not accrue dividends. You must transfer the funds manually. The following warning appears on the share when you run the Daily Posting batch program:
\n       * No Batch Posting Allowed
\n##### (4) Transfer and Renew
\n   The system transfers part of the certificate or club share to another share or to another account at maturity, and then renews the certificate with the remainder of the funds. You must create at least one Share Transfer record.
\n`)
shareRecordFields.set("maturitydate", ` 
\n### Maturity Date
\nThis field stores the date the certificate or club share matures.
\nField Number         **051**
\nMnemonic             **MATURITYDATE**
\nData Type            **Date**
\nSource               **Credit union-defined**
\nHelp File            **01051**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nEnter the date the certificate or club share matures. The Daily Posting batch program matures shares with a Share Code field value of (2) Certificate or (3) Club when the system date equals the date in this field.
`)
shareRecordFields.set("termfrequency", ` 
\n### Term Frequency
\nThis field stores a code that determines how the term of the certificate or club share is calculated.
\nField Number         **052**
\nMnemonic             **TERMFREQUENCY**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01052**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Months
\n   The term of the certificate or club share is calculated in months. You must enter the number of months in the term of the certificate or club share in the Term Period field. For example, if you specify six months as the term period, the certificate or club share matures exactly six months from the value in the Open Date field; a club share opened January 1 matures July 1.##### (1) Days
\n   The term of the certificate or club account is calculated in days. Enter the number of days in the term of the certificate or club share in the Term Period field. For example, if you specify 180 days as the term period, the certificate or club share matures exactly 180 days from the value in the Open Date field.
\nThe system uses both this field and the Term Period field to determine the maturity date of shares with a Share Code field set to (2) Certificate or (3) Club.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("termperiod", ` 
\n### Term Period
\nThis field stores the period for the term of a certificate or club share.
\nField Number         **053**
\nMnemonic             **TERMPERIOD**
\nData Type            **Code to 9999**
\nSource               **Credit union-defined**
\nHelp File            **01053**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   No term period specified.##### 1–9999
\n   The period entered here depends on the value entered at the Term Frequency field:
\n       * If you select (0) Months at the Term Frequency field, enter the number of months in the term of the certificate or club share.
\n       * If you select (1) Days at the Term Frequency field, enter the number of days in the term of the certificate or club share.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("renewsharetype", ` 
\n### Renew Share Type
\nWhen a user begins to update share defaults for the first time, the initial value for this field is 00 or 0000. However, when the default value in the Share Type field is changed, the system automatically populates this field with the same value. The user can then change that value as desired.
\nField Number         **154**
\nMnemonic             **RENEWSHARETYPE**
\nData Type            **Code to 99 or Code to 9999**
\nSource               **User-entered**
\nHelp File            **01154**
\nDefault Control      **Yes**
\nDefault Value **00**
\n
\nEnter a credit union-defined code (00–99 or 0000–9999) to identify the type of share to use when the share certificate is renewed. The Share Type field lets you group similar kinds of shares. The system posts share transactions to the general ledger by share type.
\n
\nWhen the value in this field is different from the value in the current share's Share Type field, the system resets the following field values from the Share default record if the Maturity Post Code field is set to (0) Renew and the Share Code field is set to either (2) Certificate or (3) Club.
\n***Important:*** 
\nIf your credit union uses the Renew Share Type field and you want a certificate to mature to the defaults set in the share default record (or if you change the renewal within the share itself), you must update the Renew Term Frequency and Renew Term Period fields. If anything other than the current share type field is in the Renew Share Type field, that share type and its associated defaults will be used upon renewal.
\nThe IRS Code and IRS Plan fields are not fields that are refreshed from the share defaults. The IRS Code and IRS Plan fields are not changed automatically. You can set the Renew Share Type field to a share type with a different default value in the IRS Code field than the current share type, but if the share should have a new IRS type, open a new Share record manually. Be especially careful when setting the Renew Share Type field, and consider this limitation.
\nThe Description field may or may not be refreshed from the share defaults depending on your answer to the Certificate Renewal Description Option prompt to the Daily Posting batch program.
\n
\nIf you are currently using a two-digit code and you want to use a four-digit code, contact our Support team.
`)
shareRecordFields.set("renewtermfreq", ` 
\n### Renew Term Frequency
\nWhen a user begins to update share defaults for the first time, the initial value for this field is (0) Months. You can also select (1) Days. If the Term Frequency field is populated in the share type defaults, the system automatically also populates this field, perform file maintenance on the field if a different renew value should be used.
\nField Number         **155**
\nMnemonic             **RENEWTERMFREQ**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01155**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Months
\n   The term of the share upon renewal is calculated in months. Enter the number of months in the Renew Term Period field.##### (1) Days
\n   The term of the share upon renewal is calculated in days. Enter the number of days in the Renew Term Period field.
\nThe system uses both this field and the Renew Term Period field to determine the maturity date of shares with a Share Code field set to (2) Certificate or (3) Club.
\n***Important:***  You can only use either the Renew Share Type field or the Renew Term Frequency and Renew Term Period fields. The Renew Share Type field takes precedence over the Renew Term Frequency and Renew Term Period fields. If anything other than the current share type is in the Renew Share Type field, that share type and its associated defaults will be used upon renewal.
`)
shareRecordFields.set("renewtermperiod", ` 
\n### Renew Term Period
\nWhen a user begins to update share defaults for the first time, the initial value for this field is 0000. If the Term Period field is populated in the share defaults, the system automatically also populates this field with the same value, and this field requires file maintenance if a different renew value should be used.
\nField Number         **156**
\nMnemonic             **RENEWTERMPERIOD**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01156**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   No term period specified.##### 1–9999
\n   The period entered here depends on the value entered at the Term Frequency field:
\n       * If you select (0) Months at the Term Frequency field, enter the number of months in the term of the certificate or club share.
\n       * If you select (1) Days at the Term Frequency field, enter the number of days in the term of the certificate or club share.
\n***Important:***  You can only use either the Renew Share Type field or the Renew Term Frequency and Renew Term Period fields. The Renew Share Type field takes precedence over the Renew Term Frequency and Renew Term Period fields. If anything other than the current Share Type is in the Renew Share Type field, that Share Type and its associated defaults will be used upon renewal.
`)
shareRecordFields.set("createdbyuser", ` 
\n### Created By User
\nThe user ID is stored in this field, and it is populated when this Share record is created.
\nField Number         **170**
\nMnemonic             **CREATEDBYUSER**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01170**
\nDefault Control      **No**
\nDefault Value **Current user number**
\n
\n#### Data Type Descriptions
\n##### 0–9998
\n   The user ID of the creator of the record.##### 9999
\n   The system is unable to determine the information because it is not available.
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("createdatbranch", ` 
\n### Created At Branch
\nThis field stores the branch ID of the branch where the Share record is created.
\nField Number         **171**
\nMnemonic             **CREATEDATBRANCH**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01171**
\nDefault Control      **No**
\nDefault Value **Current user branch**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The system is unable to determine the information because it is not available.##### 1–9999
\n   The branch ID where the record was created.
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("balance", ` 
\n### Balance
\nThe current balance of the share is stored in this field.
\nField Number         **029**
\nMnemonic             **BALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01029**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever a Share Deposit (SD) or Share Withdrawal (SW) teller transaction affects this share, this field is automatically updated with the amount of the transaction. You cannot access this field for file maintenance.
`)
shareRecordFields.set("availablebalance", ` 
\n### Available Balance
\nThis field displays the currently available share balance.
\nField Number         **800**
\nMnemonic             **AVAILABLEBALANCE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01280**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system determines the available balance by subtracting the minimum balance and any hold amounts affecting the share from the current balance of the share.
`)
shareRecordFields.set("originalbalance", ` 
\n### Original Balance
\nThis field stores the amount deposited during the first Share Deposit (SD) teller transaction to this share.
\nField Number         **030**
\nMnemonic             **ORIGINALBALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01030**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf the Maturity Post Code field is set to (0) Renew for a certificate share (the Share Code field is set to (2) Certificate), the system updates this field with the current principal balance of the certificate when the certificate renews. Under normal circumstances, you should not revise this field.
`)
shareRecordFields.set("yearendbalance", ` 
\n### Year-End Balance
\nThis field stores the year-end balance of the share.
\nField Number         **192**
\nMnemonic             **YEARENDBALANCE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01192**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen you run the Close Day Processing batch program for the first time in a new calendar year, the system copies the value in the Balance field and applies it to this field.
\n
\nWe recommend that you do not revise this field.
`)
shareRecordFields.set("minimumbalance", ` 
\n### Minimum Balance
\nThis field stores the minimum balance required for this share.
\nField Number         **031**
\nMnemonic             **MINIMUMBALANCE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01031**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the minimum balance required for this share. For shares with a Share Code field set to (0) Share or (2) Certificate, if you specify a value greater than 0.00, the system sets the close date to the system date (closes the account) if the share balance falls to 0.00. If you specify a minimum balance of 0.00, the system does not set a close date.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("minimumdeposit", ` 
\n### Minimum Deposit
\nThis field stores the minimum amount that can be deposited to the share in a single transaction.
\nField Number         **035**
\nMnemonic             **MINIMUMDEPOSIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01035**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nIf your credit union requires deposits to a share to be equal to or greater than a specified amount, you can specify that amount in this field.
\n
\nDuring teller transactions, the system displays a warning if the member attempts to deposit less than the specified minimum deposit amount. Tellers who do not have the Minimum Deposit transaction privilege must secure an override to proceed with the transaction.
\n
\nWhen you run the ACH Posting, ATM Posting, Draft Posting, or Payroll Posting batch program, the system posts deposits of less than the specified minimum deposit amount, but displays a warning on the batch program's exception report.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("minimumwithdrawal", ` 
\n### Minimum Withdraw
\nThis field stores the minimum amount that can be withdrawn from the share in a single transaction.
\nField Number         **036**
\nMnemonic             **MINIMUMWITHDRAWAL**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01036**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the minimum amount that can be withdrawn from the share in a single transaction. If your credit union requires withdrawals from this share to be equal to or greater than a specified amount, you can specify that amount in this field.
\n
\nDuring teller transactions, the system displays a warning if the member attempts to withdraw less than the specified minimum withdrawal amount. Tellers who do not have the Minimum Withdrawal transaction privilege must secure an override to proceed with the transaction.
\n
\nWhen you run the ATM Posting batch program, the system posts withdrawals of less than the specified minimum withdrawal amount, but displays a warning on the batch program's exception report. When you run the ACH Posting, Draft Posting, or Payroll Posting batch program, if a withdrawal is less than the specified minimum withdrawal amount, the system does not post the transaction and displays a warning on the batch program's exception report.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("overdrafttolerance", ` 
\n### Overdraw Tolerance
\nThis field specifies the dollar limit a share can go negative beyond the existing overdraft options.
\nField Number         **095**
\nMnemonic             **OVERDRAFTTOLERANCE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01095**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nWhen you create a share, the system fills in this field with the value set in the Share Defaults, but you can change this amount by manual or batch file maintenance.
\n***Important:***  If your credit union does not purchase the Overdraw Tolerance module, you cannot perform valid file maintenance on this field, since your system does not use it.
`)
shareRecordFields.set("micracctnumber", ` 
\n### MICR Account Number
\nThis field stores the account number portion of a draft's MICR line.
\nField Number         **137**
\nMnemonic             **MICRACCTNUMBER**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **01137**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field can be blank or can contain the account number portion of the MICR line that corresponds to the Share record. Only enter digits 0–9. There is no minimum length and no enforced check digit requirement. If you use this field, the field's contents appear along with the Description field value in several places throughout the system, including Teller Transactions.
\n   * Important: It is the credit union’s responsibility to ensure that the selected format meets the Financial Industry Standards from Accredited Standards Committee X9, Inc.
\n
\nThe MICR account number information is not included on member receipts and statements. This field is for reference and display purposes only; the system does not use it unless you request us to modify your credit union's draft posting edit logic. There is no automatic or enforced connection between this field and any other field in any record, including Lookup records and Check Order records.
`)
shareRecordFields.set("branch", ` 
\n### Branch
\nThis field stores the number of the branch that "owns" the share. When you create a Share record, the default is the branch at which you create the Share record.
\nField Number         **079**
\nMnemonic             **BRANCH**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-entered**
\nHelp File            **01079**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Main branch##### 1–9999
\n   Credit union defined branch number
\nIf your credit union uses branch accounting, you can use this field to specify the branch to which transactions for the share should be posted. To translate share transactions to the General Ledger by branch, you must set the GL Translation Branch Level parameter in the Miscellaneous Parameters to (1) Pull GL Branch by Share/Loan Record.
\n
\nSome batch programs can also produce reports by share or loan branch.
\n***Important:***  For NetTeller users, the query 60 processes a branch number value of three characters. When the branch number is longer than three characters, the JHADRIVER sends a blank value to NetTeller.
`)
shareRecordFields.set("opendate", ` 
\n### Open Date
\nThis field stores the date the share was opened.
\nField Number         **006**
\nMnemonic             **OPENDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01006**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system enters the system date in this field when you create the Share record. The Daily Posting batch program updates the value in this field with the value in the Maturity Date field when you renew a certificate. Under normal circumstances, you should not revise this field.
`)
shareRecordFields.set("closedate", ` 
\n### Close Date
\nThis field stores the date the Share record was closed.
\nField Number         **007**
\nMnemonic             **CLOSEDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01007**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nWhen you open a new Share record, this field is set to blank.
\n
\nWhen you close a share, enter the date the Share record was closed. If there is a date in this field, the system considers the Share record closed on that date and allows no further transactions affecting the Share record.
\n
\nThe balance of a share must be 0.00 or the system does not allow you to enter a close date. If the Balance field value contains a positive or negative amount and you attempt to enter a close date, a nonzero balance message appears and you return to the Close Date field.
\n
\nIf the Share Code field is set to (0) Share or (2) Certificate, and if the Share record specifies a minimum balance greater than 0.00, the system sets the Close Date field to the system date when the share balance falls to 0.00.
\n
\nUse the Purge Account Processing batch program to delete a Share record. Purge Account Processing deletes only those Share records that meet all the following criteria:
\n***Important:***  If a share has been previously closed (it has a value in this field), you should avoid opening it again (by clearing out this field). The system may have changed other important fields when closing the share, and that may leave the share with invalid values if you reopen it by simply clearing this field. This can adversely affect many automatic functions, such as interest accruals in the Daily Posting batch program, dividend calculation in Dividend Posting batch program, etc. Instead of reopening a closed share, create a Share record and enter the correct values in all fields, including any interest or dividend you want to honor.
`)
shareRecordFields.set("reference", ` 
\n### Reference
\nThis field stores any share-related reference information, such as an employment date.
\nField Number         **008**
\nMnemonic             **REFERENCE**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **01008**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nEnter any reference information regarding the Share record.
\n
\nThis reference relates only to this Share record. Enter any references for the entire account in the Reference field of the Account record.
`)
shareRecordFields.set("nickname", ` 
\n### Nickname
\nThis field stores a nickname for a share.
\nField Number         **153**
\nMnemonic             **NICKNAME**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **01153**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nEnter a nickname for the share, such as HOLIDAY08SAVING.
\n
\nPowerOn can access this field for reading and writing.
`)
shareRecordFields.set("lastfmdate", ` 
\n### Last FM Date
\nThis field stores the date of the last file maintenance of this Share record or a child record of this Share record.
\nField Number         **004**
\nMnemonic             **LASTFMDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01004**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever you perform file maintenance on this Share record or one of its child records using the Account Manager or the File Maintenance(FM) teller transaction, this field is updated with the system date.
\n
\nYou cannot access this field for manual file maintenance.
\n***Important:***  This field in the Share record is not updated when the file maintenance is performed by a batch process.This field is not updated based on creation or revision of a subordinate Share Tracking record. However, it is updated based on deletion of a Share Tracking record.
`)
shareRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date when you create, change, or save the Share record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **165**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01165**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
shareRecordFields.set("lasttrandate", ` 
\n### Last Transaction Date
\nThis field stores the posting date of the last monetary transaction that affected this Share record.
\nField Number         **005**
\nMnemonic             **LASTTRANDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01005**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever a teller or batch monetary transaction affects this Share record, this field is updated with the posting date of the transaction. You cannot access this field for file maintenance.
\n
\nUnlike the Activity Date field in the Account record, insurance, dividend, withholding, and fee transactions cause the system to update this field.
\n
\nIf you void the first monetary transaction ever posted to the share, the system resets this field to blank.
`)
shareRecordFields.set("lastpurgedate", ` 
\n### Last Purge Date
\nThis field stores the date of the last share history purge for this Share record.
\nField Number         **043**
\nMnemonic             **LASTPURGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01043**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis field stores the date of the last share history purge for this share type. Whenever you purge share history for this share type using the Purge Transaction Processing batch program, this field is updated with the date that is one day before the date you enter at the Save Share Transactions From prompt in the Purge Transaction Processing batch program. You cannot access this field for file maintenance.
`)
shareRecordFields.set("lastdirectdepdate", ` 
\n### Last Direct Deposit Date
\nThis field stores the date the last direct deposit transaction occurred for an account.
\nField Number         **162**
\nMnemonic             **LASTDIRECTDEPDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01162**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe Fee Posting batch program uses this date field to determine if a direct deposit transaction occurred within a specified time period and then waives a fee.
\n***Important:***  The Update Direct Deposit Info prompt in the ACH Posting and Payroll Posting batch programs must be set to Yes for this field to be automatically updated.
`)
shareRecordFields.set("lastdirectdepamt", ` 
\n### Last Direct Deposit Amount
\nThis field stores the amount of the last deposit transaction posted to an account.
\nField Number         **163**
\nMnemonic             **LASTDIRECTDEPAMT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01163**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Fee Posting batch program uses this amount field to determine if a direct deposit with an amount greater than zero occurred within the number of days entered at the Last Direct Deposit Date prompt, and if so, to waive a fee.
\n***Important:***  The Update Direct Deposit Info prompt in the ACH Posting and Payroll Posting batch programs must be set to Yes for the system to automatically update this field.
`)
shareRecordFields.set("divpostcode", ` 
\n### Dividend Post Code
\nThis field stores a code that determines how earned dividends are paid.
\nField Number         **013**
\nMnemonic             **DIVPOSTCODE**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **01013**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) To Share
\n   The system posts the dividends earned on this share to the share balance.##### (1) By Check
\n   The system mails a check directly to the member for dividends earned on this share. The Dividend Posting batch program initiates the posting of dividends and generates a check to the member. The check remains in the check issuance file until you print it.##### (2) Transfer
\n   The system transfers dividends earned on this share to another share or to another account. You must create at least one Share Transfer record. You can transfer the entire dividend amount or a portion of the dividend amount to another share or loan in the same account, or to another account. For more information on Transfer records, see Transfer Records.##### (3) Forfeit
\n   The system does not post dividends earned on this share. Instead, a share comment is created that states the amount of dividends the share forfeits.
\n   
\n       * When you select this option, the system also updates the date in both the Dividend Accrual Date and Dividend Period Start fields in the Share record with the effective date of the forfeiture. This update takes place during both the Dividend Posting batch program and the Daily Posting batch program (for dividends at maturity).
\n
\nIn tax-deferred shares, this field can be used to send a check or transfer the dividends to a non-IRA share, as long as the member is over 59 1/2 years old. The distribution code used by the system in the IRS record or Teller Transactions is Normal Distribution.
`)
shareRecordFields.set("lastdivdate", ` 
\n### Last Dividend Date
\nThis field stores the date dividends were last posted for this share.
\nField Number         **014**
\nMnemonic             **LASTDIVDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01014**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever the Dividend Posting batch program posts dividends for this share, the system enters the system date in this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("lastdivamount", ` 
\n### Last Dividend Amt
\nThis field stores the amount of the last dividend posted for this share.
\nField Number         **015**
\nMnemonic             **LASTDIVAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01015**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever the Dividend Posting batch program posts dividends for this share, the system enters the amount of the dividend in this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("divytd", ` 
\n### Dividend YTD
\nThis field stores the total amount of all dividends posted for the share during the current year with the SV transaction code and the Dividend Posting batch program.
\nField Number         **016**
\nMnemonic             **DIVYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01016**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever the Dividend Posting batch program posts dividends for this share, the system adds the dividend amount to the value in this field. The first time you run the Close Day Processing batch program in a new calendar year, the system moves the value in this field to the Dividend Last Yr field and resets this field to 0.00.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("divlastyear", ` 
\n### Dividend Last Yr
\nThis field stores the total amount of all dividends posted for the share during the previous year.
\nField Number         **017**
\nMnemonic             **DIVLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01017**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the value in the Dividend YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("divfromopen", ` 
\n### Dividend From Open
\nThis field stores the total amount of all dividends posted for the share since it was opened.
\nField Number         **018**
\nMnemonic             **DIVFROMOPEN**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01018**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever the Dividend Posting batch program posts dividends for this share, the system adds the dividend amount to the value in this field. This field is reset to 0.00 for certificate shares when a certificate is renewed during the run of the Daily Posting batch program.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("divtype", ` 
\n### Dividend Type
\nThis field stores a credit union-defined code (defined with the Dividend Type Definitions parameters) to identify the type of dividend calculation performed for this share.
\nField Number         **019**
\nMnemonic             **DIVTYPE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01019**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nWhen you enter a dividend type in the Share record, the Dividend Posting batch program calculates the dividends for the share using the calculation defined for that dividend type. For complete information about dividend types and dividend calculations, see Dividend Types.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("divrate", ` 
\n### Dividend Rate
\nThis field stores the rate used to calculate dividends for this share.
\nField Number         **020**
\nMnemonic             **DIVRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01020**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
\n
\nFor complete information about dividend types and dividend calculations, see Dividend Types.
`)
shareRecordFields.set("divaccrualdate", ` 
\n### Dividend Accrual Date
\nThis field stores the date that dividends were last accrued for this share.
\nField Number         **021**
\nMnemonic             **DIVACCRUALDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01021**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system does not post this accrual date when the dividends were posted to the share. For example:
\n
\nHowever, when the Dividend Posting batch program posts dividends for this share, the system does enter the date to which dividends were accrued (as calculated by the Dividend Posting batch program) in this field. Dividend Posting calculates the next dividends for this share from this date forward.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("divaccrual", ` 
\n### Dividend Accrual
\nThis field stores the total amount of any dividends accrued for this share, but not posted to the share.
\nField Number         **022**
\nMnemonic             **DIVACCRUAL**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01022**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnless you are correcting a dividend amount, you should not revise this field. For more information, see Dividend Accrual.
`)
shareRecordFields.set("divperiodstart", ` 
\n### Dividend Period Start
\nThis field stores the starting date for the dividend period.
\nField Number         **072**
\nMnemonic             **DIVPERIODSTART**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01072**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system uses this field, the Div BalDays field, the Div Period Start Method parameter in the Miscellaneous Parameters, and the Dividend Type Definitions parameters to calculate the APYE (Annual Percentage Yield Earned).The Dividend Posting batch program automatically advances this date as appropriate. Under normal circumstances, you should not revise this field.
`)
shareRecordFields.set("divperiodbaldays", ` 
\n### Div BalDays
\nThis field stores the sum of the balances for each day between the values in the Dividend Period Start and the Dividend Accrual Date fields if you perform a rate change in the middle of the dividend period.
\nField Number         **073**
\nMnemonic             **DIVPERIODBALDAYS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01073**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system uses this value to calculate the average daily balance for the entire dividend period, which must be known to calculate the APYE (Annual Percentage Yield Earned).
\n
\nThe system automatically begins incrementing the value in this field when you run the Rate Change Processing batch program. Under normal circumstances, you should not revise this field.
`)
shareRecordFields.set("bumprate", ` 
\n### Bump Rate
\nThis field stores the percentage to add to the "normal" rate during dividend calculations for the period specified between the values in the Bump Effective Date and the Bump Expiration Date fields. The "normal" rate is the rate that would otherwise be used for dividend purposes.
\nField Number         **083**
\nMnemonic             **BUMPRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01083**
\nDefault Control      **Yes**
\nDefault Value **0.000**
\n
\nThis field is used for dividend types set in the Day In Day Out and Day In to End of Period fields. Additionally, this rate is used for dividend types set to compound daily in the Grace Period to End of Month and Grace Period to End of Period fields.
\n
\nEnter the bump rate percentage you want to add during dividend calculations for the specified period.
\n
\nFor example, assume that a share has the following values:
\n
\nAt the time of dividend calculation, the system does the following:
\n
\nThe bump rate is never used when calculating an APY in Projections (Dividend projection or Annual Percentage Yield calculations) or when using Dividend Projection APY function in PowerOn specfiles.
\n
\nThe bump rate is included in total Dividends posted for any given period and is calculated when posting an APYE comment in Transaction History.
\n
\nThe bump rate is also included in Anticipated Dividends for a specific account in Account Manager.
\n***Important:***  When you enter a bump rate, the rate is not effective if the Bump Effective Date field is left blank. Be sure to enter the date you want the rate to become effective in the Bump Effective Date field.
\n***Important:***  If, however, the Bump Effective Date and the Bump Expiration Date fields are blank and the Bump Rate field is not blank, the system uses the system date for the effective date.
`)
shareRecordFields.set("bumpeffectivedate", ` 
\n### Bump Effective Date
\nThis field stores the date on which the value in the Bump Rate field becomes effective.
\nField Number         **084**
\nMnemonic             **BUMPEFFECTIVEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01084**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nEnter the date (MMDDYYYY) on which the bump rate becomes effective. The bump rate is added to the "normal" rate during dividend calculations beginning on the date entered in this field.
\n***Important:***  This field is required for a future effective date. Be sure to enter the date on which you want the rate to become effective in this field.
\n***Important:***  If, however, the Bump Effective Date and the Bump Expiration Date fields are blank and the Bump Rate field is not blank, the system uses the system date for the effective date.
`)
shareRecordFields.set("bumpexpirationdate", ` 
\n### Bump Expiration Date
\nThis field stores the date on which the value in the Bump Rate field expires.
\nField Number         **085**
\nMnemonic             **BUMPEXPIRATIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01085**
\nDefault Control      **Yes**
\nDefault Value **Data Null**
\n
\nEnter the date (MMDDYYYY) on which the bump rate expires. The bump rate is not added to the "normal" rate during dividend calculations after the date entered in this field.
\n***Important:***  If, however, the Bump Effective Date and the Bump Expiration Date fields are blank and the Bump Rate field is not blank, the system uses the system date for the effective date.
`)
shareRecordFields.set("dividendratemargin", ` 
\n### Dividend Rate Margin
\nThis field stores the rate margin that, when added to the base rate, produces a variable dividend rate for the current date.
\nField Number         **103**
\nMnemonic             **DIVIDENDRATEMARGIN**
\nData Type            **Long Rate**
\nSource               **User-entered**
\nHelp File            **01103**
\nDefault Control      **Yes**
\nDefault Value **0.000000**
\n
\nUsing the value in the Dividend Type field for this share, the system determines the Dividend Index Table and Schedule Type from the Dividend Type Definitions in the Parameter Manager to use. It then identifies the appropriate index rate for the index date that corresponds to the current date. It uses that rate as the base rate.
\n
\nThe system adds the value you enter in this field (with a positive or negative value as indicated by the value in the Dividend Rate Margin Sign field) to that base rate to produce a dividend rate for the current date. The system supports six digits to the right of the decimal point for this field.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("dividendratemarginsign", ` 
\n### Dividend Rate Margin Sign
\nThis field specifies a positive (+) or negative (-) sign to be associated with the value in the Dividend Rate Margin field.
\nField Number         **100**
\nMnemonic             **DIVIDENDRATEMARGINSIGN**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01100**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Indicates a positive (+) margin##### 1
\n   Indicates a negative (-) margin
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("dividendratemax", ` 
\n### Dividend Rate Maximum
\nThis field stores a maximum dividend rate for variable rate dividend calculations.
\nField Number         **104**
\nMnemonic             **DIVIDENDRATEMAX**
\nData Type            **Long Rate**
\nSource               **User-entered**
\nHelp File            **01104**
\nDefault Control      **Yes**
\nDefault Value **0.000000**
\n
\nUsing the value in the Dividend Type field for this share, the system determines the Dividend Index Table and Schedule Type from the Dividend Type Definitions in the Parameter Manager to use. It then identifies the appropriate index rate for the index date that corresponds to the current date. It uses that rate as the base rate.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("dividendratemin", ` 
\n### Dividend Rate Minimum
\nThis field stores a minimum dividend rate for variable rate dividend calculations.
\nField Number         **105**
\nMnemonic             **DIVIDENDRATEMIN**
\nData Type            **Long Rate**
\nSource               **User-entered**
\nHelp File            **01105**
\nDefault Control      **Yes**
\nDefault Value **0.000000**
\n
\nUsing the value in the Dividend Type field for this share, the system determines the Dividend Index Table and Schedule Type from the Dividend Type Definitions in the Parameter Manager to use. It then identifies the appropriate index rate for the index date that corresponds to the current date. It uses that rate as the base rate.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("periodiccap", ` 
\n### Periodic Cap
\nThis field affects only shares with variable dividend rates and contains the maximum dividend rate change allowed.
\nField Number         **106**
\nMnemonic             **PERIODICCAP**
\nData Type            **Long Rate**
\nSource               **User-entered**
\nHelp File            **01106**
\nDefault Control      **Yes**
\nDefault Value **0.000000**
\n
\nSee Periodic Caps for more information.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("periodicstartrate", ` 
\n### Periodic Cap Start Rt
\nThis field stores the dividend rate as of the Periodic Cap Start Date field value.
\nField Number         **107**
\nMnemonic             **PERIODICSTARTRATE**
\nData Type            **Long Rate**
\nSource               **System-entered**
\nHelp File            **01107**
\nDefault Control      **Yes**
\nDefault Value **0.000000**
\n
\nThe system maintains this field for shares with a Periodic Cap field value greater than 0. Under normal circumstances, you should not revise this field. The system supports six digits to the right of the decimal point for this field.
\n
\nThe first time you run the Rate Change Processing batch program during the periodic cap period, the system updates this field with the dividend rate before the change. If you run Rate Change Processing more than once during the periodic cap period for the share, the system does not change this field again.
\n
\nSee Periodic Caps for more information.
`)
shareRecordFields.set("dividendrateperioddate", ` 
\n### Periodic Cap Start Date
\nThis field stores the last anniversary date, or semi-annual anniversary date, for the cap (depending on your periodic cap frequency).
\nField Number         **101**
\nMnemonic             **DIVIDENDRATEPERIODDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01101**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nThe system maintains this field for shares with a Periodic Cap field value greater than 0. Under normal circumstances, you should not revise this field.
\n
\nAssuming the periodic rate frequency is annual, when you run the Rate Change Processing batch program, the system updates this field with either the value in the Original Deposit Date field or the last anniversary of that date. Rate Change Processing then checks this date to verify that the dividend rate has not already increased (or decreased) by the specified Periodic Cap field value.
\n
\nFor example, if the Original Deposit Date field is set to 06/12/20, and you run the Rate Change Processing batch program on 10/12/21, the system changes the Periodic Cap Start Date field to 06/12/21. If you run the Rate Change Processing batch program again on 01/15/22, the system does not increase the dividend rate for the share if the current rate is equal to the Periodic Cap Start Rt field value plus the Periodic Cap field value.
\n
\nSee Periodic Caps for more information.
`)
shareRecordFields.set("dividendrateperiodfreq", ` 
\n### Periodic Cap Frequency
\nThis field stores a code indicating the frequency associated with the Periodic Cap field.
\nField Number         **102**
\nMnemonic             **DIVIDENDRATEPERIODFREQ**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01102**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Annual
\n   The periodic cap changes annually.##### (1) Semi-Annual
\n   The periodic cap changes semiannually.
\nSee Periodic Caps for more information.
`)
shareRecordFields.set("ledgeraccrual", ` 
\n### Ledger Accrual
\nThis field stores the ledger accrual amount for this share. The accrual batch process updates this field. This is a protected field, but not a required one.
\nField Number         **125**
\nMnemonic             **LEDGERACCRUAL**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01125**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system only populates this field if the GL Daily Accrual parameter in the Miscellaneous Parameters is set to Yes. Update this field by running the Share Dividend Accrual – Periodic option of the Dividend/Interest Accruals batch program.
`)
shareRecordFields.set("ledgeraccrualdate", ` 
\n### Ledger Accrual Date
\nThis field stores the date on which the accrual batch process updates the ledger accrual for this share during daily accruals. This is a protected field, but not a required one.
\nField Number         **126**
\nMnemonic             **LEDGERACCRUALDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01126**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system only populates this field if the GL Daily Accrualparameter in the Miscellaneous Parameters is set to Yes. Update this field by running the Share Dividend Accrual – Periodic option of the Dividend/Interest Accruals batch program.
`)
shareRecordFields.set("currdivpayable", ` 
\n### Current Div Payable
\nThis field stores the total of all outstanding dividends that have been accrued, but unpaid, regardless of the month from which they are outstanding (the accrued dividends from the value in the Last Dividend Date field).
\nField Number         **127**
\nMnemonic             **CURRDIVPAYABLE**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01127**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Share Dividend Accrual parameter in the Miscellaneous Parameters to Yes. To update this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
`)
shareRecordFields.set("currmonthpaiddiv", ` 
\n### Current Mth Paid Div
\nThis field stores the total of all dividends earned and paid in the current month.
\nField Number         **128**
\nMnemonic             **CURRMONTHPAIDDIV**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01136**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Share Dividend Accrual parameter in the Miscellaneous Parameters to Yes. To update this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
`)
shareRecordFields.set("mtdpaiddivs", ` 
\n### MTD Paid Dividend
\nThis field stores the total of all dividends paid in the current month, regardless of when the dividend was earned.
\nField Number         **129**
\nMnemonic             **MTDPAIDDIVS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01128**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Share Dividend Accrual parameter in the Miscellaneous Parameters to Yes. To update this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
`)
shareRecordFields.set("premthdivpaid:1 * premthdivpaid:3", ` 
\n### 01 Mth Pre Div Paid–03 Mth Pre Div Paid
\nThese three fields store the total of all dividends paid in three previous months.
\nField Number         **132:001 * 132:003**
\nMnemonic             **PREMTHDIVPAID:1 * PREMTHDIVPAID:3**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01133**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates these fields only if you have set the Share Dividend Accrual parameter in the Miscellaneous Parameters to Yes. To update these fields, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
`)
shareRecordFields.set("mtdaccrueddivs", ` 
\n### MTD Accrued Div
\nThis field stores the total outstanding accrued unpaid dividends for the current calendar month.
\nField Number         **130**
\nMnemonic             **MTDACCRUEDDIVS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01130**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Share Dividend Accrual parameter in the Miscellaneous Parameters to Yes. To update this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
`)
shareRecordFields.set("premthdivaccrued", ` 
\n### 01 Mth Pre Div Accr–03 Mth Pre Div Accr
\nThese three fields store the total of all outstanding accrued unpaid dividends in three previous months.
\nField Number         **133:001 - 133:003**
\nMnemonic             **PREMTHDIVACCRUED:1 - PREMTHDIVACCRUED:3**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01132**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates these fields only if you have set the Share Dividend Accrual parameter in the Miscellaneous Parameters to Yes. To update these fields, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
`)
shareRecordFields.set("mtdearneddivs", ` 
\n### MTD Earned Div
\nThis field stores the total of all dividends earned (both unpaid and paid) for the current calendar month, regardless of dividend payment or accrual.
\nField Number         **131**
\nMnemonic             **MTDEARNEDDIVS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01129**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Share Dividend Accrual parameter in the Miscellaneous Parameters to Yes. To update this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
`)
shareRecordFields.set("premthdivearned", ` 
\n### 01 Mth Pre Div Earned–12 Mth Pre Div Earned
\nThese fields store the total of all dividends earned, unpaid and paid, for 12 previous calendar months, regardless of dividend payment or accrual.
\nField Number         **134:001 - 134:012**
\nMnemonic             **PREMTHDIVEARNED:1 - PREMTHDIVEARNED:12**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01131**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates these fields only if you have set the Share Dividend Accrual parameter in the Miscellaneous Parameters to Yes. To update these fields, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
`)
shareRecordFields.set("mtdpriorrateaccrual", ` 
\n### MTD Prior Rate Accr
\nThis field stores the dividend accrual for the current calendar month.
\nField Number         **135**
\nMnemonic             **MTDPRIORRATEACCRUAL**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01135**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system uses this field to calculate daily dividend. Rate Change Processing batch program updates this field.
\n
\nAlso, the Process MTD Dividend/Interest Accruals option of the Miscellaneous Processing batch program updates this field only if you have set the Share Dividend Accrual parameter in the Miscellaneous Parameters to Yes. To update this field, run the Process MTD Dividend/Interest Accruals option monthly, during month-end processing.
`)
shareRecordFields.set("lastaccrualupdatedate", ` 
\n### Last Accr Updt Date
\nThis field stores the last date on which the accruals for the Share record were updated. You cannot access this field for file maintenance.
\nField Number         **136**
\nMnemonic             **LASTACCRUALUPDATEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01134**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
shareRecordFields.set("divdisbupdtactvtyd", ` 
\n### Div Disb Updts Activity Date?
\nThis field stores a code to indicate whether Dividend Posting or Daily Posting batch programs should update the Activity Date field.
\nField Number         **157**
\nMnemonic             **DIVDISBUPDTACTVTYD**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01157**
\nDefault Control      **Yes**
\nDefault Value **1**
\n
\n#### Data Type Descriptions
\n##### (0) Do Not Update Activity Date
\n   The Dividend Posting or Daily Posting batch programs do not update the Activity Date field in this share record. Therefore the Activity Date field in the Account record may be used for complying with some state escheatment regulations when the Dividend Post Code field in the Share record is set to either (1) Check or (2) Transfer.##### (1) Update Activity Date
\n   The Dividend Posting or Daily Posting batch programs update the Activity Date field in this Share record and also, the Activity Date field in the Account record (used for complying with state escheatment regulations), when the Dividend Post Code in the Share record is set to either (1) Check or (2) Transfer.
\n`)
shareRecordFields.set("cddivaccrytd", ` 
\n### Cert Accrual YTD
\nThis field stores the certificate dividend accrued during the current year.
\nField Number         **096**
\nMnemonic             **CDDIVACCRYTD**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01096**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system uses this field to accrue the year's interest for reporting on Form 1099-OID for certificates that have a term greater than one year and that pay at maturity.
\n
\nThe system initializes this field to 0.00. If there has already been an accrual this year, you must enter the value manually.
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system does the following:
\n   * Moves this total to the Certificate Accrual Last Yr field
\n   * Resets this field to 0.00
`)
shareRecordFields.set("cddivaccrlastyr", ` 
\n### Cert Accrual Last Yr
\nThis field stores the certificate dividend accrued during the last year.
\nField Number         **097**
\nMnemonic             **CDDIVACCRLASTYR**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01097**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system uses this field to report accrued interest on Form 1099-OID for certificates that have a term greater than one year and that pay at maturity.
\nThe system initializes this field to 0.00. The first time you run the Close Day Processing batch program in a new calendar year, the system does the following:
\n   * Moves the total from the Certificate Accrual YTD field to this field
\n   * Resets the Certificate Accrual YTD field to 0.00
`)
shareRecordFields.set("mcdivytd", ` 
\n### Mat Cert Div YTD
\nThis field stores the year-to-date dividends for a certificate share. It is only populated for mature certificates.
\nField Number         **113**
\nMnemonic             **MCDIVYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01113**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen you run the Daily Posting batch program, the system does the following:
\n   * Stores the calculated total dividends earned this year for the matured certificate in this field
\n   * Resets the Dividend Accrual field to 0.00
`)
shareRecordFields.set("mcdivlastyear", ` 
\n### Mat Cert Div Last Yr
\nThis field stores the dividends accrued in the previous year for a certificate share. It is only populated for matured certificates.
\nField Number         **114**
\nMnemonic             **MCDIVLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01114**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen you run the Close Day Processing batch program at the end of the year, the system does the following:
\n   * Moves the total amount stored in the Mat Cert Div YTD field into this field
\n   * Resets the Mat Cert Div YTD field to 0.00
`)
shareRecordFields.set("dividenddue", ` 
\n### Dividend Due
\nThis field contains the calculation of a closing dividend. This field displays only the calculation of the dividend due for a closing dividend type.
\nField Number         **809**
\nMnemonic             **DIVIDENDDUE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01285**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf you are posting a closing dividend with TRANPERFORM, you can use this field to perform the calculation logic for the closing dividend.
`)
shareRecordFields.set("nsfmonthtodate", ` 
\n### NSF Month to Date
\nThis field stores the number of times during the current month that this share had insufficient funds for a requested transaction.
\nField Number         **060**
\nMnemonic             **NSFMONTHTODATE**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01060**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf you indicate that the system should count NSFs in the Draft Posting, Credit and Debit Card Posting, ATM Posting, ACH Posting, Insurance Posting, or Bill Payment Posting batch program, the system increments this field by one whenever an NSF condition occurs in this share.
\n
\nThe first time you run the Daily Posting batch program in a new month, the system resets this field to 0.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("nsfytd", ` 
\n### NSF Year to Date
\nThis field stores the number of times during the current year that this share had insufficient funds for a requested transaction.
\nField Number         **061**
\nMnemonic             **NSFYTD**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01061**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf you indicate that the system should count NSFs in the Draft Posting, Credit and Debit Card Posting, ATM Posting, ACH Posting, Insurance Posting, or Bill Payment Posting batch program, the system increments this field by one whenever an NSF condition occurs in this share.
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system does the following:
\n   * Moves the value in this field to the NSF Last Year field
\n   * Resets this field to 0
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("nsflastyear", ` 
\n### NSF Last Year
\nThis field stores the number of times during the previous year that this share had insufficient funds for a requested transaction.
\nField Number         **062**
\nMnemonic             **NSFLASTYEAR**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01062**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the value in the NSF Year to Date field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("nsffeemtd", ` 
\n### NSF Fee Count MTD
\nThis field stores the number of times during the current month that a fee was charged for insufficient funds for a requested transaction.
\nField Number         **176**
\nMnemonic             **NSFFEEMTD**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01176**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe first time the Daily Posting batch program is run in a new month, the system resets this field to 0.
\n
\nThe NSF MTD and NSF YTD fields are also updated whenever an NSF fee is charged.
\n
\nWhen you void an NSF fee transaction, the system reduces this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("nsffeeytd", ` 
\n### NSF Fee Count YTD
\nThis field stores the number of times during the current year that a fee was charged for insufficient funds for a requested transaction.
\nField Number         **177**
\nMnemonic             **NSFFEEYTD**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01177**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system does the following:
\n   * Moves the value in this field to the NSF Fee Count Last Year field
\n   * Resets this field to 0
\n
\nWhen you void an NSF fee transaction, the system reduces this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("nsffeely", ` 
\n### NSF Fee Count Last Year
\nThis field stores the number of times during the previous year that a fee was charged for insufficient funds for a requested transaction.
\nField Number         **178**
\nMnemonic             **NSFFEELY**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01178**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe first time the Close Day Processing batch program is run in a new calendar year, the system moves the value in the NSF Fee Count YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("courtesypaymonthtodate", ` 
\n### Courtesy Pay Month to Date
\nThis field stores the number of courtesy pays charged during the current month.
\nField Number         **092**
\nMnemonic             **COURTESYPAYMONTHTODATE**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01092**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf you void a share transaction that required a courtesy pay, the system does not reduce this field.
\n
\nThe first time you run the Daily Posting batch program in a new calendar month, the system resets the Courtesy Pay Month to Date field to 0.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("courtesypayytd", ` 
\n### Courtesy Pay Year to Date
\nThis field stores the number of courtesy pays and alternate courtesy pays charged during the current year.
\nField Number         **093**
\nMnemonic             **COURTESYPAYYTD**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01093**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf you void a share transaction that required a courtesy pay, the system does not reduce this field.
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system does the following:
\n   * Moves this total to the Courtesy Pay Last Year field
\n   * Resets this field to 0
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("courtesypaylastyear", ` 
\n### Courtesy Pay Last Year
\nThis field stores the number of courtesy pays charged during the previous year.
\nField Number         **094**
\nMnemonic             **COURTESYPAYLASTYEAR**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01094**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the value in the Courtesy Pay Year to Date field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("courtesyfeemtd", ` 
\n### Courtesy Pay Fee Ct MTD
\nThis field stores the number of times during the current month that a courtesy pay fee was charged for a requested transaction.
\nField Number         **179**
\nMnemonic             **COURTESYFEEMTD**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01179**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe first time the Daily Posting batch program is run in a new calendar month, the system resets this field to 0.
\n
\nThe Courtesy Pay MTD and Courtesy Pay YTD fields are also updated when a courtesy pay fee is charged.
\n
\nWhen you void a courtesy pay fee transaction, the system reduces this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("courtesyfeeytd", ` 
\n### Courtesy Pay Fee Ct YTD
\nThis field stores the number of times during the current calendar year that a courtesy pay fee was charged for a requested transaction.
\nField Number         **180**
\nMnemonic             **COURTESYFEEYTD**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01180**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system does the following:
\n   * Copies the value in this field to Courtesy Pay Fee Ct Last Year
\n   * Resets this field to 0
\n
\nWhen you void a courtesy pay fee transaction, The system reduces this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("courtesyfeely", ` 
\n### Courtesy Pay Fee Ct Last Year
\nThis field stores the number of times during the previous calendar year that a courtesy pay fee was charged for a requested transaction.
\nField Number         **181**
\nMnemonic             **COURTESYFEELY**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01181**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe first time you run the Daily Posting batch program in a new calendar year, the system does the following:
\n   * Copies the value in the Courtesy Pay Fee Ct YTD field to this field
\n   * Resets the Courtesy Pay Fee Ct YTD field to 0
`)
shareRecordFields.set("xfrmonthtodate", ` 
\n### XFR Month to Date
\nThis field stores the number of transfers to this share during the current month.
\nField Number         **063**
\nMnemonic             **XFRMONTHTODATE**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01063**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf you set the Count Overdraw Transfers prompt to Yes in the Draft Posting, Credit and Debit Card Posting, ATM Posting, ACH Posting, Insurance Posting, or Bill Payment Posting batch program, the system increments this field by one whenever an overdraw transfer transaction moves funds into this share.
\n
\nThe first time you run the Daily Posting batch program in a new calendar month, the system resets this field to 0.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("xfrytd", ` 
\n### XFR Year to Date
\nThis field stores the number of transfers to this share during the current year.
\nField Number         **064**
\nMnemonic             **XFRYTD**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01064**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf you set the Count Overdraw Transfers prompt to Yes in the Draft Posting, Credit and Debit Card Posting, ATM Posting, ACH Posting, Insurance Posting, or Bill Payment Posting batch program, the system increments this field by one whenever an overdraw transfer transaction moves funds into this share.
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system does the following:
\n   * Moves the value in this field to the XFR Last Year field
\n   * Resets this field to 0
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("xfrlastyear", ` 
\n### XFR Last Year
\nThis field stores the number of transfers to this share during the previous year.
\nField Number         **065**
\nMnemonic             **XFRLASTYEAR**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01065**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the value in the XFR Year to Date field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("negativebalancedate", ` 
\n### Negative Balance Date
\nThis field stores the first date when the share balance went into its current negative state.
\nField Number         **182**
\nMnemonic             **NEGATIVEBALANCEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01182**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system updates this field the first time the Daily Posting batch program runs after the Close Day Processing batch program advances the system date. It does not matter whether the share balance was brought from negative to positive (thereby removing the date) or from positive to negative (thereby adding the system date) on the previous day.
\n
\nThis information is reported as the FCRA Compliance/Date of First Delinquency in Field 25 of the Base Segment of the Metro 2® Format (Symitar v.2) for shares reported as in collections or charged-off.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("negativebalancenoticetype", ` 
\n### Negative Balance Notice Type
\nThis field stores the negative balance notice type code defined in the Negative Balance Notice Messages parameters.
\nField Number         **184**
\nMnemonic             **NEGATIVEBALANCENOTICETYPE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01184**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n***Important:***  If an entered negative balance notice type is not defined, a warning message similar to the following appears:
\nNegative Balance Notice Type 99 is not defined.
`)
shareRecordFields.set("negativebalancenoticenumber", ` 
\n### Negative Balance Notice
\nThis field stores the total number of negative balance notices generated for this share.
\nField Number         **185**
\nMnemonic             **NEGATIVEBALANCENOTICENUMBER**
\nData Type            **Code to 9**
\nSource               **System-entered**
\nHelp File            **01185**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0–8
\n   The total number of negative balance notices generated for this share##### 9
\n   The system should not generate negative balance notices for this share (for example, if the share is charged off)
\nThe system increments this field by 1 each time the Daily Posting batch program generates a negative balance notice for the share, until all eight possible negative balance notices have been generated, or until the share is brought current and the field is reset to 0.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("negativebalancenoticedate", ` 
\n### Negative Balance Notice Date
\nThis field stores the last date a negative balance notice was generated for this share.
\nField Number         **186**
\nMnemonic             **NEGATIVEBALANCENOTICEDATE**
\nData Type            **Date**
\nSource               **System-entered or User-entered**
\nHelp File            **01186**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system updates this field each time the Daily Posting batch program generates a negative balance notice for the share.
\n
\nUnder normal circumstances, you should not revise this field.
\n***Important:***  If the value you enter in the Negative Balance Notice Date field is in the future, a warning message similar to the following appears:
\nNegative Balance Notice Date should not be in the future.
`)
shareRecordFields.set("withholdingcode", ` 
\n### Fed Backup Withholding Code
\nThis field stores a code that indicates whether the system takes federal backup withholding from dividends.
\nField Number         **023**
\nMnemonic             **WITHHOLDINGCODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01023**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nIf the IRS Code field in the Share record is set to (00) Normal, select one of the following options.
\n#### Data Type Descriptions
\n##### (0) No Withholding
\n   The share is not subject to federal backup withholding. The system does not withhold any amount from dividend payments during teller transactions or batch processing.##### (1) Withholding
\n   The share is subject to federal backup withholding. The system withholds the required percentage of the dividend amount during teller transactions and batch processing. This is called "backup withholding." This withholding amount is defined in the IRS Backup Withholding Parameters in Parameter Manager.For Share records with different values in the IRS Code field:
\n   * For shares with any of the following types in the IRS Code field, select the (0) No Withholding option in this field:
\n   * (03) SEP
\n   * (04) Keogh
\n   * (05) 401K
\n   * (06) Roth IRA
\n   * (07) SIMPLE IRA
\n   * (08)Coverdell ESA
\n   * (09) Archer MSA
\n   * (10) Medicare MSA
\n   * (14) Single HSA
\n   * (15) Family HSA
\n
\n   * The system does not withhold any amount from withdrawals during teller transactions or batch processing.
\n
\n   * For shares that have the IRS Code field set to (01) IRA or (03) SEP, the system displays 10% of the withdrawal amount as the default for the minimum federal income tax withholding amount during teller transactions. This field does not affect withdrawals posted during batch processing.
\n   * For shares that have the IRS Code field set to (02) Deferred Comp, this field has no effect.
\n***Important:***  The system does not use this code to take any withholding amounts when you withdraw or transfer dividends earned in an IRA type account. This field applies only to backup withholding from dividends for non-tax-deferred shares. There is a separate Fed Withholding Code field in the IRS Distribution record that applies to tax-deferred shares.
`)
shareRecordFields.set("withholdingytd", ` 
\n### Fed Withheld YTD
\nThis field stores the combined total of the amounts withheld for federal taxes during the current year from dividend payments and distributions.
\nField Number         **024**
\nMnemonic             **WITHHOLDINGYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01024**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system updates this field in the following situations:
\n   * If the Dividend Posting batch program calculates federal backup withholding for the dividends posted to a regular share, the system adds the amount to the value in this field.
\n   * If you enter an amount at the Federal withholding prompt when you distribute funds from shares with the following IRS codes, the system adds the amount to the value in this field:
\n   * (01) IRA
\n   * (03) SEP
\n   * (04) Keogh
\n   * (05) 401K
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system does the following:
\n   * Moves the value in this field to the Fed Withheld Lst Yr field
\n   * Resets this field to 0.00
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("withholdinglastyear", ` 
\n### Fed Withheld Lst Yr
\nThis field stores the combined total of the amounts withheld from dividend payments and distributions of IRA shares for federal taxes during the previous year.
\nField Number         **025**
\nMnemonic             **WITHHOLDINGLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01025**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the value in the Fed Withheld YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("chapter4withholdingcode", ` 
\n### Fed Chapter 4 Withholding Code
\nThis field stores a code that determines whether the system withholds Chapter 4 tax withholding from paid dividends.
\nField Number         **189**
\nMnemonic             **CHAPTER4WITHHOLDINGCODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01189**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No withholding
\n   You do not want to withhold an amount from dividend payments during teller transactions or batch processing.##### (1) Withholding
\n   You want to withhold an amount from dividend payments during teller transactions or batch processing.
\nThe system calculates the withholding amount from the percentage rate in the Chapter 4 Tax Rate parameter in Miscellaneous Parameters.
\n
\nThis field applies only to Chapter 4 tax withholding on dividends from shares that are not tax-deferred. The system does not use this code to withhold amounts when you withdraw or transfer dividends earned in an IRA type or tax-deferred account. The Fed Withholding Code field in the IRS Distribution record applies to tax-deferred accounts.
`)
shareRecordFields.set("chapter4withheldytd", ` 
\n### Fed Chapter 4 Withheld YTD
\nThis field stores the total amount of Chapter 4 withholding during the current year.
\nField Number         **190**
\nMnemonic             **CHAPTER4WITHHELDYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01190**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system does the following:
\n   * Moves the value in this field to the Fed Chapter 4 Withhold Last Yr field
\n   * Resets this field to 0.00
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("chapter4withheldlstyr", ` 
\n### Fed Chapter 4 Withheld Lst Yr
\nThis field stores the total amount of Chapter 4 withholding from the previous year.
\nField Number         **191**
\nMnemonic             **CHAPTER4WITHHELDLSTYR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01191**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen you run the Close Day Processing batch program for the first time in a new calendar year, the system moves the value in this field to the Fed Chapter 4 Withheld YTD field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("statewithholdingcode", ` 
\n### State Backup Withholding Code
\nThis field stores a code that indicates whether the system takes state backup withholding from dividends. This field affects teller transactions only and has no effect on batch transactions.
\nField Number         **068**
\nMnemonic             **STATEWITHHOLDINGCODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01068**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nIf the IRS Code field in the Share record is not set to (00) Normal or (02) Deferred Comp, select one of the following options.
\n#### Data Type Descriptions
\n##### (0) No Withholding
\n   The system does not withhold any amount from distributions during teller transactions.##### (1) Withholding
\n   A percentage of the withdrawal amount is displayed as the default state withholding amount during teller transactions. The State Reporting parameter in the Miscellaneous Parameters determines the withholding state and withholding percentage.
\nThis field does not affect shares that have the IRS Code field set to (00) Normal or (02) Deferred Comp.
\n***Important:***  The system does not use this code to take any withholding amounts when you withdraw or transfer dividends earned in an IRA type account. This field applies only to backup withholding from dividends for non-tax-deferred shares. There is a separate Fed Withholding Code field in the IRS Distribution record that applies to tax-deferred shares.
`)
shareRecordFields.set("statewithholdingytd", ` 
\n### State Withheld YTD
\nThis field stores the combined total of all amounts withheld for state taxes from distributions of a tax-deferred share during the current year.
\nField Number         **069**
\nMnemonic             **STATEWITHHOLDINGYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01069**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is automatically updated if you enter an amount at the teller transaction State withholding prompt when you distribute funds from a tax-deferred share. The system adds the amount to the value in this field.
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system does the following:
\n   * Moves the value in this field to the State Withheld Lst Yr field
\n   * Resets this field to 0.00
\n
\nUnder normal circumstances, you should not revise this field.
\n***Important:***  Some transaction strings beginning with Share Withdrawal (SW) performed between releases 17.02 and 19.00 may have created irregularities in this field. Notifications on resolving this issue have been sent to all clients.
`)
shareRecordFields.set("statewithholdinglastyear", ` 
\n### State Withheld Lst Yr
\nThis field stores the combined total of all amounts withheld for state taxes from distributions from a tax-deferred share during the previous year.
\nField Number         **070**
\nMnemonic             **STATEWITHHOLDINGLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01070**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the value in the State Withheld YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("statewithholdingqtd", ` 
\n### State Withheld QTD
\nThis field stores the total amount withheld for state taxes from distributions of tax-deferred shares during the current quarter.
\nField Number         **146**
\nMnemonic             **STATEWITHHOLDINGQTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01146**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf you enter an amount at the teller transaction State withholding prompt when you distribute funds from a tax-deferred share, the system adds the amount you entered to the value in this field.
\nThe first time you run the Close Day Processing batch program at the end of the quarter, the system does the following:
\n   * Moves the value in this field to the State Withheld Lst Qtr field
\n   * Resets this field to 0.00
\n
\nUnder normal circumstances, you should not revise this field.
\n***Important:***  This field does not store backup withholding amounts for non-tax-deferred shares.
`)
shareRecordFields.set("statewithholdinglastqtr", ` 
\n### State Withheld Lst Qtr
\nThis field stores the total amount withheld for state taxes from distributions of tax-deferred shares during the previous quarter.
\nField Number         **147**
\nMnemonic             **STATEWITHHOLDINGLASTQTR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01147**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen you run the Close Day Processing batch program at the end of the quarter, the system does the following:
\n   * Moves the value in the State Withheld QTD field to this field
\n   * Resets the State Withheld QTD field to 0.00
\n
\nUnder normal circumstances, you should not revise this field.
\n***Important:***  This field does not store backup withholding amounts for non-tax-deferred shares.
`)
shareRecordFields.set("bondintytd", ` 
\n### Bond Interest YTD
\nThis field stores the amount of interest earned on bonds during the current year.
\nField Number         **058**
\nMnemonic             **BONDINTYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01058**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever you redeem a bond using the Bond Redemption (BR) teller transaction, the interest earned on bonds is added to the value in this field. If you void the comment transaction created by a Bond Redemption (BR) transaction, the interest amount is subtracted from this field.
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system does the following:
\n   * Moves the value in this field to the Bond Int Last Year field
\n   * Resets this field to 0.00
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("bondintlastyear", ` 
\n### Bond Int Last Year
\nThis field stores the amount of interest earned on bonds during the previous year.
\nField Number         **059**
\nMnemonic             **BONDINTLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01059**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the value in the Bond Interest YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("loanpaymenthold", ` 
\n### Loan Payment Hold
\nThis field stores the total amount held in reserve to cover pledged loan payments for loans in the account that reference this share.
\nField Number         **056**
\nMnemonic             **LOANPAYMENTHOLD**
\nData Type            **Money**
\nSource               **System-entered or User-entered**
\nHelp File            **01056**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe total amount to cover pledged loan payments for loans in the account that reference this share is held only for loans that have one of the following values in the Payment Method field in the Loan record:
\n   * (2) Auto Xfr
\n   * (3) Payroll
\n   * (4) Payroll after due
\n   * (5) Distribution
\n   * (6) Distribution after due
\n   * (7) Scheduled Auto Xfr
\n   * (8) Scheduled Auto Xfr after due
\nThe system calculates the amount held in reserve in this share to cover pledged loan payments during batch processing if you do one of the following:
\n   * Specify a value at the Payment Hold Method and Payment Hold Minimum prompts in the Daily Posting batch program
\n   * Specify a value at the Hold Method and Hold Release Method prompts in the Payroll Posting batch program
\n   * Specify a value at the Hold Method and Hold Release Method prompts in the ACH Posting batch program
\n   * Otherwise, you must enter this amount manually.
`)
shareRecordFields.set("penaltytype", ` 
\n### Penalty Type
\nThis field stores a code to specifies how penalties should be assessed for early withdrawal of a certificate. It provides ceilings on the penalty period.
\nField Number         **026**
\nMnemonic             **PENALTYTYPE**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **01026**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Assess at most a 31-day penalty if the certificate term is one year or less, or at most 90-day penalty if the certificate term is over one year.
\n   
\n       * When you set the Cert Penalty by PowerOn parameter in the Miscellaneous Parameters to Yes and use the VALIDATE.CDPENALTY validation specfile, the specfile calculates a custom penalty as defined by specfile.
\n##### 1
\n   Assess at most a 90-day penalty if the certificate term is one year or less, or at most a 180-day penalty if the certificate term is over one year.
\n   
\n       * For example, a two-year share certificate with a penalty type of 1 that is closed after being open for 300 days will be assessed only 180 days. However, if that share certificate is being closed after 60 days, it will be assessed only a 60-day penalty, not a 180-day penalty, since 180 is the maximum, not required, amount.
\n   
\n       * When you set the Cert Penalty by PowerOn parameter in the Miscellaneous Parameters to Yes and use the VALIDATE.CDPENALTY validation specfile, the specfile calculates a custom penalty as defined by specfile.
\n##### 2–9
\n   A credit union-defined code to use a penalty calculation defined in your custom VALIDATE.CDPENALTY validation specfile. If you do not want to calculate standard certificate penalties, you can customize penalties using PowerOn. To do so, you must set the Cert Penalty by PowerOn parameter in the Miscellaneous Parameters to Yes and write a specfile to calculate the penalty amount.
\nThe system automatically calculates the penalty amount for certificates that have the Penalty Type field set to 0–1 as follows:
\n
\nIf you are using the VALIDATE.CDPENALTY specfile, the system calculates the penalty amount for certificates with penalty types as defined in the specfile. You can use these fields to apply penalties with any PowerOn specfile. Here are a few examples:
\n***Important:***  To ensure that all penalty types are calculated as expected by your credit union, you must place a penalty calculation in your specfile for all penalty types even if the penalty amount is $0.00. If you do not place a penalty calculation for a specific penalty type and a withdrawal is made, the system defaults the penalty to the system standard penalty type of 0.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("penaltyytd", ` 
\n### Penalty YTD
\nThis field stores the total amount of penalties assessed for early withdrawal of certificates during the current year.
\nField Number         **027**
\nMnemonic             **PENALTYYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01027**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever the system assesses a penalty for early withdrawal of a certificate, the penalty amount is added to the value in this field. The system computes a default penalty amount, but the teller can override it.
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system does the following:
\n   * Moves the value in this field to the Penalty Last Year field
\n   * Resets this field to 0.00
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("penaltylastyear", ` 
\n### Penalty Last Year
\nThis field stores the total amount of penalties assessed for early withdrawal of certificates during the previous year.
\nField Number         **028**
\nMnemonic             **PENALTYLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01028**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system moves the value in the Penalty YTD field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("withdrawallimit", ` 
\n### Withdrawal Limit
\nThis field stores the maximum number of withdrawals allowed from the share.
\nField Number         **037**
\nMnemonic             **WITHDRAWALLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01037**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nThis field and the Withdrawal Count field work together. The system always tallies withdrawals in the Withdrawal Count field. If you set this field to a non-zero value, then whenever the value in the Withdrawal Count field is greater than or equal to this field during teller transactions, the system does the following:
\n
\nWhen you run the ATM Posting batch program, the system posts withdrawals that exceed the withdrawal limit, but displays a warning on the batch program's exception report. When you run the ACH Posting, Draft Posting, or Payroll Posting batch program, if a withdrawal exceeds the specified withdrawal limit, the system does not post the transaction and displays a warning on the batch program's exception report.
`)
shareRecordFields.set("withdrawalcount", ` 
\n### Withdrawal Count
\nThis field stores the number of withdrawals to date from this share.
\nField Number         **038**
\nMnemonic             **WITHDRAWALCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01038**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("withdrawnfromopen", ` 
\n### Withdraw From Open
\nThis field stores the total amount withdrawn from the share since it was opened except in the case when a share certificate is renewed by the Daily Posting batch program.
\nField Number         **039**
\nMnemonic             **WITHDRAWNFROMOPEN**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01039**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen a share certificate is renewed by the Daily Posting batch program, this field is reset to 0.00. Whenever a Share Withdrawal (SW) transaction is performed, the system adds the amount of the withdrawal to this field. Additionally, the value in the Withdraw From Open field is used with the Dividend From Open field to determine applicable penalties on share certificates. In the case of a share certificate, the value in the Withdraw From Open field is never greater than the value in the Dividend From Open field when the value in the Penalty Type field is not equal to 0, and in this situation the share certificate penalty dips into the principal amount.
\n
\nDuring a withdrawal, the value in this field increases by the amount of the withdrawal unless there is a penalty. If you accept the calculated penalty, a non-zero amount, the system copies value of the Dividend From Open field (zero in this case) to this field.
\n
\nYou can confirm the penalty amount in the transaction summary, in the Int/Penalty field.
\n
\nFor example, if the value in the Penalty Type field is 1 or higher, and the value in the Dividend From Open field is set to $20.00, and the user withdraws $40.00 from the certificate, the Withdraw From Open field displays $20.00.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("withdrawalfeetype", ` 
\n### Withdrawal Fee Type
\nThis field stores a credit union-defined code that specified how the system assesses withdrawal fees.
\nField Number         **040**
\nMnemonic             **WITHDRAWALFEETYPE**
\nData Type            **Code to 5**
\nSource               **User-entered**
\nHelp File            **01040**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nYou can define five separate withdrawal fee types with the Withdrawal Fee Types parameters. Your entry in this field tells the system which withdrawal fee type definition to use for this share.
\n#### Data Type Descriptions
\n##### (0) None
\n   Withdrawal fees are not assessed for this share. You can, however, assess a lobby visit or teller usage fee.##### 1
\n   Your credit union assesses a fee for withdrawals from this share based on the definition of withdrawal fee type 1.##### 2
\n   Your credit union assesses a fee for withdrawals from this share based on the definition of withdrawal fee type 2.##### 3
\n   Your credit union assesses a fee for withdrawals from this share based on the definition of withdrawal fee type 3.##### 4
\n   Your credit union assesses a fee for withdrawals from this share based on the definition of withdrawal fee type 4.##### 5
\n   Your credit union assesses a fee for withdrawals from this share based on the definition of withdrawal fee type 5.
\n`)
shareRecordFields.set("withdrawalfeecount", ` 
\n### Withdrawal Fee Count
\nThis field stores the number of lobby visits, teller uses, or withdrawals that have been made by a member that qualify under the Withdrawal Fee Type parameters for a fee.
\nField Number         **041**
\nMnemonic             **WITHDRAWALFEECOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01041**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf the value in the Withdrawal Fee Type field is 0 and the option to charge the lobby visit fee or teller usage fee has been turned on, one of the following occurs:
\n
\nIf the value in the Withdrawal Fee Type field is any value between1 and 5, the system increments this field by 1 whenever a withdrawal is posted that qualifies as follows:
\n
\nUnder normal circumstances, you should not revise this field.
\n***Important:***  You cannot charge both a lobby visit fee and a teller usage fee, as they are mutually exclusive.
`)
shareRecordFields.set("feecount", ` 
\n### Fee Count 1–Fee Count 4
\nThese fields store the number of times a specific fee has been assessed for this share, or the number of times a specified transaction has occurred (for calculating or charging a fee).
\nField Number         **067:001 - 067:004**
\nMnemonic             **FEECOUNT:1 - FEECOUNT:4**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01067**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough these fields are commonly used to store the number of times each fee (of up to four different credit union-defined fees) has been assessed for the share, you can use these fields to store any type of credit union-defined information (number, date, rate, money, or code) except character data. You can update these fields with a PowerOn specfile, through your online ATM software, or manually. The system does not update these fields as the result of teller transactions or batch processing. Because these fields are limited to four digits, you must round any monetary amounts stored in these fields to the nearest dollar, and you cannot store amounts over $9,999.
`)
shareRecordFields.set("insurancetype", ` 
\n### Insurance Type
\nThis field stores a credit union-defined code that identifies the type of insurance.
\nField Number         **032**
\nMnemonic             **INSURANCETYPE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01032**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("insurancemaximum", ` 
\n### Insurance Maximum
\nThis field stores the maximum share balance covered by insurance.
\nField Number         **033**
\nMnemonic             **INSURANCEMAXIMUM**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01033**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the maximum share balance covered by insurance.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("insurancebalanceage", ` 
\n## INSURANCEBALANCEAGE:1
\n### Ins Balance Age 55
\nThis field stores the amount of the highest share balance less than or equal to the value in the Insurance Maximum field left in the share since the member reached age 55.
\nField Number         **034:001**
\nMnemonic             **INSURANCEBALANCEAGE:1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01034**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen the member is 1–59 years of age, the system updates this field each time the share balance changes, as follows:
\n
\nWhen the member reaches 60 years of age, the system does not update this field unless the current share balance drops below the amount in this field, in which case this field is updated with the current (lower) share balance.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## INSURANCEBALANCEAGE:2
\n### Ins Balance Age 60
\nThis field stores the amount of the highest share balance less than or equal to the value in the Insurance Maximum field left in the share since the member reached age 60.
\nField Number         **034:002**
\nMnemonic             **INSURANCEBALANCEAGE:2**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01034**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen the member is 60–64 years of age, the system updates this field each time the share balance changes, as follows:
\n
\nWhen the member reaches 65 years of age, the system does not update this field unless the current share balance drops below the amount in this field, in which case this field is updated with the current (lower) share balance.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\N## INSURANCEBALANCEAGE:3
\n### Ins Balance Age 65
\nThis field stores the amount of the highest share balance less than or equal to the value in the Insurance Maximum field left in the share since the member reached age 65.
\nField Number         **034:003**
\nMnemonic             **INSURANCEBALANCEAGE:3**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01034**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen the member is 65–69 years of age, the system updates each time the share balance changes, as follows:
\n
\nWhen the member reaches 70 years of age, the system does not update this field unless the current share balance drops below the amount in this field, in which case this field is updated with the current (lower) share balance.
\n
\nUnder normal circumstances, you should not revise this field.
\n
\n## INSURANCEBALANCEAGE:4
\n### Ins Balance Age 70
\nThis field stores the amount of the highest share balance less than or equal to the value in the Insurance Maximum field left in the share since the member reached age 70.
\nField Number         **034:004**
\nMnemonic             **INSURANCEBALANCEAGE:4**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01034**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhen the member is 70–74 years of age, the system updates this field each time the share balance changes, as follows:
\n
\nWhen the member reaches 75 years of age, the system does not update this field. At age 75, the member is not eligible for insurance.
\n
\nthe system
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("cutotalsusecode", ` 
\n### CU Totals Code
\nThis field stores a code that specifies if the share balance is included in credit union totals calculations.
\nField Number         **071**
\nMnemonic             **CUTOTALSUSECODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01071**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Use record in credit union totals
\n   Include the share balance in credit union totals calculations.##### (1) Do not use record in credit union totals
\n   Exclude the share balance from credit union totals calculations.
\n`)
shareRecordFields.set("chargeoffdate", ` 
\n### Charge-off Date
\nThis field stores the date the share was charged off.
\nField Number         **075**
\nMnemonic             **CHARGEOFFDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01075**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date the share was charged off.
\n
\nIf the value in the Charge-off Date field is date null (__/__/__), the share is not charged off, and the system ignores the Charge-off Date, Charge-off Type, Credit Reporting Code, and Credit Report Number fields.
\n***Important:***  If you attempt to enter a value in this field when the share is used for the escrow portion of an active Loan record (there is a value in the Escrow ID field), the following warning appears:
\n
\nThe Share Close Option field in Miscellaneous Parameters ignores shares that have this field populated.
`)
shareRecordFields.set("chargeofftype", ` 
\n### Charge-off Type
\nThis field stores the credit union-defined code indicating why this share was charged off or the type of share that was charged off.
\nField Number         **076**
\nMnemonic             **CHARGEOFFTYPE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01076**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf the value in the Charge-off Date field is date null (__/__/__), the share is not charged off, and the system ignores the Charge-off Date, Charge-off Type, Credit Reporting Code, and Credit Report Number fields.
`)
shareRecordFields.set("chargeoffamount", ` 
\n### Charge-off Amount
\nThis field stores the amount charged off.
\nField Number         **074**
\nMnemonic             **CHARGEOFFAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01074**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the amount charged off. The amount should be positive. For example, if the share balance is -750.00 at the time of the charge-off, type 75000. Any negative amount results in a zero on the credit report.
\n
\nThe status code used in credit reporting is 64 (Account paid in full, was a charge-off) or 97 (Unpaid balance reported as a loss [charge-off]). Status codes 64 and 97 are possible by setting the Credit Reporting Code field to 0 (Normal) and populating the Charge-off Date field.
`)
shareRecordFields.set("lastcrreportdate", ` 
\n### Last CR Reporting Date
\nThis field is for informational use only and may be used in the future.
\nField Number         **142**
\nMnemonic             **LASTCRREPORTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01142**
\nDefault Control      **No**
\nDefault Value **Data Null**
`)
shareRecordFields.set("creditreportingcode", ` 
\n### Credit Reporting Code
\nThis field stores a code that specifies how the share should be reported to credit bureaus.
\nField Number         **077**
\nMnemonic             **CREDITREPORTINGCODE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01077**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Normal
\n   The system automatically assigns one of the following credit reporting status codes to indicate the status of the share to credit bureaus:
\n       * 64 = Account paid in full, was a charge-off
\n       * 97 = Unpaid balance reported as a loss (charge-off)
\n   
\n       * Do not enter the actual status codes of 64 or 97. Select (0) Normal to cause the system to assign the appropriate status code automatically. If you enter any code except (0) Normal, you must perform file maintenance on this field manually.
\n##### (1) Do Not Report
\n   The system does not report this share to credit bureaus.##### 03
\n   Override the system-generated credit reporting status code with Credit card lost or stolen.##### 04
\n   Override the system-generated credit reporting status code with Closed inactive account.##### 06/DA
\n   Override the system-generated credit reporting status code with Delete entire account (for reasons other than fraud).##### 07/DF
\n   Override the system-generated credit reporting status code with Delete entire account due to confirmed fraud (fraud investigation completed) * Metro 2® Format.##### 10
\n   Override the system-generated credit reporting status code with Refinanced.
\n   
\n       * Not valid in Metro2® Format.
\n##### 42
\n   Override the system-generated credit reporting status code with Repossession/now redeemed.
\n   
\n       * Not valid in Metro2 Format.
\n##### 61
\n   Override the system-generated credit reporting status code with Account paid in full, was a voluntary surrender.##### 62
\n   Override the system-generated credit reporting status code with Account paid in full, was a collection account.##### 63
\n   Override the system-generated credit reporting status code with Account paid in full, was a repossession.##### 65
\n   Override the system-generated credit reporting status code with Account paid in full. A foreclosure was started.##### 66
\n   Override the system-generated credit reporting status code with Paid by dealer.
\n   
\n       * Not valid in Metro2 Format.
\n##### 67
\n   Override the system-generated credit reporting status code with Bankruptcy liquidation reorganization.
\n   
\n       * Not valid in Metro2 Format.
\n##### 68
\n   Override the system-generated credit reporting status code with Settled.
\n   
\n       * Not valid in Metro2 Format.
\n##### 69
\n   Override the system-generated credit reporting status code with Bankruptcy adjustment plan.
\n   
\n       * Not valid in Metro2 Format.
\n##### 85
\n   Override the system-generated credit reporting status code with Credit grantor could not locate consumer/consumer now located.##### 86
\n   Override the system-generated credit reporting status code with Now paying, was a charge-off.
\n   
\n       * Not valid in Metro2 Format.
\n##### 87
\n   Override the system-generated credit reporting status code with Foreclosure proceeding started.
\n   
\n       * Not valid in Metro2 Format.
\n##### 88
\n   Override the system-generated credit reporting status code with Claim filed with government for insured portion of balance on a defaulted loan.##### 89
\n   Override the system-generated credit reporting status code with Deed received in lieu of foreclosure on a defaulted mortgage; there may be a balance due.##### 91
\n   Override the system-generated credit reporting status code with Early termination of lease/sales contract by default.
\n   
\n       * Not valid in Metro2 Format.
\n##### 92
\n   Override the system-generated credit reporting status code with Insurance claim.
\n   
\n       * Not valid in Metro2 Format.
\n##### 93
\n   Override the system-generated credit reporting status code with Account assigned to internal or external collections.##### 94
\n   Override the system-generated credit reporting status code with Foreclosure completed; there may be a balance due.##### 95
\n   Override the system-generated credit reporting status code with Voluntary surrender; there may be a balance due.##### 96
\n   Override the system-generated credit reporting status code with Merchandise was repossessed; there may be a balance due.##### 98
\n   Override the system-generated credit reporting status code with Credit grantor cannot locate consumer.
\nIf you put a close date on a charged-off share, the share reports to the credit bureaus one last time, with a status of closed. When the Close Date field is populated, the system changes the Credit Reporting Code field to (1) Do Not Report, and the share no longer reports.
\n
\nDo not enter special comment codes in this field. Enter all special comment codes in the Credit Report Comment field.
\n
\nIf the value in the Charge-off Date field is date null (__/__/__), the share is not charged off, and the system ignores the Charge-off Date, Charge-off Type, Credit Reporting Code, and Credit Report Number fields.
`)
shareRecordFields.set("creditreportcomment", ` 
\n### Credit Report Comment
\nThis field stores a character code that indicates information reported to credit reporting agencies in the Metro Credit Reporting Special Comments field.
\nField Number         **082**
\nMnemonic             **CREDITREPORTCOMMENT**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **01082**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe following are a list of Special Comment values:
\n   * Important:
\n   * Comment Codes BB through BK and BS require Account Type 3A or 13.
\n   * Comment Codes BN and BP require Account Status Code 13 or 61-65 and a Current Balance of zero.
\n   * Comment Codes CJ and CM, the Account Status Code should not be 13 or 61-65 and the Current Balance should not be zero.
\n
\n           <Blank> = Removes Any Previously Reported Special Comment CodeAD = Interest Bearing (No longer used)BH = Early Termination/Insurance Loss
\n           A = Early Termination by Default (No longer used)AE = Non-Interest Bearing (No longer used)BI = Involuntary Repossession
\n           B = Account Payments Managed by Financial Counseling ProgramAF = Single Payment Loan (Not used in Metro 2 Format)BJ = Involuntary Repossession/Obligation Satisfied
\n           C = Paid by Co-Maker or GuarantorAG = Simple Interest Loan (No longer used)BK = Involuntary Repossession/Balance Owing
\n           D = Student Loan * Payment Deferred Requires Account Type 12 (Not used in Metro 2® Format)AH = Purchased By Another LenderBL = Credit Card Lost or Stolen (Metro 2 Format only)
\n           E = Primary Borrower Declared Bankruptcy (Not used in Metro 2 Format)AI = Recalled To Military Active DutyBN = Paid By Company Which Originally Sold The Merchandise (Metro 2 Format only)
\n           F = Secondary Borrower Declared Bankruptcy (Not used in Metro 2 Format)AJ = Payroll Deduction (No longer used)BO = Foreclosure Proceeding Started (Metro 2 Format only)
\n           G = Account Closed Due to Transfer or Refinance (No longer used)AK = Reaffirmation Of Debt (Not used in Metro 2 Format)BP = Paid Through Insurance (Metro 2 Format only)
\n           H = Loan Assumed by Another PartyAL = Student Loan * Assigned To Government (No longer used)BQ = Payment Deferred (Not used in Metro 2 Format)
\n           I = Election of RemedyAM = Account Payments Assured By Wage GarnishmentBS = Prepaid Lease * Requires Account Type 3A or 13
\n           J = Election of Remedy (Not used in Metro 2 Format)AN = Account Acquired By FDIC/NCUABT = Principal Deferred/Interest Payment Only
\n           K = Retains Previously Reported Special Comment (No longer used)AO = Voluntarily Surrendered * then Redeemed or ReinstatedBU = Account Information Disputed By Consumer (Not used in Metro 2 Format)
\n           L = Account Closed (Not used in Metro 2 Format)AP = Credit Line SuspendedBV = Bankruptcy Chapter 7 (Not used in Metro 2 Format)
\n           M = Account Closed at Credit Grantor's RequestAR = Contingent Liability (Not used in Metro 2 Format)BW = Bankruptcy Chapter 11 (Not used in Metro 2 Format)
\n           N = Account Closed at Consumer's Request (Not used in Metro 2 Format)AS = Account Closed Due To RefinanceBX = Bankruptcy Chapter 12 (Not used in Metro 2 Format)
\n           O = Account Transferred to Another LenderAT = Account Closed Due To TransferBY = Bankruptcy Withdrawn (Not used in Metro 2 Format)
\n           P = Dispute Resolved * Consumer Disagrees (Not used in Metro 2 Format)AU = Account Paid In Full For Less Than The Full BalanceCA = Account Closed at Consumer's Request and in Dispute
\n           Q = Dispute Resolved * Consumer Disagrees (Not used in Metro 2 Format)AV = First Payment Never ReceivedCB = Account Closed at Consumer's Request and Dispute Resolved, Consumer Disagrees
\n           R = Removes Any Previously Reported Special Comment Code (Not used in Metro 2 Format)AW = Affected By Natural or Declared DisasterCH = Guaranteed/Insured (Metro 2 Format only)
\n           S = Special Handling * Contact Credit Grantor for Additional InformationAX = Account Paid From CollateralCI = Account Closed Due to Inactivity (Metro 2 Format only)
\n           U = Special Handling * Contact Credit Grantor for Additional InformationAY = Now Paying (Not used in Metro 2 Format)CJ = Credit Line No Longer Available – In Repayment Phase
\n           V = Adjustment PendingAZ = Redeemed or Reinstated RepossessionCK = Credit Line Reduced Due to Collateral Depreciation
\n           W = Adjustment Pending (Not used in Metro 2 Format)BA = Transferred To RecoveryCL= Credit Line Suspended Due to Collateral Depreciation
\n           X = Account In Dispute under Fair Credit Billing Act (Not used in Metro 2 Format)BB = Full Termination/Status PendingCM = Collateral Released by Creditor / Balance Owing
\n           Y = Account In Dispute under Fair Credit Billing Act (Not used in Metro 2 Format)BC = Full Termination/Obligation SatisfiedCN = Loan Modified Under a Federal Government Plan
\n           Z = Account Previously In Dispute * Now Resolved (Not used in Metro 2 Format)BD = Full Termination/Balance OwingCO = Loan Modified, but Not Under a Federal Government Plan
\n           AA = Student Loan * Payment Deferred. Requires Account Type 12 (Not used in Metro 2 Format)BE = Early Termination/Status PendingCP = Loan in Forbearance
\n           AB = Debt Being Paid Through InsuranceBF = Early Termination/Obligation SatisfiedDE = Extinguished Debt
\n           AC = Paying Under A Partial Payment AgreementBG = Early Termination/Balance Owing 
\nThe Credit Reporting Code field no longer contains values representing the special comments described above. Enter all special comment codes in this field. Discuss the use of special comment codes with your credit reporting agency.
`)
shareRecordFields.set("creditreportnumber", ` 
\n### Credit Report Number
\nThis field stores the number used for reporting about this share to the credit bureaus. You cannot access this field for file maintenance.
\nField Number         **078**
\nMnemonic             **CREDITREPORTNUMBER**
\nData Type            **17 Characters**
\nSource               **System-entered**
\nHelp File            **01078**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nTo create this number, you must first run the Close Day Processing batch program. Then, when you next run the Trial Balance Reports batch program, the system creates the value for this field for a charged-off share. The Trial Balance Reports batch program generates the Credit Report Number field value using the share ID and the account number under which the system previously reported this share to a credit bureau:
\n
\nIf the value in the Charge-off Date field is date null (__/__/__), the share is not charged off, and the system ignores the Charge-off Date, Charge-off Type, Credit Reporting Code, and Credit Report Number fields.
`)
shareRecordFields.set("creditreportlaststatus", ` 
\n### Credit Report Last Status
\nThis field stores the last Metro credit reporting status code reported to the credit bureau.
\nField Number         **081**
\nMnemonic             **CREDITREPORTLASTSTATUS**
\nData Type            **Code to 99**
\nSource               **System-entered**
\nHelp File            **01081**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The share or loan has never been reported.##### 03
\n   Credit card lost or stolen##### 04
\n   Closed inactive account##### 05
\n   Account transferred##### 06/DA
\n   Delete entire account (for reasons other than fraud)##### 07/DF
\n   Delete entire account due to confirmed fraud (fraud investigation completed) * Metro 2 Format##### 10
\n   Refinanced##### 11
\n   Current account (0–29 days past the due date)##### 13
\n   Paid or closed account/zero balance##### 42
\n   Repossession/now redeemed##### 61
\n   Account paid in full, was a voluntary surrender##### 62
\n   Account paid in full, was a collection account##### 63
\n   Account paid in full, was a repossession##### 64
\n   Account paid in full, was a charge-off##### 65
\n   Account paid in full. A foreclosure was started##### 66
\n   Paid by dealer##### 67
\n   Bankruptcy liquidation reorganization##### 68
\n   Settled##### 69
\n   Bankruptcy adjustment plan##### 71
\n   Account 30–59 past the due date##### 78
\n   Account 60–89 days past the due date##### 80
\n   Account 90–119 days past the due date##### 82
\n   Account 120–149 days past the due date##### 83
\n   Account 150–179 days past the due date##### 84
\n   Account 180 days or more past the due date##### 85
\n   Credit grantor could not locate consumer/consumer now located##### 86
\n   Now paying, was a charge-off##### 87
\n   Foreclosure proceeding started##### 88
\n   Claim filed with government for insured portion of balance on a defaulted loan##### 89
\n   Deed received in lieu of foreclosure on a defaulted mortgage; there may be a balance due##### 91
\n   Early termination of lease/sales contract by default##### 92
\n   Insurance claim##### 93
\n   Account assigned to internal or external collections##### 94
\n   Foreclosure completed; there may be a balance due##### 95
\n   Voluntary surrender; there may be a balance due##### 96
\n   Merchandise was repossessed; there may be a balance due##### 97
\n   Unpaid balance reported as a loss (charge-off)##### 98
\n   Credit grantor cannot locate consumer
\nThe system updates this field whenever you run the Credit Reporting Tape option of the Trial Balance batch program.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("creditreportoccurdate", ` 
\n### Credit Report Occurrence
\nThis field stores the last Metro Credit Reporting date of occurrence reported to the credit bureau.
\nField Number         **080**
\nMnemonic             **CREDITREPORTOCCURDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01080**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIt contains a date null (__/__/__) if the loan has never been reported or if the Credit Report Last Status field value is either (11) Current or (13) Paid or Closed Account/Zero Balance.
\n
\nThe date of occurrence reported to credit bureaus must contain the date of the first delinquency that led to the derogatory status being reported. This field is used by the credit reporting agencies to purge information from their databases.
\n
\nFor charged-off shares, the system calculates the date of occurrence by looking back through transaction history to find the most recent date that the share balance went from a positive balance or 0.00 to a negative balance.
\n
\nThere is an exception if any of the following is true:
\n
\nIf there is an exception, the system uses the value in the Share record's Open Date field. You are required to report this date if the actual date of occurrence is not known.
\n
\nIf you manually set the Credit Reporting Code field to force a derogatory status to be reported, you must manually set this field to the correct date of occurrence.
`)
shareRecordFields.set("creditreportconsumerinfo", ` 
\n### Credit Report Consumer Info
\nThis field stores a character code that provides consumer information for the Metro 2® Format for credit reports.
\nField Number         **089**
\nMnemonic             **CREDITREPORTCONSUMERINFO**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **01089**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nType in one of the following values:
\n   * Blank = Retains previously reported value, or no new credit report consumer information indicator applies for this reporting period.
\n   * A = Petition for Chapter 7 Bankruptcy
\n   * B = Petition for Chapter 11 Bankruptcy
\n   * C = Petition for Chapter 12 Bankruptcy
\n   * D = Petition for Chapter 13 Bankruptcy
\n   * E = Discharged through Bankruptcy Chapter 7
\n   * F = Discharged through Bankruptcy Chapter 11
\n   * G = Discharged through Bankruptcy Chapter 12
\n   * H = Discharged/Completed through Bankruptcy Chapter 13 (Should be reported when consumer has completed all payments through the Chapter 13 plan)
\n   * Q = Removes Bankruptcy Indicator previously reported (A through P and Z) or personal receivership indicator (1A). Also used to report bankruptcies that have been closed or terminated without being discharged or dismissed. Do not report Q as a default value. If no new CII applies in the current reporting period, leave blank.
\n   * R = Reaffirmation of Debt
\n   * S = Removes previously reported Reaffirmation of Debt (R), Reaffirmation of Debt (V) Rescinded, and Lease Assumption (2A) indicators, and obsolete values W, X, and Y. Do not report S as a default value. If no new CII applies to the current reporting period, leave blank.
\n   * T = Credit Grantor Cannot Locate Consumer
\n   * U = Consumer Now Located (Removes previously reported T Indicator). Do not report U as a default value. If no new CII applies to the current reporting period, leave blank.
\n   * V = Chapter 7 Reaffirmation of Debt Rescinded
\n   * 1A = Personal Receivership
\n   * 2A = Lease Assumption
`)
shareRecordFields.set("creditreportcompliance", ` 
\n### Credit Report Compliance Info
\nThis field stores a character code that provides compliance information for the Metro 2® Format for credit reports.
\nField Number         **090**
\nMnemonic             **CREDITREPORTCOMPLIANCE**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **01090**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n#### Data Type Descriptions
\n##### Blank
\n   Retains previously reported code, or no new Compliance Condition Code applies for this reporting period##### XA
\n   Account Closed at consumer's request##### XB
\n   Account information disputed by the consumer (Meets requirements of The Fair Credit Reporting Act [FCRA]); the data furnisher is conducting its investigation##### XC
\n   Completed Investigation of FCRA dispute * consumer disagrees##### XD
\n   Account closed at consumer's request; and account information disputed by the consumer direct to the data furnisher under the FCRA; the data furnisher is conducting its investigation##### XE
\n   Account closed at consumer's request; and data furnisher has completed its investigation; consumer disagrees with the results of the investigation (To be used for direct disputes under the FCRA or FCBA [Fair Credit Billing Act] disputes)##### XF
\n   Account in dispute under Fair Credit Billing Act (FCBA); the data furnisher is conducting its investigation##### XG
\n   FCBA dispute investigation completed * consumer disagrees with the results of the data furnisher's investigation##### XH
\n   Account previously in dispute; the data furnisher has completed its investigation (To be used for direct disputes under the FCRA, FDCPA [Fair Debt Collection Practices Act] disputes or FCBA disputes)##### XJ
\n   Account closed at consumer's request; and account information disputed by the consumer under FCBA; the data furnisher is conducting its investigation##### XR
\n   Removes the most recently reported Compliance Code
\n`)
shareRecordFields.set("creditreportconsumerinfodate", ` 
\n### Credit Rpt Consumer Date
\nThis field stores the date of the last file maintenance to the Credit Report Consumer Info field.
\nField Number         **143**
\nMnemonic             **CREDITREPORTCONSUMERINFODATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01143**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  Whenever you perform file maintenance on the Credit Report Consumer Info field, the system does not update this field. You must set the date manually.
`)
shareRecordFields.set("creditreportoriginalamountrptd", ` 
\n### CR Original Amount Reported
\nThis field stores the amount the share is overdrawn at the time of initial reporting to the bureaus for the current delinquency.
\nField Number         **183**
\nMnemonic             **CREDITREPORTORIGINALAMOUNTRPTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01183**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe amount overdrawn is the absolute value of the negative share balance from when the current delinquency was first reported. The Trial Balance batch program calculates and resets this value.
\n
\nThis information is reported as the Highest Credit or the Original Loan Amount in Field 12 of the Base Segment of the Metro 2® Format (Symitar v.2).
`)
shareRecordFields.set("irs1042sufid", ` 
\n### 1042-S Unique Form ID
\nThis field stores a unique form identifier that specifies which form the withholding agent is correcting or amending when filing multiple returned forms for the same recipient.
\nField Number         **193**
\nMnemonic             **IRS1042SUFID**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **01193**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nIf the field value is 0, the Daily Posting batch program calculates a unique 10-digit number. The system calculates a unique 10-digit number when a share is created, and it adds leading zeros to extend any shorter number to 10 digits. The batch program the system bases the calculation on the value in an internal parameter. This unique identifier is used whenever a Form 1042-S is created.
\n
\nThe system can reuse this identifying number on a new original form in a subsequent year.
\n
\nYou cannot perform file maintenance on this field.
`)
shareRecordFields.set("amortizationschd", ` 
\n### Amortization Schedule
\nPrimarily for users of the corporate interface: This field stores the numeric value of the set of Amortization Schedules parameters (Amortization Global Schedules or Amortization Local Schedules defined in the Parameter Manager).
\nField Number         **098**
\nMnemonic             **AMORTIZATIONSCHD**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01098**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Amortization Schedules not used##### 1–9999
\n   The numeric value of the set of Amortization Schedules parameters used
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("amortizationschdtype", ` 
\n### Amortize Schd Type
\nPrimarily for users of the corporate interface: This field stores a code that indicates the nature of the set of Amortization Schedules parameters.
\nField Number         **099**
\nMnemonic             **AMORTIZATIONSCHDTYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01099**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Local
\n   The values in the Amortization Schedule field are Amortization Local Schedules.##### (1) Global
\n   The values in the Amortization Schedule field are Amortization Global Schedules.
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("callitemschd", ` 
\n### Call Item Schedule
\nPrimarily for users of the corporate interface: This field stores the numeric value of the set of Call Item Schedules parameters (Call/Put Item Global Schedules or Call/Put Item Local Schedules defined in the Parameter Manager).
\nField Number         **108**
\nMnemonic             **CALLITEMSCHD**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01108**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Call Item Schedules not used##### 1–9999
\n   The numeric value of the set of Call Item Schedules parameters used
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("callitemschdtype", ` 
\n### Call Item Schd Type
\nPrimarily for users of the corporate interface: This field stores a code that indicates the nature of the set of Call Item Schedules parameters.
\nField Number         **109**
\nMnemonic             **CALLITEMSCHDTYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01109**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Local
\n   The values in the Call Item Schedule field are Call/Put Item Local Schedules.##### (1) Global
\n   The values in the Call Item Schedule field are Call/Put Item Global Schedules.***Important:***  See Call/Put Item Global Schedules or Call/Put Item Local Schedules for further details.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("putitemschd", ` 
\n### Put Item Schedule
\nPrimarily for users of the corporate interface: This field stores the numeric value of the set of Put Item Schedules parameters used to put items (Call/Put Item Global Schedules or Call/Put Item Local Schedules defined in the Parameter Manager).
\nField Number         **123**
\nMnemonic             **PUTITEMSCHD**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01123**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Put Item Schedules not used##### 1–9999
\n   The numeric value of the set of Put Item Schedules parameters used***Important:***  See Call/Put Item Global Schedules or Call/Put Item Local Schedules for further details.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("putitemschdtype", ` 
\n### Put Item Schd Type
\nPrimarily for users of the corporate interface: This field stores a code that indicates the nature of the set of Put Item Schedules parameters.
\nField Number         **124**
\nMnemonic             **PUTITEMSCHDTYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01124**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Local
\n   The values in the Put Item Schedule field are Call/Put Item Local Schedules.##### (1) Global
\n   The values in the Put Item Schedule field are Call/Put Item Global Schedules.***Important:***  See Call/Put Item Global Schedules or Call/Put Item Local Schedules for further details.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("unpaidfeeytd", ` 
\n### Unpaid Item Fee YTD
\nThis field stores the total amount of unpaid item fees assessed during the current year.
\nField Number         **138**
\nMnemonic             **UNPAIDFEEYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01138**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nShare Transaction records with a value in the Source Code field of F (Fee) and a value in the Sub Source Code field of (1) Unpaid Item Fee Due to Draft or (2) Unpaid Item Fee Due to Other that are posted to the share take the current contents of this field and subtract the value in the Balance Change field (normally negative for fees).
\n***Important:***  If you void a share transaction with a value in the Source Code field of F (Fee) and a value in the Sub Source Code field of (1) Unpaid Item Fee Due to Draft or (2) Unpaid Item Fee Due to Other, the system backs out the amount from this field.
\n
\nThe system uses this field to populate Record 462, Share ODP Fees, in the data-only statement.
`)
shareRecordFields.set("unpaidfeelastyear", ` 
\n### Unpaid Item Fee Lst Yr
\nThis field stores the total amount of unpaid item fees assessed during the previous year.
\nField Number         **139**
\nMnemonic             **UNPAIDFEELASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01139**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Close Day Processing batch program automatically moves the contents of the Unpaid Item Fee YTD field to this field when the system date changes to a new calendar year.
`)
shareRecordFields.set("overdraftfeeytd", ` 
\n### OD Item Fee YTD
\nThis field stores the total amount of overdraft item fees assessed during the current year.
\nField Number         **140**
\nMnemonic             **OVERDRAFTFEEYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01140**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nShare Transaction records with a value in the Source Code field of F (Fee) and a value in the Sub Source Code field of (3) Overdraft Item Fee Due to Draft, (4) Overdraft Item Fee Due to Other, (5) Overdraft Item Fee Force Paid (Draft), or (6) Overdraft Item Fee Force Paid (Other) that are posted to the share take the current contents of this field and subtract the value in the Balance Change field (normally negative for fees).
\n
\nTransactions that charge either courtesy pay fees or alternate courtesy pay fees are included in this computation.
\n
\nThe system uses this field to populate Record 462, Share ODP Fees, in the data-only statement.
\n***Important:***  If you void a share transaction with a value in the Source Code field of F (Fee) and a value in the Sub Source Code field of (3) Overdraft Item Fee Due to Draft, (4) Overdraft Item Fee Due to Other, (5) Overdraft Item Fee Force Paid (Draft), or (6) Overdraft Item Fee Force Paid (Other), the system backs out the amount from this field.
`)
shareRecordFields.set("overdraftfeelastyr", ` 
\n### OD Item Fee Last Year
\nThis field stores the total amount of overdraft item fees assessed during the previous year.
\nField Number         **141**
\nMnemonic             **OVERDRAFTFEELASTYR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01141**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Close Day Processing batch program automatically moves the contents of the OD Item Fee YTD field to this field when the system date changes to a new calendar year.
`)
shareRecordFields.set("extachxfrdailylimitin", ` 
\n### Ext ACH Trnsfr In Daily Limit
\nThis field stores the maximum daily dollar limit for home banking account-to-account transfers into this share.
\nField Number         **144**
\nMnemonic             **EXTACHXFRDAILYLIMITIN**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01144**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("extachxfrdailylimitout", ` 
\n### Ext ACH Trnsfr Out Daily Limit
\nThis field stores the maximum daily dollar limit for home banking account-to-account transfers out of this share.
\nField Number         **145**
\nMnemonic             **EXTACHXFRDAILYLIMITOUT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01145**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
`)
shareRecordFields.set("memberusertransfercode", ` 
\n### Member User Transfer Code
\nFor users of the corporate interface only: This field stores a code that indicates which type of Corporate Transfer Parameters applies to this share when a member user is making a transfer using the corporate interface. This type number is the rule set for this share.
\nField Number         **110**
\nMnemonic             **MEMBERUSERTRANSFERCODE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01110**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Indicates that you can make no transfers to or from this share using the corporate interface##### 1–9999
\n   Indicates which type of Corporate Transfer Parameters selection (rule sets) apply to this share
\n   
\n       * The corresponding rule set dictates whether the system displays the share in the various drop-down menus in the corporate functions and how transfers to or from this share function.
\n***Important:***  Although the system displays this field to natural person (non-corporate) credit unions, this field has no effect on any system functions used by natural person credit unions.
`)
shareRecordFields.set("corporateusertransfercode", ` 
\n### Corporate User Transfer Code
\nFor users of the corporate interface only: This field stores a code that indicates which type of Corporate Transfer Parameters applies to this share when a corporate user is making a transfer using the corporate interface on behalf of a member user. This type number is the rule set for this share.
\nField Number         **111**
\nMnemonic             **CORPORATEUSERTRANSFERCODE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01111**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Indicates that you can make no transfers to or from this share using the corporate interface##### 1–9999
\n   Indicates which type of Corporate Transfer Parameters selection (rule sets) apply to this share
\n   
\n       * The corresponding rule set dictates whether the system displays the share in the various drop-down menus in the corporate functions and how transfers to or from this share function.
\n***Important:***  Although the system displays this field to natural person (non-corporate) credit unions, this field has no effect on any system functions used by natural person credit unions.
`)
shareRecordFields.set("memberbranchsupport", ` 
\n### Member Branch Support
\nFor users of the corporate interface only: If we have configured your institution as a corporate credit union, this field stores a code that indicates if you want member branch support for this share.
\nField Number         **112**
\nMnemonic             **MEMBERBRANCHSUPPORT**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01112**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Off
\n   Corporate member branch service is not allowed##### (1) On
\n   Corporate member branch service is allowed***Important:***  There is a system-level Member Branch parameter that determines whether member branches are supported or not. If the parameter is set to No, there is no member branch support and this field is ignored. If the parameter is set to Yes, there is member branch support. This parameter is accessible only by Jack Henry. To have it modified, contact Corporate Credit Union Support.
\n
\nNatural person credit unions not configured as a corporate credit union cannot change the value of this field which set to (0) Off for all shares and share defaults.
`)
shareRecordFields.set("escrowedloanid", ` 
\n### Escrowed Loan ID
\nThis field stores the ID of the Loan record to which the escrow portion of the share relates.
\nField Number         **172**
\nMnemonic             **ESCROWEDLOANID**
\nData Type            **2 or 4 Characters**
\nSource               **System-entered**
\nHelp File            **01172**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system automatically populates this field when the Escrow ID field is updated in the Loan record. If you change this value, the following warning appears:
`)
shareRecordFields.set("escrowytd", ` 
\n### Escrow YTD
\nThis field stores the total amount of escrow paid to this share during the current year.
\nField Number         **187**
\nMnemonic             **ESCROWYTD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01187**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe system updates this field with the amount of escrow applied that affects this loan for the following teller transactions:
\n
\nThe system updates this field when the Escrowed Loan ID Share record field is not blank, indicating that the share is linked to a loan, or when the share type is listed in the Escrow Share Type List parameter in Miscellaneous Parameters.
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system does the following:
\n   * Moves the value in this field to the Escrow Last Year field
\n   * Resets this field to 0.00
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("escrowlastyear", ` 
\n### Escrow Last Year
\nThis field stores the total amount of escrow paid to this share during the previous year.
\nField Number         **188**
\nMnemonic             **ESCROWLASTYEAR**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01188**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system transfers the amount from the Escrow YTD field to this field.
\n
\nIf you perform manual share file maintenance, a warning displays when the transaction amount entered creates a negative balance in this field:
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("positivepaydraft", ` 
\n### Positive Pay Draft
\nThis field allows the user to add the share to the Positive Pay Draft module.
\nField Number         **194**
\nMnemonic             **POSITIVEPAYDRAFT**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01194**
\nDefault Control      **No**
\nDefault Value **0**
`)
shareRecordFields.set("statementgroup", ` 
\n### Statement Group
\nThis field stores a credit union-defined statement group number that can be used to specify groups to be processed in batch programs.
\nField Number         **044**
\nMnemonic             **STATEMENTGROUP**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01044**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nIn the Statement Cutoff Processing batch program, you can specify a list of statement groups to set a statement cutoff date for all shares and loans in the specified statement groups. In the Statement Generation batch program, you can specify a list of statement groups to generate statements for all shares and loans in the specified statement groups.
`)
shareRecordFields.set("statementmailcode", ` 
\n### Statement Mail Code
\nThis field stores a code that indicates if statements for this share should be mailed to the member or, if not, why not.
\nField Number         **046**
\nMnemonic             **STATEMENTMAILCODE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01046**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Statements for this share should be mailed to the member in the normal manner.##### 1–99
\n   Credit union-defined code that indicates a reason statements should not be mailed for this share (for example, member request or bad address).
\n       * Important: If custom text descriptions for each mail code in Statement Mail Code Names Parameters have been defined, those text descriptions display in the drop-down menu when revising this field. This helps you select the correct mail code as defined by your credit union. The system displays the description and the mail code in the field; however, only the mail code is included on the member's statement.
`)
shareRecordFields.set("statementdate", ` 
\n### Statement Date
\nThis field stores the most recent date statements were produced for this share.
\nField Number         **045**
\nMnemonic             **STATEMENTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01045**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever the Statement Cutoff Processing batch program affects this share, the system does the following:
\n   * Moves the value in this field to the Statement Previous Date field
\n   * Updates this field with the effective date of the Statement Cutoff Processing batch program run
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("statementprevdate", ` 
\n### Statement Previous Date
\nThis field stores the previous date statements were produced for this share.
\nField Number         **057**
\nMnemonic             **STATEMENTPREVDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01057**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever the Statement Cutoff Processing batch program affects this share, the system moves the value in the Statement Date field to this field.
\n
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("regecount", ` 
\n### Reg E Count
\nThis field stores the number of Regulation E transactions posted to this share since the last statement cutoff date.
\nField Number         **047**
\nMnemonic             **REGECOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01047**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   No Regulation E transactions were posted to this share since the last statement cutoff date##### 1–9999
\n   The number of Regulation E transactions posted to this share since the last statement cutoff date
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("regdcheckcount", ` 
\n### Reg D Check Count
\nThis field stores the number of Regulation D automatic transfers posted to this share during the current month.
\nField Number         **048**
\nMnemonic             **REGDCHECKCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01048**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nYou must add the share type to the Reg D Limiting Type List parameter in Miscellaneous Parameters, to populate this field. Additionally, if the share type is removed from the parameter, the counters stop incrementing.
\n#### Data Type Descriptions
\n##### 0
\n   No regulation D automatic transfers posted to this share during the current month##### 1–9999
\n   The number of Regulation D automatic transfers posted to this share during the current month
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("regdtransfercount", ` 
\n### Reg D Transfer Count
\nThis field stores the number of Regulation D telephone transfers for this share during the current month.
\nField Number         **049**
\nMnemonic             **REGDTRANSFERCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01049**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nYou must add the share type to the Reg D Limiting Type List parameter in Miscellaneous Parameters, to populate this field. Additionally, if the share type is removed from the parameter, the counters stop incrementing.
\n#### Data Type Descriptions
\n##### 0
\n   No regulation D telephone transfers for this share during the current month##### 1–9999
\n   The number of Regulation D telephone transfers for this share during the current month
\nUnder normal circumstances, you should not revise this field.
`)
shareRecordFields.set("regdctrstartday", ` 
\n### Reg D Counter Start Day
\nThis field stores a code that resets the Reg D Check Count and Reg D Transfer Count fields in the Share record to a day of the month, as determined by your credit union's policies and procedures.
\nField Number         **164**
\nMnemonic             **REGDCTRSTARTDAY**
\nData Type            **Code to 31**
\nSource               **User-entered**
\nHelp File            **01164**
\nDefault Control      **Yes**
\nDefault Value **1**
\n
\nYou must add the share type to the Reg D Limiting Type List parameter in Miscellaneous Parameters, to populate this field. Additionally, if the share type is removed from the parameter, the counters stop incrementing.
\n#### Data Type Descriptions
\n##### 1
\n   Maintains the existing functionality of resetting the Reg D counters on the first day of the month##### 2–31
\n   The new day of the month for resetting the Reg D counters
\n`)
shareRecordFields.set("service", ` 
\n### Service 1–Service 8
\nThe eight service number fields can each contain a code that identifies a different credit union-defined credit union services offered with a share (for example, an ATM card, a debit card, or access to the audio response system).
\nField Number         **010:001 - 010:008**
\nMnemonic             **SERVICE:1 - SERVICE:8**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01010**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   No credit union-defined service##### 1–99
\n   A credit union-defined service code offered with the share
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
\n
\nIf service codes are defined in the share defaults, those codes are added to any existing codes currently assigned to the share. The existing codes on a share that is being renewed stays, and the new codes are merged.
`)
shareRecordFields.set("warningcode", ` 
\n### Warning 01 Code–Warning 20 Code
\nThese 20 fields can each contain a code that identifies a different credit union-defined warning to apply to this share.
\nField Number         **009:001 - 009:020**
\nMnemonic             **WARNINGCODE:1 - WARNINGCODE:20**
\nData Type            **Code to 999**
\nSource               **User-entered**
\nHelp File            **01009**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No Warning Code
\n   No credit union-defined warning##### 1–999
\n   A credit union-defined warning code to apply to this share
\n   
\n       * Depending on your parameters, you can select a code from up to 999 different warning codes. For more information on how to define warning codes and warning messages, see Warning Parameters.
\n
\nYou can select up to 20 different warning codes in a Share record.
\n
\nYou can set warning codes to expire automatically by using these fields together with Warning 01 Expiration * Warning 20 Expiration fields.
\n
\nThe Daily Posting batch program updates this field when the Renew Share Type field value is different than the Share Type field value. The update occurs when the Share Code field is set to either (2) Certificate or (3) Club, the certificate is scheduled to renew, and the Maturity Post Code field is set to (0) Renew. The system reads the default record for the new share type and resets the fields in the Share record before renewing the certificate.
\n
\nIf warning codes are defined in the share defaults, those codes are added to any existing codes currently assigned to the share. The existing codes on a share that is being renewed stays, and the new codes are merged.
`)
shareRecordFields.set("warningexpiration", ` 
\n### Warning 01 Expiration–Warning 20 Expiration
\nThese 20 fields can each contain a date after which the corresponding warning should no longer apply to the share.
\nField Number         **066:001 - 066:020**
\nMnemonic             **WARNINGEXPIRATION:1 - WARNINGEXPIRATION:20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01066**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen the expiration date matches the system date, the warning no longer applies. For example, if you select 200 at the Warning 9 Code field and type 112821 in the Warning 9 Expiration field, Warning Code 200 will be in effect until the system date reaches November 28, 2021. On that date, the warning is no longer active and the security privileges no longer restrict access to the share.
\n
\nIf you select a value at a Warning 01 Code–Warning 20 Code field, but you do not enter a date at the related Warning 01 Expiration–Warning 20 Expiration field, the warning remains in effect indefinitely or until you manually remove the value in the Warning 01 Code–Warning 20 Code field.
`)
shareRecordFields.set("analysisgroupprimaryacct", ` 
\n### Analysis Group Primary Acct
\nUsed with the MBS Account Analysis module. This field stores the primary account number in this field, which links all the shares to the account number entered.
\nField Number         **148**
\nMnemonic             **ANALYSISGROUPPRIMARYACCT**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01148**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nEnter the primary account number in this field, which links all the shares to the account number entered. This allows your credit union to link business accounts together and track volumes and pricing as if they were one account. It is similar to Household records. This field should be left blank if the primary share is under the same account as the secondary share.
`)
shareRecordFields.set("analysisgroupprimaryid", ` 
\n### Analysis Group Primary ID
\nUsed with the MBS Account Analysis module. This field stores the primary ID in this field, which links all the shares to the ID entered.
\nField Number         **149**
\nMnemonic             **ANALYSISGROUPPRIMARYID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **01149**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nEnter the primary ID in this field, which links all the shares to the ID entered. This allows your credit union to link business accounts together and track volumes and pricing as if they were one account. It is similar to Household records.
`)
shareRecordFields.set("analysispmtacct", ` 
\n### Analysis Payment Acct
\nUsed with the MBS Account Analysis module. This field stores the number of the account to be charged the monthly Account Analysis fee.
\nField Number         **150**
\nMnemonic             **ANALYSISPMTACCT**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01150**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis field is used with the Analysis Payment ID and Analysis Payment ID Type fields, it allows your credit unions to charge analysis fees to a different account not under analysis.
`)
shareRecordFields.set("analysispmtslid", ` 
\n### Analysis Payment ID
\nUsed with the MBS Account Analysis module. This field stores the share ID to charge the monthly Account Analysis fee.
\nField Number         **151**
\nMnemonic             **ANALYSISPMTSLID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **01151**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThis Analysis Payment ID field should be left blank if the payment share is under the same account as the payee share.
\n***Important:***  When a Share Group Analysis record is involved, the primary account dictates which account will be charged for the fees. The secondary accounts cannot determine which account to charge the fees.
\n
\nIn the future, this field could also be used for loans and defined by the Analysis Payment ID Type field.
`)
shareRecordFields.set("analysispmtidtype", ` 
\n### Analysis Payment ID Type
\nUsed with the MBS Account Analysis module. This field stores a code that identifies whether a share or loan is to be charged the monthly Account Analysis fee.
\nField Number         **152**
\nMnemonic             **ANALYSISPMTIDTYPE**
\nData Type            **Code to 0**
\nSource               **User-entered**
\nHelp File            **01152**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Share
\n   The share is to be charged the monthly Account Analysis fee##### (1) Loan
\n   (Reserved for future use) The loan is to be charged the monthly Account Analysis fee
\n`)
shareRecordFields.set("sweeppriority", ` 
\n### Sweep Priority
\nUsed with MBS Share Sweeps. This field stores a code that identifies the order in which share sweep transfers should be reviewed for processing. For example, one share requires funds, and the share from which the system is taking funds does not have enough funds, so that share looks to a third share for the required funds.
\nField Number         **161**
\nMnemonic             **SWEEPPRIORITY**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **01161**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nThe system reviews shares for funds with a value in this field of 1 first, then 2, then 3, etc. Choose one of the following:
\n#### Data Type Descriptions
\n##### 0
\n   The system should review these shares last and in share ID order##### 1–9
\n   The system should review this share in the order you specify. If more than one share has this value in this field, the system reviews the shares in share ID order and then reviews shares progressively through to shares with a value in this field of 9.
\n`)
shareRecordFields.set("sweepbalancetype", ` 
\n### Sweep Balance Type
\nUsed with MBS Share Sweeps. This field stores a code that identifies whether the available or ledger balance for a share will be used to calculate the balance for the shares involved in the sweep relationship.
\nField Number         **158**
\nMnemonic             **SWEEPBALANCETYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01158**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Ledger
\n   The ledger balance for a share is used to calculate the balance for the shares involved in the sweep relationship.
\n   
\n       * This balance is the end-of-day balance for a share for the statement period, taking into account the effective date of transactions, but not subtracting any hold amounts which were effective each date.
\n##### (1) Available
\n   The available balance for a share is used to calculate the balance for the shares involved in the sweep relationship.
\n   
\n       * This balance is the end-of-day balance for a share for the statement period, taking into account the effective date of transactions, and subtracting the value in the Minimum Balance field and any hold amounts which were effective each date. This is the same as the collected balance.
\n***Important:***  This field is only valid for Transfer records with a value in the Transfer Type field of (5) Sweep In, (6) Sweep Out, or (7) Sweep In/Out.
`)
shareRecordFields.set("sweeptargetminimum", ` 
\n### Sweep Target Minimum
\nUsed with MBS Share Sweeps. This field stores the minimum balance for shares involved in a sweep transfer.
\nField Number         **159**
\nMnemonic             **SWEEPTARGETMINIMUM**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01159**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the minimum balance for shares involved in a sweep transfer. If the value in the Minimum Balance field in the Transfer record is $0.00, the system looks for a value in this field. If the share balance is below this value, a transfer will likely occur.
\n
\nIn processing a transfer, if the transfer amount would bring the share balance outside of the target balance range (defined by this field and the Sweep Target Maximum field), that transfer will not occur, or will be a partial transfer, bringing the share balance to the end of the target range, but not outside.
\n***Important:***  This field is only valid for Transfer records with a value in the Transfer Type field of (5) Sweep In, (6) Sweep Out, or (7) Sweep In/Out.
`)
shareRecordFields.set("sweeptargetmaximum", ` 
\n### Sweep Target Maximum
\nUsed with MBS Share Sweeps. This field stores the maximum balance for shares involved in a sweep transfer.
\nField Number         **160**
\nMnemonic             **SWEEPTARGETMAXIMUM**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01160**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the maximum balance for shares involved in a sweep transfer. If the value in the Maximum Balance field in the Transfer record is $0.00, the system looks for a value in this field. If the share balance is above this value, a transfer will likely occur.
\n
\nIn processing a transfer, if the transfer amount would bring the share balance outside of the target balance range (defined by the Sweep Target Minimum field and this field), that transfer will not occur, or will be a partial transfer, bringing the share balance to the end of the target range, but not outside.
\n***Important:***  This field is only valid for Transfer records with a value in the Transfer Type field of (5) Sweep In, (6) Sweep Out, or (7) Sweep In/Out.
`)
shareRecordFields.set("cappedfeesamountcap", ` 
\n### Capped Fees Amount Cap
\nThis field stores the dollar amount your credit union sets for its capped fees amount.
\nField Number         **167**
\nMnemonic             **CAPPEDFEESAMOUNTCAP**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01168**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the dollar amount your credit union sets for its capped fees amount. For a period that you determine, the share cannot be charged any additional fees once the dollar amount in this field is reached. Fees eligible for capping are listed in the Fee Types to Cap prompt in most of the posting batch programs. You can add the RB.CLEARFEECAPFIELDS PowerOn specfile to your nightly processing job file to clear the Capped Fees Amount This Period field at the end of the period you set.
\n***Important:***  This field depends on the Fee Types to Cap batch prompt. This batch prompt must be filled out for the cap fee amount to take effect.
`)
shareRecordFields.set("cappedfeescountcap", ` 
\n### Capped Fees Count Cap
\nThis field stores the number of fee occurrences at which your credit union stops charging capped fees for the share during a time period you specify.
\nField Number         **169**
\nMnemonic             **CAPPEDFEESCOUNTCAP**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01169**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Your credit union does not stop charging capped fees for the share during a time period you specify##### 1–9999
\n   The number of fee occurrences at which your credit union stops charging capped fees for the share during a time period you specify
\nFees eligible for capping are listed in the Fee Types to Cap batch prompt. A PowerOn specfile in the nightly processing jobs clears the Capped Fee Count This Period field at the end of the period you specify.
\n***Important:***  This field depends on the Fee Types to Cap batch prompt. This batch prompt must be filled out for the cap fee amount to take effect.
`)
shareRecordFields.set("cappedfeesamtperiod", ` 
\n### Capped Fees Amount This Period
\nThis field stores the sum of the capped fees charged by batch programs, teller transactions, and online transaction processing to the share during a time period you specify.
\nField Number         **166**
\nMnemonic             **CAPPEDFEESAMTPERIOD**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01166**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nFees eligible for capping are listed in the Fee Types to Cap batch prompt.
\n***Important:***  Fees designated in the Reg Z Fee Types parameter in Miscellaneous Parameters are not included in this field during a teller transaction. Fee types mentioned in the Fee Types to Cap List parameter in Miscellaneous Parameters are included.
\n
\nA PowerOn specfile in nightly processing clears this field at the end of the period you specify.
`)
shareRecordFields.set("cappedfeescntperiod", ` 
\n### Capped Fees Count This Period
\nThis field stores the number of occurrences of capped fees, incrementing by one, each time a capped fee is charged to the share.
\nField Number         **168**
\nMnemonic             **CAPPEDFEESCNTPERIOD**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01167**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Your credit union does not increment each time a capped fee is charged to the share##### 1–9999
\n   The number of occurrences of capped fees, incrementing by one, each time a capped fee is charged to the share
\nFees eligible for capping are listed in the Fee Types to Cap batch prompt.
\n***Important:***  Fees designated in the Reg Z Fee Types parameter in Miscellaneous Parameters are not included in this field during a teller transaction. Fee types mentioned in Fee Types to Cap List parameter are included.
\n
\nA PowerOn specfile in nightly processing clears this field at the end of the period you specify.
`)
shareRecordFields.set("authfeeoption", ` 
\n### ODT Auth/Fee Option 1–ODT Auth/Fee Option 4
\nThese fields each contain a code that determines whether to authorize ODT funds, assess a courtesy pay fee, or assess an NSF fee for all overdrawn transactions.
\nField Number         **173:001 - 173:004**
\nMnemonic             **AUTHFEEOPTION:1 - AUTHFEEOPTION:4**
\nData Type            **Code to 7**
\nSource               **User-entered**
\nHelp File            **01173**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nThese fields correspond to the ODT Source Code List 1–4 fields, which specify the type of transactions using source codes.
\n#### Data Type Descriptions
\n##### (0) Auth/Courtesy Pay Fee/NSF Fee
\n   Authorize ODT funds, assess a courtesy pay fee, and assess an NSF fee for all overdrawn transactions##### (1) Auth/Courtesy Pay Fee/No NSF Fee
\n   Authorize ODT funds and assess a courtesy pay fee but do not assess an NSF fee for all overdrawn transactions##### (2) Auth/No Courtesy Pay Fee/NSF Fee
\n   Authorize ODT funds and assess an NSF fee but do not assess a courtesy pay fee for all overdrawn transactions##### (3) Auth/No Courtesy Pay Fee/No NSF Fee
\n   Authorize ODT funds but do not assess a courtesy pay fee or an NSF fee for all overdrawn transactions##### (4) No Auth/Courtesy Pay Fee/NSF Fee
\n   Assess a courtesy pay fee and an NSF fee but do not authorize ODT funds for all overdrawn transactions##### (5) No Auth/Courtesy Pay Fee/No NSF Fee
\n   Assess a courtesy pay fee but do not authorize ODT funds or assess an NSF fee for all overdrawn transactions##### (6) No Auth/No Courtesy Pay Fee/NSF Fee
\n   Assess an NSF fee but do not authorize ODT funds or assess a courtesy pay fee for all overdrawn transactions##### (7) No Auth/No Courtesy Pay Fee/No NSF Fee
\n   Do not authorize ODT funds and do not assess a courtesy pay fee or an NSF fee for all overdrawn transactions
\nThese settings affect only the authorization of a transaction and the decision about whether to charge a fee. When a transaction is required to post regardless of the share’s balance, that action might take the share negative. If so, this field’s setting only determines whether to assess a courtesy pay or NSF fee.
\n
\nFor example, if the member has not opted in to authorize or approve transactions using ODT, but the transaction is forced to post and the share has available overdraw tolerance, and the Overdraw Option prompt for the program doing the posting has tolerance enabled, then the transaction posts using tolerance and charge the associated fee, if allowed.
\n
\nThese fields do not apply to overdrawn transactions performed using Teller Transactions codes. It is up to your financial institution to determine policies and procedures that tellers use to decide how to authorize and charge fees for overdrawn transactions at the teller line.
\n
\n## AUTHFEEOPTION:5
\n### ODT Auth/Fee Option Other
\nThis field is used to determine whether to authorize ODT funds, assess a courtesy pay fee, or assess an NSF fee for all overdrawn transactions that are identified as recurring (based on an indicator provided by the Network/Merchant) but not specified in the ODT Source Code List 1-4 fields.
\nField Number         **173:005**
\nMnemonic             **AUTHFEEOPTION:5**
\nData Type            **Code to 7**
\nSource               **User-entered**
\nHelp File            **01173**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Auth/Courtesy Pay Fee/NSF Fee
\n   Authorize ODT funds, assess a courtesy pay fee, and assess an NSF fee for all overdrawn transactions##### (1) Auth/Courtesy Pay Fee/No NSF Fee
\n   Authorize ODT funds and assess a courtesy pay fee but do not assess an NSF fee for all overdrawn transactions##### (2) Auth/No Courtesy Pay Fee/NSF Fee
\n   Authorize ODT funds and assess an NSF fee but do not assess a courtesy pay fee for all overdrawn transactions##### (3) Auth/No Courtesy Pay Fee/No NSF Fee
\n   Authorize ODT funds but do not assess a courtesy pay fee or an NSF fee for all overdrawn transactions##### (4) No Auth/Courtesy Pay Fee/NSF Fee
\n   Assess a courtesy pay fee and an NSF fee but do not authorize ODT funds for all overdrawn transactions##### (5) No Auth/Courtesy Pay Fee/No NSF Fee
\n   Assess a courtesy pay fee but do not authorize ODT funds or assess an NSF fee for all overdrawn transactions##### (6) No Auth/No Courtesy Pay Fee/NSF Fee
\n   Assess an NSF fee but do not authorize ODT funds or assess a courtesy pay fee for all overdrawn transactions##### (7) No Auth/No Courtesy Pay Fee/No NSF Fee
\n   Do not authorize ODT funds and do not assess a courtesy pay fee or an NSF fee for all overdrawn transactions
\nThis field has no associated source code list. Any transaction source code not specified in ODT Source Code List 1-4 will automatically be considered as using the setting in this field. For recurring card transactions, use the ODT Auth/Fee Recur Src Codes parameter in Online Main Parameters. This parameter must have the source codes listed for this field to assess fees in recurring transactions.
\n
\nThis field affects only the authorization of a transaction and the decision about whether to charge a fee. When a transaction is required to post regardless of the share’s balance, that action might take the share negative. If so, this field’s setting only determines whether to assess a courtesy pay or NSF fee
\n
\nFor example, if the member has not opted in to authorize transactions using ODT, but the transaction is forced to post, the share’s balance is negative, the share has available overdraw tolerance, and the overdraw option has tolerance enabled, then the transaction posts using overdraw tolerance. A courtesy pay fee will also be assessed if the ODT Auth/Fee Option 1–ODT Auth/Fee Option 4 field allows for courtesy pay fees,
`)
shareRecordFields.set("feeexemptcrtsybal", ` 
\n### Fee Exempt Courtesy Balance
\nThis field stores the sum of all courtesy amounts applied minus deposits with a value in the Share Transaction record's Source Code field designated to not charge a courtesy pay fee.
\nField Number         **175**
\nMnemonic             **FEEEXEMPTCRTSYBAL**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01175**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThe amount in this field is never less than zero, and should never exceed the actual negative amount of the share’s ledger balance. This field is informational only and is not used by the system in decision making or in any calculations.
\n
\nWhen the value in an ODT Auth/Fee Option 1–ODT Auth/Fee Option 4 field or in the ODT Auth/Fee Option Other field for a particular transaction source code is 2, 3, 6, or 7 in the Share record, then no courtesy pay fee is assessed. The system keeps track of the amount of Overdraw Tolerance consumed by transactions where no Courtesy Pay fee is applied in this field.
\n***Important:***  This field does not automatically adjust when an adjustment, reversal, or credit voucher transaction is presented for posting to the share. The system does not know if the original transaction contributed to the amount in this field, and therefore cannot automatically adjust for these transactions.
\n
\nThe amount of Overdraw Tolerance used is the amount by which the value in the Available Balance field is negative. For example, if available balance = 25.00 then there is a withdrawal of 100.00, the new available balance is 25.00 * 100.00 = -75.00 so the amount of Overdraw Tolerance used is 75.00.
\nIf the ODT Auth/Fee Option 1–ODT Auth/Fee Option 4 or ODT Auth/Fee Option Other fields in the Share record are set to the source code of the transaction in one of the following, they essentially translate to the member not participating in the ODT service, so you should not charge a fee:
\n   * (2) Auth/No Courtesy Pay/NSF Fee
\n   * (3) Auth/No Courtesy Pay/No NSF Fee
\n   * (6) No Auth/No Courtesy Pay/NSF Fee
\n   * (7) No Auth/No Courtesy Pay/No NSF Fee
\nThe posting program records the sum of the all the courtesy pay amounts applied in this field, according to the following calculations:
\n   * If the transaction is a withdrawal and the Auth/Fee Option corresponding to one of this field's settings, then the system increases this amount by the Courtesy Amount authorized or by the amount that the system forced the transaction to post.
\n   * If the transaction is a deposit, then this amount is decreased until it is back to zero.
`)
shareRecordFields.set("odtauthfeesrccodelist", ` 
\n### ODT Source Code List 1–ODT Source Code List 4
\nThis field is used to enter the transaction source codes, or credit union-defined source codes used for other types of Share withdrawal transactions, that corresponds to the setting in the ODT Auth/Fee Option 1–ODT Auth/Fee Option 4 fields.
\nField Number         **174:001 - 174:004**
\nMnemonic             **ODTAUTHFEESRCCODELIST:1 - ODTAUTHFEESRCCODELIST:4**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01174**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nType one or more of the following values:
\n<Blank> = Journal Voucher	L = Bulk
\n   * A = ATM	N = Shared Branch
\n   * B = Bill Payment	O = Point of Sale (POS)
\n   * C = Cash	P = Payroll
\n   * D = Draft	R = Interest Refund
\n   * E = ACH	S = Kiosk
\n   * F = Fee	T = Audio Response Telephone
\n   * G = Credit/Debit Card	V = Dividend
\n   * H = Home Banking	W = Withholding
\n   * I = Insurance	Z = JHA PayCenter Zelle® Processing
\n   * J = Transfer Loan Segment	1–9 = Credit union-defined source code
\n   * K = Check	 
\n
\nFrom the source code fields, you can display a help file listing these values by pressing the Shift+F1 keys.
\n
\nTo enter multiple values, string them together without commas or dashes, for example, type AGO. Type an underscore _ to indicate a blank value, identifying a journal entry. You may also use credit union-defined source codes 0–9. If you enter any other values or use a comma or dash, the system displays an error message:
\n
\nIf you type duplicates, such as AOG5A, the system uses the first listed source code and ignores any duplicates.
\n***Important:***  When you click one of the source code fields, this tooltip appears:
\nEnter Source Codes using uppercase letters and numbers. Use an underscore to represent the blank source code.
\n
\nOnly share withdrawal source codes are valid. Codes for a share deposit (such as V for dividends) are not recognized by authorization and posting programs.
`)
shareRecordFields.set("userchar1", ` 
\n### User Char 01
\nThese four custom fields can store any credit union-defined character data.
\nField Number         **115**
\nMnemonic             **USERCHAR1**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01115**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nEach of these fields only appears in the system once you define the field name in the Share User Field Names parameters in the Parameter Manager.
`)
shareRecordFields.set("userchar2", ` 
\n### User Char 02
\nThese four custom fields can store any credit union-defined character data.
\nField Number         **116**
\nMnemonic             **USERCHAR2**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01116**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nEach of these fields only appears in the system once you define the field name in the Share User Field Names parameters in the Parameter Manager.
`)
shareRecordFields.set("userchar3", ` 
\n### User Char 03
\nThese four custom fields can store any credit union-defined character data.
\nField Number         **117**
\nMnemonic             **USERCHAR3**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01117**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nEach of these fields only appears in the system once you define the field name in the Share User Field Names parameters in the Parameter Manager.
`)
shareRecordFields.set("userchar4", ` 
\n### User Char 04
\nThese four custom fields can store any credit union-defined character data.
\nField Number         **118**
\nMnemonic             **USERCHAR4**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01118**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nEach of these fields only appears in the system once you define the field name in the Share User Field Names parameters in the Parameter Manager.
`)
shareRecordFields.set("useramount1", ` 
\n### User Amount 01
\nThese two custom fields can store any credit union-defined cash amount.
\nField Number         **119**
\nMnemonic             **USERAMOUNT1**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01119**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEach of these fields only appears in the system once you define the field name in the Share User Field Names parameters in the Parameter Manager.
`)
shareRecordFields.set("useramount2", ` 
\n### User Amount 02
\nThese two custom fields can store any credit union-defined cash amount.
\nField Number         **120**
\nMnemonic             **USERAMOUNT2**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01120**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEach of these fields only appears in the system once you define the field name in the Share User Field Names parameters in the Parameter Manager.
`)
shareRecordFields.set("userdate1", ` 
\n### User Date 01
\nThese two custom fields can store any credit union-defined date.
\nField Number         **121**
\nMnemonic             **USERDATE1**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01121**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEach of these fields only appears in the system once you define the field name in the Share User Field Names parameters in the Parameter Manager.
`)
shareRecordFields.set("userdate2", ` 
\n### User Date 02
\nThese two custom fields can store any credit union-defined date.
\nField Number         **122**
\nMnemonic             **USERDATE1**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01122**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEach of these fields only appears in the system once you define the field name in the Share User Field Names parameters in the Parameter Manager.
`)
shareRecordFields.set("payeeline", ` 
\n### Payee Line 1–Payee Line 6
\nThese six calculated fields contain a member's address information from the Name records at the share level.
\nField Number         **801:001 - 801:006**
\nMnemonic             **PAYEELINE:1 - PAYEELINE:6**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **01281**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system derives a member's address using various information from the Name records at the share level, including the following fields:
\n   * Name fields (First Name, Last Name, Middle Name)
\n   * Address fields (Street, City, Extra Address, etc.)
\n   * Other pertinent fields (Mail Override, etc.)
\nTo allow the use of the same address, the system places this information in these calculated fields as follows:
\n   * Calculated Field	Data derived from the Name record at the share level
\n   * Payee Line 1	First Name, Middle Name, Last Name (primary or joint)
\n   * Payee Line 2	First Name, Middle Name, Last Name (joint)
\n   * Payee Line 3	Extra Address
\n   * Payee Line 4	Street
\n   * Payee Line 5	City, State, ZIP code
\n   * Payee Line 6	Country
\n
\nYou can use this address information to mail statements, notices, and other communications.
\n***Important:***  A calculated field derives its data from the calculation of other fields. The data is not entered by the user. These fields are often used by PowerOn programmers and SymConnect. Programmers need to decide on a case-by-case basis which calculated fields are appropriate for PowerOn specfiles and SymConnect.
`)
shareRecordFields.set("alternateaddress", ` 
\n### Alternate Address 1–Alternate Address 6
\nThese six calculated fields contain a member's alternate address information from the Name records at the share level.
\nField Number         **802:001 - 802:006**
\nMnemonic             **ALTERNATEADDRESS:1 - ALTERNATEADDRESS:6**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **01282**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system derives a member's alternate address using various information from the Name records at the share level, including the following fields:
\n   * Name fields (First Name, Last Name, Middle Name)
\n   * Address fields (Street, City, Extra Address, etc.)
\n   * Other pertinent fields (Mail Override, etc.)
\nTo allow the use of the same address, the system places this information in these calculated fields as follows:
\n   * Calculated Field	Data derived from the Name record at the share level
\n   * Alternate Address 1	First Name, Middle Name, Last Name (primary name or joint name)
\n   * Alternate Address 2	First Name, Middle Name, Last Name (joint name or Extra Address)
\n   * Alternate Address 3	Extra Address or Street
\n   * Alternate Address 4	Street or City, State, ZIP Code
\n   * Alternate Address 5	City, State, ZIP code or Country
\n   * Alternate Address 6	Country or blank
\n
\nYou can use this address to mail statements, notices, and other communications.
\n***Important:***  A calculated field derives its data from the calculation of other fields. The data is not entered by the user. These fields are often used by PowerOn programmers and SymConnect. Programmers need to decide on a case-by-case basis which calculated fields are appropriate for PowerOn specfiles and SymConnect.
\n***Important:***  The joint name will not appear in the alternate address information if the value in the Name record's Name Type field is set to (2) Mailing Only or (3) Alternate mailing or if the value in the Name record's Mail Override field is set to (1) Overrides primary mailing address..
`)
shareRecordFields.set("payeephone", ` 
\n### Payee Phone 1–Payee Phone 3
\nThese three calculated fields contain a member's phone number information from the Name records at the share level.
\nField Number         **803:001 - 803:003**
\nMnemonic             **PAYEEPHONE:1 - PAYEEPHONE:3**
\nData Type            **16 Characters**
\nSource               **System-calculated**
\nHelp File            **01283**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nTo allow the use of the same phone numbers, the system places this information in these calculated fields as follows:
\n   * Calculated Field	Data derived from the Name record at the share level
\n   * Payee Phone 1	Home Phone
\n   * Payee Phone 2	WorkPhone
\n   * Payee Phone 3	MobilePhone
\n
\nThe numbers in these fields is associated with the Payee Line 1 * 6 calculated fields in the Share record. You can cause this phone number to appear on a member's checks or statements.
\n***Important:***  A calculated field derives its data from the calculation of other fields. The data is not entered by the user. These fields are often used by PowerOn programmers and SymConnect. Programmers need to decide on a case-by-case basis which calculated fields are appropriate for PowerOn specfiles and SymConnect.
`)
shareRecordFields.set("alternatephone", ` 
\n### Alternate Phone 1–Alternate Phone 3
\nThese three calculated fields contain a member's alternate phone number information from the Name records at the share level.
\nField Number         **804:001 - 804:003**
\nMnemonic             **ALTERNATEPHONE:1 - ALTERNATEPHONE:3**
\nData Type            **16 Characters**
\nSource               **System-calculated**
\nHelp File            **01284**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nTo allow the use of the same phone numbers, the system places this information in these calculated fields as follows:
\n   * Calculated Field	Data derived from the Name record at the share level
\n   * Alternate Phone 1	Home Phone
\n   * Alternate Phone 2	WorkPhone
\n   * Alternate Phone 3	MobilePhone
\n
\nThe numbers in these fields is associated with the Alternate Address 1 * Alternate Address 6 calculated fields in the Share record. You can cause this phone number to appear on a member's checks or statements.
\n***Important:***  A calculated field derives its data from the calculation of other fields. The data is not entered by the user. These fields are often used by PowerOn programmers and SymConnect. Programmers need to decide on a case-by-case basis which calculated fields are appropriate for PowerOn specfiles and SymConnect.
`)
shareRecordFields.set("alternatenametype", ` 
\n### Alternate Name Record Type
\nThis calculated field contains the value from the Name Type field of the first Share Name record that it finds that is set to 03 Alternate mailing or that has a value in the Mail Override field set to 1 Overrides primary mailing address.
\nField Number         **805**
\nMnemonic             **ALTERNATENAMETYPE**
\nData Type            **Code to 53**
\nSource               **System-calculated**
\nHelp File            **00094**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system searches for the Mail Override field setting only if it cannot find the appropriate value in the Name Type field. If it finds neither, it returns the value in the Name Type field of the primary Name record (this value will always be 00 Primary).
\n
\nSee the Name Type field description in Name Record Fields for a list of possible name types.
`)
shareRecordFields.set("alternatenamelocator", ` 
\n### Alternate Name Record Locator
\nThis calculated field contains the value from the Locator field of the first Share Name record that it finds that has a value in the Name Type field set to 03 Alternate mailing or that has a value in the Mail Override field set to 1 Overrides primary mailing address.
\nField Number         **806**
\nMnemonic             **ALTERNATENAMELOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **00095**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system searches for the Mail Override setting only if it cannot find the appropriate value in the Name Type field. If not found in Share, it checks the Account record level using the same criteria. If not found in the Share or Account record, it looks under primary Name record. If it still finds nothing, it returns the value in the Locator field of the primary Name record.
`)
shareRecordFields.set("payeenametype", ` 
\n### Payee Name Record Type
\nThis calculated field contains the value from the Name Type field of the first Share Name record that it finds that has a Mail Override field set to 1 Overrides primary mailing address.
\nField Number         **807**
\nMnemonic             **PAYEENAMETYPE**
\nData Type            **Code to 53**
\nSource               **System-calculated**
\nHelp File            **00096**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system searches for the appropriate Mail Override field setting. If it does not find one, it returns the value in the Name Type field of the primary Name record (this value will always be 00 Primary).
\n
\nSee the Name Type field description in Name Record Fields for a list of possible name types.
`)
shareRecordFields.set("payeenamelocator", ` 
\n### Payee Name Record Locator
\nThis calculated field contains the value from the Locator field of the first Share Name record that it finds that has a value in the Name Type field set to 03 Alternate mailing or that has a value in the Mail Override field set to 1 Overrides primary mailing address.
\nField Number         **808**
\nMnemonic             **PAYEENAMELOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **00097**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system searches for the Mail Override setting only if it cannot find the appropriate value in the Name Type field. If not found in the Share, it checks the Account record level using the same criteria. If not found in the Share or Account record, it looks under primary Name record. If it still finds nothing, it returns the value in the Locator field of the primary Name record.
`)
