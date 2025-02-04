// Array / object methods

let cars = [
    {
        "brand": "Toyota",
        "model": "Camry",
        "year": 2015
    },
    {
        "brand": "Honda",
         "model": "Civic",
         "year": 2018
    },
    {
        "brand": "Ford",
        "model": "Mustang",
        "year": 2020
    },
    {
        "brand": "Tesla",
        "model": "Model S",
        "year": 2019
    },
    {
        "brand": "BMW",
        "model": "3 Series",
        "year": 2017
    }
];

// console.log(cars);
console.dir(cars) // clean output of array of objects

// -------------------------------- USING MAP METHOD -----------------------------------------
// filter only what data on the array what you want to show

console.log(cars.map(car => car.brand)); // fetch the brand
console.log(cars.map(car => car.model)); // fetch the model 
console.log(cars.map(car => car.year));  // fetch the year


// ------------------------- FILTER ---------------------------------------------------------
// print an array like map, but based on the condition
console.log(cars.map(car => car.year >= 2020));


// ---------------------------- SOME FUNCTION (any) -----------------------------------------
// determines if the condition that past into it, is met the elemente of the array
console.log(cars.some(cars => cars.brand === "BMW"));  // true or false if it's existing or not (atleast one or any data must be true or false)

// ----------------------- EVERY (all) ------------------------------------------------------
console.log(cars.every(cars => cars.brand === "BMW"));  // true or false if it's existing or not (all data must be true or false)


// -------------------------- REDUCE ----------------------------------------------------------
// will calculate all the elements of an array
// console.log([2, 3, 5].reduce((prev, next) => prev + next)); // total of an array similar to arithmetic

// ---------- try on cars years -----------------
console.log(cars.map(car => car.year).reduce((a, b) => a + b)); // sum of all years


// ---------------------- FIND (only the first element) -----------------------------------------------------------
// find something in an array
console.log(cars.find(car => car.year > 2000));

// find the index
console.log(cars.findIndex(car => car.year > 2015));


// ---------------- FROM -------------------------------------------------------
// can be called on array constructure, make an array to any iterable
console.log(Array.from('hello')); // output (5) ['h', 'e', 'l', 'l', 'o']
console.log(Array.from('hello', i => i + 2)); // output (5) ['h2', 'e2', 'l2', 'l2', 'o2']
console.log(Array.from([2, 3, 4], i => i + 2)); // output (3) [4, 5, 6]


// --------------------------- KEYS --------------------------------------------------------
// called in object , return an array of keys
console.log(Object.keys('hello')); // output (5) ['0', '1', '2', '3', '4']


// ------------------------- Entries ---------------------------------------------------------
// return an array of key value pairs
console.log(Object.entries(cars[1])); 



// -------------------------------------- SET OBJECT ----------------------------------------------------
// no repeated value
console.log(new Set([2, 2, 3, 4, 5, 6, 6])); // output Set(5) {2, 3, 4, 5, 6}


