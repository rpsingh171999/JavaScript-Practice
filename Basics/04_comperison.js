console.log("2" > 2); // false (Auto converting String into Number)
console.log(3 > "2"); // true
console.log(2 > 2); // false

// JS is inconsistent language that's why in auto conversion of datatypes sometimes it's giving different value
// For Example


console.log(null > 0); // false (Here null value convert into a diff value )
console.log(null == 0); // false (Here null value convert into a diff value )
console.log(null >= 0); // true (Here null value convert into 0 )
console.log(null === 0); // false 

console.log(undefined > 0); // false (Here null value convert into a diff value )
console.log(undefined == 0); // false (Here null value convert into a diff value )
console.log(undefined >= 0); // false (Here null value convert into a diff value )
console.log(undefined === 0); // false 