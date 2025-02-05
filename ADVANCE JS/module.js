// use the export module from the class | use import

import { Users  } from "./Classes.js";

const myUsers = Users.registerUser('John Doe', 'john.doe@example.com')

myUsers.changeStatus = 'ONLINE'; // set the status

console.log(myUsers);
console.log(myUsers.SayHi);