"use strict";

var heroes = [{
  id: 1,
  name: 'Batman',
  nickname: 'Caped Crusader',
  universe: 'DC',
  power: 'Rich'
}, {
  id: 2,
  name: 'Wonder Woman',
  nickname: 'Amazonian Princess',
  universe: 'DC',
  power: 'Strength'
}, {
  id: 3,
  name: 'Wolverine',
  nickname: 'Logan',
  universe: 'Marvel',
  power: 'Super Healing'
}, {
  id: 4,
  name: 'Spider Man',
  nickname: 'Friendly Neighborhood Spider',
  universe: 'Marvel',
  power: 'Agility'
}]; // showHeroDetails

var showHeroDetails = function showHeroDetails(event) {
  event.preventDefault(); // find a hero inside heroes array 
  //where hero.id matches heroId

  var heroIdFromAnchor = event.target.dataset.heroId;
  var foundHero = heroes.find(function (hero) {
    return hero.id === heroId;
  });
  alert("".concat(foundHero.name, " ").concat(foundHero.nickname));
}; // addNewHero
// removeNewHero
// Grabbing hero list container


var heroList = document.querySelector('#hero-list');

for (i = 0; i < heroes.length; i++) {
  //create our elements
  var listItem = document.createElement('li');
  var h3 = document.createElement('h3');
  var anchor = document.createElement('a');
  var small = document.createElement('small');
  var metaDiv = document.createElement('div'); // add attribute to elements

  listItem.className = 'list-group-item';
  anchor.href = '#'; // add eventlisteners for functionality

  anchor.addEventListener('click', showHeroDetails); // add dataset properties to an element

  anchor.dataset.heroId = heroes[i].id; //append hero name to list item

  anchor.textContent = heroes[i].name;
  small.textContent = "".concat(heroes[i].power, " | ").concat(heroes[i].universe); //append our elements to parents

  metaDiv.appendChild(small);
  h3.appendChild(anchor);
  listItem.appendChild(h3);
  listItem.appendChild(metaDiv);
  heroList.appendChild(listItem);
}
// testing//