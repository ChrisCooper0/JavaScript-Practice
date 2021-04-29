// ... Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.

// Array example
let numbers = [1, 2, 3];
let newNumbers = [0, ...numbers, 4, 5, 6];
console.log(newNumbers); // Logs [0, 1, 2, 3, 4, 5, 6]

// Object example
let obj = { 1: "One", 2: "Two", 3: "Three" };
let spreadObj = { ...obj, 4: "Four" };
console.log(spreadObj); // Clones obj and adds to end
