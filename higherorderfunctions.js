// snippet-1
let foo = function (s) {
  return s.slice(1).toUpperCase();
};

let arr = ["mashy", "brando", "thanasi"];
let res = arr.map(foo);
console.log(res); // [ 'ASHY', 'RANDO', 'HANASI' ]

// snippet-2
let friends = ["nader", "matty", "jennifer", "lora"];

let chosen = friends[0];

friends.forEach(function (friend) {
  if (friend.length > chosen.length) {
    chosen = friend;
  }
});

console.log(chosen); // jennifer

// snippet-3
let isEven = function (n) {
  return n % 2 === 0;
};

let isOdd = function (n) {
  return !isEven(n);
};

let nums1 = [42, 3, 8, 9];
console.log(nums1.filter(isEven)); // [ 42, 8 ]

console.log(nums1.map(isOdd)); // [ false, true, false, true ]

// snippet-4
let doggos = [
  { name: "bella", type: "canine", age: 4, breed: "yorkshire terrier" },
  { name: "manny", type: "canine", age: 2, breed: "pug" },
  { name: "yoshi", type: "canine", age: 3, breed: "german shepherd" },
  { name: "blossom", type: "canine", age: 3, breed: "german shepherd" },
];

let result1 = doggos.every(function (ele) {
  return ele.type === "canine";
});

console.log(result1); // true

let result2 = doggos.every(function (ele) {
  return ele.breed === "german shepherd";
});

console.log(result2); // false

let result3 = doggos.some(function (ele) {
  return ele.breed === "german shepherd";
});

console.log(result3); // true

let isOld = function (person) {
  return person.age > 5;
};

let result4 = doggos.some(isOld);

console.log(result4); // false

// snippet-5

let nums = [3, 7, 2, 9];

let res1 = nums.reduce(function (a, b) {
  return a + b;
});

console.log(res1); // 21

let res2 = nums.reduce(function (a, b) {
  return a + b;
}, -10);

console.log(res2); // 11

let res3 = nums.reduce(function (a, b) {
  if (b < a) {
    return b;
  } else {
    return a;
  }
});

console.log(res3); // 2

// Write a function `forEachSum` that accepts an array of numbers as an argument and returns the total
// sum of all numbers.
// Your function must utilize the native Array#forEach method.

let forEachSum = (arr) => {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
};

console.log(forEachSum([10, 3, 5])); // 18
console.log(forEachSum([-6, 7, 9, 4])); // 14
console.log(forEachSum([])); // 0

// Write a function `pickAdults` that accepts an array of person objects and returns the objects that
// have an age of at least 18.
// Your function must utilize the native Array#filter method.

let pickAdults = (arr) => {
  let over18 = arr.filter((people) => {
    return people.age >= 18;
  });
  return over18;
};

let people = [
  { name: "alice", age: 22 },
  { name: "bob", age: 37 },
  { name: "pam", age: 16 },
  { name: "jim", age: 18 },
];
console.log(pickAdults(people));
// [ { name: 'alice', age: 22 }, { name: 'bob', age: 37 }, { name: 'jim', age: 18 } ]

let people2 = [
  { name: "betty", age: 23 },
  { name: "ben", age: 15 },
  { name: "yansi", age: 21 },
];
console.log(pickAdults(people2));
// [ { name: 'betty', age: 23 }, { name: 'yansi', age: 21 } ]
