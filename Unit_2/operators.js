/*! Operators
    These are what help us manipulate our data so that we can update, increase, separate, or simply change it all together.

    - Plus        +
    - Times       *
    - Power       **
    - Dot         .
    - Assignment  =
    - Comparison  ==
    
    Used to:
        - Assign
        - Compare
        - Arithmetic
        - Logical
        - Conditional

    Expressions & Statement:

    keyword name (expression) {
        code black that runs
    }
*/

/* 
    Comparison Operators
    - JS is helpful and does something called "coercion" when comparing values.
        - Coercion is the process of converting one value from one type to another.
*/

// Equal To ==
//  JS assumed we wanted to check if 3 equals 3, this is checking values. (ONLY values.)

console.log("3" == 3); 

// Strict Equal To ===
// This "===" will check if the two values and the two datatypes are equal.
// Equal value and of the same datatype. (checks values AND datatype.)

console.log(3 === 3); // True
console.log("3" === 3); // False 

// Not Equal To   !=  Only checking values.
console.log("3" != 3); // False
console.log("3" != 4); // True

// Strict Not Equal To, !==  Compare/check both datatype and values.
console.log(3 !== 3); // False
console.log("3" !== 4); // True

// Greater Than 

3 > 2;

// Less Than

4 < 6;

//  Greater Than or Equal To   >=
// ! The greater than operator must be used BEFORE the equal sign in order to work/execute correctly.

console.log( 3 >= 2 ); // True

// Less Than or Equal To   <=
console.log( 1 <= 3 ); // True

// And,  &&
2 && 3;

// Or,  ||
2 || 3;

/* 
    Logical Operator
    - Arithmetic Operators
*/

//  Addition Operator
let r = 4;
console.log(r += 1); // r = r + 1; answer: 5
console.log(r); // 5

// Subtraction Operator
r -= 3; // r = r - 3

// Multiplication Operator
r *= 2; // r = r * 2

// Division Operator
r /= 1; // r = r / 1

// Remainder Operator (Modulus Operator)
r %= 1; // r = r % 1

// Exponential Operator
r **= 1; // r = r ** 1;


