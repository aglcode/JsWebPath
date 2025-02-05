// Classes 
// Modules - make the classes accessible to other files


// ----- create a User class
// class User {
//     constructor(name, email, status = 'guess') {
//         this.name = name;
//         this.email = email;
//         this.status = status;
//     }
// }

// // sign up / create the User
// const myUser = new User('John Doe', 'john.doe@example.com')

// console.log(myUser);


// ---------------------------- with STATIC method ------------------------------------

// class Users {
//     constructor(name, email, status = 'guess') {
//         this.name = name;
//         this.email = email;
//         this.status = status;
//     }

//     static registerUser(...args) {
//         return new Users(...args)
//     }
// }

// // sign up / create the User
// const myUsers = Users.registerUser('John Doe', 'john.doe@example.com')

// console.log(myUsers);



// ---------------------------- with GETTERS and SETTERS ------------------------------------

// class Users {
//     constructor(name, email, status = 'guess') {
//         this.name = name;
//         this.email = email;
//         this.status = status;
//     }

//     static registerUser(...args) {
//         return new Users(...args)
//     }

//     get SayHi() { // getter
//         return `Hello welcome to our website ${this.name}`
//     }

//     set changeStatus(newStatus) { // setter
//         this.status = newStatus
//     } 
// }

// // sign up / create the User
// const myUsers = Users.registerUser('John Doe', 'john.doe@example.com')

// myUsers.changeStatus = 'ONLINE' // set the status

// console.log(myUsers);
// console.log(myUsers.SayHi);







// ------------------------------------------------ MODULE EXPORT -------------------------------------------------
export class Users {
    constructor(name, email, status = 'guess') {
        this.name = name;
        this.email = email;
        this.status = status;
    }

    static registerUser(...args) {
        return new Users(...args)
    }

    get SayHi() { // getter
        return `Hello welcome to our website ${this.name}`;
    }

    set changeStatus(newStatus) { // setter
        this.status = newStatus;
    } 
}