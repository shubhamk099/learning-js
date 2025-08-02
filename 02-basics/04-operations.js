let value = 34;
let negValue = -value;
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3); // 2 power 3
console.log(8 % 2);

let str1 = "shubham";
let str2 = " kumar";
let str3 = str1 + str2;
console.log(str3);

console.log(1 + "2"); // "12" as string
console.log("2" + 1); // "21" as string
console.log(1 + 4 + "5"); // "55" as string
console.log("5" + 4 + 1); // "541" as string

console.log(+true); // 1
// console.log(true+); -> error

console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 5; // no recommended

let gameCounter = 100;
console.log(gameCounter++); // 100, then value incremented to 101
console.log(++gameCounter); // value incremented to 102, 102
