// Singeton object :=> when we create an object like contructor then it always be a singleton object
// Object.create // Example of singleton object

// when an object is create like literls then it's never be a singleton object

// how add Symbol type value in an object
const designation = Symbol();

const user = {
    name: "RPSingh",
    "full name": "Ravinder Partap Singh",
    [designation]: "Software Developer",
    email: "rpsingh@yopmail.com",
    mobile: 8619751803,
    isLoggedIn: false
}

console.log(user.email);    // it's an old way and have some restriction (like we can't access full name from user object)
console.log(user["name"]);
console.log(user["full name"]);
console.log(user[designation]);

//  Object.freeze(user); // freeze is use to restrict an object to changes their value

user.greeting = function() {
    console.log(`He Mr. ${this["full name"]}.`);
}

// console.log(user.greeting());
user.greeting();