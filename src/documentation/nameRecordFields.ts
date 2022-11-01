export const nameRecordFields = new Map<string, string>()
nameRecordFields.set("title", ` 
\n### Title
\n
\n This field stores the title that should precede the name of the person identified in this Name record.
\nField Number         **010**
\nMnemonic             **TITLE**
\nData Type            **8 Characters**
\nSource               **User-entered**
\nHelp File            **00110**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter any title (up to 8 characters) that should precede the name of the person identified in the Name record. For example, MR, MS, or DR.
`)
nameRecordFields.set("first", ` 
\n### First Name
\n
\n This field stores the first name of the person identified in this Name record.
\nField Number         **011**
\nMnemonic             **FIRST**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **00111**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the first name (up to 20 characters) of the person identified in the Name record.
`)
nameRecordFields.set("middle", ` 
\n### Middle Name
\n
\n This field stores the middle name or middle initial of the person identified in the Name record.
\nField Number         **012**
\nMnemonic             **MIDDLE**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **00112**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the middle name (up to 10 characters) or middle initial of the person identified in the Name record.
`)
nameRecordFields.set("last", ` 
\n### Last Name/Non Indiv Name
\n
\n This field stores the last name of the person or non-individual name identified in the Name record.
\nField Number         **013**
\nMnemonic             **LAST**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00113**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the last name (up to 40 characters) of the person identified in the Name record.
\n
\n***Important:***  If the Name Format field value is set to (1) Non-Individual, the Last Name field displays as Non Indiv Name and the Title, First Name, Middle Name, and Suffix fields are blank and not displayed. If you enter more than 40 characters (up to 80 characters) in the Non Indiv Name field, the second 40 characters are stored in the Extended Name field. Hover the cursor over this field to see the full Last Name/Non Indiv Name field value.
\n***Important:***  You cannot create a Name record without entering a last or non-individual name in this field. If you do not enter a last name, the system displays the following message and does not allow you to save the Name record until you have entered a last name:
\nLast name cannot be blank
\n
\nYou can enter up to 40 characters in this field and the system warns you if a member's full name is longer than 40 characters (the total of the characters in these fields): Title, First Name, Middle Name, and Last Name). When it prints the address, the system cuts off any part of the full name that exceeds 40 characters.
\n
\n***Important:***  For any Name record associated with an account with a value in the Account record Membership Status of Credit Union, the name of the Last Name field displays as Credit Union Name.
`)
nameRecordFields.set("suffix", ` 
\n### Suffix
\n
\n This field stores the suffix that should follow the name of the person identified in the Name record.
\nField Number         **014**
\nMnemonic             **SUFFIX**
\nData Type            **4 Characters**
\nSource               **User-entered**
\nHelp File            **00114**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter any suffix (up to 4 characters) that should follow the name of the person identified in the Name record. For example, JR or SR.
\n
\nThe following values appear on the Credit Report Journal:
\n   - J = Junior
\n   - S = Senior
\n   - 2 = II
\n   - 3 = III
\n   - 4 = IV
\n   - 5 = V
\n   - 6 = VI
\n   - 7 = VII
\n   - 8 = VIII
\n   - 9 = IX
`)
nameRecordFields.set("nameformat", ` 
\n### Name Format
\n
\n This field stores a code that specifies whether the name is for an individual or a not.
\nField Number         **064**
\nMnemonic             **NAMEFORMAT**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00165**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\n#### Data Type Descriptions
\n##### (0) Individual
\n   The Last Name, Title, First Name, Middle Name, and Suffix fields are displayed for update.
\n       - Important: Choose this option to update the First Name, Middle Name, Suffix, and Title fields. You will not be able to update these fields if you choose the (1) Non-Individual) option.
\n##### (1) Non-Individual
\n   The Last Name field displays as Non Indiv Name and the Title, First Name, Middle Name, and Suffix fields are blank and not displayed. For any Non Indiv Name entry longer than 40 characters, the extra characters are populated into the Extended Name field and all entered characters appear in the Non Indiv Name field in the system.
\n       - Important: Choose this option to update the Extended Name field. You will not be able to update this field if you choose the (0) Individual option.
`)
nameRecordFields.set("preferredcontact", ` 
\n### Preferred Contact
\n
\n This field contains the computed data that you selected in the Preferred Contact Method field.
\nField Number         **810**
\nMnemonic             **PREFERREDCONTACT**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **58203**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nThis field is a calculated field, based on the options you selected in the Preferred Contact Method field, as follows:
\n   - Option	Description	Calculated Field Value
\n   - 0	Not Specified (default)	Not Specified: <home phone>
\n   - 1	Call Home Phone	Phone: <home phone>
\n   - 2	Call Work Phone	Phone: <work phone> [<extension>]
\n   - 3	Call Mobile Phone	Phone: <mobile phone>
\n   - 4	Page	Page: <pager phone>
\n   - 5	Text Message to Home Phone	Text: <home phone>
\n   - 6	Text Message to Mobile Phone	Text: <mobile phone>
\n   - 7	Email to Primary Email Address	<primary email address>
\n   - 8	Email to Alternate Email Address	<alternate email address>
\n   - 9	Mail	Mail
\n
\nYou cannot access this field for file maintenance.
`)
nameRecordFields.set("homephone", ` 
\n### Home Phone
\n
\n This field stores the home telephone number of the person identified in the Name record.
\nField Number         **020**
\nMnemonic             **HOMEPHONE**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **00120**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the home telephone number (up to 16 characters) of the person identified in the Name record.
\n
\nYou can enter domestic phone numbers in the following formats: xxxxxxx, xxx-xxxx, xxxxxxxxxx, or xxx-xxx-xxxx, where x represents a digit. The system automatically reformats these entries into the standard formats (including dashes and leading blanks, designated by underscore here) when necessary. For example:
\n   - 5426700         becomes  ____542-6700
\n   - 542-6700        becomes  ____542-6700
\n   - 6195426700      becomes  619-542-6700
\n   - 619-542-6700    becomes  619-542-6700
\nForeign phone numbers are free format. Phone numbers are considered to be foreign if the Phone Type field value is set to (1) Foreign. Although the system does not check the format, we recommend that you enter foreign phone numbers in the following format:
\n   - <Country Code>-<city code>-<phone number>
`)
nameRecordFields.set("workphone", ` 
\n### Work Phone
\n
\n This field stores the business telephone number of the person identified in the Name record.
\nField Number         **022**
\nMnemonic             **WORKPHONE**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **00122**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the business telephone number (up to 16 characters) of the person identified in the Name record.
\n
\nYou can enter domestic phone numbers in the following formats: xxxxxxx, xxx-xxxx, xxxxxxxxxx, or xxx-xxx-xxxx, where x represents a digit. The system automatically reformats these entries into the standard formats (including dashes and leading blanks, designated by underscore here) when necessary. For example:
\n   - 5426700         becomes  ____542-6700
\n   - 542-6700        becomes  ____542-6700
\n   - 6195426700      becomes  619-542-6700
\n   - 619-542-6700    becomes  619-542-6700
\nForeign phone numbers are free format. Phone numbers are considered to be foreign if the Phone Type field value is set to (1) Foreign. Although the system does not check the format, we recommend that you enter foreign phone numbers in the following format:
\n   - <Country Code>-<city code>-<phone number>
`)
nameRecordFields.set("workphoneextension", ` 
\n### Work Phone Ext
\n
\n This field stores the business telephone extension for the person identified in the Name record.
\nField Number         **028**
\nMnemonic             **WORKPHONEEXTENSION**
\nData Type            **6 Characters**
\nSource               **User-entered**
\nHelp File            **00128**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the business telephone extension (up to 6 digits) for the person identified in the Name record. the system automatically displays the Work Phone Ext field value with the Work Phone field value during account inquiries.
`)
nameRecordFields.set("mobilephone", ` 
\n### Mobile Phone
\n
\n This field stores the number for the member's cell phone or other mobile phone device (if any).
\nField Number         **039**
\nMnemonic             **MOBILEPHONE**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **00139**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the number (up to 16 characters) for the member's cell phone or other mobile phone device (if any). For information on formatting for this field, see the Home Phone field description.
`)
nameRecordFields.set("phonetype", ` 
\n### Phone Type
\n
\n This field stores a code that specifies whether the phone number field values are a domestic or foreign phone number type.
\nField Number         **076**
\nMnemonic             **PHONETYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00177**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\n#### Data Type Descriptions
\n##### (0) Domestic
\n   Domestic phone numbers are in the following formats: xxxxxxx, xxx-xxxx, xxxxxxxxxx, or xxx-xxx-xxxx, where x represents a digit. The system automatically reformats these entries into the standard formats (including dashes and leading blanks) when necessary.
\n       - 
\n       - The system verifies that the Mobile Phone, Pager Number, Home Phone, Work Phone, and Work Phone Ext fields are in the proper domestic format. If the pager and phone fields are not a domestic format, the system replaces the field contents with blanks. Change the field values to a domestic format before changing this field from (1) Foreign to (0) Domestic.
\n       - 
\n       - Tip: Canadian phone numbers are considered domestic.
\n##### (1) Foreign
\n   Foreign phone numbers are free format. Although the system does not check the format, we recommend that you enter foreign phone numbers in the following format:
\n       - <Country Code>-<city code>-<phone number>
`)
nameRecordFields.set("pagernumber", ` 
\n### Pager Number
\n
\n This field stores the number for a member's pager (if any).
\nField Number         **040**
\nMnemonic             **PAGERNUMBER**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **00140**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the number (up to 16 characters) for a member's pager (if any). For information on formatting for this field, see the Home Phone field description.
`)
nameRecordFields.set("email", ` 
\n### E-Mail Address
\n
\n This field stores the email address of the person identified in this Name record.
\nField Number         **034**
\nMnemonic             **EMAIL**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00134**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the email address (up to 40 characters) of the person identified in this Name record. You can enter this address in lowercase letters.
`)
nameRecordFields.set("altemail", ` 
\n### Alt E-Mail Address
\n
\n This field stores an alternate email address of the person identified in this Name record.
\nField Number         **037**
\nMnemonic             **ALTEMAIL**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00137**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nYou can enter an alternate email address (up to 40 characters) for the person identified in this Name record. You can enter this address in lowercase letters.
`)
nameRecordFields.set("preferredcontactmethod", ` 
\n### Preferred Contact Method
\n
\n This field contains a code that indicates how the member wants to receive information from the credit union.
\nField Number         **119**
\nMnemonic             **PREFERREDCONTACTMETHOD**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **31626**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nUse the drop-down list to select the option to indicate how the member wants to receive information from the credit union, as follows:
\n   - Option	Description	Calculated Field Value
\n   - 0	Not Specified (default)	Not Specified: <home phone>
\n   - 1	Call Home Phone	Phone: <home phone>
\n   - 2	Call Work Phone	Phone: <work phone> [<extension>]
\n   - 3	Call Mobile Phone	Phone: <mobile phone>
\n   - 4	Page	Page: <pager phone>
\n   - 5	Text Message to Home Phone	Text: <home phone>
\n   - 6	Text Message to Mobile Phone	Text: <mobile phone>
\n   - 7	Email to Primary Email Address	<primary email address>
\n   - 8	Email to Alternate Email Address	<alternate email address>
\n   - 9	Mail	Mail
`)
nameRecordFields.set("dbatitle", ` 
\n### DBA Title
\n
\n This field stores any title that should precede the name of the DBA (doing business as) person in the Name record.
\nField Number         **103**
\nMnemonic             **DBATITLE**
\nData Type            **8 Characters**
\nSource               **User-entered**
\nHelp File            **31608**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter any title (up to 8 characters) that should precede the name of the DBA person in the Name record.
\n
\nThis field is only used by CTR processing and this information is not searched by lookup or printed on member statements.
`)
nameRecordFields.set("dbafirst", ` 
\n### DBA First Name
\n
\n This field stores the first name of the DBA (doing business as) person identified in the Name record.
\nField Number         **104**
\nMnemonic             **DBAFIRST**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **31609**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the first name (up to 20 characters) of the DBA person identified in the Name record.
\n
\nThis field is only used by CTR processing and this information is not searched by lookup or printed on member statements.
`)
nameRecordFields.set("dbamiddle", ` 
\n### DBA Middle Name
\n
\n This field stores the middle name or middle initial of the DBA (doing business as) person identified in the Name record.
\nField Number         **105**
\nMnemonic             **DBAMIDDLE**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **31610**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the middle name (up to 10 characters) or middle initial of the DBA person identified in the Name record.
\n
\nThis field is only used by CTR processing and this information is not searched by lookup or printed on member statements.
`)
nameRecordFields.set("dbalast", ` 
\n### DBA Last Name/Non Indiv Name
\n
\n This field stores the last name of the DBA (doing business as) information identified in the Name record.
\nField Number         **106**
\nMnemonic             **DBALAST**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **31611**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the last name (up to 40 characters) of the DBA information identified in the Name record.
\n
\n***Important:***  If the DBA Name Format field value is set to (1) Non-Individual, the DBA Last Name field displays as DBA Non Indiv Name and the DBA Title, DBA First Name, DBA Middle Name, and DBA Suffix fields are blank and not displayed. If you enter more than 40 characters (up to 80 characters) in DBA Non Indiv Name, the second 40 characters are stored in the DBA Extended Name field. Hover the cursor over this field to see the full DBA Last Name/Non Indiv Name field value.
\n
\nThis field is only used by CTR processing and this information is not searched by lookup or printed on member statements.
`)
nameRecordFields.set("dbasuffix", ` 
\n### DBA Suffix
\n
\n This field stores any suffix that should follow the DBA (doing business as) person identified in the Name record.
\nField Number         **107**
\nMnemonic             **DBASUFFIX**
\nData Type            **4 Characters**
\nSource               **User-entered**
\nHelp File            **31612**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter any suffix (up to 4 characters) that should follow the DBA person identified in the Name record.
\n
\nThis field is only used by CTR processing and this information is not searched by lookup or printed on member statements.
`)
nameRecordFields.set("dbanameformat", ` 
\n### DBA Name Format
\n
\n This field stores a code that specifies whether the DBA (doing business as) name is for an individual or a not.
\nField Number         **102**
\nMnemonic             **DBANAMEFORMAT**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31607**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\n#### Data Type Descriptions
\n##### (0) Individual
\n   The DBA Last Name, DBA Title, DBA First Name, DBA Middle Name, and DBA Suffix fields are displayed for update.
\n       - Important: Choose this option to update the DBA First Name, DBA Middle Name, DBA Suffix, and DBA Title fields. You will not be able to update these fields if you choose the (1) Non-Individual) option.
\n##### (1) Non-Individual
\n   The DBA Last Name field displays as DBA Non Indiv Name and the DBA Title, DBA First Name, DBA Middle Name, and DBA Suffix fields are blank and not displayed. For any DBA Non Indiv Name entry longer than 40 characters, the extra characters are populated into the DBA Extended Name field and all entered characters appear in the DBA Non Indiv Name field in the system.
\n       - Important: Choose this option to update the DBA Extended Name field. You will not be able to update this field if you choose the (0) Individual option.
\n
\nThis field is only used by CTR processing and this information is not searched by lookup or printed on member statements.
`)
nameRecordFields.set("birthdate", ` 
\n### Birth Date
\n
\n This field stores the birth date of the person identified in the Name record.
\nField Number         **009**
\nMnemonic             **BIRTHDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00109**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the birth date of the person identified in the Name record.
`)
nameRecordFields.set("deathdate", ` 
\n### Death Date
\n
\n This field stores the date of death in the primary Name record, or in the Share Name record if the tax-deferred share is not owned by the primary member.
\nField Number         **030**
\nMnemonic             **DEATHDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00130**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nThis field is used primarily to report the death of an owner of a tax-deferred share. When you are notified of the death of the owner of a tax-deferred share, you must do the following:
\n   - Enter the date of death in this field in the primary Name record, or in the Share Name record if the tax-deferred share is not owned by the primary member (for example, if the share is a spousal IRA).
\n   - Select (2) Decedent SSN/TIN Override at the SSN/TIN Override field.
\n
\nIf the Death Date field is populated, the system ignores the Mail Override field when it is set to (1) Overrides primary mailing address. If users want to continue to send mail to the address on the Name record, they must clear the Death Date field in this record.
\n
\nFor additional steps to take at the death of the owner of a tax-deferred share, see Distributions Due to Death.
`)
nameRecordFields.set("sex", ` 
\n### Sex
\n
\n This field stores a character that identifies the sex of the person identified in the Name record.
\nField Number         **109**
\nMnemonic             **SEX**
\nData Type            **1 Character**
\nSource               **User-entered**
\nHelp File            **31616**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
`)
nameRecordFields.set("mothersmaidenname", ` 
\n### Mother's Maiden Name
\n
\n This field stores the maiden name of the mother of the person identified in this Name record.
\nField Number         **035**
\nMnemonic             **MOTHERSMAIDENNAME**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **00135**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the maiden name of the mother (up to 20 characters) of the person identified in this Name record.
`)
nameRecordFields.set("ssn", ` 
\n### SSN/TIN
\n
\n This field stores the individual SSN (Social Security Number), ITIN (Individual Taxpayer Identification Number), or the organizational EIN (Employer Identification Number) of the person identified in the Name record.
\nField Number         **021**
\nMnemonic             **SSN**
\nData Type            **9 Characters**
\nSource               **User-entered**
\nHelp File            **00121**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the individual SSN, ITIN, or EIN (up to 9 characters) of the person identified in the Name record.
\n
\n***Important:***  You can revise but not delete this field if the Name Type field value is (0) Primary.
\n***Important:***  When you create an account through SymConnect or the Perform FM from PowerOn Output option of the Miscellaneous Processing batch program, the system populates this field with the null value of 888888888, for the Primary Name record created. You can then edit to change to a valid Social Security Number or Tax Identification Number.
`)
nameRecordFields.set("ssntype", ` 
\n### SSN/TIN Type
\n
\n This field stores a code that identifies the type of number in the SSN/TIN field in the Name record.
\nField Number         **006**
\nMnemonic             **SSNTYPE**
\nData Type            **Code to 6**
\nSource               **User-entered**
\nHelp File            **00106**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\n#### Data Type Descriptions
\n##### (0) Individual SSN
\n   The SSN/TIN field contains an individual Social Security Number.##### (1) Organization EIN
\n   The SSN/TIN field contains an organizational Employer Identification Number (EIN).##### (2) EIN - Do not report
\n   The SSN/TIN field contains an organizational EIN that should not be reported to the IRS.
\n       - Important: Be extremely careful when using this option.
\n##### (3)
\n   Not used.##### (4) ITIN
\n   The SSN/TIN field contains the Individual Taxpayer Identification Number (ITIN) of a resident who is not a U.S. citizen.
\n       - Important: The IRS issues ITINs to foreign nationals and others who have federal tax reporting or filing requirements and do not qualify for SSNs. A non-resident alien individual not eligible for an SSN, who is required to file a U.S. tax return only to claim a refund of tax under the provisions of a U.S. tax treaty, needs an ITIN. Examples of individuals who need ITINs include:
\n       - Non-resident alien filing a U.S. tax return and not eligible for an SSN
\n       - U.S. resident alien (based on days present in the United States) filing a U.S. tax return and not eligible for an SSN
\n       - Dependent or spouse of a U.S. citizen/resident alien
\n       - Dependent or spouse of a non-resident alien visa holder
\n       - 
\n       - When a member has an ITIN and a loan, if the SSN/TIN Type field value is changed to (4) ITIN, the system reports the loan as referenced in the CDIA 2017 Credit Reporting Resource Guide(R).
\n##### (5)
\n   Reserved for future use.##### (6)
\n   Reserved for future use.##### (7)
\n   Reserved for future use.##### (8) Foreign - Do not report
\n   The SSN/TIN field contains either of the following:
\n       - The Social Security Number or TIN of a foreign national whose account should not be reported to the IRS
\n       - The Social Security Number, Individual Taxpayer Identification Number, or Employer Identification Number of any person or corporation whose account should not be reported to the IRS
\n       - Important: Be extremely careful when using this option.
\n##### (9) Foreign individual SSN
\n   The SSN/TIN field contains a Social Security Number or Individual Taxpayer Identification Number for a foreign national whose account should be reported to the IRS.
\n       - 
\n       - You can determine which option to use by checking the address of the country of permanent residence on IRS Form W-8 (Certificate of Foreign Status).
`)
nameRecordFields.set("uspersonflag", ` 
\n### U.S. Person Flag
\n
\n This field specifies whether the person defined in this record is a citizen of the United States, or whether the business identified is established or organized under the laws of a state or the United States. Choose one of the following:
\nField Number         **041**
\nMnemonic             **USPERSONFLAG**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00141**
\nDefault Control      **No**
\nDefault Value **1**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\n#### Data Type Descriptions
\n##### (0) Not a U.S. Person
\n   The person or business defined in this record does not have a valid SSN, TIN, or EIN.##### (1) U.S. Person
\n   The person (a United States citizen) or business defined in this record has a valid SSN, TIN, or EIN.
\n`)
nameRecordFields.set("employername", ` 
\n### Current Employer
\n
\n This field stores the name of the employer of the person identified in this Name record.
\nField Number         **036**
\nMnemonic             **EMPLOYERNAME**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00136**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the name of the employer (up to 40 characters) of the person identified in this Name record.
`)
nameRecordFields.set("occupation", ` 
\n### Occupation
\n
\n This field stores the current occupation of the person identified in this Name record.
\nField Number         **049**
\nMnemonic             **OCCUPATION**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00149**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the current occupation (up to 40 characters) of the person identified in this Name record.
`)
nameRecordFields.set("currgrossmonthpay", ` 
\n### Curr Gross Mo Pay
\n
\n This field stores the members' current monthly gross pay.
\nField Number         **084**
\nMnemonic             **CURRGROSSMONTHPAY**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00185**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the members' current monthly gross pay.
\n
\n***Important:***  This field contains a masked value of 0.00 if the Restricted Access field in the Account record contains a value of (1) Restricted, (2) Sensitive, (3) Employee, (4) Employee Family, (5) Employee Sensitive, or (6) Employee Family Sensitive and you have file maintenance privileges but not inquiry privileges for those types of accounts. You should ensure that these account maskings are aligned with your current restricted account access policies.
`)
nameRecordFields.set("currnetmonthpay", ` 
\n### Curr Net Mo Pay
\n
\n This field stores the member's current monthly net pay.
\nField Number         **085**
\nMnemonic             **CURRNETMONTHPAY**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00186**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the member's current monthly net pay.
\n
\n***Important:***  This field contains a masked value of 0.00 if the Restricted Access field in the Account record contains a value of (1) Restricted, (2) Sensitive, (3) Employee, (4) Employee Family, (5) Employee Sensitive, or (6) Employee Family Sensitive and you have file maintenance privileges but not inquiry privileges for those types of accounts. You should ensure that these account maskings are aligned with your current restricted account access policies.
`)
nameRecordFields.set("currmonthpaychgdate", ` 
\n### Curr Mo Pay Last Updated
\n
\n This field contains the computed date when you last performed file maintenance on the Curr Gross Mo Pay or Curr Net Mo Pay fields.
\nField Number         **807**
\nMnemonic             **CURRMONTHPAYCHGDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **00187**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAlthough the value for this field appears in the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nWhen you perform file maintenance on the Curr Gross Mo Pay or Curr Net Mo Pay fields, the system updates this field for all associated Name records to the current system date. If this field changes due to a merge (setting number links on one Name record to the same as another Name record), affecting only one record, then this field is updated only for the affected record.
\n
\nYou cannot access this field for file maintenance.
`)
nameRecordFields.set("restrict", ` 
\n### Restricted Access
\n
\n This field stores a code that identifies the type of number in the SSN/TIN field in the Name record.
\nField Number         **097**
\nMnemonic             **RESTRICT**
\nData Type            **Code to 6**
\nSource               **User-entered**
\nHelp File            **00198**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nThis field works similar to the Restricted Access field in the Account record.
\n
\n#### Data Type Descriptions
\n##### (0) Normal
\n   The name is not restricted. Normal Name records can be accessed for inquiries (including inquiries on the imaging system), file maintenance, or transactions.##### (1) Restricted
\n   The name is restricted. The user's Acct Restricted privileges determine whether the user can access restricted Name records.##### (2) Sensitive
\n   The name is sensitive. The system automatically records any attempted access to a sensitive Name record on the File Maintenance Journal. The user's Acct Sensitive privileges determine whether the user can access sensitive Name records for inquiries, file maintenance, and transactions.##### (3) Employee
\n   The name belongs to a credit union employee.
\n       - If an employee name does not appear in a user's Restricted Accounts list, the user's Employee Acct Other privileges determine whether the user can access the Name record for inquiries, file maintenance, and transactions.
\n       - If an employee name appears in a user's Restricted Accounts list, the user's Employee Acct Restricted privileges determine whether the user can access the Name record for inquiries, file maintenance, and transactions.
\n##### (4) Employee Family
\n   The name belongs to the family of a credit union employee.
\n       - If an employee family name does not appear in a user's Restricted Accounts list, the user's Employee Acct Family privileges determine whether the user can access the Name record for inquiries, file maintenance, and transactions.
\n       - If an employee family name appears in a user's Restricted Accounts list, the user's Employee Acct Restricted privileges determine whether the user can access the Name record for inquiries, file maintenance, and transactions.
\n##### (5) Employee Sensitive
\n   The name is a sensitive name belonging to a credit union employee. The system automatically records any attempted access to an employee sensitive Name record on the File Maintenance Journal.
\n       - If an employee sensitive name does not appear in a user's Restricted Accounts list, the user's Employee Acct Sensitive privileges determine whether the user can access the Name record for inquiries, file maintenance, and transactions.
\n       - If an employee sensitive name appears in a user's Restricted Accounts list, the user's Employee Acct Restricted privileges determine whether the user can access the Name record for inquiries, file maintenance, and transactions.
\n##### (6) Employee Sensitive Family
\n   The name is a sensitive name belonging to the family of a credit union employee. The system automatically records any attempted access to an employee sensitive family Name record on the File Maintenance Journal.
\n       - If an employee sensitive family name does not appear in a user's Restricted Accounts list, the user's Employee Acct Sens Family privileges determine whether the user can access the Name record for inquiries, file maintenance, and transactions.
\n       - If an employee sensitive family name appears in a user's Restricted Accounts list, the user's Employee Acct Restricted privileges determine whether the user can access the Name record for inquiries, file maintenance, and transactions.
\nWhen you access information:
\n   - If the account is restricted and the Name is not, the system uses the access defined by the account restriction.
\n   - If the account is not restricted, but the Primary Name is, the system uses the access defined by the Primary Name restriction for the full account access that includes inquiry, FM, and transaction.
\n   - 
\n   - This means that if there is no restriction on the Account record, the account can still be restricted (for inquiry, FM, and transaction) based on the Primary Name record restriction setting. For address view, the primary Name record restriction setting only restricts the primary Name record and not the other Name records in the Account record.
\n   - 
\n   - If there are restrictions for both the Account and for the Primary Name records, the system uses the more restrictive of the two to determine the full account access.
\n   - 
\n   - When the primary Name record restriction setting is used, the view address restriction only applies to the primary Name record and not to the other Name records in the account. Therefore, the only address that is masked is the address of the primary Name record.
\n   - 
\n   - For the individual Name records, other than the Primary Name, this field on the Name record defines the access only to that Name record.
\n   - When you access a Name record, the access is based on the settings for that account and for that particular Name record. For example, if there is no restriction for the Account or for the Member (and Name record), the user has full access, even though another Name linked with the same Member may be in a restricted account.
\n
\nFor more information about this field, see Restricting Account Access.
`)
nameRecordFields.set("mbrstatus", ` 
\n### MBR Status
\n
\n This field stores a code that determines the type of member represented in this Name record.
\nField Number         **070**
\nMnemonic             **MBRSTATUS**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **000171**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\n#### Data Type Descriptions
\n##### (0) Member
\n   This is a credit union member.##### (1) Previous Member
\n   This is a previous credit union member. This designation is treated by the system the same as the (2) Non-Member option.##### (2) Non-Member
\n   This is not a credit union member.##### (3) Prospect
\n   This is to identify a non-member as a prospect.
\n       - 
\n       - You may want to use this option to indicate that this is an individual who comes in to cash checks, or redeem bonds; and that you would like to recruit that individual to become a member. This is not intended to provide the functionality of a large marketing database of prospective members for mail or telephone solicitation. Adding thousands of records for individuals that currently have no relationship with the credit union (for marketing purposes) would have a negative impact on the system response time.
`)
nameRecordFields.set("ctrexempt", ` 
\n### CTR Exempt
\n
\n This field stores a code that specifies whether the account is to be exempt from reporting.
\nField Number         **029**
\nMnemonic             **CTREXEMPT**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00161**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\n#### Data Type Descriptions
\n##### (0) Not Exempt
\n   The account is not exempt from reporting.##### (1) Exempt
\n   The account is exempt from reporting.
\nMember accounts with this field set to (1) Exempt in the Name record (either the primary or joint Account Name record) are excluded from CTRs and indicated on the Excessive Cash: Amounts Over $10,000.00 report with an EXEMPT status. This field is not used for Name records other than the Account Name record.
`)
nameRecordFields.set("lei", ` 
\n### Legal Entity Identifier
\n
\n This field stores the unique alpha-numeric code associated with a single corporate entity for international financial market record keeping.
\nField Number         **125**
\nMnemonic             **LEI**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **31634**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the unique alpha-numeric code associated with a single corporate entity for international financial market record keeping.
`)
nameRecordFields.set("beneficialowner", ` 
\n### Beneficial Owner Type
\n
\n This field stores a code that identifies if this person is a beneficial owner of a legal entity.
\nField Number         **126**
\nMnemonic             **BENEFICIALOWNER**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **31635**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe beneficial owner of a legal entity is any individual who fits at least one part of the following description:
\n   - Directly or indirectly owns 25% or more of the equity interests of the legal entity
\n   - Has significant responsibility to control, manage, or direct that legal entity
\n#### Data Type Descriptions
\n##### (0) None
\n   This person is not a beneficial owner of the legal entity.##### (1) Owner
\n   This person is a beneficial owner of the legal entity.##### (2) Control
\n   This person is a controller of the legal entity.##### (3) Owner and Control
\n   This person is a beneficial owner and controller of the legal entity.
\n`)
nameRecordFields.set("beneficialpercent", ` 
\n### Beneficial Owner Percentage
\n
\n This field stores the percentage of the equity interests of the legal entity customer that this person owns.
\nField Number         **127**
\nMnemonic             **BENEFICIALPERCENT**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **31636**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nEnter the percentage of the equity interests of the legal entity customer that this person owns.
\n
\nA person who, directly or indirectly, owns 25% or more of a legal entity is considered a beneficial owner of that entity.
`)
nameRecordFields.set("irscountrycode", ` 
\n### IRS Country Code
\n
\n This field stores the two-character IRS country code for the member's country of residence.
\nField Number         **110**
\nMnemonic             **IRSCOUNTRYCODE**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **31617**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the two-character IRS country code for the member's country of residence. The IRS's country codes may differ from the ISO 3166 two-character country codes used elsewhere in the system. Refer to the IRS website to retrieve the current country codes from the Form-1042-S instructions.
`)
nameRecordFields.set("nrataxrate", ` 
\n### NRA Tax Rate
\n
\n This field stores the NRA tax rate that applies to a member's tax withholding.
\nField Number         **111**
\nMnemonic             **NRATAXRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **331618**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the NRA tax rate that applies to a member's tax withholding. The system populates this rate in box 3b on the IRS Form 1042-S.
\n
\nThe NRA tax withholding applies to the following account types:
\n   - Individual Retirement Accounts (IRA)
\n   - Roth IRA
\n   - Savings Incentive Match Plan for Employees (SIMPLE) IRA
\n   - Simplified Employer Pension (SEP)
\n   - Keogh
\n   - Conduit IRA
\n   - 401K
\n
\nIf you type 0.000% in this field, the member's distribution is exempt from tax withholdings.
\n
\nThe system does not use the value in this field to calculate the rate of withholding when:
\n   - The Form W-8 On File field value is set to (0) No
\n   - The date in the W-8 Expiration Date field is prior to or equal to the system date
`)
nameRecordFields.set("nraexemptioncode", ` 
\n### NRA Exemption Code
\n
\n This field stores the two-character code that indicates the reason income is exempt from tax withholding.
\nField Number         **112**
\nMnemonic             **NRAEXEMPTIONCODE**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **31619**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nThe system populates this code in box 3a on the IRS Form 1042-S.
\n
\nType one of the following codes:
\n   - 01 Effectively connected income
\n   - 02 Exempt under IRC (other than portfolio interest)
\n   - 03 Income is not from U.S. sources
\n   - 04 Exempt under tax treaty
\n   - 05 Portfolio interest exempt under IRC
\n   - 06 QI that assumes primary withholding responsibility
\n   - 07 WFP or WFT
\n   - 08 U.S. branch treated as U.S. Person
\n   - 09 Territory FI treated as U.S. Person
\n   - 10 QI represents that income is exempt
\n   - 11 QSL that assumes primary withholding
\n   - 12 Payee subjected to chapter 4 withholding
\n
\nThe 04 (Exempt under tax treaty) code is only for tax treaties with zero percent. If the tax treaty percentage is other than zero percent (0.00%), this field should be blank.
`)
nameRecordFields.set("formw8onfile", ` 
\n### Form W-8 On File
\n
\n This field stores a code that indicates whether the credit union has a W-8 form on file for the member.
\nField Number         **113**
\nMnemonic             **FORMW8ONFILE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31620**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   There is no W-8 form on file.
\n       - 
\n       - The system withholds the default tax rate of 30 percent for NRA withholding.
\n##### (1) Yes
\n   There is a W-8 on file.
\n`)
nameRecordFields.set("w8expirationdate", ` 
\n### W-8 Expiration Date
\n
\n This field stores the expiration date of the W-8 form on file for a member that does not have a Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN).
\nField Number         **114**
\nMnemonic             **W8EXPIRATIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31621**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nLeave this field blank when:
\n   - The Form W-8 On File field value is set to (0) No
\n   - The Form W-8 On File field value is set to (1) Yes and the W-8 form does not expire
\n
\nThe system considers the W-8 form expired when the date in this field is prior to or equal to the system date.
`)
nameRecordFields.set("foreigntin", ` 
\n### Foreign TIN
\n
\n This field stores the taxpayer identification number used in the country of residence for tax purposes.
\nField Number         **115**
\nMnemonic             **FOREIGNTIN**
\nData Type            **22 Characters**
\nSource               **User-entered**
\nHelp File            **31622**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the taxpayer identification number (up to 22 characters) used in the country of residence for tax purposes.
`)
nameRecordFields.set("chapter4statuscode", ` 
\n### Chapter 4 Status Code
\n
\n This field stores the 2-character code that indicates the type of recipient.
\nField Number         **118**
\nMnemonic             **CHAPTER4STATUSCODE**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **31625**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nThe system populates the code in box 13c on the 1042-S IRS form.
\n
\nEnter the 2-character Chapter 4 status code. Refer to the IRS document, Instructions for Form 1042-S, for a list of valid codes. See:
\n   - Exemption Codes and Recipient Codes
\n   - Type of Recipient, Withholding Agent, or Intermediary
\n   - Chapter 4 Status Codes
`)
nameRecordFields.set("giin", ` 
\n### GIIN
\n
\n This field stores the recipient Global Intermediary Identification Number (GIIN).
\nField Number         **116**
\nMnemonic             **GIIN**
\nData Type            **19 Characters**
\nSource               **User-entered**
\nHelp File            **31623**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nEnter the recipient GIIN (up to 19 characters). The system populates the characters in box 13h on the 1042-S IRS form if there is a Chapter 4 withholding.
`)
nameRecordFields.set("substantialowner", ` 
\n### Substantial Owner
\n
\n This field stores a code that determines if an entity account holder has documentation as a Foreign Financial Institution (FFI) or Non-Financial Foreign Entity (NFFE).
\nField Number         **117**
\nMnemonic             **SUBSTANTIALOWNER**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31624**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nRefer to the IRS Publication 5124 (FATCA XML file) for more information.
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   The entity account holder does not have documentation as a FFI or NFFE.##### (1) Yes
\n   The entity account holder has documentation as a FFI or NFFE.
\n`)
nameRecordFields.set("lob", ` 
\n### LOB Code
\n
\n This field stores the 2-character code that best describes the applicable limitation on benefits (LOB) category that qualifies the member for requested benefits.
\nField Number         **124**
\nMnemonic             **LOB**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **31632**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nThe system uses the value selected for this field in box 13j on the IRS Form 1042-S.
\n
\nEnter the 2-character LOB code that best describes the applicable category that qualifies the member for requested benefits.
\n
\nFor complete and current LOB codes, check this year's official IRS Instructions for Form 1042-S.
`)
nameRecordFields.set("addresstype", ` 
\n### Address Type
\n
\n This field stores a code that specifies whether the address of the person identified in the Name record is domestic or foreign.
\nField Number         **025**
\nMnemonic             **ADDRESSTYPE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **00125**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member Address record field.
\n
\n#### Data Type Descriptions
\n##### (0) Domestic Address
\n   The address of the person identified in the Name record is in the United States or a territory of the United States, including APO (Army Post Office) addresses.
\n       - 
\n       - If you change this field value from (1) Foreign Address or (2) Foreign Address Zip Last to (0) Domestic Address, the system replaces the contents of the Country and Country Code fields with blanks. When this field value is (0) Domestic Address, the Country and Country Code fields cannot be modified.
\n       - 
\n       - Tip: Canadian phone numbers are considered domestic.
\n##### (1) Foreign Address
\n   The address of the person identified in the Name record is in any country except the United States or a territory of the United States. This selection places the ZIP Code before the city and state in the address line.##### (2) Foreign Address Zip Last
\n   The address of the person identified in the Name record is in any country except the United States or a territory of the United States. This selection places the ZIP Code after the city and state in the address line.***Important:***  This field contains a masked value of 9 if the Restricted Access field value in the Account record contains a value of (1) Restricted, (2) Sensitive, (3) Employee, (4) Employee Family, (5) Employee Sensitive, or (6) Employee Family Sensitive and you have file maintenance privileges but not inquiry privileges for those types of accounts. You should ensure that these account maskings are aligned with your current restricted account access policies.
`)
nameRecordFields.set("street", ` 
\n### Street
\n
\n This field stores the street address of the person identified in the Name record.
\nField Number         **016**
\nMnemonic             **STREET**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00116**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member Address record field.
\n
\nEnter the street address (up to 40 characters) of the person identified in the Name record.
`)
nameRecordFields.set("city", ` 
\n### City
\n
\n This field stores the name of the city where the person identified in the Name record resides.
\nField Number         **017**
\nMnemonic             **CITY**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00117**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member Address record field.
\n
\nEnter the name of the city (up to 40 characters) where the person identified in the Name record resides.
\n
\n***Important:***  Although you can enter up to 40 characters in this field, the total number of characters in the City, State, and Zip Code fields cannot exceed 40 characters when those fields are formatted together as an address line. This ensures that address lines are not cut off when they are printed. If you exceed the 40-character limit, the system displays a warning and does not allow you to proceed to the next Name record file maintenance screen.
`)
nameRecordFields.set("state", ` 
\n### State
\n
\n This field stores the name or postal abbreviation of the state where the person identified in the Name record resides.
\nField Number         **018**
\nMnemonic             **STATE**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **00118**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member Address record field.
\n
\nEnter the name of the state where the person identified in the Name record resides (up to 10 characters). The standard two-character U. S. Postal Service abbreviation is recommended for addresses in the United States.
\n
\nFor domestic addresses (the Address Type field value is (0) Domestic Address), if you do not enter a valid two-character U. S. Postal Service state abbreviation, the message "Invalid" appears as a reminder that you have not entered the state in the recommended format. The system does not check the validity of the state entry for foreign addresses (the Address Type field value is (1) Foreign Address).
\n
\n***Important:*** 
\nThe system verifies the State and Zip Code fields values (when not blank) against each other. If you change the state, you will get an information-only warning indicating that the ZIP Code is incorrect and should be changed. If the Restricted Access field value in the Account record is set to (1) Restricted and the user's Miscellaneous Privileges Acct Restricted Addr View privilege is set to (0) No, the validation for the State and Zip Code fields is disabled.
\nAlthough you can enter up to 10 characters in this field, the total number of characters in the City, State, and Zip Code fields cannot exceed 40 characters when those fields are formatted together as an address line. This ensures that address lines are not cut off when they are printed. If you exceed the 40-character limit, the system displays a warning and does not allow you to proceed to the next Name record file maintenance screen.
`)
nameRecordFields.set("zipcode", ` 
\n### Zip Code
\n
\n This field stores the domestic ZIP code where the person identified in the Name record resides.
\nField Number         **019**
\nMnemonic             **ZIPCODE**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **00119**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member Address record field.
\n
\nWhen the Address Type field value is set to (0) Domestic Address, you can enter a ZIP Code in either standard format (00000 or 00000-0000, including the hyphen). If you enter a ZIP Code that is not valid for the specified state (validates on the first three digits), or if you enter a ZIP Code in an invalid format, the system displays an "Invalid" message as a reminder that you have not entered the ZIP Code correctly.
\n
\n***Important:*** 
\nThe system verifies the State and Zip Code fields values (when not blank) against each other. If you change the state, you get an information-only warning indicating that the ZIP Code is incorrect and should be changed. If the Restricted Access field value in the Account record is set to (1) Restricted and the user's Miscellaneous Privileges Acct Restricted Addr View privilege is set to (0) No, the validation for the State and Zip Code fields is disabled.
\nAlthough you can enter up to 10 characters in this field, the total number of characters in the City, State, and Zip Code fields cannot exceed 40 characters when those fields are formatted together as an address line. This ensures that address lines are not cut off when they are printed. If you exceed the 40-character limit, the system displays a warning and does not allow you to proceed to the next Name record file maintenance screen.
`)
nameRecordFields.set("extraaddress", ` 
\n### Extra Address
\n
\n This field stores extra address information to save with the mailing address of the person identified in the Name record.
\nField Number         **015**
\nMnemonic             **EXTRAADDRESS**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00115**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member Address record field.
\n
\nIn most Name records, you can enter extra address information (up to 40 characters) to save with the mailing address of the person identified in the Name record (for example, a PO Box or building name).
\n
\nThe system generally does not report this portion of the address on IRS tapes or forms unless you answer Y at the Print Extra Address batch question in the IRS Reporting batch program.
\n
\nUse the Extra Information field to store non-address information. If you type BENEF, AS BENEF OF, or BENEFICIARY OF in this field and then press Enter, the system displays this warning:
\n   - Beneficiary belongs in Extra Info field!
`)
nameRecordFields.set("country", ` 
\n### Country
\n
\n This field stores the foreign country where the person identified in the Name record resides.
\nField Number         **032**
\nMnemonic             **COUNTRY**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **00132**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member Address record field.
\n
\nYou can fill in this field (up to 20 characters) if the Address Type field value is set to (1) Foreign Address or (2) Foreign Address Zip Last. This field is added as the last line for foreign addresses.
\n
\nIf the Address Type field value is set to (0) Domestic Address, this field must be blank and cannot be modified.
`)
nameRecordFields.set("countrycode", ` 
\n### Country Code
\n
\n This field stores the 2-character code that best describes the applicable limitation on benefits (LOB) category that qualifies the member for requested benefits.
\nField Number         **033**
\nMnemonic             **COUNTRYCODE**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **00133**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member Address record field.
\n
\nYou can fill in this field when the Address Type field value is set to (1) Foreign Address or (2) Foreign Address Zip Last.
\n
\nNACHA requires the use of ISO country codes for ACH IAT (International ACH Transactions). We recommend that you use the ISO 3166 two-character country code in this field for foreign addresses as shown in the Country Codes table below.
\n
\n##### Country Codes
\n   The following table lists ISO country codes by country code, with the country name on the right:
\n       - AC = Ascension Island
\n       - AD = Andorra
\n       - AE = United Arab Emirates
\n       - AF = Afghanistan
\n       - AG = Antigua & Barbuda
\n       - AI = Anguilla
\n       - AL = Albania
\n       - AM = Armenia
\n       - AN = Netherlands Antilles
\n       - AO = Angola
\n       - AQ = Antarctica
\n       - AR = Argentina
\n       - AS = American Samoa
\n       - AT = Austria
\n       - AU = Australia
\n       - AW = Aruba
\n       - AX = Aland Islands
\n       - AZ = Azerbaijan
\n       - BA = Bosnia and Herzegovina
\n       - BB = Barbados
\n       - BD = Bangladesh
\n       - BE = Belgium
\n       - BF = Burkina Faso
\n       - BG = Bulgaria
\n       - BH = Bahrain
\n       - BI = Burundi
\n       - BJ = Benin
\n       - BL = Saint Barthelemy
\n       - BM = Bermuda
\n       - BN = Brunei Darussalam
\n       - BO = Bolivia, Plurinational State of
\n       - BR = Brazil
\n       - BS = Bahamas
\n       - BT = Bhutan
\n       - BV = Bouvet Island
\n       - BW = Botswana
\n       - BY = Belarus
\n       - BZ = Belize
\n       - CA = Canada
\n       - CC = Cocos (Keeling) Islands
\n       - CD = Congo, The Democratic Republic of the
\n       - CF = Central African Republic
\n       - CG = Congo
\n       - CH = Switzerland
\n       - CI = Cote D'Ivoire (Ivory Coast)
\n       - CK = Cook Islands
\n       - CL = Chile
\n       - CM = Cameroon
\n       - CN = China
\n       - CO = Colombia
\n       - CR = Costa Rica
\n       - CU = Cuba
\n       - CV = Cape Verde
\n       - CX = Christmas Island
\n       - CY = Cyprus
\n       - CZ = Czech Republic
\n       - DE = Germany
\n       - DJ = Djibouti
\n       - DK = Denmark
\n       - DM = Dominica
\n       - DO = Dominican Republic
\n       - DZ = Algeria
\n       - EC = Ecuador
\n       - EE = Estonia
\n       - EG = Egypt
\n       - EH = Western Sahara
\n       - ER = Eritrea
\n       - ES = Spain
\n       - ET = Ethiopia
\n       - FI = Finland
\n       - FJ = Fiji
\n       - FK = Falkland Islands (Malvinas)
\n       - FM = Micronesia, Federated States of
\n       - FO = Faroe Islands
\n       - FR = France
\n       - FX = France, Metropolitan
\n       - GA = Gabon
\n       - GB = Great Britain
\n       - GD = Grenada
\n       - GE = Georgia
\n       - GF = French Guiana
\n       - GG = Guernsey
\n       - GH = Ghana
\n       - GI = Gibraltar
\n       - GL = Greenland
\n       - GM = Gambia
\n       - 	
\n       - GN = Guinea
\n       - GP = Guadeloupe
\n       - GQ = Equatorial Guinea
\n       - GR = Greece
\n       - GS = South Georgia & the South Sandwich Islands
\n       - GT = Guatemala
\n       - GU = Guam
\n       - GW = Guinea-Bissau
\n       - GY = Guyana
\n       - HK = Hong Kong
\n       - HM = Heard Island & McDonald Islands
\n       - HN = Honduras
\n       - HR = Croatia
\n       - HT = Haiti
\n       - HU = Hungary
\n       - ID = Indonesia
\n       - IE = Ireland
\n       - IL = Israel
\n       - IM = Isle of Man
\n       - IN = India
\n       - IO = British Indian Ocean Territory
\n       - IQ = Iraq
\n       - IR = Iran, Islamic Republic of
\n       - IS = Iceland
\n       - IT = Italy
\n       - JE = Jersey
\n       - JM = Jamaica
\n       - JO = Jordan
\n       - JP = Japan
\n       - KE = Kenya
\n       - KG = Kyrgyzstan
\n       - KH = Cambodia
\n       - KI = Kiribati
\n       - KM = Comoros
\n       - KN = Saint Kitts & Nevis
\n       - KP = (North) Korea, Democratic People's Republic of
\n       - KR = (South) Korea, Republic of
\n       - KW = Kuwait
\n       - KY = Cayman Islands
\n       - KZ = Kazakhstan
\n       - LA = Lao People's Democratic Republic
\n       - LB = Lebanon
\n       - LC = Saint Lucia
\n       - LI = Liechtenstein
\n       - LK = Sri Lanka
\n       - LR = Liberia
\n       - LS = Lesotho
\n       - LT = Lithuania
\n       - LU = Luxembourg
\n       - LV = Latvia
\n       - LY = Libyan Arab Jamahiriya
\n       - MA = Morocco
\n       - MC = Monaco
\n       - MD = Moldova, Republic of
\n       - ME = Montenegro
\n       - MF = Saint Martin
\n       - MG = Madagascar
\n       - MH = Marshall Islands
\n       - MK = Macedonia, The Former Yugoslav Republic of
\n       - ML = Mali
\n       - MM = Myanmar
\n       - MN = Mongolia
\n       - MO = Macau
\n       - MP = Northern Mariana Islands
\n       - MQ = Martinique
\n       - MR = Mauritania
\n       - MS = Montserrat
\n       - MT = Malta
\n       - MU = Mauritius
\n       - MV = Maldives
\n       - MW = Malawi
\n       - MX = Mexico
\n       - MY = Malaysia
\n       - MZ = Mozambique
\n       - NA = Namibia
\n       - NC = New Caledonia
\n       - NE = Niger
\n       - NF = Norfolk Island
\n       - NG = Nigeria
\n       - NI = Nicaragua
\n       - NL = Netherlands
\n       - 	
\n       - NO = Norway
\n       - NP = Nepal
\n       - NR = Nauru
\n       - NU = Niue
\n       - NZ = New Zealand
\n       - OM = Oman
\n       - PA = Panama
\n       - PE = Peru
\n       - PF = French Polynesia
\n       - PG = Papua New Guinea
\n       - PH = Philippines
\n       - PK = Pakistan
\n       - PL = Poland
\n       - PM = Saint Pierre & Miquelon
\n       - PN = Pitcairn
\n       - PR = Puerto Rico
\n       - PS = Palestinian Territory, Occupied
\n       - PT = Portugal
\n       - PW = Palau
\n       - PY = Paraguay
\n       - QA = Qatar
\n       - RE = Reunion
\n       - RO = Romania
\n       - RS = Serbia
\n       - RU = Russian Federation
\n       - RW = Rwanda
\n       - SA = Saudi Arabia
\n       - SB = Solomon Islands
\n       - SC = Seychelles
\n       - SD = Sudan
\n       - SE = Sweden
\n       - SG = Singapore
\n       - SH = Saint Helena
\n       - SI = Slovenia
\n       - SJ = Svalbard & Jan Mayen
\n       - SK = Slovakia
\n       - SL = Sierra Leone
\n       - SM = San Marino
\n       - SN = Senegal
\n       - SO = Somalia
\n       - SR = Suriname
\n       - SS = South Sudan
\n       - ST = Sao Tome & Principe
\n       - SV = El Salvador
\n       - SY = Syrian Arab Republic
\n       - SZ = Swaziland
\n       - TC = Turks & Caicos Islands
\n       - TD = Chad
\n       - TF = French Southern Territories
\n       - TG = Togo
\n       - TH = Thailand
\n       - TJ = Tajikistan
\n       - TK = Tokelau
\n       - TL = Timor-Leste
\n       - TM = Turkmenistan
\n       - TN = Tunisia
\n       - TO = Tonga
\n       - TP = East Timor
\n       - TR = Turkey
\n       - TT = Trinidad & Tobago
\n       - TV = Tuvalu
\n       - TW = Taiwan, Province of China
\n       - TZ = Tanzania, United Republic of
\n       - UA = Ukraine
\n       - UG = Uganda
\n       - UM = United States Minor Outlying Islands
\n       - US = United States of America
\n       - UY = Uruguay
\n       - UZ = Uzbekistan
\n       - VA = Holy See (Vatican City State)
\n       - VC = Saint Vincent & the Grenadines
\n       - VE = Venezuela, Bolivarian Republic of
\n       - VG = Virgin Islands, British
\n       - VI = Virgin Islands, US
\n       - VN = Viet Nam
\n       - VU = Vanuatu
\n       - WF = Wallis & Futuna
\n       - WS = Samoa
\n       - XK = Kosovo
\n       - YE = Yemen
\n       - YT = Mayotte
\n       - YU = Yugoslavia
\n       - ZA = South Africa
\n       - ZM = Zambia
\n       - ZW = Zimbabwe
\n
\nIf the Address Type field value is set to (0) Domestic Address, this field must be blank and cannot be modified.
`)
nameRecordFields.set("carrierroute", ` 
\n### Carrier Route
\n
\n This field stores the carrier route number for the person identified in the Name record.
\nField Number         **024**
\nMnemonic             **CARRIERROUTE**
\nData Type            **4 Characters**
\nSource               **User-entered**
\nHelp File            **00124**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nAlthough the value for this field appears in (and can be modified from) the Name record, it is not in the Name record. The value in this field is actually stored in the related Member Address record field.
\n
\nEnter the carrier route number (up to 4 characters) for the person identified in the Name record.
\n
\n***Important:***  The U.S. Postal Service describes a carrier route as:
\n
\n"The addresses to which a carrier delivers mail. In common usage, carrier route includes city routes, rural routes, highway contract routes, post office box sections, and general delivery units."
`)
nameRecordFields.set("membernumlink", ` 
\n### MBR Number Link
\n
\n The system stores a pointer in this field to the MBR Number field in the Member record linked with this Name record.
\nField Number         **082**
\nMnemonic             **MEMBERNUMLINK**
\nData Type            **17 Characters**
\nSource               **System-entered**
\nHelp File            **00183**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nThe system automatically assigns this pointer when you create a Name record. Name information field values, such as the Last Name/Non Indiv Name and First Name, reside in the Member record whose MBR Number field is referenced in this Name record field. Every Name record must be linked to one Member record.
\n
\nYou can perform file maintenance on this field (thus pointing to a different Member record) only by using PowerOn specfiles, batch FM, or SymConnect.
\n
\n***Important:***  If you are performing file maintenance on this field, we recommend that you set the ADDR Number Link field value first, before this field. Otherwise, the link to find the Member Address record may no longer be available. If there is only one Member Address record linked to the Member record being referred to, and if the ADDR Number Link field in the Name record is blank, then also change the ADDR Number Link field in the Name record to reference the one in the Member record. This is particularly important when merging Name records with Non-Account Name records. In that case, if you do not reassign the ADDR Number Link, the address information will be lost.
\nThe system enforces the following rules:
\nThis field must have a value.
\nThis field value must refer to an actual Member record.
\nIf the Name Merge functionality is disabled, or if Member Merge Name Records privilege is set to No for the user or console, the Name record can only be changed to Member records that have the MBR File Type field value set to (2) Non-account or (0) Disconnect. The Name record cannot refer to a Member record with a MBR File Type field value of (1) Account as this would cause a merge situation.
`)
nameRecordFields.set("membernumlinkchgdate", ` 
\n### MBR Number Link Chg Date
\n
\n The system stores the current system date when the MBR Number Link field changes.
\nField Number         **089**
\nMnemonic             **MEMBERNUMLINKCHGDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00191**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen the MBR Number Link field changes, indicating that the Name record is pointing to a new Member record, the system updates this field to the current system date.
\n
\nUnder normal circumstances, you should not revise this field.
`)
nameRecordFields.set("license", ` 
\n### License
\n
\n This field contains the state drivers license from one of the ID Number 1–ID Number 3 fields if it's associated ID Type 1–ID Type 3 field is set to (2) State Drivers License.
\nField Number         **802**
\nMnemonic             **LICENSE**
\nData Type            **20 Characters**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nThe system calculates this value by examining each of the ID Type 1–ID Type 3 fields. If at least one of these field values is set to (2) State Drivers License, the system returns the contents of the corresponding ID Number 1–ID Number 3 field for the first match. If there are no matches, the value remains blank.
\n
\nFor practical consideration and use of existing SymForm specfiles, we recommend that you use the ID Number 1 field to store only the state driver's license.
\n
\n***Important:***  The length of this field is 20 characters. Since the corresponding identification field can contain up to 40 characters, the system may truncate the calculated value.
\n
\nYou cannot access this field for file maintenance.
\n
\n***Important:***  If you use specfiles that perform validation of Name or Person records, you must modify your custom specfiles that validate the entry of data at this field in Name records or the Drivers License State and Drivers License No fields in Person records. In other words, if your Name or Person record validation specfiles include custom code that handles the condition where @VALIDATEFIELDNUMBER is equal to field numbers previously assigned to these fields (License was field 29 in Name records, Drivers License No was field 24 in Person records, and Drivers License State was field 25 in Person records), you must manually update these validation specfiles to reference the new fields and subfields and perform the validation that you require. This includes the following specfiles, as well as any other specfiles that these might call or include using #INCLUDE:
\nVALIDATE.NAME
\nVALIDATE.SHARE.NAME
\nVALIDATE.IRS.NAME
\nVALIDATE.LOAN.NAME
\nVALIDATE.LOAN.PLEDGE.NAME
\nVALIDATE.EFT.NAME
\nVALIDATE.CARD.NAME
\nVALIDATE.LOANAPP.PERSON
`)
nameRecordFields.set("lastaddrverifdate", ` 
\n### Address Verify Date
\n
\n The system stores the date of the most recent address verification for the member.
\nField Number         **059**
\nMnemonic             **LASTADDRVERIFDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00159**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date of the most recent address verification for the member. You must enter the information in this field manually and should update it after any address change ID verification. This field relates only to changes to all the name or address fields in the Account Name, Share Name, Loan Name and Card Name records, specifically the First Name, Middle Name, Last Name, Street, Extra Address, City, State, and Country fields. Whenever you perform file maintenance on these fields, you must use the new address verification procedure as outlined by your credit union to comply with the requirements of the federal Fair and Accurate Credit Transactions (FACT) Act of 2003.
\n
\n***Important:***  If an account has more than one Name record, the system attempts to verify the address in the Name record in which you set the Mail Override field value to (1) Overrides primary mailing address. If the system finds such a record, the system uses that record's address for verification and updates this field. If no Name records have the Mail Override field value set to (1) Overrides Primary Mailing Address, the system uses the address in the primary Name record for that member account, updating this field in the primary Name record.
\n
\nYou can use this field and the Address Change Date field when creating a custom PowerOn specfile to produce a list of members with a change of address in the Name record in the last 30 days (or other day limit you set) to help identify recently moved members for whom you might want to set a warning code.
`)
nameRecordFields.set("mailoverride", ` 
\n### Mail Override
\n
\n This field stores a code that specifies whether the address in the Name record should override the mailing address in the primary Name record.
\nField Number         **003**
\nMnemonic             **MAILOVERRIDE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00103**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No override
\n   The address in the Name record should not override the mailing address in the primary Name record.##### (1) Overrides primary mailing address
\n   The address in the Name record should be used instead of the mailing address in the primary Name record.
\n       - 
\n       - If you select this option, the system lets you input information in the Effective Date and Expiration Date fields.
\n***Important:***  If an account has more than one Name record, when the system attempts to verify an address, it uses the address in the Name record in which you set this field value to (1) Overrides Primary Mailing Address. If the system finds such a record, the system uses that record's address for verification. If no Name records have this field value set to (1) Overrides Primary Mailing Address, the system uses the address in the primary Name record for that member account.
\n
\nIf this is the primary Name record for an account (The Name Type field value is 0), you cannot access this field for file maintenance.
`)
nameRecordFields.set("ecoacode", ` 
\n### ECOA Code
\n
\n This field contains an Equal Credit Opportunity Act (ECOA) code that indicates how the system should report loans to credit bureaus.
\nField Number         **031**
\nMnemonic             **ECOACODE**
\nData Type            **Code to 11**
\nSource               **User-entered**
\nHelp File            **00131**
\nDefault Control      **No**
\nDefault Value **Various**
\n
\nYou must send field values in the Credit Report Number, and the appropriate Credit Reporting Code fields (both set in the Loan record) and an ECOA Code field value (found in the Loan Name record, the Share Name record, or the Account Name record) when reporting to a credit bureau.
\n
\n***Important:***  The ECOA codes are predefined and provided by Associated Credit Bureaus, Inc.
\n
\nThe system only allows you to perform file maintenance on this field in the Share Name, Loan Name or Loan Pledge Name records and not in the Account Name record.
\n
\nIn credit reporting, the function of this field in Name records depends on whether the name is functioning as the primary consumer or an associated consumer.
\n
\nThe primary consumer for loans and shares defaults to the primary Account Name unless the loan or share has a corresponding Loan Name or Share Name record whose SSN/TIN Override field value is set to (1) Yes or (2) Deceased. In which case, that loan name or share name is used as the primary consumer.
\n
\nThere can be multiple associated consumers. An associated consumer for loans can come from the Account Name, Loan Name, Share Name, or Loan Pledge Name record, depending on the value in the Name Logic parameter in the Credit Reporting Parameters as well as information specified by the Trial Balance Reports batch prompts. For shares, information for an associated consumer is pulled from the Share Name record only.
\n
\n***Important:***  The system may report the name from a Share Name, Loan Name, or Loan Pledge Name record as an associated consumer only if the Name Type field value of the corresponding Name record is set to (01) Joint, (09) Authorized Signer, (16) Guarantor, (17) Loan Co-Maker, (18) Loan Co-Applicant, or (21) Co-Signer.
\n
\nSimilarly, when reporting loans, the system may report the name from an Account Name record as an associated consumer only if the Name Type field value is set to (01) Joint or (51) CU Joint. When reporting shares however, the system does not report names from Account Name records as associated consumers.
\n
\n##### Default ECOA Code
\n   The default ECOA Code of primary and associated consumers is determined by the type of account being reported:
\n       - For loans, the default value of this field is the Loan record ECOA Code field value.
\n       - For shares, if the share has a Share Name record with a value in the SSN/TIN field value that is different from the primary consumer's, the default value of this field is (02) Joint Contractual; otherwise, it is (01) Individual.
\n       - 
\n       - If the default value of this field is (00) Individual, (01) Individual, (08) Deceased, (09) Acct Terminated, or (10) Delete Specific Borrower, then information of an associated consumer for a loan is pulled from the Loan Pledge Name record while information of an associated consumer for a share is not reported.
\n       - 
\n       - If this field value in the Account Name, Share Name, or Loan Name is serving as the primary consumer and the default ECOA Code is (02) Joint Contractual or greater, the system uses this field in the primary consumer's Name record to determine its association code; otherwise, the system uses the default ECOA Code.
\n       - 
\n       - If this field in the Account Name, Share Name, Loan Name, or Loan Pledge Name is serving as the associated consumer is 2 or greater, the system uses that field value; otherwise, the system uses the default ECOA Code.
\n       - 
\n       - For both primary and associated consumers, refer to the Account, Share, Loan, and Loan Pledge Name sections below for ECOA Code field value and Association Code mapping.
\n##### Account Name Record
\n   You cannot perform file maintenance on this field in the Account Name record; it automatically defaults to (00) Individual.
\n       - 
\n       - This field in the Loan record and the Name Logic parameter value in Credit Reporting Parameters control which names are reported to the credit bureaus, rather than this field in the Account Name record. For primary and associated consumers, the default ECOA Code is used.
\n##### Share Name Record
\n   Select from the following options:
\n       - Select (00) Individual to report the name from this Name record using the default ECOA Code for the primary and associated consumers. If the default is (00) Individual or (01) Individual the name is reported with an association code of (1) Individual.
\n       - Select (08) Deceased to report the name from this Name record with an association code of (X) Deceased for both primary and associated consumers.
\n       - Select (09) Acct Terminated to report the name from this Name record with an association code of (T) Terminated for both primary and associated consumers.
\n       - Select (10) Delete Specific Borrower to report the name with an association code of (Z) Delete Consumer for both primary and associated consumers.
\n       - If a Share Name record has a Name Type field value of (01) Joint, (09) Authorized Signer, (16) Guarantor, (17) Loan Co-Maker, (18) Loan Co-Applicant, (20) Co-Borrower or (21) Co-Signer, you can perform file maintenance on this field to assign codes (08) = X Deceased, (09) = T Terminated, (10) = Z Delete. Use this in combination with the Effective Date and Expiration Date field values in the Share Name record to report a charged-off share status to the Credit Bureaus when producing the (Metro 2® Format) credit reporting tape.
\n##### Loan Name and Loan Pledge Name Records
\n   Select from the following options:
\n       - Select (00) Individual to report the name from this Name record using the default ECOA code for the primary and associated consumers. If the default is (00) Individual or (01) Individual, the name is reported with an association code of (1) Individual.
\n       - Select (02) Joint Contractual to report the name from this Name record with an association code of (2) Joint Contractual Liability for both primary and associated consumers.
\n       - Select (03) Joint User to report the name from this Name record with an association code of (2) Joint Contractual Liability for the primary consumer and (3) Authorized User for associated consumers. Credit unions do not normally use this ECOA code.
\n       - Select (04) Joint to report the name from this Name record with an association code of (2) Joint Contractual Liability for both primary and associated consumers. Credit unions do not normally use this ECOA Code.
\n       - Select (05) Comaker to report the name from this Name record with an association code of (5) Comaker or Guarantor for both the primary consumer and associated consumers.
\n       - Select (06) On Behalf Of to report the name from this Name record with an association code of (2) Joint Contractual Liability for both primary and associated consumers. Credit unions do not normally use this ECOA code.
\n       - Select (07) Maker to report the name from this Name record with an association code of (7) Maker for both the primary and associate consumer. Credit unions do not normally use this ECOA code.
\n       - Select (08) Deceased to report the name from this Name record with an association code of (X) Deceased for both primary and associated consumers.
\n       - Select (09) Acct Terminated to report the name from this Name record with an association code of (T) Terminated for both primary and associated consumers.
\n       - Select (10) Delete Specific Borrower to report the name with an association code of (Z) Delete Consumer for both primary and associated consumers.
\n       - Select (11) Business/Commercial to report the name with an association code of (W) Business/Commercial for both primary and secondary consumers.
\n       - Tip: Codes (10) Delete Specific Borrower and (11) Business/Commercial support the DA - Account Closed by Consumer status code for Ch2 fields on the Equifax credit report Segment 13 (Bankruptcy). See Equifax Version 5.0 Credit Reports.
\n       - Important: Do not use the obsolete ECOA codes (04) Joint, or (06) On behalf of.
\n       - Related Topics: Credit Reporting Parameters, Name Logic parameter
`)
nameRecordFields.set("beneficiarypercent", ` 
\n### Beneficiary Percent
\n
\n This field stores the percentage of funds allocated to the beneficiary identified in the Name record.
\nField Number         **026**
\nMnemonic             **BENEFICIARYPERCENT**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **00126**
\nDefault Control      **No**
\nDefault Value **0.000**
\n
\nFor Name records with a Name Type field value of (4) Beneficiary, enter the percentage of funds allocated to the beneficiary identified in the Name record.
`)
nameRecordFields.set("extrainfo", ` 
\n### Extra Information
\n
\n This field stores a character string related to the beneficiary.
\nField Number         **067**
\nMnemonic             **EXTRAINFO**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00168**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nIf the Name record identifies the beneficiary of a deceased member's tax-deferred share, type one of the following:
\n   - AS BENEF OF <deceased member's name>
\n   - 
\n   - For example, AS BENEF OF ANNE JONES
\n   - 
\n   - BENEFICIARY OF <deceased member's name>
\n
\nWhen you run the IRS Reporting batch program, the system looks for the character string BENEF. If the system finds this character string, and if there are no digits (0-9) in the Extra Information field value, the system reports this information on IRS tapes and forms.
`)
nameRecordFields.set("crssnchgdate", ` 
\n### SSN Change Date
\n
\n This field contains the computed date when you last performed file maintenance on the SSN/TIN field.
\nField Number         **806**
\nMnemonic             **CRSSNCHGDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **00164**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen you perform file maintenance on the SSN/TIN field in the Name record, the system updates this field for all associated Name records to the current system date. If this field changes due to a merge (setting number links on one Name record to the same as another Name record), affecting only one record, then this field is updated only for the affected record.
\n
\nYou cannot access this field for file maintenance.
`)
nameRecordFields.set("ssnoverride", ` 
\n### SSN/TIN Override
\n
\n This field stores a code that determines if the Social Security Number (SSN) or Individual Taxpayer Identification Number (TIN) in this Name record should override the SSN or TIN in the primary Name record or not.
\nField Number         **004**
\nMnemonic             **SSNOVERRIDE**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **00104**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No Override
\n   The SSN or TIN in this Name record should not override the SSN or TIN in the primary Name record.##### (1) Overrides Primary SSN/TIN
\n   The SSN or TIN in this Name record should be used instead of the SSN or TIN in the primary Name record. For example, select this option if a Name record is subsidiary to any of the following:
\n       - A tax-deferred share that is not owned by the primary member (for example, a share owned by the member's spouse)
\n       - A tax-deferred share that is being distributed to the beneficiary
\n       - A specific share or mortgage loan that you do not want to report to the IRS. In this case, you must also set the SSN/TIN Type field value to (8) Foreign - Do Not Report.
\n       - 
\n       - When you choose this option, the Name record you have selected to override the primary Name record reports to the credit bureaus instead of the primary Name record. This is useful if the primary Name record is a trust, business, or some other entity that the credit union does not want to use for credit reporting and as long as the Loan Name record is a reportable person.
\n##### (2) Decedent SSN/TIN Override
\n   The person identified in this Name record has died. You should select this option only in the following Name records:
\n       - The primary Account Name record when the primary member is deceased
\n       - A Share Name record that identifies the deceased owner of a tax-deferred share who is not the primary member
\n       - 
\n       - For additional steps to take on the death of a member with a tax-deferred share, see Distributions Due to Death.
\n##### (3) Deferred Comp Employer
\n   This Name record identifies an employer who provides deferred compensation to the member in the primary Name record.***Important:***  To avoid reporting on an expired record when running the IRS Reporting batch program, set the SSN/TIN Override field value to (0) No Override or delete the record.
\nIf the SSN/TIN field is blank and you select an option of 1-3 in this field, the system displays the following message:
\n   - SSN/TIN cannot be blank.
`)
nameRecordFields.set("ssncertification", ` 
\n### SSN/TIN Certification
\n
\n This field stores a code that helps ensure that your credit union handles dividend withholding correctly.
\nField Number         **005**
\nMnemonic             **SSNCERTIFICATION**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **00105**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Certified
\n   The Social Security Number (SSN) or Taxpayer Identification Number (TIN) in the Name record is not certified with the Internal Revenue Service (IRS).##### (1) SSN/TIN is Certified
\n   The SSN or TIN in the Name record is certified with the IRS.##### (2) 2nd TIN Notice from IRS Within 3 Years
\n   The credit union has received a second TIN notice from the IRS within three years regarding this account.
\n       - The IRS issues a TIN notice if the Taxpayer Identification Number (SSN, ITIN, or EIN) reported to the IRS for an account does not match the TIN on file with the IRS for the name reported, or if the reported TIN is not valid.
\n       - Upon receipt of a TIN notice, your credit union should attempt to correct the TIN for this account. Upon receipt of a second TIN notice within three years, you must select this option at this field, notify the member of receipt of the second TIN notice, and set the Fed Backup Withholding Code field value for the member's normal shares to (1) Withholding. See the Fed Backup Withholding Code field description in Share Record Fields.
`)
nameRecordFields.set("irscorrection", ` 
\n### IRS Correction
\n
\n This field stores a code that identifies the IRS type of error being corrected.
\nField Number         **027**
\nMnemonic             **IRSCORRECTION**
\nData Type            **Code to 2**
\nSource               **User-entered or System-entered**
\nHelp File            **00127**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No Correction
\n   The system should not report a corrected tax return for the Social Security Number or TIN in the Name record.##### (1) Error Type 1
\n   The error being corrected is one of the following:
\n       - Incorrect payment amount
\n       - Incorrect code in the distribution code
\n       - Incorrect payee indicator
\n       - Return should not have been filed
\n##### (2) Error Type 2
\n   The error being corrected is one of the following:
\n       - No payee TIN (SSN, EIN, ITIN, QI-EIN)
\n       - Incorrect payee TIN
\n       - Incorrect payee name
\n       - Incorrect payee address
\n       - Wrong type of return indicated
\n
\nAt the beginning of a new calendar year, the Close Day Processing batch program resets this field to 0. For more information on corrected IRS returns, see Creating Corrected IRS Returns with the IRS Reporting Batch Program.
`)
nameRecordFields.set("irs1042samendnum", ` 
\n### Amendment Number
\n
\n This field stores a code that identifies the number of times you submitted a corrected 1042-S form.
\nField Number         **128**
\nMnemonic             **IRS1042SAMENDNUM**
\nData Type            **Code to 9**
\nSource               **User-entered or System-entered**
\nHelp File            **31633**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nYou must update this field when you are submitting a corrected 1042-S form. Type 1 for the first amendment and increase the number sequentially for each subsequent amendment.
\n
\nWhen you run the IRS Reporting batch program and select (2) Corrected Returns at the File Type prompt and select Yes at the Produce 1042-S Forms prompt, the system populates the Amendment No. box on the IRS Form 1042-S with this field.
\n
\nThe first time you run the Close Day Processing batch program in a new calendar year, the batch program resets this field to 0.
`)
nameRecordFields.set("creditreportconsumerinfo", ` 
\n### Credit Report Consumer Info
\n
\n This field stores a 2-character code that identifies the individual bankruptcy status used for the Metro 2® Format Credit Reporting system.
\nField Number         **060**
\nMnemonic             **CREDITREPORTCONSUMERINFO**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **00160**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nThis field overrides the field values in the Share or Loan record Credit Report Consumer Info fields when the system reports J1 and J2 records in Metro 2® Format.
\n
\nType a letter A through 2A for one of the following choices:
\n   - Blank = Retains previously reported value, or no new credit report consumer information indicator applies for this reporting period.
\n   - A = Petition for Chapter 7 Bankruptcy
\n   - B = Petition for Chapter 11 Bankruptcy
\n   - C = Petition for Chapter 12 Bankruptcy
\n   - D = Petition for Chapter 13 Bankruptcy
\n   - E = Discharged through Bankruptcy Chapter 7
\n   - F = Discharged through Bankruptcy Chapter 11
\n   - G = Discharged through Bankruptcy Chapter 12
\n   - H = Discharged/Completed through Bankruptcy Chapter 13 (Should be reported when consumer has completed all payments through the Chapter 13 plan)
\n   - Q = Removes Bankruptcy Indicator previously reported (A through P and Z) or personal receivership indicator (1A). Also used to report bankruptcies that have been closed or terminated without being discharged or dismissed. Do not report Q as a default value. If no new CII applies in the current reporting period, leave blank.
\n   - R = Reaffirmation of Debt
\n   - S = Removes previously reported Reaffirmation of Debt (R), Reaffirmation of Debt (V) Rescinded, and Lease Assumption (2A) indicators, and obsolete values W, X, and Y. Do not report S as a default value. If no new CII applies to the current reporting period, leave blank.
\n   - T = Credit Grantor Cannot Locate Consumer
\n   - U = Consumer Now Located (Removes previously reported T Indicator). Do not report U as a default value. If no new CII applies to the current reporting period, leave blank.
\n   - V = Chapter 7 Reaffirmation of Debt Rescinded
\n   - 1A = Personal Receivership
\n   - 2A = Lease Assumption
\n
\nWhether you use Metro 1 or 2 format is determined by the Report Tape Format parameter in the Credit Reporting Parameters.
\n
\nA value in this field in the Loan Name or Pledge Name record without a corresponding value in the Loan record Credit Report Consumer Info field indicates that the value applies only to the secondary or associate consumer. If there is no value here, but there is one in the corresponding field in the Loan record, that indicates the value there applies only to the primary consumer. Values in this field in both records apply to both the primary and secondary consumer.
`)
nameRecordFields.set("creditreportconsumerinfodate", ` 
\n### Credit Rpt Consumer Date
\n
\n This field stores the date when you last performed file maintenance on the Credit Report Consumer Info field.
\nField Number         **066**
\nMnemonic             **CREDITREPORTCONSUMERINFODATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00167**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever you perform file maintenance on the Credit Report Consumer Info field in the Name record, the system does not update the Credit Rpt Consumer Date field with the system date. You must set the date manually.
`)
nameRecordFields.set("marketingaddress", ` 
\n### Use as Marketing Address
\n
\n This field stores a code that specifies whether to use the address associated with this Name record for marketing a not.
\nField Number         **099**
\nMnemonic             **MARKETINGADDRESS**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31601**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   Do not use the address associated with this Name record for marketing.##### (1) Yes
\n   Identify the name and associated address you want to send marketing information to. For example, the member could have several addresses but by answering (1) Yes for a specific Name record, you are flagging this address for a future targeted mailing.
\n`)
nameRecordFields.set("mbraddrnumlink", ` 
\n### ADDR Number Link
\n
\n The system stores a pointer in this field to the ADDR Number field in the Member Address record linked with this Name record.
\nField Number         **083**
\nMnemonic             **MBRADDRNUMLINK**
\nData Type            **17 Characters**
\nSource               **System-entered**
\nHelp File            **00184**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nThe system automatically assigns this pointer when you create a Name record. Name information field values, such as Street and Country Code, reside in the Member Address record whose ADDR Number field is referenced in this Name record field. A Name record can be linked to a Member Address record, but this is not required. If the Name record is not linked to a Member Address record, the Name record has no address information.
\n
\nYou can perform file maintenance on this field (thus pointing to a different Member Address record) only by using PowerOn specfiles, batch FM, or SymConnect.
\n
\n***Important:***  If you are performing file maintenance on this field, we recommend that you set this field value before the MBR Number Link field. Otherwise, the link to find the Member Address record may no longer be available. If there is only one Member Address record linked to the Member record being referred to and if this field in the Name record is blank, then also change this field in the Name record to reference the one in the Member record. This is particularly important when merging Name records with Non-Account Name records. In that case, if you do not reassign this field, the address information will be lost.
\nThe system enforces the following rules:
\nThis field can have no value.
\nIf this field has a value, it must refer to an actual Member Address record.
\nIf the Name Merge functionality is disabled, or if the Member Merge Name Records privilege is set to No for the user or console, you can only reference Member Address records that are not already referencing another Name record.
`)
nameRecordFields.set("mbraddrnumlinkchgdate", ` 
\n### ADDR Number Link Chg Date
\n
\n The system stores the current system date when the ADDR Number Link field changes.
\nField Number         **090**
\nMnemonic             **MBRADDRNUMLINKCHGDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00192**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen the ADDR Number Link field changes, indicating that the Name record is pointing to a new Member Address record, the system updates this field to the current system date.
\n
\nUnder normal circumstances, you should not revise this field.
`)
nameRecordFields.set("type", ` 
\n### Name Type
\n
\n This field stores a code that identifies the type of name of this Name record.
\nField Number         **001**
\nMnemonic             **TYPE**
\nData Type            **Code to 53**
\nSource               **User-entered or System-entered**
\nHelp File            **00101**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Primary
\n   This is the primary Name record for the account. Once you create a primary Name record with this name type, you cannot assign a Name Type field value of (0) Primary to any other Name record in the account, and you cannot access this field for file maintenance.##### (1) Joint
\n   This is a joint Name record. You can place a joint Name record at several levels:
\n       - If this Name record identifies a joint owner who has access to all shares and loans in the account, create an Account Name record.
\n       - If this Name record identifies a joint owner who has access to a specific Share record, create a Share Name record.
\n       - If this Name record identifies a joint owner (or co-borrower) who has access to a specific Loan record, create a Loan Name record.
\n       - All name types that are not set to (0) Primary or (1) Joint default to (2) Non-Member in the MBR Status field.
\n##### (2) Mailing Only
\n   This Name record contains an address used for mailing only. If you also select (1) Overrides Primary Mailing Address at the Mail Override field, the system uses the address in this Name record for all mailings, including statements and delinquent notices.
\n       - You must use this name type for Pledge Name, EFT Name, and Card Name records. The system automatically sets the Name Type field value in these records and usually does not allow you to access this field for file maintenance. In Pledge Name records, you can access this field to change this field to (16) Guarantor or (21) Cosigner.
\n##### (3) Alternate Mailing
\n   This Name record contains an alternate mailing address. The system gives you the choice of using the address in this Name record to mail statements or checks produced by the Check Disbursed (KD), Check Other (KO), and Check Suppressed (KS) transactions. The system uses the address in the primary Name record (or a mailing-only address from another Name record, as described above) for all other mailings.
\n       - 
\n       - Use a Name Type of (2) Mailing Only or (3) Alternate mailing to direct statements or other records to the parent or guardian, donor, or other individual caring for a minor's Coverdell ESA share.
\n##### (4) Beneficiary
\n   This Name record identifies the beneficiary of tax-deferred shares or trust accounts. You can place a beneficiary Name record at several levels:
\n       - If the Name record identifies a beneficiary of all tax-deferred shares with the same IRS Code field value (for example, all shares with an IRS Code field value of 1), create an IRS Name record. The system automatically sets this field in an IRS Name record to (4) Beneficiary. You can create more than one IRS Name record to identify the beneficiaries of funds held in more than one tax-deferred share.
\n       - If the Name record identifies the beneficiary of the funds in a trust account, create an Account Name record. You can create more than one Account Name record to identify the beneficiaries of trust funds held in more than one share.
\n       - If the Name record identifies the death beneficiary of a Coverdell ESA share, create an IRS Name record using this name type.
\n       - If the beneficiary is under the decedent's account number, create a new IRA Share record for each beneficiary.
\n       - If the beneficiary IRA Share records have the beneficiary's name, address, and Social Security Number, and the Social Security Override field is set to 1, create a new Share Name record.
\n       - If you create a Name record with this name type, you should also enter a percentage in the Beneficiary Percent field to indicate the percentage of the funds this beneficiary should receive.
\n##### (5) Custodian
\n   The Name record identifies a custodian of the account. You can use this name type in Account Name, Share Name, and Loan Name records only. This name type is for information only, and the system does not perform any special processing.##### (6) Trustee
\n   The Name record identifies a trustee of the account. You can use this name type in Account Name, Share Name, and Loan Name records only. This option is used in the NCUA Reports function of the Miscellaneous Processing batch program for irrevocable trusts and formal revocable trusts.##### (7) Responsible Individual
\n   Some older IRS Name records (set up before April 1998) now use this option to identify the adult caretaker of a Coverdell ESA Share (Education Savings Account). Generally, the responsible individual is one of the beneficiary's parents or a guardian.
\n       - See Setting up a Coverdell ESA Share for current details on records used for this type of tax-deferred account.
\n##### (8) Power of Attorney
\n   The Name record identifies an individual who has power of attorney over the account. This value is for record-keeping purposes and has no effect on the system.##### (9) Authorized Signer
\n   The Name record identifies an individual who has signature authorization for the account. This person is included in credit reporting if the ECOA Code field value for the parent Loan record is set to (2) Joint Contractual, (3) Joint User, (4) Joint, (5) Comaker, or (7) Maker. If the ECOA Code field value is set to (0) Individual (default) or (1) Individual (verified), the system does not report any authorized signers to the credit bureau.
\n       - This functionality may be bypassed by answering Yes at the Incl Auth Users on Indv ECOA Loans? Trial Balance prompt. In this case, a Name record with this field value set to (9) Authorized Signer that also has its ECOA Code field value set to (03) Joint User is included in credit reporting even if the parent Loan record's ECOA Code field value is set to (00) Individual (default) or (01) Individual (verified).
\n       - When producing a Credit Report Journal using this option, if the Name record's ECOA Code field value is set to (3) Joint User, the association code in segments J1 and J2 of the report remains a 3. Conversely, if the Name record's ECOA Code field value does not equal 3, then the association code in segments J1 and J2 of the report translates to the value reported in the association code of the Base record in the Credit Report Journal.
\n       - When a Name record with this field set to (1) Joint and another Name record with this field set to (9) Authorized Signer exist and the Name record for joint has the same address as the Name record for prime but the Name record for authorized signer has a blank address, the Name record for authorized signer populates the J1 record and the Name record for joint populates the J2 record. The system does not compare the address fields to determine if the Name record for prime's address is the same as the Name record for joint's address.
\n##### (10) Dividend Payee
\n   The Name record identifies an individual to whom dividends should be paid out.##### (11) Maturity Payee
\n   The Name record identifies an individual who would be the recipient of funds during the maturity processing.##### (12) Coverdell ESA Beneficiary
\n   Some older IRS Name records (set up before April 1998) are updated to use this option to identify the student receiving donations to an education tax-deferred share. This option is not used when creating shares.
\n       - See Setting up a Coverdell ESA Share for current details on records used for this type of tax-deferred account.
\n##### (13) Next of Kin
\n   Use this option when appropriate. The system attaches no additional interpretation to this value. We provide this option in support of section 326 of the USA PATRIOT Act.##### (14) Representative Payee
\n   This person is a legal surrogate for the member. When an individual is not capable of making cognitive decisions, their representative payee can receive Social Security and other benefit checks. This selection is for information only and does not affect any system processing.##### (15) Grantor
\n   This person is making a grant as a benefactor. This selection is for information only and does not affect any system processing.##### (16) Guarantor
\n   This person guarantees and carries the legal obligation for this account, share, or loan. The Trial Balance Reports batch program can include guarantor names from Loan records on the credit reporting tape sent to credit bureaus.##### (17) Loan Co-Maker
\n   This person signs a promissory note along with the primary borrower and is equally responsible for the repayment of the loan. The Trial Balance Reports batch program can include loan co-maker names from Loan records on the credit reporting tape sent to credit bureaus.
\n       - Important: Most federal and state laws do not distinguish between the terms co-maker, co-applicant, co-borrower, or co-signer. Your credit union must determine if there are special rules for these terms in each state where you do business.
\n##### (18) Loan Co-Applicant
\n   This person applies for the loan with the primary borrower, signs a promissory note, and is jointly liable for repayment. The Trial Balance Reports batch program can include loan co-applicant names from Loan records on the credit reporting tape sent to credit bureaus.##### (19) Trustor
\n   This person is providing the funds or asset for a trust. A trustor, like a grantor, sets up and donates to the trust without any financial responsibility, while a third-party trustee manages the trust for the beneficiary. This selection is for information only and does not affect any system processing.##### (20) Co-Borrower
\n   This person accepts the responsibility for repaying the loan along with the primary borrower. A co-borrower is obligated to repay the debt regardless of the status of the primary borrower. The Trial Balance Reports batch program can include loan co-borrower names from Loan records on the credit reporting tape sent to credit bureaus.##### (21) Co-Signer
\n   This person signs a promissory note for the loan application and assumes equal liability for the debt along with the primary borrower. The Trial Balance Reports batch program can include loan co-signer names from Loan records on the credit reporting tape sent to credit bureaus.
\n       - When the loan already has a primary and joint member, the co-signer must be set up with a Loan Pledge Name record to be reported to the credit bureau. Also select Yes at the Incl Name for Cosigner Loan Pledge Rec prompt in the Trial Balance Reports batch program.
\n##### (22) CTR Owner Address/ID
\n   This person is an owner on the account. This option is used to fill in the address or ID verification information if different from the existing Name record for that CTR owner.##### (23) CTR Transactor
\n   This person is conducting the reportable cash transaction but is not associated with the account. Information such as the permanent address, ID verification, and other information that the credit union can gather may be entered in this field and used for the CTR report.##### (24) DBA
\n   This person uses an alternate business name on the account.
\n       - Tip: For CTR purposes, use the DBA fields on the Name record.
\n##### (25) Attorney Trust
\n   This option is for a person whose funds are being held in an attorney trust account.##### (26) Safe Deposit Box Co-Lessee
\n   This person is a co-lessee of a safe deposit box, information such as the permanent address, ID verification, and other information that the credit union can gather may be entered in this field.##### (27) Safe Deposit Box Deputy
\n   This person is a deputy of a safe deposit box, information such as the permanent address, ID verification, and other information that the credit union can gather may be entered in this field.##### (28) CTR Common Carrier
\n   This person (or entity) is a courier service conducting the reportable cash transaction. Information such as the permanent address, ID verification, and other information that the credit union can gather may be entered in this name type during the transaction process and used for the CTR report.##### (29) Property Address
\n   This option is used to enter the address for the property securing the loan.
\n       - To identify that a Name record is for property address information, type PROPERTY in the Last Name field in the Name Record. Using a Name record for property address information is especially helpful when you use the Copy Other Name functionality.
\n       - In the record tree for Manage Account Records and Account Manager, the system lists the Name record you create for property address information as NamePropAddr.
\n       - The system uses this record for IRS Form 1098 reporting when the property securing the mortgage is not the same as the primary mailing address.
\n       - The system does not use the Name record Extra Address field for Form 1098.
\n       - If you use the Copy Other Name function and the Name record Person Code field value is set to (13) Property Address, the system updates this field to this option.
\n       - If there are multiple Property Address Name records, the system uses the information from the Property Address Name record at the top of the account tree for Form 1098. To create the most current Property Address Name record, right click on the Loan record instead of right clicking on the existing Property Address Name record.
\n##### (30) Successor in Interest
\n   Use this option to store the name, mailing address, and Social Security Number (SSN) of a confirmed successor in interest.
\n       - For a mortgage loan, create a Loan Name record to store the information of a confirmed successor in interest. Once a confirmed successor in interest acknowledges that he or she wants mortgage information sent to him or her, you must set the Mail Override field value in the Loan Name record to (1) Overrides Primary Mailing Address.
\n       - Mortgage information is not sent to the confirmed successor in interest if the Mail Override field value is set to (0) No Override in the Loan Name record.
\n       - This child record appears in the Account record tree as "Name SII."
\n       - If you have the Merge Name and Address function turned on, the SSN/TIN field in the Loan Name record must have a value.
\n##### (31) Information Only
\n   This Name record documents the beneficial owner of a legal entity customer when the account related to this Name record would otherwise have no record of this owner.
\n       - In the Account record tree, this child record appears as "Name InfoOnly."
\n##### 32–49
\n   We reserve these options for future use.##### (50) Credit Union
\n   (Primarily for Corporate Credit Unions) The Name record is for an account belonging to a natural person credit union.
\n       - When you create an Account record with the Membership Status set to (2) Credit Union, the system creates an initial Name record under that Account record and sets its Name Type field value to this option.
\n       - Important: When this field is set to a value of 50, the name of field 13 in the Name record appears as Credit Union Name instead of Last Name. You must always fill in the Last Name field or the Credit Union Name field when creating or revising a Name record.
\n##### (51) CU Joint
\n   (Primarily for Corporate Credit Unions) The Name record is a joint Name record for an account belonging to a natural person credit union.
\n       - Important: When this field is set to a value of 51, the name of field 13 in the Name record appears as Credit Union Name instead of Last Name. You must always fill in the Last Name field or the Credit Union Name field when creating or revising a Name record.
\n##### (52) CU Mailing
\n   (Primarily for Corporate Credit Unions) This Name record contains an address used for mailing only for an account belonging to a natural person credit union.
\n       - Important: When this field is set to a value of 52, the name of field 13 in the Name record appears as Credit Union Name instead of Last Name. You must always fill in the Last Name field or the Credit Union Name field when creating or revising a Name record.
\n##### (53) CU Alternate
\n   (Primarily for Corporate Credit Unions) This Name record contains an alternate mailing address for an account belonging to a natural person credit union.
\n       - Important: When this field is set to a value of 53, the name of field 13 in the Name record appears as Credit Union Name instead of Last Name. You must always fill in the Last Name field or the Credit Union Name field when creating or revising a Name record.
`)
nameRecordFields.set("subtype", ` 
\n### Name SubType
\n
\n This field stores a credit union-defined code that further identifies the type of Name record.
\nField Number         **002**
\nMnemonic             **SUBTYPE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **00102**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter a credit union-defined code (0-99) that further identifies the type of Name record.
`)
nameRecordFields.set("crnamechgdate", ` 
\n### Name Change Date
\n
\n This field contains the computed date when you last performed file maintenance on the First Name, Middle Name, or Last Name fields.
\nField Number         **804**
\nMnemonic             **CRNAMECHGDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **00162**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen you perform file maintenance on these name fields or any combination of these fields, the system updates this field for all associated Name records to the current system date. If any of these fields change due to a merge (setting number links on one Name record to the same as another Name record), affecting only one record, then this field is updated only for the affected record.
\n
\nYou cannot access this field for file maintenance.
`)
nameRecordFields.set("lastaddrchgdate", ` 
\n### Address Change Date
\n
\n This field contains the computed date when you last performed file maintenance to specific name or address fields in the Account Name, Share Name, Loan Name, or Card records, including the First Name, Middle Name, Last Name, Street, Extra Address, City, State, and Country fields.
\nField Number         **803**
\nMnemonic             **LASTADDRCHGDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **00158**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever you perform file maintenance on these name or address fields or any combination of these fields, the system updates this field for all Name records with the same MBR Number Link or ADDR Number Link field values as the changed record with the system date. If any of these fields change due to a merge (setting number links on one Name record to the same as another Name record), affecting only one record, then this field is updated only for the affected record.
\n
\nYou can use this field and the Address Verify Date field when creating a custom PowerOn specfile to produce a list of members with a change of address in the Name record in the last 30 days (or other day limit you set). This specfile would help identify recently moved members for whom you should set a warning code.
\n
\nYou cannot access this field for file maintenance.
`)
nameRecordFields.set("craddrchgdate", ` 
\n### Credit Rpt Address Change Date
\n
\n This field contains the computed date when you last performed file maintenance on the Street, Extra Address, City, State, Country, or Zip Code address fields.
\nField Number         **805**
\nMnemonic             **CRADDRCHGDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **00163**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhen you perform file maintenance on these address fields or any combination of these fields, the system updates this field for all associated Name records to the current system date. If any of these fields change due to a merge (setting number links on one Name record to the same as another Name record), affecting only one record, then this field is updated only for the affected record.
\n
\nYou cannot access this field for file maintenance.
`)
nameRecordFields.set("effectivedate", ` 
\n### Effective Date
\n
\n This field stores the date that indicates when the information in this Name record should be used.
\nField Number         **007**
\nMnemonic             **EFFECTIVEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00107**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nYou can access this field only for the following values in the Name Types field:
\n   - (1) Joint
\n   - (2) Mailing only
\n       - You can use this option only if the Mail Override field value has a value of (1) Overrides Primary Mailing Address (except in a Card Name record, in which the Mail Override field value can have a value of (0) No Override).
\n   - (4) Beneficiary
\n   - (5) Custodian
\n   - (6) Trustee
\n   - (7) Resp Individual
\n   - (8) Power of Atty
\n   - (9) Auth Signer
\n   - (13) Next of Kin
\n   - (14) Representation Payee
\n   - (15) Grantor
\n   - (16) Guarantor
\n   - (17) Loan Co-Maker
\n   - (18) Loan Co-Applicant
\n   - (19) Trustor
\n   - (20) Co-Borrower
\n   - (21) Co-Signer
\n   - (22) CTR Owner Address/ID
\n   - (23) CTR Transactor
\n   - (25) Attorney Trust
\n   - (26) Safe Deposit Box Co-Lessee
\n   - (27) Safe Deposit Box Deputy
\n   - (28) CTR Common Carrier
\n   - (29) Property Address
\n   - (30) Successor in Interest
\n   - (31) Information Only
\n
\nIf you select (1) Overrides Primary Mailing Address in the Mail Override field, a date in this field also indicates the effective date of a mail override. For name type (30) Successor in Interest, when you select (1) Overrides Primary Mailing Address in the Mail Override field, a date must be entered in the Effective Date field.
\n
\n***Important:***  The following name types can use this field if the Mail Override field value is set to (1) Overrides Primary Mailing Address:
\n(3) Alternate Mailing Option
\n(10) Dividend Payee
\n(11) Maturity Payee
\n(12) Coverdell ESA Beneficiary
\n(24) DBA
`)
nameRecordFields.set("expirationdate", ` 
\n### Expiration Date
\n
\n This field stores the date that indicates when the information in this Name record should no longer be used.
\nField Number         **008**
\nMnemonic             **EXPIRATIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00108**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nYou can access this field only for the following values in the Name Types field:
\n   - (1) Joint
\n   - (2) Mailing only
\n        - You can use this option only if the Mail Override field value has a value of (1) Overrides Primary Mailing Address (except in a Card Name record, in which the Mail Override field value can have a value of (0) No Override).
\n   - (4) Beneficiary
\n   - (5) Custodian
\n   - (6) Trustee
\n   - (7) Resp Individual
\n   - (8) Power of Atty
\n   - (9) Auth Signer
\n   - (13) Next of Kin
\n   - (14) Representation Payee
\n   - (15) Grantor
\n   - (16) Guarantor
\n   - (17) Loan Co-Maker
\n   - (18) Loan Co-Applicant
\n   - (19) Trustor
\n   - (20) Co-Borrower
\n   - (21) Co-Signer
\n   - (22) CTR Owner Address/ID
\n   - (23) CTR Transactor
\n   - (25) Attorney Trust
\n   - (26) Safe Deposit Box Co-Lessee
\n   - (27) Safe Deposit Box Deputy
\n   - (28) CTR Common Carrier
\n   - (29) Property Address
\n   - (30) Successor in Interest
\n      - Mortgage information is not sent to the confirmed successor in interest if the Mail Override field value is set to (0) No Override in the Loan Name record.
\n   - (31) Information Only
\n
\nIf you select (1) Overrides Primary Mailing Address in the Mail Override field, a date in this field also indicates the expiration date of a mail override. However, a date in this field does not expire a SSN/TIN Override field. See SSN/TIN Override field description for additional information.
\n
\n***Important:***  The following name types can use this field when the Mail Override field value is set to (1) Overrides Primary Mailing Address:
\n(3) Alternate Mailing Option
\n(10) Dividend Payee
\n(11) Maturity Payee
\n(12) Coverdell ESA Beneficiary
\n(24) DBA
\n
\nYou can purge expired Name records from the system with the Purge Account Processing batch program. You can still use expired Name records to look up an account because they are not removed from the system until you purge them.
\n
\n***Important:***  You cannot use this field on an EFT Name record because the Mail Override field value is set to (0) No Override.
`)
nameRecordFields.set("lastfmdate", ` 
\n### Last FM Date
\n
\n The system stores the date in this field of the last file maintenance to the Name record.
\nField Number         **023**
\nMnemonic             **LASTFMDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00123**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever you perform file maintenance on this Name record using Account File Maintenance or the File Maintenance (FM) transaction, the system updates this field with the system date.
\n
\n***Important:***  This field changes only for the Name record that has been updated. For example, if two Name records reference the same Member record and you change the First Name field value on one Name record, the system updates this field for the Name record that you changed, but it will not change this field for the other Name record, even though the First Name field value also changed there. It will also update the MBR Last FM Date field for the Member record.
\n
\nAlso, if you change the value in the Middle Name field in the Member record, the system updates only the MBR Last FM Date field value in the Member record. It will not update this field in either of the Name records.
\n
\nThis field appears on the Name record file maintenance screens in the system, but you cannot access this field for file maintenance.
`)
nameRecordFields.set("mbrfmlastdate", ` 
\n### MBR Last FM Date
\n
\n The system stores the date in this field of the last file maintenance to the Member record.
\nField Number         **073**
\nMnemonic             **MBRFMLASTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **000174**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAlthough the value for this field appears in the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nThe system updates this field with the system date whenever you perform file maintenance of the Member record.
\n
\nYou cannot access this field for file maintenance.
`)
nameRecordFields.set("addrfmlastdate", ` 
\n### ADDR Last FM Date
\n
\n The system stores the date in this field of the last file maintenance to the Member Address record.
\nField Number         **079**
\nMnemonic             **ADDRFMLASTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **000179**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAlthough the value for this field appears in the Name record, it is not in the Name record. The value in this field is actually stored in the related Member Address record field.
\n
\nThe system uses this field to reference linked Member Address record fields. The system updates this field with the system date whenever you perform file maintenance of the Member Address record.
\n
\nYou cannot access this field for file maintenance.
`)
nameRecordFields.set("confidential", ` 
\n### Confidential
\n
\n This field stores a code that indicates a member has an Account that they wish to keep private or not.
\nField Number         **098**
\nMnemonic             **CONFIDENTIAL**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00199**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nWhen you perform file maintenance on information on a Name record, other Name records can also be affected by the change. In that case, the system displays the affected records to you to determine if they should also be changed. This could result in inadvertently divulging confidential account information to a Member if you ask the Member about the other records.
\n
\n#### Data Type Descriptions
\n##### (0) Unclassified
\n   The record does not require any special attention by the user.##### (1) Confidential
\n   The member has an Account that they wish to keep private. Display the following in merge and file maintenance actions to warn the user to be careful about mentioning this account to the member:
\n       - [Confidential]
\n       - 
\n       - It is up to each credit union to create their own internal processes to handle confidential name records.
`)
nameRecordFields.set("creditreportaddrindicator", ` 
\n### Credit Rpt Address Indicator
\n
\n This field stores a 1-character code that causes a Share or Loan Note record to be posted with information about the address reported in the Name record.
\nField Number         **100**
\nMnemonic             **CREDITREPORTADDRINDICATOR**
\nData Type            **1 Character**
\nSource               **User-entered**
\nHelp File            **31605**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nType a 1-character code that causes a Share or Loan Note record to be posted with information about the address reported in the Name record. The 1-character code is defined by the Consumer Data Industry Association Credit Reporting Resource Guide as follows:
\n   - Y = Known to be an address of the consumer
\n   - N = Not a Confirmed Address
\n   - B = Business Address - Not consumer's residence
\n   - U = Non-deliverable address/Returned mail
\n   - D = Data reporter's default address
\n   - M = Military Address
\n   - S = Secondary Address
\n   - P = Bill Payer Service - Not consumer's residence
\n   - C = Confirmed/Verified Address - Used in response to an address discrepancy notification from a consumer reporting agency.
\n
\nFor Metro only codes, Y, N, B, and C are supported. For Metro 2® Format, all the above codes are supported.
`)
nameRecordFields.set("creditreportaddrindicatordate", ` 
\n### CR Address Indicator Date
\n
\n This field stores the date when the Credit Rpt Address Indicator field is updated with an address indicator value or any non-blank value.
\nField Number         **101**
\nMnemonic             **CREDITREPORTADDRINDICATORDATE**
\nData Type            **Date**
\nSource               **System-entered or User-entered**
\nHelp File            **31606**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system sets this field to the system date when the Credit Rpt Address Indicator field is updated with an address indicator value or any non-blank value. You can perform file maintenance on this field to back-date a notice if necessary. If the value in the Credit Rpt Address Indicator field is cleared, this field is blank. A future date is not permitted in this field.
\n
\n***Important:***  A warning message appears if the value of this field is changed from the Account Manager screen to a date that is more than 30 days before the system date or if you clear this date field and the Credit Rpt Address Indicator field is filled with an address indicator value.
`)
nameRecordFields.set("identdocflag", ` 
\n### Documentary Flag 1–Documentary Flag 3
\n
\n These fields each store a code that indicates whether the first, second, or third form of identification was supported with documentary evidence.
\nField Number         **042:1–042:3**
\nMnemonic             **IDENTDOCFLAG:1–IDENTDOCFLAG:3**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00142**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
\n
\n#### Data Type Descriptions
\n##### (0) Non-documentary Identification
\n   There was no documentary evidence used for the first, second, or third form of identification.##### (1) Documentary Identification
\n   There was documentary evidence used for the first, second, or third form of identification.
\n`)
nameRecordFields.set("identidtype", ` 
\n### ID Type 1–ID Type 3
\n
\n These fields each specify the type of documentation (if any) that was used to support the first, second, or third form of identification.
\nField Number         **043:1–043:3**
\nMnemonic             **IDENTIDTYPE:1–IDENTIDTYPE:3**
\nData Type            **Code to 999**
\nSource               **User-entered**
\nHelp File            **00143**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
\n
\nValues 13–100 are reserved for future use. You cannot select these values. Values 101–999 are credit union-defined in the ID Type Descriptions parameters. They are initially set to ID Type xxx, where xxx corresponds to the parameter number.
\n
\n#### Data Type Descriptions
\n##### (0) Unknown
\n   The type of documentation that was used to support the first, second, or third form of identification is unknown.##### (1) Known Existing Member
\n   The type of documentation that was used to support the first, second, or third form of identification is from an existing member.##### (2) State Drivers License
\n   The type of documentation that was used to support the first, second, or third form of identification is from a state drivers license.##### (3) State ID Card
\n   The type of documentation that was used to support the first, second, or third form of identification is from a state ID card.##### (4) US Passport
\n   The type of documentation that was used to support the first, second, or third form of identification is from a U.S. passport.##### (5) Foreign Passport
\n   The type of documentation that was used to support the first, second, or third form of identification is from a foreign passport.##### (6) Military ID Card
\n   The type of documentation that was used to support the first, second, or third form of identification is from a military ID card.##### (7) Foreign Government Issued ID
\n   The type of documentation that was used to support the first, second, or third form of identification is from a foreign government issued ID.##### (8) Resident Alien Card
\n   The type of documentation that was used to support the first, second, or third form of identification is from a resident alien card.##### (9) Disabled/elderly with no ID
\n   The type of documentation that was used to support the first, second, or third form of identification is from a disabled or elderly customer with no ID.##### (10) Foreign Entity with no ID
\n   The type of documentation that was used to support the first, second, or third form of identification is from a foreign entity with no ID.##### (11) Law Enforcement
\n   The type of documentation that was used to support the first, second, or third form of identification is from law enforcement.##### (12) Amish Customer with no ID
\n   The type of documentation that was used to support the first, second, or third form of identification is from an Amish customer with no ID.##### 13–100
\n   Reserved for future use. You cannot select these values.##### 101–999
\n   The type of documentation that was used to support the first, second, or third form of identification is from a credit union-defined type defined in the ID Type Descriptions parameters. They are initially set to ID Type xxx, where xxx corresponds to the parameter number.
\n       - Any value set to ID Type xxx is considered undefined. The system displays a drop-down menu of all defined values when you edit these fields. As with all file maintenance combo boxes, the system displays the list in numeric order if you are displaying ordinals and in alphabetical order otherwise.
\n       - The following list is a guideline for the types of values you can set as your credit union-defined identification types. It is not meant to be a comprehensive or exclusive listing of values, since such a list does not exist:
\n       - Non-Documentary
\n       - Other Documentary
\n       - Articles of Incorporation
\n       - Birth Certificate
\n       - Credit Card
\n       - Firearm License
\n       - Foreign Drivers License
\n       - Insurance Card
\n       - Organizational Membership Card
\n       - Property Tax Bill
\n       - Social Security Card
\n       - Student Identification Card
\n       - Utility Bill
\n       - Visa
\n       - Voter Registration Card
`)
nameRecordFields.set("identiddescription", ` 
\n### ID Description 1–ID Description 3
\n
\n These fields each store further detail about the corresponding first, second, or third form of identification.
\nField Number         **044:1–044:3**
\nMnemonic             **IDENTIDDESCRIPTION:1–IDENTIDDESCRIPTION:3**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00144**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
\n
\nEnter further details (up to 40 characters) about the corresponding first, second, or third form of identification (see the ID Type 1–ID Type 3 field description).
`)
nameRecordFields.set("identidnumber", ` 
\n### ID Number 1–ID Number 3
\n
\n These fields each store the value of the type of identification specified by the corresponding first, second, or third form of identification.
\nField Number         **045:1–045:3**
\nMnemonic             **IDENTIDNUMBER:1–IDENTIDNUMBER:3**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00145**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
\n
\nEnter the value (up to 40 characters) of the type of identification specified by the corresponding first, second, or third form of identification (see the ID Type 1–ID Type 3 field description).
`)
nameRecordFields.set("identidissuedate", ` 
\n### ID Issuance Date 1–ID Issuance Date 3
\n
\n These fields each store the date the type of identification specified by the corresponding first, second, or third form of identification was issued, if known.
\nField Number         **046:1–046:3**
\nMnemonic             **IDENTIDISSUEDATE:1–IDENTIDISSUEDATE:3**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00146**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
\n
\nEnter the date the type of identification specified by the corresponding first, second, or third form of identification (see the ID Type 1–ID Type 3 field description) was issued, if known.
`)
nameRecordFields.set("identidexpiredate", ` 
\n### ID Expiration Date 1–ID Expiration Date 3
\n
\n These fields each store the date the type of identification specified by the corresponding first, second, or third form of identification expires, if known.
\nField Number         **047:1–047:3**
\nMnemonic             **IDENTIDEXPIREDATE:1–IDENTIDEXPIREDATE:3**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00147**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
\n
\nEnter the date the type of identification specified by the corresponding first, second, or third form of identification (see the ID Type 1–ID Type 3 field description) expires, if known.
`)
nameRecordFields.set("identidverifydate", ` 
\n### ID Verification Date 1–ID Verification Date 3
\n
\n These fields each store the date the type of identification specified by the corresponding first, second, or third form of identification was verified.
\nField Number         **048:1–048:3**
\nMnemonic             **IDENTIDVERIFYDATE:1–IDENTIDVERIFYDATE:3**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00148**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
\n
\nEnter the date the type of identification specified by the corresponding first, second, or third form of identification (see the ID Type 1–ID Type 3 field description) was verified.
`)
nameRecordFields.set("locator", ` 
\n### Locator
\n
\n The system stores a unique number within each member account in this field that can be used as a unique identification of this record.
\nField Number         **038**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **00138**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
nameRecordFields.set("userchar1", ` 
\n### User Char 01–User Char 04
\n
\n These four custom fields can store any credit union-defined character data.
\nField Number         **050-053**
\nMnemonic             **USERCHAR1–USERCHAR4**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00150-00153**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nEach of these fields only appears in the system once you define the field name in the Name User Field Names parameters in the Parameter Manager.
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
`)
nameRecordFields.set("userchar2", ` 
\n### User Char 01–User Char 04
\n
\n These four custom fields can store any credit union-defined character data.
\nField Number         **050-053**
\nMnemonic             **USERCHAR1–USERCHAR4**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00150-00153**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nEach of these fields only appears in the system once you define the field name in the Name User Field Names parameters in the Parameter Manager.
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
`)
nameRecordFields.set("userchar3", ` 
\n### User Char 01–User Char 04
\n
\n These four custom fields can store any credit union-defined character data.
\nField Number         **050-053**
\nMnemonic             **USERCHAR1–USERCHAR4**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00150-00153**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nEach of these fields only appears in the system once you define the field name in the Name User Field Names parameters in the Parameter Manager.
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
`)
nameRecordFields.set("userchar4", ` 
\n### User Char 01–User Char 04
\n
\n These four custom fields can store any credit union-defined character data.
\nField Number         **050-053**
\nMnemonic             **USERCHAR1–USERCHAR4**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **00150-00153**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nEach of these fields only appears in the system once you define the field name in the Name User Field Names parameters in the Parameter Manager.
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
`)
nameRecordFields.set("useramount1", ` 
\n### User Amount 01–User Amount 02
\n
\n These two custom fields can store any credit union-defined cash amount.
\nField Number         **054-055**
\nMnemonic             **USERAMOUNT1–USERAMOUNT2**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00154-00155**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEach of these fields only appears in the system once you define the field name in the Name User Field Names parameters in the Parameter Manager.
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
`)
nameRecordFields.set("useramount2", ` 
\n### User Amount 01–User Amount 02
\n
\n These two custom fields can store any credit union-defined cash amount.
\nField Number         **054-055**
\nMnemonic             **USERAMOUNT1–USERAMOUNT2**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00154-00155**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEach of these fields only appears in the system once you define the field name in the Name User Field Names parameters in the Parameter Manager.
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
`)
nameRecordFields.set("userdate1", ` 
\n### User Date 01–User Date 02
\n
\n These two custom fields can store any credit union-defined date.
\nField Number         **056–057**
\nMnemonic             **USERDATE1–USERDATE2**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00156–00157**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEach of these fields only appears in the system once you define the field name in the Name User Field Names parameters in the Parameter Manager.
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
`)
nameRecordFields.set("userdate2", ` 
\n### User Date 01–User Date 02
\n
\n These two custom fields can store any credit union-defined date.
\nField Number         **056–057**
\nMnemonic             **USERDATE1–USERDATE2**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00156–00157**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEach of these fields only appears in the system once you define the field name in the Name User Field Names parameters in the Parameter Manager.
\n
\nAlthough the values for these fields appear in (and can be modified from) the Name record, they are not in the name record. The values in these fields are actually stored in the related Member record fields.
`)
nameRecordFields.set("extendedname", ` 
\n### Extended Name
\n
\n The system stores the characters over 40 entered in the Last Name/Non Indiv Name field in this field when the Name Format field value is set to (1) Non-Individual.
\nField Number         **065**
\nMnemonic             **EXTENDEDNAME**
\nData Type            **40 Characters**
\nSource               **System-entered**
\nHelp File            **00166**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nThe system does not display this field, but instead it displays the Non-Indiv Name field when the Name Format field value is set to (1) Non-Individual. If you enter more than 40 characters (up to 80 characters) in the Last Name/Non Indiv Name field, the system stores the second 40 characters in this field.
\n
\n***Important:***  When you hover over the Non-Indiv Name field, the system displays the full name of up to 80 characters.
\n
\nThe system concatenates the two fields (Last Name and Extended Name) to be displayed on the Name or Application Person record screens. The system splits this field after any changes to save the field values.
\n
\nYou can view and perform file maintenance on this field in PowerOn specfiles, SymConnect, and the Perform FM from PowerOn Output function of the Miscellaneous Processing batch program.
\n
\nAlthough the value for this field is accessible using PowerOn specfiles and SymConnect from the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
`)
nameRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\n
\n The system stores the system date in this field when you create, change, or save this Name record if the change is made from this Name record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **068**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf you change a field from the Member record that results in a change to the corresponding field on the Name record, the system does not update this field in the Name record.
\n
\n***Important:***  The system does not change the Record Change Date when a calculated field changes.
\n
\nYou cannot view or perform file maintenance on this field.
`)
nameRecordFields.set("membernumber", ` 
\n### MBR Number
\n
\n The system stores the unique value in this field assigned within each Member record when it is created.
\nField Number         **069**
\nMnemonic             **MEMBERNUMBER**
\nData Type            **17 Characters**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nThe system uses this field to reference linked Member record fields. The value is a positive number greater than zero.
\n
\nYou cannot view or perform file maintenance on this field.
`)
nameRecordFields.set("mbrstatusfmdate", ` 
\n### MBR Status Change Date
\n
\n The system stores the system date in this field when the MBR Status field is changed by the system or the user.
\nField Number         **071**
\nMnemonic             **MBRSTATUSFMDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system uses this field to reference linked Member record fields.
\n
\nYou cannot view or perform file maintenance on this field.
`)
nameRecordFields.set("mbrcreatedate", ` 
\n### MBR Creation Date
\n
\n The system stores the system date in this field when you create the Member record.
\nField Number         **072**
\nMnemonic             **MBRCREATEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system uses this field to reference linked Member record fields.
\n
\nYou cannot view or perform file maintenance on this field.
`)
nameRecordFields.set("mbrexpdate", ` 
\n### MBR Expiration Date
\n
\n The system stores an expiration date in this field for the Member record.
\nField Number         **074**
\nMnemonic             **MBREXPDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system uses this field to reference linked Member record fields. The Purge Member Processing batch program uses this field to determine if this record is eligible for the purge if it meets all other purge criteria.
\n
\nYou cannot view or perform file maintenance on this field. The date in this field can only be manually entered in the corresponding field in the Member record.
`)
nameRecordFields.set("mbractivitydate", ` 
\n### MBR Activity Date
\n
\n The system stores the system date in this field when any transaction activity occurs on the Member record.
\nField Number         **075**
\nMnemonic             **MBRACTIVITYDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system uses this field to reference linked Member record fields.
\n
\nYou cannot view or perform file maintenance on this field.
`)
nameRecordFields.set("mbraddrnumber", ` 
\n### ADDR Number
\n
\n The system stores the unique value in this field assigned within each Member Address record when it is created.
\nField Number         **077**
\nMnemonic             **MBRADDRNUMBER**
\nData Type            **17 Characters**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nThe system uses this field to reference linked Member Address record fields. The value is a positive number greater than zero.
\n
\nYou cannot view or perform file maintenance on this field.
`)
nameRecordFields.set("addrcreatedate", ` 
\n### ADDR Creation Date
\n
\n The system stores the system date in this field when you create the Member Address record.
\nField Number         **078**
\nMnemonic             **ADDRCREATEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system uses this field to reference linked Member Address record fields.
\n
\nYou cannot view or perform file maintenance on this field.
`)
nameRecordFields.set("addrexpdate", ` 
\n### ADDR Expiration Date
\n
\n The system stores an expiration date in this field for the Member Address record.
\nField Number         **080**
\nMnemonic             **ADDREXPDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system uses this field to reference linked Member Address record fields. The Purge Member Processing batch program uses this field to determine if this record is eligible for the purge if it meets all other purge criteria.
\n
\nYou cannot view or perform file maintenance on this field. The date in this field can only be manually entered in the corresponding field in the Member record.
`)
nameRecordFields.set("nonacctnamenum", ` 
\n### Non Account Name Number
\n
\n The system stores the unique value in this field assigned within each Non-Account Name record when it is created.
\nField Number         **081**
\nMnemonic             **NONACCTNAMENUM**
\nData Type            **17 Characters**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nThis field is a unique number generated and used by the system to reference Name records not associated with an account to Member and Member Account records created in the Member Manager.
\n
\nNormally, these Non-Account Name records are behind the scenes and not relevant to the user. However, you may need to know about and use these records when using an operator command to copy records, or when extracting records for a relational database using Episys Database Extract (EDBE) in the Miscellaneous Processing batch program.
\n
\nYou cannot view or perform file maintenance on this field.
`)
nameRecordFields.set("mbrfmlastpurgedate", ` 
\n### MBR FM History Purge Date
\n
\n The system stores the date in this field through which file maintenance history for Member records was last purged by the Purge Transaction Processing batch program.
\nField Number         **086**
\nMnemonic             **MBRFMLASTPURGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system uses this field to reference linked Member record fields. Whenever file maintenance history is purged, the system updates this field with a date calculated by subtracting one day from the date entered at the Save FM History From prompt.
\n
\nYou cannot view or perform file maintenance on this field from the Name record.
`)
nameRecordFields.set("addrfmlastpurgedate", ` 
\n### ADDR FM History Purge Date
\n
\n The system stores the date in this field through which file maintenance history for Member Address records was last purged by the Purge Transaction Processing batch program.
\nField Number         **087**
\nMnemonic             **ADDRFMLASTPURGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system uses this field to reference linked Member Address Record Fields. Whenever file maintenance history is purged, the system updates this field with a date calculated by subtracting one day from the date entered at the Save FM History From prompt.
\n
\nYou cannot view or perform file maintenance on this field from the Name record.
`)
nameRecordFields.set("fmlastpurgedate", ` 
\n### FM History Purge Date
\n
\n The system stores the date in this field through which file maintenance history for Name records was last purged by the Purge Transaction Processing batch program.
\nField Number         **088**
\nMnemonic             **FMLASTPURGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever file maintenance history is purged, the system updates this field with a date calculated by subtracting one day from the date entered at the Save FM History From prompt.
\n
\nYou cannot view or perform file maintenance on this field.
`)
nameRecordFields.set("mbrrecordchangedate", ` 
\n### MBR Record Change Date
\n
\n The system stores the system date in this field when a user changes a field value on the Member record.
\nField Number         **091**
\nMnemonic             **MBRRECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system uses this field to reference linked Member record fields. The system updates this field only if the change is made from the Member record. If you change a field on the Name record that results in a change to the corresponding field on the Member record, the system does not update this field in the Member record.
\n
\nYou cannot view or perform file maintenance on this field.
`)
nameRecordFields.set("mbrdisconnectdate", ` 
\n### MBR Disconnect Date
\n
\n The system stores the date in this field when a Member record is no longer linked with any Name or Non-account Name records due to a merge situation.
\nField Number         **092**
\nMnemonic             **MBRDISCONNECTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system uses this field to reference linked Member record fields. The record is retained in order to retain FM History. This field is used to purge these Member records when you run the Purge Member Processing batch program.
\n
\nYou cannot view or perform file maintenance on this field.
`)
nameRecordFields.set("addrrecordchangedate", ` 
\n### ADDR Record Change Date
\n
\n The system stores the system date in this field when a user changes a field value on the Member Address record.
\nField Number         **093**
\nMnemonic             **ADDRRECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system uses this field to reference linked Member record fields. The system updates this field only if the change is made from the Member Address record. If you change a field on the Name record that results in a change to the corresponding field on the Member Address record, the system does not update this field in the Member record.
\n
\nYou cannot view or perform file maintenance on this field.
`)
nameRecordFields.set("addrdisconnectdate", ` 
\n### ADDR Disconnect Date
\n
\n The system stores the date in this field when a Member Address record is no longer linked with any Name records due to a merge situation.
\nField Number         **094**
\nMnemonic             **ADDRDISCONNECTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe system uses this field to reference linked Member record fields. The record is retained in order to retain FM History. This field is used to purge these Member Address records when you run the Purge Member Processing batch program.
\n
\nYou cannot view or perform file maintenance on this field.
`)
nameRecordFields.set("mbrfiletype", ` 
\n### MBR File Type
\n
\n This field stores a code that indicates whether the Member record is linked to a Name or Non-account Name record.
\nField Number         **095**
\nMnemonic             **MBRFILETYPE**
\nData Type            **Code to 2**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system uses this field to reference linked Member record fields.
\n
\n#### Data Type Descriptions
\n##### (0) Disconnect
\n   This Member record is not linked with any Name record or with any Non-account Name record.##### (1) Account
\n   This Member record is linked with a Name record (which is in the Account database).##### (2) Non-account
\n   This Member record is not linked with a Name record in the Account database. It is linked with a non-account Name record.
\nThis field is used by the system only and cannot be viewed or file maintained.
`)
nameRecordFields.set("mbraddrfiletype", ` 
\n### ADDR File Type
\n
\n This field stores a code that indicates whether the Member Address record is linked to a Name or Non-account Name record.
\nField Number         **096**
\nMnemonic             **MBRADDRFILETYPE**
\nData Type            **Code to 1**
\nSource               **System-entered**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system uses this field to reference linked Member record fields.
\n
\n#### Data Type Descriptions
\n##### (0) Disconnect
\n   This Member Address record is not linked with any Name record or with any Non-account Name record.##### (1) Connected
\n   This Member Address record is linked with a Name and/or Non-account Name record.
\nThis field is used by the system only and cannot be viewed or file maintained.
`)
nameRecordFields.set("dbaextendedname", ` 
\n### DBA Extended Name
\n
\n The system stores the characters over 40 entered in the DBA Last Name/Non Indiv Name field in this field when the DBA Name Format field value is set to (1) Non-Individual.
\nField Number         **108**
\nMnemonic             **DBAEXTENDEDNAME**
\nData Type            **40 Characters**
\nSource               **System-entered**
\nHelp File            **00166**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nThe system does not display this field, but instead it displays the DBA Non-Indiv Name field when the DBA Name Format field value is set to (1) Non-Individual. If you enter more than 40 characters (up to 80 characters) in the DBA Last Name/Non Indiv Name field, the system stores the second 40 characters in this field.
\n
\n***Important:***  When you hover over the DBA Non-Indiv Name field, the system displays the complete "doing business as" information (up to 80 characters).
\n
\nYou can view and perform file maintenance on this field in PowerOn specfiles, SymConnect, and the Perform FM from PowerOn Output function of the Miscellaneous Processing batch program.
\n
\nAlthough the value for this field is accessible using PowerOn specfiles and SymConnect from the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
\n
\nThis field is only used by CTR processing and this information is not searched by lookup or printed on member statements.
`)
nameRecordFields.set("activeduty", ` 
\n### Active Duty
\n
\n This field stores a code that indicates whether the member is on active duty with the military or a dependent of someone who is.
\nField Number         **120**
\nMnemonic             **ACTIVEDUTY**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31628**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe system does not currently use this field.
\n
\n#### Data Type Descriptions
\n##### (0) Not in Active Duty Service
\n   This member is not currently on active duty in the military.##### (1) Active Duty
\n   This member is currently on active duty in the military.##### (2) Active Duty Dependent
\n   This member is a dependent of someone currently on active duty in the military.
\nAlthough the value for this field is accessible using PowerOn specfiles and SymConnect from the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
`)
nameRecordFields.set("activedutyverificationdate", ` 
\n### Active Duty Verification Date
\n
\n This field stores the date on which the user verified the information that was entered in the Active Duty field.
\nField Number         **121**
\nMnemonic             **ACTIVEDUTYVERIFICATIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31629**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe date can be in the past or present, but not in the future.
\n
\nThe system does not currently use this field.
\n
\nAlthough the value for this field is accessible using PowerOn specfiles and SymConnect from the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
`)
nameRecordFields.set("activedutystartdate", ` 
\n### Active Duty Start Date
\n
\n This field stores the date on which the member (or the person on whom the member is dependent) began active military duty.
\nField Number         **122**
\nMnemonic             **ACTIVEDUTYSTARTDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31630**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe date can be in the past, present, or future.
\n
\nIf there is a value for the Active Duty Separation Date field, the value in this field must be before or equal to the value in the Active Duty Separation Date field.
\n
\nThe system does not currently use this field.
\n
\nAlthough the value for this field is accessible using PowerOn specfiles and SymConnect from the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
`)
nameRecordFields.set("activedutyseparationdate", ` 
\n### Active Duty Separation Date
\n
\n This field stores the date on which the member (or the person on whom the member is dependent) ended active military duty.
\nField Number         **123**
\nMnemonic             **ACTIVEDUTYSEPARATIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31631**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThe date can be in the past, present, or future.
\n
\nIf there is a value for the Active Duty Start Date field, the value in this field must be on or after the value in the Active Duty Separation Date field.
\n
\nThe system does not currently use this field.
\n
\nAlthough the value for this field is accessible using PowerOn specfiles and SymConnect from the Name record, it is not in the Name record. The value in this field is actually stored in the related Member record field.
`)
nameRecordFields.set("shortname", ` 
\n### Short Name
\n
\n This field contains the computed short name of up to 16 characters to be used in displays and on reports.
\nField Number         **800**
\nMnemonic             **SHORTNAME**
\nData Type            **16 Characters**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nSpace permitting, this field includes the Last Name field value, a comma, the First Name field value, a space, and the initial of the Middle Name field. (The first and last names are mandatory, but the middle name or initial is optional.) This field can also includes up to four characters of the Suffix field value, if any.
\n
\nYou cannot access this field for file maintenance.
`)
nameRecordFields.set("longname", ` 
\n### Long Name
\n
\n This field contains the computed long name of up to 40 characters that can be accessed with PowerOn for displays and reports.
\nField Number         **801**
\nMnemonic             **LONGNAME**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nSpace permitting, this field includes the Title field value (if any), a space, the First Name field value, a space, the Middle Name field value (or middle initial), a space, the Last Name field value, a space, and the Suffix field value (if any).
\n
\nYou cannot access this field for file maintenance.
`)
nameRecordFields.set("dbashortname", ` 
\n### DBA Short Name
\n
\n This field contains the computed short name of up to 16 characters to be used in displays and on reports as "doing business as" information.
\nField Number         **808**
\nMnemonic             **DBASHORTNAME**
\nData Type            **16 Characters**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nSpace permitting, this field includes the DBA Last Name field value, a comma, the DBA First Name field value, a space, and the initial of the DBA Middle Name field.
\n
\nYou cannot access this field for file maintenance.
`)
nameRecordFields.set("dbalongname", ` 
\n### DBA Long Name
\n
\n This field contains the computed long name of up to 40 characters that can be accessed with PowerOn for displays and reports as "doing business as" information.
\nField Number         **809**
\nMnemonic             **DBALONGNAME**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nSpace permitting, this field includes the DBA Title field value (if any), a space, the DBA First Name field value, a space, the DBA Middle Name field value (or middle initial), a space, the DBA Last Name field value, a space, and the DBA Suffix field value (if any).
\n
\nYou cannot access this field for file maintenance.
`)
