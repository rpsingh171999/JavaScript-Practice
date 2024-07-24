// There are two types of data types 
// 1. Primitive Data Types (Call By Value) 
// 2. Non-Primitives Data Types (Call By Reference)


const temp = null
let userEmail;

const id = Symbol('123')    // Symbol Type
const id1 = Symbol('123')   // Symbol Type

console.log(id === id1)     // false
console.log(id == id1)      // false

const bigIntNum = 763871623873182n // (Place the n at the end of number to make any number as bigInt value )

const myFun = function() {
    console.log();
}

// Primitive Data Type (Use Stack Memory)
// Non-Primitive Data Types (Use Heap Memory)
// Stack always give a copy of original value to another variable
// Heap always give reference of original value to another variable

// Example of Primitive or Stack Memory allocation
let myName= "R P Singh";
let nickName = myName;
nickName = "R P";

console.log(myName);
console.log(nickName);

// Example of Non-Primitive or Heap Memory allocation
let user1 = {
    email: "user1@yopmail.com",
    upi: "user@ybl"
}

let user2 = user1;

console.log(user1.email);
console.log(user2.email);

user2.email = "user2@yopmail.com";

console.log("After Updation ....................");
console.log(user1.email);
console.log(user2.email);