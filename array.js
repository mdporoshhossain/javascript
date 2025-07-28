// array.js

// Array, index, set by index, indexOf.
let myFriad = [15,16,17,18,19,20,21,22,23,24,25];
// let value = '0';

myFriad[0] = 14;

let position = myFriad.indexOf(16);
console.log(position);


// Array advanced, Push, pop, array length

// array add and remove element from the beginning and slice

myFriad.push(99),
console.log(myFriad);
// length
console.log( "length =" , myFriad.length);

// pop opposite shift()
// remove element from array
myFriad.pop();

console.log( "pop =" , myFriad);

myFriad.shift();
console.log( "shift =" , myFriad);


const sliceArray = ['porosh' , 'noman' ,'abir' , 'one', 'two' , 'three', 'four' , 'five'];

let myslice = sliceArray.slice(1 , 7);


console.log( "slice =" , sliceArray);

console.log( "my slice =" , myslice);












