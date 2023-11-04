// our simpsons object (copied from other thing)
let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "season one": [
            {
                episode_title: "Simpsons Roasting on an Open Fire",
                aired: '1989-12-17'
            },
            {
                episode_title: "Bart the Genius",
                aired: '1990-01-01'
            },
        ],
        "season two": [/*  */],
        "season three": [/*  */]
    },
    currently_running: true,
}

// Object.keys() - returns back an array of keys
// console.log(Object.keys(theSimpsons));
const listKeys = Object.keys(theSimpsons);
// console.log(listKeys);

//* Object.values() - returns an array of values
// console.log(Object.values(theSimpsons));
// console.log(Object.values(theSimpsons.seasons));

//* Object.assign() - copies all enumerable properties from one or more sources.

let objOne = {name: 'Bob', age:50};
let objTwo = {work: 'Manager'};

let newObject = Object.assign(objOne, objTwo);
// console.log(newObject);
// console.log(newObject.name);

let futurama = Object.assign(theSimpsons);
console.log("Futurama: ", futurama); // basically created a variable that populated the existing info from the simpsons thing. (using a class would be preferable to accomplish this)

//* delete object.key

// removes a particular key inside our object

console.log('BEFORE:', Object.keys(futurama));
delete futurama.currently_running;
console.log('AFTER:', Object.keys(futurama));

// BEFORE: [ 'id', 'est', 'genre', 'seasons', 'currently_running' ]
// AFTER: [ 'id', 'est', 'genre', 'seasons' ]

// https://www.w3schools.com/js/js_object_definition.asp


// * Object.freeze()
Object.freeze(theSimpsons); // the simpsons is the object we are targeting.
theSimpsons.id = 2;
console.log(theSimpsons.id);



