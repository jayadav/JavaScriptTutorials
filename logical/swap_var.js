// Swap two var without using third var

var a = 1;
var b = 3;

// Method 1
var [b, a] = [a, b];
console.log(b, a);

// Method 2
var a = 1;
var b = 3;
a = a + b;
b = a - b;
a = a - b;
console.log(b, a);

// Swap String Var
let str1 = "Hello";
let str2 = "World";

console.log(`Before swap: str1=${str1}, str2=${str2}`);

str1 = str1 + str2;
str2 = str1.slice(0, str2.length);
str1 = str1.slice(str2.length);
console.log(`Before swap: str1=${str1}, str2=${str2}`);
