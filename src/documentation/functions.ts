import { CODESTART, CODEEND } from "../utils"
export const powerOnFunctions = new Map<string, string>()
powerOnFunctions.set("abs", `
# ABS
---
This function returns the absolute value of an expression.

## Syntax
`+ CODESTART + `
ABS(expression)
`+ CODEEND + `

## Example
`+ CODESTART + `
ABS(FLOATVARIABLE1-FLOATVARIABLE2)
`+ CODEEND + `

## Usage Information
 - Use with NUMBER, MONEY, or FLOAT data types

***Tip:*** Helpful when working with floating point variables because of the possibility of rounding errors.

## Extended Example
See ABS on line 1.

`+ CODESTART + `
IF ABS(FLOATVARIABLE1-FLOATVARIABLE2)<1.0E-3 THEN
  PRINT "Equal"                                    
ELSE                                             
  PRINT "Not Equal"                            
`+ CODEEND
)

powerOnFunctions.set("anyservice", `
# ANYSERVICE
---
This function evaluates to Boolean TRUE if the particular service code exists on the specified Share, Loan, External Loan, Card, or External Loan record; otherwise, it evaluates to Boolean FALSE.

## Syntax
`+ CODESTART + `
ANYSERVICE (RecordType,ServiceCode)
`+ CODEEND + `
Where the record type is SHARE, LOAN, or CARD and the service code is a numeric expression from 1 to 99.

## Arguments
RecordType	                       | ServiceCode
-----------------------------------|---------------------------
SHARE, LOAN, CARD, or EXTERNALLOAN | An expression from 1 to 99

## Example
`+ CODESTART + `
ANYSERVICE (LOAN,20)
`+ CODEEND + `

## Constraints
Use only in the SELECT, SORT, and PRINT divisions or in a procedure called by those divisions
The NOT can precede ANYSERVICE to create a negative selection criterion. PowerOn evaluates the ANYSERVICE function first; then it uses NOT to change the result from false to true or vice versa.

## Extended Example
See ANYSERVICE on line 7.
`+ CODESTART + `
TARGET=ACCOUNT
SELECT
   ANYWARNING(ACCOUNT,20) OR
   ANYWARNING(ACCOUNT,30)
END
PRINT TITLE="Service Code 10 Info"
   FOR EACH SHARE WITH (NOT ANYSERVICE(SHARE,10))
    DO
     PRINT ACCOUNT:NUMBER
    PRINT " "
    PRINT SHARE:ID
    NEWLINE
   END
END
`+ CODEEND
)

powerOnFunctions.set("anywarning", `
# ANYWARNING
---
This function evaluates to Boolean TRUE if a particular warning code exists on the specified Account, Share, Loan, External Loan, Card, or External Loan record; otherwise, it evaluates to Boolean FALSE.

## Syntax
`+ CODESTART + `
ANYWARNING (RecordType,WarningCode)
`+ CODEEND + `

## Arguments

***RecordType***

ACCOUNT, SHARE, LOAN, CARD, or EXTERNALLOAN	

***WarningCode***

Numeric Value
- 3 to 899 User-defined
- 1, 2, and 900 System-defined
- 901 to 999 Reserved

## Example
`+ CODESTART + `
ANYWARNING (LOAN,20)
`+ CODEEND + `

## Constraints
Use only in the SETUP, SELECT, SORT, or PRINT divisions or in a procedure called by those divisions
When ANYWARNING is not specified in the SELECT division, you must specify the ANYWARNING restriction within the SETUP or PRINT division.
NOT can precede ANYWARNING to create a negative selection criterion
Cannot use to identify accounts without empty Warning slots
Evaluates to TRUE only for unexpired warnings
Extended Example - SELECT Division
See ANYWARNING on lines 3 and 4.

## Extended Example - SELECT Division
See ANYWARNING on lines 3 and 4.
`+ CODESTART + `
TARGET=ACCOUNT
SELECT
   ANYWARNING(ACCOUNT,20) OR
   ANYWARNING(ACCOUNT,30)
END
PRINT TITLE="Service Code 10 Info"
   FOR EACH SHARE WITH (NOT ANYSERVICE(SHARE,10))
    DO
     PRINT ACCOUNT:NUMBER
    PRINT " "
    PRINT SHARE:ID
    NEWLINE
   END
END
`+ CODEEND + `

## Extended Example - PRINT Division
`+ CODESTART + `
TARGET=ACCOUNT

  PRINT TITLE="Maintain Warning Codes"
   FOR EACH SHARE WITH (SHARE:CLOSEDATE='--/--/--')
    DO
     IF ANYWARNING(SHARE,22) THEN
      DO
       PRINT "ACCOUNT "+ACCOUNT:NUMBER+" MODIFY SHARE "+SHARE:ID
      NEWLINE
      PRINT " CHANGE CLEARWARNING 22"
      NEWLINE
     END
   END
 END
`+ CODEEND
)

powerOnFunctions.set('capitalize', `
# CAPITALIZE
This function translates the first character of each word to uppercase and translates all other alphabetic characters to lowercase.

## Syntax
`+ CODESTART + `
CAPITALIZE(CharacterExpression)
`+ CODEEND + `

## Example
`+ CODESTART + `
CAPITALIZE(NAME:EXTRAADDRESS)
`+ CODEEND + `

## Usage Information
Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
The character expression you want to capitalize must be in parentheses
Numbers within a character expression do not change when CAPITALIZE is applied
Becomes a constant when used in the DEFINE section

## Output Example
`+ CODESTART + `
CAPITALIZE("EXamPLE tExT")
`+ CODEEND + `
Result: Example Text

## Print Division Example
`+ CODESTART + `
PRINT TITLE="Names with Cards"
   COL=1 CAPITALIZE(NAME:FIRST)
   ...
`+ CODEEND + `
## Total Division Example
`+ CODESTART + `
  TOTAL
   COL=1   "Avg Cumulative Balance"
   COL=10  LEFT (CUMULATIVEBALANCE/NUMSHARES)
   COL=30  CAPITALIZE(LABEL2)
   COL=40  LEFT BRANCHNUM
...
`+ CODEEND + `
## Letter Division Example
`+ CODESTART + `
  LETTER TITLE="Letters for Special Members"
   CAPITALIZE(NAME:FIRST)
   CAPITALIZE(NAME:LAST)
   CAPITALIZE(NAME:STREET)
   CAPITALIZE(NAME:CITY)
   CAPITALIZE(NAME:STATE)
   NAME:ZIP
   CAPITALIZE(NAME:FIRST)
   ACCOUNT:NUMBER
   SHARE:ID
   SHARE:BALANCE
   $20,000.00-SHARE:BALANCE
  END
`+ CODEEND + `
The body of the letter, shown below, must be on a new page of the specfile:

^+^ ^+^
^+^
^+^, ^+^ ^+^
Dear ^+^,
 
Your Account ^^^^^^^^^^ -- Share ID ^^ has a current 
share balance of $^+^. We thank you for your faith in 
your credit union. With a deposit of only $^+^ you can
purchase a $20,000 Golden Eagle Certificate. Please make
your deposit soon.
Thank you,
 
Your Credit Union
`)

powerOnFunctions.set('characterread', `
# CHARACTERREAD
This function displays a prompt on the user's console and returns the character string entered by the user.

## Syntax
`+ CODESTART + `
CharacterString = CHARACTERREAD(prompt[, prompt...])
`+ CODEEND + `

## Example
`+ CODESTART + `
CHARACTERREAD("Enter ZIP Code")
DESIREDZIP=CHARACTERREAD("Enter Desired ZIP Code")
`+ CODEEND + `

## Usage Information
Use only in DEFINE or SETUP divisions or in procedures called by those divisions
Only used in batch specfiles
Use only when you expect a character string response from the operator
Literal prompt must be in quotes and parentheses
Response to prompt cannot be longer than 79 characters
Do not use a parenthesis as the first character in the prompt because it can change the way the prompt appears when a PowerOn specfile is run as a job.
Prompt should be a phrase or series of phrases that are meaningful to the computer operator. Each phrase in a prompt must be separated by commas and delineated by quotation marks
A colon (:) is automatically included after the last word in the prompt when in text mode. If you type an additional colon after the prompt, it is ignored
Becomes a constant when used in the DEFINE section
Important: The CHARACTERREAD function displays in a batch program regardless of where it is in the specfile, even if it is inside of a comment or in a procedure that is not specifically called. If you want to keep the prompt in a comment, simply add a space between the data type and the word READ to prevent PowerOn from recognizing the function and displaying the prompt to the user.
When the operator queues the specfile to run, PowerOn looks through the specfile for READ functions. If it finds any, PowerOn displays the prompts on the console so the operator can respond to them before the job runs. When a READ function is used in a specfile, there is no mechanism to skip it using a conditional statement. Each READ function requires a response. A job file may be used to pre-specify responses to READ functions.

## Division Example
`+ CODESTART + `
  DEFINE
  NAMESEARCH=CHARACTERREAD("Enter the desired name.",
           "This name should begin with a capital letter.", "Name")
  END
`+ CODEEND + `

When a user queues this report for batch processing, PowerOn displays this message and prompt:
Enter the desired name.
This name should begin with a capital letter.
Name:

## Define Division Example
`+ CODESTART + `
 TARGET=SHARE
 DEFINE
  NEWTITLE=CHARACTERREAD("Enter Report Title")
 END
  etc...

 PRINT TITLE=NEWTITLE
  etc...
`+ CODEEND + `

## Select Division Example
`+ CODESTART + `
  TARGET=ACCOUNT
  SELECT
   ACCOUNT:REFERENCE=CHARACTERREAD("Enter Account
   Reference Code")
  END
  etc...
If... Then... Else Example
  IF LOAN:DESCRIPTION=
    CHARACTERREAD("Enter Loan Description") THEN
   DO
    etc...
   END
  ELSE
   DO
    etc...
   END
`+ CODEEND)

powerOnFunctions.set('charactersearch', `
# CHARACTERSEARCH
---
This function returns the position of the first occurrence of one character sequence within another character sequence.

## Syntax
`+ CODESTART + `
CHARACTERSEARCH(CharacterExpressionToSearchWithin,CharacterExpressionToSearchFor)=ReturnValue
`+ CODEEND + `

***Important:*** The value returned by CHARACTERSEARCH is the starting position where the matching expression appears for the first time. To evaluate the results of the search, the function is usually coded using an IF...THEN... statement. It is often coded just to find the existence of the expression (>0), rather than to use the exact return value position (=N).

## Example
A character search return value equal to zero (0) means that the second expression was not found within the first expression.

`+ CODESTART + `
CHARACTERSEARCH(FILELINEIN,ACCOUNT:NUMBER)=0
`+ CODEEND + `

## Example
A character search return value greater than zero (0) means that the second expression was found within the first expression.

`+ CODESTART + `
CHARACTERSEARCH(FILELINEIN,ACCOUNT:NUMBER)>0
`+ CODEEND + `

## Constraints
Cannot be used in the DEFINE division
Use anywhere you would use a numeric expression
Use to determine if a specified character sequence is located within another character sequence, and if so, to identify the location of its first occurrence
Uppercase and lowercase are considered in the matching process
`)

powerOnFunctions.set('chrvalue', `
# CHRVALUE
---
This function returns the numeric decimal ASCII value of a single character.

## Syntax
`+ CODESTART + `
CHRVALUE(character)
`+ CODEEND + `

## Example
`+ CODESTART + `
CHRVALUE("A")
`+ CODEEND + `

Returns ASCII value 65.

## Constraints
Use only in the SETUP, PRINT, or TOTAL divisions or in a procedure called by one of these divisions
Evaluates a variable or function only for a single character
If you enclose more than one character in the parentheses, only the first character is evaluated
If the expression in parentheses contains empty double quotes"", the result is 0 (zero)
`)

powerOnFunctions.set('coderead', `
# CODEREAD
---
This function displays the specified prompt on the operator's console, waits for a code response, and returns operator's response as the value of CODEREAD.

## Syntax
`+ CODESTART + `
CODEREAD(Prompt)
`+ CODEEND + `

## Arguments

*Prompt*
- Character line with maximum of 132 characters

## Example
`+ CODESTART + `
DEFINE
  DESIREDWARNING=NUMBER
END
SETUP
  DESIREDWARNING=CODEREAD("Enter Desired Warning Code")
END
`+ CODEEND + `

## Usage Information
 - Use only in DEFINE or SETUP divisions or in procedures called by those divisions
 - Use only for batch reports
 - 40 character maximum
 - Variables must be defined to evaluate value of CODEREAD as a NUMBER data type
 - Response must be digits
 - The maximum number that can be stored in a code variable is 32767
 - Separate prompt phrases with commas and a separate set of quotes
 - Do not use a parenthesis as the first character in the prompt because it can change the way the prompt appears when a PowerOn specfile is run as a job.
 - More limitations than the other READ functions because existing fields are the only operand that can have a data type of CODE
 - Primarily in the SELECT division and in IF...THEN...ELSE statements
 - Prompt should be a phrase or series of phrases that are meaningful to the computer operator. Each phrase in a prompt must be separated by commas and delineated by quotation marks
 - A colon (:) is automatically included after the last word in the prompt when in text mode. If you type an additional colon after the prompt, it is ignored
 - A prompt entered as "(1) Internal or (2) External", is interpreted as a menu option when viewing the job file. A prompt can be shown in either of the following formats:
    - "Internal (1) or External (2)"
    - The prompt numbers here follow the prompt text.
    - "(1) Internal","(2) External","Enter Selection"
 - The prompt numbers here precede the prompt text, and the text "Enter Selection" is included as part of the prompt.

***Important:*** The CODEREAD function displays in a batch program regardless of where it is in the specfile, even if it is inside of a comment or in a procedure that is not specifically called. If you want to keep the prompt in a comment, simply add a space between the data type and the word READ to prevent PowerOn from recognizing the function and displaying the prompt to the user.

When the operator queues the specfile to run, PowerOn looks through the specfile for READ functions. If it finds any, PowerOn displays the prompts on the console so the operator can respond to them before the job runs. When a READ function is used in a specfile, there is no mechanism to skip it using a conditional statement. Each READ function requires a response. A job file may be used to pre-specify responses to READ functions.

## Define Division Example
The prompt should be a phrase, or series of phrases, that is meaningful to the console operator. If you use more than one phrase in the prompt, each phrase should be separated by commas and delineated by quotes. PowerOn places each character literal on a separate line. See CODEREAD on line 2.
`+ CODESTART + `
  DEFINE
  STARTCODE=CODEREAD("Enter the desired code.",
                    "This code must be in the range 3-9.", "Code")
  END
`+ CODEEND + `

When a user queues this report for batch processing, PowerOn displays the following message and prompt:

Enter the desired code.
This code must be in the range 3-9.

## SELECT Division Example
In the following SELECT division example, PowerOn selects target records that have a WARNINGCODE:1 equal to one of the numbers entered by the operator at the Warning Number prompt displayed by the CODEREAD function:
`+ CODESTART + `
  SELECT
   SHARE:WARNINGCODE:1=CODEREAD("Warning Number")
    OR
   SHARE:WARNINGCODE:1=CODEREAD("Warning Number") 
    OR
   etc...
`+ CODEEND + `

## If...Then...Else Example
The following example uses CODEREAD as a condition in an IF...THEN...ELSE statement. You can use this pattern in the DEFINE, SETUP, PRINT, SELECT, or TOTAL division.
`+ CODESTART + `
  IF LOAN:TYPE=CODEREAD("Enter Loan Type") THEN
   DO
    etc...
   END
  ELSE
   DO
    etc...
   END
`+ CODEEND)

