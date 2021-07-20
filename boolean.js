console.log(false); // false
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true

console.log(false && false); // false
console.log(false && true); // false
console.log(true && false); // false
console.log(true && true); // true

console.log(false || false); // false
console.log(false || true); // true
console.log(true || false); // true
console.log(true || true); // true

console.log(!false || false); // true
console.log(false || (true && true)); // true
console.log(false || !(true && true)); // false
console.log(!true && (false || true)); // false

console.log(true === false); // false
console.log(false === false); // true
console.log(false !== true); // true
console.log(!true === false); // true

console.log(2 + 3 === 5); // true
console.log(4 < 0); // false
console.log(10 >= 10); // true
console.log(10.3 >= 10); // true

console.log(100 / 2 === 50); // true
console.log(100 % 2 === 0); // true
console.log(11 % 2 === 0); // false
console.log(7.0 === 7); // true

console.log(13 % 5 > 0); // true
console.log("potato" === "potato"); // true
console.log("Tomato" === "tomato"); // false
console.log("42" === 42); // false
console.log(5 > 3 && 1 === 0); // false

// A function to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100, otherwise return false
const is100 = (a, b) => {
  return a === 100 || b === 100 || a + b === 100;
};

console.log(is100(100, 10)); // true
console.log(is100(100, 100)); //true
console.log(is100(10, 10)); //false
console.log(is100(10, 100)); //true
