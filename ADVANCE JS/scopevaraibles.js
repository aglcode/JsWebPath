// let and const are scope variables


// ------ on VAR it will print
if (true) {
    var x = 10;
    // let x = 10; // let will not print 
    // const x = 10; // const will not print cuz both of these are only accesible within the blocked of e.g. function, if statement
};

console.log(x);