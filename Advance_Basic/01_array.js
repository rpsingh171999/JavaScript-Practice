const arr1 = [1, 2, 3, 4, 5, 6];

// Slice copy the vlaue into another array
// console.log("Before use of slice arr1 = ", arr1);
const arr2 = arr1.slice(1, 4);
// console.log("arr2 = ", arr2);
// console.log("after use of slice arr1 = ", arr1);

// Splice cut the vlaue into another array
// console.log("Before use of splice arr1 = ", arr1);
const arr3 = arr1.splice(1, 4);
// console.log("arr3 = ", arr3);
// console.log("after use of splice arr1 = ", arr1);



const newArr = [1, 2, 3, 4, 5, 6];

newArr.push(7); // add the value at the end of array
newArr.unshift(0); // add the value at the bigening of an array

// console.log("newArr = ", newArr);

newArr.pop();   // remove the value from the end of an array
newArr.shift(); // remove the value from the bigenning of an array
// console.log("newArr = ", newArr);

const strArr = ["A", "B"];
const strArr1 = ["C", "D"];

const rsltArr = strArr.concat(strArr1); // Concat two array and return a new array

const rsltArr1 = [...strArr, ...strArr1]; // spread all the arrays' elements return a new array

// console.log("rsltArr = ", rsltArr);
// console.log("rsltArr1 = ", rsltArr1);


const anthrArr = [0, 1, [2, 3], 4, [5, 6, [7, 8]]];

// flat use for spread all level of array into 1d array. It take a parameter which level of array you want to spread
const sprdAnthrArr = anthrArr.flat(Infinity);

// console.log("sprdAnthrArr = ", sprdAnthrArr);

// To check a value is array or not
console.log(Array.isArray("Rpsingh"));

// Convert a value into array
console.log(Array.from("Rpsingh"));

console.log(Array.from({name: "Rpsingh"}));

let scr1 = 100;
let scr2 = 200;
let scr3 = 300;

console.log(Array.of(scr1, scr2, scr3));