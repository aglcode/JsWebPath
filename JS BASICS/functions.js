// Function () - is a block of code that can be executed and called in diff. places

// ------sample-------------
// addNums; - not a function
// addNums() - a function | variables inside the '()' is called parameters


// Function
addNums();


function addNums() {
    console.log(5 + 7);
    
}

// Function - with arguments & parameters 
subNums(7, 5); // 5, 7 are arguments to be called in parameters x, y

function subNums(x, y) { // parameters
    console.log(x - y);
    
}


// NEW VERSION OF FUNCTION | ARROW FUNCTION ('=') pass the paremeters | ('=>') to something | (x * y;) declare what to do

const multi = (x, y) => x * y;
console.log(multi(10, 10)); // call the const and insert a value | declare it after the initialization 

