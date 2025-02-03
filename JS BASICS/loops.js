// Loops 1: while, for, for...of

// use 'i' as an iterator for breaking the loop.


// WHILE LOOP
let i = 0;
const colors = ['blue', 'red', 'yellow', 'white'];
 
// while (i < 5) { // run the i 5 times starting from index 0
//     console.log(i);
//     i++;
// }

// FOR LOOP - it is still while loop but one line 
// for (let i = 0; i < 5; i++) {
// console.log(i);
// }



// ----- using WHILE LOOP to get the colors -----------

// console.log(colors[0]); pick an array to print

// while (i < colors.length) { // get the actual lenght of an array
//     console.log(colors[i]);
//     i++;
// }


// ------ using FOOR LOOP to get the colors --------------

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }



// -------- FOR OF is a cleaner loop -----------------

// on this code i used const list for colors array and call list to print
for (const list of colors) {
    console.log(list);
}


// ------- SOME ARRAY METHODS -------------

// adding new data on the list of arrays | by using push method

colors.push('black'); // add new data on the last/end of the list
colors.unshift('orange'); // add new data on the first/beginning of the list
// colors.pop(); // delete the last data on the array list

console.log(colors);
