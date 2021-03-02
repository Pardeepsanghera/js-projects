// const guessTheNumber = () => {
//     let correctAnswer = 7;
//     //   debugger;
//     for (let i = 0; i <= 2; i++) {
//       let userAnswer = prompt(
//         'Guess a number between 1 and 10: you get 3 guesses'
//       );
//       verifyNumber(userAnswer)
//       if (userAnswer == correctAnswer) {
//         alert('Correct! You win!');
//         break;
//       } else {
//         alert('Wrong, try again');
//       }
  
//       if (i === 2) alert('You are out of guesses. You lose!');
//     }
//   };
  
//   const verifyNumber = userInput => {
    
//     let result = isNaN(userInput);
//     return result;
//   };


const calculatorApp = () => {
    let userConfirm = confirm('Would you like to calculate two numbers?');
    //   console.log(userConfirm);
  
    if (userConfirm) {
      // console.log('do this');
      let userValue1 = parseInt(prompt('Please enter your first value'));
      let userValue2 = parseInt(prompt('Please enter your second value'));
      // console.log(userValue1, userValue2);
      let arithmetic = prompt(
        "Would you like to 'add', 'subtract', 'multiply' or 'divide' your values?"
      );
      // console.log('my arithmetic', arithmetic);
      let answer = calculateValues(userValue1, userValue2, arithmetic);
      alert('Your answer is: ' + answer);
    }
  };
  
  const calculateValues = (value1, value2, arithmetic) => {
    //   debugger;
    let result = 0;
    switch (arithmetic) {
      case 'add':
        //   add up the values
        result = value1 + value2;
        break;
      case 'subtract':
        //   subtract the values
        result = value1 - value2;
        break;
      case 'multiply':
        //   multiply the values
        result = value1 * value2;
        break;
      case 'divide':
        //   divide the values
        result = value1 / value2;
        break;
    }
    return result;
  };
  

con