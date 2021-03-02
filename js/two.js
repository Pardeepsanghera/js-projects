/**
 JS: part two
 -operators
 -control flow
 -Functions
*/

// comparison operators
let value1 = 35;
let value2 = 100;
let value3 = 500;
console.log('Does value1 not equal value2?', value1 !== value2);//true

console.log('is value 1 greater than or equal to value 2?', value1 >= value2);//true

//Logical &&
//in order for the result to be true, all conditions must be met with true 
console.log('are my two conditions true or false?', value1 > value2 && value1 !== value2);

//Logical ||  ||(means logical or);
console.log('Logical ||: Are my two conditions true or false?', 
value1 > value2 || value1 !== value2);

//combining Logical || and Logical &&

console.log('combining || &&:"what is the result',
 (value1 > value2 || value1 !== value2) && value2 > value3);

 //****** Control Structures ********/
 
 //if/else

//  let numberOne = 100;
//  let numberTwo = 445;

//  if(numberOne > numberTwo ) {
//     alert('you are correct');
//  } else {
//     alert('sorry its not greater than :')
//  }

 //If, Else if, Else

//  if(numberOne > numberTwo) {
//      alert('You are Baws');
//  } else if (numberTwo > numberOne){
//      alert('This is my third if statement');
//  }else{
//      alert('you are still Baws!');
//  }

 // =======Loops

//  for(let i = 0; i  < 20; i++) {
//      //Render the number 10
//      if(i === 10){
//          console.log("The Number:", i);
//      }
//  }

//create a for loop that counts by 10 up to 100
//console.log should start at 0 and end at 100

// for(let i = 0; i < 101; i+=10) {
//     console.log("count by ten", i)
// }
// for(let i = 0; i <= 10; i++) {
//     console.log(i * 10);
// }



//  //count down
// //  for(let i = 20; i > 0; i++){
// //      console.log('my downward counter:', i);
// //  }

// //while loop
// // let i = 0;
// // while (i < 10) {
// //     console.log(i);
// //     i++;
// }

//Do while
// let j = 0;
// do {
//     console.log('this is j', j);
//     j++;
// } while(j < 10);

/****** Ternary ******/
//[if condition = true] ? (run this code()) ; (run this code())
//[condition] ? statement1 ; statement2;

// let age = 20;

// age >= 21
// ? alert('Have fun')
// : alert('sorry');

/****** Switch Statements *******/

// let animal = 'cow';

// switch (animal) {
// case 'dog':
//     alert('its a dog!'); //my code
//     break;
//  case 'cat':
//      alert('its a cat!');
//     break;
// case 'monkey':
//     alert('its a monkey!');
//     break;
// case 'cow':
//      alert('its a cow!');
//     default:
//         alert('doesnt match :/');
// }

/***** Functions *******/

// function firstFunction() {
//     console.log('this is my first function')
//     return;
// }
// firstFunction();

// function countDown() {
//     for (let i = 10; i >=0; i--){
//         console.log('counting from inside!', i);
//     }
// }
// countDown();

// Arrow Function Expressions
const doMath = () => {
    let num1 = 10;
    let num2 = 24;

    console.log('my sum of nums:', num1 + num2);
}
doMath();

const sumNumbers = (bob, sue, jill) => {
    console.log('sum of number', bob + sue + jill);
};
sumNumbers(100,300,10);

for (i = 1; i < 100; i += 2) {
    console.log(i);
}