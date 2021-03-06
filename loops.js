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

// Break statement - Comes out of the loop
for (let i = 0; i < 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i); // 0, 1, 2, 3
}

// Continue statement - Breaks on one iteration of the loop based on a condition
for (let i = 0; i < 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i); // 0, 1, 2, 3, 5, 6, 7, 8, 9
}

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

// Write a function named `oddSum(max)` that accepts a max number as an argument. The function should
// return the total sum of all odd numbers from 1 to the max, inclusive.
//
// For example, oddSum(10) should return 25 because 1 + 3 + 5 + 7 + 9 = 25

let oddSum = (max) => {
  let sum = 0;
  for (let i = 1; i <= max; i++) {
    if (i % 2 === 1) {
      sum += i;
    }
  }
  return sum;
};

console.log(oddSum(10)); // 25
console.log(oddSum(5)); // 9

// Write a function named `stringRepeater(str, num)` that accepts a string and a number as arguments.
// The function should return a new string consisting of the `str` repeated `num` number of times.

let stringRepeater = (str, num) => {
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
};

console.log(stringRepeater("q", 4)); // 'qqqq'
console.log(stringRepeater("go", 2)); // 'gogo'
console.log(stringRepeater("tac", 3)); // 'tactactac'

// Write a function named `productUpTo(max)` that accepts a max number as an argument. The function
// should return the total product of all whole numbers from 1 to the max, inclusive. A product is a
// number obtained from multiplying numbers together.
//
// For example, productUpTo(4) should return 24 because 1 * 2 * 3 * 4 = 24

let productUpTo = (max) => {
  let product = 1;
  for (let i = 1; i <= max; i++) {
    product *= i;
  }
  return product;
};

console.log(productUpTo(4)); // 24
console.log(productUpTo(5)); // 120
console.log(productUpTo(7)); // 5040

// Write a function named `divByEither(num1, num2, max)` that accepts three numbers as arguments.
// The function should print out all positive numbers less than max that are divisible by num1 or num2.
// The function doesn't need to return any value. It should just print to the terminal.

let divByEither = (num1, num2, max) => {
  for (let i = 1; i < max; i++) {
    if (i % num1 === 0 || i % num2 === 0) {
      console.log(i);
    }
  }
};

divByEither(4, 3, 16);
// prints
//  3
//  4
//  6
//  8
//  9
//  12
//  15

divByEither(7, 5, 20);
// prints
//  5
//  7
//  10
//  14
//  15

// Write a function `divisibleRange(min, max, num)` that accepts three numbers as arguments. The
// function should print all numbers between `min` and `max` (exclusive) that are also divisible by
// num.

let divisibleRange = (min, max, num) => {
  for (let i = min; i <= max; i++) {
    if (i % num === 0) {
      console.log(i);
    }
  }
};

divisibleRange(17, 40, 9);
// prints
//  18
//  27
//  36

divisibleRange(10, 24, 4);
// prints
//  12
//  16
//  20

// Write a function `reverseIterate` that accepts a string as an argument. The function should print
// the characters of the string one by one, in reverse order. The function doesn't need to return any
// value. It should just print to the terminal.

let reverseIterate = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
};

reverseIterate("carrot");
// prints
//  t
//  o
//  r
//  r
//  a
//  c

reverseIterate("box");
// prints
//  x
//  o
//  b

// Write a function `removeCapitals` that accepts a string as an argument. The function should return a
// new version of the string with all capital letters removed.

let removeCapitals = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(removeCapitals("fOrEver")); // 'frver'
console.log(removeCapitals("raiNCoat")); // 'raioat'
console.log(removeCapitals("cElLAr Door")); // 'clr oor'

// Write a function `raisePower(base, exponent)` that accepts two numbers, `base` and `exponent`. The
// function should return `base` raised to the `exponent` power.
//
// For example, raisePower(2, 5) should return 32 because 2 * 2 * 2 * 2 * 2 = 32
// For example, raisePower(4, 3) should return 64 because 4 * 4 * 4 = 64

let raisePower = (base, exponent) => {
  let num = 1;
  for (let i = 1; i <= exponent; i++) {
    num *= base;
  }
  return num;
};
console.log(raisePower(2, 5)); // 32
console.log(raisePower(4, 3)); // 64
console.log(raisePower(10, 4)); // 10000
console.log(raisePower(7, 2)); // 49

// Write a function `censorE` that accepts a string as an argument. The function should return the a new
// version of string where all characters that are 'e's are replaced with '*'s.

let censorE = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "e") {
      console.log("*");
    } else {
      console.log(str[i]);
    }
  }
};

console.log(censorE("speedy")); // 'sp**dy'
console.log(censorE("pending")); // 'p*nding'
console.log(censorE("scene")); // 'sc*n*'
console.log(censorE("heat")); // 'h*at'

// Write a function `fizzBuzz` that accepts a max number as an argument. The function should
// print all numbers less than or equal to max that are divisible by either 3 or 5 but not both 3
// and 5. The function doesn't need to return any value. It should just print to the terminal.

let fizzBuzz = (max) => {
  for (let i = 0; i <= max; i++) {
    if ((i % 5 === 0 || i % 3 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      console.log(i);
    }
  }
};

fizzBuzz(18);
// prints
//  3
//  5
//  6
//  9
//  10
//  12
//  18

fizzBuzz(33);
// prints
//  3
//  5
//  6
//  9
//  10
//  12
//  18
//  20
//  21
//  24
//  25
//  27
//  33

// Write a function `removeVowels` that accepts a string as an argument. The function should return
// a version of the string where all vowels are removed.

let removeVowels = (str) => {
  let newStr = "";
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(removeVowels("jello")); // jll
console.log(removeVowels("sensitivity")); // snstvty
console.log(removeVowels("cellar door")); // cllr dr

// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.

let removeFirstVowel = (str) => {
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return str.slice(0, i) + str.slice(i + 1);
    }
  }
  return str;
};

console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'

// Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
// should return the same sentence where words longer than 4 characters have their vowels removed.

// Utilised removeVowels function from line 457
let shortenLongWords = (str) => {
  let words = str.split(" ");
  let newStr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      newStr.push(removeVowels(words[i]));
    } else {
      newStr.push(words[i]);
    }
  }
  return newStr.join(" ");
};

console.log(shortenLongWords("they are very noble people")); // 'they are very nbl ppl'
console.log(shortenLongWords("stick with it")); // 'stck with it'
console.log(shortenLongWords("ballerina, you must have seen her")); // 'bllrna, you must have seen her'
