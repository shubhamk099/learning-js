/**
 * Basic comparison operators
 */

console.log(3 > 4); // false
console.log(3 < 4); // true
console.log(4 >= 3); // true
console.log(4 <= 3); // false
console.log(3 == 3); // true

/**
 * Hear the string will be converted to number, then it is compared
 */
console.log("2" > 1); // true
console.log("02" > 1); // true

/**
 * In javascript the comparison operator(<, >, >=, <=) and
 * equality operator works differently, the comparison operator will convert null to 0
 * but the comparsion operator will not.
 */

console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(null == 0); // false

/**
 * In case of undefined, the value will always be false, it is not converted to anything
 */

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
console.log(undefined == 0); // false

/**
 * Avoid these types of comparsions
 */

/**
 * JavaScript strict equality operator : it also checks for the type as well
 */

console.log("2" === 2); // false
