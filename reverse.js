// Reverse a string with pre-built methods
function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("Test"));

// Reverses a string with a decrementing loop
function reverseLoop(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverseLoop("Test"));
