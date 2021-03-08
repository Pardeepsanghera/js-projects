console.log(document);

// Selectors
// getElementById

let mainHeading = document.getElementById('main-heading');
console.log(mainHeading);

//getElementsByClassName
let rowClasses = document.getElementsByClassName('row');
console.log(rowClasses);

//getElementByTagName
let divTags = document.getElementsByTagName('div');
console.log(divTags);
let spanTags = document.getElementsByTagName('span');
console.log(spanTags);

// querySelector
let divContainer = document.querySelector('.container');
console.log(divContainer);
let mainIdHeading = document.querySelector('main-heading');
console.log(mainIdHeading);
let spanTag = document.querySelector('span');
console.log(spanTags);

let paragraph = document.querySelector('#title');
console.log(paragraph);

paragraph.textContent = ('changing my list');
//paragraph.innerHTML
let divTesting = document.getElementById('testing');
console.log(divTesting);
let mySentence = 'A string that will be placed inside'
divTesting.innerHTML = `<strong> ${mySentence}  </strong>`;

