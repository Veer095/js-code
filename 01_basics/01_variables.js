const AccountID = 12542
let Email = "veer@google.com"
var AccountPassword = "34095"
Accountcity = "jaipur"

// AccountID = 2 // we cann't change the value of const variable

Email = "h2@mo.com"
AccountPassword = "554455"
Accountcity = "kota"

console.log(AccountID);

/* Prefer not to use var 
because of issue in block scope and functinal scope
*/ 

console.table([Email, AccountPassword, Accountcity]);
