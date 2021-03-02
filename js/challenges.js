/***** Challenges ********/

//Exercise 1: For Loop
// Create a loop that console.logs odd numbers from 0 - 100
// for (i = 1; i < 100; i += 2) {
//     console.log(i);
// };
//Exercise 2:
// Create a function that accepts a firstName parameter and a lastName parameter
// Inside the function use the alert function to render a message that welcomes the user by their full name
// Be sure to call the function and pass in the values for the parameters



//Exercise 3: Verify a User's age
// When your page loads, create a function that prompts a user to enter their age
// If the user is over the age of 13 alert the user they are good to enter
// If they are not, alert the user to come back when they're older!
// Use arrow function syntax, and add a debugger to test your data

// const verifyuserAge = () => {
//     const userAge = prompt("Hey, Enter your age here")
//     // debugger;
//     if(userAge < 13){
//         alert("Sorry!")
//     }else{
//         alert("Welcome!")
//         }
//     };
// verifyuserAge();

 //Exercise 4: Temperature in Fahrenheit
// Create a function that converts a number from Celsius to Fahrenheit
// The C -> F formula is: number * 1.8 + 32
// The number variable should be passed in to the function as a parameter
// Console.log the result
// function convertTOFahrenheit (Celsius) {
//     let Fahrenheit = Celsius * 1.8 + 32
    
//     return Fahrenheit;
//     };
//     console.log("The temperature is" + Fahrenheit);
//     convertTOFahrenheit(30);

// const convertCelsiusToFahrenheit = () => {
//     let userTemperature = prompt('Please enter a temperature in celsius');
//     let tempInFahrenheit = userTemperature * 1.8 + 32;
//     alert('It is ' + tempInFahrenheit + '*F outside!');
//   };
  
  // convertCelsiusToFahrenheit(30);
  // convertCelsiusToFahrenheit(15);
  // convertCelsiusToFahrenheit(50);
  

//     Exercise 5: Guess the number between 1 and 10
// Add a button to your page that when clicked calls a function
// The function should prompt the user for a number between 1 and 10
// Initialize the function with an answerNumber variable inside the function
// If the user passed number is correct, alert the user they are correct
// Else let the user know they are wrong and to try again

const guessTheNumber = () => {
    const guessTheNumber = () => {
        let correctAnswer = 7;
        //   debugger;
        for (let i = 0; i <= 2; i++) {
          let userAnswer = prompt(
            'Guess a number between 1 and 10: you get 3 guesses'
          );
          if (userAnswer == correctAnswer) {
            alert('Correct! You win!');
            break;
          } else {
            alert('Wrong, try again');
          }
      
          if (i === 2) alert('You are out of guesses. You lose!');
        }
    }
};   


// Monday challenge
//- Loop through the items, console.log the price with a concatenated string that let's the user know the total price
// - Create a new array using the map method, that returns all the names of each item
// - Create a new array using the filter method that returns all the items that are less than 100
// - Using the find method loop through the array and return the laptop item setting it to a variable
// - Chaining the filter and map method together, loop through the items, filter by items that are more than 100, then using the map method, create a new array of the names of those items
// (edited)

let items = [
  { name: 'Huffy X27', price: 100, category: 'fitness' },
  { name: 'The Alchemist', price: 15, category: 'books' },
  { name: 'Snuggy', price: 10, category: 'home' },
  { name: 'Macbook Pro', price: 1500, category: 'technology' },
  { name: 'Peloton', price: 2000, category: 'fitness' },
  { name: 'iPad Pro', price: 800, category: 'technology' },
  { name: 'Ember Coffee Mug', price: 80, category: 'home' },
  { name: 'Electric Wine Bottle Opener', price: 20, category: 'home' },
];
// Foreach method
items.forEach((item) => {
  console.log("The total for the item is $" + item.price)
});
 // Map method
const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames);

// Filter Method
const cheapItems = items.filter(item => {
  return item.price < 100;
});
console.log(cheapItems);

// Find Method
const foundItem = items.find(item => {
  return item.name === 'Macbook Pro';
});
console.log(foundItem);

// Chaining Method
const expensiveItems = items
.filter(item => {
  return item.price > 100;
})
.map(exp => {
  return exp.name;
});
console.log(expensiveItems)