// ASYNC AND AWAIT ----------------------------------------------------
// Make the Promise much easier 
// the ASYNC keyword makes a fuction return a promise
// the AWAIT keyword makes a function wait for a promise 

const getPerson = async () => {
    return 'Angelo';
};

console.log(getPerson());


// ------------------ OLD WAY FETCH A DATA IN API USING PROMISE ------------------------------------
// fetch('https://randomuser.me/api/')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch(err => console.log(err));




// ------------------ NEW WAY FETCH A DATA IN API USING ASYNC AWAIT ------------------------------------

const getData = async () => {
try {    
    let res = await fetch('https://randomuser.me/api/');
    res = await res.json();
    console.log(res); 
    } catch {
        console.log(err);   
    }
};

getData()


// fetch('https://randomuser.me/api/')
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch(err => console.log(err));
