export const checkOrderRecordFields = new Map<string, string>()
checkOrderRecordFields.set("processor", ` 
\n### Processor
\nThis field identifies the check order processor.
\nField Number         **001**
\nMnemonic             **PROCESSOR**
\nData Type            **Code to 3**
\nSource               **System-calculated or User-entered**
\nHelp File            **06501**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system updates this field with the check order processor you specify at the Processor prompt when you create a Check Order record.
\nData Type Descriptions:
\n   - Clark American
\n   - Deluxe
\n   - Harland
\n   - Liberty
\n
\nThis field does not appear on file maintenance screens unless you define the screens to include this field. Once you create a Check Order record, you cannot access this field for file maintenance. If you plan to change the Check Order Processor field during PowerOn file maintenance, it should be the first field you change. Many other fields depend on the value of this field and may be automatically reset to default values when you change this field.
`)
checkOrderRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date when you create, change, or save the Check Order record.
\nField Number         **062**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **06562**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system may update this field because the record was saved, even though there may not be any actual changes in the record. However, the system does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
checkOrderRecordFields.set("userid", ` 
\n### User ID
\nThis field stores the user number of the person who creates the Check Order record.
\nField Number         **059**
\nMnemonic             **USERID**
\nData Type            **Code to 9999**
\nSource               **System-calculated**
\nHelp File            **06559**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
checkOrderRecordFields.set("status", ` 
\n### Status
\nThis field indicates the current status of the check order.
\nField Number         **002**
\nMnemonic             **STATUS**
\nData Type            **Code to 6**
\nSource               **User-entered or System-calculated**
\nHelp File            **06502**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system sets this field to (0) New Order if this is a new check order that has not been submitted to the processor. If this field is set to (0) New Order, the check order edit run picks up this order for submission to the processor.
\n#### Data Type Descriptions
\n##### (1) Reorder
\n   Select this option if this is a check order that has been submitted to the processor. If this field contains 1, the check order edit run picks up this reorder for submission to the processor. The status code can be updated manually or by peripherals such as audio, home banking, etc. For instance, the Intervoice audio CKORD function sets this field to (1) Reorder when there is just one Check Order record on that ID.##### (2) Ordered
\n   The system sets this field to (2) Ordered when the check order edit run picks up this order or reorder and includes it in a data file to be sent to the processor. If the edit run finds an exception in the Check Order record, the system does not update the Status field.##### (3) Canceled
\n   Type (3) Canceled if this check order has been canceled. You must enter this status code manually.##### (4) Shipped
\n   Type (4) Shipped if the processor has shipped the check order, but the order has not yet been received. You must enter this status code manually.##### (5) Received by Member
\n   Type (5) Received by Member if the member has received the check order. You must enter this status code manually.##### (6) Received by CU
\n   Type (6) Received by CU if the credit union has received the check order. You must enter this status code manually.
\nOptions (3) Canceled, (4) Shipped, (5) Received by Member, and (6) Received by CU are for tracking purposes only. You must perform file maintenance on these status codes manually.
\n
\nYou cannot set the Status field to (0) New Order or (1) Reorder if the Share or Loan record is closed or charged off.
`)
checkOrderRecordFields.set("statusdate", ` 
\n### Status Date
\nThis field stores the date when you changed the value in the Status field.
\nField Number         **005**
\nMnemonic             **STATUSDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **06505**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nUnder normal circumstances, you should not revise this field.
`)
checkOrderRecordFields.set("opendate", ` 
\n### Open Date
\nThis field stores the date the Check Order record was created.
\nField Number         **003**
\nMnemonic             **OPENDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **06503**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system updates this field with the current system date when you create a Check Order record. Under normal circumstances, you should not revise this field.
`)
checkOrderRecordFields.set("lastorderdate", ` 
\n### Last Order Date
\nThis field stores the date a check order was last sent to the processor.
\nField Number         **004**
\nMnemonic             **LASTORDERDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **06504**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nWhen you create a new check order record, the system sets this field to blank (__/__/____). The check order edit run updates this field with the current system date when the order or reorder is picked up for submission to the processor. Under normal circumstances, you should not revise this field.
`)
checkOrderRecordFields.set("lastfreeorder", ` 
\n### Last Free Order
\nThis field records the date for a free or promotional check order.
\nField Number         **060**
\nMnemonic             **LASTFREEORDER**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **06560**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nYou can use this check order only in custom edit runs. The system does not otherwise use this field.
`)
checkOrderRecordFields.set("micrline", ` 
\n### MICR Line
\nThis field stores the information to be imprinted magnetically on the MICR line at the bottom of the check.
\nField Number         **058**
\nMnemonic             **MICRLINE**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **06558**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nYou can either enter this information manually or leave it blank, in which case the system uses custom logic to determine the value of this field.
`)
checkOrderRecordFields.set("startnumber", ` 
\n### Starting Number
\nThis fields stores either the starting check number for new orders or the starting reorder number.
\nField Number         **009**
\nMnemonic             **STARTNUMBER**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06509**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nWhen you create a Check Order record, enter the starting check number for the check order (up to 4 digits). When you revise the Check Order record and select (1) Reorder at the Status field, the system calculates the new value for this field by adding the quantity specified in the last check order to the old value in this field.
\n   - Example:
\n   - If the value in the Starting Number field for the previous check order was 1001 and the value in the Quantity field for the previous check order was 250, the system resets the Starting Number field to 1251.
`)
checkOrderRecordFields.set("quantity", ` 
\n### Quantity
\nThis field specifies the number of checks being ordered.
\nField Number         **010**
\nMnemonic             **QUANTITY**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **06510**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nThe valid increments for this field may be different for each check style, so you should validate this field with a validation specfile.
`)
checkOrderRecordFields.set("checktype", ` 
\n### Check Type
\nThis field specifies the type of checks being ordered
\nField Number         **007**
\nMnemonic             **CHECKTYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **06507**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nData Type Descriptions:
\n   - (0) Personal
\n   - (1) Business
`)
checkOrderRecordFields.set("checkstyle", ` 
\n### Check Style
\nThis field specifies the style of checks being ordered.
\nField Number         **011**
\nMnemonic             **CHECKSTYLE**
\nData Type            **12 Characters**
\nSource               **User-entered**
\nHelp File            **06511**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nThe valid values for this field may be different for each credit union and for each processor, so you should validate this field with a validation specfile. See your processor's order information.
`)
checkOrderRecordFields.set("coverstyle", ` 
\n### Cover Style
\nThis field specifies the style of the checkbook cover.
\nField Number         **012**
\nMnemonic             **COVERSTYLE**
\nData Type            **8 Characters**
\nSource               **User-entered**
\nHelp File            **06512**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nThe valid values for this field may be different for each credit union and for each processor, so you should validate this field with a validation specfile. See your processor's order information.
`)
checkOrderRecordFields.set("cutnumber", ` 
\n### Cut Style
\nThis field is used by Clarke American, Harland, and Deluxe only, and it specifies the style of the cut (insignia) on the checks.
\nField Number         **013**
\nMnemonic             **CUTNUMBER**
\nData Type            **8 Characters**
\nSource               **User-entered**
\nHelp File            **06513**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nThe valid values for this field may be different for each credit union and for each processor, so you should validate this field with a validation specfile. See your processor's order information.
`)
checkOrderRecordFields.set("coverinitials", ` 
\n### Cover Initials
\nThis field is used by Clarke American and Harland only, and it specifies the initials, if any, to be imprinted on the checkbook cover.
\nField Number         **027**
\nMnemonic             **COVERINITIALS**
\nData Type            **3 Characters**
\nSource               **User-entered**
\nHelp File            **06527**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
checkOrderRecordFields.set("checkinitials", ` 
\n### Check Initials
\nThis field is used by Clarke American only, and it specifies the initials, if any, to be imprinted on the checks.
\nField Number         **053**
\nMnemonic             **CHECKINITIALS**
\nData Type            **3 Characters**
\nSource               **User-entered**
\nHelp File            **06553**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
checkOrderRecordFields.set("branch", ` 
\n### Branch
\nThis field stores a processor-assigned code that identifies your credit union.
\nField Number         **008**
\nMnemonic             **BRANCH**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **06508**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nSymitar defines this code as the default, and you should not revise this field unless your processor requires a separate code for each branch.
`)
checkOrderRecordFields.set("imprintline", ` 
\n## IMPRINTLINE:1
\n### Imprint Line 1
\nThis field specifies the first line of name or address information to be imprinted on the checks.
\nField Number         **019:001**
\nMnemonic             **IMPRINTLINE:1**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06519**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n##### Clarke American
\n   Specify the first line of name information to be imprinted on the checks.##### Harland
\n   Specify the first line of name, address, or other information to be imprinted on the checks. Harland also allows the use of the following characters on the imprint lines:
\n       - * (asterisk)
\n       - : (colon)
\n       - # (pound)
\n       - % (percent)
\n   
\n       - Each character expands to a five-character code used by Harland. You may need to use abbreviations in long lines that use these characters to stay within the maximum length of an imprint line.
\n##### Deluxe
\n   Specify the first line of name information to be imprinted on the checks.##### Liberty
\n   Specify the first line of name information to be imprinted on the checks.
\n       - If you select (0) Name Information at the Imprint Line 1 Usage field, the system displays the Enter a name to be imprinted prompt. Enter the name information to be imprinted on this line.
\n       - If you select (1) Address Information at the Imprint Line 1 Usage field, the system displays the Enter address info to be imprinted prompt. Enter the address information to be imprinted on this line.
\n
\n## IMPRINTLINE:2
\n### Imprint Line 2
\nThis field specifies the second line of name or address information to be imprinted on the checks.
\nField Number         **019:002**
\nMnemonic             **IMPRINTLINE:2**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06519**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n##### Clarke American
\n   Specify the second line of name information to be imprinted on the checks.##### Harland
\n   Specify the second line of name, address, or other information to be imprinted on the checks. Harland also allows the use of the following characters on the imprint lines:
\n       - * (asterisk)
\n       - : (colon)
\n       - # (pound)
\n       - % (percent)
\n   
\n       - Each character expands to a five-character code used by Harland. You may need to use abbreviations in long lines that use these characters to stay within the maximum length of an imprint line.
\n##### Deluxe
\n   Specify the second line of name information to be imprinted on the checks.##### Liberty
\n   Specify the second line of name information to be imprinted on the checks.
\n       - If you select (0) Name Information at the Imprint Line 2 Usage field, the system displays the Enter a name to be imprinted prompt. Enter the name information to be imprinted on this line.
\n       - If you select (1) Address Information at the Imprint Line 2 Usage field, the system displays the Enter address info to be imprinted prompt. Enter the address information to be imprinted on this line.
\n
\n## IMPRINTLINE:3
\n### Imprint Line 3
\nThis field specifies the third line of name or address information to be imprinted on the checks.
\nField Number         **019:003**
\nMnemonic             **IMPRINTLINE:3**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06519**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n##### Clarke American
\n   Specify the third line of name information to be imprinted on the checks.##### Harland
\n   Specify the third line of name, address, or other information to be imprinted on the checks. Harland also allows the use of the following characters on the imprint lines:
\n       - * (asterisk)
\n       - : (colon)
\n       - # (pound)
\n       - % (percent)
\n   
\n       - Each character expands to a five-character code used by Harland. You may need to use abbreviations in long lines that use these characters to stay within the maximum length of an imprint line.
\n##### Deluxe
\n   Specify the third line of name information to be imprinted on the checks.##### Liberty
\n   Specify the third line of name information to be imprinted on the checks.
\n       - If you select (0) Name Information at the Imprint Line 3 Usage field, the system displays the Enter a name to be imprinted prompt. Enter the name information to be imprinted on this line.
\n       - If you select (1) Address Information at the Imprint Line 3 Usage field, the system displays the Enter address info to be imprinted prompt. Enter the address information to be imprinted on this line.
\n
\n## IMPRINTLINE:4
\n### Imprint Line 4
\nThis field specifies the fourth line of name or address information to be imprinted on the checks.
\nField Number         **019:004**
\nMnemonic             **IMPRINTLINE:4**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06519**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n##### Clarke American
\n   Specify the fourth line of name information to be imprinted on the checks.##### Harland
\n   Specify the fourth line of name, address, or other information to be imprinted on the checks. Harland also allows the use of the following characters on the imprint lines:
\n       - * (asterisk)
\n       - : (colon)
\n       - # (pound)
\n       - % (percent)
\n   
\n       - Each character expands to a five-character code used by Harland. You may need to use abbreviations in long lines that use these characters to stay within the maximum length of an imprint line.
\n##### Deluxe
\n   Specify the fourth line of name information to be imprinted on the checks.##### Liberty
\n   Specify the fourth line of name information to be imprinted on the checks.
\n       - If you select (0) Name Information at the Imprint Line 4 Usage field, the system displays the Enter a name to be imprinted prompt. Enter the name information to be imprinted on this line.
\n       - If you select (1) Address Information at the Imprint Line 4 Usage field, the system displays the Enter address info to be imprinted prompt. Enter the address information to be imprinted on this line.
\n
\n## IMPRINTLINE:5
\n### Imprint Line 5
\nThis field specifies the fifth line of name or address information to be imprinted on the checks.
\nField Number         **019:005**
\nMnemonic             **IMPRINTLINE:5**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06519**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n##### Clarke American
\n   Specify the fifth line of name information to be imprinted on the checks.##### Harland
\n   Specify the fifth line of name, address, or other information to be imprinted on the checks. Harland also allows the use of the following characters on the imprint lines:
\n       - * (asterisk)
\n       - : (colon)
\n       - # (pound)
\n       - % (percent)
\n   
\n       - Each character expands to a five-character code used by Harland. You may need to use abbreviations in long lines that use these characters to stay within the maximum length of an imprint line.
\n##### Deluxe
\n   Specify the fifth line of name information to be imprinted on the checks.##### Liberty
\n   Specify the fifth line of name information to be imprinted on the checks.
\n       - If you select (0) Name Information at the Imprint Line 5 Usage field, the system displays the Enter a name to be imprinted prompt. Enter the name information to be imprinted on this line.
\n       - If you select (1) Address Information at the Imprint Line 5 Usage field, the system displays the Enter address info to be imprinted prompt. Enter the address information to be imprinted on this line.
\n
\n## IMPRINTLINE:6
\n### Imprint Line 6
\nThis field specifies the sixth line of name or address information to be imprinted on the checks.
\nField Number         **019:006**
\nMnemonic             **IMPRINTLINE:6**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06519**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n##### Clarke American
\n   Specify the sixth line of name information to be imprinted on the checks.##### Harland
\n   Specify the sixth line of name, address, or other information to be imprinted on the checks. Harland also allows the use of the following characters on the imprint lines:
\n       - * (asterisk)
\n       - : (colon)
\n       - # (pound)
\n       - % (percent)
\n   
\n       - Each character expands to a five-character code used by Harland. You may need to use abbreviations in long lines that use these characters to stay within the maximum length of an imprint line.
\n##### Deluxe
\n   Specify the sixth line of name information to be imprinted on the checks.##### Liberty
\n   Specify the sixth line of name information to be imprinted on the checks.
\n       - If you select (0) Name Information at the Imprint Line 6 Usage field, the system displays the Enter a name to be imprinted prompt. Enter the name information to be imprinted on this line.
\n       - If you select (1) Address Information at the Imprint Line 6 Usage field, the system displays the Enter address info to be imprinted prompt. Enter the address information to be imprinted on this line.
`)
checkOrderRecordFields.set("imprintcity", ` 
\n### Imprint City
\nThis field is used by Clarke American only, and it specifies the name of the city to be imprinted on the checks.
\nField Number         **054**
\nMnemonic             **IMPRINTCITY**
\nData Type            **30 Characters**
\nSource               **User-entered**
\nHelp File            **06554**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
checkOrderRecordFields.set("imprintstate", ` 
\n### Imprint State
\nThis field is used by Clarke American only, and it specifies the two-character U.S. Postal Service state code to be imprinted on the checks.
\nField Number         **055**
\nMnemonic             **IMPRINTSTATE**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **06555**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
checkOrderRecordFields.set("imprintzipcode", ` 
\n### Imprint Zip Code
\nThis field is used by Clarke American and Deluxe only, and it specifies the ZIP Code to be imprinted on the checks.
\nField Number         **021**
\nMnemonic             **IMPRINTZIPCODE**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **06521**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe ZIP Code is entered in either the five- or nine-digit format.
`)
checkOrderRecordFields.set("imprintphone", ` 
\n### Imprint Phone
\nThis field is used by Clarke American and Deluxe only, and it specifies the telephone number to be imprinted on the checks.
\nField Number         **020**
\nMnemonic             **IMPRINTPHONE**
\nData Type            **12 Characters**
\nSource               **User-entered**
\nHelp File            **06520**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe phone number is entered in either a seven- or 10-digit format.
`)
checkOrderRecordFields.set("imprintfont", ` 
\n### Imprint Font Style
\nThis field specifies the font for the imprint lines.
\nField Number         **017**
\nMnemonic             **IMPRINTFONT**
\nData Type            **Code to 8**
\nSource               **User-entered**
\nHelp File            **06517**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\n##### Clarke American
\n   (0) Standard
\n       - (1) Lydian
\n       - (2) Malibu
\n       - (3) Old English
\n       - (4) Script
\n       - (5) Italic
\n       - (6) Calligraphy
\n       - (7) Gallant
\n##### Harland
\n   (0) Reserved-Use Standard (This option is reserved. Use (1) Standard.)
\n       - (1) Standard
\n       - (2) Script
\n       - (3) Quill
\n       - (4) Old English
\n       - (5) Professional
\n       - (6) Brushstroke
\n       - (7) Graphic
\n       - (8) Reserved-Use Standard (This option is reserved. Use (1) Standard.)
\n       - Important: If you set the Check Type field to (0) Personal, the system displays a message that this style is invalid for that check type.
\n##### Deluxe
\n   (0) Helvetica
\n       - (1) Bookwright
\n       - (2) Calligrapher
\n       - (3) Delegate
\n       - (4) Artisan
\n##### Liberty
\n   (0) Helvetica
\n       - (1) Times Roman
\n       - (2) Old English
\n       - (3) Lubalin
\n       - (4) Commercial Script
\n       - (5) Lydian Cursive
\n       - (6) Kabel
\n       - (7) Copperplate
`)
checkOrderRecordFields.set("imprintjustify", ` 
\n### Imprint Justification
\nThis field is used by Clarke American, Harland, and Liberty only, and it specifies the justification (alignment) of the imprint lines.
\nField Number         **018**
\nMnemonic             **IMPRINTJUSTIFY**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **06518**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\n##### Clarke American
\n   (0) Left Justified
\n       - (1) Centered
\n       - (2) Right Justified
\n##### Harland
\n   (0) Left Justified
\n       - (1) Centered
\n##### Liberty
\n   (0) Left Justified
\n       - (1) Centered
\n       - (2) Right Justified
`)
checkOrderRecordFields.set("mailaddress", ` 
\n### Mailing Address 1–Mailing Address 5
\nThese fields specify the mailing address for the check order.
\nField Number         **022:001–022:005**
\nMnemonic             **MAILADDRESS:1–MAILADDRESS:5**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06522**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
checkOrderRecordFields.set("mailcity", ` 
\n### Mailing City
\nThis field is used by Clarke American only, and it specifies the name of the city to which the check order should be mailed.
\nField Number         **056**
\nMnemonic             **MAILCITY**
\nData Type            **30 Characters**
\nSource               **User-entered**
\nHelp File            **06556**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
checkOrderRecordFields.set("mailstate", ` 
\n### Mailing State
\nThis field is used by Clarke American only, and it specifies the two-character U.S. Postal Code for the state to which the check order should be mailed.
\nField Number         **057**
\nMnemonic             **MAILSTATE**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **06557**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
checkOrderRecordFields.set("mailzipcode", ` 
\n### Mailing Zip Code
\nThis field is used by Clarke American and Harland only, and it specifies the ZIP Code the check order should be mailed to.
\nField Number         **023**
\nMnemonic             **MAILZIPCODE**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **06523**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe ZIP Code is entered in either the five- or nine-digit format.
`)
checkOrderRecordFields.set("billingcode", ` 
\n### Billing Code
\nThis field specifies how the check order should be billed.
\nField Number         **014**
\nMnemonic             **BILLINGCODE**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **06514**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\n#### Clarke American
\n##### (0) Member
\n   Use this option to bill the check order to the member##### (1) Credit Union
\n   Use this option to bill the check order to the credit union.##### (2) CU Employee
\n   Use this option to bill the check order to a credit union employee#### Harland
\n##### (0) Member
\n   Use this option to bill the check order to the member##### (1) Credit Union
\n   Use this option to bill the check order to the credit union.##### (2) CU Employee
\n   Use this option to bill the check order to a credit union employee##### (3) Split Billing
\n   Use this option to bill delivery to the credit union and the check order to the member.#### Deluxe
\n##### (0) Regular
\n   Use this option to bill the check order in your regular manner.##### (1) Special Acct
\n   Use this option to bill the check order to a special account.##### (2) Complimentary
\n   Use this option if the check order is complimentary (free).##### (3) Waive
\n   Use this option to waive charges for the check order.##### (4) Recharge
\n   Use this option to recharge for the check order.##### (5) Employee
\n   Use this option to bill the check order to a credit union employee.##### (6) Reprint No Charge
\n   Use this option to reprint the check order at no charge.##### (7) Club Account
\n   Use this option to bill the check order to a club account.#### Liberty
\n##### (0) Member
\n   Use this option to bill the check order to the member.##### (1) Credit Union
\n   Use this option to bill the check order to the credit union.##### (2) CU Employee
\n   Use this option to bill the check order to a credit union employee.##### (3) Split billing-S
\n   Use this option to split the check order bill as defined by the credit union and Liberty. This is one of two alternate split billing codes.##### (4) Annual Fee
\n   Use this option to bill the check order annually as defined by the credit union and Liberty.##### (5) Reserved - Use Movers&Checkers-Bill CU
\n   This option is a reserved code. Use option (7) Movers&Checkers-Bill CU instead.##### (6) Movers&Checkers-Bill Mbr
\n   Use this option for a promotional program in which the check order is billed to the member as defined by the credit union and Liberty.##### (7) Movers&Checkers-Bill CU
\n   Use this option for a promotional program in which the check order is billed to the credit union as defined by the credit union and Liberty.##### (8) Split billing-T
\n   Use this option to split the check order bill as defined by the credit union and Liberty. This is another of two alternate split billing codes.
\n`)
checkOrderRecordFields.set("shipmethod", ` 
\n### Shipping Method
\nThis field specifies how the check order should be shipped.
\nField Number         **015**
\nMnemonic             **SHIPMETHOD**
\nData Type            **Code to 13**
\nSource               **User-entered**
\nHelp File            **06515**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\n#### Clarke American
\n##### (0) Standard
\n   Use this option to ship the check order in your normal manner.##### (1) Bulk
\n   Use this option to ship the check order in a bulk mailing.##### (2) Preferred Parcel
\n   Use this option to ship the check order by a preferred parcel service.##### (3) First Class
\n   Use this option to ship the check order by first class mail.##### (4) 1 Day PM
\n   Use this option to ship the check order by a one day overnight service.##### (5) Air Mail
\n   Use this option to ship the check order by air mail.#### Harland
\n##### (0) Bulk Mail
\n   Use this option to ship the check order by bulk mail.##### (1) Delivered to credit union
\n   Use this option to have the check order delivered to the credit union.##### (2) Member pickup from plant
\n   Use this option to allow the member pick up the check order from the plant.##### (3) Messenger
\n   Use this option to ship the check order by messenger.##### (4) FEDEX Ground Res.
\n   Use this option to ship the check order by FedEx® Ground Residential.##### (5) First Class
\n   Use this option to ship the check order by first class mail.##### (6) Reserved-Use Bulk mail2nd
\n   This option is a reserved code. Use (0) Bulk Mail instead.##### (7) Reserved-Use Bulk mail
\n   This option is a reserved code. Use (0) Bulk Mail instead.##### (8) Fourth class
\n   Use this option to ship the check order by fourth class mail.##### (9) 3rd Party
\n   Use this option to ship the check order by a third-party shipper.##### (10) Overnight
\n   Use this option to ship the check order by an overnight service.##### (11) Foreign Address
\n   Use this option to ship the check order to a foreign address.##### (12) Normal
\n   Use this option to ship the check order in your normal manner.##### (13) FEDEX Ground Comml
\n   Use this option to ship the check order by FedEx Ground Commercial.#### Deluxe
\n##### (0) Regular
\n   Use this option to ship the check order in your regular manner.##### (1) First Class
\n   Use this option to ship the check order by first class mail.##### (2) Express Mail
\n   Use this option to ship the check order by express mail.##### (3) UPS
\n   Use this option to ship the check order by UPS.##### (4) Other
\n   Use this option to ship the check order in some other manner.##### (5) Foreign
\n   Use this option to ship the check order to a foreign address.##### (6) Federal Express
\n   Use this option to ship the check order by FedEx®.
\nIf you select (6) Federal Express, the system displays the Enter Fed Ex Number prompt at each special instructions line (Special Instructions 1–Special Instructions 8 fields). Enter the FedEx number on the special instructions lines.
\n#### Liberty
\n##### (0) Bulk Mail
\n   Use this option to ship the check order by bulk mail.##### (1) Fed Ex (Next)
\n   Use this option to ship the check order by FedEx next day service.##### (2) Fed Ex (2nd)
\n   Use this option to ship the check order by FedEx second day service.##### (3) Fed Ex ground
\n   Use this option to ship the check order by FedEx ground service.##### (4) ALL Fed Ex ground
\n   Use this option to ship all check orders by Federal Express ground service.##### (5) Fed Ex (Next-10:30 a.m.)
\n   Use this option to ship the check order by FedEx.##### (6) First class
\n   Use this option to ship the check order by first class mail.##### (7) All first class
\n   Use this option to ship all check orders by first class mail.##### (8) Other
\n   Use this option to ship the check order by another carrier.##### (9) Postal Service (Next)
\n   Use this option to ship the check order by next day service mail.##### (10) Airborne Express
\n   Use this option to ship the check order by Airborne Express®.##### (11) International
\n   Use this option to ship the check order to an overseas address.##### (12) Fed Ex Sig Reqd (2nd)
\n   Use this option to ship the check order FedEx second day service, and require a signature.
\n`)
checkOrderRecordFields.set("shipto", ` 
\n### Ship To
\nThis field is used by Clarke American, Deluxe, and Liberty only, and it specifies to whom the check order should be shipped.
\nField Number         **016**
\nMnemonic             **SHIPTO**
\nData Type            **Code to 4**
\nSource               **User-entered**
\nHelp File            **06516**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\n##### Clarke American
\n   (0) Member
\n       - (1) CU
\n       - (2) Special Address
\n##### Deluxe
\n   (0) Member
\n       - (1) CU
\n       - (2) Special Address
\n       - (3) CU - 1 Time (to ship to the credit union one time only)
\n       - (4) Special Address - 1 Time (to ship to a special address one time only)
\n##### Liberty
\n   (0) Member
\n       - (1) CU
\n       - (2) Special Address
\n       - (3) CU - 1 Time (to ship to the credit union one time only)
\n       - (4) Special Address - 1 Time (to ship to a special address one time only)
`)
checkOrderRecordFields.set("oversigfont", ` 
\n### Over Signature Font Style
\nThis field is used by Clarke American, Harland, and Liberty only, and it specifies the font style for the Over Signature Line 1 and Over Signature Line 2 fields.
\nField Number         **025**
\nMnemonic             **OVERSIGFONT**
\nData Type            **Code to 8**
\nSource               **User-entered**
\nHelp File            **06525**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\n##### Clarke American
\n   (0) Standard
\n       - (1) Lydian
\n       - (2) Malibu
\n       - (3) Old English
\n       - (4) Script
\n       - (5) Italic
\n       - (6) Calligraphy
\n       - (7) Gallant
\n##### Harland
\n   (0) Reserved-Use Standard is reserved. Use (1) Standard instead.
\n       - (1) Standard
\n       - (2) Script
\n       - (3) Quill
\n       - (4) Old English
\n       - (5) Professional
\n       - (6) Brushstroke
\n       - (7) Graphic
\n       - (8) Industrial
\n##### Liberty
\n   (0) Helvetica
\n       - (1) Times Roman
\n       - (2) Old English
\n       - (3) Lubalin
\n       - (4) Commercial Script
\n       - (5) Lydian Cursive
\n       - (6) Kabel
\n       - (7) Copperplate
`)
checkOrderRecordFields.set("oversigjustify", ` 
\n### Over Signature Justification
\nThis field is used by Clarke American and Harland only, and it specifies the alignment for the over signature lines.
\nField Number         **045**
\nMnemonic             **OVERSIGJUSTIFY**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **06545**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\n##### Clarke American
\n   (0) Left Justified   (1) Centered   (2) Right Justified##### Harland
\n   (0) Left Justified   (1) Centered
`)
checkOrderRecordFields.set("oversiglinesize", ` 
\n### Over Signature Line Size
\nThis field is used by Harland only, and it specifies the font size for the over signature lines.
\nField Number         **046**
\nMnemonic             **OVERSIGLINESIZE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **06546**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nData Type Descriptions:
\n   - (0) Large
\n   - (1) Small
`)
checkOrderRecordFields.set("oversigline", ` 
\n## OVERSIGLINE:1
\n### Over Signature Line 1
\nThis field specifies the information to be imprinted on the first line of text, over the signature line (or signature lines).
\nField Number         **024:001**
\nMnemonic             **OVERSIGLINE:1**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06524**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n## OVERSIGLINE:2
\n### Over Signature Line 2
\nThis field specifies the information to be imprinted on the second line of text, over the signature line (or signature lines).
\nField Number         **024:002**
\nMnemonic             **OVERSIGLINE:2**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **06524**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
checkOrderRecordFields.set("specialinstr", ` 
\n## SPECIALINSTR:1
\n### Special Instructions 1
\nThis field stores a line of special instructions for the processor.
\nField Number         **028:001**
\nMnemonic             **SPECIALINSTR:1**
\nData Type            **25 Characters**
\nSource               **User-entered**
\nHelp File            **06528**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n##### Deluxe
\n   If the Billing Code field is set to (1) Special Acct or (2) Complimentary, the Enter reason for special billing prompt appears at each special instructions line. Enter the reason for the special billing on the special instructions lines.
\n       - If the Billing Code field is set to (6) Reprint No Charge,The Enter reason for special billing prompt appears at each special instructions line. Type one of the following reason codes for the special billing on the special instructions lines.
\n       - EXP: Order does not meet customer expectations.
\n       - IDEN: Institution identity information is incorrect.
\n       - INFO: Customer information is incorrect.
\n       - MAIL: Order lost in mail.
\n       - OMIT: Information omitted.
\n       - SUB: Unacceptable substitution made by Deluxe.
\n       - If the Shipping Method field is set to (6) Federal Express, The Enter Fed Ex Number prompt appears at each special instructions line. Enter the FedEx number on one of the special instructions lines.
\n       - If the Billing Code ifield is set to (1) Special Acct, (2) Complimentary, or (6) Reprint No Charge and the Shipping Method field is set to (6) Federal Express, the Enter Fed Ex Number and reason for special billing prompt appears at each special instructions line. Enter the FedEx number and the reason for the special billing on the special instructions lines.
\n       - You can also type the following Deluxe special instruction codes for the C249 card file:
\n       - ATP1 (additional text required)
\n       - ATP2 (additional text required)
\n       - ATP3 (additional text required)
\n       - ATP4 (additional text required)
\n       - CBL (additional text required)
\n       - COV2 (additional text required)
\n       - GMSG (additional text required)
\n       - INIT (additional text required)
\n       - ISPL (no additional text allowed)
\n       - MONO (additional text required)
\n       - NVAO (additional text required)
\n       - NVAU (additional text required)
\n       - NVFL (no additional text allowed)
\n       - NVLT (no additional text allowed)
\n       - OSCL (additional text required)
\n       - 	
\n       - OSL (additional text required)
\n       - OSLL (additional text required)
\n       - PAYT (additional text required)
\n       - PPEN (no additional text allowed)
\n       - PREN (no additional text allowed)
\n       - PROP (additional text required)
\n       - SCUT (additional text required)
\n       - SIG2 (additional text required)
\n       - SRS1 (no additional text allowed)
\n       - SRS2 (no additional text allowed)
\n       - SRS3 (no additional text allowed)
\n       - SRS4 (no additional text allowed)
\n       - XCBL (additional text required)
\n       - 2SGL (no additional text allowed)
\n       - 1002 'cover description'
\n       - 1004 name above signature line
\n       - 1005 additional cut
\n       - 1014 three initials on leather cover
\n       - 1023 general message above sig line
\n       - 1025 not valid amt under $99999
\n       - 	
\n       - 1026 not valid amt over $99999
\n       - 1034 print on pay to order line
\n       - 1035 use alternate title plate (logo 1)
\n       - 1048 use alternative title plate (logo 4)
\n       - 1051 over sig right
\n       - 1055 over sig left
\n       - 1056 use alternate title plate (logo 2)
\n       - 1057 use alternate title plate (logo 3)
\n       - 1058 SI over sig center (lower case)
\n       - 1059 SI over sig right (lower case)
\n       - 1060 SI over sig left (lower case)
\n       - 1093 indicate proper name for Louisianne check style
\n       - 1094 indicate monogram for Louisianne check style
\n       - 1098 load custom by-line in card area. First letter shift, remaining line unshift, ' =106 ' type
\n       - 1099 load custom by-line in card area (over 26 characters). First letter shift, remaining line unshift, ' =106 ' type
\n       - 2041 special routing symbol (Z1)
\n       - 2042 special routing symbol (Z2)
\n       - 2043 special routing symbol (Z3)
\n       - 2046 excludes routing symbol
\n       - 2047 not valid for less than $100.00
\n
\n## SPECIALINSTR:2
\n### Special Instructions 2
\nThis field is used by Clarke American, Deluxe, and Liberty only, and it stores a second line of special instructions.
\nField Number         **028:002**
\nMnemonic             **SPECIALINSTR:2**
\nData Type            **25 Characters**
\nSource               **User-entered**
\nHelp File            **06528**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n##### Deluxe
\n   If the Billing Code field is set to (1) Special Acct or (2) Complimentary, the Enter reason for special billing prompt appears at each special instructions line. Enter the reason for the special billing on the special instructions lines.
\n       - If the Billing Code field is set to (6) Reprint No Charge,The Enter reason for special billing prompt appears at each special instructions line. Type one of the following reason codes for the special billing on the special instructions lines.
\n       - EXP: Order does not meet customer expectations.
\n       - IDEN: Institution identity information is incorrect.
\n       - INFO: Customer information is incorrect.
\n       - MAIL: Order lost in mail.
\n       - OMIT: Information omitted.
\n       - SUB: Unacceptable substitution made by Deluxe.
\n       - If the Shipping Method field is set to (6) Federal Express, The Enter Fed Ex Number prompt appears at each special instructions line. Enter the FedEx number on one of the special instructions lines.
\n       - If the Billing Code ifield is set to (1) Special Acct, (2) Complimentary, or (6) Reprint No Charge and the Shipping Method field is set to (6) Federal Express, the Enter Fed Ex Number and reason for special billing prompt appears at each special instructions line. Enter the FedEx number and the reason for the special billing on the special instructions lines.
\n       - You can also type the following Deluxe special instruction codes for the C249 card file:
\n       - ATP1 (additional text required)
\n       - ATP2 (additional text required)
\n       - ATP3 (additional text required)
\n       - ATP4 (additional text required)
\n       - CBL (additional text required)
\n       - COV2 (additional text required)
\n       - GMSG (additional text required)
\n       - INIT (additional text required)
\n       - ISPL (no additional text allowed)
\n       - MONO (additional text required)
\n       - NVAO (additional text required)
\n       - NVAU (additional text required)
\n       - NVFL (no additional text allowed)
\n       - NVLT (no additional text allowed)
\n       - OSCL (additional text required)
\n       - 	
\n       - OSL (additional text required)
\n       - OSLL (additional text required)
\n       - PAYT (additional text required)
\n       - PPEN (no additional text allowed)
\n       - PREN (no additional text allowed)
\n       - PROP (additional text required)
\n       - SCUT (additional text required)
\n       - SIG2 (additional text required)
\n       - SRS1 (no additional text allowed)
\n       - SRS2 (no additional text allowed)
\n       - SRS3 (no additional text allowed)
\n       - SRS4 (no additional text allowed)
\n       - XCBL (additional text required)
\n       - 2SGL (no additional text allowed)
\n       - 1002 'cover description'
\n       - 1004 name above signature line
\n       - 1005 additional cut
\n       - 1014 three initials on leather cover
\n       - 1023 general message above sig line
\n       - 1025 not valid amt under $99999
\n       - 	
\n       - 1026 not valid amt over $99999
\n       - 1034 print on pay to order line
\n       - 1035 use alternate title plate (logo 1)
\n       - 1048 use alternative title plate (logo 4)
\n       - 1051 over sig right
\n       - 1055 over sig left
\n       - 1056 use alternate title plate (logo 2)
\n       - 1057 use alternate title plate (logo 3)
\n       - 1058 SI over sig center (lower case)
\n       - 1059 SI over sig right (lower case)
\n       - 1060 SI over sig left (lower case)
\n       - 1093 indicate proper name for Louisianne check style
\n       - 1094 indicate monogram for Louisianne check style
\n       - 1098 load custom by-line in card area. First letter shift, remaining line unshift, ' =106 ' type
\n       - 1099 load custom by-line in card area (over 26 characters). First letter shift, remaining line unshift, ' =106 ' type
\n       - 2041 special routing symbol (Z1)
\n       - 2042 special routing symbol (Z2)
\n       - 2043 special routing symbol (Z3)
\n       - 2046 excludes routing symbol
\n       - 2047 not valid for less than $100.00
\n
\n## SPECIALINSTR:3–SPECIALINSTR:8
\n### Special Instructions 3–Special Instructions 8
\nThese fields are used by Deluxe only, and they store the third through eighth lines of special instructions.
\nField Number         **028:003–028:008**
\nMnemonic             **SPECIALINSTR:3–SPECIALINSTR:8**
\nData Type            **25 Characters**
\nSource               **User-entered**
\nHelp File            **06528**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n##### Deluxe
\n   If the Billing Code field is set to (1) Special Acct or (2) Complimentary, the Enter reason for special billing prompt appears at each special instructions line. Enter the reason for the special billing on the special instructions lines.
\n       - If the Billing Code field is set to (6) Reprint No Charge,The Enter reason for special billing prompt appears at each special instructions line. Type one of the following reason codes for the special billing on the special instructions lines.
\n       - EXP: Order does not meet customer expectations.
\n       - IDEN: Institution identity information is incorrect.
\n       - INFO: Customer information is incorrect.
\n       - MAIL: Order lost in mail.
\n       - OMIT: Information omitted.
\n       - SUB: Unacceptable substitution made by Deluxe.
\n       - If the Shipping Method field is set to (6) Federal Express, The Enter Fed Ex Number prompt appears at each special instructions line. Enter the FedEx number on one of the special instructions lines.
\n       - If the Billing Code ifield is set to (1) Special Acct, (2) Complimentary, or (6) Reprint No Charge and the Shipping Method field is set to (6) Federal Express, the Enter Fed Ex Number and reason for special billing prompt appears at each special instructions line. Enter the FedEx number and the reason for the special billing on the special instructions lines.
\n       - You can also type the following Deluxe special instruction codes for the C249 card file:
\n       - ATP1 (additional text required)
\n       - ATP2 (additional text required)
\n       - ATP3 (additional text required)
\n       - ATP4 (additional text required)
\n       - CBL (additional text required)
\n       - COV2 (additional text required)
\n       - GMSG (additional text required)
\n       - INIT (additional text required)
\n       - ISPL (no additional text allowed)
\n       - MONO (additional text required)
\n       - NVAO (additional text required)
\n       - NVAU (additional text required)
\n       - NVFL (no additional text allowed)
\n       - NVLT (no additional text allowed)
\n       - OSCL (additional text required)
\n       - 	
\n       - OSL (additional text required)
\n       - OSLL (additional text required)
\n       - PAYT (additional text required)
\n       - PPEN (no additional text allowed)
\n       - PREN (no additional text allowed)
\n       - PROP (additional text required)
\n       - SCUT (additional text required)
\n       - SIG2 (additional text required)
\n       - SRS1 (no additional text allowed)
\n       - SRS2 (no additional text allowed)
\n       - SRS3 (no additional text allowed)
\n       - SRS4 (no additional text allowed)
\n       - XCBL (additional text required)
\n       - 2SGL (no additional text allowed)
\n       - 1002 'cover description'
\n       - 1004 name above signature line
\n       - 1005 additional cut
\n       - 1014 three initials on leather cover
\n       - 1023 general message above sig line
\n       - 1025 not valid amt under $99999
\n       - 	
\n       - 1026 not valid amt over $99999
\n       - 1034 print on pay to order line
\n       - 1035 use alternate title plate (logo 1)
\n       - 1048 use alternative title plate (logo 4)
\n       - 1051 over sig right
\n       - 1055 over sig left
\n       - 1056 use alternate title plate (logo 2)
\n       - 1057 use alternate title plate (logo 3)
\n       - 1058 SI over sig center (lower case)
\n       - 1059 SI over sig right (lower case)
\n       - 1060 SI over sig left (lower case)
\n       - 1093 indicate proper name for Louisianne check style
\n       - 1094 indicate monogram for Louisianne check style
\n       - 1098 load custom by-line in card area. First letter shift, remaining line unshift, ' =106 ' type
\n       - 1099 load custom by-line in card area (over 26 characters). First letter shift, remaining line unshift, ' =106 ' type
\n       - 2041 special routing symbol (Z1)
\n       - 2042 special routing symbol (Z2)
\n       - 2043 special routing symbol (Z3)
\n       - 2046 excludes routing symbol
\n       - 2047 not valid for less than $100.00
`)
checkOrderRecordFields.set("promonumber", ` 
\n### Promo Number
\nThis field is used by Clarke America, Harland, and Deluxe only, and it stores a promo number.
\nField Number         **038**
\nMnemonic             **PROMONUMBER**
\nData Type            **4 Characters**
\nSource               **User-entered**
\nHelp File            **06538**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\n##### Clarke American
\n   Enter special program codes or specify over signature line formatting options (Clarke American recognizes only the first two characters of this field).##### Harland
\n   Enter a four-character promotion number.##### Deluxe
\n   If the Check Type field is set to (1) Business, you can enter the promo number for intro pack or other special pricing orders.
\n`)
checkOrderRecordFields.set("lastfmdate", ` 
\n### Last FM Date
\nThis field stores the date of the last file maintenance of this Check Order record.
\nField Number         **006**
\nMnemonic             **LASTFMDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **06506**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nThe system updates this field with the current system date whenever you perform any file maintenance of the Check Order record.
\n
\nThis field does not appear unless you define screens to include this field. You cannot access this field for file maintenance.
`)
checkOrderRecordFields.set("numbersiglines", ` 
\n### Number of Signature Lines
\nThis field specifies the number of signature lines to be included on the checks.
\nField Number         **026**
\nMnemonic             **NUMBERSIGLINES**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **06526**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\n##### Clarke American
\n   If the Check Type field is set to (1) Business, you can specify the number of signature lines (1-3) to be included on the checks. If the Check Type field is set to (0) Personal, you cannot access this field.##### Harland
\n   Specify the number of signature lines (1-2) to be included on the checks.##### Deluxe
\n   If the Check Type field is set to (1) Business, you can specify the number of signature lines (1-3) to be included on the checks. If the Check Type field is set to (0) Personal, you cannot access this field.##### Liberty
\n   Specify the number of signature lines (1-2) to be included on the checks.
\n`)
checkOrderRecordFields.set("ssn", ` 
\n## SSN:1
\n### Imprint SSN/TIN 1
\nThis field is used by Deluxe only, and it specifies the Social Security Number or individual Taxpayer Identification Number to be imprinted on checks.
\nField Number         **029:001**
\nMnemonic             **SSN:1**
\nData Type            **9 Characters**
\nSource               **User-entered**
\nHelp File            **06529**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n## SSN:2
\n### Imprint SSN/TIN 2
\nThis field is used by Deluxe only, and it specifies the second Social Security Number or individual Taxpayer Identification Number to be imprinted on checks.
\nField Number         **029:002**
\nMnemonic             **SSN:2**
\nData Type            **9 Characters**
\nSource               **User-entered**
\nHelp File            **06529**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
checkOrderRecordFields.set("license", ` 
\n## LICENSE:1
\n### Imprint License 1
\nThis field is used by Deluxe only, and it specifies the license number to imprint on the checks.
\nField Number         **030:001**
\nMnemonic             **LICENSE:1**
\nData Type            **25 Characters**
\nSource               **User-entered**
\nHelp File            **06530**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\n## LICENSE:2
\n### Imprint License 2
\nThis field is used by Deluxe only, and it specifies a second license number to be imprinted on the checks.
\nField Number         **030:002**
\nMnemonic             **LICENSE:2**
\nData Type            **25 Characters**
\nSource               **User-entered**
\nHelp File            **06530**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
checkOrderRecordFields.set("binding", ` 
\n### Binding Mnemonic
\nThis field is not currently used.
\nField Number         **031**
\nMnemonic             **BINDING**
\nData Type            **6 Characters**
\nSource               **User-entered**
\nHelp File            **06531**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
checkOrderRecordFields.set("design", ` 
\n### Design Mnemonic
\nThis field is not currently used.
\nField Number         **032**
\nMnemonic             **DESIGN**
\nData Type            **8 Characters**
\nSource               **User-entered**
\nHelp File            **06532**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
checkOrderRecordFields.set("businessserial", ` 
\n### Business Serial Letters
\nThis field is used by Deluxe only, and it specifies the serial letters to be imprinted after the check number on the business checks.
\nField Number         **033**
\nMnemonic             **BUSINESSSERIAL**
\nData Type            **3 Characters**
\nSource               **User-entered**
\nHelp File            **06533**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nSerial letters distinguish between different series of checks used by the same business.
\n
\nIf the Check Type field is set to (1) Business, you can enter the serial letters to imprint after the check number. If the Check Type field is set to (0) Personal, you cannot access this field.
`)
checkOrderRecordFields.set("busnumcopies", ` 
\n### Business Number of Copies
\nThis field is used by Deluxe only, and it indicates the number of carbonless check copies required (in addition to the original check) for business checks.
\nField Number         **034**
\nMnemonic             **BUSNUMCOPIES**
\nData Type            **Code to 4**
\nSource               **User-entered**
\nHelp File            **06534**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nIf the Check Type field is set to (1) Business, you can enter the number of carbonless check copies required in addition to the original check. If the Check Type field is set to (0) Personal, you cannot access this field.
`)
checkOrderRecordFields.set("busbindingstyle", ` 
\n### Business Binding Style
\nThis field is used by Deluxe only, and it specifies the binding style of the checkbook for business checks.
\nField Number         **035**
\nMnemonic             **BUSBINDINGSTYLE**
\nData Type            **Code to 11**
\nSource               **User-entered**
\nHelp File            **06535**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nIf the Check Type field is set to (1) Business, you can specify the binding style of the checkbook. If the Check Type field is set to (0) Personal, you cannot access this field.
\nChoose one of the following:
\n   - (0) Blackboard
\n   - (1) Carbout
\n   - (2) Copy Plus
\n   - (3) Crash
\n   - (4) Ekonomic
\n   - (5) Follow Copy
\n   - (6) Loose
\n   - (7) Octa
\n   - (8) Two Hole
\n   - (9) Blkboard Wire-O
\n   - (10) Perm Wire-O
\n   - (11) Executive
`)
checkOrderRecordFields.set("busvouchernumber", ` 
\n### Business Voucher Number
\nThis field is used by Deluxe only, and it indicates the voucher number that designates the purpose of the checks.
\nField Number         **036**
\nMnemonic             **BUSVOUCHERNUMBER**
\nData Type            **6 Characters**
\nSource               **User-entered**
\nHelp File            **06536**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nIf the Check Type field is set to (1) Business, enter the voucher number that designates the purpose of the checks. If the Check Type field is set to (0) Personal, you cannot access this field.
`)
checkOrderRecordFields.set("buscaptions", ` 
\n### Business Caption 1–Business Caption 8
\nThese fields are used by Deluxe only, and they specify a deduction caption to be imprinted on business checks.
\nField Number         **037:001–037:008**
\nMnemonic             **BUSCAPTIONS:1–BUSCAPTIONS:8**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **06537**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nIf the Check Type field is set to (1) Business, you can specify a deduction caption to imprint on the checks. If the Check Type field is set to (0) Personal, you cannot access this field.
\n
\nThe valid values for this field may be different for each credit union, so you should validate this field with a validation specfile.
`)
checkOrderRecordFields.set("acctaddrinkcolor", ` 
\n### Account/Address Ink Color
\nThis field is used by Deluxe only, and it specifies the ink color for the account and address information imprinted on the business checks.
\nField Number         **039**
\nMnemonic             **ACCTADDRINKCOLOR**
\nData Type            **Code to 7**
\nSource               **User-entered**
\nHelp File            **06539**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nIf the Check Type field is set to (1) Business, you can enter the ink color used for the account and address information imprinted on the checks. Choose one of the following:
`)
checkOrderRecordFields.set("titleinkcolor", ` 
\n### Titleplate Ink Color
\nThis field is used by Deluxe only, and it specifies the ink color used for the title plate for business checks.
\nField Number         **040**
\nMnemonic             **TITLEINKCOLOR**
\nData Type            **Code to 7**
\nSource               **User-entered**
\nHelp File            **06540**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nIf the Check Type field is set to (1) Business, you can enter the ink color used for the title plate of the checks. Choose one of the following:
\n   - (0) Black
\n   - (1) Red
\n   - (2) Burgundy
\n   - (3) Gray
\n   - (4) Yellow
\n   - (5) Brown
\n   - (6) Green
\n   - (7) Blue
`)
checkOrderRecordFields.set("cutinkcolor", ` 
\n### Cut Ink Color
\nThis field is used by Deluxe only, and it specifies the ink color used for the cut (insignia) for business checks.
\nField Number         **041**
\nMnemonic             **CUTINKCOLOR**
\nData Type            **Code to 7**
\nSource               **User-entered**
\nHelp File            **06541**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nIf the Check Type field is set to (1) Business, you can enter the ink color used for the cut (insignia) of the checks. Choose one of the following:
\n   - (0) Black
\n   - (1) Red
\n   - (2) Burgundy
\n   - (3) Gray
\n   - (4) Yellow
\n   - (5) Brown
\n   - (6) Green
\n   - (7) Blue
`)
checkOrderRecordFields.set("taxexemptcode", ` 
\n### Tax Exempt Code
\nThis field is used by Harland only, and it specifies whether the check order is tax-exempt.
\nField Number         **042**
\nMnemonic             **TAXEXEMPTCODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **06542**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nData Type Descriptions:
\n   - (0) Order is Not Tax Exempt
\n   - (1) Order is Tax Exempt
`)
checkOrderRecordFields.set("rerunreason", ` 
\n### Rerun Reason
\nThis field is used by Harland only, and it specifies the reason a check order must be rerun.
\nField Number         **043**
\nMnemonic             **RERUNREASON**
\nData Type            **Code to 5**
\nSource               **User-entered**
\nHelp File            **06543**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nData Type Descriptions:
\n   - (0) None
\n   - (1) Lost in Mail
\n   - (2) Plant Error
\n   - (3) Credit Union Error
\n   - (4) Conversion Error
\n   - (5) Member Error
`)
checkOrderRecordFields.set("imprintlinesize", ` 
\n### Imprint Line 1 Size–Imprint Line 6 Size
\nThese fields are used by Harland only, and they specify the font size for each imprint line.
\nField Number         **044:001–044:006**
\nMnemonic             **IMPRINTLINESIZE:1–IMPRINTLINESIZE:6**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **06544**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nData Type Descriptions:
\n   - (0) Large
\n   - (1) Small
`)
checkOrderRecordFields.set("ponumber", ` 
\n### Purchase Order
\nThis field is used by Harland only, and it stores the purchase number for the check order.
\nField Number         **047**
\nMnemonic             **PONUMBER**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **06547**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
`)
checkOrderRecordFields.set("chargeshipping", ` 
\n### Charge Shipping To
\nThis field is used by Liberty only, and it specifies whom to charge the shipping costs to.
\nField Number         **048**
\nMnemonic             **CHARGESHIPPING**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **06548**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nData Type Descriptions:
\n   - (0) Member
\n   - (1) Credit Union
`)
checkOrderRecordFields.set("imprintusage", ` 
\n### Imprint Line 1 Usage–Imprint Line 6 Usage
\nThese fields are used by Liberty only, and they specifies how each imprint line is used.
\nField Number         **049:001–049:006**
\nMnemonic             **IMPRINTUSAGE:1–IMPRINTUSAGE:6**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **06549**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nData Type Descriptions:
\n   - (0) Name Information
\n   - (1) Address Information
`)
checkOrderRecordFields.set("accent", ` 
\n### Accent Figure
\nThis field is used by Liberty only, and it specifies the accent figure printed to the left of the name.
\nField Number         **050**
\nMnemonic             **ACCENT**
\nData Type            **5 Characters**
\nSource               **User-entered**
\nHelp File            **06550**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nThe valid values for this field may be different for each credit union, so you should validate this field with a validation specfile.
`)
checkOrderRecordFields.set("phantom", ` 
\n### Phantom Figure
\nThis field is used by Liberty only, and it specifies the phantom figure printed in the center of the checks.
\nField Number         **051**
\nMnemonic             **PHANTOM**
\nData Type            **5 Characters**
\nSource               **User-entered**
\nHelp File            **06551**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nThe valid values for this field may be different for each credit union, so you should validate this field with a validation specfile.
`)
checkOrderRecordFields.set("sigfigure", ` 
\n### Signature Figure
\nThis field is used by Liberty only, and it specifies the signature figure printed next to the signature line.
\nField Number         **052**
\nMnemonic             **SIGFIGURE**
\nData Type            **5 Characters**
\nSource               **User-entered**
\nHelp File            **06552**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nThe valid values for this field may be different for each credit union, so you should validate this field with a validation specfile.
`)
checkOrderRecordFields.set("locator", ` 
\n### Locator
\nThis field value in each record is unique for each member account.
\nField Number         **061**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-calculated**
\nHelp File            **06561**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nBecause each Locator field value is unique, it can be used as a unique identification of a specific record. The system automatically assigns the Locator field value when the record is created, and you cannot change it. The value is a positive number greater than zero.
\n
\nThe Locator field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using the Locator field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
