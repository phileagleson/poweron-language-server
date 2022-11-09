export const creditReportItemRecordFields = new Map<string, string>()
creditReportItemRecordFields.set("segmenttype", ` 
\n### Segment Type
\nThis field stores a credit bureau-defined code that identifies the type of credit report segment returned.
\nField Number         **001**
\nMnemonic             **SEGMENTTYPE**
\nData Type            **4 Characters**
\nSource               **System-entered (Returned from credit bureau)**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
creditReportItemRecordFields.set("subsegmenttype", ` 
\n### Sub Segment Type
\nThis field stores a credit bureau-defined code that identifies the type of credit report subsegment returned.
\nField Number         **002**
\nMnemonic             **SUBSEGMENTTYPE**
\nData Type            **2 Characters**
\nSource               **System-entered (Returned from credit bureau)**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
creditReportItemRecordFields.set("segextended", ` 
\n### Segment Extended Flag
\nThis field stores a credit bureau-defined code that specifies whether or not the credit report segment has related subsegments.
\nField Number         **003**
\nMnemonic             **SEGEXTENDED**
\nData Type            **Code to 1**
\nSource               **System-entered (Returned from credit bureau)**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   Indicates that the credit report does not have subsegments.##### 1
\n   Indicates that the credit report has subsegments.
\n`)
creditReportItemRecordFields.set("amount", ` 
\n### Amount 1 – Amount 4
\nThese fields store amounts returned from the credit bureaus.
\nField Number         **004:001–004:004**
\nMnemonic             **AMOUNT:1 – AMOUNT:4**
\nData Type            **Number**
\nSource               **System-entered (Returned from credit bureau)**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0**
`)
creditReportItemRecordFields.set("code", ` 
\n### Code 1 – Code 4
\nThese fields store codes returned from the credit bureaus (0–9999).
\nField Number         **005:001–005:004**
\nMnemonic             **CODE:1 – CODE:4**
\nData Type            **Code to 9999**
\nSource               **System-entered (Returned from credit bureau)**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **0**
`)
creditReportItemRecordFields.set("date", ` 
\n### Date 1 – Date 6
\nThese fields store dates returned from the credit bureaus.
\nField Number         **006:001–006:006**
\nMnemonic             **DATE:1 – DATE:6**
\nData Type            **Date**
\nSource               **System-entered (Returned from credit bureau)**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **Date Null**
`)
creditReportItemRecordFields.set("ch1", ` 
\n### Ch1 1 – Ch1 10
\nEach of these fields can store one character of data.
\nField Number         **007:001–007:010**
\nMnemonic             **CH1:1 – CH1:10**
\nData Type            **1 Character**
\nSource               **System-entered (Returned from credit bureau)**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
creditReportItemRecordFields.set("ch2", ` 
\n### Ch2 1 – Ch2 3
\nEach of these fields can store up to two characters of data.
\nField Number         **008:001–008:003**
\nMnemonic             **CH2:1 – CH2:3**
\nData Type            **2 Characters**
\nSource               **System-entered (Returned from credit bureau)**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
creditReportItemRecordFields.set("ch4", ` 
\n### Ch4 1 – Ch4 4
\nEach of these fields can store up to four characters of data.
\nField Number         **009:001–009:004**
\nMnemonic             **CH4:1 – CH4:4**
\nData Type            **4 Characters**
\nSource               **System-entered (Returned from credit bureau)**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
creditReportItemRecordFields.set("ch10", ` 
\n### Ch10 1 – Ch10 3
\nEach of these fields can store up to 10 characters of data.
\nField Number         **010:001–010:003**
\nMnemonic             **CH10:1 – CH10:3**
\nData Type            **10 Characters**
\nSource               **System-entered (Returned from credit bureau)**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
creditReportItemRecordFields.set("ch15", ` 
\n### Ch15 1 – Ch15 2
\nEach of these fields can store up to 15 characters of data.
\nField Number         **011:001–011:002**
\nMnemonic             **CH15:1 – CH15:2**
\nData Type            **15 Characters**
\nSource               **System-entered (Returned from credit bureau)**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
creditReportItemRecordFields.set("ch26", ` 
\n### Ch26 1 – Ch26 3
\nEach of these fields can store up to 26 characters of data.
\nField Number         **012:001–012:003**
\nMnemonic             **CH26:1 – CH26:3**
\nData Type            **26 Characters**
\nSource               **System-entered (Returned from credit bureau)**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
creditReportItemRecordFields.set("chlong", ` 
\n### Long Char 1 – Long Char 4
\nEach of these fields can store up to 132 characters of data.
\nField Number         **013:001–013:004**
\nMnemonic             **CHLONG:1 – CHLONG:4**
\nData Type            **132 Characters**
\nSource               **System-entered (Returned from credit bureau)**
\nHelp File            **N/A**
\nDefault Control      **No**
\nDefault Value **<Blank>**
`)
