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

// Write a function `total` that accepts an array of numbers as an argument. The function should return
// the total sum of all elements of the array.

let total = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(total([3, 2, 8])); // 13
console.log(total([-5, 7, 4, 6])); // 12
console.log(total([7])); // 7
console.log(total([])); // 0

// Write a function `stayPositive` that accepts an array of numbers as an argument. The function should
// return an array containing only the positive numbers.

let stayPositive = (num) => {
  let positives = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] >= 0) {
      positives.push(num[i]);
    }
  }
  return positives;
};

console.log(stayPositive([10, -4, 3, 6])); // [10, 3, 6]
console.log(stayPositive([-5, 11, -40, 30.3, -2])); // [11, 30.3]
console.log(stayPositive([-11, -30])); // []

// Write a function `bleepVowels` that accepts a string as an argument. The function should return
// a new string where all vowels are replaced with `*`s. Vowels are the letters a, e, i, o, u.

let bleepVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      newStr += "*";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'

// Write a function `filterLongWords` that accepts an array of strings as an argument. The function
// should return a new array containing only the strings that are less than 5 characters long.

let filterLongWords = (arr) => {
  let longWords = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 5) {
      longWords.push(arr[i]);
    }
  }
  return longWords;
};

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']

// Write a function `numOdds` that accepts an array of numbers as an argument. The function should
// return a number representing the count of odd elements in the array.

let numOdds = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      count++;
    }
  }
  return count;
};

console.log(numOdds([4, 7, 2, 5, 9])); // 3
console.log(numOdds([11, 31, 58, 99, 21, 60])); // 4
console.log(numOdds([100, 40, 4])); // 0

// Write a function `stringsToLengths` that accepts an array of strings as an argument. The function
// should return a new array containing the lengths of the elements of the original array.

let stringsToLengths = (arr) => {
  let arrLength = [];
  for (let i = 0; i < arr.length; i++) {
    arrLength.push(arr[i].length);
  }
  return arrLength;
};

console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]

// Write a function `divisors` that accepts a number as an argument. The function should return an
// array containing all positive numbers that can divide into the argument.

let divisors = (num) => {
  let numbers = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      numbers.push(i);
    }
  }
  return numbers;
};

console.log(divisors(15)); // [1, 3, 5, 15]
console.log(divisors(7)); // [1, 7]
console.log(divisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
