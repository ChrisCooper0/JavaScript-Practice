// Checks is str is a palindrome
isPalindrome = (str) => {
  let newStr = str.replace(/\W+|_/g, "").toLowerCase();
  return newStr === newStr.split("").reverse().join("") ? true : false;
};
console.log(isPalindrome("Racecar"));

// Same as above but uses template strings
isPalindrome = (str) => {
  let newStr = str.replace(/\W+|_/g, "").toLowerCase();
  if (newStr === newStr.split("").reverse().join("")) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
};

isPalindrome("Rotator");
