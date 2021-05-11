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

// Write a function `startsWithR` that accepts a string as an argument and returns a boolean indicating
// whether or not the string starts with 'r' or 'R'.

let startsWithR = (str) => {
  return str[0] === "R" || str[0] === "r";
};

console.log(startsWithR("roger that")); // true
console.log(startsWithR("Row, row, row your boat")); // true
console.log(startsWithR("slip")); // false
console.log(startsWithR("Taxicab")); // false

// Write a function `longer` that accepts two strings as arguments. The function should return the
// string that is longer. If the strings have the same length, then return the first string.

let longer = (str1, str2) => {
  if (str1.length >= str2.length) {
    return str1;
  } else if (str1.length < str2.length) {
    return str2;
  } else {
    return str1 + str2;
  }
};

console.log(longer("drum", "piranha")); // 'piranha'
console.log(longer("basket", "fork")); // 'basket'
console.log(longer("flannel", "sustainable")); // 'sustainable'
console.log(longer("disrupt", "ability")); // 'disrupt'
console.log(longer("bird", "shoe")); // 'bird'

// Write a function `parity` that accepts a number as an argument. The function should return the
// string 'even' if the number is even. It should return the string 'odd' if the number is odd.

let parity = (num) => {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
console.log(parity(5)); // 'odd'
console.log(parity(7)); // 'odd'
console.log(parity(13)); // 'odd'
console.log(parity(32)); // 'even'
console.log(parity(10)); // 'even'
console.log(parity(602348)); // 'even'

// Write a function `oneOrNone` that accepts two booleans as arguments. The function should return true
// if exactly one of the arguments is true. If BOTH arguments are true, then it should return false.

let oneOrNone = (bool1, bool2) => {
  if (bool1 === true && bool2 === true) {
    return false;
  } else if (bool1 === true || bool2 === true) {
    return true;
  } else {
    return false;
  }
};

console.log(oneOrNone(false, false)); // false
console.log(oneOrNone(true, false)); // true
console.log(oneOrNone(false, true)); // true
console.log(oneOrNone(true, true)); // false

// Write a function `endsInLy` that accepts a string as an argument and returns a boolean indicating
// whether or not the string ends in the substring 'ly'.

let endsInLy = (str) => {
  if (str[str.length - 1] === "y" && str[str.length - 2] === "l") {
    return true;
  } else {
    return false;
  }
};

// Alternative answer using the .endsWith() built in method
// let endsInLy = (str) => {
//   return str.endsWith("ly");
// };

console.log(endsInLy("pretty")); // false
console.log(endsInLy("instant")); // false
console.log(endsInLy("analytic")); // false
console.log(endsInLy("timidly")); // true
console.log(endsInLy("fly")); // true
console.log(endsInLy("gallantly")); // true

// Write a function `funnySound` that accepts two strings as arguments. The function should return a
// new string containing the first three characters of both strings concatenated together.

// You can assume that the arguments are both at least three characters long.

let funnySound = (str1, str2) => {
  return str1.slice(0, 3) + str2.slice(0, 3);
};

console.log(funnySound("tiger", "spoon")); // 'tigspo'
console.log(funnySound("computer", "phone")); // 'compho'
console.log(funnySound("skate", "bottle")); // 'skabot'
console.log(funnySound("frog", "ashtray")); // 'froash'

// Write a function `stringSize` that accepts a string as an argument. The function should return the
// string 'small' if the argument is shorter than 5 characters, 'medium' if it is exactly 5 characters, and
// 'large' if it is longer than 5 characters.

let stringSize = (str) => {
  if (str.length < 5) {
    return "small";
  } else if (str.length === 5) {
    return "medium";
  } else {
    return "large";
  }
};

console.log(stringSize("cat")); // 'small'
console.log(stringSize("bell")); // 'small'
console.log(stringSize("ready")); // 'medium'
console.log(stringSize("shirt")); // 'medium'
console.log(stringSize("shallow")); // 'large'
console.log(stringSize("intelligence")); // 'large'

// Write a function `wackyWord` that accepts two strings as arguments. The function should return a new
// string containing the first three characters of the first string concatenated with the last two
// character of the second string.

// You can assume that the first argument has a length of at least three and the second argument has a
// length of at least two.

let wackyWord = (str1, str2) => {
  return str1.slice(0, 3) + str2.slice(-2);
};

console.log(wackyWord("very", "kindly")); // 'verly'
console.log(wackyWord("forever", "sick")); // 'forck'
console.log(wackyWord("cellar", "door")); // 'celor'
console.log(wackyWord("bagel", "sweep")); // 'bagep'
