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
