// Immediately Invoked Function Expression (IIFE) => It's use to execute a function immediately. It's also use to prevent polution of Global variable's scope.
// In JS generally semicolon use automatically. But if you are using more than one IIFE function continiously than you have to use semicolon mannually at the end of the every IFFE Function.

(function myIIFEFunnction()
{
    console.log("Test");
})();

( () => {
    console.log("Test 2.")
})();

( (db) => {
    console.log(`Test 3. ${db}`)
})('localhost')