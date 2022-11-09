export const loanAppPersonRecordFields = new Map<string, string>()
loanAppPersonRecordFields.set("title", ` 
\n### Name Title
\nThis field stores the person's title.
\nField Number         **007**
\nMnemonic             **TITLE**
\nData Type            **8 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01907**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the person's title (up to 8 characters).
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("first", ` 
\n### First Name
\nThis field stores the person's first name.
\nField Number         **008**
\nMnemonic             **FIRST**
\nData Type            **20 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01908**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the person's first name (up to 20 characters).
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("middle", ` 
\n### Middle Name
\nThis field stores the person's middle name.
\nField Number         **009**
\nMnemonic             **MIDDLE**
\nData Type            **10 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01909**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the person's middle name or initial (up to 10 characters).
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("last", ` 
\n### Last Name/Non Indiv Name
\nThis field stores the person's last name or the non-individual description.
\nField Number         **010**
\nMnemonic             **LAST**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01910**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the person's last name (up to 40 characters). This entry is required.
\n***Important:***  If the value in the Name Format field is set to (1) Non-Individual, this field displays as Non Indiv Name and the Name Title, First Name, Middle Name, and Name Suffix fields are blank and not displayed. If you enter more than 40 characters (up to 80 characters) in this field, the second 40 characters are stored in the Extended Name field but displayed here if you hover the cursor on the field.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("suffix", ` 
\n### Name Suffix
\nThis field stores any suffix to the person's name.
\nField Number         **011**
\nMnemonic             **SUFFIX**
\nData Type            **4 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01911**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter any suffix to the person's name (up to 4 characters).
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("extrainfo", ` 
\n### Extra Information
\nThis field stores a line of miscellaneous information.
\nField Number         **104**
\nMnemonic             **EXTRAINFO**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **02006**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter a line of miscellaneous information (up to 40 characters), if appropriate.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("addresstype", ` 
\n### Address Type
\nThis field stores a code that indicates whether the address should be in the U.S. Postal Service standard format or a foreign format.
\nField Number         **065**
\nMnemonic             **ADDRESSTYPE**
\nData Type            **Code to 2**
\nSource               **User-entered or System-entered**
\nHelp File            **01965**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Domestic Address
\n   The person lives in the United States.##### (1) Foreign Address
\n   The person lives outside the United States. This selection places the ZIP Code field before the city and state fields in the address line.##### (2) Foreign Address Zip Last
\n   The person lives outside the United States. This selection places the ZIP Code field after the city and state fields in the address line.
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("extraaddress", ` 
\n### Extra Address
\nThis field stores an extra address line.
\nField Number         **012**
\nMnemonic             **EXTRAADDRESS**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01912**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter an extra address line (up to 40 characters), if appropriate.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("street", ` 
\n### Street Address
\nThis field stores the person's street address.
\nField Number         **013**
\nMnemonic             **STREET**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01913**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the person's street address (up to 40 characters).
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("city", ` 
\n### City
\nThis field stores the person's city.
\nField Number         **014**
\nMnemonic             **CITY**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01914**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the person's city (up to 40 characters).
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("state", ` 
\n### State
\nThis field stores the person's state.
\nField Number         **015**
\nMnemonic             **STATE**
\nData Type            **10 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01915**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the person's state (up to 10 characters). For addresses in the United States, use the two-character U.S. Postal Service abbreviation for the state.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("zipcode", ` 
\n### Zip Code
\nThis field stores the person's city.
\nField Number         **016**
\nMnemonic             **ZIPCODE**
\nData Type            **10 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01916**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the person's ZIP Code (in either the ##### or #####-#### format).
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("county", ` 
\n### County
\nThis field stores the county in which the person resides.
\nField Number         **073**
\nMnemonic             **COUNTY**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01973**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the county in which the person resides (up to 40 characters).
`)
loanAppPersonRecordFields.set("country", ` 
\n### Country
\nThis field stores the country in which the person resides.
\nField Number         **074**
\nMnemonic             **COUNTRY**
\nData Type            **20 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01974**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nYou can enter the country in which the person resides (up to 20 characters) if the value in the Address Type field is set to (1) Foreign Address or (2) Foreign Address Zip Last; it must be blank otherwise. The Country field is added as the last line for foreign addresses.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("countrycode", ` 
\n### Country Code
\nThis field stores the two-character country code where the person resides.
\nField Number         **075**
\nMnemonic             **COUNTRYCODE**
\nData Type            **2 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01975**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nYou can enter the 2-character code where the person resides if the value in the Address Type field is set to (1) Foreign Address or (2) Foreign Address Zip Last; it must be blank otherwise. The Country Code field is used for IRS reporting.
\n
\nWe recommend that you use the ISO 3166 two-character country code in this field for foreign addresses. See Country Codes for a complete list of country codes.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("phonetype", ` 
\n### Phone Type
\nThis field stores a code that indicates a domestic or foreign phone number type.
\nField Number         **106**
\nMnemonic             **PHONETYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01988**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Domestic
\n   This phone is a domestic phone number type. This setting adjusts the phone number field to a defined domestic format.##### (1) Foreign
\n   This phone is a foreign phone number type. This setting adjusts the phone number field to a free form foreign phone number.
\nWhen you perform file maintenance, if you change the value in the Phone Type field from (1) Foreign to (0) Domestic, Symitar Quest verifies that the values in the Mobile Phone, Pager Number, Home Phone, Work Phone, and Work Phone Ext fields are in the proper domestic format. If the values in the pager and phone fields are not domestic format, Symitar Quest replaces the field contents with blanks. Change the field values to a domestic format before changing the value in the Phone Type field from (1) Foreign to (0) Domestic.
`)
loanAppPersonRecordFields.set("preferredcontact", ` 
\n### Preferred Contact
\nThis field contains the preferred contact method.
\nField Number         **804**
\nMnemonic             **PREFERREDCONTACT**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **58203**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nThis field is a calculated field, based on the value you selected for the Preferred Contact Method field. In other words, this field displays the calculated field value of the type that you selected in the Preferred Contact Method field.
`)
loanAppPersonRecordFields.set("homephone", ` 
\n### Home Phone
\nThis field stores the person's home telephone number.
\nField Number         **017**
\nMnemonic             **HOMEPHONE**
\nData Type            **16 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01917**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the person's home telephone number (up to 16 characters).
\nEnter domestic phone numbers in the following formats: xxxxxxx, xxx-xxxx, xxxxxxxxxx, or xxx-xxx-xxxx (x represents a digit). Symitar Quest automatically reformats these entries into the standard formats. For example:
\n   - 5426700         becomes  ____542-6700
\n   - 542-6700        becomes  ____542-6700
\n   - 6195426700      becomes  619-542-6700
\n   - 619-542-6700    becomes  619-542-6700
\n
\n   - When using batch file maintenance, FMPERFORM, SymConnect, or SymXchange to set a phone number in an Application Person record, one of the following formats must be used: xxx-xxx-xxxx or ____xxx-xxxx (x represents a digit and _ represents a space).
\n
\n   - Enter phone numbers for foreign phone number free format. Phone numbers are considered to be foreign if the value in the Phone Type field is set to (1) Foreign. Although Symitar Quest does not check the format, we recommend that you enter foreign phone numbers in the following format:
\n   - <Country Code>-<city code>-<phone number>
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("workphone", ` 
\n### Work Phone
\nThis field stores the person's work telephone number.
\nField Number         **018**
\nMnemonic             **WORKPHONE**
\nData Type            **16 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01918**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the person's work telephone number (up to 16 characters).
\nEnter domestic phone numbers in the following formats: xxxxxxx, xxx-xxxx, xxxxxxxxxx, or xxx-xxx-xxxx (x represents a digit). Symitar Quest automatically reformats these entries into the standard formats. For example:
\n   - 5426700         becomes  ____542-6700
\n   - 542-6700        becomes  ____542-6700
\n   - 6195426700      becomes  619-542-6700
\n   - 619-542-6700    becomes  619-542-6700
\n
\n   - When using batch file maintenance, FMPERFORM, SymConnect, or SymXchange to set a phone number in an Application Person record, one of the following formats must be used: xxx-xxx-xxxx or ____xxx-xxxx (x represents a digit and _ represents a space).
\n
\n   - Enter phone numbers for foreign phone number free format. Phone numbers are considered to be foreign if the value in the Phone Type field is set to (1) Foreign. Although Symitar Quest does not check the format, we recommend that you enter foreign phone numbers in the following format:
\n   - <Country Code>-<city code>-<phone number>
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("workphoneextension", ` 
\n### Work Phone Ext
\nThis field stores the person's telephone extension number at work.
\nField Number         **019**
\nMnemonic             **WORKPHONEEXTENSION**
\nData Type            **6 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01919**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the person's telephone extension number at work (up to 6 characters).
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("mobilephone", ` 
\n### Mobile Phone
\nThis field stores the number for the person's cell phone or other mobile phone device (if any).
\nField Number         **092**
\nMnemonic             **MOBILEPHONE**
\nData Type            **16 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01992**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the number for the person's cell phone or other mobile phone device (if any).
\nEnter domestic phone numbers in the following formats: xxxxxxx, xxx-xxxx, xxxxxxxxxx, or xxx-xxx-xxxx (x represents a digit). Symitar Quest automatically reformats these entries into the standard formats. For example:
\n   - 5426700         becomes  ____542-6700
\n   - 542-6700        becomes  ____542-6700
\n   - 6195426700      becomes  619-542-6700
\n   - 619-542-6700    becomes  619-542-6700
\n
\n   - When using batch file maintenance, FMPERFORM, SymConnect, or SymXchange to set a phone number in an Application Person record, one of the following formats must be used: xxx-xxx-xxxx or ____xxx-xxxx (x represents a digit and _ represents a space).
\n
\n   - Enter phone numbers for foreign phone number free format. Phone numbers are considered to be foreign if the value in the Phone Type field is set to (1) Foreign. Although Symitar Quest does not check the format, we recommend that you enter foreign phone numbers in the following format:
\n   - <Country Code>-<city code>-<phone number>
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("pagernumber", ` 
\n### Pager Number
\nThis field stores the number for the person's pager (if any).
\nField Number         **093**
\nMnemonic             **PAGERNUMBER**
\nData Type            **16 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01993**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the number for the person's pager (if any).
\nEnter domestic phone numbers in the following formats: xxxxxxx, xxx-xxxx, xxxxxxxxxx, or xxx-xxx-xxxx (x represents a digit). Symitar Quest automatically reformats these entries into the standard formats. For example:
\n   - 5426700         becomes  ____542-6700
\n   - 542-6700        becomes  ____542-6700
\n   - 6195426700      becomes  619-542-6700
\n   - 619-542-6700    becomes  619-542-6700
\n
\n   - When using batch file maintenance, FMPERFORM, SymConnect, or SymXchange to set a phone number in an Application Person record, one of the following formats must be used: xxx-xxx-xxxx or ____xxx-xxxx (x represents a digit and _ represents a space).
\n
\n   - Enter phone numbers for foreign phone number free format. Phone numbers are considered to be foreign if the value in the Phone Type field is set to (1) Foreign. Although Symitar Quest does not check the format, we recommend that you enter foreign phone numbers in the following format:
\n   - <Country Code>-<city code>-<phone number>
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("email", ` 
\n### E-Mail Address
\nThis field stores the person's email address.
\nField Number         **076**
\nMnemonic             **EMAIL**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01976**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the email address of the person identified in this Person record. You can enter this address in lowercase letters.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("altemail", ` 
\n### Alt E-Mail Address
\nThis field stores the person's alternate email address.
\nField Number         **090**
\nMnemonic             **ALTEMAIL**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01990**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nYou can enter an alternate email address for the person identified in this Person record. You can enter this address in lowercase letters.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("preferredcontactmethod", ` 
\n### Preferred Contact Method
\nThis field stores a code that indicates how the member wants to receive information from the credit union.
\nField Number         **107**
\nMnemonic             **PREFERREDCONTACTMETHOD**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **31626**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Specified
\n   Symitar Quest puts the calculated field value formatted as follows in the Preferred Contact field:
\n       - Not Specified: <home phone>
\n##### (1) Call Home Phone
\n   Symitar Quest puts the calculated field value formatted as follows in the Preferred Contact field:
\n       - Phone: <home phone>
\n##### (2) Call Work Phone
\n   Symitar Quest puts the calculated field value formatted as follows in the Preferred Contact field:
\n       - Phone: <work phone> [<extension>]
\n##### (3) Call Mobile Phone
\n   Symitar Quest puts the calculated field value formatted as follows in the Preferred Contact field:
\n       - Phone: <mobile phone>
\n##### (4) Page
\n   Symitar Quest puts the calculated field value formatted as follows in the Preferred Contact field:
\n       - Page: <pager phone>
\n##### (5) Text Message to Home Phone
\n   Symitar Quest puts the calculated field value formatted as follows in the Preferred Contact field:
\n       - Text: <home phone>
\n##### (6) Text Message to Mobile Phone
\n   Symitar Quest puts the calculated field value formatted as follows in the Preferred Contact field:
\n       - Text: <mobile phone>
\n##### (7) Email to Primary Email Address
\n   Symitar Quest puts the calculated field value formatted as follows in the Preferred Contact field:
\n       - <primary email address>
\n##### (8) Email to Alternate Email Address
\n   Symitar Quest puts the calculated field value formatted as follows in the Preferred Contact field:
\n       - <alternate email address>
\n##### (9) Mail
\n   Symitar Quest puts the calculated field value formatted as follows in the Preferred Contact field:
\n       - Mail
\nWhen you select a Preferred Contact Method, and the field for that method is blank, Symitar Quest displays an error message. For example, if you select option (2) Work Phone, but the Work Phone field is blank. Symitar Quest displays this message:
\nPreferred Contact Method selected is blank
`)
loanAppPersonRecordFields.set("nameformat", ` 
\n### Name Format
\nThis field stores a code that indicates whether the name is an individual or not.
\nField Number         **102**
\nMnemonic             **NAMEFORMAT**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **02004**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Individual
\n   The name in this record is for an individual.##### (1) Non-Individual
\n   The name in this record is for a non-individual, such as a business.
\n`)
loanAppPersonRecordFields.set("type", ` 
\n### Type
\nThis field stores a code that identifies the kind of Person record.
\nField Number         **066**
\nMnemonic             **TYPE**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **01966**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter a credit union-defined code (0-9) to identify the kind of Person record. Because type codes are credit union-defined, you should create a help file for this field listing the valid type codes and their descriptions.
`)
loanAppPersonRecordFields.set("personcode", ` 
\n### Person Code
\nThis field stores a code that indicates the relationship of this person to the application.
\nField Number         **001**
\nMnemonic             **PERSONCODE**
\nData Type            **Code to 13**
\nSource               **User-entered or System-entered**
\nHelp File            **01901**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Main Applicant
\n   This person is the main applicant.
\n       - Important: If you select this option, Symitar Quest does not automatically create Loan Name records during Application Processing.
\n##### (1) Current Spouse
\n   This person is the current spouse of the applicant.##### (2) Previous Spouse
\n   This person is a previous spouse of the applicant.##### (3) Coborrower
\n   This person is a co-borrower.##### (4) Cosigner
\n   This person is a cosigner for the loan.##### (5) Membership
\n   This person is applying for membership in the credit union.
\n       - Important: If you select this option, Symitar Quest does not automatically create Loan Name records during Application Processing.
\n##### 6–9
\n   This credit union-defined option describes the relationship of this person to the applicant. You can use a help file to display your defined options.##### (10) Loan Co-Maker
\n   This person signs a promissory note for the loan and shares responsibility for the loan repayment with the primary borrower.##### (11) Loan Co-Applicant
\n   This person applies for the loan together with the primary borrower and shares responsibility for the loan repayment.##### (12) Guarantor
\n   This person guarantees and carries the legal obligation for the loan.##### (13) Property Address
\n   To identify that this Application Person record is for property address information, select this option and type PROPERTY in the Last Name field in the Application Person Record.
\n   
\n       - Using an Application Person record for property address information is especially helpful when you use the Copy Other Name action field of a Name record.
\n   
\n   
\n   
\n   
\n   
\n       - If you set this field to this option and choose to use the Update Name Record action field, Symitar Quest updates the Name Type field of the Name record you select at the Choice prompt to (29) Property Address.
\n   
\n       - If you choose to use the Update Fields action field, and select a Name record with the value in the Name Type field set to (29) Property Address, Symitar Quest updates the value of the Person Code field of that Name record to (13) Property Address.
`)
loanAppPersonRecordFields.set("accountnumber", ` 
\n### Member Account Number
\nThis field stores the person's account number.
\nField Number         **002**
\nMnemonic             **ACCOUNTNUMBER**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01902**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the person's account number in either of these ways:
\nEnter the person's account number (10 Characters).
\n   - Type * to look up and select account numbers.
`)
loanAppPersonRecordFields.set("ssn", ` 
\n### SSN/TIN
\nThis field stores the person's account number.
\nField Number         **020**
\nMnemonic             **SSN**
\nData Type            **9 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01920**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the person's Social Security Number or individual Taxpayer Identification Number (9 digits).
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date in this field when you create, change, or save the Application Person record. Sometimes Symitar Quest updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **105**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **02007**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  Symitar Quest does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
loanAppPersonRecordFields.set("birthdate", ` 
\n### Birthdate
\nThis field stores the person's date of birth.
\nField Number         **003**
\nMnemonic             **BIRTHDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01903**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the person's date of birth.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("maritalstatus", ` 
\n### Marital Status
\nThis field stores a code that indicates the person's marital status.
\nField Number         **004**
\nMnemonic             **MARITALSTATUS**
\nData Type            **Code to 8**
\nSource               **User-entered**
\nHelp File            **01904**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Single
\n   This person is single.##### (1) Married
\n   This person is married.##### (2) Divorced
\n   This person is divorced.##### (3) Widowed
\n   This person is widowed.##### (4) Separated
\n   This person is separated.##### (5) Unmarried
\n   This person is unmarried.##### (6) Living with Another
\n   This person is living with another individual.##### (7) Unknown
\n   Do not know the person's marital status. Use this as the default value for all newly created records.##### (8) Not Asked
\n   Did not ask this person his or her marital status.
\n`)
loanAppPersonRecordFields.set("educationyears", ` 
\n### Education Years
\nThis field stores the total number of years of education the person has completed.
\nField Number         **005**
\nMnemonic             **EDUCATIONYEARS**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01905**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter the total number of years of education (0-99) this person has completed.
`)
loanAppPersonRecordFields.set("sex", ` 
\n### Sex
\nThis field stores a code that indicates the person's sex.
\nField Number         **006**
\nMnemonic             **SEX**
\nData Type            **1 Character**
\nSource               **User-entered**
\nHelp File            **01906**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter one of the following:
\nType F if this person is female.
\n   - Type M if this person is male.
`)
loanAppPersonRecordFields.set("citizenship", ` 
\n### Citizenship
\nThis field stores a code that indicates whether the individual is a U.S. citizen.
\nField Number         **068**
\nMnemonic             **CITIZENSHIP**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01968**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) US
\n   This person is a U.S. citizen.##### (1) Foreign
\n   This person is a citizen of any country other than the U.S.
\n`)
loanAppPersonRecordFields.set("mothersmaidenname", ` 
\n### Mother's Maiden Name
\nThis field stores the maiden name of the person's mother.
\nField Number         **067**
\nMnemonic             **MOTHERSMAIDENNAME**
\nData Type            **20 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01967**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the maiden name of the person's mother (up to 20 characters).
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("othercreditname", ` 
\n### Other Credit Name
\nThis field stores any other name the person uses for credit accounts.
\nField Number         **026**
\nMnemonic             **OTHERCREDITNAME**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **01926**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter any other name the person uses for credit accounts (up to 20 characters). For example, you could store a maiden name, stage name, or any other alias in this field.
`)
loanAppPersonRecordFields.set("uspersonflag", ` 
\n### U.S. Person Flag
\nThis field stores a code that specifies whether the person is a citizen of the United States, or whether the business identified is established or organized under the laws of a state or the United States.
\nField Number         **094**
\nMnemonic             **USPERSONFLAG**
\nData Type            **Code to 1**
\nSource               **User-entered or System-entered**
\nHelp File            **01994**
\nDefault Control      **No**
\nDefault Value **1**
\n
\n***Important:***  The value for this field is not actually kept in the Person record. Instead, this is a referenced field that displays the values from the corresponding Member record field linked to the Person record. File maintenance of this field can be done in the Person record with the changes being applied to the Member record and displayed in the Name record.
\n#### Data Type Descriptions
\n##### (0) Not a U.S. Person
\n   The person or business defined in this record does not have a valid SSN, TIN, or EIN.##### (1) U.S. Person
\n   The person (a United States citizen) or business defined in this record has a valid SSN, TIN, or EIN.
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("lei", ` 
\n### Legal Entity Identifier
\nThis field stores the unique alpha-numeric code associated with a single corporate entity for international financial market record keeping.
\nField Number         **128**
\nMnemonic             **LEI**
\nData Type            **20 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01951**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the unique alpha-numeric code (20 Characters) associated with a single corporate entity for international financial market record keeping.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("beneficialowner", ` 
\n### Beneficial Owner Type
\nThis field stores a code that specifies whether the person directly or indirectly owns 25% or more of the equity interests or has significant responsibility to control, manage, or direct the legal entity customer.
\nField Number         **126**
\nMnemonic             **BENEFICIALOWNER**
\nData Type            **Code to 3**
\nSource               **User-entered or System-entered**
\nHelp File            **01952**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) None
\n   The person has no ownership or control over the legal entity customer.##### (1) Owner
\n   The person directly or indirectly owns 25% or more of the equity interests of the legal entity customer.##### (2) Control
\n   The person has significant responsibility to control, manage, or direct the legal entity customer.##### (3) Owner and Control
\n   The person directly or indirectly owns 25% or more of the equity interests and has significant responsibility to control, manage, or direct the legal entity customer.
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("beneficialpercent", ` 
\n### Beneficial Owner Percentage
\nThis field stores the percentage of the equity interests of the legal entity customer that this person owns.
\nField Number         **127**
\nMnemonic             **BENEFICIALPERCENT**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **01953**
\nDefault Control      **No**
\nDefault Value **.000**
\n
\nEnter the percentage of the equity interests of the legal entity customer that this person owns.
\n
\nA person who, directly or indirectly, owns 25% or more of a legal entity customer is considered a beneficial owner of that entity.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("activeduty", ` 
\n### Active Duty
\nThis field stores a code that identifies whether the borrower, or a family member, is in active military service.
\nField Number         **122**
\nMnemonic             **ACTIVEDUTY**
\nData Type            **Code to 2**
\nSource               **User-entered or System-entered**
\nHelp File            **02023**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not in Active Duty Service
\n   Neither the borrower, nor a family member, are in active military service.##### (1) Active Duty
\n   The borrower is in active military service.##### (2) Active Duty Dependent
\n   A family member of the borrower is in active military service.
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("activedutyverificationdate", ` 
\n### Active Duty Verification Date
\nThis field stores the date when you verify that the borrower is on active duty or is the dependent of someone on active duty.
\nField Number         **123**
\nMnemonic             **ACTIVEDUTYVERIFICATIONDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **02024**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter a current date or a past date, but not a future date.
\n
\nThe value in this field must be earlier than the value in the Active Duty Separation Date field.
\n
\nThis field stores a borrower's active military status information; Symitar Quest does not use this field.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("activedutystartdate", ` 
\n### Active Duty Start Date
\nThis field stores the date when the borrower begins active duty or is the dependent of someone who begins active duty.
\nField Number         **124**
\nMnemonic             **ACTIVEDUTYSTARTDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **02025**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nYou can enter a past date, a future date, or for someone already on active duty, the present date.
\n
\nThe value in this field must be earlier than the value in the Active Duty Separation Date field.
\n
\nThis field stores a borrower's active military status information; Symitar Quest does not use this field.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("activedutyseparationdate", ` 
\n### Active Duty Separation Date
\nThis field stores the date when the borrower is no longer on active duty or is the dependent of someone no longer on active duty.
\nField Number         **125**
\nMnemonic             **ACTIVEDUTYSEPARATIONDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **02026**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nYou can enter a current date or a past date, but not a future date.
\n
\nThe value in this field must be later than the values in both the Active Duty Verification Date and Active Duty Start Date fields.
\n
\nThis field stores a borrower's active military status information; Symitar Quest does not use this field.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("identdocflag", ` 
\n## IDENTDOCFLAG:1
\n### Documentary Flag 1
\nThis field stores a code that specifies whether the first form of identification was supported with documentary evidence.
\nField Number         **095:1**
\nMnemonic             **IDENTDOCFLAG:1**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01995**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Non-documentary identification
\n   The first form of identification was not supported with documentary evidence.##### (1) Documentary identification
\n   The first form of identification was supported with documentary evidence.
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
\n
\n## IDENTDOCFLAG:2
\n### Documentary Flag 2
\nThis field stores a code that specifies whether the second form of identification was supported with documentary evidence.
\nField Number         **095:002**
\nMnemonic             **IDENTDOCFLAG:2**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01995**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Non-documentary identification
\n   The second form of identification was not supported with documentary evidence.##### (1) Documentary identification
\n   The second form of identification was supported with documentary evidence.
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
\n
\n## IDENTDOCFLAG:3
\n### Documentary Flag 3
\nThis field stores a code that specifies whether the third form of identification was supported with documentary evidence.
\nField Number         **095:003**
\nMnemonic             **IDENTDOCFLAG:3**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01995**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Non-documentary identification
\n   The third form of identification was not supported with documentary evidence.##### (1) Documentary identification
\n   The third form of identification was supported with documentary evidence.
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("identidtype", ` 
\n## IDENTIDTYPE:1
\n### ID Type 1
\nThis field stores a code that specifies the type of documentation (if any) that was used to support the first form of identification.
\nField Number         **096:1**
\nMnemonic             **IDENTIDTYPE:1**
\nData Type            **Code to 999**
\nSource               **User-entered**
\nHelp File            **01996**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Unknown
\n   Type of documentation used to support the first form of identification is unknown.##### (1) Known Existing Member
\n   The member is known at the credit union as the first form of identification.##### (2) State Drivers License
\n   A valid state drivers license is used as the first form of identification.##### (3) State ID Card
\n   A valid state ID card is used as the first form of identification.##### (4) US Passport
\n   A valid U.S. passport is used as the first form of identification.##### (5) Foreign Passport
\n   A valid foreign passport is used as the first form of identification.##### (6) Military ID Card
\n   A valid military ID card is used as the first form of identification.##### (7) Foreign Government Issued ID
\n   A valid foreign government issued ID is used as the first form of identification.##### (8) Resident Alien Card
\n   A valid resident alien card is used as the first form of identification.##### 9–100
\n   These codes have been reserved for future use. You cannot select these values.##### 101–999
\n   These codes are credit union-defined in the ID Type Description Parameters. They are initially set to ID Type XXX (XXX corresponds to the parameter number).
\n   
\n       - Any value set to ID Type XXX is considered undefined. Symitar Quest displays a drop-down menu of all defined values when you edit the ID Type 1 field. As with all file maintenance combo boxes, Symitar Quest displays the list in numeric order if you are displaying ordinals and in alphabetical order otherwise.
\n   
\n       - The following list is a guideline for the types of values you can set as your credit union-defined identification types. It is not meant to be a comprehensive or exclusive listing of values, since such a list does not exist:
\n       - Non-Documentary
\n       - Other Documentary
\n       - Articles of Incorporation
\n       - Birth Certificate
\n       - Credit Card
\n       - Firearm License
\n       - Foreign Drivers License
\n       - 	
\n       - Insurance Card
\n       - Organizational Membership Card
\n       - Property Tax Bill Social Security Card
\n       - Student Identification Card
\n       - Utility Bill
\n       - Visa
\n       - Voter Registration Card
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
\n
\n## IDENTIDTYPE:2
\n### ID Type 2
\nThis field stores a code that specifies the type of documentation (if any) that was used to support the second form of identification.
\nField Number         **096:002**
\nMnemonic             **IDENTIDTYPE:2**
\nData Type            **Code to 999**
\nSource               **User-entered**
\nHelp File            **01996**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Unknown
\n   Type of documentation used to support the second form of identification is unknown.##### (1) Known Existing Member
\n   The member is known at the credit union as the second form of identification.##### (2) State Drivers License
\n   A valid state drivers license is used as the second form of identification.##### (3) State ID Card
\n   A valid state ID card is used as the second form of identification.##### (4) US Passport
\n   A valid U.S. passport is used as the second form of identification.##### (5) Foreign Passport
\n   A valid foreign passport is used as the second form of identification.##### (6) Military ID Card
\n   A valid military ID card is used as the second form of identification.##### (7) Foreign Government Issued ID
\n   A valid foreign government issued ID is used as the second form of identification.##### (8) Resident Alien Card
\n   A valid resident alien card is used as the second form of identification.##### 9–100
\n   These codes have been reserved for future use. You cannot select these values.##### 101–999
\n   These codes are credit union-defined in the ID Type Description Parameters. They are initially set to ID Type XXX (XXX corresponds to the parameter number).
\n   
\n       - Any value set to ID Type XXX is considered undefined. Symitar Quest displays a drop-down menu of all defined values when you edit the ID Type 2 field. As with all file maintenance combo boxes, Symitar Quest displays the list in numeric order if you are displaying ordinals and in alphabetical order otherwise.
\n   
\n       - The following list is a guideline for the types of values you can set as your credit union-defined identification types. It is not meant to be a comprehensive or exclusive listing of values, since such a list does not exist:
\n       - Non-Documentary
\n       - Other Documentary
\n       - Articles of Incorporation
\n       - Birth Certificate
\n       - Credit Card
\n       - Firearm License
\n       - Foreign Drivers License
\n       - 	
\n       - Insurance Card
\n       - Organizational Membership Card
\n       - Property Tax Bill Social Security Card
\n       - Student Identification Card
\n       - Utility Bill
\n       - Visa
\n       - Voter Registration Card
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
\n
\n## IDENTIDTYPE:3
\n### ID Type 3
\nThis field stores a code that specifies the type of documentation (if any) that was used to support the third form of identification.
\nField Number         **096:003**
\nMnemonic             **IDENTIDTYPE:3**
\nData Type            **Code to 999**
\nSource               **User-entered**
\nHelp File            **01996**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Unknown
\n   Type of documentation used to support the third form of identification is unknown.##### (1) Known Existing Member
\n   The member is known at the credit union as the third form of identification.##### (2) State Drivers License
\n   A valid state drivers license is used as the third form of identification.##### (3) State ID Card
\n   A valid state ID card is used as the third form of identification.##### (4) US Passport
\n   A valid U.S. passport is used as the third form of identification.##### (5) Foreign Passport
\n   A valid foreign passport is used as the third form of identification.##### (6) Military ID Card
\n   A valid military ID card is used as the third form of identification.##### (7) Foreign Government Issued ID
\n   A valid foreign government issued ID is used as the third form of identification.##### (8) Resident Alien Card
\n   A valid resident alien card is used as the third form of identification.##### 9–100
\n   These codes have been reserved for future use. You cannot select these values.##### 101–999
\n   These codes are credit union-defined in the ID Type Description Parameters. They are initially set to ID Type XXX (XXX corresponds to the parameter number).
\n   
\n       - Any value set to ID Type XXX is considered undefined. Symitar Quest displays a drop-down menu of all defined values when you edit the ID Type 3 field. As with all file maintenance combo boxes, Symitar Quest displays the list in numeric order if you are displaying ordinals and in alphabetical order otherwise.
\n   
\n       - The following list is a guideline for the types of values you can set as your credit union-defined identification types. It is not meant to be a comprehensive or exclusive listing of values, since such a list does not exist:
\n       - Non-Documentary
\n       - Other Documentary
\n       - Articles of Incorporation
\n       - Birth Certificate
\n       - Credit Card
\n       - Firearm License
\n       - Foreign Drivers License
\n       - 	
\n       - Insurance Card
\n       - Organizational Membership Card
\n       - Property Tax Bill Social Security Card
\n       - Student Identification Card
\n       - Utility Bill
\n       - Visa
\n       - Voter Registration Card
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("identiddescription", ` 
\n## IDENTIDDESCRIPTION:1
\n### ID Description 1
\nThis field stores further detail about the corresponding ID type to support the first form of identification.
\nField Number         **097:1**
\nMnemonic             **IDENTIDDESCRIPTION:1**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01997**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter further details (up to 40 characters) about the corresponding value in the ID Type 1 field. For example, if the value in the ID Type 1 field is a driver's license, this field could contain the driver's license state. If the value in the ID Type 1 field is a non-US passport, this field could contain the county of issuance.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
\n
\n## IDENTIDDESCRIPTION:2
\n### ID Description 2
\nThis field stores further detail about the corresponding ID type to support the second form of identification.
\nField Number         **097:002**
\nMnemonic             **IDENTIDDESCRIPTION:2**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01997**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter further details (up to 40 characters) about the corresponding value in the ID Type 2 field. For example, if the value in the ID Type 2 field is a driver's license, this field could contain the driver's license state. If the value in the ID Type 2 field is a non-US passport, this field could contain the county of issuance.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
\n
\n## IDENTIDDESCRIPTION:3
\n### ID Description 3
\nThis field stores further detail about the corresponding ID type to support the third form of identification.
\nField Number         **097:003**
\nMnemonic             **IDENTIDDESCRIPTION:3**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01997**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter further details (up to 40 characters) about the corresponding value in the ID Type 3 field. For example, if the value in the ID Type 3 field is a driver's license, this field could contain the driver's license state. If the value in the ID Type 3 field is a non-US passport, this field could contain the county of issuance.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("identidnumber", ` 
\n## IDENTIDNUMBER:1
\n### ID Number 1
\nThis field stores the value of the type of identification specified by the corresponding ID type to support the first form of identification.
\nField Number         **098:1**
\nMnemonic             **IDENTIDNUMBER:1**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01998**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter a value of the type of identification specified by the corresponding value in the ID Type 1 field. For example, if the value in the ID Type 1 field is a driver's license, this field would contain the driver's license number.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
\n
\n## IDENTIDNUMBER:2
\n### ID Number 2
\nThis field stores the value of the type of identification specified by the corresponding ID type to support the second form of identification.
\nField Number         **098:002**
\nMnemonic             **IDENTIDNUMBER:2**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01998**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter a value of the type of identification specified by the corresponding value in the ID Type 2 field. For example, if the value in the ID Type 2 field is a driver's license, this field would contain the driver's license number.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
\n
\n## IDENTIDNUMBER:3
\n### ID Number 3
\nThis field stores the value of the type of identification specified by the corresponding ID type to support the third form of identification.
\nField Number         **098:003**
\nMnemonic             **IDENTIDNUMBER:3**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01998**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter a value of the type of identification specified by the corresponding value in the ID Type 3 field. For example, if the value in the ID Type 3 field is a driver's license, this field would contain the driver's license number.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("identidissuedate", ` 
\n## identidissuedate:1
\n### ID Issuance Date 1
\nThis field stores the date the type of identification specified by the corresponding ID type was issued, if known, to support the first form of identification.
\nField Number         **099:1**
\nMnemonic             **IDENTIDISSUEDATE:1**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01999**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date the type of identification specified by the corresponding value in the ID Type 1 field was issued, if known.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
\n
\n## IDENTIDISSUEDATE:2
\n### ID Issuance Date 2
\nThis field stores the date the type of identification specified by the corresponding ID type was issued, if known, to support the second form of identification.
\nField Number         **099:002**
\nMnemonic             **IDENTIDISSUEDATE:2**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01999**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date the type of identification specified by the corresponding value in the ID Type 2 field was issued, if known.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
\n
\n## IDENTIDISSUEDATE:3
\n### ID Issuance Date 3
\nThis field stores the date the type of identification specified by the corresponding ID type was issued, if known, to support the third form of identification.
\nField Number         **099:003**
\nMnemonic             **IDENTIDISSUEDATE:3**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01999**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date the type of identification specified by the corresponding value in the ID Type 3 field was issued, if known.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("identidexpiredate", ` 
\n## IDENTIDEXPIREDATE:1
\n### ID Expiration Date 1
\nThis field stores the date the type of identification specified by the corresponding ID type expires, if known, to support the first form of identification.
\nField Number         **100:1**
\nMnemonic             **IDENTIDEXPIREDATE:1**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **02001**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date the type of identification specified by the corresponding value in the ID Type 1 field expires, if known.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
\n
\n## IDENTIDEXPIREDATE:2
\n### ID Expiration Date 2
\nThis field stores the date the type of identification specified by the corresponding ID type expires, if known, to support the second form of identification.
\nField Number         **100:002**
\nMnemonic             **IDENTIDEXPIREDATE:2**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **02001**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date the type of identification specified by the corresponding value in the ID Type 2 field expires, if known.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
\n
\n## IDENTIDEXPIREDATE:3
\n### ID Expiration Date 3
\nThis field stores the date the type of identification specified by the corresponding ID type expires, if known, to support the third form of identification.
\nField Number         **100:003**
\nMnemonic             **IDENTIDEXPIREDATE:3**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **02001**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date the type of identification specified by the corresponding value in the ID Type 3 field expires, if known.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("identidverifydate", ` 
\n## IDENTIDVERIFYDATE:1
\n### ID Verification Date 1
\nThis field stores the date the type of identification specified by the corresponding ID type was verified to support the first form of identification.
\nField Number         **101:1**
\nMnemonic             **IDENTIDVERIFYDATE:1**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **02003**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date the type of identification specified by the corresponding value in the ID Type 1 field was verified.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
\n
\n## IDENTIDVERIFYDATE:2
\n### ID Verification Date 2
\nThis field stores the date the type of identification specified by the corresponding ID type was verified to support the second form of identification.
\nField Number         **101:002**
\nMnemonic             **IDENTIDVERIFYDATE:2**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **02003**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date the type of identification specified by the corresponding value in the ID Type 2 field was verified.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
\n
\n## IDENTIDVERIFYDATE:3
\n### ID Verification Date 3
\nThis field stores the date the type of identification specified by the corresponding ID type was verified to support the third form of identification.
\nField Number         **101:003**
\nMnemonic             **IDENTIDVERIFYDATE:3**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **02003**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date the type of identification specified by the corresponding value in the ID Type 3 field was verified.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("ownrentcurraddress", ` 
\n### Own or Rent Curr Address
\nThis field stores a code that specifies whether the person owns or rents the residence at the current address.
\nField Number         **063**
\nMnemonic             **OWNRENTCURRADDRESS**
\nData Type            **Code to 4**
\nSource               **User-entered**
\nHelp File            **01963**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Unknown
\n   Do not know if the person owns or rents the residence at the current address.##### (1) Own
\n   The person owns the residence at the current address.##### (2) Rent
\n   The person rents the residence at the current address.##### (3) Living with Others
\n   The person is living at a residence owned or rented by others.##### (4) Other
\n   The person has other residence arrangements.
\n`)
loanAppPersonRecordFields.set("ownrentprevaddress", ` 
\n### Own or Rent Prev Address
\nThis field stores a code that specifies whether the person owns or rents the residence at the previous address.
\nField Number         **064**
\nMnemonic             **OWNRENTPREVADDRESS**
\nData Type            **Code to 4**
\nSource               **User-entered**
\nHelp File            **01964**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Unknown
\n   Do not know if the person owned or rented the residence at the previous address.##### (1) Own
\n   The person owned the residence at the previous address.##### (2) Rent
\n   The person rented the residence at the previous address.##### (3) Living with Others
\n   The person was living at a residence owned or rented by others.##### (4) Other
\n   The person had other residence arrangements.
\n`)
loanAppPersonRecordFields.set("monthscurraddress", ` 
\n### Months Current Address
\nThis field stores the number of months the person has resided at the current address.
\nField Number         **061**
\nMnemonic             **MONTHSCURRADDRESS**
\nData Type            **Code to 999**
\nSource               **User-entered**
\nHelp File            **01961**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter the number of months (0-999) the person has resided at the current address.
`)
loanAppPersonRecordFields.set("previousaddress", ` 
\n### Previous Address
\nThis field stores the person's previous address.
\nField Number         **021**
\nMnemonic             **PREVIOUSADDRESS**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01921**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the person's previous address (up to 40 characters).
\n
\nIf you choose to use the Update Fields action field and select a Credit Report record at the Choice prompt, Symitar Quest updates this field with the previous address information from the Experian Version 6 Credit Report record you specify at the Choice prompt.
`)
loanAppPersonRecordFields.set("monthsprevaddress", ` 
\n### Months Previous Address
\nThis field stores the number of months the person resided at the previous address.
\nField Number         **062**
\nMnemonic             **MONTHSPREVADDRESS**
\nData Type            **Code to 999**
\nSource               **User-entered**
\nHelp File            **01962**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter the number of months (0-999) the person resided at the previous address.
`)
loanAppPersonRecordFields.set("derogstatus", ` 
\n### Derog Status 1 - Derog Status 6
\nThese fields each store a credit union-defined code to indicate a derogatory status.
\nField Number         **027:1 - 027:6**
\nMnemonic             **DEROGSTATUS:1 - DEROGSTATUS:6**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01927**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAt any of these six fields, you can enter a credit union-defined code (0-99) to indicate a derogatory status. Because derogatory status codes are credit union-defined, you should create a help file for these fields listing the valid derogatory status codes and their descriptions.
`)
loanAppPersonRecordFields.set("derogexplanation", ` 
\n### Cosigner/Derog Expl
\nThis field stores any additional derogatory information or the name of a member for whom this person is a cosigner.
\nField Number         **028**
\nMnemonic             **DEROGEXPLANATION**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01928**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter any additional derogatory information (up to 40 characters), or enter the name (up to 40 characters) of a member for whom this person is a cosigner.
`)
loanAppPersonRecordFields.set("judgement", ` 
\n### Judgement
\nThis field stores a code that identifies a judgement status.
\nField Number         **078**
\nMnemonic             **JUDGEMENT**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01978**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nYou can use this field instead of the Derog Status x fields to identify a judgment status.
\n#### Data Type Descriptions
\n##### 0
\n   The judgement status is false.##### 1
\n   The judgement status is true.
\n`)
loanAppPersonRecordFields.set("bankruptcy", ` 
\n### Bankruptcy
\nThis field stores a code that identifies a bankruptcy status.
\nField Number         **079**
\nMnemonic             **BANKRUPTCY**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01979**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nYou can use this field instead of the Derog Status x fields to identify a bankruptcy status.
\n#### Data Type Descriptions
\n##### 0
\n   The bankruptcy status is false.##### 1
\n   The bankruptcy status is true.
\n`)
loanAppPersonRecordFields.set("partyinlawsuit", ` 
\n### Party in a Lawsuit
\nThis field stores a code that identifies a party in a lawsuit status.
\nField Number         **082**
\nMnemonic             **PARTYINLAWSUIT**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01982**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nYou can use this field instead of the Derog Status x fields to identify a party in a lawsuit status.
\n#### Data Type Descriptions
\n##### 0
\n   The party in a lawsuit status is false.##### 1
\n   The party in a lawsuit status is true.
\n`)
loanAppPersonRecordFields.set("pastforeclosure", ` 
\n### Past Foreclosure
\nThis field stores a code that identifies a past foreclosure status.
\nField Number         **080**
\nMnemonic             **PASTFORECLOSURE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01980**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nYou can use this field instead of the Derog Status x fields to identify a past foreclosure status.
\n#### Data Type Descriptions
\n##### 0
\n   The past foreclosure status is false.##### 1
\n   The past foreclosure status is true.
\n`)
loanAppPersonRecordFields.set("pastrepossession", ` 
\n### Past Repossession
\nThis field stores a code that identifies a past repossession status.
\nField Number         **081**
\nMnemonic             **PASTREPOSSESSION**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01981**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nYou can use this field instead of the Derog Status x fields to identify a past repossession status.
\n#### Data Type Descriptions
\n##### 0
\n   The past repossession status is false.##### 1
\n   The past repossession status is true.
\n`)
loanAppPersonRecordFields.set("incomemaydecline", ` 
\n### Income Likely to Decline
\nThis field stores a code that identifies an income likely to decline status.
\nField Number         **083**
\nMnemonic             **INCOMEMAYDECLINE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01983**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nYou can use this field instead of the Derog Status x fields to identify an income likely to decline status.
\n#### Data Type Descriptions
\n##### 0
\n   The income likely to decline status is false.##### 1
\n   The income likely to decline status is true.
\n`)
loanAppPersonRecordFields.set("dependentage", ` 
\n### Dependent 1 Age - Dependent 10 Age
\nThese fields each store the age of one of this person's dependents.
\nField Number         **023:1 - 023:10**
\nMnemonic             **DEPENDENTAGE:1 - DEPENDENTAGE:10**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01923**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nAt any of these 10 fields, you can enter the age (0–99 years) of one of this person's dependents.
`)
loanAppPersonRecordFields.set("dependentcount", ` 
\n### Dependent Count
\nThis field stores the number of dependents this person claims.
\nField Number         **022**
\nMnemonic             **DEPENDENTCOUNT**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01922**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter the number of dependents (0-99) this person claims.
`)
loanAppPersonRecordFields.set("cosignotherloan", ` 
\n### Cosigner on Another Loan
\nThis field stores a code that identifies a cosigner on another loan status.
\nField Number         **084**
\nMnemonic             **COSIGNOTHERLOAN**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01984**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nYou can use this field instead of the Derog Status x fields to identify a cosigner on another loan status.
\n#### Data Type Descriptions
\n##### 0
\n   The cosigner on another loan status is false.##### 1
\n   The cosigner on another loan status is true.
\n`)
loanAppPersonRecordFields.set("cosignforwhom", ` 
\n### Cosigner for Whom
\nThis field can store the name of the individual for whom this person is a cosigner.
\nField Number         **085**
\nMnemonic             **COSIGNFORWHOM**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01985**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nIf the value in the Cosigner on Another Loan field is set to 1, enter the name of the individual (up to 40 characters) for whom this person is a cosigner.
`)
loanAppPersonRecordFields.set("cosigntowhom", ` 
\n### Cosigner to Whom
\nThis field can store the name of the creditor to whom this person is a cosigner.
\nField Number         **086**
\nMnemonic             **COSIGNTOWHOM**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01986**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nIf the value in the Cosigner on Another Loan field is set to 1, enter the name of the creditor (up to 40 characters) to whom this person is a cosigner.
`)
loanAppPersonRecordFields.set("employmentstatus", ` 
\n### Employment Status
\nThis field stores a code that indicates the person's employment status.
\nField Number         **029**
\nMnemonic             **EMPLOYMENTSTATUS**
\nData Type            **Code to 4**
\nSource               **User-entered**
\nHelp File            **01929**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Employed
\n   This person is currently employed.##### (1) Self-Employed
\n   This person is self-employed.##### (2) Retired
\n   This person is retired from active employment.##### (3) Unemployed
\n   This person is currently unemployed.##### (4) Unemp on Disability
\n   This person is currently unemployed and receiving disability payments.
\n`)
loanAppPersonRecordFields.set("employmentreturndate", ` 
\n### Date Returning to Work
\nThis field stores the date you expect the person to return to work if not currently employed.
\nField Number         **030**
\nMnemonic             **EMPLOYMENTRETURNDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01930**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nIf this person is currently not employed, enter the date you expect the person to return to work.
`)
loanAppPersonRecordFields.set("emphoursperweek", ` 
\n### Employment Hours Per Week
\nThis field stores the number of hours the person works per week.
\nField Number         **077**
\nMnemonic             **EMPHOURSPERWEEK**
\nData Type            **Code to 168**
\nSource               **User-entered**
\nHelp File            **01977**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter the number of hours (0-168) the person works per week.
`)
loanAppPersonRecordFields.set("currempstartdate", ` 
\n### Curr Employ Start Date
\nThis field stores the date this person's current employment began.
\nField Number         **033**
\nMnemonic             **CURREMPSTARTDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01933**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date this person's current employment began.
`)
loanAppPersonRecordFields.set("currempenddate", ` 
\n### Curr Employ End Date
\nThis field stores the date this person's current employment is expected to end.
\nField Number         **034**
\nMnemonic             **CURREMPENDDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01934**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date this person's current employment is expected to end (if known).
`)
loanAppPersonRecordFields.set("currempyearsemp", ` 
\n### Curr Years Employed
\nThis field stores the number of years the person has been employed at their current job.
\nField Number         **069**
\nMnemonic             **CURREMPYEARSEMP**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01969**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter the number of years (0-99) the person has been employed at their current job.
`)
loanAppPersonRecordFields.set("currempmonthsemp", ` 
\n### Curr Months Employed
\nThis field stores the number of months the person has been employed at their current job.
\nField Number         **070**
\nMnemonic             **CURREMPMONTHSEMP**
\nData Type            **Code to 999**
\nSource               **User-entered**
\nHelp File            **01970**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter the number of months (0-999) the person has been employed at their current job.
`)
loanAppPersonRecordFields.set("currempgrossmonthlypay", ` 
\n### Curr Gross Mo Pay
\nThis field stores the amount of this person's current monthly gross pay.
\nField Number         **037**
\nMnemonic             **CURREMPGROSSMONTHLYPAY**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01937**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the amount of this person's current monthly gross pay.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("currempnetmonthlypay", ` 
\n### Curr Net Mo Pay
\nThis field stores the amount of this person's current monthly net pay.
\nField Number         **038**
\nMnemonic             **CURREMPNETMONTHLYPAY**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01938**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the amount of this person's current monthly net pay.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("currempname", ` 
\n### Curr Employer Name
\nThis field stores the name of this person's current employer.
\nField Number         **031**
\nMnemonic             **CURREMPNAME**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01931**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the name (up to 40 characters) of this person's current employer.
\n
\nIf you choose to use the Update Fields action field, Symitar Quest updates this field with the value from the corresponding field in the Name record, Person record, or Credit Report record you specify at the Choice prompt.
\n
\nIf you set the value in this field and choose to use the Update Name Record action field, Symitar Quest updates the corresponding field of the Name record you specify at the Choice prompt with this value.
`)
loanAppPersonRecordFields.set("currempaddress", ` 
\n### Curr Employer Address
\nThis field stores the address of this person's current employer.
\nField Number         **032**
\nMnemonic             **CURREMPADDRESS**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01932**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the address (up to 40 characters) of this person's current employer.
`)
loanAppPersonRecordFields.set("currempoccupation", ` 
\n### Curr Occupation
\nThis field stores a description of this person's current occupation.
\nField Number         **035**
\nMnemonic             **CURREMPOCCUPATION**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **01935**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter a description of this person's current occupation (up to 20 characters).
`)
loanAppPersonRecordFields.set("currempsupervisor", ` 
\n### Curr Supervisor
\nThis field stores the name of this person's current supervisor.
\nField Number         **036**
\nMnemonic             **CURREMPSUPERVISOR**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **01936**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the name of this person's current supervisor (up to 20 characters).
`)
loanAppPersonRecordFields.set("prevempstartdate", ` 
\n### PREV Employ Start Date
\nThis field stores the date this person's previous employment began.
\nField Number         **041**
\nMnemonic             **PREVEMPSTARTDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01941**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date this person's previous employment began.
`)
loanAppPersonRecordFields.set("prevempenddate", ` 
\n### Prev Employ End Date
\nThis field stores the date this person's previous employment ended.
\nField Number         **042**
\nMnemonic             **PREVEMPENDDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01942**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date this person's previous employment ended.
`)
loanAppPersonRecordFields.set("prevempyearsemp", ` 
\n### Prev Years Employed
\nThis field stores the number of years the person was employed at their previous job.
\nField Number         **071**
\nMnemonic             **PREVEMPYEARSEMP**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01971**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter the number of years (0-99) the person was employed at their previous job.
`)
loanAppPersonRecordFields.set("prevempmonthsemp", ` 
\n### Previous Months Employed
\nThis field stores the number of months the person was employed at their previous job.
\nField Number         **072**
\nMnemonic             **PREVEMPMONTHSEMP**
\nData Type            **Code to 999**
\nSource               **User-entered**
\nHelp File            **01972**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter the number of months (0-999) the person was employed at their previous job.
`)
loanAppPersonRecordFields.set("prevempgrossmonthlypay", ` 
\n### Prev Gross Mo Pay
\nThis field stores the amount of this person's previous monthly gross pay.
\nField Number         **045**
\nMnemonic             **PREVEMPGROSSMONTHLYPAY**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01945**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the amount of this person's previous monthly gross pay.
`)
loanAppPersonRecordFields.set("prevempname", ` 
\n### Prev Employer Name
\nThis field stores the name of this person's previous employer.
\nField Number         **039**
\nMnemonic             **PREVEMPNAME**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01939**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the name of this person's previous employer (up to 40 characters).
`)
loanAppPersonRecordFields.set("prevempaddress", ` 
\n### Prev Employer Address
\nThis field stores the address of this person's previous employer.
\nField Number         **040**
\nMnemonic             **PREVEMPADDRESS**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01940**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the address (up to 40 characters) of this person's previous employer.
`)
loanAppPersonRecordFields.set("prevempoccupation", ` 
\n### Prev Occupation
\nThis field stores a description of this person's previous occupation.
\nField Number         **043**
\nMnemonic             **PREVEMPOCCUPATION**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **01943**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter a description of this person's previous occupation (up to 20 characters).
`)
loanAppPersonRecordFields.set("prevempsupervisor", ` 
\n### Prev Supervisor
\nThis field stores the name of this person's previous supervisor.
\nField Number         **044**
\nMnemonic             **PREVEMPSUPERVISOR**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **01944**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the name of this person's previous supervisor (up to 20 characters).
`)
loanAppPersonRecordFields.set("ref1code", ` 
\n### Ref 1 Ref Code
\nThis field stores a code that specifies the relationship of this first reference to the person.
\nField Number         **046**
\nMnemonic             **REF1CODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01946**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Relative
\n   This reference is a relative of the person.##### (1) Non-Relative
\n   This reference is not a relative of the person.
\n`)
loanAppPersonRecordFields.set("ref1name", ` 
\n### Ref 1 Name
\nThis field stores the name of this first reference.
\nField Number         **047**
\nMnemonic             **REF1NAME**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01947**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the name of this reference (up to 40 characters).
`)
loanAppPersonRecordFields.set("ref1addresstype", ` 
\n### Ref 1 Address Type
\nThis field stores a code that determines the format of the corresponding Ref 1 Address field for the person defined in Ref 1 Name.
\nField Number         **087**
\nMnemonic             **REF1ADDRESSTYPE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **01987**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Domestic Address
\n   The address of the person is in the United States or a territory of the United States (including APOs).##### (1) Foreign Address
\n   The address of the person is in any country except the United States or a territory of the United States. This option places the value in the ZIP Code field before the city and state fields in the address line.##### (2) Foreign Address Zip Last
\n   The address of the person is in any country except the United States or a territory of the United States. This option places the value in the ZIP Code field after the city and state fields in the address line.
\n`)
loanAppPersonRecordFields.set("ref1address", ` 
\n### Ref 1 Address
\nThis field stores the address of this first reference.
\nField Number         **048**
\nMnemonic             **REF1ADDRESS**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01948**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the address of this reference (up to 40 characters).
`)
loanAppPersonRecordFields.set("ref1phone", ` 
\n### Ref 1 Phone
\nThis field stores the telephone number of this first reference.
\nField Number         **049**
\nMnemonic             **REF1PHONE**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **01949**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the telephone number of this reference (up to 16 characters).
`)
loanAppPersonRecordFields.set("ref1relationship", ` 
\n### Ref 1 Relation
\nThis field stores a description of the relationship of this first reference to the person.
\nField Number         **050**
\nMnemonic             **REF1RELATIONSHIP**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01950**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter a description of the relationship of this reference to the person (up to 10 characters).
`)
loanAppPersonRecordFields.set("ref2code", ` 
\n### Ref 2 Ref Code
\nThis field stores a code that specifies the relationship of this second reference to the person.
\nField Number         **051**
\nMnemonic             **REF2CODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01951**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Relative
\n   This reference is a relative of the person.##### (1) Non-Relative
\n   This reference is not a relative of the person.
\n`)
loanAppPersonRecordFields.set("ref2name", ` 
\n### Ref 2 Name
\nThis field stores the name of this second reference.
\nField Number         **052**
\nMnemonic             **REF2NAME**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01952**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the name of this reference (up to 40 characters).
`)
loanAppPersonRecordFields.set("ref2addresstype", ` 
\n### Ref 2 Address Type
\nThis field stores a code that determines the format of the corresponding Ref 2 Address field for the person defined in Ref 2 Name.
\nField Number         **088**
\nMnemonic             **REF2ADDRESSTYPE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **01988**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Domestic Address
\n   The address of the person is in the United States or a territory of the United States (including APOs).##### (1) Foreign Address
\n   The address of the person is in any country except the United States or a territory of the United States. This option places the value in the ZIP Code field before the city and state fields in the address line.##### (2) Foreign Address Zip Last
\n   The address of the person is in any country except the United States or a territory of the United States. This option places the value in the ZIP Code field after the city and state fields in the address line.
\n`)
loanAppPersonRecordFields.set("ref2address", ` 
\n### Ref 2 Address
\nThis field stores the address of this second reference.
\nField Number         **053**
\nMnemonic             **REF2ADDRESS**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01953**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the address of this reference (up to 40 characters).
`)
loanAppPersonRecordFields.set("ref2phone", ` 
\n### Ref 2 Phone
\nThis field stores the telephone number of this second reference.
\nField Number         **054**
\nMnemonic             **REF2PHONE**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **01954**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the telephone number of this reference (up to 16 characters).
`)
loanAppPersonRecordFields.set("ref2relationship", ` 
\n### Ref 2 Relation
\nThis field stores a description of the relationship of this second reference to the person.
\nField Number         **055**
\nMnemonic             **REF2RELATIONSHIP**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01955**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter a description of the relationship of this reference to the person (up to 10 characters).
`)
loanAppPersonRecordFields.set("ref3code", ` 
\n### Ref 3 Ref Code
\nThis field stores a code that specifies the relationship of this third reference to the person.
\nField Number         **056**
\nMnemonic             **REF3CODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01956**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Relative
\n   This reference is a relative of the person.##### (1) Non-Relative
\n   This reference is not a relative of the person.
\n`)
loanAppPersonRecordFields.set("ref3name", ` 
\n### Ref 3 Name
\nThis field stores the name of this third reference.
\nField Number         **057**
\nMnemonic             **REF3NAME**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01957**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the name of this reference (up to 40 characters).
`)
loanAppPersonRecordFields.set("ref3addresstype", ` 
\n### Ref 3 Address Type
\nThis field stores a code that determines the format of the corresponding Ref 3 Address field for the person defined in Ref 3 Name.
\nField Number         **089**
\nMnemonic             **REF3ADDRESSTYPE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **01989**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Domestic Address
\n   The address of the person is in the United States or a territory of the United States (including APOs).##### (1) Foreign Address
\n   The address of the person is in any country except the United States or a territory of the United States. This option places the value in the ZIP Code field before the city and state fields in the address line.##### (2) Foreign Address Zip Last
\n   The address of the person is in any country except the United States or a territory of the United States. This option places the value in the ZIP Code field after the city and state fields in the address line.
\n`)
loanAppPersonRecordFields.set("ref3address", ` 
\n### Ref 3 Address
\nThis field stores the address of this third reference.
\nField Number         **058**
\nMnemonic             **REF3ADDRESS**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **01958**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the address of this reference (up to 40 characters).
`)
loanAppPersonRecordFields.set("ref3phone", ` 
\n### Ref 3 Phone
\nThis field stores the telephone number of this third reference.
\nField Number         **059**
\nMnemonic             **REF3PHONE**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **01959**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter the telephone number of this reference (up to 16 characters).
`)
loanAppPersonRecordFields.set("ref3relationship", ` 
\n### Ref 3 Relation
\nThis field stores a description of the relationship of this third reference to the person.
\nField Number         **060**
\nMnemonic             **REF3RELATIONSHIP**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01960**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter a description of the relationship of this reference to the person (up to 10 characters).
`)
loanAppPersonRecordFields.set("hmdaethnicity", ` 
\n### Ethnicity of Applicant 1 - Ethnicity of Applicant 5
\nThese fields each store a code that indicates the ethnicity of the applicant or borrower.
\nField Number         **108:1–108:5**
\nMnemonic             **HMDAETHNICITY:1 - HMDAETHNICITY:5**
\nData Type            **Code to 14**
\nSource               **User-entered**
\nHelp File            **02009**
\nDefault Control      **No**
\nDefault Value **(4) Not Applicable**
\n
\n#### Data Type Descriptions
\n##### (1) Hispanic or Latino
\n   The applicant or borrower is of Hispanic or Latino ethnicity.##### (2) Not Hispanic or Latino
\n   The applicant or borrower is not of Hispanic or Latino ethnicity.##### (3) Information not provided by applicant in mail, internet, or telephone application
\n   The applicant did not provide ethnicity.##### (4) Not Applicable
\n   The requirement to report the applicants ethnicity does not apply to the covered loan or application.##### 5–10
\n   Not used.##### (11) Mexican
\n   The applicant or borrower is of Mexican ethnicity.##### (12) Puerto Rican
\n   The applicant or borrower is of Puerto Rican ethnicity.##### (13) Cuban
\n   The applicant or borrower is of Cuban ethnicity.##### (14) Other Hispanic or Latino
\n   The applicant or borrower is of another Hispanic or Latino ethnicity.
\n`)
loanAppPersonRecordFields.set("hmdaethnicityother", ` 
\n### Ethnicity of Applicant Other 1 - Ethnicity of Applicant Other 3
\nThese fields each store the specific other Hispanic or Latino ethnicity not listed in the Ethnicity of Applicant 1–5 fields.
\nField Number         **109:1 - 109:3**
\nMnemonic             **HMDAETHNICITYOTHER:1 - HMDAETHNICITYOTHER:3**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **02010**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter, in each field, the specific other Hispanic or Latino ethnicity not listed in the Ethnicity of Applicant 1–5 fields (up to 40 characters).
`)
loanAppPersonRecordFields.set("hmdaethnicityvisind", ` 
\n### Ethnicity Visual Indicator
\nThis field stores a code that indicates whether the ethnicity of the applicant or borrower was collected based on visual observation or surname.
\nField Number         **110**
\nMnemonic             **HMDAETHNICITYVISIND**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **02011**
\nDefault Control      **No**
\nDefault Value **(3) Not Applicable**
\n
\n#### Data Type Descriptions
\n##### (1) Collected on the basis of visual observation or surname
\n   The applicant or borrower's ethnicity was based on visual observation or surname.##### (2) Not collected on the basis of visual observation or surname
\n   The applicant or borrower's ethnicity was not based on visual observation or surname.##### (3) Not Applicable
\n   The requirement to report the applicant's ethnicity does not apply to the covered loan or applicant.
\n`)
loanAppPersonRecordFields.set("hmdarace", ` 
\n### Race of Applicant 1 - Race of Applicant 5
\nThese fields each store a code that indicates the race of the applicant or borrower.
\nField Number         **111:1–111:5**
\nMnemonic             **HMDARACE:1 - HMDARACE:5**
\nData Type            **Code to 44**
\nSource               **User-entered**
\nHelp File            **02012**
\nDefault Control      **No**
\nDefault Value **(7) Not Applicable**
\n
\n#### Data Type Descriptions
\n##### (1) American Indian or Alaska Native
\n   The applicant or borrower is of the American indian or Alaska native race.##### (2) Asian
\n   The applicant or borrower is of the Asian race.##### (3) Black or African American
\n   The applicant or borrower is of the black or African American race.##### (4) Native Hawaiian or Other Pacific Islander
\n   The applicant or borrower is of the native Hawaiian or other pacific islander race.##### (5) White
\n   The applicant or borrower is of the white race.##### (6) Information not provided by applicant in mail, internet, or telephone application
\n   The applicant did not provide race.##### (7) Not Applicable
\n   The requirement to report the applicants race does not apply to the covered loan or application.##### 8–20
\n   Not used.##### (21) Asian Indian
\n   The applicant or borrower is of the Asian Indian race.##### (22) Chinese
\n   The applicant or borrower is of the Chinese race.##### (23) Filipino
\n   The applicant or borrower is of the Filipino race.##### (24) Japanese
\n   The applicant or borrower is of the Japanese race.##### (25) Korean
\n   The applicant or borrower is of the Korean race.##### (26) Vietnamese
\n   The applicant or borrower is of the Vietnamese race.##### (27) Other Asian
\n   The applicant or borrower is of another Asian race.##### 28–40
\n   Not used.##### (41) Native Hawaiian
\n   The applicant or borrower is of the native Hawaiian race.##### (42) Guamanian or Chamorro
\n   The applicant or borrower is of the Guamanian or Chamorro race.##### (43) Samoan
\n   The applicant or borrower is of the Samoan race.##### (44) Other Pacific Islander
\n   The applicant or borrower is of another pacific islander race.
\n`)
loanAppPersonRecordFields.set("hmdaraceother1", ` 
\n### Race of Applicant 1 Other 1 - Race of Applicant 1 Other 3
\nThese fields each store the specific American Indian or Alaska Native enrolled, or principal tribes if option (1) American Indian or Alaska Native was selected at any of the Race of Applicant 1–5 fields.
\nField Number         **112:1–112:3**
\nMnemonic             **HMDARACEOTHER1:1 - HMDARACEOTHER1:3**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **02013**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter, in each field, the specific American Indian or Alaska Native enrolled, or principal tribes if option (1) American Indian or Alaska Native was selected at any of the Race of Applicant 1–5 fields (up to 40 characters).
`)
loanAppPersonRecordFields.set("hmdaraceother27", ` 
\n### Race of Applicant 27 Other 1 - Race of Applicant 27 Other 3
\nThese fields each store the specific other Asian races if option (27) Other Asian was selected at any of the Race of Applicant 1–5 fields.
\nField Number         **113:1–113:3**
\nMnemonic             **HMDARACEOTHER27:1 - HMDARACEOTHER27:3**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **02014**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter, in each field, the specific other Asian races if option (27) Other Asian was selected at any of the Race of Applicant 1–5 fields (up to 40 characters).
`)
loanAppPersonRecordFields.set("hmdaraceother44", ` 
\n### Race of Applicant 44 Other 1 - Race of Applicant 44 Other 3
\nThese fields each store the specific other Pacific Islander races if option (44) Other Pacific Islander was selected at any of the Race of Applicant 1–5 fields.
\nField Number         **114:1–114:3**
\nMnemonic             **HMDARACEOTHER44:1 - HHMDARACEOTHER44:3**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **02015**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter, in each field, the specific other Pacific Islander races if option (44) Other Pacific Islander was selected at any of the Race of Applicant 1–5 fields (up to 40 characters).
`)
loanAppPersonRecordFields.set("hmdaracevisind", ` 
\n### Race Visual Indicator
\nThis field stores a code that indicates whether the race of the applicant or borrower was collected based on visual observation or surname.
\nField Number         **115**
\nMnemonic             **HMDARACEVISIND**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **02016**
\nDefault Control      **No**
\nDefault Value **(3) Not Applicable**
\n
\n#### Data Type Descriptions
\n##### (1) Collected on the basis of visual observation or surname
\n   The applicant or borrower's race was based on visual observation or surname.##### (2) Not collected on the basis of visual observation or surname
\n   The applicant or borrower's race was not based on visual observation or surname.##### (3) Not Applicable
\n   The requirement to report the applicant's race does not apply to the covered loan or applicant.
\n`)
loanAppPersonRecordFields.set("hmdasexind", ` 
\n### Sex of Applicant
\nThis field stores a code that indicates the sex of the applicant or borrower.
\nField Number         **116**
\nMnemonic             **HMDASEXIND**
\nData Type            **Code to 6**
\nSource               **User-entered**
\nHelp File            **02017**
\nDefault Control      **No**
\nDefault Value **(4) Not Applicable**
\n
\n#### Data Type Descriptions
\n##### (1) Male
\n   The applicant or borrower is a male.##### (2) Female
\n   The applicant or borrower is a female.##### (3) Information not provided by applicant in mail, internet, or telephone application
\n   The applicant did not provide the sex.##### (4) Not Applicable
\n   The requirement to report the applicant's sex does not apply to the covered loan or applicant.##### 5
\n   Not used.##### (6) Applicant selected both male and female
\n   The applicants or borrowers are both male and female.
\n`)
loanAppPersonRecordFields.set("hmdasexvisind", ` 
\n### Sex of Applicant Visual
\nThis field stores a code that indicates whether the sex of the applicant was collected based on visual observation or surname.
\nField Number         **117**
\nMnemonic             **HMDASEXVISIND**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **02018**
\nDefault Control      **No**
\nDefault Value **(3) Not Applicable**
\n
\n#### Data Type Descriptions
\n##### (1) Collected on the basis of visual observation or surname
\n   The applicant or borrower's sex was based on visual observation or surname.##### (2) Not collected on the basis of visual observation or surname
\n   The applicant or borrower's sex was not based on visual observation or surname.##### (3) Not Applicable
\n   The requirement to report the applicant's sex does not apply to the covered loan or applicant.
\n`)
loanAppPersonRecordFields.set("hmdaage", ` 
\n### Age of Applicant
\nThis field stores, in numeral form, the age of the applicant.
\nField Number         **118**
\nMnemonic             **HMDAAGE**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **02019**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter, in numeral form, the age of the applicant. Type 8888 if the requirement to report the applicant's age does not apply to the covered loan or application.
`)
loanAppPersonRecordFields.set("hmdacreditscore", ` 
\n### Credit Score of Applicant
\nThis field stores, in numeral form, the credit score, or scores used in making the credit decision.
\nField Number         **119**
\nMnemonic             **HMDACREDITSCORE**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **02020**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter, in numeral form, the credit score, or scores used in making the credit decision. Type 8888 if the requirement to report the credit score does not apply to the covered loan or application.
`)
loanAppPersonRecordFields.set("hmdaappscoringmodel", ` 
\n### Applicant Scoring Model
\nThis field stores a code that indicates the name and version of the credit scoring model used to generate the credit score, or scores, relied on in making the credit decision.
\nField Number         **120**
\nMnemonic             **HMDAAPPSCORINGMODEL**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **02021**
\nDefault Control      **No**
\nDefault Value **(9) Not Applicable**
\n
\n#### Data Type Descriptions
\n##### (1) Equifax Beacon 5.0
\n   The Equifax Beacon version 5.0 scoring model was used.##### (2) Experian Fair Isaac
\n   The Experian Fair Isaac scoring model was used.##### (3) FICO Risk Score 04
\n   The FICO Risk Score version 04 scoring model was used.##### (4) FICO Risk Score 98
\n   The FICO Risk Score version 98 scoring model was used.##### (5) VantageScore 2.0
\n   The VantageScore version 2.0 scoring model was used.##### (6) VantageScore 3.0
\n   The VantageScore version 3.0 scoring model was used.##### (7) More than one credit scoring model
\n   More than one credit scoring model was used.##### (8) Other credit scoring model
\n   Another credit scoring model was used. Use this option for VantageScore 4.0##### (9) Not Applicable
\n   The requirement to report the name and version of the credit scoring model does not apply to the covered loan or application.
\nEquifax® and BEACONTM are registered trademarks of Equifax Inc. FICO® is a trademark of Fair Isaac Corporation. VantageScore® is a registered trademark of VantageScore Solutions, LLC.
`)
loanAppPersonRecordFields.set("hmdaappscoringmodelother", ` 
\n### Applicant Scoring Mod Other 1 - Applicant Scoring Mod Other 3
\nThese fields each store the specific other credit scoring model if option (8) Other credit scoring model was selected at the Applicant Scoring Model field.
\nField Number         **121:1–121:3**
\nMnemonic             **HMDAAPPSCORINGMODELOTHER:1 - HMDAAPPSCORINGMODELOTHER:3**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **02022**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter, in each field, the specific other credit scoring model if option (8) Other credit scoring model was selected at the Applicant Scoring Model field (up to 40 characters).
`)
loanAppPersonRecordFields.set("locator", ` 
\n### Locator
\nThis field stores a unique number within each member account that can be used as a unique identification of this record.
\nField Number         **091**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **01991**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar Quest automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
loanAppPersonRecordFields.set("extendedname", ` 
\n### Extended Name
\nIf you enter more than 40 characters (up to 80 characters) in the Last Name/Non Indiv Name field, Symitar Quest stores the second 40 characters in this field.
\nField Number         **103**
\nMnemonic             **EXTENDEDNAME**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **10001**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nSymitar Quest does not display the Extended Name, but it does display the Non-Indiv Name when the Name Format field is set to (1) Non-Individual.
\n***Important:***  When you hover over the Non-Individual Name field, Symitar Quest displays the full name of up to 80 characters.
\n
\nSymitar Quest links the two fields (Last Name and Extended Name) together to appear on the Name or Application Person record screens. Symitar Quest splits the Extended Name field after any changes to save the field values.
`)
