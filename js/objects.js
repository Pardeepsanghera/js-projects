/**** Object Notes ******/

// let firstObj = new Object();
// console.log(firstObj);

// let person = {
//     name: 'Pardeep',
//     Hobby: 'Basketball',
//     Age: '24',
//     isAwesome: true,
//     favoriteFruit: ['Apple', 'Banana',],
// };
// console.log(person.favoriteFruit);
// console.log(person['name']);

let animals = [
    {
        type: 'dog',
        name: 'tyson',
        isEvil: false,
    },
    {
        type: 'cat',
        name: 'Mr.snuggles',
        isEvil: true,
    },
    {
        type: 'bird',
        name: 'Bob',
        isEvil: true,
    }

];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i].name);
};

// Higher order array Methods

animals.forEach(function (animal){
    console.log("my animal name",animal['name']);
});

// arr.map
let animalTypes = animals.map((animal) => {
    console.log('inside the map func', animal);
    return animal.type;
});
console.log('Animal Types:', animalTypes);

//arr.filter

let evilAnimalNames = animals.filter((animal) => {
    return animal.isEvil === true;
})
.map(evilAnimal => {
    return evilAnimal.name;
});
console.log("My evil Animal names", evilAnimalNames);