let variableName = "hello js";
console.log(variableName);


// Variable type, Numeric, String, Boolean

const Numeric = 99;
console.log(typeof Numeric);

const String = 'String type';
console.log(typeof String);

const booleanTrue = true;
console.log(typeof booleanTrue);

const booleanFalse = false;
console.log(typeof booleanFalse);



// Explore string case change index split

let promise = "hello how are You Going Today";
// looking for
console.log(promise.indexOf('You')); 

let split = "hello how are You Going Today";
// looking for
console.log(split.split(' ')); 

// Integer float parseInt parseFloat type conversion

let nom1 = '5';
let nom2 = '10.5';

nom2 = parseFloat(nom2);
nom1 = parseFloat(nom1);

const total = nom1 + nom2;
console.log(total);


let nompl = '5';
let nompl2 = '10.5';

nompl = ''+nom2;
nompl2 = ''+nompl2;

const totalPlase = nompl + nompl2;
console.log(totalPlase);


let to1 = '0.1';
let to2 = '0.2';

to1 = +to1;
to2 = +to2;

let totalitem = to1 + to2;
totalitem = totalitem.toFixed(1);
console.log(totalitem);

console.log("Math absolute round floor ceil random");

//  Math absolute round floor ceil random

// let mathNambar = 5.500;

let mathNambaValue = Math.round(Math.random()*100 + 9999);

console.log(mathNambaValue);

