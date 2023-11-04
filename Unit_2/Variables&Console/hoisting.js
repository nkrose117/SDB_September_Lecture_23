/* 
! Hoisting
    - JS reads from top to bottom in two different passes.
        1st pass: 
            - Made by the compiler. This is where the hoisting is initiated.
            - Compiled for execution.
        2nd pass:
            - Variables are assigned.
            - Executes any hoisted code.
*/

let names = 'Everly';
console.log(names); // Everly

console.log(names); 
let names = 'Everly'; // error message.

// example
function b() {
    console.log("I have been hoisted!");
}

b(); //I have been hoisted!

//
b();

function b() {
    console.log("I have been hoisted!");
}


// arrow function example (they don't get hoisted)

// c();

let c = () => {
    console.log("Hoisted?")
}

c();

/* 
    Write a program that uses a loop, conditionals, and console log to print all the numbers from 1 to 30 inclusive and follows the rules below:

    1. For numbers evenly divisible by 3, print "Fizz" instead of the number.
    2. For numbers evenly divisible by 5, print "Buzz" instead of the number.
    3. For numbers that are evenly divisible by both 3 and 5, print "Fizz Buzz" instead of the number, making sure that the program still prints "Fizz" or "Buzz" for numbers divisible by only 3 or 5 and not both.
    4. For any number that is not divisible by either 3 or 5, print the number itself.
*/


// answer
for ( let i = 1; i <= 30; i++ ){
        if (i % 15 == 0) {
            console.log('Fizz Buzz')
    } else if(i % 3 === 0) {
        console.log('fizz')
    } else if(i % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}


/* 
! Challenge - Paycheck
    - Concepts to consider:
        - Hoisting & Scope
        - Arrow Functions & return
        - String Interpolation

    In this challenge, you'll create two different variables and two different functions.

    1. The first variable will be called "grossIncome" and store a numeric value of your choice (ex: 500).
    2. The second variable will be called "paycheck" and will eventually hold a string that will display the net income.

    3. The first function will need to be an arrow function that will calculate tax. 
        - Note: Typically, if you are on contract, this amount will be between 16 - 17% withheld. We'll use 17%.
        - What will be returned is the value of your second function.
    4. The second function will be an arrow function called "netIncome" that accepts an argument of whatever the tax amount was calculated. 
        - You will need to create a variable to hold the difference between the "grossIncome" and the value passed through the parameter.
            - This will display a string holding the total amount. ex: $415. *consider how we could display the dollar-sign.
    5. Print (console log) "payCheck" 

    Note: Because the math isn't the main focus of this challenge:
        - The tax value is: 
*               Gross * .17
        - The net total would be:
*               Gross - Tax Value 
*/
// var grossIncome = 500
// let moneys = (grossIncome) => {
//     const tax = grossIncome * .17;
//     return tax;
// }

// let tax = moneys(500)
// console.log(tax);

// define a function that calculates the tax on a given gross income value
const taxCalculator = (grossIncome) => {
    let tax = grossIncome * .17;
    return tax;
}

// define a function that calculates the net income given a gross income and a passed tax amount.
const netIncome = (taxAmount) => {
    let net = grossIncome - taxAmount;
    return net;
}


var grossIncome = 500.00
tax = taxCalculator(grossIncome)
const message = (`my tax on my gross income of $${grossIncome} is $${tax}`)
console.log(message)

var payCheck = netIncome(tax)
const messageTwo = (`The net for this paycheck is $${payCheck}`);
console.log(messageTwo);








    


    


    

    

    


