/* 
    ? Loops

    Loops loop through a block of code a number of times.

    !If stuck in an accidental infinitely running loop ctrl-c will stop a loop. (maybe ctrl-z?) or the red stop button from "code runner".
*/

/* 
? For Loops:
    They take in 3 parameters(the things within the ( ) of a statement.
    - initial expression (starting value)
    - condition (to be met)
    _ increment expression (is it increasing or decreasing?)
    

    ! Structure:
    for (initial expression ; condition ; increment expression) {
        ...code block of logic to run
    }
*/ 


// Start at 0 and increase to 10
for ( i = 0; i <= 10; i++ ) {
    console.log(i);
}

console.log("Finished for loop!"); 
/* 
0      ^ ^
1
2
3
4
5
6
7
8
9
10
Finished for loop!
*/

// Start at 0, increase by 2 to 20.
for ( i = 0; i <= 20; i += 2 ) {
    console.log(i);
    // console.log("You get a 50% coupon!") 
}

// Start at 10 and decrease by 1 till we reach 0.

for ( i = 10; i >= 0; i -= 1) { // can also write i -- for the increment expression for this.
    console.log(i);
}

// If using a straight return (one item is returned from a statement) we don't need to use curly brackets.
for ( i = 5; i >= 0; i-- ) console.log(i); // 5,4,3,2,1,0

// Spell out a word letter for letter
let firstName = "Michael"; 

console.log(firstName.length); // 7

for ( let i = 0; i < firstName.length; i++ ) {
    console.log(i, firstName[i]);
}

// Change the value of a variable with a for loop
let sum = 0;

console.log(`Sum equals ${sum} before the for loop.`)

for ( let i = 1; i <= 5; i++ ) {
    console.log("Before: ", sum);
    sum += i;
    console.log("After: ", sum);
}

console.log(`Sum equals ${sum} after the for loop.`) 
/* Sum equals 0 before the for loop.
Before:  0
After:  1
Before:  1
After:  3
Before:  3
After:  6
Before:  6
After:  10
Before:  10
After:  15
Sum equals 15 after the for loop.*/

/* 
    ? For In Loops

    - Loop through the properties of an object

    !Structure:
    for ( key in object ) {
        ...code to run
    }

    ^key is a random variable name of our choice. object refers to the name of the object we are targeting.
*/

let student = {
    name: "Harry",
    animal: "owl",
    degree: "magic",
    boyWhoLived: true
}

console.log(student.name); // Harry (using dot notation)
console.log(student["name"]); // Harry (using square brackets)

for ( item in student ) { // we chose the word "item" but it could also be "pizza". Doesn't matter.
    console.log(item); // will log each key name in the object
    console.log(student[item]); // log each value of each key
}


// Array is considered an object by JS.

let catArray = [
    "tabby",
    "maine coon",
    "rag doll",
    "russian gray"
];

for ( cat in catArray ) {
    console.log(cat);
    console.log(catArray[cat]);
}

/* 
    !For In loops can be used on objects and arrays.
    But if array index order is important, it's better to use a:
        -for loop
        -for of loop
        -Array.forEach()
*/


/* 
    ? For Of Loop
    - Loops through the values of an iterable object
        iterable - an object that has iterable properties(stuff it can count/go through)

        !Structure:
        for ( variable of iterableData ) {
            ...code to execute/run
        }

        ^Variable is any word we choose to use, iterableData is the name of any iterable "thing"

        Can loop over Arrays, Strings, etc.
        
    */ 

        // !for of loops do not play well with Objects (they cant iterate over them, example below.)
        // let student2 = {
        //     name: "Harry",
        //     animal: "owl",
        //     degree: "magic",
        //     boyWhoLived: true
        // }

        // for (item of student2); {
        //     console.log(item);
        // }

let dogArray = [
    "Husky",
    "Shih Tzu",
    "Corgi",
    "Catahoula",
    "Shiba",
    "Golden retriever"
]

// for ( pupper of dogArray ) {
//     console.log("For of Loop: ", pupper); 
// }

for ( doggo of dogArray ) {
    // We will use an if conditional to make a separate console.log for Husky
    if (doggo === "Husky") {
        console.log(`I think the ${doggo} is yelling for his breakfast!`)
    } else if ( doggo === "Shiba") {
        console.log(`The ${doggo} is sitting there judging everyone.`)
    }
    
    else {
        console.log(`The ${doggo} is sitting there quietly.`)
    }
}




// Practice

for (i = 2; i <= 20; i++) {
    console.log(i);
}

// this gave numbers from 1-20.

for (let i = 1; i <= 30; i++){
    if (i % 15 == 0){
        console.log('turtle monkey')
    } else if (i % 3 == 0){
        console.log('monkey')
    } else if (i % 5 == 0){
        console.log('turtle')
    } else {
        console.log(i)
    }
}


   


