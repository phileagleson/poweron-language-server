export const loanAppRecordFields = new Map<string, string>()
loanAppRecordFields.set("type", ` 
\n### Application Type
\nThis field stores a credit union-defined code to identify the kind of application.
\nField Number         **002**
\nMnemonic             **TYPE**
\nData Type            **Code to 14**
\nSource               **User-entered**
\nHelp File            **01602**
\nDefault Control      **No**
\nDefault Value        **00**
\n
\nEnter a credit union-defined code (0-14) to identify the kind of application (membership application, loan application, etc.).
`)
loanAppRecordFields.set("id", ` 
\n### Application ID
\nThis field stores the ID you assign to the Application record when you create it.
\nField Number         **001**
\nMnemonic             **ID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **01601**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the two-character or four-character ID you assign to the Application record when you create it.
\n
\nYou cannot access this field for file maintenance after the initial entry.
`)
loanAppRecordFields.set("subtype", ` 
\n### Sub Type
\nThis field stores a credit union-defined code that identifies the application type.
\nField Number         **003**
\nMnemonic             **SUBTYPE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **01603**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nOptional entry: Enter a credit union-defined code (0-99) to further identify the application type.
`)
loanAppRecordFields.set("formtype", ` 
\n### Form Type
\nThis field stores a credit union-defined code to identify the type of form used for the application.
\nField Number         **004**
\nMnemonic             **FORMTYPE**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **01604**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nEnter a credit union-defined code (0-9) to identify the type of form used for the application.
`)
loanAppRecordFields.set("event", ` 
\n### Event Number
\nThis field stores the number of the current application workflow event for the application.
\nField Number         **108**
\nMnemonic             **EVENT**
\nData Type            **Code to 50**
\nSource               **System-entered**
\nHelp File            **01708**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nThe system updates this field as you process the application through each event in the workflow. These events are similar to the following list:
\n(00) None
\n   - (01) Start/Continue Application
\n   - (02) Applicant Info
\n   - (03) Credit Retrieval
\n   - (04) Liabilities
\n   - (05) Projections
\n   - (06) Decision
\n   - (07) Work Flow complete
\n
\nAlthough you can enter values in this field, the system does not currently use this field.
`)
loanAppRecordFields.set("eventdate", ` 
\n### Event Date
\nThis field stores the date the application workflow value in the Event Number field last changed.
\nField Number         **109**
\nMnemonic             **EVENTDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01709**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nThe system updates this field as you process the application through each event in the workflow.
\n
\nAlthough you can enter values, the system does not currently use this field.
`)
loanAppRecordFields.set("creationdate", ` 
\n### Creation Date
\nThis field stores the current system date when you create the Application record.
\nField Number         **007**
\nMnemonic             **CREATIONDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01607**
\nDefault Control      **Yes**
\nDefault Value        **Date Null**
\n
\nThe system updates this field with the current system date when you create the Application record.
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanAppRecordFields.set("effectivedate", ` 
\n### Effective Date
\nThis field stores the effective date of the Application record.
\nField Number         **008**
\nMnemonic             **EFFECTIVEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01608**
\nDefault Control      **Yes**
\nDefault Value        **Date Null**
\n
\nEnter the effective date of the Application record.
`)
loanAppRecordFields.set("expirationdate", ` 
\n### Expiration Date
\nThis field stores the date the Application record expires.
\nField Number         **009**
\nMnemonic             **EXPIRATIONDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01609**
\nDefault Control      **Yes**
\nDefault Value        **Date Null**
\n
\nEnter the date the Application record expires. If you leave this field blank, the Application record does not expire.
`)
loanAppRecordFields.set("closingdate", ` 
\n### Closing Date
\nThis field stores the date you close this Application record.
\nField Number         **124**
\nMnemonic             **CLOSINGDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01724**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nEnter the date you close this Application record.
`)
loanAppRecordFields.set("lastfmdate", ` 
\n### Last FM Date
\nThis field stores the current system date whenever there is any file maintenance of an Application record or child record field.
\nField Number         **006**
\nMnemonic             **LASTFMDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01606**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nThe system updates this field with the current system date whenever there is any file maintenance of an Application record or child record field.
\n***Important:***  This field in the Application record is not updated when the file maintenance is performed by a batch process. Creation and revision of an Application Tracking record does not cause an update to this field, but deletion of an Application Tracking record does.
\n
\nYou cannot access this field for file maintenance.
`)
loanAppRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date in this field when you create, change, or save the Application record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **169**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01769**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\n***Important:***  The system does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
loanAppRecordFields.set("secondapprequest", ` 
\n### 2nd App Request
\nThis field stores a description of a second application, if applicable.
\nField Number         **116**
\nMnemonic             **SECONDAPPREQUEST**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **01716**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter a description (up to 16 characters) of a second application, if applicable.
`)
loanAppRecordFields.set("secondapprequestamt", ` 
\n### 2nd App Request Amt
\nThis field stores the amount the member requests in a second application, if applicable.
\nField Number         **130**
\nMnemonic             **SECONDAPPREQUESTAMT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01730**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the amount the member requests in a second application, if applicable.
`)
loanAppRecordFields.set("secondapppayment", ` 
\n### 2nd App Payment
\nThis field stores the payment amount associated with the second application, if applicable.
\nField Number         **117**
\nMnemonic             **SECONDAPPPAYMENT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01717**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the payment amount associated with the second application, if applicable.
`)
loanAppRecordFields.set("thirdapprequest", ` 
\n### 3rd App Request
\nThis field stores a description of a third application, if applicable.
\nField Number         **118**
\nMnemonic             **THIRDAPPREQUEST**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **01718**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter a description (up to 16 characters) of a third application, if applicable.
`)
loanAppRecordFields.set("thirdapprequestamt", ` 
\n### 3rd App Request Amt
\nThis field stores the amount the member requests in a third application, if applicable.
\nField Number         **131**
\nMnemonic             **THIRDAPPREQUESTAMT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01731**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the amount the member requests in a third application, if applicable.
`)
loanAppRecordFields.set("thirdapppayment", ` 
\n### 3rd App Payment
\nThis field stores the payment amount associated with the third application, if applicable.
\nField Number         **119**
\nMnemonic             **THIRDAPPPAYMENT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01719**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the payment amount associated with the third application, if applicable.
`)
loanAppRecordFields.set("censustract", ` 
\n### Census Tract
\nThis field stores the number of the census tract in which the applicant resides.
\nField Number         **128**
\nMnemonic             **CENSUSTRACT**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01728**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the number (up to 10 digits) of the census tract in which the applicant resides. Symitar's main office, for example, is in census tract 85.11 and the White House is in census tract 62.02.
`)
loanAppRecordFields.set("vin", ` 
\n### VIN
\nThis field stores the vehicle identification number of any vehicle listed as collateral.
\nField Number         **127**
\nMnemonic             **VIN**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **01727**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the vehicle identification number (up to 20 characters) of any vehicle listed as collateral.
`)
loanAppRecordFields.set("branch", ` 
\n### Branch
\nThis field stores the number of the branch where the application originated.
\nField Number         **005**
\nMnemonic             **BRANCH**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01605**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nEnter the number of the branch (0-9999) where the application originated.
\n
\nThis field automatically defaults to the branch number stored in the Branch field of the console being used. Enable this function by setting the Default Branch parameter in the Application Miscellaneous Parameters to Yes.
`)
loanAppRecordFields.set("creditbureau", ` 
\n### Credit Bureau
\nThis field stores a credit union-defined code to identify the credit bureau providing the credit report used to evaluate the application.
\nField Number         **126**
\nMnemonic             **CREDITBUREAU**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **01726**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nEnter a credit union-defined code (0-9) to identify the credit bureau providing the credit report used to evaluate the application.
\n
\nIf the applicant is applying for more than one loan at the same time, you can store information about the second and third loan requests in the 2nd App Request, 2nd App Payment, 2nd App Request Amt, 3rd App Request, 3rd App Payment, and 3rd App Request Amt fields.
`)
loanAppRecordFields.set("accounttype", ` 
\n### Account Type
\nThis field stores a credit union-defined code to identify the type of account.
\nField Number         **174**
\nMnemonic             **ACCOUNTTYPE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01774**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nEnter a credit union-defined code (0000-9999) to identify the type of account.
`)
loanAppRecordFields.set("createdbyuser", ` 
\n### Created By User
\nThis field stores the User ID and is populated when the record is created.
\nField Number         **185**
\nMnemonic             **CREATEDBYUSER**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01785**
\nDefault Control      **Yes**
\nDefault Value        **Current user number**
\n
\nThis field stores the User ID and is populated when the record is created.
\n
\nUnder normal circumstances, you should not revise this field.
\n***Important:***  This field is automatically filled with the User ID upon creation of a new Account, Share, Loan, Application, or Card record.
`)
loanAppRecordFields.set("createdatbranch", ` 
\n### Created At Branch
\nThis field stores the branch ID of the branch where the Application record is created.
\nField Number         **186**
\nMnemonic             **CREATEDATBRANCH**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01786**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nUnder normal circumstances, you should not revise this field.
`)
loanAppRecordFields.set("userqueue", ` 
\n### User Queue
\nThe field stores whose queue the application is residing in.
\nField Number         **181**
\nMnemonic             **USERQUEUE**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01781**
\nDefault Control      **No**
\nDefault Value        **9999**
\n
\nThe system derives this data from the Queue control file when an application has been assigned to a queue. If the loan application has not been assigned to a queue, the return value is -1. For each application in a queue, there is an entry in the queue file that is sorted by the account, application ID, and the user ID of the queue. For the system to know whose queue the application is residing in, the system looks at this calculated field. You can also access this calculated field via SymConnect and PowerOn specfiles.
\n
\nThe values in the this drop-down field are controlled by the Forward to User IDs parameters in the Application Miscellaneous Parameters.
`)
loanAppRecordFields.set("queuepriority", ` 
\n### Queue Priority
\nThis field stores the level of importance given to this application.
\nField Number         **182**
\nMnemonic             **QUEUEPRIORITY**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **01782**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Low
\n   This application is of low importance.##### (1) Medium
\n   This application is of medium importance.##### (2) High
\n   This application is of high importance.
\n`)
loanAppRecordFields.set("queuedate", ` 
\n### Queue Date
\nThe field stores either the date the application was forwarded to the user or the date the last decision was assigned to the application.
\nField Number         **183**
\nMnemonic             **QUEUEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01783**
\nDefault Control      **No**
\nDefault Value        **Date Null**
`)
loanAppRecordFields.set("queuetime", ` 
\n### Queue Time
\nThe field stores either the time of day the application was forwarded to the user or the time of day the last decision was assigned to the application.
\nField Number         **184**
\nMnemonic             **QUEUETIME**
\nData Type            **Code to 2359**
\nSource               **System-entered**
\nHelp File            **01784**
\nDefault Control      **No**
\nDefault Value        **0000**
`)
loanAppRecordFields.set("decisioncode", ` 
\n### Decision Code
\nThis field stores a user number or a credit union-defined code to identify the person making the application decision.
\nField Number         **111**
\nMnemonic             **DECISIONCODE**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-entered**
\nHelp File            **01711**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nThe system updates this field with the decision code you enter when you use the Decision Options action in the application workflow to make or change an application decision. If you use the Decision Options workflow action to change the application decision, the system clears this field, then updates it with the new decision code you enter when you change the application decision.
`)
loanAppRecordFields.set("decisiondate", ` 
\n### Decision Date
\nThis field stores the date of the decision to approve, deny, or cancel the application, make a counter offer, or place the application in pending mode.
\nField Number         **112**
\nMnemonic             **DECISIONDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01712**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nThe system updates this field with the system date whenever you use the Decision Options action in the application workflow to make or change an application decision. If you use the Decision Options workflow action to change the application decision, the system clears this field, then updates it with the new decision date.
`)
loanAppRecordFields.set("approvalcode", ` 
\n### Approval Code
\nThis field stores a credit union-defined code or the user number of the person who approved the application.
\nField Number         **040**
\nMnemonic             **APPROVALCODE**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-entered**
\nHelp File            **01317**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nThe system prompts for this field when you approve an application during the Decision Options action in the application workflow. If you use the Decision Options workflow action to change the application decision, the system clears this field, then updates it with the new approval code if you approve the application.
\n
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the Approval Code default value for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Approval Code field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("approvaldate", ` 
\n### Approval Date
\nThis field stores the date the application was approved.
\nField Number         **041**
\nMnemonic             **APPROVALDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01641**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nThe system updates this field with the system date when you approve the application during the Decision Options action in the application workflow. If you use the Decision Options workflow action to change the application decision, the system clears this field, then updates it with the new approval date if you approve the application.
`)
loanAppRecordFields.set("approvalamount", ` 
\n### Approval Amount
\nThis field stores the approved loan amount.
\nField Number         **125**
\nMnemonic             **APPROVALAMOUNT**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01725**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nThe system prompts for this field when you approve an application during the Decision Options action in the application workflow. If you use the Decision Options workflow action to change the application decision, the system clears this field, then updates it with the new approval amount if you approve the application.
`)
loanAppRecordFields.set("applicationdate", ` 
\n### Application Date
\nThis field stores the current system date when you create the Application record.
\nField Number         **010**
\nMnemonic             **APPLICATIONDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01610**
\nDefault Control      **Yes**
\nDefault Value        **Date Null**
\n
\nThe system updates this field with the current system date when you create the Application record.
\n
\nYou can revise this date if necessary.
`)
loanAppRecordFields.set("cancellationdate", ` 
\n### Cancellation Date
\nThis field stores the date you canceled the application.
\nField Number         **110**
\nMnemonic             **CANCELLATIONDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01710**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nThe system updates this field with the system date if you cancel the application during the Decision Options action in the application workflow. If you use the Decision Options workflow action to change the application decision, the system clears this field, then updates it with the new cancellation date if you cancel the application.
`)
loanAppRecordFields.set("pendingdate", ` 
\n### Pending Date
\nThis field stores the date you place an application in pending mode to await further action.
\nField Number         **129**
\nMnemonic             **PENDINGDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01729**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nThe system updates this field with the system date if you place an application in pending mode during the Decision Options action in the application workflow. If you use the Decision Options workflow action to change the application decision, the system clears this field, then updates it with the new pending date if you place the application in pending mode.
`)
loanAppRecordFields.set("processorcode", ` 
\n### Processor Code
\nThis field stores the user number of the person who creates the application.
\nField Number         **042**
\nMnemonic             **PROCESSORCODE**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **01642**
\nDefault Control      **No**
\nDefault Value        **0**
`)
loanAppRecordFields.set("inforequestdate", ` 
\n### Info Request Date
\nThis field stores the most recent date you sent the applicant a notice of incomplete application or a request for information.
\nField Number         **123**
\nMnemonic             **INFOREQUESTDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01723**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nYou can enter either the date the information was requested or a date in the future when you expect to receive the information.
`)
loanAppRecordFields.set("denialdate", ` 
\n### Denial Date
\nThis field stores the date you denied the application.
\nField Number         **012**
\nMnemonic             **DENIALDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01612**
\nDefault Control      **Yes**
\nDefault Value        **Date Null**
\n
\nThe system updates this field with the system date when you deny an application during the Decision Options action in the application workflow. If you use the Decision Options workflow action to change the application decision, the system clears this field, then updates it with the new denial date if you deny the application.
`)
loanAppRecordFields.set("denialreason", ` 
\n### Denial Reason 1 - Denial Reason 5
\nThese fields each store a credit union-defined code to indicate the reason for denying or canceling the application or for making a counter offer.
\nField Number         **011:1 - 011:5**
\nMnemonic             **DENIALREASON:1 - DENIALREASON:5**
\nData Type            **Code to 99**
\nSource               **User-entered or System-entered**
\nHelp File            **01611**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nThe system prompts for Denial Reasons when you deny or cancel an application or make a counter offer during the Decision Options action in the application workflow. If you use the Decision Options workflow action to change the application decision, the system clears these fields, then updates them with the denial reasons for the new decision if you deny or cancel the application or make a counter offer.
\n
\nUsually a denial reason code of (9) Other is defined. This reason code is used when an HMDA denial reason requires additional text to describe the reason. This additional text is entered at the Reason for Denial Other 1-7 fields.
\n***Important:***  You should set up help file 01611 to display the credit union-defined denial codes used at your credit union when a user requests help at this field. You should also set up help file 13824 to match help file 01611, since the Denial Reasons prompt in Application Processing uses the same credit union-defined denial codes.
`)
loanAppRecordFields.set("counteredorigamt", ` 
\n### Countered Orig Amt
\nThis field stores the original amount for which the member applied.
\nField Number         **114**
\nMnemonic             **COUNTEREDORIGAMT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01714**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nThe system updates this field with the loan amount if you make a counter offer during the Decision Options action in the application workflow. If you use the Decision Options workflow action to change the application decision, the system clears this field, then updates it with the new value in this field if you make a counter offer.
`)
loanAppRecordFields.set("counterofferexpiredate", ` 
\n### Counter Offer Exp Date
\nThis field stores the date the counter offer expires.
\nField Number         **115**
\nMnemonic             **COUNTEROFFEREXPIREDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **01715**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nThe system prompts for this field when you make a counter offer during the Decision Options action in the application workflow. If you use the Decision Options workflow action to change the application decision, the system clears this field, then updates it with the new value in this field if you make a counter offer.
`)
loanAppRecordFields.set("loantype", ` 
\n### Loan Type
\nThis field stores a credit union-defined code to identify the kind of loan the applicant is applying for.
\nField Number         **038**
\nMnemonic             **LOANTYPE**
\nData Type            **Code to 99 or Code to 9999**
\nSource               **User-entered or System-entered**
\nHelp File            **01304**
\nDefault Control      **Yes**
\nDefault Value        **00**
\n
\nIf you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Loan Type field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("existingloanid", ` 
\n### Existing Loan ID
\nIf the member is applying for an add-on to an existing loan, this field stores the ID of the existing Loan record.
\nField Number         **043**
\nMnemonic             **EXISTINGLOANID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01643**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\n***Important:***  You can enter an asterisk (*) to look up an existing loan ID, or you can enter a complete loan ID if one does not currently exist.
\n
\nIf you use the Pull Fields From App action field in a Loan record, the system stores the value in the Loan ID field from that Loan record in this field.
`)
loanAppRecordFields.set("existingloanbalance", ` 
\n### Existing Loan Bal
\nThis field stores the balance of the loan specified at the Existing Loan ID field.
\nField Number         **044**
\nMnemonic             **EXISTINGLOANBALANCE**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01644**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nThe system updates this field. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Loan Balance field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("loancode", ` 
\n### Loan Code
\nThis field stores a code that defines certain characteristics of the loan and determines how the system processes the loan.
\nField Number         **180**
\nMnemonic             **LOANCODE**
\nData Type            **Code to 6**
\nSource               **User-entered or System-entered**
\nHelp File            **01780**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nIf you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Loan Code field from the Loan record specified at the Existing Loan ID field.
\n#### Data Type Descriptions
\n##### (0) Closed End
\n   The loan is a closed-end loan.
\n##### (1) Open End
\n   The loan is an open-end loan.
\n##### (2) Line of Credit
\n   The loan is a line of credit loan. You cannot use this option if the loan is in a participation.##### (3) Credit Card
\n   The loan is a credit card loan. You cannot use this option if the loan is in a participation.##### (4) Lease
\n   The loan is a lease loan and you have purchased the Leasing Support module from Symitar.##### (5) Avg Daily Bal LOC
\n   The loan is an average daily balance line of credit loan. This option can also be used for any line of credit loan that uses average daily balance finance charge calculations. It works properly only when the loan has a value in the Interest Type field of 10-99. The system does not accrue interest for these loans.##### (6) LOC Combination
\n   The loan is a SymChoice Loan.
\n`)
loanAppRecordFields.set("borrowdate", ` 
\n### Borrow Date
\nThis field stores the date you disburse funds for the loan.
\nField Number         **063**
\nMnemonic             **BORROWDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01663**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nEnter the date you disburse funds for the loan. When you create an Application record, the system fills in this field with the current system date.
\n
\nIf you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Interest Date field from the Loan record specified at the Existing Loan ID field. If you choose to use the Loan Calc Screen action field, the system updates this field with the Loan Date value from the loan calculation screen.
`)
loanAppRecordFields.set("firstduedate", ` 
\n### First Due Date
\nThis field stores the date the first loan payment is due.
\nField Number         **064**
\nMnemonic             **FIRSTDUEDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01664**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nEnter the date the first loan payment is due.
\n
\nIf you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Due Date field from the Loan record specified at the Existing Loan ID field. If you choose to use the Loan Calc Screen action field, the system updates this field with the Due Date value from the loan calculation screen.
`)
loanAppRecordFields.set("payment", ` 
\n### Payment Amount
\nThis field stores the amount of the loan payment.
\nField Number         **065**
\nMnemonic             **PAYMENT**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01329**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the amount of the loan payment.
\n
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the Payment default value for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Payment field from the Loan record specified at the Existing Loan ID field. If you choose to use the Loan Calc Screen action field, the system updates this field with the Payment value from the loan calculation screen.
`)
loanAppRecordFields.set("loanamount", ` 
\n### Loan Amount
\nThis field stores the total amount of the loan.
\nField Number         **066**
\nMnemonic             **LOANAMOUNT**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01666**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the total amount of the loan.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field with the Loan Amount value from the loan calculation screen. If you make a counter offer, the system moves the existing value in this field to the Countered Orig Amt field and updates this field with the amount you enter at the Counter Offer Amount prompt.
`)
loanAppRecordFields.set("termmonths", ` 
\n### Loan Term in Months
\nThis field stores the number of months in the term of the loan.
\nField Number         **067**
\nMnemonic             **TERMMONTHS**
\nData Type            **Code to 999**
\nSource               **User-entered or System-entered**
\nHelp File            **01667**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nEnter the number of months (0-999) in the term of the loan.
\n
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with a calculated value based on the Payment Count and fields in the Loan Defaults in Default Manager.
\n
\nIf you choose to use the Update From Existing Loan action field, the system updates this field with the loan term in months calculated for the Loan record specified at the Existing Loan ID field. If you choose to use the Loan Calc Screen action field, the system updates this field with the Loan Months value from the loan calculation screen.
`)
loanAppRecordFields.set("militaryaprloan", ` 
\n### Military APR Loan
\nThis field stores a code that indicates whether the loan qualifies for the military APR program.
\nField Number         **282**
\nMnemonic             **MILITARYAPRLOAN**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31877**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nFor the loan to qualify, both the borrower and the kind of loan must qualify.
\n
\nYour credit union determines whether the loan qualifies, and then sets the field.
\n#### Data Type Descriptions
\n##### (0) No
\n   The member is not an active duty military service person or a dependent of an active duty service person. Also, set this field to No when the active duty ends.##### (1) Yes
\n   The member qualifies as an active duty service person or a dependent of an active duty service person.
\nThe RB.LOAN.CALCULATE.MAPR and RD.LOAN.CALCULATE.MAPR PowerOn specfiles use the value in this field to determine whether to have the system calculate the military APR.
`)
loanAppRecordFields.set("loandescription", ` 
\n### Description
\nThis field stores a description of the loan.
\nField Number         **062**
\nMnemonic             **LOANDESCRIPTION**
\nData Type            **30 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01377**
\nDefault Control      **Yes**
\nDefault Value        **(Blank)**
\n
\nEnter a description of the loan (up to 30 characters).
\n
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the default description for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value from the Description field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("loanreference", ` 
\n### Loan Ref
\nThis field stores any reference information about the loan.
\nField Number         **121**
\nMnemonic             **LOANREFERENCE**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **01721**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter any reference information about the loan (up to 20 characters).
`)
loanAppRecordFields.set("ecoacode", ` 
\n### ECOA Code
\nThis field stores a code that indicates how the system populates the ECOA Code field in the Loan record if the loan is created automatically using the Loan Creation workflow action in Application Processing.
\nField Number         **039**
\nMnemonic             **ECOACODE**
\nData Type            **Code to 11**
\nSource               **User-entered**
\nHelp File            **01320**
\nDefault Control      **No**
\nDefault Value        **00**
\n
\nEnter the ECOA (Equal Credit Opportunity Act) code to indicates how the system populates the ECOA Code field in the Loan record if the loan is created automatically using the Loan Creation workflow action in Application Processing.
\n#### Data Type Descriptions
\n##### (00) Individual
\n   You should not select this option here. This ECOA code translates to an association code of (0) Undesignated, which is reported by Experian® only.##### (01) Individual (Verified)
\n   The system reports the name of the primary borrower to credit bureaus with an association code of (1) Individual Borrower. The system reports to credit bureaus the member name from the primary Name record for the account.##### (02) Joint Contractual
\n   The system reports the name of the primary borrower to credit bureaus with an association code of (2) Joint Account - Contractual Responsibility and the names from all applicable Name records with an association code of (2) Joint Account - Contractual Responsibility. Using this option with the Name Type field in the Loan Name record set to (9) Authorized Signer allows the system to include this individual in credit reporting.##### (03) Joint User
\n   The system reports the name of the primary borrower with an association code of (2) Joint Account - Contractual Responsibility and the names from all applicable Name records with an association code of (3) Authorized User - Joint Account. Using this option with the Name Type field in the Loan Name records set to (9) Authorized Signer allows the system to include this individual in credit reporting.##### (04) Joint
\n   The system reports the name of the primary borrower with an association code of (4) Joint Account and the names from all applicable Name records with an association code of (4) Joint Account. Credit unions do not normally use this ECOA code. Using this option with the Name Type field in the Loan Name record set to (9) Authorized Signer allows the system to include this individual in credit reporting.##### (05) Comaker
\n   The system reports the name of the primary borrower with an association code of (5) Comaker and the names from all applicable Name records with an association code of (5) Comaker. Using this option with the Name Type field in the Loan Name record set to (9) Authorized Signer allows the system to include this individual in credit reporting.##### (06) On behalf of
\n   The system reports the name of the primary borrower with an association code of (2) Joint Account - Contractual Responsibility and the names from all applicable Name records with an association code of (6) On Behalf Of. Credit unions do not normally use this ECOA code.##### (07) Maker
\n   The system reports the name of the primary borrower with an association code of (7) Maker and the names from all applicable Name records with an association code of (7) Maker. Credit unions do not normally use this ECOA code. Using this option with the Name Type field in the Loan Name record set to (9) Authorized Signer allows the system to include this individual in credit reporting.##### (08) Deceased
\n   The system reports the name of the primary borrower with an association code of (X) Deceased.##### (09) Account Terminated
\n   The system reports the name of the primary borrower with an association code of (T) Terminated.##### (10) Delete Specific Borrower
\n   The system reports the name with an association code of (Z). This code supports the DA - Account Closed by Consumer status code for Ch2 fields on the Equifax® credit report Segment 13 (Bankruptcy).##### (11) Business/Commercial
\n   The system reports the name with an association code of (W). This code supports the DA - Account Closed by Consumer status code for Ch2 fields on the Equifax credit report Segment 13 (Bankruptcy)..***Important:***  Do not use the obsolete ECOA codes (00) Individual, (04) Joint, or (06) On behalf of. Under most circumstances, you should select (1) Individual, (2) Joint Contractual, or (5) Comaker in this field. Credit unions do not normally use other ECOA codes.
\n
\nIf you specify 02 or greater in this field, the system uses the Name Logic parameter in the Credit Reporting Parameters to determine which secondary names to report.
`)
loanAppRecordFields.set("purposecode", ` 
\n### Purpose
\nThis field stores a credit union-defined code to indicate the purpose of the loan.
\nField Number         **059**
\nMnemonic             **PURPOSECODE**
\nData Type            **Code to 999**
\nSource               **User-entered or System-entered**
\nHelp File            **01319**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nEnter a credit union-defined code (0-999) to indicate the purpose of the loan.
\n
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the Loan Purpose default value for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Loan Purpose field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("securedcode", ` 
\n### Secured Code
\nThis field stores a code that specifies the type of security, if any, for a loan.
\nField Number         **053**
\nMnemonic             **SECUREDCODE**
\nData Type            **Code to 3**
\nSource               **User-entered or System-entered**
\nHelp File            **01366**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Share Secured
\n   The loan is not secured by a Share record.##### (1) 100% Share
\n   The loan is secured by a Share record.##### (2) Partial Release First
\n   The system should release any Share records partially securing a loan before any other security.##### (3) Partial Release Last
\n   The system should release any Share records partially securing a loan only after all other security.
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the Secured Code default value for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Secured Code field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("collateralcode", ` 
\n### Collateral Code
\nThis field stores a code that indicates the collateral offered for the loan.
\nField Number         **051**
\nMnemonic             **COLLATERALCODE**
\nData Type            **Code to 999**
\nSource               **User-entered or System-entered**
\nHelp File            **01315**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nEnter a credit union-defined code (0-999) to indicate the collateral offered for the loan. The system reports this code to credit bureaus. The code points to the Credit Reporting Parameters indicating the values in the Collateral # Account Type and Collateral # Portfolio Type parameters that should be reported to the credit bureaus.
\n
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the Collateral Code default value for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Collateral Code field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("collateraldate", ` 
\n### Collateral Date
\nThis field stores the date the member offered the collateral for the loan.
\nField Number         **052**
\nMnemonic             **COLLATERALDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01316**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nEnter the date the member offered the collateral for the loan.
\n
\nIf you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Collateral Date field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("callitemschd", ` 
\n### Call Item Schedule
\nPrimarily for users of the corporate interface: This field stores the numeric value of the set of Call/Put Item Schedules parameters used for call items.
\nField Number         **153**
\nMnemonic             **CALLITEMSCHD**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01753**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n***Important:***  See Call/Put Item Global Schedules and Call/Put Item Local Schedules in the Parameter Manager for further details.
`)
loanAppRecordFields.set("callitemschdtype", ` 
\n### Call Item Schd Type
\nFormerly for users of the corporate interface: This field indicated whether the set of Call/Put Item Schedules parameters specified in the Call Item Schedule field is local or global.
\nField Number         **154**
\nMnemonic             **CALLITEMSCHDTYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01754**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nThe system no longer uses this functionality.
\n#### Data Type Descriptions
\n##### (0) Local
\n   Call/Put Item Schedules parameters are able to be set up or revised by a corporate credit union.##### (1) Global
\n   Call/Put Item Schedules parameters are only able to be set up or revised by the U.S. Central Credit Union.***Important:***  See Call/Put Item Global Schedules and Call/Put Item Local Schedules in the Parameter Manager for further details.
`)
loanAppRecordFields.set("putitemschd", ` 
\n### Put Item Schedule
\nPrimarily for users of the corporate interface: This field stores the numeric value of the set of Call/Put Item Schedules parameters used for put items.
\nField Number         **158**
\nMnemonic             **PUTITEMSCHD**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01758**
\nDefault Control      **No**
\nDefault Value        **0**
`)
loanAppRecordFields.set("putitemschdtype", ` 
\n### Put Item Schd Type
\nPrimarily for users of the corporate interface: This field indicated whether the set of Call/Put Item Schedules parameters specified in the Put Item Schedule field is local or global.
\nField Number         **159**
\nMnemonic             **PUTITEMSCHDTYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01759**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Local
\n   Call/Put Item Schedules parameters are able to be set up or revised by a corporate credit union.##### (1) Global
\n   Call/Put Item Schedules parameters are only able to be set up or revised by the U.S. Central Credit Union.
\n`)
loanAppRecordFields.set("amortizationschd", ` 
\n### Amortization Schedule
\nPrimarily for users of the corporate interface: This field stores the numeric value of the set of Amortization Schedules parameters.
\nField Number         **151**
\nMnemonic             **AMORTIZATIONSCHD**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01751**
\nDefault Control      **No**
\nDefault Value        **0**
`)
loanAppRecordFields.set("amortizationschdtype", ` 
\n### Amortize Schd Type
\nPrimarily for users of the corporate interface: This field indicates whether the set of Amortization Schedules parameters specified in the Amortization Schedule field is local or global.
\nField Number         **152**
\nMnemonic             **AMORTIZATIONSCHDTYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01752**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Local
\n   Amortization Schedules parameters are able to be set up or revised by a corporate credit union.##### (1) Global
\n   Amortization Schedules parameters are only able to be set up or revised by the U.S. Central Credit Union.
\n`)
loanAppRecordFields.set("interesttype", ` 
\n### Interest Type
\nThis field stores a code that indicates the method for calculating loan interest that can be different for each Schedule record when using the MBS Multiple Repayment Programs Per Loan module.
\nField Number         **166**
\nMnemonic             **INTERESTTYPE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01766**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Daily 365 day
\n   Calculate loan interest on a 365-day basis.##### (1) Monthly 360 day
\n   Calculate loan interest on a 360-day basis. This option is normally used for real estate loans and is designed so that the payment schedule is known to the penny from the date the loan is funded.##### (2) Daily 365.25 day
\n   Calculate loan interest on a 365.25-day basis. This option is normally used for student loans.##### (3) Daily billed I
\n   (Stands for daily billed loan interest, type 1) This interest type is valid only for interest-only loans.##### (4) Daily billed II
\n   (Stands for daily billed loan interest, type 2) This interest type is valid only for interest-only loans.##### (5) Actual/360
\n   Calculate daily interest on a 360-day basis.##### (6) Daily Billed 360
\n   This interest type is valid only for interest-only loans. Use this interest type for loans where you bill to the member the amount of interest due at the time of statement cutoff.##### (7) Actual/364
\n   Calculate daily interest on a 364-day basis.
\n       - Biweekly	Weekly
\n       - Per Diem = rate x balance/364 Accrual = Per Diem x # of days to accrue	Per Diem = rate x balance/364 Accrual = Per Diem x # of days to accrue
\n##### (8) Scheduled/364
\n   Calculate daily interest on a 364-day basis.
\n       - Biweekly	Weekly
\n       - Per Diem = rate x balance/364 Accrual = Per Diem x 14	Per Diem = rate x balance/364 Accrual = Per Diem x 7
\n##### (10–9999)
\n   Credit union-defined interest type.***Important:***  The mortgage payments for Actual/364 and Scheduled/364 interest type loans must have the following fields specified:
\nInterest Type: (7) Actual/364 or (8) Scheduled/364
\n: (8) Biweekly or (9) Weekly
\nPayment Skips: 0
\nDue Day 1: Must leave blank for weekly and biweekly
\nDue Date Advance Code: (0) Use Max Due Date Advance Period
\nMax Due Date Advance Period: 1
\nInitial BCD Setting Option: Use Loan Due Date (One when due)
\nNew Loan Due Date Code: 0
loan Code: (0) Closed End
\nPayment Calc Type: (0) No Change
\nDQ Calculation Method: (0) Payment Buckets Only Contain Changes
`)
loanAppRecordFields.set("interestrate", ` 
\n### Interest Rate
\nThis field stores the interest rate of the loan.
\nField Number         **069**
\nMnemonic             **INTERESTRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **01346**
\nDefault Control      **No**
\nDefault Value        **.000**
\n
\nEnter the interest rate of the loan.
\n
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the Interest Rate default value for the loan type specified. If you choose to use the Loan Calc Screen action field, the system updates this field with the Interest Rate value from the loan calculation screen.
`)
loanAppRecordFields.set("paymenttype", ` 
\n### Payment Type
\nThis field stores a code that indicates the method for calculating the payment.
\nField Number         **164**
\nMnemonic             **PAYMENTTYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01764**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Level Payment
\n   The system should calculate equal periodic loan payments.
\n   
\n       - The amount applied to the loan principal changes each period, since the amount of interest due each period depends on the loan balance and the number of days in the loan period. This option is the normal option for most daily interest loans.
\n   
\n       - You should select this option for daily billed interest-only loans. Daily billed interest is used for loans where the amount of interest due at the time of statement cutoff is billed to the member.
\n##### (1) Level Principal
\n   The system should calculate loan payments so that the same amount is applied to the loan principal each period.
\n   
\n       - The total payment changes each period, since the amount of interest due each period depends on the loan balance and the number of days in the loan period. This option is often used for single payment loans, real estate loans, or interest-only payment loans (but not for daily billed interest-only loans).
\n
\nThis field can be used for defining an Interest Only schedule or No Payment schedule when using the MBS Multiple Repayment Programs Per Loan module.
`)
loanAppRecordFields.set("paymentcalctype", ` 
\n### Payment Calc Type
\nThis field stores a credit union-defined code used for determining the calculation method for the loan.
\nField Number         **168**
\nMnemonic             **PAYMENTCALCTYPE**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01768**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) No Change
\n   The loan has a value in the Interest Type field of (1) Monthly 360 day so the system should use the value in the Payment field as the loan payment.
\n   
\n       - While the selection is valid, this field is generally not used for credit card loan types.
\n##### 0001–8999
\n   Specify a credit union-defined payment calculation type if the system should calculate loan payments using the parameters defined for that payment calculation type with the Payment Calculation Types parameters in the Parameter Manager.##### 9000–9999
\n   Reserved for future system-defined use.
\n`)
loanAppRecordFields.set("paymentmethod", ` 
\n### Payment Method
\nThis field stores a code that specifies the method of payment for a loan.
\nField Number         **045**
\nMnemonic             **PAYMENTMETHOD**
\nData Type            **Code to 9**
\nSource               **User-entered or System-entered**
\nHelp File            **01323**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Cash
\n   The member makes cash payments.##### (1) Coupon
\n   You issue coupons for loan payments.##### (2) Auto transfer
\n   Loan payments are by automatic transfer of funds from the same account or from another account at the credit union.
\n   
\n       - The system automatically creates Transfer record with a Transfer Type field set to (2) Maturity (transfers funds to another Share or Loan record at maturity of a club account or a certificate).
\n##### (3) Payroll
\n   Loan payments are by automatic payroll deduction.##### (4) Payroll after due
\n   Loan payments are by automatic payroll deduction from the first payroll after the due date of the loan.##### (5) Distribution
\n   Loan payments are by electronic funds transfer.
\n   
\n       - The system does not automatically create EFT transfer records.
\n##### (6) Distribution after due
\n   Loan payments are by the first electronic funds transfer after the due date.
\n   
\n       - The system does not automatically create EFT transfer records.
\n##### (7) Scheduled auto transfer
\n   Loan payments are by electronic funds transfer on a scheduled date, whether or not a payment is due.
\n   
\n       - The system automatically creates Transfer record with a Transfer Type field set to (2) Maturity (transfers funds to another Share or Loan record at maturity of a club account or a certificate).
\n##### (8) Scheduled auto transfer after due
\n   Loan payments are by electronic funds transfer on the first scheduled transfer date after the due date.
\n   
\n       - The system automatically creates Transfer record with a Transfer Type field set to (2) Maturity (transfers funds to another Share or Loan record at maturity of a club account or a certificate).
\n##### (9) Amortization transfer
\n   Loan payments are automatically paid according to an amortization schedule (defined in Amortization Global Schedules and Amortization Local Schedules parameters).
\n   
\n       - The system automatically creates a Transfer record with a Transfer Type field set to (8) Amortization (for payment of an obligation in a series of transfers).
\n
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the Payment Method default value for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Payment Method field from the Loan record specified at the Existing Loan ID field.
\n
\nThis field can be used for defining an Interest Only schedule or No Payment schedule when using the MBS Multiple Repayment Programs Per Loan module.
`)
loanAppRecordFields.set("paymentfrequency", ` 
\n### Payment Frequency
\nThis field stores a code that specifies the frequency of loan payments.
\nField Number         **046**
\nMnemonic             **PAYMENTFREQUENCY**
\nData Type            **Code to 14**
\nSource               **User-entered or System-entered**
\nHelp File            **01325**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Single Pay
\n   The member must repay the loan in a single payment.##### (1) Annual
\n   Loan payments are annual (one per year).##### (2) Semi-annual
\n   Loan payments are semiannual (two per year).##### (3) Quarterly
\n   Loan payments are quarterly (four per year).##### (4) Monthly
\n   Loan payments are monthly.##### (5) Semi-monthly
\n   Loan payments are semimonthly (two per month).##### (6) Biweekly skip first
\n   Loan payments are biweekly (every two weeks), skipping the first week of the month if there are five weeks in the month.##### (7) Biweekly skip last
\n   Loan payments are biweekly (every two weeks), skipping the last week of the month if there are five weeks in the month.##### (8) Biweekly
\n   Loan payments are biweekly (every two weeks), regardless of the number of weeks in the month.##### (9) Weekly
\n   Loan payments are weekly.##### (10) Immediate
\n   The member must repay the loan immediately in a single payment.##### (11) Weekly skip first
\n   Loan payments are made weekly, skipping the first payment of the month if there are five scheduled payments in the month.##### (12) Weekly skip last
\n   Loan payments are made weekly, skipping the last payment of the month if there are five scheduled payments in the month.##### (13) Bimonthly
\n   Loan payments are made every other month.
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the Payment Frequency default value for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Payment Frequency field from the Loan record specified at the Existing Loan ID field. If you choose to use the Loan Calc Screen action field, the system updates this field with the Payment Frequency value from the loan calculation screen.
`)
loanAppRecordFields.set("duedateadvancecode", ` 
\n### Due Date Advance Code
\nThis field stores a code that specifies how the system advances the due date when a payment is made to the loan.
\nField Number         **167**
\nMnemonic             **DUEDATEADVANCECODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01767**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Use Max Due Date Advance Period
\n   Advance the due date (unlimited payment count).
\n   
\n       - When the related Max Due Date Advance Period field is set to 0 (unlimited payment count), the system advances the Due Date field each time a full payment is made to the loan. When the Max Due Date Advance Period field is set to 1, the system advances the Due Date field no more than one period beyond the next due date.
\n##### (1) Overlimit payments use ‘Max Due Date Advance Period' else use 'One when due'
\n   Advance the due date no more than the maximum advance period or else the period should be advanced when a payment is made on or after the due date. The system does not advance the due date for loan payments made before the due date.
\n`)
loanAppRecordFields.set("maxduedateadvanceperiod", ` 
\n### Max Due Date Advance Period
\nThis field stores the maximum number of periods the due date can be advanced into the future.
\nField Number         **208**
\nMnemonic             **MAXDUEDATEADVANCEPERIOD**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **31803**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nEnter a number (0-9999) for the maximum number of periods the due date can be advanced into the future.
\n***Important:***  When the Loan Code field is set to (6) LOC Combination, this field must equal 1 and you cannot change this field. If you attempt to do so, this error message displays:
\nError: Max Due Date Advance Period must equal 1 
\nwhen Loan Code = 6!
`)
loanAppRecordFields.set("dueday1", ` 
\n### Due Day 1
\nThis field stores the day of the month on which the first payment is due for semimonthly loans, or the day of the month on which all payments are due for annual, semiannual, quarterly, bimonthly, or monthly loans.
\nField Number         **047**
\nMnemonic             **DUEDAY1**
\nData Type            **Code to 31**
\nSource               **User-entered or System-entered**
\nHelp File            **01335**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nThe system does not use this field for single pay, weekly, or biweekly loans.
\n#### Data Type Descriptions
\n##### 0
\n   If the Payment Method field is set to anything other than (7) Scheduled auto transfer or (8) Scheduled auto transfer after due and the Payment Frequency field is not set to (5) Semimonthly, set the due date to the system date plus one frequency if an advance is taken on the 1st through 27th of the month. If the advance is taken on the 28th through 31st of the month, the Due Date is set to the last day of the month.##### 1–30
\n   If the Payment Frequency field is set to (5) Semimonthly, set the day of the month the first payment is due for semi-monthly loans.##### 1–31
\n   If the Payment Method field is set to anything other than (7) Scheduled auto transfer or (8) Scheduled auto transfer after due and the Payment Frequency field is not set to (5) Semimonthly, set the due date to the specified day of the month.
\n       - If the Payment Method field is set to (7) Scheduled auto transfer or (8) Scheduled auto transfer after due, set a due date for the scheduled auto transfer. You must enter a non-zero in this field.
\n***Important:***  If a loan has the Payment Method field set to (5) Distribution, the Payment Frequency field set to (5) Semimonthly, and you leave this field blank, when the distribution is posted or when the member makes a manual payment, the system blanks out the due date.
\n
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the Due Day 1 default value for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Due Day 1 field from the Loan record specified at the Existing Loan ID field. If you choose to use the Loan Calc Screen action field, the system updates this field with the Due Day 1 value from the loan calculation screen.
`)
loanAppRecordFields.set("dueday2", ` 
\n### Due Day 2
\nThis field stores the day of the month on which the second payment is due for semimonthly loans.
\nField Number         **048**
\nMnemonic             **DUEDAY2**
\nData Type            **Code to 31**
\nSource               **User-entered or System-entered**
\nHelp File            **01336**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nThe system does not use this field for annual, semiannual, quarterly, monthly, or biweekly loans.
\n
\nThe value in the Due Day 2 must be greater than the value in the Due Day 1 field.
\n
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the Due Day 2 default value for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Due Day 2 field from the Loan record specified at the Existing Loan ID field. If you choose to use the value from the Loan Calc Screen, the system updates this field with the Due Day 2 value from the loan calculation screen.
`)
loanAppRecordFields.set("initialbcdsettingoption", ` 
\n### Initial BCD Setting Option
\nThis field stores a code that determines how the beginning cycle date will be set for non-billed loans and loans with a Loan record Payment Method of (2) Auto transfer.
\nField Number         **209**
\nMnemonic             **INITIALBCDSETTINGOPTION**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31804**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Use Current Cycle Due Date – 1 Period + 1 Day
\n   Advances the Due Date field by one period plus one day when a payment is made.##### (1) Use Loan Due Date (One when due)
\n   Set the beginning cycle date for a new loan to the value of the Loan record Due Date field for the One when due functionality.
\n   
\n       - The One when due functionality advances the Due Date field by one period only when a payment is made on or after the due date. The system does not advance the due date for loan payments made before the due date.
\n   
\n       - The purpose of this option is to specify that the loan requires a full payment on the due date, no matter how much extra was paid before the due date. Use this function for loans with a Loan record Payment Method value of (2) Auto transfer if you do not want over-the-counter transactions to affect the amount taken by automatic transfers on the due date.
`)
loanAppRecordFields.set("dqcalculationmethod", ` 
\n### DQ Calculation Method
\nThis field stores a code that defines the method used to calculate delinquency.
\nField Number         **165**
\nMnemonic             **DQCALCULATIONMETHOD**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01765**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nThis field is used for defining interest-only Schedule records when using the MBS Multiple Repayment Programs Per Loan module.
\n#### Data Type Descriptions
\n##### (0) Payment Buckets Only Contain Changes
\n   The system should not calculate the values for the payment buckets each month. For closed and open-end loans with a fixed payment amount, the system does not use the payment buckets.##### (1) Payment Buckets Are Calculated Monthly
\n   The system should calculate the values for the payment buckets each month. The system updates each Pmt Bucket Amt field and Pmt Bucket Due Date field on a monthly basis, regardless of whether the payment amount changes.
\n`)
loanAppRecordFields.set("transferaccountnumber", ` 
\n### Transfer Account
\nIf loan payments are by automatic transfer of funds from another account, this field stores the number of the other account.
\nField Number         **049**
\nMnemonic             **TRANSFERACCOUNTNUMBER**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01649**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
`)
loanAppRecordFields.set("transferaccountid", ` 
\n### Transfer ID
\nIf loan payments are by automatic transfer of funds from another account, this field stores the ID of the Share record.
\nField Number         **050**
\nMnemonic             **TRANSFERACCOUNTID**
\nData Type            **2 to 4 Characters**
\nSource               **User-entered**
\nHelp File            **01650**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
`)
loanAppRecordFields.set("notepurgedate", ` 
\n### Note Purge Date
\nThis field is currently unused.
\nField Number         **137**
\nMnemonic             **NOTEPURGEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01737**
\nDefault Control      **No**
\nDefault Value        **Date Null**
`)
loanAppRecordFields.set("paymentskips", ` 
\n### Payment Skips
\nThis field stores the number of loan payments the member can skip.
\nField Number         **140**
\nMnemonic             **PAYMENTSKIPS**
\nData Type            **Code to 9**
\nSource               **User-entered or System-entered**
\nHelp File            **01740**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nEnter the number of loan payments (0-9) the member can skip. You cannot specify payment skips for a loan with a value in the Interest Type field of (1) Monthly 360 day.
\n#### Data Type Descriptions
\n##### 0
\n   If the Payment Frequency field is set to (0) Single Pay, (1) Annual, (2) Semi-annual, or (10) Immediate, the system does not allow any payment skips.##### 1
\n   If the Payment Frequency field is set to (3) Quarterly, the system allows only one payment skip.##### 1–3
\n   If the Payment Frequency field is set to (4) Monthly, the system allows up to three payment skips.##### 1–6
\n   If the Payment Frequency field is set to (5) Semimonthly, the system allows up to six payment skips.##### 1–7
\n   If the Payment Frequency field is set to (6) Biweekly skip first, (7) Biweekly skip last, or (8) Biweekly, the system allows up to seven payment skips.##### 1–9
\n   If the Payment Frequency field is set to (9) Weekly, the system allows up to nine payment skips.
\nThis field is useful if your credit union allows members to skip loan payments for part of the year. For example, you might allow teachers to skip payments during the summer months, if they are not paid during the summer. In this case, enter the number of skips allowed in this field, and enter the due date of the first payment the member is allowed to skip in the Payment Skip Start Day field.
\n
\nIf you choose to use the value from the Loan Calc Screen, the system updates this field with the Payment Skips value from the loan calculation screen.
`)
loanAppRecordFields.set("paymentskipstartday", ` 
\n### Payment Skip Start Day
\nThis field stores a code that represents the due date of the first payment the member can skip.
\nField Number         **141**
\nMnemonic             **PAYMENTSKIPSTARTDAY**
\nData Type            **Code to 1231**
\nSource               **User-entered or System-entered**
\nHelp File            **01741**
\nDefault Control      **Yes**
\nDefault Value        **0000**
\n
\nThis field and the Payment Skips field work together. If you enter a value in the Payment Skips field to allow members to skip that number of loan payments, you must enter a date in this field to tell the system when to begin allowing the member to skip payments.
\n#### Data Type Descriptions
\n##### 0000
\n   The member cannot skip any payments.##### 0101–1231
\n   The due date (MMDD) of the first payment the member can skip.
\nIf you choose to use the value from the Loan Calc Screen action field, the system updates this field with the Payment Skip Start Day value from the loan calculation screen.
`)
loanAppRecordFields.set("balloondate", ` 
\n### Balloon Date
\nThis field stores the date the balloon loan payment is due, if applicable.
\nField Number         **068**
\nMnemonic             **BALLOONDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01338**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nEnter the date the balloon loan payment is due, if applicable.
\n
\nIf you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Balloon Date field from the Loan record specified at the Existing Loan ID field. If you choose to use the value from the Loan Calc Screen action field, the system updates this field with the Balloon Date value from the loan calculation screen.
`)
loanAppRecordFields.set("balloonamount", ` 
\n### Balloon Amount
\nThis field stores the amount of a balloon payment, if applicable.
\nField Number         **138**
\nMnemonic             **BALLOONAMOUNT**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01738**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nYou can use this field if you want to calculate a loan to make the final payment (including principal and interest) equal a specified amount. For example, to calculate the payment on a $10,000 loan so that the final balloon payment, due in 36 months, is $5,000, type 500000 in the Balloon Amount field.
\n
\nIf you choose to use the value from the Loan Calc Screen action field, the system updates this field with the Balloon Amount value from the loan calculation screen. If you select (2) Calculate Loan Term from the Calculation Type field on the loan calculation screen, the system ignores this field.
`)
loanAppRecordFields.set("creditlimit", ` 
\n### Loan Credit Limit
\nThis field stores the credit limit for line-of-credit or credit card loans.
\nField Number         **060**
\nMnemonic             **CREDITLIMIT**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01361**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nEnter the credit limit for line-of-credit or credit card loans.
\nWhen you enter an amount that is less than any of the CA/BT limiting maximum field values, the system sends the following warning:
\nWarning: Amount entered is less than the CA/BT Limiting Limit Max field(s)!
\n
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the Credit Limit default value for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Credit Limit field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("limitexpirationdate", ` 
\n### Cred Lim Exp Date
\nThis field stores the expiration date of the loan's credit limit.
\nField Number         **061**
\nMnemonic             **LIMITEXPIRATIONDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01380**
\nDefault Control      **Yes**
\nDefault Value        **Date Null**
\n
\nEnter the expiration date of the loan's credit limit.
\n
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the Credit Limit Expiration default value for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Credit Limit Expiration field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("loanmaturitydate", ` 
\n### Loan Maturity Date
\nThis field stores the date the loan matures.
\nField Number         **122**
\nMnemonic             **LOANMATURITYDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01722**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nEnter the date the loan matures (the date the final payment is due).
\n
\nIf you choose to use the value from the Loan Calc Screen action field, the system updates this field with the Final Payment Date value from the loan calculation screen.
`)
loanAppRecordFields.set("loantovalueratio", ` 
\n### Loan To Value
\nThis field contains the loan to value ratio (the ratio of the loan amount to the appraised home value).
\nField Number         **800**
\nMnemonic             **LOANTOVALUERATIO**
\nData Type            **Rate**
\nSource               **System-calculated**
\nHelp File            **01820**
\nDefault Control      **No**
\nDefault Value        **.000**
\n
\nThe system calculates the ratio for this field using the following formula:
\n
loan To Value = (Loan Amount + Appraisal Offset) / Appraised Amount
\n
\nThe system updates this field whenever you change the Loan Amount, Appraised Amount, or Appraisal Offset fields.
`)
loanAppRecordFields.set("appraisedamount", ` 
\n### Appraised Amount
\nThis field stores the appraised amount of the collateral for the loan.
\nField Number         **132**
\nMnemonic             **APPRAISEDAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01732**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the appraised amount of the collateral for the loan. The appraised amount will be included in the loan to value calculation. The system calculates the loan to value ratio using the following formula:
\n
loan To Value = (Loan Amount + Appraisal Offset) / Appraised Amount
`)
loanAppRecordFields.set("appraisaloffset", ` 
\n### Appraisal Offset
\nThis field stores the offset value of the collateral for a second trust deed loan.
\nField Number         **139**
\nMnemonic             **APPRAISALOFFSET**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01739**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the offset value of the collateral. For example, this field can store the member's first mortgage amount when the member applies for a second trust deed loan. The system calculates the Loan To Value ratio using the following formula:
\n
loan To Value = (Loan Amount + Appraisal Offset) / Appraised Amount
`)
loanAppRecordFields.set("escrowamount", ` 
\n### Escrow Amount
\nThis field stores the amount of the payment to post to the share identified by the value in the Escrow ID field.
\nField Number         **133**
\nMnemonic             **ESCROWAMOUNT**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01733**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the amount of a loan payment. The system applies this amount to the share identified by Escrow ID, then posts the rest of the payment to principal and interest.
\n
\nIf you choose to use the value from the Loan Calc Screen action field, the system updates this field with the Escrow Amount value from the loan calculation screen.
`)
loanAppRecordFields.set("escrowid", ` 
\n### Escrow ID
\nThis field stores the ID of the Share record to which the system should post the escrow amount whenever a member makes a loan payment.
\nField Number         **134**
\nMnemonic             **ESCROWID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **01734**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the ID of the Share record to which the system should post the escrow amount whenever a member makes a loan payment.
`)
loanAppRecordFields.set("unamortizedfees", ` 
\n### Unamortized Fees
\nThis field stores the total amount of fees to be amortized over the loan term, according to FASB 91.
\nField Number         **145**
\nMnemonic             **UNAMORTIZEDFEES**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01745**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nYou must enter the initial amount in this field. Then each time the GL Posting batch program amortizes fees or expenses, the system reduces the amount in this field by the amount amortized.
`)
loanAppRecordFields.set("prepaidfinancechg", ` 
\n### Prepaid Finance Chg
\nThis field stores additional amounts, that can be included in a loan.
\nField Number         **149**
\nMnemonic             **PREPAIDFINANCECHG**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01749**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter additional amounts (such as points on a loan, mortgage insurance premiums, flood insurance, etc.), that can be included in a loan.
`)
loanAppRecordFields.set("originalrate", ` 
\n### Original Rate
\nThis field stores the original effective Annual Percentage Rate.
\nField Number         **144**
\nMnemonic             **ORIGINALRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01744**
\nDefault Control      **Yes**
\nDefault Value        **.000**
\n
\nEnter the original effective APR (Annual Percentage Rate). You must determine and enter the original rate manually. The system does not calculate this value.
`)
loanAppRecordFields.set("riskrate", ` 
\n### Risk Rate
\nThis field stores a value that increases the calculated margin rate when the Rate Change Processing batch program calculates the new interest rate for non-credit card loans tied to an interest rate index.
\nField Number         **146**
\nMnemonic             **RISKRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01746**
\nDefault Control      **Yes**
\nDefault Value        **.000**
\n
\nEnter a value (0.000-100.000%) that increases the calculated margin rate.
\n
\nThe system takes the new specified base rate, adds or subtracts the calculated interest rate margin, adds the value in this field, and subtracts the value in the Discount Rate field to arrive at the new interest rate when you run Rate Change Processing for loans using option (2) Select by Interest Rate Index.
`)
loanAppRecordFields.set("discountrate", ` 
\n### Discount Rate
\nThis field stores a value that decreases the calculated margin rate when the Rate Change Processing batch program calculates the new interest rate for non-credit card loans tied to an interest rate index.
\nField Number         **147**
\nMnemonic             **DISCOUNTRATE**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01747**
\nDefault Control      **Yes**
\nDefault Value        **.000**
\n
\nEnter a value that decreases the calculated margin rate.
\n
\nThe system takes the new specified base rate, adds or subtracts the calculated interest rate margin, adds the value in the Risk Rate field, and subtracts the value in this field to arrive at the new interest rate when you run Rate Change Processing for loans using option (2) Select by Interest Rate Index.
`)
loanAppRecordFields.set("effectiveapr", ` 
\n### Effective APR
\nThis field stores the current effective Annual Percentage Rate.
\nField Number         **143**
\nMnemonic             **EFFECTIVEAPR**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01743**
\nDefault Control      **Yes**
\nDefault Value        **.000**
\n
\nEnter the current effective APR (Annual Percentage Rate). You must determine and enter the effective APR manually. The system does not calculate this value.
`)
loanAppRecordFields.set("apr", ` 
\n### APR
\nThis field stores the Annual Percentage Rate.
\nField Number         **148**
\nMnemonic             **APR**
\nData Type            **Rate**
\nSource               **System-entered**
\nHelp File            **01748**
\nDefault Control      **No**
\nDefault Value        **.000**
\n
\nThe system calculates this value in Loan Projections and stores it in this field if the Prepaid Finance Chg field is non-zero.
`)
loanAppRecordFields.set("fasb91code", ` 
\n### FASB 91 Code
\nThis field stores the FASB 91 code used with loan type codes to create combinations that post to designated General Ledger accounts.
\nField Number         **142**
\nMnemonic             **FASB91CODE**
\nData Type            **Code to 199**
\nSource               **User-entered or System-entered**
\nHelp File            **01742**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nEnter the FASB 91 code (0-199) used with loan type codes to create combinations that post to designated General Ledger accounts. For example, you can specify loan types and FASB 91 code combinations to result in something like the following:
loan types 0015-0020 with FASB 91 codes 5–10 use specific General Ledger accounts.
\n   - Loan types 0015-0020 with FASB 91 codes 11–16 use other specific General Ledger accounts.
\n
\nAfter the Loan Branch List prompt in the Loan FASB 91 Accruals function of the GL Posting batch program, the system prompts Break Totals Down By FASB 91 Code?. If you click Yes, the system breaks down totals by FASB 91 code. If you click No, the system breaks down totals only by loan type.
\n
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the FASB 91 Code default field for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the FASB 91 Code field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("insurancetype", ` 
\n### Insurance Type
\nThis field stores a credit union-defined code that indicates whether the member has elected to purchase insurance.
\nField Number         **057**
\nMnemonic             **INSURANCETYPE**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-entered**
\nHelp File            **01368**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The member did not elect to purchase insurance.##### 1–9999
\n   A code, defined with the Insurance Type Parameters, to indicate that the applicant has elected to purchase that type of insurance.
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the Insurance Type default value for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Insurance Type field from the Loan record specified at the Existing Loan ID field. If you choose to use the value from the Loan Calc Screen, the system updates this field with the Insurance Type value from the loan calculation screen.
`)
loanAppRecordFields.set("insurancemax", ` 
\n### Max Ins Balance
\nThis field stores the maximum insurable balance for the insurance type selected.
\nField Number         **058**
\nMnemonic             **INSURANCEMAX**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01369**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nEnter the maximum insurable balance for the insurance type selected.
\n
\nIf you choose to use the Update From Loan Defaults action field, the system updates this field with the Insurance Maximum default value for the loan type specified. If you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Insurance Maximum field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("singlepremiumlife", ` 
\n### Sgl Prem Life
\nThis field stores the calculated amount of single premium life insurance.
\nField Number         **135**
\nMnemonic             **SINGLEPREMIUMLIFE**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01735**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the amount of single premium life insurance calculated.
\n
\nIf you select a single premium life insurance type at the Insurance Type field and choose to use the value from the Loan Calc Screen, the system updates this field with the calculated premium amount from the loan calculation screen.
`)
loanAppRecordFields.set("singlepremiumdisability", ` 
\n### Sgl Prem Disability
\nThis field stores the calculated amount of single premium disability insurance.
\nField Number         **136**
\nMnemonic             **SINGLEPREMIUMDISABILITY**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01736**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the amount of single premium disability insurance calculated.
\n
\nIf you select a single premium disability insurance type at the Insurance Type field and choose to use the value from the Loan Calc Screen, the system updates this field with the calculated premium amount from the loan calculation screen.
`)
loanAppRecordFields.set("firstinsbirthdate", ` 
\n### First Insured Birth Date
\nThis field stores the first insurer's date of birth.
\nField Number         **162**
\nMnemonic             **FIRSTINSBIRTHDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01762**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nEnter the first insurer's date of birth (MM/DD/YYYY).
\n
\nThe system checks the age against Insurance Tables to calculate member eligibility for insurance. If the date is not filled in, the system will not use the Max Life Direct Ins Type or Max Dis Direct Insurance Type Insurance Type parameters. If you choose to use the value from the Loan Calc Screen, the system updates this field with the First Insured Birth Date value from the loan calculation screen.
`)
loanAppRecordFields.set("secondinsbirthdate", ` 
\n### Second Insured Birth Date
\nThis field stores the second insurer's date of birth.
\nField Number         **163**
\nMnemonic             **SECONDINSBIRTHDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **01763**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nEnter the second insurer's date of birth (MM/DD/YYYY).
\n
\nThe system checks the age against Insurance Tables to calculate member eligibility for insurance. If the date is not filled in, the system will not use the Max Life Direct Ins Type or Max Dis Direct Insurance Type Insurance Type parameters. If you choose to use the value from the Loan Calc Screen, the system updates this field with the Second Insured Birth Date value from the loan calculation screen.
`)
loanAppRecordFields.set("insurabilitycode", ` 
\n### Insurability Code
\nThis field stores a credit union-defined code that indicates whether the loan applicant can be insured.
\nField Number         **113**
\nMnemonic             **INSURABILITYCODE**
\nData Type            **Code to 99**
\nSource               **User-entered or System-entered**
\nHelp File            **01713**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nEnter a credit union-defined code (0-99) to indicate whether the loan applicant can be insured.
`)
loanAppRecordFields.set("insurance1chosen", ` 
\n### Single Credit Life Insurance
\nThis field stores a code that indicates if the applicant has elected to purchase single credit life insurance.
\nField Number         **054**
\nMnemonic             **INSURANCE1CHOSEN**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01654**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Chosen
\n   The member did not purchase this type of insurance.##### (1) Chosen
\n   The member purchased this type of insurance.Although this field still exists, the system no longer uses it. To track insurance in the Application record, use the following fields instead:
\nInsurance Type
\n   - Max Ins Balance
\n   - Sgl Prem Life
\n   - Sgl Prem Disability
\n
\nThis field may have a credit union-defined field name. You can define the name of this field with the Loan Disclosure Parameters. Most credit unions defined the Single Life Description parameter as Single Credit Life Insurance.
`)
loanAppRecordFields.set("insurance2chosen", ` 
\n### Joint Credit Life Insurance
\nThis field stores a code that indicates if the applicant has elected to purchase joint credit life insurance.
\nField Number         **055**
\nMnemonic             **INSURANCE2CHOSEN**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01655**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Chosen
\n   The member did not purchase this type of insurance.##### (1) Chosen
\n   The member purchased this type of insurance.Although this field still exists, the system no longer uses it. To track insurance in the Application record, use the following fields instead:
\nInsurance Type
\n   - Max Ins Balance
\n   - Sgl Prem Life
\n   - Sgl Prem Disability
\n
\nThis field may have a credit union-defined field name. You can define the name of this field with the Loan Disclosure Parameters. Most credit unions defined the Single Life Description parameter as Joint Credit Life Insurance.
`)
loanAppRecordFields.set("insurance3chosen", ` 
\n### Credit Disability Insurance
\nThis field stores a code that indicates if the applicant has elected to purchase credit disability insurance.
\nField Number         **056**
\nMnemonic             **INSURANCE3CHOSEN**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01656**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Chosen
\n   The member did not purchase this type of insurance.##### (1) Chosen
\n   The member purchased this type of insurance.Although this field still exists, the system no longer uses it. To track insurance in the Application record, use the following fields instead:
\nInsurance Type
\n   - Max Ins Balance
\n   - Sgl Prem Life
\n   - Sgl Prem Disability
\n
\nThis field may have a credit union-defined field name. You can define the name of this field with the Loan Disclosure Parameters. Most credit unions defined the Single Life Description parameter as Credit Disability Insurance.
`)
loanAppRecordFields.set("ovloptin", ` 
\n### OVL Opt-In?
\nThis field stores a code that indicates if the credit union prints the revocation statement.
\nField Number         **188**
\nMnemonic             **OVLOPTIN**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01788**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nThis field is used in the Statement Generation batch program with the prompt Print Stmt Disclosure If No OVL in cases where although the member did not go over the limit for that statement period (so no OVL fee was assessed), the credit union still chooses to print the revocation statement. This field is copied over to the Loan record once the loan application is approved.
\n#### Data Type Descriptions
\n##### (0) No
\n   The member did not select to opt in for the OVL service.##### (1) Yes
\n   The member selected to opt in for the OVL service.
\n`)
loanAppRecordFields.set("ovlauthfee", ` 
\n### OVL Auth/Fee Option
\nThis field stores a code that indicates whether to authorize or assess a fee for credit card over-the-limit transactions.
\nField Number         **189**
\nMnemonic             **OVLAUTHFEE**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **01789**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nThis field is required for the authorization and fee posting programs to determine whether to authorize or assess a fee for credit card over-the-limit transactions. This field will be copied over to the Loan record once the loan application is approved.
\n#### Data Type Descriptions
\n##### (0) Auth/Fee Allowed
\n   Authorize and assess a fee for credit card over-the-limit transactions.##### (1) Auth/No Fee Allowed
\n   Authorize but do not assess a fee for credit card over-the-limit transactions.##### (2) No Auth/Fee Allowed
\n   Do not authorize but assess a fee for credit card over-the-limit transactions.##### (3) No Auth/No Fee Allowed
\n   Do not authorize and do not assess a fee for credit card over-the-limit transactions.
\nWhen the Loan Application record is copied to the Loan record, the system updates the OVL Auth/Fee Eff Date field on the Loan record with the date in the Open Date field of the Loan and updates.
`)
loanAppRecordFields.set("cutotalsacctnumber", ` 
\n### Other Account 1 - Other Account 5
\nThese fields each store the account number of another account to be included in the credit union totals.
\nField Number         **120:1 - 120:5**
\nMnemonic             **CUTOTALSACCTNUMBER:1 - CUTOTALSACCTNUMBER:5**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01720**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nAt any of these five fields, you can enter the account number of another account to be included in the credit union totals. You can type * to look up account numbers. If you specify other accounts, the system includes the balances, credit limits, and payments for shares and loans in the specified accounts in the calculation of credit union totals.
`)
loanAppRecordFields.set("origriskgrade", ` 
\n### Original Risk Grade
\nThis field stores the original risk grade assigned to the note when it was originated.
\nField Number         **187**
\nMnemonic             **ORIGRISKGRADE**
\nData Type            **4 Characters**
\nSource               **User-entered**
\nHelp File            **01787**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nYou can perform file maintenance on this field.
\n***Important:***  This field can be copied from the Application record to the Loan record.
`)
loanAppRecordFields.set("creditscoretype", ` 
\n### Credit Score Type
\nThis field stores a credit union-defined code to specify the type of credit score to be calculated for the application.
\nField Number         **015**
\nMnemonic             **CREDITSCORETYPE**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **01615**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nIf you want to calculate credit scores, you can run VALIDATE.LOANAPP or contact Symitar to program the calculations. Once the credit scoring calculations are programmed, you can enter a credit union-defined code (0-9) to specify the type of credit score to be calculated for the application.
`)
loanAppRecordFields.set("creditscore", ` 
\n### Credit Score
\nThis field stores the results of Symitar programmed credit score calculations.
\nField Number         **016**
\nMnemonic             **CREDITSCORE**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **01616**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nIf you want to calculate credit scores, you can run VALIDATE.LOANAPP or contact Symitar to program the calculations.
`)
loanAppRecordFields.set("bureauscore", ` 
\n## BUREAUSCORE:1
\n### Bureau Score Experian
\nThis field stores the most recent credit score from the Experian credit bureau for the main applicant for the loan.
\nField Number         **155:1**
\nMnemonic             **BUREAUSCORE:1**
\nData Type            **Number**
\nSource               **User-entered or System-entered**
\nHelp File            **01755**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nThe system always updates this field automatically when it associates a new credit report with the main applicant. You can also perform file maintenance on this field to change score information back to a possibly higher or more preferable score, if circumstances permit.
\nImportant: This field is also a Loan record field.
\n
\n## BUREAUSCORE:2
\n### Bureau Score Equifax
\nThis field stores the most recent credit score from the Equifax credit bureau for the main applicant for the loan.
\nField Number         **155:2**
\nMnemonic             **BUREAUSCORE:2**
\nData Type            **Number**
\nSource               **User-entered or System-entered**
\nHelp File            **01755**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nThe system always updates this field automatically when it associates a new credit report with the main applicant. You can also perform file maintenance on this field to change score information back to a possibly higher or more preferable score, if circumstances permit.
\nImportant: This field is also a Loan record field.
\n
\n## BUREAUSCORE:3
\n### Bureau Score Transunion
\nThis field stores the most recent credit score from the TransUnion® credit bureau for the main applicant for the loan.
\nField Number         **155:3**
\nMnemonic             **BUREAUSCORE:3**
\nData Type            **Number**
\nSource               **User-entered or System-entered**
\nHelp File            **01755**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nThe system always updates this field automatically when it associates a new credit report with the main applicant. You can also perform file maintenance on this field to change score information back to a possibly higher or more preferable score, if circumstances permit.
\nImportant: This field is also a Loan record field.
`)
loanAppRecordFields.set("cutotalopenendloans", ` 
\n### CU Opn End Loan Bal
\nThis field stores the sum of all loan balances in Loan records in the member's account with a value in the Loan Code field of (1) Open End, a blank in the Close Date field, and a blank in the Charge-off Date field.
\nField Number         **020**
\nMnemonic             **CUTOTALOPENENDLOANS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01620**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nYou must set the CU Totals Code field in a Loan record to (0) Use This Record in Credit Union Totals or the system does not include the balance from that Loan record in the credit union totals. If you choose to use the Update CU Fields action field, the system calculates the value of this field.
`)
loanAppRecordFields.set("cutotalclosedendloans", ` 
\n### CU Cls End Loan Bal
\nThis field stores the sum of all loan balances in Loan records in the member's account with a value in the Loan Code field of (0) Closed End, a blank in the Close Date field, and a blank in the Charge-off Date field.
\nField Number         **021**
\nMnemonic             **CUTOTALCLOSEDENDLOANS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01621**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nYou must set the CU Totals Code field in a Loan record to (0) Use This Record in Credit Union Totals or the system does not include the balance from that Loan record in the credit union totals. If you choose to use the Update CU Fields action field, the system calculates the value of this field.
`)
loanAppRecordFields.set("cutotallocloans", ` 
\n### CU LOC Loan Bal
\nThis field stores the sum of all loan balances in Loan records in the member's account with a value in the Loan Code field of (2) Line of Credit, a blank in the Close Date field, and a blank in the Charge-off Date field.
\nField Number         **022**
\nMnemonic             **CUTOTALLOCLOANS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01622**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nYou must set the CU Totals Code field in a Loan record to (0) Use This Record in Credit Union Totals or the system does not include the balance from that Loan record in the credit union totals. If you choose to use the Update CU Fields action field, the system calculates the value of this field.
`)
loanAppRecordFields.set("cutotalcreditcardloans", ` 
\n### CU Cred Card Ln Bal
\nThis field stores the sum of all loan balances, unpaid interest, and unpaid late charges in Loan records in the member's account with a value in the Loan Code field of (3) Credit Card, a blank in the Close Date field, and a blank in the Charge-off Date field.
\nField Number         **023**
\nMnemonic             **CUTOTALCREDITCARDLOANS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01623**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nYou must set the CU Totals Code field in a Loan record to (0) Use This Record in Credit Union Totals or the system does not include the balance from that Loan record in the credit union totals. If you choose to use the Update CU Fields action field, the system calculates the value of this field.
`)
loanAppRecordFields.set("cutotalcreditlimit", ` 
\n### CU Total Credit Lim
\nThis field stores the sum of all credit limits in all Loan records in the member's account with a blank in the Close Date field, and a blank in the Charge-off Date field.
\nField Number         **024**
\nMnemonic             **CUTOTALCREDITLIMIT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01624**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nYou must set the CU Totals Code field in a Loan record to (0) Use This Record in Credit Union Totals or the system does not include the balance from that Loan record in the credit union totals. If you choose to use the Update CU Fields action field, the system calculates the value of this field.
`)
loanAppRecordFields.set("cutotalopenendpayments", ` 
\n### CU Open End Pmts
\nThis field stores the sum of all standard payments for all Loan records in the member's account with a value in the Loan Code field of (1) Open End, a blank in the Close Date field, and a blank in the Charge-off Date field.
\nField Number         **025**
\nMnemonic             **CUTOTALOPENENDPAYMENTS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01625**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nYou must set the CU Totals Code field in a Loan record to (0) Use This Record in Credit Union Totals or the system does not include the payments from that Loan record in the credit union totals. If you choose to use the Update CU Fields action field, the system calculates the value of this field.
\n
\nIf the value in the Payment Frequency field in a Loan record is not set to (4) Monthly, the system adjusts the payment to a monthly amount before adding it to the sum of the other loan payments. If a Loan record specified in the Existing Loan ID field of the Application record has a value in the Loan Code field of (1) Open End, the system does not include the payment for that loan in the credit union totals.
`)
loanAppRecordFields.set("cutotalclosedendpayments", ` 
\n### CU Closed End Pmts
\nThis field stores the sum of all standard payments for all Loan records in the member's account with a value in the Loan Code field of (0) Closed End, a blank in the Close Date field, and a blank in the Charge-off Date field.
\nField Number         **026**
\nMnemonic             **CUTOTALCLOSEDENDPAYMENTS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01626**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nYou must set the CU Totals Code field in a Loan record to (0) Use This Record in Credit Union Totals or the system does not include the payments from that Loan record in the credit union totals. If you choose to use the Update CU Fields action field, the system calculates the value of this field.
\n
\nIf the value in the Payment Frequency field in a Loan record is not set to (4) Monthly, the system adjusts the payment to a monthly amount before adding it to the sum of the other loan payments. If a Loan record specified in the Existing Loan ID field of the Application record has a value in the Loan Code field of (0) Closed End, the system does not include the payment for that loan in the credit union totals.
`)
loanAppRecordFields.set("cutotallocpayments", ` 
\n### CU LOC Pmts
\nThis field stores the sum of all standard payments for all Loan records in the member's account with a value in the Loan Code field of (2) Line of Credit, a blank in the Close Date field, and a blank in the Charge-off Date field.
\nField Number         **027**
\nMnemonic             **CUTOTALLOCPAYMENTS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01627**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nYou must set the CU Totals Code field in a Loan record to (0) Use This Record in Credit Union Totals or the system does not include the payments from that Loan record in the credit union totals. If you choose to use the Update CU Fields action field, the system calculates the value of this field.
\n
\nIf the value in the Payment Frequency field in a Loan record is not set to (4) Monthly, the system adjusts the payment to a monthly amount before adding it to the sum of the other loan payments. If a Loan record specified in the Existing Loan ID field of the Application record has a value in the Loan Code field of (2) Line of Credit, the system does not include the payment for that loan in the credit union totals.
`)
loanAppRecordFields.set("cutotalcredcardpayments", ` 
\n### CU Credit Card Pmts
\nThis field stores the sum of all standard payments for all Loan records in the member's account with a value in the Loan Code field of (3) Credit Card, a blank in the Close Date field, and a blank in the Charge-off Date field.
\nField Number         **028**
\nMnemonic             **CUTOTALCREDCARDPAYMENTS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01628**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nYou must set the CU Totals Code field in a Loan record to (0) Use This Record in Credit Union Totals or the system does not include the payments from that Loan record in the credit union totals. If you choose to use the Update CU Fields action field, the system calculates the value of this field.
\n
\nIf the value in the Payment Frequency field in a Loan record is not set to (4) Monthly, the system adjusts the payment to a monthly amount before adding it to the sum of the other loan payments. If a Loan record specified in the Existing Loan ID field of the Application record has a value in the Loan Code field of (3) Credit Card, the system does not include the payment for that loan in the credit union totals.
`)
loanAppRecordFields.set("cutotalshares", ` 
\n### CU Share Bal
\nThis field stores the sum of all available balances in Share records in the member's account with a value in the Share Code field of (0) Share and a value in the IRS Code field of (0) Normal.
\nField Number         **017**
\nMnemonic             **CUTOTALSHARES**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01617**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nYou must set the CU Totals Code field in a Share record to (0) Use This Record in Credit Union Totals or the system does not include the balance of that Share record in the credit union totals. If you choose to use the Update CU Fields action field, the system calculates the value of this field.
`)
loanAppRecordFields.set("cutotaldrafts", ` 
\n### CU Draft Bal
\nThis field stores the sum of all available balances in Share records in the member's account with a value in the Share Code field of (1) Draft and a value in the IRS Code field of (0) Normal.
\nField Number         **018**
\nMnemonic             **CUTOTALDRAFTS**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01618**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nYou must set the CU Totals Code field in a Share record to (0) Use This Record in Credit Union Totals or the system does not include the balance of that Share record in the credit union totals. If you choose to use the Update CU Fields action field, the system calculates the value of this field.
`)
loanAppRecordFields.set("cutotalcertiras", ` 
\n### CU Cert IRA Bal
\nThis field stores the sum of all available balances in Share records in the member's account with a value in the Share Code field of (2) Certificate or (3) Club, or any share with a non-zero value in the IRS Code field.
\nField Number         **019**
\nMnemonic             **CUTOTALCERTIRAS**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01619**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nYou must set the CU Totals Code field in a Share record to (0) Use This Record in Credit Union Totals or the system does not include the balance of that Share record in the credit union totals. If you choose to use the Update CU Fields action field, the system calculates the value of this field.
`)
loanAppRecordFields.set("debtratiotype", ` 
\n### Debt Ratio 1 Type - Debt Ratio 5 Type
\nThese fields each store a credit union-defined code to specify a debt ratio calculation based on the definition of that Debt Ratio Type field.
\nField Number         **013:1 - 013:5**
\nMnemonic             **DEBTRATIOTYPE:1 - DEBTRATIOTYPE:5**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **01613**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nAt any of these five fields, you can enter a credit union-defined code (0-9) to specify a debt ratio calculation based on the definition of each field. You can define up to ten debt ratio types (0-9) with the Application Debt Ratio Descriptions parameters.
`)
loanAppRecordFields.set("debtratio", ` 
\n### Debt Ratio 1 - Debt Ratio 5
\nThese fields each store a debt ratio calculated according to the credit union-defined debt ratio type in that Debt Ratio Type field.
\nField Number         **014:1 - 014:5**
\nMnemonic             **DEBTRATIO:1 - DEBTRATIO:5**
\nData Type            **Rate**
\nSource               **System-entered**
\nHelp File            **01614**
\nDefault Control      **No**
\nDefault Value        **.000**
\n
\nIf you choose to use any of the Calculate Debt Ratio action fields or the Calculate All Debt Ratios action field, the system calculates a debt ratio based on the value in the appropriate Debt Ratio Type field and stores the calculated debt ration in the appropriate one of these fields.
\nExample:
\n   - If you enter 5 in the Debt Ratio 1 Type field, then choose to use the Calculate Debt Ratio 1 or the Calculate All Debt Ratios action field, the system performs the calculation defined for the type 5 debt ratio and stores the result in the Debt Ratio 1 field.
`)
loanAppRecordFields.set("indirectdealernum", ` 
\n### Dealer Number
\nIf the Dealer Reserve Accounting module has been implemented, this field stores the indirect dealer number.
\nField Number         **160**
\nMnemonic             **INDIRECTDEALERNUM**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01546**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nWhen you define a dealer, you assign a unique number to that dealer in the Dealer record. When entering a new loan, you only have to enter a value in this field, if applicable, and not the full name of the dealer. In the Dealer Reserve Accounting Manager, that dealer number appears at the top of the screen. This field links the loan to that dealer.
`)
loanAppRecordFields.set("totalincome", ` 
\n### Total Monthly Inc
\nThis field stores the combined total of the values in the Curr Gross Mo Pay fields in all Person records under the Application record and the values in the Monthly Income fields in all Finance records under the Application record.
\nField Number         **029**
\nMnemonic             **TOTALINCOME**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01629**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the combined total amount from all Person and Finance records under the Application record.
\n
\nIf you choose to use the Calculate Total Fields action field, the system calculates the value of this field.
`)
loanAppRecordFields.set("totalexpenses", ` 
\n### Total Monthly Exp
\nThis field stores the combined total of the values in the CU Open End Pmts, CU Closed End Pmts, CU LOC Pmts, CU Credit Card Pmts, and payment fields in the Application record and the values in the Monthly Expense fields in all Finance records under the Application record.
\nField Number         **030**
\nMnemonic             **TOTALEXPENSES**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01630**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the combined total amount from of the payment fields in the Application record and the expense fields in all Finance records under the Application record.
\n
\nIf you choose to use the Calculate Total Fields action field, the system calculates the value of this field.
\n
\nIf the value in the Payment Amount field does not represent a monthly payment amount, the system adjusts it to a monthly amount before adding it to the expense totals.
`)
loanAppRecordFields.set("totalassets", ` 
\n### Total Assets
\nThis field stores the combined total of the values in the CU Share Bal, CU Draft Bal, and CU Cert IRA Bal fields in the Application record and the values in the Asset Value fields in all Finance records under the Application record.
\nField Number         **031**
\nMnemonic             **TOTALASSETS**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01631**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the combined total amount from the balance fields in the Application record and the asset value fields in all Finance records under the Application record.
\n
\nIf you choose to use the Calculate Total Fields action field, the system calculates the value of this field.
`)
loanAppRecordFields.set("totalliabilities", ` 
\n### Total Liabilities
\nThis field stores the combined total of the values in the CU Opn End Loan Bal, CU Cls End Loan Bal, CU LOC Loan Bal, CU Cred Card Ln Bal, and Loan Amount fields in the Application record and the values in the Liability Balance fields in all Finance records under the Application record.
\nField Number         **032**
\nMnemonic             **TOTALLIABILITIES**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01632**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the combined total amount from the balance fields in the Application record and the liability balance fields in all Finance records under the Application record.
\n
\nIf you choose to use the Calculate Total Fields action field, the system calculates the value of this field.
`)
loanAppRecordFields.set("totalcreditlimits", ` 
\n### Total Credit Limit
\nThis field stores the combined total of the value in the CU Total Credit Lim field in the Application record and the values in the Credit Limit fields in all Finance records under the Application record.
\nField Number         **033**
\nMnemonic             **TOTALCREDITLIMITS**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **01633**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the combined total value of the limit field in the Application record and the limit fields in all Finance records under the Application record.
\n
\nIf you choose to use the Calculate Total Fields action field, the system calculates the value of this field.
`)
loanAppRecordFields.set("indirectplanid", ` 
\n### Reserve Plan ID
\nIf the Dealer Reserve Accounting module has been implemented, this field stores the reserve plan ID associated with this indirect loan.
\nField Number         **161**
\nMnemonic             **INDIRECTPLANID**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **01547**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nIf the Dealer Reserve Accounting module has been implemented, enter the value in the Reserve Plan ID field in the Dealer Reserve Plan record associated with this indirect loan which provides the correct up-front reserve amount or percent and chargeback specifications.
`)
loanAppRecordFields.set("grossmonthlypay1", ` 
\n### Gross Monthly Pay 1
\nThis field stores the amount of the person's current monthly gross pay from the Curr Gross MO Pay field from the first Person record (record 00) under the Application record.
\nField Number         **034**
\nMnemonic             **GROSSMONTHLYPAY1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01634**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nWhenever you perform any file maintenance of Person records, the system updates this field with the amount in the Curr Gross MO Pay field of the first Person record under the Application record.
`)
loanAppRecordFields.set("netmonthlypay1", ` 
\n### Net Monthly Pay 1
\nThis field stores the amount of this person's current monthly net pay from the Curr Net MO Pay field from the first Person record (record 00) under the Application record.
\nField Number         **035**
\nMnemonic             **NETMONTHLYPAY1**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01635**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nWhenever you perform any file maintenance of Person records, the system updates this field with the amount in the Curr Net MO Pay field of the first Person record under the Application record.
`)
loanAppRecordFields.set("grossmonthlypay2", ` 
\n### Gross Monthly Pay 2
\nThis field stores the amount of the person's current monthly gross pay from the Curr Gross MO Pay field from the second Person record (record 00) under the Application record.
\nField Number         **036**
\nMnemonic             **GROSSMONTHLYPAY2**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01636**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nWhenever you perform any file maintenance of Person records, the system updates this field with the amount in the Curr Gross MO Pay field of the second Person record under the Application record.
`)
loanAppRecordFields.set("netmonthlypay2", ` 
\n### Net Monthly Pay 2
\nThis field stores the amount of this person's current monthly net pay from the Curr Net MO Pay field from the second Person record (record 00) under the Application record.
\nField Number         **037**
\nMnemonic             **NETMONTHLYPAY2**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **01637**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nWhenever you perform any file maintenance of Person records, the system updates this field with the amount in the Curr Net MO Pay field of the second Person record under the Application record.
`)
loanAppRecordFields.set("cbilocator", ` 
\n### CBI Locator1 - CBI Locator6
\nThese fields each store a unique credit bureau information (CBI) request identifier for that request.
\nField Number         **156:1 - 156:6**
\nMnemonic             **CBILOCATOR:1 - CBILOCATOR:6**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **01756**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nWhenever you perform the Pull Credit Report action during application processing and have the system automatically pull a credit report, the system creates the credit bureau information (CBI) request, queues it up, and places the unique identifier for that request into one of these CBI Locator fields. Then when you perform the Pull Credit Report action again during application processing, the system can identify the related credit report request and do one of the following:
\nEmpty the CBI Locator field if the credit information request shows an error.
\n   - Auto-associate the credit report record with the Application record and empty the CBI Locator field (if Auto Create Finance Records or Auto Calc Debt Ratio parameters in the Application Miscellaneous Parameters is set to Yes and if the system successfully received the report).
\n   - Retain the current value in the CBI Locator field if the credit report is still pending.
\n
\nThis process takes place only if you set the Automate Retrieval of Cred Rpt parameter in the Application Miscellaneous Parameters to Yes.
\n***Important:***  Only the system can access these fields. You cannot manually enter, revise, or delete the value in any of them.
`)
loanAppRecordFields.set("preflocator", ` 
\n### Preference Locator
\nThis field stores the system-defined locator number from the associated Preference record's Locator field.
\nField Number         **157**
\nMnemonic             **PREFLOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **01757**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nWhen a member or non-member (or a member who has not enrolled in home banking) logs on to home banking to check their application status, the system looks through the Preference records in the null accounts for the unique combination of tracking ID number and password. When a non-member (or a member who has not enrolled in home banking) logs on, the system uses the Preference record's Locator field information to search for the linked application that has the same value in this field.
`)
loanAppRecordFields.set("indirectplanid", ` 
\n### Reserve Plan ID
\nIf the Dealer Reserve Accounting module has been implemented, this field stores the reserve plan ID associated with this indirect loan.
\nField Number         **161**
\nMnemonic             **INDIRECTPLANID**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **01547**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nIf the Dealer Reserve Accounting module has been implemented, enter the value in the Reserve Plan ID field in the Dealer Reserve Plan record associated with this indirect loan which provides the correct up-front reserve amount or percent and chargeback specifications.
`)
loanAppRecordFields.set("propertyaddresstype", ` 
\n### Property Address Type
\nThis field stores a code that indicates how the system stores the property address information that secures a mortgage loan.
\nField Number         **210**
\nMnemonic             **PROPERTYADDRESSTYPE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31805**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Same as Primary Member Address
\n   The property securing the loan is the same as the primary member’s address.##### (1) Property Address
\n   The property address that secures the loan is different than the primary member’s address.##### (2) Property Description
\n   No property address is available for the property securing the loan.
\nIRS Form 1098 reporting uses this field.
`)
loanAppRecordFields.set("propertyjurisdiction", ` 
\n### Property Jurisdiction
\nThis field stores the property's jurisdiction (county and state).
\nField Number         **211**
\nMnemonic             **PROPERTYJURISDICTION**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **31806**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nIf a property address is not available (the value in the Property Address Type field is (2) Property Description), enter the property's jurisdiction (county and state).
`)
loanAppRecordFields.set("assessorparcelnumber", ` 
\n### Assessor Parcel Number
\nThis field stores the property's Assessor Parcel Number or Numbers (APN).
\nField Number         **212**
\nMnemonic             **ASSESSORPARCELNUMBER**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **31807**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nIf a property address is not available (the value in the Property Address Type field is (2) Property Description), enter the property's Assessor Parcel Number or Numbers (APN). For example: VV-WW0-XX-YYY-ZZZ.
\nThe IRS's Instructions for Form 1098 (2016) states the APN can be any one of the following:
\nAssessor's Identification Number (AIN)
\n   - Property Identification Number (PIN)
\n   - Property Account Number
`)
loanAppRecordFields.set("mtgnumprop", ` 
\n### Number of Mortgaged Properties
\nThis field stores the number of properties that secure this mortgage loan.
\nField Number         **283**
\nMnemonic             **MTGNUMPROP**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **31878**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the number of properties (up to 9999) that secure this mortgage loan.
`)
loanAppRecordFields.set("pmioriginalvalue", ` 
\n### Original Value
\nThis field stores the original value of the collateral for the loan.
\nField Number         **170**
\nMnemonic             **PMIORIGINALVALUE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01770**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the lesser of the sales price of the property securing the mortgage, as reflected in the purchase contract, or the appraised value at the time the subject residential mortgage transaction was completed. In the case of a refinancing, this means the appraised value relied upon the lender to approve the refinance transaction. Enter this value manually at the time of loan funding.
`)
loanAppRecordFields.set("pmipurchaseprice", ` 
\n### Purchase Price
\nThis field stores the purchase price or sales price of the property securing the mortgage, as reflected in the purchase contract.
\nField Number         **171**
\nMnemonic             **PMIPURCHASEPRICE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01771**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter this value manually at the time of loan funding.
`)
loanAppRecordFields.set("pmiappraisedvalue", ` 
\n### PMI Appraised Value
\nThis field stores the value at the time the subject residential mortgage transaction was completed.
\nField Number         **172**
\nMnemonic             **PMIAPPRAISEDVALUE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01772**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nIn the case of a refinancing, the term means the appraised value relied upon the lender to approve the refinance transaction. Enter this value manually at the time of loan funding.
`)
loanAppRecordFields.set("pmiltvratio", ` 
\n### PMI Loan To Value Ratio
\nThis field contains the loan amount divided by the lesser of the value in the Purchase Price field or the value in the PMI Appraised Value field at the time of loan completion.
\nField Number         **801**
\nMnemonic             **PMILTVRATIO**
\nData Type            **Rate**
\nSource               **System-calculated**
\nHelp File            **01826**
\nDefault Control      **No**
\nDefault Value        **.000**
\n
\nIn the case of a refinancing, the user leaves the value in the Purchase Price field at the default value of 0.00 and uses the value in the PMI Appraised Value field. This field recalculates and changes with each payment made on the loan.
`)
loanAppRecordFields.set("highriskcode", ` 
\n### High Risk Loan
\nThis field stores a code that specifies whether a loan is considered high risk.
\nField Number         **173**
\nMnemonic             **HIGHRISKCODE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **01773**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nHigh risk loans are not subject to termination and cancellation provisions, only final termination at midpoint.
\n***Important:***  If during the course of the loan the high risk flag is modified, your credit union needs to review all records pertaining to the loan to determine if all the corresponding PMI fields are accurate.
\n#### Data Type Descriptions
\n##### (0) No
\n   The loan is not considered high risk.##### (1) Yes
\n   The loan is considered high risk.
\n`)
loanAppRecordFields.set("combolnsegmentmax", ` 
\n### Combo Segment Max
\nThis field stores a value to identify the maximum number of segments (including Segment 0) that can be added to a combination loan.
\nField Number         **177**
\nMnemonic             **COMBOLNSEGMENTMAX**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-entered**
\nHelp File            **01766**
\nDefault Control      **Yes**
\nDefault Value        **3**
\n
\nEnter a value (1–9999) to identify the maximum number of segments (including Segment 0) that can be added to a loan. For example, if this field is set to 3, you can set up Segment 0 and two segment records. You cannot set this field to 0.
\n
\nIf you try to create a Segment record after the maximum allowable, the system displays the following message:
\n
\nIf you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Combo Seg Max field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("combopmtordermeth", ` 
\n### Combo Payment Order Method
\nThis field stores a code that determines the order to pay segments for SymChoice Loans.
\nField Number         **176**
\nMnemonic             **COMBOPMTORDERMETH**
\nData Type            **Code to 2**
\nSource               **User-entered or System-entered**
\nHelp File            **01776**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Use Segment Payment Order
\n   Pay the segments in the order indicated by the value in the Segment Payment Order field in the Segment record and the value in the Seg 0 Payment Order field in the Loan record.##### (1) Int Rate lo to hi
\n   Pay the segments in the order of their interest rates, starting from the lowest to the highest.
\n       - Important: If you use this option, the order may change if you change the interest rate for any segment.
\n##### (2) Int Rate hi to lo
\n   Pay the segments in the order of their interest rates, starting from the highest to the lowest.
\n       - Important: If you use this option, the order may change if you change the interest rate for any segment.
\n
\nFor a partial payment, when not all segments can be paid, the system determines the segment payment order by this field. The system will first pay the late charges (which apply to the whole loan), then interest for each segment in the order determined by this field, then it pays any billed fees, then it pays the principal for each segment in the order determined by this field.
\n
\nIf there is more than one Segment record with the same value in the Payment Order field or Interest Rate field, the system pays the segments in the order the Segment records appear under the Loan record.
\n
\nIf you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Combo Payment Order Method field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("comboseg0pmtorder", ` 
\n### Combo Seg 0 Payment Order
\nThis field stores a code that determines the order to set Segment 0 when used with the Combo Payment Order Method field for SymChoice Loans.
\nField Number         **175**
\nMnemonic             **COMBOSEG0PMTORDER**
\nData Type            **Code to 2**
\nSource               **User-entered or System-entered**
\nHelp File            **01775**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nIf the value in the Combo Payment Order Method field is set to (1) Int Rate lo to hi or (2) Int Rate hi to lo, select a value in this field.
\n***Important:***  If the value in the Combo Payment Order Method field is set to (0) Use Segment Payment Order, the system ignores the value in this field and uses the order designated by the value in the Seg 0 Payment Order field instead.
\n#### Data Type Descriptions
\n##### (0) Seg 0 Sorted Among Segments
\n   The order Segment 0 is paid will be determined by where its interest rate falls in relation to the other segments.##### (1) Seg 0 First
\n   The Segment 0 is paid first.##### (2) Seg 0 Last
\n   The Segment 0 is paid last.
\nIf you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Combo Seg 0 Payment Order field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("newsegcutoffoption", ` 
\n### New Segment Cutoff Option
\nThis field stores a code that controls how the system calculates the Due Date field in the projections screen of a Segment record.
\nField Number         **190**
\nMnemonic             **NEWSEGCUTOFFOPTION**
\nData Type            **Code to 1**
\nSource               **System-entered**
\nHelp File            **1790**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Number of Days
\n   Calculate the segment Due Date field in the projections screen of a Segment record by comparing the calculated segment cutoff date to the value in the Due Date field of the Loan record. The segment cutoff date is determined by adding the number of days specified in the New Segment Cutoff Days field to the Loan Date field in the projections screen.
\n       - If the segment cutoff date is on or before the value in the Due Date field in the Loan record, the segment value in the Due Date field in the projections screen defaults to the same value as the value in the Due Date field in the Loan record.
\n       - If the segment cutoff date is after the value in the Due Date field of the Loan record, the segment value in the Due Date field in the projections screen defaults to the next loan due date.
\n       - Examples:
\n       - These examples show how the system calculates the segment due date using this option. In these examples, we assume that we have a SymChoice Loan with a value in the Due Date field of the Loan record of 03/15/11 and monthly payments:
\n       - Segment Loan Date	03/03/11	03/03/11
\n       - New Segment Cutoff Days	10	15
\n       - New Segment Cutoff Date	03/13/11	03/18/11
\n       - Segment Due Date	03/15/11	04/15/11
\n##### (1) One Period
\n   Calculate the segment Due Date field in the projections screen by comparing the value in the Loan Date field in the projections screen to the value of the Due Date field in the Loan record.
\n       - If the value in the Loan Date field in the projections screen is at least one period from the value of the Due Date field in the Loan record, the value in the Loan Date field in the projections screen defaults to the same value as the value of the Due Date field in the Loan record.
\n       - If the value in the Loan Date field in the projections screen is less than one period from the value of the Due Date field in the Loan record, the value in the Loan Date field in the projections screen defaults to the next loan due date.
\n       - Examples:
\n       - These examples show how the system calculates the segment due date using this option. In these examples, we assume that we have a SymChoice Loan with a value in the Due Date field of the Loan record of 03/15/11 and biweekly payments:
\n       - Segment Loan Date	03/01/11	03/03/11
\n       - Payment Frequency	Biweekly	Biweekly
\n       - Segment Due Date	03/15/11	03/29/11
\n       - Important: If the segment Due Date field in the projections screen defaults to the same value as the value of the Due Date field in the Loan record, the system updates the existing payment bucket in the Loan record to include the new segment's payment amount when funds are transferred to the new segment using the Loan Segment (LG) transaction code. If the segment Due Date field in the projections screen defaults to the next loan due date, the system creates a payment bucket in the Loan record that includes the new segment's payment amount following the fund transfer.
`)
loanAppRecordFields.set("newsegcutoffdays", ` 
\n### New Segment Cutoff Days
\nThis field stores the number of days to add to the Loan Date field in the projections screen to calculate the segment cutoff date.
\nField Number         **191**
\nMnemonic             **NEWSEGCUTOFFDAYS**
\nData Type            **Code to 25**
\nSource               **User-entered**
\nHelp File            **1791**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nUse this field only if the value in the New Segment Cutoff Option field is (0) Number of Days. The system calculates the segment cutoff date by adding the number of days (1-25) entered in this field to the Loan Date field in the segment projections screen. The system then compares the calculated segment cutoff date to the value in the Due Date field of the Loan record to determine the segment Due Date field in the projections screen.
\n
\nFor more information, see the (0) Number of Days option in the New Segment Cutoff Option field in the Loan record.
`)
loanAppRecordFields.set("seg0description", ` 
\n### Seg 0 Description
\nThis field stores the description of the segment for SymChoice Loans.
\nField Number         **178**
\nMnemonic             **SEG0DESCRIPTION**
\nData Type            **30 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **01768**
\nDefault Control      **Yes**
\nDefault Value        **(Blank)**
\n
\nRequired entry for SymChoice Loans: Enter a description of the segment. You cannot save the Application record for a SymChoice Loan until you enter a description. If you do not make an entry, the system displays the following message:
\nSeg 0 Description cannot be blank
\n
\nIf you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Seg 0 Description field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("seg0paymentorder", ` 
\n### Seg 0 Payment Order
\nThis field stores a code that indicates the order in which Segment 0 will be paid for a Loan Payment (LP) transaction.
\nField Number         **179**
\nMnemonic             **SEG0PAYMENTORDER**
\nData Type            **Code to 9999**
\nSource               **User-entered or System-entered**
\nHelp File            **01769**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nThis field is only used if the value in the Combo Payment Order Method field in the Loan record is set to (0) Use Segment Payment Order, otherwise, the system ignores this field.
\n
\nEnter a number (0-9999) to indicate the order in which Segment 0 will be paid for a Loan Payment (LP) transaction.
\n
\nThe system will first pay the segment with a value in the Segment Payment Order field in the Segment record of 0, then pay the segment a value in the Segment Payment Order field in the Segment record of 1, etc. If there are two or more segments with the same value in the Segment Payment Order field in the Segment record, the system will pay them in the order they appear under the Loan record.
\n
\nIf you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Seg 0 Payment Order field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("seg0payment", ` 
\n### Seg 0 Payment
\nThis field contains the payment for Segment 0 for a SymChoice Loan.
\nField Number         **803**
\nMnemonic             **SEG0PAYMENT**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **01828**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nThis amount is included in the total Payment for the loan. The system calculates this field as the Loan record's Payment field value minus the total for the Segment records' Payment field values.
\n
\nIf you choose to use the Update From Existing Loan action field, the system updates this field with the value in the Seg 0 Payment field from the Loan record specified at the Existing Loan ID field.
`)
loanAppRecordFields.set("capercent", ` 
\n### CA Percent
\nThis field stores the percentage of the overall credit limit that can be allocated to cash advances.
\nField Number         **202**
\nMnemonic             **CAPERCENT**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01809**
\nDefault Control      **Yes**
\nDefault Value        **100.000**
\n
\nTo enter a value in this field, the following loan application field conditions must be set:
\nThe value in the Loan Code field is (3) Credit Card.
\n   - The value in the Interest Type field is (10 – 8999) Credit Card Interest.
\n
\nThe credit limit for cash advances is calculated by multiplying the percent value in this field by the value in the Loan Credit Limit field.
\nTo establish a cash advance limit for this loan based on a percent of the value in the Loan Credit Limit field, enter a value between 0 and 100 percent in this field.
\nWhen the value in this field is 0.000%, the cash advance limit is zero, which means cash advances are not allowed for this loan unless an override is granted.
\n   - When the value in this field is 100.000% and the value in the CA Limit Max field is 0.00, the system uses the value in the Loan Credit Limit field for the cash advance limit.
\n
\n   - The percent value entered in this field cannot exceed 100.000%.
\n
\n   - When the value in both this field and the CA Limit Max field are greater than 0, the system uses the percentage calculation, with the maximum being the value in the CA Limit Max field, to determine the cash advance limit. This allows you to establish a maximum cash advance limit that will not change if the value in the Loan Credit Limit field is increased.
`)
loanAppRecordFields.set("calimitmax", ` 
\n### CA Limit Max
\nThis field stores the maximum amount that can be allocated to cash advances from the overall credit limit.
\nField Number         **203**
\nMnemonic             **CALIMITMAX**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01810**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nTo enter a value in this field, the following loan application field conditions must be set:
\nThe value in the Loan Code field is (3) Credit Card.
\n   - The value in the Interest Type field is (10 – 8999) Credit Card Interest.
\nTo establish a maximum cash advance limit for the loan, enter an amount that is greater than 0 and less than the Loan Credit Limit field value.
\nWhether the value is greater than or equal to 0.00, if the value in the CA Percent field is 0.000%, the cash advance limit is zero. This means that cash advances are not allowed unless an override is granted.
\n   - When the field value is 0.00 and the value in the CA Percent field is 100.000%, the system uses the value in the Loan Credit Limit field for the cash advance limit.
\n
\n   - The amount entered in this field cannot exceed the value in the Loan Credit Limit field, and it cannot be negative.
\n
\n   - When both the values in the CA Limit Max and CA Percent fields are greater than 0, the system uses the percentage calculation, with the maximum being the value in the CA Limit Max field, to determine the cash advance limit. This allows you to establish a maximum cash advance limit that will not change if the value in the Loan Credit Limit field is increased.
`)
loanAppRecordFields.set("btpercent", ` 
\n### BT Percent
\nThis field stores the percentage of the overall credit limit that can be allocated to balance transfers.
\nField Number         **204**
\nMnemonic             **BTPERCENT**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01811**
\nDefault Control      **Yes**
\nDefault Value        **100.000**
\n
\nTo enter a value in this field, the following loan application field conditions must be set:
\nThe value in the Loan Code field is (3) Credit Card.
\n   - The value in the Interest Type field is (10 – 8999) Credit Card Interest.
\n   - The value in the CC Balance Transfer internal parameter is set to (1) Yes.
\n   - Important: Symitar must enable this parameter. Contact Support for details.
\n
\nWhen balance transfers are allowed, this field determines the percentage of the overall credit limit to be allocated to balance transfers by multiplying the percent value in this field by the value in the Loan Credit Limit field.
\nTo establish a balance transfer limit for this loan based on a percent of the value in the Loan Credit Limit field, enter a value between 0 and 100 percent in this field.
\nWhen the value in this field is 0.000%, the balance transfer limit is zero, which means balance transfers are not allowed for this loan unless an override is granted.
\n   - When this field is 100.000% and the value in the BT Limit Max field is 0.00, the system uses the value in the Loan Credit Limit field for the balance transfer limit.
\n
\n   - The percent value entered in this field cannot exceed 100.000%.
\n
\n   - When the value in both this field and the BT Limit Max field are greater than 0, the system uses the percentage calculation, with the maximum being the value in the BT Limit Max field, to determine the balance transfer limit. This allows you to establish a maximum balance transfer limit that will not change if the value in the Loan Credit Limit field is increased.
`)
loanAppRecordFields.set("btlimitmax", ` 
\n### BT Limit Max
\nThis field stores the maximum amount that can be allocated to balance transfers from the overall credit limit.
\nField Number         **205**
\nMnemonic             **BTLIMITMAX**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01812**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nTo enter a value in this field, the following loan application field conditions must be set:
\nThe value in the Loan Code field is (3) Credit Card.
\n   - The value in the Interest Type field is (10 – 8999) Credit Card Interest.
\n   - The value in the CC Balance Transfer internal parameter is set to (1) Yes.
\n   - Note: Symitar must enable this parameter. Contact Support for details.
\nTo establish a maximum balance transfer limit for the loan, enter an amount that is greater than 0 and less than the Loan Credit Limit field value.
\nWhether the value is greater than or equal to 0.00, if the value in the BT Percent field is 0.000%, the balance transfer limit is zero. This means that balance transfers are not allowed unless an override is granted.
\n   - When the field value is 0.00 and the value in the BT Percent field is 100.000%, the system uses the value in the Loan Credit Limit field for the balance transfer limit.
\n
\n   - The amount entered in this field cannot exceed the value in the Loan Credit Limit field, and it cannot be negative.
\n
\n   - When both the values in the BT Limit Max and BT Percent fields are greater than 0, the system uses the percentage calculation, with the maximum being the value in the BT Limit Max field, to determine the balance transfer limit. This allows you to establish a maximum balance transfer limit that will not change if the value in the Loan Credit Limit field is increased.
`)
loanAppRecordFields.set("combinedcabtpercent", ` 
\n### Combined CA/BT Percent
\nThis field stores the percentage of the overall credit limit to be allocated to cash advances and balance transfers combined.
\nField Number         **206**
\nMnemonic             **COMBINEDCABTPERCENT**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **01813**
\nDefault Control      **Yes**
\nDefault Value        **100.000**
\n
\nTo enter a value in this field, the following loan application field conditions must be set:
\nThe value in the Loan Code field is (3) Credit Card.
\n   - The value in the Interest Type field is (10 – 8999) Credit Card Interest.
\n
\nWhen balance transfers are allowed, this field multiplies the percent value in this field by the value in the Loan Credit Limit field to determine the percentage of the overall credit limit to be allocated to cash advances and balance transfers combined.
\nTo establish a combined cash advance and balance transfer limit for this loan based on a percent of the value in the Loan Credit Limit field, enter a value between 0 and 100 percent in this field.
\nWhen this value in this field is 0.000% the cash advance and balance transfer limit is zero, which means cash advances and balance transfers are not allowed for this loan unless an override is granted.
\n   - When this field is 100.000% and the value in the Combined CA/BT Limit Max field is 0.00, the system uses the value in the Loan Credit Limit field for the combined cash advance and balance transfer limit.
\n
\n   - The percent value entered in this field cannot exceed 100.000%.
\n
\n   - When the value in both this field and the Combined CA/BT Limit Max field are greater than 0, the system uses the percentage calculation, with the maximum being the value in the Combined CA/BT Limit Max field, to determine the combined limit. This allows you to establish a maximum combined cash advance and balance transfer limit that will not change if the value in the Loan Credit Limit field is increased.
`)
loanAppRecordFields.set("combinedcabtlimitmax", ` 
\n### Combined CA/BT Limit Max
\nThis field stores the maximum amount that can be allocated to cash advances and balance transfers from the overall credit limit.
\nField Number         **207**
\nMnemonic             **COMBINEDCABTLIMITMAX**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01814**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nTo enter a value in this field, the following loan application field conditions must be set:
\nThe value in the Loan Code field is (3) Credit Card.
\n   - The value in the Interest Type field is (10 – 8999) Credit Card Interest.
\nTo establish a maximum combined cash advance and balance transfer limit for the loan, enter an amount that is greater than 0 and less than the Loan Credit Limit field value.
\nWhether the value is greater than or equal to 0.00, if the value in the Combined CA/BT Percent field is 0.000%, the cash advance and balance transfer limit is zero. This means that cash advances and balance transfers are not allowed unless an override is granted.
\n   - When the field value is 0.00 and the value in the Combined CA/BT Percent field is 100.000%, the system uses the value in the Loan Credit Limit field for the combined cash advance and balance transfer limit.
\n
\n   - The amount entered in this field cannot exceed the value in the Loan Credit Limit field, and it cannot be negative.
\n
\n   - When both the values in the Combined CA/BT Limit Max and Combined CA/BT Percent fields are greater than 0, the system uses the percentage calculation, with the maximum being the value in the Combined CA/BT Limit Max field, to determine the combined limit. This allows you to establish a maximum combined cash advance and balance transfer limit that will not change if the value in the Loan Credit Limit field is increased.
`)
loanAppRecordFields.set("hmdauniversalloanidentifier1", ` 
\n### Universal Loan Identifier 1
\nThis field stores the unique identifier of the covered loan or application.
\nField Number         **279**
\nMnemonic             **HMDAUNIVERSALLOANIDENTIFIER1**
\nData Type            **40 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **31874**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the unique identifier (up to 40 characters) of the covered loan or application.
\n
\nThe system validates the entered value to determine if a duplicate ULI exists. The system does not validate this field for duplicates between different record types.
\n
\nIf you choose to use the Calculate Universal Loan ID action field, the system populates this field.
`)
loanAppRecordFields.set("hmdauniversalloanidentifier2", ` 
\n### Universal Loan Identifier 2
\nThis field stores up to five additional Universal Loan Identifier (ULI) characters if the ULI was previously established outside of the system.
\nField Number         **280**
\nMnemonic             **HMDAUNIVERSALLOANIDENTIFIER2**
\nData Type            **5 Characters**
\nSource               **User-entered**
\nHelp File            **31875**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nIf necessary, enter up to five additional Universal Loan Identifier (ULI) characters if the ULI was previously established outside of the system.
\n
\nThe system does not validate this field for duplicates between different record types.
`)
loanAppRecordFields.set("hmdaloantype", ` 
\n### Type of Loan
\nThis field stores a code that indicates the type of covered loan or application.
\nField Number         **275**
\nMnemonic             **HMDALOANTYPE**
\nData Type            **Code to 4**
\nSource               **User-entered**
\nHelp File            **31870**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   Although this is the default for this field, users must select another option because the Home Mortgage Disclosure Act (HMDA) does not allow this response.##### (1) Conventional
\n   The loan is a conventional mortgage loan.##### (2) FHA Insured
\n   The loan is a Federal Housing Administration (FHA) insured mortgage loan.##### (3) VA Guaranteed
\n   The loan is a Veteran's Administration (VA) guaranteed mortgage loan.##### (4) USDA RHS or FSA Guaranteed
\n   The loan is a U.S. Department of Agriculture (USDA) Rural Housing Service (RHS) or Farm Service Agency (FSA) guaranteed mortgage loan.
\n`)
loanAppRecordFields.set("hmdaloanpurpose", ` 
\n### Purpose of Loan
\nThis field stores a code that indicates the purpose of the covered loan or application.
\nField Number         **214**
\nMnemonic             **HMDALOANPURPOSE**
\nData Type            **Code to 32**
\nSource               **User-entered**
\nHelp File            **31837**
\nDefault Control      **No**
\nDefault Value        **5**
\n
\n#### Data Type Descriptions
\n##### (1) Home Purchase
\n   The purpose of this loan is to purchase a home.##### (2) Home Improvement
\n   The purpose of this loan is to do improvement to a home.##### (4) Other Purpose
\n   The purpose of this loan is not related to the home.##### (5) Not Applicable
\n   A purpose is not relevant to this loan.##### (31) Refinancing
\n   The purpose of this loan is to refinance the mortgage.##### (32) Cash-Out Refinancing
\n   The purpose of this loan is to refinance the mortgage taking some cash out.
\n`)
loanAppRecordFields.set("hmdapreapproval", ` 
\n### Preapproval
\nThis field stores a code that indicates whether the covered loan or application involved a request for a preapproval of a home purchase loan under a preapproval program.
\nField Number         **215**
\nMnemonic             **HMDAPREAPPROVAL**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31838**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   Although this option is the default for this field, users must select another option because the Home Mortgage Disclosure Act (HMDA) does not allow “Not Applicable” as a response.##### (1) Preapproval Requested
\n   Preapproval has been requested for this loan.##### (2) Preapproval Not Requested
\n   Preapproval has not been requested for this loan.
\n`)
loanAppRecordFields.set("hmdaconstructionmethod", ` 
\n### Construction Method
\nThis field stores a code that indicates the construction method for the dwelling.
\nField Number         **216**
\nMnemonic             **HMDACONSTRUCTIONMETHOD**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31839**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   Although this option is the default for this field, users must select another option because the Home Mortgage Disclosure Act (HMDA) does not allow “Not Applicable” as a response.##### (1) Site-Built
\n   This dwelling will be constructed on a site.##### (2) Manufactured Home
\n   This dwelling will be constructed in a factory and them moved to a site.
\n`)
loanAppRecordFields.set("hmdaoccupancytype", ` 
\n### Occupancy Type
\nThis field stores a code that indicates the occupancy type of the residence.
\nField Number         **231**
\nMnemonic             **HMDAOCCUPANCYTYPE**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **31840**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   Although this option is the default for this field, users must select another option because the Home Mortgage Disclosure Act (HMDA) does not allow “Not Applicable” as a response.##### (1) Principal Residence
\n   This is the principal residence of the loan applicant.##### (2) Second Residence
\n   This is the secondary residence of the loan applicant.##### (3) Investment Property
\n   This is an investment property for the loan applicant.
\n`)
loanAppRecordFields.set("hmdaactiontaken", ` 
\n### Action Taken
\nThis field stores a code that indicates the action taken on the covered loan or application.
\nField Number         **232**
\nMnemonic             **HMDAACTIONTAKEN**
\nData Type            **Code to 8**
\nSource               **User-entered**
\nHelp File            **31841**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   Although this option is the default for this field, users must select another option because the Home Mortgage Disclosure Act (HMDA) does not allow “Not Applicable” as a response.##### (1) Loan Originated
\n   The loan has been originated.##### (2) Application approved but not accepted
\n   The loan application has been approved but not accepted yet.##### (3) Application Denied
\n   The loan application has been denied.##### (4) Application Withdrawn by Applicant
\n   The loan application has been withdrawn by the applicant.##### (5) File Closed for Incompleteness
\n   The loan application has been closed because it is incomplete.##### (6) Purchased Loan
\n   The loan has been purchased.##### (7) Preapproval Request Denied
\n   Preapproval for the loan application has been denied.##### (8) Preapproval request approved but not accepted
\n   Preapproval for the loan application has been approved but not accepted yet.
\n`)
loanAppRecordFields.set("hmdaactiontakendate", ` 
\n### Action Taken Date
\nThis field stores the date of action taken.
\nField Number         **233**
\nMnemonic             **HMDAACTIONTAKENDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **31842**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nEnter a date (MM/YY/DDDD) to indicate the date of action taken.
`)
loanAppRecordFields.set("hmdapropertystreetaddress", ` 
\n### Property Street Address
\nThis field stores the street address of the property.
\nField Number         **234**
\nMnemonic             **HMDAPROPERTYSTREETADDRESS**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **31843**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the street address of the property (up to 40 characters).
`)
loanAppRecordFields.set("hmdapropertycity", ` 
\n### Property City
\nThis field stores the city of the property.
\nField Number         **236**
\nMnemonic             **HMDAPROPERTYCITY**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **31845**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the city of the property (up to 40 characters).
`)
loanAppRecordFields.set("hmdapropertystate", ` 
\n### Property State
\nThis field stores the two-letter state code of the property.
\nField Number         **238**
\nMnemonic             **HMDAPROPERTYSTATE**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **31847**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the two-letter state code of the property.
`)
loanAppRecordFields.set("hmdapropertyzipcode", ` 
\n### Property ZIP Code
\nThis field stores the ZIP Code of the property.
\nField Number         **240**
\nMnemonic             **HMDAPROPERTYZIPCODE**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **31849**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the ZIP Code of the property in standard format (00000 or 00000-0000), including the hyphen. If you enter a ZIP Code that is not valid for the specified state (validates on the first three digits), or if you enter a ZIP Code in an invalid format, the system displays one of the following messages to advise you that you have not entered the ZIP Code correctly:
\nInvalid ZIP Code for State
\n   - ZIP Code improper format
`)
loanAppRecordFields.set("hmdapropertycounty", ` 
\n### Property County
\nThis field stores the Federal Information Processing Standards (FIPS) numerical code for the county.
\nField Number         **242**
\nMnemonic             **HMDAPROPERTYCOUNTY**
\nData Type            **5 Characters**
\nSource               **User-entered**
\nHelp File            **31851**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nUse this field to enter the five-digit Federal Information Processing Standards (FIPS) numerical code for the county, in the SSCCC format.
\nSS = two-digit state code
\n   - CCC = three-digit county code
`)
loanAppRecordFields.set("hmdacensustract", ` 
\n### Property Census Tract
\nThis field stores the Federal Information Processing Standards (FIPS) numerical code and the census tract number as defined by the U.S. Census Bureau.
\nField Number         **244**
\nMnemonic             **HMDACENSUSTRACT**
\nData Type            **11 Characters**
\nSource               **User-entered**
\nHelp File            **31853**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the five-digit Federal Information Processing Standards (FIPS) numerical code and six-digit census tract number as defined by the U.S. Census Bureau, in the SSCCCTTTTTT format.
\nSS = two-digit state code
\n   - CCC = three-digit county code
\n   - TTTTTT = six-digit census tract number
`)
loanAppRecordFields.set("hmdaannualincome", ` 
\n### Annual Income
\nThis field stores the gross annual income (in dollars) used in making the credit decision.
\nField Number         **217**
\nMnemonic             **HMDAANNUALINCOME**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31808**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter the gross annual income (in dollars) used in making the credit decision. If a credit decision was not made, enter the gross annual income used in processing the application.
`)
loanAppRecordFields.set("hmdapurchasertype", ` 
\n### Type of Purchaser
\nThis field stores a code that indicates the type of entity purchasing a covered loan from your institution.
\nField Number         **276**
\nMnemonic             **HMDAPURCHASERTYPE**
\nData Type            **Code to 72**
\nSource               **User-entered**
\nHelp File            **31871**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nSelect one of the following codes to indicate the type of entity purchasing a covered loan from your institution, within the same calendar year that your institution originated or purchased the loan:
\n(0) Not Applicable
\n   - (1) Fannie Mae
\n   - (2) Ginnie Mae
\n   - (3) Freddie Mac
\n   - (4) Farmer Mac
\n   - (5) Private Securitizer
\n   - (6) Commercial/Savings bank or savings association
\n   - (8) Affiliate Institution
\n   - (9) Other type of purchaser
\n   - (71) Credit union, mortgage company, or finance company
\n   - (72) Life Insurance Company
`)
loanAppRecordFields.set("hmdaratespread", ` 
\n### Rate Spread
\nThis field stores the difference between the covered loan's annual percentage rate (APR) and the average prime offer rate (APOR) for a comparable transaction.
\nField Number         **219**
\nMnemonic             **HMDARATESPREAD**
\nData Type            **Rate**
\nSource               **User-entered**
\nHelp File            **31810**
\nDefault Control      **Yes**
\nDefault Value        **.000**
\n
\nEnter the difference between the covered loan's APR and the APOR for a comparable transaction as of the date the interest rate is set.
`)
loanAppRecordFields.set("hmdaratespreadsign", ` 
\n### Rate Spread Sign
\nThis field stores a code that specifies a positive or negative for the value in the Rate Spread field.
\nField Number         **305**
\nMnemonic             **HMDARATESPREADSIGN**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31879**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The rate spread value is positive (+).##### 1
\n   The rate spread value is negative (-).
\n`)
loanAppRecordFields.set("hmdahoepastatus", ` 
\n### HOEPA Status
\nThis field stores a code that indicates whether to report the status of the covered loan for the Home Ownership and Equity Protection Act (HOEPA) as a high-cost mortgage.
\nField Number         **277**
\nMnemonic             **HMDAHOEPASTATUS**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **31872**
\nDefault Control      **No**
\nDefault Value        **3**
\n
\n#### Data Type Descriptions
\n##### (1) High-cost mortgage
\n   The covered loan is a high-cost mortgage under Regulation Z, 12 CFR 1026.32(a).##### (2) Not a high-cost mortgage
\n   The covered loan is not a high-cost mortgage under Regulation Z, 12 CFR 1026.32(a).##### (3) Not Applicable
\n   The requirement to report HOEPA status does not apply to the covered loan.
\n`)
loanAppRecordFields.set("hmdalienstatus", ` 
\n### Lien Status
\nThis field stores a code that indicates the lien status of the property securing the covered loan.
\nField Number         **278**
\nMnemonic             **HMDALIENSTATUS**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31873**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   Although this option is the default for this field, users must select another option because the Home Mortgage Disclosure Act (HMDA) does not allow “Not Applicable” as a response.##### (1) Secured by a first lien
\n   The property is secured by a first lien.##### (2) Secured by a subordinate lien
\n   The property is secured by a second lien.
\n`)
loanAppRecordFields.set("hmdadenialreasonother", ` 
\n### Reason for Denial Other 1 - Reason for Denial Other 7
\nThese fields store text that defines the HMDA denial reason referred to when any of the Denial Reason 1–4 fields are set to (9) Other.
\nField Number         **281:1 - 281:7**
\nMnemonic             **HMDADENIALREASONOTHER:1 - HMDADENIALREASONOTHER:7**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **31876**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter specific text to define other reasons for denial. If the text exceeds the 40 characters allowed in the Reason for Denial Other 1 field, you can continue the text in subsequent Reason for Denial Other 2–7 fields.
`)
loanAppRecordFields.set("hmdatotalloancosts", ` 
\n### Total Loan Costs
\nThis field stores the total loan costs amount.
\nField Number         **221**
\nMnemonic             **HMDATOTALLOANCOSTS**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31812**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter, in dollars, the total loan costs amount.
`)
loanAppRecordFields.set("hmdatotalpointsfees", ` 
\n### Total Points and Fees
\nThis field stores the total points and fees charged with the covered loan.
\nField Number         **223**
\nMnemonic             **HMDATOTALPOINTSFEES**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31814**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter, in dollars, the total points and fees charged with the covered loan.
`)
loanAppRecordFields.set("hmdaoriginationcharges", ` 
\n### Origination Charges
\nThis field stores the total of all itemized amounts that are designated borrower-paid at or before closing.
\nField Number         **225**
\nMnemonic             **HMDAORIGINATIONCHARGES**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31816**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter, in dollars, the total of all itemized amounts that are designated borrower-paid at or before closing.
`)
loanAppRecordFields.set("hmdadiscountpoints", ` 
\n### Discount Points
\nThis field stores the points paid to the creditor to reduce the interest rate.
\nField Number         **227**
\nMnemonic             **HMDADISCOUNTPOINTS**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31818**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter, in dollars, the points paid to the creditor to reduce the interest rate.
`)
loanAppRecordFields.set("hmdalendercredits", ` 
\n### Lender Credits
\nThis field stores the amount of lender credits.
\nField Number         **229**
\nMnemonic             **HMDALENDERCREDITS**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31820**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter, in dollars, the amount of lender credits.
`)
loanAppRecordFields.set("hmdaprepaymentpenaltyterm", ` 
\n### Prepayment Penalty Term
\nThis field stores the term in months of any prepayment penalty.
\nField Number         **246**
\nMnemonic             **HMDAPREPAYMENTPENALTYTERM**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **31822**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nEnter, in numeral form, the term in months of any prepayment penalty.
`)
loanAppRecordFields.set("hmdaintrorateperiod", ` 
\n### Introductory Rate Period
\nThis field stores the number of months, or proposed number of months in the case of an application, until the first date the interest rate may change after closing or account opening.
\nField Number         **248**
\nMnemonic             **HMDAINTRORATEPERIOD**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **31824**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nEnter, in numeral form, the number of months, or proposed number of months in the case of an application, until the first date the interest rate may change after closing or account opening.
`)
loanAppRecordFields.set("hmdaintonlypmtind", ` 
\n### Interest Only Pmt Indicator
\nThis field stores a code that indicates whether the contractual terms include, or would have included, interest-only payments.
\nField Number         **264**
\nMnemonic             **HMDAINTONLYPMTIND**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31859**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   Although this option is the default for this field, users must select another option because the Home Mortgage Disclosure Act (HMDA) does not allow “Not Applicable” as a response.##### (1) Interest-Only Payments
\n   The contractual terms include interest-only payments.##### (2) No Interest-Only Payments
\n   The contractual terms do not include interest-only payments.
\n`)
loanAppRecordFields.set("hmdanegamortind", ` 
\n### Negative Amortization Ind
\nThis field stores a code that indicates whether the contractual terms include, or would have included, a term that would cause the covered loan to be a negative amortization loan.
\nField Number         **265**
\nMnemonic             **HMDANEGAMORTIND**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31860**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   Although this option is the default for this field, users must select another option because the Home Mortgage Disclosure Act (HMDA) does not allow “Not Applicable” as a response.##### (1) Negative Amortization
\n   The contractual terms include a term that would cause the covered loan to be a negative amortization loan.##### (2) No Negative Amortization
\n   The contractual terms do not include a term that would cause the covered loan to be a negative amortization loan.
\n`)
loanAppRecordFields.set("hmdaothernonamortfeatures", ` 
\n### Other Non-amortizing Features
\nThis field stores a code that indicates whether the contractual terms include, or would have included, any term that would allow for payments other than fully amortizing payments during the loan term.
\nField Number         **266**
\nMnemonic             **HMDAOTHERNONAMORTFEATURES**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31861**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   Although this option is the default for this field, users must select another option because the Home Mortgage Disclosure Act (HMDA) does not allow “Not Applicable” as a response.##### (1) Other non-fully amortizing features
\n   The contractual terms include a term that would allow for payments other than fully amortizing payments during the loan term.##### (2) No other non-fully amortizing features
\n   The contractual terms do not include a term that would allow for payments other than fully amortizing payments during the loan term.
\n`)
loanAppRecordFields.set("hmdapropertyvalue", ` 
\n### Property Value
\nThis field stores the value of the property securing the covered loan or in the case of an application, proposed to secure the covered loan used in making the credit decision.
\nField Number         **250**
\nMnemonic             **HMDAPROPERTYVALUE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31826**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nEnter, in dollars, the value of the property securing the covered loan or in the case of an application, proposed to secure the covered loan used in making the credit decision.
`)
loanAppRecordFields.set("hmdamfdhomesecproptype", ` 
\n### MFD Home Secured Prop Type
\nThis field stores a code that indicates whether the covered loan or application is, or would have been, secured by a manufactured home with land, or by just a manufactured home without land.
\nField Number         **267**
\nMnemonic             **HMDAMFDHOMESECPROPTYPE**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **31862**
\nDefault Control      **No**
\nDefault Value        **3**
\n
\n#### Data Type Descriptions
\n##### (1) Manufactured home and land
\n   The covered loan or application is secured by a manufactured home with land.##### (2) Manufactured home and not land
\n   The covered loan or application is secured by a manufactured home without land.##### (3) Not Applicable
\n   The requirement to report manufactured home secured property type does not apply to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdamfdhomelandpropint", ` 
\n### MFD Home Land Prop Interest
\nThis field stores a code that indicates the applicant's or borrower's property interest in the land on which a manufactured home is, or will be, located.
\nField Number         **268**
\nMnemonic             **HMDAMFDHOMELANDPROPINT**
\nData Type            **Code to 5**
\nSource               **User-entered**
\nHelp File            **31863**
\nDefault Control      **No**
\nDefault Value        **5**
\n
\n#### Data Type Descriptions
\n##### (1) Direct Ownership
\n   The land on which a manufactured home is, or will be, located is owned by the applicant or borrower.##### (2) Indirect Ownership
\n   The land on which a manufactured home is, or will be, located is indirectly owned by the applicant or borrower.##### (3) Paid Leasehold
\n   The land on which a manufactured home is, or will be, located is a paid lease by the applicant or borrower.##### (4) Unpaid Leasehold
\n   The land on which a manufactured home is, or will be, located is an unpaid lease by the applicant or borrower.##### (5) Not Applicable
\n   The requirement to report the land property interest for the manufactured home does not apply to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdatotalunits", ` 
\n### Total Units
\nThis field stores the number of individual dwelling units related to the property securing the covered loan, or proposed to secure the covered loan.
\nField Number         **269**
\nMnemonic             **HMDATOTALUNITS**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **31864**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nEnter, in numeral form, the number of individual dwelling units related to the property securing the covered loan, or proposed to secure the covered loan.
`)
loanAppRecordFields.set("hmdamultifamilyaffordunits", ` 
\n### Multifamily Affordable Units
\nThis field stores the number of individual dwelling units related to any multifamily dwelling property securing the covered loan, that are income-restricted under federal, state, or local affordable housing programs.
\nField Number         **252**
\nMnemonic             **HMDAMULTIFAMILYAFFORDUNITS**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **31828**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nEnter, in number form, the number of individual dwelling units related to any multifamily dwelling property securing the covered loan or application, that are income-restricted under federal, state, or local affordable housing programs. Type 0 for a covered loan or application related to a multifamily dwelling that does not contain any such income-restricted individual dwelling units.
`)
loanAppRecordFields.set("hmdasubmissionofapmethod", ` 
\n### Submission of Appl Method
\nThis field stores a code that indicates whether the applicant or borrower submitted the application directly to your institution.
\nField Number         **270**
\nMnemonic             **HMDASUBMISSIONOFAPMETHOD**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **31865**
\nDefault Control      **No**
\nDefault Value        **3**
\n
\n#### Data Type Descriptions
\n##### (1) Submitted directly to your institution
\n   The applicant or borrower submitted the application directly to your institution.##### (2) Not submitted directly to your institution
\n   The applicant or borrower did not submit the application directly to your institution.##### (3) Not Applicable
\n   The requirement to report whether the applicant or borrower submitted the application directly to your institution does not apply to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdainitpayabletoinst", ` 
\n### Initially Payable to Inst
\nThis field stores a code that indicates whether the obligation arising from the covered loan was, or in the case of an application, would have been, initially payable to your institution.
\nField Number         **271**
\nMnemonic             **HMDAINITPAYABLETOINST**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **31866**
\nDefault Control      **No**
\nDefault Value        **3**
\n
\n#### Data Type Descriptions
\n##### (1) Initially payable to your institution
\n   The obligation arising from the covered loan was, or in the case of an application, would have been, initially payable to your institution.##### (2) Not initially payable to your institution
\n   The obligation arising from the covered loan was not, or in the case of an application, would not have been, initially payable to your institution.##### (3) Not Applicable
\n   The requirement to report whether the application would have been initially payable to your institution does not apply to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdanmlsrid", ` 
\n### NMLSR Identifier
\nThis field stores the Nationwide Mortgage Licensing System and Registry unique identifier (NMLSR ID) for the mortgage loan originator.
\nField Number         **254**
\nMnemonic             **HMDANMLSRID**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **31830**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the NMLSR ID (up to 40 characters) for the mortgage loan originator.
`)
loanAppRecordFields.set("hmdarevmortind", ` 
\n### Reverse Mortgage Indicator
\nThis field stores a code that indicates whether the obligation arising from the covered loan was, or in the case of an application, would have been, initially payable to your institution.
\nField Number         **272**
\nMnemonic             **HMDAREVMORTIND**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31867**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   Although this option is the default for this field, users must select another option because the Home Mortgage Disclosure Act (HMDA) does not allow “Not Applicable” as a response.##### (1) Reverse Mortgage
\n   The covered loan or the application is for a reverse mortgage.##### (2) Not A Reverse Mortgage
\n   The covered loan or the application is not for a reverse mortgage.
\n`)
loanAppRecordFields.set("hmdaoelocind", ` 
\n### Open-End LOC Indicator
\nThis field stores a code that indicates whether the covered loan or the application is for an open-end line of credit.
\nField Number         **273**
\nMnemonic             **HMDAOELOCIND**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31868**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   Although this option is the default for this field, users must select another option because the Home Mortgage Disclosure Act (HMDA) does not allow “Not Applicable” as a response.##### (1) Open-end line of credit
\n   The covered loan or the application is for an open-end line of credit.##### (2) Not an open-end line of credit
\n   The covered loan or the application is not for an open-end line of credit.
\n`)
loanAppRecordFields.set("hmdabusorcommpurposeind", ` 
\n### Bus or Commercial Purpose Ind
\nThis field stores a code that indicates whether the covered loan or the application is for a loan that will be made primarily for a business or commercial purpose.
\nField Number         **274**
\nMnemonic             **HMDABUSORCOMMPURPOSEIND**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **31869**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   Although this option is the default for this field, users must select another option because the Home Mortgage Disclosure Act (HMDA) does not allow “Not Applicable” as a response.##### (1) Primarily for a business or commercial purpose
\n   The covered loan or the application is for a loan that will be made primarily for a business or commercial purpose.##### (2) Not primarily for a business or commercial purpose
\n   The covered loan or the application is not for a loan that will be made primarily for a business or commercial purpose.
\n`)
loanAppRecordFields.set("hmdaautounderwritingsys", ` 
\n### Auto Underwriting System 1 - Auto Underwriting System 5
\nThese fields each store a code that indicates an automated underwriting system (AUS) you use to evaluate the application.
\nField Number         **256:1 - 256:5**
\nMnemonic             **HMDAAUTOUNDERWRITINGSYS:1 - HMDAAUTOUNDERWRITINGSYS:5**
\nData Type            **Code to 6**
\nSource               **User-entered**
\nHelp File            **31832**
\nDefault Control      **No**
\nDefault Value        **6**
\n
\nAt any of these five fields, you can select any of the following codes to specify an AUS you use to evaluate the application:
\n(1) Desktop Underwriter (DU)
\n   - (2) Loan Prospector (LP) or Loan Product Advisor
\n   - (3) Technology Open to Approved Lenders (TOTAL) Scorecard
\n   - (4) Guaranteed Underwriting System (GUS)
\n   - (5) Other
\n   - (6) Not Applicable (Select this option if the requirement to report an AUS does not apply to the covered loan or application that you are reporting.)
`)
loanAppRecordFields.set("hmdaautounderwritingresult", ` 
\n### Auto Underwriting Result 1 - Auto Underwriting Result 5
\nThese fields each store a code that indicates the results generated by the automated underwriting system (AUS) indicated in the related Auto Underwriting System 1-5 field.
\nField Number         **258:1 - 258:5**
\nMnemonic             **HMDAAUTOUNDERWRITINGRESULT:1 - HMDAAUTOUNDERWRITINGRESULT:5**
\nData Type            **Code to 17**
\nSource               **User-entered**
\nHelp File            **31834**
\nDefault Control      **No**
\nDefault Value        **17**
\n
\n#### Data Type Descriptions
\n##### (1) Approve/Eligible
\n   This result can come from the Federal National Mortgage Association (Fannie Mae®).##### (2) Approve/Ineligible
\n   This result can come from the Federal National Mortgage Association (Fannie Mae).##### (3) Refer/Eligible
\n   This result can come from the Federal National Mortgage Association (Fannie Mae).##### (4) Refer/Ineligible
\n   This result can come from the Federal National Mortgage Association (Fannie Mae).##### (5) Refer with Caution
\n   This result can come the Federal National Mortgage Association (Fannie Mae) or the Guaranteed Underwriting System (GUS).##### (6) Out of Scope
\n   This result can come from the Federal National Mortgage Association (Fannie Mae).##### (7) Error
\n   This result can come from the Federal National Mortgage Association (Fannie Mae).##### (8) Accept
\n   This result can come from the Federal Home Loan Mortgage Corporation (Freddie Mac®), the FHA TOTAL Scorecard, or the Guaranteed Underwriting System (GUS).##### (9) Caution
\n   This result can come from the Federal National Mortgage Association (Fannie Mae).##### (10) Ineligible
\n   This result can come from the Federal Home Loan Mortgage Corporation (Freddie Mac) or the Guaranteed Underwriting System (GUS).##### (11) Incomplete
\n   This result can come from the Federal Home Loan Mortgage Corporation (Freddie Mac).##### (12) Invalid
\n   This result can come from the Federal Home Loan Mortgage Corporation (Freddie Mac).##### (13) Refer
\n   This result can come from the FHA TOTAL Scorecard or the Guaranteed Underwriting System (GUS).##### (14) Eligible
\n   This result can come from the Guaranteed Underwriting System (GUS).##### (15) Unable to Determine or Unknown
\n   This result can come from the Federal National Mortgage Association (Fannie Mae) or the Guaranteed Underwriting System (GUS).##### (16) Other
\n   This result can come from the Guaranteed Underwriting System (GUS).##### (17) Not Applicable
\n   The requirement to report an AUS result does not apply to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdaautounderwritingsysother", ` 
\n### Auto Underwriting Sys Other 1 - Auto Underwriting Sys Other 7
\nThese fields store text that defines the specific name of another automated underwriting system referred to when any of the Auto Underwriting System 1–5 fields are set to (5) Other.
\nField Number         **257:1 - 257:7**
\nMnemonic             **HMDAAUTOUNDERWRITINGSYSOTHER:1 - HMDAAUTOUNDERWRITINGSYSOTHER:7**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **31833**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter specific text to define the name of another automated underwriting system. If the text exceeds the 40 characters allowed in the Auto Underwriting Sys Other 1 field, you can continue the text in subsequent Auto Underwriting Sys Other 2–7 fields.
`)
loanAppRecordFields.set("hmdaautounderwritingresother", ` 
\n### Auto Underwriting Res. Other 1 - Auto Underwriting Res. Other 7
\nThese fields store text that defines other automated underwriting system results indicated when the related Auto Underwriting Results 1–5 field is set to (16) Other.
\nField Number         **259:1 - 259:7**
\nMnemonic             **HMDAAUTOUNDERWRITINGRESOTHER:1 - HMDAAUTOUNDERWRITINGRESOTHER:7**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **31835**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter specific text to define the other automated underwriting system results. If the text exceeds the 40 characters allowed in the Auto Underwriting Res. Other 1 field, you can continue the text in subsequent Auto Underwriting Res. Other 2-7 fields.
`)
loanAppRecordFields.set("hmdaapplicationdatena", ` 
\n### Application Date N/A
\nThis field stores a code that indicates whether the requirement to report the application date applies to the covered loan or application.
\nField Number         **213**
\nMnemonic             **HMDAAPPLICATIONDATENA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31836**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the application date does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the application date applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdadebtrationa", ` 
\n### Debt Ratio N/A
\nThis field stores a code that indicates whether the requirement to report the debt-to-income ratio applies to the covered loan or application.
\nField Number         **261**
\nMnemonic             **HMDADEBTRATIONA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31856**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the debt-to-income ratio does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the debt-to-income ratio applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdaloantovaluena", ` 
\n### Loan To Value N/A
\nThis field stores a code that indicates whether the requirement to report the loan-to-value applies to the covered loan or application.
\nField Number         **262**
\nMnemonic             **HMDALOANTOVALUENA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31857**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the loan-to-value does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the loan-to-value applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdapropertystreetaddressna", ` 
\n### Property Street Address N/A
\nThis field stores a code that indicates whether the requirement to report the property street address is applicable to the covered loan or application.
\nField Number         **235**
\nMnemonic             **HMDAPROPERTYSTREETADDRESSNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31844**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the property street address does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the property street address applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdapropertycityna", ` 
\n### Property City N/A
\nThis field stores a code that indicates whether the requirement to report the property city is applicable to the covered loan or application.
\nField Number         **237**
\nMnemonic             **HMDAPROPERTYCITYNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31846**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the property city does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the property city applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdapropertystatena", ` 
\n### Property State N/A
\nThis field stores a code that indicates whether the requirement to report the property state is applicable to the covered loan or application.
\nField Number         **239**
\nMnemonic             **HMDAPROPERTYSTATENA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31848**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the property state does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the property state applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdapropertyzipcodena", ` 
\n### Property ZIP Code N/A
\nThis field stores a code that indicates whether the requirement to report the property ZIP Code is applicable to the covered loan or application.
\nField Number         **241**
\nMnemonic             **HMDAPROPERTYZIPCODENA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31850**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the property ZIP Code does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the property ZIP Code applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdapropertycountyna", ` 
\n### Property County N/A
\nThis field stores a code that indicates whether the requirement to report the property county is applicable to the covered loan or application.
\nField Number         **243**
\nMnemonic             **HMDAPROPERTYCOUNTYNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31852**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the property county does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the property county applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdacensustractna", ` 
\n### Property Census Tract N/A
\nThis field stores a code that indicates whether the requirement to report the property census tract is applicable to the covered loan or application.
\nField Number         **245**
\nMnemonic             **HMDACENSUSTRACTNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31854**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the property census tract does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the property census tract applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdaannualincomena", ` 
\n### Annual Income N/A
\nThis field stores a code that indicates whether the requirement to report the gross annual income of the borrower applies to the covered loan or application.
\nField Number         **218**
\nMnemonic             **HMDAANNUALINCOMENA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31809**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the gross annual income of the borrower does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the gross annual income of the borrower applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdaratespreadna", ` 
\n### Rate Spread N/A
\nThis field stores a code that indicates whether the requirement to report the rate spread applies to the covered loan or application.
\nField Number         **220**
\nMnemonic             **HMDARATESPREADNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31811**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the rate spread does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the rate spread applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdaloantermna", ` 
\n### Loan Term in Months N/A
\nThis field stores a code that indicates whether the requirement to report the loan term applies to the covered loan or application.
\nField Number         **263**
\nMnemonic             **HMDALOANTERMNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31858**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the loan term does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the loan term applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdainterestratena", ` 
\n### Interest Rate N/A
\nThis field stores a code that indicates whether the requirement to report the interest rate applies to the covered loan or application.
\nField Number         **260**
\nMnemonic             **HMDAINTERESTRATENA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31855**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the interest rate does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the interest rate applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdatotalloancostsna", ` 
\n### Total Loan Costs N/A
\nThis field stores a code that indicates whether the requirement to report the total loan costs applies to the covered loan or application.
\nField Number         **222**
\nMnemonic             **HMDATOTALLOANCOSTSNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31813**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the total loan costs does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the total loan costs applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdatotalpointsfeesna", ` 
\n### Total Points and Fees N/A
\nThis field stores a code that indicates whether the requirement to report the total points and fees applies to the covered loan or application.
\nField Number         **224**
\nMnemonic             **HMDATOTALPOINTSFEESNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31815**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the total points and fees does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the total points and fees applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdaoriginationchargesna", ` 
\n### Origination Charges N/A
\nThis field stores a code that indicates whether the requirement to report the origination charges applies to the covered loan or application.
\nField Number         **226**
\nMnemonic             **HMDAORIGINATIONCHARGESNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31817**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the origination charges does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the origination charges applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdadiscountpointsna", ` 
\n### Discount Points N/A
\nThis field stores a code that indicates whether the requirement to report the discount points applies to the covered loan or application.
\nField Number         **228**
\nMnemonic             **HMDADISCOUNTPOINTSNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31819**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the discount points does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the discount points applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdalendercreditsna", ` 
\n### Lender Credits N/A
\nThis field stores a code that indicates whether the requirement to report the lender credits applies to the covered loan or application.
\nField Number         **230**
\nMnemonic             **HMDALENDERCREDITSNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31821**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the lender credits does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the lender credits applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdaprepaymentpenaltytermna", ` 
\n### Prepayment Penalty Term N/A
\nThis field stores a code that indicates whether the requirement to report the prepayment penalty term applies to the covered loan or application.
\nField Number         **247**
\nMnemonic             **HMDAPREPAYMENTPENALTYTERMNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31823**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the prepayment penalty term does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the prepayment penalty term applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdaintrorateperiodna", ` 
\n### Introductory Rate Period N/A
\nThis field stores a code that indicates whether the requirement to report the introductory rate period applies to the covered loan or application.
\nField Number         **249**
\nMnemonic             **HMDAINTRORATEPERIODNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31825**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the introductory rate period does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the introductory rate period applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdapropertyvaluena", ` 
\n### Property Value N/A
\nThis field stores a code that indicates whether the requirement to report the property value applies to the covered loan or application.
\nField Number         **251**
\nMnemonic             **HMDAPROPERTYVALUENA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31827**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the property value does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the property value applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdamultifamilyaffordunitsna", ` 
\n### Multifamily Afford Units N/A
\nThis field stores a code that indicates whether the requirement to report the multifamily affordable units applies to the covered loan or application.
\nField Number         **253**
\nMnemonic             **HMDAMULTIFAMILYAFFORDUNITSNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31829**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the multifamily affordable units does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the multifamily affordable units applies to the covered loan or application.
\n`)
loanAppRecordFields.set("hmdanmlsridna", ` 
\n### NMLSR Identifier N/A
\nThis field stores a code that indicates whether the requirement to report the mortgage loan originator NMLSR ID is applicable to the covered loan or application.
\nField Number         **255**
\nMnemonic             **HMDANMLSRIDNA**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **31831**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\n#### Data Type Descriptions
\n##### (0) Not Applicable
\n   The requirement to report the mortgage loan originator NMLSR ID does not apply to the covered loan or application.##### (1) Applicable
\n   The requirement to report the mortgage loan originator NMLSR ID applies to the covered loan or application.
\n`)
loanAppRecordFields.set("dealercode", ` 
\n### Dealer Code
\nThis field stores the dealer code for a lease loan.
\nField Number         **290**
\nMnemonic             **DEALERCODE**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **31895**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nThis field is for reference purposes only. The system uses this field to store the dealer code for a lease loan.
`)
loanAppRecordFields.set("dealerreserve", ` 
\n### Dealer Reserve
\nThis field stores the amount of the dealer reserve for a lease loan.
\nField Number         **291**
\nMnemonic             **DEALERRESERVE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **31894**
\nDefault Control      **No**
\nDefault Value        **0.00**
\n
\nThis field is for reference purposes only. The system uses this field to store the amount of the dealer reserve for a lease loan.
`)
loanAppRecordFields.set("salestaxrate", ` 
\n### Sales Tax Rate
\nThis field contains the current lease loan sales tax rate at the time of the inquiry.
\nField Number         **804**
\nMnemonic             **SALESTAXRATE**
\nData Type            **Rate**
\nSource               **System-calculated**
\nHelp File            **31879**
\nDefault Control      **No**
\nDefault Value        **.000**
\n
\nThis calculated field is the sum of the State Sales Tax Rate, County Sales Tax Rate, and City Sales Tax Rate fields.
`)
loanAppRecordFields.set("salestaxstateindicator", ` 
\n### Sales Tax State Indicator
\nThis field stores a code that determines how state sales tax will be used as part of the information required to compute the sales tax.
\nField Number         **302**
\nMnemonic             **SALESTAXSTATEINDICATOR**
\nData Type            **Code to 4**
\nSource               **User-entered or System-entered**
\nHelp File            **31889**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states.
\n#### Data Type Descriptions
\n##### (0) No State Tax
\n   The state portion of the sales tax is 0.000%.##### (1) Use Lessee State
\n   The system should use the Lessee State field to determine the state portion of the sales tax.##### (2) Use Dealer State
\n   The system should use the Dealer State field to determine the state portion of the sales tax.##### (3) Use Fixed Lessee State
\n   The system should use the Fixed Lessee State Tax Rate field to determine the state portion of the sales tax.##### (4) Use Fixed Dealer State
\n   The system should use the Fixed Dealer State Tax Rate field to determine the state portion of the sales tax.
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("salestaxcountyindicator", ` 
\n### Sales Tax County Indicator
\nThis field stores a code that determines how county sales tax will be used as part of the information required to compute the sales tax.
\nField Number         **303**
\nMnemonic             **SALESTAXCOUNTYINDICATOR**
\nData Type            **Code to 4**
\nSource               **User-entered or System-entered**
\nHelp File            **31890**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states.
\n#### Data Type Descriptions
\n##### (0) No County Tax
\n   The county portion of the sales tax is 0.000%.##### (1) Use Lessee County
\n   The system should use the Lessee County field to determine the county portion of the sales tax.##### (2) Use Dealer County
\n   The system should use the Dealer County field to determine the county portion of the sales tax.##### (3) Use Fixed Lessee County
\n   The system should use the Fixed Lessee County Tax Rate field to determine the county portion of the sales tax.##### (4) Use Fixed Dealer County
\n   The system should use the Fixed Dealer County Tax Rate field to determine the county portion of the sales tax.
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("salestaxcityindicator", ` 
\n### Sales Tax City Indicator
\nThis field stores a code that determines how city sales tax will be used as part of the information required to compute the sales tax.
\nField Number         **304**
\nMnemonic             **SALESTAXCITYINDICATOR**
\nData Type            **Code to 4**
\nSource               **User-entered or System-entered**
\nHelp File            **31891**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states.
\n#### Data Type Descriptions
\n##### (0) No City Tax
\n   The city portion of the sales tax is 0.000%.##### (1) Use Lessee City
\n   The system should use the Dealer City field to determine the city portion of the sales tax.##### (2) Use Dealer City
\n   The system should use the Dealer City field to determine the city portion of the sales tax.##### (3) Use Fixed Lessee City
\n   The system should use the Fixed Lessee City Tax Rate field to determine the city portion of the sales tax.##### (4) Use Fixed Dealer City
\n   The system should use the Fixed Dealer City Tax Rate field to determine the city portion of the sales tax.
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("lesseestate", ` 
\n### Lessee State
\nThis field stores the two-character state code where the car is registered as part of the information required to compute the sales tax.
\nField Number         **284**
\nMnemonic             **LESSEESTATE**
\nData Type            **2 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **31883**
\nDefault Control      **Yes**
\nDefault Value        **(Blank)**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states.
\n
\nEnter the two-character state code where the car is registered as part of the information required to compute the sales tax.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("lesseecounty", ` 
\n### Lessee County
\nThis field stores the county where the car is registered as part of the information required to compute the sales tax.
\nField Number         **285**
\nMnemonic             **LESSEECOUNTY**
\nData Type            **32 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **31884**
\nDefault Control      **Yes**
\nDefault Value        **(Blank)**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states.
\n
\nEnter the county where the car is registered (up to 32 characters) as part of the information required to compute the sales tax.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("lesseecity", ` 
\n### Lessee City
\nThis field stores the city where the car is registered as part of the information required to compute the sales tax.
\nField Number         **286**
\nMnemonic             **LESSEECITY**
\nData Type            **32 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **31885**
\nDefault Control      **Yes**
\nDefault Value        **(Blank)**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states.
\n
\nEnter the city where the car is registered (up to 32 characters) as part of the information required to compute the sales tax.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("fixedlesseestatetaxrate", ` 
\n### Fixed Lessee State Tax Rate
\nThis field stores a fixed state sales tax rate for the lessee state.
\nField Number         **292**
\nMnemonic             **FIXEDLESSEESTATETAXRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **31898**
\nDefault Control      **Yes**
\nDefault Value        **.000**
\n
\nEnter a fixed state sales tax rate for the lessee state.
\n
\nIf the value in the Sales Tax State Indicator field is set to (3) Use Fixed Lessee State, the system uses this field setting for the value in the State Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("fixedlesseecountytaxrate", ` 
\n### Fixed Lessee County Tax Rate
\nThis field stores a fixed county sales tax rate for the lessee county.
\nField Number         **293**
\nMnemonic             **FIXEDLESSEECOUNTYTAXRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **31899**
\nDefault Control      **Yes**
\nDefault Value        **.000**
\n
\nEnter a fixed county sales tax rate for the lessee county.
\n
\nIf the value in the Sales Tax County Indicator field is set to (3) Use Fixed Lessee County, the system uses this field setting for the value in the County Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("fixedlesseecitytaxrate", ` 
\n### Fixed Lessee City Tax Rate
\nThis field stores a fixed city sales tax rate for the lessee city.
\nField Number         **294**
\nMnemonic             **FIXEDLESSEECITYTAXRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **32600**
\nDefault Control      **Yes**
\nDefault Value        **.000**
\n
\nEnter a fixed city sales tax rate for the lessee city.
\n
\nIf the value in the Sales Tax City Indicator field is set to (3) Use Fixed Lessee City, the system uses this field setting for the value in the City Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("leaseterminatedate", ` 
\n### Lease Termination Date
\nThis field stores the date when the member terminates a lease loan by surrendering the vehicle.
\nField Number         **300**
\nMnemonic             **LEASETERMINATEDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **31892**
\nDefault Control      **Yes**
\nDefault Value        **Date Null**
\n
\nEnter a date (MM/YY/DDDD) to indicate when the member terminates a lease loan by surrendering the vehicle. Interest on the loan ceases to accrue after this date.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("leaseterminatefee", ` 
\n### Lease Termination Fee
\nThis field stores the fee amount to be charged for a loan paid off before the balloon date.
\nField Number         **298**
\nMnemonic             **LEASETERMINATEFEE**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **31893**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nIf a lease loan is paid off before the balloon date, enter the fee amount to be charged.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("leasedispositiondate", ` 
\n### Lease Disposition Date
\nThis field stores the date when the disposition fee is charged when a vehicle is turned back in at the end of a lease.
\nField Number         **301**
\nMnemonic             **LEASEDISPOSITIONDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **31896**
\nDefault Control      **Yes**
\nDefault Value        **Date Null**
\n
\nEnter a date (MM/YY/DDDD) to indicate when the disposition fee is charged when a vehicle is turned back in at the end of a lease.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("leasedispositionfee", ` 
\n### Lease Disposition Fee
\nThis field stores the fee amount to be charged when a vehicle is turned back in at the end of a lease.
\nField Number         **299**
\nMnemonic             **LEASEDISPOSITIONFEE**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **31897**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nEnter the fee amount to be charged when a vehicle is turned back in at the end of a lease.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("statesalestaxrate", ` 
\n### State Sales Tax Rate
\nThis field contains the current lease loan state sales tax at the time of the inquiry.
\nField Number         **805**
\nMnemonic             **STATESALESTAXRATE**
\nData Type            **Rate**
\nSource               **System-calculated**
\nHelp File            **31880**
\nDefault Control      **No**
\nDefault Value        **.000**
\n
\nThis field, used in inquiries only. The current lease loan state sales tax is computed using the Sales Tax Rate Database and the values in the Dealer State, Lessee State, and Sales Tax State Indicator fields.
\n
\nIf the value in the Sales Tax State Indicator field is set to (3) Use Fixed Lessee State, the system uses the value in the Fixed Lessee State Tax Rate field setting for the State Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf the value in the Sales Tax State Indicator field is set to (4) Use Fixed Dealer State, the system uses the value in the Fixed Dealer State Tax Rate field setting for the State Sales Tax Rate field instead of the Sales Tax Rate Database.
`)
loanAppRecordFields.set("cntysalestaxrate", ` 
\n### County Sales Tax Rate
\nThis field contains the current lease loan county sales tax at the time of the inquiry.
\nField Number         **806**
\nMnemonic             **CNTYSALESTAXRATE**
\nData Type            **Rate**
\nSource               **System-calculated**
\nHelp File            **31881**
\nDefault Control      **No**
\nDefault Value        **.000**
\n
\nThis field, used in inquiries only. The current lease loan county sales tax is computed using the Sales Tax Rate Database and the values in the Dealer County, Lessee County, and Sales Tax County Indicator fields.
\n
\nIf the value in the Sales Tax County Indicator field is set to (3) Use Fixed Lessee County, the system uses the value in the Fixed Lessee County Tax Rate field setting for the County Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf the value in the Sales Tax County Indicator field is set to (4) Use Fixed Dealer County, the system uses the value in the Fixed Dealer County Tax Rate field setting for the County Sales Tax Rate field instead of the Sales Tax Rate Database.
`)
loanAppRecordFields.set("citysalestaxrate", ` 
\n### City Sales Tax Rate
\nThis field contains the current lease loan city sales tax at the time of the inquiry.
\nField Number         **807**
\nMnemonic             **CITYSALESTAXRATE**
\nData Type            **Rate**
\nSource               **System-calculated**
\nHelp File            **31882**
\nDefault Control      **No**
\nDefault Value        **.000**
\n
\nThis field, used in inquiries only. The current lease loan city sales tax is computed using the Sales Tax Rate Database and the values in the Dealer City, Lessee City, and Sales Tax City Indicator fields.
\n
\nIf the value in the Sales Tax City Indicator field is set to (3) Use Fixed Lessee City, the system uses the value in the Fixed Lessee City Tax Rate field setting for the City Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf the value in the Sales Tax City Indicator field is set to (4) Use Fixed Dealer City, the system uses the value in the Fixed Dealer City Tax Rate field setting for the City Sales Tax Rate field instead of the Sales Tax Rate Database.
`)
loanAppRecordFields.set("dealerstate", ` 
\n### Dealer State
\nThis field stores the two-character state code where the car was leased as part of the information required to compute the sales tax.
\nField Number         **287**
\nMnemonic             **DEALERSTATE**
\nData Type            **2 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **31886**
\nDefault Control      **Yes**
\nDefault Value        **(Blank)**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states.
\n
\nEnter the two-character state code where the car was leased as part of the information required to compute the sales tax.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("dealercounty", ` 
\n### Dealer County
\nThis field stores the county where the car was leased as part of the information required to compute the sales tax.
\nField Number         **288**
\nMnemonic             **DEALERCOUNTY**
\nData Type            **32 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **31887**
\nDefault Control      **Yes**
\nDefault Value        **(Blank)**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states.
\n
\nEnter the county (up to 32 characters) where the car was leased as part of the information required to compute the sales tax.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("dealercity", ` 
\n### Dealer City
\nThis field stores the city where the car was leased as part of the information required to compute the sales tax.
\nField Number         **289**
\nMnemonic             **DEALERCITY**
\nData Type            **32 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **31888**
\nDefault Control      **Yes**
\nDefault Value        **(Blank)**
\n
\nLease loans require sales tax to be charged as part of the loan payment. Laws for collecting sales tax on lease payments differ between states.
\n
\nEnter the city (up to 32 characters) where the car was leased as part of the information required to compute the sales tax.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("fixeddealerstatetaxrate", ` 
\n### Fixed Dealer State Tax Rate
\nThis field stores a fixed state sales tax rate for the dealer state.
\nField Number         **295**
\nMnemonic             **FIXEDDEALERSTATETAXRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **32601**
\nDefault Control      **Yes**
\nDefault Value        **.000**
\n
\nEnter a fixed state sales tax rate for the dealer state.
\n
\nIf the value in the Sales Tax State Indicator field is set to (4) Use Fixed Dealer State, the system uses this field setting for the value in the State Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("fixeddealercountytaxrate", ` 
\n### Fixed Dealer County Tax Rate
\nThis field stores a fixed county sales tax rate for the dealer county.
\nField Number         **296**
\nMnemonic             **FIXEDDEALERCOUNTYTAXRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **32602**
\nDefault Control      **Yes**
\nDefault Value        **.000**
\n
\nEnter a fixed county sales tax rate for the dealer county.
\n
\nIf the value in the Sales Tax County Indicator field is set to (4) Use Fixed Dealer County, the system uses this field setting for the value in the County Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("fixeddealercitytaxrate", ` 
\n### Fixed Dealer City Tax Rate
\nThis field stores a fixed city sales tax rate for the dealer city.
\nField Number         **297**
\nMnemonic             **FIXEDDEALERCITYTAXRATE**
\nData Type            **Rate**
\nSource               **User-entered or System-entered**
\nHelp File            **32603**
\nDefault Control      **Yes**
\nDefault Value        **.000**
\n
\nEnter a fixed city sales tax rate for the dealer city.
\n
\nIf the value in the Sales Tax City Indicator field is set to (4) Use Fixed Dealer City, the system uses this field setting for the value in the City Sales Tax Rate field instead of the Sales Tax Rate Database.
\n
\nIf you choose to use the Loan Calc Screen action field, the system updates this field value from the loan calculation screen.
`)
loanAppRecordFields.set("usernumber1", ` 
\n### 2nd App Request Type
\nIn this case, this field stores a credit union-defined number that indicates the second application request type.
\nField Number         **070**
\nMnemonic             **USERNUMBER1**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **01670**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nOnce defined, you can use this field to store any credit union-defined number up to 2,000,000,000. In this instance, this field is defined as 2nd App Request Type.
`)
loanAppRecordFields.set("usernumber2", ` 
\n### Interviewer/User ID
\nIn this case, this field stores a credit union-defined number that indicates the interviewer or user ID.
\nField Number         **071**
\nMnemonic             **USERNUMBER2**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **01671**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nOnce defined, you can use this field to store any credit union-defined number up to 2,000,000,000. In this instance, this field is defined as Interviewer/User ID.
`)
loanAppRecordFields.set("userrate1", ` 
\n### Approved Rate
\nIn this case, this field stores a credit union-defined rate approved.
\nField Number         **072**
\nMnemonic             **USERRATE1**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **01672**
\nDefault Control      **Yes**
\nDefault Value        **.000**
\n
\nOnce defined, you can use this field to store any credit union-defined rate up to 999.999%. In this instance, this field is defined as Approved Rate.
`)
loanAppRecordFields.set("userrate2", ` 
\n### Debt Ratio
\nIn this case, this field stores a credit union-defined debt ratio.
\nField Number         **073**
\nMnemonic             **USERRATE2**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **01673**
\nDefault Control      **Yes**
\nDefault Value        **.000**
\n
\nOnce defined, you can use this field to store any credit union-defined rate up to 999.999%. In this instance, this field is defined as Debt Ratio.
`)
loanAppRecordFields.set("userchar1", ` 
\n### Current Address Correct (Y/N)
\nIn this case, this field stores a credit union-defined character indicating whether the current address is correct.
\nField Number         **074**
\nMnemonic             **USERCHAR1**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01674**
\nDefault Control      **Yes**
\nDefault Value        **(Blank)**
\n
\nOnce defined, you can use this field to store any credit union-defined descriptive text (up to 10 characters). In this instance, this field is defined as Current Address Correct (Y/N).
`)
loanAppRecordFields.set("userchar2", ` 
\n### Source of Other Income
\nIn this case, this field stores a credit union-defined character indicating another source of income.
\nField Number         **075**
\nMnemonic             **USERCHAR2**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01675**
\nDefault Control      **Yes**
\nDefault Value        **(Blank)**
\n
\nOnce defined, you can use this field to store any credit union-defined descriptive text (up to 10 characters). In this instance, this field is defined as Source of Other Income (Y/N).
`)
loanAppRecordFields.set("userchar3", ` 
\n### Is there a Co-Applicant (Y/N)
\nIn this case, this field stores a credit union-defined character indicating if there is a co-applicant.
\nField Number         **076**
\nMnemonic             **USERCHAR3**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01676**
\nDefault Control      **Yes**
\nDefault Value        **(Blank)**
\n
\nOnce defined, you can use this field to store any credit union-defined descriptive text (up to 10 characters). In this instance, this field is defined as Is there a Co-Applicant (Y/N).
`)
loanAppRecordFields.set("userchar4", ` 
\n### Purpose
\nIn this case, this field stores a credit union-defined character indicating the purpose of the loan.
\nField Number         **077**
\nMnemonic             **USERCHAR4**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **01677**
\nDefault Control      **Yes**
\nDefault Value        **(Blank)**
\n
\nOnce defined, you can use this field to store any credit union-defined descriptive text (up to 10 characters). In this instance, this field is defined as Purpose.
`)
loanAppRecordFields.set("useramount1", ` 
\n### Amount of Other Income
\nIn this case, this field stores a credit union-defined amount of the applicant's income from another source.
\nField Number         **078**
\nMnemonic             **USERAMOUNT1**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01678**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nOnce defined, you can use this field to store any credit union-defined amount up to $9,999,999.99. In this instance, this field is defined as Amount of Other Income.
`)
loanAppRecordFields.set("useramount2", ` 
\n### 2nd App Loan Amount
\nIn this case, this field stores a credit union-defined amount of the second loan application.
\nField Number         **079**
\nMnemonic             **USERAMOUNT2**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01679**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nOnce defined, you can use this field to store any credit union-defined amount up to $9,999,999.99. In this instance, this field is defined as 2nd App Loan Amount.
`)
loanAppRecordFields.set("useramount3", ` 
\n### Monthly Rent/Mortg Applicant
\nIn this case, this field stores a credit union-defined amount of the applicant's rent or mortgage.
\nField Number         **080**
\nMnemonic             **USERAMOUNT3**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01680**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nOnce defined, you can use this field to store any credit union-defined amount up to $9,999,999.99. In this instance, this field is defined as Monthly Rent/Mortg Applicant.
`)
loanAppRecordFields.set("useramount4", ` 
\n### New Monthly Payment New Loan
\nIn this case, this field stores a credit union-defined amount of the applicant's new monthly payment for a new loan.
\nField Number         **081**
\nMnemonic             **USERAMOUNT4**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01681**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nOnce defined, you can use this field to store any credit union-defined amount up to $9,999,999.99. In this instance, this field is defined as New Monthly Payment New Loan.
`)
loanAppRecordFields.set("useramount5", ` 
\n### Co-App Rent/Mortg if Different
\nIn this case, this field stores a credit union-defined amount of the co-applicant's rent or mortgage, if different than applicant's.
\nField Number         **082**
\nMnemonic             **USERAMOUNT5**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01682**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nOnce defined, you can use this field to store any credit union-defined amount up to $9,999,999.99. In this instance, this field is defined as Co-App Rent/Mortg if Different.
`)
loanAppRecordFields.set("useramount6", ` 
\n### Co-App Other Income
\nIn this case, this field stores a credit union-defined amount of the co-applicant's other income from another source.
\nField Number         **083**
\nMnemonic             **USERAMOUNT6**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01683**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nOnce defined, you can use this field to store any credit union-defined amount up to $9,999,999.99. In this instance, this field is defined as Co-App Other Income.
`)
loanAppRecordFields.set("useramount7", ` 
\n### Taxes
\nIn this case, this field stores a credit union-defined amount of the applicant's taxes.
\nField Number         **084**
\nMnemonic             **USERAMOUNT7**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01684**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nOnce defined, you can use this field to store any credit union-defined amount up to $9,999,999.99. In this instance, this field is defined as Taxes.
`)
loanAppRecordFields.set("useramount8", ` 
\n### Insurance/pmi/hoa
\nIn this case, this field stores a credit union-defined amount of the applicant's insurance payments or home owners association payment.
\nField Number         **085**
\nMnemonic             **USERAMOUNT8**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01685**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nOnce defined, you can use this field to store any credit union-defined amount up to $9,999,999.99. In this instance, this field is defined as Insurance/pmi/hoa.
`)
loanAppRecordFields.set("useramount9", ` 
\n### Property Value/Sales Price
\nIn this case, this field stores a credit union-defined amount of the property's value or sales price.
\nField Number         **086**
\nMnemonic             **USERAMOUNT9**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01686**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nOnce defined, you can use this field to store any credit union-defined amount up to $9,999,999.99. In this instance, this field is defined as Property Value/Sales Price.
`)
loanAppRecordFields.set("useramount10", ` 
\n### Total Income
\nIn this case, this field stores a credit union-defined amount of the applicant's total income.
\nField Number         **087**
\nMnemonic             **USERAMOUNT10**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **01687**
\nDefault Control      **Yes**
\nDefault Value        **0.00**
\n
\nOnce defined, you can use this field to store any credit union-defined amount up to $9,999,999.99. In this instance, this field is defined as Total Income.
`)
loanAppRecordFields.set("usercode1", ` 
\n### Cross Sell Department
\nIn this case, this field stores a credit union-defined code that indicates if there is any cross sell opportunities.
\nField Number         **088**
\nMnemonic             **USERCODE1**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01688**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nOnce defined, you can use this field to store any credit union-defined code (0-9999). In this instance, this field is defined as Cross Sell Department.
`)
loanAppRecordFields.set("usercode2", ` 
\n### Payment Skips
\nIn this case, this field stores a credit union-defined code that indicates any payment skips.
\nField Number         **089**
\nMnemonic             **USERCODE2**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01689**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nOnce defined, you can use this field to store any credit union-defined code (0-9999). In this instance, this field is defined as Payment Skips.
`)
loanAppRecordFields.set("usercode3", ` 
\n### Cross Sell Employee
\nIn this case, this field stores a credit union-defined code that indicates the employee working with the applicant on a cross sell opportunity.
\nField Number         **090**
\nMnemonic             **USERCODE3**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01690**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nOnce defined, you can use this field to store any credit union-defined code (0-9999). In this instance, this field is defined as Cross Sell Employee.
`)
loanAppRecordFields.set("usercode4", ` 
\n### Time Received
\nIn this case, this field stores a credit union-defined code that indicates the time (HHMM) the application was received.
\nField Number         **091**
\nMnemonic             **USERCODE4**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01691**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nOnce defined, you can use this field to store any credit union-defined code (0-9999). In this instance, this field is defined as Time Received.
`)
loanAppRecordFields.set("usercode5", ` 
\n### Time of Decision
\nIn this case, this field stores a credit union-defined code that indicates the time (HHMM) that the decision on the application was made.
\nField Number         **092**
\nMnemonic             **USERCODE5**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01692**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nOnce defined, you can use this field to store any credit union-defined code (0-9999). In this instance, this field is defined as Time of Decision.
`)
loanAppRecordFields.set("usercode6", ` 
\n### Self-Employed? (0=No, 1=Yes)
\nIn this case, this field stores a credit union-defined code that indicates if the applicant is self-employed.
\nField Number         **093**
\nMnemonic             **USERCODE6**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01693**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nOnce defined, you can use this field to store any credit union-defined code (0-9999). In this instance, this field is defined as Self-Employed? (0=No, 1=Yes).
`)
loanAppRecordFields.set("usercode7", ` 
\n### CR Bur Score
\nIn this case, this field stores a credit union-defined code that indicates the applicant's credit retrieval bureau score.
\nField Number         **094**
\nMnemonic             **USERCODE7**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01694**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nOnce defined, you can use this field to store any credit union-defined code (0-9999). In this instance, this field is defined as CR Bur Score.
`)
loanAppRecordFields.set("usercode8", ` 
\n### Tier
\nIn this case, this field stores a credit union-defined code that indicates the rate tier for this loan.
\nField Number         **095**
\nMnemonic             **USERCODE8**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01695**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nOnce defined, you can use this field to store any credit union-defined code (0-9999). In this instance, this field is defined as Tier.
`)
loanAppRecordFields.set("usercode9", ` 
\n### Coapp Housing Same as Primary
\nIn this case, this field stores a credit union-defined code that indicates if the housing for the co-applicant is the same as for the applicant.
\nField Number         **096**
\nMnemonic             **USERCODE9**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01696**
\nDefault Control      **Yes**
\nDefault Value        **0**
\n
\nOnce defined, you can use this field to store any credit union-defined code (0-9999). In this instance, this field is defined as Coapp Housing Same as Primary.
`)
loanAppRecordFields.set("usercode10", ` 
\n### User Code 10
\nThis field is a custom field that is not displayed unless you define it with the Application User Field Names parameters.
\nField Number         **097**
\nMnemonic             **USERCODE10**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **01697**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nYou can use this field to store any credit union-defined code (0-9999). Once you define this field, you can use Application Defaults to set default field values.
`)
loanAppRecordFields.set("userdate1", ` 
\n### User Date 01
\nThese fields are custom fields that are not displayed unless you define them with the Application User Field Names parameters.
\nField Number         **098**
\nMnemonic             **USERDATE1**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01698**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nYou can use this field to store any credit union-defined date. Once you define this field, you can use Application Defaults to set default field values.
`)
loanAppRecordFields.set("userdate2", ` 
\n### User Date 02
\nThese fields are custom fields that are not displayed unless you define them with the Application User Field Names parameters.
\nField Number         **099**
\nMnemonic             **USERDATE2**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01699**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nYou can use this field to store any credit union-defined date. Once you define this field, you can use Application Defaults to set default field values.
`)
loanAppRecordFields.set("userdate3", ` 
\n### User Date 03
\nThese fields are custom fields that are not displayed unless you define them with the Application User Field Names parameters.
\nField Number         **100**
\nMnemonic             **USERDATE3**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01700**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nYou can use this field to store any credit union-defined date. Once you define this field, you can use Application Defaults to set default field values.
`)
loanAppRecordFields.set("userdate4", ` 
\n### User Date 04
\nThese fields are custom fields that are not displayed unless you define them with the Application User Field Names parameters.
\nField Number         **101**
\nMnemonic             **USERDATE4**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01701**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nYou can use this field to store any credit union-defined date. Once you define this field, you can use Application Defaults to set default field values.
`)
loanAppRecordFields.set("userdate5", ` 
\n### User Date 05
\nThese fields are custom fields that are not displayed unless you define them with the Application User Field Names parameters.
\nField Number         **102**
\nMnemonic             **USERDATE5**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01702**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nYou can use this field to store any credit union-defined date. Once you define this field, you can use Application Defaults to set default field values.
`)
loanAppRecordFields.set("userdate6", ` 
\n### User Date 06
\nThese fields are custom fields that are not displayed unless you define them with the Application User Field Names parameters.
\nField Number         **103**
\nMnemonic             **USERDATE6**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01703**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nYou can use this field to store any credit union-defined date. Once you define this field, you can use Application Defaults to set default field values.
`)
loanAppRecordFields.set("userdate7", ` 
\n### User Date 07
\nThese fields are custom fields that are not displayed unless you define them with the Application User Field Names parameters.
\nField Number         **104**
\nMnemonic             **USERDATE7**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01704**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nYou can use this field to store any credit union-defined date. Once you define this field, you can use Application Defaults to set default field values.
`)
loanAppRecordFields.set("userdate8", ` 
\n### User Date 08
\nThese fields are custom fields that are not displayed unless you define them with the Application User Field Names parameters.
\nField Number         **105**
\nMnemonic             **USERDATE8**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01705**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nYou can use this field to store any credit union-defined date. Once you define this field, you can use Application Defaults to set default field values.
`)
loanAppRecordFields.set("userdate9", ` 
\n### User Date 09
\nThese fields are custom fields that are not displayed unless you define them with the Application User Field Names parameters.
\nField Number         **106**
\nMnemonic             **USERDATE9**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01706**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nYou can use this field to store any credit union-defined date. Once you define this field, you can use Application Defaults to set default field values.
`)
loanAppRecordFields.set("userdate10", ` 
\n### User Date 10
\nThese fields are custom fields that are not displayed unless you define them with the Application User Field Names parameters.
\nField Number         **107**
\nMnemonic             **USERDATE10**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **01707**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nYou can use this field to store any credit union-defined date. Once you define this field, you can use Application Defaults to set default field values.
`)
loanAppRecordFields.set("completedactions", ` 
\n### Completed Action 01 - Completed Action 50
\nThese fields store a code that tracks whether the corresponding actions in the Application Processing workflow have been completed.
\nField Number         **150:1-150:50**
\nMnemonic             **COMPLETEDACTIONS:1 - COMPLETEDACTIONS:50**
\nData Type            **Code to 1**
\nSource               **System-entered**
\nHelp File            **01750**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nThe Completed Action ## subfield is one of 50 subfields that correspond to actions in the Application Processing workflow. Additional actions are available through a pop-up menu.
\n
\nThe system automatically sets these fields as workflow actions are completed in Application Processing.
\n#### Data Type Descriptions
\n##### 0
\n   The corresponding action has not been completed.##### 1
\n   The corresponding action has been completed.
\n`)
