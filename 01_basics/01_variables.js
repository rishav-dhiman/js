const accountId = 123456
let accountEmail = "dhimanrishav2004@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "OK@gmail.com"
accountPassword = "54321"
accountCity = "Shimla"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
