/* 
    !Array
        - Denoted with square brackets []
        - Indices starts at zero 0
        - Using a property called "length", we can find the sum of the data stored.
*/

// ---------------------------------------------------
let list = ['milk', 'bread', 'chicken', 'coffee' ];
//            0         1        2          3

console.log(list[2]); // this selects the second string in the array.
console.log(list.length) // 4 (as in, 4 items)

list[0] = 'chocolate milk'; // selecting value 0 in array
console.log(list); // !changing it to chocolate milk.


// -----------------------------------------------------

let avengers = [
    'Nick', 2, false, 'Steve', 'Bruce' [
        'tony', 8, true
    ]
];

console.log(typeof avengers); // this tells us that avengers is an object
console.log(avengers instanceof Array); // tells us that "true" this is an instance of an array (it is also an array).

/* 
Using the console.log();
    - target "Bruce"
    - target "true"
    - using string interolation, return "Hello, Nick" and "Hello, Tony"
*/

console.log(avengers[4]); // Bruce
console.log(avengers[5][2]); // true the five refers to the array within the array, and 2 selects the "true"
console.log(`Hello, ${avengers[0]}. Hello ${avengers[5][0]}`);

// -----------------------------------------------------
// ! Array Methods.


// * .push() (added item to end)
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.push('pizza'); // does need some argument to push or add to array. Adds to end of the array.
console.log('PUSH:', food); // outcome below.

// PUSH: [
//     'Pecan pie',
//     'Shrimp',
//     'Quesadilla',
//     'Cheese cake',
//     'Hotdog',
//     'pizza'
//   ]


// * .splice(target position, how many removed, replace with what)

food.splice(1,1,'Tacos' ); // shrimp is removed.
console.log('SPLICE: ', food); // this replaces shrimp with tacos.

food.splice(1,0,'Steak'); // nothing is removed here. (the 0 indicates this)
console.log('SPLICE 2:', food); // this ADDS steak right before tacos. (nothing is removed.)


//   SPLICE:  [
//     'Pecan pie',
//     'Tacos',
//     'Quesadilla',
//     'Cheese cake',
//     'Hotdog',
//     'pizza'
//   ]
//   SPLICE 2: [
//     'Pecan pie',
//     'Steak',
//     'Tacos',
//     'Quesadilla',
//     'Cheese cake',
//     'Hotdog',
//     'pizza'
//   ]

// * .pop() (removes whatever item is at the end of the array.)

food.pop(); // no arguments required for pop.
console.log('POP:', food);

// * .shift() // removes item from the beginning of array
food.shift(); 
console.log("SHIFT: ", food);


// * .unshift() // (add item, [optional])
food.unshift('Hamburger', 'Salad');
console.log('UNSHIFT: ', food);

// * .toString()
let rgb = ['red','green','blue'];
console.log(typeof rgb.toString()); // string
console.log(typeof rgb); // object



// Methods Reference.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator
