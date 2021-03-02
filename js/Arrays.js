//***** Arrays Notes ********/

// strings properties and Methods

let firstString = 'Hello world!';
firstString = 'Hello Universe ';

console.log(firstString);
console.log(firstString.length)

console.log(firstString.indexOf('o'));
console.log(firstString.trim());
console.log(firstString.toUpperCase());
console.log(firstString.toLowerCase());
console.log(firstString.substring(0, 5));
console.log(firstString.substring(6, 18));

let fruits = ['Apple', 'Oranges', 'Plums', 'Jackfruit'];
console.log(fruits);
console.log(fruits[1]);
console.log('I like ' + fruits[1] + ' and ' + fruits[2]);

fruits.push('Mangoes', 'Peaches')
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift('Tacos');
console.log(fruits);

console.log('how many items in my fruit array?', fruits.length);

// create an array of your top 5 movies
// create a loop that console.log each of those movies
// Use toUppercase() to console.log all the movies in all caps

let favMovies = ['Pirates of the caribbean', 'Transfomers', 'Fast and Furious', 'Back to the Future', 'The Mummy'];
for(let i = 0; i < favMovies.length; i++){
    console.log(favMovies[i].toUpperCase());
};