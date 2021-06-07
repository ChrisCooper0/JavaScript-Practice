let obj = {
  name: "Chris",
  age: 28,
  likesJavaScript: true,
  nestedObj: {
    canAccess: true,
  },
};

// Dot notation if key is one word
console.log(obj.name);

// Bracket notation for multi-word strings

// Update or add if new key objName.key = ‘value’
obj.addKey = "addValue";
console.log(obj);

// Delete from object delete objName.key or delete objName[key]
delete obj.age;
console.log(obj);

// Access nested objects with dot notation
console.log(obj.nestedObj.canAccess);

// Access nested objects with bracket notation
console.log(obj["nestedObj"].canAccess);
console.log(obj["nestedObj"]["canAccess"]);

// snippet 1
let movie = {
  title: "Fight Club",
  year: 1999,
  genre: ["drama", "thriller"],
  starring: ["Brad Pitt", "Edward Norton"],
};

console.log(movie.year); // 1999
console.log(movie["title"]); // Fight Club
console.log(movie.genre); // ['drama', 'thriller']
console.log(movie.genre[0]); // drama
console.log(movie.genre[1]); // thriller
console.log(movie.duration); // undefined
console.log(movie["starring"][1]); // Edward Norton
console.log(movie.starring.length); // 2

// snippet 2
let restaurant = {
  name: "Bob's Burgers",
  location: "123 Ocean Avenue",
  owners: ["Bob Belcher", "Linda Belcher"],
  established: 2011,
  menu: ["burgers", "fries", "shakes"],
};

console.log("owners" in restaurant); // true
console.log("employees" in restaurant); // false

let someKey = "menu";
console.log(someKey in restaurant); // true

console.log(restaurant.menu); // ["burgers", "fries", "shakes"]
console.log(restaurant["menu"]); // ["burgers", "fries", "shakes"]
console.log(restaurant[someKey]); // ["burgers", "fries", "shakes"]
console.log(restaurant.someKey); // undefined
console.log(restaurant.menu.includes("fries")); // true

// snippet 3
let dog = {
  name: "Manny",
  age: 5,
  breed: "pug",
  color: "fawn",
  favoriteFoods: ["bacon"],
};

console.log(dog.age); // 5
console.log(dog.breed); // pug
console.log(dog.favoriteFoods); // ['bacon']

dog.age++;
dog.breed = dog.breed.toUpperCase();
dog.favoriteFoods.push("sausage");

console.log(dog.age); // 6
console.log(dog.breed); // PUG
console.log(dog.favoriteFoods); // ['bacon', 'sausage']

for (let property in dog) {
  console.log(property + " is " + dog[property]);
}

//name is Manny
// age is 6
// breed is PUG
// color is fawn
// favoriteFoods is bacon,sausage

// snippet 4
let recipe = {
  name: "Old Fashioned Pancakes",
  difficulty: "easy",
  tasty: true,
  ingredients: ["eggs", "milk", "butter", "flour", "sugar"],
};

console.log(recipe.name); // Old Fashioned Pancakes
console.log(recipe["name"]); // Old Fashioned Pancakes
console.log(recipe.ingredients.length); // 5
console.log(recipe.calories); // undefined

let someVariable = "difficulty";
console.log(recipe[someVariable]); // easy
console.log(recipe.someVariable); // undefined

for (let i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}

// eggs
// milk
// butter
// flour
// sugar
