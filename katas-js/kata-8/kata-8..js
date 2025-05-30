"use strict"

/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Which variant do you expect to be useful in more situations? Which one runs faster?

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);

console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/

function reverseArray(array) {
    let revArray = [];
    let j = array.length
    
    for (let i = 0; i < j; i++) {
        let pop = array.pop();
        revArray.push(pop);        
    }
    return revArray;
}
console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(inPlace) {
    let j = inPlace.length;
    let tempArray = [];
    
    for (let i = 0; i < (j/2); i++) {
        let temp = inPlace[i];
        inPlace[i] = inPlace[j - 1 - i];
        inPlace[j - 1 - i] = temp;
    }
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);

console.log(arrayValue);

// Most Useful: reverseArray, because it doesn't modify the original Array
// Fastest: reverseArrayInPlace, does't create new array so more efficient.