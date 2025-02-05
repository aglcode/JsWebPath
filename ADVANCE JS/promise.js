// Promise 
// keyword: if i will give you a money tommowor, then you can't use it right now
// keyword: if you give me me 5 dollars, then i can buy something

// ---------------------- create new promise ------------------------------------
// new Promise((resolve, reject) => {
//     resolve() // resolve is a function that will be called when the promise is resolved
//     reject()  // you refused or failed to do the promise - do something else 
// })


// ------------ sample with variable ------------------------
// const myPromise = new Promise((resolve, reject) => {
//     resolve()
//     reject()
// })

// console.log(myPromise.then().catch());

// // .then() - if the promise is resolved
// // .catch() - if the promise is rejected/failed



// ---------------------------------------- REAL EXAMPLE OF PROMISE ------------------------------------
const myNum = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve('The promise is resolved, the number is grater than 10')
        } else {
            reject('The promise is rejected, the number is not greater than 10')
        }
    });
};

// check if the number in myNum is greater than 10 | resolve is being passed on .then() | reject is being passed on .catch()
myNum(8).then(result => console.log(result)).catch(error => console.log(error));
















// ----------------------- WITH SET TIME OUT FUNCTION | WHAT HAPPENS IN REAL LIFE EXAMPLES -------------------------
// ------------------------ wait a certain time to get the results ----------------------------------------------

const myNumber = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 10) {
                resolve('The promise is resolved, the number is grater than 10')
            } else {
                reject('The promise is rejected, the number is not greater than 10')
            }
        }, 3000);
    });
};

// check if the number in myNum is greater than 10 | resolve is being passed on .then() | reject is being passed on .catch()
myNumber(8).then(result => console.log(result)).catch(error => console.log(error));
