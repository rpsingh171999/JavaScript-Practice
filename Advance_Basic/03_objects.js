// const obj1 = new Object();  // singleton Object
const user = {};    // non-singleton object

user.id = "12345";
user.name = "RPSingh";
user.isLoggedIn = true;

// console.log(user);
const anotherUser = {
    email: "rpsingh@yopmail.com",
    usernames: {
        fullname: {
            firstname: "Ravinder",
            middlename: "Partap",
            lastname: "Singh"
        }
    }
}

// ? means if ur object don't have that key then it will not give you any exception
// console.log(anotherUser.username?.fullname.firstname);

const obj1 = {1: "A", 2: "B"};
const obj2 = {3: "C", 4: "D"};

// const rsltObj = {obj1, obj2};   // It takes all the objects like a key and creates a new object.

// const rsltObj = Object.assign({}, obj1, obj2); // It combines all the objects and asign to first object

const rsltObj = {...obj1, ...obj2};  // spread all objects data into store in new object

// console.log(rsltObj);

const users = [
    {
        id : 1,
        email: "test1@yopmail.com"
    },
    {
        id : 2,
        email: "test2@yopmail.com"
    },
    {
        id : 3,
        email: "test3@yopmail.com"
    },
    {
        id : 4,
        email: "test4@yopmail.com"
    },
]

// console.log(users[0].email);

// console.log(Object.keys(users));

// console.log(Object.values(users));

// console.log(Object.entries(users));

const course = {
    cousrName: "JS in Hindi",
    coursrPrice: "999",
    courseInstructor: "R P Singh"
}

// console.log(course.courseInstructor)

// const {coursrPrice} = course
// console.log(coursrPrice);

const {coursrPrice : price} = course
console.log(price);