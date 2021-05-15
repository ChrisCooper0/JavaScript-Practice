let arr = [1, 2, 3, "four", 5, true, false];

// Length of array
console.log(arr.length);

// Find index of an item in an array
// IndexOf
console.log(arr.indexOf(3)); // Index position 2

// Access an array item
// index position
console.log(arr[3]);

// Set index position
let newArray = [1, 2, 3, 4];
let i = 2;
console.log(newArray[i]); // Access 2nd index of arr - 3

// .length - 1 for last item
console.log(arr[arr.length - 1]);

// Iterate through an array
let words = ["a", "test", "array", "in", "javascript"];
for (let i = 0; i < words.length; i++) {
  console.log(words[i]);
}

// Add items from one array to another, based on criteria
let longWords = [];
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (word.length >= 4) {
    longWords.push(word);
  }
}
console.log(longWords); // ['test', 'array', 'javascript']

// Array methods

// .unshift() = adds to start
arr.unshift("Zero");
console.log(arr);

// .push() = adds to end
arr.push(8);
console.log(arr);

// .shift() = removes from start
arr.shift();
console.log(arr);

// .pop() = removes from end
arr.pop();
console.log(arr);

// .splice() = removes consecutive elements between two parameters e.g. .splice(2,2)
arr.splice(2, 3);
// Third parameter can quickly add element(s) to start
arr.splice(0, 1, "One");
console.log(arr);

// .slice() = extracts a given number of elements to a new array
let newArr = arr.slice(1, 3);
console.log(newArr);

// Examples
