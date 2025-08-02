let score = "44abc";
console.log(typeof score); // string

let scoreInNum = Number(score);
console.log(typeof scoreInNum); // number
console.log(scoreInNum); // value will be NaN (not a number)

let marks = null;
console.log(typeof marks); // object

let marksInNum = Number(marks);
console.log(typeof marksInNum); // number
console.log(marksInNum); // value will be 0

let count = undefined;
console.log(typeof count); // undefined

let countInNum = Number(count);
console.log(typeof countInNum); // number
console.log(countInNum); // value will be NaN

let isLoggedIn = true;
console.log(typeof isLoggedIn); // boolean

let isLoggedInNum = Number(isLoggedIn);
console.log(typeof isLoggedInNum); // number
console.log(isLoggedInNum); // value will be 1

// "33" -> 33
// "33abc" -> NaN
// true -> 1
// flase -> 0

let isValid = "";
console.log(typeof isValid); // number

let isValidNum = Boolean(isValid);
console.log(typeof isValidNum); // boolean
console.log(isValidNum); // value will be true

// number != 0 -> true, number == 0 -> false
// string != "" -> true, string == "" -> false

let myValue = 34;
console.log(typeof myValue); // number

let myValueString = String(myValue);
console.log(typeof myValueString); // string
console.log(myValueString); // value will be "44" as string

// undefined, NaN, null, true/false these all are converted to string as is it
