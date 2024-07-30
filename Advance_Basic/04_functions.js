function functionName() {
    console.log("Welcome to My Kingdom.");
}

functionName();

function newFun(userName)
{
    return `Hello Mr ${userName}, WelCome to our KingDom`;
}

console.log(newFun("R P Singh"));

function myNewFun(num) {
    return num;
}

function myNewFunWithRestOperator(...num) {
    return num;
}

console.log(myNewFun(100)); //  100

console.log(myNewFun(500, 200, 300)); //  500

console.log(myNewFunWithRestOperator(100, 200, 300, 400, 500)); //  100