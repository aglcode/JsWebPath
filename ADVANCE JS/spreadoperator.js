// Spread Operator - ...
// breaks an iterable into individual values 


// example
// console.log(...[2, 3, 4, 5, 6]); // ... is spread - the output would be 2 3 4 5 6


const nums = [1, 2, 3, 4, 5];

const addNUms = (a, b, c, d, e) => a + b + c + d + e;

console.log(addNUms(...nums)); // 15
