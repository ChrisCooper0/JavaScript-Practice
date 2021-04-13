let arr = [1, 2, 3, "four", 5, true, false];

// Length of array
console.log(arr.length);

// Access an array item
// index position
console.log(arr[3]);
// .length - 1 for last item
console.log(arr[arr.length - 1]);

// Array methods
// .unshift() = adds to start
arr.unshift("Zero");
console.log(arr);

// .push() = adds to end
arr.push(8);
console.log(arr);

// .shift() = removes from start
arr.shift();
console.log(arr);

// .pop() = removes from end
arr.pop();
console.log(arr);

// .splice() = removes consecutive elements between two parameters e.g. .splice(2,2)
arr.splice(2, 3);
// Third parameter can quickly add element(s) to start
arr.splice(0, 1, "One");
console.log(arr);

// .slice() = extracts a given number of elements to a new array
let newArr = arr.slice(1, 3);
console.log(newArr);
