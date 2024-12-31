const accountId=144553
let accountEmail = "riddhi@gmail.com"
var accountPassword = "12345"
accountCity="Nagpur"
let accountState;

accountEmail="hc@hc.com"
accountPassword="212121"
accountCity = "jaipur"

// accountId =21 // not allowed

console.log(accountId);

/*
 prefer not to use var
 because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);