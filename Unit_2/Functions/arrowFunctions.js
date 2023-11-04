/* 
    (1)         (2)
    let hi = () => {
        console.log(`hi`);
    }

    1: We need to set the fat arrow function to a variable.
    2: We use the "fat arrow" to signify its a function.

    - arrow functions (or fat arrow functions) were introduced in ES6. They are basically just a more concise way to write function expressions - NOT declarations.
        - Do NOT get hoisted.
*/

//! Concise Body
let hi = () => console.log(`Hi!`);


//! Block Body
let hello = () => {
    let greeting = "Hello";
    let moreInfo = "Steve"
    return `${greeting}, ${moreInfo}`;
}

console.log(hello()); // Hello, Steve

let apples1 = (x) => `There are ${x} apples.`;


let apples2 = (x) => {

return `There are ${x} apples.`;
}

console.log(apples1(1));
console.log(apples2(10));

let apples3 = x => `There are ${x} apples.`;

let apples4 = (x,y) => `There are ${x+y} apples`;

/* 
    let hi = () => {
        (1)
        return `hi`;
    })
        (2)         (3)
    let newName = hi();

    console.log(newName);

    1. The keyword that brings our data out of our function.
    2. We need a new variable to hold the value of the return.
    3. When called, the function becomes the value of the return.
*/

// ex
let firstName = fName => 'steve';
let myName = firstName();
console.log(myName);

// ex
function capitalizeName(name) {
    let capName = '';

    for(l in name) {
        // console.log(l)
        if(l == 0){
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }

    return capName;
}

const newName = capitalizeName('erIC');
console.log(newName);

// Challenge tip calculator - return the value, capture the returned.

/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable (console log)
*/

function tipCalc(subTotal) {
    let tip = subTotal * .2;
    let total = subTotal + tip;
    return total.toFixed(2);
}

let total = tipCalc(19.72)
console.log(total);


// Paycheck Challenge

let moneys = (grossIncome) => {
    let tax = grossIncome * .17;
    let net = grossIncome - tax;
    return net.toFixed(2);
}


var net = moneys(500)
console.log(net);

// -------------------------------------------------

const moneys = (grossIncome) => {
    let tax = grossIncome * .17;
    return tax.toFixed(2);
}


var grossIncome = moneys(500)
console.log(tax);









//------------------------- This one works.

const taxCalc = (grossIncome) => {
    let tax = grossIncome * .17;
    return tax;
}

let tax = taxCalc(500)
console.log(tax);



const taxCalculator = (grossIncome) => {
    let tax = grossIncome * .17;
    return tax;
    }

    var grossIncome = 500.00
    tax = taxCalculator(grossIncome)
    console.log(tax);








//  ----------------------------------

let payCheck = (grossIncome) => {
    return grossIncome-tax;
}

let final = (grossIncome, moneys)
console.log(final);

let net = (moneys)
console.log(net);







// --------------------- This one kind of works
function payCheck(grossIncome, tax) {
    let net = grossIncome - tax;
    return net;
}

let net = payCheck(500, 85)
console.log(net);




// ----------------------
let hi = () => {
    return `hi`;
}
    
let newName = hi();

console.log(newName);