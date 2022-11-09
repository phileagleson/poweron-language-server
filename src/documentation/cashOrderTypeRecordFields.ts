export const cashOrderTypeRecordFields = new Map<string, string>()
cashOrderTypeRecordFields.set("cashordertypename", ` 
\n### Name
\nThis field stores the descriptive name for the cash order type.
\nField Number         **001**
\nMnemonic             **CASHORDERTYPENAME**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **09601**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter a descriptive name for the cash order type (up to 40 characters).
`)
cashOrderTypeRecordFields.set("vendornumber", ` 
\n### Vendor Number
\nThis field stores the credit union defined number of the vendor from the Cash Order Vendor Parameters.
\nField Number         **003**
\nMnemonic             **VENDORNUMBER**
\nData Type            **Number**
\nSource               **User-entered**
\nHelp File            **09603**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nEnter the credit union defined number of the vendor from the Cash Order Vendor Parameters.
\n
\nThe Cash Order Type record, which serves as the basis for this order, specifies this number. Once the order is made, you cannot change it. Symitar Quest stores this number for reference and to create database keys for the field for fast lookup.
`)
cashOrderTypeRecordFields.set("orderlimiting", ` 
\n### Order Limiting
\nThis field stores a code that indicates the maximum number of non-cancelled orders allowed per delivery date for this order type for a site.
\nField Number         **004**
\nMnemonic             **ORDERLIMITING**
\nData Type            **Code to 9**
\nSource               **User-entered**
\nHelp File            **09604**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No Limit
\n   There is no limit to the number of non-cancelled orders allowed per deliver date for this order type for a site.##### (1) Limit to one non-cancelled order
\n   You can have only one non-cancelled order of this type per delivery date for this site.##### (2) Limit to two non-cancelled orders
\n   You can have up to two non-cancelled orders of this type per delivery date for this site.##### (3) Limit to three non-cancelled orders
\n   You can have up to three non-cancelled orders of this type per delivery date for this site.##### (4) Limit to four non-cancelled orders
\n   You can have up to four non-cancelled orders of this type per delivery date for this site.##### (5) Limit to five non-cancelled orders
\n   You can have up to five non-cancelled orders of this type per delivery date for this site.##### (6) Limit to six non-cancelled orders
\n   You can have up to six non-cancelled orders of this type per delivery date for this site.##### (7) Limit to seven non-cancelled orders
\n   You can have up to seven non-cancelled orders of this type per delivery date for this site.##### (8) Limit to eight non-cancelled orders
\n   You can have up to eight non-cancelled orders of this type per delivery date for this site.##### (9) Limit to nine non-cancelled orders
\n   You can have up to nine non-cancelled orders of this type per delivery date for this site.
\n`)
cashOrderTypeRecordFields.set("delfrequency", ` 
\n### Delivery Frequency
\nThis field stores a code that defines how often a site receives delivery for this order type.
\nField Number         **005**
\nMnemonic             **DELFREQUENCY**
\nData Type            **Code to 3**
\nSource               **User-entered**
\nHelp File            **09605**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) Daily
\n   The site receives daily deliveries of this order type.##### (1) Weekly
\n   The site receives a delivery of this order type once a week.##### (2) Biweekly
\n   The site receives a delivery of this order type once every two weeks.##### (3) Monthly
\n   The site receives a delivery of this order type once a month.
\n`)
cashOrderTypeRecordFields.set("locationcode", ` 
\n### Location Code
\nThis field stores special vendor-specific information that identifies the site's location to this vendor.
\nField Number         **006**
\nMnemonic             **LOCATIONCODE**
\nData Type            **20 Characters**
\nSource               **User-entered**
\nHelp File            **09607**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter special vendor-specific information (up to 20 characters) that identifies the site's location to this vendor.
`)
cashOrderTypeRecordFields.set("cashordertypeminorder", ` 
\n### Minimum Order
\nThis field stores the minimum amount required for this order.
\nField Number         **007**
\nMnemonic             **CASHORDERTYPEMINORDER**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09608**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the minimum amount required for this order.
`)
cashOrderTypeRecordFields.set("cashordertypemaxorder", ` 
\n### Maximum Order
\nThis field stores the maximum amount required for this order.
\nField Number         **008**
\nMnemonic             **CASHORDERTYPEMAXORDER**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09609**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the maximum amount required for this order.
`)
cashOrderTypeRecordFields.set("cashordertypedelcharge", ` 
\n### Delivery Charge
\nThis field stores the amount the vendor charges for this order type for a normal delivery.
\nField Number         **014**
\nMnemonic             **CASHORDERTYPEDELCHARGE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09615**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the amount the vendor for charges this order type for a normal delivery.
`)
cashOrderTypeRecordFields.set("cashordertypespecdelcharge", ` 
\n### Special Delivery Charge
\nThis field stores the amount the vendor charges for this order type for a special delivery.
\nField Number         **015**
\nMnemonic             **CASHORDERTYPESPECDELCHARGE**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09616**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the amount the vendor charges for this order type for a special delivery.
`)
cashOrderTypeRecordFields.set("applyhandlingfee", ` 
\n### Apply Special Handling Fee
\nThis field stores a code that indicates whether this order type incurs a special handling fee (using the amount from the Special Handling Fee parameter in the Cash Order Vendor Parameters).
\nField Number         **016**
\nMnemonic             **APPLYHANDLINGFEE**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **09617**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   This order type does not incur a special handling fee.##### (1) Yes
\n   This order type incurs a special handling fee.
\n`)
cashOrderTypeRecordFields.set("specialhandlingfee", ` 
\n### Special Handling Fee
\nThis field contains the amount of special handling fee.
\nField Number         **800**
\nMnemonic             **SPECIALHANDLINGFEE**
\nData Type            **Money**
\nSource               **System-calculated**
\nHelp File            **09681**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nIf the Apply Special Handling Fee field has a value of (0) No, then Symitar Quest enters $0.00 in this field. Otherwise, Symitar Quest enters the value in the Special Handling Fee parameter in the Cash Order Vendor Parameters in this field.
`)
cashOrderTypeRecordFields.set("cashordertypecomment", ` 
\n### Comments Line 1 - Comments Line 4
\nThese fields each store a default comment line on this cash order type.
\nField Number         **009:1-009:4**
\nMnemonic             **CASHORDERTYPECOMMENT:1 - CASHORDERTYPECOMMENT:4**
\nData Type            **40 Characters**
\nSource               **User-entered**
\nHelp File            **09610**
\nDefault Control      **No**
\nDefault Value **(Blank)**
\n
\nEnter a default comment (up to four lines of 40 characters each) on this cash order type.
`)
cashOrderTypeRecordFields.set("activeflag", ` 
\n### Active
\nThis field stores a code that indicates the state of this cash order type.
\nField Number         **002**
\nMnemonic             **ACTIVEFLAG**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **09602**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   This cash order type is not currently in use.##### (1) Yes
\n   This cash order type is available for use.
\n`)
cashOrderTypeRecordFields.set("closedate", ` 
\n### Close Date
\nThis field stores the date you closed this Cash Order Type record.
\nField Number         **018**
\nMnemonic             **CLOSEDATE**
\nData Type            **Date**
\nSource               **User-entered**
\nHelp File            **09618**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\nEnter the date (MM/DD/YYYY) you closed this Cash Order Type record.
`)
cashOrderTypeRecordFields.set("recordchangedate", ` 
\n### Record Change Date
\nThis field stores the system date in this field when you create, change, or save the Cash Order Type record. Sometimes Symitar Quest updates this field because the record was saved, even though there may not be any actual changes in the record.
\nField Number         **020**
\nMnemonic             **RECORDCHANGEDATE**
\nData Type            **Date**
\nSource               **System-entered**
\nHelp File            **09620**
\nDefault Control      **No**
\nDefault Value **Date Null**
\n
\n***Important:***  Symitar Quest does not change this field when a calculated field changes.
\n
\nYou cannot perform file maintenance on this field.
`)
cashOrderTypeRecordFields.set("deliverydays", ` 
\n### DELIVERYDAYS:1
\n### Delivery Day - Sunday
\nThis field stores a code that specifies whether the vendor delivers to this site on Sunday.
\nField Number         **017:1**
\nMnemonic             **DELIVERYDAYS:1**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **09606**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   This vendor does not deliver to this site on Sunday.##### (1) Yes
\n   This vendor delivers to this site on Sunday.
\n
\n### DELIVERYDAYS:2
\n### Delivery Day - Monday
\nThis field stores a code that specifies whether the vendor delivers to this site on Monday.
\nField Number         **017:2**
\nMnemonic             **DELIVERYDAYS:2**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **09606**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   This vendor does not deliver to this site on Monday.##### (1) Yes
\n   This vendor delivers to this site on Monday.
\n
\n### DELIVERYDAYS:3
\n### Delivery Day - Tuesday
\nThis field stores a code that specifies whether the vendor delivers to this site on Tuesday.
\nField Number         **017:3**
\nMnemonic             **DELIVERYDAYS:3**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **09606**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   This vendor does not deliver to this site on Tuesday.##### (1) Yes
\n   This vendor delivers to this site on Tuesday.
\n
\n### DELIVERYDAYS:4
\n### Delivery Day - Wednesday
\nThis field stores a code that specifies whether the vendor delivers to this site on Wednesday.
\nField Number         **017:4**
\nMnemonic             **DELIVERYDAYS:4**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **09606**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   This vendor does not deliver to this site on Wednesday.##### (1) Yes
\n   This vendor delivers to this site on Wednesday.
\n
\n### DELIVERYDAYS:5
\n### Delivery Day - Thursday
\nThis field stores a code that specifies whether the vendor delivers to this site on Thursday.
\nField Number         **017:5**
\nMnemonic             **DELIVERYDAYS:5**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **09606**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   This vendor does not deliver to this site on Thursday.##### (1) Yes
\n   This vendor delivers to this site on Thursday.
\n
\n### DELIVERYDAYS:6
\n### Delivery Day - Friday
\nThis field stores a code that specifies whether the vendor delivers to this site on Friday.
\nField Number         **017:6**
\nMnemonic             **DELIVERYDAYS:6**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **09606**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   This vendor does not deliver to this site on Friday.##### (1) Yes
\n   This vendor delivers to this site on Friday.
\n
\n### DELIVERYDAYS:7
\n### Delivery Day - Saturday
\nThis field stores a code that specifies whether the vendor delivers to this site on Saturday.
\nField Number         **017:7**
\nMnemonic             **DELIVERYDAYS:7**
\nData Type            **Code to 1**
\nSource               **User-entered**
\nHelp File            **09606**
\nDefault Control      **No**
\nDefault Value **0**
\n
\n#### Data Type Descriptions
\n##### (0) No
\n   This vendor does not deliver to this site on Saturday.##### (1) Yes
\n   This vendor delivers to this site on Saturday.
\n`)
cashOrderTypeRecordFields.set("cashordertypecurrfit", ` 
\n## CASHORDERTYPECURRFIT:1
\n### Currency Fit - Hundreds
\nThis field stores the cash value of used hundred-dollar bills (fit for circulation) in this order type.
\nField Number         **010:1**
\nMnemonic             **CASHORDERTYPECURRFIT:1**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09611**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of used hundred-dollar bills (fit for circulation) in this order type.
\n
\n### CASHORDERTYPECURRFIT:2
\n### Currency Fit - Fifties
\nThis field stores the cash value of used fifty-dollar bills (fit for circulation) in this order type.
\nField Number         **010:2**
\nMnemonic             **CASHORDERTYPECURRFIT:2**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09611**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of used fifty-dollar bills (fit for circulation) in this order type.
\n
\n### CASHORDERTYPECURRFIT:3
\n### Currency Fit - Twenties
\nThis field stores the cash value of used twenty-dollar bills (fit for circulation) in this order type.
\nField Number         **010:3**
\nMnemonic             **CASHORDERTYPECURRFIT:3**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09611**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of used twenty-dollar bills (fit for circulation) in this order type.
\n
\n### CASHORDERTYPECURRFIT:4
\n### Currency Fit - Tens
\nThis field stores the cash value of used ten-dollar bills (fit for circulation) in this order type.
\nField Number         **010:4**
\nMnemonic             **CASHORDERTYPECURRFIT:4**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09611**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of used ten-dollar bills (fit for circulation) in this order type.
\n
\n### CASHORDERTYPECURRFIT:5
\n### Currency Fit - Fives
\nThis field stores the cash value of used five-dollar bills (fit for circulation) in this order type.
\nField Number         **010:5**
\nMnemonic             **CASHORDERTYPECURRFIT:5**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09611**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of used five-dollar bills (fit for circulation) in this order type.
\n
\n### CASHORDERTYPECURRFIT:6
\n### Currency Fit - Twos
\nThis field stores the cash value of used two-dollar bills (fit for circulation) in this order type.
\nField Number         **010:6**
\nMnemonic             **CASHORDERTYPECURRFIT:6**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09611**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of used two-dollar bills (fit for circulation) in this order type.
\n
\n### CASHORDERTYPECURRFIT:7
\n### Currency Fit - Ones
\nThis field stores the cash value of used one-dollar bills (fit for circulation) in this order type.
\nField Number         **010:7**
\nMnemonic             **CASHORDERTYPECURRFIT:7**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09611**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of used one-dollar bills (fit for circulation) in this order type.
`)
cashOrderTypeRecordFields.set("cashordertypecurrnew", ` 
\n## CASHORDERTYPECURRNEW:1
\n### Currency New - Hundreds
\nThis field stores the cash value of new hundred-dollar bills (uncirculated) in this order type.
\nField Number         **011:1**
\nMnemonic             **CASHORDERTYPECURRNEW:1**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09612**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of new hundred-dollar bills (uncirculated) in this order type.
\n
\n### CASHORDERTYPECURRNEW:2
\n### Currency New - Fifties
\nThis field stores the cash value of new fifty-dollar bills (uncirculated) in this order type.
\nField Number         **011:2**
\nMnemonic             **CASHORDERTYPECURRNEW:2**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09612**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of new fifty-dollar bills (uncirculated) in this order type.
\n
\n### CASHORDERTYPECURRNEW:3
\n### Currency New - Twenties
\nThis field stores the cash value of new twenty-dollar bills (uncirculated) in this order type.
\nField Number         **011:3**
\nMnemonic             **CASHORDERTYPECURRNEW:3**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09612**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of new twenty-dollar bills (uncirculated) in this order type.
\n
\n### CASHORDERTYPECURRNEW:4
\n### Currency New - Tens
\nThis field stores the cash value of new ten-dollar bills (uncirculated) in this order type.
\nField Number         **011:4**
\nMnemonic             **CASHORDERTYPECURRNEW:4**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09612**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of new ten-dollar bills (uncirculated) in this order type.
\n
\n### CASHORDERTYPECURRNEW:5
\n### Currency New - Fives
\nThis field stores the cash value of new five-dollar bills (uncirculated) in this order type.
\nField Number         **011:5**
\nMnemonic             **CASHORDERTYPECURRNEW:5**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09612**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of new five-dollar bills (uncirculated) in this order type.
\n
\n### CASHORDERTYPECURRNEW:6
\n### Currency New - Twos
\nThis field stores the cash value of new two-dollar bills (uncirculated) in this order type.
\nField Number         **011:6**
\nMnemonic             **CASHORDERTYPECURRNEW:6**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09612**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of new two-dollar bills (uncirculated) in this order type.
\n
\n### CASHORDERTYPECURRNEW:7
\n### Currency New - Ones
\nThis field stores the cash value of new one-dollar bills (uncirculated) in this order type.
\nField Number         **011:7**
\nMnemonic             **CASHORDERTYPECURRNEW:7**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09612**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of new one-dollar bills (uncirculated) in this order type.
`)
cashOrderTypeRecordFields.set("cashordertypecoinroll", ` 
\n## CASHORDERTYPECOINROLL:1
\n### Coin Roll - Golden Dollars
\nThis field stores the cash value of rolled (Sacagawea) one-dollar coins in this order type.
\nField Number         **012:1**
\nMnemonic             **CASHORDERTYPECOINROLL:1**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09613**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of rolled (Sacagawea) one-dollar coins in this order type.
\n
\n### CASHORDERTYPECOINROLL:2
\n### Coin Roll - Susan Bs
\nThis field stores the cash value of rolled Susan B. Anthony one-dollar coins in this order type.
\nField Number         **012:2**
\nMnemonic             **CASHORDERTYPECOINROLL:2**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09613**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of rolled Susan B. Anthony one-dollar coins in this order type.
\n
\n### CASHORDERTYPECOINROLL:3
\n### Coin Roll - Halves
\nThis field stores the cash value of rolled half-dollar coins in this order type.
\nField Number         **012:3**
\nMnemonic             **CASHORDERTYPECOINROLL:3**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09613**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of rolled half-dollar coins in this order type.
\n
\n### CASHORDERTYPECOINROLL:4
\n### Coin Roll - Quarters
\nThis field stores the cash value of rolled standard quarters in this order type.
\nField Number         **012:4**
\nMnemonic             **CASHORDERTYPECOINROLL:4**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09613**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of rolled standard quarters in this order type.
\n
\n### CASHORDERTYPECOINROLL:8
\n### Coin Roll - State Quarters
\nThis field stores the cash value of rolled state commemorative quarters in this order type.
\nField Number         **012:8**
\nMnemonic             **CASHORDERTYPECOINROLL:8**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09613**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of rolled state commemorative quarters in this order type.
\n
\n### CASHORDERTYPECOINROLL:5
\n### Coin Roll - Dimes
\nThis field stores the cash value of rolled dimes in this order type.
\nField Number         **012:5**
\nMnemonic             **CASHORDERTYPECOINROLL:5**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09613**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of rolled dimes in this order type.
\n
\n### CASHORDERTYPECOINROLL:6
\n### Coin Roll - Nickels
\nThis field stores the cash value of rolled nickels in this order type.
\nField Number         **012:6**
\nMnemonic             **CASHORDERTYPECOINROLL:6**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09613**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of rolled nickels in this order type.
\n
\n### CASHORDERTYPECOINROLL:7
\n### Coin Roll - Pennies
\nThis field stores the cash value of rolled pennies in this order type.
\nField Number         **012:7**
\nMnemonic             **CASHORDERTYPECOINROLL:7**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09613**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of rolled pennies in this order type.
`)
cashOrderTypeRecordFields.set("cashordertypecoinbag", ` 
\n## CASHORDERTYPECOINBAG:1
\n### Coin Bag - Golden Dollars
\nThis field stores the cash value of bagged (Sacagawea) one-dollar coins in this order type.
\nField Number         **013:1**
\nMnemonic             **CASHORDERTYPECOINBAG:1**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09614**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of bagged (Sacagawea) one-dollar coins in this order type.
\n
\n### CASHORDERTYPECOINBAG:2
\n### Coin Bag - Susan Bs
\nThis field stores the cash value of bagged Susan B. Anthony one-dollar coins in this order type.
\nField Number         **013:2**
\nMnemonic             **CASHORDERTYPECOINBAG:2**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09614**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of bagged Susan B. Anthony one-dollar coins in this order type.
\n
\n### CASHORDERTYPECOINBAG:3
\n### Coin Bag - Halves
\nThis field stores the cash value of bagged half-dollar coins in this order type.
\nField Number         **013:3**
\nMnemonic             **CASHORDERTYPECOINBAG:3**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09614**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of bagged half-dollar coins in this order type.
\n
\n### CASHORDERTYPECOINBAG:4
\n### Coin Bag - Quarters
\nThis field stores the cash value of bagged quarters in this order type.
\nField Number         **013:4**
\nMnemonic             **CASHORDERTYPECOINBAG:4**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09614**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of bagged quarters in this order type.
\n
\n### CASHORDERTYPECOINBAG:5
\n### Coin Bag - Dimes
\nThis field stores the cash value of bagged dimes in this order type.
\nField Number         **013:5**
\nMnemonic             **CASHORDERTYPECOINBAG:5**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09614**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of bagged dimes in this order type.
\n
\n### CASHORDERTYPECOINBAG:6
\n### Coin Bag - Nickels
\nThis field stores the cash value of bagged nickels in this order type.
\nField Number         **013:6**
\nMnemonic             **CASHORDERTYPECOINBAG:6**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09614**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of bagged nickels in this order type.
\n
\n### CASHORDERTYPECOINBAG:7
\n### Coin Bag - Pennies
\nThis field stores the cash value of bagged pennies in this order type.
\nField Number         **013:7**
\nMnemonic             **CASHORDERTYPECOINBAG:7**
\nData Type            **Money**
\nSource               **User-entered**
\nHelp File            **09614**
\nDefault Control      **No**
\nDefault Value **0.00**
\n
\nEnter the cash value of bagged pennies in this order type.
`)
cashOrderTypeRecordFields.set("locator", ` 
\n### Locator
\nThis field stores a unique number within each Cash Order Type record set that can be used as a unique identification of this record.
\nField Number         **019**
\nMnemonic             **LOCATOR**
\nData Type            **Number**
\nSource               **System-entered**
\nHelp File            **09620**
\nDefault Control      **No**
\nDefault Value **0**
\n
\nSymitar Quest automatically assigns the value in this field when the record is created, and you cannot change it. The value is a positive number greater than zero and up to about two billion.
\n
\nThis field can be used during PowerOn file maintenance (both on demand and batch) to uniquely identify a record. Using this field is recommended since a record's ordinal sequence number may change if someone else inserts or deletes a record with a lower ordinal sequence number just before you post your file maintenance.
`)
