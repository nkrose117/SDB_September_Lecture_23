// !Iteration Methods
/* 
    - They do not destroy the original array
    - take in callback function (a function that is assumed to be invoked)
    - loop through arrays
    - must a return
*/

let fruits = ['apple', 'pear','mango','orange','pineapple']; // Must have an array for filter to work.

const filteredFruit = fruits.filter(fruit => { // this will run through each position in the array
    console.log('Parameter: ', fruit);
    let result = fruit !== 'mango'; // store anything that isn't 'mango'
    console.log('Inside Filter:', result);
    return result; // returns anything that isn't mango (anything that's true) (as in, true that it isn't mango)
});

console.log(filteredFruit);

// Parameter: apple   // (1st console.log)
// Inside Filter: true
// Parameter: pear
// Inside Filter: true
// Parameter: mango

// Inside Filter: false   // (2nd console.log)
// Parameter: orange
// Inside Filter: true
// Parameter: pineapple
// Inside Filter: true

// [ 'apple', 'pear', 'orange', 'pineapple' ]    // (return.result)



//! see what's included

let fruits = ['apple', 'pear','mango','orange','pineapple']; // Must have an array for filter to work.

// *Arrow function with Block Body
const filteredFruit = fruits.filter(fruit => { // this will run through each position in the array
    console.log('Parameter:', fruit)
    let result = fruit !== 'mango'; // store anything that isn't 'mango'
    console.log('Inside Filter:', result);
    return result; // returns anything that isn't mango (anything that's true) (as in, true that it isn't mango)
});

let fruit1 = 'pineapple';
console.log(fruit1[0]); // "p"
console.log(fruit1.includes('apple')); // we can isolate part of a string (apple is part of pineapple)


// * Arrow function w/ concise body
const filteredFruit2 = fruits.filter(fruit => !fruit.includes('apple')); //this asks, does this string include "apple", fruit refers to each of the fruit.
console.log(filteredFruit2);   
// [ 'pear', 'mango', 'orange' ]   (result) (anything that doesn't include apple) 

// Function Example (writing function as a declarative) (callback functions are different for this one) 
function removeMango(fruit) { // doing this function outside of the original function allows us to call upon it elsewhere 
    console.log(fruit);
    console.log(results);
    return fruit !== 'mango'
}

const filterFruit3 = fruits.filter(removeMango);
console.log('Filtered:', filterFruit3); // (mangoes are removed)
console.log('Original:', fruits); // all original fruits are still there from array (we still have access to original array)

// each of these examples requires the original function to be highlighted in order to work.


//! Challenge:
/*  How do you remove the 5's from the array? Store it in a new variable and console.log that variable. */        

let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5];

function removeFive(num) {
    return num !== 5;
}

const noFives = myNumberArray.filter(removeFive)
console.log(noFives);

// would a value exist even if nothing was written there? 


// ! Day 2 of this topic

// This filter invokes a function. in this case an arrow function. This uses a Callback Function.

let movies = [
    { name: "Top Gun 2", category: 'Action' },
    { name: "Scary Movie 5", category: 'Horror' },
];

movies.push({ name: "It", category: 'Horror' });
movies.push({ name: "Get Out", category: 'Horror' });
movies.push({ name: "Taken", category: 'Action' });

const actionMovies = movies.filter(movie => movie.category === 'Action');
const horrorMovies = movies.filter(movie => movie.category === 'Horror');

console.log('Horror: ', horrorMovies);
console.log('Action: ', actionMovies);

/* 
Horror:  [
  { name: 'Scary Movie 5', category: 'Horror' },
  { name: 'It', category: 'Horror' },
  { name: 'Get Out', category: 'Horror' }
]
Action:  [
  { name: 'Top Gun 2', category: 'Action' },
  { name: 'Taken', category: 'Action' }
]
*/

// ! .forEach() // callback function?
let newFoodList = [
    'apple', 'pear','mushroom','cheese','peach'
];

for(let i = 0; i < newFoodList.length; i++) {
    console.log(newFoodList[i])
}

newFoodList.forEach(item => console.log('ForEach: ', item)); // this says, for each item do (SOMETHING).
/* 
ForEach:  apple
ForEach:  pear
ForEach:  mushroom
ForEach:  cheese
ForEach:  peach
*/

newFoodList.forEach((item, i) => {
    console.log('ForEach: ', item, 'index: ', item, "index: ", i);
});

//! Challenge 
/*
    - (Go look at MDN docs to remind you):
    - Create an array containing movies titles
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movieList = ["Matrix", "Babe", "Little Mermaid", "The Two Towers"];

movieList.push('Aladdin'); //adds aladdin to end of the list
movieList.splice(1,2,'Barbie'); // This replaces a string with a new one.

movieList.forEach((item, index) => console.log('Movie: ', item, index)); //concise body arrow function

/* 
Movie:  Matrix 0
Movie:  Barbie 1
Movie:  The Two Towers 2
Movie:  Aladdin 3
*/

// ! .find()
let tmnt= [
    'Mikey', 'Donnie', 'Leo', 'Splinter', 'Shredder', 'Baxter'
];

let character = 'Leo';
console.log('Find: ', tmnt.find(c => c == character)); // Find: Leo

character = 'April';
console.log('Find Again: ', tmnt.find(c => c == character)); // Undefined.

character = 'splinter';
tmnt.find((c,i) => console.log('Index: ', c == character, "index", i));

/* 
Find:  Leo
Find Again:  undefined
Index:  false index 0
Index:  false index 1
Index:  false index 2
Index:  false index 3
Index:  false index 4
Index:  false index 5
*/

//! .map()
/* 
    - Similar to a .forEach()
    - takes a callback function (cb)

*/
let numArray = [];
let fizzBuzzArray = [];

for(let i = 0; i < 101; i++) {
    numArray.push(i); // this is adding all of the numbers to the array.
}
console.log(numArray);

numArray.map(x => {
    if(x % 15 === 0) {
        fizzBuzzArray.push(x); // if divisible by 15 push it to the array.
    };
});

console.log(fizzBuzzArray); 

/* 
[
   0, 15, 30, 45,
  60, 75, 90
]
*/

//! challenge

/*
 - First check if you are working with an array
    - Using a method, flip the values within the array 
    (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
    
    hint: 
       - search something like "arrays", "javascript", "reverse"
       - look in your notes to see how we can check if something is an array
*/

let arr = [1, 2, 3, 4, 5];

// My answer
// const reversed = arr.reverse();
// console.log('reversed:', reversed);

// console.log(typeof arr);
// console.log(Array.isArray(arr));

if(arr instanceof Array === true) {
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num));
} else {
    console.log('not an array');
}

/* Reference
https://codeburst.io/javascript-map-vs-foreach-f38111822c0f
*/



