// For loop
forLoop = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// For In loop
forInLoop = (obj) => {
  for (let i in obj) {
    console.log(obj[i]);
  }
};

// For Of loop
forOfLoop = (arr) => {
  for (let i of arr) {
    console.log(i);
  }
};

// While loop
whileLoop = (arr) => {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
};

// Unlike the while loop (runs while true), do while runs at least once whether or not the condition is true.

//Do While loop
let i = 1;
const n = 5;
// do...while loop from 1 to 5
do {
  console.log(i);
  i++;
} while (i <= n);

forLoop([1, 2, 3]);
forInLoop({
  4: "Four",
  5: "Five",
  6: "Six",
});
forOfLoop([7, 8, 9]);
whileLoop([10, 11, 12]);

// Loop examples

// Write a function `oneToFour` that prints all whole numbers from one to four, inclusive. The function
// takes in no arguments and doesn't need to return any value. It should just print to the terminal.

let oneToFour = () => {
  for (let i = 1; i <= 4; i++) {
    console.log(i);
  }
};

oneToFour();
// prints
//  1
//  2
//  3
//  4

// Write a function `countUp(max)` that accepts a max number as an argument. The function should print
// all numbers from 1 up to and including the max. The function doesn't need to return any value. It
// should just print to the terminal.

let countUp = (max) => {
  for (let i = 1; i <= max; i++) {
    console.log(i);
  }
};

countUp(5);
// prints
//  1
//  2
//  3
//  4
//  5

countUp(3);
// prints
//  1
//  2
//  3

// Write a function `minToMax(min, max)` that accepts two numbers as arguments. The function should
// print all numbers from min to max inclusive. The function doesn't need to return any value. It
// should just print to the terminal.

let minToMax = (min, max) => {
  for (let i = min; i <= max; i++) {
    console.log(i);
  }
};

minToMax(5, 9);
// prints
//  5
//  6
//  7
//  8
//  9

minToMax(11, 13);
// prints
//  11
//  12
//  13

minToMax(20, 11);

// Write a function `stringIterate` that accepts a string as an argument. The function should print out
// each character of the string, one by one. The function doesn't need to return any value. It should
// just print to the terminal.

let stringIterate = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
};

stringIterate("celery");
// prints
//  c
//  e
//  l
//  e
//  r
//  y

stringIterate("hat");
// prints
//  h
//  a
//  t

// Write a function `evens(max)` that accepts a max number as an argument. The function should print
// all positive even numbers that are less than the max.

let evens = (max) => {
  for (let i = 1; i < max; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

evens(11);
// prints
//  2
//  4
//  6
//  8
//  10

evens(8);
// prints
//  2
//  4
//  6

// Write a function named `fiveMultiplesOf` that accepts a number as an argument. The function should
// print out the first five multiples of the given number. The function doesn't need to return any
// value. It should just print to the terminal.

let fiveMultiplesOf = (num) => {
  for (let i = 1; i <= 5; i++) {
    console.log(num * i);
  }
};

fiveMultiplesOf(7);
// prints
//  7
//  14
//  21
//  28
//  35

fiveMultiplesOf(3);
// prints
//  3
//  6
//  9
//  12
//  15

// Write a function named `sumUpTo(max)` that accepts a max number as an argument. The function should
// return the total sum of all whole numbers from 1 to the max, inclusive.
//
// For example, sumUpTo(4) should return 10 because 1 + 2 + 3 + 4 = 10.

let sumUpTo = (max) => {
  let sum = 0;
  for (let i = 1; i <= max; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumUpTo(4)); // 10
console.log(sumUpTo(5)); // 15
console.log(sumUpTo(2)); // 3

// Write a function named `noOhs` that accepts a string as an argument. The functions should print the
// characters of the string one by one except the character 'o'. The function doesn't need to return
// any value. It should just print to the terminal.

let noOhs = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "o") {
      console.log(str[i]);
    }
  }
};

noOhs("code");
// prints
//  c
//  d
//  e

noOhs("school");
// prints
//  s
//  c
//  h
//  l
