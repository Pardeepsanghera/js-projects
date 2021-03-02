/*****
 * Fun with functions
 * 
 * *******/
// Basic form
function showMyname () {
    //setting my variables
    let firstName = 'Pardeep'
    let lastName = 'Sanghera'
    let fullName = firstName + ' ' + lastName;
    // use the console.log to render fullName
    console.log('You are', fullName);
}
showMyname();

function mulitplyTwonumbers (firstNumber, secondNumber) {
    //take the passed in parameters and mulitply
    //setting to a new variable
    let multipliedNumbers = firstNumber * secondNumber;

    //console.log the result
    console.log('these numbers are multiplied', multipliedNumbers);
}
mulitplyTwonumbers(13, 18);

//** Arrow Functions Expression **/
// creat a for loop that counts to 10
const countToTen = () => {
    for (let i = 0; i <=10; i++) {
        //console.log i
        console.log(i);
    }
};

countToTen();
const welcomeNewUser = () => {
    let firstName = 'Pardeep'
    let lastName = 'Sanghera'
    let welcomeNewUser = 'Hello'
    let fullMessage = welcomeNewUser + firstName + lastName;
    alert(fullMessage);
};
 
const showMyFavoriteAnimal = () => {
    let animal = 'Lion';
    alert('My Favorite Animal is a'+ animal);
};
