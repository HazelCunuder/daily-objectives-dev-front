"use strict"

// Exercices javascript.info 2.4

// Exercice 1

let admin, name;

let name = "John";
let admin = name;

alert(admin);

// Exercice 2

let ourPlanetName = "Earth";

let currentUsername = "John";

// Exercice 3

const BIRTHDAY = '18.04.1982'; // This is correct --> DoB will never change

const AGE = someCode(BIRTHDAY); // This is wrong --> Age will change on page reload at Bday --> should be const age

// Exercice js.info 2.5

let name = "Ilya";

alert( `hello ${1}` ); // Output: "hello 1"

alert( `hello ${"name"}` ); // Output: "hello name

alert( `hello ${name}` ); // Output: "hello Ilya"
