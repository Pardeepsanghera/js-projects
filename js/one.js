/*
This is the beginning of my one.js file
this is a multiline comment

*/
// var myName = 'pardeep';
let hisName = 'pardeep';
const newName = 'deep'; // the preference is we will single 

//Another example of variable initialization with
//commas and semi-colons
let nameOne = 'pardeep',
    nameTwo = 'anna',
    nameThree = 'jeff';

// this is my console log example 
console.log(hisName, newName, 'My name is pardeep');

// This is my alert example 
//alert('Hey, you are awesome');

//Testing confirm
//confirm('Are you 18 or older?');

// prompt example 
//prompt ('Enter your age!');

// Example of the values returned from popup methods
// console.log(prompt(prompt('are you 18 or older?'),alert('two nested')))

/****** Arithmetic operators********/
let total = 1 + 5 - 100 * 68;
console.log('my total is:', total);
++total;
console.log('my new total:', total);

/**** Assignment operators *****/
let x = 'y';
let one = 1;
// += example
one += 6;
//one = one + 6;
console.log('what is one?', one);

/***** String operators *******/
let firstString = 'First string';
let secondString = 'Second string';
// there are 3 strings
let smushed = firstString + ' ' + secondString;
console.log('what is smushed?', smushed);

// concatenat a string with a number?
let myString = 'this is a string';
let myNumber = 500;

let concatStringNumber = myString + myNumber;
console.log(concatStringNumber);

//concat number string with regular number
let numberString = "10";
let realNumber = 10;
console.log(numberString + realNumber);

//**** comparison operators *****/
let value1 = 100;
let value2 = '100';
// Best practice is to use strict ===
console.log('are they equal? ', value1 ==value2); // this result is true
console.log('are they equal? ', value1 === value2); //this result is false

let value3 = 20;
let value4 = 30;
console.log("is value3 less than value4?", value3 < value4);
console.log("is value3 greater than value4?", value3 > value4);