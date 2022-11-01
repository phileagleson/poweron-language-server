export const preferenceRecordFields = new Map<string, string>()
preferenceRecordFields.set("type", ` 
\n### Type
\nThis field stores a credit union-defined code identifying this kind of Preference record.
\nField Number         **011**
\nMnemonic             **TYPE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **06611**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n
\nEnter a credit union-defined code (00-99) to identify this kind of Preference record.
\n
`)
preferenceRecordFields.set("audioaccess", ` 
\n### Audio Access Code
\nThis field stores the full audio access code if it is in clear text or hashed with an MD5 hashing method. If using advanced hashing, this field stores the first part of the hashed audio access code.
\nField Number         **006**
\nMnemonic             **AUDIOACCESS**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **06606**
\nDefault Control      **Yes**
\nDefault Value **0000**
\n
\nThis field is used for the audio access code (also known as a Personal Identification Number or PIN). Enter one of the following:
\n   - Type 0 if you want the system to issue an Audio Access PIN.
\n   - Type 1 if you do not want the system to issue a PIN.
\n   - Entries 2–9 are reserved for future use.
\n   - Enter a number (10-9998) to assign a specific PIN.
\n   - The type of data stored in this field when you enter a PIN depends on the value of the HB/Audio Password Hash Code parameter in the Miscellaneous Parameters:
\n   - When the HB/Audio Password Hash Code parameter is set to (0) Do Not Hash Passwords, the entered specific PIN is assigned to the account manually. For a PIN shorter than four digits, you must enter leading zeros. The PIN is stored in this field as up to the first 15 characters entered as a numeric string.
\n   - When the HB/Audio Password Hash Code parameter is set to (1) Use Modified MD5 Hash, the hash of the entered PIN is stored in this field using the first 16 characters of this field. To modify this field using the Account Manager or the FMPERFORM command in a specfile, you must specify the 16 hexadecimal character hash in this field.
\n   - When the HB/Audio Password Hash Code parameter is set to (2) Use Advance Hash, the first part of the hash of the entered PIN is stored in this field and the other parts are stored in the Audio Access Code 2-4 fields. You cannot retrieve the audio access code because it is masked.
\n
\n   - If you type 0000 in this field, the system issues a PIN regardless of how the HB/Audio Password Hash Code parameter is set. If you set this field to 0000 in only one Preference record, the first time the member enters an account number to access the audio response or home banking system, the member must enter a PIN. This PIN is then stored in this field in the Preference record and displays as 9999 for security. You can also use the Assign Audio Access Numbers function of the Miscellaneous Processing batch program to assign PINs randomly.
\n
\n   - Caution:
\n   - When using SymXchange to create an account, do not include the Audio Access Code field. This field will be set to 0000 by default.
\n
\nAfter a PIN is assigned to an account, either automatically or manually, the system displays in this field for security.
\n
\nWhenever this field is file maintained, the Last Access Code Change field is updated with the date of the change.
\n***Important:***  SymConnect is unable to set this field with any entry 1 through 9.
\n
`)
preferenceRecordFields.set("audioaccess2", ` 
\n### Second Audio Access Code
\nThis field stores the full member's secondary audio access code if it is in clear text or hashed with an MD5 hashing method. If using advanced hashing, this field stores the first part of the hashed secondary audio access code.
\nField Number         **069**
\nMnemonic             **AUDIOACCESS2**
\nData Type            **40 Characters**
\nSource               **System-entered**
\nHelp File            **06669**
\nDefault Control      **No**
\nDefault Value **0000**
\n
\nThis field is used for the audio access code (also known as a Personal Identification Number or PIN). Enter one of the following:
\n   - Type 0 if you want the system to issue an Audio Access PIN.
\n   - Type 1 if you do not want the system to issue a PIN.
\n   - Entries 2–9 are reserved for future use.
\n   - Enter a number (10-9998) to assign a specific PIN.
\n   - The type of data stored in this field when you enter a PIN depends on the value of the HB/Audio Password Hash Code parameter in the Miscellaneous Parameters:
\n   - When the HB/Audio Password Hash Code parameter is set to (0) Do Not Hash Passwords, the entered specific PIN is assigned to the account manually. For a PIN shorter than four digits, you must enter leading zeros. The PIN is stored in this field as up to the first 15 characters entered as a numeric string.
\n   - When the HB/Audio Password Hash Code parameter is set to (1) Use Modified MD5 Hash, the hash of the entered PIN is stored in this field using the first 16 characters of this field. To modify this field using the Account Manager or the FMPERFORM command in a specfile, you must specify the 16 hexadecimal character hash in this field.
\n   - When the HB/Audio Password Hash Code parameter is set to (2) Use Advance Hash, the first part of the hash of the entered PIN is stored in this field and the other parts are stored in the Second Audio Access Code 2-4 fields. You cannot retrieve the audio access code because it is masked.
\n
`)
preferenceRecordFields.set("language", ` 
\n### Language
\nThis field stores a code that indicates the language the member wants the audio response system to use for messages.
\nField Number         **002**
\nMnemonic             **LANGUAGE**
\nData Type            **Code to 9**
\nSource               **User-entered or System-entered**
\nHelp File            **06602**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) English
\n   Messages should be in English.##### (1) Spanish
\n   Messages should be in Spanish.##### 2–9
\n   Use this credit union-defined code for any other language you have ordered and installed if messages should be in that language.
`)
preferenceRecordFields.set("reference", ` 
\n### Reference
\nThis field stores any reference information for this Preference record.
\nField Number         **019**
\nMnemonic             **REFERENCE**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06619**
\nDefault Control      **Yes**
\nDefault Value **(Blank)**
\n
\n
\nEnter any reference information (up to 40 characters) for this Preference record.
\n
\nThis credit union-defined field has no effect on the audio response system or the home banking system. You can use this field to help you distinguish between multiple Preference records in the same account. For example, you could use this field to store the member's name or department. PowerOn specfiles can access this field for reports and displays.
\n
`)
preferenceRecordFields.set("emailaddress", ` 
\n### E-Mail Address
\nThis field stores the email address used for online password reset.
\nField Number         **056**
\nMnemonic             **EMAILADDRESS**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06656**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\n
\nEnter the member's email address (up to 40 characters).
\n
\nWhenever this field is changed, the E-Mail Address Ch Date and the E-Mail Address Ch Time fields are updated with the current date and time.
\n
\nThe email in the primary Name record is used only for e-Statements. The email in the Preference record is used for identity during password reset and for temporary passwords. If the member already has an email address in their primary Name record, then NetTeller displays that email as the default to the member during password reset enrollment. These email addresses may be the same.
\n
\nIf multiple Preference records in the account have the User Code field set to 0, the E-Mail Address field in each Preference record must be unique. Otherwise, members may experience problems with password reset.
\n
`)
preferenceRecordFields.set("emailaddrchgdate", ` 
\n### E-Mail Address Ch Date
\nThis field stores the date the credit union received the document.
\nField Number         **057**
\nMnemonic             **EMAILADDRCHGDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **06657**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n
\nThe system automatically sets this field to the current date every time that the E-Mail Address field is updated, either through the system or home banking.
\n
`)
preferenceRecordFields.set("emailaddrchgtime", ` 
\n### E-Mail Address Ch Time
\nThis field stores the time (in HHMM format) that the credit union received the document.
\nField Number         **058**
\nMnemonic             **EMAILADDRCHGTIME**
\nData Type            **Code to 2359**
\nSource               **System-entered**
\nHelp File            **06658**
\nDefault Control      **No**
\nDefault Value **0000**
\n
\n
\nThe system automatically sets this field to the current time whenever the E-Mail Address field is updated. The default is 12:00 A.M.
\n
`)
preferenceRecordFields.set("lastaccesschangedate", ` 
\n### Last Access Code Change
\nThis field stores the last date the access code for this Preference record was changed, either by the member (through audio response or home banking) or by the credit union (through account file maintenance).
\nField Number         **016**
\nMnemonic             **LASTACCESSCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **06616**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n
\nThe system automatically sets this field to the current date every time that the access code for this Preference record was changed.
\n
`)
preferenceRecordFields.set("lastlogondate", ` 
\n### Last Logon Date
\nThis field stores the most recent date that someone successfully logged on to this account through audio response or home banking with the access code specified in this Preference record.
\nField Number         **017**
\nMnemonic             **LASTLOGONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06617**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n
\nThis field is not automatically updated by third-parties interfaces via SymConnect or SymXchange. It must be updated by the credit union's system. Only Convergys audio updates this field automatically.
\n
`)
preferenceRecordFields.set("lastlogontime", ` 
\n### Last Logon Time
\nThis field stores the most recent time (in HHMM format) someone successfully logged on to this account through audio response or home banking with the access code in this Preference record.
\nField Number         **018**
\nMnemonic             **LASTLOGONTIME**
\nData Type            **Code to 2359**
\nSource               **User-entered**
\nHelp File            **06618**
\nDefault Control      **No**
\nDefault Value **0000**
\n
\n
\nThis field is not automatically updated by third-parties interfaces via SymConnect or SymXchange. It must be updated by the credit union's system. Only Convergys audio updates this field automatically.
\n
`)
preferenceRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date in this field when you create, change, or save the Preference record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **072**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **06672**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  The system does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
\n
`)
preferenceRecordFields.set("listtransactions", ` 
\n### List Transactions
\nThis field stores the number of transactions the member can hear in a history inquiry.
\nField Number         **010**
\nMnemonic             **LISTTRANSACTIONS**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **06610**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n
`)
preferenceRecordFields.set("interactmode", ` 
\n### Interaction Mode
\nThis field stores a code that indicates how the member interacts with the audio response system.
\nField Number         **001**
\nMnemonic             **INTERACTMODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **06601**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Expert Mode
\n   The system should prompt the caller to enter a transaction code (also called a service code). The caller can refer to a printed list of transaction codes or press a key to hear a help list of transaction codes.##### (1) Menu Mode
\n   The audio response system should read menus to the member.
`)
preferenceRecordFields.set("audioenable", ` 
\n### Audio Enable Code
\nThis field stores a code that indicates the level of access the member has to the audio response system.
\nField Number         **007**
\nMnemonic             **AUDIOENABLE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **06607**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n
\nA member can inquire about all Share and Loan records in his or her account, but the system controls transfers and withdrawals according to the service code assigned to each Share and Loan record (see Setting Up the Audio Response System). As long as the Audio Enable Code allows only inquiries, you can set all service codes in advance. Then when a member signs up to use the audio response system, you need to change only the Audio Enable Code to activate the service.
\n***Important:***  If SymConnect is being used for access to the audio response system, you need to set the HB Mode and HB Enable Code fields.
\n#### Data Type Descriptions
\n##### (0) Inquiries Only
\n   Allow the member to perform inquiries only.##### (1) Transfers
\n   Allow the member to perform inquiries and transfers.##### (2) Withdrawals and Transfers
\n   Allow the member to perform inquiries, withdrawals, and transfers.
`)
preferenceRecordFields.set("audiocallcount", ` 
\n### Audio Call Count
\nThis field stores the number of times the member called since the last time the Daily Posting batch program cleared this field.
\nField Number         **008**
\nMnemonic             **AUDIOCALLCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **06608**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n
`)
preferenceRecordFields.set("audiocallminutes", ` 
\n### Audio Call Minutes
\nThis field stores the number of minutes (rounded to the nearest minute) the member used the audio response system since you last cleared the call minutes log.
\nField Number         **009**
\nMnemonic             **AUDIOCALLMINUTES**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **06609**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n
\nWhen a member calls the audio response system and successfully enters the account number and access code for this Preference record, the system increments this counter by 1 whenever the current system time increases by 60 seconds. The system does not increment this field if the system is off line or the account is in use when the member calls.
\n
`)
preferenceRecordFields.set("trancodes", ` 
\n### Tran Codes
\nThis field can store the transaction code (also called a service code) for the member's preferred transaction.
\nField Number         **005**
\nMnemonic             **TRANCODES**
\nData Type            **18 Characters**
\nSource               **User-entered**
\nHelp File            **06605**
\nDefault Control      **Yes**
\nDefault Value **(Blank)**
\n
\n
\nOptional entry: The audio response system performs this transaction immediately after the member enters an account number and access code. The system prompts the caller if necessary.
\n
\nThis option is best suited for account inquiries. Members should usually avoid automatically performing transactions such as withdrawals and transfers each time they call the audio response system. Certain transactions (such as transfers) do not take the ID from this field. If this field contains an ID after specifying such a transaction, the system ignores the ID.
\n
\nThis field can contain the following sets of characters:
\n
`)
preferenceRecordFields.set("homefax", ` 
\n### Home Fax
\nThis field stores the member's home fax number.
\nField Number         **003**
\nMnemonic             **HOMEFAX**
\nData Type            **12 Characters**
\nSource               **User-entered**
\nHelp File            **06603**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\n
\nOptional entry: Enter the member's home fax number (up to 12 characters).
\n
`)
preferenceRecordFields.set("businessfax", ` 
\n### Business Fax
\nThis field stores the member's business fax number.
\nField Number         **004**
\nMnemonic             **BUSINESSFAX**
\nData Type            **12 Characters**
\nSource               **User-entered**
\nHelp File            **06604**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\n
\nOptional entry: Enter the member's business fax number (up to 12 characters).
\n
`)
preferenceRecordFields.set("audlastlogondate", ` 
\n### Last Audio Logon Date
\nThis field stores the most recent date a member successfully logged on to an account through the audio response system with the access code specified in the Preference record.
\nField Number         **052**
\nMnemonic             **AUDLASTLOGONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06652**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n
\nThis field is not automatically updated by third-parties interfaces via SymConnect or SymXchange. It must be updated by the credit union's system. Only Convergys audio updates this field automatically.
\n
`)
preferenceRecordFields.set("audlastlogontime", ` 
\n### Last Audio Logon Time
\nThis field stores the most recent time (in HHMM format) a member successfully logged on to an account through the audio response system with the access code in the Preference record.
\nField Number         **053**
\nMnemonic             **AUDLASTLOGONTIME**
\nData Type            **Code to 2359**
\nSource               **User-entered**
\nHelp File            **06653**
\nDefault Control      **No**
\nDefault Value **0000**
\n
\n
\nThis field is not automatically updated by third-party interfaces via SymConnect and SymXchange. It must be updated by the credit union's system. Only Convergys audio updates this field automatically.
\n
`)
preferenceRecordFields.set("usercode", ` 
\n### User Code
\nThis field stores a code you can use to uniquely identify a particular Preference record when many members have access to a single account, such as a corporate account. This field is used only for home banking.
\nField Number         **020**
\nMnemonic             **USERCODE**
\nData Type            **Code to 999**
\nSource               **User-entered**
\nHelp File            **06620**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n
\nWhenever a member who has a Preference record with a defined value in the User Code field (1-999) accesses home banking, that value is stored in the transaction record's User Override field for withdrawal and transfer transactions.
\n
`)
preferenceRecordFields.set("hbusername", ` 
\n### HB Username
\nThis field stores a home banking username that is used with the home banking password to let members access their accounts through the home banking system.
\nField Number         **067**
\nMnemonic             **HBUSERNAME**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **06667**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\n
\nThis field is not case-sensitive and must be unique in the database. It must start with an alphabetic character and contain only numbers or letters. In the Miscellaneous Parameters, set the HB Username Minimum Length and HB Username Maximum Length parameters to control the minimum and maximum length of this field.
\n***Important:***  The system uses a cross-reference key file to ensure that the home banking username is unique in the database.
\n
`)
preferenceRecordFields.set("hbmode", ` 
\n### HB Mode
\nThis field stores a code that controls the member's access to NetTeller and, if using SymConnect, access to the audio response system.
\nField Number         **012**
\nMnemonic             **HBMODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **06612**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No Home Banking
\n   Prevent the member from accessing the home banking or audio response system.##### (1) Standard Home Banking
\n   Allow the member to access the home banking or audio response system.
`)
preferenceRecordFields.set("hbenable", ` 
\n### HB Enable Code
\nThis field stores a code that control the member's level of access to NetTeller and, if using SymConnect, the level of access to the audio response system.
\nField Number         **013**
\nMnemonic             **HBENABLE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **06613**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Inquiries Only
\n   Allow the member to perform account inquiries only through the home banking or audio response system.##### (1) Transfers
\n   Allow the member to perform account inquiries and transfers through the home banking or audio response system.##### (2) Withdrawals and Transfers
\n   Allow the member to perform account inquiries, transfers, and withdrawals through the home banking or audio response system.
\nInitially all accounts have this field set to 0. As members apply for home banking services, set this field to 1 or 2, depending on the level of access requested.
\n***Important:***  If you create a Preference record for a member who does not already have a Preference record for audio response, be sure to assign an audio access code, which serves as an access code for both home banking and audio response.
\n
`)
preferenceRecordFields.set("hbpassword", ` 
\n### HB Password
\nThis field stores the full home banking password if it is in clear text or hashed with an MD5 hashing method. If using advanced hashing, this field stores the first part of the hashed home banking password.
\nField Number         **021**
\nMnemonic             **HBPASSWORD**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06621**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\n
\nEnter an optional home banking password that can be used instead of an audio access code to gain access to a member's account through the home banking system.
\n
\nThis field must be set to a value of 8 or greater. The maximum number of characters you can enter in this field is 20. Additionally, you cannot choose a home banking password that contains the value in the HB Username field.
\n
\nThe value in the HB Password Mode parameter in the Miscellaneous Parameters must be set to (0) Use HB Password and the value in the Use HB Password? parameter in the SymConnect Client-Specific Parameters must be set to Yes for this field to be used.
\n
\nIn Miscellaneous Parameters, set the HB Password Mode, HB Password Minimum Length, and HB Password Maximum Length parameters to control whether the home banking system uses passwords and the minimum and maximum lengths of those passwords, if used.
\nThe type of data stored in this field depends on the value of the HB/Audio Password Hash Code parameter in the Miscellaneous Parameters:
\n   - When the HB/Audio Password Hash Code parameter is set to (0) Do Not Hash Passwords, this field contains the left-justified password.
\n   - When the HB/Audio Password Hash Code parameter is set to (1) Use Modified MD5 Hash, the hash of the home banking password is stored using the first 16 characters of this field. To modify this field using the Account Manager or the FMPERFORM command in a specfile, you must specify the 16 hexadecimal character hash in this field.
\n   - When the HB/Audio Password Hash Code parameter is set to (2) Use Advance Hash, the first part of the hash of the home banking password is stored in this field and the other parts are stored in the HB Password 2-4 fields. You cannot retrieve the home banking password because it is masked.
\n
\nA blank value in this field means that the member cannot use the home banking password in the Preference record to gain access to the account, regardless of how the HB/Audio Password Hash Code parameter is set in the Miscellaneous Parameters.
\n
\nYou can also use the Assign Audio Access Numbers option of the Miscellaneous Processing batch program to assign the same PINs randomly generated for the Audio Access Code field to each HB Password field.
\n
\nThe PASSWORDHASH PowerOn command is used to apply an MD5 hash method to clear text passwords or audio access codes in specfiles. See PASSWORDHASH for details.
\n***Important:***  The Audio PIN & HB Pwd Access parameter in Miscellaneous Parameters must be set to (2) Allow FM & Mask or (3) Allow FM & Unmask to update this field through file maintenance outside of the Miscellaneous Processing batch program or the FMPERFORM command in a specfile.
\n
`)
preferenceRecordFields.set("hbpassword2", ` 
\n### Second HB Password
\nThis field stores the full member's secondary home banking password if it is in clear text or hashed with an MD5 hashing method. If using advanced hashing, this field stores the first part of the hashed secondary home banking password.
\nField Number         **068**
\nMnemonic             **HBPASSWORD2**
\nData Type            **40 Characters**
\nSource               **System-entered**
\nHelp File            **06668**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\n
\nThis field is used when the Second Password Verification parameter is set to (1) Second Password on the Preference Record in the SymConnect Client Specific parameters. You can use this option when you want a password other than the member's Social Security Number.
\n
\nFor the advance password hashing option, this field stores the first part of the second home banking password and the other password parts are stored in the Second HB Password 2–4 fields.
\n
\nUsing this option gives you the ability to use the Second Password Eff Date parameter to specify the date when the secondary password becomes mandatory.
\n
`)
preferenceRecordFields.set("lasthbpwchangedate", ` 
\n### Last HB Password Change
\nThis field stores the date of the last change to the home banking password, if used.
\nField Number         **022**
\nMnemonic             **LASTHBPWCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **06622**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n
\nThe system automatically sets this field to the current date every time that the home banking password for this Preference record was changed.
\n
`)
preferenceRecordFields.set("hbcallcount", ` 
\n### HB Call Count
\nThis field stores the number of times the member used home banking since the last time you cleared the count.
\nField Number         **014**
\nMnemonic             **HBCALLCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **06614**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n
\nThis field can be useful in assessing home banking fees.
\n
`)
preferenceRecordFields.set("hbcallminutes", ` 
\n### HB Call Minutes
\nFor credit unions using the older dial-up MemberConnect PC software, this field stores the total number of minutes the member used home banking since the last time you cleared the log.
\nField Number         **015**
\nMnemonic             **HBCALLMINUTES**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **06615**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n
`)
preferenceRecordFields.set("hblastlogondate", ` 
\n### Last HB Logon Date
\nThis field stores the most recent date that a member successfully logged on to an account through NetTeller online banking or goDough mobile banking solutions with the access code specified in the Preference record.
\nField Number         **050**
\nMnemonic             **HBLASTLOGONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **06650**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n
`)
preferenceRecordFields.set("hblastlogontime", ` 
\n### Last HB Logon Time
\nThis field stores the most recent time a member successfully logged on to an account through NetTeller online banking or goDough mobile banking solutions with the access code specified in the Preference record.
\nField Number         **051**
\nMnemonic             **HBLASTLOGONTIME**
\nData Type            **Code to 2359**
\nSource               **User-entered**
\nHelp File            **06651**
\nDefault Control      **No**
\nDefault Value **0000**
\n
\n
`)
preferenceRecordFields.set("securityquestion", ` 
\n### Security Question
\nThis field stores the security question used to validate the member's identity for a password reset feature.
\nField Number         **054**
\nMnemonic             **SECURITYQUESTION**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06654**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\n
\nEnter a security question (up to 40 characters).
\n
\nIf the member does not want to enroll in online password reset, type Member Opts Out in this field.
\n
`)
preferenceRecordFields.set("securityanswer", ` 
\n### Security Answer
\nThis field stores the security answer for a password reset feature.
\nField Number         **055**
\nMnemonic             **SECURITYANSWER**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06655**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\n
\nEnter a security answer (up to 40 characters). After entered, this field is masked.
\n
`)
preferenceRecordFields.set("lockcount", ` 
\n### Lock Count
\nThis field stores the number of times the member has entered an incorrect security answer during password reset.
\nField Number         **059**
\nMnemonic             **LOCKCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **06659**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n
\nThe system increments this field every time the member submits an invalid security answer during an online password reset. When a user reaches the maximum attempts, as defined by the Inv Attempts Before Frozen parameter in MemberConnect and SymConnect Client-Specific parameters, the system sets the value in the Locked field to (1) Yes and the value in the Audio/HB Frozen Mode field in the Account record to (2) Audio/HB is permanently frozen.
\n
\nThe system automatically resets this field to 0 when you set the Locked field to (0) No.
\n
`)
preferenceRecordFields.set("locked", ` 
\n### Locked
\nThis field stores a code indicates whether the Preference record is locked.
\nField Number         **060**
\nMnemonic             **LOCKED**
\nData Type            **Code to 1**
\nSource               **User-entered or System-entered**
\nHelp File            **06660**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   The Preference record is not locked. To unlock the member's Preference record, select this option.##### (1) Yes
\n   The Preference record is locked.
\n   
\n       - When the Preference record is locked, the member cannot access an applicable home banking system or use a password reset feature.
\n   
\n       - The system locks the Preference record when the value in the Lock Count field reaches the number set by the Inv Attempts Before Frozen parameter.
\n
`)
preferenceRecordFields.set("pwdresetrqstdate", ` 
\n### Password Reset Date
\nThis field stores the system date when the member resets their password in an applicable home banking system.
\nField Number         **061**
\nMnemonic             **PWDRESETRQSTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **06661**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n
\nThe member is allowed to reset their password only once per calendar day, as determined by this field.
\n
`)
preferenceRecordFields.set("pwdresetrqsttime", ` 
\n### Password Reset Time
\nThis field stores the time (in HHMM format) when the member resets their password in an applicable home banking system.
\nField Number         **062**
\nMnemonic             **PWDRESETRQSTTIME**
\nData Type            **Code to 2359**
\nSource               **User-entered**
\nHelp File            **06662**
\nDefault Control      **No**
\nDefault Value **0000**
\n
\n
`)
preferenceRecordFields.set("pwdresetrqstnotice", ` 
\n### Password Reset Notice
\nThis field stores a code indicates when the member successfully resets their password in an applicable home banking system.
\nField Number         **065**
\nMnemonic             **PWDRESETRQSTNOTICE**
\nData Type            **Code to 1**
\nSource               **System-entered**
\nHelp File            **06665**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   The Preference record is not locked.##### (1) Yes
\n   The member has successfully reset their password in an applicable home banking system.
\n   
\n       - In the Daily Posting batch program, if you answer Yes at the HB Password Reset Notice(s) prompt and this field is set to (1) Yes, the system generates a Notice of Online Password Reset for this member and sets this field to (0) No. Otherwise, you can ignore this field.
\n
`)
preferenceRecordFields.set("pwdresetdate", ` 
\n### Last Scsful Pw Reset Dt
\nThis field stores the system date when the member successfully logs on to an applicable home banking system using the temporary password and changes it.
\nField Number         **063**
\nMnemonic             **PWDRESETDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **06663**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n
`)
preferenceRecordFields.set("pwdresetime", ` 
\n### Last Scsful Pw Reset Tm
\nThis field stores the time (in HHMM format) when the member successfully logs in to an applicable home banking system using the temporary password and changes it.
\nField Number         **064**
\nMnemonic             **PWDRESETIME**
\nData Type            **Code to 2359**
\nSource               **User-entered**
\nHelp File            **06664**
\nDefault Control      **No**
\nDefault Value **0000**
\n
\n
`)
preferenceRecordFields.set("pwdresetprobation", ` 
\n### Pw Reset Probation
\nThis field stores a code indicates the account probation status.
\nField Number         **066**
\nMnemonic             **PWDRESETPROBATION**
\nData Type            **Code to 1**
\nSource               **System-entered or User-entered**
\nHelp File            **06666**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n
\nThe home banking applications (Audio Response or NetTeller) use this status with their password reset feature to require a member to provide a new password.
\n#### Data Type Descriptions
\n##### (0) No
\n   The account is not in probation.
\n   
\n       - If the member logs on and changes the temporary password successfully, the system sets this field back to No.
\n##### (1) Yes
\n   The account is in probation.
\n   
\n       - The system sets this field to Yes when the member resets their home banking password and receives a temporary one via email. You can also set this field to Yes manually, if you want to force the user to update their password the next time they log on to the home banking application.
\n***Important:***  If the member reaches the maximum number of invalid logon attempts with the temporary password, as defined by the Inv Attempts Before Frozen field in the SymConnect Client-Specific and MemberConnect parameters, the system freezes the account. The system sets the value in the Audio/HB Frozen Mode field in the Account record to (2) Audio/HB is permanently frozen.
\n
`)
preferenceRecordFields.set("invalidpwdattmpts", ` 
\n### Invalid Password Attempts
\nThis field stores the number of times a member enters an invalid password.
\nField Number         **071**
\nMnemonic             **INVALIDPWDATTMPTS**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **06671**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n
\nEach time the member enters an invalid password, the system adds 1 to this field. When a member enters a valid password, the system resets the value in this field to zero (0). After each invalid attempt, the system checks if the value in this field equals the value specified at the Inv Attempts Before Frozen parameter. If it does, the system sets the value in the Audio/HB Frozen Mode field in the Account record to (2) Audio/HB is permanently frozen and this field is reset back to zero.
\n
`)
preferenceRecordFields.set("lasttrandate", ` 
\n### Last Transaction Date
\nThis field stores the date of the last successful transaction that was subjected to limiting.
\nField Number         **023**
\nMnemonic             **LASTTRANDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **06623**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n
\nThe system updates this field when SymConnect transactions are posted.
\n
`)
preferenceRecordFields.set("wdcashmax", ` 
\n### Maximum Cash W/D
\nThis field stores the maximum amount allowed in a single cash withdrawal.
\nField Number         **024**
\nMnemonic             **WDCASHMAX**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06624**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nEnter the maximum positive amount allowed in a single cash withdrawal.
\n
`)
preferenceRecordFields.set("wdcashlimit", ` 
\n### Cash W/D Limit
\nThis field stores the daily cash withdrawal limit.
\nField Number         **025**
\nMnemonic             **WDCASHLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06625**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nEnter the positive daily cash withdrawal limit.
\n
`)
preferenceRecordFields.set("wdcashcountlimit", ` 
\n### Cash W/D Count Limit
\nThis field stores the maximum number of cash withdrawals allowed per day.
\nField Number         **027**
\nMnemonic             **WDCASHCOUNTLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06627**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n
\nEnter the maximum number of cash withdrawals (0-9999) allowed per day.
\n
`)
preferenceRecordFields.set("wdcashamount", ` 
\n### Cash W/D Amount
\nThis field stores the total cash withdrawal amount on the date in the Last Transaction Date field.
\nField Number         **026**
\nMnemonic             **WDCASHAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **06626**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nThe system updates this field with a positive amount when SymConnect transactions are posted.
\n
`)
preferenceRecordFields.set("wdcashcount", ` 
\n### Cash W/D Count
\nThis field stores the number of cash withdrawals performed on the date in the Last Transaction Date field.
\nField Number         **028**
\nMnemonic             **WDCASHCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **06628**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n
\nThe system updates this field with a positive value when SymConnect transactions are posted.
\n
`)
preferenceRecordFields.set("wdcheckmax", ` 
\n### Maximum Check W/D
\nThis field stores the maximum amount allowed in a single withdrawal by check.
\nField Number         **029**
\nMnemonic             **WDCHECKMAX**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06629**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nEnter the maximum positive amount allowed in a single withdrawal by check.
\n
`)
preferenceRecordFields.set("wdchecklimit", ` 
\n### Check W/D Limit
\nThis field stores the daily amount that can be withdrawn each day by check.
\nField Number         **030**
\nMnemonic             **WDCHECKLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06630**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nEnter the positive daily amount that can be withdrawn each day by check.
\n
`)
preferenceRecordFields.set("wdcheckcountlimit", ` 
\n### Check W/D Count Limit
\nThis field stores the maximum number of withdrawals by check allowed per day.
\nField Number         **032**
\nMnemonic             **WDCHECKCOUNTLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06632**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n
\nEnter the maximum number of withdrawals by check (0-9999) allowed per day.
\n
`)
preferenceRecordFields.set("wdcheckamount", ` 
\n### Check W/D Amount
\nThis field stores the total cash withdrawals by check on the date in the Last Transaction Date field.
\nField Number         **031**
\nMnemonic             **WDCHECKAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **06631**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nThe system updates this field with a positive amount when SymConnect transactions are posted.
\n
`)
preferenceRecordFields.set("wdcheckcount", ` 
\n### Check W/D Count
\nThis field stores the number of check withdrawals performed on the date in the Last Transaction Date field.
\nField Number         **033**
\nMnemonic             **WDCHECKCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **06633**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n
\nThe system updates this field with a positive value when SymConnect transactions are posted.
\n
`)
preferenceRecordFields.set("xfermax", ` 
\n### Maximum Transfer
\nThis field stores the maximum amount allowed in a single transfer.
\nField Number         **034**
\nMnemonic             **XFERMAX**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06634**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nEnter the maximum positive amount allowed in a single transfer.
\n
`)
preferenceRecordFields.set("xferlimit", ` 
\n### Transfer Limit
\nThis field stores the maximum amount that can be transferred daily.
\nField Number         **035**
\nMnemonic             **XFERLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06635**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nEnter the positive maximum amount that can be transferred daily.
\n
`)
preferenceRecordFields.set("xfercountlimit", ` 
\n### Transfer Count Limit
\nThis field stores the maximum number of transfers allowed per day.
\nField Number         **037**
\nMnemonic             **XFERCOUNTLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06637**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n
\nEnter the maximum number of transfers (0-9999) allowed per day.
\n
`)
preferenceRecordFields.set("xferamount", ` 
\n### Transfer Amount
\nThis field stores the total transfer amount on the date in the Last Transaction Date field.
\nField Number         **036**
\nMnemonic             **XFERAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **06636**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nThe system updates this field with a positive amount when SymConnect transactions are posted.
\n
`)
preferenceRecordFields.set("xfercount", ` 
\n### Transfer Count
\nThis field stores the number of transfers performed on the date in the Last Transaction Date field.
\nField Number         **038**
\nMnemonic             **XFERCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **06638**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n
\nThe system updates this field with a positive value when SymConnect transactions are posted.
\n
`)
preferenceRecordFields.set("billpaymax", ` 
\n### Maximum Bill Pmt
\nThis field stores the maximum allowable amount for a single bill payment.
\nField Number         **039**
\nMnemonic             **BILLPAYMAX**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06639**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nEnter the maximum positive allowable amount for a single bill payment.
\n
`)
preferenceRecordFields.set("billpaylimit", ` 
\n### Bill Pmt Limit
\nThis field stores the daily bill payment limit.
\nField Number         **040**
\nMnemonic             **BILLPAYLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06640**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nEnter the positive the daily bill payment limit.
\n
`)
preferenceRecordFields.set("billpaycountlimit", ` 
\n### Bill Pmt Count Limit
\nThis field stores the maximum number of bill payments allowed per day.
\nField Number         **042**
\nMnemonic             **BILLPAYCOUNTLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06642**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n
\nEnter the maximum number of bill payments (0-9999) allowed per day.
\n
`)
preferenceRecordFields.set("billpayamount", ` 
\n### Bill Pmt Amount
\nThis field stores the total amount of bill payments on the date in the Last Transaction Date field.
\nField Number         **041**
\nMnemonic             **BILLPAYAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **06641**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nThe system updates this field with a positive amount when SymConnect transactions are posted.
\n
`)
preferenceRecordFields.set("billpaycount", ` 
\n### Bill Pmt Count
\nThis field stores the number of bill payments performed on the date in the Last Transaction Date field.
\nField Number         **043**
\nMnemonic             **BILLPAYCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **06643**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n
\nThe system updates this field with a positive value when SymConnect transactions are posted.
\n
`)
preferenceRecordFields.set("depmax", ` 
\n### Maximum Deposit
\nThis field stores the maximum amount allowed in a single deposit.
\nField Number         **044**
\nMnemonic             **DEPMAX**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06644**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nEnter the maximum positive amount allowed in a single deposit.
\n
`)
preferenceRecordFields.set("deplimit", ` 
\n### Deposit Limit
\nThis field stores the maximum amount of total deposits allowed per day.
\nField Number         **045**
\nMnemonic             **DEPLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **06645**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nEnter the maximum positive amount of total deposits allowed per day.
\n
`)
preferenceRecordFields.set("depcountlimit", ` 
\n### Deposit Count Limit
\nThis field stores the maximum number of deposits allowed per day.
\nField Number         **047**
\nMnemonic             **DEPCOUNTLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06647**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n
\nEnter the maximum number of deposits (0-9999) allowed per day.
\n
`)
preferenceRecordFields.set("depamount", ` 
\n### Deposit Amount
\nThis field stores the total deposit amount on the date in the Last Transaction Date field.
\nField Number         **046**
\nMnemonic             **DEPAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **06646**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n
\nThe system updates this field with a positive amount when SymConnect transactions are posted.
\n
`)
preferenceRecordFields.set("depcount", ` 
\n### Deposit Count
\nThis field stores the number of deposits performed on the date in the Last Transaction Date field.
\nField Number         **048**
\nMnemonic             **DEPCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **06648**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n
\nThe system updates this field with a positive value when SymConnect transactions are posted.
\n
`)
preferenceRecordFields.set("locator", ` 
\n### Locator
\nThis field stores a unique number within each Preference record set that can be used as a unique identification of this record.
\nField Number         **049**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **06649**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n
\nThe system automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
\n
`)
preferenceRecordFields.set("prevhbpassword", ` 
\n### Previous HB Password 01 - Previous HB Password 24
\nThese fields store the past 24 HB Password and Second HB Password field values. Each field stores the full password if it is in clear text or hashed with an MD5 hashing method.
\nField Number         **070:1-070:24**
\nMnemonic             **PREVHBPASSWORD:1 - PREVHBPASSWORD:24**
\nData Type            **40 Characters**
\nSource               **System-entered**
\nHelp File            **06670**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n
\nFor the advance password hashing option, each field stores the first part of the password and the other password parts are stored in HB Previous Password Hash 2(24)–HB Previous Password Hash 4(24) fields.
\n
\nYou cannot read or update these fields.
\n
`)
preferenceRecordFields.set("hbpasswordmode", ` 
\n### HB Password Mode
\nThis field stores a code that indicates the format the system uses to store a member's password.
\nField Number         **073**
\nMnemonic             **HBPASSWORDMODE**
\nData Type            **Code to 2**
\nSource               **System-entered**
\nHelp File            **06673**
\nDefault Control      **No**
\nDefault Value **2**
\n
\n#### Data Type Descriptions
\n##### (0) Do Not Hash Passwords
\n   The system assumes that the value stored in the HB Password field is the home banking password.##### (1) Use Modified MD5 Hash
\n   The system hashes the new value stored in the HB Password field with a modified MD5 hash.##### (2) Use Advance Hash
\n   The system hashes the new value stored in the HB Password field with an advanced hash.
\n   
\n       - SymConnect or SymXchange applications and PowerOn specfiles cannot read passwords that are stored with advanced password hashing. As a result, the system displays only the masking characters when you use SymConnect or SymXchange applications or PowerOn specfiles to read the field.
\n
`)
preferenceRecordFields.set("hbpasswordmode2", ` 
\n### Second HB Password Mode
\nThis field stores a code that indicates the format the system uses to store a member's second password.
\nField Number         **074**
\nMnemonic             **HBPASSWORDMODE2**
\nData Type            **Code to 2**
\nSource               **System-entered**
\nHelp File            **06674**
\nDefault Control      **No**
\nDefault Value **2**
\n
\n#### Data Type Descriptions
\n##### (0) Do Not Hash Passwords
\n   The system assumes that the value stored in the Second HB Password field is the home banking password.##### (1) Use Modified MD5 Hash
\n   The system hashes the new value stored in the Second HB Password field with a modified MD5 hash.##### (2) Use Advance Hash
\n   The system hashes the new value stored in the Second HB Password field with an advanced hash.
\n   
\n       - SymConnect or SymXchange applications and PowerOn specfiles cannot read passwords that are stored with advanced password hashing. As a result, the system displays only the masking characters when you use SymConnect or SymXchange applications or PowerOn specfiles to read the field.
\n
`)
preferenceRecordFields.set("audioaccessmode", ` 
\n### Audio Access Code Mode
\nThis field stores a code that indicates the format the system uses to store a member's audio access code.
\nField Number         **075**
\nMnemonic             **AUDIOACCESSMODE**
\nData Type            **Code to 2**
\nSource               **System-entered**
\nHelp File            **06675**
\nDefault Control      **No**
\nDefault Value **2**
\n
\n#### Data Type Descriptions
\n##### (0) Do Not Hash Passwords
\n   The system assumes that the value stored in the Audio Access Code field is the audio access code.##### (1) Use Modified MD5 Hash
\n   The system hashes the new value stored in the Audio Access Code field with a modified MD5 hash.##### (2) Use Advance Hash
\n   The system hashes the new value stored in the Audio Access Code field with an advanced hash.
\n   
\n       - SymConnect or SymXchange applications and PowerOn specfiles cannot read passwords that are stored with advanced password hashing. As a result, the system displays only the masking characters when you use SymConnect or SymXchange applications or PowerOn specfiles to read the field.
\n
`)
preferenceRecordFields.set("audioaccessmode2", ` 
\n### Second Audio Access Code Mode
\nThis field stores a code that indicates the format the system uses to store a member's second audio access code.
\nField Number         **076**
\nMnemonic             **AUDIOACCESSMODE2**
\nData Type            **Code to 2**
\nSource               **System-entered**
\nHelp File            **06676**
\nDefault Control      **No**
\nDefault Value **2**
\n
\n#### Data Type Descriptions
\n##### (0) Do Not Hash Passwords
\n   The system assumes that the value stored in the Second Audio Access Code field is the audio access code.##### (1) Use Modified MD5 Hash
\n   The system hashes the new value stored in the Second Audio Access Code field with a modified MD5 hash.##### (2) Use Advance Hash
\n   The system hashes the new value stored in the Second Audio Access Code field with an advanced hash.
\n   
\n       - SymConnect or SymXchange applications and PowerOn specfiles cannot read passwords that are stored with advanced password hashing. As a result, the system displays only the masking characters when you use SymConnect or SymXchange applications or PowerOn specfiles to read the field.
\n
`)
preferenceRecordFields.set("prevhbpasswordmode", ` 
\n### HB Previous Password Mode 01 - HB Previous Password Mode 24
\nThese fields store a code for the past 24 HB Password Mode and Second HB Password Mode field values that indicate the format the system used to store each past home banking password.
\nField Number         **077:1-077:24**
\nMnemonic             **PREVHBPASSWORDMODE:1 - PREVHBPASSWORDMODE:24**
\nData Type            **Code to 2**
\nSource               **System-entered**
\nHelp File            **06677**
\nDefault Control      **No**
\nDefault Value **2**
\n
\n#### Data Type Descriptions
\n##### (0) Do Not Hash Passwords
\n   The system assumes that the values stored in the HB Password or Second HB Password field is the home banking password.##### (1) Use Modified MD5 Hash
\n   The system hashes the new values stored in the HB Password or Second HB Password field with a modified MD5 hash.##### (2) Use Advance Hash
\n   The system hashes the new values stored in the HB Password or Second HB Password field with an advanced hash.
\n   
\n       - SymConnect or SymXchange applications and PowerOn specfiles cannot read passwords that are stored with advanced password hashing. As a result, the system displays only the masking characters when you use SymConnect or SymXchange applications or PowerOn specfiles to read the field.
\n
\nYou cannot update these fields.
`)
