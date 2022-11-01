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
