export const cardRecordFields = new Map<string, string>()
cardRecordFields.set("type", ` 
\n### Card Type
\nThis field stores a credit union-defined code to identify the type of card.
\nField Number         **003**
\nMnemonic             **TYPE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **00803**
\nDefault Control      **No**
\nDefault Value **00**
\n
\nRequired entry: Enter a credit union-defined code (00–99) to identify the type of card. The share type lets you group similar types of shares. Each type of card issued by the credit union (ATM cards, debit cards, credit cards, etc.) must have a unique two-digit code for this field.
`)
cardRecordFields.set("description", ` 
\n### Description
\nThis field stores a card description that displays in card inquiries and on card FM screens when all fields display.
\nField Number         **082**
\nMnemonic             **DESCRIPTION**
\nData Type            **30 Characters**
\nSource               **User-entered**
\nHelp File            **00882**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nEnter a description of the card (up to 30 characters). You can add this field to the Card screen definitions.
\n
\nYou can access this field with PowerOn specfiles and SymConnect.
`)
cardRecordFields.set("number", ` 
\n### Card Number
\nThis field stores the card number based on the type of card and your credit union-defined procedures.
\nField Number         **001**
\nMnemonic             **NUMBER**
\nData Type            **20 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **00801**
\nDefault Control      **No**
\nDefault Value **<Blank>**
\n
\nRequired entry: Enter the card number (up to 20 characters) based on the following:
\nFor credit cards or debit cards, the first six digits of the card number must be the BIN (Bank Identification Number) assigned to your credit union. Your credit union can determine the remaining 10 digits.
\n   - For credit and debit cards, the card number must be exactly 16 digits.
\n   - For ATM cards, the first six digits of the card number must be the ISO (International Standards Organization) number assigned to your credit union.
`)
cardRecordFields.set("suffix", ` 
\n### Card Suffix
\nThis field stores the two-digit suffix to the card number, if any.
\nField Number         **002**
\nMnemonic             **SUFFIX**
\nData Type            **2 Characters**
\nSource               **User-entered**
\nHelp File            **00802**
\nDefault Control      **Yes**
\nDefault Value **<Blank>**
\n
\nEnter the two-digit suffix to the card number, if any. The two most common uses for a suffix are:
\nFor internal tracking only, you can type a unique suffix to identify each card (for example, 01 for the first card, 02 for the second card, etc.). The card suffix is not part of the Card Number field and is not encoded on the card, but may be useful when designing PowerOn specfiles.
\n   - ATM cards may use a suffix if you issue several cards for the same value in the Card Number field, but want the cards to be treated separately. The suffix is used for card verification. For example, if the ATM card with suffix 01 is captured and further authorizations will be denied, the ATM card with the same card number and suffix 02 can still be used. The suffix may be part of the card number or may be embossed on the card separately and included in the Track II data in the card's magnetic stripe.
\n***Important:***  In the ATM environment, the industry standard recognizes a one-character suffix, also referred to as "member number" or "plastic number".
\n
\nThis field is not supported in merchant, signature, or credit card environments.
`)
cardRecordFields.set("status", ` 
\n### Card Status
\nThis field stores a code that identifies the current status of the card.
\nField Number         **005**
\nMnemonic             **STATUS**
\nData Type            **Code to 2**
\nSource               **User-entered or System-entered**
\nHelp File            **00805**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nRequired entry: Select one of the following values:
\n#### Data Type Descriptions
\n##### (0) Not issued
\n   The card has not been issued. If Symitar issues new cards automatically, you should select this option when you create the Card record, then you should not revise this field. Symitar updates this field with the appropriate value when you perform a card issuance edit run.##### (1) Issued
\n   The card has been issued. If your credit union issues new cards manually, you should select this option after you issue the card.
\n       - Important: Only cards with this status can be used in the online environment.
\n##### (2) Capture
\n   The card has been issued, but transactions should be denied the next time it is used. Some ATM processors/units can physically capture the card when it is next used in an ATM. For credit and debit cards, this option is for informational purposes only, and Symitar does not physically capture the card. You must capture credit and debit cards manually.
\n   
\n       - During a card blocking transaction, if it is supported by the ATM network (for example, CO-OPSM Financial Services), Symitar updates this field to this option when the member incorrectly enters his or her PIN too many times and the maximum value in the ATM configuration file is met.
\n
\nSymitar maintains the value in this field. It also allows ATM network software to update this field whenever that software makes an automatic change affecting it. Under normal circumstances you should not revise this field.
\n***Important:***  The CPS online authorization software is designed to return specific CPS response codes based on the value in the Block Code field, which takes precedence over this field. This feature automatically occurs for all CPS clients. For further information, see Response Code Out.
\n
\nIf you have the add-on module for automated hot carding, when Symitar receives a file update message from your ATM network processor, Symitar updates this field in all matching Card records. The query includes the Card Suffix if it is enabled for the specific card type.
`)
cardRecordFields.set("statusreason", ` 
\n### Status Reason
\nThis field stores a code that indicates why a card was set to (2) Capture status.
\nField Number         **079**
\nMnemonic             **STATUSREASON**
\nData Type            **Code to 199**
\nSource               **System-entered**
\nHelp File            **00879**
\nDefault Control      **No**
\nDefault Value **020**
\n
\nThis field lets ATM software translate an internal code to a network-specific code (often referred to as Block Code). This translation is useful in reporting a single card number to multiple networks with different block codes. The ATM network edit does not use this field unless the value in the Card Status field is set to (2) Capture.
\n
\n           Data Type Descriptions
\n000
\nRetain - No reason specified
\n001
\nRetain - Lost
\n002
\nRetain - Stolen
\n003
\nRetain - Fraud (or Pickup for CO-OP)
\n004
\nRetain - Permanent Restraint
\n005
\nRetain - Bad Debt
\n006
\nRetain - Checking Dormant
\n007
\nRetain - Checking Closed
\n008
\nRetain - Checking NSF
\n009
\nRetain - Bankruptcy
\n010
\nRetain - Marital Problems
\n011
\nRetain - Deceased
\n012
\nRetain - Collection
\n013
\nRetain - Collection - Skip
\n014
\nRetain - Collection - Legal Pursuit
\n015
\nRetain - Closed for Cause
\n016
\nRetain - Closed per Cardholder
\n017
\nRetain - Closed - Duplicate
\n018
\nRetain - Chargeoff
\n019
\nRetain - Excessive PIN tries
\n020
\nRetain - Requested by NetworkData Type Descriptions
\n100
\nReturn - No reason specified
\n101
\nReturn - Lost
\n102
\nReturn - Stolen
\n103
\nReturn - Fraud (or Pickup for CO-OP)
\n104
\nReturn - Permanent Restraint
\n105
\nReturn - Bad Debt
\n106
\nReturn - Checking Dormant
\n107
\nReturn - Checking Closed
\n108
\nReturn - Checking NSF
\n109
\nReturn - Bankruptcy
\n110
\nReturn - Marital Problems
\n111
\nReturn - Deceased
\n112
\nReturn - Collection
\n113
\nReturn - Collection - Skip
\n114
\nReturn - Collection - Legal Pursuit
\n115
\nReturn - Closed for Cause
\n116
\nReturn - Closed per Cardholder
\n117
\nReturn - Closed - Duplicate
\n118
\nReturn - Chargeoff
\n119
\nReturn - Excessive PIN tries
\n120
\nReturn - Requested by Network***Important:***  If a card is hot-carded through an incoming Negative File Message from a network, this field is usually set to 020. A different result can occur for the following conditions:
\nIf the following are both true:
\nYour credit union is using the Falcon Fraud system
\nYour credit union has activated the Update Card Status Reason parameter in the Online Network Parameters for the jhaPassPort switch (or if your ATM Online Network Configurations are set to do so)
\n
\nThen the ATM software uses the Response Code from the incoming network negative file messages to automatically populate this field in the Card record according to the following:
\n
\nCO-OP/eFunds Network - Response Code	Symitar - Card Status Reason
\n41 - Permanent block/lost	001 - Retain-Lost
\n34 - Permanent block	003 - Pickup-Fraud
\n59 - Temporary block/suspected fraud	103 - Do Not Pickup-Fraud
\nIf the following are both true:
\nYour credit union is using jhaPassPort Direct, version 2008 or greater
\nYour credit union has activated the Update Card Status Reason parameter in the Online Network Parameters for the jhaPassPort.pro switch (or if your ATM Online Network Configurations are set to do so)
\n
\nThen the ATM software uses the Response Code from the incoming jhaPassPort Direct online negative file messages to automatically populate this field in the Card record according to the following:
\n
\njhaPassPort Direct - Response Code	Symitar - Card Status Reason
\n41 - Hot Card, lost card, pickup	001 - Retain-Lost
\n34 - Hot Card, suspected fraud, pickup	003 - Retain-Fraud
\n05 - Warm Card, do not honor	100 - Return No Reason Specified
\n59 - Warm Card, suspected fraud	103 - Return-Fraud
\n
\nThe value in this field is then used to automatically populate a specific Response Code in the jhaPassPort Card File (PPCF).
\n
\nIf the following are both true:
\nYour credit union is using the Fiserv EPOC ISO 8583 system
\nYour credit union has requested To Host Maintenance (THM) functionality with Fiserv EPOC
\n
\nThen the ATM software uses the Status value and the Capture Code fields from the incoming THM file update messages to automatically populate this field in the Card record according to the following:
\n
\nIf Fiserv EPOC ISO 8583 THM Status value equals	And Fiserv EPOC ISO 8583 THM Capture Code is 0, Symitar Status Reason equals	But if Fiserv EPOC ISO 8583 THM Capture Code is 1, Symitar Status Reason equals
\n0 - Inactive card or card does not exist	000 - Default value	000 - Default value
\n1 - Active card	000 - Default value	000 - Default value
\n2 - Lost card	101 - Return - Lost	001 - Retain - Lost
\n3 - Stolen card	102 - Return - Stolen	002 - Retain - Stolen
\n4 - Restricted card	104 - Return - Permanent Restraint	004 - Retain - Permanent Restraint
\n5 - Insufficient funds	108 - Return - NSF	008 - Retain - NSF
\n6 - Preactivated	000 - Default value	000 - Default value
\n7 - Counterfeit	103 - Return - Fraud	003 - Retain - Fraud
\n8 - Expired	100 - Return - No reason specified	000 - Retain - No reason specified
\n9 - Closed card	100 - Return - No reason specified	000 - Retain - No reason specified
\n
\nSymitar lets the ATM network software update this field whenever that software makes an automatic change affecting it.
\nIf your credit union has automated hot-carding, when this field changes on a captured card, Symitar either:
\nSends a file update message to your ATM network processor, if you have queuing enabled
\n   - Prompts you to send a file update message manually
`)
cardRecordFields.set("fileupdatemanagerexception", ` 
\n### File Update Manager Exception
\nThis field stores a code that indicates whether the ATM File Update Manager software encounters an exception associated with the card data that it sent or received from the network and gives a general idea (status) about the reason. This indication applies to both high priority messages and messages sent in regular processing.
\nField Number         **093**
\nMnemonic             **FILEUPDATEMANAGEREXCEPTION**
\nData Type            **Code to 16**
\nSource               **User-entered or System-entered**
\nHelp File            **00893**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0 No Exception
\n   There is no exception for the card.
\n       - Only the ATM File Update Manager can set this value for three potential reasons:
\n       - The ATM File Update Manager is not configured for this card type and does not send updates.
\n       - The ATM File Update Manager is configured for this card type but there is no exception for the card.
\n       - There was a problem with a different value previously but it has been fixed and the most recent update was successful.
\n##### 1 Update Requested by User
\n   The ATM File Update Manager sends an update for the card, usually after fixing an exception that prevented successful messages previously.
\n   
\n       - After the ATM File Update Manager sends the update, it changes the value depending on the outcome.
\n   
\n       - You can set this value manually, in a PowerOn specfile, or through a SymConnect or SymXchange interface.
\n##### 2 Deletion Requested by User
\n   The ATM File Update Manager sends a deletion request for the card to the network.
\n   
\n       - After the successful deletion, the ATM File Update Manager does not send further messages for the card.
\n   
\n       - You can set this value manually, in a PowerOn specfile, or through a SymConnect or SymXchange interface.
\n##### 3 Force Add Requested by User (PPS VIP ISO87 only)
\n   The ATM File Update Manager software sends an add request in an outgoing 0382 file update message to the CPS switch. Specifically, the ATM File Update Manager software sends 1 (Add) in the File Update Code message field when you select this option. This File Update Code message field value enables the ATM File Update Manager software to refresh the data in the CPS database with the data in the Symitar account database for a single card. This message field value also enables the CPS switch to do the following:
\n       - Add card data to the CPS database for cards that do no exist in the CPS database
\n       - Update card data in the CPS database if an add request is sent for a card that exists in the CPS database
\n   
\n       - When the ATM File Update Manager software receives the confirmation for the successful update from the online network, it updates the ATM File Update Manager database with the changed data and logs the file update request in the ATM File Update Manager Journal.
\n   
\n       - After the ATM File Update Manager sends the request to add, the value in this field changes depending on the outcome.
\n   
\n       - You can set this value manually, in a PowerOn specfile or through a SymConnect or SymXchange interface.
\n##### 4–9
\n   Not used.##### 10 Deleted per User Request
\n   The card was deleted successfully from the network as requested by the user (by previously setting this field to 2 Deletion Requested by User).
\n   
\n       - The ATM File Update Manager does not send further messages for the card.
\n   
\n       - Only the ATM File Update Manager can set this status after the request has been processed successfully.
\n##### 11 User Requested Deletion Failed
\n   The ATM File Update Manager tried to delete the card from the network as requested by the user (by setting this field to 2 Deletion Requested by User) and the request failed.
\n       - The ATM File Update Manager Exception report has more details. The ATM File Update Manager does not try to send another message for the card until you have reviewed the issue and have taken either of the following steps:
\n       - Manually changed this field to 2 Deletion Requested by User again, or 1 Update Requested by User if you changed your mind about the deletion.
\n       - Manually initiated a successful online file update by right-clicking the card in the Account Manager tree and selecting Send Online File Update. If you have set this field to 2 Deletion Requested by User at the time of the manual file update, the ATM File Update Manager sends another deletion request to the network.
\n   
\n       - Only the ATM File Update Manager can set this status.
\n##### 12 Deleted-Data Exception
\n   The ATM File Update Manager indicates that the card was deleted from the network because card or account data were modified in such a way that mandatory data cannot be sent to the network.
\n   
\n       - The ATM File Update Manager does not send further messages for the card until you fix the data exception.
\n   
\n       - Only the ATM File Update Manager can set this status.
\n##### 13 Deletion for Data Exception Failed
\n   The ATM File Update Manager tried to delete the card from the network because card or account data were modified in such a way that mandatory data cannot be sent to the network, but the request failed.
\n   
\n       - The ATM File Update Manager Exception report has more details. The ATM File Update Manager does not send further messages for the card until you fix the data exception.
\n   
\n       - Only the ATM File Update Manager can set this status.
\n##### 14 No Update-Rejected by Network
\n   The ATM File Update Manager sent a file update message for the card to the network, but the network has rejected the message.
\n       - The ATM File Update Manager does not send further messages for the card until you have reviewed the issue that caused the network to reject the message, made any necessary changes to fix it, and taken either of the following steps:
\n       - Manually changed this field to 1 Update Requested by User.
\n       - Manually initiated a successful online file update by right-clicking the card in the Account Manager tree and selecting Send Online File Update.
\n   
\n       - Only the ATM File Update Manager can set this status.
\n##### 15 Not Added (Or Deletion in Progress)-Data Exception
\n   The ATM File Update Manager does not send file update messages for a new card to the network because mandatory data is missing or incorrect. The network does not add the card to the network’s database.
\n   
\n       - The ATM File Update Manager does not send further messages for the card until you fix the data exception.
\n   
\n       - If the card is not new, this value indicates that the deletion of the card at the network is in progress. The ATM File Update Manager changes this field to 12 Deleted-Data Exception or 13 Deletion for Data Exception Failed when it processes the network response to the deletion request.
\n   
\n       - Only the ATM File Update Manager can set this status.
\n##### 16 To Be Deleted per User Request After Full Refresh Is Complete
\n   The ATM File Update Manager sets this value if you have requested the deletion (by setting this field to 2 Deletion Requested by User) and a full refresh was started before the ATM File Update Manager could delete the card during regular processing.
\n   
\n       - During a full refresh, the ATM File Update Manager cannot send deletion requests. This value indicates that the ATM File Update Manager sent the full card data during the full refresh, but will send a deletion request during regular processing after the full refresh is complete.
\n   
\n       - Only the ATM File Update Manager can set this status.
`)
cardRecordFields.set("nametype", ` 
\n### Name Type
\nThis field stores a code that Symitar uses to determine the name and address for mailing and embossing instructions.
\nField Number         **004**
\nMnemonic             **NAMETYPE**
\nData Type            **Code to 2**
\nSource               **User-entered**
\nHelp File            **00804**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nRequired entry: Select one of the following:
\n#### Data Type Descriptions
\n##### (0) Primary name and address
\n   Cards should be embossed with and mailed to the name and address in the primary Name record for this account.##### (1) First Joint name and address
\n   Cards should be embossed with and mailed to the name and address in the first joint Name record for this account.##### (2) Separate card name and address
\n   Cards should be embossed with and mailed to the name and address in the Card Name record under this Card record.
\n       - Important: You must create a Card Name record under this Card record containing the separate name and address.
`)
cardRecordFields.set("createdbyuser", ` 
\n### Created By User
\nSymitar stores the user ID and is populated when this Card record is created in this field.
\nField Number         **085**
\nMnemonic             **CREATEDBYUSER**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00885**
\nDefault Control      **No**
\nDefault Value **Current user number**
\n
\n#### Data Type Descriptions
\n##### 0–9998
\n   The user ID of the creator of the record.##### 9999
\n   The system is unable to determine the information because it is not available.
\nUnder normal circumstances, you should not revise this field.
`)
cardRecordFields.set("createdatbranch", ` 
\n### Created At Branch
\nThis field stores the branch ID of the branch where the Card record is created.
\nField Number         **086**
\nMnemonic             **CREATEDATBRANCH**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00886**
\nDefault Control      **No**
\nDefault Value **Current user branch**
\n
\n#### Data Type Descriptions
\n##### 0
\n   The system is unable to determine the information because it is not available.##### 1–9999
\n   The branch ID where the record was created.
\nUnder normal circumstances, you should not revise this field.
`)
cardRecordFields.set("issuecode", ` 
\n### Issue Code
\nThis field stores a credit union-defined code to identify any other information about the card or about issuing the card.
\nField Number         **006**
\nMnemonic             **ISSUECODE**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **00806**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter a credit union-defined code (0–99) to identify any other information about the card or about issuing the card. The use of this field depends on the card issuance edit run written for your card processor. There are several ways to use this field:
\n***Important:***  If your credit union plans to use this field, discuss the intended use with us.
`)
cardRecordFields.set("reissuecode", ` 
\n### Reissue Code
\nThis field stores a code that determines how to reissue a card.
\nField Number         **007**
\nMnemonic             **REISSUECODE**
\nData Type            **Code to 4**
\nSource               **User-entered**
\nHelp File            **00807**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nThe use of this field depends on the card issuance edit run written for your processor.
\n#### Data Type Descriptions
\n##### (0) Manual
\n   Allow members to continue using the card they currently have, but prevent a natural reissue request from being sent to your processor (if you control your own reissues).##### (1) Automatic
\n   Automatically reissue a plastic card for the number of months specified either in the Reissue Months field or in your card issuance edit. Notification is sent to the processor the number of days before expiration predetermined by your card issuance edit.##### (2) Force Card
\n   Reissue a plastic card immediately.##### (3) Force PIN
\n   Reissue a PIN immediately. This selection does not issue a new plastic card.##### (4) Force Reissue
\n   Reissue a plastic card and PIN immediately.
\n`)
cardRecordFields.set("reissuemonths", ` 
\n### Reissue Months
\nThis field stores a code that indicates the number of months for which Symitar should reissue the card.
\nField Number         **025**
\nMnemonic             **REISSUEMONTHS**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **00825**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nThe usage of this field depends on the card issuance edit run written for your processor.
\n#### Data Type Descriptions
\n##### (0) Use Default Reissue Months
\n   Symitar should reissue the card for the default number of months specified in the card issuance edit run.##### 1–99
\n   The number of months for which Symitar should reissue the card. This value overrides the default number of months specified in the card issuance edit run.
\n`)
cardRecordFields.set("instantissue", ` 
\n### Instant Issue
\nThis field stores a code that indicates whether the card was an instant issue or not.
\nField Number         **087**
\nMnemonic             **INSTANTISSUE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **00887**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   The card was not an instant issue (mailed to the member).##### (1) Yes
\n   The card was an instant issue (handed over to the member immediately).
\nFor jhaPassPort Direct clients, this field can be used to control which new cards are sent to the network in online messages (in conjunction with the Online File Update Parameter Send New Card Option). For other networks, the field is only informational.
\n***Important:***  It is your responsibility to populate the field appropriately for instant-issue cards, which might require a change to your card instant-issue application, card default settings, your CARDFM specfile, or your Card Creation Wizard parameters.
`)
cardRecordFields.set("emvchipprofile", ` 
\n### EMV Chip Profile
\nThis field stores the EMV chip profile (network processing options) associated with the card. If this field is non-blank, the card is using the EMV chip.
\nField Number         **091**
\nMnemonic             **EMVCHIPPROFILE**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **00891**
\nDefault Control      **Yes**
\nDefault Value **(Blank)**
`)
cardRecordFields.set("blockcode", ` 
\n### Block Code
\nThis field stores a processor-defined block code, if any.
\nField Number         **016**
\nMnemonic             **BLOCKCODE**
\nData Type            **1 Character**
\nSource               **User-entered**
\nHelp File            **00816**
\nDefault Control      **Yes**
\nDefault Value **(Blank)**
\n
\nOptional entry: Enter a processor-defined block code. This field can be used to store a processor block code if a member's card should receive special treatment. See the documentation from your card processor for more information on block codes.
\n***Important:***  The CPS - PPS VIP ISO87 online authorization software is designed to deny transactions based on the value in this field. This feature automatically occurs for all CPS clients. The value in this field takes precedence over the value in the Card Status field, so if this field is set to L (Lost Account), even though the Card Status field is set to 1, transactions will be denied with a CPS denial reason of 43 and a Symitar response of Card Captured. Since other areas of the Symitar software look at the Card Status field and not the Block Code field, We recommend that you maintain the Card Status field along with the Status Reason Code field to ensure that CPS is notified of any cards that should be blocked for transaction processing while in stand-in. The following is a list of available block codes for PPS VIP ISO87 that causes a transaction to be declined regardless of the card's status:
\nBlock Codes	CPS Denial Reason Code	Our Response
\nB = Bankruptcy	43	Card Captured
\nC = Collection	05	Card Blocked
\nD = Deceased	43	Card Captured
\nF = Fraud	43	Card Captured
\nG = Marital Problems	43	Card Captured
\nH = High Balance	05	Card Blocked
\nJ = Collection Account	43	Card Captured
\nK = Closed Per CU	43	Card Captured
\nL = Lost Account	43	Card Captured
\nN = Closed - Annual Fee Unpaid	05	Card Blocked
\nP = Pickup Card	43	Card Captured
\nQ = Charge-Off Account	43	Card Captured
\nS = Stolen Card	43	Card Captured
\nU = Consumer Credit	43	Card Captured
\nV = Inactive	43	Card Captured
\nW = Closed - Duplicate Account	43	Card Captured
\nX = Closed Per Cardholder	05	Card Blocked
\nY = Collection - Legal Pursuit	43	Card Captured
\n***Important:***  If you currently use this field for some other purpose, you should consider alternative solutions, and you may want to contact us, depending on the impact this has on other programs.
`)
cardRecordFields.set("reclasscode", ` 
\n### Reclass Code
\nThis field stores a processor-defined reclass code, if any.
\nField Number         **017**
\nMnemonic             **RECLASSCODE**
\nData Type            **1 Character**
\nSource               **User-entered**
\nHelp File            **00817**
\nDefault Control      **Yes**
\nDefault Value **(Blank)**
\n
\nOptional entry: Enter a processor-defined reclass code. See the documentation from your card processor for more information on reclass codes.
`)
cardRecordFields.set("savid", ` 
\n### Sav ID
\nThis field stores the ID of any Share record in the same account that can be accessed through the online environment with this card.
\nField Number         **026**
\nMnemonic             **SAVID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **00826**
\nDefault Control      **Yes**
\nDefault Value **(Blank)**
\n
\nOptional entry: You can enter the ID of any Share record in the same account. Symitar finds the specific share to be accessed through the ATM based on the online ATM edit logic customized for your credit union.
\n***Important:***  You can request us to change the online ATM edit logic to have Symitar check this field to determine the shares and loans that can be accessed through the online environment. This change lets you issue more than one card to a member (for example, one card to access the prime share and draft share, and other cards to access secondary shares, drafts, or loans). Symitar cannot use these fields until we change your online ATM edit logic.
`)
cardRecordFields.set("chkid", ` 
\n### Chk ID
\nThis field stores the ID of any share draft record in the same account that can be accessed through the online environment with this card.
\nField Number         **027**
\nMnemonic             **CHKID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **00827**
\nDefault Control      **Yes**
\nDefault Value **(Blank)**
\n
\nOptional entry: You can enter the ID of any Share record in the same account with a Share Code field value of (1) Draft. Symitar finds the specific share to be accessed through the ATM based on the online ATM edit logic customized for your credit union.
\n***Important:***  You can request us to change the online ATM edit logic to have Symitar check this field to determine the shares and loans that can be accessed through the online environment. This change lets you issue more than one card to a member (for example, one card to access the prime share and draft share, and other cards to access secondary shares, drafts, or loans). Symitar cannot use these fields until we change your online ATM edit logic.
`)
cardRecordFields.set("locid", ` 
\n### LOC ID
\nThis field stores the ID of any line of credit Loan record in the same account that can be accessed through the online environment with this card.
\nField Number         **028**
\nMnemonic             **LOCID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **00828**
\nDefault Control      **Yes**
\nDefault Value **(Blank)**
\n
\nOptional entry: You can enter the ID of any Loan record in the same account with a Loan Code field value of (2) Line of Credit. Symitar finds the specific loan to be accessed through the ATM based on the online ATM edit logic customized for your credit union.
\n***Important:***  You can request us to change the online ATM edit logic to have Symitar check this field to determine the shares and loans that can be accessed through the online environment. This change lets you issue more than one card to a member (for example, one card to access the prime share and draft share, and other cards to access secondary shares, drafts, or loans). Symitar cannot use these fields until we change your online ATM edit logic.
`)
cardRecordFields.set("creditcardid", ` 
\n### Credit Card Loan ID
\nThis field stores the ID of any credit card Loan record in the same account that can be accessed through the online environment with this card.
\nField Number         **056**
\nMnemonic             **CREDITCARDID**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **00856**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nYou can enter the ID of any Loan record in the same account with a Loan Code field value of (3) Credit Card. Symitar finds the specific loan to be accessed through the ATM based on the online ATM edit logic customized for your credit union.
\n***Important:***  You can request us to change the online ATM edit logic to have Symitar check this field to determine the shares and loans that can be accessed through the online environment. This change lets you issue more than one card to a member (for example, one card to access the prime share and draft share, and other cards to access secondary shares, drafts, or loans). Symitar cannot use these fields until we change your online ATM edit logic.
`)
cardRecordFields.set("miscid", ` 
\n### Misc ID 1 - Misc ID 3
\nThese three fields can each store the ID of any Share record or Loan record in the same account that can be accessed through the online environment with this card.
\nField Number         **029:001 - 029:003**
\nMnemonic             **MISCID:1 - MISCID:3**
\nData Type            **2 or 4 Characters**
\nSource               **User-entered**
\nHelp File            **00829**
\nDefault Control      **Yes**
\nDefault Value **(Blank)**
\n
\nOptional entry: You can enter in each of these fields the ID of any Share record or Loan record in the same account. Symitar finds the specific loan to be accessed through the ATM based on the online ATM edit logic customized for your credit union.
\n***Important:***  You can request us to change the online ATM edit logic to have Symitar check this field to determine the shares and loans that can be accessed through the online environment. This change lets you issue more than one card to a member (for example, one card to access the prime share and draft share, and other cards to access secondary shares, drafts, or loans). Symitar cannot use these fields until we change your online ATM edit logic.
`)
cardRecordFields.set("issuedate", ` 
\n### Issue Date
\nThis field stores the date the card was first issued or, in some instances, when the Card record was created.
\nField Number         **008**
\nMnemonic             **ISSUEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00808**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nDuring the first card issuance edit run for the card, Symitar enters the system date in this field. Symitar does not update this field when the card is reissued automatically during a card issuance edit run; this field always contains the date the card was originally issued.
\n
\nUnder normal circumstances, you should not revise this field.
`)
cardRecordFields.set("effectivedate", ` 
\n### Effective Date
\nThis field stores the date the card was last issued or reissued.
\nField Number         **009**
\nMnemonic             **EFFECTIVEDATE**
\nData Type            **Date**
\nSource               **System-entered or User-entered**
\nHelp File            **00809**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nWhen you create a Card record, Symitar updates this field with the current system date during each issue or reissue of a plastic (as opposed to PIN-only) by a card issuance edit run.
\nFor manual entries:
\nWhen you open a Card record, the default for this field should be date null so that Symitar can fill in the system date. For procedures, see Card Defaults.
\n   - If you enter a date in this field manually, Symitar overrides the date you enter with the system date each time the card is reissued by a card issuance edit run.
\n   - You must enter an effective date before the value in the Expiration Date field. If you attempt to enter an effective date after the expiration date, Symitar displays the message:
\n   - Effective cannot be after expiration
\n   - Cards with an effective date greater than (after) the system date cannot be used in the online environment.
`)
cardRecordFields.set("expirationdate", ` 
\n### Expiration Date
\nThis field stores the actual date the card expires.
\nField Number         **010**
\nMnemonic             **EXPIRATIONDATE**
\nData Type            **Date**
\nSource               **System-entered or User-entered**
\nHelp File            **00810**
\nDefault Control      **Yes**
\nDefault Value **Date Null**
\n
\nIf you leave this field blank (date null), Symitar resets the expiration date during each card issuance edit run that issues or reissues the card. The expiration date is usually the first of the month. For example, a card with a "good through" date of 12/49 would have an expiration date of 1/1/2050 in the Card record. In the online environment, a blank date indicates that the card never expires.
\nFor manual entries:
\nIf you enter a date in this field manually, the card issuance edit run does not reset the date, unless the date is outside the date limits set for the edit run. This could cause problems if your card processor uses preset expiration dates, so check with us before entering expiration dates manually.
\n   - You must enter an expiration date after the value in the Effective Date field. If you attempt to enter an expiration date before the effective date, Symitar displays the message:
\n   - Expiration cannot be before effective
`)
cardRecordFields.set("activedate", ` 
\n### Activation Date
\nThis field stores the date the card is considered active.
\nField Number         **032**
\nMnemonic             **ACTIVEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00832**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis field is used in the online environment to determine if a card with a matching expiration date is to be considered active. This date can be set manually, through the audio response software, or via the online environment with the use of a pinned transaction or a card activation message from some ATM networks.
\n***Important:***  You must request us to customize both the audio response system and the online logic to use this information. The card issuance edit must also be modified.
\n
\nIf you have a card issuance edit run that clears the card Activation Date field when a card is issued or reissued, Symitar places the old contents of the Activation Date field into the Prev Activation Date field.
`)
cardRecordFields.set("closedate", ` 
\n### Close Date
\nThis field stores the date the Card record was closed.
\nField Number         **078**
\nMnemonic             **CLOSEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00878**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nThis field lets you close a Card record with a future date without changing the value in the Expiration Date field. This field is useful for temporary cards or if the card is being replaced with a new card, as in a mass issue. This field allows the card to maintain a Card Status value of (1) Issue until the value in the Close Date field is reached. The Daily Posting Batch Program changes the value in the Card Status field to (2) Capture once the close date is reached.
\n
\nIf the date in the this field is less than or equal to the system date and the card is uncaptured, the card will be captured the next time the Daily Posting batch program runs.
`)
cardRecordFields.set("extraemboss", ` 
\n### Extra Emboss Line
\nThis field stores a second emboss line on a card order.
\nField Number         **077**
\nMnemonic             **EXTRAEMBOSS**
\nData Type            **26 Characters**
\nSource               **User-entered**
\nHelp File            **00877**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nYou define a second emboss line on a card order only for certain card processors and only if your card edit runs support it.
`)
cardRecordFields.set("lastaddrchgdate", ` 
\n### Last Address Change
\nThis field stores the date of the last file maintenance only when the value in the Name Type field changes.
\nField Number         **083**
\nMnemonic             **LASTADDRCHGDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00883**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nWhenever you perform file maintenance on the Name Type field, Symitar updates this field in the record you maintained with the system date. To help prevent identity theft, you can use this field to determine if there was a recent change to the Name Type field when a member requests a card.
\n
\nYou cannot access this field for file maintenance.
`)
cardRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nSymitar stores the system date in this field when you create, change, or save the Card record. Sometimes Symitar updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **084**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00884**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  Symitar does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
cardRecordFields.set("pinactual", ` 
\n### PIN Actual
\nThis field can store the actual PIN (Personal Identification Number) used by the processor for this card.
\nField Number         **018**
\nMnemonic             **PINACTUAL**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **00818**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nOptional entry: Enter the PIN for this card (000001-999999). The actual PIN does not display during inquiries or file maintenance. During inquiries, 1000000 displays if the value is something other than 0. During file maintenance, 1000000 displays in place of the PIN.
\n***Important:***  There is a Secure Card PINs parameter in the Miscellaneous Parameters. The default setting for this parameter is Y, which masks the contents of the PIN Actual and Previous PIN Actual fields as 1000000 when referenced in a PowerOn specfile. If this parameter is set to N, the contents of these fields are accessible using a PowerOn specfile (We do not recommend this setting, as it is considered a security risk).
`)
cardRecordFields.set("pinencrypted", ` 
\n### PIN Encrypted
\nThis field stores the encrypted value for a PIN (Personal Identification Number). This value depends on the encryption method you use, which can come from the ATM network or a third party.
\nField Number         **092**
\nMnemonic             **PINENCRYPTED**
\nData Type            **8 Characters**
\nSource               **User-entered**
\nHelp File            **00892**
\nDefault Control      **Yes**
\nDefault Value **(Blank)**
`)
cardRecordFields.set("pinoffset", ` 
\n### PIN Offset
\nThis field can store a PIN (Personal Identification Number) offset for this card.
\nField Number         **019**
\nMnemonic             **PINOFFSET**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **00819**
\nDefault Control      **Yes**
\nDefault Value **0000**
\n
\nOptional entry: Enter a PIN offset for this card (000001-999999). This field can be used to store a PIN offset, used by card processors to allow members to select their own PINs without knowing the actual PIN (in the PIN Actual field) used by the processor. The PIN Offset for a natural PIN (the PIN initially assigned by the issuer) is 0000.
\n***Important:***  You must not enter a number greater than 9999 in this field if your current edit runs and outside card processors do not support PIN fields longer than four digits (such as for the FDR Star NE ATM Network). Entering a number with more digits than your processor or edit runs support may cause the card to be issued or handled improperly by the outside processor.
`)
cardRecordFields.set("pinretries", ` 
\n### PIN Retries
\nThis field can store the number of times someone attempted to enter an invalid PIN (Personal Identification Number) for this card.
\nField Number         **020**
\nMnemonic             **PINRETRIES**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00820**
\nDefault Control      **no**
\nDefault Value **0**
\n
\nSymitar clears this optional field each time a valid PIN is entered.
\n
\nThe card processor usually keeps track of invalid PIN attempts. Symitar allows the proprietary ATM software to update this field whenever that software makes automatic changes.
\n
\nThe Deluxe, MOST, CO-OP, and Quantum card processors offer two options:
\n***Important:***  You must request these options from your processor.
`)
cardRecordFields.set("pinorderdate", ` 
\n### PIN Order Date
\nThis field stores the date the last time a Personal Identification Number (PIN) was ordered.
\nField Number         **080**
\nMnemonic             **PINORDERDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00880**
\nDefault Control      **no**
\nDefault Value **0**
\n
\nThis field is useful if your credit union supports a separate card order edit, or for security. You must modify your card edits to update this field each time a card and PIN or PIN only is requested.
`)
cardRecordFields.set("imagerefnumber", ` 
\n### Image Reference Number
\nThis field stores the value of a photo reference number for members who create an imaged card background.
\nField Number         **088**
\nMnemonic             **IMAGEREFNUMBER**
\nData Type            **20 Characters**
\nSource               **User-entered or System-entered**
\nHelp File            **00888**
\nDefault Control      **no**
\nDefault Value **(Blank)**
\n
\nThis field data identifies the approved image stored by the credit union or third-party processor. The RB.PPS.IMAGE.REF.UPDATE.FM PowerOn Library specfile updates this field based on incoming data, for clients using PPS VIP ISO87.
\n
\nThis field data should be cleared from the system when the stored card background image is purged by the credit union or vendor.
\n***Important:***  Be sure to discuss the amount of time that the data in this field should be stored with your card image vendor. The RB.CLEAR.IMAGE.REF.NUMBER.FM library specfile clears this field.
\n
\nClients using the PPS VIP ISO87 card order edit, who wish to begin using this field within the card order process, should contact Symitar Cards Support for modifications to their edit. These modifications may be billable.
`)
cardRecordFields.set("imagerefdate", ` 
\n### Image Reference Date
\nThis field stores the date that an imaged card background was created online.
\nField Number         **089**
\nMnemonic             **IMAGEREFDATE**
\nData Type            **Date**
\nSource               **User-entered or System-entered**
\nHelp File            **00889**
\nDefault Control      **no**
\nDefault Value **Date Null**
\n
\nThis date is meant to assist credit unions in identifying their members with imaged cards. This date is also used to assist credit unions in determining when to clear the Image Reference Number field.
\n***Important:***  This field may be manually updated or used in conjunction with the RB.PPS.IMAGE.REF.UPDATE.FM library PowerOn specfile to read data provided by CPS for newly imaged cards.
\n
\nClients using the PPS VIP ISO87 card order edit, who wish to begin using this field within the card order process, should contact Symitar Cards Support for modifications to their edit. These modifications may be billable.
\n
\nThis field cannot contain a future date.
`)
cardRecordFields.set("imagerefissuecount", ` 
\n### Image Reference Issue Count
\nThis field stores the number of times that a card with an imaged background has been issued before the card expiration.
\nField Number         **090**
\nMnemonic             **IMAGEREFISSUECOUNT**
\nData Type            **Code to 99**
\nSource               **User-entered or System-entered**
\nHelp File            **00890**
\nDefault Control      **no**
\nDefault Value **0**
\n
\n***Important:*** 
\n
\nClients using the PPS VIP ISO87 card order edit, who wish to begin using this field within the card order process, should contact Symitar Cards Support for modifications to their edit. These modifications may be billable.
`)
cardRecordFields.set("prevnumber", ` 
\n### Prev Number
\nThis field can store the previous value from the Card Number field of a card when you reissue that card.
\nField Number         **034**
\nMnemonic             **PREVNUMBER**
\nData Type            **20 Characters**
\nSource               **System-entered**
\nHelp File            **00834**
\nDefault Control      **no**
\nDefault Value **(Blank)**
\n
\nThis field is typically filled in by a card issuance edit run or by PowerOn file maintenance, not manually.
`)
cardRecordFields.set("prevsuffix", ` 
\n### Prev Card Suffix
\nThis field can store the previous value from the Card Suffix field of a card when you reissue that card.
\nField Number         **035**
\nMnemonic             **PREVSUFFIX**
\nData Type            **2 Characters**
\nSource               **System-entered**
\nHelp File            **00835**
\nDefault Control      **no**
\nDefault Value **(Blank)**
\n
\nThis field is typically filled in by a card issuance edit run or by PowerOn file maintenance, not manually.
`)
cardRecordFields.set("prevexpirationdate", ` 
\n### Prev Expiration Date
\nThis field can store the previous expiration date from the Expiration Date field of a card when you reissue that card.
\nField Number         **033**
\nMnemonic             **PREVEXPIRATIONDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00833**
\nDefault Control      **no**
\nDefault Value **Date Null**
\n
\nThis field is typically filled in by a card issuance edit run or by PowerOn file maintenance, not manually.
`)
cardRecordFields.set("prevactivationdate", ` 
\n### Prev Activation Date
\nThis field stores the previous activation date for a card with a matching value from the Prev Expiration Date field.
\nField Number         **076**
\nMnemonic             **PREVACTIVATIONDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00876**
\nDefault Control      **no**
\nDefault Value **Date Null**
\n
\n***Important:***  Due to the inclusion of this field, along with the existing Prev Expiration Date field, some changes are required for the following applications:
\nThe card issue edit must now move the values in both the Activation Date and Expiration Date fields to the Prev Activation Date and Prev Expiration Date fields.
\nUpon authorization, the online ATM network edit must check the expiration date on the track II magnetic stripe against the value in the Expiration Date field in the Card record. If they do not match, the edit must then check the value in the Expiration Date field against the value in the Prev Expiration Date field and must also check to see if the value in the Prev Activation Date field was set before authorization.
`)
cardRecordFields.set("prevpinactual", ` 
\n### Prev PIN Actual
\nThis field can store the previous value from the PIN Actual field for a card when you reissue that card.
\nField Number         **036**
\nMnemonic             **PREVPINACTUAL**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **00836**
\nDefault Control      **no**
\nDefault Value **0**
\n
\nThis field is typically filled in by a card issuance edit run or by PowerOn file maintenance, not manually.
`)
cardRecordFields.set("prevpinoffset", ` 
\n### Prev PIN Offset
\nThis field can store the previous value from the PIN Offset field for a card when you reissue that card.
\nField Number         **037**
\nMnemonic             **PREVPINOFFSET**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **00837**
\nDefault Control      **no**
\nDefault Value **0**
\n
\nThis field is typically filled in by a card issuance edit run or by PowerOn file maintenance, not manually.
`)
cardRecordFields.set("feecount", ` 
\n### Fee Count 1 - Fee Count 4
\nEach of these four fields can store the current number of a fees for a different type of fee.
\nField Number         **055:001 - 055:004**
\nMnemonic             **FEECOUNT:1 - FEECOUNT:4**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00855**
\nDefault Control      **no**
\nDefault Value **0**
\n
\nThese four fields allow you to track up to four different types of fees for each Card record. These fields can be updated through manual file maintenance, PowerOn file maintenance, or edit runs.
`)
cardRecordFields.set("usagedate", ` 
\n### Usage Date
\nThis field stores the last date when the card was used in an online environment, except for when an online cash deposit is made.
\nField Number         **015**
\nMnemonic             **USAGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **00815**
\nDefault Control      **no**
\nDefault Value **Date Null**
\n
\nSymitar updates this field with the system date each time the card is used in an online environment, except for when an online cash deposit is made. This field is not reset until the card is used again in the online environment on a different system date.
\n
\nUnder normal circumstances, you should not revise this field.
`)
cardRecordFields.set("singleusagemax", ` 
\n### Single Usage Max
\nThis field stores the maximum amount allowed for a single cash withdrawal.
\nField Number         **057**
\nMnemonic             **SINGLEUSAGEMAX**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00857**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the maximum amount (greater than $0.00) for a single cash withdrawal.
\n***Important:***  This field is currently used by SymConnect only. The online ATM and credit and debit card environments do not reference it.
`)
cardRecordFields.set("usagelimit", ` 
\n### ATM Usage Limit
\nThis field stores the maximum amount that can be withdrawn from an online ATM each day.
\nField Number         **013**
\nMnemonic             **USAGELIMIT**
\nData Type            **Money**
\nSource               **User-entered or System-entered**
\nHelp File            **00813**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the maximum amount that can be withdrawn from an online ATM each day (based on the AIX® system actual date).
\n
\nSymitar may update this field during a card issuance or balance file edit run.
`)
cardRecordFields.set("usageamount", ` 
\n### ATM Usage Amount
\nThis field stores the total amount of all withdrawals based on the value in the Usage Date field from an online ATM.
\nField Number         **014**
\nMnemonic             **USAGEAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00814**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEach time an online ATM withdrawal posts to this account on the current usage date, Symitar adds the amount of that transaction to this field. This field is not reset or cleared until the card is used again in the online environment on either a new usage date or a new system date.
\n
\nUnder normal circumstances, you should not revise this field.
`)
cardRecordFields.set("atmcountlimit", ` 
\n### ATM Count Limit
\nThis field stores the maximum number of online ATM transactions your credit union allows each day.
\nField Number         **045**
\nMnemonic             **ATMCOUNTLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00845**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter the maximum number of online ATM transactions your credit union allows each day (based on the AIX system actual date).
`)
cardRecordFields.set("atmcount", ` 
\n### ATM Count
\nThis field stores the number of daily ATM transactions, based on the value in the Usage Date field.
\nField Number         **046**
\nMnemonic             **ATMCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00846**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar calculates the value of this field. This field is not reset until a new usage date is set.
\n
\nUnder normal circumstances, you should not revise this field.
`)
cardRecordFields.set("authlimit", ` 
\n### Auth Limit
\nThis field stores the maximum amount that can be authorized for online credit or debit card merchant (signature-based) transactions each day.
\nField Number         **041**
\nMnemonic             **AUTHLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00841**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the maximum amount that can be authorized for online credit or debit card merchant (signature-based) transactions each day (based on the AIX system actual date).
\n
\nAccount funding transactions can be excluded from authorization limiting for select interfaces.
`)
cardRecordFields.set("authamount", ` 
\n### Auth Amount
\nThis field stores the daily amount of authorizations performed for an online credit or debit card merchant (signature-based) transactions, based on the value in the Usage Date field.
\nField Number         **042**
\nMnemonic             **AUTHAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00842**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEach time an authorization posts to the account to which this card is associated on the current value in the Usage Date field, Symitar adds the amount of the authorization to this field. It is not reset until a new usage (system) date is set.
\n
\nAccount funding transactions can be excluded from authorization limiting for select interfaces.
\n
\nUnder normal circumstances, you should not revise this field.
`)
cardRecordFields.set("authcountlimit", ` 
\n### Auth Count Limit
\nThis field stores the maximum number of authorizations allowed for an online credit or debit card merchant (signature-based) transactions per day.
\nField Number         **043**
\nMnemonic             **AUTHCOUNTLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00843**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter the maximum number of authorizations allowed for an online credit or debit card per day (based on the AIX system actual date).
\n
\nAccount funding transactions can be excluded from authorization limiting for select interfaces.
`)
cardRecordFields.set("authcount", ` 
\n### Auth Count
\nThis field stores the number of daily authorizations performed for an online credit or debit card merchant (signature-based) transactions, based on the value in the Usage Date field.
\nField Number         **044**
\nMnemonic             **AUTHCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00844**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar calculates the value of this field. This field is not reset until a new usage date is set.
\n
\nAccount funding transactions can be excluded from authorization limiting for select interfaces.
\n
\nUnder normal circumstances, you should not revise this field.
`)
cardRecordFields.set("misclimit", ` 
\n### Misc Limit
\nThis field stores the maximum amount that can be withdrawn from an online environment in miscellaneous transactions each day.
\nField Number         **023**
\nMnemonic             **MISCLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00823**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nThis field is generally used only for clients with an interface to a shared branch network. Enter the maximum amount that can be withdrawn from an online environment in miscellaneous transactions each day (based on the AIX system actual date).
`)
cardRecordFields.set("miscamount", ` 
\n### Misc Amount
\nThis field stores the daily amount of all miscellaneous withdrawals, based on the value in the Usage Date field.
\nField Number         **024**
\nMnemonic             **MISCAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00824**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nThis field is generally used only for clients with an interface to a shared branch network. Each time a miscellaneous withdrawal posts to this account on the current usage date, Symitar adds the amount of the transaction to this field. This field is not reset until a new usage date is set.
\n
\nUnder normal circumstances, you should not revise this field.
`)
cardRecordFields.set("misccountlimit", ` 
\n### Misc Count Limit
\nThis field stores the maximum number of miscellaneous transactions per day that your credit union allows.
\nField Number         **049**
\nMnemonic             **MISCCOUNTLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00849**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter the maximum number of miscellaneous transactions per day (based on the AIX system actual date) that your credit union allows. The definition of miscellaneous transactions depends on your online ATM edit and your configuration file.
\n***Important:***  If you are not using Online Posting parameters, you must request that we modify the ATM configuration file.
`)
cardRecordFields.set("misccount", ` 
\n### Misc Count
\nThis field stores the number of daily miscellaneous transactions, based on the value in the Usage Date field.
\nField Number         **050**
\nMnemonic             **MISCCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00850**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nThe definition of miscellaneous transactions depends on your online ATM edit and your configuration file. Symitar calculates the value of this field. This field is not reset until a new usage date is set.
\n
\nUnder normal circumstances, you should not revise this field.
`)
cardRecordFields.set("wdcheckmax", ` 
\n### Maximum Check W/D
\nThis field stores the maximum amount allowed for a single withdrawal by check per day.
\nField Number         **058**
\nMnemonic             **WDCHECKMAX**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00858**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the maximum amount (greater than $0.00) for a single withdrawal by check.
\n***Important:***  This field is currently used by SymConnect only. The online ATM and credit and debit card environments do not reference it.
`)
cardRecordFields.set("wdchecklimit", ` 
\n### Check W/D Limit
\nThis field stores the limit for withdrawals by check per day.
\nField Number         **059**
\nMnemonic             **WDCHECKLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00859**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the limit (greater than $0.00) for withdrawals by check per day (based on the AIX system actual date).
\n***Important:***  This field is currently used by SymConnect only. The online ATM and credit and debit card environments do not reference it.
`)
cardRecordFields.set("wdcheckamount", ` 
\n### Check W/D Amount
\nThis field stores the total amount of withdrawals by check (greater than $0.00), based on the value in the Usage Date field.
\nField Number         **060**
\nMnemonic             **WDCHECKAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00860**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  This field is currently used by SymConnect only. The online ATM and credit and debit card environments do not reference it.
`)
cardRecordFields.set("wdcheckcountlimit", ` 
\n### Check W/D Count Limit
\nThis field stores the maximum number of withdrawals by check allowed per day.
\nField Number         **061**
\nMnemonic             **WDCHECKCOUNTLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00861**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter the maximum number of withdrawals by check allowed per day (based on the AIX system actual date).
\n***Important:***  This field is currently used by SymConnect only. The online ATM and credit and debit card environments do not reference it.
`)
cardRecordFields.set("wdcheckcount", ` 
\n### Check W/D Count
\nThis field stores the number of withdrawals by check performed, based on the value in the Usage Date field.
\nField Number         **062**
\nMnemonic             **WDCHECKCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00862**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n***Important:***  This field is currently used by SymConnect only. The online ATM and credit and debit card environments do not reference it.
\n
\nUnder normal circumstances, you should not revise this field.
`)
cardRecordFields.set("xfermax", ` 
\n### Maximum Transfer
\nThis field stores the maximum amount for a single transfer that your credit union allows.
\nField Number         **063**
\nMnemonic             **XFERMAX**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00863**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the maximum amount (greater than $0.00) for a single transfer.
\n***Important:***  This field is currently used by SymConnect only. The online ATM and credit and debit card environments do not reference it.
`)
cardRecordFields.set("xferlimit", ` 
\n### Transfer Limit
\nThis field stores the maximum amount that can be transferred each day.
\nField Number         **064**
\nMnemonic             **XFERLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00864**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the transfer limit (greater than $0.00) per day (based on the AIX system actual date).
\n***Important:***  This field is currently used by SymConnect only. The online ATM and credit and debit card environments do not reference it.
`)
cardRecordFields.set("xferamount", ` 
\n### Transfer Amount
\nThis field stores the total transfer amount (greater than $0.00), based on the value in the Usage Date field.
\nField Number         **065**
\nMnemonic             **XFERAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00865**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\n***Important:***  This field is currently used by SymConnect only. The online ATM and credit and debit card environments do not reference it.
`)
cardRecordFields.set("xfercountlimit", ` 
\n### Transfer Count Limit
\nThis field stores the maximum number of transfers allowed per day.
\nField Number         **066**
\nMnemonic             **XFERCOUNTLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00866**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter the maximum number of transfers allowed per day (based on the AIX system actual date).
\n***Important:***  This field is currently used by SymConnect only. The online ATM and credit and debit card environments do not reference it.
`)
cardRecordFields.set("xfercount", ` 
\n### Transfer Count
\nThis field stores the number of transfers performed, based on the value in the Usage Date field.
\nField Number         **067**
\nMnemonic             **XFERCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00867**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n***Important:***  This field is currently used by SymConnect only. The online ATM and credit and debit card environments do not reference it.
`)
cardRecordFields.set("limitamount", ` 
\n### Limit Amount
\nThis field stores the maximum amount that can be withdrawn from an offline ATM within the period specified in the Limit Days field.
\nField Number         **011**
\nMnemonic             **LIMITAMOUNT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00811**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the maximum amount that can be withdrawn from an offline ATM within the period specified in the Limit Days field. This field is not used for the online environment. It is for informational purposes only.
\n
\nFor some card issuance edits, this field is used to store the credit limit for card mailer instructions.
`)
cardRecordFields.set("limitdays", ` 
\n### Limit Days
\nThis field stores the number of days required between withdrawals of the value in the Limit Amount field at an offline ATM.
\nField Number         **012**
\nMnemonic             **LIMITDAYS**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00812**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter the number of days (0-9999) required between withdrawals of the limit amount at an offline ATM. This field is not used for the online environment. It is for informational purposes only.
`)
cardRecordFields.set("poslimit", ` 
\n### POS Limit
\nThis field stores the maximum amount that can be withdrawn for online, point-of-sale (PIN-based merchant) transactions each day.
\nField Number         **021**
\nMnemonic             **POSLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00821**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the maximum amount that can be withdrawn for online, point-of-sale (PIN-based merchant) transactions each day (based on the AIX system actual date).
`)
cardRecordFields.set("posamount", ` 
\n### POS Amount
\nThis field stores the total amount of all point-of-sale withdrawals, based on the value in the Usage Date field.
\nField Number         **022**
\nMnemonic             **POSAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00822**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEach time a point-of-sale withdrawal posts to this account on the current value in the Usage Date field, Symitar adds the amount of the transaction to this field. This field is not reset until a new usage date is set.
\n
\nUnder normal circumstances, you should not revise this field.
`)
cardRecordFields.set("poscountlimit", ` 
\n### POS Count Limit
\nThis field stores the maximum number of point-of-sale (PIN-based merchant) transactions per day that your credit union allows.
\nField Number         **047**
\nMnemonic             **POSCOUNTLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00847**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter the maximum number of point-of-sale (PIN-based merchant) transactions per day (based on the AIX system actual date) that your credit union allows.
`)
cardRecordFields.set("poscount", ` 
\n### POS Count
\nThis field stores the number of daily (Close Day Processing to Close Day Processing) point-of-sale transactions, based on the value in the Usage Date field.
\nField Number         **048**
\nMnemonic             **POSCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00848**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar calculates the value of this field. This field is not reset until a new usage date is set.
`)
cardRecordFields.set("creddeblimit", ` 
\n### Credit/Debit Limit
\nThis field stores the monetary completion transaction limit per day for an online debit or credit card.
\nField Number         **051**
\nMnemonic             **CREDDEBLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00851**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the monetary completion transaction limit (greater than $0.00) per day (based on the AIX system actual date) for an online debit or credit card. "Completions" are the actual credits or debits to be posted to previously authorized transactions.
\n***Important:***  If you are not using Online Posting parameters, you must request that we modify the ATM configuration file.
\n***Important:***  We recommend that you do not limit the number or dollar amount of completions per day, but rather the number or dollar amount of authorizations.
`)
cardRecordFields.set("creddebamount", ` 
\n### Credit/Debit Amount
\nThis field stores the daily amount of monetary completion transactions for an online debit or credit card.
\nField Number         **052**
\nMnemonic             **CREDDEBAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00852**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nSymitar calculates the value of this field. Each time an online completion posts, Symitar adds the transaction amount to this field. Symitar does not reset this field reset until you set a new usage date.
\n
\nUnder normal circumstances, you should not revise this field.
`)
cardRecordFields.set("creddebcountlimit", ` 
\n### Credit/Debit Count Limit
\nThis field stores the maximum number of monetary completion transactions your credit union allows per day for an online debit or credit card.
\nField Number         **053**
\nMnemonic             **CREDDEBCOUNTLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00853**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter the maximum number of monetary completion transactions your credit union allows per day (based on the AIX system actual date) for an online debit or credit card.
\n***Important:***  If you are not using Online Posting parameters, you must request that we modify the ATM configuration file.
\n***Important:***  We recommend that you do not limit the number of completions per day, but rather the number of authorizations.
`)
cardRecordFields.set("creddebcount", ` 
\n### Credit/Debit Count
\nThis field stores the number of daily transactions for an online debit or credit card, based on the value in the Usage Date field.
\nField Number         **054**
\nMnemonic             **CREDDEBCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00854**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar calculates the value of this field. Symitar does not reset this field until you set a new usage date.
`)
cardRecordFields.set("billpaymax", ` 
\n### Maximum Bill Pmt
\nThis field stores the Maximum amount (greater than $0.00) for a single bill payment.
\nField Number         **068**
\nMnemonic             **BILLPAYMAX**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00868**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n***Important:***  This field is currently used by SymConnect only. The online ATM and credit and debit card environments do not reference it.
`)
cardRecordFields.set("billpaylimit", ` 
\n### Bill Pmt Limit
\nThis field stores the daily bill payment limit.
\nField Number         **069**
\nMnemonic             **BILLPAYLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00869**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the bill payment limit (greater than $0.00) per day (based on the AIX system actual date).
`)
cardRecordFields.set("billpayamount", ` 
\n### Bill Pmt Amount
\nThis field stores the total bill payment amount (greater than $0.00), based on the value in the Usage Date field.
\nField Number         **070**
\nMnemonic             **BILLPAYAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00870**
\nDefault Control      **No**
\nDefault Value **0.00**
`)
cardRecordFields.set("billpaycountlimit", ` 
\n### Bill Pmt Count Limit
\nThis field stores the maximum number of bill payments allowed per day.
\nField Number         **071**
\nMnemonic             **BILLPAYCOUNTLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00871**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter the maximum number of bill payments allowed per day (based on the AIX system actual date).
`)
cardRecordFields.set("billpaycount", ` 
\n### Bill Pmt Count
\nThis field stores the number of bill payments performed, based on the value in the Usage Date field.
\nField Number         **072**
\nMnemonic             **BILLPAYCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00872**
\nDefault Control      **No**
\nDefault Value **0**
`)
cardRecordFields.set("depmax", ` 
\n### Maximum Deposit
\nThis field stores the maximum amount allowed in a single deposit.
\nField Number         **073**
\nMnemonic             **DEPMAX**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00873**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nEnter the maximum amount (greater than $0.00) allowed in a single deposit.
\n***Important:***  This field is currently used by SymConnect only. The online ATM and credit and debit card environments do not reference it.
`)
cardRecordFields.set("deplimit", ` 
\n### Dep Limit
\nThis field stores the aggregate deposit amount per day that is not subject to holds.
\nField Number         **030**
\nMnemonic             **DEPLIMIT**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00830**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\n***Important:***  If you are not using Online Posting parameters, you must request that we modify the ATM configuration file.
`)
cardRecordFields.set("depamount", ` 
\n### Dep Amount
\nThis field stores the total amount of all online ATM deposits made, based on the value in the Usage Date field.
\nField Number         **031**
\nMnemonic             **DEPAMOUNT**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00831**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nUnder normal circumstances, you should not revise this field.
`)
cardRecordFields.set("depcountlimit", ` 
\n### Deposit Count Limit
\nThis field stores the maximum number of deposits allowed per day.
\nField Number         **074**
\nMnemonic             **DEPCOUNTLIMIT**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00874**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nEnter the maximum number of deposits allowed per day (based on the AIX system actual date).
\n***Important:***  SymConnect, credit and debit card, and ATM software can use this field to limit deposits. To enable the ATM deposit limiting, contact Symitar Support.
`)
cardRecordFields.set("depcount", ` 
\n### Deposit Count
\nThis field stores the number of deposits performed, based on the value in the Usage Date field.
\nField Number         **075**
\nMnemonic             **DEPCOUNT**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00875**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n***Important:***  SymConnect, credit and debit card, and ATM software can use this field to limit deposits. The SymConnect software can also update this field, so if you receive deposits through SymConnect, Symitar accumulates deposits from each software package. To enable the ATM deposit limiting, contact Symitar Support.
`)
cardRecordFields.set("limitdescription", ` 
\n### Limit 1 Description - Limit 6 Description
\nThese fields display a description of each limit, taken from the Limit 1–6 Description parameters, which are defined in Online Card Parameters.
\nField Number         **800:1 – 800:6**
\nMnemonic             **LIMITDESCRIPTION:1 – LIMITDESCRIPTION:6**
\nData Type            **40 Characters**
\nSource               **System-calculated**
\nHelp File            **11401**
\nDefault Control      **No**
\nDefault Value **(Blank)**
`)
cardRecordFields.set("limit", ` 
\n### Limit 1 - Limit 6
\nThese fields store a daily limit amount, which is the total transaction amount allowed for the day, for each limit.
\nField Number         **096:1 – 096:6**
\nMnemonic             **LIMIT:1 – LIMIT:6**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00896**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nIf Symitar processes an online transaction that meets the criteria for a related limit parameter, it checks how much of the limit has already been used that day. If the current transaction will cause the limit to be exceeded, Symitar does the following:
\nDeclines the transaction
\n   - Responds with a response code that is appropriate for the specific network
\n   - Sets the Our Response Code field in the ATM Dialog record to the following: 2002 – Transaction Exceeds Daily Limit
\n   - Sets the Our Response Detail field in the ATM Dialog record to the following: Card Limit <n>
\n
\n   - The <n> represents 1–6, depending on which limit parameter is exceeded.
\n
\nA value of zero in any of these fields is a valid limit, and Symitar denies any transaction that would affect the related limit.
`)
cardRecordFields.set("limitusageamount", ` 
\n### Limit 1 Usage Amount - Limit 6 - Usage Amount
\nThese fields store the current total transaction amount approved for each limit.
\nField Number         **097:1 – 097:6**
\nMnemonic             **LIMITUSAGEAMOUNT:1 – LIMITUSAGEAMOUNT:6**
\nData Type            **Money**
\nSource               **System-entered**
\nHelp File            **00897**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nWhenever the related limit applies to a particular approved transaction and the addition of the transaction amount will not exceed the limit, Symitar adds the transaction amount to the content of this field. If the addition of the transaction amount will exceed the limit, Symitar declines the transaction.
\n
\nSymitar resets all usage fields when it processes the first transaction for an AIX® date (when the AIX date is not the same as the date in the Usage Date field in the Card record).
`)
cardRecordFields.set("countlimit", ` 
\n### Limit 1 Count Limit - Limit 6 Count Limit
\nThese fields store the number of daily transactions allowed for each limit.
\nField Number         **094:1 – 094:6**
\nMnemonic             **COUNTLIMIT:1 – COUNTLIMIT:6**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **00894**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\nWhenever the related limit applies to a particular transaction, Symitar checks how many transactions have already occurred that day. If the current transaction will exceed the allowable number of transactions, Symitar does the following:
\nDeclines the transaction
\n   - Responds with a response code that is appropriate for the specific network
\n   - Sets the Our Response Code field in the ATM Dialog record to the following: 2022 – Transaction Exceeds Daily Limit Count
\n   - Sets the Our Response Detail field in the ATM Dialog record to the following: Card Limit <n> Count Limit
\n
\n   - The <n> represents 1–6, depending on which limit is exceeded.
\n
\nA value of zero in any of these fields is a valid limit, and Symitar denies any transaction that would affect the related limit.
`)
cardRecordFields.set("limitcount", ` 
\n### Limit 1 Count - Limit 6 Count
\nThese fields store the current number of transactions for each limit.
\nField Number         **095:1 – 095:6**
\nMnemonic             **LIMITCOUNT:1 - LIMITCOUNT:6**
\nData Type            **Code to 9999**
\nSource               **System-entered**
\nHelp File            **00895**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nWhenever the related limit applies to a particular transaction and the addition of 1 will not exceed the limit, Symitar adds 1 to the current content of the related field. If the addition of 1 will exceed the limit, Symitar declines the transaction.
\n
\nSymitar resets all usage fields when it processes the first transaction for an AIX date (when the AIX date is not the same as the date in Usage Date field on the Card record).
`)
cardRecordFields.set("peritemlimit", ` 
\n### Limit 1 Per Item Limit - Limit 6 Per Item limit
\nThese fields store the maximum amount allowed for a single transaction for each limit.
\nField Number         **098:1 – 098:6**
\nMnemonic             **PERITEMLIMIT:1 - PERITEMLIMIT:6**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **00898**
\nDefault Control      **Yes**
\nDefault Value **0.00**
\n
\nWhenever the related limit applies to a particular transaction, Symitar checks whether the transaction amount exceeds the amount in the related field. If the current transaction exceeds the limit, Symitar does the following:
\nDeclines the transaction
\n   - Responds with a response code that is appropriate for the specific network
\n   - Sets the Our Response Code field in the ATM Dialog record to the following: 2085 – Card Per Item Limit Exceeded
\n   - Sets the Our Response Detail field in the ATM Dialog record to the following: Card Limit <n> Per Item Limit
\n
\n   - The <n> represents 1–6, depending on which limit is exceeded
\n
\nA value of zero in any of these fields is a valid limit value, and Symitar denies any transaction that would affect the related limit.
`)
cardRecordFields.set("warningcode", ` 
\n### Warning 01 Code - Warning 20 Code
\nThese 20 fields can each store a code that identifies a different credit union-defined warning to apply to this card.
\nField Number         **038:001 - 038:020**
\nMnemonic             **WARNINGCODE:1 - WARNINGCODE:20**
\nData Type            **Code to 999**
\nSource               **User-entered**
\nHelp File            **00838**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No Warning Code
\n   No credit union-defined warning##### 1–999
\n   A credit union-defined warning code to apply to this card
\n   
\n       - Depending on your parameters, you can select a code from up to 999 different warning codes. For more information on how to define warning codes and warning messages, see Warning Parameters.
\n
\nYou can select up to 20 different warning codes in a Card record.
\n
\nYou can set warning codes to expire automatically by using these fields together with Warning 01 Expiration - Warning 20 Expiration fields.
`)
cardRecordFields.set("warningexpiration", ` 
\n### Warning 01 Expiration - Warning 20 Expiration
\nThese 20 fields can each store a date after which the corresponding warning should no longer apply to the card.
\nField Number         **039:001 - 039:020**
\nMnemonic             **WARNINGEXPIRATION:1 - WARNINGEXPIRATION:20**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **00839**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nAt any of these fields, you can enter a date after which the corresponding warning (see Warning 01 Code - Warning 20 Code) should no longer apply to the card.
\n
\nFor example, if you select 200 at the Warning 9 Code field and type 112811 in the Warning 9 Expiration field, Warning Code 200 will be in effect until the system date reaches November 28, 2011. After that date, the warning is no longer active and the security privileges no longer restrict access to the share.
\n
\nIf you select a value at the Warning # Code field, but you do not enter a date at the related Warning # Expiration field, the warning remains in effect indefinitely or until you remove the value in the Warning # Code field manually.
`)
cardRecordFields.set("service", ` 
\n### Service 1 - Service 8
\nThese eight fields can each store a code that identifies a different credit union-defined credit union service offered with the card.
\nField Number         **040:001 - 040:008**
\nMnemonic             **SERVICE:1 - SERVICE:8**
\nData Type            **Code to 99**
\nSource               **User-entered**
\nHelp File            **00840**
\nDefault Control      **Yes**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### 0
\n   No credit union-defined service##### 1–99
\n   A credit union-defined service code specifies that a particular card has access to a specific service. These service codes are credit union-defined and can be used by the online environment as well as any edits.
\n`)
cardRecordFields.set("locator", ` 
\n### Locator
\nThis field stores a unique number within each member account that can be used as a unique identification of this record.
\nField Number         **081**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **00881**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
