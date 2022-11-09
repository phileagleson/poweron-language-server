export const siteRecordFields = new Map<string, string>()
siteRecordFields.set("sitenumber", ` 
\n### Site Number
\nThis field stores a credit union-defined code identifying a site to which a vendor delivers cash orders.
\nField Number         **001**
\nMnemonic             **SITENUMBER**
\nData Type            **Code to 9999**
\nSource               **User-entered**
\nHelp File            **09501**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nEnter a credit union-defined code that identifies a site to which a vendor delivers cash orders. There can only be one Site record for a specific value in this field.
\n
\nOnce entered and saved, you cannot revise this number.
`)
siteRecordFields.set("sitename", ` 
\n### Name
\nThis field stores a descriptive name for the site.
\nField Number         **002**
\nMnemonic             **SITENAME**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **09502**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter a descriptive name for the site (up to 40 characters).
`)
siteRecordFields.set("extraaddress", ` 
\n### Extra Address
\nThis field stores an extra address line for the site's deliveries.
\nField Number         **003**
\nMnemonic             **EXTRAADDRESS**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **09503**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter an extra address line (up to 40 characters) for the site's deliveries.
`)
siteRecordFields.set("street", ` 
\n### Street
\nThis field stores the street address for the site's deliveries.
\nField Number         **004**
\nMnemonic             **STREET**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **09504**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the street address (up to 40 characters) for the site's deliveries.
`)
siteRecordFields.set("city", ` 
\n### City
\nThis field stores the city for the site's delivery address.
\nField Number         **005**
\nMnemonic             **CITY**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **09505**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the city (up to 40 characters) for the site's delivery address.
`)
siteRecordFields.set("state", ` 
\n### State
\nThis field stores the state for the site's delivery address.
\nField Number         **006**
\nMnemonic             **STATE**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **09506**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the state (up to 10 characters), or two-character state code, for the site's delivery address.
`)
siteRecordFields.set("zipcode", ` 
\n### Zip Code
\nThis field stores the ZIP Code for the site's delivery address.
\nField Number         **007**
\nMnemonic             **ZIPCODE**
\nData Type            **10 Characters**
\nSource               **User-entered**
\nHelp File            **09507**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the ZIP Code (up to 10 characters) for the site's delivery address.
`)
siteRecordFields.set("faxphone", ` 
\n### Fax Phone
\nThis field stores the phone number for the site's fax machine.
\nField Number         **009**
\nMnemonic             **FAXPHONE**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **09509**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the phone number (up to 16 characters) for the site's fax machine.
`)
siteRecordFields.set("sitecontactname", ` 
\n### Contact Name
\nThis field stores the name of the contact person for this site.
\nField Number         **010**
\nMnemonic             **SITECONTACTNAME**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **09510**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the name (up to 40 characters) of the contact person for this site.
`)
siteRecordFields.set("contactphone", ` 
\n### Contact Phone
\nThis field stores the phone number of the site's contact person.
\nField Number         **011**
\nMnemonic             **CONTACTPHONE**
\nData Type            **16 Characters**
\nSource               **User-entered**
\nHelp File            **09511**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the phone number (up to 16 characters) of the site's contact person.
`)
siteRecordFields.set("siteid", ` 
\n### Site Identifier
\nThis field stores the identifier the BillMe system uses to uniquely identify a site.
\nField Number         **012**
\nMnemonic             **SITEID**
\nData Type            **9 Characters**
\nSource               **User-entered**
\nHelp File            **09512**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the identifier (up to 9 characters) the BillMe system uses to uniquely identify a site.
`)
siteRecordFields.set("sitesettleshareid", ` 
\n### Settlement Share ID
\nThis field stores the ID of the share that the corporate interface debits for the total amount of the cash order.
\nField Number         **013**
\nMnemonic             **SITESETTLESHAREID**
\nData Type            **4 Characters**
\nSource               **User-entered**
\nHelp File            **09513**
\nDefault Control      **No**
\nDefault Value        **(Blank)**
\n
\nEnter the ID of the share (2 or 4 characters) that the corporate interface debits for the total amount of the cash order.
`)
siteRecordFields.set("closedate", ` 
\n### Close Date
\nThis field stores the date the site was closed.
\nField Number         **008**
\nMnemonic             **CLOSEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **09508**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\nEnter the date the site was closed.
`)
siteRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date in this field when you create, change, or save the Site record. Sometimes the system updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **015**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **09515**
\nDefault Control      **No**
\nDefault Value        **Date Null**
\n
\n***Important:***  The system does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
siteRecordFields.set("locator", ` 
\n### Locator
\nThis field stores a unique number within each Preference record set that can be used as a unique identification of this record.
\nField Number         **014**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **09514**
\nDefault Control      **No**
\nDefault Value        **0**
\n
\nThe system automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
