let x = 12; //This x will be defined second in the terminal (it's outside the function)

function scope() {
    let x = 33; // this x will be defined first because it is in the function
    // console.log(x);
}

scope(); // this calls on the functions outcome
// console.log(x); //this calls on the x defined outside the codeblock (scope)

// Global scope vs. Local scope. (all the code vs a code block)


let y = 12;

function scope2() {
    y = 33; // there is no "let"
    console.log(y);
}

scope2();
console.log(y);

/* 
    Variable Keywords:
    - const: cannot be reassigned. (example: variable is associated with a particular location, or element, anything we never want to change.)
    - var: Scoped to nearest function. // can be reassigned (its purpose)
    - let: scoped to the nearest enclosing block // can be reassinged. (its purpose)
*/

//* var
var myVariable = 12;

function varTest() {
    var myVariable = 33;

    if(true) {
        var myVariable = 45;
        console.log(`Var - Within If:, ${myVariable}`);
    }
    console.log(`Var - Outside If: ${myVariable}`);
}

varTest();
console.log(`Var - Outside Function: ${myVariable}`);



// *let
let letVariable = 12;

function letTest() {
    let letVariable = 33;

    console.log(`let - Outside If: ${letVariable}`);

    if(true) {
        let letVariable = 45;
        console.log(`let - Within If: ${letVariable}`);
    }
    console.log(`let - Outside If: ${letVariable}`);
}

letTest();
console.log(`let - Outside Function: ${letVariable}`);


//* const

function constTest() {
    const scope = 1;

    if(true) {
        const scope = 2;
        console.log(scope);
    }

    console.log(scope);
}

constTest() // 2, 1

