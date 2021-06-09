// The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
// 1000 ms = 1 second.
// The function is only executed once. If you need to repeat execution, use the setInterval() method.
// Use the clearTimeout() method to prevent the function from running.
// Number is not an exact time, but instead a minimum delay

console.log("a");
let timmy = setTimeout(function () {
  console.log("b");
}, 1);
let timothy = setTimeout(function () {
  console.log("c");
}, 10);
let timer = setTimeout(function () {
  console.log("d");
}, 0);
console.log("e");

// a
// e
// b
// d
// c
