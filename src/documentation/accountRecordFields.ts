export const acctRecordFields = new Map<string, string>()
acctRecordFields.set("number", ` 
\n### Account Number
\n
\n This field stores the unique 10-digit account number assigned to the account when it was created.
\nField Number         **001**
\nMnemonic             **NUMBER**
\nData Type            **10 Characters**
\nSource               **System-entered**
\nHelp File            **00001**
\nDefault Control      **No**
\nDefault Value				 **<Blank>**
\n
\nThis field includes the value at the Account Prefix prompt, if any, entered at the time the account was created.
\n
\nYou cannot access this field to revise the account number. To change account numbers, you must use the Change Account Numbers batch program. Once you assign an account number with the Account Creation Wizard, that number remains permanently associated with the account, and you cannot assign the same number to any other account.
`)
acctRecordFields.set("branch", ` 
\n### Branch
\n
\n This field stores the credit union-defined branch number where the account was opened or is currently housed.
\nField Number         **007**
\nMnemonic             **BRANCH**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00007**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Main branch##### 1–9999
\n   Credit union defined branch number
\nA branch can be defined in Institution Branch Address parameters.
\n
\nIf your credit union uses branch accounting, use this field to specify the branch where share transactions should be posted. To translate share transactions to the General Ledger by branch, you must set the GL Translation Branch Level parameter in the Miscellaneous Parameters to (0) Pull GL Branch from Acct Record.
\n
\n***Important:***  For NetTeller users, the query 60 processes a branch number value of three characters for check orders. When the branch number is longer than three characters, the JHADRIVER sends a blank value to NetTeller.
`)
acctRecordFields.set("type", ` 
\n### Account Type
\n
\n This field stores the credit union-defined code to define the type of account.
\nField Number         **002**
\nMnemonic             **TYPE**
\nData Type            **Code to 99 or Code to 9999**
\nSource               **User-entered**
\nHelp File            **00002**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nEnter a credit union-defined code (0–9999) to define the type of account. An account type can be defined in Account Type Names parameters.
\n
\nTip: If you are currently using a two-digit code and you want to use a four-digit code, contact Symitar Support.
`)
acctRecordFields.set("membergroup", ` 
\n### Member Group
\n
\n This field stores the credit union-defined code to identify the group to which the member belongs.
\nField Number         **020**
\nMnemonic             **MEMBERGROUP**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00020**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\nEnter a credit union-defined code (0–9999) to identify the group to which the member belongs. A member group can be defined in Member Group Descriptions parameters.
`)
acctRecordFields.set("restrict", ` 
\n### Restricted Access
\n
\n This field stores a code that indicates the type of restriction if access is restricted on this account.
\nField Number         **008**
\nMnemonic             **RESTRICT**
\nData Type            **Code to 6**
\nSource               **User-entered**
\nHelp File            **00008**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\n#### Data Type Descriptions
\n##### (0) Normal
\n   The account is not restricted. Normal accounts can be accessed for inquiries (including inquiries on the imaging system), file maintenance, or transactions.##### (1) Restricted
\n   The account is restricted. The user's Acct Restricted privileges determine whether the user can access restricted accounts.##### (2) Sensitive
\n   The account is sensitive. The system automatically records any attempted access to a sensitive account on the File Maintenance Journal. The user's Acct Sensitive privileges determine whether the user can access sensitive accounts for inquiries, file maintenance, and transactions.##### (3) Employee
\n   The account belongs to a credit union employee.
\n       * If an employee account does not appear in a user's Restricted Accounts list, the user's Employee Acct Other privileges determine whether the user can access the account for inquiries, file maintenance, and transactions.
\n       * If an employee account appears in a user's Restricted Accounts list, the user's Employee Acct Restricted privileges determine whether the user can access the account for inquiries, file maintenance, and transactions.
\n##### (4) Employee Family
\n   The account belongs to the family of a credit union employee.
\n       * If an employee family account does not appear in a user's Restricted Accounts list, the user's Employee Acct Family privileges determine whether the user can access the account for inquiries, file maintenance, and transactions.
\n       * If an employee family account appears in a user's Restricted Accounts list, the user's Employee Acct Restricted privileges determine whether the user can access the account for inquiries, file maintenance, and transactions.
\n##### (5) Employee Sensitive
\n   The account is a sensitive account belonging to a credit union employee. The system automatically records any attempted access to an employee sensitive account on the File Maintenance Journal.
\n       * If an employee sensitive account does not appear in a user's Restricted Accounts list, the user's Employee Acct Sensitive privileges determine whether the user can access the account for inquiries, file maintenance, and transactions.
\n       * If an employee sensitive account appears in a user's Restricted Accounts list, the user's Employee Acct Restricted privileges determine whether the user can access the account for inquiries, file maintenance, and transactions.
\n##### (6) Employee Sensitive Family
\n   The account is a sensitive account belonging to the family of a credit union employee. The system automatically records any attempted access to an employee sensitive family account on the File Maintenance Journal.
\n       * If an employee sensitive family account does not appear in a user's Restricted Accounts list, the user's Employee Acct Sens Family privileges determine whether the user can access the account for inquiries, file maintenance, and transactions.
\n       * If an employee sensitive family account appears in a user's Restricted Accounts list, the user's Employee Acct Restricted privileges determine whether the user can access the account for inquiries, file maintenance, and transactions.
\nIf an account has a Restricted Access code of 1-6, you can suppress the display of account balances and payroll amounts during transactions and file maintenance by setting the appropriate Inq privilege for the user to No. For example, if you do not want your tellers to see the balances of other employees' accounts, but want to allow them to view their own account balances, set up the accounts and user privileges as follows:
\n   * Set the Restricted Access field in all employee accounts to (3) Employee.
\n   * Enter each teller's own account number in the Restricted Accounts list in user privileges.
\n   * Set each user's Employee Acct Other Inq privilege to No.
\n   * Set each user's Employee Acct Restricted Inq privilege to Yes.
\n
\nFor more information about this field, see Restricted Account Access.
`)
acctRecordFields.set("opendate", ` 
\n### Open Date
\n
\n This field stores the date the account was opened.
\nField Number         **005**
\nMnemonic             **OPENDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00005**
\nDefault Control      **No**
\nDefault Value				 **Date Null**
\n
\nThe system updates this field with the system date when the Account record is created.
\n
\nUnder normal circumstances, you should not revise this field.
`)
acctRecordFields.set("lastfmdate", ` 
\n### Last FM Date
\n
\n This field stores the date of the last file maintenance or teller transaction affecting this Account record.
\nField Number         **003**
\nMnemonic             **LASTFMDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00003**
\nDefault Control      **No**
\nDefault Value				 **Date Null**
\n
\nThe system updates this field with the system date whenever you perform manual file maintenance on this Account record using Account File Maintenance or the File Maintenance (FM) teller transaction.
\n
\nYou cannot perform file maintenance on this field.
\n
\n***Important:***  This field in the Account record is not updated when the file maintenance is performed by a batch process.
`)
acctRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\n
\n This field stores the system date when you create, change, or save the Account record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **057**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00057**
\nDefault Control      **No**
\nDefault Value				 **Date Null**
\n
\n***Important:***  The system does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
acctRecordFields.set("activitydate", ` 
\n### Activity Date
\n
\n This calculated field contains the most recent activity date of all shares and loans in the account.
\nField Number         **810**
\nMnemonic             **ACTIVITYDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **00090**
\nDefault Control      **No**
\nDefault Value				 **Date Null**
\n
\nIf there are no shares or loans in the account, the system sets this field to the Open Date field value in the Account record.
\n
\nIf the account has External Loan records and the Activity Date Update parameter in the External Loan Processing Parameters is set to Yes, the system updates this field in the Account record with the most recent activity date of any external loan. If the parameter is set to No, the system ignores the external loan activity date.
\n
\nWhen you update the Activity Date field in a Share or Loan record, this field in the Account record is automatically updated. If the Activity Date Update parameter in the External Loan Processing Parameters is set to Yes, this field in the Account record is automatically updated when you update the Activity Date field in an External Loan record.
\n
\nWhen an Account record is first created, the system sets this field to the value in the Open Date field.
\n
\nWhenever a teller, ATM network, MemberConnect system, SymConnect client system, or batch program posts a monetary transaction to a Share or Loan record for this account, the system updates this field with the effective date of the previous monetary transaction. However, if you include any of the following types of teller transactions in a transaction string or in batch transactions, the system does not update this field:
\n   - Fee (FE)
\n   - Share Dividend (SV)
\n   - Withholding
\n   - Interest Refund (IR)
\n   - Checks Cashing (KC)
\nThe following batch programs do not update this field:
\n   - Dividend Posting
\n   - Fee Posting
\n   - Insurance Posting
\n***Important:*** 
\nThe system updates this field for dividend disbursements if the Dividend Post Code field in the Share record is set to (1) Check or (2) Transfer and the value in the Div Disb Updts Activity Date field in the Share record is set to (1) Update Activity Date.
\nThe system updates this field for insurance posting transactions if the Insurance Updts Activity Date parameter in the Miscellaneous Parameters is set to Yes.
\n
\nYou cannot perform file maintenance on this field.
`)
acctRecordFields.set("prgdrecactivitydt", ` 
\n### Purged Rec Activity Dt
\n
\n This field stores the most recent activity date from shares or loans that are purged.
\nField Number         **056**
\nMnemonic             **PRGDRECACTIVITYDT**
\nData Type            **Date**
\nSource               **System-entered or User-entered**
\nHelp File            **00056**
\nDefault Control      **No**
\nDefault Value				 **Date Null**
\n
\nThe system updates this field automatically only if the purged Share or Loan record's Activity Date field value is greater than or equal to this field. In that case, the purged Share or Loan record's Activity Date field value is stored in this field. This value is used for complying with state escheatment regulations.
\n
\nYou can also manually update this field, but use caution. Manual file maintenance overwrites the existing date, potentially causing this field to reflect inaccurate data. The system will prevent you from setting this field to a date in the future.
`)
acctRecordFields.set("corresponddate", ` 
\n### Correspondence Date
\n
\n This field stores the most recent escheatment correspondence from the member regarding this account.
\nField Number         **014**
\nMnemonic             **CORRESPONDDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00014**
\nDefault Control      **No**
\nDefault Value				 **Date Null**
\n
\nThis field is used for escheatment of accounts. Most states require that funds from accounts inactive for a specified period of time be turned over to the state. The member must then contact the state for the funds, rather than the credit union.
\n
\nStates with this requirement also specify a period after which the credit union must attempt to notify the member that the account is inactive, giving the member a choice of closing the account or keeping it open. If the member chooses to keep the account open, enter the date the member made that decision in this field. The account is reactivated as of that date and can remain open without transactions for the period specified by the state.
\n
\n***Important:***  If the Dormancy Use Correspond Date parameter in the Miscellaneous Parameters is set to Yes, the system uses this field along with the Activity Date field to determine dormancy.
`)
acctRecordFields.set("proxydate", ` 
\n### Proxy Date
\n
\n If your credit union allows members to assign their vote to a proxy, this field stores the expiration date or the effective date of the proxy.
\nField Number         **015**
\nMnemonic             **PROXYDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00015**
\nDefault Control      **Yes**
\nDefault Value				 **Date Null**
`)
acctRecordFields.set("closedate", ` 
\n### Close Date
\n
\n This field stores the date the account was closed.
\nField Number         **006**
\nMnemonic             **CLOSEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00006**
\nDefault Control      **Yes**
\nDefault Value				 **Date Null**
\n
\nIf there is a date in this field, the system considers the Account record closed on that date and allows no further transactions affecting this Account record.
\n
\nAccount closing criteria:
\n   - If you enter a value in the Close Date field that is before the value in the Activity Date field, the system displays the following message:
\n   - Cannot be before activity date.
\n   - You cannot close an account with open Share records, open Loan records, or unexpired Account Tracking records that have the Tracking Type field set to (1) FICS Status Inquiry; additionally, you cannot close an account with Account Tracking records that have the Parent Closing Option parameter in the Account File Tracking Type Parameters set to Yes.
\n   - You cannot close an account, either in the Daily Posting batch program or manually in Account Manager, that has open External Loan records (in which the Close Date field is blank).
\nIf you attempt to enter a value in this field for an account that does not meet these criteria, the system displays the following message:
\n   - This account cannot be closed.
`)
acctRecordFields.set("fmlastpurgedate", ` 
\n### FM History Purge Date
\n
\n This field stores the date through which you last purged file maintenance history for the account type with the Purge Transaction Processing batch program.
\nField Number         **022**
\nMnemonic             **FMLASTPURGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00022**
\nDefault Control      **No**
\nDefault Value				 **Date Null**
\n
\nWhenever you purge file maintenance history for the account type, the system updates this field with a date calculated by subtracting one day from the date you enter at the Save FM History From prompt in the Purge Transaction Processing batch program.
\n
\nYou cannot perform file maintenance on this field.
`)
acctRecordFields.set("reference", ` 
\n### Reference
\n
\n You can use this field to store any account reference information, such as a mother's maiden name.
\nField Number         **009**
\nMnemonic             **REFERENCE**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **00009**
\nDefault Control      **Yes**
\nDefault Value				 **(Blank)**
\n
\nYou can print this field on statements using the Statement Generation batch program. Enter any information you want to use as an account reference.
`)
acctRecordFields.set("memberstatus", ` 
\n### Membership Status
\n
\n This field stores the membership status of an individual or organization.
\nField Number         **013**
\nMnemonic             **MEMBERSTATUS**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **00013**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\n#### Data Type Descriptions
\n##### (0) Natural Person
\n   The individual is a member of the credit union.##### (1) Non-Member
\n   The individual is not a member of the credit union.
\n       - You cannot create shares or loans in the account. You cannot set the value of this field to (1) Non-Member if there are already any shares or loans on the account.
\n##### (2) Credit Union
\n   The organization is a credit union.
\n       - For corporate credit unions only: Set this field to this option only if you have set the Scope of Membership parameter in the Miscellaneous Parameters to Credit Unions Only or Natural Persons and Credit Unions. This setting can only be done during account creation. After you create an account, you cannot change this field to or from this option.
\n       - For any Name record associated with an account with this option, the value in the Last Name field appears as "Credit Union Name".
`)
acctRecordFields.set("commercialcode", ` 
\n### Commercial Code
\n
\n This field stores a code that indicates whether an account is a consumer account, small business account, or commercial account.
\nField Number         **021**
\nMnemonic             **COMMERCIALCODE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **00021**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\n#### Data Type Descriptions
\n##### (0) Consumer
\n   This account is for an individual member with any joint members.##### (1) Small Business
\n   This account is for a small business.##### (2) Commercial
\n   This account is for a larger commercial business.
\nThis field can be used by Member Business Services modules.
\n
\n***Important:***  This field is currently used only for informational purposes, but we recommend that this field be set to identify commercial accounts for future Member Business Services enhancements.
`)
acctRecordFields.set("krholdbaseamount", ` 
\n### Check Hold Base Amount
\n
\n This field stores the check hold base amount for this account.
\nField Number         **036**
\nMnemonic             **KRHOLDBASEAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00036**
\nDefault Control      **Yes**
\nDefault Value				 **0.00**
\n
\nIf the KR Hold Base Option parameter in the Regulation CC Parameters is set to a value other than (0) Do Not Use KR Hold Base, the Checks Received (KR)/Checks Cashed (KC) teller transactions use this field in determining if the teller should be prompted to place holds on deposited checks. Shared Branch/Online deposits that use Reg CC hold logic and are identified as a local or non-local hold use this field to determine how much of the deposit to make available immediately.
`)
acctRecordFields.set("krtotalamount", ` 
\n### Check Dep Total Amount
\n
\n This field stores a running total of any non-held portions of check deposits for the date stored in the Check Dep Total Date field.
\nField Number         **037**
\nMnemonic             **KRTOTALAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00037**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nIf the KR Hold Base Option parameter in the Regulation CC Parameters is set to any value other than (0) Do Not Use KR Hold Base:
\n   - The system updates this field after posting each Checks Received (KR)/Checks Cashed (KC) transaction if the deposit is not held or there were non-held portions available before the transaction.
\n   - The system updates this field for Shared Branch/Online transactions when Online parameter is set up to use Reg CC holds, the deposit is identified as a local or non-local hold, and there were non-held portions available before the transaction posted. The system does not update this field for Shared Branch/Online transactions that are identified as immediate funds.
\n
\nWhen you void a Checks Received (KR) transaction or a Checks Cashing (KC) transaction and the KR Hold Base Option parameter in the Regulation CC Parameters is set to any value other than (0) Do Not Use KR Hold Base, the system automatically updates this field.
\n
\n***Important:***  Whenever this field value changes as a direct result of posting a check, the system does not record the change in FM history. The system also does not record changes to this field in FM history when you void a deposit or payment. The system records changes to this field in the Transaction Log file, and you can recover the previous value using the Recovery Posting batch program.
`)
acctRecordFields.set("krtotaldate", ` 
\n### Check Dep Total Date
\n
\n This field stores the date of the last check deposit that affected the Account record Check Dep Total Amount field or the Non-Reg CC Check Dep Total Amt field.
\nField Number         **038**
\nMnemonic             **KRTOTALDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00038**
\nDefault Control      **No**
\nDefault Value				 **Date Null**
\n
\nWhen the system processes a transaction that affects either of these two Account record fields, the system checks whether the effective date for this transaction is different from the date in the Check Dep Total Date field.
\n   - If the dates are different, the system updates this field with the new date and resets both the Check Dep Total Amount and the Non-Reg CC Check Dep Total fields in the Account record to zero before adding the new deposit amount to the appropriate field.
\n   - If the date is the same, the system adds the new deposit amount to the appropriate field.
\n***Important:***  Whenever this field value changes as a direct result of posting a check, the system does not record the change in FM history. The system also does not record changes to this field in FM history when you void a deposit or payment. The system records changes to this field in the Transaction Log file, and you can recover the previous value using the Recovery Posting batch program.
`)
acctRecordFields.set("nonregcccheckholdbaseamt", ` 
\n### Non-Reg CC Check Hold Base Amt
\n
\n This field stores the amount that is immediately available per day to the account holder when making a non-Reg CC check deposit. (Such deposits are usually made remotely through a PC or smartphone).
\nField Number         **064**
\nMnemonic             **NONREGCCCHECKHOLDBASEAMT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00064**
\nDefault Control      **Yes**
\nDefault Value				 **0.00**
\n
\nYou can set a base amount per deposit for Reg CC deposits using the KR Hold Base Option parameter of Reg CC Parameters. You can only set a base amount for Non-Reg CC deposits per day.
\n
\nSimilarly, you can set the KR Hold Base Amt Option parameter in the Reg CC Parameters to control whether the system places a hold on the entire amount of a deposit or only the amount exceeding the base amount. You do not have that option for non-Reg CC deposits; the system always places a hold only on the amount that exceeds the base amount.
\n
\nType 0 in this field to make all non-Reg CC check deposits subject to holds.
`)
acctRecordFields.set("nonregccchecktotalamt", ` 
\n### Non-Reg CC Check Dep Total Amt
\n
\n This field stores a running total of all the non-Reg CC check deposits for the date stored in the Check Dep Total Date field.
\nField Number         **065**
\nMnemonic             **NONREGCCCHECKTOTALAMT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00065**
\nDefault Control      **Yes**
\nDefault Value				 **0.00**
`)
acctRecordFields.set("enablefloat", ` 
\n### Enable Floats
\n
\n This field stores a code that indicates whether to activate credit union floats per account.
\nField Number         **053**
\nMnemonic             **ENABLEFLOAT**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00053**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\nWhen the Member Business Services Account Analysis add-on module is enabled, the system assigns these floats to check transactions affecting accounts of that type. You can change the value in this field only when your credit union purchases the Member Business Services Account Analysis module with float hold functionality.
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   Disable CU float holds.##### (1) Yes
\n   Enable CU float holds as defined in Analysis CU Float Parameters.***Important:***  The default for this field can be assigned at the Account level by account type in Account Defaults in the Default Manager. This assignment provides float information for non-analysis accounts, which can be accessed through a PowerOn specfile.
`)
acctRecordFields.set("currentrelationshipcode", ` 
\n### Current Relationship Code
\n
\n This calculated field contains a code that specifies the member's current relationship to your credit union.
\nField Number         **808**
\nMnemonic             **CURRENTRELATIONSHIPCODE**
\nData Type            **Code to 99**
\nSource               **System-calculated**
\nHelp File            **00088**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nThe system enters a system-calculated code in this field (0–99) that appears in various inquiries and calculations.
\n
\nYou cannot perform direct file maintenance of this field. To change the value of this field, you must perform the appropriate file maintenance in the Relationship Override, Rel Override Eff Date, and Rel Override Exp Date fields.
`)
acctRecordFields.set("relationshipcode", ` 
\n### Relationship Code
\n
\n This field stores a code that specifies the member's base relationship to your credit union.
\nField Number         **032**
\nMnemonic             **RELATIONSHIPCODE**
\nData Type            **Code to 99**
\nSource               **System-entered**
\nHelp File            **00032**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\nThe system enters a code in this field (0–99) that appears in various inquiries and calculations.
`)
acctRecordFields.set("relationshipoverride", ` 
\n### Relationship Override
\n
\n This field stores a code that specifies a relationship code that overrides the base relationship code until the relationship override expires.
\nField Number         **033**
\nMnemonic             **RELATIONSHIPOVERRIDE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **00033**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\nEnter a code in this field (0–99) that appears in various inquiries and calculations.
`)
acctRecordFields.set("relationshipoverrideeffdate", ` 
\n### Rel Override Eff Date
\n
\n This field stores the date that specifies when the Relationship Override field becomes effective.
\nField Number         **034**
\nMnemonic             **RELATIONSHIPOVERRIDEEFFDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00034**
\nDefault Control      **Yes**
\nDefault Value				 **Date Null**
`)
acctRecordFields.set("relationshipoverrideexpdate", ` 
\n### Rel Override Exp Date
\n
\n This field specifies the date that the Relationship Override field expires.
\nField Number         **035**
\nMnemonic             **RELATIONSHIPOVERRIDEEXPDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00035**
\nDefault Control      **Yes**
\nDefault Value				 **Date Null**
\n
\nThe system considers an unspecified date to be expired.
`)
acctRecordFields.set("headofhousehold", ` 
\n### Head of Household
\n
\n This field stores a code that specifies whether this account is used as a head of household account to consolidate mailings or target marketing campaigns.
\nField Number         **016**
\nMnemonic             **HEADOFHOUSEHOLD**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00016**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\n#### Data Type Descriptions
\n##### (0) Head of Household
\n   Use this account as a head of household account.##### (1) Other Family Member
\n   Do not use this account as a head of household account.
\nYou can set this field automatically using the Head of Household Matching option of the Miscellaneous Processing batch program. This option matches accounts if the primary members live at the same address and have the same last name. The address and last name must be spelled exactly the same in both primary Name records, or a match does not occur.
\n
\nIn addition, the Head of Household fields in both Account records must be set to (0) Head of Household. The Head of Household Matching option ignores Account records if the Head of Household field is set to (1) Other Family Member. Whenever the program makes a match, the system sets the Head of Household field in both Account records.
\n
\nYou can access the Head of Household field with PowerOn to target marketing campaigns to heads of household only, avoiding duplicate mailings to the same household.
`)
acctRecordFields.set("householdaccount", ` 
\n### Household Account
\n
\n This field stores the related head of household account, if the value in the Head of Household field is set to (1) Other family member.
\nField Number         **025**
\nMnemonic             **HOUSEHOLDACCOUNT**
\nData Type            **10 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **00025**
\nDefault Control      **No**
\nDefault Value				 **(Blank)**
\n
\nWhen the household account number does not correspond to an existing account, the system ignores the household account number and sends mail to the address in the Account record.
\n
\nWhenever you perform file maintenance on this field, the system automatically creates or deletes the appropriate Household record in the head of household account. Whenever you create or delete a Household record in the head of household account, the system automatically fills in or clears this field in the account referenced by the Household record. You only need to perform file maintenance of one account.
`)
acctRecordFields.set("householdstatement", ` 
\n### Household Statement
\n
\n This field stores a code that indicates if you want to send multiple statements to one household in a single envelope.
\nField Number         **026**
\nMnemonic             **HOUSEHOLDSTATEMENT**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00026**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nDo not use this field for head of household accounts (the Head of Household field is set to 0). If this is not the head of household account (the Head of Household field is set to 1), choose one of the following:
\n
\n#### Data Type Descriptions
\n##### (0) Do not consolidate statement
\n   Do not group this statement with the head of household statement for mailing.##### (1) Group with the head of household
\n   Group this statement with the head of household statement for mailing.
\nFor more information, see Statement Generation.
`)
acctRecordFields.set("statementmailcode", ` 
\n### Statement Mail Code
\n
\n This field stores a code that indicates what mail code to use to for mailing statements.
\nField Number         **031**
\nMnemonic             **STATEMENTMAILCODE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **00031**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\n#### Data Type Descriptions
\n##### (0) Use individual mail codes
\n   The system honors the credit union-defined mail codes in the Share and Loan records.##### 1–99
\n   This credit union-defined mail code in the Account record overrides the statement mail codes in the Share and Loan records.
\n       - Important: If custom text descriptions for each mail code in Statement Mail Code Names Parameters have been defined, those text descriptions display in the drop-down menu when revising this field to help you select the correct mail code (as defined by your credit union). The system displays the description and the mail code in the field; however, only the mail code is included on the member's statement.
\n       - If you enter a mail code that is defined as No Mail, statements for the entire account are not mailed.
`)
acctRecordFields.set("estmtnotify", ` 
\n### E-Statement Email Notify
\n
\n This field stores a code that specifies whether the member would like to receive e-statements for home banking products.
\nField Number         **039**
\nMnemonic             **ESTMTNOTIFY**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00039**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\n#### Data Type Descriptions
\n##### (0) No E-mail notification
\n   The user should not receive email notification that an e-statement is available.##### (1) Notify by E-mail
\n   The user should receive email notification that an e-statement is available.
`)
acctRecordFields.set("estmtenable", ` 
\n### E-Statement Enable
\n
\n This field stores a code that indicates if the member would like to receive e-statements for home banking products.
\nField Number         **040**
\nMnemonic             **ESTMTENABLE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **00040**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\n#### Data Type Descriptions
\n##### (0) E-Statement not enabled
\n   The member does not want to receive an e-statement.##### (1) Enable E-Statement only
\n   The member wants to receive an e-statement but not a printed statement.##### (2) Enable both statements
\n   The member wants to receive both an e-statement and a printed statement.
`)
acctRecordFields.set("statereporting", ` 
\n### State Reporting
\n
\n This field stores the state code to report dividends to for this member.
\nField Number         **024**
\nMnemonic             **STATEREPORTING**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **00024**
\nDefault Control      **Yes**
\nDefault Value				 **(Blank)**
\n
\n***Important:***  This field is also used to determine a default state withholding amount when performing a withdrawal from a tax-deferred share. Enter a value here to override the value in the State Reporting parameter in the Miscellaneous Parameters. The system then calculates and displays a default withholding amount.
`)
acctRecordFields.set("createdbyuser", ` 
\n### Created By User
\n
\n This field stores the user ID and is populated when the record is created.
\nField Number         **060**
\nMnemonic             **CREATEDBYUSER**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00060**
\nDefault Control      **No**
\nDefault Value				 **Current user number**
\n
\n#### Data Type Descriptions
\n##### 0–9998
\n   The user ID of the creator of the record.##### 9999
\n   The system is unable to determine the information because it is not available.
\nUnder normal circumstances, you should not revise this field.
`)
acctRecordFields.set("createdatbranch", ` 
\n### Created At Branch
\n
\n This field stores the branch ID of the branch where the Account record is created.
\nField Number         **061**
\nMnemonic             **CREATEDATBRANCH**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00061**
\nDefault Control      **No**
\nDefault Value				 **Current user branch**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The system is unable to determine the information because it is not available.##### 1–9999
\n   The branch ID where the record was created.
\nUnder normal circumstances, you should not revise this field.
`)
acctRecordFields.set("crtotalamount", ` 
\n### US Cash Rcvd Amount
\n
\n This field stores the total cash received from a Cash Received (CR) transaction, ATM deposit, or Shared Branch Issuer transactions.
\nField Number         **041**
\nMnemonic             **CRTOTALAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00041**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nAfter the system posts a Cash Received (CR) transaction, it adds the associated amount to this field. The system checks this field to determine if the amount is greater than or equal to the thresholds for suspicious activity or if it is over the IRS-established limit of $10,000. For a total over that amount, the IRS requires you to prepare a Currency Transaction Report (CTR).
\n
\nThis total also includes qualifying ATM deposits and Shared Branch Issuer transactions. During a Shared Branch deposit transaction or a Shared Branch loan payment, the amount is updated by a corresponding message if funds are marked as cash. The system considers non-envelope cash deposits as qualifying ATM deposits for credit unions using the latest model NCR ATMs.
\n
\nThe system sets the totals for this field to $0.00 if the New Banking Day prompt is set to Yes when you run the Daily Posting Batch Program.
\n
\n***Important:***  Whenever this field value changes as a direct result of posting a Cash Received (CR) teller transaction, the system does not record the change in FM history. The system also does not record changes to this field in FM history when you void a deposit or payment associated with a Cash Received (CR) teller transaction. The system records changes to this field in the transaction log file, and you can recover the previous value using the Recovery Posting batch program.
`)
acctRecordFields.set("cdtotalamount", ` 
\n### US Cash Disb Amount
\n
\n This field stores the total cash distributed with a Cash Disbursed (CD) transaction, ATM withdrawals, or Shared Branch Issuer transactions.
\nField Number         **042**
\nMnemonic             **CDTOTALAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00042**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nAfter the system posts a Cash Disbursed (CD) transaction, it adds the associated amount to this field. The system checks this field to determine if the amount is greater than or equal to the thresholds for suspicious activity or past the IRS-established limit of $10,000. For a total beyond that amount, the IRS requires you to prepare a Currency Transaction Report (CTR). For more information on currency reporting, see the IRS site.
\n
\nThis total also includes qualifying ATM withdrawals and Shared Branch Issuer transactions.
\n
\nThe system sets the totals for this field to $0.00 if the New Banking Day prompt is set to Yes when you run the Daily Posting Batch Program.
\n
\n***Important:***  Whenever this field value changes as a direct result of posting a Cash Disbursed (CD) teller transaction, the system does not record the change in FM history. The system records changes to this field in the transaction log file, and you can recover the previous value using the Recovery Posting batch program.
`)
acctRecordFields.set("frcrtotalamount", ` 
\n### Frgn Cash Rcvd Amt
\n
\n This field stores the total cash received with a Foreign Received (FR) transaction.
\nField Number         **043**
\nMnemonic             **FRCRTOTALAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00043**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nAfter you post a Foreign Received (FR) transaction, the system adds the associated amount to this field. The system checks this field to determine if the amount is greater than or equal to the threshold for suspicious activity or over the IRS-established limit of $10,000. For a total beyond that amount, the IRS requires you to prepare a Currency Transaction Report (CTR). For more information on currency reporting, see the IRS site.
\n
\nThe system sets the totals for this field to $0.00 if the New Banking Day prompt is set to Yes when you run the Daily Posting Batch Program.
\n
\n***Important:***  Whenever this field value changes as a direct result of posting a Foreign Received (FR) teller transaction, the system does not record the change in FM history, including when you void a deposit or payment associated with a Foreign Received (FR) teller transaction. The system records changes to this field in the transaction log file, and you can recover the previous value using Recovery Posting.
`)
acctRecordFields.set("frcdtotalamount", ` 
\n### Frgn Cash Disb Amt
\n
\n This field stores the total cash received with a Foreign Disbursed (FD) transaction.
\nField Number         **044**
\nMnemonic             **FRCDTOTALAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00044**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nAfter you post a Foreign Disbursed (FD) transaction, the system adds the associated amount to this field. The system checks this field to determine if the amount is greater than or equal to the threshold for suspicious activity or over the IRS-established limit of $10,000. For a total beyond that amount, the IRS requires you to prepare a Currency Transaction Report (CTR). For more information on currency reporting, see the IRS site.
\n
\nThe system sets the totals for this field to $0.00 if the New Banking Day prompt is set to Yes when you run the Daily Posting Batch Program.
\n
\n***Important:***  Whenever this field value changes as a direct result of posting a Foreign Disbursed (FD) teller transaction, the system does not record the change in FM history, including when you void a deposit or payment associated with a Foreign Disbursed (FD) teller transaction. The system records changes to this field in the transaction log file, and you can recover the previous value using Recovery Posting.
`)
acctRecordFields.set("frcrunits", ` 
\n### Frgn Cash Rcvd Units
\n
\n This field stores the aggregate of the foreign currency amount total for the day based on Foreign Received (FR) teller transactions.
\nField Number         **054**
\nMnemonic             **FRCRUNITS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00054**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nThe system sets the totals for this field to $0.00 if the New Banking Day prompt is set to Yes when you run the Daily Posting Batch Program.
`)
acctRecordFields.set("frcdunits", ` 
\n### Frgn Cash Disb Units
\n
\n This field stores the aggregate of the total in foreign currency for the day based on the Foreign Disbursed (FD) teller transactions during the day. The currency amount is reported in foreign currency, not converted to U.S. dollars.
\nField Number         **055**
\nMnemonic             **FRCDUNITS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00055**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nThe system sets the totals for this field to $0.00 if the New Banking Day prompt is set to Yes when you run the Daily Posting Batch Program.
`)
acctRecordFields.set("wrtotalamount", ` 
\n### Wire Received Amount
\n
\n This field stores the total amount of incoming wires posted in a wire received transaction.
\nField Number         **062**
\nMnemonic             **WRTOTALAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00062**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nAfter the system posts an incoming wire (wire received) transaction, the amount of the wire is added to this field. For a total beyond $10,000, the IRS requires your credit union to prepare a Currency Transaction Report (CTR).
\n
\nThe system sets the totals for this field to $0.00 if the New Banking Day prompt is set to Yes when you run the Daily Posting Batch Program.
`)
acctRecordFields.set("wdtotalamount", ` 
\n### Wire Disbursed Amount
\n
\n This field stores the total amount of outgoing wires posted in a wire disbursed transaction.
\nField Number         **063**
\nMnemonic             **WDTOTALAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00063**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nAfter the system posts an outgoing wire (wire disbursed) transaction, the amount of this wire is added to this field. For a total beyond $10,000, the IRS requires your credit union to prepare a Currency Transaction Report (CTR).
\n
\nThe system sets the totals for this field to $0.00 if the New Banking Day prompt is set to Yes when you run the Daily Posting Batch Program.
`)
acctRecordFields.set("warningcode", ` 
\n### Warning 01 Code - Warning 20 Code
\n
\n The 20 Warning # Code fields can each contain a code that identifies a different credit union-defined warning to apply to this account.
\nField Number         **010:001 - 010:020**
\nMnemonic             **WARNINGCODE:1 - WARNINGCODE:20**
\nData Type            **Code to 999**
\nSource               **User-entered**
\nHelp File            **00010**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\n#### Data Type Descriptions
\n##### (0) No Warning Code
\n   No credit union-defined warning##### 1–999
\n   A specific warning code to apply to this account
\n       - 
\n       - Depending on your parameters, you can select a code from up to 999 different warning codes. For more information on how to define warning codes and warning messages, see Warning Parameters.
\n
\nYou can select up to 20 different warning codes in an Account record.
\n
\nYou can set warning codes to expire automatically by using these fields together with Warning 01 Expiration - Warning 20 Expiration fields.
`)
acctRecordFields.set("warningexpiration", ` 
\n### Warning 01 Expiration - Warning 20 Expiration
\n
\n The 20 Warning # Expiration fields can each contain a date after which the corresponding warning should no longer apply to the account.
\nField Number         **017:001 - 017:020**
\nMnemonic             **WARNINGEXPIRATION:1 - WARNINGEXPIRATION:20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00017**
\nDefault Control      **No**
\nDefault Value				 **Date Null**
\n
\nAt any Warning # Expiration field, you can enter a date after which the corresponding warning (see Warning 01 Code - Warning 20 Code) should no longer apply to the account.
\n
\nFor example, if you select 200 at the Warning 9 Code field and type 112811 in the Warning 9 Expiration field, Warning Code 200 will be in effect until the system date reaches November 28, 2011. After that date, the warning is no longer active and the security privileges no longer restrict access to the account.
\n
\nThe system automatically places and removes the delinquent loan warning code during Daily Posting. If a loan becomes current, the system sets the warning expiration date to the current system date instead of setting the warning code to zero. This means that you can see the last time the account or a particular loan became current by displaying a detail inquiry on the account or loan record since it shows the delinquent loan warning and its expiration date.
\n
\nIf you select a value at the Warning # Code field, but you do not enter a date at the related Warning # Expiration field, the warning remains in effect indefinitely or until you remove the value in the Warning # Code field manually.
`)
acctRecordFields.set("paymenthistory:1", ` 
\n### Payments Made
\n
\n This field stores the number of loan payments the member has made to date for all loans in the account.
\nField Number         **011:001**
\nMnemonic             **PAYMENTHISTORY:1**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00011**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nThe system increments the value in this field by one each time the member makes a loan payment that satisfies the minimum payment requirement for that loan.
\n
\nUnder normal circumstances, you should not revise this field.
`)
acctRecordFields.set("paymenthistory:2", ` 
\n### 11–30 Days DQ
\n
\n This field stores a count of all loan payments made 11–30 days after the due date.
\nField Number         **011:002**
\nMnemonic             **PAYMENTHISTORY:2**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00011**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nThe system increments the appropriate this field by one each time a loan in the account is delinquent by 11–30 days after the due date.
\n
\nUnder normal circumstances, you should not revise the values in this field.
\n
\nUnder normal circumstances, you would not revise the number of delinquent days for this field. However, you can redefine the number of delinquent days for this field by entering a value for it in the Payment History Day Cutoff parameters in Miscellaneous Parameters (the Parameter Manager). If you do, the system changes the count after the due date and the field name that appears for this and other # Days DQ fields.
`)
acctRecordFields.set("paymenthistory:3", ` 
\n### 31–60 Days DQ
\n
\n This field stores a count of all loan payments made 31–60 days after the due date.
\nField Number         **011:003**
\nMnemonic             **PAYMENTHISTORY:3**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00011**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nThe system increments the appropriate this field by one each time a loan in the account is delinquent by 31–60 days after the due date.
\n
\nUnder normal circumstances, you should not revise the values in this field.
\n
\nUnder normal circumstances, you would not revise the number of delinquent days for this field. However, you can redefine the number of delinquent days for this field by entering a value for it in the Payment History Day Cutoff parameters in Miscellaneous Parameters (the Parameter Manager). If you do, the system changes the count after the due date and the field name that appears for this and other # Days DQ fields.
`)
acctRecordFields.set("paymenthistory:4", ` 
\n### 61–90 Days DQ
\n
\n This field stores a count of all loan payments made 61–90 days after the due date.
\nField Number         **011:004**
\nMnemonic             **PAYMENTHISTORY:4**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00011**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nThe system increments the appropriate this field by one each time a loan in the account is delinquent by 61–90 days after the due date.
\n
\nUnder normal circumstances, you should not revise the values in this field.
\n
\nUnder normal circumstances, you would not revise the number of delinquent days for this field. However, you can redefine the number of delinquent days for this field by entering a value for it in the Payment History Day Cutoff parameters in Miscellaneous Parameters (the Parameter Manager). If you do, the system changes the count after the due date and the field name that appears for this and other # Days DQ fields.
`)
acctRecordFields.set("paymenthistory:5", ` 
\n### 91–120 Days DQ
\n
\n This field stores a count of all loan payments made 91–120 days after the due date.
\nField Number         **011:005**
\nMnemonic             **PAYMENTHISTORY:5**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00011**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nThe system increments the appropriate this field by one each time a loan in the account is delinquent by 91–120 days after the due date.
\n
\nUnder normal circumstances, you should not revise the values in this field.
\n
\nUnder normal circumstances, you would not revise the number of delinquent days for this field. However, you can redefine the number of delinquent days for this field by entering a value for it in the Payment History Day Cutoff parameters in Miscellaneous Parameters (the Parameter Manager). If you do, the system changes the count after the due date and the field name that appears for this and other # Days DQ fields.
`)
acctRecordFields.set("paymenthistory:6", ` 
\n### 121 and up Days DQ
\n
\n This field stores a count of all loan payments made 121 and up days after the due date.
\nField Number         **011:006**
\nMnemonic             **PAYMENTHISTORY:6**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00011**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nThe system increments the appropriate this field by one each time a loan in the account is delinquent by 121 and up days after the due date.
\n
\nUnder normal circumstances, you should not revise the values in this field.
\n
\nUnder normal circumstances, you would not revise the number of delinquent days for this field. However, you can redefine the number of delinquent days for this field by entering a value for it in the Payment History Day Cutoff parameters in Miscellaneous Parameters (the Parameter Manager). If you do, the system changes the count after the due date and the field name that appears for this and other # Days DQ fields.
`)
acctRecordFields.set("frozenmode", ` 
\n### Audio/HB Frozen Mode
\n
\n This field stores a code that indicates the frozen condition of the Audio Response and home banking systems.
\nField Number         **027**
\nMnemonic             **FROZENMODE**
\nData Type            **Code to 2**
\nSource               **System-entered or User-entered**
\nHelp File            **00027**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\n#### Data Type Descriptions
\n##### (0) Audio/HB is not frozen
\n   The condition when you create the account or when you reset a frozen condition.##### (1) Audio/HB is frozen
\n   The frozen condition automatically set if the value in the Invalid Attempt Count field ever exceeds the value in the Inv Attempts Before Frozen parameter in the MemberConnect Parameters.
\n       - 
\n       - This option indicates that the account is frozen because the member reached the maximum number of attempts to log on to a SymConnect interface (such as home banking or audio) using the original password or email. For example, if the Inv Attempts Before Frozen parameter is set to 6, members can enter an invalid account number and access code combination up to six times before the system freezes the account. Once the value in this field is set to this option, no one can access the account through the audio response or home banking systems until you manually reset this field to (0) Audio/HB is not frozen. When you reset this field to (0) Audio/HB is not frozen, the system automatically resets the Invalid Attempt Count field to 0000.
\n##### (2) Audio/HB is permanently frozen
\n   The frozen condition automatically set because the member reached maximum attempts to answer the security question during password reset or failed to log on with the temporary password.
\n       - The system permanently freezes the account in two possible scenarios:
\n       - The value in the Lock Count field in the Preference record reaches the value in the Inv Attempts Before Frozen parameter (for invalid security answers)
\n       - The value in the Invalid Attempt Count field reaches the value in the Inv Attempts Before Frozen parameter and the value in the Pw Reset Probation field in the Preference record is set to Yes (for invalid logons with the temporary password)
\n***Important:***  If you want to freeze the member account for reasons other than invalid logins, you must set the value in this field to (2) Audio/HB is permanently frozen and add a warning to the account to prevent other credit union staff from manually changing the status of the field.
`)
acctRecordFields.set("invalidattemptcount", ` 
\n### Invalid Attempt Count
\n
\n This field stores the number of times someone made an invalid attempt to access the account through the Audio Response or home banking system.
\nField Number         **028**
\nMnemonic             **INVALIDATTEMPTCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00028**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nYou cannot perform file maintenance on this field.
\n
\nThe value in this field appears whenever a member logs on to the home banking system, if home banking is set up to track invalid attempts (the Inv Attempts Before Frozen parameter in MemberConnect, SymConnect Client-specific, or SymXchange Client Parameters is not set to 0). The member should review this information carefully to ensure that no one has been attempting to access the account without consent.
`)
acctRecordFields.set("invalidattemptdate", ` 
\n### Last Inv Attempt Date
\n
\n This field stores the last date when someone tried to access this account using an invalid access code.
\nField Number         **029**
\nMnemonic             **INVALIDATTEMPTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00029**
\nDefault Control      **No**
\nDefault Value				 **Date Null**
\n
\nThe value in this field appears whenever a member logs on to the home banking system, if home banking is set up to track invalid attempts (the Inv Attempts Before Frozen parameter in MemberConnect, SymConnect Client-specific, or SymXchange Client Parameters is not set to 0). The member should review this information carefully to ensure that no one has been attempting to access the account without consent.
`)
acctRecordFields.set("invalidattempttime", ` 
\n### Last Inv Attempt Time
\n
\n This field stores the last time (in HHMM format) when someone tried to access this account using an invalid access code.
\nField Number         **030**
\nMnemonic             **INVALIDATTEMPTTIME**
\nData Type            **Code to 2359**
\nSource               **System-entered**
\nHelp File            **00030**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nThe value in this field appears whenever a member logs on to the home banking system, if home banking is set up to track invalid attempts (the Inv Attempts Before Frozen parameter in MemberConnect, SymConnect Client-specific, or SymXchange Client Parameters is not set to 0). The member should review this information carefully to ensure that no one has been attempting to access the account without consent.
`)
acctRecordFields.set("nsfmonthlycount", ` 
\n### NSF Month 01 Day Count - NSF Month 24 Day Count
\n
\n Each of these 24 fields stores the number of days the account had a negative balance for that month.
\nField Number         **018:001 - 018:024**
\nMnemonic             **NSFMONTHLYCOUNT:1 - NSFMONTHLYCOUNT:24**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00018**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nDuring Daily Posting for the first day of each month, the system moves the value in each NSF Month # Day Count field to the previous NSF Month # Day Count field and clears the NSF Month 1 Day Count field. In this way, the system maintains a running 24 month history of NSF activity in the account.
\n
\nThe system increments the value in the NSF Month 1 Day Count field by one under the following conditions:
\n
\nFor clients who have purchased the Overdraw Tolerance module, the balance is considered negative if the sum of the Balance field value plus the Overdraft Tolerance Amount field value is less than $0.00.
\n
\nThe NSF Month 1 Day Count field stores the number of days in the current month that the account had an NSF condition or a negative balance.
\n
\nUnder normal circumstances, you should not revise this field.
`)
acctRecordFields.set("nsftoday", ` 
\n### NSF Today Count
\n
\n If you indicate at the Count NSFs prompt in your batch posting jobs that you want the system to count NSFs, this field stores the number of times during the current system date an NSF condition or negative balance occurred in the account.
\nField Number         **019**
\nMnemonic             **NSFTODAY**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00019**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nUnder normal circumstances, you should not revise this field.
`)
acctRecordFields.set("cappedfeesamountcap", ` 
\n### Capped Fees Amount Cap
\n
\n This field stores the dollar amount your credit union sets for its capped fees amount.
\nField Number         **059**
\nMnemonic             **CAPPEDFEESAMOUNTCAP**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00058**
\nDefault Control      **Yes**
\nDefault Value				 **0.00**
\n
\nFor a period of time that you determine, the account cannot be charged any additional fees once the dollar amount in this field is reached. Fees eligible for capping are listed in the Fee Types to Cap question in most of the posting batch programs. You can add the RB.CLEARFEECAPFIELDS PowerOn specfile to your nightly processing job file to clear the Capped Fees Amount This Period field. The period is determined by how often you run this PowerOn specfile.
\n
\nThis field depends on the Fee Types to Cap batch question so it must be filled out for the cap fee amount to take effect.
`)
acctRecordFields.set("cappedfeescountcap", ` 
\n### Capped Fees Count Cap
\n
\n This field stores the number of fee occurrences at which your credit union stops charging capped fees for the account during a time period you specified.
\nField Number         **058**
\nMnemonic             **CAPPEDFEESCOUNTCAP**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **00059**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\nFees eligible for capping are listed in the Fee Types to Cap question in most of the posting batch programs. A PowerOn specfile in the nightly processing jobs clears the Capped Fee Count This Period field at the end of the period you specify. The period is determined by how often you run this PowerOn specfile.
\n
\nThis field depends on the Fee Types to Cap batch question so it must be filled out for the fee count cap to take effect.
`)
acctRecordFields.set("cappedfeesamtperiod", ` 
\n### Capped Fees Amount This Period
\n
\n This calculated field contains the sum of the capped fees charged by batch programs and online transaction processing to the shares and loans under this account during a time period you specify.
\nField Number         **818**
\nMnemonic             **CAPPEDFEESAMTPERIOD**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **00098**
\nDefault Control      **Yes**
\nDefault Value				 **0.00**
\n
\nFees eligible for capping are listed in the Fee Types to Cap batch question in most of the posting batch programs. The period specified is determined by your credit union. The field is cleared only when the Capped Fees Count This Period field is cleared from all Shares and Loans on the account.
\n
\nYou cannot perform file maintenance on this field.
`)
acctRecordFields.set("cappedfeescntperiod", ` 
\n### Capped Fees Count This Period
\n
\n This calculated field contains the number of occurrences of capped fees, incrementing by 1, charged to the shares and loans of the account.
\nField Number         **819**
\nMnemonic             **CAPPEDFEESCNTPERIOD**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **00099**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\nFees eligible for capping are listed in the Fee Types to Cap batch question in most of the posting batch programs. The period specified is determined by your credit union. The field is cleared only when the Capped Fees Count This Period field is cleared from all Shares and Loans on the account.
\n
\nYou cannot perform file maintenance on this field.
`)
acctRecordFields.set("limitusagedate", ` 
\n### Limit Usage Date
\n
\n This field stores the last date that transactions were limited by fields in the Account record occurred.
\nField Number         **066**
\nMnemonic             **LIMITUSAGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00066**
\nDefault Control      **No**
\nDefault Value				 **Date Null**
\n
\nThe system uses this field for daily limiting at the Account record level.
\n
\nWhenever the system processes a transaction that may be limited by fields in the Account record, the system checks this field. If the date in this field differs from the current AIX date, the system does the following:
\n   - Updates this field with the current AIX date
\n   - Resets all Account record fields that track daily limit usage to zero
\n   - Starts to track the limit usage for the current day
\n
\nUnder normal circumstances, you should not revise this field.
`)
acctRecordFields.set("limitdescription", ` 
\n### Limit 1 Description - Limit 6 Description
\n
\n Each of these six calculated fields contains the description of the corresponding Limit 1 – Limit 6 fields.
\nField Number         **820:1 - 820:6**
\nMnemonic             **LIMITDESCRIPTION:1 - LIMITDESCRIPTION:6**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **00100**
\nDefault Control      **No**
\nDefault Value				 **(Blank)**
\n
\nThe system takes the values of the Limit 1 Description - Limit 6 Description parameters in the Account Limit Parameters and displays those values in these fields.
`)
acctRecordFields.set("limit", ` 
\n### Limit 1 - Limit 6
\n
\n Each of these six fields stores an amount that places a daily limit on certain types of transactions with particular source codes.
\nField Number         **069:1 - 069:6**
\nMnemonic             **LIMIT:1 - LIMIT:6**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00069**
\nDefault Control      **Yes**
\nDefault Value				 **0.00**
\n
\nThe Limit 1 Source Code – Limit 6 Source Code, Limit 1 Type – Limit 6 Type, and Limit 1 SubType – Limit 6 SubType parameters in the Account Limit Parameters determine which source codes and which transaction types are affected.
\n
\nWhenever the system processes an online transaction, it determines whether one of these limits (1-6) applies to the transaction:
\n   - For authorizations, the system refers to an internal source code and transaction type.
\n   - For completions, the system refers to the Source Code field in the Transaction record and the internal transaction type.
\n
\nThe system checks how much of the value of these fields the member has used during that day. If the current transaction would exceed the limit, the system declines the transaction.
\n
\nWhen Symitar declines a SymConnect transaction because the transaction exceeded one of these fields, the system returns the Error Code 13061:
\n   - The requested transaction 
\n   - exceeds the defined limits.
\n
\nWhen Symitar declines the transaction submitted through an ATM network, the system returns a response code appropriate for that network.
\n
\nWithin the system, Symitar sets the Our Response Code field in the ATM Dialog record to 2081: Daily account limit exceeded. Symitar also sets the Our Response Detail field in the ATM Dialog record to Account Limit n where n is a value 1–6, depending on which limit is exceeded.
\n
\nIf the value of one of these fields is set to 0, the system does not enforce that limit for this account.
`)
acctRecordFields.set("limitamount", ` 
\n### Limit 1 Amount - Limit 6 Amount
\n
\n Each of these six fields stores the current total amount of transactions that apply to the corresponding limit.
\nField Number         **070:1 - 070:6**
\nMnemonic             **LIMITAMOUNT:1 - LIMITAMOUNT:6**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00070**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nWhenever one of these defined limits applies to a transaction, Symitar responds with these steps:
\n   - Adds the amount of that transaction to the amount in the appropriate one of these fields.
\n   - Determines whether that sum would exceed the amount in the corresponding Limit 1 – Limit 6 field.
\n   - Declines any transaction that would exceed the applicable limit.
\n   - Adds the amount of the transaction in the appropriate one of these fields only if the system approves the transaction.
\n
\nWhen the system processes the transaction, it checks to see if it is the first transaction of the day and whether the AIX date is different from the date in the Limit Usage Date field in the Account record. If the transaction is the first of the day, the system resets all limit usage fields (Limit 1 Count – Limit 6 Count and Limit 1 Amount – Limit 6 Amount) before adding the transaction amount to the appropriate one of these fields.
`)
acctRecordFields.set("countlimit", ` 
\n### Limit 1 Count Limit - Limit 6 Count Limit
\n
\n Each of these six fields stores a number that places a daily limit for the number of transactions of a particular type and for a particular source code.
\nField Number         **067:1 - 067:6**
\nMnemonic             **COUNTLIMIT:1 - COUNTLIMIT:6**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00067**
\nDefault Control      **Yes**
\nDefault Value				 **0**
\n
\nThe Limit 1 Source Code – Limit 6 Source Code, Limit 1 Type – Limit 6 Type, and Limit 1 SubType – Limit 6 SubType parameters in the Account Limit Parameters determine which source codes and which transaction types are affected.
\n
\nWhen an online transaction matches the defined source code and transaction type, the system checks the number of such transactions already made the same day.
\n
\nIf completing the transaction would exceed the limit established by one of these count limit fields, the system declines the transaction.
\n
\nWhen Symitar declines a SymConnect transaction because the transaction exceeded the value of these fields, the system returns Error Code 13061:
\n   - The requested transaction exceeds the 
\n   - defined limits
\n
\nWhen the system declines a transaction submitted through an ATM network, it returns a code appropriate for that network. The system sets the Our Response Code field in the ATM Dialog record to 2082 - Daily account count limit exceeded.
\n
\nAt the same time, the system sets the Our Response Detail field in the ATM Dialog record to Account Limit n Count Limit, where "n" is the applicable limit number from 1 to 6.
\n
\nIf the value of one of these fields is set to 0, the system does not enforce that limit for this account.
`)
acctRecordFields.set("limitcount", ` 
\n### Limit 1 Count - Limit 6 Count
\n
\n Each of these six fields stores the current total count of times each day that a member performs a transaction that is affected by this limit.
\nField Number         **068:1 - 068:6**
\nMnemonic             **LIMITCOUNT:1 - LIMITCOUNT:6**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00068**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nWhenever the limit applies to a particular transaction the Symitar system
\n   - Checks whether the new total count would exceed the defined limit.
\n   - Declines the transaction if the transaction would exceed the limit.
\n   - Accepts the transaction and, if the total count does not exceed the defined limit, increases the value of this field by one.
\n
\nWhen the system processes the transaction, it checks to see if it is the first transaction of the day and whether the AIX date is different from the date in the Limit Usage Date field in the Account record. If the transaction is the first of the day, the system resets all limit usage fields (Limit 1 Count – Limit 6 Count and Limit 1 Amount – Limit 6 Amount) before adding the transaction amount to the appropriate one of these fields.
`)
acctRecordFields.set("peritemlimit", ` 
\n### Limit 1 Per Item Limit - Limit 6 Per Item Limit
\n
\n Each of these six fields stores an amount that places a per transaction limit on certain types of transactions with particular source codes.
\nField Number         **071:1 - 071:6**
\nMnemonic             **PERITEMLIMIT:1 - PERITEMLIMIT:6**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00071**
\nDefault Control      **Yes**
\nDefault Value				 **0.00**
\n
\nThe Limit 1 Source Code – Limit 6 Source Code, Limit 1 Type – Limit 6 Type, and Limit 1 SubType – Limit 6 SubType parameters in the Account Limit Parameters determine which source codes and which transaction types are affected.
\n
\nWhen an online transaction matches a defined source code and transaction type, the system checks the amount of such a transaction. If the transaction amount exceeds the limit established by one of these amount "per item" limit fields, the system declines the transaction.
\n
\nWhen Symitar declines a SymConnect transaction because the transaction exceeded one of these fields, the system responds with Error Code 13061:
\n   - The requested transaction exceeds the 
\n   - defined limits
\n
\nWhen Symitar declines the transaction submitted through an ATM network, the system returns a response code appropriate for that network. The system sets the Our Response Code field in the ATM Dialog record to 2083: Account per item limit exceeded. At the same time, the system sets the Our Response Detail field in the ATM Dialog record to Account Limit n Per Item Limit, where "n" is the applicable limit number from 1 to 6.
\n
\nIf the value of one of these fields is set to 0, the system does not enforce that per item limit for this account.
`)
acctRecordFields.set("userchar1", ` 
\n### User Char 01 - User Char 04
\n
\n These four custom fields can store any credit union-defined character data.
\nField Number         **045 - 048**
\nMnemonic             **USERCHAR1-USERCHAR4**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00045-00048**
\nDefault Control      **Yes**
\nDefault Value				 **(Blank)**
\n
\nEach of these fields only appears in the system once you define the field name in the Account User Field Names parameters in the Parameter Manager.
`)
acctRecordFields.set("userchar2", ` 
\n### User Char 01 - User Char 04
\n
\n These four custom fields can store any credit union-defined character data.
\nField Number         **045 - 048**
\nMnemonic             **USERCHAR1-USERCHAR4**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00045-00048**
\nDefault Control      **Yes**
\nDefault Value				 **(Blank)**
\n
\nEach of these fields only appears in the system once you define the field name in the Account User Field Names parameters in the Parameter Manager.
`)
acctRecordFields.set("userchar3", ` 
\n### User Char 01 - User Char 04
\n
\n These four custom fields can store any credit union-defined character data.
\nField Number         **045 - 048**
\nMnemonic             **USERCHAR1-USERCHAR4**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00045-00048**
\nDefault Control      **Yes**
\nDefault Value				 **(Blank)**
\n
\nEach of these fields only appears in the system once you define the field name in the Account User Field Names parameters in the Parameter Manager.
`)
acctRecordFields.set("userchar4", ` 
\n### User Char 01 - User Char 04
\n
\n These four custom fields can store any credit union-defined character data.
\nField Number         **045 - 048**
\nMnemonic             **USERCHAR1-USERCHAR4**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00045-00048**
\nDefault Control      **Yes**
\nDefault Value				 **(Blank)**
\n
\nEach of these fields only appears in the system once you define the field name in the Account User Field Names parameters in the Parameter Manager.
`)
acctRecordFields.set("useramount1", ` 
\n### User Amount 01 - User Amount 02
\n
\n These two custom fields can store any credit union-defined cash amount.
\nField Number         **049 - 050**
\nMnemonic             **USERAMOUNT1-USERAMOUNT2**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00049-00050**
\nDefault Control      **Yes**
\nDefault Value				 **0.00**
\n
\nEach of these fields only appears in the system once you define the field name in the Account User Field Names parameters in the Parameter Manager.
`)
acctRecordFields.set("useramount2", ` 
\n### User Amount 01 - User Amount 02
\n
\n These two custom fields can store any credit union-defined cash amount.
\nField Number         **049 - 050**
\nMnemonic             **USERAMOUNT1-USERAMOUNT2**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00049-00050**
\nDefault Control      **Yes**
\nDefault Value				 **0.00**
\n
\nEach of these fields only appears in the system once you define the field name in the Account User Field Names parameters in the Parameter Manager.
`)
acctRecordFields.set("userdate1", ` 
\n### User Date 01 - User Date02
\n
\n These two custom fields can store any credit union-defined date.
\nField Number         **051 - 052**
\nMnemonic             **USERDATE1-USERDATE2**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00051-00052**
\nDefault Control      **Yes**
\nDefault Value				 **Date Null**
\n
\nEach of these fields only appears in the system once you define the field name in the Account User Field Names parameters in the Parameter Manager.
`)
acctRecordFields.set("userdate2", ` 
\n### User Date 01 - User Date02
\n
\n These two custom fields can store any credit union-defined date.
\nField Number         **051 - 052**
\nMnemonic             **USERDATE1-USERDATE2**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00051-00052**
\nDefault Control      **Yes**
\nDefault Value				 **Date Null**
\n
\nEach of these fields only appears in the system once you define the field name in the Account User Field Names parameters in the Parameter Manager.
`)
acctRecordFields.set("divytdtax", ` 
\n### Dividend This Year Taxable
\n
\n This calculated field contains the total of all the taxable dividends for all regular shares (IRS Code = 00) in the account during the current year.
\nField Number         **800**
\nMnemonic             **DIVYTDTAX**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **00080**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nWhenever the Dividend Posting batch program posts dividends for regular shares, the system adds the taxable dividend amount to the value in this field.
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system transfers the value in this field to the Dividend Last Year Taxable field and resets this field to 0.00.
\n
\nYou cannot perform file maintenance on this field.
`)
acctRecordFields.set("divytdnontax", ` 
\n### Dividend This Year Non-Tax
\n
\n This calculated field contains the total of all the nontaxable dividends for all tax-deferred shares (IRS Code = 01–15) in the account during the current year.
\nField Number         **801**
\nMnemonic             **DIVYTDNONTAX**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **00081**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nWhenever the Dividend Posting batch program posts dividends for tax-deferred shares, the system adds the nontaxable dividend amount to the value in this field.
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system transfers the value in this field to the Dividend Last Year Non-Tax field and resets this field to 0.00.
\n
\nYou cannot perform file maintenance on this field.
`)
acctRecordFields.set("divlastyeartax", ` 
\n### Dividend Last Year Taxable
\n
\n This calculated field contains the total of all the taxable dividends for all regular shares (IRS Code = 00) in the account during the previous year.
\nField Number         **802**
\nMnemonic             **DIVLASTYEARTAX**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **00082**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system transfers the value in the Dividend This Year Taxable field to this field.
\n
\nYou cannot perform file maintenance on this field.
`)
acctRecordFields.set("divlastyearnontax", ` 
\n### Dividend Last Year Non-Tax
\n
\n This calculated field contains the total of all the nontaxable dividends for all tax-deferred shares (IRS Code = 01–15) in the account during the previous year.
\nField Number         **803**
\nMnemonic             **DIVLASTYEARNONTAX**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **00083**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system transfers the value in the Dividend This Year Non-Tax field to this field.
\n
\nYou cannot perform file maintenance on this field.
`)
acctRecordFields.set("interestytd", ` 
\n### Interest This Year
\n
\n This calculated field contains the total of all the interest paid on all loans in this account during the current year.
\nField Number         **804**
\nMnemonic             **INTERESTYTD**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **00084**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nWhenever you post a Loan Payment (LP) transaction for a loan in this account, the system adds the interest amount to the value in this field.
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system transfers the value in this field to the Interest Last Year field and resets this field to 0.00.
\n
\nYou cannot perform file maintenance on this field.
`)
acctRecordFields.set("interestlastyear", ` 
\n### Interest Last Year
\n
\n This calculated field contains the total of all the interest paid on all loans in this account during the previous year.
\nField Number         **805**
\nMnemonic             **INTERESTLASTYEAR**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **00085**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system transfers the value in the Interest This Year field to this field.
\n
\nYou cannot perform file maintenance on this field.
`)
acctRecordFields.set("bondintytd", ` 
\n### Bond Interest This Year
\n
\n This calculated field contains the total of all the bond interest for the account during the current year.
\nField Number         **806**
\nMnemonic             **BONDINTYTD**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **00086**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nWhenever you redeem a bond for a member using the Bond Redemption (BR) transaction, the system adds the interest earned on bonds to the value in this field.
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system transfers the value in this field to the Bond Interest Last Year field and resets this field to 0.00.
\n
\nYou cannot perform file maintenance on this field.
`)
acctRecordFields.set("bondintlastyear", ` 
\n### Bond Interest Last Year
\n
\n This calculated field contains the total of all the bond interest for the account during the previous year.
\nField Number         **807**
\nMnemonic             **BONDINTLASTYEAR**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **00087**
\nDefault Control      **No**
\nDefault Value				 **0.00**
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the system transfers the value in the Bond Interest This Year field to this field.
\n
\nYou cannot perform file maintenance on this field.
`)
acctRecordFields.set("payeeline", ` 
\n### Payee Line 1 - Payee Line 6
\n
\n These six calculated fields contain a member's address information from the Name records at the account level.
\nField Number         **809:001 - 809:006**
\nMnemonic             **PAYEELINE:1 - PAYEELINE:6**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **00089**
\nDefault Control      **No**
\nDefault Value				 **(Blank)**
\n
\nThe system derives a member's address using various information from the Name records at the account level, including the following fields:
\n   - Name fields (First Name, Last Name, Middle Name)
\n   - Address fields (Street, City, Extra Address, etc.)
\n   - Other pertinent fields (Mail Override, etc.)
\nTo allow clients to use the same calculated address, the system places this information in these calculated fields as follows:
\n   - Calculated Field	Data derived from the Name record at the Account level
\n   - Payee Line 1	First Name, Middle Name, Last Name (primary name or joint name)
\n   - Payee Line 2	First Name, Middle Name, Last Name (joint name or Extra Address)
\n   - Payee Line 3	Extra Address or Street
\n   - Payee Line 4	Street or City, State, Zip Code
\n   - Payee Line 5	City, State, Zip Code, or Country
\n   - Payee Line 6	Country or blank
\n
\nYou can use this address to mail statements, notices, and other communications.
\n
\n***Important:***  A calculated field derives its data from the calculation of other fields. The data is not entered by the user. These fields are often used by PowerOn programmers and SymConnect. Programmers need to decide on a case-by-case basis which calculated fields are appropriate for PowerOn specfiles and SymConnect.
`)
acctRecordFields.set("alternateaddress", ` 
\n### Alternate Address 1 - Alternate Address 6
\n
\n These six calculated fields contain a member's alternate address information from the Name records at the account level.
\nField Number         **811:1 - 811:6**
\nMnemonic             **ALTERNATEADDRESS:1 - ALTERNATEADDRESS:6**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value				 **(Blank)**
\n
\nThe system derives a member's alternate address using various information from the Name records at the account level, including the following fields:
\n   - Name fields (First Name, Last Name, Middle Name)
\n   - Address fields (Street, City, Extra Address, etc.)
\n   - Other pertinent fields (Mail Override, etc.)
\nTo allow the use of the same address, the system places this information in these calculated fields as follows:
\n   - Calculated Field	Data derived from the Name record at the Account level
\n   - Alternate Address 1	First Name, Middle Name, Last Name (primary name or joint name)
\n   - Alternate Address 2	First Name, Middle Name, Last Name (joint name or Extra Address)
\n   - Alternate Address 3	Extra Address or Street
\n   - Alternate Address 4	Street or City, State, Zip Code
\n   - Alternate Address 5	City, State, Zip Code, or Country
\n   - Alternate Address 6	Country or blank
\n
\nYou can use this address to mail statements, notices, and other communications.
\n
\n***Important:***  A calculated field derives its data from the calculation of other fields. The data is not entered by the user. These fields are often used by PowerOn programmers and SymConnect. Programmers need to decide on a case-by-case basis which calculated fields are appropriate for PowerOn specfiles and SymConnect.
\n***Important:***  The joint name will not appear in the alternate address information if the value in the Name record's Name Type field is set to (2) Mailing Only or (3) Alternate mailing or if the value in the Name record's Mail Override field is set to (1) Overrides primary mailing address.
`)
acctRecordFields.set("payeephone", ` 
\n### Payee Phone 1 - Payee Phone 3
\n
\n These three calculated fields contain a member's phone number information from the Name records at the account level.
\nField Number         **812:1 - 812:3**
\nMnemonic             **PAYEEPHONE:1 - PAYEEPHONE:3**
\nData Type            **16 Characters**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value				 **(Blank)**
\n
\nTo allow for the use of the same phone number, the system places this information in these calculated fields as follows:
\n   - Calculated Field	Data derived from the Name record at the Account level
\n   - Payee Phone 1	Home Phone
\n   - Payee Phone 2	Work Phone
\n   - Payee Phone 3	Mobile Phone
\n
\nThe numbers in these fields is associated with the Payee Line 1-6 calculated fields in the Account record. You can cause this phone number to appear on a member's checks or statements.
\n
\n***Important:***  A calculated field derives its data from the calculation of other fields. The data is not entered by the user. These fields are often used by PowerOn programmers and SymConnect. Programmers need to decide on a case-by-case basis which calculated fields are appropriate for PowerOn specfiles and SymConnect.
`)
acctRecordFields.set("alternatephone", ` 
\n### Alternate Phone 1 - Alternate Phone 3
\n
\n These three calculated fields contain a member's alternate phone number information from the Name records at the account level.
\nField Number         **813:001 - 813:003**
\nMnemonic             **ALTERNATEPHONE:1 - ALTERNATEPHONE:3**
\nData Type            **16 Characters**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value				 **(Blank)**
\n
\nTo allow the use of the same phone number, the system places this information in these calculated fields as follows:
\n
\n
\n           Alternate Phone 1Home Phone
\n
\n           Alternate Phone 2Work Phone
\n
\n           Alternate Phone 3Mobile Phone
\nThe numbers in these fields is associated with the Alternate Address 1-6 calculated fields in the Account record. You can cause this phone number to appear on a member's checks or statements.
\n
\n***Important:***  A calculated field derives its data from the calculation of other fields. The data is not entered by the user. These fields are often used by PowerOn programmers and SymConnect. Programmers need to decide on a case-by-case basis which calculated fields are appropriate for PowerOn specfiles and SymConnect.
`)
acctRecordFields.set("alternatenametype", ` 
\n### Alternate Name Record Type
\n
\n This calculated field contains the value from the Name Type field of the first Account Name record that it finds that is set to 03 Alternate mailing or that has a value in the Mail Override field set to 1 Overrides primary mailing address.
\nField Number         **814**
\nMnemonic             **ALTERNATENAMETYPE**
\nData Type            **Code to 53**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nThe system searches for the Mail Override field setting only if it cannot find the appropriate value in the Name Type field. If not found in the Account Name record, it returns the value in the Name Type field of the primary Name record (this value will always be 00 Primary).
`)
acctRecordFields.set("alternatenamelocator", ` 
\n### Alternate Name Record Locator
\n
\n This calculated field contains the value from the Locator field of the first Account Name record that it finds that has a value in the Name Type field set to 03 Alternate mailing or that has a value in the Mail Override field set to 1 Overrides primary mailing address.
\nField Number         **815**
\nMnemonic             **ALTERNATENAMELOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nThe system searches for the Mail Override setting only if it cannot find the appropriate value in the Name Type field. If not found, it returns the value in the Locator field of the primary Name record
`)
acctRecordFields.set("payeenametype", ` 
\n### Payee Name Record Type
\n
\n This calculated field contains the value from the Name Type field of the first Account Name record that it finds that has a Mail Override field set to 1 Overrides primary mailing address.
\nField Number         **816**
\nMnemonic             **PAYEENAMETYPE**
\nData Type            **Code to 53**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nThe system searches for the appropriate Mail Override field setting. If it does not find one, it returns the value in the Name Type field of the primary Name record (this value will always be 00 Primary).
`)
acctRecordFields.set("payeenamelocator", ` 
\n### Payee Name Record Locator
\n
\n This calculated field contains the value from the Locator field of the first Account Name record that it finds that has a value in the Name Type field set to 03 Alternate mailing or that has a value in the Mail Override field set to 1 Overrides primary mailing address.
\nField Number         **817**
\nMnemonic             **PAYEENAMELOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value				 **0**
\n
\nThe system searches for the Mail Override field setting only if it cannot find the appropriate Name Type field. The system checks the Death Date, Effective Date, and Expiration Date fields in Name records while calculating what to return. If not found in the Account record, it looks under the primary Name record. If it still finds nothing, it returns the Locator field of the primary Name record.
`)
