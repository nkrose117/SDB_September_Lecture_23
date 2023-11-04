/* Array Destructuring
    - syntax is on the left side of the assignment operator
    - Great for pulling info out of an array and assigning data to it's own variable
    - We are taking complex data and isolating it down to be able to reference individual aspects of the code so we can reference them later on. (bigger picture)

*/

const fullName = ['Jane', 'Doe'];

// Here's one way to pull out the names
const fName = fullName[0];
const lName = fullName[1];
// console.log...etc

// !This is how to simplify the above const's (destructuring, array reference is on the right.) The position within the brackets corresponds to the string being referenced in original const.
const [firstName, lastName] = fullName; // two variables come out of this first. and last name. This looks like an array but we are actually creating variables based off an array, and these are the variables we want to create.

console.log(firstName, lastName); // Jane Doe

console.log(`Hello Mrs. ${lastName}`); // Hello Mrs. Doe



// !Spread Operator
/* 
    -Denoted by three consecutive periods: ...
    -Pulls out all elements of an array and gives them to you as standalone list of elements.

*Concept of the spread operator - NOT syntax

const fullName = [ 'Rocket', 'Racoon' ];

...fullName // 'Rocket', 'Racoon'

const elements = ...fullName
*/

const copiedFullName = [...fullName];
// const copiedFullName = [fullName]; // this just gives us an array within an array. (no elipses)
console.log(copiedFullName); // [ 'Jane', 'Doe' ]

fullName.push('Mrs.');
console.log(fullName, copiedFullName); // [ 'Jane', 'Doe', 'Mrs.' ] [ 'Jane', 'Doe' ]


// *Math
// console.log(Math.min(1,5,-3)); // -3

const prices = [10.99, 5.99, 3.99, 6.59];
// console.log(Math.min(prices)); // NaN

console.log(Math.min(...prices)); // we added the elipses and now we get: "3.99"
// the elipses pulls out each element so that we can individualize each value and convert it to something we can use. Notice the above examples of when elipses is not used. Note the difference in results.



//! Rest 

// here's an example with three strings and an object

const fullName2 = [
    'Jane', 'Doe', 'Mrs.', {month: 3, date: 22, year: 1973},
    'testOne', 2, 'test3', 4, true, false
];

//this combines destructuring and the Rest.
// Remember that the position within the brackets corresponds to position within the original variables brackets. that's why fName came back as Jane and lName came back as Doe. 

const [ fName, lName, , , ...otherInfo ] = fullName2; // saved a screen shot of how the commas work. at oct 19 7:11.
console.log(fName); // Jane
console.log(lName); // Doe
console.log(otherInfo); // see below // after adding the three commas to the const below the original code we get Jane / Doe / [ 'testOne', 2, 'test3', 4, true, false ]

/* otherInfo console.log result
[
  'Mrs.',
  { month: 3, date: 22, year: 1973 },
  'testOne',
  2,
  'test3',
  4,
  true,
  false
]
*/














