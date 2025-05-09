"use strict"

/*
Write a function min that takes two arguments and returns their minimum.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
*/


function min(value1, value2) {
    if(value1 > value2) {
        return(value2);
    } else {
        return(value1);
    }
}

console.log(min(50,50));