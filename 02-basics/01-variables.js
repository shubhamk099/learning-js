// accountId is a constant (immutable)
const accountId = "5344344";

// accountEmail, accountPassword, accountCity, accountState are variables (mutable)
let accountEmail = "shubhamkkumar9797@gmail.com";
var accountPassword = "434355xyz";
accountCity = "Hazaribag"; // don't declare variables like that
let accountState; // default value will be undefined

// accountId = "48389393"; // TypeError : Assignment to constant variable

accountEmail = "shubhamkkumar9797@outlook.com";
accountPassword = "7869595pqr";
accountCity = "Ranchi";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);
// prints in tabular form with index

/*
    Don't use var, because of issue in block scope and functional scope
*/
