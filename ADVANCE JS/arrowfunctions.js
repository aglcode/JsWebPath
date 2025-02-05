// Arrow functions


// ------- TRADITIONAL FUNCTION -----------------------------
// console.log(addNums(2, 3));


// function addNums(a, b) {
//     return a + b;
// };



// ------------- EXAMPLE OF ARROW FUNCTIONS -------------------------------------

// const addNums = (x, y) => x + y;

// console.log(addNums(5, 5));


// ------------- EXAMPLE OF ARROW FUNCTIONS (DEFAULT VALUE) -------------------------------------

const addNums = (x = 0, y = 0) => x + y;

console.log(addNums(3, 3));