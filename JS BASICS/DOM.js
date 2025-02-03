// Document Object Model (DOM) manipulation
// use to manipulate the html
// .innerHTML insert or change the data of an html inside the div or smthing


// DOM OLD SCHOOL VERSION ------------------------------------------------------------------------------------
// const myHeading = document.getElementsByClassName('my-class');
// console.log(myHeading);



// DOM NEW VERSION -----------------------------------------------------------------------------------------
// const sampleDom = document.querySelector('h1'); // get just one
// const sampleDom = document.querySelectorAll('h1'); // get all



// example to edit the html contents ----------------------------------------------------------------------
const myHeading = document.querySelector('#my-heading');

myHeading.textContent = 'JS JS JS'; // change the text
myHeading.style.color = 'red';   // change the color
myHeading.classList.add('.my-class'); // add a class
// myHeading.remove();                     // remove 

console.log(myHeading);


// button ----------------------------------------------------------------------------------------------------
const myBtn = document.querySelector('#button')

const originalText = myHeading.textContent; // store the origina text

myBtn.addEventListener('click', () => {
    // console.log('button is working'); // example
    // myHeading.textContent = 'hello';     // when the btn is clicked the heading text will change

    // toggle between original text and edited
    myHeading.textContent = myHeading.textContent === originalText ? 'hello' : originalText;
});






// INCREMENT, DECREMENT ON CLICK ------------------------------------------------------------------------------
const numCounter = document.querySelector('#counter');
const numDecrement = document.querySelector('#decrement');
const numIncrement = document.querySelector('#increment');

let count = 0;  // initialize first the counter

numIncrement.addEventListener('click', () => {
    count++; // Increment the value | call the count variable
    numCounter.textContent = count; // display on the UI call the count variable
});

numDecrement.addEventListener('click', () => {
    console.log('Decrement clicked');
    count--; // Decrement the value | call the count variable
    numCounter.textContent = count; // display on UI call the count variable
});

