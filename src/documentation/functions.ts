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
powerOnFunctions.set("filedecrypt", `
# FILEDECRYPT
---
This function decodes or deciphers files protected by encryption.

### Syntax
`+ CODESTART + `
FILEDECRYPT(FileType,FileName,DecryptedFileName,KeyFileName,ErrorText)
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
      * ***Tip:*** Although REPGEN is still a valid file type, use SPECFILE when possible. Because we will eventually drop support for REPGEN, we recommend that all users replace REPGEN with SPECFILE.
  * DecryptedFileName
    - The source of decryption This name must be different than the FileName.
  * KeyFileName
    - The name of the file that contains the decryption key created using the MAKEKEY operator console command
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

### Example
`+ CODESTART + `
FILEDECRYPT("SPECFILE","TESTFILE.ENC,"TESTFILE.DEC","KEYFILE",ERRORDEC)
`+ CODEEND + `

### Usage Information
  * The key file name is a character expression. Its value is the name of the file that contains the decryption key created using the MAKEKEY operator console command
  * Use only in PRINT, TOTAL, SETUP, SPECFILE, and RECEIPTS divisions or in procedures called by those divisions

### Extended Example
`+ CODESTART + `
TARGET = ACCOUNT
  
DEFINE
  HANDLE=NUMBER
  HANDLE2=number
  ERROR=CHARACTER
  OPENERROR=CHARACTER
  NOTHING=CHARACTER
  P=CHARACTER
  HOST=CHARACTER
  USERNAME=CHARACTER
  PASSWORD=CHARACTER
  FNUMBER=NUMBER
  FLINE=CHARACTER 
  FERROR=CHARACTER
  ERRORENC=CHARACTER
  ERRORDEC=CHARACTER
  ERRORPUT=CHARACTER
  ERRORPUT2=CHARACTER
  ERRORGET=CHARACTER
  CLOSEERROR=CHARACTER
END
  
SETUP
  FILEENCRYPT("SPECFILE", "TESTFILE", "TESTFILE.ENC","KEYFILE", ERRORENC)
  FILEDECRYPT("SPECFILE","TESTFILE.ENC", "TESTFILE.DEC", "KEYFILE", ERRORDEC)
END
 
 PRINT TITLE="FTP.TEST"
  IF ERRORENC="" THEN
   DO
    PRINT "TESTFILE has been successfully encrypted as TESTFILE.ENC"
    NEWLINE
   END
  ELSE
   DO
    PRINT ERRORENC
    NEWLINE
   END
  IF ERRORDEC="" THEN   [DECRYPT]
   DO
    PRINT "TESTFILE has been successfully decrypted as TESTFILE.DEC"
    NEWLINE
   END
  ELSE
   DO
    PRINT "decrypting error: " print ERRORDEC
    NEWLINE
   END
  NEWLINE NEWLINE
  FILEOPEN("SPECFILE","TESTFILE.ENC","READ",FNUMBER,FERROR)
  IF FERROR<>"" THEN
   PRINT "decrypted TESTFILE.ENC not opened/created "
  ELSE
   DO
    PRINT "Here is what the ENCRYPTED file looks like:"
    NEWLINE NEWLINE
   END
  WHILE FERROR=""
   DO
    FILEREADLINE(FNUMBER,FLINE,FERROR)
    IF FERROR="" THEN
     DO
      PRINT FLINE
      NEWLINE
     END
   END
  FILECLOSE(FNUMBER,FERROR)
  PRINT "-----------------------END OF ENCRYPTED FILE ----------------------"
  NEWLINE  NEWLINE
`+ CODEEND
)
powerOnFunctions.set("filedelete", `
# FILEDELETE
---
This function removes a specified file from the system but does not delete an instance.

### Syntax
`+ CODESTART + `
FILEDELETE(FileType,FileName,ErrorText)
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
    - REPORT
  * FileName
    - Auto Data file name
    - Auto Response file name
    - Auto Trigger file name
    - Data file name
    - Blank, there is only one edit file
    - Help file number
    - Letter file name
    - Specfile name
      * ***Tip:*** Although REPGEN is still a valid file type, use SPECFILE when possible. Because we will eventually drop support for REPGEN, we recommend that all users replace REPGEN with SPECFILE.
    - Sequence number
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

### Example
`+ CODESTART + `
FILEDELETE("LETTER",FILENAME,FILEERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * The variables in parentheses cannot be arrays

***Tip:*** Create a standard specfile (for example, FILE.DEF) that defines all the variables required for the file input and output statements. You can #INCLUDE this specfile in any DEFINE division of specfiles that perform file input and output.

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
`+ CODEEND + `
`)
powerOnFunctions.set("fileencrypt", `
# FILEENCRYPT
---
This function converts a file to code as a security precaution.

### Syntax
`+ CODESTART + `
FILEENCRYPT(FileType,FileName,EncryptedFileName,KeyFileName,ErrorText)
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
    - RECEIPT
    - SPECFILE, REPGEN
    - REPORT
  * FileName
    - Auto Data file name
    - Auto Response file name
    - Auto Trigger file name
    - Data file name
    - Blank, there is only one edit file
    - Help file number
    - Letter file name
    - Empty character string
    - Specfile name
      * ***Tip:*** Although REPGEN is still a valid file type, use SPECFILE when possible. Because we will eventually drop support for REPGEN, we recommend that all users replace REPGEN with SPECFILE.
    - Report file name
  * EncryptedFileName
    - The name of the output file that is generated by the FILEENCRYPT function. This name must be different than the FileName.
  * KeyFileName
    - The name of the file that contains the decryption key created using the MAKEKEY operator console command
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

### Example
`+ CODESTART + `
FILEENCRYPT("LETTER",FILENAME,FILEERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * The key file name is a character expression. Its value is the name of the file that contains the decryption key created using the MAKEKEY operator console command

### Extended Example
`+ CODESTART + `
TARGET = ACCOUNT
  
DEFINE
  HANDLE=NUMBER
  HANDLE2=number
  ERROR=CHARACTER
  OPENERROR=CHARACTER
  NOTHING=CHARACTER
  P=CHARACTER
  HOST=CHARACTER
  USERNAME=CHARACTER
  PASSWORD=CHARACTER
  FNUMBER=NUMBER
  FLINE=CHARACTER 
  FERROR=CHARACTER
  ERRORENC=CHARACTER
  ERRORDEC=CHARACTER
  ERRORPUT=CHARACTER
  ERRORPUT2=CHARACTER
  ERRORGET=CHARACTER
  CLOSEERROR=CHARACTER
END
  
SETUP
  FILEENCRYPT("SPECFILE", "TESTFILE", "TESTFILE.ENC","KEYFILE", ERRORENC)
  FILEDECRYPT("SPECFILE","TESTFILE.ENC", "TESTFILE.DEC", "KEYFILE", ERRORDEC)
END
 
 PRINT TITLE="FTP.TEST"
  IF ERRORENC="" THEN
   DO
    PRINT "TESTFILE has been successfully encrypted as TESTFILE.ENC"
    NEWLINE
   END
  ELSE
   DO
    PRINT ERRORENC
    NEWLINE
   END
  IF ERRORDEC="" THEN   [DECRYPT]
   DO
    PRINT "TESTFILE has been successfully decrypted as TESTFILE.DEC"
    NEWLINE
   END
  ELSE
   DO
    PRINT "decrypting error: " print ERRORDEC
    NEWLINE
   END
  NEWLINE NEWLINE
  FILEOPEN("SPECFILE","TESTFILE.ENC","READ",FNUMBER,FERROR)
  IF FERROR<>"" THEN
   PRINT "decrypted TESTFILE.ENC not opened/created "
  ELSE
   DO
    PRINT "Here is what the ENCRYPTED file looks like:"
    NEWLINE NEWLINE
   END
  WHILE FERROR=""
   DO
    FILEREADLINE(FNUMBER,FLINE,FERROR)
    IF FERROR="" THEN
     DO
      PRINT FLINE
      NEWLINE
     END
   END
  FILECLOSE(FNUMBER,FERROR)
  PRINT "-----------------------END OF ENCRYPTED FILE ----------------------"
  NEWLINE  NEWLINE
`+ CODEEND
)
powerOnFunctions.set("filegetpos", `
# FILEGETPOS
---
This function retrieves the current byte position in the text file just read from or written to.

### Syntax
`+ CODESTART + `
FILEGETPOS(FileNumber,FilePosition,ErrorText)
`+ CODEEND + `

### Arguments
  * FileNumber
    - File number variable returned from FILEOPEN
  * FilePosition
    - Define a number variable for the second argument. PowerOn updates this variable with the current byte position.
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

***Tip:*** Create a standard specfile (for example, FILE.DEF) that defines all the variables required for the file input and output statements. You can #INCLUDE this specfile in any DEFINE division of specfiles that perform file input and output.

### Example
`+ CODESTART + `
FILEGETPOS(FILENUMBER,FILEPOSITION,FILEERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * The variables in parentheses cannot be arrays
  * Use the FILEGETPOS statement to retrieve a position in the file and use the FILESETPOS statement to return to that position.

***Tip:*** Create a standard specfile (for example, FILE.DEF) that defines all the variables required for the file input and output statements. You can #INCLUDE this specfile in any DEFINE division of specfiles that perform file input and output.

### Extended Example
Updates a list of share certificate rates and creates a log of who made each update.

***Tip:*** If you want to change the value, PowerOn moves back to the rate's starting position with FILESETPOS and overwrites the old rate with FILEWRITE.
\`\`\`
                      SHARE CERTIFICATE RATES
TERM        MIN. DEPOSIT                   RATE   DESCRIPTION
6 mo.          $2,000.00                 3.250%   The short termer
12 mo.         $2,000.00                 3.425%   California Dream
24 mo.         $5,000.00                 4.124%   The real thing
36 mo.         $5,000.00                 4.333%   Blind faith
\`\`\`

PowerOn reads each existing rate, records the starting position of that rate, and displays a prompt for the new rate.
`+ CODESTART + `
TARGET = ACCOUNT

DEFINE
   FNUMBER = NUMBER
   FERROR  = CHARACTER
   REPTITLE= CHARACTER(80)
   REPHEAD = CHARACTER(80)
   TERMANDMIN = CHARACTER(40)
   SCRATE     = CHARACTER(10)
   TEMPRATE   = RATE
   POS        = NUMBER
   DESC       = CHARACTER(40)
END

SETUP
   FILEOPEN("LETTER","SC.RATES","READWRITE",FNUMBER,FERROR)
   IF FERROR<>"" THEN
    CALL FILEFATAL

   FILEREADLINE(FNUMBER,REPTITLE,FERROR)
   FILEREADLINE(FNUMBER,REPHEAD,FERROR)
   NEWPAGE
   PRINT REPTITLE
   NEWLINE
   PRINT REPHEAD
   NEWLINE

   FILEREAD(FNUMBER,40,TERMANDMIN,FERROR)
   WHILE FERROR = "" 
   DO
    FILEGETPOS(FNUMBER,POS,FERROR)
    FILEREAD(FNUMBER,7,CDRATE,FERROR)
    TEMPRATE = VALUE(CDRATE)/100000
    PRINT TERMANDMIN
    TEMPRATE = ENTERRATE("   ENTER CURRENT RATE",TEMPRATE)
    FILESETPOS(FNUMBER,POS,FERROR)
    FILEWRITE(FNUMBER,FORMAT("#9.999%",TEMPRATE),FERROR)
    FILEREADLINE(FNUMBER,DESC,FERROR)
    FILEREAD(FNUMBER,40,TERMANDMIN,FERROR)
   END
   FILECLOSE(FNUMBER,FERROR)
END

PRINT TITLE = "SHARE CERTIFICATE RATES"
PRINT ""
END

PROCEDURE FILEFATAL
PRINT "*************  ERROR  ***********"
NEWLINE
PRINT FERROR
NEWLINE
PRINT "*********************************"
NEWLINE
TERMINATE
END
`+ CODEEND + `
`)
powerOnFunctions.set("filelistclose", `
# FILELISTCLOSE
---
This function closes a previously opened list of files.

### Syntax
`+ CODESTART + `
FILELISTCLOSE(ErrorText)
`+ CODEEND + `

### Arguments
  * ErrorText
    - Define a character variable to be updated during processing. If an error occurs while it attempts to open the file list, that variable will be updated with a short error message. If there are no errors, that variable is blank.

### Example
`+ CODESTART + `
FILELISTCLOSE(FILEERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * The variables in parentheses cannot be arrays
  * Will return an error if a FILELISTOPEN was not previously used

### Extended Example
`+ CODESTART + `
TARGET=ACCOUNT
 
DEFINE
  FILENAME=CHARACTER
  ERRORTEXT=CHARACTER
END
 
SETUP
  FILELISTOPEN("LETTER","MANUAL.+",ERRORTEXT)
   IF ERRORTEXT="" THEN
    DO
     WHILE ERRORTEXT=""
      DO
       FILELISTREAD(FILENAME,ERRORTEXT)
       IF ERRORTEXT="" THEN
        DO
         PRINT FILENAME
         NEWLINE
        END
      END
     FILELISTCLOSE(ERRORTEXT)
    END
   IF ERRORTEXT<>"" THEN
    DO
     PRINT"Error Listing Files: " + ERRORTEXT
     NEWLINE
    END
END
...
`+ CODEEND + `
`)
powerOnFunctions.set("filelistopen", `
# FILELISTOPEN
---
This function opens a file list you want to read.

### Syntax
`+ CODESTART + `
FILELISTOPEN(FileType,Template,ErrorText)
`+ CODEEND + `

### Arguments
  * FileType
    - AUTODATA
    - AUTORESPONSE
    - AUTOTRIGGER
    - DATA
    - HELP
    - LETTER
    - REPORT
    - SPECFILE, REPGEN
      * ***Tip:*** Although REPGEN is still a valid file type, use SPECFILE when possible. Because we will eventually drop support for REPGEN, we recommend that all users replace REPGEN with SPECFILE.
  * Template
    - Word, phrase, or title of the file you are asking to list.
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

***Tip:*** Create a standard specfile (for example, FILE.DEF) that defines all the variables required for the file input and output statements. You can #INCLUDE this specfile in any DEFINE division of specfiles that perform file input and output.

### Example
`+ CODESTART + `
FILELISTOPEN("REPORT","+ATM+",FILEERROR)
`+ CODEEND + `

***Tip:*** Locate the last Notice of Insufficient Funds Report, read the report, change the format or wording of the notice, and create a new notice report.

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * The variables in parentheses cannot be arrays
  * The case (uppercase or lowercase) of each template character is significant for matching file names
  * When matching report titles, PowerOn ignores the case

### Standard Template Matching Examples
Reduce search results and matches to file names or report titles you want to view.
  * For ATMLOG, DATA, HELP, LETTER, and RECEIPT, use a file name template. To list all the letter files that start with MANUAL and make them available to the specfile through the FILELISTOPEN function. In the file name, specify the following:
    `+ CODESTART + `
    FILELISTOPEN("LETTER","MANUAL.+",ERRORTEXT)
    `+ CODEEND + `
  * For REPORT file lists, use a report title template. To list all report files with the word ATM somewhere in the title, specify the following:
    `+ CODESTART + `
    FILELISTOPEN("REPORT","+ATM+",ERRORTEXT)
    `+ CODEEND + `
  * Use backslashes (\\) in the template to specify a template that you do not want to match. To list all file names that start with "MANUAL." but do not end with ".OLD", specify the following:
    `+ CODESTART + `
    "MANUAL.+\\+.OLD"
    `+ CODEEND + `
  * Use commas to separate multiple templates that you want to match. To list all file names that start with "MANUAL." and all file names that start with "PROC.", specify the following:
    `+ CODESTART + `
    "MANUAL.+,PROC.+"
    `+ CODEEND + `

### Extended Example
`+ CODESTART + `
TARGET=ACCOUNT
 
DEFINE
  FILENAME=CHARACTER
  ERRORTEXT=CHARACTER
END
 
SETUP
  FILELISTOPEN("LETTER","MANUAL.+",ERRORTEXT)
   IF ERRORTEXT="" THEN
    DO
     WHILE ERRORTEXT=""
      DO
       FILELISTREAD(FILENAME,ERRORTEXT)
       IF ERRORTEXT="" THEN
        DO
         PRINT FILENAME
         NEWLINE
        END
      END
     FILELISTCLOSE(ERRORTEXT)
    END
   IF ERRORTEXT<>"" THEN
    DO
     PRINT"Error Listing Files: " + ERRORTEXT
     NEWLINE
    END
END
...
`+ CODEEND
)
powerOnFunctions.set("filelistread", `
# FILELISTREAD
---
This function reads lines in the list that are opened or created by FILELISTOPEN.

### Syntax
`+ CODESTART + `
FILELISTREAD(FileName,ErrorText)
`+ CODEEND + `

### Arguments
  * FileName
    - A specific letter, help, specfile, report, ATM log, or receipt. Define only character variables for the two arguments in parentheses. PowerOn updates them during processing and returns the next file name that matches the FILELISTOPEN template into the file name variable. PowerOn returns the matching file names in alphabetical order.
  * ErrorText
    - Define a character variable to be updated during processing. If an error occurs while it attempts to open the file list, that variable will be updated with a short error message. If there are no errors, that variable is blank.

***Tip:*** Create a standard specfile (for example, FILE.DEF ) that defines all the variables required for the file input and output statements. You can #INCLUDE this specfile in the DEFINE division of specfiles that perform file input and output.

### Example
`+ CODESTART + `
FILELISTREAD(FILENAME,FILEERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * The variables in parentheses cannot be arrays
  * In REPORT files, the file name variable contains a full line of information in addition to the report title, similar to the data in Print Control.
  * If an error occurs when PowerOn attempts to open the file list, it updates the error text variable with a short error message. If there are no errors, that variable is blank. When there are no more file names or report titles that match the template, EOF is returned in that variable.

***Tip:*** Along with the other FILE input and output statements, you can process any report in your Print Control list and produce a new report in an altered format. For example, you can find the last Notice of Insufficient Funds, read the notice, change the format or wording of the notice, and create a new notice.

### Report File Data Format
  * If Report Sequence Number Digits is set to 4, then positions 001-004, contain the report number.
  * If Report Sequence Number Digits is set to 5 or 6, then positions 001-004 contain four asterisks (****).

Position(s):
  * 001-004 = File name (for example, 8192 if it is report number 8192)
  * 005 = Blank
  * 006-045 = Report title
  * 046 = Blank
  * 047-052 = Page count
  * 053 = Blank
  * 054-056 = Number of times printed
  * 057 = Blank
  * 058-060 = Number of times written to tape (using the TAPEWRITE command)
  * 061 = Blank
  * 062-069 = Date sent to Print Control (system actual date)
  * 070 = Blank
  * 071-075 = Time sent to Print Control
  * 076 = Blank
  * 077-108 = Form name (if not blank)
  * 109 = Blank
  * 110-115 = Six-digit report sequence number

### Extended Example
`+ CODESTART + `
TARGET=ACCOUNT
 
DEFINE
  FILENAME=CHARACTER
  ERRORTEXT=CHARACTER
END
 
SETUP
  FILELISTOPEN("LETTER","MANUAL.+",ERRORTEXT)
   IF ERRORTEXT="" THEN
    DO
     WHILE ERRORTEXT=""
      DO
       FILELISTREAD(FILENAME,ERRORTEXT)
       IF ERRORTEXT="" THEN
        DO
         PRINT FILENAME
         NEWLINE
        END
      END
     FILELISTCLOSE(ERRORTEXT)
    END
   IF ERRORTEXT<>"" THEN
    DO
     PRINT"Error Listing Files: " + ERRORTEXT
     NEWLINE
    END
END
...
`+ CODEEND
)
powerOnFunctions.set("fileopen", `
# FILEOPEN
---
This function opens a file of the specified file type for processing in the selected open mode.

### Syntax
`+ CODESTART + `
FILEOPEN(FileType,FileName,OpenMode,FileNumber,ErrorText)
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
    - ATMLOG ***READ ONLY***
    - RECEIPT ***READ ONLY***
    - REPORT ***READ ONLY***
  * FileName
    - Auto Data file name	
    - Auto Response file name
    - Auto Trigger file name
    - Data file name
    - Blank, there is only one edit file (use double quotes " ")
    - Help file number
    - Letter file name
    - Specfile name
      * ***Tip:*** Although REPGEN is still a valid file type, use SPECFILE when possible. Because we will eventually drop support for REPGEN, we recommend that all users replace REPGEN with SPECFILE.
    - ATM log file name	
    - Empty character string
    - Sequence number
  * OpenMode
    - APPEND
    - READ
    - READWRITE
    - WRITE
  * FileNumber
    - A defined number variable; contains a temporary file number during processing
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

***Tip:*** Create a standard specfile (for example, FILE.DEF) that defines all the variables required for the file input and output statements. You can #INCLUDE this specfile in any DEFINE division of specfiles that perform file input and output.

### Examples
Use a static file name in the command:
`+ CODESTART + `
FILEOPEN("LETTER","ACCOUNT.COMMENT","READ",FNUMBER,FERROR)
`+ CODEEND + `

Use a variable file name in the command:
`+ CODESTART + `
FILEOPEN("LETTER",ACCTFILENAME,"WRITE",FNUMBER,FERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * The variables in parentheses cannot be arrays
  * All modes except WRITE assume that the file exists
  * The maximum number of files a program can have open at one time is 25
Use FILEOPEN in the following modes:
  * READ opens an existing file and reads the file information with FILEREAD and FILEREADLINE. For this mode, the file must exist.
  * WRITE opens a new file to write to. For this mode, the file must not exist.
  * READWRITE allows you to read data from and write data to an open file. For this mode, the file must exist.
  * APPEND allows you to open an existing file and add any subsequent FILEWRITE information to the end of the file. For this mode, if the file does not exist, it is automatically created.
`)
powerOnFunctions.set("fileread", `
# FILEREAD
---
This function reads an open file and saves the read data in a variable.

### Syntax
`+ CODESTART + `
FILEREAD(FileNumber,NumberOfCharacters,CharacterVariable,ErrorText)
`+ CODEEND + `

### Arguments
  * FileNumber
    - This argument comes from the FileNumber variable updated by the FILEOPEN command.
  * NumberOfCharacters
    - The length of data you want to read
  * CharacterVariable
    - Define a character variable in which to place the data read from the PowerOn file
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

### Example
`+ CODESTART + `
FILEREAD(FILENUMBER,10,FILETEXT,FILERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * The variables in parentheses cannot be arrays
  * Reads return line terminator characters (carriage returns, line feeds, and form feeds)
  * Use the FILESETPOS statement before FILEREAD to set the position at the beginning of the data you want to read.
  * When you read data sequentially and reach the end of a file, the message EOF is returned.

***Tip:*** Create a standard specfile (for example, FILE.DEF) that defines all the variables required for the file input and output statements. You can #INCLUDE this specfile in any DEFINE division of specfiles that perform file input and output.

### Extended Example
The following specfile uses FILEREAD (line 28) to get to the beginning of a list of share certificate rates and to read each rate (line 31). As it reads each existing rate, PowerOn records the starting position of that rate with FILEGETPOS and displays a prompt for the new rate. If you want to change the value, PowerOn moves back to the rate's starting position with FILESETPOS and overwrites the old rate with FILEWRITE.

The specfile reads this data file:

Tip: If you want to change the value, PowerOn moves back to the rate's starting position with FILESETPOS and overwrites the old rate with FILEWRITE.
\`\`\`
                      SHARE CERTIFICATE RATES
TERM        MIN. DEPOSIT                   RATE   DESCRIPTION
6 mo.          $2,000.00                 3.250%   The short termer
12 mo.         $2,000.00                 3.425%   California Dream
24 mo.         $5,000.00                 4.124%   The real thing
36 mo.         $5,000.00                 4.333%   Blind faith
\`\`\`
The specfile appears as:
`+ CODESTART + `
TARGET = ACCOUNT

DEFINE
   FNUMBER = NUMBER
   FERROR  = CHARACTER
   REPTITLE= CHARACTER(80)
   REPHEAD = CHARACTER(80)
   TERMANDMIN = CHARACTER(40)
   SCRATE     = CHARACTER(10)
   TEMPRATE   = RATE
   POS        = NUMBER
   DESC       = CHARACTER(40)
END

SETUP
   FILEOPEN("LETTER","SC.RATES","READWRITE",FNUMBER,FERROR)
   IF FERROR<>"" THEN
    CALL FILEFATAL

   FILEREADLINE(FNUMBER,REPTITLE,FERROR)
   FILEREADLINE(FNUMBER,REPHEAD,FERROR)
   NEWPAGE
   PRINT REPTITLE
   NEWLINE
   PRINT REPHEAD
   NEWLINE

   FILEREAD(FNUMBER,40,TERMANDMIN,FERROR)
   WHILE FERROR = "" 
   DO
    FILEGETPOS(FNUMBER,POS,FERROR)
    FILEREAD(FNUMBER,7,CDRATE,FERROR)
    TEMPRATE = VALUE(CDRATE)/100000
    PRINT TERMANDMIN
    TEMPRATE = ENTERRATE("   ENTER CURRENT RATE",TEMPRATE)
    FILESETPOS(FNUMBER,POS,FERROR)
    FILEWRITE(FNUMBER,FORMAT("#9.999%",TEMPRATE),FERROR)
    FILEREADLINE(FNUMBER,DESC,FERROR)
    FILEREAD(FNUMBER,40,TERMANDMIN,FERROR)
   END
   FILECLOSE(FNUMBER,FERROR)
END

PRINT TITLE = "SHARE CERTIFICATE RATES"
PRINT ""
END

PROCEDURE FILEFATAL
PRINT "*************  ERROR  ***********"
NEWLINE
PRINT FERROR
NEWLINE
PRINT "*********************************"
NEWLINE
TERMINATE
END
`+ CODEEND
)
powerOnFunctions.set("filereadline", `
# FILEREADLINE
---
This function reads a line of text from a file and then stores that line in the second argument.

### Syntax
`+ CODESTART + `
FILEREADLINE(FileNumber,TextLine,ErrorText)
`+ CODEEND + `

### Arguments
  * FileNumber
    - File number variable returned from FILEOPEN
  * TextLine
    - Returns the data of the line you are reading
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

### Example
`+ CODESTART + `
FILEREADLINE(FILENUMBER,FILETEXT,FILEERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * The variables in parentheses cannot be arrays
  * An error occurs if there are more than 132 characters in a single line (the end of a line being denoted by a carriage return, line feed, form feed, or null).
  * Strips off line terminators (carriage returns, line feeds, form feeds)

***Tip:*** Create a standard specfile (for example, FILE.DEF) that defines all the variables required for the file input and output statements. You can #INCLUDE this specfile in any DEFINE division of specfiles that perform file input and output.

### Extended Example
`+ CODESTART + `
TARGET=ACCOUNT
  
DEFINE
   FNUMBER=NUMBER
   FLINE=CHARACTER
   FERROR=CHARACTER
END
  
PRINT TITLE="Test File I/O"
  
    FILEOPEN("LETTER","PHONELIST","READ",FNUMBER,FERROR)
    IF FERROR<>"" THEN
     DO
      PRINT "Error Opening File: "
      PRINT FERROR
      NEWLINE
     END
    ELSE
     DO
      WHILE FERROR=""
       DO
        FILEREADLINE(FNUMBER,FLINE,FERROR)
        IF FERROR="" THEN
         DO
          PRINT FLINE
          NEWLINE
         END
       END
      FILECLOSE(FNUMBER,FERROR)
     END
   END
...
`+ CODEEND
)
powerOnFunctions.set("filesetpos", `
# FILESETPOS
---
This function sets the current byte position of the specified text file.

### Syntax
`+ CODESTART + `
FILESETPOS(FileNumber,FilePosition,ErrorText)
`+ CODEEND + `

### Arguments
  * FileNumber
    - File number variable returned from FILEOPEN
  * FilePosition
    - Define either a numeric variable, number literal, or numeric expression.
  * ErrorText
    - Define a character variable to be updated during processing. If an error occurs while it attempts to open the file list, that variable will be updated with a short error message. If there are no errors, that variable is blank.

***Tip:*** Create a standard specfile (for example, FILE.DEF) that defines all the variables required for the file input and output statements. You can #INCLUDE this specfile in any DEFINE division of specfiles that perform file input and output.

### Example
`+ CODESTART + `
FILESETPOS(FILENUMBER,FILEPOSITION,FILEERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * The variables in parentheses cannot be arrays
  * Use FILEGETPOS to remember a position in the file and use FILESETPOS to return to that position when you are ready to read or write at that position.
  * You must enter the byte position as a number literal in the second argument. A later FILEREAD or FILEREADLINE statement starts reading from that position. A later FILEWRITE or FILEWRITELINE overwrites whatever is at that position. To return to the beginning of the file, set the file position to 0.
  * Must be a non-negative number

### Extended Example
The following specfile uses FILEREAD to get to the beginning of a list of share certificate rates. PowerOn reads each existing rate, records the starting position of that rate with FILEGETPOS, and displays a prompt for the new rate. If you want to change the value, PowerOn moves back to the rate's starting position with FILESETPOS (line 35) and overwrites the old rate with FILEWRITE.

The specfile reads this data file:

***Tip:*** If you want to change the value, PowerOn moves back to the rate's starting position with FILESETPOS and overwrites the old rate with FILEWRITE.
\`\`\`
                      SHARE CERTIFICATE RATES
TERM        MIN. DEPOSIT                   RATE   DESCRIPTION
6 mo.          $2,000.00                 3.250%   The short termer
12 mo.         $2,000.00                 3.425%   California Dream
24 mo.         $5,000.00                 4.124%   The real thing
36 mo.         $5,000.00                 4.333%   Blind faith
\`\`\`
The specfile appears as:
`+ CODESTART + `
TARGET = ACCOUNT

DEFINE
   FNUMBER = NUMBER
   FERROR  = CHARACTER
   REPTITLE= CHARACTER(80)
   REPHEAD = CHARACTER(80)
   TERMANDMIN = CHARACTER(40)
   SCRATE     = CHARACTER(10)
   TEMPRATE   = RATE
   POS        = NUMBER
   DESC       = CHARACTER(40)
END

SETUP
   FILEOPEN("LETTER","SC.RATES","READWRITE",FNUMBER,FERROR)
   IF FERROR<>"" THEN
    CALL FILEFATAL

   FILEREADLINE(FNUMBER,REPTITLE,FERROR)
   FILEREADLINE(FNUMBER,REPHEAD,FERROR)
   NEWPAGE
   PRINT REPTITLE
   NEWLINE
   PRINT REPHEAD
   NEWLINE

   FILEREAD(FNUMBER,40,TERMANDMIN,FERROR)
   WHILE FERROR = "" 
   DO
    FILEGETPOS(FNUMBER,POS,FERROR)
    FILEREAD(FNUMBER,7,CDRATE,FERROR)
    TEMPRATE = VALUE(CDRATE)/100000
    PRINT TERMANDMIN
    TEMPRATE = ENTERRATE("   ENTER CURRENT RATE",TEMPRATE)
    FILESETPOS(FNUMBER,POS,FERROR)
    FILEWRITE(FNUMBER,FORMAT("#9.999%",TEMPRATE),FERROR)
    FILEREADLINE(FNUMBER,DESC,FERROR)
    FILEREAD(FNUMBER,40,TERMANDMIN,FERROR)
   END
   FILECLOSE(FNUMBER,FERROR)
END

PRINT TITLE = "SHARE CERTIFICATE RATES"
PRINT ""
END

PROCEDURE FILEFATAL
PRINT "*************  ERROR  ***********"
NEWLINE
PRINT FERROR
NEWLINE
PRINT "*********************************"
NEWLINE
TERMINATE
END
`+ CODEEND
)
powerOnFunctions.set("filewrite", `
# FILEWRITE
---
This function locates the given file number and writes the data you specify, beginning at the current byte position.

### Syntax
`+ CODESTART + `
FILEWRITE(FileNumber,CharacterData,ErrorText)
`+ CODEEND + `
or
`+ CODESTART + `
FILEWRITE(FileNumber,CharacterData,FieldLength,ErrorText)
`+ CODEEND + `

### Arguments
  * FileNumber
    - File number variable returned from FILEOPEN
  * CharacterData
    - Can be a character literal or a character variable
  * FieldLength
    - Optional. You can use a variable, literal, or any numeric expression as long as it resolves to an integer from 1 to 132.
    - If the length of the character information in character data is greater than the field length specified, FILEWRITE outputs only the information truncated to the number of bytes specified by the "fieldlength" expression.
    - If the length of the character information in character data is less than the field length specified, FILEWRITE outputs all character data plus enough trailing blanks to reach the specified field length. This is useful for writing the precise number of bytes specified in some layouts.
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

### Example
`+ CODESTART + `
FILEWRITE(FILENUMBER,"06/15/09",FILEERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Variables used as arguments inside the parentheses cannot be arrays.
  * You can only write to a data file, edit file, help file, letter file, or specfile.

Use FILESETPOS before FILEWRITE to position the file where you want to begin writing.

### Extended Example
Updates a list of share certificate rates and creates a log of who made each update.

The following specfile uses FILEREAD to get to the beginning of a list of share certificate rates. PowerOn reads each existing rate, records the starting position of that rate with FILEGETPOS, and displays a prompt for the new rate. If you want to change the value, PowerOn moves back to the rate's starting position with FILESETPOS and overwrites the old rate with FILEWRITE.See FILEWRITE on line 36.

The specfile reads this data file:
\`\`\`
                      SHARE CERTIFICATE RATES
TERM        MIN. DEPOSIT                   RATE   DESCRIPTION
6 mo.          $2,000.00                 3.250%   The short termer
12 mo.         $2,000.00                 3.425%   California Dream
24 mo.         $5,000.00                 4.124%   The real thing
36 mo.         $5,000.00                 4.333%   Blind faith
\`\`\`

PowerOn reads each existing rate, records the starting position of that rate, and displays a prompt for the new rate.

The specfile looks like this:
`+ CODESTART + `
TARGET = ACCOUNT

DEFINE
   FNUMBER = NUMBER
   FERROR  = CHARACTER
   REPTITLE= CHARACTER(80)
   REPHEAD = CHARACTER(80)
   TERMANDMIN = CHARACTER(40)
   SCRATE     = CHARACTER(10)
   TEMPRATE   = RATE
   POS        = NUMBER
   DESC       = CHARACTER(40)
END

SETUP
   FILEOPEN("LETTER","SC.RATES","READWRITE",FNUMBER,FERROR)
   IF FERROR<>"" THEN
    CALL FILEFATAL

   FILEREADLINE(FNUMBER,REPTITLE,FERROR)
   FILEREADLINE(FNUMBER,REPHEAD,FERROR)
   NEWPAGE
   PRINT REPTITLE
   NEWLINE
   PRINT REPHEAD
   NEWLINE

   FILEREAD(FNUMBER,40,TERMANDMIN,FERROR)
   WHILE FERROR = "" 
   DO
    FILEGETPOS(FNUMBER,POS,FERROR)
    FILEREAD(FNUMBER,7,CDRATE,FERROR)
    TEMPRATE = VALUE(CDRATE)/100000
    PRINT TERMANDMIN
    TEMPRATE = ENTERRATE("   ENTER CURRENT RATE",TEMPRATE)
    FILESETPOS(FNUMBER,POS,FERROR)
    FILEWRITE(FNUMBER,FORMAT("#9.999%",TEMPRATE),FERROR)
    FILEREADLINE(FNUMBER,DESC,FERROR)
    FILEREAD(FNUMBER,40,TERMANDMIN,FERROR)
   END
   FILECLOSE(FNUMBER,FERROR)
END

PRINT TITLE = "SHARE CERTIFICATE RATES"
PRINT ""
END

PROCEDURE FILEFATAL
PRINT "*************  ERROR  ***********"
NEWLINE
PRINT FERROR
NEWLINE
PRINT "*********************************"
NEWLINE
TERMINATE
END
`+ CODEEND
)
powerOnFunctions.set("filewriteline", `
# FILEWRITELINE
---
This function locates the file number specified and writes a line of text beginning at the current byte position.

### Syntax
`+ CODESTART + `
FILEWRITELINE(FileNumber,CharacterData,ErrorText)
`+ CODEEND + `
or
`+ CODESTART + `
FILEWRITELINE(FileNumber,CharacterData,FieldLength,ErrorText)
`+ CODEEND + `

### Arguments
  * FileNumber
    - File number variable returned from FILEOPEN
  * CharacterData
    - Can be a character literal or a character variable	
  * FieldLength
    - Optional. You can use a variable, literal, or any numeric expression as long as it resolves to an integer from 1 to 132.
    - If the length of the character information in character data is greater than the field length specified, FILEWRITELINE outputs only the information truncated to the number of bytes specified by the "fieldlength" expression.
    - If the length of the character information in character data is less than the field length specified, FILEWRITELINE outputs all character data plus enough trailing blanks to reach the specified field length. This is useful for writing the precise number of bytes specified in some layouts.
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

***Tip:*** Create a standard specfile (for example, FILE.DEF) that defines all the variables required for the file input and output statements. You can #INCLUDE this specfile in any DEFINE division of specfiles that perform file input and output.

### Example
`+ CODESTART + `
FILEWRITELINE(FILENUMBER,"This account is closed.",FILEERROR)
`+ CODEEND + `

### Usage Information
  * You can only write to a letter file, help file, specfile, or edit file
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Variables used as arguments cannot be arrays
  * FILEWRITELINE always adds a NEWLINE print control statement to the end of the specified text

***Tip:*** Use the FILESETPOS statement before FILEWRITELINE to position the file where you want to start writing.

### Extended Example
The following specfile updates a list of share certificate rates and creates a log of who made each update. The specfile uses FILEWRITELINE on line 45 to update the comment at the end of the log and on line 63 to write information on the end of the line.
`+ CODESTART + `
TARGET = ACCOUNT

DEFINE
  FNUMBER    = NUMBER
  FNUMBER2   = NUMBER
  FERROR     = CHARACTER
  FERROR2    = CHARACTER
  STAMPLINE  = CHARACTER
  REPTITLE   = CHARACTER(80)
  REPHEAD    = CHARACTER(80)
  TERMANDMIN = CHARACTER(40)
  CDRATE     = CHARACTER(10)
  TEMPRATE   = RATE
  POS        = NUMBER
  POS2       = NUMBER
  DESC       = CHARACTER(40)
END

SETUP
   CALL TIMESTAMP
   FILEOPEN("LETTER","SC.RATES","READWRITE",FNUMBER,FERROR)
   IF FERROR<>"" THEN
   CALL FILEFATAL
   FILEREADLINE(FNUMBER,REPTITLE,FERROR)
   FILEREADLINE(FNUMBER,REPHEAD,FERROR)
   NEWPAGE
   PRINT REPTITLE
   NEWLINE
   PRINT REPHEAD
   NEWLINE
   FILEREAD(FNUMBER,40,TERMANDMIN,FERROR)
   WHILE FERROR = ""
    DO
     FILEGETPOS(FNUMBER,POS,FERROR)
     FILEREAD(FNUMBER,7,CDRATE,FERROR)
     TEMPRATE = VALUE(CDRATE)/100000
     PRINT TERMANDMIN
     TEMPRATE = ENTERRATE("   ENTER CURRENT RATE",TEMPRATE)
     FILESETPOS(FNUMBER,POS,FERROR)
     FILEWRITE(FNUMBER,FORMAT("#9.999%",TEMPRATE),FERROR)
     FILEREADLINE(FNUMBER,DESC,FERROR)
     FILEREAD(FNUMBER,40,TERMANDMIN,FERROR)
    END
   FILESETPOS(FNUMBER2,POS2,FERROR)
   FILEWRITELINE(FNUMBER2,"  - CLOSED NORMALLY",FERROR2)
   FILECLOSE(FNUMBER2,FERROR2)
   FILECLOSE(FNUMBER,FERROR)
END

PRINT TITLE = "SHARE CERTIFICATE RATES"
   PRINT ""
END

PROCEDURE TIMESTAMP
   FILECREATE("LETTER","RATE.LOG",FERROR)
   FILEOPEN("LETTER","RATE.LOG","APPEND",FNUMBER2,FERROR2)
   STAMPLINE = FORMAT("99:99 ",SYSACTUALTIME)+
    FORMAT("99/99/99 ",SYSACTUALDATE)+
    FORMAT("999 - ",SYSUSERNUMBER)+
    SYSUSERNAME(SYSUSERNUMBER)
   FILEWRITE(FNUMBER2,STAMPLINE,FERROR)
   FILEGETPOS(FNUMBER2,POS2,FERROR)
   FILEWRITELINE(FNUMBER2,"  - EXIT BY ESC",FERROR2)
END

PROCEDURE FILEFATAL
   NEWLINE
   PRINT "Error: "+FERROR
   NEWLINE
   TERMINATE
END
`+ CODEEND
)
powerOnFunctions.set("float", `
# FLOAT
---
This function converts a number, money, rate, date, or code value into its equivalent floating point value. It is intended for use on an entire numeric expression. It is useful for assigning a non-floating point value to a float variable. If you use this function on part of a compound expression, it can have unpredictable results.

### Syntax
`+ CODESTART + `
FLOAT(Expression)
`+ CODEEND + `

### Arguments
Expression = Using NUMBER, MONEY, DATE, RATE, or CODE data type

### Example
This function converts a number, money, code, date, or rate value into its equivalent floating point value. It is intended for use on an entire numeric expression. If you use this function on part of a compound expression, it can have unpredictable results.
`+ CODESTART + `
FLOAT(LOAN:INTERESTRATE)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP, PRINT, or TOTAL divisions or in a procedure called by one of these divisions

### Extended Example
`+ CODESTART + `
FLOATVARIABLE= FLOAT(LOAN:INTERESTRATE)
`+ CODEEND + `

This list illustrates the results of the FLOAT function for each valid data type:
CODE data type example
\`\`\`
03 FLOAT Value: 3.0E+0
\`\`\`

DATE data type example
\`\`\`
'12/31/93' FLOAT Value: +1.567000000000000E+003
\`\`\`

MONEY data type example
\`\`\`
$24.95 FLOAT Value: 2.495E+1
\`\`\`

NUMBER data type example
\`\`\`
-8765 FLOAT Value: -8.765E+3
\`\`\`

RATE data type example
\`\`\`
4.567% FLOAT Value: 4.567E-2
\`\`\`
`)
powerOnFunctions.set("floatvalue", `
# FLOATVALUE
---
This function converts the characters that express a numeric value into a floating point numeric equivalent, and then places that value into a specified floating point variable.

### Syntax
`+ CODESTART + `
FLOATVALUE(CharacterString,FLOATVARIABLE,ErrorPosition)
`+ CODEEND + `

### Arguments
  * CharacterString
    - Provides the value and the format for the new floating value
  * FLOATVARIABLE
    - The value of the CharacterString
  * ErrorPosition
    - The position of the error If there are any errors with the format from the first argument

### Example
`+ CODESTART + `
FLOATVALUE("1.2e+2",FLOATVARIABLE,EPOS)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Cannot express a fractional exponent (such as ½)
  * Can only use the range between 2.2E-308 to 1.8E+308
  * Returns an error position which is a number indicating the position in the character string at which a parsing error occurred
  * Limited to 16 digits; anything over 16 digits will produce unpredictable results

### Extended Example
575 can be expressed as 5.75 x 102, or as 5.75E+2.

`+ CODESTART + `
FLOATVALUE("5.75E+2",FLOATVARIABLE,EPOS)
`+ CODEEND + `
The decimal is moved two places to the right and 575 is assigned to FLOATVARIABLE; EPOS is 0 because the format is acceptable.

### EPOS Example
Character string is not in the scientific notation format.

`+ CODESTART + `
FLOATVALUE("5.75ABC",FLOATVARIABLE,EPOS)
`+ CODEEND + `
5.75 is assigned to FLOATVARIABLE and 5 to EPOS. EPOS represents the position of the offending character (the letter A is the fifth character in the string).

### Negative Exponent Example
.0123 can be expressed as 1.23 x 10-2, or as 1.23E-2.

`+ CODESTART + `
FLOATVALUE("1.23E-2",FLOATVARIABLE,EPOS)
`+ CODEEND + `
The decimal is moved two places to the left and .0123 is assigned to FLOATVARIABLE; EPOS is 0 because the format is acceptable.
`)
powerOnFunctions.set("floor", `
# FLOOR
---
This function returns the integer that is less than or equal to a given number, monetary amount, or floating point expression.

### Syntax
`+ CODESTART + `
FLOOR(expression)
`+ CODEEND + `

### Arguments
  * Enter a number, monetary amount, or floating point expression.

### Example
`+ CODESTART + `
FLOOR(3.14159E0)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP, SELECT, SORT, PRINT, LETTER, or TOTAL divisions or in a procedure called by those divisions

### Extended Example
`+ CODESTART + `
  IF FLOOR(WEEKSTOBIRTHDAY)= -1 THEN
    PRINT "Sorry we missed your birthday this week!"
`+ CODEEND + `

### Various Data Type Example
  * \`\`\` FLOOR(3.14159E0) \`\`\`=3 
  * \`\`\` FLOOR(17) \`\`\`=17
  * \`\`\` FLOOR($1.50) \`\`\`= $1.50 The penny (cents) part of a money value is considered a part of the integer value.
  * \`\`\` FLOOR(-2.4) \`\`\`= -3

### INT and FLOOR Example
Except for how they handle negative numbers with a fractional part, INT and FLOOR are similar.

`+ CODESTART + `
INT(-2.4) = -2
FLOOR(-2.4) = -3
`+ CODEEND
)
powerOnFunctions.set("fmperform", `
# FMPERFORM
--- 
This function performs file maintenance to the Account, Loan Rate Change, User Tracking, Wire, Member, Member Address, and Non-Account Name records in demand mode.

### Syntax
`+ CODESTART + `
FMPERFORM FMType [TARGETFILE] RecordPath(CheckPrivilegesFlag,DefaultType,[NewLoc,][NewID,]ErrorText)
DO 
 SET Field_Name TO New_Value 
 SET Field_Name TO New_Value 
END
`+ CODEEND + `

### Arguments
  * FMType
    - CREATE
    - REVISE
    - DELETE
  * TARGETFILE
    - Optionally used when the current file context is not the same as the target file of the FMPERFORM.	
  * RecordPath
    - The full record path specification from the top-level record (Account record for the Account file, User record for the User file, etc.) down to the record being file maintained, including IDs and LOC, or ordinal sequence numbers.
  * CheckPrivilegesFlag
    - 1 = Check all applicable Field FM Privileges
    - 0 = Do not check privileges
  * DefaultType
    - 0 to the maximum type to use when the specfile creates a record with a TYPE field	
  * NewLoc
    - Defines an optional number variable to be updated during processing with the LOCATOR of the record created using FMPERFORM
  * NewID
    - Define an optional character variable to be updated during processing with the ID of the record created using FMPERFORM.
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

***Tip:*** When creating a Card record, you can use the NEXT keyword to have the system calculate a card number rather than having the specfile provide a card number. The system uses the Card Creation Wizard Parameters for the card type to format the card number.

  * If the Card Number Format parameter in the Card Creation Wizard Parameters for a card type contains the P placeholder, you can specify a number with the NEXT keyword, separated by a colon. This number sets the value for the portion of the card number the system prompts for.
  * If you use the optional argument [:<pnumber>] for the NEXT keyword, the following rules apply:
    - If the format requires more numbers than the specfile provided, the system pads the number with leading zeros.
    - If the specfile provided more numbers than the format can use, the system cuts off the excess digits at the beginning of the number.
    - If the specfile provided a number for a card type that does not contain the P placeholder, the system ignores the number.
    - If the Card Number Format parameter for a card type contains the P placeholder and the specfile does not provide a number with the NEXT keyword, the creation of the card number fails and the system returns the error:
      \`\`\`Unable to generate new card number.\`\`\`
  * When generating a new card number, the system checks whether the generated number exists on the Account database. The system always ensures that the new card number does not exist on another account. The system can allow duplicates in the same account, depending on how the Unique Card Number? parameter in Card Creation Wizard Parameters for the card type is set:
    - If the Unique Card Number? parameter is set to Yes, the system makes up to ten attempts to generate a new number that does not yet exist. If it is not successful, the creation of the card number fails and the system outputs the error:
      \`\`\`Unable to generate new card number.\`\`\`
    - If the Unique Card Number? parameter is set to No, the system allows duplicate card numbers on the current account. The only exception is if the Card Number Format parameter in the Card Creation Wizard Parameters contains # placeholders, indicating to include a suffix in the card number. In this case, the system looks for a suffix that has not yet been used and only generates a card number if an unused suffix is available. If none is available, the system outputs the error:
      \`\`\`Unable to generate new card number\`\`\`
  * When you use the NEXT keyword, the system only populates the Card Number field in the Card record. Even if you set the Use Card Suffix Field? parameter to Yes, NEXT does not cause the system to populate the Card Suffix field in the Card record.
  * When you run the specfile, the FMPERFORM command processes your file maintenance specifications.
    - If the system is off line, the specfile stops and returns this error message:
      \`\`\`System is Off Line\`\`\`
    - The specfile verifies security privileges:
      * If you do not have access privileges and you try to launch the specfile, a security override prompt appears. After you get the override, the specfile launches. You can click Cancel to proceed, but if a demand specfile contains FMPERFORM commands, the FMPERFORM commands are not run and you receive an error message.
        ***Important:*** You must have the Account File Maintenance privilege (Inquiry and FM Privileges) to perform file maintenance commands.
      * If the user and console have the appropriate access privileges, when the specfile reaches the FMPERFORM command, the following occurs:
      * If the ***Check Privileges*** flag is set to 0, the specfile does not check security privileges for the type of file maintenance required on the indicated record.
      * If the ***Check Privileges*** flag is set to 1, the specfile checks user and console privileges to determine the type of file maintenance required on the indicated record.

### Usage Information
  * Use only in the SETUP, PRINT, or TOTAL divisions or in a procedure called by one of these divisions
  * Only used for demand specfiles
  * Specfile must target the Account record
  * Used with the ACCOUNT record type only
  * Cannot use with the VALIDATION keyword
  * You can use within a PROCEDURE section of your specfile
  * If you do not specify any field changes for a creation, only the default field values will be used.
  * You must specify at least one field change for a revision
  * You should not specify any field changes for a deletion
  * Cannot use inside a FOR EACH loop because creating or deleting records could potentially wreak havoc with record looping
  * For specfiles used in SymConnect, perform file maintenance inside a FOR loop. Once FMPERFORM is run, the specfile may need to locate the record before issuing another FMPERFORM statement, especially if the specfile is run on one account but programmed to perform file maintenance on another account.
  * When using LOC, there are a number of special keywords that designate where to place a record.
  * When modifying the City, State, and Zip Code fields in the Name record, the total number of characters cannot exceed 38 when formatted together as a address line. A space is automatically inserted between each field, bringing the total address line to 40 characters.
  * FMPERFORM commands targeting the User record or the User Tracking record cannot occur in the same specfile as an FMPERFORM command targeting an Account record, unless they come after all FMPERFORM commands targeting the Account record.
  * When creating a record that does not have a default record type, the first SET statement must include the mnemonic TYPE field for that record.

***Tip:*** If you want to perform file maintenance based on information in records on the account, use a FOR EACH loop to go through the records and store the information in arrays. Afterwards, go back through the arrays with a WHILE...DO...END or FOR...DO...END type loop to perform the file maintenance.

### Create Account File Example for Share
`+ CODESTART + `
FMPERFORM CREATE SHARE "50" NAME LOC 220 (1,0,NEWLOC,ERRORTEXT)
DO 
  SET FIRST TO "PHILLIP"
  SET LAST TO "JOHNSON"
  SET HOMEPHONE TO "619-541-1712"
END
IF ERRORTEXT<>"" THEN
 DO
  PRINT ERRORTEXT
  NEWLINE
  TERMINATE
END
`+ CODEEND + `

### Delete Account File Example for Loan App
`+ CODESTART + `
TARGET=ACCOUNT
 
DEFINE
 FMCOUNT=NUMBER
 FMID=CHARACTER(2) ARRAY(100)
 X=NUMBER
 ERRORTEXT=CHARACTER
END
 
SETUP
[ Gather up the application IDs...]
 ERRORTEXT=""
 FMCOUNT=0
 FOR EACH LOANAPP
  DO
   IF FMCOUNT>=100 THEN
    ERRORTEXT="Too many applications to delete!"
   ELSE
    DO
     FMCOUNT=FMCOUNT+1
     FMID(FMCOUNT)=LOANAPP:ID
    END
  END
 UNTIL (ERRORTEXT<>"")
 
[ ...then actually perform the FM outside of the record loop ]
 X=1
 WHILE (X<=FMCOUNT AND ERRORTEXT="")
  DO
   FMPERFORM DELETE LOANAPP FMID(X) (0,0,NEWLOC,ERRORTEXT)
    DO
    END
   X=X+1
  END
`+ CODEEND + `

### Create User Record Example
`+ CODESTART + `
IF ERROTEXT="" THEN 
  DO 
   FMPERFORM CREATE TARGETFILE USER 0
        TRACKING -1 (1,0,NEWLOC,ERRORTEXT)
    DO 
     SET USERNUMBER1 TO 999
    END 
  END 
END
`+ CODEEND + `

### Read User Record Example
`+ CODESTART + `
ERRORTEXT="No such User!"
 FOR USER WITH NUMBER USERNUM  
  DO 
   ERRORTEXT="No Tracking with matching Locator!"
   FOR EACH USER TRACKING WITH (USER TRACKING:LOCATOR=LOCCODE)
    DO 
     ERRORTEXT=""
    END 
  END
`+ CODEEND + `

### Revise User Record Example
`+ CODESTART + `
IF ERRORTEXT="" THEN 
  DO 
   FMPERFORM REVISE TARGETFILE USER USERNUM 
             TRACKING LOC USERTRACKINGLOC (1,0,NEWLOC,ERRORTEXT)
    DO 
     SET USERNUMBER1 TO NUMVALUE 
    END 
  END 
END
`+ CODEEND + `

### Delete User Record Example
`+ CODESTART + `
IF ERRORTEXT="" THEN 
  DO 
   FMPERFORM DELETE TARGETFILE USER USERNUM 
             USERTRACKING LOC LOCCODE (1,0,NEWLOC,ERRORTEXT)
    DO 
    END 
  END
`+ CODEEND + `

### Create Member Record Example and Assign to a Name Record
`+ CODESTART + `
IF ERRORTEXT="" THEN 
  DO 
   FMPERFORM CREATE TARGETFILE MEMBERREC(1,0,NEWIDNUMBER,ERRORTEXT)
    DO 
     SET LAST TO LASTNAMEVALUE 
    END 
  END 

IF ERRORTEXT="" THEN 
  DO 
   FMPERFORM REVISE SHARE "50" NAME LOC 220 (1,0,NEWLOC,ERRORTEXT)
    DO 
     SET MEMBERNUMLINK TO NEWIDNUMBER 
    END 
  END 
END
`+ CODEEND + `

### Create Account File Example for Share
`+ CODESTART + `
FMPERFORM CREATE SHARE "50" NAME LOC 220 (1,0,NEWLOC,ERRORTEXT)
DO
SET FIRST TO "PHILLIP"
SET LAST TO "JOHNSON"
SET HOMEPHONE TO "    541-1712"
END
IF ERRORTEXT<>"" THEN
DO
PRINT ERRORTEXT
NEWLINE
TERMINATE
END
`+ CODEEND + `

### Revise Account File Example for Share
`+ CODESTART + `
TARGET=ACCOUNT

DEFINE
I=NUMBER
SC=NUMBER
SLID=CHARACTER(4)
ERRORTEXT=CHARACTER
END

SETUP
SC = 0
FOR EACH SHARE WITH SHARE:ID = SLID
DO
   FOR I = 1 TO 8
    DO
     IF SC = 0 THEN
      DO
       IF SHARE:SERVICE:(I) = 6 THEN
        DO
         SC = I
        END
      END
    END
END UNTIL SHARE:ID = SLID

IF SC <> 0 THEN
 DO
   FMPERFORM REVISE SHARE SLID (0, 0, ERRORTEXT)
    DO
     SET SERVICE:(SC) TO 0
    END
 END
END

PRINT TITLE="REVISE SHARE"
SUPPRESSNEWLINE
END
`+ CODEEND + `

### Card Creation Wizard using NEXT
`+ CODESTART + `
Your parameters control how the next card number is determined. See Card Number Format field in the Card Creation Wizard Parameters.
FMPERFORM CREATE CARD AFTERLAST (0,40,FMERROR) 
   DO 
    SET TYPE TO 40
    SET NAMETYPE TO 1
    SET NUMBER TO "NEXT"
   END 
FMPERFORM CREATE CARD AFTERLAST (0,40,FMERROR) 
   DO 
    SET TYPE TO 40
    SET NAMETYPE TO 1
    SET NUMBER TO "NEXT:567"
   END 
`+ CODEEND + `

### Create Loan Rate Change Record
`+ CODESTART + `
Batch 
        ACCOUNT <Account#> CREATE LOAN <LoanID> RATECHANGE LOC <Locator#> 
         SET <FieldMnemonic> TO <NewValue>
Demand 
      FMPERFORM CREATE LOAN <LoanID> RATECHANGE LOC <Locator#> (<CheckPrivilegesFlag>,<DefaultType>,[NewLoc,][NewID,]<ErrorText>)
      DO
      SET <FieldMnemonic> TO <NewValue>
      SET <FieldMnemonic> TO <NewValue>
      END
`+ CODEEND
)
powerOnFunctions.set("format", `
# FORMAT
---
This function converts a numeric value to a predefined pattern of characters. It is used for printing or handling numeric data to control the formatting of digits, including the placement of commas and the suppression of leading zeros.

### Syntax
`+ CODESTART + `
FORMAT(CharacterExpression,Expression)
`+ CODEEND + `

### Arguments
  * CharacterExpression
    - The desired format of the data. You can use character variables or any character expression
  * Expression
    - Value or expression that evaluates to a number

### Usage Information 
  - Use only in the SETUP, SELECT, SORT, PRINT, LETTER, or TOTAL divisions or in a procedure called by those divisions 
  - The value of the expression is the numeric value that you want to reformat 
  - Allow sufficient placeholders in the character expression 
  - Use anywhere that character data is allowed 
  - 9 (nine) is a required placeholder for a digit (leading zeros are not suppressed) 
  - \`\`\`#\`\`\` (number sign) is an optional placeholder for a digit (suppresses leading zeros ) 
  - \`\`\`+\`\`\` (plus sign) is a placeholder for the negative sign; use as many as you want; blank for positive numbers, preceded by a - (negative sign) for negative numbers 
  - \`\`\`,\`\`\` (comma) is an optional placeholder for the hundredths, thousands, etc., and they are replaced with a blank when found to the left of the first non-suppressed digit; commas to the right of the first non-suppressed digit are displayed 
  - Use the slash (/) and any other characters you want to embellish the result 
  - \`\`\`*\`\`\` (asterisk) results when there are more digits in the expression than placeholders in the character expression 
  - Cannot print a floating point value in fewer than nine characters or more than 23 characters 
  - Always displays the date with a two-digit year and forward slashes for dates in or before 1979 or after 2078 
  - Cannot use Audio Access Code 
  - You can use character data in quotes for the character expression or you can use character variables

***Tip:*** This function is particularly useful for formatting data you want to download to a PC or write to tape and send to an outside data processor.

#### About Monetary Formats
All monetary amounts are treated as a generic series of digits; the decimal point, comma, and dollar sign have no special meaning.

For example, if the share balance is $2,572.95, PowerOn treats it as the series of digits: 257295.

`+ CODESTART + `PRINT FORMAT("99999.99",SHARE:BALANCE)` + CODEEND + `    02572.95

`+ CODESTART + `PRINT FORMAT("99.99999",SHARE:BALANCE)` + CODEEND + `   02.57295

`+ CODESTART + `PRINT FORMAT("99999999.99",SHARE:BALANCE)` + CODEEND + ` 00002572.59

#### About Date Formats
Dates containing four 9s or #s are treated as a series of digits in the form MMDD and then placed in the result.

Dates containing six 9s or #s are treated as a series of digits in the form MMDDYY and will replace any slash (/) characters between the fourth and fifth digits with an asterisk (*) if the date is in the 21st century.

Dates containing seven 9s or #s are treated as a series of digits in the form MMDDXYY, in which X represents 0 for the 20th century and 1 for the 21st century.

Dates containing eight or more 9s or #s are treated as a series of digits in the form MMDDCCYY, in which CC represents 19 for the 20th century and 20 for the 21st century.

This table shows the results of each format statement for the specified date values.

Code                                 Date                       Value Result
                                     Two examples are given for each format statement:
                                       * pre-1950
                                       * After 1979

FORMAT("99/99/9999",NAME:BIRTHDATE)    * 02/03/1935             02/03/1935
                                       * 02/03/1955             02/03/1955

FORMAT("#9/99/9999",NAME:BIRTHDATE)    * 02/03/1935             2/03/1935
FORMAT("#9/#9/9999",NAME:BIRTHDATE)    * 02/03/1955             2/03/1955
You can only suppress the leading zero 
in the month; the day always prints 
two digits.

FORMAT("99/99/99",NAME:BIRTHDATE)      * 02/03/1935             02/03/35
Without a 4-digit year, the end result * 02/03/1955             02/03/55
could be confusing to a user.

FORMAT("99999999",NAME:BIRTHDATE)      * 02/03/1935             02031935
                                       * 02/03/1955             02031955

FORMAT("999999",NAME:BIRTHDATE)        * 02/03/1935             020335
Without a 4-digit year, the end result * 02/03/1955
could be confusing to a user.

FORMAT("99/99",NAME:BIRTHDATE)         * 02/03/1935             02/03
Without formatting the year, the end   * 02/03/1955
result is always month and day.

PRINT FORMAT("#9",(MONTH(NAME:BIRTHDATE)))       * 02/03/1935    2/1935
PRINT "/"                                        * 02/03/1955    2/1955
PRINT FORMAT("9999",(FULLYEAR(NAME:BIRTHDATE))) 
To format the year without a day, you must 
format the month and year separately. The
leading zero is suppressed by the # placeholder.
 
FORMAT("9999999",NAME:BIRTHDATE)        * 02/03/1935             0203035
The century value of 0 represents the   * 02/03/1955             0203055
20th century, and a value of 1 
represents the 21st century.

#### Share Balance Examples
Format examples and results:

Code                                      Share Balance          Prints
FORMAT("99999999.99",SHARE:BALANCE)       * $ 2,572.59           00002562.59

FORMAT("###,###,##9.99+",SHARE:BALANCE)   * -6.50                6.50-
                                          * 20000.00             20,000.00

PRINT FORMAT("99999.99",SHARE:BALANCE)    * 257295               02572.95

FORMAT("99.99999",SHARE:BALANCE)          * 257295               02.57295


DEFINE                                  * $26,752.95           2.95
BALANCETEXT=CHARACTER
END
PRINT TITLE="Test Format"
BALANCETEXT=FORMAT("###,##9.99+",SHARE:BALANCE)
PRINT SEGMENT(BALANCETEXT,7,10)
END

FORMAT("#,##9.99+",SHARE:BALANCE)         * $26,572.95           *,***.***
Not enough placeholders to accommodate the amount

#### System Date Example
Prints the date in MM/DD/YY format without changing the second slash to an asterisk for dates occurring during or after the year 2000. Our example is using a system date of April 5, 2022.

Code                                         	Result
...
PRINT TITLE="Settlement Report as of "      Settlement Report as of 04/05/22
FORMAT("99/99/99",SYSTEMDATE)
...  

#### Loan Interest Rate Example
Rates are treated as a series of digits that include thousandths of a percent.

Code	                                   Result
FORMAT("999.999",LOAN:INTERESTRATE)      012.500
FORMAT("9.9999",LOAN:INTERESTRATE)       1.2500

#### Extended Loan Interest Rate Example
`+ CODESTART + `
TARGET=LOAN

SELECT
 ACCOUNT:CLOSEDATE='-/-/-' AND
 LOAN:CLOSEDATE='-/-/-' AND
 LOAN:INTERESTRATE>0.000% AND
 LOAN:INTERESTRATE<10.000%
END [SELECT]

PRINT TITLE="INTERESTRATES.XXX"
 PRINT ACCOUNT:NUMBER+","
 PRINT LOAN:ID+","
 PRINT FORMAT("99.999%",LOAN:INTERESTRATE)
 NEWLINE
END [PRINT]
`+ CODEEND + `

#### Float Variable Example
Format example and result for a FLOATVARIABLE of FLOATVAL=0.04567:

Code                                          	Result
FORMAT("#######################",FLOATVAL)      +4.567000000000000E-002

#### Extended Float Example
`+ CODESTART + `
TARGET=LOAN

SELECT
 ACCOUNT:CLOSEDATE='-/-/-' AND
 LOAN:CLOSEDATE='-/-/-' AND
 LOAN:INTERESTRATE>0.000% AND
 LOAN:INTERESTRATE<10.000%
END [SELECT]

PRINT TITLE="INTERESTRATES.XXX"
 HEADERS
  COL=001 "ACCT NUM"
  COL=012 "LNID"
  COL=017 "INT RATE"
  NEWLINE
  COL=001 REPEATCHR("-",39)
 END [HEADERS]
 COL=001 ACCOUNT:NUMBER
 COL=012 LOAN:ID
 COL=017 FORMAT("#######################",FLOAT(LOAN:INTERESTRATE))
 NEWLINE
END [PRINT]
`+ CODEEND
)
powerOnFunctions.set("ftpclose", `
# FTPCLOSE
---
This function closes an FTP session.

### Syntax
`+ CODESTART + `
FTPCLOSE(Handle,ErrorText)
`+ CODEEND + `

### Arguments
  * Handle
    - GETHANDLE
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

### Example
`+ CODESTART + `
FTPCLOSE(GETHANDLE,FERRORTEXT)
`+ CODEEND + `

### Usage Information
  * Must be preceded by FTPOPEN
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
`)
powerOnFunctions.set("ftpcmd", `
# FTPCMD
---
This function sends a command directly to the FTP server and receives the response.

### Syntax
`+ CODESTART + `
FTPCMD(Handle,Command,ErrorText)
`+ CODEEND + `

### Arguments
  * Handle
    - GETHANDLE
  * Command
    - Limited to the following:
      * ascii
      * passive off
      * passive on
      * binary
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

### Example
`+ CODESTART + `
FTPCMD(HANDLE,"ascii",FTPERROR)
`+ CODEEND + `

### Usage Information
  * Used in conjunction with FTPOPEN and FTPCLOSE
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
`)
powerOnFunctions.set("ftpget", `
# FTPGET
---
This function retrieves a file from the FTP server.

### Syntax
`+ CODESTART + `
FTPGET(Handle,SourceFileName,DestFileType,DestFileName,ErrorText)
`+ CODEEND + `

### Arguments
  * Handle
    - GETHANDLE
  * SourceFileName
    - Specifies the name of file to copy
  * DestinationFileType
    - You cannot use wildcard characters.
  * DestinationFileName
    - Specifies the file type of the file to use on the local computer
  * ErrorText
    - Specifies the name of the file to use on the local computer	Define a character variable to be updated during processing. If an error occurs while it attempts to open the file list, that variable will be updated with a short error message. If there are no errors, that variable is blank.

### Example
`+ CODESTART + `
FTPGET (GETHANDLE,"HELLOWORLD.TEST","SPECFILE",NEWFNAME,FERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Used in conjunction with FTPOPEN and FTPCLOSE
  * Fails after a 10 minute timeout
`)
powerOnFunctions.set("ftplogin", `
# FTPLOGIN
---
This function logs a user into the FTP server.

### Syntax
`+ CODESTART + `
FTPLOGIN(Handle,UserName,Password,ErrorText)
`+ CODEEND + `

### Arguments
  * Handle
    - GETHANDLE
  * UserName
    - Specifies a user name to use to log on to the remote computer
  * Password
    - Specifies the password for User name
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

### Example
`+ CODESTART + `
FTPLOGIN(HANDLE,"jdoe","abc123",FERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Used in conjunction with FTPOPEN and FTPCLOSE
`)
powerOnFunctions.set("ftpopen", `
# FTPOPEN
---
This function opens a connection to a remote FTP server.

### Syntax
`+ CODESTART + `
FTPOPEN(RemoteHost,Handle,ErrorText)
`+ CODEEND + `

### Arguments
  * RemoteHost
    - Specifies the remote computer you want to connect to
    - ***Important:***
    - To use secure FTP transfer, use the exact host name as in the /SYM/CONFIGURE/ftpsites.properties file. In addition, when using SFTP, the value entered must include the port number, preceded by a colon (:). The port number can default for FTPS.
    
    - If there is an error in your setup to transmit files securely via SFTP or FTPS, or if your transmission does not reference the exact name for REMOTEHOST in the configuration file, the transmission still occurs, but it transmits via a non-secure connection. This allows non-secure transmissions to continue without requiring changes to existing methods.
    
    - To ensure that your transmission is sent through a secure connection, check the /SYM/ONHOST/log/TransferFiles.log file. Use the following command and look for the "protocol=" portion to see if the transmission used FTP, SFTP, or FTPS: grep "site info: FtpSiteInfo"/SYM/ONHOST/log/TransferFiles.log. Only SFTP and FTPS are secure.
  * Handle
    - GETHANDLE
  * ErrorText
    - A defined character variable; if an error occurs while processing the command, the variable is updated with a short error message; If there are no errors, the variable is blank

### Example
`+ CODESTART + `
FTPOPEN(HOST,HANDLE,OPENERROR)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Use before FTPCLOSE
`)
powerOnFunctions.set("ftpput", `
# FTPPUT
---
This function moves a file to the FTP server.

### Syntax
`+ CODESTART + `
FTPPUT(Handle,SourceFileType,SourceFileName,DestFileName,ErrorText)
`+ CODEEND + `

### Arguments
  * Handle
    - GETHANDLE
  * SourceFileType
    - Specifies the file type of the remote file to copy
  * SourceFileName
    - Specifies the name of the file you want to move
  * DestinationFileName
    - Specifies the name of the file to use on the local computer
  * ErrorText
    - Define a character variable to be updated during processing. If an error occurs while it attempts to open the file list, that variable will be updated with a short error message. If there are no errors, that variable is blank.

### Example
`+ CODESTART + `
FTPPUT(HANDLE,"LETTER","notepad.txt","/Public/notepad.txt",ERROR)
`+ CODEEND + `

### Usage Information 
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Used in conjunction with FTPOPEN and FTPCLOSE
  * Fails after a 10 minute timeout
`)
powerOnFunctions.set("fullyear", `
# FULLYEAR
---
This function returns a numerical value (from 1900-2078) equivalent to the four-digit year in a date expression.

### Syntax
`+ CODESTART + `
FULLYEAR(expression)
`+ CODEEND + `

### Example
`+ CODESTART + `
FULLYEAR(BEGINDATE)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP, SELECT, SORT, PRINT, LETTER, or TOTAL divisions or in a procedure called by those divisions
  * Generally used in a field or a date variable
  * Results in a numeric value from 1900-2078

### Extended Example
`+ CODESTART + `
TARGET=NAME
 
SELECT
   FULLYEAR(NAME:BIRTHDATE)=1950
END
 
SORT
...
`+ CODEEND
)
powerOnFunctions.set("getdatachar", `
# GETDATACHAR
--- 
This function instructs PowerOn to retrieve the current value of an accessible character field in the Parameter or Console file. GETDATACHAR and GETDATACHARACTER are equivalent keywords.

### Syntax
`+ CODESTART + `
GETDATACHAR(InfoCode,Type1,Type2,Type3,Type4)
`+ CODEEND + `

### Arguments
  * InfoCode
    - Number that identifies the field you want to access
  * Types 1-4
    - Specific to the fields you want to access

***Tip:*** RD.GETDATA.DEF redefines the info codes for all accessible fields to mnemonic constants. Include RD.GETDATA.DEF in the DEFINE division of your specfile to use these mnemonics.

### Example
`+ CODESTART + `
GETDATACHAR(GETPARAMAPPTRKUSERDEF,12,GETINFOUSERAMOUNT3)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP, LETTER, PRINT, or TOTAL divisions or in a procedure called by one of these divisions
  * Use to read accessible parameter or console character fields

The first argument in parentheses after GETDATACHAR is the info code. The info code is a number that identifies the field you want to access. The PowerOn library has an include specfile named RD.GETDATA.DEF that redefines the info code numbers for all accessible fields as easy-to-remember constant names. By including this specfile in the DEFINE division of your own specfile, you can use those constants to access the fields.

In the parentheses after the info code, you must include from one to four additional arguments that further define the data you want to access. The additional arguments are very specific to the field you want to access.

The following example shows the specific syntax to use for accessing the GL Translation GL Account in the Parameter file:
`+ CODESTART + `
GETDATACHAR(GETPARAMGLTRANSLATEGLACCT,GL
code,translation type)
`+ CODEEND + `

This field requires three arguments: the constant name, the GL code, and the translation type. To use this function in a specfile, replace the GL code with a numeric expression with a value in the range 0-99, and replace the translation type with a numeric expression for the appropriate translation.

### Delinquent Notice Example
The following example prints the text defined for delinquent notice 3. GETPARAMDQNOTICELINEx (where x is the line number 1-4) is the constant name defined in the RD.GETDATA.DEF PowerOn specfile for the parameter that contains the text for a particular line of a particular DQ notice. The second argument specifies the DQ notice type, and the third argument indicates the DQ notice number.
`+ CODESTART + `
TARGET=ACCOUNT
 
DEFINE
   #INCLUDE "RD.GETDATA.DEF"
   LINENUM=NUMBER
END

PRINT TITLE="Delinquent Notice 3"

   LINENUM=1
   WHILE (LINENUM<=4)
    DO
     PRINT GETDATACHAR(GETPARAMDQNOTICELINE1,3,NOTICENUM)
     NEWLINE
     LINENUM=LINENUM+1
    END
END
`+ CODEEND
)
powerOnFunctions.set("getdatadate", `
# GETDATADATE
---
This function retrieves the current value of an accessible date field in the Parameter or Console file.

### Syntax
`+ CODESTART + `
GETDATADATE(InfoCode,Type1,Type2,Type3,Type4)
`+ CODEEND + `

### Arguments
  * InfoCode
    - Number that identifies the field you want to access
  * Types 1-4
    - Specific to the fields you want to access

***Tip:*** RD.GETDATA.DEF redefines the info codes for all accessible fields to mnemonic constants. Include RD.GETDATA.DEF in the DEFINE division of your specfile to use these mnemonics.

### Example
`+ CODESTART + `
GETDATADATE(GETUSERPASSWORDFMDATE,45)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP, LETTER, PRINT, or TOTAL divisions or in a procedure called by one of these divisions

The first argument in parentheses after GETDATADATE is the info code. The info code is a number that identifies the field you want to access. The PowerOn library has an include specfile named RD.GETDATA.DEF that redefines the info code numbers for all accessible fields as easy-to-remember constant names. By including this specfile in the DEFINE division of your own specfile, you can use those constants to access the fields.

In the parentheses after the info code, you must include from one to four additional arguments that further define the data you want to access. The additional arguments are very specific to the field you want to access.

The following example shows the specific syntax to use for accessing the User Last Password FM Date in the User file:
`+ CODESTART + `
GETDATADATE(GETUSERPASSWORDFMDATE,User Number)
`+ CODEEND + `
This field requires only two arguments: the constant name and the user number. To use this function in a specfile, replace the user number argument with a numeric expression that has a value in the range 0-799.

Last Password Change Example
The following example displays the date of the last password change for the user running this on-demand specfile:
`+ CODESTART + `
TARGET=ACCOUNT

DEFINE
   #INCLUDE "RD.GETDATA.DEF"
END

PRINT TITLE="Last Pswd Change Date"
   PRINT "Welcome to "
   PRINT GETDATADATE(GETUSERPASSWORDFMDATE,
                    SYSUSERNUMBER)
   NEWLINE
END
`+ CODEEND
)
powerOnFunctions.set("getdatamoney", `
# GETDATAMONEY
---
This function retrieves the current value of an accessible monetary field in the Parameter or Console file.

### Syntax
`+ CODESTART + `
GETDATAMONEY(InfoCode,Type1,Type2,Type3,Type4)
`+ CODEEND + `

### Arguments
  * InfoCode
    - Number that identifies the field you want to access
  * Types 1-4
    - Specific to the fields you want to access

***Tip:*** RD.GETDATA.DEF redefines the info codes for all accessible fields to mnemonic constants. Include RD.GETDATA.DEF in the DEFINE division of your specfile to use these mnemonics.

### Example
`+ CODESTART + `
GETDATAMONEY(GETPARAMLATECHGMIN,4)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP, LETTER, PRINT, or TOTAL divisions or in a procedure called by one of these divisions

PowerOn does not have full access to the Parameter or Console file. However, you can use the GETDATAMONEY function to read the money fields that are accessible.

The first argument in parentheses after GETDATAMONEY is the info code. The info code is a number that identifies the field you want to access. The PowerOn library has an include specfile named RD.GETDATA.DEF that redefines the info code numbers for all accessible fields as easy-to-remember constant names. By including this include specfile in the DEFINE division of your own specfile, you can use those constants to access the fields.

In the parentheses after the info code, you must place from one to four additional arguments that further define the data you want to access. The additional arguments are very specific to the field you want to access.

The following example shows the specific syntax to use for accessing the payment calculation balance cutoff in the Parameter file:
`+ CODESTART + `
GETDATAMONEY(GETPARAMPAYCALCCUTOFF,Payment Calculation,Table Entry)
`+ CODEEND + `
This field requires three arguments, the constant name, the payment calculation code, and the table entry number.

To use this function in a specfile, replace the payment calculation with a numeric expression in the range 1-9, and replace the table entry with a numeric expression in the range 1-50.

### Extended Example
The following on-demand specfile displays the items in the payment calculation balance cutoff table for payment calculation 2:
`+ CODESTART + `
TARGET=ACCOUNT
 
DEFINE
   #INCLUDE "RD.GETDATA.DEF"
   TABLEENTRY=NUMBER
END
 
PRINT TITLE="Paymt Calc2 Balance Cutoff Table"
   TABLEENTRY=1
   WHILE (TABLEENTRY<=50)
    DO
     PRINT GETDATAMONEY(GETPARAMPAYCALCCUTOFF,2,TABLEENTRY)
     NEWLINE
     TABLEENTRY=TABLEENTRY+1
    END
END
`+ CODEEND + `
Result displays the items in the payment calculation balance cutoff table for payment calculation 2.
`)
powerOnFunctions.set("getdatanumber", `
# GETDATANUMBER
---
This function retrieves the current value of an accessible number field in the Parameter or Console files.

### Syntax
`+ CODESTART + `
GETDATANUMBER(InfoCode,Type1,Type2,Type3,Type4)
`+ CODEEND + `

### Arguments
  * InfoCode
    - Number that identifies the field you want to access
  * Types 1-4
    - Specific to the fields you want to access

***Tip:*** RD.GETDATA.DEF redefines the info codes for all accessible fields to mnemonic constants. Include RD.GETDATA.DEF in the DEFINE division of your specfile to use these mnemonics.

### Example
`+ CODESTART + `
GETDATANUMBER(GETPARAMDIVIDEFGRACEDAYS,2,10)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP, LETTER, PRINT, or TOTAL divisions or in a procedure called by one of these divisions

PowerOn does not have full access to the Parameter or Console files. However, you can read those number and code fields that are accessible using the GETDATANUMBER function.

The first argument in parentheses after GETDATANUMBER is the info code. The info code is a number that identifies the field you want to access. The PowerOn library has an include specfile named RD.GETDATA.DEF that redefines the info code numbers for all accessible fields as easy-to-remember constant names. By including this include specfile in the DEFINE division of your own specfile, you can use those constants to access the fields.

In the parentheses after the info code, you must place from one to four additional arguments that further define the data you want to access. The additional arguments are very specific to the field you want to access.

The following example shows the specific syntax to use for accessing the user security privileges in the User file:
`+ CODESTART + `
GETDATANUMBER(GETUSERPRIVILEGE,User Number,Privilege Number)
`+ CODEEND + `
This field requires three arguments: the constant name, the user number, and the privilege number. To use this function in a specfile, replace the user number with a numeric expression in the range 1-4999, and replace the privilege number with a numeric expression in the range 1-1800. GETDATANUMBER returns 1 if the user has the specified security privilege; it returns 0 if the user does not have the specified security privilege.

### Verify Security Privilege Example
In the following example, the user running this on-demand PowerOn specfile can check on a specific security privilege for a specific user:
`+ CODESTART + `
TARGET=ACCOUNT

DEFINE
   #INCLUDE "RD.GETDATA.DEF"
   USERNUM=NUMBER
   PRIV=NUMBER
END

SETUP
   USERNUM=ENTERNUMBER("Enter User Number:",799)
   PRIV=ENTERNUMBER("Enter Privilege Number:",1)
END

PRINT TITLE="User Privilege"
   PRINT "User #:"
   PRINT USERNUM
   PRINT "     Privilege:"
   PRINT PRIV
   PRINT "     Allowed:"
   PRINT GETDATANUMBER(GETUSERPRIVILEGE,USERNUM,PRIV)
   NEWLINE
END
`+ CODEEND
)
powerOnFunctions.set("getdatarate", `
# GETDATARATE
---
This function retrieves the current value of an accessible rate field in the Parameter or Console file.

### Syntax
`+ CODESTART + `
GETDATARATE(InfoCode,Type1,Type2,Type3,Type4)
`+ CODEEND + `

### Arguments
  * InfoCode
    - Number that identifies the field you want to access
  * Types 1-4
    - Specific to the fields you want to access

***Tip:*** RD.GETDATA.DEF redefines the info codes for all accessible fields to mnemonic constants. Include RD.GETDATA.DEF in the DEFINE division of your specfile to use these mnemonics.

### Example
`+ CODESTART + `
GETDATARATE(GETPARAMDISCINSRATE,2)
`+ CODEEND + `

### Usage Information
  * Use in the SETUP, LETTER, or PRINT divisions or in procedures called from those divisions

PowerOn does not have full access to the Parameter or Console file. However, you can read those rate fields that are accessible using the GETDATARATE function.

The first argument in parentheses after GETDATARATE is the info code. The info code is a number that identifies the field you want to access. The PowerOn library has an include specfile named RD.GETDATA.DEF that redefines the info code numbers for all accessible fields as easy-to-remember constant names. By including this specfile in the DEFINE division of your own specfile, you can use those constants to access the fields.

In the parentheses after the info code, you must place from one to four additional arguments that further define the data you want to access. The additional arguments are very specific to the field you want to access.

The following example shows the specific syntax to use for accessing the payment calculation interest rate cutoff in the Parameter file:
`+ CODESTART + `
GETDATARATE(GETPARAMPAYCALCINTRATECUT,Payment Calculation,Table Entry)
`+ CODEEND + `
This field requires three arguments: the constant name, the payment calculation code, and the table entry number. To use this function in a specfile, replace the payment calculation with a numeric expression in the range 1-9, and replace the table entry with a numeric expression in the range 1-50.

### Extended Example
The following on-demand PowerOn specfile displays the items in the payment calculation interest cutoff table for payment calculation 2:
`+ CODESTART + `
TARGET=ACCOUNT

DEFINE
   #INCLUDE "RD.GETDATA.DEF"
   TABLEENTRY=NUMBER
END

PRINT TITLE="Paymt Calc2 IntRate Cutoff Table"
   TABLEENTRY=1
   WHILE (TABLEENTRY<=50)
    DO
     PRINT GETDATARATE(GETPARAMPAYCALCINTRATECUT,2,TABLEENTRY)
     NEWLINE
     TABLEENTRY=TABLEENTRY+1
    END
END
`+ CODEEND
)
powerOnFunctions.set("header", `
# HEADER
---
This function defines a single line of column headings and their horizontal placement for PowerOn.

### Syntax
`+ CODESTART + `
HEADER="expression"
`+ CODEEND + `

### Example
`+ CODESTART + `
HEADER="Account #     Loan ID    Balance      Interest Due"
`+ CODEEND + `

### Usage Information
  * Use only in the PRINT or TOTAL division or in a procedure called by those divisions
  * The maximum value is 132 characters
  * Use spaces, not tabs, to align columns
  * Cannot be used with the FOR EACH, ANY, or TOTAL= statements
  * Do not use the FOR … DO … END statement to repeat letters, numbers or special characters. The loop variable cannot be reused consistently since the loop variable is still specific to the HEADERS subsection. We recommend that you use the REPEATCHR() function to avoid unexpected output.
  * Cannot be used with LABELS print option
  * Cannot be used with HEADERS or TRAILERS
  * Cannot use field references as part of the expression
  * When using IF...THEN... must also use ELSE; results must be a CHARACTER data type.
  * Specfiles without HEADER= line or a HEADERS section in the PRINT division will not have any of the following output elements:
    - A title line at the top
    - A column heading line
    - A form feed at the end of the report
    - Page breaks

***Tip:***
  * Use multiple HEADER statements to create a stacked heading. Use HEADER after each subtotal as a trailer, and after the last HEADER listed at the end of the report.
  * Use HEADER= to suppress the headings from the TOTAL division by using HEADER= lines instead of a HEADER division.

### Character Literal Example
`+ CODESTART + `
PRINT  TITLE="Overdraw Transfers"
   HEADER="Acct #               Share ID     Share Type
     Xfer Type      Xfer ID Type     Xfer ID"
   HEADER="-------------------------------------------
  ------------------------------------------"
...
`+ CODEEND + `
This specification results in the column headings and underline in the following example:
\`\`\`
XYZ Credit Union                  Overdraw Transfers                09/05/96 10:40 Seq 5643 Page 1
 
Acct #               Share ID     Share Type     Xfer Type      Xfer ID Type     Xfer ID
----------------------------------------------------------------------------------------
\`\`\`

***Tip:*** Instead of letting the text wrap, break the line after the word nearest to column 80, and continue the text on the next line. The text editor cuts off all trailing spaces at the end of a line. To accommodate any blank spaces you want place between two words near column 80, put the blank spaces on the next line of text so that they become leading spaces. Remember to place the end quote at the end of the continuation. Only indent the continuation line if you want spaces to appear; literal text prints exactly as it appears in the specfile.
In the sample specfile above, notice that the text of the header breaks at the end of Share Type on line 11. Place the spaces that you need between Share Type and Xfer Type as leading spaces on line 12 in front of Xfer Type. If you leave those spaces on line 11 (after Share Type) the text editor will eliminate them, and Xfer Type will print immediately following Share Type.

### IF...THEN...ELSE Example
The following example shows how to use IF...THEN...ELSE with HEADER= to vary the heading based on the month:
`+ CODESTART + `
HEADER=IF MONTH(SYSTEMDATE)<=3 THEN
    "First Quarter Jan-Mar"
   ELSE IF MONTH(SYSTEMDATE)<=6 THEN
    "Second Quarter Apr-Jun"
   ELSE IF MONTH(SYSTEMDATE)<=9 THEN
    "Third Quarter Jul-Sep"
   ELSE
    "Fourth Quarter Oct-Dec"
`+ CODEEND + `

### Different Total Header Example
The next example changes the column headings before printing the totals:
`+ CODESTART + `
TARGET=ACCOUNT

PRINT TITLE="Headers Redefinition Example"
   HEADER="Account          Name          Phone #"
   HEADER="                 ---------------------"
  
    print division statements go here
   ...
END

TOTAL
   HEADER="Account Type          Count"
   HEADER="                      -----"

    total division statements go here
   ...
END
`+ CODEEND + `

### Extended Example
The next example demonstrates using HEADER= to eliminate header lines in the TOTAL division and force the Summary Report to the last page. See HEADER on lines 42-45.
`+ CODESTART + `
TARGET=LOANS

DEFINE
    LOWTYPE=NUMBER
    HIGHTYPE=NUMBER
    PASTDUEDATE=DATE

    PASTDUETOTOTALRATIO=RATE
    PASTDUEBAL=MONEY
    TOTALBAL=MONEY1   TOTALCOUNT=NUMBER
    DQCOUNT=NUMBER
    CRCOUNT=NUMBER

    HDG1=CHARACTER(78)
    HDG2=CHARACTER(78)
    HDG3=CHARACTER(78)
    HDG4=CHARACTER(78)

END
 
SETUP
    LOWTYPE=NUMBERREAD("Enter lowest Loan Type:")
    HIGHTYPE=NUMBERREAD("Enter highest Loan Type:")
    PASTDUEDATE=DATEREAD("Enter a past due date") 
 
    HDG1="Loan Types Selected: "+FORMAT("#9",LOWTYPE)+" to "+FORMAT("#9",HIGHTYPE)
    HDG2=""
    HDG3="Account # Member's Name   Type  Status   Due Date  Last Paymt   Balance"  
    HDG4=REPEATCHR("-",78)
END

SELECT
    ACCOUNT:CLOSEDATE='--/--/--' AND 
    LOAN:BALANCE>$0.00 AND 
   (LOAN:ORIGINALBALANCE>$500.00  OR
    LOAN:CREDITLIMIT>$500.00) AND
   (LOAN:TYPE>=LOWTYPE AND 
    LOAN:TYPE<=HIGHTYPE)
END
  
PRINT TITLE="DQ AS OF "+FORMAT("#9/#9/9999",PASTDUEDATE)
    HEADER=HDG1
    HEADER=HDG2
    HEADER=HDG3
    HEADER=HDG4
    COL=001 ACCOUNT:NUMBER
    COL=012 NAME:SHORTNAME
    COL=031 LOAN:TYPE
    IF  PASTDUEDATE>LOAN:DUEDATE    AND 
        LOAN:DUEDATE<>'--/--/--'    THEN
      DO
        COL=035         "Delinquent"
        PASTDUEBAL=PASTDUEBAL+LOAN:BALANCE 
        DQCOUNT=DQCOUNT+1
      END
    ELSE
      DO
        COL=035         "Current   "
       CRCOUNT=CRCOUNT+1
      END
    COL=053  LOAN:DUEDATE 
    COL=064  LOAN:LASTPAYMENTDATE 
    COL=078  LOAN:BALANCE  
    TOTALBAL=TOTALBAL+LOAN:BALANCE 
    TOTALCOUNT=TOTALCOUNT+1
    NEWLINE
END                               [END PRINT SECTION] 
 
TOTAL                             [NO ACCESS TO DATABASE FILES]
    NEWPAGE                         
    HDG1=""
    HDG2=""
    HDG3=""
    HDG4=""
    PRINT "Total Current Loans:"
    COL=050 CRCOUNT  
    NEWLINE 
    PRINT "Total Delinquent Loans:"
    COL=050 DQCOUNT  
    NEWLINE                               
    PRINT "Total Loans:"
    COL=050 TOTALCOUNT
    NEWLINE NEWLINE
  
    PRINT "Total Loan Balance, Delinquent Loans:"
   COL=050 PASTDUEBAL
    NEWLINE NEWLINE
   
    PRINT "Total Loan Balance, All Loans:"
    COL=050 TOTALBAL
    NEWLINE NEWLINE
 
    PASTDUETOTOTALRATIO=PASTDUEBAL/TOTALBAL 
    PRINT "DG Loan Ratio:      "
    COL=050 PASTDUETOTOTALRATIO
    NEWLINE NEWLINE
    
END                               [END TOTAL SECTION]
`+ CODEEND
)
powerOnFunctions.set("headers", `
# HEADERS
---
This function marks the beginning of a subsection of output and precedes print statements that create column headings for that subsection.

### Syntax
`+ CODESTART + `
HEADERS
 statements
END
`+ CODEEND + `

### Example
`+ CODESTART + `
HEADERS
  PRINT "Account Number"
  NEWLINE
END
`+ CODEEND + `

### Usage Information
  * Use only in the PRINT or TOTAL division
  * Separate each set of statements that creates a line of column headings using NEWLINE
  * The printed heading cannot be longer than 132 characters
  * Do not use the FOR EACH statement, ANY, or TOTAL= with HEADERS
  * Do not use the FOR … DO … END statement to repeat letters, numbers or special characters. The loop variable cannot be reused consistently since the loop variable is still specific to the HEADERS subsection. We recommend that you use the REPEATCHR() function to avoid unexpected output.
  * Do not use HEADERS with LABELS
  * You can use statements in the HEADERS subsection
  * The statements appearing between HEADERS and END create column headings to print on each page. Use any statement to create the column headings in the HEADERS subsection.
  * Use HEADERS at the beginning of the PRINT division to set up the initial column headings. You can change the column headings by inserting another HEADERS section in another part of the PRINT division, the TOTAL division, or in a procedure. The new headings take effect on the next page of the report. If you want the new headings to take effect immediately, use the NEWPAGE statement to force PowerOn to go to the next page of the report.
  * You can use an optional TRAILERS subsection with HEADERS to create a line of characters that the system prints at the bottom of the last page and after each subtotal. See the TRAILERS keyword for more information.
  * The first two lines of the output are always the title line and a blank line. The title line has the credit union name, the TITLE of the report, the sequence number of the job, the date the report prints, and the page number. The second line is blank to separate the title line from the column headings as shown in he following example:
\`\`\`
XYZ CREDIT UNION             NEW LOAN REPORT       09/05/96 13:24  Seq 5967 Page 1
 
TYPE  | NO.    REFINANCES | NO.        ADDONS | NO.     NEW LOANS
-----------------------------------------------
0     |   1     25,000.00 |  11      1,726.27 |  11    184,875.00
1     |   1      7,867.52 |   2     10,000.00 |   3     10,500.00
2     |                   |                   |   1     10,000.00
5     |                   |                   |   1      5,000.00
67    |                   |                   |   3     15,000.00
-----------------------------------------------
TOTALS    2     32,867.52    13     11,726.27    19    225,375.00
\`\`\`
***Tip:*** Do not use a HEADER line or HEADERS section in the PRINT division when making tapes to send to outside processors. Header line and Headers sections include the following, which outside processors do not want:
  * A title line at the top
  * A column heading line
  * A form feed at the end of the report
  * Page breaks

### Four Header Lines Example
`+ CODESTART + `
PRINT TITLE="Test List"
   HEADERS
    PRINT "Date Range Entered: from "
    PRINT BEGDATE
    PRINT " to "
    PRINT ENDDATE
    NEWLINE
    NEWLINE
    PRINT "Account     Name        S ID TP       Balance
    Original Balance    Opn Date"
    NEWLINE
    PRINT "---------------------------------------------
  ------------------------------"
    NEWLINE
END
...
`+ CODEEND + `
The resulting header lines look like this:
\`\`\`
XYZ Credit Union        Title Line                 Seq 9999 10/31/96 Page 1
 
Date Range Entered: from --/--/-- to --/--/--
 
Account     Name        S ID TP       Balance  Original Balance    Opn Date
---------------------------------------------------------------------------
\`\`\`

### Two-line Column Heading Example
The following example has a two-line column heading and a one-line trailer. Notice how we place a NEWLINE statement after each line of the heading.
`+ CODESTART + `
PRINT TITLE="Test Columns"
  HEADERS
   PRINT "Account     Name     Open Date     Balance"
   NEWLINE
   PRINT "-----------------------------------------"
   NEWLINE
  END
  TRAILERS
   PRINT "-----------------------------------------"
   NEWLINE
  END
...
`+ CODEEND
)
powerOnFunctions.set("hour", `
# HOUR
---
This function returns the numerical value (from 00-23) equivalent to the hour stored in HHMM format.

### Syntax
`+ CODESTART + `
HOUR(expression)
`+ CODEEND + `

### Example
`+ CODESTART + `
HOUR(SYSACTUALTIME)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP, LETTER, PRINT, or TOTAL divisions or in a procedure called by one of these divisions
  * Must use NUMBER or CODE data type

### Extended Example
The following example uses the HOUR and MINUTE functions to display a greeting that includes the current time:
`+ CODESTART + `
TARGET=ACCOUNT
 
PRINT TITLE="Time of Day"
  NEWLINE
  NEWLINE
  IF HOUR(SYSACTUALTIME)<12 THEN PRINT "Good Morning!"
   ELSE IF HOUR(SYSACTUALTIME)<18 THEN PRINT "Good Afternoon!"
       ELSE PRINT "Good Evening!"
  NEWLINE
  NEWLINE
  PRINT "The current time is "
  IF MINUTE(SYSACTUALTIME)=0 THEN
  DO
     PRINT "Exactly "
     CALL PRINTHOUR
     PRINT " o'clock"
   END
  ELSE IF MINUTE(SYSACTUALTIME)<30 OR MINUTE(SYSACTUALTIME)>30 THEN
   DO
     PRINT MINUTE(SYSACTUALTIME)
     IF MINUTE(SYSACTUALTIME)=1 THEN PRINT " minute past "
                              ELSE PRINT " minutes past "
     CALL PRINTHOUR
   END
  ELSE IF MINUTE(SYSACTUALTIME)=30 THEN
   DO
     PRINT "half past "
     CALL PRINTHOUR
   END
END
  
PROCEDURE PRINTHOUR
  IF HOUR(SYSACTUALTIME)<13 THEN PRINT HOUR(SYSACTUALTIME)
                          ELSE PRINT HOUR(SYSACTUALTIME)-12
  IF HOUR(SYSACTUALTIME)<12 THEN PRINT " AM"
                          ELSE PRINT " PM"
END
`+ CODEEND
)
powerOnFunctions.set("hpboxdraw", `
# HPBOXDRAW
---
This function commands a laser printer to draw a box between specified coordinates with an outline of a specified width and with shading of a specified amount.

### Syntax
`+ CODESTART + `
HPBOXDRAW(X1,Y1,X2,Y2,Width,FillLevel)
`+ CODEEND + `

### Arguments
  * X1 & X2
    - X coordinates must be from 0-2400 in portrait mode or 0-3000 (3900 for legal size paper) in landscape mode
  * Y1 & Y2
    - Y coordinates must be from 0-3000 (3900 for legal size paper) in portrait mode or 0-2400 in landscape mode	
  * Width
    - Between 1 and 750
    - Draws the thickness of the box's outline
    - 300 units per inch
    - Maximum width is 750 units (line is 2.5 inches wide)
  * FillLevel
    - Between 0 and 100
    - Produces various levels of shading (grayscale) inside the box

### Example
`+ CODESTART + `
HPBOXDRAW(50,50,2350,2950,100,12)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Usable only with laser printers that accept GL2 printer commands

### Extended Example
In the following example, the specfile draws a box with a border width of 100 units (one-third of an inch) and a fill level of 12%. The printer locates the upper left corner of the box at coordinates 50,50 and locates the lower right corner at coordinates 2350,2950.
`+ CODESTART + `
PRINT TITLE="HP LaserJet Font List" 13
 HPBOXDRAW(50,50,2350,2950,100,12) 14 
 ...
`+ CODEEND
)
powerOnFunctions.set("hpesc", `
# HPESC
---
This function sends an escape sequence (a specific group of control characters that begins with the ESCAPE control character) to a laser printer.

### Syntax
`+ CODESTART + `
HPESC "escape sequence"
`+ CODEEND + `

### Example
`+ CODESTART + `
HPESC "&dD"
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions

An escape sequence is a specific group of control characters that begins with the ESCAPE control character. Control characters are nonprinting characters that the laser printer interprets as commands. The most common control character used by laser printers is ESCAPE (control character 27).

***Tip:*** Equivalent to using the PRINTCONTROL and CTRLCHR statements:
`+ CODESTART + `
PRINTCONTROL CTRLCHR(27)+escape sequence
`+ CODEEND + `

### Extended Example
In the following example, the specfile instructs the laser printer to underline the word "help". The escape sequence &dD turns underlining on, and &d@ turns underlining off.
`+ CODESTART + `
  PRINT "Your "
  HPESC "&dD"
  PRINT "help"
  HPESC "&d@"
  PRINT " is needed"
`+ CODEEND
)
powerOnFunctions.set("hpfont", `
# HPFONT
---
This function changes the type font and point size on a laser printer.

### Syntax
`+ CODESTART + `
HPFONT(FontNumber,PointSize)
`+ CODEEND + `

### Example
`+ CODESTART + `
HPFONT(34,12)
`+ CODEEND + `

### Arguments
  * FontNumber
    - A number in the range 0-44
    - ***Tip:*** Print a list of fonts by font number from RD.HPLASERFONTS.
  * PointSize
    - A number in the range 4-127
    - ***Tip:*** Twelve (12) produces normal-sized text for most fonts.

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Requires the RD.HPLASER.DEF and RD.HPLASER.SET #INCLUDE files

### Pitch and Point Size
The size of a font is specified as either a pitch or point size, depending on whether the font is fixed-space or proportional.

In fixed-space fonts, each character has the same width. Pitch is used to specify the size of fixed space fonts. It is a measure of the number of characters that will print in one horizontal inch of type. For example, all 10-pitch fonts print 10 characters per inch (cpi) and all 12-pitch fonts print 12 cpi.

In proportional (or typographic) fonts, every character can have a different width. Since proportional fonts have characters with different widths, the font size is specified in point size, not pitch.

The point size of a font is defined as the distance from the top of the tallest character in the font to the bottom of the lowest character in the font. Due to the definition of point size, different fonts printed at the same point size may appear quite different in size. For example, the characters in a font printed at 24 point will be twice as large as the characters in the same font printed at 12 point. However, the point size of a font is an excellent specification of the relative size of a font.

### Print Orientation
Depending on the orientation you select to print your report, we make the following additional recommendations:
  * In portrait mode, use Courier, 12 pitch type, 6 lines per inch. This allows 80 characters per line and 66 lines per page.
  * In landscape mode, use Courier, 17 pitch type, 8 lines per inch. This allows 132 characters per line and 66 lines per page.

### Extended Example
In the following example, the file RD.HPLASER.DEF is included in the DEFINE division. The PRINT division prints the header in Arial Bold Italic 18 point when it calls the procedure PRINTHEADER on line 9. On line 10 it changes the font to CG Times 12 point to print the body of the letter. (The full text of this specfile is in the PowerOn library as RD.HPLASERLETTER.)
`+ CODESTART + `
TARGET=ACCOUNT
  
DEFINE
   #INCLUDE "RD.HPLASER.DEF"
END

PRINT TITLE="Business Letter"

   CALL PRINTHEADER
   HPFONT(33,12)
   COL=12 LEFT SYSTEMDATE
   NEWLINE NEWLINE NEWLINE
   etc...
END
  
PROCEDURE PRINTHEADER

   HPLINEDRAW(150,3,2250,3,6)
   HPFONT(32,18)
   HPYPOS(90)
   COL=20 "X Y Z   F e d e r a l   C r e d I t   U n I o n"
...
`+ CODEEND
)
powerOnFunctions.set("hplinedraw", `
# HPLINEDRAW
---
This function commands a laser printer to draw a line of specified width between given coordinates.

### Syntax
`+ CODESTART + `
HPLINEDRAW(X1,Y1,X2,Y2,Width)
`+ CODEEND + `

### Example
`+ CODESTART + `
HPLINEDRAW(50,50,2350,2950,100)
`+ CODEEND + `

### Arguments
  * X1 & X2
    - X coordinates must be from 0-2400 in portrait mode or 0-3000 (3900 for legal size paper) in landscape mode
  * Y1 & Y2
    - Y coordinates must be from 0-3000 (3900 for legal size paper) in portrait mode or 0-2400 in landscape mode
  * Width
    - Between 1 and 750
    - Draws the thickness of the box's outline
    - 300 units per inch
    - The maximum width is 750 (line is 2.5 inches wide)

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Usable only with laser printers that accept GL2 printer commands

### Extended Example
In the following example, the specfile draws a line 6 units wide above and below the header. The printer draws the top line from coordinates 150,3 to coordinates 2250,3. The printer draws the bottom line from coordinates 150,120 to coordinates 2250,120.
`+ CODESTART + `
PROCEDURE PRINTHEADER
   
    HPLINEDRAW(150,3,2250,3,6)
    HPFONT(32,18)
    HPYPOS(90)
    COL=20 "X Y Z  F e d e r a l  C r e d i t   U n i o n"
    SUPPRESSNEWLINE
    HPLINEDRAW(150,120,2250,120,6)
    HPXPOS (0)
    HPYPOS (400)
END
`+ CODEEND
)
powerOnFunctions.set("hplinesperinch", `
# HPLINESPERINCH
---
This function commands a laser printer to change the number of lines of text that can fit into a vertical inch of space on the page.

### Syntax
`+ CODESTART + `
HPLINESPERINCH(LinesPerInch)
`+ CODEEND + `

### Arguments 
  * LinesPerInch
    - 1 = 300 units per line
    - 2 = 150 units per line
    - 3 = 100 units per line
    - 4 = 75 units per line
    - 6 = 50 units per line
    - 8 = 37.5 units per line
    - 12 = 25 units per line
    - 16 = 18.75 units per line
    - 24 = 12.5 units per line
    - 48 = 6.24 units per line

### Example
`+ CODESTART + `
HPLINESPERINCH(12)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
***Tip:***
  * Normal type size is 10 or 12 pitch, with a corresponding number of lines per inch of 6 or 8.
  * Useful if you change the type size dramatically. For example, if you print a line with 12 pitch type and change to 18 pitch type for the next line, you need to change the lines per inch so that the 18 pitch type does not overlap the bottom of the 12 pitch line. When you change the lines per inch to 4, after printing the 12 pitch line and before you move to the next line (NEWLINE), the printer moves down on the page to prevent overprinting. The NEWLINE statement uses HPLINESPERINCH to specify how far down on the page to relocate before performing the next command. SUPPRESSNEWLINE ignores the HPLINESPERINCH specification.

### Extended Example
In the following example, the procedure named PrintTextPage01 begins by setting the lines per inch to 8, and leaves two blank lines. On line 15, it changes the lines per inch to 4, in preparation for printing 16 point (lines 17 and 22) and 18 point (line 20) type. On line 34, it changes the lines per inch to 6, in preparation for printing 12 point type (lines 35 and 38).
`+ CODESTART + `
PROCEDURE PrintTextPage01
   HPLINESPERINCH(8)
   NEWLINE
   NEWLINE
   HPLINESPERINCH(4)
   NEWLINE
   HPFONT(004,16)
   HPXPOS(350)
   PRINT "Your Auto Loan Comes With "
   HPFONT(004,18)
   PRINT "FREE "
   HPFONT(004,16)
   PRINT "Road & Tow Service -"
   NEWLINE
   HPXPOS(300)
   PRINT "Sign Below To Receive An Additional $20 Worth "
   PRINT "Of FREE Gas!"
   NEWLINE
   HPXPOS(200)
   HPUNDERLINE(1)
   HPXPOS(2100)
   HPUNDERLINE(0)
   NEWLINE
   HPLINESPERINCH(6)
   HPFONT(002,12)
   HPXPOS(200)
   PRINT "1st City Savings Federal Credit Union "
   HPFONT(001,12)
   PRINT "has made special arrangements for you to "
   NEWLINE
   HPXPOS(200)
   PRINT "automatically enjoy a complimentary year-long "
   PRINT "membership in AutoVantage GOLD when you"
   NEWLINE
   HPXPOS(200)
   PRINT "receive a new or used auto loan from the "
   PRINT "credit union."
   ...
`+ CODEEND
)
powerOnFunctions.set("hpreset", `
# HPRESET
---
This function resets the printer page size (letter or legal) and print orientation (portrait or landscape) to the factory defaults for your laser printer.

### Syntax
`+ CODESTART + `
HPRESET
`+ CODEEND + `

### Example
`+ CODESTART + `
CALL PRINTFORMPAGE2
   HPRESET
  END
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Use only for specfile output to be printed on a laser printer

***Tip:*** Use HPRESET to change the printer orientation back to the factory default after changing it with HPSETUP.

### Extended Example
In the following example, line 256 calls the PRINTFORMPAGE1 procedure, which uses HPSETUP (line 581) to set the page size to letter and the orientation to portrait. Line 260 uses HPRESET to ensure that the factory defaults for page size and orientation are reset on the printer.
`+ CODESTART + `
          CALL FILEINFO

     CALL PRINTFORMPAGE1
     NEWPAGE

     CALL PRINTFORMPAGE2
     HPRESET
    END
  END


    PROCEDURE FILEINFO
      etc...

    PROCEDURE PRINTFORMPAGE1
       NONANSISTANDARD
       HPSETUP("LETTER","PORTRAIT")

                             [ PAGE 1 ]
                [************REQUEST INFORMATION**********]
                 [APP & INFO]
       HPLINESPERINCH(6)
       HPFONT(20,12)
       HPXPOS(1900)
       PRINT "APPLICATION FOR"
       NEWLINE
       HPXPOS(1930)
`+ CODEEND
)
powerOnFunctions.set("hpsetup", `
# HPSETUP
---
This function changes the printer page size (letter or legal) and print orientation (portrait or landscape).

### Syntax
`+ CODESTART + `
HPSETUP(PageSize,Orientation)
`+ CODEEND + `

### Arguments
  * PageSize
    - LETTER
    - LEGAL
  * Orientation
    - PORTRAIT
    - LANDSCAPE
    - REVPORTRAIT
    - REVLANDSCAPE

### Example
`+ CODESTART + `
HPSETUP("LEGAL","LANDSCAPE")
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Ability to change size or orientation must be an option available on your printer
  * Use only for specfile output to be printed on a laser printer

### Extended Example
`+ CODESTART + `
          CALL FILEINFO

     CALL PRINTFORMPAGE1
     NEWPAGE

     CALL PRINTFORMPAGE2
     HPRESET
    END
  END


    PROCEDURE FILEINFO
      etc...

    PROCEDURE PRINTFORMPAGE1
       NONANSISTANDARD
       HPSETUP("LETTER","PORTRAIT")

                             [ PAGE 1 ]
                [************REQUEST INFORMATION**********]
                 [APP & INFO]
       HPLINESPERINCH(6)
       HPFONT(20,12)
       HPXPOS(1900)
       PRINT "APPLICATION FOR"
       NEWLINE
`+ CODEEND
)
powerOnFunctions.set("hpunderline", `
# HPUNDERLINE
---
This function controls the underline function of the laser printer.

### Syntax
`+ CODESTART + `
HPUNDERLINE(Mode)
`+ CODEEND + `

### Arguments
Mode
  * 0 (off)
  * 1 (on)

***Tip:*** Turn the mode on (1) just before the text you want underlined; turn the mode off (0) just after the last character you want underlined.

### Example
`+ CODESTART + `
HPUNDERLINE(1)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions

### Extended Example
`+ CODESTART + `
    HPUNDERLINE(1)
    HPFONT(32,18)
     HPYPOS(90)
     COL=20 "X Y Z   F e d e r a l   C r e d i t   U n i o n"
    SUPPRESSNEWLINE
    HPUNDERLINE(0)
    etc...
`+ CODEEND + `
`)
powerOnFunctions.set("hpxpos", `
# HPXPOS
---
This function positions a laser printer at a specific horizontal axis coordinate.

### Syntax
`+ CODESTART + `
HPXPOS(Xposition)
`+ CODEEND + `

### Arguments
  * Xposition
    - X coordinates must be from 0-2400 in portrait mode or 0-3000 (3900 for legal size paper) in landscape mode

***Tip:*** There are 300 units per inch, so the range of X (horizontal) positions for letter or legal size in portrait orientation is 8 x 300, or 2400 units. The range of X positions for letter size in landscape orientation is 10 x 300, or 3000 units. The range of X positions for legal size in landscape orientation is 13 x 300, or 3900 units.

### Example
`+ CODESTART + `
HPXPOS(153)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions

### Extended Example
In the following example, the specfile draws a line of width 6 above and below a header. 
`+ CODESTART + `
   PROCEDURE PRINTHEADER
   
    HPLINEDRAW(150,3,2250,3,6)
    HPFONT(32,18)
     HPYPOS(90)
     COL=20 "X Y Z  F e d e r a l  C r e d i t   U n i o n"
    SUPPRESSNEWLINE
    HPLINEDRAW(150,120,2250,120,6)
    HPXPOS (0)
    HPYPOS (400)
   END
`+ CODEEND
)
powerOnFunctions.set("hpypos", `
# HPYPOS
---
This function positions a laser printer at a specific vertical axis coordinate.

### Syntax
`+ CODESTART + `
HPYPOS(Yposition)
`+ CODEEND + `

### Arguments
  * Yposition
    - Y coordinates must be from 0-3000 (3900 for legal size paper) in portrait mode or 0-2400 in landscape mode

### Example
`+ CODESTART + `
HYPOS(2350)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions

***Tip:*** There are 300 units per inch, so the range of Y (vertical) positions for letter size in portrait orientation is 10 x 300, or 3000 units. The range of Y positions for legal size in portrait orientation is 13 x 300, or 3900 units. The range of Y positions for letter or legal size in landscape orientation is 8 x 300, or 2400 units.

### Extended Example
In this example, the specfile draws a line of width 6 above and below a header. 
`+ CODESTART + `
   PROCEDURE PRINTHEADER
   
    HPLINEDRAW(150,3,2250,3,6)
    HPFONT(32,18)
     HPYPOS(90)
     COL=20 "X Y Z  F e d e r a l  C r e d i t   U n i o n"
    SUPPRESSNEWLINE
    HPLINEDRAW(150,120,2250,120,6)
    HPXPOS (0)
    HPYPOS (400)
   END
`+ CODEEND
)
powerOnFunctions.set("htmlviewdisplay", `
# HTMLVIEWDISPLAY
---
This function displays information in a view window using HTML commands.

### Syntax
`+ CODESTART + `
HTMLVIEWDISPLAY
`+ CODEEND + `

### Example
`+ CODESTART + `
HTMLVIEWOPEN
 TARGETBDATE=FORMAT("99",M)+"/"+FORMAT("99",D)
 HTMLVIEWLINE("<h3 align=" + QUOTE + "center" + QUOTE +
              "> You entered a birth date of " + TARGETBDATE+"</h3>")
 HTMLVIEWDISPLAY
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Must be preceded by HTMLVIEWOPEN and one or more HTMLVIEWLINE commands
  * HTML programming language knowledge is required

### Extended Example
`+ CODESTART + `
[TEST.DIALOG.WIN--Sample Dialog Box specfile.]
   
WINDOWS
   
TARGET=ACCOUNT
   
DEFINE
   FNAME=CHARACTER
   FNUM=NUMBER
   FLINE=CHARACTER
   FERROR=CHARACTER
   TARGETBDATE=CHARACTER(5)
   BDATECHAR=CHARACTER(10)
   M=NUMBER
  D=NUMBER
   PERSONNAME=CHARACTER
   QUOTE=CHARACTER(1)
   MONTHS="JanFebMarAprMayJunJulAugSepOctNovDec"
END
  
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
   
PRINT TITLE="Birthdate Info"
   HEADER=""
   
   HTMLVIEWOPEN
   
   HTMLVIEWLINE("<style>")
   HTMLVIEWLINE("body    {font: 13Px Arial, sans-serif;}")
   HTMLVIEWLINE("table    {font: 13Px Arial, sans-serif;}")
   HTMLVIEWLINE("</style>")
    
   HTMLVIEWLINE("<body bgcolor=WHITE>")
   
   TARGETBDATE=FORMAT("99",M)+"/"+FORMAT("99",D)
   HTMLVIEWLINE("<h3 align=" + QUOTE + "center" + QUOTE +
                "> You entered a birthdate of " + TARGETBDATE+"</h3>")
   HTMLVIEWDISPLAY
   END
   
  TOTAL
END
`+ CODEEND
)
powerOnFunctions.set("htmlviewline", `
# HTMLVIEWLINE
---
This function allows you to enter a line of HTML code to create information in a view window.

### Syntax
`+ CODESTART + `
HTMLVIEWLINE("HTMLline")
`+ CODEEND + `

### Example
`+ CODESTART + `
HTMLVIEWOPEN
  HTMLVIEWLINE("<h3 align=" + QUOTE + "center" + QUOTE +
              "> You entered a birth date of " + TARGETBDATE+"</h3>")
 HTMLVIEWDISPLAY
 END
`+ CODEEND + `

### User Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * HTML programming language knowledge is required
  * You must write your specfile so that the silent post occurs in the SETUP division.
  * You must have ENTERLINE(0) commands that follow the HTMLVIEWDISPLAY, and you can only use ENTERLINE(0) in the SETUP division in a procedure called from the SETUP division.
  * You must limit the HTMLVIEWLINE() to 132 characters. We recommend that no raw HTML code exceeds 80 characters when using the RD.CONVERT.HTML specfile because the program adds tagging, which may exceed the 132 character limit. For example: HTMLVIEWLINE("<td>Share 0000</td>").
  * Each HTMLVIEWLINE must:
    - Be preceded by HTMLVIEWOPEN and followed by HTMLVIEWDISPLAY
    - Follow one of these directives as specifications when you use HTMLVIEWOPEN to post or get data either online or from a network resource:

\`\`\`
DIRECTIVE           R/O      Default     Description
URL                 Required 80(http)    Protocol://server:port/object *
                             443(https)  Protocol = HTTP, HTTPS, or Port (optional)

VERB                Optional GET         POST or GET

FORMFIELD           Optional             Name=Value a URL-encoded separate directive for each form field or query

HEADER              Optional             A string sent as a header to the server

WANTRESPONSEHEADERS Optional No          Yes or No specifies if the response headers are sent back to the specfile

FILENAME            Optional             The name of the file that is used to upload the response data in the host's letter file directory. If this is not provided, the response data will not upload to the host.
\`\`\`

***Important:*** Windows sends headers, errors, and EOD indicators to the first available prompt it sees; specfiles not written to handle these items properly will fall out of sync with Windows.

### Extended Example
The following example is a specfile to display a dynamic dialog window to prompt a user for a date of birth and then display an HTML view window showing the results of your selection. See HTMLVIEWLINE on lines 38-43, and line 47.
`+ CODESTART + `
[TEST.DIALOG.WIN--Sample Dialog Box specfile.]
 
WINDOWS
 
TARGET=ACCOUNT
 
DEFINE
 FNAME=CHARACTER
 FNUM=NUMBER
 FLINE=CHARACTER
 FERROR=CHARACTER
 TARGETBDATE=CHARACTER(5)
 BDATECHAR=CHARACTER(10)
 M=NUMBER
 D=NUMBER
 PERSONNAME=CHARACTER
 QUOTE=CHARACTER(1)
 MONTHS="JanFebMarAprMayJunJulAugSepOctNovDec"
END
 
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
 
PRINT TITLE="Birthdate Info"
 HEADER=""
 
 HTMLVIEWOPEN
 
 HTMLVIEWLINE("<style>")
 HTMLVIEWLINE("body    {font: 13Px Arial, sans-serif;}")
 HTMLVIEWLINE("table    {font: 13Px Arial, sans-serif;}")
 HTMLVIEWLINE("</style>")
 
 HTMLVIEWLINE("<body bgcolor=WHITE>")
 
 TARGETBDATE=FORMAT("99",M)+"/"+FORMAT("99",D)
 
 HTMLVIEWLINE("<h3 align=" + QUOTE + "center" + QUOTE +
              "> You entered a birthdate of " + TARGETBDATE+"</h3>")
 HTMLVIEWDISPLAY
 END
 
TOTAL
END
`+ CODEEND
)
powerOnFunctions.set("htmlviewopen", `
# HTMLVIEWOPEN
---
This function opens an HTML view window.

### Syntax
`+ CODESTART + `
HTMLVIEWOPEN
`+ CODEEND + `

### Arguments
An optional argument for HTMLVIEWOPEN lets you indicate a "silent" HTTP get or post request. During a "silent" request, the get or post takes place without additional user input. For example:
  * 0 - Windows (not a silent post) HTMLVIEWOPEN or HTMLVIEWOPEN(0)
  * 1 - WinInet (silent post) HTMLVIEWOPEN (1)

### Example
`+ CODESTART + `
HTMLVIEWOPEN
  HTMLVIEWLINE("<h3 align=" + QUOTE + "center" + QUOTE +
              "> You entered a birth date of " + TARGETBDATE+"</h3>")
 HTMLVIEWDISPLAY
 END
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP or PRINT divisions or in a procedure called by these divisions
  * Must be followed by HTMLVIEWLINE and HTMLVIEWDISPLAY
  * HTML programming language knowledge is required

### Extended Example
`+ CODESTART + `
[TEST.DIALOG.WIN--Sample Dialog Box specfile.]
 
WINDOWS
 
TARGET=ACCOUNT
 
DEFINE
 FNAME=CHARACTER
 FNUM=NUMBER
 FLINE=CHARACTER
 FERROR=CHARACTER
 TARGETBDATE=CHARACTER(5)
 BDATECHAR=CHARACTER(10)
 M=NUMBER
 D=NUMBER
 PERSONNAME=CHARACTER
 QUOTE=CHARACTER(1)
 MONTHS="JanFebMarAprMayJunJulAugSepOctNovDec"
END
 
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
 
PRINT TITLE="Birthdate Info"
 HEADER=""
 
 HTMLVIEWOPEN
 
 HTMLVIEWLINE("<style>")
 HTMLVIEWLINE("body    {font: 13Px Arial, sans-serif;}")
 HTMLVIEWLINE("table    {font: 13Px Arial, sans-serif;}")
 HTMLVIEWLINE("</style>")
 
 HTMLVIEWLINE("<body bgcolor=WHITE>")
 
 TARGETBDATE=FORMAT("99",M)+"/"+FORMAT("99",D)
 HTMLVIEWLINE("<h3 align=" + QUOTE + "center" + QUOTE +
              "> You entered a birthdate of " + TARGETBDATE+"</h3>")
 HTMLVIEWDISPLAY
 END
 
TOTAL
END
`+ CODEEND
)
powerOnFunctions.set("initcreditreport", `
# INITCREDITREPORT
---
This function initializes the Credit Retrieval System setup variables that are required for pulling reports from Equifax, Experian, TransUnion, and the ChexSystems suite.

### Syntax
`+ CODESTART + `
INITCREDITREPORT(SourceType)
`+ CODEEND + `

### Arguments
  1. SourceType
    * 0 = Do not use any record; all data will be filled in by the specfile
    * 1 = Use data in the currently read Credit Report record
    * 2 = Use data in the currently read Name record
    * 3 = Use data in the currently read Application Person record

### Example
`+ CODESTART + `
INITCREDITREPORT(1)
`+ CODEEND + `

### Usage Information
  * The INITCREDITREPORT function must precede the PULLCREDITREPORT function
  * The INITCREDITREPORT and PULLCREDITREPORT functions work together to queue custom requests when pulling credit reports from a credit bureau
  * You can look up a value in the Credit Report Item records of a prior Consumer Address Analysis Report and store that value in the @CREDITREPORTADDRANALYSISOID variable. This variable may be blank if you specify at least one of the following:
    - \`\`\`@CREDITREPORTADDRESSANALYSISOID\`\`\`
    - \`\`\`@CREDITREPORTIDVOID\`\`\`
    - \`\`\`@CREDITREPORTEXTRANSACTIONID\`\`\`
    - \`\`\`@CREDITREPORTREDFLAGALERTOID\`\`\`
  * When you use the @CREDITREPORTVERIFICATIONOID variable for a Consumer Red Flag Checklist request, you must specify one of the following setup variables:
    - \`\`\`@CREDITREPORTIDVERIFICATIONOID\`\`\`
    - \`\`\`@CREDITREPORTADDRESSANALYSISOID\`\`\`
    - \`\`\`@CREDITREPORTCHESXTRANSACTIONOID\`\`\`
    - \`\`\`@CREDITREPORTREDFLAGALERTOID\`\`\`
  * When you use the @CREDITREPORTINCLUDEIDV, CREDITREPORTINCLUDENEWACCTCHEX, or @CREDITREPORTINCLUDEOFAC variables, setting any of these variables to 1 is optional for consumer and business ChexSystems suite requests on the condition that at least one of the following setup variables is set to 1 (Yes):
    - \`\`\`@CREDITRELUDENEWACCTCHEX\`\`\`
    - \`\`\`@CREDITREPORTINCLUDEQUALIFILE\`\`\`
    - \`\`\`@CREDITREPORTINCLUDEIDV\`\`\`
    - \`\`\`@CREDITREPORTINCLUDEOFAC\`\`\`
  * You can look up a value in the Credit Report Item record Red Flag Alert OID field of a prior Red Flag Checklist or Red Flag Update response, and then store that value in the @CREDITREPORTREDFLAGALERTOID variable. This variable may be blank if you specify at least one of the following:
    - \`\`\`@CREDITREPORTADDRESSANALYSISOID\`\`\`
    - \`\`\`@CREDITREPORTIDVOID\`\`\`
    - \`\`\`@CREDITREPORTCHEXTRANSACTIONID\`\`\`

### Variables
Most of the Credit Report record variables are automatically defined. First, INITCREDITREPORT initializes some of the variables with default values based on the source used. The specfile can either use these default values or change them. The PULLCREDITREPORT function then pulls the credit report and updates the value of the @CREDITREPORTERROR field with the result.

  * Setup variables: INITCREDITREPORT populates the default values for its variables. The specfile can change or use all of the defaults, as necessary. PULLCREDITREPORT then uses these values to pull the credit report.
  * Result variables: Populated with the results of queuing a credit report.

***Tip:*** Refer to variables in your print statements to display or print an informational message regarding the pulling of a credit report.

### Extended Example
See the sample specfile RD.CREDITREPORT for an example that uses this procedure to pull a credit report.
`)
powerOnFunctions.set("initsubroutine", `
# INITSUBROUTINE
---
This function initializes the variables that you can use to pass information to a PowerOn subroutine specfile.

### Syntax
`+ CODESTART + `
INITSUBROUTINE (ErrorText)
`+ CODEEND + `

  * ErrorText can indicate a system-level error message or an error detected in the subroutine specfile.

### Example
`+ CODESTART + `
INITSUBROUTINE (ERRORTEXT)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP or PRINT divisions or in a procedure called by these divisions
  * Use only with specfiles that target parent record types (ACCOUNT, CHECK, PARTICIPATION, etc.) not child record types (SHARE, GLHISTORY, COLLATERAL DOCUMENT, etc.)
  * When using INITSUBROUTINE in the SETUP division to prepare for calling a subroutine during setup, you must use INITSUBROUTINE again in the PRINT division before you call a subroutine specfile in the PRINT division.
  * Must be used before the EXECUTE function within a division
  * Cannot be used in a FOR EACH...DO...END loop
  * Batch drivers can only call batch subroutines
  * Demand drivers can only call demand subroutines
  * You may only nest up to three subroutines
  * Must install a subroutine, including batch subroutines

***Tip:*** "Max Subroutine Nesting Level Exceeded" is the most common error returned due to a subroutine specfile calling a second subroutine specfile, then the second specfile attempting to call a third subroutine specfile. If INITSUBROUTINE does not complete successfully, you cannot call subroutine specfiles.

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
  EXECUTE("GET.SLOPE",ERRORTEXT)
  SLOPE=@ENVARGRATE1
  @ENVARGNUMBER3=DISTANCE
  EXECUTE("EXTRAPOLATE",ERRORTEXT)
  PRINT "THE SLOPE BETWEEN (" + FORMAT("+###9",X1) + "," +
       FORMAT("+###9",Y1) + ") AND (" + FORMAT("+###9",X1) +
        "," + FORMAT("+###9",Y1) + ") IS " +
        FORMAT("+##9.99999",SLOPE) 4 NEWLINE
  PRINT "(" + FORMAT("+###9",@ENVARGNUMBER4) + "," +
        FORMAT("+###9",@ENVARGNUMBER5) + ") IS ON THE LINE " +
        FORMAT("+###9",DISTANCE) + " UNITS FROM (" +
        FORMAT("+###9",X1) + "," + FORMAT("+###9",Y1) + ")"
  NEWLINE
`+ CODEEND
)
powerOnFunctions.set("int", `
# INT
---
This function returns the integer part of a given number, monetary amount, or floating point expression.

### Syntax
`+ CODESTART + `
INT(expression)
`+ CODEEND + `

### Example
`+ CODESTART + `
INT(3.14159E0)
`+ CODEEND + `

Enter a number, money, or floating point expression in parentheses (after INT) to get the integer part of that expression.

For example, INT(3.14159E0) evaluates to 3. The penny (cents) part of a money value is considered part of the integer value. For example, INT($1.50) evaluates to 1.50, not 1.00.

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Requires a data type of NUMBER, MONEY, or FLOAT

### Extended Example
This function is useful for rounding or calculating modulo, as in the following example:
`+ CODESTART + `
  IF INT(NUMBERVARIABLE/2)*2=NUMBERVARIABLE THEN
   PRINT "Even"
  ELSE
   PRINT "Odd"
`+ CODEEND + `

### INT and FLOOR Example
Except for how they handle negative numbers with a fractional part, INT and FLOOR are similar.

  * \`\`\`INT(-2.4)\`\`\` = -2
  * \`\`\`FLOOR(-2.4)\`\`\` = -3
`)
powerOnFunctions.set("length", `
# LENGTH
---
This function returns the number of characters in a character string.

### Syntax
`+ CODESTART + `
LENGTH(expression)
`+ CODEEND + `

### Example
`+ CODESTART + `
LENGTH(GLACCOUNT:NAME)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP, SELECT, SORT, PRINT, LETTER, or TOTAL divisions or in a procedure called by those divisions
  * Counts leading, not trailing, spaces in the length

#### ZIP Codes Longer then Five Characters Example
**Zip Code** (from the Name record) is placed in the ZIPCODE character field. See LENGTH on line 3.

`+ CODESTART + `
TARGET=ACCOUNT

SELECT
   LENGTH(NAME:ZIPCODE)>5
END

PRINT TITLE="Accounts with Zipcodes > 5 Digits"
   COL=0  ACCOUNT:NUMBER
   COL=15 NAME:ZIPCODE
END
`+ CODEEND + `

#### Example
`+ CODESTART + `
COL=45 LENGTH(ACCOUNT:REFERENCE)
`+ CODEEND
)
powerOnFunctions.set("loanprojectinit", `
# LOANPROJECTINIT
---
This function initializes the special setup variables required to perform loan projection calculations.

### Syntax
`+ CODESTART + `
LOANPROJECTINIT(DataSource,ParameterDefaultType)
`+ CODEEND + `

### Arguments
  * DataSource 
    * 0 = Do not use any record. The specfile fills in all data.
    * 1 = Use data in the currently read Loan record.
    * 2 = Use data in the currently read Application record.
    * 3 = Use data in a Loan Default record. (You must identify which Loan or Application Default record to use.)
    * 4 = Use data in an Application Default record. (You must identify which Loan or Application Default record to use.)
    * 5 = Use data in the currently read Loan Segment record.
    * 6 = Use data in the currently read Application Segment record.
    * 7 = Use data in the currently read Loan LOC Segment 0 record.
    * 8 = Use data in the currently read Application LOC Segment 0 record.
  * ParameterDefaultType
    * 0 = Data source 1, 2, 5-6
    * 3 or 4 = Identify which Loan or Application Default record to use
    * ***Important:*** If you select (3) Calculate Loan Payoff for the setup variable @LOANPROJECTCALCULATIONTYPE, you must use (1) Use data in currently read Loan record.

### Example
`+ CODESTART + `
LOANPROJECTINIT(2,0)
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Precedes LOANPROJECTCALC
  * This function only provides summary loan projection information. To display detail information, you must use the loan projection screen.
  * LOANPROJECTINIT (0,0) is not supported for SymChoice loans. Loan projections will not project a loan payment for the entire loan, only per segment (excluding daily billed interest-only segments). The only sources that are supported for SymChoice loans are data source 5 through 8.

***Tip:*** To change the initial value of a setup variable, place an assignment statement in the specfile after LOANPROJECTINIT and before LOANPROJECTCALC to reset the value.

### Common Scenarios
Set the value of the @LOANPROJECTCALCULATIONTYPE variable to select the calculation type.
  * 0 = Calculate Payment Amount (similar to Loan Projections)
  * 1 = Calculate Loan Amount (similar to Loan Projections)
  * 2 = Calculate Loan Term (similar to Loan Projections)
  * 3 = Calculate Loan Payoff (similar to Loan Payoff Inquiry from Account Manager)
  * 4 = Calculate Loan Payoff with Int Date
  * 5 = Calculate Credit Card Interest and Balances
  * 6 = Calculate Credit Card Average Daily Balances

***Tip:*** To change the default value, place an assignment statement in the specfile after LOANPROJECTINIT and before LOANPROJECTCALC to reset the value.

Complete the following when you select (3) Calculate Loan Payoff:
  * Set the data source parameter of LOANPROJECTINIT to (1) Use data in currently read Loan record.
  * Assign the loan payoff date to @LOANPROJECTPAYOFFDATE, otherwise the current system date is used.

***Tip:*** If there is an error during the calculation, the @LOANPROJECTERROR variable contains the error text. Always check this variable in your specfile immediately following the calculation. If this variable is populated, the other result variables do not contain valid calculation results.

### Extended Example
`+ CODESTART + `
TARGET=ACCOUNT
 
PRINT TITLE="Loan Projections Loan Term"
 
   LOANPROJECTINIT(3,10)
   @LOANPROJECTLOANDATE='07/01/03'
   @LOANPROJECTPAYMENTFREQUENCY=4
   @LOANPROJECTFIRSTDUEDATE='08/01/03'
   @LOANPROJECTINTERESTRATE=10.000%
   @LOANPROJECTLOANAMOUNT=$100,000.00
   @LOANPROJECTPAYMENT=$1,322.08
   LOANPROJECTCALC

   IF @LOANPROJECTERROR<>"" THEN
    DO
     BELL
     PRINT "Error - " + @LOANPROJECTERROR
     NEWLINE
    END
   ELSE
    DO
     PRINT "Loan Projections Loan Term"
     NEWLINE
     NEWLINE
     ...
`+ CODEEND + `
See RD.LOANPROJECT for an example of a complete loan projections specfile.
`)
powerOnFunctions.set("log", `
# LOG
---
This function returns the natural logarithm of a specified number, code, or floating point value.

### Syntax
`+ CODESTART + `
LOG(expression)
`+ CODEEND + `

### Example
`+ CODESTART + `
LOG(3.14159E+2)
`+ CODEEND + `

The value of "e" is approximately 2.7183

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * Use only NUMBER, CODE, or FLOAT data type; the result is a floating point value.

***Tip:*** The natural logarithm of a numeric value is the value to which the mathematical constant "e" must be raised to produce the numeric value.

### Extended Example
The result of \`\`\`LOG(EXP(X))\`\`\` is X. \`\`\`EXP(X)\`\`\` returns "e" raised to the X power. If LOG finds the power to which "e" must be raised to get EXP(X), the answer is X.

The result of \`\`\`LOG(e)\`\`\` is 1. The power to which "e" must be raised to get "e" is 1.
`)
powerOnFunctions.set("lowercase", `
# LOWERCASE
---
This function converts the alphabetic characters of a character expression to lowercase letters.

### Syntax
`+ CODESTART + `
LOWERCASE(expression)
`+ CODEEND + `

### Example
`+ CODESTART + `
LOWERCASE(NAME:EXTRAADDRESS)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP, SELECT, SORT, PRINT, LETTER, or TOTAL divisions or in a procedure called by those divisions
  * May require an additional adjustment to convert a rate to a monetary value
  * Use only with character field, character function, character variable, or other character expression
  * Does not affect non-alphabetic characters in the character string

***Tip:*** You can use CAPITALIZE to achieve similar results.

### Print Division Example
`+ CODESTART + `
PRINT TITLE="Names with Cards"
   COL=0 LOWERCASE(NAME:FIRST)
   ...
`+ CODEEND + `

### Mixed Case Example
Prints the first character of the first name as an uppercase letter, and prints the other characters of the first name as lowercase letters
`+ CODESTART + `
  COL=0 SEGMENT(NAME:FIRST,1,1)
  COL=0 LOWERCASE
       (SEGMENT(NAME:FIRST,2,LENGTH(NAME:FIRST)))
  ...
`+ CODEEND
)
powerOnFunctions.set("md5hash", `
MD5HASH
---
This function is used with the PASSWORDHASH function to encrypt audio access codes and home banking passwords.

### Syntax
`+ CODESTART + `
MD5HASH(StringToHash)
`+ CODEEND + `

### Arguments
  * StringToHash
    - Returns 32 hexadecimal character string.

### Example
`+ CODESTART + `
MD5HASH(NAME:SHORTNAME + NAME:SSN)
`+ CODEEND + `

### Usage Information
  * Use only in the PRINT division or in a procedure called by the PRINT division
  * Bits 0 through 63 are Exclusive-OR (XOR) with bits 64 through 127 to yield a 64-bit string that is represented by a 16 hexadecimal character string
  * Audio Access Codes are hashed using the number of digits set by the Audio Access Len Miscellaneous Parameter.
  * Home banking passwords are hashed using a variable-length string without trailing spaces

### Extended Example
The MD5HASH function has a string expression (the string to hash) as its sole argument. The function returns a 32-character hexadecimal string. For example:
Code
`+ CODESTART + `
TARGET=NAME

DEFINE
   DIGITALID=CHARACTER(32)
END

PRINT TITLE=""
     DIGITALID=MD5HASH(NAME:SHORTNAME + NAME:SSN)
     PRINT "The digital ID for " + NAME:SHORTNAME + " is " +    DIGITALID
     NEWLINE
END
`+ CODEEND
)
powerOnFunctions.set("minute", `
# MINUTE
---
This function returns the minute value (from 0 to 59) of a time expression stored in HHMM format.

### Syntax
`+ CODESTART + `
MINUTE(expression)
`+ CODEEND + `

### Example
`+ CODESTART + `
MINUTE(SYSACTUALTIME)
`+ CODEEND + `

### Usage Information
  * Use in SETUP or SELECT divisions or in procedures called by those divisions
  * Use only with NUMBER data type or CODE data type expressions
  * Place a time expression in parentheses after MINUTE to find the minute value. The time expression must be a number or code value expressed in HHMM format. For example, if the current time is 2:40 p.m., the result of the following function is 40:

### Extended Example
The following example uses the HOUR and MINUTE functions to display a greeting that includes the current time:
`+ CODESTART + `
TARGET=ACCOUNT
 
PRINT TITLE="Time of Day"
  NEWLINE
  NEWLINE
  IF HOUR(SYSACTUALTIME)<12 THEN PRINT "Good Morning!"
   ELSE IF HOUR(SYSACTUALTIME)<18 THEN PRINT "Good Afternoon!"
       ELSE PRINT "Good Evening!"
  NEWLINE
  NEWLINE
  PRINT "The current time is "
  IF MINUTE(SYSACTUALTIME)=0 THEN
  DO
     PRINT "Exactly "
     CALL PRINTHOUR
     PRINT " o'clock"
   END
  ELSE IF MINUTE(SYSACTUALTIME)<30 OR MINUTE(SYSACTUALTIME)>30 THEN
   DO
     PRINT MINUTE(SYSACTUALTIME)
     IF MINUTE(SYSACTUALTIME)=1 THEN PRINT " minute past "
                              ELSE PRINT " minutes past "
     CALL PRINTHOUR
   END
  ELSE IF MINUTE(SYSACTUALTIME)=30 THEN
   DO
     PRINT "half past "
     CALL PRINTHOUR
   END
END
  
PROCEDURE PRINTHOUR
  IF HOUR(SYSACTUALTIME)<13 THEN PRINT HOUR(SYSACTUALTIME)
                          ELSE PRINT HOUR(SYSACTUALTIME)-12
  IF HOUR(SYSACTUALTIME)<12 THEN PRINT " AM"
                          ELSE PRINT " PM"
END
`+ CODEEND
)
powerOnFunctions.set("mod", `
# MOD
---
This function returns the remainder after dividing one number by another.

### Syntax
`+ CODESTART + `
MOD(expN1,expN2)
`+ CODEEND + `

***Important:*** This is commonly thought of as the "remainder" when dividing expN1 by expN2.

### Example
`+ CODESTART + `
MOD(5,1)=0
MOD(5,2)=1
MOD(5,5)=0
MOD(5,6)=5
`+ CODEEND + `

### Usage Information
  * Use only in SETUP, PRINT, and TOTAL divisions or in a procedure called by one of these divisions
  * You must follow the MOD keyword with parentheses that enclose two expressions with a data type of NUMBER data type, MONEY data type, or FLOAT data type separated by a comma.
  * Values above the maximum parameters for each variable type used will result in errors.

***Tip:*** The result of a MOD function is a FLOAT data type; convert the result to a monetary value using the MONEY function or to a numeric value using the NUMBER function.

### Extended Example
Enter two number, money, or floating point expressions, separated by a comma, in parentheses after MOD to get the modulo ("remainder") of the first expression divided by the second.
`+ CODESTART + `
  MOD(5,2) = 1.0E+0
  MOD(2.5,.75) = 2.5E-1
  MOD(27,3) = 0E+0
  MOD($25.60,$12.00) = 1.60E+2
  MOD(($25.60),($12.00)) = 1.60E+2
`+ CODEEND + `

This function is useful for determining the remainder of amounts not equally divisible by a given amount, as in the following example:

`+ CODESTART + `
AVAILAMOUNT=$25.60
GIFTCERT=$12.00
PRINT "You can purchase "
NUMGIFTS = NUMBER(AVAILAMOUNT / GIFTCERT)
PRINT NUMGIFTS
PRINT " "
PRINT GIFTCERT
PRINT " gift certificates with "
REMAINDER=MOD(AVAILAMOUNT,GIFTCERT)
PRINT MONEY(REMAINDER)
PRINT " left over." 
NEWLINE
`+ CODEEND + `
This would produce the following:
\`\`\`
You can purchase 2 12.00 gift certificates with 1.60 left over.
\`\`\`
`)
powerOnFunctions.set("money", `
# MONEY
---
This function converts a number, code, float, or rate value into a monetary value that can be assigned to a variable type number or can be printed. It is intended for use on an entire numeric expression. If you use it on part of a compound expression, it can have unpredictable results.

### Syntax
`+ CODESTART + `
MONEY(expression)
`+ CODEEND + `

### Example
`+ CODESTART + `
MONEY(LOAN:INTERESTRATE)
`+ CODEEND + `

### Usage Information
  * Use only in the SETUP, SELECT, SORT, PRINT, LETTER, or TOTAL divisions or in a procedure called by those divisions
  * Uses only NUMBER, CODE, FLOAT, or RATE data types
*
The expression you want to convert must have a NUMBER data type, CODE data type, FLOAT data type, or RATE data type, and you must enclose it in parentheses after the keyword MONEY. The purpose of this function is to give PowerOn user as much flexibility as possible.

This function can be helpful when performing an arithmetic operation with two different data types. For example, the normal result of dividing a number value by a money value is a rate value. If you want to print the result as a monetary value, use the MONEY function to convert the data type of the result.

#### Numeric Value to Money Example
The result of the following conversion of a numeric value to money is $3.00:

`+ CODESTART + `
19  COL=25 MONEY(300)
`+ CODEEND + `

The conversion to money assumes that the last two digits are cents.

#### Rate to Monetary Value Example
Converting a rate to a monetary value may require an additional adjustment. If the rate value of LOAN:INTERESTRATE is 7.385%, PowerOn recognizes the value you want to convert with the MONEY function as 0.07385, and the result prints as $0.00.

`+ CODESTART + `
19  COL=25 MONEY(LOAN:INTERESTRATE)
`+ CODEEND + `

Because PowerOn stores money data as an integer value of cents (with no decimals), when we give the MONEY function a value such as 0.07385, it cuts off the decimal value. As a result, the MONEY function is now working with a value of 0. It then converts 0 cents to dollars and gets $0.00.

If you multiply a rate by a power of 10 before you invoke the MONEY function, you can move the decimal and get a more meaningful monetary value. However, if you multiply a rate by 100,000 before you invoke the MONEY function, you move the decimal to the end of the rate:

`+ CODESTART + `
19  COL=25 MONEY(LOAN:INTERESTRATE * 100000)
`+ CODEEND + `
This time the specfile gives the MONEY function the value of 7385 instead of .07385. There is no decimal to cut off, and PowerOn converts the 7385 cents to $73.85. You may need to multiply the rate by some power of 10 to obtain the conversion you want. You can obtain other results as listed here:

`+ CODESTART + `
MONEY(INTERESTRATE * 100) results in $0.07
MONEY(INTERESTRATE * 1000) results in $0.73
MONEY(INTERESTRATE * 10000) results in $7.38
`+ CODEEND + `

#### Number and Money Data Types to Rate Data Type Example
If NUMSHARES is a number and TOTALWITHHELD is money, the result of (NUMSHARES/TOTALWITHHELD) is normally a rate. If the value of the expression (NUMSHARES/TOTALWITHHELD) is 35.912%, the result of the following conversion is $359.12:

`+ CODESTART + `
19 COL=25 MONEY((NUMSHARES/TOTALWITHHELD)*100000)
`+ CODEEND + `

If you do not do the additional multiplication, PowerOn converts the rate .35912 to $0.00. Again, the purpose of this function is to allow you flexibility.
`)
