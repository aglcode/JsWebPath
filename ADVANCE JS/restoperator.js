// REST OPERATOR 
// 1. REST operator is used to get the rest of the elements in an array.

const addNums = (x, y, ...args) => x + y; // ...args (rest of the arguments)

console.log(addNums(5, 2));