powerOnFunctions.set(`col`, `
#COL
---
## Syntax
`+ CODESTART + `
COL=number expression
`+ CODEEND + `

## Example
`+ CODESTART + `
COL=10 CHECK:POSTDATE
`+ CODEEND + `

## Usage Information
Use only in the SETUP, PRINT, or TOTAL divisions or in a procedure called by one of these divisions
Designating COL=132 for the last column of right-justified numeric data (except for CODE), produces an error due to the space reserved for the minus sign
When data exceeds the available width between two COL statements, numeric data types output asterisks and character data types overflow into the next column
Prints data according to data type unless otherwise specified
Left-justified: CHARACTER (Use RIGHT to force right justification.)
Right-justified: CODE, DATE, FLOAT, MONEY, NUMBER and RATE (Use LEFT to force left justification.)
COL=0 (zero) prints left-justified in the next available column, regardless of the data type.
You must include the ELSE when you use IF...THEN. The expressions following THEN and ELSE must be numbers (COL=IF...THEN # ELSE #)
You need at least nine columns to print a floating point value to accommodate these elements:
A leading plus or minus sign
The first significant digit of the floating point value
The decimal point and the rest of the value
The letter E followed by a plus or minus sign
The three-digit exponent

***Tip:*** If you accidentally define two fields in a way that they overlap, the second of the two fields is moved to the right, using any unused spaces. If the overlap is too severe to resolve, asterisks (*) are displayed in the offending columns, signaling that you need to change the column spacing.

### Character Example
Prints the first letter of the first name in column 5, with the remainder of the first name in the following columns.

`+ CODESTART + `
COL=5 NAME:FIRST
`+ CODEEND + `
Produces the following output if space allows:

00000000011111111112222222222333333333344
COLUMNS: 12345678901234567890123456789012345678901
             GEORGE
             BILL
### Code Example
Prints the last digit of the reporting code in column 88, with the remainder of the code in the preceding columns.

`+ CODESTART + `
COL=88 LOAN:CREDITREPORTINGCODE
`+ CODEEND + `
Produces the following output assuming the value of LOAN:CREDITREPORTINGCODE is 68 or 98:

                               11111111111111111111
         78888888888999999999900000000001111111111
COLUMNS: 90123456789012345678901234567890123456789
                068
                098
### Date Example
Prints the last digit of the year in column 18, with the remainder of the date in the preceding columns.

`+ CODESTART + `
COL=18 ACCOUNT:CLOSEDATE 
`+ CODEEND + `
          00000011111111112222222222333333333344444
COLUMNS: 45678901234567890123456789012345678901234
                05/16/21
                05/19/21
***Tip:*** When preparing to print a right-justified date, you must allow exactly eight spaces to accommodate the six digits and two slashes (or one slash and one asterisk).

### Float Variable Example
Prints the last digit of the number in column 40.

`+ CODESTART + `
COL=40 FLOATVARIABLE1
`+ CODEEND + `
Produces the following output assuming the value of FLOATVARIABLE1 is +2.538E-005 and -1.9E+002:

         11111111122222222223333333333444444444455
COLUMNS: 12345678901234567890123456789012345678901
                             2.538E-005
                              -1.9E+002
### Money Example
Prints the second decimal place in column 40 with the remainder of the value in the preceding columns.

`+ CODESTART + `
COL=40 ACCOUNT:INTERESTLASTYEAR
`+ CODEEND + `
Produces the following output:

         22223333333333444444444455555555556666666
COLUMNS: 67890123456789012345678901234567890123456
               1,842.77
              32,452.66-
***Tip:*** Include the potential commas and decimal when estimating the length. Use that estimate to determine where you want the second decimal place to print.

### Number Example
Prints the last digit of the number in column 40.

`+ CODESTART + `
COL=40 LOAN TRANSACTION:SEQUENCENUMBER
`+ CODEEND + `
Produces the following output assuming LOAN TRANSACTION:SEQUENCENUMBER has a value of -27 or 1274:

         22222333333333344444444445555555555666666
COLUMNS: 56789012345678901234567890123456789012345
                      27-
                   1,274
### Rate Example
Prints the percent sign in column 103, with the remainder of the value in the preceding columns.

`+ CODESTART + `
COL=103 LOAN:INTERESTRATE
`+ CODEEND + `
Produces the following output assuming the value of LOAN:INTERESTRATE is 07.250% or 12.055%:

                    111111111111111111111111111
         89999999999000000000011111111112222222222
COLUMNS: 90123456789012345678901234567890123456789
                __7.250%
                _12.055%
***Note:*** The example above includes blanks to illustrate how to use leading spaces as placeholders for the leading spaces of this eight-character item. When preparing to print a right-justified rate, you must allow exactly eight spaces to accommodate the maximum rate length.
`)

