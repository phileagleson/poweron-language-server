export const creditReportRecordFields = new Map<string, string>()
creditReportRecordFields.set("REQUESTNUMBER", `
\n### REQUESTNUMBER
\nField Number:      **001**
\nMnemonic:          **REQUESTNUMBER**
\nData Type:         **Number**
\nSource:            **System-calculated**
\nHelp File:         **02801**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. The system assigns this number when you create a credit report request. You cannot perform file maintenance on this field.
`)
creditReportRecordFields.set("USER", `
\n### USER
\nField Number:      **003**
\nMnemonic:          **USER**
\nData Type:         **Code to 9999**
\nSource:            **System-calculated**
\nHelp File:         **02803**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. The system updates this field with the user number of the person who creates a credit report request. You cannot perform file maintenance on this field.
`)
creditReportRecordFields.set("REQUESTDATE", `
\n### REQUESTDATE
\nField Number:      **004**
\nMnemonic:          **REQUESTDATE**
\nData Type:         **Date**
\nSource:            **System-calculated**
\nHelp File:         **02804**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. The system updates this field with the current AIX system date when you create a credit report request. You cannot perform file maintenance on this field.
`)
creditReportRecordFields.set("REQUESTTIME", `
\n### REQUESTTIME
\nField Number:      **005**
\nMnemonic:          **REQUESTTIME**
\nData Type:         **Code to 2359**
\nSource:            **System-calculated**
\nHelp File:         **02805**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. The system updates this field with the current system time when you create a credit report request. You cannot perform file maintenance on this field.
`)
creditReportRecordFields.set("QUEUECODE", `
\n### QUEUECODE
\nField Number:      **006**
\nMnemonic:          **QUEUECODE**
\nData Type:         **Code to 1**
\nSource:            **System-defined & User-entered**
\nHelp File:         **02806**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. This field lets you specify when a credit report request should be queued and sent to a credit bureau.
`)
creditReportRecordFields.set("QUEUEAFTERDATE", `
\n### QUEUEAFTERDATE
\nField Number:      **007**
\nMnemonic:          **QUEUEAFTERDATE**
\nData Type:         **Date**
\nSource:            **User-entered**
\nHelp File:         **02807**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. If you specify (1) After at the Queue Code field, you can enter the date on which or after which the system should queue the credit report request to be sent to the credit bureau. You cannot access this field if you specify (0) Immediate at the Queue Code field.
`)
creditReportRecordFields.set("QUEUEAFTERTIME", `
\n### QUEUEAFTERTIME
\nField Number:      **008**
\nMnemonic:          **QUEUEAFTERTIME**
\nData Type:         **Code to 2359**
\nSource:            **User-entered**
\nHelp File:         **02808**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. If you specify (1) After at the Queue Code field, you can enter the time of day after which the system should queue the credit report request to be sent to the credit bureau. You cannot access this field if you specify (0) Immediate at the Queue Code field.
`)
creditReportRecordFields.set("COMPLETIONCODE", `
\n### COMPLETIONCODE
\nField Number:      **009**
\nMnemonic:          **COMPLETIONCODE**
\nData Type:         **Code to 6**
\nSource:            **System-entered**
\nHelp File:         **02809**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. The system updates this field with the current status of the credit report request:
\n
\nYou cannot perform file maintenance on this field.
`)
creditReportRecordFields.set("COMPLETIONDATE", `
\n### COMPLETIONDATE
\nField Number:      **010**
\nMnemonic:          **COMPLETIONDATE**
\nData Type:         **Date**
\nSource:            **System-entered**
\nHelp File:         **02810**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. The system updates this field with the current system date when the credit bureau responds to the credit report request. You cannot perform file maintenance on this field.
`)
creditReportRecordFields.set("COMPLETIONTIME", `
\n### COMPLETIONTIME
\nField Number:      **011**
\nMnemonic:          **COMPLETIONTIME**
\nData Type:         **Code to 2359**
\nSource:            **System-entered**
\nHelp File:         **02811**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. The system updates this field with the current system time when the credit bureau responds to the credit report request. You cannot perform file maintenance on this field.
`)
creditReportRecordFields.set("BUREAU", `
\n### BUREAU
\nField Number:      **012**
\nMnemonic:          **BUREAU**
\nData Type:         **Code to 4**
\nSource:            **System-defined & User-entered**
\nHelp File:         **02812**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. This field identifies the credit bureau from which you request the credit report. Choose one of the following:
\n
\nThe Credit Retrieval System automatically updates the Subscriber Code and Password fields with the subscriber code and password that we have set up for you.
`)
creditReportRecordFields.set("BIRTHDATE", `
\n### BIRTHDATE
\nField Number:      **013**
\nMnemonic:          **BIRTHDATE**
\nData Type:         **Date**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02813**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. Enter the subject's birth date.
`)
creditReportRecordFields.set("SPOUSEBIRTHDATE", `
\n### SPOUSEBIRTHDATE
\nField Number:      **014**
\nMnemonic:          **SPOUSEBIRTHDATE**
\nData Type:         **Date**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02814**
\nDefault Control:   **No**
\n
\nEnter the subject spouse's birth date.
`)
creditReportRecordFields.set("INCOME", `
\n### INCOME
\nField Number:      **015**
\nMnemonic:          **INCOME**
\nData Type:         **Money**
\nSource:            **User-entered**
\nHelp File:         **02815**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. For field values for TransUnion, see Income in Credit Report Record Fields: TransUnion.
\n
\nMaximum value: $999,999,999,999.99
\n
\nIncome amount cannot be negative.
`)
creditReportRecordFields.set("MULTIPLEFILE", `
\n### MULTIPLEFILE
\nField Number:      **016**
\nMnemonic:          **MULTIPLEFILE**
\nData Type:         **Code to 1**
\nSource:            **System-calculated**
\nHelp File:         **02816**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. The system updates this field with 0 if the credit report request does not include multiple files, or 1 if the credit report request includes multiple files. You cannot perform file maintenance on this field.
`)
creditReportRecordFields.set("LOANTERMS", `
\n### LOANTERMS
\nField Number:      **018**
\nMnemonic:          **LOANTERMS**
\nData Type:         **Code to 999**
\nSource:            **User-entered**
\nHelp File:         **02818**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For field values for Experian, see Loan Terms in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("LOANAMOUNT", `
\n### LOANAMOUNT
\nField Number:      **019**
\nMnemonic:          **LOANAMOUNT**
\nData Type:         **Money**
\nSource:            **User-entered**
\nHelp File:         **02819**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian and TransUnion. Enter the amount of the loan.
\n
\nMaximum value: $999,999,999,999.99
\n
\nLoan amount cannot be negative.
`)
creditReportRecordFields.set("INQUIRYTYPE", `
\n### INQUIRYTYPE
\nField Number:      **020**
\nMnemonic:          **INQUIRYTYPE**
\nData Type:         **Code to 99**
\nSource:            **System-defined & User-entered**
\nHelp File:         **02820**
\nDefault Control:   **No**
\n
\nOnly Experian, TransUnion, and ChexSystems use this field. Equifax does not use this field. For field values for Experian, see Inquiry Type in Credit Report Record Fields: Experian. For field values for TransUnion, see Inquiry Type in Credit Report Record Fields: TransUnion. For field values for ChexSystems, see Inquiry Type in Credit Report Record Fields: ChexSystems.
`)
creditReportRecordFields.set("OPERATORCODE", `
\n### OPERATORCODE
\nField Number:      **021**
\nMnemonic:          **OPERATORCODE**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nHelp File:         **02821**
\nDefault Control:   **No**
\n
\nThis field is a required entry for Experian. It is not used for Equifax or TransUnion. For field values, see Operator Code in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("ADDRVERIFYACCT", `
\n### ADDRVERIFYACCT
\nField Number:      **022**
\nMnemonic:          **ADDRVERIFYACCT**
\nData Type:         **20 Characters**
\nSource:            **User-entered**
\nHelp File:         **02822**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For field values, see Addr Verification in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("MONTHSCOUNTINQ", `
\n### MONTHSCOUNTINQ
\nField Number:      **023**
\nMnemonic:          **MONTHSCOUNTINQ**
\nData Type:         **1 Character**
\nSource:            **System-defined & User-entered**
\nHelp File:         **02823**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax. It is not used for Experian or TransUnion. For field values, see Months Count Inq in Credit Report Record Fields: Equifax.
`)
creditReportRecordFields.set("MONTHSCOUNTMAXDQ", `
\n### MONTHSCOUNTMAXDQ
\nField Number:      **024**
\nMnemonic:          **MONTHSCOUNTMAXDQ**
\nData Type:         **1 Character**
\nSource:            **System-defined & User-entered**
\nHelp File:         **02824**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax. It is not used for Experian or TransUnion. For field values, see Months Count Max Delinq in Credit Report Record Fields: Equifax.
`)
creditReportRecordFields.set("JOINTFILEACCESS", `
\n### JOINTFILEACCESS
\nField Number:      **025**
\nMnemonic:          **JOINTFILEACCESS**
\nData Type:         **1 Character**
\nSource:            **System-calculated**
\nHelp File:         **02825**
\nDefault Control:   **No**
\n***Important:***  This field was used in a version of Equifax (prior to version 5.0) that has been retired.
`)
creditReportRecordFields.set("MEMNUMPLAINDESC", `
\n### MEMNUMPLAINDESC
\nField Number:      **026**
\nMnemonic:          **MEMNUMPLAINDESC**
\nData Type:         **10 Characters**
\nSource:            **System-calculated**
\nHelp File:         **02826**
\nDefault Control:   **No**
\n***Important:***  This field was used in a version of Equifax (prior to version 5.0) that has been retired.
`)
creditReportRecordFields.set("HAWKINDICATOR", `
\n### HAWKINDICATOR
\nField Number:      **027**
\nMnemonic:          **HAWKINDICATOR**
\nData Type:         **1 Character**
\nSource:            **System-defined & User-entered**
\nHelp File:         **02827**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For field values, see Inquiry Type in Credit Report Record Fields: TransUnion.
\n
\nThere are two values for this field:
`)
creditReportRecordFields.set("ALIAS", `
\n### ALIAS:1
\nField Number:      **028:001**
\nMnemonic:          **ALIAS:1**
\nData Type:         **20 Characters**
\nSource:            **User-entered**
\nHelp File:         **02828**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For field values, see Alias 1 in Credit Report Record Fields: TransUnion
\n
\n### ALIAS:2
\nField Number:      **028:002**
\nMnemonic:          **ALIAS:2**
\nData Type:         **20 Characters**
\nSource:            **User-entered**
\nHelp File:         **02828**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For field values, see Alias 2 in Credit Report Record Fields: TransUnion
\n
\n### ALIAS:3
\nField Number:      **028:003**
\nMnemonic:          **ALIAS:3**
\nData Type:         **20 Characters**
\nSource:            **User-entered**
\nHelp File:         **02828**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For field values, see Alias 3 in Credit Report Record Fields: TransUnion
`)
creditReportRecordFields.set("OPTFEATURECODE", `
\n### OPTFEATURECODE
\nField Number:      **029**
\nMnemonic:          **OPTFEATURECODE**
\nData Type:         **10 Characters**
\nSource:            **System-defined & User-entered**
\nHelp File:         **02829**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. For field values for Equifax, see Optional Feature Code in Credit Report Record Fields: Equifax. For field values for Experian, see Optional Feature Code in Credit Report Record Fields: Experian. For field values for TransUnion, see Optional Feature Code in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("ECOAINQTYPE", `
\n### ECOAINQTYPE
\nField Number:      **030**
\nMnemonic:          **ECOAINQTYPE**
\nData Type:         **1 Character**
\nSource:            **System-defined & User-entered**
\nHelp File:         **02830**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. For field values for Equifax, see ECOA Inquiry Type in Credit Report Record Fields: Equifax. For field values for Experian, see ECOA Inquiry Type in Credit Report Record Fields: Experian. For field values for TransUnion, see ECOA Inquiry Type in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("FIRSTNAME", `
\n### FIRSTNAME
\nField Number:      **031**
\nMnemonic:          **FIRSTNAME**
\nData Type:         **20 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02831**
\nDefault Control:   **No**
\n
\nAll credit bureaus use this field. It is required for the consumer ChexSystems suite and consumer Address Analysis inquiries; it is optional, though recommended, for all other types of inquiries. Choose one of the following:
`)
creditReportRecordFields.set("MIDDLENAME", `
\n### MIDDLENAME
\nField Number:      **032**
\nMnemonic:          **MIDDLENAME**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02832**
\nDefault Control:   **No**
\n
\nAll credit bureaus use this field. It is optional for all ChexSystems (FIS) consumer inquiries. Enter the subject's middle name (up to 10 characters).
`)
creditReportRecordFields.set("LASTNAME", `
\n### LASTNAME
\nField Number:      **033**
\nMnemonic:          **LASTNAME**
\nData Type:         **20 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02833**
\nDefault Control:   **No**
\n
\nThis field is a required entry for all credit bureaus with one exception. While FIS requires it for the consumer ChexSystems suite and consumer Address Analysis inquiries, it is optional, though recommended, for all other types of FIS inquiries. Enter the subject's last name (up to 20 characters).
`)
creditReportRecordFields.set("NAMESUFFIX", `
\n### NAMESUFFIX
\nField Number:      **034**
\nMnemonic:          **NAMESUFFIX**
\nData Type:         **4 Characters**
\nSource:            **System-defined & User-entered or System-calculated**
\nHelp File:         **02834**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. For entry options for Equifax, see Name Suffix in Credit Report Record Fields: Equifax. For entry options for Experian, see Name Suffix in Credit Report Record Fields: Experian. For entry options for TransUnion, see Name Suffix in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("SSN", `
\n### SSN
\nField Number:      **035**
\nMnemonic:          **SSN**
\nData Type:         **9 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02835**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. Enter the subject's Social Security Number or individual Taxpayer Identification Number.
`)
creditReportRecordFields.set("EMPNAME", `
\n### EMPNAME
\nField Number:      **036**
\nMnemonic:          **EMPNAME**
\nData Type:         **30 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02836**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. Choose one of the following:
`)
creditReportRecordFields.set("EMPHOUSENUMBER", `
\n### EMPHOUSENUMBER
\nField Number:      **037**
\nMnemonic:          **EMPHOUSENUMBER**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02837**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For entry options, see Employer House Number in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("EMPSTREET", `
\n### EMPSTREET
\nField Number:      **038**
\nMnemonic:          **EMPSTREET**
\nData Type:         **30 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02838**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian and TransUnion. It is not used for Equifax. For entry options for Experian, see Employer Street in Credit Report Record Fields: Experian. For entry options for TransUnion, see Employer Street in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("EMPCITY", `
\n### EMPCITY
\nField Number:      **039**
\nMnemonic:          **EMPCITY**
\nData Type:         **20 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02839**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian and TransUnion. It is not used for Equifax. Enter the city of the subject's employer (up to 20 characters).
`)
creditReportRecordFields.set("EMPSTATE", `
\n### EMPSTATE
\nField Number:      **040**
\nMnemonic:          **EMPSTATE**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02840**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian and TransUnion. It is not used for Equifax. Enter the 2-character U.S. Postal Service code for the state in the employer's address.
`)
creditReportRecordFields.set("EMPZIPCODE", `
\n### EMPZIPCODE
\nField Number:      **041**
\nMnemonic:          **EMPZIPCODE**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02841**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian and TransUnion. It is not used for Equifax. Enter the ZIP Code for the subject's employer.
`)
creditReportRecordFields.set("OCCUPATION", `
\n### OCCUPATION
\nField Number:      **042**
\nMnemonic:          **OCCUPATION**
\nData Type:         **20 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02842**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax and TransUnion. It is not used for Experian. Enter the subject's occupation (up to 20 characters).
`)
creditReportRecordFields.set("DATEHIRED", `
\n### DATEHIRED
\nField Number:      **043**
\nMnemonic:          **DATEHIRED**
\nData Type:         **4 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02843**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. Enter the date the applicant was hired by the employer (YYMM).
`)
creditReportRecordFields.set("DATESEPARATED", `
\n### DATESEPARATED
\nField Number:      **044**
\nMnemonic:          **DATESEPARATED**
\nData Type:         **4 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02844**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. If applicable, enter the date the applicant was separated from the employer (YYMM).
`)
creditReportRecordFields.set("PAYBASIS", `
\n### PAYBASIS
\nField Number:      **045**
\nMnemonic:          **PAYBASIS**
\nData Type:         **1 Character**
\nSource:            **System-defined & User-entered**
\nHelp File:         **02845**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For entry options, see Pay Basis in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("SPOUSEFIRST", `
\n### SPOUSEFIRST
\nField Number:      **046**
\nMnemonic:          **SPOUSEFIRST**
\nData Type:         **20 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02846**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. Choose one of the following:
`)
creditReportRecordFields.set("SPOUSEMIDDLE", `
\n### SPOUSEMIDDLE
\nField Number:      **047**
\nMnemonic:          **SPOUSEMIDDLE**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02847**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian and TransUnion. It is not used for Equifax. Enter the subject spouse's middle name (up to 10 characters).
`)
creditReportRecordFields.set("SPOUSELAST", `
\n### SPOUSELAST
\nField Number:      **048**
\nMnemonic:          **SPOUSELAST**
\nData Type:         **20 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02848**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax and TransUnion. It is not used for Experian. Enter the subject spouse's last name (up to 20 characters).
`)
creditReportRecordFields.set("SPOUSESUFFIX", `
\n### SPOUSESUFFIX
\nField Number:      **049**
\nMnemonic:          **SPOUSESUFFIX**
\nData Type:         **4 Characters**
\nSource:            **System-defined & User-entered or System-calculated**
\nHelp File:         **02849**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian and TransUnion. It is not used for Equifax. For entry options, see Spouse Suffix in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("SPOUSESSN", `
\n### SPOUSESSN
\nField Number:      **050**
\nMnemonic:          **SPOUSESSN**
\nData Type:         **9 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02850**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. Enter the subject spouse's Social Security Number or individual Taxpayer Identification Number.
`)
creditReportRecordFields.set("SPOUSEEMPNAME", `
\n### SPOUSEEMPNAME
\nField Number:      **051**
\nMnemonic:          **SPOUSEEMPNAME**
\nData Type:         **30 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02851**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. Choose one of the following:
`)
creditReportRecordFields.set("SPOUSEEMPSTREET", `
\n### SPOUSEEMPSTREET
\nField Number:      **052**
\nMnemonic:          **SPOUSEEMPSTREET**
\nData Type:         **30 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02852**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. Enter the street address of the subject spouse's employer (up to 30 characters).
`)
creditReportRecordFields.set("EMPCITY", `
\n### EMPCITY
\nField Number:      **053**
\nMnemonic:          **EMPCITY**
\nData Type:         **20 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02853**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. Enter the city of the subject spouse's employer (up to 20 characters).
`)
creditReportRecordFields.set("SPOUSEEMPSTATE", `
\n### SPOUSEEMPSTATE
\nField Number:      **054**
\nMnemonic:          **SPOUSEEMPSTATE**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02854**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. Enter the two-character U.S. Postal Service code for the state of the subject spouse's employer.
`)
creditReportRecordFields.set("SPOUSEEMPZIPCODE", `
\n### SPOUSEEMPZIPCODE
\nField Number:      **055**
\nMnemonic:          **SPOUSEEMPZIPCODE**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02855**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. Enter the ZIP Code for the subject spouse's employer.
`)
creditReportRecordFields.set("CURRADDRHOUSENUMBER", `
\n### CURRADDRHOUSENUMBER
\nField Number:      **056**
\nMnemonic:          **CURRADDRHOUSENUMBER**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02856**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax and TransUnion. It is not used for Experian. For entry options for Equifax, see Curr Address House Number in Credit Report Record Fields: Equifax. For entry options for TransUnion, see Curr Address House Number in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("CURRADDRDIRECTIONAL", `
\n### CURRADDRDIRECTIONAL
\nField Number:      **057**
\nMnemonic:          **CURRADDRDIRECTIONAL**
\nData Type:         **2 Characters**
\nSource:            **System-defined & User-entered or System-calculated**
\nHelp File:         **02857**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For entry options, see Curr Address Directional in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("CURRADDRSTREETNAME", `
\n### CURRADDRSTREETNAME
\nField Number:      **058**
\nMnemonic:          **CURRADDRSTREETNAME**
\nData Type:         **40 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02858**
\nDefault Control:   **No**
\n
\nFIS requires this field for all Consumer Chex Systems suite requests and ignores it for all Business requests. For entry options for Equifax, see Curr Address Street Name in Credit Report Record Fields: Equifax. For entry options for Experian, see Curr Address Street Name in Credit Report Record Fields: Experian. For entry options for TransUnion, see Curr Address Street Name in Credit Report Record Fields: TransUnion. For entry options see Curr Address Street Name in Credit Report Record Fields: ChexSystems.
`)
creditReportRecordFields.set("CURRADDRSTREETTYPE", `
\n### CURRADDRSTREETTYPE
\nField Number:      **059**
\nMnemonic:          **CURRADDRSTREETTYPE**
\nData Type:         **2 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02859**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax and TransUnion. It is not used for Experian. For entry options for Equifax, see Curr Address Street Type in Credit Report Record Fields: Equifax. For entry options for TransUnion, see Curr Address Street Type in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("CURRADDRQUADRANT", `
\n### CURRADDRQUADRANT
\nField Number:      **060**
\nMnemonic:          **CURRADDRQUADRANT**
\nData Type:         **2 Characters**
\nSource:            **System-defined & User-entered or System-calculated**
\nHelp File:         **02860**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax and TransUnion. It is not used for Experian. For entry options for Equifax, see Curr Address Quadrant in Credit Report Record Fields: Equifax. For entry options for TransUnion, see Curr Address Quadrant in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("CURRADDRUNITTYPE", `
\n### CURRADDRUNITTYPE
\nField Number:      **061**
\nMnemonic:          **CURRADDRUNITTYPE**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02861**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax and TransUnion. It is not used for Experian. Enter the type of unit in the subject's current address (APT, BUILDING, or SUITE, for example).
`)
creditReportRecordFields.set("CURRADDRUNITNUMBER", `
\n### CURRADDRUNITNUMBER
\nField Number:      **062**
\nMnemonic:          **CURRADDRUNITNUMBER**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02862**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax and TransUnion. It is not used for Experian. Enter the unit number (apartment, building, or suite number) in the subject's current address (up to 10 characters).
`)
creditReportRecordFields.set("CURRADDRCITY", `
\n### CURRADDRCITY
\nField Number:      **063**
\nMnemonic:          **CURRADDRCITY**
\nData Type:         **20 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02863**
\nDefault Control:   **No**
\n
\nThis field is a required entry for Equifax, TransUnion, and all Consumer ChexSystems suite requests. It is also used for Experian. Enter the city in the subject's current address (up to 20 characters).
`)
creditReportRecordFields.set("CURRADDRSTATE", `
\n### CURRADDRSTATE
\nField Number:      **064**
\nMnemonic:          **CURRADDRSTATE**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02864**
\nDefault Control:   **No**
\n
\nThis field is a required entry for Equifax, TransUnion, and all Consumer ChexSystems suite requests. Experian also uses this field, but it is not required. Enter the two-character U.S. Postal Service code for the state in the subject's current address. If copying from a Name record where the state name is spelled out, the system translates the state name into the two-character code.
`)
creditReportRecordFields.set("CURRADDRZIPCODE", `
\n### CURRADDRZIPCODE
\nField Number:      **065**
\nMnemonic:          **CURRADDRZIPCODE**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02865**
\nDefault Control:   **No**
\n
\nThis field is a required entry for Equifax, TransUnion, and all Consumer ChexSystems suite requests. Experian also uses this field, but does not require its use. Enter the ZIP Code in the subject's current address (xxxxx or xxxxx-xxxx). The Credit Retrieval System removes the hyphen if you use the 9-digit format.
`)
creditReportRecordFields.set("CURRADDRHOMEPHONE", `
\n### CURRADDRHOMEPHONE
\nField Number:      **066**
\nMnemonic:          **CURRADDRHOMEPHONE**
\nData Type:         **12 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02866**
\nDefault Control:   **No**
\n
\nEquifax, Transunion, and ChexSystems requests use this field. Experian does not use this field. Enter the phone number at the subject's current address (xxx-xxxx or xxxxxxx or xxx-xxx-xxxx or xxxxxxxxxx). If you enter the number with a hyphen or hyphens, the CRS removesthe hyphen or hyphens whatever format you use
`)
creditReportRecordFields.set("PREVADDR1HOUSENUMBER", `
\n### PREVADDR1HOUSENUMBER
\nField Number:      **067**
\nMnemonic:          **PREVADDR1HOUSENUMBER**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02867**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax and TransUnion. It is not used for Experian. For entry options for Equifax, see Prev Addr 1 House Number in Credit Report Record Fields: Equifax. For entry options for TransUnion, see Prev Addr 1 House Number in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("PREVADDR1DIRECTIONAL", `
\n### PREVADDR1DIRECTIONAL
\nField Number:      **068**
\nMnemonic:          **PREVADDR1DIRECTIONAL**
\nData Type:         **2 Characters**
\nSource:            **System-defined & User-entered or System-calculated**
\nHelp File:         **02868**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For entry options, see Prev Addr 1 Directional in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("PREVADDR1STREETNAME", `
\n### PREVADDR1STREETNAME
\nField Number:      **069**
\nMnemonic:          **PREVADDR1STREETNAME**
\nData Type:         **40 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02869**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. For entry options for Equifax, see Prev Addr 1 Street Name in Credit Report Record Fields: Equifax. For entry options for Experian, see Prev Addr 1 Street Name in Credit Report Record Fields: Experian. For entry options for TransUnion, see Prev Addr 1 Street Name in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("PREVADDR1STREETTYPE", `
\n### PREVADDR1STREETTYPE
\nField Number:      **070**
\nMnemonic:          **PREVADDR1STREETTYPE**
\nData Type:         **2 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02870**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax and TransUnion. It is not used for Experian. For entry options for Equifax, see Prev Addr 1 Street Type in Credit Report Record Fields: Equifax. For entry options for TransUnion, see Prev Addr 1 Street Type in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("PREVADDR1QUADRANT", `
\n### PREVADDR1QUADRANT
\nField Number:      **071**
\nMnemonic:          **PREVADDR1QUADRANT**
\nData Type:         **2 Characters**
\nSource:            **System-defined & User-entered or System-calculated**
\nHelp File:         **02871**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax and TransUnion. It is not used for Experian. For entry options for Equifax, see Prev Addr 1 Quadrant in Credit Report Record Fields: Equifax. For entry options for TransUnion, see Prev Addr 1 Quadrant in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("PREVADDR1UNITTYPE", `
\n### PREVADDR1UNITTYPE
\nField Number:      **072**
\nMnemonic:          **PREVADDR1UNITTYPE**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02872**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax and TransUnion. It is not used for Experian. Enter the type of unit in the subject's previous address (APT, BUILDING, or SUITE, for example).
`)
creditReportRecordFields.set("PREVADDR1UNITNUMBER", `
\n### PREVADDR1UNITNUMBER
\nField Number:      **073**
\nMnemonic:          **PREVADDR1UNITNUMBER**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02873**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax and TransUnion. It is not used for Experian. Enter the unit number (apartment, building, or suite number) in the subject's previous address (up to 10 characters).
`)
creditReportRecordFields.set("PREVADDR1CITY", `
\n### PREVADDR1CITY
\nField Number:      **074**
\nMnemonic:          **PREVADDR1CITY**
\nData Type:         **20 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02874**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. Enter the city in the subject's previous address (up to 20 characters).
`)
creditReportRecordFields.set("PREVADDR1STATE", `
\n### PREVADDR1STATE
\nField Number:      **075**
\nMnemonic:          **PREVADDR1STATE**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02875**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. Enter the two-character U.S. Postal Service code for the state in the subject's previous address.
`)
creditReportRecordFields.set("PREVADDR1ZIPCODE", `
\n### PREVADDR1ZIPCODE
\nField Number:      **076**
\nMnemonic:          **PREVADDR1ZIPCODE**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02876**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. Enter the ZIP Code in the subject's previous address (xxxxx or xxxxx-xxxx).
`)
creditReportRecordFields.set("PREVADDR2HOUSENUMBER", `
\n### PREVADDR2HOUSENUMBER
\nField Number:      **077**
\nMnemonic:          **PREVADDR2HOUSENUMBER**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02877**
\nDefault Control:   **No**
\n
\nThis field is not currently used.
`)
creditReportRecordFields.set("PREVADDR2DIRECTIONAL", `
\n### PREVADDR2DIRECTIONAL
\nField Number:      **078**
\nMnemonic:          **PREVADDR2DIRECTIONAL**
\nData Type:         **2 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02878**
\nDefault Control:   **No**
\n
\nThis field is not currently used.
`)
creditReportRecordFields.set("PREVADDR2STREETNAME", `
\n### PREVADDR2STREETNAME
\nField Number:      **079**
\nMnemonic:          **PREVADDR2STREETNAME**
\nData Type:         **40 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02879**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. Choose one of the following:
`)
creditReportRecordFields.set("PREVADDR2STREETTYPE", `
\n### PREVADDR2STREETTYPE
\nField Number:      **080**
\nMnemonic:          **PREVADDR2STREETTYPE**
\nData Type:         **2 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02880**
\nDefault Control:   **No**
\n
\nThis field is not currently used.
`)
creditReportRecordFields.set("PREVADDR2QUADRANT", `
\n### PREVADDR2QUADRANT
\nField Number:      **081**
\nMnemonic:          **PREVADDR2QUADRANT**
\nData Type:         **2 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02881**
\nDefault Control:   **No**
\n
\nThis field is not currently used.
`)
creditReportRecordFields.set("PREVADDR2UNITTYPE", `
\n### PREVADDR2UNITTYPE
\nField Number:      **082**
\nMnemonic:          **PREVADDR2UNITTYPE**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02882**
\nDefault Control:   **No**
\n
\nThis field is not currently used.
`)
creditReportRecordFields.set("PREVADDR2UNITNUMBER", `
\n### PREVADDR2UNITNUMBER
\nField Number:      **083**
\nMnemonic:          **PREVADDR2UNITNUMBER**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02883**
\nDefault Control:   **No**
\n
\nThis field is not currently used.
`)
creditReportRecordFields.set("PREVADDR2CITY", `
\n### PREVADDR2CITY
\nField Number:      **084**
\nMnemonic:          **PREVADDR2CITY**
\nData Type:         **20 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02884**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. Enter the city in a second previous address for the subject (up to 20 characters).
`)
creditReportRecordFields.set("PREVADDR2STATE", `
\n### PREVADDR2STATE
\nField Number:      **085**
\nMnemonic:          **PREVADDR2STATE**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02885**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian and ChexSystems. It is not used for Equifax or TransUnion. Enter the two-character U.S. Postal Service code for the state in a second previous address for the subject.
`)
creditReportRecordFields.set("PREVADDR2ZIPCODE", `
\n### PREVADDR2ZIPCODE
\nField Number:      **086**
\nMnemonic:          **PREVADDR2ZIPCODE**
\nData Type:         **10 Characters**
\nSource:            **User-entered or System-calculated**
\nHelp File:         **02886**
\nDefault Control:   **No**
\n
\nThis field is used for Experian and ChexSystems. It is not used for Equifax or TransUnion. Enter the ZIP Code in a second previous address for the subject (xxxxx or xxxxx-xxxx).
`)
creditReportRecordFields.set("SUBSCRIBERCODE", `
\n### SUBSCRIBERCODE
\nField Number:      **087**
\nMnemonic:          **SUBSCRIBERCODE**
\nData Type:         **10 Characters**
\nSource:            **User-entered**
\nHelp File:         **02887**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. This field specifies your credit union's subscriber code for the credit bureau.
`)
creditReportRecordFields.set("PASSWORD", `
\n### PASSWORD
\nField Number:      **088**
\nMnemonic:          **PASSWORD**
\nData Type:         **32 Characters**
\nSource:            **User-entered**
\nHelp File:         **02888**
\nDefault Control:   **No**
\n
\nAll credit bureaus use this field. It specifies your credit union's password for the credit bureau. We hardcode your password into the system, which uses it as the default. An asterisk (*) displays in place of each character of the password.
\n***Important:***  Since you establish this password with the credit bureau, you normally do not make changes to it. For additional information, see Password.
`)
creditReportRecordFields.set("BUREAUINFO", `
\n### BUREAUINFO
\nField Number:      **089**
\nMnemonic:          **BUREAUINFO**
\nData Type:         **20 Characters**
\nSource:            **User-entered**
\nHelp File:         **02889**
\nDefault Control:   **No**
\n
\nThis field is used for all credit bureaus. For entry options for Equifax, see Bureau Info in Credit Report Record Fields: Equifax. For entry options for Experian, see Bureau Info in Credit Report Record Fields: Experian. For entry options for TransUnion, see Bureau Info in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("SSNSEARCH", `
\n### SSNSEARCH
\nField Number:      **090:001**
\nMnemonic:          **SSNSEARCH:1**
\nData Type:         **9 Characters**
\nSource:            **User-entered**
\nHelp File:         **02890**
\nDefault Control:   **No**
\n
\nThis field is used for Equifax and Experian. It is not used for TransUnion. For entry options for Equifax, see SSN/TIN Search 1 in Credit Report Record Fields: Equifax. For entry options for Experian, see SSN/TIN Search 1 in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("SSNSEARCH", `
\n### SSNSEARCH
\nField Number:      **090:002**
\nMnemonic:          **SSNSEARCH:2**
\nData Type:         **9 Characters**
\nSource:            **User-entered**
\nHelp File:         **02890**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see SSN/TIN Search 2 in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("SSNSEARCH", `
\n### SSNSEARCH
\nField Number:      **090:003**
\nMnemonic:          **SSNSEARCH:3**
\nData Type:         **9 Characters**
\nSource:            **User-entered**
\nHelp File:         **02890**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see SSN/TIN Search 3 in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("SSNSEARCHFACS", `
\n### SSNSEARCHFACS
\nField Number:      **091**
\nMnemonic:          **SSNSEARCHFACS**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nHelp File:         **02891**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see SSN/TIN Search Facs+ Flag in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("RISKMODEL", `
\n### RISKMODEL
\nField Number:      **092:001 - 092:005**
\nMnemonic:          **RISKMODEL:1 - RISKMODEL:5**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nHelp File:         **02892**
\nDefault Control:   **No**
\n
\nThese fields are used only for Experian. They are not used for Equifax or TransUnion. For entry options, see Risk Model 1 - Risk Model 5 in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("DECODE", `
\n### DECODE:1
\nField Number:      **093:001**
\nMnemonic:          **DECODE:1**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 01 in Credit Report Record Fields: Experian.
\n
\n### DECODE:2
\nField Number:      **093:002**
\nMnemonic:          **DECODE:2**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 02 in Credit Report Record Fields: Experian.
\n
\n### DECODE:3
\nField Number:      **093:003**
\nMnemonic:          **DECODE:3**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 03 in Credit Report Record Fields: Experian.
\n
\n### DECODE:4
\nField Number:      **093:004**
\nMnemonic:          **DECODE:4**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 04 in Credit Report Record Fields: Experian.
\n
\n### DECODE:5
\nField Number:      **093:005**
\nMnemonic:          **DECODE:5**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 05 in Credit Report Record Fields: Experian.
\n
\n### DECODE:6
\nField Number:      **093:006**
\nMnemonic:          **DECODE:6**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 06 in Credit Report Record Fields: Experian.
\n
\n### DECODE:7
\nField Number:      **093:007**
\nMnemonic:          **DECODE:7**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 07 in Credit Report Record Fields: Experian.
\n
\n### DECODE:8
\nField Number:      **093:008**
\nMnemonic:          **DECODE:8**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 08 in Credit Report Record Fields: Experian.
\n
\n### DECODE:9
\nField Number:      **093:009**
\nMnemonic:          **DECODE:9**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 09 in Credit Report Record Fields: Experian.
\n
\n### DECODE:10
\nField Number:      **093:010**
\nMnemonic:          **DECODE:10**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 10 in Credit Report Record Fields: Experian.
\n
\n### DECODE:11
\nField Number:      **093:011**
\nMnemonic:          **DECODE:11**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 11 in Credit Report Record Fields: Experian.
\n
\n### DECODE:12
\nField Number:      **093:012**
\nMnemonic:          **DECODE:12**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 12 in Credit Report Record Fields: Experian.
\n
\n### DECODE:13
\nField Number:      **093:013**
\nMnemonic:          **DECODE:13**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 13 in Credit Report Record Fields: Experian.
\n
\n### DECODE:14
\nField Number:      **093:014**
\nMnemonic:          **DECODE:14**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 14 in Credit Report Record Fields: Experian.
\n
\n### DECODE:15
\nField Number:      **093:015**
\nMnemonic:          **DECODE:15**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 15 in Credit Report Record Fields: Experian.
\n
\n### DECODE:16
\nField Number:      **093:016**
\nMnemonic:          **DECODE:16**
\nData Type:         **7 Characters**
\nSource:            **User-entered**
\nHelp File:         **02893**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Decode 16 in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("BULLSEYEACCT", `
\n### BULLSEYEACCT
\nField Number:      **094**
\nMnemonic:          **BULLSEYEACCT**
\nData Type:         **20 Characters**
\nSource:            **User-entered**
\nHelp File:         **02894**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Bullseye Acct in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("DATEOPENED", `
\n### DATEOPENED
\nField Number:      **095**
\nMnemonic:          **DATEOPENED**
\nData Type:         **Date**
\nSource:            **User-entered**
\nHelp File:         **02895**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Date Opened in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("DATEOCCURRENCE", `
\n### DATEOCCURRENCE
\nField Number:      **096**
\nMnemonic:          **DATEOCCURRENCE**
\nData Type:         **Date**
\nSource:            **User-entered**
\nHelp File:         **02896**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Date of Occurrence in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("SPECIALCOMMENT", `
\n### SPECIALCOMMENT
\nField Number:      **097**
\nMnemonic:          **SPECIALCOMMENT**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nHelp File:         **02897**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Special Comment in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("ASSOCIATIONCODE", `
\n### ASSOCIATIONCODE
\nField Number:      **098**
\nMnemonic:          **ASSOCIATIONCODE**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nHelp File:         **02898**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Association Code in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("INSTANTUPDATEACCT", `
\n### INSTANTUPDATEACCT
\nField Number:      **099**
\nMnemonic:          **INSTANTUPDATEACCT**
\nData Type:         **20 Characters**
\nSource:            **User-entered**
\nHelp File:         **02899**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Instant Update Acct in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("STATUSCODE", `
\n### STATUSCODE
\nField Number:      **100**
\nMnemonic:          **STATUSCODE**
\nData Type:         **Code to 99**
\nSource:            **User-entered**
\nHelp File:         **02900**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Status Code in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("SELECTCHECKCODE", `
\n### SELECTCHECKCODE
\nField Number:      **101**
\nMnemonic:          **SELECTCHECKCODE**
\nData Type:         **8 Characters**
\nSource:            **User-entered**
\nHelp File:         **02911**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Select Check Code in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("ORIGINALCREDITOR", `
\n### ORIGINALCREDITOR
\nField Number:      **102**
\nMnemonic:          **ORIGINALCREDITOR**
\nData Type:         **20 Characters**
\nSource:            **User-entered**
\nHelp File:         **02902**
\nDefault Control:   **No**
\n
\nThis field is not currently used.
`)
creditReportRecordFields.set("EMPCOPY", `
\n### EMPCOPY
\nField Number:      **103**
\nMnemonic:          **EMPCOPY**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nHelp File:         **02913**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion. For entry options, see Send Consumer Copy in Credit Report Record Fields: Experian.
`)
creditReportRecordFields.set("EQDECODE", `
\n### EQDECODE:1
\nField Number:      **104:001**
\nMnemonic:          **EQDECODE:1**
\nData Type:         **10 Characters**
\nSource:            **User-entered**
\nHelp File:         **02914**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax. It is not used for Experian or TransUnion. For entry options, see Decode 01 in Credit Report Record Fields: Equifax.
\n
\n### EQDECODE:2
\nField Number:      **104:002**
\nMnemonic:          **EQDECODE:2**
\nData Type:         **10 Characters**
\nSource:            **User-entered**
\nHelp File:         **02914**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax. It is not used for Experian or TransUnion. For entry options, see Decode 02 in Credit Report Record Fields: Equifax.
\n
\n### EQDECODE:3
\nField Number:      **104:003**
\nMnemonic:          **EQDECODE:3**
\nData Type:         **10 Characters**
\nSource:            **User-entered**
\nHelp File:         **02914**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax. It is not used for Experian or TransUnion. For entry options, see Decode 03 in Credit Report Record Fields: Equifax.
\n
\n### EQDECODE:4
\nField Number:      **104:004**
\nMnemonic:          **EQDECODE:4**
\nData Type:         **10 Characters**
\nSource:            **User-entered**
\nHelp File:         **02914**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax. It is not used for Experian or TransUnion. For entry options, see Decode 04 in Credit Report Record Fields: Equifax.
\n
\n### EQDECODE:5
\nField Number:      **104:005**
\nMnemonic:          **EQDECODE:5**
\nData Type:         **10 Characters**
\nSource:            **User-entered**
\nHelp File:         **02914**
\nDefault Control:   **No**
\n
\nThis field is used only for Equifax. It is not used for Experian or TransUnion. For entry options, see Decode 05 in Credit Report Record Fields: Equifax.
`)
creditReportRecordFields.set("LOOKTYPE", `
\n### LOOKTYPE
\nField Number:      **105**
\nMnemonic:          **LOOKTYPE**
\nData Type:         **1 Character**
\nSource:            **System-defined & User-entered**
\nHelp File:         **02915**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For entry options, see Look Type in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("LOOKUPSEGMENTIND", `
\n### LOOKUPSEGMENTIND
\nField Number:      **106**
\nMnemonic:          **LOOKUPSEGMENTIND**
\nData Type:         **2 Characters**
\nSource:            **System-defined & User-entered**
\nHelp File:         **02916**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For entry options, see Lookup Segment Indicator in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("LOOKUPBM", `
\n### LOOKUPBM
\nField Number:      **107**
\nMnemonic:          **LOOKUPBM**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nHelp File:         **02917**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For entry options, see Lookup Bureau Market in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("LOOKUPBSM", `
\n### LOOKUPBSM
\nField Number:      **108**
\nMnemonic:          **LOOKUPBSM**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nHelp File:         **02918**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For entry options, see Lookup Bureau Sub Market in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("LOOKUPINDCODE", `
\n### LOOKUPINDCODE
\nField Number:      **109**
\nMnemonic:          **LOOKUPINDCODE**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nHelp File:         **02919**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For entry options, see Industry code to be decoded in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("LOOKUPMEMBERCODE", `
\n### LOOKUPMEMBERCODE
\nField Number:      **110**
\nMnemonic:          **LOOKUPMEMBERCODE**
\nData Type:         **8 Characters**
\nSource:            **User-entered**
\nHelp File:         **02920**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For entry options, see Member code to be decoded in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("SECONDARYNAME", `
\n### SECONDARYNAME
\nField Number:      **111**
\nMnemonic:          **SECONDARYNAME**
\nData Type:         **25 Characters**
\nSource:            **User-entered**
\nHelp File:         **02921**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For entry options, see Secondary Name in Credit Report Record Fields: TransUnion.
`)
creditReportRecordFields.set("LOANTYPECHR", `
\n### LOANTYPECHR
\nField Number:      **112**
\nMnemonic:          **LOANTYPECHR**
\nData Type:         **2 or 4 characters**
\nSource:            **System-defined & User-entered**
\nHelp File:         **02922**
\nDefault Control:   **No**
\n
\nThis field is used for TransUnion and Experian. It is not used for Equifax. For entry options, see Loan Type in Credit Report Record Fields: TransUnion or Loan Type in Credit Report Record Fields: Experian. The valid data type is alphanumeric.
\n***Important:***  You cannot enter a single character freeze override code in the Loan Type field. The override code must be two or four characters so you will need to enter a leading zero to any single character codes.
`)
creditReportRecordFields.set("1", `
\n### 1
\nField Number:      **113:001**
\nMnemonic:          **DPOWER:1**
\nData Type:         **9 Characters**
\nSource:            **User-entered**
\nHelp File:         **02923**
\nDefault Control:   **No**
\n
\nDecision Power is a tool from Equifax for determining cross-sale eligibility. This field is used only in conjunction with the Equifax Decision Power product. It is not used for Experian or TransUnion.
`)
creditReportRecordFields.set("DPOWER", `
\n### DPOWER
\nField Number:      **113:002**
\nMnemonic:          **DPOWER:2**
\nData Type:         **9 Characters**
\nSource:            **User-entered**
\nHelp File:         **02923**
\nDefault Control:   **No**
\n
\nDecision Power is a tool from Equifax for determining cross-sale eligibility. This field is used only in conjunction with the Equifax Decision Power product. It is not used for Experian or TransUnion.
`)
creditReportRecordFields.set("DPOWER", `
\n### DPOWER
\nField Number:      **113:003**
\nMnemonic:          **DPOWER:3**
\nData Type:         **9 Characters**
\nSource:            **User-entered**
\nHelp File:         **02923**
\nDefault Control:   **No**
\n
\nDecision Power is a tool from Equifax for determining cross-sale eligibility. This field is used only in conjunction with the Equifax Decision Power product. It is not used for Experian or TransUnion.
`)
creditReportRecordFields.set("LOCATOR", `
\n### LOCATOR
\nField Number:      **114**
\nMnemonic:          **LOCATOR**
\nData Type:         **Number**
\nSource:            **System-calculated**
\nHelp File:         **02924**
\nDefault Control:   **No**
\n
\nThe Locator field value in each record is unique within each member account. This means that the Locator can be used as a unique identification of a specific record. The system automatically assigns the Locator value when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThe Locator can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using the Locator is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
creditReportRecordFields.set("BRANCH", `
\n### BRANCH
\nField Number:      **115**
\nMnemonic:          **BRANCH**
\nData Type:         **Code to 9999**
\nSource:            **System-calculated**
\nHelp File:         **02925**
\nDefault Control:   **No**
\n
\nThis field contains the branch number at the time the credit request was queued. You cannot modify the value in this field.
`)
creditReportRecordFields.set("VERSION", `
\n### VERSION
\nField Number:      **116**
\nMnemonic:          **VERSION**
\nData Type:         **Code to 9999**
\nSource:            **System-calculated**
\nHelp File:         **02926**
\nDefault Control:   **No**
\n
\nThis field contains the credit bureau version number at the time the credit request was queued. This field is not visible and you cannot modify the value in this field.
`)
creditReportRecordFields.set("SOURCE", `
\n### SOURCE
\nField Number:      **117**
\nMnemonic:          **SOURCE**
\nData Type:         **Code to 99**
\nSource:            **System-calculated**
\nHelp File:         **02927**
\nDefault Control:   **No**
\n
\nThis field is set by the system and indicates the source of the credit report when it was pulled:
\n
\nThis field is not visible and you cannot modify the value in this field.
`)
creditReportRecordFields.set("DEAPPID", `
\n### DEAPPID
\nField Number:      **118**
\nMnemonic:          **DEAPPID**
\nData Type:         **2 or 4 characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis is a required field. Enter the application ID for this request.
\n
\nThis is a credit-union defined field. Ask your Experian Representative for information on this field.
`)
creditReportRecordFields.set("DEPRODUCTCODE", `
\n### DEPRODUCTCODE
\nField Number:      **119**
\nMnemonic:          **DEPRODUCTCODE**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis is a required field. Enter a product code. Product codes are credit union-defined with Experian during setup.
`)
creditReportRecordFields.set("DERATEREQUESTED", `
\n### DERATEREQUESTED
\nField Number:      **120**
\nMnemonic:          **DERATEREQUESTED**
\nData Type:         **Rate**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nEnter the requested interest rate for the loan.
`)
creditReportRecordFields.set("DEVEHAGE", `
\n### DEVEHAGE
\nField Number:      **121**
\nMnemonic:          **DEVEHAGE**
\nData Type:         **Code to 99**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nEnter the age of the vehicle in years.
`)
creditReportRecordFields.set("DEVEHSTATUS", `
\n### DEVEHSTATUS
\nField Number:      **122**
\nMnemonic:          **DEVEHSTATUS**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nEnter the status of the vehicle. Select one of the following:
`)
creditReportRecordFields.set("DEVEHCASHPRICE", `
\n### DEVEHCASHPRICE
\nField Number:      **123**
\nMnemonic:          **DEVEHCASHPRICE**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nEnter the vehicle's cash price.
`)
creditReportRecordFields.set("DEVEHDOWNPMT", `
\n### DEVEHDOWNPMT
\nField Number:      **124**
\nMnemonic:          **DEVEHDOWNPMT**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nEnter the down payment placed on the vehicle.
`)
creditReportRecordFields.set("DEVEHTRADEIN", `
\n### DEVEHTRADEIN
\nField Number:      **125**
\nMnemonic:          **DEVEHTRADEIN**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nEnter the value of the trade-in vehicle.
`)
creditReportRecordFields.set("DEVEHNEWPAYMENTAMT", `
\n### DEVEHNEWPAYMENTAMT
\nField Number:      **126**
\nMnemonic:          **DEVEHNEWPAYMENTAMT**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nEnter the additional monthly payments that do not show up on the credit profile (for example, the monthly payment for the loan for which the consumer is currently applying).
`)
creditReportRecordFields.set("DEVEHOLDPAYMENTAMT", `
\n### DEVEHOLDPAYMENTAMT
\nField Number:      **127**
\nMnemonic:          **DEVEHOLDPAYMENTAMT**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nEnter the loan amount that will be retired if the new loan is approved (for example, debt consolidation loan).
`)
creditReportRecordFields.set("LOANUSE", `
\n### LOANUSE
\nField Number:      **128**
\nMnemonic:          **LOANUSE**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis is a required field: Enter one of the following values:
`)
creditReportRecordFields.set("OVERRIDECAT", `
\n### OVERRIDECAT
\nField Number:      **129**
\nMnemonic:          **OVERRIDECAT**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nEnter the override category if you are trying to override the decision supplied by Experian through Decision Expert. This is a credit union-defined field with Experian.
`)
creditReportRecordFields.set("OVERRIDE", `
\n### OVERRIDE
\nField Number:      **130**
\nMnemonic:          **OVERRIDE**
\nData Type:         **Code to 1**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nUse this field to override the decision supplied by Decision Expert. Enter 0 for Do Not Override or 1 for Override. If you are overriding a decision supplied by Decision Expert, you must also enter the Reference ID supplied in that decision and the decision you want to use as the override (the Decision Override described below).
`)
creditReportRecordFields.set("REFERENCEID", `
\n### REFERENCEID
\nField Number:      **131**
\nMnemonic:          **REFERENCEID**
\nData Type:         **19 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis is a required field when you override a decision supplied by Decision Expert. When you perform an override, find this ID using the PowerOn demand specfiles RD.XPNV6 or RD.XPNV7 (see PowerOn Specfile Library in the PowerOn Control book).
`)
creditReportRecordFields.set("DECISIONOVERRIDE", `
\n### DECISIONOVERRIDE
\nField Number:      **132**
\nMnemonic:          **DECISIONOVERRIDE**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis is a required field when you override a decision supplied in Decision Expert. Choose one of the following:
`)
creditReportRecordFields.set("OVERRIDEAMOUNT", `
\n### OVERRIDEAMOUNT
\nField Number:      **133**
\nMnemonic:          **OVERRIDEAMOUNT**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nUse this field when requesting a decision override in Decision Expert. Enter the new credit limit amount you are using as the override.
`)
creditReportRecordFields.set("JOB1EMPTYPE", `
\n### JOB1EMPTYPE
\nField Number:      **134:001**
\nMnemonic:          **JOB1EMPTYPE:1**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the employment type of the primary applicant. When you use this field, enter one of the following values:
`)
creditReportRecordFields.set("JOB2EMPTYPE", `
\n### JOB2EMPTYPE
\nField Number:      **134:002**
\nMnemonic:          **JOB2EMPTYPE:2**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the employment type of the secondary applicant. When you use this field, enter one of the following values:
`)
creditReportRecordFields.set("JOB1EMPPREVTYPE", `
\n### JOB1EMPPREVTYPE
\nField Number:      **135:001**
\nMnemonic:          **JOB1EMPPREVTYPE:1**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the previous employment type of the primary applicant. When you use this field, enter one of the following values:
`)
creditReportRecordFields.set("JOB2EMPPREVTYPE", `
\n### JOB2EMPPREVTYPE
\nField Number:      **135:002**
\nMnemonic:          **JOB2EMPPREVTYPE:2**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the previous employment type of the secondary applicant. When you use this field, enter one of the following values:
`)
creditReportRecordFields.set("JOB1YEARS", `
\n### JOB1YEARS
\nField Number:      **136:001**
\nMnemonic:          **JOB1YEARS:1**
\nData Type:         **Code to 99**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of years the primary applicant was engaged in the activity specified in Job 1 Employment Type.
`)
creditReportRecordFields.set("JOB2YEARS", `
\n### JOB2YEARS
\nField Number:      **136:002**
\nMnemonic:          **JOB2YEARS:2**
\nData Type:         **Code to 99**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of years the secondary applicant was engaged in the activity specified in Job 2 Employment Type.
`)
creditReportRecordFields.set("JOB1MONTHS", `
\n### JOB1MONTHS
\nField Number:      **137:001**
\nMnemonic:          **JOB1MONTHS:1**
\nData Type:         **Code to 11**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of months the primary applicant was engaged in the activity specified in Job 1 Employment Type.
`)
creditReportRecordFields.set("JOB2MONTHS", `
\n### JOB2MONTHS
\nField Number:      **137:002**
\nMnemonic:          **JOB2MONTHS:2**
\nData Type:         **Code to 11**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of months the secondary applicant was engaged in the activity specified in Job 2 Employment Type.
`)
creditReportRecordFields.set("JOB1PREVYEARS", `
\n### JOB1PREVYEARS
\nField Number:      **138:001**
\nMnemonic:          **JOB1PREVYEARS:1**
\nData Type:         **Code to 99**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of years the primary applicant was engaged in the activity specified in Job 1 Prev Type.
`)
creditReportRecordFields.set("JOB2PREVYEARS", `
\n### JOB2PREVYEARS
\nField Number:      **138:002**
\nMnemonic:          **JOB2PREVYEARS:2**
\nData Type:         **Code to 99**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of years the secondary applicant was engaged in the activity specified in Job 2 Prev Type.
`)
creditReportRecordFields.set("JOB1PREVMONTHS", `
\n### JOB1PREVMONTHS
\nField Number:      **139:001**
\nMnemonic:          **JOB1PREVMONTHS:1**
\nData Type:         **Code to 11**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of months the primary applicant was engaged in the activity specified in Job 1 Prev Type.
`)
creditReportRecordFields.set("JOB2PREVMONTHS", `
\n### JOB2PREVMONTHS
\nField Number:      **139:002**
\nMnemonic:          **JOB2PREVMONTHS:2**
\nData Type:         **Code to 11**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of months the secondary applicant was engaged in the activity specified in Job 2 Prev Type.
`)
creditReportRecordFields.set("RES1TYPE", `
\n### RES1TYPE
\nField Number:      **140:001**
\nMnemonic:          **RES1TYPE:1**
\nData Type:         **Code to 8**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to specify the current residence type of the primary applicant. When you use this field, select one of the following
`)
creditReportRecordFields.set("RES2TYPE", `
\n### RES2TYPE
\nField Number:      **140:002**
\nMnemonic:          **RES2TYPE:2**
\nData Type:         **Code to 8**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to specify the current residence type of the secondary applicant. When you use this field, select one of the following
`)
creditReportRecordFields.set("RES1YEARS", `
\n### RES1YEARS
\nField Number:      **141:001**
\nMnemonic:          **RES1YEARS:1**
\nData Type:         **Code to 99**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of years the primary applicant has resided in the current residence type.
`)
creditReportRecordFields.set("RES2YEARS", `
\n### RES2YEARS
\nField Number:      **141:002**
\nMnemonic:          **RES2YEARS:2**
\nData Type:         **Code to 99**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of years the secondary applicant has resided in the current residence type.
`)
creditReportRecordFields.set("RES1MONTHS", `
\n### RES1MONTHS
\nField Number:      **142:001**
\nMnemonic:          **RES1MONTHS:1**
\nData Type:         **Code to 11**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of months the primary applicant has resided in the current residence type.
`)
creditReportRecordFields.set("RES2MONTHS", `
\n### RES2MONTHS
\nField Number:      **142:002**
\nMnemonic:          **RES2MONTHS:2**
\nData Type:         **Code to 11**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of months the secondary applicant has resided in the current residence type.
`)
creditReportRecordFields.set("RES1PREVTYPE", `
\n### RES1PREVTYPE
\nField Number:      **143:001**
\nMnemonic:          **RES1PREVTYPE:1**
\nData Type:         **Code to 8**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to specify the previous residence type of the primary applicant. When you use this field, select one of the following:
`)
creditReportRecordFields.set("RES2PREVTYPE", `
\n### RES2PREVTYPE
\nField Number:      **143:002**
\nMnemonic:          **RES2PREVTYPE:2**
\nData Type:         **Code to 8**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to specify the previous residence type of the secondary applicant. When you use this field, select one of the following:
`)
creditReportRecordFields.set("RES1PREVYEARS", `
\n### RES1PREVYEARS
\nField Number:      **144:001**
\nMnemonic:          **RES1PREVYEARS:1**
\nData Type:         **Code to 99**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of years the primary applicant resided in the previous residence type.
`)
creditReportRecordFields.set("RES2PREVYEARS", `
\n### RES2PREVYEARS
\nField Number:      **144:002**
\nMnemonic:          **RES2PREVYEARS:2**
\nData Type:         **Code to 99**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of years the secondary applicant resided in the previous residence type.
`)
creditReportRecordFields.set("RES1PREVMONTHS", `
\n### RES1PREVMONTHS
\nField Number:      **145:001**
\nMnemonic:          **RES1PREVMONTHS:1**
\nData Type:         **Code to 11**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of months the primary applicant resided in the previous residence type.
`)
creditReportRecordFields.set("RES2PREVMONTHS", `
\n### RES2PREVMONTHS
\nField Number:      **145:002**
\nMnemonic:          **RES2PREVMONTHS:2**
\nData Type:         **Code to 11**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the number of months the secondary applicant resided in the previous residence type.
`)
creditReportRecordFields.set("INC1TOTALFREQ", `
\n### INC1TOTALFREQ
\nField Number:      **146:001**
\nMnemonic:          **INC1TOTALFREQ:1**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the total income frequency of the primary applicant. Choose one of the following:
\n***Important:***  If you enter a value in this field, you must also enter an Inc 1 Total Amount.
`)
creditReportRecordFields.set("INC1SALARYFREQ", `
\n### INC1SALARYFREQ
\nField Number:      **147:001**
\nMnemonic:          **INC1SALARYFREQ:1**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the salary frequency of the primary applicant. If you enter a value in this field, you must also enter an Inc 1 Salary Amount, and the total of the Inc 1 Salary Amount and Inc 1 Other Amount fields must equal the Inc 1 Total Amount if their corresponding frequencies match.
`)
creditReportRecordFields.set("INC2SALARYFREQ", `
\n### INC2SALARYFREQ
\nField Number:      **147:002**
\nMnemonic:          **INC2SALARYFREQ:2**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the salary frequency of the secondary applicant. If you enter a value in this field, you must also enter an Inc 2 Salary Amount, and the total of the Inc 2 Salary Amount and Inc 2 Other Amount fields must equal the Inc 2 Total Amount if their corresponding frequencies match.
`)
creditReportRecordFields.set("INC1OTHERFREQ", `
\n### INC1OTHERFREQ
\nField Number:      **148:001**
\nMnemonic:          **INC1OTHERFREQ:1**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the frequency of other income for the primary applicant. If you enter a value in this field, you must also enter an Inc 1 Other Amount, and the total of the Inc 1 Salary Amount and Inc 1 Other Amount fields must equal the Inc 1 Total Amount if their corresponding frequencies match.
`)
creditReportRecordFields.set("INC2OTHERFREQ", `
\n### INC2OTHERFREQ
\nField Number:      **148:002**
\nMnemonic:          **INC2OTHERFREQ:2**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the frequency of other income for the secondary applicant. If you enter a value in this field, you must also enter an Inc 2 Other Amount, and the total of the Inc 2 Salary Amount and Inc 2 Other Amount fields must equal the Inc 2 Total Amount if their corresponding frequencies match.
`)
creditReportRecordFields.set("INC1TOTALAMOUNT", `
\n### INC1TOTALAMOUNT
\nField Number:      **149:001**
\nMnemonic:          **INC1TOTALAMOUNT:1**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the total amount of all income for the primary applicant. If you enter a value in this field, you must also enter a value for Inc 1 Total Freq.
`)
creditReportRecordFields.set("INC2TOTALAMOUNT", `
\n### INC2TOTALAMOUNT
\nField Number:      **149:002**
\nMnemonic:          **INC2TOTALAMOUNT:2**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the total amount of all income for the secondary applicant. If you enter a value in this field, you must also enter a value for Inc 2 Total Freq.
`)
creditReportRecordFields.set("INC1SALARYAMOUNT", `
\n### INC1SALARYAMOUNT
\nField Number:      **150:001**
\nMnemonic:          **INC1SALARYAMOUNT:1**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the salary amount of the primary applicant. If you enter a value in this field, you must also enter a value for Inc 1 Salary Freq, and the total of the Inc 1 Salary Amount and Inc 1 Other Amount fields must equal the Inc 1 Total Amount if their corresponding frequencies match.
`)
creditReportRecordFields.set("INC2SALARYAMOUNT", `
\n### INC2SALARYAMOUNT
\nField Number:      **150:002**
\nMnemonic:          **INC2SALARYAMOUNT:2**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the salary amount of the secondary applicant. If you enter a value in this field, you must also enter a value for Inc 2 Salary Freq, and the total of the Inc 2 Salary Amount and Inc 2 Other Amount fields must equal the Inc 2 Total Amount if their corresponding frequencies match.
`)
creditReportRecordFields.set("INC1OTHERAMOUNT", `
\n### INC1OTHERAMOUNT
\nField Number:      **151:001**
\nMnemonic:          **INC1OTHERAMOUNT:1**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the amount of other income for the primary applicant. If you enter a value in this field, you must also enter a value for Inc 1 Other Freq. In addition, the total of the Inc 1 Salary Amount and Inc 1 Other Amount fields must equal the Inc 1 Total Amount if their corresponding frequencies match.
`)
creditReportRecordFields.set("INC2OTHERAMOUNT", `
\n### INC2OTHERAMOUNT
\nField Number:      **151:002**
\nMnemonic:          **INC2OTHERAMOUNT:2**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the amount of other income for the secondary applicant. If you enter a value in this field, you must also enter an Inc 2 Other Freq, and the total of the Inc 2 Salary Amount and Inc 2 Other Amount fields must equal the Inc 2 Total Amount if their corresponding frequencies match.
`)
creditReportRecordFields.set("BRE1RELATION", `
\n### BRE1RELATION
\nField Number:      **152:001**
\nMnemonic:          **BRE1RELATION:1**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the banking relationship of the primary applicant. Enter one of the following values:
`)
creditReportRecordFields.set("BRE2RELATION", `
\n### BRE2RELATION
\nField Number:      **152:002**
\nMnemonic:          **BRE2RELATION:2**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the banking relationship of the secondary applicant. Enter one of the following values:
`)
creditReportRecordFields.set("DEP1DEPENDANTS", `
\n### DEP1DEPENDANTS
\nField Number:      **153:001**
\nMnemonic:          **DEP1DEPENDANTS:1**
\nData Type:         **Code to 99**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the number of dependents for the primary applicant.
`)
creditReportRecordFields.set("DEP2DEPENDANTS", `
\n### DEP2DEPENDANTS
\nField Number:      **153:002**
\nMnemonic:          **DEP2DEPENDANTS:2**
\nData Type:         **Code to 99**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the number of dependents for the secondary applicant.
`)
creditReportRecordFields.set("EXP1FREQ", `
\n### EXP1FREQ
\nField Number:      **154:001**
\nMnemonic:          **EXP1FREQ:1**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the frequency of expenses for the primary applicant. Choose one of the following:
\n***Important:***  If you enter a value in this field, you must also enter an Exp 1 Amount.
\n
\nField Number:      **154:002**
\nMnemonic:          **EXP2FREQ:2**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the frequency of expenses for the secondary applicant. Choose one of the following:
\n***Important:***  If you enter a value in this field, you must also enter an Exp 2 Amount.
`)
creditReportRecordFields.set("EXP1RESIDENCETYPE", `
\n### EXP1RESIDENCETYPE
\nField Number:      **155:001**
\nMnemonic:          **EXP1RESIDENCETYPE:1**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the type of residence expense for the primary applicant. When you use this field, enter one of the following values:
`)
creditReportRecordFields.set("EXP2RESIDENCETYPE", `
\n### EXP2RESIDENCETYPE
\nField Number:      **155:002**
\nMnemonic:          **EXP2RESIDENCETYPE:2**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the type of residence expense for the secondary applicant. When you use this field, select one of the following options:
`)
creditReportRecordFields.set("EXP1RESIDENCEFREQ", `
\n### EXP1RESIDENCEFREQ
\nField Number:      **156:001**
\nMnemonic:          **EXP1RESIDENCEFREQ:1**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the frequency of residence expenses for the primary applicant. Choose one of the following:
\n***Important:***  If you enter a value in this field, you must also enter an Exp 1 Residence Amount.
`)
creditReportRecordFields.set("EXP2RESIDENCEFREQ", `
\n### EXP2RESIDENCEFREQ
\nField Number:      **156:002**
\nMnemonic:          **EXP2RESIDENCEFREQ:2**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the frequency of residence expenses for the secondary applicant. Choose one of the following:
\n***Important:***  If you enter a value in this field, you must also enter an Exp 1 Residence Amount.
`)
creditReportRecordFields.set("EXP1OTHERFREQ", `
\n### EXP1OTHERFREQ
\nField Number:      **157:001**
\nMnemonic:          **EXP1OTHERFREQ:1**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the frequency of other expenses for the primary applicant. Choose one of the following:
\n***Important:***  If you enter a value in this field, you must also enter an Exp 1 Other Amount.
`)
creditReportRecordFields.set("EXP2OTHERFREQ", `
\n### EXP2OTHERFREQ
\nField Number:      **157:002**
\nMnemonic:          **EXP2OTHERFREQ:2**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the frequency of other expenses for the secondary applicant. Enter one of the following:
\n***Important:***  If you enter a value in this field, you must also enter an Exp 1 Other Amount.
`)
creditReportRecordFields.set("EXP1AMOUNT", `
\n### EXP1AMOUNT
\nField Number:      **158:001**
\nMnemonic:          **EXP1AMOUNT:1**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the total amount of all expenses for the primary applicant. If you enter a value in this field, you must also enter an Exp 1 Frequency, and this field must equal the total of the Exp 1 Residence Amount and Exp 1 Other Amount fields if their corresponding frequencies match.
`)
creditReportRecordFields.set("EXP2AMOUNT", `
\n### EXP2AMOUNT
\nField Number:      **158:002**
\nMnemonic:          **EXP2AMOUNT:2**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the total amount of all expenses for the secondary applicant. If you enter a value in this field, you must also enter an Exp 2 Frequency, and this field must equal the total of the Exp 2 Residence Amount and Exp 2 Other Amount fields if their corresponding frequencies match.
`)
creditReportRecordFields.set("EXP1RESIDENCEAMOUNT", `
\n### EXP1RESIDENCEAMOUNT
\nField Number:      **159:001**
\nMnemonic:          **EXP1RESIDENCEAMOUNT:1**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the amount of all residence expenses for the primary applicant. If you enter a value in this field, you must also enter an Exp 1 Residence, Frequency, and Exp 1 Residence Type. Also, the Exp 1 Amount must equal the total of this field and the Exp 1 Other Amount field if their corresponding frequencies match.
`)
creditReportRecordFields.set("EXP2RESIDENCEAMOUNT", `
\n### EXP2RESIDENCEAMOUNT
\nField Number:      **159:002**
\nMnemonic:          **EXP2RESIDENCEAMOUNT:2**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the amount of all residence expenses for the secondary applicant. If you enter a value in this field, you must also enter an Exp 2 Residence Frequency and an Exp 2 Residence Type. Also, the Exp 2 Amount must equal the total of this field and the Exp 2 Other Amount field if their corresponding frequencies match.
`)
creditReportRecordFields.set("EXP1OTHERAMOUNT", `
\n### EXP1OTHERAMOUNT
\nField Number:      **160:001**
\nMnemonic:          **EXP1OTHERAMOUNT:1**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the amount of all other expenses for the primary applicant. If you enter a value in this field, you must also enter an Exp 1 Other Frequency, and the Exp 1 Amount must equal the total of the Exp 1 Residence Amount field and this field if their corresponding frequencies match.
`)
creditReportRecordFields.set("EXP2OTHERAMOUNT", `
\n### EXP2OTHERAMOUNT
\nField Number:      **160:002**
\nMnemonic:          **EXP2OTHERAMOUNT:2**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the amount of all other expenses for the secondary applicant. If you enter a value in this field, you must also enter an Exp 2 Other Frequency, and the Exp 2 Amount must equal the total of the Exp 2 Residence Amount field and this field if their corresponding frequencies match.
`)
creditReportRecordFields.set("AUTOLOANTYPE", `
\n### AUTOLOANTYPE
\nField Number:      **161**
\nMnemonic:          **AUTOLOANTYPE**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the loan type of the auto loan if the request is for an automobile loan. When you use this field, enter one of the following values:
`)
creditReportRecordFields.set("AUTOSTATUS", `
\n### AUTOSTATUS
\nField Number:      **162**
\nMnemonic:          **AUTOSTATUS**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the status of the auto. When you use this field, enter one of the following values:
`)
creditReportRecordFields.set("AUTOYEAR", `
\n### AUTOYEAR
\nField Number:      **163**
\nMnemonic:          **AUTOYEAR**
\nData Type:         **4 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the year of the auto. Enter the year in YYYY format.
`)
creditReportRecordFields.set("AUTOMAKE", `
\n### AUTOMAKE
\nField Number:      **164**
\nMnemonic:          **AUTOMAKE**
\nData Type:         **15 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the make of the auto (up to 15 characters).
`)
creditReportRecordFields.set("AUTOMODEL", `
\n### AUTOMODEL
\nField Number:      **165**
\nMnemonic:          **AUTOMODEL**
\nData Type:         **10 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nThis field specifies the model of the auto (up to 10 characters).
`)
creditReportRecordFields.set("AUTORESIDUALFACTOR", `
\n### AUTORESIDUALFACTOR
\nField Number:      **166**
\nMnemonic:          **AUTORESIDUALFACTOR**
\nData Type:         **9 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nEnter the estimated percentage of value you expect the auto to retain at the end of a lease. Use the format nn.nnnnnn. A car that retains 50% of its value, for example, has an Auto Residual Factor of 50.0000.
\n
\nFor a full explanation of this field and how your credit union can use it, contact your Experian representative.
`)
creditReportRecordFields.set("AUTOMONEYFACTOR", `
\n### AUTOMONEYFACTOR
\nField Number:      **167**
\nMnemonic:          **AUTOMONEYFACTOR**
\nData Type:         **9 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nEnter the cost of funds for the auto lease in the format n.nnnnnn. Cost of funds or money factor is a fraction used to determine the return on the Lessor's investment in monthly terms. The money factor for a lease is similar to the interest rate for an auto purchase loan (but expressed per month instead of per year).
\n
\nFor a full explanation of this field and how your credit union can use it, contact your Experian representative.
`)
creditReportRecordFields.set("AUTOMSRP", `
\n### AUTOMSRP
\nField Number:      **168**
\nMnemonic:          **AUTOMSRP**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the Manufacturer's Suggested Retail Price (MSRP) of the auto.
`)
creditReportRecordFields.set("AUTOSALEPRICE", `
\n### AUTOSALEPRICE
\nField Number:      **169**
\nMnemonic:          **AUTOSALEPRICE**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the sale price of the auto.
`)
creditReportRecordFields.set("AUTODOWNPAYMENT", `
\n### AUTODOWNPAYMENT
\nField Number:      **170**
\nMnemonic:          **AUTODOWNPAYMENT**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the amount of the down payment on the auto.
`)
creditReportRecordFields.set("AUTOREBATE", `
\n### AUTOREBATE
\nField Number:      **171**
\nMnemonic:          **AUTOREBATE**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the amount of the rebate on the auto, if any.
`)
creditReportRecordFields.set("AUTOTRADEBALANCE", `
\n### AUTOTRADEBALANCE
\nField Number:      **172**
\nMnemonic:          **AUTOTRADEBALANCE**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the amount owed on the trade-in auto.
`)
creditReportRecordFields.set("AUTOTRADEALLOWANCE", `
\n### AUTOTRADEALLOWANCE
\nField Number:      **173**
\nMnemonic:          **AUTOTRADEALLOWANCE**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the amount of the allowance on the trade-in auto.
`)
creditReportRecordFields.set("AUTOCAPCOST", `
\n### AUTOCAPCOST
\nField Number:      **174**
\nMnemonic:          **AUTOCAPCOST**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nEnter the discounted price of the auto, after the member negotiates the price, but before factoring in down payment, trade, taxes, and other costs or deductions.
`)
creditReportRecordFields.set("AUTORESIDUALVALUE", `
\n### AUTORESIDUALVALUE
\nField Number:      **175**
\nMnemonic:          **AUTORESIDUALVALUE**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nEnter the amount showing the estimated amount of value you expect the auto will retain at the end of a lease. This is determined by multiplying the Auto MSRP by the Auto Residual Factor (see Equifax Requests).
`)
creditReportRecordFields.set("AUTOLEASETERM", `
\n### AUTOLEASETERM
\nField Number:      **176**
\nMnemonic:          **AUTOLEASETERM**
\nData Type:         **Code to 999**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the term in months for an auto lease loan.
`)
creditReportRecordFields.set("PRDPRODUCTCODE01", `
\n### PRDPRODUCTCODE01
\nField Number:      **177:001**
\nMnemonic:          **PRDPRODUCTCODE01:1**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter a product code. Each credit union sets up its own product codes with Experian. If you make an entry in this field, it must be a two-digit numeric value. If you want to use the Prod Code ## fields, you must start with Prod Code 01 and fill in the rest of the fields as necessary. If you enter a Prod Code 01, you must also enter a Decision 01.
\n
\nFor a full explanation of this field and how it can be used, contact your Experian Representative.
`)
creditReportRecordFields.set("PRDPRODUCTCODE02", `
\n### PRDPRODUCTCODE02
\nField Number:      **177:002**
\nMnemonic:          **PRDPRODUCTCODE02:2**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter a second product code. If you make an entry in this field, you must also enter a Decision 02. See Prod Code 01 for an explanation.
`)
creditReportRecordFields.set("PRDPRODUCTCODE03", `
\n### PRDPRODUCTCODE03
\nField Number:      **177:003**
\nMnemonic:          **PRDPRODUCTCODE03:3**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter a third product code. If you make an entry in this field, you must also enter a Decision 03. See Prod Code 01 for an explanation.
`)
creditReportRecordFields.set("PRDPRODUCTCODE04", `
\n### PRDPRODUCTCODE04
\nField Number:      **177:004**
\nMnemonic:          **PRDPRODUCTCODE04:4**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter a fourth product code. If you make an entry in this field, you must also enter a Decision 04. See Prod Code 01 for an explanation.
`)
creditReportRecordFields.set("PRDPRODUCTCODE05", `
\n### PRDPRODUCTCODE05
\nField Number:      **177:005**
\nMnemonic:          **PRDPRODUCTCODE05:5**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter a fifth product code. If you make an entry in this field, you must also enter a Decision 05. See Prod Code 01 for an explanation.
`)
creditReportRecordFields.set("PRDPRODUCTCODE06", `
\n### PRDPRODUCTCODE06
\nField Number:      **177:006**
\nMnemonic:          **PRDPRODUCTCODE06:6**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter a sixth product code. If you make an entry in this field, you must also enter a Decision 06. See Prod Code 01 for an explanation.
`)
creditReportRecordFields.set("PRDPRODUCTCODE07", `
\n### PRDPRODUCTCODE07
\nField Number:      **177:007**
\nMnemonic:          **PRDPRODUCTCODE07:7**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter a seventh product code. If you If you make an entry in this field, you must also enter a Decision 07. See Prod Code 01 for an explanation.
`)
creditReportRecordFields.set("PRDPRODUCTCODE08", `
\n### PRDPRODUCTCODE08
\nField Number:      **177:008**
\nMnemonic:          **PRDPRODUCTCODE08:8**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter an eighth product code. If you make an entry in this field, you must also enter a Decision 08. See Prod Code 01 for an explanation.
`)
creditReportRecordFields.set("PRDPRODUCTCODE09", `
\n### PRDPRODUCTCODE09
\nField Number:      **177:009**
\nMnemonic:          **PRDPRODUCTCODE09:9**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter a ninth product code. If you make an entry in this field, you must also enter a Decision 09. See Prod Code 01 for an explanation.
`)
creditReportRecordFields.set("PRDPRODUCTCODE10", `
\n### PRDPRODUCTCODE10
\nField Number:      **177:010**
\nMnemonic:          **PRDPRODUCTCODE10:10**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter a tenth product code. If you make an entry in this field, you must also enter a Decision 10. See Prod Code 01 for an explanation.
`)
creditReportRecordFields.set("PRDDECTYPE01", `
\n### PRDDECTYPE01
\nField Number:      **178:001**
\nMnemonic:          **PRDDECTYPE01:1**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nIf there is an entry in the Prod Code 01 field, you must make an entry in this field. Choose one of the following:
`)
creditReportRecordFields.set("PRDDECTYPE02", `
\n### PRDDECTYPE02
\nField Number:      **178:002**
\nMnemonic:          **PRDDECTYPE02:2**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nIf there is an entry in the Prod Code 02 field, you must make an entry in this field. Enter A for Account Opening or X for Cross-Sell.
`)
creditReportRecordFields.set("PRDDECTYPE03", `
\n### PRDDECTYPE03
\nField Number:      **178:003**
\nMnemonic:          **PRDDECTYPE03:3**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nIf there is an entry in the Prod Code 03 field, you must make an entry in this field. Enter A for Account Opening or X for Cross-Sell.
`)
creditReportRecordFields.set("PRDDECTYPE04", `
\n### PRDDECTYPE04
\nField Number:      **178:004**
\nMnemonic:          **PRDDECTYPE04:4**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nIf there is an entry in the Prod Code 04 field, you must make an entry in this field. Enter A for Account Opening or X for Cross-Sell.
`)
creditReportRecordFields.set("PRDDECTYPE05", `
\n### PRDDECTYPE05
\nField Number:      **178:005**
\nMnemonic:          **PRDDECTYPE05:5**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nIf there is an entry in the Prod Code 05 field, you must make an entry in this field. Enter A for Account Opening or X for Cross-Sell.
`)
creditReportRecordFields.set("PRDDECTYPE06", `
\n### PRDDECTYPE06
\nField Number:      **178:006**
\nMnemonic:          **PRDDECTYPE06:6**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nIf there is an entry in the Prod Code 06 field, you must make an entry in this field. Enter A for Account Opening or X for Cross-Sell.
`)
creditReportRecordFields.set("PRDDECTYPE07", `
\n### PRDDECTYPE07
\nField Number:      **178:007**
\nMnemonic:          **PRDDECTYPE07:7**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nIf there is an entry in the Prod Code 07 field, you must make an entry in this field. Enter A for Account Opening or X for Cross-Sell.
`)
creditReportRecordFields.set("PRDDECTYPE08", `
\n### PRDDECTYPE08
\nField Number:      **178:008**
\nMnemonic:          **PRDDECTYPE08:8**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nIf there is an entry in the Prod Code 08 field, you must make an entry in this field. Enter A for Account Opening or X for Cross-Sell.
`)
creditReportRecordFields.set("PRDDECTYPE09", `
\n### PRDDECTYPE09
\nField Number:      **178:009**
\nMnemonic:          **PRDDECTYPE09:9**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nIf there is an entry in the Prod Code 9 field, you must make an entry in this field. Enter A for Account Opening or X for Cross-Sell.
`)
creditReportRecordFields.set("PRDDECTYPE10", `
\n### PRDDECTYPE10
\nField Number:      **178:010**
\nMnemonic:          **PRDDECTYPE10:10**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nIf there is an entry in the Prod Code 10 field, you must make an entry in this field. Enter A for Account Opening or X for Cross-Sell.
`)
creditReportRecordFields.set("REFNUMBER1", `
\n### REFNUMBER1
\nField Number:      **179:001**
\nMnemonic:          **REFNUMBER1:1**
\nData Type:         **15 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the first customer reference number. Customer reference numbers are credit union-defined through Experian.
\n
\nFor a full explanation of this field and how it can be used, contact your Experian Representative.
`)
creditReportRecordFields.set("REFNUMBER2", `
\n### REFNUMBER2
\nField Number:      **179:002**
\nMnemonic:          **REFNUMBER2:2**
\nData Type:         **15 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter a second customer reference number, if applicable. Customer reference numbers are credit union-defined through Experian.
\n
\nFor a full explanation of the field and how it can be used, contact your Experian Representative.
`)
creditReportRecordFields.set("REFNUMBER3", `
\n### REFNUMBER3
\nField Number:      **179:003**
\nMnemonic:          **REFNUMBER3:3**
\nData Type:         **15 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter a third customer reference number, if applicable. Customer reference numbers are credit union-defined through Experian.
\n
\nFor a full explanation of the field and how it can be used, contact your Experian Representative.
`)
creditReportRecordFields.set("LOANAPPID", `
\n### LOANAPPID
\nField Number:      **180**
\nMnemonic:          **LOANAPPID**
\nData Type:         **2 or 4 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n***Important:***  The system will use this currently inactive field in a future release.
`)
creditReportRecordFields.set("OLDMNTHLYPMT", `
\n### OLDMNTHLYPMT
\nField Number:      **181**
\nMnemonic:          **OLDMNTHLYPMT**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the amount of the old monthly payment.
`)
creditReportRecordFields.set("NEWMNTHLYPMT", `
\n### NEWMNTHLYPMT
\nField Number:      **182**
\nMnemonic:          **NEWMNTHLYPMT**
\nData Type:         **Money**
\nSource:            **User-entered**
\nDefault Control:   **No**
\n
\nThis field is used only for Experian. It is not used for Equifax or TransUnion.
\n
\nYou can use this field to enter the amount of the new monthly payment.
`)
creditReportRecordFields.set("ACCESSPIN", `
\n### ACCESSPIN
\nField Number:      **183**
\nMnemonic:          **ACCESSPIN**
\nData Type:         **15 Characters**
\nSource:            **User-entered**
\nHelp File:         **02993**
\nDefault Control:   **No**
\n
\nWith the passing of California Senate Bill 168, residents of California can freeze their credit reports, thereby not allowing clients to pull reports. This field is used if a member would like to have the freeze overridden. To pull an Equifax report for an account frozen by a member, you must enter the value in this field. For Equifax, the member specifies this field. Please contact Experian to ensure that you have an up-to-date list of freeze override Reason Codes (also known as Account Purpose Type Codes).
`)
creditReportRecordFields.set("PHONEAPPEND", `
\n### PHONEAPPEND
\nField Number:      **184**
\nMnemonic:          **PHONEAPPEND**
\nData Type:         **Yes/No**
\nSource:System-entered & User-entered
\nHelp File:         **02994**
\nDefault Control:   **No**
\n
\nPhone Append is a TransUnion add-on product that searches an additional source, Permlink, for a consumer's current personal phone number and area code. If you include Phone Append in the product request, Phone Append performs the search for all subjects returned for that product.
\n
\nFor all releases before Version 4, TransUnion does not use this field. For Version 4, you can access this field only if you enter (01) Credit, (03) TracePlus, (06) Peer, (08) Fact, or (10) Retrace at the Inquiry Type field.
\n
\nEnter Yes (Phone Append processing requested) if you want a Phone Append report.
`)
creditReportRecordFields.set("SCOREMODEL", `
\n### SCOREMODEL
\nField Number:      **185:001**
\nMnemonic:          **SCOREMODEL:1**
\nData Type:         **5 Characters**
\nSource:            **System-entered & User-entered**
\nHelp File:         **02995**
\nDefault Control:   **No**
\n
\nScore models are online empirical scoring systems that analyze information about an individual to derive a numeric score that is predictive of certain behavior. Score models are TransUnion add-on products.
\n
\nThe system accepts up to 12 score models for a single TransUnion stand-alone product.
\n***Important:***  For all versions before Version 4, TransUnion does not use the Score Model 01 - Score Model 12 fields.
\nValid Score Model product codes are:
\nCode	TransUnion Model	Code	TransUnion Model	Code	TransUnion Model
\n   - 00002	FICO® Score 95*	00913	FICO Insurance Score H2/1.0	00V24	CreditVision Premium Algorithms – Aggregate (without Payment)
\n   - 00004	FICO Score Personal Finance 95	00919	FICO Insurance Score H3/1.0	00V53	CreditVision Premium Algorithms – Spend
\n   - 00008	FICO Auto Score95	00924	FICO Insurance Score H4/1.0	00V60	VantageScore® 3.0*
\n   - 00016	FICO Installment Score 95	00930	FICO Insurance Score H6/1.0	00V64	CreditVision Account Management*
\n   - 00032	New DELPHI	00935	FICO Insurance Score DF/1.0	00V80	CreditVision Auto Score*
\n   - 00064	Income Estimator	00950	FICO Score 98*	00V82	CreditVision Bankruptcy Score*
\n   - 00133	FICO Revenue Score	00977	FICO Insurance Score SM/1.0	00V83	CreditVision Home Equity Propensity Score
\n   - 00138	FACETS	00978	FICO Insurance Score SG/1.0	00W05	CreditVision New Account Score*
\n   - 001NN	VantageScore 4.0	00979	FICO Insurance Score PM/1.0	00W14	CreditVision Premium Algorithms – Collections
\n   - 00219	TransUnion® New Account	00979	FICO Insurance Score PM/1.0	00W14	CreditVision Premium Algorithms – Collections
\n   - 00227	FICO NG Score 1	00980	FICO Insurance Score PG/1.0	00W16	CreditVision Income Estimator
\n   - 00241	Energy	00990	FICO Auto Score 98	00W18	FICO Score 9*
\n   - 00256	FICO Bankcard Score 95	00991	FICO Installment Score 98	00W40	VantageScore 3.0 with Positive Factor Codes
\n   - 00300	REWARD	00992	FICO Personal Finance Score 98 5	00W45	CreditVision Personal Loan Propensity Score
\n   - 00315	Wireless	00993	FICO Bankcard Score 98	00W47	CreditVision Mortgage Propensity Score
\n   - 00336	Telco	00C01	Multi-Model Cascade	00W48	CreditVision Bankcard Propensity Score
\n   - 00356	Fraud Model II	00H85	CreditVision Premium Algorithms – General	00W53	CreditVision Auto Propensity Score
\n   - 00401	Fraud Model I	00H86	CreditVision Premium Algorithms – Aggregate (with Payment)	00W82	FICO Auto Score 9
\n   - 00501	DELPHI (redeveloped - 1997)	00H87	CreditVision Premium Algorithms – Trade-to-Consumer	00W83	FICO Bankcard Score 9
\n   - 00601	FICO Bankruptcy Score 1	00H88	CreditVision Premium Algorithms – Balance Magnitude	00X01	EDGE 1
\n   - 00701	TransUnion Auto	00H89	CreditVision Premium Algorithms – Revolver	00X02	EDGE 2
\n   - 00730	TransUnion-Account Management	00H90	CreditVision Premium Algorithms – Wallet Share	00X46	FICO Bankruptcy Score 2
\n   - 00820	FICO Insurance Score NS/1.0	00H91	CreditVision Premium Algorithms – Payment	00XB2	Score Percentile Ranking – FICO Classic 08
\n   - 00842	FICO Insurance Score SM/1	00N20	FICO Auto Score 8*	00XB3	Score Percentile Ranking – FICO Auto 08
\n   - 00864	FICO Insurance Score SG/1	00N21	FICO Bankcard Score 8	00XB4	Score Percentile Ranking – FICO Classic 04
\n   - 00875	FICO Insurance Score H1/2.0	00N92	FICO Mortgage Score 8	00XB5	Score Percentile Ranking – FICO Auto 2004
\n   - 00876	FICO Insurance Score H2/2.0	00N94	VantageScore® 2.0*	00XB6	Score Percentile Ranking – FICO Classic 98
\n   - 00877	FICO Insurance Score H3/2.0	00P02	FICO Score 4*	00XB7	Score Percentile Ranking – FICO Classic 95
\n   - 00878	FICO Insurance Score H4/2.0	00P11	FICO Bankcard Score 4	00XB8	Score Percentile Ranking – VantageScore
\n   - 00879	FICO Insurance Score H6/2.0	00P12	FICO Auto Score 4*	00Y39	Score Percentile Ranking – VantageScore 3.0
\n   - 00882	FICO Insurance Score PM/1	00P13	FICO Installment Score 4	00Y41	Score Percentile Ranking – CreditVision Auto
\n   - 00889	FICO Insurance Score DF/2.0	00P14	FICO Personal Finance Score 4	00Y43	Score Percentile Ranking – CreditVision Account Management
\n   - 00896	TransUnion Bankruptcy	00P94	VantageScore*®	00Y47	Score Percentile Ranking – CreditVision Bankruptcy
\n   - 00900	FICO Insurance Score PG1	00Q88	FICO Score 8*	00Y49	Score Percentile Ranking – CreditVision New Account
\n   - 00906	FICO Insurance Score H1/1.0	 	 	00Y70	Score Percentile Ranking VantageScore 4.0*
\n
\n*These models are available with score percentile ranking.
`)
creditReportRecordFields.set("SCOREMODEL", `
\n### SCOREMODEL
\nField Number:      **185:002**
\nMnemonic:          **SCOREMODEL:2**
\nData Type:         **5 Characters**
\nSource:            **System-entered & User-entered**
\nHelp File:         **02995**
\nDefault Control:   **No**
\n
\nScore models are online empirical scoring systems that analyze information about an individual to derive a numeric score that is predictive of certain behavior. Score models are TransUnion add-on products.
\n
\nThe system accepts up to 12 score models for a single TransUnion stand-alone product.
\n
\nFor a list of valid Score Model product codes, see Score Model 01.
`)
creditReportRecordFields.set("SCOREMODEL", `
\n### SCOREMODEL
\nField Number:      **185:003**
\nMnemonic:          **SCOREMODEL:3**
\nData Type:         **5 Characters**
\nSource:System-entered & User-entered
\nHelp File:         **02995**
\nDefault Control:   **No**
\n
\nScore models are online empirical scoring systems that analyze information about an individual to derive a numeric score that is predictive of certain behavior. Score models are TransUnion add-on products.
\n
\nThe system accepts up to 12 score models for a single TransUnion stand-alone product.
\n
\nFor a list of valid Score Model product codes, see Score Model 01.
`)
creditReportRecordFields.set("SCOREMODEL", `
\n### SCOREMODEL
\nField Number:      **185:004**
\nMnemonic:          **SCOREMODEL:4**
\nData Type:         **5 Characters**
\nSource:System-entered & User-entered
\nHelp File:         **02995**
\nDefault Control:   **No**
\n
\nScore models are online empirical scoring systems that analyze information about an individual to derive a numeric score that is predictive of certain behavior. Score models are TransUnion add-on products.
\n
\nThe system accepts up to 12 score models for a single TransUnion stand-alone product.
\n
\nFor a list of valid Score Model product codes, see Score Model 01.
`)
creditReportRecordFields.set("SCOREMODEL", `
\n### SCOREMODEL
\nField Number:      **185:005**
\nMnemonic:          **SCOREMODEL:5**
\nData Type:         **5 Characters**
\nSource:            **System-entered & User-entered**
\nHelp File:         **02995**
\nDefault Control:   **No**
\n
\nScore models are online empirical scoring systems that analyze information about an individual to derive a numeric score that is predictive of certain behavior. Score models are TransUnion add-on products.
\n
\nThe system accepts up to 12 score models for a single TransUnion stand-alone product.
\n
\nFor a list of valid Score Model product codes, see Score Model 01.
`)
creditReportRecordFields.set("SCOREMODEL", `
\n### SCOREMODEL
\nField Number:      **185:006**
\nMnemonic:          **SCOREMODEL:6**
\nData Type:         **5 Characters**
\nSource:            **System-entered & User-entered**
\nHelp File:         **02995**
\nDefault Control:   **No**
\n
\nScore models are online empirical scoring systems that analyze information about an individual to derive a numeric score that is predictive of certain behavior. Score models are TransUnion add-on products.
\n
\nThe system accepts up to 12 score models for a single TransUnion stand-alone product.
\n
\nFor a list of valid Score Model product codes, see Score Model 01.
`)
creditReportRecordFields.set("SCOREMODEL", `
\n### SCOREMODEL
\nField Number:      **185:007**
\nMnemonic:          **SCOREMODEL:7**
\nData Type:         **5 Characters**
\nSource:            **System-entered & User-entered**
\nHelp File:         **02995**
\nDefault Control:   **No**
\n
\nScore models are online empirical scoring systems that analyze information about an individual to derive a numeric score that is predictive of certain behavior. Score models are TransUnion add-on products.
\n
\nThe system accepts up to 12 score models for a single TransUnion stand-alone product.
\n
\nFor a list of valid Score Model product codes, see Score Model 01.
`)
creditReportRecordFields.set("SCOREMODEL", `
\n### SCOREMODEL
\nField Number:      **185:008**
\nMnemonic:          **SCOREMODEL:8**
\nData Type:         **5 Characters**
\nSource:            **System-entered & User-entered**
\nHelp File:         **02995**
\nDefault Control:   **No**
\n
\nScore models are online empirical scoring systems that analyze information about an individual to derive a numeric score that is predictive of certain behavior. Score models are TransUnion add-on products.
\n
\nThe system accepts up to 12 score models for a single TransUnion stand-alone product.
\n
\nFor a list of valid Score Model product codes, see Score Model 01.
`)
creditReportRecordFields.set("SCOREMODEL", `
\n### SCOREMODEL
\nField Number:      **185:009**
\nMnemonic:          **SCOREMODEL:9**
\nData Type:         **5 Characters**
\nSource:            **System-entered & User-entered**
\nHelp File:         **02995**
\nDefault Control:   **No**
\n
\nScore models are online empirical scoring systems that analyze information about an individual to derive a numeric score that is predictive of certain behavior. Score models are TransUnion add-on products.
\n
\nThe system accepts up to 12 score models for a single TransUnion stand-alone product.
\n
\nFor a list of valid Score Model product codes, see Score Model 01.
`)
creditReportRecordFields.set("SCOREMODEL", `
\n### SCOREMODEL
\nField Number:      **185:010**
\nMnemonic:          **SCOREMODEL:10**
\nData Type:         **5 Characters**
\nSource:            **System-entered & User-entered**
\nHelp File:         **02995**
\nDefault Control:   **No**
\n
\nScore models are online empirical scoring systems that analyze information about an individual to derive a numeric score that is predictive of certain behavior. Score models are TransUnion add-on products.
\n
\nThe system accepts up to 12 score models for a single TransUnion stand-alone product.
\n
\nFor a list of valid Score Model product codes, see Score Model 01.
`)
creditReportRecordFields.set("SCOREMODEL", `
\n### SCOREMODEL
\nField Number:      **185:011**
\nMnemonic:          **SCOREMODEL:11**
\nData Type:         **5 Characters**
\nSource:            **System-entered & User-entered**
\nHelp File:         **02995**
\nDefault Control:   **No**
\n
\nScore models are online empirical scoring systems that analyze information about an individual to derive a numeric score that is predictive of certain behavior. Score models are TransUnion add-on products.
\n
\nThe system accepts up to 12 score models for a single TransUnion stand-alone product.
\n
\nFor a list of valid Score Model product codes, see Score Model 01.
`)
creditReportRecordFields.set("SCOREMODEL", `
\n### SCOREMODEL
\nField Number:      **185:012**
\nMnemonic:          **SCOREMODEL:12**
\nData Type:         **5 Characters**
\nSource:            **System-entered & User-entered**
\nHelp File:         **02995**
\nDefault Control:   **No**
\n
\nScore models are online empirical scoring systems that analyze information about an individual to derive a numeric score that is predictive of certain behavior. Score models are TransUnion add-on products.
\n
\nThe system accepts up to 12 score models for a single TransUnion stand-alone product.
\n
\nFor a list of valid Score Model product codes, see Score Model 01.
`)
creditReportRecordFields.set("USETYPE", `
\n### USETYPE
\nField Number:      **186**
\nMnemonic:          **USETYPE**
\nData Type:         **2 Characters**
\nSource:            **System-entered & User-entered**
\nHelp File:         **02996**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. It is not used for Equifax or Experian. For TransUnion Version 4, you can access this field only if you enter (01) Credit, (03) TracePlus, or (06) Peer at the Inquiry Type field. TransUnion does not use this field for any version before Version 4.
\n
\nThe Use Type field may be used to procure a frozen Credit Report file from TransUnion for an exempt use under the law. You may also be required to specify a use type if you use CRS, to pull TransUnion reports from a third-party reseller. If you received any of the level two errors in a TransUnion Version 4 Error Segment related to permissible purpose you may need to specify a valid use type before you will be able to pull the Credit Report successfully.
\n
\nThe list of valid values in the Use Type field change frequently. For more information, refer to the help file that accompanies the Symitar release. The most recent values are made available through the Security Freeze page on TransUnion's website.
\n
\nIf a subscriber performs an inquiry on a frozen file with a valid use type code, the system returns the file and the following occurs:
`)
creditReportRecordFields.set("COMMERCIALCODE", `
\n### COMMERCIALCODE
\nField Number:      **187**
\nMnemonic:          **COMMERCIALCODE**
\nData Type:         **Code to 1**
\nSource:            **User-entered**
\nHelp File:         **2201**
\nDefault Control:   **No**
\n
\nThis field stores (0) Consumer for making a ChexSystems inquiry for a consumer or (1) Business if the inquiry is for a business.
`)
creditReportRecordFields.set("", `
\n### 
\nField Number:      **188:1**
\nMnemonic:          **IDNUMBER:1**
\nData Type:         **25 Characters**
\nSource:            **User-entered**
\nHelp File:         **2202**
\nDefault Control:   **No**
\n
\nThis field stores the identification number (such as a driver's license number) for making a ChexSystems inquiry (see ChexSystems Interface).
`)
creditReportRecordFields.set("IDNUMBER", `
\n### IDNUMBER
\nField Number:      **188:2**
\nMnemonic:          **IDNUMBER:2**
\nData Type:         **25 Characters**
\nSource:            **User-entered**
\nHelp File:         **2202**
\nDefault Control:   **No**
\n
\nEnter the identification number (such as a driver's license number) for the spouse of the subject of the inquiry.
`)
creditReportRecordFields.set("IDSTATE", `
\n### IDSTATE
\nField Number:      **189:1**
\nMnemonic:          **IDSTATE:1**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nHelp File:         **2203**
\nDefault Control:   **No**
\n
\nThis field stores the two-character code for the state of residence for making a ChexSystems inquiry (see ChexSystems Interface).
`)
creditReportRecordFields.set("IDSTATE", `
\n### IDSTATE
\nField Number:      **189:2**
\nMnemonic:          **IDSTATE:2**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nHelp File:         **2203**
\nDefault Control:   **No**
\n
\nEnter the two-character code for the state of residence for the spouse of the subject of the inquiry.
`)
creditReportRecordFields.set("STRATEGYTYPE", `
\n### STRATEGYTYPE
\nField Number:      **190**
\nMnemonic:          **STRATEGYTYPE**
\nData Type:         **30 Characters**
\nSource:            **User-entered**
\nHelp File:         **2997**
\nDefault Control:   **No**
\n
\nThis field is used to send the Strategy Type Identifier for a ChexSystems QualiFile credit report to eFunds.
\n
\nEnter a value specified by eFunds to pull a credit report based on a defined Strategy Type.
\n***Important:***  his functionality will only take effect if a QualiFile credit report is requested (Q in the Optional Feature Code for a ChexSystems account report).
`)
creditReportRecordFields.set("SPOUSEACCESSPIN", `
\n### SPOUSEACCESSPIN
\nField Number:      **191**
\nMnemonic:          **SPOUSEACCESSPIN**
\nData Type:         **15 Characters**
\nSource:            **User-entered**
\nHelp File:         **None**
\nDefault Control:   **No**
\n
\nThis field has different values for Equifax, Experian, and Transunion.
\n
\nEnter the value supplied by the spouse or secondary borrower on the loan to unfreeze the spouse's credit report.
`)
creditReportRecordFields.set("INTERNETUSERID", `
\n### INTERNETUSERID
\nField Number:      **192**
\nMnemonic:          **INTERNETUSERID**
\nData Type:         **10 Characters**
\nSource:            **System-entered**
\nDefault Control:   **blank**
\n
\nEnter the user ID (up to 10 characters) your credit union uses with your Internet Password.
`)
creditReportRecordFields.set("INTERNETPASSWD", `
\n### INTERNETPASSWD
\nField Number:      **193**
\nMnemonic:          **INTERNETPASSWD**
\nData Type:         **40 Characters**
\nSource:            **System-entered**
\nDefault Control:   **blank**
\n
\nEnter the password (up to 40 characters) your credit union uses with your Internet User ID.
`)
creditReportRecordFields.set("USERID", `
\n### USERID
\nField Number:      **194**
\nMnemonic:          **USERID**
\nData Type:         **40 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\nDefault Value: 0
\n
\nEnter the generic ChexSystems User ID that eFunds gives credit unions who use their third-party add-on.
`)
creditReportRecordFields.set("IPADDRESS", `
\n### IPADDRESS
\nField Number:      **195**
\nMnemonic:          **IPADDRESS**
\nData Type:         **15 Characters**
\nSource:            **User-entered**
\nDefault Control:   **No**
\nDefault Value: Null
\n
\nEnter your credit union's external firewall IP (Internet Protocol) address for use with ChexSystems (if your credit union uses this third-party add-on).
`)
creditReportRecordFields.set("SERVICEBUREAU", `
\n### SERVICEBUREAU
\nField Number:      **196**
\nMnemonic:          **SERVICEBUREAU**
\nData Type:         **Yes/No**
\nSource:            **User-entered**
\nDefault Control:   **No**
\nDefault Value: 0
\n
\nThis field, formerly used with ChexSystems, is now suppressed.
`)
creditReportRecordFields.set("TESTENVIRONMENT", `
\n### TESTENVIRONMENT
\nField Number:      **197**
\nMnemonic:          **TESTENVIRONMENT**
\nData Type:         **Yes/No**
\nSource:            **User-entered**
\nDefault Control:   **No**
\nDefault Value: 0
\n
\nSelect one of the following:
\n***Important:***  We recommend that you contact your credit bureau before running a test to inquire whether you will be charged for using the test environment.
`)
creditReportRecordFields.set("OFACINQUIRY", `
\n### OFACINQUIRY
\nField Number:      **198**
\nMnemonic:          **OFACINQUIRY**
\nData Type:         **Yes/No**
\nSource:            **User-entered**
\nDefault Control:   **No**
\nDefault Value: 0
\n
\nSelect one of the following for use with Experian credit reports:
`)
creditReportRecordFields.set("ARMALERT", `
\n### ARMALERT
\nField Number:      **199**
\nMnemonic:          **ARMALERT**
\nData Type:         **1 Character (Y or N)**
\nSource:            **System-defined & User-entered**
\nHelp File:         **02213**
\nDefault Control:   **No**
\n
\nThe Adjustable Rate Mortgage (ARM) Alert field is available when you select TransUnion at the Bureau field drop-down menu. This alert is an add-on service available when requested with a TransUnion credit inquiry. Enter Y (yes) to request ARM alerts be returned with the credit inquiry request results sent from the bureau. You can only enter Y when the credit inquiry Type field is set to Credit. Enter N (no) if you do not want the alerts; this is the default. If the credit inquiry Type is not set to Credit, then you cannot edit the ARM Alert field.
\n
\nFor details on ARM Alert output see TransUnion ARM Alert Service.
`)
creditReportRecordFields.set("INCLUDEQUALIFILE", `
\n### INCLUDEQUALIFILE
\nField Number:      **201**
\nMnemonic:          **INCLUDEQUALIFILE**
\nData Type:         **Yes/No**
\nSource:            **User-entered**
\nHelp File:         **2215**
\nDefault Control:   **No**
\n
\nThis field is used only for ChexSystems.
`)
creditReportRecordFields.set("INCLUDEIDVERIFICATION", `
\n### INCLUDEIDVERIFICATION
\nField Number:      **202**
\nMnemonic:          **INCLUDEIDVERIFICATION**
\nData Type:         **Yes/No**
\nSource:            **User-entered**
\nHelp File:         **2216**
\nDefault Control:   **No**
\n
\nThis field is used only for ChexSystems.
`)
creditReportRecordFields.set("INCLUDEOFAC", `
\n### INCLUDEOFAC
\nField Number:      **203**
\nMnemonic:          **INCLUDEOFAC**
\nData Type:         **Yes/No**
\nSource:            **User-entered**
\nHelp File:         **2217**
\nDefault Control:   **No**
\n
\nThis field is used only for ChexSystems.
`)
creditReportRecordFields.set("INQUIRYID", `
\n### INQUIRYID
\nField Number:      **204**
\nMnemonic:          **INQUIRYID**
\nData Type:15 Characters
\nSource:            **User-entered**
\nHelp File:         **2218**
\nDefault Control:   **No**
\n
\nThis field is used only for ChexSystems.
\n
\nEnter the identification number of the transaction.
\n
\nOnly ChexSystems uses this field. It is optional for QualiFile It is also optional with business and consumer ID Verification (Inquiry Type = 1). FIS requires this field for business and consumer Add IDV Action requests (Inquiry Type = 2).
\n
\nYou can update this field only when you set the Include QualiFile field to Yes.
`)
creditReportRecordFields.set("ACTIONTEXT", `
\n### ACTIONTEXT
\nField Number:      **205**
\nMnemonic:ACTIONTEXT
\nData Type:         **40 Characters**
\nSource:            **User-entered**
\nHelp File:         **2219**
\nDefault Control:   **No**
\n
\nUse this free-form field to post "Additional Action" comments to the record along with the request or use this field after sending the request using an Inquiry Type of Add IDV Action.
\n
\nUse this field as the User Defined Transaction Text for ID Verification (IDV) requests from the ChexSystems suite and when requesting Add IDV Actions.
\n
\nYou must use this field for both consumer and business Add IDV.
\n
\nUse this field only for ChexSystems' ID Verification product. You can only maintain it if you set the Include IDV Report field to Yes.
`)
creditReportRecordFields.set("RECORDTEXT", `
\n### RECORDTEXT
\nField Number:      **206**
\nMnemonic:          **RECORDTEXT**
\nData Type:40 Characters
\nSource:            **User-entered**
\nHelp File:         **2220**
\nDefault Control:   **No**
\n
\nEnter a unique value to identify the consumer account. FIS displays this field, returning the Record Text as the account number attribute in the response object. You can search this field on FIS's website for reporting.
\n
\nOnly ChexSystems' ID Verification product uses this field.
`)
creditReportRecordFields.set("IDVERIFICATIONOID", `
\n### IDVERIFICATIONOID
\nField Number:      **207**
\nMnemonic:          **IDVERIFICATIONOID**
\nData Type:38 Characters
\nSource:            **User-entered**
\nHelp File:         **2221**
\nDefault Control:   **No**
\n
\nOnly ChexSystems Uses this field. FIS requires it for consumer and business Add IDV Action (Inquiry Type = 2) and Add IDV Override (Inquiry Type = 3) requests. It is optional for consumer and business Address Analysis (Inquiry Type = 5) and Consumer Red Flag Checklist (Inquiry Type = 6) requests.
\n
\nThis is the identification number of the transaction.
`)
creditReportRecordFields.set("OVERRIDETEXT", `
\n### OVERRIDETEXT
\nField Number:      **208**
\nMnemonic:          **OVERRIDETEXT**
\nData Type:40 Characters
\nSource:            **User-entered**
\nHelp File:         **2222**
\nDefault Control:   **No**
\n
\nEnter a reason for overriding failed response for the ID Verification product.
\n
\nOnly Chexsystems uses this field; include it for both consumer and business Add OFAC Override requests (Inquiry Type = 6).
`)
creditReportRecordFields.set("OFACOID", `
\n### OFACOID
\nField Number:      **209**
\nMnemonic:          **OFACOID**
\nData Type:         **38 Characters**
\nSource:            **User-entered**
\nHelp File:         **2223**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this field. You must include it in consumer and business Add OFAC Override requests (Inquiry Type = 4).
\n
\nEnter an asterisk (*) into this field to open a dialog window. The system pulls data from a previously pulled and completed consumer ChexSystems suite report. The previous inquiry requested an OFAC report and returned a failed response.
\n
\nYou must include this field for both consumer and business inquires.
\n***Important:***  Although this field accepts 38 characters, the system can only send or receive 10 of its characters when communicating with FIS. If you enter more than 10 characters, an error message displays:
`)
creditReportRecordFields.set("CHEXACCTNUMBER", `
\n### CHEXACCTNUMBER
\nField Number:      **210**
\nMnemonic:CHEXACCTNUMBER
\nData Type:         **20 Characters**
\nSource:            **User-entered**
\nHelp File:         **2224**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this field. It is an optional field, but you must fill it in with the member's account number if you fill in the R&T Number field.
`)
creditReportRecordFields.set("RTNUMBER", `
\n### RTNUMBER
\nField Number:      **211**
\nMnemonic:RTNUMBER
\nData Type:         **9 Characters**
\nSource:            **User-entered**
\nHelp File:         **2225**
\nDefault Control:   **No**
\n
\nOnly ChexSystems business requests (Commercial Code = 1) use this field.
\n
\nThis is the routing and transit number.
`)
creditReportRecordFields.set("BUSINESSNAME", `
\n### BUSINESSNAME
\nField Number:      **212**
\nMnemonic:          **BUSINESSNAME**
\nData Type:         **32 Characters**
\nSource:            **User-entered**
\nHelp File:         **2226**
\nDefault Control:   **No**
\n
\nFIS requires this field for ChexSystems suite reports and Address Analysis reports (Inquiry Type = 1 or 5). It is optional for Add IDV Actions, Add IDV Override, and Add OFAC Override (Inquiry Type = 2, 3, or 4).
\n
\nEnter the name of the business or enter an asterisk (*) in this field to look up the business name from available Name, Credit Report or Person records. Entering an asterisk (*) also copies the business address and TIN from the associated name record.
`)
creditReportRecordFields.set("BUSINESSTYPECODE", `
\n### BUSINESSTYPECODE
\nField Number:      **213**
\nMnemonic:          **BUSINESSTYPECODE**
\nData Type:         **Code to 9**
\nSource:            **User-entered**
\nHelp File:         **2227**
\nDefault Control:   **No**
\n
\nThis field is used only for ChexSystems. This is an optional field. You can only update it when you answer the Include QualiFile Report field with Yes.
\n
\nSelect one of the following:
`)
creditReportRecordFields.set("BUSINESSSTREET", `
\n### BUSINESSSTREET
\nField Number:      **214**
\nMnemonic:          **BUSINESSSTREET**
\nData Type:         **25 Characters**
\nSource:            **User-entered**
\nHelp File:         **2228**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this field. FIS requires it for business ChexSystems suite and Address Analysis inquiries.
\n
\nEnter the street address for a business account.
`)
creditReportRecordFields.set("BUSINESSCITY", `
\n### BUSINESSCITY
\nField Number:      **215**
\nMnemonic:          **BUSINESSCITY**
\nData Type:         **20 Characters**
\nSource:            **User-entered**
\nHelp File:         **2229**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this field. FIS requires it for business ChexSystems suite and Address Analysis inquiries.
\n
\nEnter the city for a business account.
`)
creditReportRecordFields.set("BUSINESSSTATE", `
\n### BUSINESSSTATE
\nField Number:      **216**
\nMnemonic:          **BUSINESSSTATE**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nHelp File:         **2230**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this field. FIS requires it for business ChexSystems suite and Address Analysis inquiries.
\n
\nEnter the state for a business account.
`)
creditReportRecordFields.set("BUSINESSZIP", `
\n### BUSINESSZIP
\nField Number:      **217**
\nMnemonic:          **BUSINESSZIP**
\nData Type:         **10 Characters**
\nSource:            **User-entered**
\nHelp File:         **2231**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this field. FIS requires it for business ChexSystems suite and Address Analysis inquiries.
\n
\nEnter the ZIP Code for a business account. If you are entering a 9-digit ZIP Code, do not use the dash (-).
`)
creditReportRecordFields.set("BUSINESSPHONE", `
\n### BUSINESSPHONE
\nField Number:      **218**
\nMnemonic:          **BUSINESSPHONE**
\nData Type:         **12 Characters**
\nSource:            **User-entered**
\nHelp File:         **2232**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this field. FIS requires it for business ChexSystems suite and Address Analysis inquiries.
\n
\nEnter the phone number for a business account.
`)
creditReportRecordFields.set("BUSINESSPREVSTREET", `
\n### BUSINESSPREVSTREET
\nField Number:      **219**
\nMnemonic:          **BUSINESSPREVSTREET**
\nData Type:         **25 Characters**
\nSource:            **User-entered**
\nHelp File:         **2233**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this field. FIS requires it for business ChexSystems Suite inquiries.
\n
\nEnter the previous street address for a business account.
`)
creditReportRecordFields.set("BUSINESSPREVCITY", `
\n### BUSINESSPREVCITY
\nField Number:      **220**
\nMnemonic:          **BUSINESSPREVCITY**
\nData Type:         **20 Characters**
\nSource:            **User-entered**
\nHelp File:         **2234**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this field. FIS requires it for business Address Analysis inquiries.
\n
\nEnter the previous city for a business account.
`)
creditReportRecordFields.set("BUSINESSPREVSTATE", `
\n### BUSINESSPREVSTATE
\nField Number:      **221**
\nMnemonic:          **BUSINESSPREVSTATE**
\nData Type:         **2 Characters**
\nSource:            **User-entered**
\nHelp File:         **2235**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this field. FIS requires it for business Address Analysis inquiries.
\n
\nEnter the previous state code for a business account.
`)
creditReportRecordFields.set("BUSINESSPREVZIP", `
\n### BUSINESSPREVZIP
\nField Number:      **222**
\nMnemonic:          **BUSINESSPREVZIP**
\nData Type:         **10 Characters**
\nSource:            **User-entered**
\nHelp File:         **2236**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this field.
\n
\nEnter the previous ZIP Code for a business account. If you enter a 9-digit ZIP Code, do not use the dash (-).
`)
creditReportRecordFields.set("DEPOSITAMT", `
\n### DEPOSITAMT
\nField Number:      **223**
\nMnemonic:          **DEPOSITAMT**
\nData Type:         **Money**
\nSource:            **User-entered**
\nHelp File:         **2237**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this field.
\n
\nYou must include the decimal point; do not include a dollar sign ($) or comma.
`)
creditReportRecordFields.set("ADDRANALYSISOID", `
\n### ADDRANALYSISOID
\nField Number:      **224**
\nMnemonic:          **ADDRANALYSISOID**
\nData Type:         **38 Characters**
\nSource:            **User-entered**
\nHelp File:         **2238**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this field.
\n
\nUsing this field requests the Red Flag Checklist generated due to a previously completed Address Analysis request by providing the transaction ID from that request.
\n
\nEntering an asterisk (*) in this field opens a dialog with a list of completed Address Analysis reports on the Account. Choosing one report will populate the Address Analysis OID field with the Address Analysis OID from the response Cred Rep Item records.
\n***Important:***  Although this field can contain 38 characters, you can only send or receive 10 characters when communicating with FIS. If you enter more than 10 characters, an error message displays:
`)
creditReportRecordFields.set("CHEXTRANSID", `
\n### CHEXTRANSID
\nField Number:      **225:1 - 225:3**
\nMnemonic:          **CHEXTRANSID:1 - CHEXTRANSID:3 (3x40 character fields)**
\nData Type:         **96 Characters**
\nSource:            **User-entered**
\nHelp File:         **2239**
\nDefault Control:   **No**
\n
\nOnly the FIS QualiFile product uses these fields.
\n
\nThese fields contain the Transaction ID of one QualiFile report
\n
\nYou can enter a maximum of 96 characters across these three fields:
\n
\nEnter an asterisk (*) into the ChexSystems Transaction ID 1 field to open a dialog window with a list of completed QualiFile reports. Choosing one report populates ChexSystems Transaction IDs 1-3 with the QualiFile Transaction ID from the Credit Report Item record of that report.
`)
creditReportRecordFields.set("REDFLAGALERTLOGID", `
\n### REDFLAGALERTLOGID
\nField Number:      **226**
\nMnemonic:          **REDFLAGALERTLOGID**
\nData Type:         **38 Characters**
\nSource:            **User-entered**
\nHelp File:         **2240**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this field. It is optional for Red Flag Checklist inquiries (Inquiry Type = 6) and required for Red Flag Update inquiries (Inquiry Type = 7).
\n
\nEnter an asterisk (*) into Red Flag Alert Log ID to display a dialog window with a list of completed QualiFile reports. Choosing one report will populate Red Flag Alert Log ID with the QualiFile Transaction ID from the Credit Report Item records of that report.
\n
\nOnly consumer reports, not business reports, use this field.
`)
creditReportRecordFields.set("DOCALTEREDFORGED", `
\n### DOCALTEREDFORGED
\nField Number:      **227**
\nMnemonic:          **DOCALTEREDFORGED**
\nData Type:         **Yes/No**
\nSource:            **User-entered**
\nHelp File:         **2241**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this required field.
\n
\nEnter (0) No or (1) Yes.
\n
\nRed Flag Analysis is only for consumer, not business accounts.
`)
creditReportRecordFields.set("APPEARANCEINCONSISTENT", `
\n### APPEARANCEINCONSISTENT
\nField Number:      **228**
\nMnemonic:          **APPEARANCEINCONSISTENT**
\nData Type:         **Yes/No**
\nSource:            **User-entered**
\nHelp File:         **2242**
\nDefault Control:   **No**
\n
\nOnly ChexSytems uses this required field.
\n
\nEnter (0) No or (1) Yes.
\n
\nRed Flag Analysis is only for consumer, not business accounts.
`)
creditReportRecordFields.set("INFOINCONSISTENT", `
\n### INFOINCONSISTENT
\nField Number:      **229**
\nMnemonic:          **INFOINCONSISTENT**
\nData Type:         **Yes/No**
\nSource:            **User-entered**
\nHelp File:         **2243**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this required field.
\n
\nEnter (0) No or (1) Yes.
\n
\nRed Flag Analysis is only for consumer, not business accounts.
`)
creditReportRecordFields.set("SIGINCONSISTENT", `
\n### SIGINCONSISTENT
\nField Number:      **230**
\nMnemonic:          **SIGINCONSISTENT**
\nData Type:         **Yes/No**
\nSource:            **User-entered**
\nHelp File:         **2244**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this required field.
\n
\nEnter (0) No or (1) Yes.
\n
\nRed Flag Analysis is only for consumer, not business accounts.
`)
creditReportRecordFields.set("APPALTEREDFORGED", `
\n### APPALTEREDFORGED
\nField Number:      **231**
\nMnemonic:          **APPALTEREDFORGED**
\nData Type:         **Yes/No**
\nSource:            **User-entered**
\nHelp File:         **2245**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this required field.
\n
\nEnter (0) No or (1) Yes.
\n
\nRed Flag Analysis is only for consumer, not business accounts.
`)
creditReportRecordFields.set("REDFLAGACTIONTYPEID", `
\n### REDFLAGACTIONTYPEID
\nField Number:      **232**
\nMnemonic:          **REDFLAGACTIONTYPEID**
\nData Type:         **38 Characters**
\nSource:            **User-entered**
\nHelp File:         **2246**
\nDefault Control:   **No**
\n
\nThis required field is used only for ChexSystems.
\n
\nA unique identifier for each red flag on the checklist.
`)
creditReportRecordFields.set("REDFLAGSTATUS", `
\n### REDFLAGSTATUS
\nField Number:      **233**
\nMnemonic:          **REDFLAGSTATUS**
\nData Type:2 Characters
\nSource:            **System-defined**
\nHelp File:         **2247**
\nDefault Control:   **No**
\n
\nThis field is used only for ChexSystems.
\n
\nSelect from the following:
`)
creditReportRecordFields.set("RECOMMENDEDACTIONTYPEID", `
\n### RECOMMENDEDACTIONTYPEID
\nField Number:      **234**
\nMnemonic:          **RECOMMENDEDACTIONTYPEID**
\nData Type:         **Code to 9999**
\nSource:            **System-defined**
\nHelp File:         **2248**
\nDefault Control:   **No**
\n
\nOnly ChexSystems uses this required field.
\n
\nRed Flag Analysis returns a value in this field in response to a Red Flag query or a Red Flag disposition.
\n
\nRed Flag Analysis is only for consumer accounts, not business accounts.
`)
creditReportRecordFields.set("REDFLAGCOMMENTS", `
\n### REDFLAGCOMMENTS
\nField Number:      **235:1 - 235:10**
\nMnemonic:          **REDFLAGCOMMENTS:1 - REDFLAGCOMMENTS:10 (10x33 character fields)**
\nData Type:         **330 Characters**
\nSource:            **User-entered**
\nHelp File:         **2249**
\nDefault Control:   **No**
\n
\nOnly RedFlag Analysis uses these fields.
\n
\nThis field defines what steps you took if you selected the Other option in the Recommended Action Type ID field.
`)
creditReportRecordFields.set("REDFLAGFACTID", `
\n### REDFLAGFACTID
\nField Number:      **236**
\nMnemonic:          **REDFLAGFACTID**
\nData Type:         **40 Characters**
\nSource:            **User-entered**
\nHelp File:         **2250**
\nDefault Control:   **No**
\n
\nThis field holds the ID number of the Red Flag response item. The Red Flag analysis is only for consumer accounts. FIS should return the values in this field in response to a Red Flag query or a Red Flag disposition. If the field requires more than 40 characters, you can find the remainder of the field on the FIS website.
\n
\nOnly ChexSystems uses this field.
`)
creditReportRecordFields.set("BUSMONTHSCURRADDRESS", `
\n### BUSMONTHSCURRADDRESS
\nField Number:      **237**
\nMnemonic:          **BUSMONTHSCURRADDRESS**
\nData Type:         **Code to 11**
\nSource:            **User-Entered**
\nHelp File:         **32001**
\nDefault Control:   **No**
\n
\nBusiness Address Analysis requires this field.
\n
\nThis field works with Years at Curr Addres . For example, if a business has been at a location four and one half years, enter 4 at Years at Curr Address and 6 at Months at Curr Address. The system sends FIS any non-zero value. The system does send a 0 value if the Years at Curr Address is a 0 value and Months at Curr Address is a non-zero value.
`)
creditReportRecordFields.set("BUSYEARSCURRADDRESS", `
\n### BUSYEARSCURRADDRESS
\nField Number:      **238**
\nMnemonic:          **BUSYEARSCURRADDRESS**
\nData Type:         **Code to 99**
\nSource:            **User-Entered**
\nHelp File:         **32002**
\nDefault Control:   **No**
\n
\nBusiness Address Analysis requires this field.
\n
\nThis field works with Months at Curr Address. For example, if a business has been at a location four and one half years, enter 4 at Years at Curr Address and 6 at Months at Curr Address. The system sends to FIS any non-zero value. The system does send a 0 value if the Years at Curr Address is a non-zero value and Months at Curr Address is a 0 value.
\n
\nOnly ChexSystems business requests use this field.
`)
creditReportRecordFields.set("ACTUALPAYMENTAMT", `
\n### ACTUALPAYMENTAMT
\nField Number:      **239**
\nMnemonic:          **ACTUALPAYMENTAMT**
\nData Type:         **Yes/No**
\nSource:            **User-Entered**
\nHelp File:         **32003**
\nDefault Control:   **No**
\n
\nSpecify Yes or No to indicate whether to request the actual payment amount data from the credit report.
\n***Important:***  You cannot select Yes if:
\n
\nIf you set the Actual Payment Amount field to Yes and:
\n
\nYou can only use the Actual Payment Amount field for Experian version 7 credit report requests.
`)
creditReportRecordFields.set("EXPANDEDHISTORY", `
\n### EXPANDEDHISTORY
\nField Number:      **240**
\nMnemonic:          **EXPANDEDHISTORY**
\nData Type:         **Yes/No**
\nSource:            **User-Entered**
\nHelp File:         **32004**
\nDefault Control:   **No**
\n
\nSpecify Yes or No to indicate whether to request the expanded history data from the credit report.
\n***Important:***  You cannot select Yes if:
\n
\nIf you set the Expanded History field to Yes and:
\n
\nYou can only use the Expanded History field for Experian version 7 credit report requests.
`)
creditReportRecordFields.set("RESPONSEFORMAT", `
\n### RESPONSEFORMAT
\nField Number:      **241**
\nMnemonic:          **RESPONSEFORMAT**
\nData Type:         **Code to 2**
\nSource:            **User-entered**
\nHelp File:         **02817**
\nDefault Control:   **No**
\nDefault Value: Retrieved from the Credit Retrieval Parameters or custom code. If not specified, the value is 0.
\n
\nThis field is used only for TransUnion. For field values for TransUnion, see Response Format in Credit Report Record Fields: TransUnion.
\n
\nPowerOn Auto-Variable: @CREDITREPORTRESPONSEFORMAT
`)
creditReportRecordFields.set("STARTEMPDATE", `
\n### STARTEMPDATE
\nField Number:      **242**
\nMnemonic:          **STARTEMPDATE**
\nData Type:         **Date**
\nSource:            **User-entered**
\nHelp File:         **32005**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion 4.1.
\n
\nPowerOn Auto-Variable: @CREDITREPORTSTARTEMPDATE
\n
\nEnter the date the applicant was hired by the employer. This field is related to Date Hired.
`)
creditReportRecordFields.set("ENDEMPDATE", `
\n### ENDEMPDATE
\nField Number:      **243**
\nMnemonic:          **ENDEMPDATE**
\nData Type:         **Date**
\nSource:            **User-entered**
\nHelp File:         **32006**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion 4.1.
\n
\nPowerOn Auto-Variable: @CREDITREPORTENDEMPDATE
\n
\nIf applicable, enter the date the applicant was separated from the employer. This field is related to Date Separated.
`)
creditReportRecordFields.set("SPOUSEOCCUPATION", `
\n### SPOUSEOCCUPATION
\nField Number:      **244**
\nMnemonic:          **SPOUSEOCCUPATION**
\nData Type:         **20 Characters**
\nSource:            **User-entered**
\nHelp File:         **32007**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion.
\n
\nPowerOn Auto-Variable: @CREDITREPORTSPOUSEOCCUPATION
\n
\nEnter the description of the spouse's occupation.
`)
creditReportRecordFields.set("SPOUSESTARTEMPDATE", `
\n### SPOUSESTARTEMPDATE
\nField Number:      **245**
\nMnemonic:          **SPOUSESTARTEMPDATE**
\nData Type:         **Date**
\nSource:            **User-entered**
\nHelp File:         **32008**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion.
\n
\nPowerOn Auto-Variable: @CREDITREPORTSPOUSESTARTEMPDATE
\n
\nEnter the date that the applicant's spouse was hired by the employer.
`)
creditReportRecordFields.set("SPOUSEENDEMPDATE", `
\n### SPOUSEENDEMPDATE
\nField Number:      **246**
\nMnemonic:          **SPOUSEENDEMPDATE**
\nData Type:         **Date**
\nSource:            **User-entered**
\nHelp File:         **32009**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion.
\n
\nPowerOn Auto-Variable: @CREDITREPORTSPOUSEENDEMPDATE
\n
\nIf applicable, enter the date that the applicant's spouse was separated from the employer.
`)
creditReportRecordFields.set("SPOUSEPAYBASIS", `
\n### SPOUSEPAYBASIS
\nField Number:      **247**
\nMnemonic:          **SPOUSEPAYBASIS**
\nData Type:         **1 Character**
\nSource:            **User-entered**
\nHelp File:         **32010**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. For field values for TransUnion, see Spouse Pay Basis in Credit Report Record Fields: TransUnion.
\n
\nPowerOn Auto-Variable: @CREDITREPORTSPOUSEPAYBASIS
\n
\nThis field indicates the period for which the spouse income is specified.
`)
creditReportRecordFields.set("SPOUSEINCOME", `
\n### SPOUSEINCOME
\nField Number:      **248**
\nMnemonic:          **SPOUSEINCOME**
\nData Type:         **Money**
\nSource:            **User-entered**
\nHelp File:         **32011**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion. For field values for TransUnion, see Spouse Income in Credit Report Record Fields: TransUnion.
\n
\nMaximum Value: $999,999,999,999.99
\n
\nPowerOn Auto-Variable: @CREDITREPORTSPOUSEINCOME
\n
\nEnter the spouse's income amount for the period specified in the Spouse Pay Basis field.
`)
creditReportRecordFields.set("SPOUSESECONDARYNM", `
\n### SPOUSESECONDARYNM
\nField Number:      **249**
\nMnemonic:          **SPOUSESECONDARYNM**
\nData Type:         **25 Characters**
\nSource:            **User-entered**
\nHelp File:         **32012**
\nDefault Control:   **No**
\n
\nThis field is used only for TransUnion.
\n
\nPowerOn Auto-Variable: @CREDITREPORTSPOUSESECONDARYNM
\n
\nUse this field to store the spouse's maternal surname for credit report requests on Puerto Rican subjects (up to 25 characters).
`)
