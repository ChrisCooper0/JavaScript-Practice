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

// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people3 = [
  { name: "bill", age: 20, position: "developer" },
  { name: "ben", age: 25, position: "designer" },
  { name: "boris", age: 30, position: "the boss" },
  { name: "bernard", age: 35, position: "intern" },
];
// filter
const youngPeople = people3.filter((person) => {
  // if (person.age < 30) {
  //   return person;
  // }
  return person.age <= 25;
});
console.log(youngPeople); // Array with bill & ben objects

const developers = people3.filter((person) => person.position === "developer");
console.log(developers); // Array with bill object

// no match
const seniorDevs = people3.filter((item) => item.position === "senior dev");
console.log(seniorDevs); // Empty array

// find
const ben = people3.find((person) => person.name === "ben");
console.log(ben); // Array with ben object, returns undefined if not found

// no match
const oldPerson = people3.find((person) => person.age > 35);
console.log(oldPerson); // undefined

// multiple matches
const randomPerson = people3.find((person) => person.age < 35);
console.log(randomPerson); // Bill object

const bill = people3.filter((person) => person.name === "bill");
console.log(bill); // Arr with bill object

console.log(ben.position); // designer
console.log(bill[0].position); // developer

// Reduce to flatten an array

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);

console.log(flat); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(data.flat()); // Can also use the built in .flat() method
console.log(data.flat(2)); // Can also use the built in .flat(depth) method

// Creates a new array for even numbers using .filter()
const list = [1, 2, 3, 4, 5, 6];
const evenList = list.filter((x) => x % 2 === 0);
console.log(evenList); // [2, 4, 6]
