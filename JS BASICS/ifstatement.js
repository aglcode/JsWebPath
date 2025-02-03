// If statement: if, if...else, if...else if...else

// Comparison operators: ==, ===, !=, !==, >, <, >=, <=, ?

// Logical operators: &&, ||, !



// sample
// if (true) { // if will execute if the condition is true
//     console.log("it is true");
// } else {    // the else will execute if the condition is not true
//     console.log("it is not true");
    
// }

// ------------------IF STATEMETNS-----------------------
const x = 20;

if (x == 20) {
    console.log(x);
} else if (x != 20){
    console.log("x is not equal to 20");
} else {
    console.log("x is equal to 20");
}


// Comparison operators 
// == for equality
// === for type equality e.g string/int
// != for not equal to
// !== for not equal to and also check the type
// > for greater than
// < for less than
// >= for greater than or equal to
// <= for less than or equal to
// ? for ternary operator

// sample | comparison operators

const y = "20";

if (y === 20) {
   console.log("It is equal");
} else {
   console.log("It is not equal");
   
}

// != and !== are the opposite of the == and ===

// ------------------TERNARY OPERATORS-----------------------
// another sample for ternary operator
let result;
const age = 20;

// if (age === 20) {
//     result = `your are ${age}`;
// } else {
//     result = `you are not ${age}`;
// }


// instead of using endless if statement we can use ternary operator
// whatever comes after "?" it will assigned to the varible if true, whatever comes after ":" it will assigned
//                                                                                            to the variable if it's false

// TERNARY OPERATOR
result = x === 20 ? `you are ${age}` : `you are not ${age}`;

console.log(result);


// ------------------LOGICAL OPERATORS-----------------------
// it is used to assigned the variable to multiple conditions not just one

// &&(AND) - Both conditions must be true
// ||(OR)  - If one is true, it is true
// !(NOT)  - !(variable) will negate the whole statement for this example i have z as varaible !z

let condition;
const z = 20;

if (z >= 20 && x != 'hi' && x === 20) {
   condition = 'Both conditions are true';
   
} else {
    condition = 'Both conditions are false';
    
}

console.log(condition);



// --------------SWITCH STATEMENT--------------------
// to write multiple conditions

let sample;
const b = 10;

switch (b) { // define the variable in switch
    case 10: // case for multiple conditions without if statements
        console.log('b is 10')
            break;
    case 20:
        console.log('b is 20')
        break;
    case 30:
        console.log('b is 30')
        break;
    case 40:
        console.log('b is 40')
        break;

    

    default:
        console.log('b is Null')
        break;
}

