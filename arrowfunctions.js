// ES6 Arrow functions

// Arrow function with no parameter
const functionOne = () => {
  console.log("Hello");
};

// Arrow function with one parameter
const functionTwo = (parameter) => {
  console.log("Hello");
};

// Arrow function with multiple parameters
const functionThree = (param1, param2, param3) => {
  console.log(`${param1}, ${param2}, ${param3}`);
};

functionOne();
functionTwo();
functionThree(1, 2, 3);

// Examples

// Write a function `isDivBy4` that accepts a number as an argument. The function should return a
// boolean indicating whether or not the number is divisible by 4.
let isDivBy4 = (num) => {
  if (num % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isDivBy4(8)); // true
console.log(isDivBy4(12)); // true
console.log(isDivBy4(24)); // true
console.log(isDivBy4(9)); // false
console.log(isDivBy4(10)); // false

// Write a function `keepItQuiet` that accepts a string as an argument. The function should return the
// lowercase version of the string with 3 periods added to the end of it.

let keepItQuiet = (str) => {
  return str.toLowerCase() + "...";
};

console.log(keepItQuiet("HOORAY")); // 'hooray...'
console.log(keepItQuiet("Doggo")); // 'doggo...'
console.log(keepItQuiet("WHAT?!?!")); // 'what?!?!...'

// Write a function `isLong` that accepts a string as an argument. The function should return a boolean
// indicating whether or not the string is longer than 5 characters

let isLong = (str) => {
  return str.length > 5;
};

console.log(isLong("pie")); // false
console.log(isLong("kite")); // false
console.log(isLong("kitty")); // false
console.log(isLong("telescope")); // true
console.log(isLong("thermometer")); // true
console.log(isLong("restaurant")); // true

// Write a function `half` that accepts a number as an argument. The function should return half of the
// number.

let half = (num) => {
  return num / 2;
};

console.log(half(8)); // 4
console.log(half(15)); // 7.5
console.log(half(90)); // 45

// Write a function `endsWithT` that accepts a string as an argument. The function should return a
// boolean indicating whether or not the string ends with the character 't'.

let endsWithT = (str) => {
  let lastChar = str[str.length - 1];
  return lastChar === "t";
};

console.log(endsWithT("smart")); // true
console.log(endsWithT("racket")); // true
console.log(endsWithT("taco")); // false
console.log(endsWithT("boomerang")); // false

// Write a function `average` that accepts three numbers as arguments. The function should return the
// average of the three numbers.

let average = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3;
};

console.log(average(3, 10, 8)); // 7
console.log(average(10, 5, 12)); // 9
console.log(average(6, 20, 40)); // 22
