/* 
    Ternary Conditional Statement
    -Super cool syntax
    -A shortcut for writing an if/else, or else/if statement
    - (condition) ? true result : false result;
    -Ternaries REQUIRE the default/else catch all, has to have both true and false results for condition
*/

// let num = 6; // Yes! for both
let num = -1; // Nope! Nada! (This shows that these two examples are the same thing but the ternary is essentially shorthand.)

// Ternary: 

(num > 0) ? console.log('Yes!') : console.log('Nope!');

// Instead of:
if (num > 0) {
    console.log('Yes!')
} else {
    console.log('Nadda!')
}

// Ternary with two conditions vs Else If statement

// let x = 1; // results in all goodbyes in each example
// let x = -5; // all hi console logs
let x = 0; // all hello console logs


//Else if statement
if (x == 0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

// Ternary
(x == 0) ? console.log('Hello!') : (x < 0) ? console.log("Hi!") : console.log("Goodbye!");

// Other way to write ternary
let x = 12;

(x == 0) ? console.log("Hello! V2") 
: (x < 0) ? console.log("Hi! V2") 
: console.log("Goodbye! V2");


let numba = 11;

(numba<10) ? console.log('shweet!') : console.log('super shweet!');



