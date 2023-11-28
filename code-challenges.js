// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"

// // Pseudo code:
// const whichStringISLonger = (string1, string2) => {
//     if (string1.length > string2.length){
//         return string1
//     } else {
//         return string2
//     }
// }
// console.log(whichStringIsLonger(fruit1, fruit2))
// console.log(fruit3, fruit4)


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
const padresWorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);

console.log(padresWorldSeriesRuns);

console.log(padresWorldSeriesRuns.length);

// Pseudo code: just make a new array concating them both together then do a .length with the new array name and im pretty sure thats it. like console.log() the concat to make sure they are joined together then do console.log(padresWorldSeriesRuns.length); and that should give you 9.


// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"
const reversedString = currentCohort.split('').reduce((acc, char) => char + acc, '');
console.log(reversedString);

// Pseudo code: first  we use the reversed string function which i learned about just for this question. we take our variable currentCohort and split it so a new array is made, we will name it an empty '' for now, thats where the new string will go kinda. reduce() puts it back together in reverse order with the character accumulator, which are parameters with a fat arrow function to reverse the string, and lastly to console log the function so that way the result is printed for us to read at '3202 NRAEL'

// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code: This one really stumped me. Even looking online I couldnt find much help for a variable like this, out of order. normally here i would make a function and use 

// function logOddNumbers(stockExchange) {
//   for (let i = -5; i < stockExchange.length; i++) {
//   const newArray = stockExchange[i]
//
//     if (newArray % 2 !== 0) {
//    console.log(newArray);
//       }
//     }
//   }

//  but it not seeming to work for me and I cant really get it going, but I feel I am close. I know it should be a function with the % modulo in use. maybe im forgetting where to utilize return in this scenario.