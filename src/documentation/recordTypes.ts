export const recordTypes = new Map()
recordTypes.set("account", `
# ACCOUNT Record 
---
Account records store basic account information about your members.

PowerOn record name for Account records:
\`\`\`
ACCOUNT
\`\`\`
`)
recordTypes.set("fmhistory", `
# FMHISTORY Record
This FM History record stores updates to other records in the system when file maintenance occurs.

Many Symitar records have corresponding FM History records.

PowerOn record names:
\`\`\`
FMHISTORY (for Account)
VENDOR FMHISTORY (for Accounts Payable)
CHECK FMHISTORY
COLLATERAL FMHISTORY
CTR FMHISTORY
DEALER FMHISTORY
GLACCOUNT FMHISTORY
MEMBERREC FMHISTORY
MBRADDRESS FMHISTORY
NONACCTNAME FMHISTORY
PARTICIPANT FMHISTORY (for Dealer)
PARTICIPATION FMHISTORY
WIRE FMHISTORY
\`\`\`
`)
