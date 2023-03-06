// QUESTION 1
// Mutation in context of JavaScript arrays is basically changing the array itself instead of returning a new array with the new changes whereas Non-Mutation is returning a whole new array which has all the changes.

// Examples of Mutation array methods are
// array.splice()
// array.unshift()
// array.sort()
// array.push(),
// array.fill()

// Examples of non-mutation array methods are
// array.concat(),
// array.includes()
// array.indexOf
// array.join()
// array.lastIndexOf
// array.slice()

// QUESTION 2
let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

// add 'kotlin' to the end of the array
languages.push("Kotlin");
console.log(languages);
//[ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ]

// add Java after Ruby
languages.splice(3, 0, "Java");
console.log(languages);
// [ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]

//Remove the first item in the array
languages.shift("C#");
console.log(languages);
// [ 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]

// Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift("Scala", "Swift");
console.log(languages);
/*
[
  'Scala',      'Swift',
  'JavaScript', 'Ruby',
  'Java',       'PHP',
  'Python',     'Kotlin'
]
 */

// Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, "Go", "Rust");
console.log(languages);
/*
[
  'Scala',      'Swift',
  'JavaScript', 'Ruby',
  'Java',       'Go',
  'Rust',       'Python',
  'Kotlin'
]
*/

//QUESTION 3
let fruit = ["apple", "mango", "banana"];
function changeFruit(fruit) {
  fruit[2] = "orange";
  return fruit;
}
console.log(changeFruit(fruit)); // [ 'apple', 'mango', 'orange' ]

// QUESTION 4
function maxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

let numArray = [4, 5, 10, -2];
let maxValue = maxOfArray(numArray);
console.log("Maximum value is " + maxValue)
// Maximum value is 10

// QUESTION 5
function valTimesIndex(arrayOfNum) {
  return arrayOfNum.map(function (value, index) {
    return value * index;
  });
}

let arrayOfNum = [5, 10, 15];
let multipliedArray = valTimesIndex(arrayOfNum);

console.log(multipliedArray);
// [ 0, 10, 30 ]

