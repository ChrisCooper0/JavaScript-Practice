// snippet 1

let flim = function () {
  console.log("leak");
  flam();
  console.log("geek");
};

let flam = function () {
  console.log("beak");
  console.log("sneak");
};

flim();
// leak
// beak
// sneak
// geek

// snippet 2

let alice = function (n) {
  for (let i = 0; i <= n; i++) {
    bob(i);
  }
};

let bob = function (n) {
  if (n % 2 === 0) {
    console.log("good");
  } else {
    console.log("bad");
  }
};

alice(4);
// good
// bad
// good
// bad
// good

// snippet 3

let foo = function () {
  for (let i = 0; i < 5; i++) {
    console.log("i = " + i);
    bar();
  }
};

let bar = function () {
  for (let j = 0; j < 5; j++) {
    console.log("  j = " + j);
  }
};

foo();
// i = 0
//   j = 0
//   j = 1
//   j = 2
//   j = 3
//   j = 4
// i = 1
//   j = 0
//   j = 1
//   j = 2
//   j = 3
//   j = 4
// i = 2
//   j = 0
//   j = 1
//   j = 2
//   j = 3
//   j = 4
// i = 3
//   j = 0
//   j = 1
//   j = 2
//   j = 3
//   j = 4
// i = 4
//   j = 0
//   j = 1
//   j = 2
//   j = 3
//   j = 4

// Write a function `doubleVowel` that accepts a string as an argument. The function should return
// the string where every occurrence of a vowel in the original string is repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

let doubleVowel = (str) => {
  let vowels = "aeiou";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      newStr += str[i] + str[i];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(doubleVowel("runner")); // 'ruunneer'
console.log(doubleVowel("stoplight")); // 'stoopliight'
console.log(doubleVowel("gardener")); // 'gaardeeneer'

// Write a function `isPrime` that accepts a number as an argument. The function should return a
// boolean indicating whether or not the given number is prime. A prime number is a number that is
// only divisible by 1 and itself. The smallest prime number is 1.
//
// For example, 11 is a prime because it is only divisible by 1 and 11.
// For example, 8 is not a prime because it is divisible by 1, 2, 4, and 8

let isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1; // is prime but also greater than one, rather than returning true
};

console.log(isPrime(11)); // true
console.log(isPrime(8)); // false
console.log(isPrime(7)); // true
console.log(isPrime(21)); // false
console.log(isPrime(2)); // true
console.log(isPrime(15)); // false
console.log(isPrime(1)); // false

// Write a function `pickPrimes` that accepts an array of numbers as an argument. The function should
// return an array containing only the prime numbers. A prime number is a number that is
// only divisible by 1 and itself. The smallest prime number is 1.

let pickPrimes = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // uses isPrime function above
    if (isPrime(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(pickPrimes([12, 3, 7, 18, 11])); // [3, 7, 11]
console.log(pickPrimes([17, 23, 9, 42])); // [17, 23]
console.log(pickPrimes([4, 2048, 100, 55])); // []
