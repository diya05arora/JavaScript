const accountId = 144553
let accountEmail = "diya@google.com"
var accountPasswd = "12345"
accountCity = "Jaipur" //not a good method
let accountState;

// accountId=2 //not allowed

accountEmail="abc@gmail.com"
accountPasswd="5639"
accountCity="Delhi"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPasswd, accountCity, accountState]);