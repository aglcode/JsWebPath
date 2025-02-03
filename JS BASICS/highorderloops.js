// Loops 2: forEach, map, filter



// create an object list-----------------------------------------------------------------
const person = [ 
      {
        name: 'angelo',
        age: 22,
        occupation: 'student',
      },
      {
        name: 'mark',
        age: 21,
        occupation: 'IT',
      },
      {
        name: 'john',
        age: 20,
        occupation: 'waiter',
      },
      {
        name: 'jane',
        age: 19,
        occupation: 'nurse',
      },
];


// ------------ WITHOUT LOOP ---------------------------------------------
// for example on object 1 angelo i want to only get his occupation. ---------------------

// console.log(person[0].occupation); // [0] cuz first object starts with index 0
// console.log(person[2].occupation); // this is object for john | use [2]


// USE forEach to fetch something in bulk, for example i want to print all the names in all objects----------------------
person.forEach((el) => { // el for elements
    // console.log(el); // print all the objects
    console.log(el.name); // print all the names in all objects
});



// -------- MAP - use this to do the same thing but in array-----------------------------------------------
// create a new variable to call the object - better use for external data

const newPerson = person.map((el) => {
       return el.age
});

console.log(newPerson); 


// -------- FILTER - it does similar but it will return an array based on the condition------------------
// use this to filter data, for example i want to get all the people who are 21

const filterPerson = person.filter((el) => {
    return el.age === 21; // this is the condition | get what you only want to get based on your conditions
});

console.log(filterPerson);