powerOnFunctions.set(`copyapp`, `
# COPYAPP
---
## Syntax
`+ CODESTART + `
COPYAPP (SourceAppID,DestAcct,DestAppID,MoveFlag,PersonFlag,FinFlag,TrackingFlag,NoteFlag,PreferenceFlag,CBIFlag,ErrorText);
`+ CODEEND + `

### Example
`+ CODESTART + `
COPYAPP ("01","0000000124","AA",0,1,1,1,1,1,1,ERRORTEXT)
`+ CODEEND + `

### Arguments

* SourceAppID	
    - The ID of the application being copied or moved

* DestAcct	
    - The destination account number to which you are copying the application fields

* DestAppID	
    - The ID you are assigning to the copy of the application fields

* MoveFlag	
    - Indicates what you want to do with the application
        * 0 = Copy The system makes a duplicate of the application while retaining the original
        * 1 = Move The system makes a duplicate of the application and deletes the original
    - (SymConnect specfiles can Copy or Move).

* PersonFlag	
    - Copy or move, based on the MoveFlag, Person records associated with the application?
        * 0=No
        * 1=Yes

* FinFlag	
    - Copy or move, based on the MoveFlag, Finance records associated with the application?
        * 0=No
        * 1=Yes

* Tracking Flag	
    - Copy or move, based on the MoveFlag, Tracking records associated with the application?
        * 0=No
        * 1=Yes

* NoteFlag	
    - Copy or move, based on the MoveFlag, Note records associated with the application?
        * 0=No
        * 1=Yes

* PreferenceFlag	
    - Copy or move, based on the MoveFlag, Preference records associated with the application?
        * 0=No
        * 1=Yes

* CBIFlag	
    - Copy or move, based on the MoveFlag, CBI (credit report) records associated with the application
        * 0=No
        * 1=Yes
    - Yes copies or moves all CBI records that match Application Person records in these fields:
        * First Name
        * Middle Name
        * Last Name
        * Suffix
        * SSN

* ErrorText
    - When an error occurs and the COPYAPP command fails, the variable will be populated with a short error message.

### Example
`+ CODESTART + `
COPYAPP ("01","0000000124","AA",0,1,1,1,1,1,1,ERRORTEXT)
`+ CODEEND + `

### Usage Information
Use only in the PRINT division or in a procedure called by the PRINT division
You cannot move application fields through regular PowerOn specfiles, but you can move application fields using SymConnect
There is a limit of 150 fields that can be copied or moved. The fields are defined in the Copied Field Definitions parameters. See Application Copied Field Definitions
You cannot copy associated credit reports for Application Person records that have the Person Code field set to (5) Membership.
`)
powerOnFunctions.set("createfinancefromcredrep", `
# CREATEFINANCEFROMCREDREP
---
This function creates Finance records for a loan application based on trade items in a credit report.

### Syntax
`+ CODESTART + `
CREATEFINANCEFROMCREDREP (CheckPrivilegesFlag,AppID,CreditReportLocator,SkipBlankDescriptionFlag,SkipZeroBalanceFlag,ERRORTEXT)
`+ CODEEND + `

### Arguments
- CheckPrivilegesFlag
  *  1 = Check all applicable security privileges
  *  0 = Do not check privileges
- AppID
  * The ID of the loan application where the Finance records are created
- CreditReportLocator
  * The value of the Locator field of the credit report that is used to create Finance records. The Finance records are based on trade items contained within the credit report. Optionally, you can pass -1 as the locator and the function uses the most recent credit report for that account.
- SkipBlankDescriptionFlag
  * 0 = Create Finance records (including those with a blank credit report trade item description)
  * 1 = Do not create Finance records for trade items with a blank description. (Not available for home banking applications.)
  * -1 = Use the setting in the Trade Item Fin Skp Blank Desc field in the Application Miscellaneous Parameters to determine when to create Finance records with blank trade items.
- SkipZeroBalanceFlag
  * 0 = Create Finance records (even if the balance of the credit report trade item is zero)
  * 1 = Do not create Finance records for trade items with a zero balance, regardless of credit limit.
  * 2 = Do not create Finance records for trade items with a zero balance when the credit limit is also zero.
  * -1 = Use the setting in the Trade Item Fin Skp Zero Bal field in the Application Miscellaneous Parameters to determine when to create Finance records for trade items with a zero balance. (Not available for home banking applications.)
- ErrorText
  * A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

SkipZeroBalanceFlag   SkipZeroBalanceFlag   Result
0	                    0	                    Creates Finance records for trade items with blank descriptions or zero balances
1	                    0	                    Does not create Finance records for trade items with blank descriptions, regardless of the balance
0	                    1	                    Does not create Finance records for trade items with zero balances, regardless of the description or the credit limit
1	                    1	                    Does not create Finance records for trade items with blank descriptions or zero balances, regardless of the credit limit
0	                    2	                    Creates Finance records for trade items with zero balances when the credit limit is not zero, regardless of a blank description
1	                    2	                    Creates Finance records for trade items with zero balances if the credit limit is not zero and the description is not blank

`+ CODESTART + `
CREATEFINANCEFROMCREDREP(1,"00",-1,0,0,ERRORTEXT)
`+ CODEEND + `

### Usage Information
Use only in the SETUP or PRINT divisions or in a procedure called by these divisions
If a trade item is returned from a credit bureau without a monthly payment amount, the system uses the Trd Item Mnthly Pmt Rate parameter in Application Miscellaneous Parameters to calculate the Monthly Expense field on the Application Finance Record.
`)
powerOnFunctions.set("ctrlchr", `
# CTRLCHR
---
This function lets you send non-printing control characters to a laser printer to take advantage of special features such as fonts, bold type, and boxes.

### Syntax
`+ CODESTART + `
CTRLCHR(expression)
`+ CODEEND + `

### Example
`+ CODESTART + `
CTRLCHR(210)
`+ CODEEND + `

### Usage Information
* Use only in the SETUP, SELECT, SORT, PRINT, LETTER, or TOTAL divisions or in a procedure called by those divisions
* Every character sent to a printer must be a numeric equivalent from 0-255. The printer prints letters and digits in the range 32-126
* Non-printing characters, such as those representing NEWLINE or NEWPAGE, are in the ranges 0-31 and 127-255; see http://www.asciitable.com/ for a complete table of ASCII numeric codes
* Will always create at least one output file to a binary file, even when used with an input file
* If you use HPESC use CTRLCHR rarely
* If you send non-ANSI-standard control characters to a device (screen or printer), include the NONANSISTANDARD keyword
* When using CRTLCHR to read an input file:
    * Causes at least one output file to be a binary file, which allows special characters. The printed output stair-steps off the page and the remainder of the report is blank. Viewing the report from the report queue is unaffected.
    * In conjunction with NONANSISTANDARD, corrects the affected printed output file but every other file viewed in the report queue are double spaced.
* Use CHRVALUE for checking special characters in an input file
* CHRVALUE is the inverse
* Special characters in PowerOn specfiles include the following: ~, !, $, %, ^, *, (, ), +, -, =, [, ], ", ', |, /, :, <, >, #, @. The special characters &, {, }, and symbols created with the Alt key are not recognized in a specfile, unless used as part of a literal text string.

### Print Control Example
To handle control character sequences that use ESCAPE at the beginning of the sequence, use the HPESC print specification to replace the following in your specfiles:

`+ CODESTART + `
PRINTCONTROL CTRLCHR(27)+
`+ CODEEND + `
Use this function without combining it with PRINTCONTROL, as in a comparison:

`+ CODESTART + `
WHILE TEMPTEXT<>CTRLCHR(10) AND FERROR<>"EOF"
 DO
  ...
 END
`+ CODEEND + `
**Caution:**
You must also include the NONANSISTANDARD command. You may have problems printing in LANDSCAPE mode.

### Extended Example

`+ CODESTART + `
  PRINT "Ask about our "
  PRINTCONTROL CTRLCHR(27)+"&dD"
  PRINT "free"
  PRINTCONTROL CTRLCHR(27)+"&d@"
  PRINT "financial counseling."
  COL=43 "Ext. 150"
  NEWLINE
  etc...
`+ CODEEND
)
powerOnFunctions.set("datasize", `
# DATASIZE
---
This function populates the data file report generated from a DATAFILE specfile.

### Syntax
`+ CODESTART + `
DATASIZE=expression
`+ CODEEND + `

### Example
`+ CODESTART + `
DATASIZE=10 ACCOUNT:NUMBER
`+ CODEEND + `

### Constraints
  * Use only in the PRINT or TOTAL division
  * The minimum value is 1.
  * The maximum value is 132.
  * Use DATASIZE only in a specfile that has DATAFILE specified in the PRINT or TOTAL division.
  * When specified in the PRINT division, this produces a readable listing using the normal print statements found in the PRINT division, and a data file suitable for writing to tape or transmitting to an outside processor.
  * CHARACTER = left-justified in the field and filled with blanks on the right side up to the specified data size.
  * Numeric data is right-justified in the field and filled with leading zeros, populating the field with 9's when exceeding the data size, or populating with 0's (zeros) when the data results in a negative number.
    - DATE = MMDDYY format used
    - RATE = specified in thousandths of a percent with no decimal point. For example, 20.75% = 20750 (not including leading zeros).

***Tip:*** Numeric data is right-justified in the field and filled with leading zeros. PowerOn places only digits in the field. If you need punctuation, such as commas and decimal points, use the FORMAT function to convert the numeric data to CHARACTER data.

### Extended Example
Produce a tape for an outside processor that lists all loans with a Collateral Code of 43. Assume the processor provides this layout:

`+ "```" + `
XYZ Loan Insurance Company Layout

Coding:	EBCDIC
Media:	9 Track 1600 BPI Tape
Recordsize:	80
Blocksize:	8000
Field Length     Field Contents
10               Account Number
2                Loan ID
16               Member Name in Last,First Format
10               Balance
42               Blank Filler
`+ "```" + `
`+ CODESTART + `
TARGET=LOAN
 
 SELECT
  LOAN:COLLATERALCODE=43 AND
  LOAN:CLOSEDATE='--/--/--' AND
  LOAN:CHARGEOFFDATE='--/--/--'
 END
 
 PRINT TITLE="XYZ Insurance" DATAFILE EBCDIC RECORDSIZE=80
  BLOCKSIZE=8000
   HEADER="Account    ID Name                 Balance"
   HEADER="------------------------------------------"
  
   PRINT COL=1  ACCOUNT:NUMBER
   PRINT COL=12 LOAN:ID
   PRINT COL=15 NAME:SHORTNAME
   IF LOAN:BALANCE>=$0.00 THEN
    PRINT COL=41 LOAN:BALANCE TOTAL="Loan Balance:"
   ELSE
    DO
     PRINT COL=41 LOAN:BALANCE
     PRINT COL=44 "(Negative Balance Sent as Zero)"
    END
   NEWLINE
  
   DATASIZE=10 ACCOUNT:NUMBER
   DATASIZE=2  LOAN:ID
   DATASIZE=16 NAME:SHORTNAME
   DATASIZE=10 LOAN:BALANCE
   DATASIZE=42 ""
  END
`+ CODEEND
)
powerOnFunctions.set("date", `
# DATE
---
This function converts a series of three numeric expressions into a single date value.

### Syntax
`+ CODESTART + `
DATE(MonthExpression,DayExpression,YearExpression)
`+ CODEEND + `

### Example
`+ CODESTART + `
DATE(MONTHVAR,DAYVAR,YEARVAR)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP, PRINT, or TOTAL divisions or in a procedure called by one of these divisions
  * The day must be between 1 and 31 (adjusts automatically to the actual last day of the month)
  * The month variable must be between -2200 and +2200 (before adjustment)
  * The month result cannot be greater than 12 or less than 1
  * The year must be between 0 and 178 or 1900 and 2078 (after adjustment)
  * Date null (--/--/--) is returned for values outside the above specifications
  * A number literal, a number variable, or other numeric expression is allowed

### Extended Example
`+ CODESTART + `
M=MONTH(SYSACTUALDATE)
D=DAY(SYSACTUALDATE)
Y=YEAR(SYSACTUALDATE)
PRINT DATE(M+37,D,Y)
`+ CODEEND
)
powerOnFunctions.set("dateoffset", `
# DATEOFFSET
---
This function returns a date value by adjusting a starting date: either by a specified number of months, or to a specified day of the month.

### Syntax
`+ CODESTART + `
DATEOFFSET(StartDate,MonthCount,Day)
`+ CODEEND + `

### Arguments
StartDate
  * A date constant, variable, or expression; the starting date for the calculation
MonthCount
  * A numeric constant, variable, or expression; the number of months to add or subtract from the start date
Day
  * A numeric constant, variable, or expression; the day of the month that you wish to specify, or 0 if you want the day of the month to match the Start date 's day of the month

### Example

`+ CODESTART + `
DATEOFFSET(SYSTEMDATE,-18,0)
`+ CODEEND + `

### Constraints
  * Use only in the SETUP, SELECT, PRINT, or TOTAL divisions or in a procedure called by one of these divisions
  * Must be a date constant, variable, or expression. It is the starting date for the calculation
  * The day must be between 1 and 31 (adjusts automatically to the actual last day of the month)
  * The month variable must be between -2200 and +2200 (before adjustment)
  * The month result cannot be greater than 12 or less than 1
  * The year must be between 0 and 178 or 1900 and 2078 (after adjustment)

### Extended Example
`+ CODESTART + `
	TARGET=LOAN
  SELECT
   LOAN:CLOSEDATE='--/--/--' AND
   LOAN:BALANCE>$0.00 AND
   (LOAN:ORIGINALBALANCE>$500.00 OR
    LOAN:CREDITLIMIT>$500.00) AND
   (LOAN:TYPE>=30 AND LOAN:TYPE<=50) AND
    LOAN:OPENDATE>=DATEOFFSET(SYSTEMDATE,-18,0)
  END
`+ CODEEND + `

### Possible Uses
`+ CODESTART + `
PRINT DATEOFFSET(SYSTEMDATE,-1,31)
`+ CODEEND + `
The last day of the previous month
`+ CODESTART + `
PRINT DATEOFFSET(SYSTEMDATE,0,31)
`+ CODEEND + `
The last day of the current month
`+ CODESTART + `
PRINT DATEOFFSET(SYSTEMDATE,1,1)
`+ CODEEND + `
The first day of the next month
`+ CODESTART + `
PRINT DATEOFFSET(SYSTEMDATE,12,0)
`+ CODEEND + `
The day exactly one year from today
`+ CODESTART + `
PRINT DATEOFFSET(SYSTEMDATE,-18*12,0)
`+ CODEEND + `
The day exactly eighteen years ago
`+ CODESTART + `
IF NAME:BIRTHDATE<>'--/--/--' AND 
NAME:BIRTHDATE<=DATEOFFSET(SYSTEMDATE,-18*12,0) THEN
`+ CODEEND + `
Determines if the member is at least 18 years old
`)
powerOnFunctions.set("dateread", `
# DATEREAD
---
This function displays a prompt on the user's console and returns the date entered.

### Syntax
`+ CODESTART + `
DATEREAD(prompt)
`+ CODEEND + `

### Example
`+ CODESTART + `
DESIREDDATE=DATEREAD("Enter Reconciliation Date")
`+ CODEEND + `

### Usage Information
  * Use only in DEFINE, SELECT, or SETUP division or in procedures called by those divisions.
  * Only used in batch specfiles
  * A colon (:) is automatically included after the last word in the prompt when in text mode. If you type an additional colon after the prompt, it is ignored
  * User must enter the date with either six (mmddyy) or eight (mmddyyyy) digits
  * 40 character maximum
  * Prompt should be a phrase or series of phrases that are meaningful to the computer operator. Each phrase in a prompt must be separated by commas and delineated by quotation marks

***Important:*** The DATEREAD function displays in a batch program regardless of where it is in the specfile, even if it is inside of a comment or in a procedure that is not specifically called. If you want to keep the prompt in a comment, simply add a space between the data type and the word READ to prevent PowerOn from recognizing the function and displaying the prompt to the user.
When the operator queues the specfile to run, PowerOn looks through the specfile for READ functions. If it finds any, PowerOn displays the prompts on the console so the operator can respond to them before the job runs. When a READ function is used in a specfile, there is no mechanism to skip it using a conditional statement. Each READ function requires a response. A job file may be used to pre-specify responses to READ functions.

### Define Division Example
`+ CODESTART + `
  DEFINE
  STARTDATE=DATEREAD("Enter the starting date for the report.",
                    "This date should be the first day of a
                     month.","Starting date")
  END
`+ CODEEND + `

When queued for batch processing, the following message and prompt display:

Enter the starting date for the report.
This date should be the first day of a month.
Starting date [--/--/--]:

### For Each Loop Example
`+ CODESTART + `
  TARGET=SHARE
 DEFINE
   DESIREDDATE=DATEREAD("Enter Expiration Date")
  END
   etc...

 PRINT TITLE="Share Holds Expiring"+FORMAT("99/99/99",DESIREDDATE)
  FOR EACH SHARE HOLD 
   WITH(SHARE HOLD:EXPIRATIONDATE=DESIREDDATE)
   DO
    etc...
`+ CODEEND + `

### Select Open Records Example
`+ CODESTART + `
  TARGET=ACCOUNT
  SELECT
   ACCOUNT:OPENDATE=DATEREAD("Enter First Day of Month")
  END
  etc...
`+ CODEEND + `

### IF...THEN...ELSE Example
`+ CODESTART + `
  IF LOAN:ORIGINALDATE=
    DATEREAD("Enter Desired Date") THEN
   DO
    etc...
   END
  ELSE
   DO
    etc...
   END
`+ CODEEND
)
powerOnFunctions.set("datevalue", `
# DATEVALUE
---
This function converts dates stored as character data to the DATE data type.

### Syntax
`+ CODESTART + `
DATEVALUE (expression)
`+ CODEEND + `

### Example
`+ CODESTART + `
PRINT DATEVALUE ("11/06/12")+1
`+ CODEEND + `
Prints
11/07/12

### Usage Information
  * A truly blank character string ("") or an invalid or unrecognized format is interpreted as a blank date
  * Use only in the SETUP, SELECT, PRINT, or TOTAL divisions or in a procedure called by one of these divisions
  * Automatically strips off leading and trailing blanks before attempting to interpret the text
  * The resulting value can be a text constant, a text variable, or a text expression
  * For the month, use a two-digit range of 01–12
  * For the day, use a two-digit range of 01-31
  * All dates with a two-digit year field will be interpreted to be between the year 1979 and the year 2078. If the two-digit year field is between 00 and 78, the year is interpreted to be between 2000 and 2078. If the two-digit year field is between 79 and 99, the year is interpreted to be between 1979 and 1999.

  ***Important:*** If the Symitar Quest interpretation of a two-digit year is not correct for an application or integration, the system always supports a four-digit year. For example, if the date should be 1968, but Symitar Quest interprets it as 2068, the solution for this issue is for the application or vendor to send the year as a four-digit year.

  * Accepted date formats:
    - ("mm/dd/yyyy")
    - ("mm/d/yy")
    - ("m/dd/yy")
    - ("m/d/yy")
    - ("mm/dd/yy")
    - ("mm/d/yyyy")
    - ("m/dd/yyyy")
    - ("m/d/yyyy")
    - ("mmddyy")
    - ("mmddyyyy")
    - ("yyyymmdd")
    - ("yyyy/mm/dd")
    - ("-/-/-")
    - ("--/--/--")
    - ("--/--/----")

***Tip:*** Use DATEVALUE when you want to have a specfile read through a system-generated report and manipulate text dates on the report.

### Extended Example
The following example opens a letter file called TEMP.FILE and reads each line in the file. Each time it reads a new line, it stores the first ten characters of that line into a variable called DATEVAR, which interprets the first ten characters as a date in MM/DD/YYYY format. The DATEVALUE function then converts this text into MM/DD/YY format and the PRINT statement instructs it to print.
`+ CODESTART + `
  TARGET=ACCOUNT

  DEFINE   
   DATEVAR=CHARACTER(10)
   FNUMBER=NUMBER
   FERROR=CHARACTER
   FLINE=CHARACTER
  END

  PRINT TITLE="Print Dates from file"
   FILEOPEN("LETTER","TEMP.FILE","READ",FNUMBER,FERROR)
   WHILE FERROR=""
    DO
     FILEREADLINE(FNUMBER,FLINE,FERROR)
     DATEVAR=SEGMENT(FLINE,1,10)
     PRINT DATEVALUE(DATEVAR)
     NEWLINE
    END
   FILECLOSE(FNUMBER,FERROR)
  END
`+ CODEEND
)
powerOnFunctions.set("day", `
# DAY
---
This function returns the numerical value for the day in a date field or a date variable.

### Syntax
`+ CODESTART + `
DAY(DateExpression)
`+ CODEEND + `

### Example
`+ CODESTART + `
DAY(CHECK:POSTDATE) DAY(STARTDATE)
`+ CODEEND + `

### Constraints
  * Use only in the SETUP, SELECT, or TOTAL divisions or in a procedure called by one of these divisions
  * Follow the keyword with parentheses that enclose a variable or a field reference with a data type of DATE
  * Value must be in the range from 0 to 31.
  * Use this keyword anywhere you use a number value
  * DAY('--/--/--') returns a value of 0

### Extended Example
`+ CODESTART + `
  TARGET=NAME
  SELECT
   MONTH(NAME:BIRTHDATE)=3 AND
   DAY(NAME:BIRTHDATE)=24
  END
  SORT
   etc...
`+ CODEEND + `
`)
powerOnFunctions.set("dayofweek", `
# DAYOFWEEK
---
This function returns a numeric value from 0-6 representing the day of the week; 0 = Sunday, 1 = Monday, etc.

### Syntax
`+ CODESTART + `
DAYOFWEEK(expression)
`+ CODEEND + `

### Example
`+ CODESTART + `
DAYOFWEEK(SHARE TRANSACTION:POSTDATE)
`+ CODEEND + `

### Constraints
  * Use only in the SETUP, SELECT, SORT, PRINT, LETTER, or TOTAL divisions or in a procedure called by those divisions
  * Null value returns 0

### Extended Example
`+ CODESTART + `
  TARGET=NAME
  SELECT
   DAYOFWEEK(NAME:BIRTHDATE)=2
  END
  SORT
   etc...
`+ CODEEND
)
powerOnFunctions.set("dialogpromptchar", `
# DIALOGPROMPTCHAR
---
This function displays the text for a character data prompt in an interactive window.

### Syntax
`+ CODESTART + `
DIALOGPROMPTCHAR (Prompt,MaxLength,Default)
`+ CODEEND + `

### Arguments
  * Prompt	
      * Character line with a maximum of 40 characters
  * MaxLength	Default
      * The maximum allowable number of characters for the field	The default value for the field, in the appropriate data type. This value displays in the data entry box.

### Example
`+ CODESTART + `
DIALOGPROMPTCHAR("Enter the From address",40,"")
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * Each occurrence of this command must have an associated ENTERCHARACTER statement included, with the prompt for the ENTERCHARACTER command matching the dialog prompt exactly.
  * If the prompt text in the DIALOGPROMPTCHAR statement or the associated ENTERCHARACTER function is over 40 characters or does not match exactly, Episys displays an error.
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * Supports a MaxLength value of 1 thru 78. For a MaxLength value < 1 or > 78 the system defaults to a value of 40
  * Use only for demand specfiles.

### Extended Example
`+ CODESTART + `
SETUP
  DIALOGSTART("EMAIL",10%,0)
  DIALOGINTROTEXT("So you want to send an email?")
  DIALOGPROMPTCHAR("Enter the From address",40,"")
  DIALOGPROMPTCHAR("Enter the To address",40,NAME:EMAIL)
  DIALOGPROMPTCHAR("Enter the subject line",40,"")
  DIALOGPROMPTNUMBER("Enter the number of lines",5)
  DIALOGDISPLAY
  FROMADDRESS=ENTERCHARACTER("Enter the From address",40,NAME:EMAIL)
  TOADDRESS=ENTERCHARACTER("Enter the To address",40,"")
  SUBJECT=ENTERCHARACTER("Enter the subject line",40,"")
  NUMLINES=ENTERNUMBER("Enter the number of lines",5)
  DIALOGCLOSE
 END
`+ CODEEND
)
powerOnFunctions.set("dialogpromptcode", `
# DIALOGPROMPTCODE
---
This function displays the text for a code data prompt in an interactive window.

### Syntax
`+ CODESTART + `
DIALOGPROMPTCODE (Prompt,MaxValue,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    * Character line with a maximum of 40 characters
  * MaxLength
    * The maximum allowable number of characters for the field
  * Default
    * The default value for the field, in the appropriate data type. This value displays in the data entry box.

### Example
`+ CODESTART + `
DIALOGPROMPTCODE("Enter Month 1-12: ",12,MONTH(NAME:BIRTHDATE)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * Each occurrence of this command must have an associated ENTERCODE statement included, with the prompt for the ENTERCODE command matching the dialog prompt exactly.
  * If the prompt text in the DIALOGPROMPTCODE statement or the associated ENTERCODE function is over 40 characters or does not match exactly, Episys displays an error.
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * Use only for demand specfiles.

### Extended Example
`+ CODESTART + `
SETUP
  DIALOGSTART("Birthdate Info",200%,0)
  DIALOGINTROTEXT("Enter your birthdate, (Month, Day)")
  DIALOGPROMPTCODE("Enter Month 1-12: ",12,MONTH(NAME:BIRTHDATE))
  DIALOGPROMPTCODE("Enter Day   1-31: ",31,DAY(NAME:BIRTHDATE))
  DIALOGDISPLAY
  M=ENTERCODE("Enter Month 1-12: ",12,MONTH(NAME:BIRTHDATE))
  D=ENTERCODE("Enter Day   1-31: ",31,DAY(NAME:BIRTHDATE))
  DIALOGCLOSE
 END
`+ CODEEND
)
powerOnFunctions.set("dialogpromptcombooption", `
# DIALOGPROMPTCOMBOOPTION
---
This function adds options to a drop-down list of choices in an interactive window.

### Syntax
`+ CODESTART + `
DIALOGPROMPTCOMBOOPTION (Value,Text)
`+ CODEEND + `

### Arguments
  * Value
    * Numeric value (>=0) associated with this list box option
  * Text
    * Text description displayed in the list box for this option

### Example
`+ CODESTART + `
DIALOGPROMPTCOMBOOPTION(00,"Single Payment")
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * The coding to define a combo box must begin with a DIALOGPROMPTCOMBOSTART command and end with a DIALOGPROMPTCOMBOEND command
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * The VALUE argument cannot be larger than 32767
  * Use only for demand specfiles.

### Extended Example
***Tip:*** To select the desired option, use ENTERCODE.
`+ CODESTART + `
DIALOGPROMPTCOMBOOPTION(00,"Single Payment")
 DIALOGPROMPTCOMBOOPTION(10,"Annual")
 DIALOGPROMPTCOMBOOPTION(20,"Semi-Annual")
 DIALOGPROMPTCOMBOOPTION(30,"Quarterly")
 DIALOGPROMPTCOMBOOPTION(40,"Monthly")
 DIALOGPROMPTCOMBOOPTION(50,"Semi-Monthly")
 DIALOGPROMPTCOMBOOPTION(60,"Biweekly Skip First")
 DIALOGPROMPTCOMBOOPTION(70,"Biweekly Skip Last")
 DIALOGPROMPTCOMBOOPTION(80,"Biweekly")
 DIALOGPROMPTCOMBOOPTION(90,"Weekly")
 DIALOGPROMPTCOMBOOPTION(100,"Immediate")
 DIALOGPROMPTCOMBOOPTION(110,"Weekly Skip First")
 DIALOGPROMPTCOMBOOPTION(120,"Weekly Skip Last")
`+ CODEEND + `
Selecting Quarterly returns a value of 30 as defined above.

***Important:*** The value of the prompt field in the ENTERCODE statement must match the prompt field in the DIALOGPROMPTCOMBOSTART command exactly. If not, results will be unpredictable.
### Setup Division Example
`+ CODESTART + `
SETUP
  X=-1
  FOR EACH SHARE WITH (SHARE:CLOSEDATE='--/--/--' OR
                      (SHARE:CLOSEDATE<=SYSTEMDATE AND
                       SHARE:CLOSEDATE>=DATE(1,1,FULLYEAR(SYSTEMDATE))))
   DO
    X=X+1
    ID(X)=SHARE:ID
    DESCRIPTION(X)=SHARE:DESCRIPTION
   END
  DIALOGSTART("Select a Share",100%,1)
  DIALOGPROMPTCOMBOSTART("Share ID",0)
  FOR I=0 TO X
    DO
     DIALOGPROMPTCOMBOOPTION(I,ID(I)+" "+DESCRIPTION(I))
    END
  DIALOGPROMPTCOMBOEND
  DIALOGDISPLAY
  IDSUB=ENTERCODE("Share ID",X,0)
  DIALOGCLOSE
  SELECTEDID = ID(IDSUB)
  SELECTEDDESC = DESCRIPTION(IDSUB)
 END
`+ CODEEND + `
Because share IDs are character fields, they are not used for the field value. Instead, the coding places the ordinal value of the option as value and then selects the ID and description using the selected value as the index into arrays.
`)
powerOnFunctions.set("dialogpromptcombostart", `
# DIALOGPROMPTCOMBOSTART
---
This function indicates the beginning of a drop-down list of options in an interactive window.

### Syntax
`+ CODESTART + `
DIALOGPROMPTCOMBOSTART (Prompt,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    * Character line with a maximum of 40 characters
  * MaxLength
    * The maximum allowable number of characters for the field
  * Default
    * The default value for the field, in the appropriate data type. This value displays in the data entry box.

### Example
`+ CODESTART + `
DIALOGPROMPTCOMBOSTART ("Share ID",0)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * The coding to define a combo box must begin with a DIALOGPROMPTCOMBOSTART command and end with a DIALOGPROMPTCOMBOEND command
  * If the prompt text in the DIALOGPROMPTCOMBOSTART statement or the associated ENTERCODE function is over 40 characters or does not match exactly, Episys displays an error.
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * The value of the prompt field in the ENTERCODE statement must match the prompt field in the DIALOGPROMPTCOMBOSTART command exactly, otherwise the results will be unpredictable
  * Use only for demand specfiles.

### Extended Example
`+ CODESTART + `
SETUP
  X=-1
  FOR EACH SHARE WITH (SHARE:CLOSEDATE='--/--/--' OR
                      (SHARE:CLOSEDATE<=SYSTEMDATE AND
                       SHARE:CLOSEDATE>=DATE(1,1,FULLYEAR(SYSTEMDATE))))
   DO
    X=X+1
    ID(X)=SHARE:ID
    DESCRIPTION(X)=SHARE:DESCRIPTION
   END
  DIALOGSTART("Select a Share",100%,1)
  DIALOGPROMPTCOMBOSTART("Share ID",0)
  FOR I=0 TO X
    DO
     DIALOGPROMPTCOMBOOPTION(I,ID(I)+" "+DESCRIPTION(I))
    END
  DIALOGPROMPTCOMBOEND
  DIALOGDISPLAY
  IDSUB=ENTERCODE("Share ID",X,0)
  DIALOGCLOSE
  SELECTEDID = ID(IDSUB)
  SELECTEDDESC = DESCRIPTION(IDSUB)
 END
`+ CODEEND
)
powerOnFunctions.set("dialogpromptdate", `
# DIALOGPROMPTDATE
---
This function displays the text for a date prompt in an interactive window.

### Syntax
`+ CODESTART + `
DIALOGPROMPTDATE (Prompt,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    * Character line with a maximum of 40 characters
  * MaxLength
    * The maximum allowable number of characters for the field
  * Default
    * The default value for the field, in the appropriate data type. This value displays in the data entry box.

### Example
`+ CODESTART + `
DIALOGPROMPTDATE ("Date Prompt",'06/05/08')
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * If the prompt text in the DIALOGPROMPTDATE statement or the associated ENTERDATE function is over 40 characters or does not match exactly, Episys displays an error.
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * Each occurrence must have an associated ENTERDATE matching the dialog prompt
  * Use only for demand specfiles.

### Extended Example
`+ CODESTART + `
SETUP
  DIALOGSTART("Test Prompts",100%,0)
  DIALOGINTROTEXT("Test display of various prompts")
  DIALOGPROMPTMONEY("Money Prompt",$100.00)
  DIALOGPROMPTRATE("Rate Prompt",8.500%)
  DIALOGPROMPTDATE("Date Prompt",'06/05/00')
  DIALOGPROMPTYESNO("Yes/No Prompt",1)
  DIALOGDISPLAY
  MONEYFIELD=ENTERMONEY("Money Prompt",$100.00)
  RATEFIELD=ENTERRATE("Rate Prompt",8.500%)
  DATEFIELD=ENTERDATE("Date Prompt",'06/05/00')
  YESNOFIELD=ENTERYESNO("Yes/No Prompt","1")
  DIALOGCLOSE
 END
`+ CODEEND
)
powerOnFunctions.set("dialogpromptlistoption", `
# DIALOGPROMPTLISTOPTION
---
This function adds options to a list box in an interactive window.

### Syntax
`+ CODESTART + `
DIALOGPROMPTLISTOPTION (Value,Text)
`+ CODEEND + `

### Arguments
  * Value
    * Numeric value (>=0) associated with this list box option
  * Text
    * Text description displayed in the list box for this option (up to 40 characters)

### Example
`+ CODESTART + `
DIALOGPROMPTLISTOPTION (0,"Dividends for Regular Shares")
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * The coding to define a list box must begin with a DIALOGPROMPTLISTSTART command and finish with DIALOGPROMPTLISTEND command.
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * Use only for demand specfiles.

***Note:*** To select the desired option use the ENTERCODE statement to return the entry from the Value argument.

### Extended Example
`+ CODESTART + `
SETUP
  DIALOGSTART("Display YTD Dividend Information",100%,1)
  DIALOGPROMPTLISTSTART("Type of Calculation",0)
  DIALOGPROMPTLISTOPTION(0,"Dividends for Regular Shares")
  DIALOGPROMPTLISTOPTION(1,"Dividends for Tax-Deferred Shares") 
  DIALOGPROMPTLISTOPTION(2,"Dividends for All Shares")
  DIALOGPROMPTLISTOPTION(3,"Dividends for Selected Share")
  DIALOGPROMPTLISTOPTION(7,"Dividends for Special Shares")
  DIALOGPROMPTLISTOPTION(8,"Dividends for Member Shares")
  DIALOGPROMPTLISTOPTION(9,"Dividends for Non-Deferred Shares")
  DIALOGPROMPTLISTEND
  DIALOGDISPLAY
  SELECTION=ENTERCODE("Type of Calculation",9,0)
  DIALOGCLOSE
 END
`+ CODEEND
)
powerOnFunctions.set("dialogpromptliststart", `
# DIALOGPROMPTLISTSTART
---
This function indicates the beginning of a list box in an interactive window.

### Syntax
`+ CODESTART + `
DIALOGPROMPTLISTSTART (Prompt,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    * Character line with a maximum of 40 characters
  * MaxLength
    * The maximum allowable number of characters for the field
  * Default
    * The default value for the field, in the appropriate data type. This value displays in the data entry box.

### Example
`+ CODESTART + `
DIALOGPROMPTLISTSTART ("Type of Calculation",0)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * The coding to define a list box must begin with a DIALOGPROMPTLISTSTART command and finish with DIALOGPROMPTLISTEND command.
  * The value of the prompt field in the ENTERCODE statement must match the prompt field in the DIALOGPROMPTLISTSTART command exactly. If not, an error message appears.
  * If the prompt text in the DIALOGPROMPTLISTSTART statement or the associated ENTERCODE function is over 132 characters or does not match exactly, Episys displays an error.
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * Use only for demand specfiles.

### Extended Example
`+ CODESTART + `
SETUP
  DIALOGSTART("Display YTD Dividend Information",100%,1)
  DIALOGPROMPTLISTSTART("Type of Calculation",0)
  DIALOGPROMPTLISTOPTION(0,"Dividends for Regular Shares")
  DIALOGPROMPTLISTOPTION(1,"Dividends for Tax-Deferred Shares") 
  DIALOGPROMPTLISTOPTION(2,"Dividends for All Shares")
  DIALOGPROMPTLISTOPTION(3,"Dividends for Selected Share")
  DIALOGPROMPTLISTOPTION(7,"Dividends for Special Shares")
  DIALOGPROMPTLISTOPTION(8,"Dividends for Member Shares")
  DIALOGPROMPTLISTOPTION(9,"Dividends for Non-Deferred Shares")
  DIALOGPROMPTLISTEND
  DIALOGDISPLAY
  SELECTION=ENTERCODE("Type of Calculation",9,0)
  DIALOGCLOSE
 END
`+ CODEEND
)
powerOnFunctions.set("dialogpromptmoney", `
# DIALOGPROMPTMONEY
---
This function displays a prompt for the user to enter a value.

### Syntax
`+ CODESTART + `
DIALOGPROMPTMONEY (Prompt,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    - Character line with a maximum of 40 characters
  * MaxLength
    - The maximum allowable number of characters for the field
  * Default
    - The default value for the field, in the appropriate data type. This value displays in the data entry box.

### Example
`+ CODESTART + `
DIALOGPROMPTMONEY ("Enter the Amount",$100.00)
`+ CODEEND + `

### Usage Information
  * Each occurrence of this command must have an associated ENTERMONEY statement included, with the prompt for the ENTERMONEY command matching the dialog prompt exactly.
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * If the prompt text in the DIALOGPROMPTMONEY statement or the associated ENTERMONEY function is over 40 characters or does not match exactly, Episys displays an error.
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * Use only for demand specfiles. Use the NUMBERREAD function for batch specfiles.

### Extended Example
`+ CODESTART + `
SETUP
  DIALOGSTART("Test Prompts",100%,0)
  DIALOGINTROTEXT("Test display of various prompts")
  DIALOGPROMPTMONEY("Money Prompt",$100.00)
  DIALOGPROMPTRATE("Rate Prompt",8.500%)
  DIALOGPROMPTDATE("Date Prompt",'06/05/00')
  DIALOGPROMPTYESNO("Yes/No Prompt",1)
  DIALOGDISPLAY
  MONEYFIELD=ENTERMONEY("Money Prompt",$100.00)
  RATEFIELD=ENTERRATE("Rate Prompt",8.500%)
  DATEFIELD=ENTERDATE("Date Prompt",'06/05/00')
  YESNOFIELD=ENTERYESNO("Yes/No Prompt","1")
  DIALOGCLOSE
 END
`+ CODEEND
)
powerOnFunctions.set("dialogpromptnumber", `
# DIALOGPROMPTNUMBER
---
This function displays a user prompt for a number.

### Syntax
`+ CODESTART + `
DIALOGPROMPTNUMBER (Prompt,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    - Character line with a maximum of 40 characters
  * Default
    - The default value for the field, in the appropriate data type. This value displays in the data entry box.

### Example
`+ CODESTART + `
DIALOGPROMPTNUMBER ("Enter the Number of Lines",5)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * Both positive and negative numbers allowed
  * Each occurrence of this command must have an associated ENTERNUMBER statement included, with the prompt for the ENTERNUMBER command matching the dialog prompt exactly.
  * If the prompt text in the DIALOGPROMPTNUMBER statement or the associated ENTERNUMBER function is over 40 characters or does not match exactly, Episys displays an error.
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * Use only for demand specfiles.

### Extended Example
`+ CODESTART + `
SETUP
  DIALOGSTART("EMAIL",10%,0)
  DIALOGINTROTEXT("So you want to send an email?")
  DIALOGPROMPTCHAR("Enter the From address",40,"")
  DIALOGPROMPTCHAR("Enter the To address",40,NAME:EMAIL)
  DIALOGPROMPTCHAR("Enter the subject line",40,"")
  DIALOGPROMPTNUMBER("Enter the number of lines",5)
  DIALOGDISPLAY
  FROMADDRESS=ENTERCHARACTER("Enter the From address",40,NAME:EMAIL)
  TOADDRESS=ENTERCHARACTER("Enter the To address",40,"")
  SUBJECT=ENTERCHARACTER("Enter the subject line",40,"")
  NUMLINES=ENTERNUMBER("Enter the number of lines",5)
  DIALOGCLOSE
 END
`+ CODEEND
)
powerOnFunctions.set("dialogpromptpassword", `
# DIALOGPROMPTPASSWORD
---
This function displays a prompt for the user to enter a password.

### Syntax
`+ CODESTART + `
DIALOGPROMPTPASSWORD (Prompt,MaxLength,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    - Character line with a maximum of 40 characters
  * MaxLength
    - The maximum allowable number of characters for the field
  * Default
    - The default value for the field, in the appropriate data type. This value displays in the data entry box.

### Example
`+ CODESTART + `
DIALOGPROMPTPASSWORD("Password",10,"1234567890")
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * Default and entered text are masked with asterisks
  * Each occurrence of this command must have an associated ENTERCHARACTER statement included, with the prompt for the ENTERCHARACTER command matching the dialog prompt exactly.
  * If the prompt text in the DIALOGPROMPTPASSWORD statement or the associated ENTERCHARACTER function is over 40 characters or does not match exactly, Episys displays an error.
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * Use only for demand specfiles.

### Extended Example
`+ CODESTART + `
SETUP
DIALOGSTART("User Password",4000%,0)
DIALOGINTROTEXT("Enter a User Password")
DIALOGPROMPTPASSWORD("Password",10,"1234567890")
DIALOGDISPLAY
USERPASS=ENTERCHARACTER("Password",10,"1234567890")
DIALOGCLOSE
END
`+ CODEEND
)
powerOnFunctions.set("dialogpromptrate", `
# DIALOGPROMPTRATE
---
This function displays the text for a rate prompt in an interactive window.

### Syntax
`+ CODESTART + `
DIALOGPROMPTRATE (Prompt,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    - Character line with a maximum of 40 characters
  * MaxLength
    - The maximum allowable number of characters for the field
  * Default
    - The default value for the field, in the appropriate data type. This value displays in the data entry box.

### Example
`+ CODESTART + `
DIALOGPROMPTRATE ("Enter a rate",5.00%)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * Each occurrence of this command must have an associated ENTERRATE statement included, with the prompt for the ENTERRATE command matching the dialog prompt exactly.
  * If the prompt text in the DIALOGPROMPTRATE statement or the associated ENTERRATE function is over 40 characters or does not match exactly, Episys displays an error.
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * Use only for demand specfiles.

### Extended Example
`+ CODESTART + `
SETUP
  DIALOGSTART("Test Prompts",100%,0)
  DIALOGINTROTEXT("Test display of various prompts")
  DIALOGPROMPTMONEY("Money Prompt",$100.00)
  DIALOGPROMPTRATE("Rate Prompt",8.500%)
  DIALOGPROMPTDATE("Date Prompt",'06/05/00')
  DIALOGPROMPTYESNO("Yes/No Prompt",1)
  DIALOGDISPLAY
  MONEYFIELD=ENTERMONEY("Money Prompt",$100.00)
  RATEFIELD=ENTERRATE("Rate Prompt",8.500%)
  DATEFIELD=ENTERDATE("Date Prompt",'06/05/00')
  YESNOFIELD=ENTERYESNO("Yes/No Prompt","1")
  DIALOGCLOSE
 END
`+ CODEEND
)
powerOnFunctions.set("dialogpromptyesno", `
# DIALOGPROMPTYESNO
---
This function displays a drop-down list for a yes or no response in an interactive window.

### Syntax
`+ CODESTART + `
DIALOGPROMPTYESNO (Prompt,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    - Character line with a maximum of 40 characters
  * Default
    - The default value for the field, in the appropriate data type. This value displays in the data entry box.

### Example
`+ CODESTART + `
DIALOGSTART ("Sample Dialog",100%,0)
DIALOGPROMPTYESNO ("Yes or No",1)
DIALOGDISPLAY
YESNORESPONSE=ENTERYESNO("Yes or No","1")
DIALOGCLOSE
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * Each occurrence of this command must have an associated ENTERYESNO statement included, with the prompt for the ENTERYESNO command matching the dialog prompt exactly.
  * If the prompt text in the DIALOGPROMPTYESNO statement or the associated ENTERYESNO function is over 40 characters or does not match exactly, Episys displays an error.
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * The default is assigned a value of 1 for yes and 0 for no. This differs from the default in the ENTERYESNO command, which is enclosed in quotes and can also have values of "Y" or "N."
  * Use only for demand specfiles.

### Extended Example
`+ CODESTART + `
SETUP
  DIALOGSTART("Test Prompts",100%,0)
  DIALOGINTROTEXT("Test display of various prompts")
  DIALOGPROMPTMONEY("Money Prompt",$100.00)
  DIALOGPROMPTRATE("Rate Prompt",8.500%)
  DIALOGPROMPTDATE("Date Prompt",'06/05/00')
  DIALOGPROMPTYESNO("Yes/No Prompt",1)
  DIALOGDISPLAY
  MONEYFIELD=ENTERMONEY("Money Prompt",$100.00)
  RATEFIELD=ENTERRATE("Rate Prompt",8.500%)
  DATEFIELD=ENTERDATE("Date Prompt",'06/05/00')
  YESNOFIELD=ENTERYESNO("Yes/No Prompt","1")
  DIALOGCLOSE
 END
`+ CODEEND
)
powerOnFunctions.set("dialogstart", `
# DIALOGSTART
---
This function initiates a new prompt and response sequence in an interactive window.

### Syntax
`+ CODESTART + `
DIALOGSTART (DialogTitle,WHRatio,Alignment)
`+ CODEEND + `

### Arguments
  * Dialog Title
    - Character title for dynamic dialog window
  * W/H Ratio
    - Width/height ratio (as a rate) between 1% and 5000%
  * Alignment
    - 0 align to left, 1 align to right

### Example
`+ CODESTART + `
DIALOGSTART ("Birth Date Info",200%,0)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP or PRINT divisions or in a procedure called by these divisions
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * Use only for demand specfiles.

### Extended Example
`+ CODESTART + `
SETUP
  DIALOGSTART("Birthdate Info",200%,0)
  DIALOGINTROTEXT("Enter your birthdate, (Month, Day)")
  DIALOGPROMPTCODE("Enter Month 1-12: ",12,MONTH(NAME:BIRTHDATE))
  DIALOGPROMPTCODE("Enter Day   1-31: ",31,DAY(NAME:BIRTHDATE))
  DIALOGDISPLAY
  M=ENTERCODE("Enter Month 1-12: ",12,MONTH(NAME:BIRTHDATE))
  D=ENTERCODE("Enter Day   1-31: ",31,DAY(NAME:BIRTHDATE))
  DIALOGCLOSE
 END
`+ CODEEND + `

WHRatio Argument
The WHRatio argument specified in the DIALOGSTART function is used to affect the layout of control statements inside the dialog box. The WHRatio is the ratio of a dialog box's width to its height. The WHRatio value is not actually used in the algorithm to arrange the dialog controls, but the algorithm arranges the dialog controls in a way that brings the actual aspect ratio as close as possible to the desired WHRatio. For most dialog boxes, the ratio of 100% is a good starting point. For a more complicated dialog box with numerous controls, some trial and error is required. One set of functions that changes the arrangement of dialog controls, and thus influences the WHRatio, is DIALOGSTARTGROUPING and DIALOGENDGROUPING.

The following sample specfile illustrates how the WHRatio affects the shape of a dialog box. In this sample, the WHRatio is 100%.

`+ CODESTART + `
WINDOWS

TARGET=ACCOUNT

DEFINE
 LASTN=CHARACTER(40)
 FIRSTM=CHARACTER(20)
END

SETUP
 DIALOGSTART("Ratio set at 100%",100%,0)
 DIALOGINTROTEXT("Enter the appropriate information.")
 DIALOGPROMPTCHAR("Enter Last Name",40,NAME:LAST)
 DIALOGPROMPTCHAR("Enter First Name",20,NAME:FIRST)
 DIALOGDISPLAY
 LASTN=ENTERCHARACTER("Enter Last Name",40,NAME:LAST)
 FIRSTM=ENTERCHARACTER("Enter First Name",20,NAME:FIRST)
 DIALOGCLOSE
END 

PRINT TITLE="CPR"
 POPUPMESSAGE(0,FIRSTM+" "+LASTN)
END

TOTAL
END
`+ CODEEND + `

A dialog box similar to the following is displayed:

Without changing any other code, increase the WHRatio in the above specfile to 400%. Changing the WHRatio to 400% changes the position of the dialog controls, and a dialog box similar to the following is displayed:

The dialog box still works the same way, only now the prompts are arranged side by side. The size and shape of the dialog box can also be manipulated in concert with another set of dialog functions, such as DIALOGSTARTGROUPING and DIALOGENDGROUPING. For example, the code from the previous example has been changed between DIALOGSTARTGROUPING and DIALOGENDGROUPING only:

`+ CODESTART + `
WINDOWS

TARGET=ACCOUNT

DEFINE
 LASTN=CHARACTER(40)
 FIRSTM=CHARACTER(20)
END

SETUP
 DIALOGSTART("Ratio set at 400%",400%,0)
 DIALOGINTROTEXT("Enter the appropriate information.")
 DIALOGSTARTGROUPING
  DIALOGPROMPTCHAR("Enter Last Name",40,NAME:LAST)
  DIALOGPROMPTCHAR("Enter First Name",20,NAME:FIRST)
 DIALOGENDGROUPING
 DIALOGDISPLAY
 LASTN=ENTERCHARACTER("Enter Last Name",40,NAME:LAST)
 FIRSTM=ENTERCHARACTER("Enter First Name",20,NAME:FIRST)
 DIALOGCLOSE
END 

PRINT TITLE="CPR"
 POPUPMESSAGE(0,FIRSTM+" "+LASTN)
END

TOTAL
END
`+ CODEEND + `
Here the dialog box presents the controls as before with the addition of the above functions.

Note that the original controls are displayed.
`)
powerOnFunctions.set("DIALOGSTARTGROUPBOX", `
# DIALOGSTARTGROUPBOX
---
This function begins a group of prompts and responses in an interactive window.

### Syntax
`+ CODESTART + `
DIALOGSTARTGROUPBOX("Text")
`+ CODEEND + `

### Example
`+ CODESTART + `
DIALOGSTARTGROUPBOX("Birthdate Info (M,D)")
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * Use only for demand specfiles.

### Extended Example
`+ CODESTART + `
SETUP
   DIALOGSTART("Birthdate Info",200%,0)
     DIALOGSTARTGROUPBOX("Birthdate Info (M,D)")
       DIALOGPROMPTCODE("Enter Month 1-12: ",12,MONTH(NAME:BIRTHDATE))
       DIALOGPROMPTCODE("Enter Day   1-31: ",31,DAY(NAME:BIRTHDATE))
     DIALOGENDGROUPBOX
 
     DIALOGSTARTGROUPBOX("Birthdate Info (YY)")
        DIALOGPROMPTNUMBER("Enter 4-digit Year: ",FULLYEAR(NAME:BIRTHDATE))
        DIALOGENDGROUPBOX 
      DIALOGDISPLAY
        M=ENTERCODE("Enter Month 1-12: ",12,MONTH(NAME:BIRTHDATE))
        D=ENTERCODE("Enter Day   1-31: ",31,DAY(NAME:BIRTHDATE))
        Y=ENTERNUMBER("Enter 4-digit Year: ",FULLYEAR(NAME:BIRTHDATE))
      DIALOGCLOSE
END
`+ CODEEND
)
powerOnFunctions.set("dialogtextlistoption", `
# DIALOGTEXTLISTOPTION
---
This function adds options as lines of data in a read-only list box contained in a pop-up window.

### Syntax
`+ CODESTART + `
DIALOGTEXTLISTOPTION("Text")
`+ CODEEND + `

### Example
`+ CODESTART + `
DIALOGTEXTLISTOPTION("The following is a list of some of the new commands:")
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * The coding to define a text list box must begin with a DIALOGTEXTLISTSTART command and end with a DIALOGTEXTLISTEND command
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * Use only for demand specfiles.

### Extended Example
`+ CODESTART + `
SETUP
  DIALOGSTART("Display Windows Dialog Commands",100%,1)
  DIALOGTEXTLISTSTART("Text List Display")
  DIALOGTEXTLISTOPTION("The following is a list of some of the new commands:")
  DIALOGTEXTLISTOPTION("") 
  DIALOGTEXTLISTOPTION("DIALOGSTART") 
  DIALOGTEXTLISTOPTION("DIALOGEND")
  DIALOGTEXTLISTOPTION("DIALOGINTROTEXT")
  DIALOGTEXTLISTOPTION("DIALOGNEWCOLUMN")
  DIALOGTEXTLISTOPTION("DIALOGSTARTGROUPBOX")
  DIALOGTEXTLISTOPTION("DIALOGENDGROUPBOX")
  DIALOGTEXTLISTEND
  DIALOGDISPLAY
  DIALOGCLOSE
 END
`+ CODEEND
)
powerOnFunctions.set("dialogtextliststart", `
# DIALOGTEXTLISTSTART
---
This function indicates the beginning of a list box of read-only data lines contained in a pop-up window.

### Syntax
`+ CODESTART + `
DIALOGTEXTLISTSTART(Title)
`+ CODEEND + `

### Arguments
  * Title
    - Character text, meaningful to the operator, to display.

### Example
`+ CODESTART + `
DIALOGTEXTLISTSTART("Text List Display")
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * The coding to define a text list box must begin with a DIALOGTEXTLISTSTART command and end with a DIALOGTEXTLISTEND command
  * Clicking the Cancel button terminates the specfile
  * Pressing Enter or clicking the OK button continues the specfile
  * Use only for demand specfiles.

### Extended Example
`+ CODESTART + `
SETUP
  DIALOGSTART("Display Windows Dialog Commands",100%,1)
  DIALOGTEXTLISTSTART("Text List Display")
  DIALOGTEXTLISTOPTION("The following is a list of some of the new commands:")
  DIALOGTEXTLISTOPTION("") 
  DIALOGTEXTLISTOPTION("DIALOGSTART") 
  DIALOGTEXTLISTOPTION("DIALOGEND")
  DIALOGTEXTLISTOPTION("DIALOGINTROTEXT")
  DIALOGTEXTLISTOPTION("DIALOGNEWCOLUMN")
  DIALOGTEXTLISTOPTION("DIALOGSTARTGROUPBOX")
  DIALOGTEXTLISTOPTION("DIALOGENDGROUPBOX")
  DIALOGTEXTLISTEND
  DIALOGDISPLAY
  DIALOGCLOSE
 END
`+ CODEEND
)
powerOnFunctions.set("dim", `
# DIM
---
This function returns the screen to normal display after characters are displayed with the BRIGHT command.

### Syntax
`+ CODESTART + `
DIM statement
`+ CODEEND + `

### Example
`+ CODESTART + `
DIM COL=20 SHARE:ID
`+ CODEEND + `

### Constraints
  * Functions in text mode only
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Use only for CRT display; function does not affect printed reports
  * Has no effect in batch mode

***Tip:*** DIM turns off the BRIGHT command and returns to default display mode.

### Extended Example
`+ CODESTART + `
  PRINT TITLE="Share Balance Inquiry"
   HEADERS
    BRIGHT
    PRINT "ID Description                    Balance"
    NEWLINE
    PRINT "-----------------------------------------"
    NEWLINE
   END
   DIM
   PRINT SHARE:ID
   PRINT " "
   PRINT SHARE:DESCRIPTION
   PRINT COL=40 SHARE:BALANCE
   NEWLINE
  etc...
`+ CODEEND
)
powerOnFunctions.set("divprojectinit", `
# DIVPROJECTINIT
---
This function initializes the setup variables required for performing annual percentage yield (APY) calculations and dividend projections.

### Syntax
`+ CODESTART + `
DIVPROJECTINIT(DataSource, ParameterDefaultType)
`+ CODEEND + `

### Arguments
The parameter default is only used if the data source is 2; it is ignored otherwise.

  - DataSource
    * 0 = Blank defaults - all data will be filled in by specfile 
    * 1 = Use data in the currently read share record
    * 2 = Use data in a share default record
  - ParameterDefaultType
    * 0
    * 0
    * Share type associated with the record you are using

### Example
`+ CODESTART + `
DIVPROJECTINIT(1,0)
`+ CODEEND + `

### Constraints
  * Use only in the SETUP, PRINT, or TOTAL divisions or in a procedure called by one of these divisions
  * Review Dividend Projection Specfile Variables before using
  * The dividend projection calculations are not the same as anticipated dividend calculations. The current share transaction history is not taken into account, and therefore does not provide an anticipated dividend.

### Extended Example
`+ CODESTART + `
  TARGET=SHARE

  DEFINE
   TOTALDIVIDEND=MONEY
  END

  SELECT
   SHARE:TYPE=42 AND
   SHARE:MATURITYDATE>='09/01/97' AND
   SHARE:BALANCE>$0.00
  END

  PRINT TITLE="Dividend Projections Test"
   DIVPROJECTINIT(2,42)
   @DIVPROJECTCALCULATIONTYPE=0
   @DIVPROJECTMATURITYDATE='08/31/97'
   @DIVPROJECTOPENDATE=SHARE:OPENDATE
   @DIVPROJECTOPENBALANCE=SHARE:ORIGINALBALANCE

   DIVPROJECTCALC

   IF @DIVPROJECTERROR="" THEN
    CALL PRINTRESULT
   ELSE
    DO
     PRINT "  !!!!!!!!!!!!  "
     PRINT @DIVPROJECTERROR
     PRINT "   !!!!!!!!!!!"
     NEWLINE
    END
  END

  TOTAL
   PRINT "TOTAL DIVIDENDS "
   PRINT TOTALDIVIDEND
  END

  PROCEDURE PRINTRESULT
  [Displays Results in a format similar to Projections Menu]
   PRINT ACCOUNT:NUMBER
   COL=20 SHARE:BALANCE
   TOTALDIVIDEND=TOTALDIVIDEND+
    @DIVPROJECTTOTALDIVIDENDS
   COL=35 @DIVPROJECTTOTALDIVIDENDS
  END
`+ CODEEND
)
powerOnFunctions.set("emailline", `
# EMAILLINE
---
This function sends parameters or adds a line of text in an email message.

### Syntax
`+ CODESTART + `
EMAILLINE (EmailLine,ErrorText)
`+ CODEEND + `

### Arguments
  * EmailLine
    The EMAILLINE command can be used to send a line of text that will be interpreted as any of the following send parameters:
 
      - To: indicates the email address of the recipient (one or more email addresses). Required when sending an email. Separate multiple email address with a comma.
      - From: indicates the email address of the sender (name and email address). Can be omitted when sending an email.
      - Cc: indicates where a "carbon" copy of the email is to be sent (one or more email addresses). Can be omitted when sending an email.
      - Bcc: indicates where a "blind carbon" copy is to be sent (one or more email addresses). The message does not show the addressee as a recipient. Can be omitted when sending an email.
      - Subject: includes the header or body line to be added to an email.
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

***Important:*** You can specify the EMAILLINE command up to 9,999 times between each EMAILSTART and EMAILSEND command. We recommend that you use this functionality carefully to avoid flooding mail servers.

### Example
`+ CODESTART + `
EMAILLINE ("Our records show that your safe-deposit box is up for renewal.",ERRORTEXT)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP, PRINT, or TOTAL divisions or in a procedure called by one of these divisions
  * The system must be configured for email
  * Used in both text-based and Windows specfiles
  * EMAILSTART, EMAILLINE, and EMAILSEND must be called together in the same division
  * Generates an error if the corresponding commands are used in a different division

### Using EMAILLINE
  * Set the FromAddress, ToAddress, and Subject parameters in the EMAILSTART to blank (""), similar to the following: EMAILSTART("","","",ERRORTEXT)
  * Immediately following the EMAILSTART command, use EMAILLINE to specify the "send" parameters in the order listed above.
  * Any send parameters (except To:) can be omitted so they do not appear in the message. Leave the entire line out and do not use a blank specification, for example: EMAILLINE("Bcc:",ERRORTEXT)
  * After these send parameter lines, you can use one or more EMAILLINE commands to send lines of text for the body of the email.
  * End the email with an EMAILSEND command.

### Send Example
`+ CODESTART + `
EMAILSTART("","","",ERRORTEXT)
IF ERRORTEXT="" THEN
 EMAILLINE("From: John Doe <jdoe@cu.org>",ERRORTEXT)
IF ERRORTEXT="" THEN
 EMAILLINE("To: jsmith@aol.com, pfranklin@hotmail.com",ERRORTEXT)
IF ERRORTEXT="" THEN
 EMAILLINE("Cc: fsmith@aol.com",ERRORTEXT)
IF ERRORTEXT="" THEN
 EMAILLINE("Bcc: jmanager@cu.org",ERRORTEXT)
IF ERRORTEXT="" THEN
 EMAILLINE("Subject: In response to your Loan inquiry",ERRORTEXT)
IF ERRORTEXT="" THEN
 EMAILLINE("This is the first body line of the email.",ERRORTEXT)
IF ERRORTEXT="" THEN
 EMAILSEND(ERRORTEXT)
...
`+ CODEEND + `

### Add a Line of Text
You can use the EMAILLINE command to add a line of text to an email message. To use EMAILLINE in this way, you must do the following:

  * Specify the FromAddress, ToAddress, and Subject parameters in the EMAILSTART command
  * Use EMAILLINE commands to specify lines of text to be included in the body of the email message
  * End the email with an EMAILSEND command

#### Add a Line of Text Example
`+ CODESTART + `
  WINDOWS

  TARGET=ACCOUNT
  DEFINE
   FROMADDRESS=CHARACTER(40)
   TOADDRESS=CHARACTER(40)
   SUBJECT=CHARACTER(40)
   ERROR=CHARACTER
   TEXT=CHARACTER(75) ARRAY(99)
  I=NUMBER
  J=NUMBER
  DONE=NUMBER
  NUMLINES=NUMBER
  TRUE=1
  FALSE=0
 END

 SETUP
  DIALOGSTART("EMAIL INFO",100%,0)
  DIALOGINTROTEXT("So you want to send an email?")
  DIALOGPROMPTCHAR("Enter the From address",40,"")
  DIALOGPROMPTCHAR("Enter the To address",40,"")
  DIALOGPROMPTCHAR("Enter the subject line",40,"")
  DIALOGPROMPTNUMBER("Enter the number of lines",5)
  DIALOGDISPLAY
  FROMADDRESS=ENTERCHARACTER("Enter the From address",40,"")
  TOADDRESS=ENTERCHARACTER("Enter the To address",40,"")
  SUBJECT=ENTERCHARACTER("Enter the subject line",40,"")
  NUMLINES=ENTERNUMBER("Enter the number of lines",5)
  DIALOGCLOSE
  DIALOGSTART("EMAIL TEXT",100%,0)
  FOR I = 1 TO NUMLINES
  DO
    DIALOGPROMPTCHAR("Enter line "+FORMAT("#9",I)+" ",75,"")
  END
  DIALOGDISPLAY
  FOR I=1 TO NUMLINES
   DO
    TEXT(I)=ENTERCHARACTER("Enter line "+FORMAT("#9",I)+" ",75,"")   
   END
  DIALOGCLOSE
  EMAILSTART(FROMADDRESS,TOADDRESS,SUBJECT,ERROR)
  IF ERROR<>"" THEN
   POPUPMESSAGE(2,"Error starting E-Mail")
  ELSE
   DO
    FOR J=1 TO NUMLINES
     DO
      EMAILLINE(TEXT(J),ERROR)
     END
    EMAILSEND(ERROR)
    IF ERROR<>"" THEN
     POPUPMESSAGE(2,"Error sending E-Mail")
    ELSE
     POPUPMESSAGE(0,"Sending E-Mail")
   END
 END

 PRINT TITLE="EMAIL"
  SUPPRESS 1
 END


 TOTAL
 END
`+ CODEEND
)
powerOnFunctions.set("emailsend", `
# EMAILSEND
---
This function transmits an electronic message from within a specfile if your system is configured for email.

### Syntax
`+ CODESTART + `
EMAILSEND (ErrorText)
`+ CODEEND + `

### Arguments
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

### Example
`+ CODESTART + `
EMAILSEND (Error)
`+ CODEEND + `

### Usage Information
  * Must be preceded by EMAILSTART
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * EMAILSTART, EMAILLINE, and EMAILSEND must be called together in the same division
  * Generates an error if the corresponding commands are used in a different division

### Extended Example
`+ CODESTART + `
  WINDOWS

  TARGET=ACCOUNT
  DEFINE
   FROMADDRESS=CHARACTER(40)
   TOADDRESS=CHARACTER(40)
   SUBJECT=CHARACTER(40)
   ERROR=CHARACTER
   TEXT=CHARACTER(75) ARRAY(99)
  I=NUMBER
  J=NUMBER
  DONE=NUMBER
  NUMLINES=NUMBER
  TRUE=1
  FALSE=0
 END

 SETUP
  DIALOGSTART("EMAIL INFO",100%,0)
  DIALOGINTROTEXT("So you want to send an email?")
  DIALOGPROMPTCHAR("Enter the From address",40,"")
  DIALOGPROMPTCHAR("Enter the To address",40,"")
  DIALOGPROMPTCHAR("Enter the subject line",40,"")
  DIALOGPROMPTNUMBER("Enter the number of lines",5)
  DIALOGDISPLAY
  FROMADDRESS=ENTERCHARACTER("Enter the From address",40,"")
  TOADDRESS=ENTERCHARACTER("Enter the To address",40,"")
  SUBJECT=ENTERCHARACTER("Enter the subject line",40,"")
  NUMLINES=ENTERNUMBER("Enter the number of lines",5)
  DIALOGCLOSE
  DIALOGSTART("EMAIL TEXT",100%,0)
  FOR I = 1 TO NUMLINES
  DO
    DIALOGPROMPTCHAR("Enter line "+FORMAT("#9",I)+" ",75,"")
  END
  DIALOGDISPLAY
  FOR I=1 TO NUMLINES
   DO
    TEXT(I)=ENTERCHARACTER("Enter line "+FORMAT("#9",I)+" ",75,"")   
   END
  DIALOGCLOSE
  EMAILSTART(FROMADDRESS,TOADDRESS,SUBJECT,ERROR)
  IF ERROR<>"" THEN
   POPUPMESSAGE(2,"Error starting E-Mail")
  ELSE
   DO
    FOR J=1 TO NUMLINES
     DO
      EMAILLINE(TEXT(J),ERROR)
     END
    EMAILSEND(ERROR)
    IF ERROR<>"" THEN
     POPUPMESSAGE(2,"Error sending E-Mail")
    ELSE
     POPUPMESSAGE(0,"Sending E-Mail")
   END
 END

 PRINT TITLE="EMAIL"
  SUPPRESS 1
 END


 TOTAL
 END
`+ CODEEND
)
powerOnFunctions.set("emailstart", `
# EMAILSTART
---
This function initiates an email message if your system is configured for email.

### Syntax
`+ CODESTART + `
EMAILSTART (FromAddress,ToAddress,Subject,ErrorText)
`+ CODEEND + `

### Arguments
  * FromAddress
    - The sender's email address
  * ToAddress
    - The recipient's email address
  * Subject
    - The text that displays in the subject field of the email message
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

***Tip:*** You can set the From, To, Subject, Cc, and Bcc parameters in the EMAILLINE command. To use EMAILLINE in this way, you must set the FromAddress, ToAddress, and Subject parameters in EMAILSTART to blank (" ").

### Example
`+ CODESTART + `
EMAILSTART ("j.doe@yourcu.com","j.smith@aol.com","Auto Rates as low as 3.99% APR",ERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * EMAILSTART, EMAILLINE, and EMAILSEND must be called together in the same division
  * Generates an error if the corresponding commands are used in a different division

### Extended Example
`+ CODESTART + `
The following example prompts for email information and formats and sends an email message. See EMAILSTART on line 36.
  WINDOWS

  TARGET=ACCOUNT

DEFINE
 FROMADDRESS=CHARACTER(40)
 TOADDRESS=CHARACTER(40)
 CC=CHARACTER(40)
 BCC=CHARACTER(40)
 SUBJECT=CHARACTER(80)
 ERROR=CHARACTER
 TEXT=CHARACTER(80) ARRAY(99)
 ERRORTEXT=CHARACTER(40)
 I=NUMBER
 J=NUMBER
 DONE=NUMBER
 TRUE=1
 FALSE=0
END

SETUP
 IF (DAYOFWEEK(SYSTEMDATE) = 0 OR
     DAYOFWEEK(SYSTEMDATE) = 1 OR
     DAYOFWEEK(SYSTEMDATE) = 2 OR
     DAYOFWEEK(SYSTEMDATE) = 3 OR
     DAYOFWEEK(SYSTEMDATE) = 4 OR
     DAYOFWEEK(SYSTEMDATE) = 5 OR
     DAYOFWEEK(SYSTEMDATE) = 6) THEN
  DO
   FROMADDRESS="emailaddress@xxxx.com"
   TOADDRESS="emailadd2@xxx.com, emailadd3@xx.com"      
   CC="emailadd4@xxx.com, emailadd5@xxx.com"
   BCC="emailaddress6@xxx.com"
   SUBJECT="SCU Online"
   TEXT(0)="Symitar is online with a system date of "+FORMAT("99/99/9999",SYSTEMDATE)
   EMAILSTART("","","",ERROR)
   IF ERROR<>"" THEN
    DO
     PRINT "ERROR OPENING EMAIL "+ERROR
     NEWLINE
     TERMINATE
    END
   ELSE
    DO
     IF ERRORTEXT = "" THEN
      EMAILLINE("From: "+FROMADDRESS,ERRORTEXT)
     IF ERRORTEXT = "" THEN
      EMAILLINE("To: "+TOADDRESS,ERRORTEXT)
     IF ERRORTEXT = "" THEN
      EMAILLINE("Cc: "+CC,ERRORTEXT)
     IF ERRORTEXT = "" THEN
      EMAILLINE("Bcc: "+BCC,ERRORTEXT)
     IF ERRORTEXT = "" THEN
      EMAILLINE("Subject: "+SUBJECT,ERRORTEXT)
     FOR J=0 TO I
      DO
       EMAILLINE(TEXT(J),ERROR)
      END
     EMAILSEND(ERROR)
    END
  END
END

SELECT
 NONE
END

PRINT TITLE="EMAIL"
 PRINT ""
 NEWLINE
END
`+ CODEEND
)
powerOnFunctions.set("entercharacter", `
# ENTERCHARACTER
---
This function displays a prompt on the user's console while running an on-demand specfile and waiting for a character response from the operator.

### Syntax
`+ CODESTART + `
ENTERCHARACTER(Prompt,MaximumLength,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    - Character line with maximum of 40 characters
  * MaximumLength
    - Maximum number of characters allowed
  * Default
    - Default value for the field, in the appropriate data type

***Tip:*** Although it is not common, the prompt, default, and maximum value can also be field references, functions, and expressions that involve variables and other keywords.

### Example
`+ CODESTART + `
CATNAMEVAR=ENTERCHARACTER("Enter Category Letter",1,"A")
`+ CODEEND + `

### Usage Information
  * Use only in demand specfiles. For batch specfiles, please see CHARACTERREAD.
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * Use in assignment statements to represent a value you want assigned to a variable
  * Supports a MaxLength value of 1 thru 78. For a MaxLength value < 1 or > 78 the system defaults to a value of 40

### Extended Example
The following example is from an on-demand report specfile that creates a welcome letter for new members. Symitar designed the letter for the new accounts clerk to display, then print when the member comes in to open an account. In this example, the ENTERCHARACTER command prompts for the new accounts clerk's name so that the signature block on the letter can be personalized.
`+ CODESTART + `
TARGET=ACCOUNT 

DEFINE 
 USERNAME = CHARACTER(20)
END 

SETUP 
 USERNAME = ENTERCHARACTER("Enter Your Name",20,"")
END 

PRINT TITLE="ENTERCHARACTER.TEST"
 NEWLINE
 PRINT "Input: "+USERNAME 
 NEWLINE
END
`+ CODEEND
)
powerOnFunctions.set("entercode", `
# ENTERCODE
---
This function displays a prompt on the user's console and returns the code entered.

### Syntax
`+ CODESTART + `
ENTERCODE(Prompt,MaximumValue,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    - Character line with a maximum of 40 characters
  * MaximumValue
    - The maximum value allowed of the entry
  * Default
    - Must be a code literal

***Tip:***
  * To assign the value of ENTERCODE to a variable, define that variable with a NUMBER data type.
  * Although it is not common, the prompt, default, and maximum length can also be field references, functions, and expressions that involve variables and other keywords.

### Example
`+ CODESTART + `
SHARETYPE=ENTERCODE("Enter Desired Share Type",9999,0)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * Use only in on-demand specfiles. See CODEREAD for batch specfiles
  * The maximum number that can be stored in a code variable is 32767

### Extended Example
`+ CODESTART + `
TARGET=LOAN
 DEFINE
  BEGINRANGE=NUMBER
  ENDRANGE=NUMBER
 END
 SETUP
  BEGINRANGE=ENTERCODE("Enter First Code",79,40)
  ENDRANGE=ENTERCODE("Enter Last Code",79,79)
 END
  etc...
`+ CODEEND
)
powerOnFunctions.set("enterdate", `
# ENTERDATE
---
This function displays a prompt on the user's console and returns the date entered.

### Syntax
`+ CODESTART + `
variable=ENTERDATE(Prompt,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    - Character line with a maximum of 40 characters
  * Default
    - The default value for the field, in the appropriate data type. This value displays in the data entry box.

### Example
`+ CODESTART + `
BDAY=ENTERDATE("Enter your birthday",'01/01/09')
`+ CODEEND + `

##### Valid date formats:
  * 'mmddyy'
  * 'mmddyyyy'
  * 'mm/dd/yy'
  * 'mm/dd/yyyy'

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * Use only in on-demand specfiles. Use DATEREAD for batch specfiles.
  * Use in assignment statements to represent a value you want assigned to a variable

### Extended Example
The following example is from an on-demand report specfile that summarizes data related to a specified range of transaction dates. Symitar designed the report for the teller to display and print for a member as needed.

This example uses the ENTERDATE command to prompt for a range of posting dates. This allows us to use the range of beginning and ending dates in the SELECT division to choose transactions for the report.
`+ CODESTART + `
TARGET=SHARE
 DEFINE
  BEGINDATE=DATE
  ENDDATE=DATE
 END
 SETUP
  BEGINDATE=ENTERDATE("Enter First Date",'--/--/--')
  ENDDATE=ENTERDATE("Enter Last Date",'--/--/--')
 END
  etc...
`+ CODEEND
)
powerOnFunctions.set("entermoney", `
# ENTERMONEY
---
This function displays a prompt on the user's console and returns the money value entered.

### Syntax
`+ CODESTART + `
ENTERMONEY(Prompt,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    - Character line with a maximum of 40 characters
  * Default
    - The default value for the field, in the appropriate data type. This value displays in the data entry box.

***Tip:***
  * Use ENTERMONEY only when the response you expect from the operator is a monetary value.
  * Although it is not common, the prompt, default, and maximum length can also be field references, functions, and expressions that involve variables and other keywords.

### Example
`+ CODESTART + `
MAXAMTVAR=ENTERMONEY("Enter the Maximum Amount",$2,000.00)
`+ CODEEND + `

### Usage Information
  * Use only in on-demand specfiles. Use MONEYREAD for batch specfiles.
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * The prompt must not exceed 40 characters
  * Default must be a MONEY data type
  * The ENTERMONEY function must include the prompt and a default value. The default value must contain the dollar sign, decimal point, and any necessary commas.
  * Enter the response to an ENTERMONEY prompt with or without commas and a decimal point. The response must not contain a dollar sign. For example, you can enter the monetary amount $5,444.77 only as 544477 or 5,444.77.

### Extended Example
The following example is from an on-demand report specfile that creates an introductory letter for new members. Symitar designed the letter for the new accounts clerk to display and print when the member comes in to open an account. This example uses the ENTERMONEY command to prompt for the cost of new checks ordered for the member. See ENTERMONEY on line 6.
`+ CODESTART + `
  TARGET=ACCOUNT
  DEFINE
   CHECKCOST=MONEY
  END
  SETUP
   CHECKCOST=ENTERMONEY("Enter Cost of Checks",$3.50)
  END
  etc...
`+ CODEEND + `
`)
powerOnFunctions.set("enternumber", `
# ENTERNUMBER
---
This function displays a prompt on the user's console and returns the number entered.

### Syntax
`+ CODESTART + `
ENTERNUMBER (Prompt,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    - Character line with a maximum of 40 characters
  * Default
    - The default value for the field, in the appropriate data type.

### Example
`+ CODESTART + `
SEQNBR=ENTERNUMBER ("Enter the first Sequence Number",300)
`+ CODEEND + `

### Usage Information
  * Use only in on-demand specfiles. Use NUMBERREAD for batch specfiles.
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * Must include a default value

### Extended Example
`+ CODESTART + `
  TARGET=SHARE
  DEFINE
   BEGINSEQUENCE=NUMBER
   ENDSEQUENCE=NUMBER
  END 
  SETUP
   BEGINSEQUENCE=ENTERNUMBER("First Sequence #",1)
   ENDSEQUENCE=ENTERNUMBER("Last Sequence #",1000)
  END
`+ CODEEND
)
powerOnFunctions.set("enterrate", `
# ENTERRATE
---
This function displays a prompt on the user's console and returns the rate entered.

### Syntax
`+ CODESTART + `
ENTERRATE(Prompt,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    - Character line with a maximum of 40 characters
  * Default
    - The default value for the field, in the appropriate data type. This value displays in the data entry box.

### Example
`+ CODESTART + `
ENTERRATE("Enter Target Interest Rate",8.500%)
`+ CODEEND + `

### Usage Information
  * Use only in demand specfiles.
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * Use only in demand specfiles. See CODEREAD for batch specfiles.
  * The response must not contain the percent (%) sign or decimal point
  * The prompt must not exceed 40 characters
  * You must enter the response to an ENTERRATE prompt with all three decimal places.

### Extended Example
`+ CODESTART + `
  TARGET=LOAN
  DEFINE
   HIGHRATE=RATE
  END
  SETUP
   HIGHRATE=ENTERRATE("Enter Rate Limit",13.000%)
  END
  etc..
`+ CODEEND
)
powerOnFunctions.set("enteryesno", `
# ENTERYESNO
---
This function displays a prompt on the user's console and returns a Y (yes) or N (no) response.

### Syntax
`+ CODESTART + `
ENTERYESNO(Prompt,Default)
`+ CODEEND + `

### Arguments
  * Prompt
    - Character line with a maximum of 40 characters
  * Default
    - The default value for the field, in the appropriate data type. This value displays in the data entry box.

### Example
`+ CODESTART + `
ENTERYESNO("Summary (Y) or Detail (N)?","N")
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP division or in a procedure called by the SETUP division
  * Use only in on-demand specfiles. Use YESNOREAD for batch specfiles.
  * Use ENTERYESNO only when you expect the operator to enter Y or N; a response of 1 instead of Y or 0 instead of N is also acceptable.
  * The ENTERYESNO function must include a prompt and a default value.

You can assign the value of the ENTERYESNO function to a variable. Enclose the prompt in parentheses after ENTERYESNO.

Although it is not common, the prompt and default can also be field references, functions, and expressions that evaluate to either "Y" or "N". Because the response to the ENTERYESNO function is a character, variables that you assign the value of this function must be character data.

PowerOn automatically puts a space and a colon (:) after the prompt. If you include a colon as part of a prompt, PowerOn displays two colons.

### Extended Example
`+ CODESTART + `
TARGET=SHARE
 DEFINE
  HOLDOPTION=CHARACTER
 END
 SETUP
  HOLDOPTION=ENTERYESNO("Do You Want Hold Info?","N")
 END
`+ CODEEND
)
powerOnFunctions.set("execute", `
# EXECUTE
---
This function initiates the running of a subroutine specfile.

### Syntax
`+ CODESTART + `
EXECUTE(SubroutineSpecfileName,[OptionToReturnIfCancelled,]ErrorText)
`+ CODEEND + `

### Arguments
  * SubroutineSpecfileName
    - Character expression that must resolve to a specfile defined as a "subroutine specfile" installed for demand use.
  * OptionToReturnIfCancelled
    - When one of the escape methods is used (clicking the red arrow, clicking Cancel, clicking the red X, or pressing Esc) in a subroutine and an invalid specification is returned, the following occurs:
      * When the OptionToReturnIfCancelled is 1, the system returns, in ErrorText, Subroutine <subroutine name> Cancelled, and allows the specfile that performed the EXECUTE function to continue.
      * When the OptionToReturnIfCancelled is missing or has a value other than 1, the system controls the calling specfile when escape is used without dictating the behavior of the calling specfile.
  * ErrorText
    - Either a system-level error message or an error detected in a subroutine specfile. The most common system-level error messages are the following:
      * Max Subroutine Nesting Level Exceeded: A subroutine specfile called from a different subroutine specfile attempted to call a third subroutine specfile.
      * Subroutine Arguments Not Initialized: INITSUBROUTINE was not used before EXECUTE.
      * Must Be a Subroutine Specfile: The specfile called was not defined as a subroutine specfile.
      * Cannot Run Demand Subroutine from Batch: The subroutine specfile was designated for demand use only.
      * Cannot Run Batch Subroutine from Demand: The subroutine specfile was designated for batch use only.
      * Subroutine Type Mismatch: The subroutine specfiles with predefined system variables associated with their system keywords (such as AUDIO, SYMCONNECT, or VALIDATION) can only be called from another specialty specfile of the same type.
      * Blank: The EXECUTE function completed successfully.

The calling specfile resumes running with the next statement after the subroutine call. The state of the calling specfile is not affected by the subroutine specfile, with the possible exception of updated automatic environment argument variables. Automatic global variables may be updated in specialty specfiles that call specialty subroutine specfiles.

### Example
`+ CODESTART + `
EXECUTE("GET.SLOPE",1,ERRORTEXT)
`+ CODEEND + `

The following scenarios are possible, assuming that there are three specfiles.

  - Specfile 1
    * Not 1 or missing value
    * Not 1 or missing value
    * 1
    * 1

  - Specfile 2
    * Not 1 or missing value
    * 1
    * Not 1 or missing value
    * 1

  - Specfile 3
    * Terminated
    * Terminated
    * Terminated
    * Terminated

  - Result
    * All specfiles are terminated. (This equates to the previous functionality.)
    * Control is given back to specfile 2. If specfile 2 is canceled, then specfile 1 is terminated.
    * Specfile 2 is terminated and control is given back to specfile 1.
    * Control is given back to specfile 2. If specfile 2 is terminated, then control is given back to specfile 1.

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Must be preceded by INITSUBROUTINE
  * Can only be used in SUBROUTINE specfiles that target parent record types (ACCOUNT, CHECK, PARTICIPATION, etc.) and not child records (SHARE, GLHISTORY, COLLATERAL DOCUMENT, etc.)
  * Cannot be used in a FOR EACH...DO...END loop
  * Batch drivers can only call batch subroutines
  * Demand drivers can only call demand subroutines
  * You may only nest up to three subroutines

### Using Environment Argument Variables
After you successfully run INITSUBROUTINE, the environment argument variables used to pass information to the subroutine must be loaded using assignment statements, before you use EXECUTE to call the subroutine. After you call the subroutine, the returned values in the environment argument variables can be:

  * Saved into other variables using assignment statements
  * Passed into another subroutine using the EXECUTE function again
  * Used directly from the environment argument variables

The calling specfile resumes running with the next statement after the subroutine call. The state of the calling specfile is not affected by the subroutine specfile, with the possible exception of updated automatic environment argument variables (automatic global variables may be updated in specialty specfiles that call specialty subroutine specfiles).

### Extended Example
`+ CODESTART + `
INITSUBROUTINE(ERRORTEXT)
 @ENVARGNUMBER1=X1
 @ENVARGNUMBER2=Y1
 @ENVARGNUMBER3=X2
  @ENVARGNUMBER4=Y2
  EXECUTE("GET.SLOPE",1,ERRORTEXT)
 SLOPE=@ENVARGRATE1
  @ENVARGNUMBER3=DISTANCE
  EXECUTE("EXTRAPOLATE",ERRORTEXT)
 PRINT "THE SLOPE BETWEEN (" + FORMAT("+###9",X1) + "," +
      FORMAT("+###9",Y1) + ") AND (" + FORMAT("+###9",X1) +
       "," + FORMAT("+###9",Y1) + ") IS " +
       FORMAT("+##9.99999",SLOPE)
 NEWLINE
 PRINT "(" + FORMAT("+###9",@ENVARGNUMBER4) + "," +
       FORMAT("+###9",@ENVARGNUMBER5) + ") IS ON THE LINE " +
       FORMAT("+###9",DISTANCE) + " UNITS FROM (" +
       FORMAT("+###9",X1) + "," + FORMAT("+###9",Y1) + ")"
 NEWLINE
`+ CODEEND + `

If X1 and Y1 equal 1, X2 and Y2 equal 2, and DISTANCE is 14, then this specfile segment would print the following:

THE SLOPE BETWEEN ( 1, 1) AND ( 2, 2) IS 1.00000 
( 11, 11) IS ON THE LINE 14 UNITS FROM ( 1, 1)
`)
powerOnFunctions.set("exp", `
# EXP
---
This function returns the value of the mathematical constant e raised to a specified power.

### Syntax
`+ CODESTART + `
EXP(expression)
`+ CODEEND + `

### Example
`+ CODESTART + `
EXP(3)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
`)
powerOnFunctions.set("filearchiveadd", `
# FILEARCHIVEADD
---
This function adds a file to an archive or creates an archive and adds a file to it.

### Syntax
`+ CODESTART + `
FILEARCHIVEADD(ArchiveType,ArchiveName,SourceFileType,SourceFileName,DestinationFileName,ErrorText)
`+ CODEEND + `

### Arguments
  * ArchiveType
    - ATMLOG
    - DATA
    - HELP
    - LETTER
    - SPECFILE,REPGEN
  * ArchiveName
    - ATM log file name
    - Data file name
    - Help file number
    - Letter file name
    - Specfile name
      * ***Tip:*** Although REPGEN is still a valid file type, use SPECFILE when possible. Because we will eventually drop support for REPGEN, we recommend that all users replace REPGEN with SPECFILE.
  * SourceFileType
    - The source directory where the archived file will be located.
  * SourceFileName
    - Name of the file identified in the source file type
  * DestinationFileName
    - When the file goes into the archive, the file name is changed to the destination file name.
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank


### Example
`+ CODESTART + `
FILEARCHIVEADD("LETTER","MyArchive","HELP","file1","file1.txt",ERRORTEXT)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions

### Extended Example
`+ CODESTART + `
TARGET=ACCOUNT

DEFINE
   ERROR=CHARACTER
   NOTHING=CHARACTER
END

SETUP

  FILEARCHIVEADD(
   "LETTER","tarfile.tar","LETTER","file1","file1.txt",ERROR)
  IF ERROR="" THEN
   FILEARCHIVEADD(
    "LETTER","tarfile.tar","LETTER","file2","file2.txt",ERROR)
  IF ERROR="" THEN
   FILEARCHIVEEXTRACT(
    "LETTER","tarfile.tar","HELP","file1.txt",ERROR)
  IF ERROR="" THEN
   FILEARCHIVEEXTRACT(
    "LETTER","tarfile.tar","HELP","file2.txt",ERROR)

  IF ERROR="" THEN
   PRINT "Done!"
  ELSE
   PRINT "Error: "+ERROR
  NEWLINE
  NOTHING=ENTERLINE(0)
END

PRINT TITLE="Test"
  SUPPRESSNEWLINE
END
`+ CODEEND
)
powerOnFunctions.set("filearchiveextract", `
# FILEARCHIVEEXTRACT
---
This function retrieves a file from an archive.

### Syntax
`+ CODESTART + `
FILEARCHIVEEXTRACT(ArchiveType,ArchiveName,DestinationFileType,DestinationFileName,ErrorText)
`+ CODEEND + `

### Arguments
  * ArchiveType
    - ATMLOG
    - DATA
    - HELP
    - LETTER
    - SPECFILE, REPGEN
  * ArchiveName
    - ATM log file name
    - Data file name
    - Help file number
    - Letter file name
    - Specfile name
    - ***Tip:*** Although REPGEN is still a valid file type, use SPECFILE when possible. Because we will eventually drop support for REPGEN, we recommend that all users replace REPGEN with SPECFILE.
  * DestinationFileType
    - Specifies the file type of the file to use on the local computer
  * DestinationFileName
    - When the file goes into the archive, the file name is changed to the destination file name.
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

### Example
`+ CODESTART + `
FILEARCHIVEEXTRACT("LETTER","MyArchive","REGPGEN","file1.txt",ERRORTEXT)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions

### Extended Example
`+ CODESTART + `
TARGET=ACCOUNT

DEFINE
   ERROR=CHARACTER
   NOTHING=CHARACTER
END

SETUP

  FILEARCHIVEADD(
   "LETTER","tarfile.tar","LETTER","file1","file1.txt",ERROR)
  IF ERROR="" THEN
   FILEARCHIVEADD(
    "LETTER","tarfile.tar","LETTER","file2","file2.txt",ERROR)
  IF ERROR="" THEN
   FILEARCHIVEEXTRACT(
    "LETTER","tarfile.tar","HELP","file1.txt",ERROR)
  IF ERROR="" THEN
   FILEARCHIVEEXTRACT(
    "LETTER","tarfile.tar","HELP","file2.txt",ERROR)

  IF ERROR="" THEN
   PRINT "Done!"
  ELSE
   PRINT "Error: "+ERROR
  NEWLINE
  NOTHING=ENTERLINE(0)
END

PRINT TITLE="Test"
  SUPPRESSNEWLINE
END
`+ CODEEND
)
powerOnFunctions.set("fileclose", `
# FILECLOSE
---
This function closes file identified in the first argument.

### Syntax
`+ CODESTART + `
FILECLOSE(FileNumber,ErrorText)
`+ CODEEND + `

### Arguments
  * FileNumber
    - File number variable returned from FILEOPEN
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

***Tip:*** Create a standard specfile (for example, FILE.DEF) that defines all the variables required for the file input and output statements. You can #INCLUDE this specfile in any DEFINE division of specfiles that perform file input and output.

### Example
`+ CODESTART + `
FILECLOSE(FILENUMBER,FILEERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * The variables in parentheses after FILECLOSE cannot be arrays
  * Preceded by FILEOPEN

### Extended Example
`+ CODESTART + `
TARGET=ACCOUNT
  
  DEFINE
   #INCLUDE "FILE.DEF"
  END
  
  SETUP
   FILENAME="ACCOUNT.COMMENTS."+ACCOUNT:NUMBER
   CALL ACCOUNTCOMMENTFILELOCK
   FILECREATE("LETTER",FILENAME,FILEERROR)
   FILEOPEN("LETTER",FILENAME,"APPEND",FILENUMBER,FILEERROR)
   IF FILEERROR<>"" THEN CALL FILEFATAL
  
   CALL ACCOUNTCOMMENTHEADER
   PRINT "Enter account comments (blank line terminates):"
   NEWLINE
   FILETEXT="SEED"
   WHILE (FILETEXT<>"")
    DO
     FILETEXT=ENTERCHARACTER("Comment",60,"")
     IF FILETEXT<> "" THEN
      DO
       FILEWRITELINE(FILENUMBER," "+FILETEXT,FILEERROR)
       IF FILEERROR<>"" THEN CALL FILEFATAL
      END
    END
  
   FILECLOSE(FILENUMBER,FILEERROR)
   IF FILEERROR<>"" THEN CALL FILEFATAL
   CALL ACCOUNTCOMMENTFILEUNLOCK
  END
  
  PRINT TITLE="Account comments"
   FILENUMBER=-1
  END

  PROCEDURE ACCOUNTCOMMENTHEADER
  [Print account and teller info to account comments file]

   FILETEXT="Account "+ACCOUNT:NUMBER+" comments on "+
    FORMAT("99/99/99",SYSACTUALDATE)+" at "+
    FORMAT("99/99/99",SYSACTUALTIME)+" recorded by "+
    SYSUSERNAME(SYSUSERNUMBER)
   FILEWRITELINE(FILENUMBER,FILETEXT,FILEERROR)
   IF FILEERROR<>"" THEN CALL FILEFATAL
  END
  
  PROCEDURE ACCOUNTCOMMENTFILELOCK
  [Lock account comments file]
  
   FILECREATE("LETTER",FILENAME+".LOCK",FILEERROR)
   IF FILEERROR<>"" THEN
    DO
     FERROR="Account comments file is in use. Try later"
     CALL FILEFATAL
    END
  END

  PROCEDURE ACCOUNTCOMMENTFILEUNLOCK
  [Unlock account comments file]
  
   FILEDELETE("LETTER",FILENAME+".LOCK",FERROR)
  END
  
  #INCLUDE "FILE.PRO"
`+ CODEEND
)
powerOnFunctions.set("filecreate", `
# FILECREATE
---
This function creates a new letter file, help file, PowerOn specfile, or edit file. Once the file is created, you must use the FILEOPEN function to access it.

### Syntax
`+ CODESTART + `
FILECREATE(FileType,FileName,ErrorText)
`+ CODEEND + `

### Arguments
  * FileType
    - AUTODATA
    - AUTORESPONSE
    - AUTOTRIGGER
    - DATA
    - EDIT
    - HELP
    - LETTER
    - SPECFILE, REPGEN
  * FileName
    - Auto Data file name
    - Auto Response file name
    - Auto Trigger file name
    - Data file name
    - Blank, there is only one edit file
    - Help file number
    - Letter file name
    - Specfile name
      ***Tip:*** Although REPGEN is still a valid file type, use SPECFILE when possible. Because we will eventually drop support for REPGEN, we recommend that all users replace REPGEN with SPECFILE.
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

### Example
`+ CODESTART + `
FILECREATE("LETTER",ACHGLTABLE,ERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * The variables in parentheses cannot be arrays

### Extended Example
`+ CODESTART + `
TARGET=ACCOUNT
  
  DEFINE
   #INCLUDE "FILE.DEF"
  END
  
  SETUP
   FILENAME="ACCOUNT.COMMENTS."+ACCOUNT:NUMBER
   CALL ACCOUNTCOMMENTFILELOCK
   FILECREATE("LETTER",FILENAME,FILEERROR)
   FILEOPEN("LETTER",FILENAME,"APPEND",FILENUMBER,FILEERROR)
   IF FILEERROR<>"" THEN CALL FILEFATAL
  
   CALL ACCOUNTCOMMENTHEADER
   PRINT "Enter account comments (blank line terminates):"
   NEWLINE
   FILETEXT="SEED"
   WHILE (FILETEXT<>"")
    DO
     FILETEXT=ENTERCHARACTER("Comment",60,"")
     IF FILETEXT<> "" THEN
      DO
       FILEWRITELINE(FILENUMBER," "+FILETEXT,FILEERROR)
       IF FILEERROR<>"" THEN CALL FILEFATAL
      END
    END
  
   FILECLOSE(FILENUMBER,FILEERROR)
   IF FILEERROR<>"" THEN CALL FILEFATAL
   CALL ACCOUNTCOMMENTFILEUNLOCK
  END
  
  PRINT TITLE="Account comments"
   FILENUMBER=-1
  END

  PROCEDURE ACCOUNTCOMMENTHEADER
  [Print account and teller info to account comments file]

   FILETEXT="Account "+ACCOUNT:NUMBER+" comments on "+
    FORMAT("99/99/99",SYSACTUALDATE)+" at "+
    FORMAT("99/99/99",SYSACTUALTIME)+" recorded by "+
    SYSUSERNAME(SYSUSERNUMBER)
   FILEWRITELINE(FILENUMBER,FILETEXT,FILEERROR)
   IF FILEERROR<>"" THEN CALL FILEFATAL
  END
  
  PROCEDURE ACCOUNTCOMMENTFILELOCK
  [Lock account comments file]
  
   FILECREATE("LETTER",FILENAME+".LOCK",FILEERROR)
   IF FILEERROR<>"" THEN
    DO
     FERROR="Account comments file is in use. Try later"
     CALL FILEFATAL
    END
  END

  PROCEDURE ACCOUNTCOMMENTFILEUNLOCK
  [Unlock account comments file]
  
   FILEDELETE("LETTER",FILENAME+".LOCK",FERROR)
  END
  
  #INCLUDE "FILE.PRO"
`+ CODEEND
)
