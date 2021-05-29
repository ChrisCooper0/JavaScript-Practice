// ... Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.

//For the rest parameter, the ... appears on the left side of the destructuring syntax.
// For the spread syntax, the ... appears on the right side of the destructuring syntax.

// Array example
let numbers = [1, 2, 3];
let newNumbers = [0, ...numbers, 4, 5, 6];
console.log(newNumbers); // Logs [0, 1, 2, 3, 4, 5, 6]

// Object example
let obj = { 1: "One", 2: "Two", 3: "Three" };
let spreadObj = { ...obj, 4: "Four" };
console.log(spreadObj); // Clones obj and adds to end

// Merge arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// Spread operator creates a clone of the orginal array
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
const saladCloned = [...salad];
console.log(saladCloned); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

salad === saladCloned; // false
