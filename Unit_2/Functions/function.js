/*
! Functions
    -Block of code that performs a particular task.
    -Simplified programs that run a task when invoked.
*/

/* 
! Function Declaration
    (1)      (2)
    function hi() {

        console.log('Hi');
    }

    1: Keyword
    2: Name of the function
        -Parenthesis is for parameter
*/
function hi() {
    console.log('Hi!');
}

/* 
! Function Expression
    (1)
    let hey = function hi() {
        console.log('Hi!');
    }

    1: The variable "Hey" is now representative of the function "hi".

    * does NOT get hoisted
*/

let hey = function hello() {  // Here we put a function inside of a variable so we can easily call upon it later.
    console.log('Hi again')
}

/* 
    function hi() {
        console.log('hi');
    }

     (1)
    hi();

    1: This is how we call, or "invoke" our function.
*/ 

function greetings() {
    console.log('Hello');
}

greetings;
greetings();
console.log(greetings); // [Function: greetings]  <= this tells me that that greetings is a function, that's all it's saying.

// Create a function that, when invoked lists out the numbers 1-10. name our function "counting".

function counting() {
    for(let x = 1; x <= 10; x++) {
        console.log(x)
    }
}

counting(); // this invokes the function. (we could even put it multiple times to make it so the function is invoked multiple times. Rather than writing out the previous code multiple times.)

/* 
counting();
counting();
counting();
counting();
*/

// Given an array, create a function that lists out the values individually. Name the function arrList.

let arr = ['This', 'is', 'really', 'cool']; // our array

let arrList = function arrList() { // our function.
    for(item of arr) { // our for of loop
        console.log(item);
    }
}

arrList(); 

let dogArray = [
    "Husky",
    "Shih Tzu",
    "Corgi",
    "Catahoula",
    "Shiba",
    "Golden Retriever"
];

function callDogs() {
    console.log(dogArray);
    for(dog in dogArray) { // now trying a for in loop
        console.log(dogArray[dog])
        console.log(`${dogArray[dog]} is in spot ${dog}`);
    }
}

callDogs() 

/* // gives each individual value within the dog array
Husky
Shih Tzu
Corgi
Catahoula
Shiba
Golden Retriever
*/