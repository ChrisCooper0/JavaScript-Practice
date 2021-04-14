// Iterator methods
// All iterator methods take a callback function that can be pre-defined, or a function expression, or an arrow function

// .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined
let arr = ["One", "Two", 3, "Four", 5, true, null];
arr.forEach((el) => {
  console.log(el);
});

// .map() executes the same code on every element in an array and returns a new array with the updated elements
arr.map((el) => {
  console.log(el);
});

// .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria

const words = ["One", "Two", "Three", "Four", "Five"];
const result = words.filter((word) => word.length <= 3);
console.log(result);

// .findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// expected output: 3

// .indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present
const numbers = ["One", "Two", "Three", "Four", "Two"];
console.log(numbers.indexOf("Two"));
// expected output: 1

// start from index 2
console.log(numbers.indexOf("Two", 2));
// expected output: 4

console.log(numbers.indexOf("Five"));
// expected output: -1

// .reduce() iterates through an array and takes the value of the elements and returns a single value
const array2 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array2.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array2.reduce(reducer, 5));
// expected output: 15
