var c = 500;
const a = 300;
let b = 400;

if(true)
{
    // const a = 30;
    // let b = 40;

    // We can't re-asign the value to a const variable
    // a = 30;

    b = 40;

    // Var type variable always overide previous value (Scope doesn't matter for Var)
    var c = 50;
}



// console.log(a);  // Giving Exception a is not defined if a is not defined outside the local scope
// console.log(b);  // Giving Exception b is not defined if b is not defined outside the local scope
// console.log(c);

function outerFun()
{
    const name = "R P Singh";

    console.log("Outer Function.");

    function innerFun()
    {
        const degree = "B.Tech";
        console.log("Inner Function = ", name);
    }
    // console.log("Degree = "+degree);
    innerFun();
}

// outerFun();

sqrtFun(5)

function sqrtFun(num)
{
    console.log(num**2);
}

// This type of function calling is called hoisting 
console.log(sqrtValue(25));
const sqrtValue = function(num)
{
    return num**2;
}