// ADVANCE: Fetch API
// ---- fetch data in an external source

// https://randomuser.me/api/

// . is a promise to do something to the data\
// .then() is a callback function to do something with the data and get the response (res)
// .json() to get the actual json format

// fetch('https://randomuser.me/api/').then((res) => {
//     //  console.log(res); // test the api request
//     console.log(res.json()); // fetch the promise JSON
// });


// GET THE ACTUAL JSON DATA ---------------------------------------------------------------------------------------
// fetch('https://randomuser.me/api/')
//       .then((res) => res.json())
//       .then((data) => console.log(data));


// GET THE ACTUAL JSON DATA AND DISPLAY IT TO THE DOM --------------------------------------------------------------

// const myBtn = document.querySelector('#button');
// const myData = document.querySelector('#my-data');

// myBtn.addEventListener('click', () => {
//     fetch('https://randomuser.me/api/')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
        
//         const user = data.results[0];   // get the data in results list        
//         myData.innerHTML = `<p>${user.gender}</p>`; // dynamic fetching of data in API // filter to fetch only-
//                                                     // -what you want
//     });
// });



// GET ALL THE DATA
const myBtn = document.querySelector('#button');
const myData = document.querySelector('#my-data');

myBtn.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((data) => {
        data.results.forEach((user) => {
            console.log(data);
            
            myData.innerHTML = `<div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
                    <img src="${user.picture.large}" alt="User Image" style="border-radius: 50%; width: 100px;">
                    <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Location: ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
                    <p>Age: ${user.dob.age}</p>
                    <p>Username: ${user.login.username}</p>
                </div>`
        }); 
    });
});

                                  