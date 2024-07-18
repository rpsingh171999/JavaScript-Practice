// Conversion of Boolean into Number

let isBoolean = true
let isNumber = Number(isBoolean)
console.log(isNumber); // 1

// Conversion of Number into Boolean
let isNumber1 = 1
let isBoolean1 = Boolean(isNumber1)
console.log(isBoolean1);    // true

// Conversion of String into Boolean
let isString = "Ravinder"
let isBoolean2 = Boolean(isString)
console.log(isBoolean2);    // true

let isString1 = ""
let isBoolean3 = Boolean(isString1)
console.log(isBoolean3);    // false

// Conversion of Boolean into String
let isBoolean4 = true
let isString2 = String(isBoolean4)
console.log(isString2);     // true

// Conversion of String into Number 
let isString3 = "123"
let isNumber2 = Number(isString3)
console.log(isNumber2);     // 123

let isString4 = "123Abc"
let isNumber3 = Number(isString4)
console.log(isNumber3);     // NaN