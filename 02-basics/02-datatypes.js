"use strict"; // treat all JS code as newer version

// alert("Hello, World");
// ReferenceError: alert is not defined in nodeJS, it is available in browser

console.log(3 + 3); // readabilty is important

let username = "Shubham Kumar";
let age = 25;
let isLoggedIn = false;

/* Data Types in JS : 
    1.number
    2.bigInt
    3.string -> used to check uniqueness
    4.boolean
    5.symbol
    6.null -> it is a standalone value, that represent value is empty (it is an object)
    7.undefined -> default value (it is a type)
    8.object
*/

console.log(typeof username); // string
console.log(typeof age); // number
console.log(typeof true); // boolean
console.log(typeof null); // undefined
console.log(typeof undefined); // undefined

//  typeof() - is also allowed
