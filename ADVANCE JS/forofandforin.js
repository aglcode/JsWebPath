// Difference between for...of and for...in

// for...of
for (const value of ['john', 'mark', 'prince', 'jeff']) {
    console.log(value); // output john mark prince jeff
}






// for...in
for (const key in ['john', 'mark', 'prince', 'jeff']) {
     console.log(key); // output 0 1 2 3
}