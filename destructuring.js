// You can destructure arrays and objects

// Array destructuring
const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "ignored", "peter", "bob", "anna", "kelly"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

// Double comma ignores the element (See friends array for example)
const [john, , peter, bob, anna, kelly, susan] = friends;

console.log(john, peter, bob);
console.log(john, peter, bob, anna, kelly);
console.log(john, peter, bob, anna, kelly, susan);
console.log(john, peter, bob, anna, kelly, susan);
// Swap Variables
let first = "bob";
let second = "john";

let temp = second;
second = first;
first = temp;

[second, first] = [first, second];

// Object Destructuring
const user = {
  id: 42,
  is_verified: true,
};

const { id, is_verified } = user;

console.log(id); // 42
console.log(is_verified); // true
