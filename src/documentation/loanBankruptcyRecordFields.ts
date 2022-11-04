export const loanBankruptcyRecordFields = new Map<string, string>()
loanBankruptcyRecordFields.set("id", ` This field stores the four-character ID that identifies the Bankruptcy record. The bankruptcy ID is assigned when creating the Bankruptcy record.
\nField Number         **001**
\nMnemonic             **ID**
\nData Type            **4 Characters**
\nSource               **User-entered**
\nHelp File            **32401**
\nDefault Control      **No**
\nDefault Value **Blank**
\n
\nYou cannot assign the same bankruptcy ID to another Bankruptcy record under the associated Loan record. The following message appears, and the system does not allow the same ID to be assigned:
\n
\nYou cannot perform file maintenance on this field. Once the bankruptcy ID is assigned, that ID remains permanently associated with the Bankruptcy record.
\n
\nThis field only allows a numeric value, and the system sends the following message when a non-numeric value is used:
`)
loanBankruptcyRecordFields.set("description", ` You cannot create a Bankruptcy record without entering a description. If you leave the field blank, an error message appears, and you cannot save the Bankruptcy record until you have entered a description.
\nField Number         **002**
\nMnemonic             **DESCRIPTION**
\nData Type            **30 Characters**
\nSource               **User-entered**
\nHelp File            **32402**
\nDefault Control      **No**
\nDefault Value **Blank**
`)
loanBankruptcyRecordFields.set("type", ` This field stores the reason for the Bankruptcy record.
\nField Number         **003**
\nMnemonic             **TYPE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **32403**
\nDefault Control      **No**
\nDefault Value **(0) None**
\n
\n#### Data Type Descriptions
\n##### (0) None
\n   Select this option if the Bankruptcy record reason has not been established.##### (1) Bankruptcy
\n   Select this option if the Bankruptcy record reason is for a loan in Chapter 7, 11, 12, or 13 bankruptcy.
\n   
\n       - The Type field cannot be changed back to (0) None once an associated Loan Bankruptcy Pre-Petition Bal record is found.
\n
\nIf the Loan record Loan Code field is not set to (0) Closed end or (1) Open end, the following message appears and you cannot save the Term record:
`)
loanBankruptcyRecordFields.set("opendate", ` The system updates this field with the system date when the Bankruptcy record is created.
\nField Number         **004**
\nMnemonic             **OPENDATE**
\nData Type            **Date**
\nSource               **System-calculated**
\nHelp File            **32404**
\nDefault Control      **No**
\nDefault Value **System date at creation**
`)
loanBankruptcyRecordFields.set("closedate", ` This field stores the date when the Bankruptcy record is closed.
\nField Number         **005**
\nMnemonic             **CLOSEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **32405**
\nDefault Control      **No**
\nDefault Value **Blank**
\n
\nYou cannot enter a value in the Close Date field if the Loan Bankruptcy PrePetition Bal record Balance field is not 0.00. The system returns the following message:
\n
\nBankruptcy records are deleted with their parent Loan record, when the Loan record is deleted.
`)
loanBankruptcyRecordFields.set("recordchangedate", ` This field stores the system date when you create, change, or save the Bankruptcy record.
\nField Number         **006**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **32406**
\nDefault Control      **No**
\nDefault Value **Blank**
\n
\nThe system updates the Record Change Date field when the record is saved, even though there are not any actual changes in the records.
\n
\nYou cannot perform file maintenance on this field.
`)
loanBankruptcyRecordFields.set("effectdate", ` This field stores the date the bankruptcy begins, or takes effect.
\nField Number         **007**
\nMnemonic             **EFFECTDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **32407**
\nDefault Control      **No**
\nDefault Value **Blank**
\n
\nThe system clears the Expiration Date field if the date entered in this field is equal to, or after the Expiration Date field value.
`)
loanBankruptcyRecordFields.set("expiredate", ` This field stores the date the bankruptcy expires, or is no longer in effect.
\nField Number         **008**
\nMnemonic             **EXPIREDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **32408**
\nDefault Control      **No**
\nDefault Value **Blank**
\n
\nThe Expiration Date field value cannot be before the Effective Date field value.
`)
