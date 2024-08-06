const user = {
    userName: "R P Singh.",

    welcomeMsg: function() {
        // here this keyword gives the local/current object where it's called
        console.log(this);
    }
}

user.welcomeMsg();
// Here is this keyword gives blank object in node but in browser console it gives differnt value
console.log(this);

// This keyword is only working in object not in function aur outside the object
const value = function() {
    console.log(this);
}

// Arrow Function
const sum =  (num1, num2) => {
    return num1 + num2;
}

console.log(sum(5, 12));

const sum1 =  (num1, num2) => num1 + num2;

console.log(sum1(5, 123));

const sum2 =  (num1, num2) => (num1 + num2);

console.log(sum2(5, 13));

// const sum3 =  (num1, num2) => {name: "R P Singh"};  // Undefined

const sum3 =  (num1, num2) => ({name: "R P Singh"});  // Will give Object

console.log(sum3(5, 23));