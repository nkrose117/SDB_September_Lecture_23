/* 
    CONDITIONALS
    - It's a way for us (as devs) to ask a question and provide a response depending on the condition of what we're asking.
    - Devs == Inventors: we design and ask the question but also determine the answer options.
    - Conditionals focus on a thing being true or being false.
    - Evaluates an expression and responds if it is true.
        - Falsy
                - false
                - 0
                - empty strings
                - null
                - undefined
                - NaN (not a number
*/

// IF Conditional Statements

let isOn = true; // if false, nothing will appear...yet.

if (isOn == true) {
    console.log('The light is on in the room!');
};

/* 
    Structure:
    if(condition evaluated) {
        code that runs if expression is true
    }
*/

if (isOn) { // since isOn was already made true then it will still print the message.
    console.log('The light is on, heck yeah!');
}

let isOff = false;

if (isOff == false) {
    console.log('The light is off...')
}

let weather = 68;

if (weather < 70) {
    console.log('Some might need to grab a jacket.')
}

// IF ELSE Conditional Statement

//  let temp = 60; // I will grab a sweater.

let temp = 75;

if (temp < 70) {
    console.log('I will grab a sweater.')
} else {
    console.log('Oh boy it is shorts weather!');
}

// AND, &&, check to see if both are equal

let username = 'myUserName';
let password = '1235'; // to see false else statement run '1235'.

if (username == 'myUserName' && password == '1234') { // && checking if both things are true.
    console.log('Welcome user! You are logged in.')
} else {
    console.log('Login error, begone!')
}

// OR,  ||,  checks if one statement is true OR the other.

let email = 'myemail@email.com';
let uName = 'coolCat100';

if ( email ==  'myemail@email.com'  || uName == 'coolCat100' ) { // || checks if one or the other was correct. So even if the email was wrong, if the username was right it will still print 'Welcome user!'.
    console.log('Welcome user!')
} else {
    console.log('Login info was incorrect')
}

// NOT, !

let rain = true;

if (!rain) { //if rain is false-->
    console.log('It is a nice sunny day') //run this. 
} 

// longer version of the above

if (rain != true) {
    console.log('It is a nice sunny day.')
}

// ELSE IF Conditional Statement
// This can let us check more than one condition/choice (asking multiple questions)
// Once one of the conditions is met (results in true) it will exit the statement/code block.

let grade = 65; // if the number fails the first two conditionals it will print the last one, in this case.

if (grade >= 75) {
    console.log('This grade is passing! Great job!')
} else if (grade >= 69) {
    console.log('Not quite passing, reach out to the teacher')
} else {
    console.log('Needs to be reworked and resubmitted')
}