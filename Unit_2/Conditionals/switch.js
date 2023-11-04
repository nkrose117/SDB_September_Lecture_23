/* 
    Switch Conditional Statement
    - A switch statement executes/runs a block of code depending on different cases.
    - The switch is used together with a break or a default keyword or both.
        - These are both optional
        - Break: keyword that breaks out of the switch block. If a break is omitted/not added the next code block in the switch will run (run as well).
        - Default: keyword that specifies code to run if no case matches. (Think what our else did in if statements).
*/

let officeCharacter = "Pam"; // if a break; is omitted, code will run through to the next break;

switch (officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break; 
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`); // Interpolation:here a string is added into another string. In this case, (if you enter pam into the top line) she is not listed so code will run the default and insert Pam's name.  
}

// We can use backticks `  ` to create string that can use the value of variables!
// The variables must be surrounded by ${ }, cash money curly boys.

// let num = -40; // did not work
// let num = 5; // case 2 ran
let num = -3; // case 1 ran

switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work');
    
}


// Practice

let animal = "monkey" 

switch (animal) {
    case "monkey":
        console.log('monkey is a turtle');
        break;
    case "sloth":
        console.log('sloth is a turtle');
        break;
    case "turtle":
        console.log('turtle is a turtle!');
        break;
    default:
        console.log('Im sorry animal, I dont know what you are.')
}