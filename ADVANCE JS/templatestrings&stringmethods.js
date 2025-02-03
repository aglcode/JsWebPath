// template string | string methods



const userName = 'Angelo'

console.log('hi' + userName); // concatinate without template string
console.log(`Hi ${userName}`); 


// ------------- using string methods -----------------

// - includes - check if the string got 'that' specified letter
console.log(userName.includes('Ang'));

// - startsWith - checks if the string starts with 'that' specified letter
console.log(userName.startsWith('A'));
console.log(userName.startsWith('e', 3)); // with arguments count the index number

